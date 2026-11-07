var V=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config={},this._hass=null,this._animFrame=null,this._lastTimestamp=0,this._particles={},this._viewMode="flow",this._historyPoints=this.loadStoredHistory(),this._historyFetched=!1,this._lastHistoryFetchTime=0,this._isScrubbing=!1,this._cachedSolarCoords=[],this._cachedGridCoords=[]}static getStubConfig(){return{title:"Live Energy Flow",view_mode:"flow",solar_entity:"sensor.solax_snm9wncrqy_pv1_power",grid_import_entity:"sensor.octopus_energy_electricity_22l3956422_3200000391421_current_demand",grid_export_entity:"sensor.solax_snm9wncrqy_exported_power",ev_entity:"input_number.zappi_ev_power",tv_entity:"sensor.living_room_tv_plug_power",lights_entity:"input_number.matter_lights_power",fridge_entity:"sensor.refrigerator_power"}}setConfig(t){this._config={title:"Live Energy Flow",height:"100%",view_mode:"flow",solar_entity:"sensor.solax_snm9wncrqy_pv1_power",grid_import_entity:"sensor.octopus_energy_electricity_22l3956422_3200000391421_current_demand",grid_export_entity:"sensor.solax_snm9wncrqy_exported_power",ev_entity:"input_number.zappi_ev_power",tv_entity:"sensor.living_room_tv_plug_power",lights_entity:"input_number.matter_lights_power",fridge_entity:"sensor.refrigerator_power",...t},this._config.view_mode&&(this._viewMode=this._config.view_mode),this._config.height&&(this.style.height=this._config.height),this.render()}set hass(t){this._hass=t,this.updateData(),(!this._historyFetched||Date.now()-this._lastHistoryFetchTime>300*1e3)&&this.fetchHistory()}connectedCallback(){this.startAnimation()}disconnectedCallback(){this.stopAnimation()}getCardSize(){return 5}calculateDuration(t){if(!t||t<=4)return 0;let o=6/(t/500);return Math.max(.8,Math.min(5,o))}getEntityNumeric(t,o=0){if(!this._hass||!t)return o;let e=this._hass.states[t];if(!e||e.state==="unavailable"||e.state==="unknown")return o;let n=parseFloat(e.state);return isNaN(n)?o:(e.attributes?.unit_of_measurement||"W").toLowerCase().trim()==="kw"?n*1e3:n}formatWatts(t){return`${Math.max(0,Math.round(t||0)).toLocaleString()} W`}formatKwSubtitle(t){let o=Math.max(0,t||0);return o>=1e3?`${(o/1e3).toFixed(2)} kW`:""}getLightsPowerFallback(){if(!this._hass?.states)return 0;let t=0;for(let[o,e]of Object.entries(this._hass.states))o.startsWith("light.")&&e.state==="on"&&t++;return t*7}getEvPowerFallback(){let t=this.getEntityNumeric("sensor.myenergi_zappi_30084500_internal_load_ct1",0);return t>0?t:this.getEntityNumeric("sensor.myenergi_zappi_30084500_power_ct_internal_load",0)}getSolarPowerFallback(){let t=this.getEntityNumeric("sensor.solax_snm9wncrqy_pv1_power",0),o=this.getEntityNumeric("sensor.solax_snm9wncrqy_pv2_power",0);return t+o>0?t+o:this.getEntityNumeric("sensor.solax_snm9wncrqy_ac_output_power",0)}loadStoredHistory(){try{let t=localStorage.getItem("ha_energy_flow_24h_history_v1");if(t){let o=JSON.parse(t);if(Array.isArray(o)&&o.length>0){let e=Date.now()-864e5,n=o.filter(s=>typeof s.time=="number"&&s.time>=e).sort((s,a)=>s.time-a.time);if(n.length>0)return n}}}catch(t){console.warn("Could not read stored energy history:",t)}return[]}saveStoredHistory(){try{if(!this._historyPoints||!this._historyPoints.length)return;let t=Date.now()-24*3600*1e3,o=this._historyPoints.filter(e=>e.time>=t);localStorage.setItem("ha_energy_flow_24h_history_v1",JSON.stringify(o))}catch{}}async fetchHistory(){this._lastHistoryFetchTime=Date.now();let t=new Date,o=new Date(t.getTime()-24*3600*1e3),e=this._config.solar_entity,n=this._config.grid_import_entity,s=null;if(this._hass&&this._hass.callWS)try{s=await this._hass.callWS({type:"history/history_during_period",start_time:o.toISOString(),end_time:t.toISOString(),entity_ids:[e,n],minimal_response:!0,no_attributes:!0})}catch{}if(!s)try{let a=await fetch(`api/ha-history?start_time=${encodeURIComponent(o.toISOString())}&filter_entity_id=${encodeURIComponent(e+","+n)}`);if(a.ok){let l=await a.json();l&&l.history&&(s=l.history)}}catch{}if(!s&&this._hass&&this._hass.callApi)try{s=await this._hass.callApi("GET",`history/period/${o.toISOString()}?filter_entity_id=${e},${n}&minimal_response&no_attributes&end_time=${t.toISOString()}`)}catch{}s&&(this.processHaHistoryData(s,e,n,o,t),this._historyFetched=!0)}processHaHistoryData(t,o,e,n,s){let a=[],l=[];if(Array.isArray(t)){for(let r of t)if(Array.isArray(r)&&r.length>0){let c=r[0].entity_id;c===o?a=r:c===e&&(l=r)}!a.length&&!l.length&&t.length>=2&&(a=t[0]||[],l=t[1]||[])}else t&&typeof t=="object"&&(a=t[o]||[],l=t[e]||[]);if(!a.length&&!l.length)return;let i=(r,c)=>{if(!r||!r.length)return null;let b=null;for(let _=0;_<r.length;_++){let m=r[_],$=m.last_changed||m.last_updated||m.lu||m.t;if(($?new Date($).getTime():0)<=c){let M=parseFloat(m.state||m.s);isNaN(M)||(b=(m.attributes?.unit_of_measurement||m.uom||"").toLowerCase()==="kw"?M*1e3:M)}else break}return b},p=288,g=n.getTime(),f=(s.getTime()-g)/p,u=[];for(let r=0;r<=p;r++){let c=g+r*f,b=i(a,c),_=i(l,c);(b!==null||_!==null)&&u.push({time:c,solar:Math.max(0,b!==null?b:0),grid:Math.max(0,_!==null?_:0)})}if(u.length>5){let r=new Map;for(let c of u)r.set(Math.round(c.time/6e4),c);for(let c of this._historyPoints){let b=Math.round(c.time/6e4);r.has(b)||r.set(b,c)}this._historyPoints=Array.from(r.values()).sort((c,b)=>c.time-b.time),this.saveStoredHistory(),this.updateChart()}}updateData(){if(!this.shadowRoot)return;let t=this.getEntityNumeric(this._config.solar_entity,-1);t<0&&(t=this.getSolarPowerFallback());let o=this.getEntityNumeric(this._config.grid_import_entity,0),e=this.getEntityNumeric(this._config.grid_export_entity,0);e>25e3&&(e=0);let n=0,s=0;e>10?(s=e,n=0):o<-10?(s=Math.abs(o),n=0):(n=Math.max(0,o),s=0);let a=this.getEntityNumeric(this._config.ev_entity,-1);a<0&&(a=this.getEvPowerFallback());let l=this.getEntityNumeric(this._config.tv_entity,0),i=this.getEntityNumeric(this._config.lights_entity,-1);i<0&&(i=this.getLightsPowerFallback());let p=this.getEntityNumeric(this._config.fridge_entity,0),g=a+l+i+p,h=Math.max(0,n+t-s);h<g&&(h=g),this._flows={solar:{active:t>5,watts:t,dur:this.calculateDuration(t),color:"#f59e0b",pathId:"path-solar"},grid_import:{active:n>5,watts:n,dur:this.calculateDuration(n),color:"#3b82f6",pathId:"path-grid-import"},grid_export:{active:s>5,watts:s,dur:this.calculateDuration(s),color:"#10b981",pathId:"path-grid-export"},ev:{active:a>5,watts:a,dur:this.calculateDuration(a),color:"#06d6a0",pathId:"path-ev"},tv:{active:l>5,watts:l,dur:this.calculateDuration(l),color:"#38bdf8",pathId:"path-tv"},lights:{active:i>2,watts:i,dur:this.calculateDuration(i),color:"#fbbf24",pathId:"path-lights"},fridge:{active:p>5,watts:p,dur:this.calculateDuration(p),color:"#a78bfa",pathId:"path-fridge"}};let f=(L,y,S,C)=>{let R=this.shadowRoot.querySelector(`#val-${L}`),W=this.shadowRoot.querySelector(`#sub-${L}`),G=this.shadowRoot.querySelector(`#box-${L}`),D=this.shadowRoot.querySelector(`#pill-${L}`);R&&(R.innerText=this.formatWatts(y)),W&&(W.innerText=this.formatKwSubtitle(y)),G&&(G.classList.toggle("active",S),S?(G.style.borderColor=C,G.style.boxShadow=`0 0 20px ${C}33`):(G.style.borderColor="rgba(255, 255, 255, 0.12)",G.style.boxShadow="none")),D&&(D.innerText=S?"ACTIVE":"IDLE",D.className=`status-pill ${S?"active":"idle"}`)};f("solar",t,t>5,"#f59e0b");let u=s>5,r=u?s:n,c=r>5,b=u?"#10b981":"#3b82f6",_=u?"Grid Export":"Grid Import",m=this.shadowRoot.querySelector("#title-grid");m&&(m.innerText=_),f("grid",r,c,b),f("home",h,h>5,"#0ea5e9"),f("ev",a,a>5,"#06d6a0"),f("tv",l,l>5,"#38bdf8"),f("lights",i,i>2,"#fbbf24"),f("fridge",p,p>5,"#a78bfa");let $=Date.now(),F=this._historyPoints.length?this._historyPoints[this._historyPoints.length-1]:null,M=F?$-F.time:999999,E=F?Math.abs(t-F.solar):9999,A=F?Math.abs(o-F.grid):9999;if(M>=2e4||E>=20||A>=20){this._historyPoints.push({time:$,solar:Math.max(0,Math.round(t||0)),grid:Math.max(0,Math.round(o||0))});let L=$-24*3600*1e3;this._historyPoints=this._historyPoints.filter(y=>y.time>=L),this.saveStoredHistory()}this.updateChart(t,o)}updateChart(t=null,o=null){if(!this.shadowRoot)return;let e=this._historyPoints||[],n=this.shadowRoot.querySelector("#chart-empty-state"),s=this.shadowRoot.querySelector("#chart-live-solar"),a=this.shadowRoot.querySelector("#chart-peak-solar"),l=this.shadowRoot.querySelector("#chart-total-solar"),i=this.shadowRoot.querySelector("#chart-live-grid"),p=this.shadowRoot.querySelector("#chart-peak-grid"),g=this.shadowRoot.querySelector("#chart-total-grid"),h=this.shadowRoot.querySelector("#chart-self-sufficiency"),f=this.shadowRoot.querySelector("#chart-recorder-status"),u=t!==null?t:e[e.length-1]?.solar||0,r=o!==null?o:e[e.length-1]?.grid||0;if(s&&(s.innerText=this.formatWatts(u)),i&&(i.innerText=this.formatWatts(r)),e.length<2){n&&(n.style.display="flex",n.innerHTML=`
          <div class="pulse-dot" style="width:10px;height:10px;"></div>
          <span>Recording real live energy telemetry...</span>
          <span style="font-size:10px;color:#64748b;">Waiting for 24h recorder samples (${e.length} sample logged)</span>
        `),f&&(f.innerText="Telemetry Logging Active");return}n&&(n.style.display="none");let c=0,b=0,_=0,m=0;for(let d=0;d<e.length;d++){let w=e[d];if(w.solar>c&&(c=w.solar),w.grid>b&&(b=w.grid),d>0){let x=(w.time-e[d-1].time)/1e3;_+=(w.solar+e[d-1].solar)/2*x,m+=(w.grid+e[d-1].grid)/2*x}}let $=_/36e5,F=m/36e5;if(a&&(a.innerText=`Peak ${this.formatWatts(c)}`),l&&(l.innerText=`Today ${$.toFixed(1)} kWh`),p&&(p.innerText=`Peak ${this.formatWatts(b)}`),g&&(g.innerText=`Imp ${F.toFixed(1)} kWh`),h)if(u>r&&u>50){let d=u-r;h.innerText=`\u{1F33F} 100% Green (+${d.toLocaleString()} W)`,h.className="chart-stat-badge surplus"}else if(u>30){let d=Math.round(u/(u+r)*100);h.innerText=`\u2600\uFE0F ${d}% Solar Offset`,h.className="chart-stat-badge partial"}else h.innerText=`\u26A1 Grid Powered (${r.toLocaleString()} W)`,h.className="chart-stat-badge grid";if(f){let d=Math.max(.1,(e[e.length-1].time-e[0].time)/36e5);d>=20?f.innerText=`Real 24h Recorder (${e.length} pts)`:f.innerText=`Live Recorded: ${d.toFixed(1)}h (${e.length} pts)`}let M=65,E=22,A=835,L=240,y=E+L,S=Math.max(c,b,2500),C=S>5e3?2e3:S>2e3?1e3:500,R=Math.ceil(S/C)*C,W=e[0].time,G=e[e.length-1].time,D=Math.max(1e3,G-W),z=d=>M+(d-W)/D*A,I=d=>y-Math.min(d,R)/R*L,X=this.shadowRoot.querySelector("#chart-grid-lines");if(X){let d="",w=Math.min(5,Math.max(3,Math.round(R/C))),x=R/w;for(let k=0;k<=w;k++){let v=k*x,T=I(v),H=v>=1e3?`${(v/1e3).toFixed(v%1e3===0?0:1)} kW`:`${Math.round(v)} W`;d+=`
          <line x1="${M}" y1="${T}" x2="${M+A}" y2="${T}" stroke="rgba(255, 255, 255, 0.05)" stroke-dasharray="3 4" />
          <text x="${M-12}" y="${T+4}" fill="#64748b" font-size="10" font-weight="600" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, sans-serif">${H}</text>
        `}X.innerHTML=d}let Z=this.shadowRoot.querySelector("#chart-x-labels");if(Z){let d="";for(let x=0;x<=6;x++){let k=W+x/6*D,v=z(k),T=new Date(k),H=`${String(T.getHours()).padStart(2,"0")}:${String(T.getMinutes()).padStart(2,"0")}`,O=x===6?"Now":H;d+=`
          <line x1="${v}" y1="${y}" x2="${v}" y2="${y+4}" stroke="rgba(255, 255, 255, 0.15)" />
          <text x="${v}" y="${y+18}" fill="#94a3b8" font-size="10" font-weight="600" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif">${O}</text>
        `}Z.innerHTML=d}let q=e.map(d=>({x:z(d.time),y:I(d.solar),...d})),P=e.map(d=>({x:z(d.time),y:I(d.grid),...d}));this._cachedSolarCoords=q,this._cachedGridCoords=P;let j=this.buildSmoothPath(q),N=this.buildSmoothPath(P),it=`${j} L ${q[q.length-1].x.toFixed(1)} ${y} L ${q[0].x.toFixed(1)} ${y} Z`,st=`${N} L ${P[P.length-1].x.toFixed(1)} ${y} L ${P[0].x.toFixed(1)} ${y} Z`,Y=this.shadowRoot.querySelector("#chart-solar-line"),K=this.shadowRoot.querySelector("#chart-solar-glow"),U=this.shadowRoot.querySelector("#chart-solar-area"),J=this.shadowRoot.querySelector("#chart-grid-line"),Q=this.shadowRoot.querySelector("#chart-grid-glow"),tt=this.shadowRoot.querySelector("#chart-grid-area");Y&&Y.setAttribute("d",j),K&&K.setAttribute("d",j),U&&U.setAttribute("d",it),J&&J.setAttribute("d",N),Q&&Q.setAttribute("d",N),tt&&tt.setAttribute("d",st);let et=this.shadowRoot.querySelector("#chart-surplus-area");if(et){let d="",w=!1,x=[];for(let k=0;k<e.length;k++){let v=q[k],T=P[k];if(v.solar>T.grid&&v.solar>80)w?x.push(v):(w=!0,x=[v]);else{if(w&&x.length>1){let H=this.buildSmoothPath(x),O=x[0].x.toFixed(1),ot=x[x.length-1].x.toFixed(1);d+=`${H} L ${ot} ${y} L ${O} ${y} Z `}w=!1,x=[]}}if(w&&x.length>1){let k=this.buildSmoothPath(x),v=x[0].x.toFixed(1),T=x[x.length-1].x.toFixed(1);d+=`${k} L ${T} ${y} L ${v} ${y} Z`}et.setAttribute("d",d)}}buildSmoothPath(t){if(!t||!t.length)return"";if(t.length===1)return`M ${t[0].x.toFixed(1)} ${t[0].y.toFixed(1)}`;if(t.length===2)return`M ${t[0].x.toFixed(1)} ${t[0].y.toFixed(1)} L ${t[1].x.toFixed(1)} ${t[1].y.toFixed(1)}`;let o=t.length,e=new Float64Array(o-1),n=new Float64Array(o-1),s=new Float64Array(o-1);for(let i=0;i<o-1;i++)e[i]=t[i+1].x-t[i].x,n[i]=t[i+1].y-t[i].y,s[i]=e[i]===0?0:n[i]/e[i];let a=new Float64Array(o);a[0]=s[0];for(let i=1;i<o-1;i++)s[i-1]*s[i]<=0?a[i]=0:a[i]=(s[i-1]+s[i])/2;a[o-1]=s[o-2];for(let i=0;i<o-1;i++)if(s[i]===0)a[i]=0,a[i+1]=0;else{let p=a[i]/s[i],g=a[i+1]/s[i],h=p*p+g*g;if(h>9){let f=3/Math.sqrt(h);a[i]=f*p*s[i],a[i+1]=f*g*s[i]}}let l=`M ${t[0].x.toFixed(1)} ${t[0].y.toFixed(1)}`;for(let i=0;i<o-1;i++){let p=t[i],g=t[i+1],h=e[i]/3,f=p.x+h,u=p.y+a[i]*h,r=g.x-h,c=g.y-a[i+1]*h;l+=` C ${f.toFixed(1)} ${u.toFixed(1)}, ${r.toFixed(1)} ${c.toFixed(1)}, ${g.x.toFixed(1)} ${g.y.toFixed(1)}`}return l}setupChartScrubber(){let t=this.shadowRoot.querySelector("#chart-svg"),o=this.shadowRoot.querySelector("#chart-tooltip"),e=this.shadowRoot.querySelector("#chart-cursor-line"),n=this.shadowRoot.querySelector("#chart-cursor-solar"),s=this.shadowRoot.querySelector("#chart-cursor-grid");if(!t||!o)return;let a=i=>{let p=this._cachedSolarCoords;if(!p||p.length<2)return;let g=t.getBoundingClientRect(),u=((i.touches?i.touches[0].clientX:i.clientX)-g.left)/g.width*920,r=p[0],c=999999;for(let S of p){let C=Math.abs(S.x-u);C<c&&(c=C,r=S)}if(!r)return;let b=this._cachedGridCoords?this._cachedGridCoords.find(S=>S.time===r.time):null,_=b?b.y:262,m=b?b.grid:0;e&&(e.style.display="block",e.setAttribute("x1",r.x),e.setAttribute("x2",r.x)),n&&(n.style.display="block",n.setAttribute("cx",r.x),n.setAttribute("cy",r.y)),s&&(s.style.display="block",s.setAttribute("cx",r.x),s.setAttribute("cy",_));let $=new Date(r.time),F=new Date().toDateString()===$.toDateString(),M=`${String($.getHours()).padStart(2,"0")}:${String($.getMinutes()).padStart(2,"0")}`,E=F?"Today":"Yesterday",A="";r.solar>m&&r.solar>80?A=`<div style="display:inline-block;margin-top:6px;padding:2px 8px;border-radius:6px;background:rgba(16,185,129,0.18);border:1px solid rgba(16,185,129,0.35);color:#10b981;font-weight:700;font-size:10px;">\u{1F33F} 100% Green (+${(r.solar-m).toLocaleString()} W surplus)</div>`:m>r.solar&&(A=`<div style="display:inline-block;margin-top:6px;padding:2px 8px;border-radius:6px;background:rgba(56,189,248,0.15);border:1px solid rgba(56,189,248,0.3);color:#38bdf8;font-weight:600;font-size:10px;">\u26A1 Grid Demand (${(m-r.solar).toLocaleString()} W imported)</div>`),o.innerHTML=`
        <div style="font-weight:700;color:#94a3b8;font-size:11px;margin-bottom:6px;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:3px;display:flex;justify-content:space-between;gap:12px;">
          <span>\u{1F552} ${E}, ${M}</span>
          <span style="color:#64748b;font-weight:600;">Real Telemetry</span>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;color:#f59e0b;font-weight:700;font-size:12px;margin-bottom:3px;">
          <span style="display:flex;align-items:center;gap:6px;"><span style="width:7px;height:7px;border-radius:50%;background:#f59e0b;display:inline-block;"></span>Solar:</span>
          <span style="font-variant-numeric:tabular-nums;">${Math.round(r.solar).toLocaleString()} W</span>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;color:#38bdf8;font-weight:700;font-size:12px;">
          <span style="display:flex;align-items:center;gap:6px;"><span style="width:7px;height:7px;border-radius:50%;background:#38bdf8;display:inline-block;"></span>Grid Demand:</span>
          <span style="font-variant-numeric:tabular-nums;">${Math.round(m).toLocaleString()} W</span>
        </div>
        ${A}
      `,o.style.display="block";let L=r.x/920*g.width,y=Math.min(Math.min(r.y,_)/300*g.height,g.height-70);o.style.left=`${L}px`,o.style.top=`${Math.max(12,y)}px`},l=()=>{e&&(e.style.display="none"),n&&(n.style.display="none"),s&&(s.style.display="none"),o&&(o.style.display="none")};t.addEventListener("pointermove",a),t.addEventListener("pointerleave",l),t.addEventListener("touchmove",a,{passive:!0}),t.addEventListener("touchend",l)}startAnimation(){if(this._animFrame)return;let t=["solar","grid_import","grid_export","ev","tv","lights","fridge"];for(let e of t)this._particles[e]||(this._particles[e]=[0,.33,.66]);let o=e=>{this._lastTimestamp||(this._lastTimestamp=e);let n=(e-this._lastTimestamp)/1e3;if(this._lastTimestamp=e,this._flows)for(let[s,a]of Object.entries(this._flows)){let l=this.shadowRoot.querySelector(`#${a.pathId}`),i=this.shadowRoot.querySelector(`#particles-${s}`);if(!l||!i)continue;if(!a.active||a.dur<=0){i.style.opacity="0";continue}i.style.opacity="1";let p=l.getTotalLength?l.getTotalLength():0;if(p<=0)continue;let g=n/a.dur,h=i.querySelectorAll("circle");this._particles[s]=this._particles[s].map((f,u)=>{let r=(f+g)%1,c=l.getPointAtLength(r*p);return h[u]&&(h[u].setAttribute("cx",c.x),h[u].setAttribute("cy",c.y)),r})}this._animFrame=requestAnimationFrame(o)};this._animFrame=requestAnimationFrame(o)}stopAnimation(){this._animFrame&&(cancelAnimationFrame(this._animFrame),this._animFrame=null)}render(){let t=this._config.title||"Live Energy Flow";this.shadowRoot.innerHTML=`
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
          padding: 8px 10px;
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
              <path id="path-solar" class="flow-path-bg" d="M 185 95 C 265 95, 255 195, 325 195" />
              <path class="flow-path-glow" stroke="#f59e0b" d="M 185 95 C 265 95, 255 195, 325 195" />

              <!-- 2. Grid to Home (Import) -->
              <path id="path-grid-import" class="flow-path-bg" d="M 185 335 C 265 335, 255 245, 325 245" />
              <path class="flow-path-glow" stroke="#3b82f6" d="M 185 335 C 265 335, 255 245, 325 245" />

              <!-- 3. Home to Grid (Export) -->
              <path id="path-grid-export" class="flow-path-bg" d="M 325 245 C 255 245, 265 335, 185 335" />
              <path class="flow-path-glow" stroke="#10b981" d="M 325 245 C 255 245, 265 335, 185 335" />

              <!-- 4. Home to Zappi EV -->
              <path id="path-ev" class="flow-path-bg" d="M 455 190 C 525 190, 525 65, 595 65" />
              <path class="flow-path-glow" stroke="#06d6a0" d="M 455 190 C 525 190, 525 65, 595 65" />

              <!-- 5. Home to LG TV -->
              <path id="path-tv" class="flow-path-bg" d="M 455 205 C 525 205, 525 165, 595 165" />
              <path class="flow-path-glow" stroke="#38bdf8" d="M 455 205 C 525 205, 525 165, 595 165" />

              <!-- 6. Home to Lights -->
              <path id="path-lights" class="flow-path-bg" d="M 455 235 C 525 235, 525 265, 595 265" />
              <path class="flow-path-glow" stroke="#fbbf24" d="M 455 235 C 525 235, 525 265, 595 265" />

              <!-- 7. Home to Fridge -->
              <path id="path-fridge" class="flow-path-bg" d="M 455 250 C 525 250, 525 365, 595 365" />
              <path class="flow-path-glow" stroke="#a78bfa" d="M 455 250 C 525 250, 525 365, 595 365" />

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
              <g id="particles-fridge" fill="#a78bfa" style="opacity:0;">
                <circle class="particle-dot" />
                <circle class="particle-dot" />
                <circle class="particle-dot" />
              </g>

              <!-- 1. Solar Inverter Node (Top Left) -->
              <foreignObject x="20" y="60" width="165" height="70">
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
              <foreignObject x="20" y="300" width="165" height="70">
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
              <foreignObject x="325" y="170" width="130" height="95">
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
              <foreignObject x="595" y="30" width="165" height="70">
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
              <foreignObject x="595" y="130" width="165" height="70">
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

              <!-- 6. Matter Lights (Mid-Bottom Right) -->
              <foreignObject x="595" y="230" width="165" height="70">
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

              <!-- 7. Fridge (Bottom Right) -->
              <foreignObject x="595" y="330" width="165" height="70">
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
    `;let o=this.shadowRoot.querySelector("#content-wrap"),e=this.shadowRoot.querySelectorAll(".mode-tab");e.forEach(s=>{s.addEventListener("click",()=>{e.forEach(l=>l.classList.remove("active")),s.classList.add("active");let a=s.getAttribute("data-mode");this._viewMode=a,o&&(o.className=`card-content-wrap mode-${a}`),(a==="chart"||a==="split")&&this.updateChart()})});let n=this.shadowRoot.querySelector("#btn-card-fs");n&&(n.addEventListener("click",()=>{let s=document;if(s.fullscreenElement)s.exitFullscreen&&s.exitFullscreen().catch(a=>console.warn(a));else{let a=this.closest(".card-stage")||this;a.requestFullscreen?a.requestFullscreen().catch(l=>console.warn(l)):s.documentElement.requestFullscreen&&s.documentElement.requestFullscreen().catch(l=>console.warn(l))}}),document.addEventListener("fullscreenchange",()=>{let s=!!document.fullscreenElement;n.innerHTML=s?"\u2715":"\u26F6",n.title=s?"Exit Fullscreen":"Toggle Fullscreen"})),this.setupChartScrubber(),this.updateData(),this.updateChart()}};customElements.get("ha-energy-flow-card")||customElements.define("ha-energy-flow-card",V);window.customCards=window.customCards||[];window.customCards.some(B=>B.type==="ha-energy-flow-card")||window.customCards.push({type:"ha-energy-flow-card",name:"2D Live Energy Flow Monitor",description:"Apple iOS dark aesthetic live 2D animated energy flow card & rolling 24h trend chart for Solar & Grid"});export{V as HaEnergyFlowCard};
//# sourceMappingURL=ha-energy-flow-card.js.map
