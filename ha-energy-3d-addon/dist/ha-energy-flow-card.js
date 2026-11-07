var v=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config={},this._hass=null,this._animFrame=null,this._lastTimestamp=0,this._particles={}}static getStubConfig(){return{title:"Live Energy Flow",solar_entity:"sensor.solax_snm9wncrqy_pv1_power",grid_import_entity:"sensor.octopus_energy_electricity_22l3956422_3200000391421_current_demand",grid_export_entity:"sensor.solax_snm9wncrqy_exported_power",ev_entity:"input_number.zappi_ev_power",tv_entity:"sensor.living_room_tv_plug_power",lights_entity:"input_number.matter_lights_power",fridge_entity:"sensor.refrigerator_power"}}setConfig(t){this._config={title:"Live Energy Flow",height:"100%",solar_entity:"sensor.solax_snm9wncrqy_pv1_power",grid_import_entity:"sensor.octopus_energy_electricity_22l3956422_3200000391421_current_demand",grid_export_entity:"sensor.solax_snm9wncrqy_exported_power",ev_entity:"input_number.zappi_ev_power",tv_entity:"sensor.living_room_tv_plug_power",lights_entity:"input_number.matter_lights_power",fridge_entity:"sensor.refrigerator_power",...t},this._config.height&&(this.style.height=this._config.height),this.render()}set hass(t){this._hass=t,this.updateData()}connectedCallback(){this.startAnimation()}disconnectedCallback(){this.stopAnimation()}getCardSize(){return 4}calculateDuration(t){if(!t||t<=4)return 0;let i=6/(t/500);return Math.max(.8,Math.min(5,i))}getEntityNumeric(t,i=0){if(!this._hass||!t)return i;let e=this._hass.states[t];if(!e||e.state==="unavailable"||e.state==="unknown")return i;let s=parseFloat(e.state);return isNaN(s)?i:(e.attributes?.unit_of_measurement||"W").toLowerCase().trim()==="kw"?s*1e3:s}formatWatts(t){return`${Math.max(0,Math.round(t||0)).toLocaleString()} W`}formatKwSubtitle(t){let i=Math.max(0,t||0);return i>=1e3?`${(i/1e3).toFixed(2)} kW`:""}getLightsPowerFallback(){if(!this._hass?.states)return 0;let t=0;for(let[i,e]of Object.entries(this._hass.states))i.startsWith("light.")&&e.state==="on"&&t++;return t*7}getEvPowerFallback(){let t=this.getEntityNumeric("sensor.myenergi_zappi_30084500_internal_load_ct1",0);return t>0?t:this.getEntityNumeric("sensor.myenergi_zappi_30084500_power_ct_internal_load",0)}getSolarPowerFallback(){let t=this.getEntityNumeric("sensor.solax_snm9wncrqy_pv1_power",0),i=this.getEntityNumeric("sensor.solax_snm9wncrqy_pv2_power",0);return t+i>0?t+i:this.getEntityNumeric("sensor.solax_snm9wncrqy_ac_output_power",0)}updateData(){if(!this.shadowRoot)return;let t=this.getEntityNumeric(this._config.solar_entity,-1);t<0&&(t=this.getSolarPowerFallback());let i=this.getEntityNumeric(this._config.grid_import_entity,0),e=this.getEntityNumeric(this._config.grid_export_entity,0);e>25e3&&(e=0);let s=0,a=0;e>10?(a=e,s=0):i<-10?(a=Math.abs(i),s=0):(s=Math.max(0,i),a=0);let o=this.getEntityNumeric(this._config.ev_entity,-1);o<0&&(o=this.getEvPowerFallback());let l=this.getEntityNumeric(this._config.tv_entity,0),r=this.getEntityNumeric(this._config.lights_entity,-1);r<0&&(r=this.getLightsPowerFallback());let n=this.getEntityNumeric(this._config.fridge_entity,0),f=o+l+r+n,c=Math.max(0,s+t-a);c<f&&(c=f),this._flows={solar:{active:t>5,watts:t,dur:this.calculateDuration(t),color:"#f59e0b",pathId:"path-solar"},grid_import:{active:s>5,watts:s,dur:this.calculateDuration(s),color:"#3b82f6",pathId:"path-grid-import"},grid_export:{active:a>5,watts:a,dur:this.calculateDuration(a),color:"#10b981",pathId:"path-grid-export"},ev:{active:o>5,watts:o,dur:this.calculateDuration(o),color:"#06d6a0",pathId:"path-ev"},tv:{active:l>5,watts:l,dur:this.calculateDuration(l),color:"#38bdf8",pathId:"path-tv"},lights:{active:r>2,watts:r,dur:this.calculateDuration(r),color:"#fbbf24",pathId:"path-lights"},fridge:{active:n>5,watts:n,dur:this.calculateDuration(n),color:"#a78bfa",pathId:"path-fridge"}};let d=(w,y,b,E)=>{let k=this.shadowRoot.querySelector(`#val-${w}`),F=this.shadowRoot.querySelector(`#sub-${w}`),h=this.shadowRoot.querySelector(`#box-${w}`),m=this.shadowRoot.querySelector(`#pill-${w}`);k&&(k.innerText=this.formatWatts(y)),F&&(F.innerText=this.formatKwSubtitle(y)),h&&(h.classList.toggle("active",b),b?(h.style.borderColor=E,h.style.boxShadow=`0 0 20px ${E}33`):(h.style.borderColor="rgba(255, 255, 255, 0.12)",h.style.boxShadow="none")),m&&(m.innerText=b?"ACTIVE":"IDLE",m.className=`status-pill ${b?"active":"idle"}`)};d("solar",t,t>5,"#f59e0b");let p=a>5,g=p?a:s,u=g>5,L=p?"#10b981":"#3b82f6",M=p?"Grid Export":"Grid Import",_=this.shadowRoot.querySelector("#title-grid");_&&(_.innerText=M),d("grid",g,u,L),d("home",c,c>5,"#0ea5e9"),d("ev",o,o>5,"#06d6a0"),d("tv",l,l>5,"#38bdf8"),d("lights",r,r>2,"#fbbf24"),d("fridge",n,n>5,"#a78bfa")}startAnimation(){if(this._animFrame)return;let t=["solar","grid_import","grid_export","ev","tv","lights","fridge"];for(let e of t)this._particles[e]||(this._particles[e]=[0,.33,.66]);let i=e=>{this._lastTimestamp||(this._lastTimestamp=e);let s=(e-this._lastTimestamp)/1e3;if(this._lastTimestamp=e,this._flows)for(let[a,o]of Object.entries(this._flows)){let l=this.shadowRoot.querySelector(`#${o.pathId}`),r=this.shadowRoot.querySelector(`#particles-${a}`);if(!l||!r)continue;if(!o.active||o.dur<=0){r.style.opacity="0";continue}r.style.opacity="1";let n=l.getTotalLength?l.getTotalLength():0;if(n<=0)continue;let f=s/o.dur,c=r.querySelectorAll("circle");this._particles[a]=this._particles[a].map((d,p)=>{let g=(d+f)%1,u=l.getPointAtLength(g*n);return c[p]&&(c[p].setAttribute("cx",u.x),c[p].setAttribute("cy",u.y)),g})}this._animFrame=requestAnimationFrame(i)};this._animFrame=requestAnimationFrame(i)}stopAnimation(){this._animFrame&&(cancelAnimationFrame(this._animFrame),this._animFrame=null)}render(){let t=this._config.title||"Live Energy Flow";this.shadowRoot.innerHTML=`
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

        svg {
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
      </style>

      <div class="card-container">
        <div class="card-header">
          <div class="card-title">
            <div class="pulse-dot"></div>
            <span>${t}</span>
          </div>
          <div class="header-right">
            <span class="badge-live">Live Watts</span>
            <button class="btn-fs" id="btn-card-fs" title="Toggle Fullscreen">\u26F6</button>
          </div>
        </div>

        <div class="svg-container">
          <svg viewBox="0 0 780 440">
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
      </div>
    `;let i=this.shadowRoot.querySelector("#btn-card-fs");i&&(i.addEventListener("click",()=>{let e=document;if(e.fullscreenElement)e.exitFullscreen&&e.exitFullscreen().catch(s=>console.warn(s));else{let s=this.closest(".card-stage")||this;s.requestFullscreen?s.requestFullscreen().catch(a=>console.warn(a)):e.documentElement.requestFullscreen&&e.documentElement.requestFullscreen().catch(a=>console.warn(a))}}),document.addEventListener("fullscreenchange",()=>{let e=!!document.fullscreenElement;i.innerHTML=e?"\u2715":"\u26F6",i.title=e?"Exit Fullscreen":"Toggle Fullscreen"})),this.updateData()}};customElements.get("ha-energy-flow-card")||customElements.define("ha-energy-flow-card",v);window.customCards=window.customCards||[];window.customCards.some(x=>x.type==="ha-energy-flow-card")||window.customCards.push({type:"ha-energy-flow-card",name:"2D Live Energy Flow Monitor",description:"Apple iOS dark aesthetic live 2D animated energy flow card for Solar, Grid, EV, TV, Lights & Fridge"});export{v as HaEnergyFlowCard};
//# sourceMappingURL=ha-energy-flow-card.js.map
