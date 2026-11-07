var V=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config={},this._hass=null,this._animFrame=null,this._lastTimestamp=0,this._particles={},this._viewMode="flow",this._historyPoints=this.loadStoredHistory(),this._historyFetched=!1,this._lastHistoryFetchTime=0,this._isScrubbing=!1,this._cachedSolarCoords=[],this._cachedGridCoords=[]}static getStubConfig(){return{title:"Live Energy Flow",view_mode:"flow",solar_entity:"sensor.solax_snm9wncrqy_pv1_power",grid_import_entity:"sensor.octopus_energy_electricity_22l3956422_3200000391421_current_demand",grid_export_entity:"sensor.solax_snm9wncrqy_exported_power",ev_entity:"input_number.zappi_ev_power",tv_entity:"sensor.living_room_tv_plug_power",lights_entity:"input_number.matter_lights_power",washer_entity:"sensor.washing_machine_power",fridge_entity:"sensor.refrigerator_power"}}setConfig(t){this._config={title:"Live Energy Flow",height:"100%",view_mode:"flow",solar_entity:"sensor.solax_snm9wncrqy_pv1_power",grid_import_entity:"sensor.octopus_energy_electricity_22l3956422_3200000391421_current_demand",grid_export_entity:"sensor.solax_snm9wncrqy_exported_power",ev_entity:"input_number.zappi_ev_power",tv_entity:"sensor.living_room_tv_plug_power",lights_entity:"input_number.matter_lights_power",washer_entity:"sensor.washing_machine_power",fridge_entity:"sensor.refrigerator_power",...t},this._config.view_mode&&(this._viewMode=this._config.view_mode),this._config.height&&(this.style.height=this._config.height),this.render()}set hass(t){this._hass=t,this.updateData(),(!this._historyFetched||Date.now()-this._lastHistoryFetchTime>300*1e3)&&this.fetchHistory()}connectedCallback(){this.startAnimation()}disconnectedCallback(){this.stopAnimation()}getCardSize(){return 5}calculateDuration(t){if(!t||t<=4)return 0;let s=6/(t/500);return Math.max(.8,Math.min(5,s))}getEntityNumeric(t,s=0){if(!this._hass||!t)return s;let e=this._hass.states[t];if(!e||e.state==="unavailable"||e.state==="unknown")return s;let n=parseFloat(e.state);return isNaN(n)?s:(e.attributes?.unit_of_measurement||"W").toLowerCase().trim()==="kw"?n*1e3:n}formatWatts(t){return`${Math.max(0,Math.round(t||0)).toLocaleString()} W`}formatKwSubtitle(t){let s=Math.max(0,t||0);return s>=1e3?`${(s/1e3).toFixed(2)} kW`:""}getLightsPowerFallback(){if(!this._hass?.states)return 0;let t=0;for(let[s,e]of Object.entries(this._hass.states))s.startsWith("light.")&&e.state==="on"&&t++;return t*7}getEvPowerFallback(){let t=this.getEntityNumeric("sensor.myenergi_zappi_30084500_internal_load_ct1",0);return t>0?t:this.getEntityNumeric("sensor.myenergi_zappi_30084500_power_ct_internal_load",0)}getSolarPowerFallback(){let t=this.getEntityNumeric("sensor.solax_snm9wncrqy_pv1_power",0),s=this.getEntityNumeric("sensor.solax_snm9wncrqy_pv2_power",0);return t+s>0?t+s:this.getEntityNumeric("sensor.solax_snm9wncrqy_ac_output_power",0)}getWasherPowerFallback(){let t=["sensor.washing_machine_power","sensor.kitchen_washing_machine_power","sensor.washer_power","sensor.washing_machine_plug_power","sensor.kitchen_washing_machine_plug_power","sensor.laundry_power","sensor.kitchen_washing_machine_daily_energy"];for(let s of t){let e=this.getEntityNumeric(s,-1);if(e>=0)return e}return 0}loadStoredHistory(){try{let t=localStorage.getItem("ha_energy_flow_24h_history_v1");if(t){let s=JSON.parse(t);if(Array.isArray(s)&&s.length>0){let e=Date.now()-864e5,n=s.filter(o=>typeof o.time=="number"&&o.time>=e).sort((o,a)=>o.time-a.time);if(n.length>0)return n}}}catch(t){console.warn("Could not read stored energy history:",t)}return[]}saveStoredHistory(){try{if(!this._historyPoints||!this._historyPoints.length)return;let t=Date.now()-24*3600*1e3,s=this._historyPoints.filter(e=>e.time>=t);localStorage.setItem("ha_energy_flow_24h_history_v1",JSON.stringify(s))}catch{}}async fetchHistory(){this._lastHistoryFetchTime=Date.now();let t=new Date,s=new Date(t.getTime()-24*3600*1e3),e=this._config.solar_entity,n=this._config.grid_import_entity,o=null;if(this._hass&&this._hass.callWS)try{o=await this._hass.callWS({type:"history/history_during_period",start_time:s.toISOString(),end_time:t.toISOString(),entity_ids:[e,n],minimal_response:!0,no_attributes:!0})}catch{}if(!o)try{let a=await fetch(`api/ha-history?start_time=${encodeURIComponent(s.toISOString())}&filter_entity_id=${encodeURIComponent(e+","+n)}`);if(a.ok){let l=await a.json();l&&l.history&&(o=l.history)}}catch{}if(!o&&this._hass&&this._hass.callApi)try{o=await this._hass.callApi("GET",`history/period/${s.toISOString()}?filter_entity_id=${e},${n}&minimal_response&no_attributes&end_time=${t.toISOString()}`)}catch{}o&&(this.processHaHistoryData(o,e,n,s,t),this._historyFetched=!0)}processHaHistoryData(t,s,e,n,o){let a=[],l=[];if(Array.isArray(t)){for(let r of t)if(Array.isArray(r)&&r.length>0){let c=r[0].entity_id;c===s?a=r:c===e&&(l=r)}!a.length&&!l.length&&t.length>=2&&(a=t[0]||[],l=t[1]||[])}else t&&typeof t=="object"&&(a=t[s]||[],l=t[e]||[]);if(!a.length&&!l.length)return;let i=(r,c)=>{if(!r||!r.length)return null;let u=null;for(let S=0;S<r.length;S++){let w=r[S],$=w.last_changed||w.last_updated||w.lu||w.t;if(($?new Date($).getTime():0)<=c){let y=parseFloat(w.state||w.s);isNaN(y)||(u=(w.attributes?.unit_of_measurement||w.uom||"").toLowerCase()==="kw"?y*1e3:y)}else break}return u},p=288,h=n.getTime(),m=(o.getTime()-h)/p,g=[];for(let r=0;r<=p;r++){let c=h+r*m,u=i(a,c),S=i(l,c);(u!==null||S!==null)&&g.push({time:c,solar:Math.max(0,u!==null?u:0),grid:Math.max(0,S!==null?S:0)})}if(g.length>5){let r=new Map;for(let c of g)r.set(Math.round(c.time/6e4),c);for(let c of this._historyPoints){let u=Math.round(c.time/6e4);r.has(u)||r.set(u,c)}this._historyPoints=Array.from(r.values()).sort((c,u)=>c.time-u.time),this.saveStoredHistory(),this.updateChart()}}updateData(){if(!this.shadowRoot)return;let t=this.getEntityNumeric(this._config.solar_entity,-1);t<0&&(t=this.getSolarPowerFallback());let s=this.getEntityNumeric(this._config.grid_import_entity,0),e=this.getEntityNumeric(this._config.grid_export_entity,0);e>25e3&&(e=0);let n=0,o=0;e>10?(o=e,n=0):s<-10?(o=Math.abs(s),n=0):(n=Math.max(0,s),o=0);let a=this.getEntityNumeric(this._config.ev_entity,-1);a<0&&(a=this.getEvPowerFallback());let l=this.getEntityNumeric(this._config.tv_entity,0),i=this.getEntityNumeric(this._config.lights_entity,-1);i<0&&(i=this.getLightsPowerFallback());let p=this.getEntityNumeric(this._config.washer_entity,-1);p<0&&(p=this.getWasherPowerFallback());let h=this.getEntityNumeric(this._config.fridge_entity,0),f=a+l+i+p+h,m=Math.max(0,n+t-o);m<f&&(m=f),this._flows={solar:{active:t>5,watts:t,dur:this.calculateDuration(t),color:"#f59e0b",pathId:"path-solar"},grid_import:{active:n>5,watts:n,dur:this.calculateDuration(n),color:"#3b82f6",pathId:"path-grid-import"},grid_export:{active:o>5,watts:o,dur:this.calculateDuration(o),color:"#10b981",pathId:"path-grid-export"},ev:{active:a>5,watts:a,dur:this.calculateDuration(a),color:"#06d6a0",pathId:"path-ev"},tv:{active:l>5,watts:l,dur:this.calculateDuration(l),color:"#38bdf8",pathId:"path-tv"},lights:{active:i>2,watts:i,dur:this.calculateDuration(i),color:"#fbbf24",pathId:"path-lights"},washer:{active:p>5,watts:p,dur:this.calculateDuration(p),color:"#f43f5e",pathId:"path-washer"},fridge:{active:h>5,watts:h,dur:this.calculateDuration(h),color:"#a78bfa",pathId:"path-fridge"}};let g=(x,k,F,E)=>{let D=this.shadowRoot.querySelector(`#val-${x}`),I=this.shadowRoot.querySelector(`#sub-${x}`),T=this.shadowRoot.querySelector(`#box-${x}`),G=this.shadowRoot.querySelector(`#pill-${x}`);D&&(D.innerText=this.formatWatts(k)),I&&(I.innerText=this.formatKwSubtitle(k)),T&&(T.classList.toggle("active",F),F?(T.style.borderColor=E,T.style.boxShadow=`0 0 20px ${E}33`):(T.style.borderColor="rgba(255, 255, 255, 0.12)",T.style.boxShadow="none")),G&&(G.innerText=F?"ACTIVE":"IDLE",G.className=`status-pill ${F?"active":"idle"}`)};g("solar",t,t>5,"#f59e0b");let r=o>5,c=r?o:n,u=c>5,S=r?"#10b981":"#3b82f6",w=r?"Grid Export":"Grid Import",$=this.shadowRoot.querySelector("#title-grid");$&&($.innerText=w),g("grid",c,u,S),g("home",m,m>5,"#0ea5e9"),g("ev",a,a>5,"#06d6a0"),g("tv",l,l>5,"#38bdf8"),g("lights",i,i>2,"#fbbf24"),g("washer",p,p>5,"#f43f5e"),g("fridge",h,h>5,"#a78bfa");let C=Date.now(),y=this._historyPoints.length?this._historyPoints[this._historyPoints.length-1]:null,R=y?C-y.time:999999,A=y?Math.abs(t-y.solar):9999,W=y?Math.abs(s-y.grid):9999;if(R>=2e4||A>=20||W>=20){this._historyPoints.push({time:C,solar:Math.max(0,Math.round(t||0)),grid:Math.max(0,Math.round(s||0))});let x=C-24*3600*1e3;this._historyPoints=this._historyPoints.filter(k=>k.time>=x),this.saveStoredHistory()}this.updateChart(t,s)}updateChart(t=null,s=null){if(!this.shadowRoot)return;let e=this._historyPoints||[],n=this.shadowRoot.querySelector("#chart-empty-state"),o=this.shadowRoot.querySelector("#chart-live-solar"),a=this.shadowRoot.querySelector("#chart-peak-solar"),l=this.shadowRoot.querySelector("#chart-total-solar"),i=this.shadowRoot.querySelector("#chart-live-grid"),p=this.shadowRoot.querySelector("#chart-peak-grid"),h=this.shadowRoot.querySelector("#chart-total-grid"),f=this.shadowRoot.querySelector("#chart-self-sufficiency"),m=this.shadowRoot.querySelector("#chart-recorder-status"),g=t!==null?t:e[e.length-1]?.solar||0,r=s!==null?s:e[e.length-1]?.grid||0;if(o&&(o.innerText=this.formatWatts(g)),i&&(i.innerText=this.formatWatts(r)),e.length<2){n&&(n.style.display="flex",n.innerHTML=`
          <div class="pulse-dot" style="width:10px;height:10px;"></div>
          <span>Recording real live energy telemetry...</span>
          <span style="font-size:10px;color:#64748b;">Waiting for 24h recorder samples (${e.length} sample logged)</span>
        `),m&&(m.innerText="Telemetry Logging Active");return}n&&(n.style.display="none");let c=0,u=0,S=0,w=0;for(let d=0;d<e.length;d++){let v=e[d];if(v.solar>c&&(c=v.solar),v.grid>u&&(u=v.grid),d>0){let b=(v.time-e[d-1].time)/1e3;S+=(v.solar+e[d-1].solar)/2*b,w+=(v.grid+e[d-1].grid)/2*b}}let $=S/36e5,C=w/36e5;if(a&&(a.innerText=`Peak ${this.formatWatts(c)}`),l&&(l.innerText=`Today ${$.toFixed(1)} kWh`),p&&(p.innerText=`Peak ${this.formatWatts(u)}`),h&&(h.innerText=`Imp ${C.toFixed(1)} kWh`),f)if(g>r&&g>50){let d=g-r;f.innerText=`\u{1F33F} 100% Green (+${d.toLocaleString()} W)`,f.className="chart-stat-badge surplus"}else if(g>30){let d=Math.round(g/(g+r)*100);f.innerText=`\u2600\uFE0F ${d}% Solar Offset`,f.className="chart-stat-badge partial"}else f.innerText=`\u26A1 Grid Powered (${r.toLocaleString()} W)`,f.className="chart-stat-badge grid";if(m){let d=Math.max(.1,(e[e.length-1].time-e[0].time)/36e5);d>=20?m.innerText=`Real 24h Recorder (${e.length} pts)`:m.innerText=`Live Recorded: ${d.toFixed(1)}h (${e.length} pts)`}let y=65,R=22,A=835,W=240,x=R+W,k=Math.max(c,u,2500),F=k>5e3?2e3:k>2e3?1e3:500,E=Math.ceil(k/F)*F,D=e[0].time,I=e[e.length-1].time,T=Math.max(1e3,I-D),G=d=>y+(d-D)/T*A,z=d=>x-Math.min(d,E)/E*W,X=this.shadowRoot.querySelector("#chart-grid-lines");if(X){let d="",v=Math.min(5,Math.max(3,Math.round(E/F))),b=E/v;for(let M=0;M<=v;M++){let _=M*b,L=z(_),H=_>=1e3?`${(_/1e3).toFixed(_%1e3===0?0:1)} kW`:`${Math.round(_)} W`;d+=`
          <line x1="${y}" y1="${L}" x2="${y+A}" y2="${L}" stroke="rgba(255, 255, 255, 0.05)" stroke-dasharray="3 4" />
          <text x="${y-12}" y="${L+4}" fill="#64748b" font-size="10" font-weight="600" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, sans-serif">${H}</text>
        `}X.innerHTML=d}let Z=this.shadowRoot.querySelector("#chart-x-labels");if(Z){let d="";for(let b=0;b<=6;b++){let M=D+b/6*T,_=G(M),L=new Date(M),H=`${String(L.getHours()).padStart(2,"0")}:${String(L.getMinutes()).padStart(2,"0")}`,O=b===6?"Now":H;d+=`
          <line x1="${_}" y1="${x}" x2="${_}" y2="${x+4}" stroke="rgba(255, 255, 255, 0.15)" />
          <text x="${_}" y="${x+18}" fill="#94a3b8" font-size="10" font-weight="600" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif">${O}</text>
        `}Z.innerHTML=d}let q=e.map(d=>({x:G(d.time),y:z(d.solar),...d})),P=e.map(d=>({x:G(d.time),y:z(d.grid),...d}));this._cachedSolarCoords=q,this._cachedGridCoords=P;let j=this.buildSmoothPath(q),N=this.buildSmoothPath(P),it=`${j} L ${q[q.length-1].x.toFixed(1)} ${x} L ${q[0].x.toFixed(1)} ${x} Z`,st=`${N} L ${P[P.length-1].x.toFixed(1)} ${x} L ${P[0].x.toFixed(1)} ${x} Z`,Y=this.shadowRoot.querySelector("#chart-solar-line"),K=this.shadowRoot.querySelector("#chart-solar-glow"),U=this.shadowRoot.querySelector("#chart-solar-area"),J=this.shadowRoot.querySelector("#chart-grid-line"),Q=this.shadowRoot.querySelector("#chart-grid-glow"),tt=this.shadowRoot.querySelector("#chart-grid-area");Y&&Y.setAttribute("d",j),K&&K.setAttribute("d",j),U&&U.setAttribute("d",it),J&&J.setAttribute("d",N),Q&&Q.setAttribute("d",N),tt&&tt.setAttribute("d",st);let et=this.shadowRoot.querySelector("#chart-surplus-area");if(et){let d="",v=!1,b=[];for(let M=0;M<e.length;M++){let _=q[M],L=P[M];if(_.solar>L.grid&&_.solar>80)v?b.push(_):(v=!0,b=[_]);else{if(v&&b.length>1){let H=this.buildSmoothPath(b),O=b[0].x.toFixed(1),ot=b[b.length-1].x.toFixed(1);d+=`${H} L ${ot} ${x} L ${O} ${x} Z `}v=!1,b=[]}}if(v&&b.length>1){let M=this.buildSmoothPath(b),_=b[0].x.toFixed(1),L=b[b.length-1].x.toFixed(1);d+=`${M} L ${L} ${x} L ${_} ${x} Z`}et.setAttribute("d",d)}}buildSmoothPath(t){if(!t||!t.length)return"";if(t.length===1)return`M ${t[0].x.toFixed(1)} ${t[0].y.toFixed(1)}`;if(t.length===2)return`M ${t[0].x.toFixed(1)} ${t[0].y.toFixed(1)} L ${t[1].x.toFixed(1)} ${t[1].y.toFixed(1)}`;let s=t.length,e=new Float64Array(s-1),n=new Float64Array(s-1),o=new Float64Array(s-1);for(let i=0;i<s-1;i++)e[i]=t[i+1].x-t[i].x,n[i]=t[i+1].y-t[i].y,o[i]=e[i]===0?0:n[i]/e[i];let a=new Float64Array(s);a[0]=o[0];for(let i=1;i<s-1;i++)o[i-1]*o[i]<=0?a[i]=0:a[i]=(o[i-1]+o[i])/2;a[s-1]=o[s-2];for(let i=0;i<s-1;i++)if(o[i]===0)a[i]=0,a[i+1]=0;else{let p=a[i]/o[i],h=a[i+1]/o[i],f=p*p+h*h;if(f>9){let m=3/Math.sqrt(f);a[i]=m*p*o[i],a[i+1]=m*h*o[i]}}let l=`M ${t[0].x.toFixed(1)} ${t[0].y.toFixed(1)}`;for(let i=0;i<s-1;i++){let p=t[i],h=t[i+1],f=e[i]/3,m=p.x+f,g=p.y+a[i]*f,r=h.x-f,c=h.y-a[i+1]*f;l+=` C ${m.toFixed(1)} ${g.toFixed(1)}, ${r.toFixed(1)} ${c.toFixed(1)}, ${h.x.toFixed(1)} ${h.y.toFixed(1)}`}return l}setupChartScrubber(){let t=this.shadowRoot.querySelector("#chart-svg"),s=this.shadowRoot.querySelector("#chart-tooltip"),e=this.shadowRoot.querySelector("#chart-cursor-line"),n=this.shadowRoot.querySelector("#chart-cursor-solar"),o=this.shadowRoot.querySelector("#chart-cursor-grid");if(!t||!s)return;let a=i=>{let p=this._cachedSolarCoords;if(!p||p.length<2)return;let h=t.getBoundingClientRect(),g=((i.touches?i.touches[0].clientX:i.clientX)-h.left)/h.width*920,r=p[0],c=999999;for(let k of p){let F=Math.abs(k.x-g);F<c&&(c=F,r=k)}if(!r)return;let u=this._cachedGridCoords?this._cachedGridCoords.find(k=>k.time===r.time):null,S=u?u.y:262,w=u?u.grid:0;e&&(e.style.display="block",e.setAttribute("x1",r.x),e.setAttribute("x2",r.x)),n&&(n.style.display="block",n.setAttribute("cx",r.x),n.setAttribute("cy",r.y)),o&&(o.style.display="block",o.setAttribute("cx",r.x),o.setAttribute("cy",S));let $=new Date(r.time),C=new Date().toDateString()===$.toDateString(),y=`${String($.getHours()).padStart(2,"0")}:${String($.getMinutes()).padStart(2,"0")}`,R=C?"Today":"Yesterday",A="";r.solar>w&&r.solar>80?A=`<div style="display:inline-block;margin-top:6px;padding:2px 8px;border-radius:6px;background:rgba(16,185,129,0.18);border:1px solid rgba(16,185,129,0.35);color:#10b981;font-weight:700;font-size:10px;">\u{1F33F} 100% Green (+${(r.solar-w).toLocaleString()} W surplus)</div>`:w>r.solar&&(A=`<div style="display:inline-block;margin-top:6px;padding:2px 8px;border-radius:6px;background:rgba(56,189,248,0.15);border:1px solid rgba(56,189,248,0.3);color:#38bdf8;font-weight:600;font-size:10px;">\u26A1 Grid Demand (${(w-r.solar).toLocaleString()} W imported)</div>`),s.innerHTML=`
        <div style="font-weight:700;color:#94a3b8;font-size:11px;margin-bottom:6px;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:3px;display:flex;justify-content:space-between;gap:12px;">
          <span>\u{1F552} ${R}, ${y}</span>
          <span style="color:#64748b;font-weight:600;">Real Telemetry</span>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;color:#f59e0b;font-weight:700;font-size:12px;margin-bottom:3px;">
          <span style="display:flex;align-items:center;gap:6px;"><span style="width:7px;height:7px;border-radius:50%;background:#f59e0b;display:inline-block;"></span>Solar:</span>
          <span style="font-variant-numeric:tabular-nums;">${Math.round(r.solar).toLocaleString()} W</span>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;color:#38bdf8;font-weight:700;font-size:12px;">
          <span style="display:flex;align-items:center;gap:6px;"><span style="width:7px;height:7px;border-radius:50%;background:#38bdf8;display:inline-block;"></span>Grid Demand:</span>
          <span style="font-variant-numeric:tabular-nums;">${Math.round(w).toLocaleString()} W</span>
        </div>
        ${A}
      `,s.style.display="block";let W=r.x/920*h.width,x=Math.min(Math.min(r.y,S)/300*h.height,h.height-70);s.style.left=`${W}px`,s.style.top=`${Math.max(12,x)}px`},l=()=>{e&&(e.style.display="none"),n&&(n.style.display="none"),o&&(o.style.display="none"),s&&(s.style.display="none")};t.addEventListener("pointermove",a),t.addEventListener("pointerleave",l),t.addEventListener("touchmove",a,{passive:!0}),t.addEventListener("touchend",l)}startAnimation(){if(this._animFrame)return;let t=["solar","grid_import","grid_export","ev","tv","lights","washer","fridge"];for(let e of t)this._particles[e]||(this._particles[e]=[0,.33,.66]);let s=e=>{this._lastTimestamp||(this._lastTimestamp=e);let n=(e-this._lastTimestamp)/1e3;if(this._lastTimestamp=e,this._flows)for(let[o,a]of Object.entries(this._flows)){let l=this.shadowRoot.querySelector(`#${a.pathId}`),i=this.shadowRoot.querySelector(`#particles-${o}`);if(!l||!i)continue;if(!a.active||a.dur<=0){i.style.opacity="0";continue}i.style.opacity="1";let p=l.getTotalLength?l.getTotalLength():0;if(p<=0)continue;let h=n/a.dur,f=i.querySelectorAll("circle");this._particles[o]=this._particles[o].map((m,g)=>{let r=(m+h)%1,c=l.getPointAtLength(r*p);return f[g]&&(f[g].setAttribute("cx",c.x),f[g].setAttribute("cy",c.y)),r})}this._animFrame=requestAnimationFrame(s)};this._animFrame=requestAnimationFrame(s)}stopAnimation(){this._animFrame&&(cancelAnimationFrame(this._animFrame),this._animFrame=null)}render(){let t=this._config.title||"Live Energy Flow";this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          flex: 1;
          width: 100%;
          height: 100%;
          min-height: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #f8fafc;
          user-select: none;
          box-sizing: border-box;
          overflow: hidden;
        }

        .card-container {
          background: radial-gradient(circle at 50% 50%, #0d1527 0%, #060a12 100%);
          border-radius: var(--ha-card-border-radius, 16px);
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
          position: relative;
          padding: 16px 20px 16px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
          width: 100%;
          height: 100%;
          min-height: 0;
          box-sizing: border-box;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          flex-shrink: 0;
          z-index: 10;
          flex-wrap: wrap;
          gap: 8px;
        }

        .card-title {
          font-size: 15px;
          font-weight: 700;
          letter-spacing: -0.2px;
          color: #f1f5f9;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: pulse 2s infinite ease-in-out;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }

        /* View Mode Segmented Controls */
        .view-mode-tabs {
          display: inline-flex;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 9999px;
          padding: 2px;
          gap: 3px;
        }

        .mode-tab {
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 11px;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .mode-tab.active {
          background: #3b82f6;
          color: #ffffff;
          box-shadow: 0 0 12px rgba(59, 130, 246, 0.4);
        }

        .mode-tab:hover:not(.active) {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .badge-live {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 2px 7px;
          border-radius: 6px;
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .btn-fs {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #94a3b8;
          border-radius: 8px;
          padding: 4px 8px;
          font-size: 13px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .btn-fs:hover {
          background: rgba(255, 255, 255, 0.16);
          color: #ffffff;
        }

        /* Content Layout */
        .card-content-wrap {
          display: flex;
          flex: 1;
          width: 100%;
          height: 100%;
          min-height: 0;
          position: relative;
          gap: 12px;
          overflow: hidden;
        }

        /* Flow Only Mode */
        .card-content-wrap.mode-flow #flow-wrap {
          display: flex;
          flex: 1;
          width: 100%;
          height: 100%;
        }
        .card-content-wrap.mode-flow #chart-wrap {
          display: none !important;
        }

        /* Chart Only Mode */
        .card-content-wrap.mode-chart #flow-wrap {
          display: none !important;
        }
        .card-content-wrap.mode-chart #chart-wrap {
          display: flex;
          flex: 1;
          width: 100%;
          height: 100%;
        }

        /* Split Mode */
        .card-content-wrap.mode-split {
          flex-direction: column;
        }
        .card-content-wrap.mode-split #flow-wrap {
          display: flex;
          flex: 1.1;
          width: 100%;
          min-height: 0;
        }
        .card-content-wrap.mode-split #chart-wrap {
          display: flex;
          flex: 0.9;
          width: 100%;
          min-height: 0;
        }

        .svg-container {
          width: 100%;
          height: 100%;
          flex: 1;
          min-height: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        #flow-svg {
          width: 100%;
          height: 100%;
          max-width: 100%;
          max-height: 100%;
          display: block;
        }

        /* Flow Paths */
        .flow-path-bg {
          fill: none;
          stroke: rgba(255, 255, 255, 0.08);
          stroke-width: 3;
          stroke-linecap: round;
        }

        .flow-path-glow {
          fill: none;
          stroke-width: 3;
          stroke-linecap: round;
          opacity: 0.35;
          transition: stroke 0.3s ease, opacity 0.3s ease;
        }

        /* Flow Particles */
        .particle-dot {
          r: 3.5;
          filter: drop-shadow(0 0 6px currentColor);
          transition: opacity 0.3s ease;
        }

        /* HTML Nodes Inside SVG ForeignObjects */
        .node-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 14px;
          padding: 6px 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2px;
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          transition: all 0.3s ease;
        }

        .node-card:hover {
          transform: translateY(-2px);
        }

        .node-card.home {
          background: rgba(14, 165, 233, 0.07);
          border-color: rgba(14, 165, 233, 0.3);
        }

        .node-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          width: 100%;
        }

        .node-title-wrap {
          display: flex;
          align-items: center;
          gap: 5px;
          min-width: 0;
          flex: 1;
        }

        .node-icon {
          font-size: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .node-title {
          font-size: 11px;
          font-weight: 600;
          color: #94a3b8;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .node-value {
          font-size: 15px;
          font-weight: 700;
          color: #f8fafc;
          letter-spacing: -0.3px;
          display: flex;
          align-items: baseline;
          gap: 4px;
        }

        .node-sub {
          font-size: 10px;
          font-weight: 500;
          color: #64748b;
        }

        .status-pill {
          font-size: 8px;
          font-weight: 700;
          padding: 1.5px 6px;
          border-radius: 4px;
          text-transform: uppercase;
          flex-shrink: 0;
          white-space: nowrap;
          line-height: 1.2;
        }

        .status-pill.active {
          background: rgba(16, 185, 129, 0.2);
          color: #10b981;
        }

        .status-pill.idle {
          background: rgba(255, 255, 255, 0.06);
          color: #64748b;
        }

        /* 24-Hour Trend Chart Styles - Apple iOS Dark Glass Aesthetic */
        .chart-container {
          background: radial-gradient(130% 130% at 50% 0%, rgba(18, 28, 48, 0.72) 0%, rgba(9, 14, 24, 0.9) 60%, rgba(5, 8, 15, 0.98) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          min-height: 0;
          padding: 14px 18px 12px 18px;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 12px 32px rgba(0, 0, 0, 0.4);
        }

        .chart-stats-bar {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 10px;
          margin-bottom: 12px;
          flex-shrink: 0;
        }

        .chart-stat-item {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          border-radius: 12px;
          padding: 8px 14px;
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .chart-stat-item:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.16);
        }

        .chart-stat-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .chart-stat-dot.solar {
          background: #f59e0b;
          box-shadow: 0 0 12px #f59e0b;
        }
        .chart-stat-dot.grid {
          background: #38bdf8;
          box-shadow: 0 0 12px #38bdf8;
        }
        .chart-stat-dot.recorder {
          background: #10b981;
          box-shadow: 0 0 12px #10b981;
          animation: pulse 2s infinite ease-in-out;
        }

        .chart-stat-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
          flex: 1;
        }

        .chart-stat-label {
          font-size: 10px;
          font-weight: 700;
          color: #94a3b8;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .chart-stat-val {
          font-size: 16px;
          font-weight: 800;
          color: #f8fafc;
          letter-spacing: -0.4px;
          font-variant-numeric: tabular-nums;
          display: flex;
          align-items: baseline;
          gap: 4px;
        }
        .chart-stat-val.solar {
          color: #f59e0b;
        }
        .chart-stat-val.grid {
          color: #38bdf8;
        }

        .chart-stat-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
          font-size: 10px;
          font-weight: 600;
          color: #64748b;
          padding-left: 10px;
          border-left: 1px solid rgba(255, 255, 255, 0.08);
          white-space: nowrap;
        }

        .chart-stat-badge {
          font-size: 10px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .chart-stat-badge.surplus {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }
        .chart-stat-badge.partial {
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }
        .chart-stat-badge.grid {
          background: rgba(56, 189, 248, 0.15);
          color: #38bdf8;
          border: 1px solid rgba(56, 189, 248, 0.3);
        }

        .chart-svg-wrap {
          flex: 1;
          width: 100%;
          height: 100%;
          min-height: 0;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        #chart-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
          cursor: crosshair;
        }

        .chart-tooltip {
          position: absolute;
          background: rgba(13, 20, 36, 0.94);
          border: 1px solid rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: 12px;
          padding: 10px 14px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.7);
          pointer-events: none;
          z-index: 50;
          white-space: nowrap;
          font-size: 11px;
          line-height: 1.45;
          transform: translate(-50%, -100%);
          margin-top: -12px;
          transition: left 0.05s ease, top 0.05s ease;
        }

        .chart-empty-state {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #94a3b8;
          font-size: 12px;
          font-weight: 500;
          background: rgba(9, 14, 25, 0.85);
          backdrop-filter: blur(12px);
          border-radius: 12px;
          z-index: 20;
        }
      </style>

      <div class="card-container">
        <!-- Top Card Header -->
        <div class="card-header">
          <div class="card-title">
            <div class="pulse-dot"></div>
            <span>${t}</span>
          </div>

          <!-- View Mode Switcher -->
          <div class="view-mode-tabs">
            <button class="mode-tab ${this._viewMode==="flow"?"active":""}" data-mode="flow">\u26A1 Live Flow</button>
            <button class="mode-tab ${this._viewMode==="chart"?"active":""}" data-mode="chart">\u{1F4C8} 24h Trend</button>
            <button class="mode-tab ${this._viewMode==="split"?"active":""}" data-mode="split">\u{1F500} Split View</button>
          </div>

          <div class="header-right">
            <span class="badge-live">Live Watts</span>
            <button class="btn-fs" id="btn-card-fs" title="Toggle Fullscreen">\u26F6</button>
          </div>
        </div>

        <!-- Content Area: Flow Diagram & 24h Trend Chart -->
        <div class="card-content-wrap mode-${this._viewMode}" id="content-wrap">
          <!-- 1. Live Animated Flow Diagram -->
          <div class="svg-container" id="flow-wrap">
            <svg id="flow-svg" viewBox="0 0 780 440">
              <defs>
                <filter id="glow-solar" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <!-- Guide Flow Paths (Curved B\xE9ziers) -->
              <!-- 1. Solar to Home -->
              <path id="path-solar" class="flow-path-bg" d="M 185 100 C 265 100, 255 200, 325 200" />
              <path class="flow-path-glow" stroke="#f59e0b" d="M 185 100 C 265 100, 255 200, 325 200" />

              <!-- 2. Grid to Home (Import) -->
              <path id="path-grid-import" class="flow-path-bg" d="M 185 330 C 265 330, 255 235, 325 235" />
              <path class="flow-path-glow" stroke="#3b82f6" d="M 185 330 C 265 330, 255 235, 325 235" />

              <!-- 3. Home to Grid (Export) -->
              <path id="path-grid-export" class="flow-path-bg" d="M 325 235 C 255 235, 265 330, 185 330" />
              <path class="flow-path-glow" stroke="#10b981" d="M 325 235 C 255 235, 265 330, 185 330" />

              <!-- 4. Home to Zappi EV -->
              <path id="path-ev" class="flow-path-bg" d="M 455 190 C 525 190, 525 53, 595 53" />
              <path class="flow-path-glow" stroke="#06d6a0" d="M 455 190 C 525 190, 525 53, 595 53" />

              <!-- 5. Home to LG TV -->
              <path id="path-tv" class="flow-path-bg" d="M 455 205 C 525 205, 525 133, 595 133" />
              <path class="flow-path-glow" stroke="#38bdf8" d="M 455 205 C 525 205, 525 133, 595 133" />

              <!-- 6. Home to Lights -->
              <path id="path-lights" class="flow-path-bg" d="M 455 220 C 525 220, 525 213, 595 213" />
              <path class="flow-path-glow" stroke="#fbbf24" d="M 455 220 C 525 220, 525 213, 595 213" />

              <!-- 7. Home to Washing Machine -->
              <path id="path-washer" class="flow-path-bg" d="M 455 235 C 525 235, 525 293, 595 293" />
              <path class="flow-path-glow" stroke="#f43f5e" d="M 455 235 C 525 235, 525 293, 595 293" />

              <!-- 8. Home to Fridge -->
              <path id="path-fridge" class="flow-path-bg" d="M 455 250 C 525 250, 525 373, 595 373" />
              <path class="flow-path-glow" stroke="#a78bfa" d="M 455 250 C 525 250, 525 373, 595 373" />

              <!-- Animated Moving Particles Groups -->
              <g id="particles-solar" fill="#f59e0b" style="opacity:0;">
                <circle class="particle-dot" />
                <circle class="particle-dot" />
                <circle class="particle-dot" />
              </g>
              <g id="particles-grid_import" fill="#3b82f6" style="opacity:0;">
                <circle class="particle-dot" />
                <circle class="particle-dot" />
                <circle class="particle-dot" />
              </g>
              <g id="particles-grid_export" fill="#10b981" style="opacity:0;">
                <circle class="particle-dot" />
                <circle class="particle-dot" />
                <circle class="particle-dot" />
              </g>
              <g id="particles-ev" fill="#06d6a0" style="opacity:0;">
                <circle class="particle-dot" />
                <circle class="particle-dot" />
                <circle class="particle-dot" />
              </g>
              <g id="particles-tv" fill="#38bdf8" style="opacity:0;">
                <circle class="particle-dot" />
                <circle class="particle-dot" />
                <circle class="particle-dot" />
              </g>
              <g id="particles-lights" fill="#fbbf24" style="opacity:0;">
                <circle class="particle-dot" />
                <circle class="particle-dot" />
                <circle class="particle-dot" />
              </g>
              <g id="particles-washer" fill="#f43f5e" style="opacity:0;">
                <circle class="particle-dot" />
                <circle class="particle-dot" />
                <circle class="particle-dot" />
              </g>
              <g id="particles-fridge" fill="#a78bfa" style="opacity:0;">
                <circle class="particle-dot" />
                <circle class="particle-dot" />
                <circle class="particle-dot" />
              </g>

              <!-- 1. Solar Inverter Node (Top Left) -->
              <foreignObject x="20" y="65" width="165" height="70">
                <div xmlns="http://www.w3.org/1999/xhtml" class="node-card" id="box-solar">
                  <div class="node-header">
                    <div class="node-title-wrap">
                      <span class="node-icon">\u2600\uFE0F</span>
                      <span class="node-title">Solax Solar</span>
                    </div>
                    <span class="status-pill idle" id="pill-solar">IDLE</span>
                  </div>
                  <div class="node-value">
                    <span id="val-solar">0 W</span>
                    <span class="node-sub" id="sub-solar"></span>
                  </div>
                </div>
              </foreignObject>

              <!-- 2. Grid Node (Bottom Left - Import/Export) -->
              <foreignObject x="20" y="295" width="165" height="70">
                <div xmlns="http://www.w3.org/1999/xhtml" class="node-card" id="box-grid">
                  <div class="node-header">
                    <div class="node-title-wrap">
                      <span class="node-icon">\u26A1</span>
                      <span class="node-title" id="title-grid">Grid Import</span>
                    </div>
                    <span class="status-pill idle" id="pill-grid">IDLE</span>
                  </div>
                  <div class="node-value">
                    <span id="val-grid">0 W</span>
                    <span class="node-sub" id="sub-grid"></span>
                  </div>
                </div>
              </foreignObject>

              <!-- 3. Central Home Node (Center) -->
              <foreignObject x="325" y="165" width="130" height="95">
                <div xmlns="http://www.w3.org/1999/xhtml" class="node-card home" id="box-home">
                  <div class="node-header">
                    <div class="node-title-wrap">
                      <span class="node-icon">\u{1F3E1}</span>
                      <span class="node-title" style="color:#38bdf8;font-weight:700;">Home</span>
                    </div>
                    <span class="status-pill active" id="pill-home">LIVE</span>
                  </div>
                  <div class="node-value" style="font-size:17px;color:#38bdf8;">
                    <span id="val-home">0 W</span>
                  </div>
                  <div class="node-sub" id="sub-home" style="color:#94a3b8;font-size:9px;">Consumption</div>
                </div>
              </foreignObject>

              <!-- 4. Zappi EV Charger (Top Right) -->
              <foreignObject x="595" y="20" width="165" height="66">
                <div xmlns="http://www.w3.org/1999/xhtml" class="node-card" id="box-ev">
                  <div class="node-header">
                    <div class="node-title-wrap">
                      <span class="node-icon">\u{1F697}</span>
                      <span class="node-title">Zappi EV</span>
                    </div>
                    <span class="status-pill idle" id="pill-ev">IDLE</span>
                  </div>
                  <div class="node-value">
                    <span id="val-ev">0 W</span>
                    <span class="node-sub" id="sub-ev"></span>
                  </div>
                </div>
              </foreignObject>

              <!-- 5. LG TV (Mid-Top Right) -->
              <foreignObject x="595" y="100" width="165" height="66">
                <div xmlns="http://www.w3.org/1999/xhtml" class="node-card" id="box-tv">
                  <div class="node-header">
                    <div class="node-title-wrap">
                      <span class="node-icon">\u{1F4FA}</span>
                      <span class="node-title">LG TV</span>
                    </div>
                    <span class="status-pill idle" id="pill-tv">IDLE</span>
                  </div>
                  <div class="node-value">
                    <span id="val-tv">0 W</span>
                    <span class="node-sub" id="sub-tv"></span>
                  </div>
                </div>
              </foreignObject>

              <!-- 6. Matter Lights (Center Right) -->
              <foreignObject x="595" y="180" width="165" height="66">
                <div xmlns="http://www.w3.org/1999/xhtml" class="node-card" id="box-lights">
                  <div class="node-header">
                    <div class="node-title-wrap">
                      <span class="node-icon">\u{1F4A1}</span>
                      <span class="node-title">Lights</span>
                    </div>
                    <span class="status-pill idle" id="pill-lights">IDLE</span>
                  </div>
                  <div class="node-value">
                    <span id="val-lights">0 W</span>
                    <span class="node-sub" id="sub-lights"></span>
                  </div>
                </div>
              </foreignObject>

              <!-- 7. Washing Machine (Mid-Bottom Right) -->
              <foreignObject x="595" y="260" width="165" height="66">
                <div xmlns="http://www.w3.org/1999/xhtml" class="node-card" id="box-washer">
                  <div class="node-header">
                    <div class="node-title-wrap">
                      <span class="node-icon">\u{1F9FA}</span>
                      <span class="node-title">Washing Machine</span>
                    </div>
                    <span class="status-pill idle" id="pill-washer">IDLE</span>
                  </div>
                  <div class="node-value">
                    <span id="val-washer">0 W</span>
                    <span class="node-sub" id="sub-washer"></span>
                  </div>
                </div>
              </foreignObject>

              <!-- 8. Fridge (Bottom Right) -->
              <foreignObject x="595" y="340" width="165" height="66">
                <div xmlns="http://www.w3.org/1999/xhtml" class="node-card" id="box-fridge">
                  <div class="node-header">
                    <div class="node-title-wrap">
                      <span class="node-icon">\u2744\uFE0F</span>
                      <span class="node-title">Fridge</span>
                    </div>
                    <span class="status-pill idle" id="pill-fridge">IDLE</span>
                  </div>
                  <div class="node-value">
                    <span id="val-fridge">0 W</span>
                    <span class="node-sub" id="sub-fridge"></span>
                  </div>
                </div>
              </foreignObject>
            </svg>
          </div>

          <!-- 2. Rolling 24-Hour Dual-Curve Trend Chart -->
          <div class="chart-container" id="chart-wrap">
            <!-- Chart Top Stats Bar -->
            <div class="chart-stats-bar">
              <div class="chart-stat-item">
                <div class="chart-stat-dot solar"></div>
                <div class="chart-stat-info">
                  <span class="chart-stat-label">\u2600\uFE0F Rooftop Solar</span>
                  <span class="chart-stat-val solar" id="chart-live-solar">0 W</span>
                </div>
                <div class="chart-stat-meta">
                  <span id="chart-peak-solar">Peak 0 W</span>
                  <span id="chart-total-solar">Today 0.0 kWh</span>
                </div>
              </div>

              <div class="chart-stat-item">
                <div class="chart-stat-dot grid"></div>
                <div class="chart-stat-info">
                  <span class="chart-stat-label">\u26A1 Grid Demand</span>
                  <span class="chart-stat-val grid" id="chart-live-grid">0 W</span>
                </div>
                <div class="chart-stat-meta">
                  <span id="chart-peak-grid">Peak 0 W</span>
                  <span id="chart-total-grid">Imp 0.0 kWh</span>
                </div>
              </div>

              <div class="chart-stat-item">
                <div class="chart-stat-dot recorder"></div>
                <div class="chart-stat-info">
                  <span class="chart-stat-label">\u{1F33F} Net Power Balance</span>
                  <span class="chart-stat-badge surplus" id="chart-self-sufficiency">100% Green Solar</span>
                </div>
                <div class="chart-stat-meta">
                  <span id="chart-recorder-status" style="color:#10b981;">Real 24h Telemetry</span>
                </div>
              </div>
            </div>

            <!-- SVG Vector Dual-Curve Graph -->
            <div class="chart-svg-wrap">
              <svg id="chart-svg" viewBox="0 0 920 300" preserveAspectRatio="none">
                <defs>
                  <!-- Gradient Fills -->
                  <linearGradient id="solar-area-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.32" />
                    <stop offset="65%" stop-color="#f59e0b" stop-opacity="0.06" />
                    <stop offset="100%" stop-color="#f59e0b" stop-opacity="0" />
                  </linearGradient>

                  <linearGradient id="grid-area-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.28" />
                    <stop offset="65%" stop-color="#38bdf8" stop-opacity="0.05" />
                    <stop offset="100%" stop-color="#38bdf8" stop-opacity="0" />
                  </linearGradient>

                  <linearGradient id="surplus-area-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#10b981" stop-opacity="0.25" />
                    <stop offset="100%" stop-color="#10b981" stop-opacity="0.02" />
                  </linearGradient>
                </defs>

                <!-- Background Horizontal Grid Lines & Y-Axis Labels -->
                <g id="chart-grid-lines"></g>

                <!-- Zero Grid / Self-Sufficiency Surplus Zone -->
                <path id="chart-surplus-area" fill="url(#surplus-area-grad)" />

                <!-- Curve Gradient Area Fills -->
                <path id="chart-solar-area" fill="url(#solar-area-grad)" />
                <path id="chart-grid-area" fill="url(#grid-area-grad)" />

                <!-- Glow Layer Under Strokes -->
                <path id="chart-grid-glow" fill="none" stroke="#38bdf8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.2" />
                <path id="chart-solar-glow" fill="none" stroke="#f59e0b" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.22" />

                <!-- Crisp Vector Trend Lines -->
                <path id="chart-grid-line" fill="none" stroke="#38bdf8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                <path id="chart-solar-line" fill="none" stroke="#f59e0b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />

                <!-- X-Axis Timeline Markers -->
                <g id="chart-x-labels"></g>

                <!-- Interactive Scrubber Cursor Line & Circles -->
                <line id="chart-cursor-line" x1="0" y1="22" x2="0" y2="262" stroke="rgba(255, 255, 255, 0.45)" stroke-width="1.5" stroke-dasharray="3 3" style="display:none;" />
                <circle id="chart-cursor-solar" r="5" fill="#f59e0b" stroke="#ffffff" stroke-width="2" style="display:none;" />
                <circle id="chart-cursor-grid" r="5" fill="#38bdf8" stroke="#ffffff" stroke-width="2" style="display:none;" />
              </svg>

              <!-- Floating Scrubber Glass Tooltip -->
              <div id="chart-tooltip" class="chart-tooltip" style="display:none;"></div>

              <!-- Real Telemetry Empty / Loading State -->
              <div id="chart-empty-state" class="chart-empty-state" style="display:none;">
                <div class="pulse-dot" style="width:10px;height:10px;"></div>
                <span>Recording real live energy telemetry...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;let s=this.shadowRoot.querySelector("#content-wrap"),e=this.shadowRoot.querySelectorAll(".mode-tab");e.forEach(o=>{o.addEventListener("click",()=>{e.forEach(l=>l.classList.remove("active")),o.classList.add("active");let a=o.getAttribute("data-mode");this._viewMode=a,s&&(s.className=`card-content-wrap mode-${a}`),(a==="chart"||a==="split")&&this.updateChart()})});let n=this.shadowRoot.querySelector("#btn-card-fs");n&&(n.addEventListener("click",()=>{let o=document;if(o.fullscreenElement)o.exitFullscreen&&o.exitFullscreen().catch(a=>console.warn(a));else{let a=this.closest(".card-stage")||this;a.requestFullscreen?a.requestFullscreen().catch(l=>console.warn(l)):o.documentElement.requestFullscreen&&o.documentElement.requestFullscreen().catch(l=>console.warn(l))}}),document.addEventListener("fullscreenchange",()=>{let o=!!document.fullscreenElement;n.innerHTML=o?"\u2715":"\u26F6",n.title=o?"Exit Fullscreen":"Toggle Fullscreen"})),this.setupChartScrubber(),this.updateData(),this.updateChart()}};customElements.get("ha-energy-flow-card")||customElements.define("ha-energy-flow-card",V);window.customCards=window.customCards||[];window.customCards.some(B=>B.type==="ha-energy-flow-card")||window.customCards.push({type:"ha-energy-flow-card",name:"2D Live Energy Flow Monitor",description:"Apple iOS dark aesthetic live 2D animated energy flow card & rolling 24h trend chart for Solar & Grid"});export{V as HaEnergyFlowCard};
//# sourceMappingURL=ha-energy-flow-card.js.map
