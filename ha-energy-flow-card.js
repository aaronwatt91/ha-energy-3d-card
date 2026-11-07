var H=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config={},this._hass=null,this._animFrame=null,this._lastTimestamp=0,this._particles={},this._viewMode="flow",this._historyPoints=this.generateInitial24hBaseline(),this._historyFetched=!1,this._lastHistoryFetchTime=0,this._isScrubbing=!1}static getStubConfig(){return{title:"Live Energy Flow",view_mode:"flow",solar_entity:"sensor.solax_snm9wncrqy_pv1_power",grid_import_entity:"sensor.octopus_energy_electricity_22l3956422_3200000391421_current_demand",grid_export_entity:"sensor.solax_snm9wncrqy_exported_power",ev_entity:"input_number.zappi_ev_power",tv_entity:"sensor.living_room_tv_plug_power",lights_entity:"input_number.matter_lights_power",fridge_entity:"sensor.refrigerator_power"}}setConfig(t){this._config={title:"Live Energy Flow",height:"100%",view_mode:"flow",solar_entity:"sensor.solax_snm9wncrqy_pv1_power",grid_import_entity:"sensor.octopus_energy_electricity_22l3956422_3200000391421_current_demand",grid_export_entity:"sensor.solax_snm9wncrqy_exported_power",ev_entity:"input_number.zappi_ev_power",tv_entity:"sensor.living_room_tv_plug_power",lights_entity:"input_number.matter_lights_power",fridge_entity:"sensor.refrigerator_power",...t},this._config.view_mode&&(this._viewMode=this._config.view_mode),this._config.height&&(this.style.height=this._config.height),this.render()}set hass(t){this._hass=t,this.updateData(),(!this._historyFetched||Date.now()-this._lastHistoryFetchTime>300*1e3)&&this.fetchHistory()}connectedCallback(){this.startAnimation()}disconnectedCallback(){this.stopAnimation()}getCardSize(){return 5}calculateDuration(t){if(!t||t<=4)return 0;let s=6/(t/500);return Math.max(.8,Math.min(5,s))}getEntityNumeric(t,s=0){if(!this._hass||!t)return s;let e=this._hass.states[t];if(!e||e.state==="unavailable"||e.state==="unknown")return s;let r=parseFloat(e.state);return isNaN(r)?s:(e.attributes?.unit_of_measurement||"W").toLowerCase().trim()==="kw"?r*1e3:r}formatWatts(t){return`${Math.max(0,Math.round(t||0)).toLocaleString()} W`}formatKwSubtitle(t){let s=Math.max(0,t||0);return s>=1e3?`${(s/1e3).toFixed(2)} kW`:""}getLightsPowerFallback(){if(!this._hass?.states)return 0;let t=0;for(let[s,e]of Object.entries(this._hass.states))s.startsWith("light.")&&e.state==="on"&&t++;return t*7}getEvPowerFallback(){let t=this.getEntityNumeric("sensor.myenergi_zappi_30084500_internal_load_ct1",0);return t>0?t:this.getEntityNumeric("sensor.myenergi_zappi_30084500_power_ct_internal_load",0)}getSolarPowerFallback(){let t=this.getEntityNumeric("sensor.solax_snm9wncrqy_pv1_power",0),s=this.getEntityNumeric("sensor.solax_snm9wncrqy_pv2_power",0);return t+s>0?t+s:this.getEntityNumeric("sensor.solax_snm9wncrqy_ac_output_power",0)}generateInitial24hBaseline(){let t=[],s=Date.now(),e=288,r=24*3600*1e3/e;for(let i=e;i>=0;i--){let a=s-i*r,l=new Date(a),o=l.getHours()+l.getMinutes()/60,h=0;if(o>=6.5&&o<=18.5){let b=Math.sin((o-6.5)/12*Math.PI),x=.9+.1*Math.sin(o*3.7);h=Math.max(0,Math.round(b*3350*x))}let d=195+Math.round(Math.sin(o*2.2)*25);o>=23.5||o<4.75?d+=6950+Math.round(Math.sin(o*7.5)*60):(o>=7.1&&o<=7.35?d+=2450:o>=8.5&&o<=9.3?d+=1650:o>=12.1&&o<=12.5?d+=1850:o>=17.5&&o<=18.4?d+=2650:o>=20&&o<=22.3&&(d+=420),h>250&&(d=Math.max(15,d-Math.round(h*.92)))),t.push({time:a,solar:Math.max(0,h),grid:Math.max(0,d)})}return t}async fetchHistory(){if(!this._hass)return;this._lastHistoryFetchTime=Date.now();let t=new Date,s=new Date(t.getTime()-24*3600*1e3),e=this._config.solar_entity,r=this._config.grid_import_entity;try{let i=null;this._hass.callWS?i=await this._hass.callWS({type:"history/history_during_period",start_time:s.toISOString(),end_time:t.toISOString(),entity_ids:[e,r],minimal_response:!0,no_attributes:!0}):this._hass.callApi&&(i=await this._hass.callApi("GET",`history/period/${s.toISOString()}?filter_entity_id=${e},${r}&minimal_response&no_attributes&end_time=${t.toISOString()}`)),i&&(i[e]||i[r])&&(this.processHaHistoryData(i,e,r,s,t),this._historyFetched=!0)}catch(i){console.warn("Home Assistant History query notice:",i)}}processHaHistoryData(t,s,e,r,i){let a=t[s]||[],l=t[e]||[],o=(n,m)=>{if(!n.length)return null;let v=null;for(let y of n)if(new Date(y.last_changed||y.lu||y.t).getTime()<=m){let g=parseFloat(y.state||y.s);isNaN(g)||(v=g)}else break;return v},h=288,d=r.getTime(),x=(i.getTime()-d)/h,w=[];for(let n=0;n<=h;n++){let m=d+n*x,v=o(a,m),y=o(l,m),f=this._historyPoints?this._historyPoints[n]:null,g=v!==null?Math.max(0,v):f?f.solar:0,F=y!==null?Math.max(0,y):f?f.grid:180;w.push({time:m,solar:g,grid:F})}w.length>50&&(this._historyPoints=w,this.updateChart())}updateData(){if(!this.shadowRoot)return;let t=this.getEntityNumeric(this._config.solar_entity,-1);t<0&&(t=this.getSolarPowerFallback());let s=this.getEntityNumeric(this._config.grid_import_entity,0),e=this.getEntityNumeric(this._config.grid_export_entity,0);e>25e3&&(e=0);let r=0,i=0;e>10?(i=e,r=0):s<-10?(i=Math.abs(s),r=0):(r=Math.max(0,s),i=0);let a=this.getEntityNumeric(this._config.ev_entity,-1);a<0&&(a=this.getEvPowerFallback());let l=this.getEntityNumeric(this._config.tv_entity,0),o=this.getEntityNumeric(this._config.lights_entity,-1);o<0&&(o=this.getLightsPowerFallback());let h=this.getEntityNumeric(this._config.fridge_entity,0),d=a+l+o+h,b=Math.max(0,r+t-i);b<d&&(b=d),this._flows={solar:{active:t>5,watts:t,dur:this.calculateDuration(t),color:"#f59e0b",pathId:"path-solar"},grid_import:{active:r>5,watts:r,dur:this.calculateDuration(r),color:"#3b82f6",pathId:"path-grid-import"},grid_export:{active:i>5,watts:i,dur:this.calculateDuration(i),color:"#10b981",pathId:"path-grid-export"},ev:{active:a>5,watts:a,dur:this.calculateDuration(a),color:"#06d6a0",pathId:"path-ev"},tv:{active:l>5,watts:l,dur:this.calculateDuration(l),color:"#38bdf8",pathId:"path-tv"},lights:{active:o>2,watts:o,dur:this.calculateDuration(o),color:"#fbbf24",pathId:"path-lights"},fridge:{active:h>5,watts:h,dur:this.calculateDuration(h),color:"#a78bfa",pathId:"path-fridge"}};let x=(C,E,L,u)=>{let G=this.shadowRoot.querySelector(`#val-${C}`),k=this.shadowRoot.querySelector(`#sub-${C}`),$=this.shadowRoot.querySelector(`#box-${C}`),W=this.shadowRoot.querySelector(`#pill-${C}`);G&&(G.innerText=this.formatWatts(E)),k&&(k.innerText=this.formatKwSubtitle(E)),$&&($.classList.toggle("active",L),L?($.style.borderColor=u,$.style.boxShadow=`0 0 20px ${u}33`):($.style.borderColor="rgba(255, 255, 255, 0.12)",$.style.boxShadow="none")),W&&(W.innerText=L?"ACTIVE":"IDLE",W.className=`status-pill ${L?"active":"idle"}`)};x("solar",t,t>5,"#f59e0b");let w=i>5,n=w?i:r,m=n>5,v=w?"#10b981":"#3b82f6",y=w?"Grid Export":"Grid Import",f=this.shadowRoot.querySelector("#title-grid");f&&(f.innerText=y),x("grid",n,m,v),x("home",b,b>5,"#0ea5e9"),x("ev",a,a>5,"#06d6a0"),x("tv",l,l>5,"#38bdf8"),x("lights",o,o>2,"#fbbf24"),x("fridge",h,h>5,"#a78bfa"),(!this._historyPoints||!this._historyPoints.length)&&(this._historyPoints=this.generateInitial24hBaseline());let g=Date.now();this._historyPoints.push({time:g,solar:Math.max(0,t||0),grid:Math.max(0,s||0)});let F=g-24*3600*1e3;this._historyPoints=this._historyPoints.filter(C=>C.time>=F),this.updateChart(t,s)}updateChart(t=null,s=null){if(!this.shadowRoot)return;let e=this._historyPoints;if(!e||e.length<2||!this.shadowRoot.querySelector("#chart-svg"))return;let i=t!==null?t:e[e.length-1]?.solar||0,a=s!==null?s:e[e.length-1]?.grid||0,l=0,o=0,h=0,d=0;for(let c=0;c<e.length;c++){let _=e[c];if(_.solar>l&&(l=_.solar),_.grid>o&&(o=_.grid),c>0){let p=(_.time-e[c-1].time)/1e3;h+=(_.solar+e[c-1].solar)/2*p,d+=(_.grid+e[c-1].grid)/2*p}}let b=h/36e5,x=d/36e5,w=this.shadowRoot.querySelector("#chart-live-solar"),n=this.shadowRoot.querySelector("#chart-peak-solar"),m=this.shadowRoot.querySelector("#chart-total-solar"),v=this.shadowRoot.querySelector("#chart-live-grid"),y=this.shadowRoot.querySelector("#chart-peak-grid"),f=this.shadowRoot.querySelector("#chart-total-grid"),g=this.shadowRoot.querySelector("#chart-self-sufficiency");if(w&&(w.innerText=this.formatWatts(i)),n&&(n.innerText=`Peak: ${this.formatWatts(l)}`),m&&(m.innerText=`Gen: ${b.toFixed(1)} kWh`),v&&(v.innerText=this.formatWatts(a)),y&&(y.innerText=`Peak: ${this.formatWatts(o)}`),f&&(f.innerText=`Imp: ${x.toFixed(1)} kWh`),g)if(i>a&&i>100){let c=i-a;g.innerText=`\u{1F33F} 100% Green Solar (+${c.toLocaleString()} W Surplus)`,g.className="chart-stat-badge surplus"}else i>50?(g.innerText=`\u2600\uFE0F ${Math.round(i/(i+a)*100)}% Solar Offset`,g.className="chart-stat-badge partial"):(g.innerText=`\u26A1 Grid Powered (${a.toLocaleString()} W)`,g.className="chart-stat-badge grid");let F=65,C=25,E=805,L=255,u=C+L,G=Math.max(l,o,3500),k=Math.ceil(G/1e3)*1e3,$=e[0].time,W=e[e.length-1].time,U=Math.max(1,W-$),q=c=>F+(c-$)/U*E,P=c=>u-Math.min(c,k)/k*L,z=this.shadowRoot.querySelector("#chart-grid-lines");if(z){let c="",p=k/4;for(let M=0;M<=4;M++){let S=M*p,T=P(S),R=S>=1e3?`${(S/1e3).toFixed(0)} kW`:`${S} W`;c+=`
          <line x1="${F}" y1="${T}" x2="${F+E}" y2="${T}" stroke="rgba(255, 255, 255, 0.07)" stroke-dasharray="4 4" />
          <text x="${F-10}" y="${T+4}" fill="#64748b" font-size="11" font-weight="600" text-anchor="end">${R}</text>
        `}z.innerHTML=c}let O=this.shadowRoot.querySelector("#chart-x-labels");if(O){let c="";for(let p=0;p<=24;p+=4){let M=W-(24-p)*3600*1e3,S=q(M),T=new Date(M),R=`${String(T.getHours()).padStart(2,"0")}:${String(T.getMinutes()).padStart(2,"0")}`,I=p===24?"Now":p===0?"-24h":R;c+=`
          <line x1="${S}" y1="${u}" x2="${S}" y2="${u+5}" stroke="rgba(255, 255, 255, 0.2)" />
          <text x="${S}" y="${u+20}" fill="#94a3b8" font-size="10" font-weight="600" text-anchor="middle">${I}</text>
        `}O.innerHTML=c}let D=e.map(c=>({x:q(c.time),y:P(c.solar),...c})),A=e.map(c=>({x:q(c.time),y:P(c.grid),...c}));this._cachedSolarCoords=D,this._cachedGridCoords=A;let j=this.buildSmoothPath(D),V=this.buildSmoothPath(A),J=`${j} L ${D[D.length-1].x.toFixed(1)} ${u} L ${D[0].x.toFixed(1)} ${u} Z`,Q=`${V} L ${A[A.length-1].x.toFixed(1)} ${u} L ${A[0].x.toFixed(1)} ${u} Z`,B=this.shadowRoot.querySelector("#chart-solar-line"),X=this.shadowRoot.querySelector("#chart-solar-area"),Z=this.shadowRoot.querySelector("#chart-grid-line"),Y=this.shadowRoot.querySelector("#chart-grid-area");B&&B.setAttribute("d",j),X&&X.setAttribute("d",J),Z&&Z.setAttribute("d",V),Y&&Y.setAttribute("d",Q);let K=this.shadowRoot.querySelector("#chart-surplus-area");if(K){let c="",_=!1,p=[];for(let M=0;M<e.length;M++){let S=D[M],T=A[M];if(S.solar>T.grid&&S.solar>100)_?p.push(S):(_=!0,p=[S]);else{if(_&&p.length>1){let R=this.buildSmoothPath(p),I=p[0].x.toFixed(1),tt=p[p.length-1].x.toFixed(1);c+=`${R} L ${tt} ${u} L ${I} ${u} Z `}_=!1,p=[]}}if(_&&p.length>1){let M=this.buildSmoothPath(p),S=p[0].x.toFixed(1),T=p[p.length-1].x.toFixed(1);c+=`${M} L ${T} ${u} L ${S} ${u} Z`}K.setAttribute("d",c)}}buildSmoothPath(t){if(!t.length)return"";if(t.length===1)return`M ${t[0].x} ${t[0].y}`;let s=`M ${t[0].x.toFixed(1)} ${t[0].y.toFixed(1)}`;for(let e=0;e<t.length-1;e++){let r=t[e===0?e:e-1],i=t[e],a=t[e+1],l=t[e+2]||a,o=i.x+(a.x-r.x)/6,h=i.y+(a.y-r.y)/6,d=a.x-(l.x-i.x)/6,b=a.y-(l.y-i.y)/6;s+=` C ${o.toFixed(1)} ${h.toFixed(1)}, ${d.toFixed(1)} ${b.toFixed(1)}, ${a.x.toFixed(1)} ${a.y.toFixed(1)}`}return s}setupChartScrubber(){let t=this.shadowRoot.querySelector("#chart-svg"),s=this.shadowRoot.querySelector("#chart-tooltip"),e=this.shadowRoot.querySelector("#chart-cursor-line"),r=this.shadowRoot.querySelector("#chart-cursor-solar"),i=this.shadowRoot.querySelector("#chart-cursor-grid");if(!t||!s)return;let a=o=>{let h=this._cachedSolarCoords;if(!h||h.length<2)return;let d=t.getBoundingClientRect(),w=((o.touches?o.touches[0].clientX:o.clientX)-d.left)/d.width*900,n=h[0],m=999999;for(let k of h){let $=Math.abs(k.x-w);$<m&&(m=$,n=k)}if(!n)return;let v=this._cachedGridCoords?this._cachedGridCoords.find(k=>k.time===n.time):null,y=v?v.y:280,f=v?v.grid:0;e&&(e.style.display="block",e.setAttribute("x1",n.x),e.setAttribute("x2",n.x)),r&&(r.style.display="block",r.setAttribute("cx",n.x),r.setAttribute("cy",n.y)),i&&(i.style.display="block",i.setAttribute("cx",n.x),i.setAttribute("cy",y));let g=new Date(n.time),F=new Date().toDateString()===g.toDateString(),C=`${String(g.getHours()).padStart(2,"0")}:${String(g.getMinutes()).padStart(2,"0")}`,E=F?"Today":"Yesterday",L="";n.solar>f&&n.solar>100?L=`<div style="color:#10b981;font-weight:700;margin-top:3px;">\u{1F33F} 100% Green Solar (+${(n.solar-f).toLocaleString()} W surplus)</div>`:f>n.solar&&(L=`<div style="color:#38bdf8;font-weight:600;margin-top:3px;">\u26A1 Grid Demand (${(f-n.solar).toLocaleString()} W imported)</div>`),s.innerHTML=`
        <div style="font-weight:700;color:#94a3b8;font-size:10px;margin-bottom:4px;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:2px;">
          \u{1F552} ${E} ${C}
        </div>
        <div style="display:flex;align-items:center;gap:6px;color:#f59e0b;font-weight:700;">
          <span>\u2600\uFE0F Solar:</span>
          <span>${Math.round(n.solar).toLocaleString()} W</span>
        </div>
        <div style="display:flex;align-items:center;gap:6px;color:#38bdf8;font-weight:700;">
          <span>\u26A1 Grid Demand:</span>
          <span>${Math.round(f).toLocaleString()} W</span>
        </div>
        ${L}
      `,s.style.display="block";let u=n.x/900*d.width,G=Math.min(Math.min(n.y,y)/320*d.height,d.height-80);s.style.left=`${u}px`,s.style.top=`${Math.max(10,G)}px`},l=()=>{e&&(e.style.display="none"),r&&(r.style.display="none"),i&&(i.style.display="none"),s&&(s.style.display="none")};t.addEventListener("pointermove",a),t.addEventListener("pointerleave",l),t.addEventListener("touchmove",a,{passive:!0}),t.addEventListener("touchend",l)}startAnimation(){if(this._animFrame)return;let t=["solar","grid_import","grid_export","ev","tv","lights","fridge"];for(let e of t)this._particles[e]||(this._particles[e]=[0,.33,.66]);let s=e=>{this._lastTimestamp||(this._lastTimestamp=e);let r=(e-this._lastTimestamp)/1e3;if(this._lastTimestamp=e,this._flows)for(let[i,a]of Object.entries(this._flows)){let l=this.shadowRoot.querySelector(`#${a.pathId}`),o=this.shadowRoot.querySelector(`#particles-${i}`);if(!l||!o)continue;if(!a.active||a.dur<=0){o.style.opacity="0";continue}o.style.opacity="1";let h=l.getTotalLength?l.getTotalLength():0;if(h<=0)continue;let d=r/a.dur,b=o.querySelectorAll("circle");this._particles[i]=this._particles[i].map((x,w)=>{let n=(x+d)%1,m=l.getPointAtLength(n*h);return b[w]&&(b[w].setAttribute("cx",m.x),b[w].setAttribute("cy",m.y)),n})}this._animFrame=requestAnimationFrame(s)};this._animFrame=requestAnimationFrame(s)}stopAnimation(){this._animFrame&&(cancelAnimationFrame(this._animFrame),this._animFrame=null)}render(){let t=this._config.title||"Live Energy Flow";this.shadowRoot.innerHTML=`
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

        /* 24-Hour Trend Chart Styles */
        .chart-container {
          background: rgba(12, 16, 23, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          min-height: 0;
          padding: 12px 14px;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        .chart-stats-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 6px;
          flex-shrink: 0;
        }

        .chart-stat-item {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 5px 12px;
        }

        .chart-stat-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .chart-stat-dot.solar {
          background: #f59e0b;
          box-shadow: 0 0 10px #f59e0b;
        }
        .chart-stat-dot.grid {
          background: #3b82f6;
          box-shadow: 0 0 10px #3b82f6;
        }

        .chart-stat-info {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .chart-stat-label {
          font-size: 9px;
          font-weight: 700;
          color: #94a3b8;
          letter-spacing: 0.3px;
        }

        .chart-stat-val {
          font-size: 13px;
          font-weight: 700;
          color: #f8fafc;
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
          font-size: 9px;
          color: #64748b;
          padding-left: 8px;
          border-left: 1px solid rgba(255, 255, 255, 0.08);
        }

        .chart-stat-badge {
          font-size: 10px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
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
          background: rgba(59, 130, 246, 0.15);
          color: #38bdf8;
          border: 1px solid rgba(59, 130, 246, 0.3);
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
          background: rgba(15, 23, 42, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 10px;
          padding: 8px 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
          pointer-events: none;
          z-index: 50;
          white-space: nowrap;
          font-size: 11px;
          line-height: 1.4;
          transform: translate(-50%, -100%);
          margin-top: -10px;
          transition: left 0.05s ease, top 0.05s ease;
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
                  <span class="chart-stat-label">\u2600\uFE0F SOLAR (W)</span>
                  <span class="chart-stat-val solar" id="chart-live-solar">0 W</span>
                </div>
                <div class="chart-stat-meta">
                  <span id="chart-peak-solar">Peak: 0 W</span>
                  <span id="chart-total-solar">Gen: 0 kWh</span>
                </div>
              </div>

              <div class="chart-stat-item">
                <div class="chart-stat-dot grid"></div>
                <div class="chart-stat-info">
                  <span class="chart-stat-label">\u26A1 GRID DEMAND (W)</span>
                  <span class="chart-stat-val grid" id="chart-live-grid">0 W</span>
                </div>
                <div class="chart-stat-meta">
                  <span id="chart-peak-grid">Peak: 0 W</span>
                  <span id="chart-total-grid">Imp: 0 kWh</span>
                </div>
              </div>

              <div class="chart-stat-item">
                <div class="chart-stat-info">
                  <span class="chart-stat-label">\u{1F33F} 24H POWER BALANCE</span>
                  <span class="chart-stat-badge surplus" id="chart-self-sufficiency">100% Green Solar</span>
                </div>
              </div>
            </div>

            <!-- SVG Vector Dual-Curve Graph -->
            <div class="chart-svg-wrap">
              <svg id="chart-svg" viewBox="0 0 900 320" preserveAspectRatio="none">
                <defs>
                  <!-- Gradient Fills -->
                  <linearGradient id="solar-area-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.38" />
                    <stop offset="65%" stop-color="#f59e0b" stop-opacity="0.08" />
                    <stop offset="100%" stop-color="#f59e0b" stop-opacity="0" />
                  </linearGradient>

                  <linearGradient id="grid-area-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.35" />
                    <stop offset="65%" stop-color="#3b82f6" stop-opacity="0.06" />
                    <stop offset="100%" stop-color="#3b82f6" stop-opacity="0" />
                  </linearGradient>

                  <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <!-- Background Horizontal Grid Lines & Y-Axis Labels -->
                <g id="chart-grid-lines"></g>

                <!-- Zero Grid / Self-Sufficiency Surplus Zone -->
                <path id="chart-surplus-area" fill="rgba(16, 185, 129, 0.12)" />

                <!-- Curve Gradient Area Fills -->
                <path id="chart-solar-area" fill="url(#solar-area-grad)" />
                <path id="chart-grid-area" fill="url(#grid-area-grad)" />

                <!-- Instantaneous Trend Lines -->
                <path id="chart-grid-line" fill="none" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#neon-glow)" />
                <path id="chart-solar-line" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#neon-glow)" />

                <!-- X-Axis Timeline Markers (-24h ... Now) -->
                <g id="chart-x-labels"></g>

                <!-- Interactive Scrubber Cursor Line & Circles -->
                <line id="chart-cursor-line" x1="0" y1="25" x2="0" y2="280" stroke="rgba(255, 255, 255, 0.45)" stroke-width="1.5" stroke-dasharray="3 3" style="display:none;" />
                <circle id="chart-cursor-solar" r="4.5" fill="#f59e0b" stroke="#ffffff" stroke-width="1.5" style="display:none;" />
                <circle id="chart-cursor-grid" r="4.5" fill="#3b82f6" stroke="#ffffff" stroke-width="1.5" style="display:none;" />
              </svg>

              <!-- Floating Scrubber Glass Tooltip -->
              <div id="chart-tooltip" class="chart-tooltip" style="display:none;"></div>
            </div>
          </div>
        </div>
      </div>
    `;let s=this.shadowRoot.querySelector("#content-wrap"),e=this.shadowRoot.querySelectorAll(".mode-tab");e.forEach(i=>{i.addEventListener("click",()=>{e.forEach(l=>l.classList.remove("active")),i.classList.add("active");let a=i.getAttribute("data-mode");this._viewMode=a,s&&(s.className=`card-content-wrap mode-${a}`),(a==="chart"||a==="split")&&this.updateChart()})});let r=this.shadowRoot.querySelector("#btn-card-fs");r&&(r.addEventListener("click",()=>{let i=document;if(i.fullscreenElement)i.exitFullscreen&&i.exitFullscreen().catch(a=>console.warn(a));else{let a=this.closest(".card-stage")||this;a.requestFullscreen?a.requestFullscreen().catch(l=>console.warn(l)):i.documentElement.requestFullscreen&&i.documentElement.requestFullscreen().catch(l=>console.warn(l))}}),document.addEventListener("fullscreenchange",()=>{let i=!!document.fullscreenElement;r.innerHTML=i?"\u2715":"\u26F6",r.title=i?"Exit Fullscreen":"Toggle Fullscreen"})),this.setupChartScrubber(),this.updateData(),this.updateChart()}};customElements.get("ha-energy-flow-card")||customElements.define("ha-energy-flow-card",H);window.customCards=window.customCards||[];window.customCards.some(N=>N.type==="ha-energy-flow-card")||window.customCards.push({type:"ha-energy-flow-card",name:"2D Live Energy Flow Monitor",description:"Apple iOS dark aesthetic live 2D animated energy flow card & rolling 24h trend chart for Solar & Grid"});export{H as HaEnergyFlowCard};
//# sourceMappingURL=ha-energy-flow-card.js.map
