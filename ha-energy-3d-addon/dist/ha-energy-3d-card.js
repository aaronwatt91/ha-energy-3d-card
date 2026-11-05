var Jd=Object.defineProperty;var jd=(s,e,t)=>()=>{if(t)throw t[0];try{return s&&(e=s(s=0)),e}catch(i){throw t=[i],i}};var Qd=(s,e)=>{for(var t in e)Jd(s,t,{get:e[t],enumerable:!0})};var Vd={};Qd(Vd,{HaEnergy3DCardEditor:()=>qa});var qa,Wd=jd(()=>{qa=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config={}}setConfig(e){this._config=e,this.render()}set hass(e){this._hass=e}render(){let e=this._config;this.shadowRoot.innerHTML=`
      <style>
        .card-editor {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 8px 0;
          font-family: inherit;
        }
        .section-title {
          font-weight: 700;
          font-size: 13px;
          color: var(--primary-color, #0284c7);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid var(--divider-color, #e2e8f0);
          padding-bottom: 4px;
          margin-top: 10px;
        }
        .input-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .input-row label {
          font-size: 12px;
          font-weight: 500;
          color: var(--secondary-text-color, #64748b);
        }
        .input-row input {
          padding: 8px 10px;
          border-radius: 6px;
          border: 1px solid var(--divider-color, #cbd5e1);
          background: var(--card-background-color, #fff);
          color: var(--primary-text-color, #1e293b);
          font-size: 13px;
        }
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
      </style>

      <div class="card-editor">
        <div class="section-title">\u{1F3E0} 3D Model & Display</div>
        <div class="input-row">
          <label>3D Model URL (GLB)</label>
          <input type="text" data-key="model_url" value="${e.model_url||"/local/ha-energy-3d/Taylor_Wimpey_Blair.glb"}">
        </div>
        <div class="grid-2">
          <div class="input-row">
            <label>Card Height</label>
            <input type="text" data-key="height" value="${e.height||"560px"}">
          </div>
          <div class="input-row">
            <label>Title</label>
            <input type="text" data-key="title" value="${e.title||"Home Energy 3D"}">
          </div>
        </div>

        <div class="section-title">\u2600\uFE0F Solax Solar Integration</div>
        <div class="grid-2">
          <div class="input-row">
            <label>Live Solar Power (kW)</label>
            <input type="text" data-key="solax_power" value="${e.solax_power||"sensor.solax_pv_power_total"}">
          </div>
          <div class="input-row">
            <label>Today Solar Energy (kWh)</label>
            <input type="text" data-key="solax_today" value="${e.solax_today||"sensor.solax_today_s_solar_energy"}">
          </div>
          <div class="input-row">
            <label>This Week Solar (kWh)</label>
            <input type="text" data-key="solax_week" value="${e.solax_week||"sensor.solax_this_week_solar_energy"}">
          </div>
          <div class="input-row">
            <label>This Month Solar (kWh)</label>
            <input type="text" data-key="solax_month" value="${e.solax_month||"sensor.solax_this_month_solar_energy"}">
          </div>
          <div class="input-row">
            <label>This Year Solar (kWh)</label>
            <input type="text" data-key="solax_year" value="${e.solax_year||"sensor.solax_this_year_solar_energy"}">
          </div>
        </div>

        <div class="section-title">\u26A1 Octopus Electricity & Grid</div>
        <div class="grid-2">
          <div class="input-row">
            <label>Live Electric Power / Mini (kW)</label>
            <input type="text" data-key="octopus_electric_power" value="${e.octopus_electric_power||"sensor.octopus_home_mini_current_electricity_power"}">
          </div>
          <div class="input-row">
            <label>Feed-In Export Power (kW)</label>
            <input type="text" data-key="octopus_export_power" value="${e.octopus_export_power||"sensor.solax_feed_in_power"}">
          </div>
          <div class="input-row">
            <label>Electricity Unit Rate (p/kWh)</label>
            <input type="text" data-key="octopus_rate" value="${e.octopus_rate||"sensor.octopus_energy_electricity_current_rate"}">
          </div>
          <div class="input-row">
            <label>Month Spend (\xA3)</label>
            <input type="text" data-key="octopus_monthly_spend" value="${e.octopus_monthly_spend||"sensor.octopus_energy_electricity_current_month_cost"}">
          </div>
          <div class="input-row">
            <label>Octopus Mini 30-Min (kWh)</label>
            <input type="text" data-key="octopus_electric_30min" value="${e.octopus_electric_30min||"sensor.octopus_home_mini_electricity_30min"}">
          </div>
          <div class="input-row">
            <label>Electricity Day (kWh)</label>
            <input type="text" data-key="octopus_electric_day" value="${e.octopus_electric_day||"sensor.octopus_energy_electricity_day"}">
          </div>
          <div class="input-row">
            <label>Electricity Week (kWh)</label>
            <input type="text" data-key="octopus_electric_week" value="${e.octopus_electric_week||"sensor.octopus_energy_electricity_week"}">
          </div>
          <div class="input-row">
            <label>Electricity Month (kWh)</label>
            <input type="text" data-key="octopus_electric_month" value="${e.octopus_electric_month||"sensor.octopus_energy_electricity_month"}">
          </div>
        </div>

        <div class="section-title">\u{1F525} Octopus Gas & Kitchen Boiler</div>
        <div class="grid-2">
          <div class="input-row">
            <label>Boiler Status (switch/climate)</label>
            <input type="text" data-key="boiler_status" value="${e.boiler_status||"sensor.boiler_status"}">
          </div>
          <div class="input-row">
            <label>Octopus Mini Gas 30-Min (kWh)</label>
            <input type="text" data-key="octopus_gas_30min" value="${e.octopus_gas_30min||"sensor.octopus_home_mini_gas_30min"}">
          </div>
          <div class="input-row">
            <label>Gas Day (kWh)</label>
            <input type="text" data-key="octopus_gas_day" value="${e.octopus_gas_day||"sensor.octopus_energy_gas_day"}">
          </div>
          <div class="input-row">
            <label>Gas Week (kWh)</label>
            <input type="text" data-key="octopus_gas_week" value="${e.octopus_gas_week||"sensor.octopus_energy_gas_week"}">
          </div>
          <div class="input-row">
            <label>Gas Month (kWh)</label>
            <input type="text" data-key="octopus_gas_month" value="${e.octopus_gas_month||"sensor.octopus_energy_gas_month"}">
          </div>
          <div class="input-row">
            <label>Gas Unit Rate (p/kWh)</label>
            <input type="text" data-key="octopus_gas_rate" value="${e.octopus_gas_rate||"sensor.octopus_energy_gas_current_rate"}">
          </div>
          <div class="input-row">
            <label>Gas Month Spend (\xA3)</label>
            <input type="text" data-key="octopus_gas_spend" value="${e.octopus_gas_spend||"sensor.octopus_energy_gas_current_month_cost"}">
          </div>
        </div>

        <div class="section-title">\u{1F697} myenergi Zappi & Peugeot e-2008</div>
        <div class="grid-2">
          <div class="input-row">
            <label>Zappi Charging Power (kW)</label>
            <input type="text" data-key="myenergi_power" value="${e.myenergi_power||"sensor.myenergi_zappi_power"}">
          </div>
          <div class="input-row">
            <label>Zappi Connection Status</label>
            <input type="text" data-key="myenergi_status" value="${e.myenergi_status||"sensor.myenergi_zappi_status"}">
          </div>
          <div class="input-row">
            <label>Zappi Session Energy (kWh)</label>
            <input type="text" data-key="myenergi_energy" value="${e.myenergi_energy||"sensor.myenergi_zappi_charge_added_session"}">
          </div>
          <div class="input-row">
            <label>Peugeot Battery SoC (%)</label>
            <input type="text" data-key="peugeot_battery" value="${e.peugeot_battery||"sensor.e2008_battery_level"}">
          </div>
          <div class="input-row">
            <label>Peugeot Remaining Range (miles)</label>
            <input type="text" data-key="peugeot_range" value="${e.peugeot_range||"sensor.e2008_battery_range"}">
          </div>
        </div>

        <div class="section-title">\u{1F321}\uFE0F Heating & Thermostats</div>
        <div class="grid-2">
          <div class="input-row">
            <label>Downstairs Thermostat (climate/sensor)</label>
            <input type="text" data-key="thermostat_downstairs" value="${e.thermostat_downstairs||"climate.downstairs"}">
          </div>
          <div class="input-row">
            <label>Upstairs Thermostat (climate/sensor)</label>
            <input type="text" data-key="thermostat_upstairs" value="${e.thermostat_upstairs||"climate.upstairs"}">
          </div>
        </div>

        <div class="section-title">\u{1F37D}\uFE0F Appliances & Living Room Devices</div>
        <div class="grid-2">
          <div class="input-row">
            <label>Kitchen Fridge Freezer Power</label>
            <input type="text" data-key="sensor_fridge" value="${e.sensor_fridge||"sensor.fridge_power"}">
          </div>
          <div class="input-row">
            <label>Living Room TV (media_player/switch)</label>
            <input type="text" data-key="sensor_tv" value="${e.sensor_tv||"media_player.living_room_tv"}">
          </div>
        </div>

        <div class="section-title">\u{1F4A1} Room Lights & Lamps</div>
        <div class="grid-2">
          <div class="input-row">
            <label>Living Room / Lounge Ceiling</label>
            <input type="text" data-key="light_lounge" value="${e.light_lounge||"light.living_room"}">
          </div>
          <div class="input-row">
            <label>Living Room Lamp</label>
            <input type="text" data-key="light_living_lamp" value="${e.light_living_lamp||"light.living_room_lamp"}">
          </div>
          <div class="input-row">
            <label>Kitchen</label>
            <input type="text" data-key="light_kitchen" value="${e.light_kitchen||"light.kitchen"}">
          </div>
          <div class="input-row">
            <label>Dining Room</label>
            <input type="text" data-key="light_dining" value="${e.light_dining||"light.dining_room"}">
          </div>
          <div class="input-row">
            <label>Entrance Hall & Stairs</label>
            <input type="text" data-key="light_hallway" value="${e.light_hallway||"light.hallway"}">
          </div>
          <div class="input-row">
            <label>Downstairs WC</label>
            <input type="text" data-key="light_wc" value="${e.light_wc||"light.downstairs_wc"}">
          </div>
          <div class="input-row">
            <label>Master Bedroom</label>
            <input type="text" data-key="light_master_bedroom" value="${e.light_master_bedroom||"light.master_bedroom"}">
          </div>
          <div class="input-row">
            <label>Master En-Suite</label>
            <input type="text" data-key="light_ensuite" value="${e.light_ensuite||"light.ensuite"}">
          </div>
          <div class="input-row">
            <label>Bedroom 2 (Guestroom)</label>
            <input type="text" data-key="light_bedroom2" value="${e.light_bedroom2||"light.bedroom_2"}">
          </div>
          <div class="input-row">
            <label>Bedroom 3 (Nursery / Office)</label>
            <input type="text" data-key="light_bedroom3" value="${e.light_bedroom3||"light.bedroom_3"}">
          </div>
          <div class="input-row">
            <label>Family Bathroom</label>
            <input type="text" data-key="light_bathroom" value="${e.light_bathroom||""}">
          </div>
          <div class="input-row">
            <label>Upstairs Landing</label>
            <input type="text" data-key="light_landing" value="${e.light_landing||""}">
          </div>
        </div>
      </div>
    `,this.shadowRoot.querySelectorAll("input").forEach(i=>{i.addEventListener("change",n=>{let r=n.target.getAttribute("data-key"),o=n.target.value,a={...this._config,[r]:o},l=new CustomEvent("config-changed",{detail:{config:a},bubbles:!0,composed:!0});this.dispatchEvent(l)})})}};customElements.define("ha-energy-3d-card-editor",qa)});var Mn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uu=0,Ul=1,du=2;var Mr=1,ko=2,Cs=3,Di=0,$t=1,Ft=2,Vn=0,Ps=1,Ls=2,Fl=3,Ol=4,fu=5;var Wn=100,pu=101,mu=102,gu=103,_u=104,xu=200,yu=201,vu=202,bu=203,Bl=204,kl=205,Su=206,Mu=207,wu=208,Eu=209,Tu=210,Au=211,Ru=212,Cu=213,Pu=214,fo=0,po=1,mo=2,us=3,go=4,_o=5,xo=6,yo=7,zl=0,Lu=1,Iu=2,Ni=0,Hl=1,Gl=2,Vl=3,wr=4,Wl=5,Xl=6,ql=7,Sl="attached",Du="detached",Yl=300,Xn=301,Is=302,zo=303,Ho=304,gn=1e3,ui=1001,ds=1002,dt=1003,Go=1004;var qn=1005;var bt=1006,Ds=1007;var fi=1008;var Qt=1009,$l=1010,Kl=1011,Ns=1012,Vo=1013,wi=1014,ri=1015,Ei=1016,Wo=1017,Xo=1018,Yn=1020,Zl=35902,Jl=35899,jl=1021,Ql=1022,pi=1023,$i=1026,rn=1027,qo=1028,Yo=1029,En=1030,$o=1031;var Ko=1033,Er=33776,Tr=33777,Ar=33778,Rr=33779,Zo=35840,Jo=35841,jo=35842,Qo=35843,ea=36196,ta=37492,ia=37496,na=37488,sa=37489,Cr=37490,ra=37491,oa=37808,aa=37809,la=37810,ca=37811,ha=37812,ua=37813,da=37814,fa=37815,pa=37816,ma=37817,ga=37818,_a=37819,xa=37820,ya=37821,va=36492,ba=36494,Sa=36495,Ma=36283,wa=36284,Pr=36285,Ea=36286;var Fn=2300,On=2301,ho=2302,Ml=2303,wl=2400,El=2401,Tl=2402,Nu=2500;var ec=0,Lr=1,Us=2,Uu=3200;var Ta=0,Fu=1,on="",xt="srgb",qt="srgb-linear",js="linear",Je="srgb";var uo=7680;var Ou=519,Bu=512,ku=513,zu=514,tc=515,Hu=516,Gu=517,ic=518,nc=519,sc=35044,rc=35048;var oc="300 es",di=2e3,fs=2001;function ef(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function tf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ps(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Vu(){let s=ps("canvas");return s.style.display="block",s}var bh={},ms=null;function Qs(...s){let e="THREE."+s.shift();ms?ms("log",e,...s):console.log(e,...s)}function Wu(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function we(...s){s=Wu(s);let e="THREE."+s.shift();if(ms)ms("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Le(...s){s=Wu(s);let e="THREE."+s.shift();if(ms)ms("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Un(...s){let e=s.join(" ");e in bh||(bh[e]=!0,we(...s))}function Xu(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var qu={[fo]:fo,[mo]:xo,[go]:go,[us]:_o,[po]:po,[xo]:mo,[yo]:yo,[_o]:us},vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,e);e.target=null}}},kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sh=1234567,Zs=Math.PI/180,Bn=180/Math.PI;function Ui(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[s&255]+kt[s>>8&255]+kt[s>>16&255]+kt[s>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function ke(s,e,t){return Math.max(e,Math.min(t,s))}function ac(s,e){return(s%e+e)%e}function nf(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function sf(s,e,t){return s!==e?(t-s)/(e-s):0}function Js(s,e,t){return(1-t)*s+t*e}function rf(s,e,t,i){return Js(s,e,1-Math.exp(-t*i))}function of(s,e=1){return e-Math.abs(ac(s,e*2)-e)}function af(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function lf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function cf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function hf(s,e){return s+Math.random()*(e-s)}function uf(s){return s*(.5-Math.random())}function df(s){s!==void 0&&(Sh=s);let e=Sh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ff(s){return s*Zs}function pf(s){return s*Bn}function mf(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function gf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function lc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _f(s,e,t,i,n){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(n){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Aa(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function cc(s,e){if(e.constructor===Float32Array)return s;let t=Aa(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function hc(s,e){if(e.constructor===Float32Array)return s;let t=Aa(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var Tn={DEG2RAD:Zs,RAD2DEG:Bn,generateUUID:Ui,clamp:ke,euclideanModulo:ac,mapLinear:nf,inverseLerp:sf,lerp:Js,damp:rf,pingpong:of,smoothstep:af,smootherstep:lf,randInt:cf,randFloat:hf,randFloatSpread:uf,seededRandom:df,degToRad:ff,radToDeg:pf,isPowerOfTwo:mf,ceilPowerOfTwo:gf,floorPowerOfTwo:lc,setQuaternionFromProperEuler:_f,normalize:hc,denormalize:cc},gc=class gc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*n+e.x,this.y=r*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gc.prototype.isVector2=!0;var Te=gc,Lt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let v=Math.acos(m),A=Math.sin(v);p=Math.sin(p*v)/A,a=Math.sin(a*v)/A,l=l*p+d*a,c=c*p+f*a,h=h*p+g*a,u=u*p+x*a}else{l=l*p+d*a,c=c*p+f*a,h=h*p+g*a,u=u*p+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(r/2),d=l(i/2),f=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-n)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,n=-n,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_c=class _c{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*n-a*i),h=2*(a*t-r*n),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=n+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ka.copy(this).projectOnVector(e),this.sub(Ka)}reflect(e){return this.sub(Ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_c.prototype.isVector3=!0;var E=_c,Ka=new E,Mh=new Lt,xc=class xc{constructor(e,t,i,n,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c)}set(e,t,i,n,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=n[0],m=n[3],p=n[6],v=n[1],A=n[4],S=n[7],T=n[2],w=n[5],_=n[8];return r[0]=o*x+a*v+l*T,r[3]=o*m+a*A+l*w,r[6]=o*p+a*S+l*_,r[1]=c*x+h*v+u*T,r[4]=c*m+h*A+u*w,r[7]=c*p+h*S+u*_,r[2]=d*x+f*v+g*T,r[5]=d*m+f*A+g*w,r[8]=d*p+f*S+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(n*c-h*i)*x,e[2]=(a*i-n*o)*x,e[3]=d*x,e[4]=(h*t-n*l)*x,e[5]=(n*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Un("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Za.makeScale(e,t)),this}rotate(e){return Un("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Za.makeRotation(-e)),this}translate(e,t){return Un("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xc.prototype.isMatrix3=!0;var De=xc,Za=new De,wh=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xf(){let s={enabled:!0,workingColorSpace:qt,spaces:{},convert:function(n,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Je&&(n.r=Yi(n.r),n.g=Yi(n.g),n.b=Yi(n.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Je&&(n.r=hs(n.r),n.g=hs(n.g),n.b=hs(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===on?js:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[qt]:{primaries:e,whitePoint:i,transfer:js,toXYZ:wh,fromXYZ:Eh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:i,transfer:Je,toXYZ:wh,fromXYZ:Eh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),s}var Ge=xf();function Yi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Zn,vo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Zn===void 0&&(Zn=ps("canvas")),Zn.width=e.width,Zn.height=e.height;let n=Zn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Zn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ps("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Yi(r[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yi(t[i]/255)*255):t[i]=Yi(t[i]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},yf=0,gs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(Ja(n[o].image)):r.push(Ja(n[o]))}else r=Ja(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ja(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}var vf=0,ja=new E,It=class s extends vi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=ui,n=ui,r=bt,o=fi,a=pi,l=Qt,c=s.DEFAULT_ANISOTROPY,h=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Ui(),this.name="",this.source=new gs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ja).x}get height(){return this.source.getSize(ja).y}get depth(){return this.source.getSize(ja).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gn:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case ds:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gn:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case ds:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Yl;It.DEFAULT_ANISOTROPY=1;var yc=class yc{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,S=(f+1)/2,T=(p+1)/2,w=(h+d)/4,_=(u+x)/4,M=(g+m)/4;return A>S&&A>T?A<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(A),n=w/i,r=_/i):S>T?S<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(S),i=w/n,r=M/n):T<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(T),i=_/r,n=M/r),this.set(i,n,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yc.prototype.isVector4=!0;var et=yc,bo=class extends vi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new It({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new gs(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends bo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},er=class extends It{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=dt,this.minFilter=dt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var So=class extends It{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=dt,this.minFilter=dt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Bo=class Bo{constructor(e,t,i,n,r,o,a,l,c,h,u,d,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c,h,u,d,f,g,x,m)}set(e,t,i,n,r,o,a,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bo().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/Jn.setFromMatrixColumn(e,0).length(),r=1/Jn.setFromMatrixColumn(e,1).length(),o=1/Jn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bf,e,Sf)}lookAt(e,t,i){let n=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),cn.crossVectors(i,ti),cn.lengthSq()===0&&(Math.abs(i.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),cn.crossVectors(i,ti)),cn.normalize(),kr.crossVectors(ti,cn),n[0]=cn.x,n[4]=kr.x,n[8]=ti.x,n[1]=cn.y,n[5]=kr.y,n[9]=ti.y,n[2]=cn.z,n[6]=kr.z,n[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],v=i[3],A=i[7],S=i[11],T=i[15],w=n[0],_=n[4],M=n[8],U=n[12],C=n[1],D=n[5],O=n[9],V=n[13],L=n[2],W=n[6],F=n[10],k=n[14],Q=n[3],X=n[7],j=n[11],ee=n[15];return r[0]=o*w+a*C+l*L+c*Q,r[4]=o*_+a*D+l*W+c*X,r[8]=o*M+a*O+l*F+c*j,r[12]=o*U+a*V+l*k+c*ee,r[1]=h*w+u*C+d*L+f*Q,r[5]=h*_+u*D+d*W+f*X,r[9]=h*M+u*O+d*F+f*j,r[13]=h*U+u*V+d*k+f*ee,r[2]=g*w+x*C+m*L+p*Q,r[6]=g*_+x*D+m*W+p*X,r[10]=g*M+x*O+m*F+p*j,r[14]=g*U+x*V+m*k+p*ee,r[3]=v*w+A*C+S*L+T*Q,r[7]=v*_+A*D+S*W+T*X,r[11]=v*M+A*O+S*F+T*j,r[15]=v*U+A*V+S*k+T*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],v=l*f-c*d,A=a*f-c*u,S=a*d-l*u,T=o*f-c*h,w=o*d-l*h,_=o*u-a*h;return t*(x*v-m*A+p*S)-i*(g*v-m*T+p*w)+n*(g*A-x*T+p*_)-r*(g*S-x*w+m*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+n*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],v=t*a-i*o,A=t*l-n*o,S=t*c-r*o,T=i*l-n*a,w=i*c-r*a,_=n*c-r*l,M=h*x-u*g,U=h*m-d*g,C=h*p-f*g,D=u*m-d*x,O=u*p-f*x,V=d*p-f*m,L=v*V-A*O+S*D+T*C-w*U+_*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/L;return e[0]=(a*V-l*O+c*D)*W,e[1]=(n*O-i*V-r*D)*W,e[2]=(x*_-m*w+p*T)*W,e[3]=(d*w-u*_-f*T)*W,e[4]=(l*C-o*V-c*U)*W,e[5]=(t*V-n*C+r*U)*W,e[6]=(m*S-g*_-p*A)*W,e[7]=(h*_-d*S+f*A)*W,e[8]=(o*O-a*C+c*M)*W,e[9]=(i*C-t*O-r*M)*W,e[10]=(g*w-x*S+p*v)*W,e[11]=(u*S-h*w-f*v)*W,e[12]=(a*U-o*D-l*M)*W,e[13]=(t*D-i*U+n*M)*W,e[14]=(x*A-g*T-m*v)*W,e[15]=(h*T-u*A+d*v)*W,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,o){return this.set(1,i,r,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,v=l*c,A=l*h,S=l*u,T=i.x,w=i.y,_=i.z;return n[0]=(1-(x+p))*T,n[1]=(f+S)*T,n[2]=(g-A)*T,n[3]=0,n[4]=(f-S)*w,n[5]=(1-(d+p))*w,n[6]=(m+v)*w,n[7]=0,n[8]=(g+A)*_,n[9]=(m-v)*_,n[10]=(1-(d+x))*_,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Jn.set(n[0],n[1],n[2]).length(),a=Jn.set(n[4],n[5],n[6]).length(),l=Jn.set(n[8],n[9],n[10]).length();r<0&&(o=-o),_i.copy(this);let c=1/o,h=1/a,u=1/l;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=u,_i.elements[9]*=u,_i.elements[10]*=u,t.setFromRotationMatrix(_i),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,n,r,o,a=di,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===di)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===fs)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,r,o,a=di,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-n),d=-(t+e)/(t-e),f=-(i+n)/(i-n),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===di)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===fs)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Bo.prototype.isMatrix4=!0;var Ie=Bo,Jn=new E,_i=new Ie,bf=new E(0,0,0),Sf=new E(1,1,1),cn=new E,kr=new E,ti=new E,Th=new Ie,Ah=new Lt,Ki=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Th,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ki.DEFAULT_ORDER="XYZ";var _s=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Mf=0,Rh=new E,jn=new Lt,Hi=new Ie,zr=new E,Hs=new E,wf=new E,Ef=new Lt,Ch=new E(1,0,0),Ph=new E(0,1,0),Lh=new E(0,0,1),Ih={type:"added"},Tf={type:"removed"},Qn={type:"childadded",child:null},Qa={type:"childremoved",child:null},tt=class s extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new E,t=new Ki,i=new Lt,n=new E(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ie},normalMatrix:{value:new De}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.multiply(jn),this}rotateOnWorldAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.premultiply(jn),this}rotateX(e){return this.rotateOnAxis(Ch,e)}rotateY(e){return this.rotateOnAxis(Ph,e)}rotateZ(e){return this.rotateOnAxis(Lh,e)}translateOnAxis(e,t){return Rh.copy(e).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ch,e)}translateY(e){return this.translateOnAxis(Ph,e)}translateZ(e){return this.translateOnAxis(Lh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zr.copy(e):zr.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Hs,zr,this.up):Hi.lookAt(zr,Hs,this.up),this.quaternion.setFromRotationMatrix(Hi),n&&(Hi.extractRotation(n.matrixWorld),jn.setFromRotationMatrix(Hi),this.quaternion.premultiply(jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ih),Qn.child=e,this.dispatchEvent(Qn),Qn.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tf),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ih),Qn.child=e,this.dispatchEvent(Qn),Qn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,wf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Ef,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));n.material=a}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};tt.DEFAULT_UP=new E(0,1,0);tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vt=class extends tt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Af={type:"move"},xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Af)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new vt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function el(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var _e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ge.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Ge.workingColorSpace){if(e=ac(e,1),t=ke(t,0,1),i=ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=el(o,r,e+1/3),this.g=el(o,r,e),this.b=el(o,r,e-1/3)}return Ge.colorSpaceToWorking(this,n),this}setStyle(e,t=xt){function i(r){r!==void 0&&parseFloat(r)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let i=Yu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return Ge.workingToColorSpace(zt.copy(this),e),Math.round(ke(zt.r*255,0,255))*65536+Math.round(ke(zt.g*255,0,255))*256+Math.round(ke(zt.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(zt.copy(this),t);let i=zt.r,n=zt.g,r=zt.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=xt){Ge.workingToColorSpace(zt.copy(this),e);let t=zt.r,i=zt.g,n=zt.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(hn),this.setHSL(hn.h+e,hn.s+t,hn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(Hr);let i=Js(hn.h,Hr.h,t),n=Js(hn.s,Hr.s,t),r=Js(hn.l,Hr.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new _e;_e.NAMES=Yu;var ys=class extends tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},xi=new E,Gi=new E,tl=new E,Vi=new E,es=new E,ts=new E,Dh=new E,il=new E,nl=new E,sl=new E,rl=new et,ol=new et,al=new et,mn=class s{constructor(e=new E,t=new E,i=new E){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),xi.subVectors(e,t),n.cross(xi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){xi.subVectors(n,t),Gi.subVectors(i,t),tl.subVectors(e,t);let o=xi.dot(xi),a=xi.dot(Gi),l=xi.dot(tl),c=Gi.dot(Gi),h=Gi.dot(tl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,i,n,r,o,a,l){return this.getBarycoord(e,t,i,n,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vi.x),l.addScaledVector(o,Vi.y),l.addScaledVector(a,Vi.z),l)}static getInterpolatedAttribute(e,t,i,n,r,o){return rl.setScalar(0),ol.setScalar(0),al.setScalar(0),rl.fromBufferAttribute(e,t),ol.fromBufferAttribute(e,i),al.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(rl,r.x),o.addScaledVector(ol,r.y),o.addScaledVector(al,r.z),o}static isFrontFacing(e,t,i,n){return xi.subVectors(i,t),Gi.subVectors(e,t),xi.cross(Gi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),xi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,o,a;es.subVectors(n,i),ts.subVectors(r,i),il.subVectors(e,i);let l=es.dot(il),c=ts.dot(il);if(l<=0&&c<=0)return t.copy(i);nl.subVectors(e,n);let h=es.dot(nl),u=ts.dot(nl);if(h>=0&&u<=h)return t.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(es,o);sl.subVectors(e,r);let f=es.dot(sl),g=ts.dot(sl);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(ts,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Dh.subVectors(r,n),a=(u-h)/(u-h+(f-g)),t.copy(n).addScaledVector(Dh,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(i).addScaledVector(es,o).addScaledVector(ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},si=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yi):yi.fromBufferAttribute(r,o),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gr.copy(i.boundingBox)),Gr.applyMatrix4(e.matrixWorld),this.union(Gr)}let n=e.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Vr.subVectors(this.max,Gs),is.subVectors(e.a,Gs),ns.subVectors(e.b,Gs),ss.subVectors(e.c,Gs),un.subVectors(ns,is),dn.subVectors(ss,ns),Ln.subVectors(is,ss);let t=[0,-un.z,un.y,0,-dn.z,dn.y,0,-Ln.z,Ln.y,un.z,0,-un.x,dn.z,0,-dn.x,Ln.z,0,-Ln.x,-un.y,un.x,0,-dn.y,dn.x,0,-Ln.y,Ln.x,0];return!ll(t,is,ns,ss,Vr)||(t=[1,0,0,0,1,0,0,0,1],!ll(t,is,ns,ss,Vr))?!1:(Wr.crossVectors(un,dn),t=[Wr.x,Wr.y,Wr.z],ll(t,is,ns,ss,Vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Wi=[new E,new E,new E,new E,new E,new E,new E,new E],yi=new E,Gr=new si,is=new E,ns=new E,ss=new E,un=new E,dn=new E,Ln=new E,Gs=new E,Vr=new E,Wr=new E,In=new E;function ll(s,e,t,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){In.fromArray(s,r);let a=n.x*Math.abs(In.x)+n.y*Math.abs(In.y)+n.z*Math.abs(In.z),l=e.dot(In),c=t.dot(In),h=i.dot(In);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var mt=new E,Xr=new Te,Rf=0,Ut=class extends vi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sc,this.updateRanges=[],this.gpuType=ri,this.version=0,this._normalizationScale=e!==void 0?Aa(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix3(e),this.setXY(t,Xr.x,Xr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):cc(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):hc(e,this.array)}};var tr=class extends Ut{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ir=class extends Ut{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var lt=class extends Ut{constructor(e,t,i){super(new Float32Array(e),t,i)}},Cf=new si,Vs=new E,cl=new E,Zt=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Cf.setFromPoints(e).getCenter(i);let n=0;for(let r=0,o=e.length;r<o;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);let t=Vs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Vs,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(cl)),this.expandByPoint(Vs.copy(e.center).sub(cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Pf=0,hi=new Ie,hl=new tt,rs=new E,ii=new si,Ws=new si,Pt=new E,St=class s extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ef(e)?ir:tr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new De().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,i){return hi.makeTranslation(e,t,i),this.applyMatrix4(hi),this}scale(e,t,i){return hi.makeScale(e,t,i),this.applyMatrix4(hi),this}lookAt(e){return hl.lookAt(e),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let o=e[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];ii.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){let i=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(ii.min,Ws.min),ii.expandByPoint(Pt),Pt.addVectors(ii.max,Ws.max),ii.expandByPoint(Pt)):(ii.expandByPoint(Ws.min),ii.expandByPoint(Ws.max))}ii.getCenter(i);let n=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pt.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(e,c),Pt.add(rs)),n=Math.max(n,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ut(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let U=0;U<i.count;U++)a[U]=new E,l[U]=new E;let h=new E,u=new E,d=new E,f=new Te,g=new Te,x=new Te,m=new E,p=new E;function v(U,C,D){c[U]=c[C]=c[D]=1,h.fromBufferAttribute(i,U),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,D),f.fromBufferAttribute(r,U),g.fromBufferAttribute(r,C),x.fromBufferAttribute(r,D),u.sub(h),d.sub(h),g.sub(f),x.sub(f);let O=1/(g.x*x.y-x.x*g.y);isFinite(O)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(O),p.copy(d).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(O),a[U].add(m),a[C].add(m),a[D].add(m),l[U].add(p),l[C].add(p),l[D].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,C=A.length;U<C;++U){let D=A[U],O=D.start,V=D.count;for(let L=O,W=O+V;L<W;L+=3)v(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let S=new E,T=new E,w=new E,_=new E;function M(U){w.fromBufferAttribute(n,U),_.copy(w);let C=a[U];S.copy(C),S.sub(w.multiplyScalar(w.dot(C))).normalize(),T.crossVectors(_,C);let O=T.dot(l[U])<0?-1:1;o.setXYZW(U,S.x,S.y,S.z,O)}for(let U=0,C=i.count;U<C;++U)c[U]&&M(U);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new E,r=new E,o=new E,a=new E,l=new E,c=new E,h=new E,u=new E;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ut(d,h,u)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},vs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sc,this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Nh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Nh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Nh(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Ui()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var Wt=new E,bs=class s{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n,this._normalizationScale=e!==void 0?Aa(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Qs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Qs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):cc(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):hc(e,this.data.array)}},ul=new E,Lf=new E,If=new De,Xt=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=ul.subVectors(i,t).cross(Lf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(ul),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||If.getNormalMatrix(e),n=this.coplanarPoint(ul).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Df=0,Jt=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=Ps,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=kl,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=n(e.textures),o=n(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new _e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Xt().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Te().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Te().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Xi=new E,dl=new E,qr=new E,Yr=new E,Ci=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){dl.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),Yr.copy(this.origin).sub(dl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(qr),a=Yr.dot(this.direction),l=-Yr.dot(qr),c=Yr.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(dl).addScaledVector(qr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Xi.subVectors(e.center,this.origin);let i=Xi.dot(this.direction),n=Xi.dot(Xi)-i*i,r=e.radius*e.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,i,n,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,g=t.x-o.x,x=t.y-o.y,m=t.z-o.z,p=i.x-o.x,v=i.y-o.y,A=i.z-o.z,S=Math.abs(l),T=Math.abs(c),w=Math.abs(h),_,M,U,C,D,O,V,L,W,F,k,Q;if(S>=T&&S>=w?(U=l,O=u,W=g,Q=p,l>=0?(_=c,M=h,C=d,D=f,V=x,L=m,F=v,k=A):(_=h,M=c,C=f,D=d,V=m,L=x,F=A,k=v)):T>=w?(U=c,O=d,W=x,Q=v,c>=0?(_=h,M=l,C=f,D=u,V=m,L=g,F=A,k=p):(_=l,M=h,C=u,D=f,V=g,L=m,F=p,k=A)):(U=h,O=f,W=m,Q=A,h>=0?(_=l,M=c,C=u,D=d,V=g,L=x,F=p,k=v):(_=c,M=l,C=d,D=u,V=x,L=g,F=v,k=p)),U===0)return null;let X=_/U,j=M/U,ee=1/U,Se=C-X*O,Ue=D-j*O,K=V-X*W,pe=L-j*W,ye=F-X*Q,Re=k-j*Q,me=ye*pe-Re*K,Oe=Se*Re-Ue*ye,ft=K*Ue-pe*Se;if(n){if(me<0||Oe<0||ft<0)return null}else if((me<0||Oe<0||ft<0)&&(me>0||Oe>0||ft>0))return null;let Pe=me+Oe+ft;if(Pe===0)return null;let je=ee*(me*O+Oe*W+ft*Q);return(Pe>0?je<0:je>0)?null:this.at(je/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mt=class extends Jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Uh=new Ie,Dn=new Ci,$r=new Zt,Fh=new E,Kr=new E,Zr=new E,Jr=new E,fl=new E,jr=new E,Oh=new E,Qr=new E,$e=class extends tt{constructor(e=new St,t=new Mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let a=this.morphTargetInfluences;if(r&&a){jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(fl.fromBufferAttribute(u,e),o?jr.addScaledVector(fl,h):jr.addScaledVector(fl.sub(t),h))}t.add(jr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(r),Dn.copy(e.ray).recast(e.near),!($r.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere($r,Fh)===null||Dn.origin.distanceToSquared(Fh)>(e.far-e.near)**2))&&(Uh.copy(r).invert(),Dn.copy(e.ray).applyMatrix4(Uh),!(i.boundingBox!==null&&Dn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Dn)))}_computeIntersections(e,t,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),A=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,T=A;S<T;S+=3){let w=a.getX(S),_=a.getX(S+1),M=a.getX(S+2);n=eo(this,p,e,i,c,h,u,w,_,M),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=a.getX(m),A=a.getX(m+1),S=a.getX(m+2);n=eo(this,o,e,i,c,h,u,v,A,S),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,T=A;S<T;S+=3){let w=S,_=S+1,M=S+2;n=eo(this,p,e,i,c,h,u,w,_,M),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=m,A=m+1,S=m+2;n=eo(this,o,e,i,c,h,u,v,A,S),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function Nf(s,e,t,i,n,r,o,a){let l;if(e.side===$t?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,e.side===Di,a),l===null)return null;Qr.copy(a),Qr.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Qr);return c<t.near||c>t.far?null:{distance:c,point:Qr.clone(),object:s}}function eo(s,e,t,i,n,r,o,a,l,c){s.getVertexPosition(a,Kr),s.getVertexPosition(l,Zr),s.getVertexPosition(c,Jr);let h=Nf(s,e,t,i,Kr,Zr,Jr,Oh);if(h){let u=new E;mn.getBarycoord(Oh,Kr,Zr,Jr,u),n&&(h.uv=mn.getInterpolatedAttribute(n,a,l,c,u,new Te)),r&&(h.uv1=mn.getInterpolatedAttribute(r,a,l,c,u,new Te)),o&&(h.normal=mn.getInterpolatedAttribute(o,a,l,c,u,new E),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new E,materialIndex:0};mn.getNormal(Kr,Zr,Jr,d.normal),h.face=d,h.barycoord=u}return h}var Xs=new et,Bh=new et,kh=new et,Uf=new et,zh=new Ie,to=new E,pl=new Zt,Hh=new Ie,ml=new Ci,nr=class extends $e{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sl,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new si),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,to),this.boundingBox.expandByPoint(to)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Zt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,to),this.boundingSphere.expandByPoint(to)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pl.copy(this.boundingSphere),pl.applyMatrix4(n),e.ray.intersectsSphere(pl)!==!1&&(Hh.copy(n).invert(),ml.copy(e.ray).applyMatrix4(Hh),!(this.boundingBox!==null&&ml.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ml)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new et,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Du?this.bindMatrixInverse.copy(this.bindMatrix).invert():we("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;Bh.fromBufferAttribute(n.attributes.skinIndex,e),kh.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(Xs.copy(t),t.set(0,0,0,0)):(Xs.set(t.x,t.y,t.z,1),t.set(0,0,0)),Xs.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=kh.getComponent(r);if(o!==0){let a=Bh.getComponent(r);zh.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Uf.copy(Xs).applyMatrix4(zh),o)}}return t.isVector4&&(t.w=Xs.w),t.applyMatrix4(this.bindMatrixInverse)}},Ss=class extends tt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ms=class extends It{constructor(e=null,t=1,i=1,n,r,o,a,l,c=dt,h=dt,u,d){super(null,o,a,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gh=new Ie,Ff=new Ie,sr=class s{constructor(e=[],t=[]){this.uuid=Ui(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){we("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ie;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Ff;Gh.multiplyMatrices(a,t[r]),Gh.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Ms(t,e,e,pi,ri);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let r=e.bones[i],o=t[r];o===void 0&&(we("Skeleton: No bone found with UUID:",r),o=new Ss),this.bones.push(o),this.boneInverses.push(new Ie().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){let o=t[n];e.bones.push(o.uuid);let a=i[n];e.boneInverses.push(a.toArray())}return e}},Zi=class extends Ut{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},os=new Ie,Vh=new Ie,io=[],Wh=new si,Of=new Ie,qs=new $e,Ys=new Zt,kn=class extends $e{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Of)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,os),Wh.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(Wh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,os),Ys.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(Ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(i),e.ray.intersectsSphere(Ys)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,os),Vh.multiplyMatrices(i,os),qs.matrixWorld=Vh,qs.raycast(e,io);for(let o=0,a=io.length;o<a;o++){let l=io[o];l.instanceId=r,l.object=this,t.push(l)}io.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Zi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ms(new Float32Array(n*this.count),n,this.count,qo,ri));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Nn=new Zt,Bf=new Te(.5,.5),no=new E,_n=class{constructor(e=new Xt,t=new Xt,i=new Xt,n=new Xt,r=new Xt,o=new Xt){this.planes=[e,t,i,n,r,o]}set(e,t,i,n,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=di,i=!1){let n=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],v=r[12],A=r[13],S=r[14],T=r[15];if(n[0].setComponents(c-o,f-h,p-g,T-v).normalize(),n[1].setComponents(c+o,f+h,p+g,T+v).normalize(),n[2].setComponents(c+a,f+u,p+x,T+A).normalize(),n[3].setComponents(c-a,f-u,p-x,T-A).normalize(),i)n[4].setComponents(l,d,m,S).normalize(),n[5].setComponents(c-l,f-d,p-m,T-S).normalize();else if(n[4].setComponents(c-l,f-d,p-m,T-S).normalize(),t===di)n[5].setComponents(c+l,f+d,p+m,T+S).normalize();else if(t===fs)n[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){Nn.center.set(0,0,0);let t=Bf.distanceTo(e.center);return Nn.radius=.7071067811865476+t,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(no.x=n.normal.x>0?e.max.x:e.min.x,no.y=n.normal.y>0?e.max.y:e.min.y,no.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(no)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Xh=new Ie,Mo=class s{constructor(){this.coordinateSystem=di,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let r=t[n];Xh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new _n),i[n].setFromProjectionMatrix(Xh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++)t[n]===void 0&&(t[n]=new _n),t[n].copy(i[n]);return this._count=e._count,this}clone(){return new s().copy(this)}};var xn=class extends Jt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},wo=new E,Eo=new E,qh=new Ie,$s=new Ci,so=new Zt,gl=new E,Yh=new E,Ji=class extends tt{constructor(e=new St,t=new xn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)wo.fromBufferAttribute(t,n-1),Eo.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=wo.distanceTo(Eo);e.setAttribute("lineDistance",new lt(i,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(n),so.radius+=r,e.ray.intersectsSphere(so)===!1)return;qh.copy(n).invert(),$s.copy(e.ray).applyMatrix4(qh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),v=h.getX(x+1),A=ro(this,e,$s,l,p,v,x);A&&t.push(A)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=ro(this,e,$s,l,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=ro(this,e,$s,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=ro(this,e,$s,l,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ro(s,e,t,i,n,r,o){let a=s.geometry.attributes.position;if(wo.fromBufferAttribute(a,n),Eo.fromBufferAttribute(a,r),t.distanceSqToSegment(wo,Eo,gl,Yh)>i)return;gl.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(gl);if(!(c<e.near||c>e.far))return{distance:c,point:Yh.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var $h=new E,Kh=new E,rr=class extends Ji{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)$h.fromBufferAttribute(t,n),Kh.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+$h.distanceTo(Kh);e.setAttribute("lineDistance",new lt(i,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},or=class extends Ji{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ws=class extends Jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zh=new Ie,Al=new Ci,oo=new Zt,ao=new E,ar=class extends tt{constructor(e=new St,t=new ws){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(n),oo.radius+=r,e.ray.intersectsSphere(oo)===!1)return;Zh.copy(n).invert(),Al.copy(e.ray).applyMatrix4(Zh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);ao.fromBufferAttribute(u,m),Jh(ao,m,l,n,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)ao.fromBufferAttribute(u,g),Jh(ao,g,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Jh(s,e,t,i,n,r,o){let a=Al.distanceSqToPoint(s);if(a<t){let l=new E;Al.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var lr=class extends It{constructor(e=[],t=Xn,i,n,r,o,a,l,c,h){super(e,t,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var ji=class extends It{constructor(e,t,i=wi,n,r,o,a=dt,l=dt,c,h=$i,u=1){if(h!==$i&&h!==rn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},cr=class extends ji{constructor(e,t=wi,i=Xn,n,r,o=dt,a=dt,l,c=$i){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,n,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},hr=class extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},bi=class s extends St{constructor(e=1,t=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,n,o,2),g("x","z","y",1,-1,e,i,-t,n,o,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function g(x,m,p,v,A,S,T,w,_,M,U){let C=S/_,D=T/M,O=S/2,V=T/2,L=w/2,W=_+1,F=M+1,k=0,Q=0,X=new E;for(let j=0;j<F;j++){let ee=j*D-V;for(let Se=0;Se<W;Se++){let Ue=Se*C-O;X[x]=Ue*v,X[m]=ee*A,X[p]=L,c.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[p]=w>0?1:-1,h.push(X.x,X.y,X.z),u.push(Se/_),u.push(1-j/M),k+=1}}for(let j=0;j<M;j++)for(let ee=0;ee<_;ee++){let Se=d+ee+W*j,Ue=d+ee+W*(j+1),K=d+(ee+1)+W*(j+1),pe=d+(ee+1)+W*j;l.push(Se,Ue,pe),l.push(Ue,K,pe),Q+=6}a.addGroup(f,Q,U),f+=Q,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Si=class s extends St{constructor(e=1,t=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=i/2,p=0;v(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(f,2));function v(){let S=new E,T=new E,w=0,_=(t-e)/i;for(let M=0;M<=r;M++){let U=[],C=M/r,D=C*(t-e)+e;for(let O=0;O<=n;O++){let V=O/n,L=V*l+a,W=Math.sin(L),F=Math.cos(L);T.x=D*W,T.y=-C*i+m,T.z=D*F,u.push(T.x,T.y,T.z),S.set(W,_,F).normalize(),d.push(S.x,S.y,S.z),f.push(V,1-C),U.push(g++)}x.push(U)}for(let M=0;M<n;M++)for(let U=0;U<r;U++){let C=x[U][M],D=x[U+1][M],O=x[U+1][M+1],V=x[U][M+1];(e>0||U!==0)&&(h.push(C,D,V),w+=3),(t>0||U!==r-1)&&(h.push(D,O,V),w+=3)}c.addGroup(p,w,0),p+=w}function A(S){let T=g,w=new Te,_=new E,M=0,U=S===!0?e:t,C=S===!0?1:-1;for(let O=1;O<=n;O++)u.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),g++;let D=g;for(let O=0;O<=n;O++){let L=O/n*l+a,W=Math.cos(L),F=Math.sin(L);_.x=U*F,_.y=m*C,_.z=U*W,u.push(_.x,_.y,_.z),d.push(0,C,0),w.x=W*.5+.5,w.y=F*.5*C+.5,f.push(w.x,w.y),g++}for(let O=0;O<n;O++){let V=T+O,L=D+O;S===!0?h.push(L,L+1,V):h.push(L+1,L,V),M+=3}c.addGroup(p,M,S===!0?1:2),p+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var To=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){we("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);let h=i[n],d=i[n+1]-h,f=(o-h)/d;return(n+f)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let o=this.getPoint(n),a=this.getPoint(r),l=t||(o.isVector2?new Te:new E);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new E,n=[],r=[],o=[],a=new E,l=new Ie;for(let f=0;f<=e;f++){let g=f/e;n[f]=this.getTangentAt(g,new E)}r[0]=new E,o[0]=new E;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ke(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(n[f],r[f])}if(t===!0){let f=Math.acos(ke(r[0].dot(r[e]),-1,1));f/=e,n[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}};function uc(){let s=0,e=0,t=0,i=0;function n(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,n(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+i*a}}}var jh=new E,Qh=new E,_l=new uc,xl=new uc,yl=new uc,yn=class extends To{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new E){let i=t,n=this.points,r=n.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(Qh.subVectors(n[0],n[1]).add(n[0]),c=Qh);let u=n[a%r],d=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(jh.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=jh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),_l.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),xl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),yl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(_l.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),xl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),yl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(_l.calc(l),xl.calc(l),yl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new E().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var zn=class s extends St{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let v=p*d-o;for(let A=0;A<c;A++){let S=A*u-r;g.push(S,-v,0),x.push(0,0,1),m.push(A/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let A=v+c*p,S=v+c*(p+1),T=v+1+c*(p+1),w=v+1+c*p;f.push(A,S,w),f.push(S,T,w)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},ur=class s extends St{constructor(e=.5,t=1,i=32,n=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/n,f=new E,g=new Te;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<n;x++){let m=x*(i+1);for(let p=0;p<i;p++){let v=p+m,A=v,S=v+i+1,T=v+i+2,w=v+1;a.push(A,S,w),a.push(S,T,w)}}this.setIndex(a),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var vn=class s extends St{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new E,d=new E,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let v=[],A=p/i,S=o+A*a,T=e*Math.cos(S),w=Math.sqrt(e*e-T*T),_=0;p===0&&o===0?_=.5/t:p===i&&l===Math.PI&&(_=-.5/t);for(let M=0;M<=t;M++){let U=M/t,C=n+U*r;u.x=-w*Math.cos(C),u.y=T,u.z=w*Math.sin(C),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(U+_,1-A),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){let A=h[p][v+1],S=h[p][v],T=h[p+1][v],w=h[p+1][v+1];(p!==0||o>0)&&f.push(A,S,w),(p!==i-1||l<Math.PI)&&f.push(S,T,w)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function $n(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];if(eu(n))n.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(eu(n[0])){let r=[];for(let o=0,a=n.length;o<a;o++)r[o]=n[o].clone();e[t][i]=r}else e[t][i]=n.slice();else e[t][i]=n}}return e}function Gt(s){let e={};for(let t=0;t<s.length;t++){let i=$n(s[t]);for(let n in i)e[n]=i[n]}return e}function eu(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function kf(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function dc(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}var $u={clone:$n,merge:Gt},zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pi=class extends Jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zf,this.fragmentShader=Hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$n(e.uniforms),this.uniformsGroups=kf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new _e().setHex(n.value);break;case"v2":this.uniforms[i].value=new Te().fromArray(n.value);break;case"v3":this.uniforms[i].value=new E().fromArray(n.value);break;case"v4":this.uniforms[i].value=new et().fromArray(n.value);break;case"m3":this.uniforms[i].value=new De().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Ie().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ao=class extends Pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ht=class extends Jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yt=class extends Ht{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Un('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Un('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ro=class extends Jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Co=class extends Jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function pn(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Ks(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Gf(s){function e(n,r){return s[n]-s[r]}let t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function tu(s,e,t){let i=s.length,n=new s.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)n[o++]=s[a+l]}return n}function Vf(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[n++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=s[n++];while(r!==void 0)}var Li=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let o;t:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=t[++i],e<n)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break i}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let o=0;o!==n;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Po=class extends Li{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wl,endingEnd:wl}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,o=e+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case El:r=e,a=2*t-i;break;case Tl:r=n.length-2,a=t+n[r]-n[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case El:o=e,l=2*i-t;break;case Tl:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(n-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,A=(-1-f)*m+(1.5+f)*x+.5*g,S=f*m-f*x;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+v*o[c+T]+A*o[l+T]+S*o[u+T];return r}},Lo=class extends Li{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Io=class extends Li{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Do=class extends Li{interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-t)/(n-t),x=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*g;return r}let d=a*2,f=e-1;for(let g=0;g!==a;++g){let x=o[c+g],m=o[l+g],p=f*d+g*2,v=u[p],A=u[p+1],S=e*d+g*2,T=h[S],w=h[S+1],_=Xf(i,t,v,T,n);r[g]=Ku(_,x,A,w,m)}return r}};function Ku(s,e,t,i,n){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*i+s*s*s*n}function Wf(s,e,t,i,n){let r=1-s;return 3*r*r*(t-e)+6*r*s*(i-t)+3*s*s*(n-i)}function Xf(s,e,t,i,n){let r=(s-e)/(n-e);for(let o=0;o<8;o++){let a=Ku(r,e,t,i,n)-s;if(Math.abs(a)<1e-10)break;let l=Wf(r,e,t,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var jt=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pn(t,this.TimeBufferType),this.values=pn(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:pn(e.times,Array),values:pn(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),Ks(e.settings)&&(i.settings={inTangents:pn(e.settings.inTangents,Array),outTangents:pn(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Do(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fn:t=this.InterpolantFactoryMethodDiscrete;break;case On:t=this.InterpolantFactoryMethodLinear;break;case ho:t=this.InterpolantFactoryMethodSmooth;break;case Ml:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return we("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fn;case this.InterpolantFactoryMethodLinear:return On;case this.InterpolantFactoryMethodSmooth:return ho;case this.InterpolantFactoryMethodBezier:return Ml}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;Ks(this.settings)&&(iu(this.settings.inTangents,e),iu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;Ks(this.settings)&&(nu(this.settings.inTangents,e),nu(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Le("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Le("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&tf(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){Le("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ho,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,Ks(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function iu(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]+=e}function nu(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]*=e}jt.prototype.ValueTypeName="";jt.prototype.TimeBufferType=Float32Array;jt.prototype.ValueBufferType=Float32Array;jt.prototype.DefaultInterpolation=On;var Qi=class extends jt{constructor(e,t,i){super(e,t,i)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Fn;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var dr=class extends jt{constructor(e,t,i,n){super(e,t,i,n)}};dr.prototype.ValueTypeName="color";var en=class extends jt{constructor(e,t,i,n){super(e,t,i,n)}};en.prototype.ValueTypeName="number";var No=class extends Li{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t),c=e*a;for(let h=c+a;c!==h;c+=4)Lt.slerpFlat(r,0,o,c-a,o,c,l);return r}},tn=class extends jt{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new No(this.times,this.values,this.getValueSize(),e)}};tn.prototype.ValueTypeName="quaternion";tn.prototype.InterpolantFactoryMethodSmooth=void 0;var nn=class extends jt{constructor(e,t,i){super(e,t,i)}};nn.prototype.ValueTypeName="string";nn.prototype.ValueBufferType=Array;nn.prototype.DefaultInterpolation=Fn;nn.prototype.InterpolantFactoryMethodLinear=void 0;nn.prototype.InterpolantFactoryMethodSmooth=void 0;var bn=class extends jt{constructor(e,t,i,n){super(e,t,i,n)}};bn.prototype.ValueTypeName="vector";var fr=class{constructor(e="",t=-1,i=[],n=Nu){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Ui(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Yf(i[o]).scale(n));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=i.length;r!==o;++r)t.push(jt.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Gf(l);l=tu(l,1,h),c=tu(c,1,h),!n&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new en(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=n[u];d||(n[u]=d=[]),d.push(c)}}let o=[];for(let a in n)o.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return o}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function qf(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return en;case"vector":case"vector2":case"vector3":case"vector4":return bn;case"color":return dr;case"quaternion":return tn;case"bool":case"boolean":return Qi;case"string":return nn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Yf(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=qf(s.type);if(s.times===void 0){let i=[],n=[];Vf(s.keys,i,n,"value"),s.times=i,s.values=n}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Ks(s.settings)&&(t.settings={inTangents:pn(s.settings.inTangents,Float32Array),outTangents:pn(s.settings.outTangents,Float32Array)}),t}var Ri={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(su(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!su(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function su(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Uo=class{constructor(e,t,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zu=new Uo,Ii=class{constructor(e){this.manager=e!==void 0?e:Zu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ii.DEFAULT_MATERIAL_NAME="__DEFAULT";var qi={},Rl=class extends Error{constructor(e,t){super(e),this.response=t}},Es=class extends Ii{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ri.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(qi[e]!==void 0){qi[e].push({onLoad:t,onProgress:i,onError:n});return}qi[e]=[],qi[e].push({onLoad:t,onProgress:i,onError:n});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&we("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=qi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){v();function v(){u.read().then(({done:A,value:S})=>{if(A)p.close();else{x+=S.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let w=0,_=h.length;w<_;w++){let M=h[w];M.onProgress&&M.onProgress(T)}p.enqueue(S),v()}},A=>{p.error(A)})}}});return new Response(m)}else throw new Rl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ri.add(`file:${e}`,c);let h=qi[e];delete qi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=qi[e];if(h===void 0)throw this.manager.itemError(e),c;delete qi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var as=new WeakMap,Fo=class extends Ii{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ri.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=as.get(o);u===void 0&&(u=[],as.set(o,u)),u.push({onLoad:t,onError:n})}return o}let a=ps("img");function l(){h(),t&&t(this);let u=as.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}as.delete(this),r.manager.itemEnd(e)}function c(u){h(),n&&n(u),Ri.remove(`image:${e}`);let d=as.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}as.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ri.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var pr=class extends Ii{constructor(e){super(e)}load(e,t,i,n){let r=new It,o=new Fo(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}},Sn=class extends tt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},mr=class extends Sn{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},vl=new Ie,ru=new E,ou=new E,Ts=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=Qt,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _n,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ru.setFromMatrixPosition(e.matrixWorld),t.position.copy(ru),ou.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ou),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){vl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(vl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=n?n.z/r.x:1,a=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;e.coordinateSystem===fs||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},lo=new E,co=new Lt,Ai=new E,gr=class extends tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lo,co,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lo,co,Ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(lo,co,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lo,co,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fn=new E,au=new Te,lu=new Te,yt=class extends gr{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Bn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bn*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fn.x,fn.y).multiplyScalar(-e/fn.z),fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fn.x,fn.y).multiplyScalar(-e/fn.z)}getViewSize(e,t){return this.getViewBounds(e,au,lu),t.subVectors(lu,au)}setViewOffset(e,t,i,n,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zs*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Cl=class extends Ts{constructor(){super(new yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Bn*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},_r=class extends Sn{constructor(e,t,i=0,n=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.target=new tt,this.distance=i,this.angle=n,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Cl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Pl=class extends Ts{constructor(){super(new yt(90,1,.5,500)),this.isPointLightShadow=!0}},Mi=class extends Sn{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Pl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Hn=class extends gr{constructor(e=-1,t=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ll=class extends Ts{constructor(){super(new Hn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gn=class extends Sn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.target=new tt,this.shadow=new Ll}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},xr=class extends Sn{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var sn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var bl=new WeakMap,yr=class extends Ii{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&we("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&we("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ri.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{bl.has(o)===!0?(n&&n(bl.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ri.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){n&&n(c),bl.set(l,c),Ri.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ri.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ls=-90,cs=1,As=class extends tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new yt(ls,cs,e,t);n.layers=this.layers,this.add(n);let r=new yt(ls,cs,e,t);r.layers=this.layers,this.add(r);let o=new yt(ls,cs,e,t);o.layers=this.layers,this.add(o);let a=new yt(ls,cs,e,t);a.layers=this.layers,this.add(a);let l=new yt(ls,cs,e,t);l.layers=this.layers,this.add(l);let c=new yt(ls,cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Oo=class extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var fc="\\[\\]\\.:\\/",$f=new RegExp("["+fc+"]","g"),pc="[^"+fc+"]",Kf="[^"+fc.replace("\\.","")+"]",Zf=/((?:WC+[\/:])*)/.source.replace("WC",pc),Jf=/(WCOD+)?/.source.replace("WCOD",Kf),jf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pc),Qf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pc),ep=new RegExp("^"+Zf+Jf+jf+Qf+"$"),tp=["material","materials","bones","map"],Il=class{constructor(e,t,i){let n=i||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},st=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($f,"")}static parseTrackName(e){let t=ep.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);tp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){we("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[n];if(o===void 0){let c=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};st.Composite=Il;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xx=new Float32Array(1);var cu=new Ie,vr=class{constructor(e,t,i=0,n=1/0){this.ray=new Ci(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new _s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Le("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cu),this}intersectObject(e,t=!0,i=[]){return Dl(e,this,i,t),i.sort(hu),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)Dl(e[n],this,i,t);return i.sort(hu),i}};function hu(s,e){return s.distance-e.distance}function Dl(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Dl(r[o],e,t,!0)}}var br=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,we("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Rs=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var vc=class vc{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}};vc.prototype.isMatrix2=!0;var Nl=vc;var Sr=class extends vi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function mc(s,e,t,i){let n=ip(i);switch(t){case jl:return s*e;case qo:return s*e/n.components*n.byteLength;case Yo:return s*e/n.components*n.byteLength;case En:return s*e*2/n.components*n.byteLength;case $o:return s*e*2/n.components*n.byteLength;case Ql:return s*e*3/n.components*n.byteLength;case pi:return s*e*4/n.components*n.byteLength;case Ko:return s*e*4/n.components*n.byteLength;case Er:case Tr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ar:case Rr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jo:case Qo:return Math.max(s,16)*Math.max(e,8)/4;case Zo:case jo:return Math.max(s,8)*Math.max(e,8)/2;case ea:case ta:case na:case sa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ia:case Cr:case ra:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case oa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case aa:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case la:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ca:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ha:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ua:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case da:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case fa:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case pa:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ma:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ga:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case _a:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case xa:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ya:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case va:case ba:case Sa:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ma:case wa:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Pr:case Ea:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ip(s){switch(s){case Qt:case $l:return{byteLength:1,components:1};case Ns:case Kl:case Ei:return{byteLength:2,components:1};case Wo:case Xo:return{byteLength:2,components:4};case wi:case Vo:case ri:return{byteLength:4,components:1};case Zl:case Jl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function xd(){let s=null,e=!1,t=null,i=null;function n(r,o){i=s.requestAnimationFrame(n),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function sp(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,op=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,up=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Rp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Np="gl_FragColor = linearToOutputTexel( gl_FragColor );",Up=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Zp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,im=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,om=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,am=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_m=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Am=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ym=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ug=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Eg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ng=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:rp,alphahash_pars_fragment:op,alphamap_fragment:ap,alphamap_pars_fragment:lp,alphatest_fragment:cp,alphatest_pars_fragment:hp,aomap_fragment:up,aomap_pars_fragment:dp,batching_pars_vertex:fp,batching_vertex:pp,begin_vertex:mp,beginnormal_vertex:gp,bsdfs:_p,iridescence_fragment:xp,bumpmap_pars_fragment:yp,clipping_planes_fragment:vp,clipping_planes_pars_fragment:bp,clipping_planes_pars_vertex:Sp,clipping_planes_vertex:Mp,color_fragment:wp,color_pars_fragment:Ep,color_pars_vertex:Tp,color_vertex:Ap,common:Rp,defaultnormal_vertex:Cp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Lp,emissivemap_fragment:Ip,emissivemap_pars_fragment:Dp,colorspace_fragment:Np,colorspace_pars_fragment:Up,envmap_fragment:Fp,envmap_common_pars_fragment:Op,envmap_pars_fragment:Bp,envmap_pars_vertex:kp,envmap_physical_pars_fragment:Zp,envmap_vertex:zp,fog_vertex:Hp,fog_pars_vertex:Gp,fog_fragment:Vp,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_pars_fragment:qp,lights_lambert_fragment:Yp,lights_lambert_pars_fragment:$p,lights_pars_begin:Kp,lights_toon_fragment:Jp,lights_toon_pars_fragment:jp,lights_phong_fragment:Qp,lights_phong_pars_fragment:em,lights_physical_fragment:tm,lights_physical_pars_fragment:im,lights_fragment_begin:nm,lights_fragment_maps:sm,lights_fragment_end:rm,lightprobes_pars_fragment:om,logdepthbuf_fragment:am,logdepthbuf_pars_fragment:lm,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:hm,map_fragment:um,map_pars_fragment:dm,map_particle_fragment:fm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphinstance_vertex:_m,morphcolor_vertex:xm,morphnormal_vertex:ym,morphtarget_pars_vertex:vm,morphtarget_vertex:bm,normal_fragment_begin:Sm,normal_fragment_maps:Mm,normal_pars_fragment:wm,normal_pars_vertex:Em,normal_vertex:Tm,normalmap_pars_fragment:Am,clearcoat_normal_fragment_begin:Rm,clearcoat_normal_fragment_maps:Cm,clearcoat_pars_fragment:Pm,iridescence_pars_fragment:Lm,opaque_fragment:Im,packing:Dm,premultiplied_alpha_fragment:Nm,project_vertex:Um,dithering_fragment:Fm,dithering_pars_fragment:Om,roughnessmap_fragment:Bm,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:Hm,shadowmap_vertex:Gm,shadowmask_pars_fragment:Vm,skinbase_vertex:Wm,skinning_pars_vertex:Xm,skinning_vertex:qm,skinnormal_vertex:Ym,specularmap_fragment:$m,specularmap_pars_fragment:Km,tonemapping_fragment:Zm,tonemapping_pars_fragment:Jm,transmission_fragment:jm,transmission_pars_fragment:Qm,uv_pars_fragment:eg,uv_pars_vertex:tg,uv_vertex:ig,worldpos_vertex:ng,background_vert:sg,background_frag:rg,backgroundCube_vert:og,backgroundCube_frag:ag,cube_vert:lg,cube_frag:cg,depth_vert:hg,depth_frag:ug,distance_vert:dg,distance_frag:fg,equirect_vert:pg,equirect_frag:mg,linedashed_vert:gg,linedashed_frag:_g,meshbasic_vert:xg,meshbasic_frag:yg,meshlambert_vert:vg,meshlambert_frag:bg,meshmatcap_vert:Sg,meshmatcap_frag:Mg,meshnormal_vert:wg,meshnormal_frag:Eg,meshphong_vert:Tg,meshphong_frag:Ag,meshphysical_vert:Rg,meshphysical_frag:Cg,meshtoon_vert:Pg,meshtoon_frag:Lg,points_vert:Ig,points_frag:Dg,shadow_vert:Ng,shadow_frag:Ug,sprite_vert:Fg,sprite_frag:Og},fe={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Oi={basic:{uniforms:Gt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Gt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new _e(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Gt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Gt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Gt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new _e(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Gt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Gt([fe.points,fe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Gt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Gt([fe.common,fe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Gt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Gt([fe.sprite,fe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:Gt([fe.common,fe.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:Gt([fe.lights,fe.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Oi.physical={uniforms:Gt([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var Ra={r:0,b:0,g:0},Bg=new Ie,yd=new De;yd.set(-1,0,0,0,1,0,0,0,1);function kg(s,e,t,i,n,r){let o=new _e(0),a=n===!0?0:1,l,c,h=null,u=0,d=null;function f(v){let A=v.isScene===!0?v.background:null;if(A&&A.isTexture){let S=v.backgroundBlurriness>0;A=e.get(A,S)}return A}function g(v){let A=!1,S=f(v);S===null?m(o,a):S&&S.isColor&&(m(S,1),A=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,A){let S=f(A);S&&S.isCubeTexture?(c===void 0&&(c=new $e(new bi(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:$n(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Bg.makeRotationFromEuler(A.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yd),c.material.toneMapped=Ge.getTransfer(S.colorSpace)!==Je,(h!==S||u!==S.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new $e(new zn(2,2),new Pi({name:"BackgroundMaterial",uniforms:$n(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(S.colorSpace)!==Je,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,A){v.getRGB(Ra,dc(s)),t.buffers.color.setClear(Ra.r,Ra.g,Ra.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,A=1){o.set(v),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:x,dispose:p}}function zg(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,o=!1;function a(D,O,V,L,W){let F=!1,k=u(D,L,V,O);r!==k&&(r=k,c(r.object)),F=f(D,L,V,W),F&&g(D,L,V,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,S(D,O,V,L),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function u(D,O,V,L){let W=L.wireframe===!0,F=i[O.id];F===void 0&&(F={},i[O.id]=F);let k=D.isInstancedMesh===!0?D.id:0,Q=F[k];Q===void 0&&(Q={},F[k]=Q);let X=Q[V.id];X===void 0&&(X={},Q[V.id]=X);let j=X[W];return j===void 0&&(j=d(l()),X[W]=j),j}function d(D){let O=[],V=[],L=[];for(let W=0;W<t;W++)O[W]=0,V[W]=0,L[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,O,V,L){let W=r.attributes,F=O.attributes,k=0,Q=V.getAttributes();for(let X in Q)if(Q[X].location>=0){let ee=W[X],Se=F[X];if(Se===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor)),ee===void 0||ee.attribute!==Se||Se&&ee.data!==Se.data)return!0;k++}return r.attributesNum!==k||r.index!==L}function g(D,O,V,L){let W={},F=O.attributes,k=0,Q=V.getAttributes();for(let X in Q)if(Q[X].location>=0){let ee=F[X];ee===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));let Se={};Se.attribute=ee,ee&&ee.data&&(Se.data=ee.data),W[X]=Se,k++}r.attributes=W,r.attributesNum=k,r.index=L}function x(){let D=r.newAttributes;for(let O=0,V=D.length;O<V;O++)D[O]=0}function m(D){p(D,0)}function p(D,O){let V=r.newAttributes,L=r.enabledAttributes,W=r.attributeDivisors;V[D]=1,L[D]===0&&(s.enableVertexAttribArray(D),L[D]=1),W[D]!==O&&(s.vertexAttribDivisor(D,O),W[D]=O)}function v(){let D=r.newAttributes,O=r.enabledAttributes;for(let V=0,L=O.length;V<L;V++)O[V]!==D[V]&&(s.disableVertexAttribArray(V),O[V]=0)}function A(D,O,V,L,W,F,k){k===!0?s.vertexAttribIPointer(D,O,V,W,F):s.vertexAttribPointer(D,O,V,L,W,F)}function S(D,O,V,L){x();let W=L.attributes,F=V.getAttributes(),k=O.defaultAttributeValues;for(let Q in F){let X=F[Q];if(X.location>=0){let j=W[Q];if(j===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){let ee=j.normalized,Se=j.itemSize,Ue=e.get(j);if(Ue===void 0)continue;let K=Ue.buffer,pe=Ue.type,ye=Ue.bytesPerElement,Re=pe===s.INT||pe===s.UNSIGNED_INT||j.gpuType===Vo;if(j.isInterleavedBufferAttribute){let me=j.data,Oe=me.isInterleavedBuffer===!0?me.stride:me.itemSize,ft=j.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Pe=0;Pe<X.locationSize;Pe++)p(X.location+Pe,me.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Pe=0;Pe<X.locationSize;Pe++)m(X.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,K);for(let Pe=0;Pe<X.locationSize;Pe++)A(X.location+Pe,Se/X.locationSize,pe,ee,Oe*ye,(ft+Se/X.locationSize*Pe)*ye,Re)}else{if(j.isInstancedBufferAttribute){for(let me=0;me<X.locationSize;me++)p(X.location+me,j.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let me=0;me<X.locationSize;me++)m(X.location+me);s.bindBuffer(s.ARRAY_BUFFER,K);for(let me=0;me<X.locationSize;me++)A(X.location+me,Se/X.locationSize,pe,ee,Se*ye,Se/X.locationSize*me*ye,Re)}}else if(k!==void 0){let ee=k[Q];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(X.location,ee);break;case 3:s.vertexAttrib3fv(X.location,ee);break;case 4:s.vertexAttrib4fv(X.location,ee);break;default:s.vertexAttrib1fv(X.location,ee)}}}}v()}function T(){U();for(let D in i){let O=i[D];for(let V in O){let L=O[V];for(let W in L){let F=L[W];for(let k in F)h(F[k].object),delete F[k];delete L[W]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;let O=i[D.id];for(let V in O){let L=O[V];for(let W in L){let F=L[W];for(let k in F)h(F[k].object),delete F[k];delete L[W]}}delete i[D.id]}function _(D){for(let O in i){let V=i[O];for(let L in V){let W=V[L];if(W[D.id]===void 0)continue;let F=W[D.id];for(let k in F)h(F[k].object),delete F[k];delete W[D.id]}}}function M(D){for(let O in i){let V=i[O],L=D.isInstancedMesh===!0?D.id:0,W=V[L];if(W!==void 0){for(let F in W){let k=W[F];for(let Q in k)h(k[Q].object),delete k[Q];delete W[F]}delete V[L],Object.keys(V).length===0&&delete i[O]}}}function U(){C(),o=!0,r!==n&&(r=n,c(r.object))}function C(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:U,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Hg(s,e,t){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,i,1)}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Gg(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(_){return!(_!==pi&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let M=_===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Qt&&_!==ri&&!M&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(we("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&we("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&we("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:S,maxSamples:T,samples:w}}function Vg(s){let e=this,t=null,i=0,n=!1,r=!1,o=new Xt,a=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,A=v*4,S=p.clippingState||null;l.value=S,S=h(g,d,A,f);for(let T=0;T!==A;++T)S[T]=t[T];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,S=f;A!==x;++A,S+=4)o.copy(u[A]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Nr=class extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new lr(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new bi(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:$n(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:Vn});r.uniforms.tEquirect.value=t;let o=new $e(n,r),a=t.minFilter;return t.minFilter===fi&&(t.minFilter=bt),new As(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(r)}},Ju=256,Wg=3,Xg=20,vd=256,bd=16,qg=3,Yg=new E,$g=new _e,Pa=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new As(1,10,null),this._boxMesh=new $e(new bi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){let{size:o=256,position:a=Yg}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor($g));let m=new As(i,n,h);return m.position.copy(a),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ju,lc(e))}_fromTexture(e,t){e.mapping===Xn||e.mapping===Is?this._setSize(e.image.length===0?Ju:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=ju(e,!1,!1),i=Math.log2(e)-Wg;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=ju(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Xn||e.mapping===Is?(this._cubemapMaterial===null&&(this._cubemapMaterial=ed()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Qu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Kg(),this._integrationMaterial=Zg());let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/bd);for(let o=0;o<=i;o++){let a=s.lodToRoughness(o,i);if(o>i-qg)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(vd*Math.pow(a,4)))+.5:0;n.roughness.value=a,n.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Jg());let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(r,0,i)}};function ju(s,e,t){return new Nr(s,{minFilter:fi,generateMipmaps:e,type:Ei,colorSpace:qt,depthBuffer:t})}function Ur(s,e,t){return new Pi({name:s,uniforms:e,vertexShader:He.cube_vert,fragmentShader:t,side:$t,blending:Vn,depthTest:!1,depthWrite:!1})}function Kg(){return Ur("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Zg(){return Ur("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:bd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Jg(){return Ur("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Xg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Qu(){return Ur("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ed(){return Ur("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function jg(s){let e=new WeakMap,t=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===zo||f===Ho)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new Nr(g.height);return x.fromEquirectangularTexture(s,d),e.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===zo||f===Ho,x=f===Xn||f===Is;if(g||x){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Pa(s)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return g&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new Pa(s)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===zo?d.mapping=Xn:f===Ho&&(d.mapping=Is),d}function l(d){let f=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function Qg(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Un("WebGLRenderer: "+i+" extension not supported."),n}}}function e_(s,e,t,i){let n={},r=new WeakMap,o=new FinalizationRegistry(g=>delete n[g]);function a(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete n[g.id],o.unregister(g);let x=r.get(g);x&&(e.remove(x),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,x){return n[x.id]!==void 0||(x.addEventListener("dispose",a),n[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(g){let x=g.attributes;for(let m in x)e.update(x[m],s.ARRAY_BUFFER)}function u(g){let x=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let v=x!==null?x.array.length:m.array.length/3-1,A=m.count>=65535?ir:tr,S=new A(Math.ceil(v/3)*6,1),T=S.array;if(x!==null){let _=x.array;p=x.version;for(let M=0,U=0;M<v;M+=3){let C=_[M+0],D=_[M+1],O=_[M+2];T[U++]=C,T[U++]=D,T[U++]=D,T[U++]=O,T[U++]=O,T[U++]=C}}else{p=m.version;for(let _=0,M=0;_<v;_+=3){let U=_+0,C=_+1,D=_+2;T[M++]=U,T[M++]=C,T[M++]=C,T[M++]=D,T[M++]=D,T[M++]=U}}S.version=p;let w=r.get(g);w&&e.remove(w),r.set(g,S)}function d(g){let x=r.get(g);if(x){let m=g.index;m!==null&&x.version<m.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in n){let x=n[g].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function t_(s,e,t){let i;function n(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){s.drawElements(i,d,r,u*o),t.update(d,i,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(i,d,r,u*o,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];t.update(x,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function i_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Le("WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function n_(s,e,t){let i=new WeakMap,n=new et;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let U=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",U)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),x===!0&&(A=3);let S=a.attributes.position.count*A,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let w=new Float32Array(S*T*4*u),_=new er(w,S,T,u);_.type=ri,_.needsUpdate=!0;let M=A*4;for(let C=0;C<u;C++){let D=m[C],O=p[C],V=v[C],L=S*T*4*C;for(let W=0;W<D.count;W++){let F=W*M;f===!0&&(n.fromBufferAttribute(D,W),w[L+F+0]=n.x,w[L+F+1]=n.y,w[L+F+2]=n.z,w[L+F+3]=0),g===!0&&(n.fromBufferAttribute(O,W),w[L+F+4]=n.x,w[L+F+5]=n.y,w[L+F+6]=n.z,w[L+F+7]=0),x===!0&&(n.fromBufferAttribute(V,W),w[L+F+8]=n.x,w[L+F+9]=n.y,w[L+F+10]=n.z,w[L+F+11]=V.itemSize===4?n.w:1)}}d={count:u,texture:_,size:new Te(S,T)},i.set(a,d),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function s_(s,e,t,i,n){let r=new WeakMap;function o(c){let h=n.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var r_={[Hl]:"LINEAR_TONE_MAPPING",[Gl]:"REINHARD_TONE_MAPPING",[Vl]:"CINEON_TONE_MAPPING",[wr]:"ACES_FILMIC_TONE_MAPPING",[Xl]:"AGX_TONE_MAPPING",[ql]:"NEUTRAL_TONE_MAPPING",[Wl]:"CUSTOM_TONE_MAPPING"};function o_(s,e,t,i,n,r){let o=new ni(e,t,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new St;h.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new lt([0,2,0,0,2,0],2));let u=new Ao({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new $e(h,u),f=new Hn(-1,1,1,-1,0,1),g=null,x=null,m=!1,p,v=null,A=[],S=!1;this.setSize=function(T,w){o.setSize(T,w),a!==null&&a.setSize(T,w),l!==null&&l.setSize(T,w);for(let _=0;_<A.length;_++){let M=A[_];M.setSize&&M.setSize(T,w)}},this.setEffects=function(T){A=T,S=A.length>0&&A[0].isRenderPass===!0;let w=o.width,_=o.height;A.length>0&&a===null&&(a=new ni(w,_,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),l=new ni(w,_,{type:Ei,depthBuffer:!1,stencilBuffer:!1}));let M=n===!0&&A.some(U=>U.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&c===null&&(c=new ji(w,_),r===!0&&(c.format=rn,c.type=Yn)),o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let U=0;U<A.length;U++){let C=A[U];C.setSize&&C.setSize(w,_),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(T,w){if(m||T.toneMapping===Ni&&A.length===0)return!1;if(v=w,w!==null){let _=w.width,M=w.height;(o.width!==_||o.height!==M)&&this.setSize(_,M)}return S===!1&&T.setRenderTarget(o),p=T.toneMapping,T.toneMapping=Ni,!0},this.hasRenderPass=function(){return S},this.end=function(T,w){T.toneMapping=p,m=!0;let _=o,M=a;for(let U=0;U<A.length;U++){let C=A[U];C.enabled!==!1&&(C.render(T,M,_,w),C.needsSwap!==!1&&(_=M,M=M===a?l:a))}if(g!==T.outputColorSpace||x!==T.toneMapping){g=T.outputColorSpace,x=T.toneMapping,u.defines={},Ge.getTransfer(g)===Je&&(u.defines.SRGB_TRANSFER="");let U=r_[x];U&&(u.defines[U]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(v),T.render(d,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Sd=new It,Md=new ji(1,1),wd=new cr(1),Ed=new er,Td=new So,Ad=new lr,td=[],id=[],nd=new Float32Array(16),sd=new Float32Array(9),rd=new Float32Array(4);function Os(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=td[n];if(r===void 0&&(r=new Float32Array(n),td[n]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function wt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Et(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Ia(s,e){let t=id[e];t===void 0&&(t=new Int32Array(e),id[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function a_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function l_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2fv(this.addr,e),Et(t,e)}}function c_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;s.uniform3fv(this.addr,e),Et(t,e)}}function h_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4fv(this.addr,e),Et(t,e)}}function u_(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,i))return;rd.set(i),s.uniformMatrix2fv(this.addr,!1,rd),Et(t,i)}}function d_(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,i))return;sd.set(i),s.uniformMatrix3fv(this.addr,!1,sd),Et(t,i)}}function f_(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,i))return;nd.set(i),s.uniformMatrix4fv(this.addr,!1,nd),Et(t,i)}}function p_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function m_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2iv(this.addr,e),Et(t,e)}}function g_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;s.uniform3iv(this.addr,e),Et(t,e)}}function __(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4iv(this.addr,e),Et(t,e)}}function x_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function y_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2uiv(this.addr,e),Et(t,e)}}function v_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;s.uniform3uiv(this.addr,e),Et(t,e)}}function b_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4uiv(this.addr,e),Et(t,e)}}function Da(s){return s.version===0&&(s.compareFunction=nc,s.needsUpdate=!0),s}function S_(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=Da(Md):r=Sd,t.setTexture2D(e||r,n)}function M_(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Td,n)}function w_(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Da(wd):r=Ad,t.setTextureCube(e||r,n)}function E_(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Ed,n)}function T_(s){switch(s){case 5126:return a_;case 35664:return l_;case 35665:return c_;case 35666:return h_;case 35674:return u_;case 35675:return d_;case 35676:return f_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return __;case 5125:return x_;case 36294:return y_;case 36295:return v_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return E_}}function A_(s,e){s.uniform1fv(this.addr,e)}function R_(s,e){let t=Os(e,this.size,2);s.uniform2fv(this.addr,t)}function C_(s,e){let t=Os(e,this.size,3);s.uniform3fv(this.addr,t)}function P_(s,e){let t=Os(e,this.size,4);s.uniform4fv(this.addr,t)}function L_(s,e){let t=Os(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function I_(s,e){let t=Os(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function D_(s,e){let t=Os(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function N_(s,e){s.uniform1iv(this.addr,e)}function U_(s,e){s.uniform2iv(this.addr,e)}function F_(s,e){s.uniform3iv(this.addr,e)}function O_(s,e){s.uniform4iv(this.addr,e)}function B_(s,e){s.uniform1uiv(this.addr,e)}function k_(s,e){s.uniform2uiv(this.addr,e)}function z_(s,e){s.uniform3uiv(this.addr,e)}function H_(s,e){s.uniform4uiv(this.addr,e)}function G_(s,e,t){let i=this.cache,n=e.length,r=Ia(t,n);wt(i,r)||(s.uniform1iv(this.addr,r),Et(i,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Da(Md):o=Sd;for(let a=0;a!==n;++a)t.setTexture2D(e[a]||o,r[a])}function V_(s,e,t){let i=this.cache,n=e.length,r=Ia(t,n);wt(i,r)||(s.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||Td,r[o])}function W_(s,e,t){let i=this.cache,n=e.length,r=Ia(t,n);wt(i,r)||(s.uniform1iv(this.addr,r),Et(i,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Da(wd):o=Ad;for(let a=0;a!==n;++a)t.setTextureCube(e[a]||o,r[a])}function X_(s,e,t){let i=this.cache,n=e.length,r=Ia(t,n);wt(i,r)||(s.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||Ed,r[o])}function q_(s){switch(s){case 5126:return A_;case 35664:return R_;case 35665:return C_;case 35666:return P_;case 35674:return L_;case 35675:return I_;case 35676:return D_;case 5124:case 35670:return N_;case 35667:case 35671:return U_;case 35668:case 35672:return F_;case 35669:case 35673:return O_;case 5125:return B_;case 36294:return k_;case 36295:return z_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return X_}}var Mc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=T_(t.type)}},wc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=q_(t.type)}},Ec=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(e,t[a.id],i)}}},bc=/(\w+)(\])?(\[|\.)?/g;function od(s,e){s.seq.push(e),s.map[e.id]=e}function Y_(s,e,t){let i=s.name,n=i.length;for(bc.lastIndex=0;;){let r=bc.exec(i),o=bc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){od(t,c===void 0?new Mc(a,s,e):new wc(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Ec(a),od(t,u)),t=u}}}var Fs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Y_(a,l,this)}let n=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(o):r.push(o);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let o=e[n];o.id in t&&i.push(o)}return i}};function ad(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var $_=37297,K_=0;function Z_(s,e){let t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var ld=new De;function J_(s){Ge._getMatrix(ld,Ge.workingColorSpace,s);let e=`mat3( ${ld.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(s)){case js:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function cd(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Z_(s.getShaderSource(e),a)}else return r}function j_(s,e){let t=J_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Q_={[Hl]:"Linear",[Gl]:"Reinhard",[Vl]:"Cineon",[wr]:"ACESFilmic",[Xl]:"AgX",[ql]:"Neutral",[Wl]:"Custom"};function e0(s,e){let t=Q_[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ca=new E;function t0(){Ge.getLuminanceCoefficients(Ca);let s=Ca.x.toFixed(4),e=Ca.y.toFixed(4),t=Ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function n0(s){let e=[];for(let t in s){let i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function s0(s,e){let t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(e,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Dr(s){return s!==""}function hd(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function ud(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var r0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(s){return s.replace(r0,o0)}function o0(s,e){let t=He[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Tc(t)}var a0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dd(s){return s.replace(a0,l0)}function l0(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function fd(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var c0={[Mr]:"SHADOWMAP_TYPE_PCF",[Cs]:"SHADOWMAP_TYPE_VSM"};function h0(s){return c0[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var u0={[Is]:"ENVMAP_MODE_REFRACTION"};function d0(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":u0[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var f0={[zl]:"ENVMAP_BLENDING_MULTIPLY",[Lu]:"ENVMAP_BLENDING_MIX",[Iu]:"ENVMAP_BLENDING_ADD"};function p0(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":f0[s.combine]||"ENVMAP_BLENDING_NONE"}function m0(s,e,t,i){let n=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=h0(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=d0(t),u=p0(t),d=i0(t),f=n0(r),g=n.createProgram(),x,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Dr).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Dr).join(`
`),m.length>0&&(m+=`
`)):(x=[fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),m=[fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?He.tonemapping_pars_fragment:"",t.toneMapping!==Ni?e0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,j_("linearToOutputTexel",t.outputColorSpace),t0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dr).join(`
`)),o=Tc(o),o=hd(o,t),o=ud(o,t),a=Tc(a),a=hd(a,t),a=ud(a,t),o=dd(o),a=dd(a),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=p+x+o,A=p+m+a,S=ad(n,n.VERTEX_SHADER,v),T=ad(n,n.FRAGMENT_SHADER,A);n.attachShader(g,S),n.attachShader(g,T),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function w(C){if(s.debug.checkShaderErrors){let D=n.getProgramInfoLog(g)||"",O=n.getShaderInfoLog(S)||"",V=n.getShaderInfoLog(T)||"",L=D.trim(),W=O.trim(),F=V.trim(),k=!0,Q=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,g,S,T);else{let X=cd(n,S,"vertex"),j=cd(n,T,"fragment");Le("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+X+`
`+j)}else L!==""?we("WebGLProgram: Program Info Log:",L):(W===""||F==="")&&(Q=!1);Q&&(C.diagnostics={runnable:k,programLog:L,vertexShader:{log:W,prefix:x},fragmentShader:{log:F,prefix:m}})}n.deleteShader(S),n.deleteShader(T),_=new Fs(n,g),M=s0(n,g)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=n.getProgramParameter(g,$_)),U},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=K_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=T,this}var g0=0,Ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Rc(e),t.set(e,i)),i}},Rc=class{constructor(e){this.id=g0++,this.code=e,this.usedTimes=0}};function _0(s){return s===En||s===Cr||s===Pr}function x0(s,e,t,i,n,r){let o=new _s,a=new Ac,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,M,U,C,D,O){let V=C.fog,L=D.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,k=e.get(_.envMap||W,F),Q=d[_.type],X=i.precision;_.precision!==null&&(X=i.getMaxPrecision(_.precision),X!==_.precision&&we("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));let j=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ee=j!==void 0?j.length:0,Se=0;L.morphAttributes.position!==void 0&&(Se=1),L.morphAttributes.normal!==void 0&&(Se=2),L.morphAttributes.color!==void 0&&(Se=3);let Ue,K,pe,ye;if(Q){let de=Oi[Q];Ue=de.vertexShader,K=de.fragmentShader}else{Ue=_.vertexShader,K=_.fragmentShader;let de=a.getVertexShaderStage(_),Qe=a.getFragmentShaderStage(_);a.update(_,de,Qe),pe=de.id,ye=Qe.id}let Re=s.getRenderTarget(),me=s.state.buffers.depth.getReversed(),Oe=D.isInstancedMesh===!0,ft=D.isBatchedMesh===!0,Pe=!!_.map,je=!!_.matcap,it=!!k,We=it&&k.isPMREMTexture===!0,Dt=!!_.aoMap,gt=!!_.lightMap,Kt=!!_.bumpMap&&_.wireframe===!1,ct=!!_.normalMap,Ti=!!_.displacementMap,At=!!_.emissiveMap,oi=!!_.metalnessMap,ai=!!_.roughnessMap,li=_.anisotropy>0,N=_.clearcoat>0,ci=_.diffuseRoughness>0,ot=_.dispersion>0,at=_.retroreflectivity>0,ue=_.iridescence>0,_t=_.sheen>0,Ce=_.transmission>0,Ne=li&&!!_.anisotropyMap,R=N&&!!_.clearcoatMap,y=N&&!!_.clearcoatNormalMap,z=N&&!!_.clearcoatRoughnessMap,te=ci&&!!_.diffuseRoughnessMap,J=ue&&!!_.iridescenceMap,se=ue&&!!_.iridescenceThicknessMap,ce=_t&&!!_.sheenColorMap,Y=_t&&!!_.sheenRoughnessMap,$=!!_.specularMap,oe=!!_.specularColorMap,P=!!_.specularIntensityMap,Z=Ce&&!!_.transmissionMap,q=Ce&&!!_.thicknessMap,ae=!!_.gradientMap,ne=!!_.alphaMap,re=_.alphaTest>0,Ee=!!_.alphaHash,ze=!!_.extensions,ie=Ni;_.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(ie=s.toneMapping);let Ae=We?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Be={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:Ue,fragmentShader:K,defines:_.defines,customVertexShaderID:pe,customFragmentShaderID:ye,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:ft,batchingColor:ft&&D._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&D.instanceColor!==null,instancingMorph:Oe&&D.morphTexture!==null,outputColorSpace:Re===null?s.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Pe,matcap:je,envMap:it,envMapMode:it&&k.mapping,envMapPMREM:We,envMapMaxLod:We?Ae.length-1:null,envMapSize:We?Ae[0].width:null,aoMap:Dt,lightMap:gt,bumpMap:Kt,normalMap:ct,displacementMap:Ti,emissiveMap:At,normalMapObjectSpace:ct&&_.normalMapType===Fu,normalMapTangentSpace:ct&&_.normalMapType===Ta,packedNormalMap:ct&&_.normalMapType===Ta&&_0(_.normalMap.format),metalnessMap:oi,roughnessMap:ai,anisotropy:li,anisotropyMap:Ne,clearcoat:N,clearcoatMap:R,clearcoatNormalMap:y,clearcoatRoughnessMap:z,diffuseRoughness:ci,diffuseRoughnessMap:te,dispersion:ot,retroreflection:at,iridescence:ue,iridescenceMap:J,iridescenceThicknessMap:se,sheen:_t,sheenColorMap:ce,sheenRoughnessMap:Y,specularMap:$,specularColorMap:oe,specularIntensityMap:P,transmission:Ce,transmissionMap:Z,thicknessMap:q,gradientMap:ae,opaque:_.transparent===!1&&_.blending===Ps&&_.alphaToCoverage===!1,alphaMap:ne,alphaTest:re,alphaHash:Ee,combine:_.combine,mapUv:Pe&&f(_.map.channel),aoMapUv:Dt&&f(_.aoMap.channel),lightMapUv:gt&&f(_.lightMap.channel),bumpMapUv:Kt&&f(_.bumpMap.channel),normalMapUv:ct&&f(_.normalMap.channel),displacementMapUv:Ti&&f(_.displacementMap.channel),emissiveMapUv:At&&f(_.emissiveMap.channel),metalnessMapUv:oi&&f(_.metalnessMap.channel),roughnessMapUv:ai&&f(_.roughnessMap.channel),anisotropyMapUv:Ne&&f(_.anisotropyMap.channel),clearcoatMapUv:R&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:y&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:J&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:se&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(_.sheenRoughnessMap.channel),specularMapUv:$&&f(_.specularMap.channel),specularColorMapUv:oe&&f(_.specularColorMap.channel),specularIntensityMapUv:P&&f(_.specularIntensityMap.channel),transmissionMapUv:Z&&f(_.transmissionMap.channel),thicknessMapUv:q&&f(_.thicknessMap.channel),alphaMapUv:ne&&f(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ct||li),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(Pe||ne),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&ct===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:me,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Se,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:O.filter(de=>de.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:ie,decodeVideoTexture:Pe&&_.map.isVideoTexture===!0&&Ge.getTransfer(_.map.colorSpace)===Je,decodeVideoTextureEmissive:At&&_.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(_.emissiveMap.colorSpace)===Je,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ft,flipSided:_.side===$t,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ze&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&_.extensions.multiDraw===!0||ft)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function x(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let U in _.defines)M.push(U),M.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(m(M,_),p(M,_),M.push(s.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function m(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function p(_,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let M=d[_.type],U;if(M){let C=Oi[M];U=$u.clone(C.uniforms)}else U=_.uniforms;return U}function A(_,M){let U=h.get(M);return U!==void 0?++U.usedTimes:(U=new m0(s,M,_,n),c.push(U),h.set(M,U)),U}function S(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function w(){a.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:v,acquireProgram:A,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:w}}function y0(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function v0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function pd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function md(){let s=[],e=0,t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,x,m,p){let v=s[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},s[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=g,v.materialVariant=o(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=m,v.group=p),e++,v}function l(d,f,g,x,m,p,v){v.reversedDepth===!0&&(m=-m);let A=a(d,f,g,x,m,p);g.transmission>0?i.push(A):g.transparent===!0?n.push(A):t.push(A)}function c(d,f,g,x,m,p){let v=a(d,f,g,x,m,p);g.transmission>0?i.unshift(v):g.transparent===!0?n.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||v0),i.length>1&&i.sort(f||pd),n.length>1&&n.sort(f||pd)}function u(){for(let d=e,f=s.length;d<f;d++){let g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:u,sort:h}}function b0(){let s=new WeakMap;function e(i,n){let r=s.get(i),o;return r===void 0?(o=new md,s.set(i,[o])):n>=r.length?(o=new md,r.push(o)):o=r[n],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function S0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new E,color:new _e};break;case"SpotLight":t={position:new E,direction:new E,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new E,halfWidth:new E,halfHeight:new E};break}return s[e.id]=t,t}}}function M0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var w0=0;function E0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function T0(s){let e=new S0,t=M0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new E);let n=new E,r=new Ie,o=new Ie;function a(c){let h=0,u=0,d=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,v=0,A=0,S=0,T=0,w=0,_=0,M=0,U=0,C=0;c.sort(E0);for(let O=0,V=c.length;O<V;O++){let L=c[O],W=L.color,F=L.intensity,k=L.distance,Q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===En?Q=L.shadow.map.texture:Q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=W.r*F,u+=W.g*F,d+=W.b*F;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],F);C++}else if(L.isSunLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,ee=t.get(L);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[g]=ee,i.sunShadowMap[g]=Q;let Se=j.getViewportCount();for(let Ue=0;Ue<Se;Ue++)i.sunShadowMatrix[x+Ue]=j.getMatrix(Ue),i.sunShadowCascade[x+Ue]=j._cascadeData[Ue];x+=Se,g++}i.sun[f]=X,f++}else if(L.isDirectionalLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,ee=t.get(L);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,i.directionalShadow[m]=ee,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=L.shadow.matrix,T++}i.directional[m]=X,m++}else if(L.isSpotLight){let X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(W).multiplyScalar(F),X.distance=k,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[v]=X;let j=L.shadow;if(L.map&&(i.spotLightMap[M]=L.map,M++,j.updateMatrices(L),L.castShadow&&U++),i.spotLightMatrix[v]=j.matrix,L.castShadow){let ee=t.get(L);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,i.spotShadow[v]=ee,i.spotShadowMap[v]=Q,_++}v++}else if(L.isRectAreaLight){let X=e.get(L);X.color.copy(W).multiplyScalar(F),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[A]=X,A++}else if(L.isPointLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let j=L.shadow,ee=t.get(L);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,ee.shadowCameraNear=j.camera.near,ee.shadowCameraFar=j.camera.far,i.pointShadow[p]=ee,i.pointShadowMap[p]=Q,i.pointShadowMatrix[p]=L.shadow.matrix,w++}i.point[p]=X,p++}else if(L.isHemisphereLight){let X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(F),X.groundColor.copy(L.groundColor).multiplyScalar(F),i.hemi[S]=X,S++}}A>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let D=i.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==v||D.rectAreaLength!==A||D.hemiLength!==S||D.numSunShadows!==g||D.numDirectionalShadows!==T||D.numPointShadows!==w||D.numSpotShadows!==_||D.numSpotMaps!==M||D.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=m,i.spot.length=v,i.rectArea.length=A,i.point.length=p,i.hemi.length=S,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+M-U,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=C,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=v,D.rectAreaLength=A,D.hemiLength=S,D.numSunShadows=g,D.numDirectionalShadows=T,D.numPointShadows=w,D.numSpotShadows=_,D.numSpotMaps=M,D.numLightProbes=C,i.version=w0++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let v=0,A=c.length;v<A;v++){let S=c[v];if(S.isSunLight){let T=i.sun[u];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(p),u++}else if(S.isDirectionalLight){let T=i.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(p),d++}else if(S.isSpotLight){let T=i.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(p),g++}else if(S.isRectAreaLight){let T=i.rectArea[x];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){let T=i.point[f];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:i}}function gd(s){let e=new T0(s),t=[],i=[],n=[];function r(u){h.camera=u,t.length=0,i.length=0,n.length=0}function o(u){u.isLightProbeGrid?n.push(u):t.push(u)}function a(u){i.push(u)}function l(){e.setup(t),n.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function A0(s){let e=new WeakMap;function t(n,r=0){let o=e.get(n),a;return o===void 0?(a=new gd(s),e.set(n,[a])):r>=o.length?(a=new gd(s),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var R0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,P0=[new E(1,0,0),new E(-1,0,0),new E(0,1,0),new E(0,-1,0),new E(0,0,1),new E(0,0,-1)],L0=[new E(0,-1,0),new E(0,-1,0),new E(0,0,1),new E(0,0,-1),new E(0,-1,0),new E(0,-1,0)],_d=new Ie,Ir=new E,Sc=new E;function I0(s,e,t){let i=new _n,n=new Te,r=new Te,o=new et,a=new Ro,l=new Co,c={},h=t.maxTextureSize,u={[Di]:$t,[$t]:Di,[Ft]:Ft},d=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:R0,fragmentShader:C0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new St;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new $e(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mr;let p=this.type;this.render=function(w,_,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===ko&&(we("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mr);let U=s.getRenderTarget(),C=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Vn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let V=p!==this.type;V&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(W=>W.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,W=w.length;L<W;L++){let F=w[L],k=F.shadow;if(k===void 0){we("WebGLShadowMap:",F,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;n.copy(k.mapSize);let Q=k.getFrameExtents();n.multiply(Q),r.copy(k.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/Q.x),n.x=r.x*Q.x,k.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/Q.y),n.y=r.y*Q.y,k.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(k.camera._reversedDepth=X,k.map===null||V===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Cs){if(F.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ni(n.x,n.y,{format:En,type:Ei,minFilter:bt,magFilter:bt,generateMipmaps:!1}),k.map.texture.name=F.name+".shadowMap",k.map.depthTexture=new ji(n.x,n.y,ri),k.map.depthTexture.name=F.name+".shadowMapDepth",k.map.depthTexture.format=$i,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=dt,k.map.depthTexture.magFilter=dt}else F.isPointLight?(k.map=new Nr(n.x),k.map.depthTexture=new cr(n.x,wi)):(k.map=new ni(n.x,n.y),k.map.depthTexture=new ji(n.x,n.y,wi)),k.map.depthTexture.name=F.name+".shadowMap",k.map.depthTexture.format=$i,this.type===Mr?(k.map.depthTexture.compareFunction=X?ic:tc,k.map.depthTexture.minFilter=bt,k.map.depthTexture.magFilter=bt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=dt,k.map.depthTexture.magFilter=dt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==n.x||k.map.height!==n.y)&&k.map.setSize(n.x,n.y);let j=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();F.isPointLight!==!0&&k.updateMatrices(F,M);let ee=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:M.layers;for(let Se=0;Se<j;Se++){let Ue=k.getCamera(Se);if(F.isPointLight){let K=k.camera,pe=k.matrix,ye=F.distance||K.far;ye!==K.far&&(K.far=ye,K.updateProjectionMatrix()),Ir.setFromMatrixPosition(F.matrixWorld),K.position.copy(Ir),Sc.copy(K.position),Sc.add(P0[Se]),K.up.copy(L0[Se]),K.lookAt(Sc),K.updateMatrixWorld(),pe.makeTranslation(-Ir.x,-Ir.y,-Ir.z),_d.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),k._frustum.setFromProjectionMatrix(_d,K.coordinateSystem,K.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,Se),s.clear();else{Se===0&&(s.setRenderTarget(k.map),s.clear());let K=k.getViewport(Se);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),O.viewport(o)}i=k.getFrustum(Se),S(_,M,Ue,F,ee,this.type)}k.isPointLightShadow!==!0&&this.type===Cs&&v(k,M),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(U,C,D)};function v(w,_){let M=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new ni(n.x,n.y,{format:En,type:Ei}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(_,null,M,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(_,null,M,f,x,null)}function A(w,_,M,U){let C=null,D=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)C=D;else if(C=M.isPointLight===!0?l:a,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let O=C.uuid,V=_.uuid,L=c[O];L===void 0&&(L={},c[O]=L);let W=L[V];W===void 0&&(W=C.clone(),L[V]=W,_.addEventListener("dispose",T)),C=W}if(C.visible=_.visible,C.wireframe=_.wireframe,U===Cs?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:u[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let O=s.properties.get(C);O.light=M}return C}function S(w,_,M,U,C,D){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===Cs)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let L=e.update(w),W=w.material;if(Array.isArray(W)){let F=L.groups;for(let k=0,Q=F.length;k<Q;k++){let X=F[k],j=W[X.materialIndex];if(j&&j.visible){let ee=A(w,j,U,D);w.onBeforeShadow(s,w,_,M,L,ee,X),s.renderBufferDirect(M,null,L,ee,w,X),w.onAfterShadow(s,w,_,M,L,ee,X)}}}else if(W.visible){let F=A(w,W,U,D);w.onBeforeShadow(s,w,_,M,L,F,null),s.renderBufferDirect(M,null,L,F,w,null),w.onAfterShadow(s,w,_,M,L,F,null)}}let V=w.children;for(let L=0,W=V.length;L<W;L++)S(V[L],_,M,U,C,D)}function T(w){w.target.removeEventListener("dispose",T);for(let M in c){let U=c[M],C=w.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}function D0(s,e){function t(){let P=!1,Z=new et,q=null,ae=new et(0,0,0,0);return{setMask:function(ne){q!==ne&&!P&&(s.colorMask(ne,ne,ne,ne),q=ne)},setLocked:function(ne){P=ne},setClear:function(ne,re,Ee,ze,ie){ie===!0&&(ne*=ze,re*=ze,Ee*=ze),Z.set(ne,re,Ee,ze),ae.equals(Z)===!1&&(s.clearColor(ne,re,Ee,ze),ae.copy(Z))},reset:function(){P=!1,q=null,ae.set(-1,0,0,0)}}}function i(){let P=!1,Z=!1,q=null,ae=null,ne=null;return{setReversed:function(re){if(Z!==re){let Ee=e.get("EXT_clip_control");re?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),Z=re;let ze=ne;ne=null,this.setClear(ze)}},getReversed:function(){return Z},setTest:function(re){re?me(s.DEPTH_TEST):Oe(s.DEPTH_TEST)},setMask:function(re){q!==re&&!P&&(s.depthMask(re),q=re)},setFunc:function(re){if(Z&&(re=qu[re]),ae!==re){switch(re){case fo:s.depthFunc(s.NEVER);break;case po:s.depthFunc(s.ALWAYS);break;case mo:s.depthFunc(s.LESS);break;case us:s.depthFunc(s.LEQUAL);break;case go:s.depthFunc(s.EQUAL);break;case _o:s.depthFunc(s.GEQUAL);break;case xo:s.depthFunc(s.GREATER);break;case yo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ae=re}},setLocked:function(re){P=re},setClear:function(re){ne!==re&&(ne=re,Z&&(re=1-re),s.clearDepth(re))},reset:function(){P=!1,q=null,ae=null,ne=null,Z=!1}}}function n(){let P=!1,Z=null,q=null,ae=null,ne=null,re=null,Ee=null,ze=null,ie=null;return{setTest:function(Ae){P||(Ae?me(s.STENCIL_TEST):Oe(s.STENCIL_TEST))},setMask:function(Ae){Z!==Ae&&!P&&(s.stencilMask(Ae),Z=Ae)},setFunc:function(Ae,Be,de){(q!==Ae||ae!==Be||ne!==de)&&(s.stencilFunc(Ae,Be,de),q=Ae,ae=Be,ne=de)},setOp:function(Ae,Be,de){(re!==Ae||Ee!==Be||ze!==de)&&(s.stencilOp(Ae,Be,de),re=Ae,Ee=Be,ze=de)},setLocked:function(Ae){P=Ae},setClear:function(Ae){ie!==Ae&&(s.clearStencil(Ae),ie=Ae)},reset:function(){P=!1,Z=null,q=null,ae=null,ne=null,re=null,Ee=null,ze=null,ie=null}}}let r=new t,o=new i,a=new n,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],x=null,m=!1,p=null,v=null,A=null,S=null,T=null,w=null,_=null,M=new _e(0,0,0),U=0,C=!1,D=null,O=null,V=null,L=null,W=null,F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Q=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=Q>=2);let j=null,ee={},Se=s.getParameter(s.SCISSOR_BOX),Ue=s.getParameter(s.VIEWPORT),K=new et().fromArray(Se),pe=new et().fromArray(Ue);function ye(P,Z,q,ae){let ne=new Uint8Array(4),re=s.createTexture();s.bindTexture(P,re),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ee=0;Ee<q;Ee++)P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?s.texImage3D(Z,0,s.RGBA,1,1,ae,0,s.RGBA,s.UNSIGNED_BYTE,ne):s.texImage2D(Z+Ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ne);return re}let Re={};Re[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),Re[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Re[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(s.DEPTH_TEST),o.setFunc(us),Kt(!1),ct(Ul),me(s.CULL_FACE),Dt(Vn);function me(P){h[P]!==!0&&(s.enable(P),h[P]=!0)}function Oe(P){h[P]!==!1&&(s.disable(P),h[P]=!1)}function ft(P,Z){return d[P]!==Z?(s.bindFramebuffer(P,Z),d[P]=Z,P===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Z),P===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Z),!0):!1}function Pe(P,Z){let q=g,ae=!1;if(P){q=f.get(Z),q===void 0&&(q=[],f.set(Z,q));let ne=P.textures;if(q.length!==ne.length||q[0]!==s.COLOR_ATTACHMENT0){for(let re=0,Ee=ne.length;re<Ee;re++)q[re]=s.COLOR_ATTACHMENT0+re;q.length=ne.length,ae=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,ae=!0);ae&&s.drawBuffers(q)}function je(P){return x!==P?(s.useProgram(P),x=P,!0):!1}let it={[Wn]:s.FUNC_ADD,[pu]:s.FUNC_SUBTRACT,[mu]:s.FUNC_REVERSE_SUBTRACT};it[gu]=s.MIN,it[_u]=s.MAX;let We={[xu]:s.ZERO,[yu]:s.ONE,[vu]:s.SRC_COLOR,[Bl]:s.SRC_ALPHA,[Tu]:s.SRC_ALPHA_SATURATE,[wu]:s.DST_COLOR,[Su]:s.DST_ALPHA,[bu]:s.ONE_MINUS_SRC_COLOR,[kl]:s.ONE_MINUS_SRC_ALPHA,[Eu]:s.ONE_MINUS_DST_COLOR,[Mu]:s.ONE_MINUS_DST_ALPHA,[Au]:s.CONSTANT_COLOR,[Ru]:s.ONE_MINUS_CONSTANT_COLOR,[Cu]:s.CONSTANT_ALPHA,[Pu]:s.ONE_MINUS_CONSTANT_ALPHA};function Dt(P,Z,q,ae,ne,re,Ee,ze,ie,Ae){if(P===Vn){m===!0&&(Oe(s.BLEND),m=!1);return}if(m===!1&&(me(s.BLEND),m=!0),P!==fu){if(P!==p||Ae!==C){if((v!==Wn||T!==Wn)&&(s.blendEquation(s.FUNC_ADD),v=Wn,T=Wn),Ae)switch(P){case Ps:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ls:s.blendFunc(s.ONE,s.ONE);break;case Fl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ol:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Le("WebGLState: Invalid blending: ",P);break}else switch(P){case Ps:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ls:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Fl:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ol:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",P);break}A=null,S=null,w=null,_=null,M.set(0,0,0),U=0,p=P,C=Ae}return}ne=ne||Z,re=re||q,Ee=Ee||ae,(Z!==v||ne!==T)&&(s.blendEquationSeparate(it[Z],it[ne]),v=Z,T=ne),(q!==A||ae!==S||re!==w||Ee!==_)&&(s.blendFuncSeparate(We[q],We[ae],We[re],We[Ee]),A=q,S=ae,w=re,_=Ee),(ze.equals(M)===!1||ie!==U)&&(s.blendColor(ze.r,ze.g,ze.b,ie),M.copy(ze),U=ie),p=P,C=!1}function gt(P,Z){P.side===Ft?Oe(s.CULL_FACE):me(s.CULL_FACE);let q=P.side===$t;Z&&(q=!q),Kt(q),P.blending===Ps&&P.transparent===!1?Dt(Vn):Dt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);let ae=P.stencilWrite;a.setTest(ae),ae&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),At(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):Oe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(P){D!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),D=P)}function ct(P){P!==uu?(me(s.CULL_FACE),P!==O&&(P===Ul?s.cullFace(s.BACK):P===du?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Oe(s.CULL_FACE),O=P}function Ti(P){P!==V&&(k&&s.lineWidth(P),V=P)}function At(P,Z,q){P?(me(s.POLYGON_OFFSET_FILL),(L!==Z||W!==q)&&(L=Z,W=q,o.getReversed()&&(Z=-Z,q=-q),s.polygonOffset(Z,q))):Oe(s.POLYGON_OFFSET_FILL)}function oi(P){P?me(s.SCISSOR_TEST):Oe(s.SCISSOR_TEST)}function ai(P){P===void 0&&(P=s.TEXTURE0+F-1),j!==P&&(s.activeTexture(P),j=P)}function li(P,Z,q){q===void 0&&(j===null?q=s.TEXTURE0+F-1:q=j);let ae=ee[q];ae===void 0&&(ae={type:void 0,texture:void 0},ee[q]=ae),(ae.type!==P||ae.texture!==Z)&&(j!==q&&(s.activeTexture(q),j=q),s.bindTexture(P,Z||Re[P]),ae.type=P,ae.texture=Z)}function N(){let P=ee[j];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ci(){try{s.compressedTexImage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function ot(){try{s.compressedTexImage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function at(){try{s.texSubImage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function ue(){try{s.texSubImage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function _t(){try{s.compressedTexSubImage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function Ce(){try{s.compressedTexSubImage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function Ne(){try{s.texStorage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function R(){try{s.texStorage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function y(){try{s.texImage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function z(){try{s.texImage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function te(P){return u[P]!==void 0?u[P]:s.getParameter(P)}function J(P,Z){u[P]!==Z&&(s.pixelStorei(P,Z),u[P]=Z)}function se(P){K.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),K.copy(P))}function ce(P){pe.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),pe.copy(P))}function Y(P,Z){let q=c.get(Z);q===void 0&&(q=new WeakMap,c.set(Z,q));let ae=q.get(P);ae===void 0&&(ae=s.getUniformBlockIndex(Z,P.name),s.uniformBlockBinding(Z,ae,ae),q.set(P,ae))}function $(P,Z,q){let ne=c.get(Z).get(P);l[ne]!==q&&(s.bindBufferBase(s.UNIFORM_BUFFER,ne,q),l[ne]=q)}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,ee={},d={},l={},f=new WeakMap,g=[],x=null,m=!1,p=null,v=null,A=null,S=null,T=null,w=null,_=null,M=new _e(0,0,0),U=0,C=!1,D=null,O=null,V=null,L=null,W=null,K.set(0,0,s.canvas.width,s.canvas.height),pe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:me,disable:Oe,bindFramebuffer:ft,drawBuffers:Pe,useProgram:je,setBlending:Dt,setMaterial:gt,setFlipSided:Kt,setCullFace:ct,setLineWidth:Ti,setPolygonOffset:At,setScissorTest:oi,activeTexture:ai,bindTexture:li,unbindTexture:N,compressedTexImage2D:ci,compressedTexImage3D:ot,texImage2D:y,texImage3D:z,pixelStorei:J,getParameter:te,updateUBOMapping:Y,uniformBlockBinding:$,texStorage2D:Ne,texStorage3D:R,texSubImage2D:at,texSubImage3D:ue,compressedTexSubImage2D:_t,compressedTexSubImage3D:Ce,scissor:se,viewport:ce,reset:oe}}function N0(s,e,t,i,n,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,x=new FinalizationRegistry(R=>g.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,y){return m?new OffscreenCanvas(R,y):ps("canvas")}function v(R,y,z){let te=1,J=Ne(R);if((J.width>z||J.height>z)&&(te=z/Math.max(J.width,J.height)),te<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let se=Math.floor(te*J.width),ce=Math.floor(te*J.height);d===void 0&&(d=p(se,ce));let Y=y?p(se,ce):d;return Y.width=se,Y.height=ce,Y.getContext("2d").drawImage(R,0,0,se,ce),we("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+se+"x"+ce+")."),Y}else return"data"in R&&we("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function A(R){return R.generateMipmaps}function S(R){s.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(R,y,z,te,J,se=!1){if(R!==null){if(s[R]!==void 0)return s[R];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ce;te&&(ce=e.get("EXT_texture_norm16"),ce||we("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=y;if(y===s.RED&&(z===s.FLOAT&&(Y=s.R32F),z===s.HALF_FLOAT&&(Y=s.R16F),z===s.UNSIGNED_BYTE&&(Y=s.R8),z===s.UNSIGNED_SHORT&&ce&&(Y=ce.R16_EXT),z===s.SHORT&&ce&&(Y=ce.R16_SNORM_EXT)),y===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.R8UI),z===s.UNSIGNED_SHORT&&(Y=s.R16UI),z===s.UNSIGNED_INT&&(Y=s.R32UI),z===s.BYTE&&(Y=s.R8I),z===s.SHORT&&(Y=s.R16I),z===s.INT&&(Y=s.R32I)),y===s.RG&&(z===s.FLOAT&&(Y=s.RG32F),z===s.HALF_FLOAT&&(Y=s.RG16F),z===s.UNSIGNED_BYTE&&(Y=s.RG8),z===s.UNSIGNED_SHORT&&ce&&(Y=ce.RG16_EXT),z===s.SHORT&&ce&&(Y=ce.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RG8UI),z===s.UNSIGNED_SHORT&&(Y=s.RG16UI),z===s.UNSIGNED_INT&&(Y=s.RG32UI),z===s.BYTE&&(Y=s.RG8I),z===s.SHORT&&(Y=s.RG16I),z===s.INT&&(Y=s.RG32I)),y===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),z===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),z===s.UNSIGNED_INT&&(Y=s.RGB32UI),z===s.BYTE&&(Y=s.RGB8I),z===s.SHORT&&(Y=s.RGB16I),z===s.INT&&(Y=s.RGB32I)),y===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),z===s.UNSIGNED_INT&&(Y=s.RGBA32UI),z===s.BYTE&&(Y=s.RGBA8I),z===s.SHORT&&(Y=s.RGBA16I),z===s.INT&&(Y=s.RGBA32I)),y===s.RGB&&(z===s.UNSIGNED_SHORT&&ce&&(Y=ce.RGB16_EXT),z===s.SHORT&&ce&&(Y=ce.RGB16_SNORM_EXT),z===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),y===s.RGBA){let $=se?js:Ge.getTransfer(J);z===s.FLOAT&&(Y=s.RGBA32F),z===s.HALF_FLOAT&&(Y=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Y=$===Je?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT&&ce&&(Y=ce.RGBA16_EXT),z===s.SHORT&&ce&&(Y=ce.RGBA16_SNORM_EXT),z===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(R,y){let z;return R?y===null||y===wi||y===Yn?z=s.DEPTH24_STENCIL8:y===ri?z=s.DEPTH32F_STENCIL8:y===Ns&&(z=s.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===wi||y===Yn?z=s.DEPTH_COMPONENT24:y===ri?z=s.DEPTH_COMPONENT32F:y===Ns&&(z=s.DEPTH_COMPONENT16),z}function M(R,y){return A(R)===!0||R.isFramebufferTexture&&R.minFilter!==dt&&R.minFilter!==bt?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function U(R){let y=new WeakRef(R);i.get(R).__ref=y,g.add(y),x.register(R,y,y)}function C(R){let y=i.get(R).__ref;y!==void 0&&(g.delete(y),x.unregister(y))}function D(R){V(R.target)}function O(R){L(R.target)}function V(R){R.removeEventListener("dispose",D),C(R),F(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function L(R){R.removeEventListener("dispose",O),C(R),Q(R)}function W(){for(let R of g){let y=R.deref();y!==void 0&&(y.isRenderTarget===!0?L(y):V(y))}g.clear(),u.clear()}function F(R){let y=i.get(R);if(y.__webglInit===void 0)return;let z=R.source,te=f.get(z);if(te){let J=te[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&k(R),Object.keys(te).length===0&&f.delete(z)}i.remove(R)}function k(R){let y=i.get(R);s.deleteTexture(y.__webglTexture);let z=R.source,te=f.get(z);delete te[y.__cacheKey],o.memory.textures--}function Q(R){let y=i.get(R);y.__depthDisposeCallback&&y.__depthDisposeCallback();let z=R.depthTexture;if(z&&z.renderTarget===R&&V(z),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let se=0;se<y.__webglFramebuffer[J].length;se++)s.deleteFramebuffer(y.__webglFramebuffer[J][se]);else s.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)s.deleteFramebuffer(y.__webglFramebuffer[J]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let te=R.textures;for(let J=0,se=te.length;J<se;J++){let ce=i.get(te[J]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),o.memory.textures--),i.remove(te[J])}i.remove(R)}let X=0;function j(){X=0}function ee(){return X}function Se(R){X=R}function Ue(){let R=X;return R>=n.maxTextures&&we("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+n.maxTextures),X+=1,R}function K(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.mipmapsAutoUpdate),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function pe(R,y){let z=i.get(R);if(R.isVideoTexture&&_t(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){let te=R.image;if(te===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(z,R,y);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+y)}function ye(R,y){let z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){gt(z,R,y);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+y)}function Re(R,y){let z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){gt(z,R,y);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+y)}function me(R,y){let z=i.get(R);if(R.version>0&&z.__version!==R.version){Kt(z,R,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+y)}let Oe={[gn]:s.REPEAT,[ui]:s.CLAMP_TO_EDGE,[ds]:s.MIRRORED_REPEAT},ft={[dt]:s.NEAREST,[Go]:s.NEAREST_MIPMAP_NEAREST,[qn]:s.NEAREST_MIPMAP_LINEAR,[bt]:s.LINEAR,[Ds]:s.LINEAR_MIPMAP_NEAREST,[fi]:s.LINEAR_MIPMAP_LINEAR},Pe={[Bu]:s.NEVER,[nc]:s.ALWAYS,[ku]:s.LESS,[tc]:s.LEQUAL,[zu]:s.EQUAL,[ic]:s.GEQUAL,[Hu]:s.GREATER,[Gu]:s.NOTEQUAL};function je(R,y){if(y.type===ri&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===bt||y.magFilter===Ds||y.magFilter===qn||y.magFilter===fi||y.minFilter===bt||y.minFilter===Ds||y.minFilter===qn||y.minFilter===fi)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Oe[y.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Oe[y.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Oe[y.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ft[y.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ft[y.minFilter]),y.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Pe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===dt||y.minFilter!==qn&&y.minFilter!==fi||y.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function it(R,y){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",D),U(y));let te=y.source,J=f.get(te);J===void 0&&(J={},f.set(te,J));let se=K(y);if(se!==R.__cacheKey){J[se]===void 0&&(J[se]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),J[se].usedTimes++;let ce=J[R.__cacheKey];ce!==void 0&&(J[R.__cacheKey].usedTimes--,ce.usedTimes===0&&k(y)),R.__cacheKey=se,R.__webglTexture=J[se].texture}return z}function We(R,y,z){return Math.floor(Math.floor(R/z)/y)}function Dt(R,y,z,te){let se=R.updateRanges;if(se.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,z,te,y.data);else{se.sort((P,Z)=>P.start-Z.start);let ce=0;for(let P=1;P<se.length;P++){let Z=se[ce],q=se[P],ae=Z.start+Z.count,ne=We(q.start,y.width,4),re=We(Z.start,y.width,4);q.start<=ae+1&&ne===re&&We(q.start+q.count-1,y.width,4)===ne?Z.count=Math.max(Z.count,q.start+q.count-Z.start):(++ce,se[ce]=q)}se.length=ce+1;let Y=t.getParameter(s.UNPACK_ROW_LENGTH),$=t.getParameter(s.UNPACK_SKIP_PIXELS),oe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let P=0,Z=se.length;P<Z;P++){let q=se[P],ae=Math.floor(q.start/4),ne=Math.ceil(q.count/4),re=ae%y.width,Ee=Math.floor(ae/y.width),ze=ne,ie=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,re),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ee),t.texSubImage2D(s.TEXTURE_2D,0,re,Ee,ze,ie,z,te,y.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Y),t.pixelStorei(s.UNPACK_SKIP_PIXELS,$),t.pixelStorei(s.UNPACK_SKIP_ROWS,oe)}}function gt(R,y,z){let te=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(te=s.TEXTURE_3D);let J=it(R,y),se=y.source;t.bindTexture(te,R.__webglTexture,s.TEXTURE0+z);let ce=i.get(se);if(se.version!==ce.__version||J===!0){if(t.activeTexture(s.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ie=Ge.getPrimaries(Ge.workingColorSpace),Ae=y.colorSpace===on?null:Ge.getPrimaries(y.colorSpace),Be=y.colorSpace===on||ie===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let $=v(y.image,!1,n.maxTextureSize);$=Ce(y,$);let oe=r.convert(y.format,y.colorSpace),P=r.convert(y.type),Z=w(y.internalFormat,oe,P,y.normalized,y.colorSpace,y.isVideoTexture);je(te,y);let q,ae=y.mipmaps,ne=y.isVideoTexture!==!0,re=ce.__version===void 0||J===!0,Ee=se.dataReady,ze=M(y,$);if(y.isDepthTexture)Z=_(y.format===rn,y.type),re&&(ne?t.texStorage2D(s.TEXTURE_2D,1,Z,$.width,$.height):t.texImage2D(s.TEXTURE_2D,0,Z,$.width,$.height,0,oe,P,null));else if(y.isDataTexture)if(ae.length>0){ne&&re&&t.texStorage2D(s.TEXTURE_2D,ze,Z,ae[0].width,ae[0].height);for(let ie=0,Ae=ae.length;ie<Ae;ie++)q=ae[ie],ne?Ee&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,q.width,q.height,oe,P,q.data):t.texImage2D(s.TEXTURE_2D,ie,Z,q.width,q.height,0,oe,P,q.data);y.generateMipmaps=!1}else ne?(re&&t.texStorage2D(s.TEXTURE_2D,ze,Z,$.width,$.height),Ee&&Dt(y,$,oe,P)):t.texImage2D(s.TEXTURE_2D,0,Z,$.width,$.height,0,oe,P,$.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ne&&re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ze,Z,ae[0].width,ae[0].height,$.depth);for(let ie=0,Ae=ae.length;ie<Ae;ie++)if(q=ae[ie],y.format!==pi)if(oe!==null)if(ne){if(Ee)if(y.layerUpdates.size>0){let Be=mc(q.width,q.height,y.format,y.type);for(let de of y.layerUpdates){let Qe=q.data.subarray(de*Be/q.data.BYTES_PER_ELEMENT,(de+1)*Be/q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,de,q.width,q.height,1,oe,Qe)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,q.width,q.height,$.depth,oe,q.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,Z,q.width,q.height,$.depth,0,q.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?Ee&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,q.width,q.height,$.depth,oe,P,q.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,Z,q.width,q.height,$.depth,0,oe,P,q.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ne&&re&&t.texStorage2D(s.TEXTURE_2D,ze,Z,ae[0].width,ae[0].height);for(let ie=0,Ae=ae.length;ie<Ae;ie++)q=ae[ie],y.format!==pi?oe!==null?ne?Ee&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,q.width,q.height,oe,q.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,Z,q.width,q.height,0,q.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?Ee&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,q.width,q.height,oe,P,q.data):t.texImage2D(s.TEXTURE_2D,ie,Z,q.width,q.height,0,oe,P,q.data)}else if(y.isDataArrayTexture)if(ne){if(re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ze,Z,$.width,$.height,$.depth),Ee)if(y.layerUpdates.size>0){let ie=mc($.width,$.height,y.format,y.type);for(let Ae of y.layerUpdates){let Be=$.data.subarray(Ae*ie/$.data.BYTES_PER_ELEMENT,(Ae+1)*ie/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ae,$.width,$.height,1,oe,P,Be)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,oe,P,$.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Z,$.width,$.height,$.depth,0,oe,P,$.data);else if(y.isData3DTexture)ne?(re&&t.texStorage3D(s.TEXTURE_3D,ze,Z,$.width,$.height,$.depth),Ee&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,oe,P,$.data)):t.texImage3D(s.TEXTURE_3D,0,Z,$.width,$.height,$.depth,0,oe,P,$.data);else if(y.isFramebufferTexture){if(re)if(ne)t.texStorage2D(s.TEXTURE_2D,ze,Z,$.width,$.height);else{let ie=$.width,Ae=$.height;for(let Be=0;Be<ze;Be++)t.texImage2D(s.TEXTURE_2D,Be,Z,ie,Ae,0,oe,P,null),ie>>=1,Ae>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){let ie=s.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),$.parentNode!==ie){ie.appendChild($),u.add(y),ie.onpaint=Ae=>{let Be=Ae.changedElements;for(let de of u)Be.includes(de.image)&&(de.needsUpdate=!0)},ie.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,$);else{let Be=s.RGBA,de=s.RGBA,Qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Be,de,Qe,$)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ae.length>0){if(ne&&re){let ie=Ne(ae[0]);t.texStorage2D(s.TEXTURE_2D,ze,Z,ie.width,ie.height)}for(let ie=0,Ae=ae.length;ie<Ae;ie++)q=ae[ie],ne?Ee&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,oe,P,q):t.texImage2D(s.TEXTURE_2D,ie,Z,oe,P,q);y.generateMipmaps=!1}else if(ne){if(re){let ie=Ne($);t.texStorage2D(s.TEXTURE_2D,ze,Z,ie.width,ie.height)}Ee&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe,P,$)}else t.texImage2D(s.TEXTURE_2D,0,Z,oe,P,$);A(y)&&y.mipmapsAutoUpdate===!0&&S(te),ce.__version=se.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Kt(R,y,z){if(y.image.length!==6)return;let te=it(R,y),J=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+z);let se=i.get(J);if(J.version!==se.__version||te===!0){t.activeTexture(s.TEXTURE0+z);let ce=Ge.getPrimaries(Ge.workingColorSpace),Y=y.colorSpace===on?null:Ge.getPrimaries(y.colorSpace),$=y.colorSpace===on||ce===Y?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let oe=y.isCompressedTexture||y.image[0].isCompressedTexture,P=y.image[0]&&y.image[0].isDataTexture,Z=[];for(let de=0;de<6;de++)!oe&&!P?Z[de]=v(y.image[de],!0,n.maxCubemapSize):Z[de]=P?y.image[de].image:y.image[de],Z[de]=Ce(y,Z[de]);let q=Z[0],ae=r.convert(y.format,y.colorSpace),ne=r.convert(y.type),re=w(y.internalFormat,ae,ne,y.normalized,y.colorSpace),Ee=y.isVideoTexture!==!0,ze=se.__version===void 0||te===!0,ie=J.dataReady,Ae=M(y,q);je(s.TEXTURE_CUBE_MAP,y);let Be;if(y.isDepthTexture){if(re=_(y.format===rn,y.type),ze)if(Ee)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,re,q.width,q.height);else for(let de=0;de<6;de++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,q.width,q.height,0,ae,ne,null)}else if(oe){Ee&&ze&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,re,q.width,q.height);for(let de=0;de<6;de++){Be=Z[de].mipmaps;for(let Qe=0;Qe<Be.length;Qe++){let Rt=Be[Qe];y.format!==pi?ae!==null?Ee?ie&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe,0,0,Rt.width,Rt.height,ae,Rt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe,re,Rt.width,Rt.height,0,Rt.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe,0,0,Rt.width,Rt.height,ae,ne,Rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe,re,Rt.width,Rt.height,0,ae,ne,Rt.data)}}}else{if(Be=y.mipmaps,Ee&&ze){Be.length>0&&Ae++;let de=Ne(Z[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,re,de.width,de.height)}for(let de=0;de<6;de++)if(P){Ee?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Z[de].width,Z[de].height,ae,ne,Z[de].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,Z[de].width,Z[de].height,0,ae,ne,Z[de].data);for(let Qe=0;Qe<Be.length;Qe++){let an=Be[Qe].image[de].image;Ee?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe+1,0,0,an.width,an.height,ae,ne,an.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe+1,re,an.width,an.height,0,ae,ne,an.data)}}else{Ee?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ae,ne,Z[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,ae,ne,Z[de]);for(let Qe=0;Qe<Be.length;Qe++){let Rt=Be[Qe];Ee?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe+1,0,0,ae,ne,Rt.image[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe+1,re,ae,ne,Rt.image[de])}}}A(y)&&y.mipmapsAutoUpdate===!0&&S(s.TEXTURE_CUBE_MAP),se.__version=J.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ct(R,y,z,te,J,se){let ce=r.convert(z.format,z.colorSpace),Y=r.convert(z.type),$=w(z.internalFormat,ce,Y,z.normalized,z.colorSpace),oe=i.get(y),P=i.get(z);if(P.__renderTarget=y,!oe.__hasExternalTextures){let Z=Math.max(1,y.width>>se),q=Math.max(1,y.height>>se);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,se,$,Z,q,y.depth,0,ce,Y,null):t.texImage2D(J,se,$,Z,q,0,ce,Y,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),ue(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,J,P.__webglTexture,0,at(y)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,J,P.__webglTexture,se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ti(R,y,z){if(s.bindRenderbuffer(s.RENDERBUFFER,R),y.depthBuffer){let te=y.depthTexture,J=te&&te.isDepthTexture?te.type:null,se=_(y.stencilBuffer,J),ce=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ue(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at(y),se,y.width,y.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,at(y),se,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,se,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,R)}else{let te=y.textures;for(let J=0;J<te.length;J++){let se=te[J],ce=r.convert(se.format,se.colorSpace),Y=r.convert(se.type),$=w(se.internalFormat,ce,Y,se.normalized,se.colorSpace);ue(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at(y),$,y.width,y.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,at(y),$,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,$,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(R,y,z){let te=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(y.depthTexture);J.__renderTarget=y;let se=te?y.depthTexture.image[0]:y.depthTexture.image;(!J.__webglTexture||se.width!==y.width||se.height!==y.height)&&(se.width=y.width,se.height=y.height,y.depthTexture.needsUpdate=!0),te?me(y.depthTexture,0):pe(y.depthTexture,0);let ce=J.__webglTexture,Y=at(y),$=te?s.TEXTURE_CUBE_MAP_POSITIVE_X+z:s.TEXTURE_2D,oe=y.depthTexture.format===rn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===$i)ue(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,$,ce,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,oe,$,ce,0);else if(y.depthTexture.format===rn)ue(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,$,ce,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,oe,$,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oi(R){let y=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let te=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),te){let J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,te.removeEventListener("dispose",J)};te.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=te}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let te=0;te<6;te++)At(y.__webglFramebuffer[te],R,te);else R.texture.mipmaps.length>0?At(y.__webglFramebuffer[0],R,0):At(y.__webglFramebuffer,R,0);else if(z){y.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[te]),y.__webglDepthbuffer[te]===void 0)y.__webglDepthbuffer[te]=s.createRenderbuffer(),Ti(y.__webglDepthbuffer[te],R,!1);else{let J=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=y.__webglDepthbuffer[te];s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,se)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Ti(y.__webglDepthbuffer,R,!1);else{let J=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,se)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ai(R,y,z){let te=i.get(R);y!==void 0&&ct(te.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&oi(R)}function li(R){let y=R.texture,z=i.get(R),te=i.get(y);R.addEventListener("dispose",O),U(R);let J=R.textures,se=R.isWebGLCubeRenderTarget===!0,ce=J.length>1;if(ce||(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=y.version,o.memory.textures++),se){z.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(y.mipmaps.length>0){z.__webglFramebuffer[Y]=[];for(let $=0;$<y.mipmaps.length;$++)z.__webglFramebuffer[Y][$]=s.createFramebuffer()}else z.__webglFramebuffer[Y]=s.createFramebuffer()}else{if(y.mipmaps.length>0){z.__webglFramebuffer=[];for(let Y=0;Y<y.mipmaps.length;Y++)z.__webglFramebuffer[Y]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(ce)for(let Y=0,$=J.length;Y<$;Y++){let oe=i.get(J[Y]);oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&ue(R)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Y=0;Y<J.length;Y++){let $=J[Y];z.__webglColorRenderbuffer[Y]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[Y]);let oe=r.convert($.format,$.colorSpace),P=r.convert($.type),Z=w($.internalFormat,oe,P,$.normalized,$.colorSpace,R.isXRRenderTarget===!0),q=at(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,q,Z,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,z.__webglColorRenderbuffer[Y])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Ti(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),je(s.TEXTURE_CUBE_MAP,y);for(let Y=0;Y<6;Y++)if(y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)ct(z.__webglFramebuffer[Y][$],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$);else ct(z.__webglFramebuffer[Y],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);A(y)?S(s.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(ce){for(let Y=0,$=J.length;Y<$;Y++){let oe=J[Y],P=i.get(oe),Z=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Z,P.__webglTexture),je(Z,oe),ct(z.__webglFramebuffer,R,oe,s.COLOR_ATTACHMENT0+Y,Z,0),A(oe)&&S(Z)}t.unbindTexture()}else{let Y=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Y=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Y,te.__webglTexture),je(Y,y),y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)ct(z.__webglFramebuffer[$],R,y,s.COLOR_ATTACHMENT0,Y,$);else ct(z.__webglFramebuffer,R,y,s.COLOR_ATTACHMENT0,Y,0);A(y)?S(Y):y.mipmaps.length>0&&s.texParameteri(Y,s.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&oi(R)}function N(R){let y=R.textures;for(let z=0,te=y.length;z<te;z++){let J=y[z];if(A(J)&&J.mipmapsAutoUpdate===!0){let se=T(R),ce=i.get(J).__webglTexture;t.bindTexture(se,ce),S(se),t.unbindTexture()}}}let ci=[];function ot(R){if(R.samples>0){if(ue(R)===!1){let y=R.textures,z=R.width,te=R.height,J=s.COLOR_BUFFER_BIT,se=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=i.get(R),Y=y.length>1;if(Y)for(let oe=0;oe<y.length;oe++)t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let oe=0;oe<y.length;oe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),Y){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ce.__webglColorRenderbuffer[oe]);let P=i.get(y[oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,P,0)}s.blitFramebuffer(0,0,z,te,0,0,z,te,J,s.NEAREST),l===!0&&(ci.length=0,ci.push(s.COLOR_ATTACHMENT0+oe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&ci.push(se),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ci))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Y)for(let oe=0;oe<y.length;oe++){t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,ce.__webglColorRenderbuffer[oe]);let P=i.get(y[oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,P,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function at(R){return Math.min(n.maxSamples,R.samples)}function ue(R){let y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function _t(R){let y=o.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Ce(R,y){let z=R.colorSpace,te=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==qt&&z!==on&&(Ge.getTransfer(z)===Je?(te!==pi||J!==Qt)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",z)),y}function Ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Ue,this.resetTextureUnits=j,this.getTextureUnits=ee,this.setTextureUnits=Se,this.setTexture2D=pe,this.setTexture2DArray=ye,this.setTexture3D=Re,this.setTextureCube=me,this.rebindTextures=ai,this.setupRenderTarget=li,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=oi,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=ue,this.dispose=W}function U0(s,e){function t(i,n=on){let r,o=Ge.getTransfer(n);if(i===Qt)return s.UNSIGNED_BYTE;if(i===Wo)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Xo)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Zl)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Jl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===$l)return s.BYTE;if(i===Kl)return s.SHORT;if(i===Ns)return s.UNSIGNED_SHORT;if(i===Vo)return s.INT;if(i===wi)return s.UNSIGNED_INT;if(i===ri)return s.FLOAT;if(i===Ei)return s.HALF_FLOAT;if(i===jl)return s.ALPHA;if(i===Ql)return s.RGB;if(i===pi)return s.RGBA;if(i===$i)return s.DEPTH_COMPONENT;if(i===rn)return s.DEPTH_STENCIL;if(i===qo)return s.RED;if(i===Yo)return s.RED_INTEGER;if(i===En)return s.RG;if(i===$o)return s.RG_INTEGER;if(i===Ko)return s.RGBA_INTEGER;if(i===Er||i===Tr||i===Ar||i===Rr)if(o===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zo||i===Jo||i===jo||i===Qo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ea||i===ta||i===ia||i===na||i===sa||i===Cr||i===ra)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ea||i===ta)return o===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ia)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===na)return r.COMPRESSED_R11_EAC;if(i===sa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Cr)return r.COMPRESSED_RG11_EAC;if(i===ra)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===oa||i===aa||i===la||i===ca||i===ha||i===ua||i===da||i===fa||i===pa||i===ma||i===ga||i===_a||i===xa||i===ya)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===oa)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===aa)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===la)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ca)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ha)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ua)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===da)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fa)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pa)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ma)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ga)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_a)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xa)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ya)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===va||i===ba||i===Sa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===va)return o===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ma||i===wa||i===Pr||i===Ea)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ma)return r.COMPRESSED_RED_RGTC1_EXT;if(i===wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ea)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Yn?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}var F0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Cc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new hr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Pi({vertexShader:F0,fragmentShader:O0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new zn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pc=class extends vi{constructor(e,t){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new Cc,p={},v=t.getContextAttributes(),A=null,S=null,T=[],w=[],_=new Te,M=null,U=null,C=new yt;C.viewport=new et;let D=new yt;D.viewport=new et;let O=[C,D],V=new Oo,L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let pe=T[K];return pe===void 0&&(pe=new xs,T[K]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(K){let pe=T[K];return pe===void 0&&(pe=new xs,T[K]=pe),pe.getGripSpace()},this.getHand=function(K){let pe=T[K];return pe===void 0&&(pe=new xs,T[K]=pe),pe.getHandSpace()};function F(K){let pe=w.indexOf(K.inputSource);if(pe===-1)return;let ye=T[pe];ye!==void 0&&(ye.update(K.inputSource,K.frame,c||o),ye.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",k),n.removeEventListener("inputsourceschange",Q);for(let K=0;K<T.length;K++){let pe=w[K];pe!==null&&(w[K]=null,T[K].disconnect(pe))}L=null,W=null,m.reset();for(let K in p)delete p[K];if(e.setRenderTarget(A),f=null,d=null,u=null,n=null,S=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),U!==null){let K=U.camera;K.fov=U.fov,K.zoom=U.zoom,K.updateProjectionMatrix(),U=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(A=e.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",k),n.addEventListener("inputsourceschange",Q),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Re=null,me=null;v.depth&&(me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=v.stencil?rn:$i,Re=v.stencil?Yn:wi);let Oe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Oe),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new ni(d.textureWidth,d.textureHeight,{format:pi,type:Qt,depthTexture:new ji(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ye={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,ye),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new ni(f.framebufferWidth,f.framebufferHeight,{format:pi,type:Qt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Ue.setContext(n),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(K){for(let pe=0;pe<K.removed.length;pe++){let ye=K.removed[pe],Re=w.indexOf(ye);Re>=0&&(w[Re]=null,T[Re].disconnect(ye))}for(let pe=0;pe<K.added.length;pe++){let ye=K.added[pe],Re=w.indexOf(ye);if(Re===-1){for(let Oe=0;Oe<T.length;Oe++)if(Oe>=w.length){w.push(ye),Re=Oe;break}else if(w[Oe]===null){w[Oe]=ye,Re=Oe;break}if(Re===-1)break}let me=T[Re];me&&me.connect(ye)}}function X(K,pe){pe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(pe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let pe=K.near,ye=K.far;m.texture!==null&&(m.depthNear>0&&(pe=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),V.near=D.near=C.near=pe,V.far=D.far=C.far=ye,(L!==V.near||W!==V.far)&&(n.updateRenderState({depthNear:V.near,depthFar:V.far}),L=V.near,W=V.far),V.layers.mask=K.layers.mask|6,C.layers.mask=V.layers.mask&-5,D.layers.mask=V.layers.mask&-3;let Re=K.parent,me=V.cameras;X(V,Re);for(let Oe=0;Oe<me.length;Oe++)X(me[Oe],Re);V.projectionMatrix.copy(C.projectionMatrix),V.projectionMatrixInverse.copy(C.projectionMatrixInverse),U===null&&K.isPerspectiveCamera&&(U={camera:K,fov:K.fov,zoom:K.zoom}),j(K,V,Re)};function j(K,pe,ye){ye===null?K.matrix.copy(pe.matrixWorld):(K.matrix.copy(ye.matrixWorld),K.matrix.invert(),K.matrix.multiply(pe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(pe.projectionMatrix),K.projectionMatrixInverse.copy(pe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Bn*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(K){return p[K]};let ee=null;function Se(K,pe){if(h=pe.getViewerPose(c||o),g=pe,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Re=!1;ye.length!==V.cameras.length&&(V.cameras.length=0,Re=!0);for(let Pe=0;Pe<ye.length;Pe++){let je=ye[Pe],it=null;if(f!==null)it=f.getViewport(je);else{let Dt=u.getViewSubImage(d,je);it=Dt.viewport,Pe===0&&(e.setRenderTargetTextures(S,Dt.colorTexture,Dt.depthStencilTexture),e.setRenderTarget(S))}let We=O[Pe];We===void 0&&(We=new yt,We.layers.enable(Pe),We.viewport=new et,O[Pe]=We),We.matrix.fromArray(je.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(je.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(it.x,it.y,it.width,it.height),Pe===0&&(V.matrix.copy(We.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Re===!0&&V.cameras.push(We)}let me=n.enabledFeatures;if(me&&me.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let Pe=u.getDepthInformation(ye[0]);Pe&&Pe.isValid&&Pe.texture&&m.init(Pe,n.renderState)}if(me&&me.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let Pe=0;Pe<ye.length;Pe++){let je=ye[Pe].camera;if(je){let it=p[je];it||(it=new hr,p[je]=it);let We=u.getCameraImage(je);it.sourceTexture=We}}}}for(let ye=0;ye<T.length;ye++){let Re=w[ye],me=T[ye];Re!==null&&me!==void 0&&me.update(Re,pe,c||o)}ee&&ee(K,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),g=null}let Ue=new xd;Ue.setAnimationLoop(Se),this.setAnimationLoop=function(K){ee=K},this.dispose=function(){}}},B0=new Ie,Rd=new De;Rd.set(-1,0,0,0,1,0,0,0,1);function k0(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,dc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,v,A,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),A=v.envMap,S=v.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(B0.makeRotationFromEuler(S)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Rd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function z0(s,e,t,i){let n={},r={};function o(v,A){let S=A.program;i.uniformBlockBinding(v,S,n[v.id])}function a(v,A){let S=n[v.id];S===void 0&&(g(v),S=l(v),n[v.id]=S,v.addEventListener("dispose",m));let T=A.program;i.updateUBOMapping(v,T);let w=e.render.frame;r[v.id]!==w&&(c(v),r[v.id]=w)}function l(v){let A=s.createBuffer(),S=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,S,T),s.bindBuffer(s.UNIFORM_BUFFER,null),A}function c(v){let A=n[v.id],S=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let w=0,_=S.length;w<_;w++){let M=S[w];if(Array.isArray(M))for(let U=0,C=M.length;U<C;U++)h(M[U],w,U,T);else h(M,w,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,A,S,T){if(d(v,A,S,T)===!0){let w=v.__offset,_=v.value;if(Array.isArray(_)){let M=0;for(let U=0;U<_.length;U++){let C=_[U],D=x(C,!0);u(C,v.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,v.__data)}}function u(v,A,S){typeof v=="number"||typeof v=="boolean"?A[S]=v:v.isMatrix3?(A[S]=v.elements[0],A[S+1]=v.elements[1],A[S+2]=v.elements[2],A[S+3]=0,A[S+4]=v.elements[3],A[S+5]=v.elements[4],A[S+6]=v.elements[5],A[S+7]=0,A[S+8]=v.elements[6],A[S+9]=v.elements[7],A[S+10]=v.elements[8],A[S+11]=0):ArrayBuffer.isView(v)?A.set(v.subarray(0,A.length-S),S):v.toArray(A,S)}function d(v,A,S,T){let w=v.value,_=A+"_"+S;if(Array.isArray(w)){T[_]===void 0&&(T[_]=[]);let M=T[_],U=!1;for(let C=0;C<w.length;C++)f(w[C],M,C)===!0&&(U=!0);return U}return f(w,T,_)}function f(v,A,S){if(A[S]===void 0)return typeof v=="number"||typeof v=="boolean"?A[S]=v:ArrayBuffer.isView(v)?A[S]=v.slice():A[S]=v.clone(),!0;{let T=A[S];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return A[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function g(v){let A=v.uniforms,S=0,T=16;for(let _=0,M=A.length;_<M;_++){let U=Array.isArray(A[_])?A[_]:[A[_]];for(let C=0,D=U.length;C<D;C++){let O=U[C],V=Array.isArray(O.value)?O.value:[O.value],L=Array.isArray(A[_])||Array.isArray(O.value),W=S;for(let k=0,Q=V.length;k<Q;k++){let X=V[k],j=x(X,L),ee=S%T,Se=ee%j.boundary,Ue=ee+Se;S+=Se,Ue!==0&&T-Ue<j.storage&&(S+=T-Ue),k===0&&(W=S),S+=j.storage}let F=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new F((S-W)/Float32Array.BYTES_PER_ELEMENT),O.__offset=W}}let w=S%T;return w>0&&(S+=T-w),v.__size=S,v.__cache={},this}function x(v,A){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=16,S.storage=48):v.isMatrix4?(S.boundary=16,S.storage=64):v.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):we("WebGLRenderer: Unsupported uniform value type.",v),A===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(v){let A=v.target;A.removeEventListener("dispose",m),s.deleteBuffer(n[A.id]),delete n[A.id],delete r[A.id]}function p(){for(let v in n)s.deleteBuffer(n[v]);n={},r={}}return{bind:o,update:a,dispose:p}}var H0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fi=null;function G0(){return Fi===null&&(Fi=new Ms(H0,16,16,En,Ei),Fi.name="DFG_LUT",Fi.minFilter=bt,Fi.magFilter=bt,Fi.wrapS=ui,Fi.wrapT=ui,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}var La=class{constructor(e={}){let{canvas:t=Vu(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Qt}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let x=f,m=new Set([Ko,$o,Yo]),p=new Set([Qt,wi,Ns,Yn,Wo,Xo]),v=new Uint32Array(4),A=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},T=null,w=null,_=[],M=[],U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,O=null,V=null,L=null,W=null;this._outputColorSpace=xt;let F=0,k=0,Q=null,X=-1,j=null,ee=new et,Se=new et,Ue=null,K=new _e(0),pe=0,ye=t.width,Re=t.height,me=1,Oe=null,ft=null,Pe=new et(0,0,ye,Re),je=new et(0,0,ye,Re),it=!1,We=new _n,Dt=new Mo,gt=!1,Kt=!1,ct=new Ie,Ti=new E,At=new et,oi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ai=!1;function li(){return Q===null?me:1}let N=i;function ci(b,I){return t.getContext(b,I)}let ot,at,ue,_t,Ce,Ne,R,y,z,te,J,se,ce,Y,$,oe,P,Z,q,ae,ne,re,Ee;try{let b={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",de,!1),N===null){let I="webgl2";if(N=ci(I,b),N===null)throw ci(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(b){throw t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Le("WebGLRenderer: "+b.message),b}function ze(){ot=new Qg(N),ot.init(),ne=new U0(N,ot),at=new Gg(N,ot,e,ne),ue=new D0(N,ot),at.reversedDepthBuffer&&d&&ue.buffers.depth.setReversed(!0),V=N.createFramebuffer(),L=N.createFramebuffer(),W=N.createFramebuffer(),_t=new i_(N),Ce=new y0,Ne=new N0(N,ot,ue,Ce,at,ne,_t),R=new jg(C),y=new sp(N),re=new zg(N,y),z=new e_(N,y,_t,re),te=new s_(N,z,y,re,_t),Z=new n_(N,at,Ne),$=new Vg(Ce),J=new x0(C,R,ot,at,re,$),se=new k0(C,Ce),ce=new b0,Y=new A0(ot),P=new kg(C,R,ue,te,g,l),oe=new I0(C,te,at),Ee=new z0(N,_t,at,ue),q=new Hg(N,ot,_t),ae=new t_(N,ot,_t),_t.programs=J.programs,C.capabilities=at,C.extensions=ot,C.properties=Ce,C.renderLists=ce,C.shadowMap=oe,C.state=ue,C.info=_t}x!==Qt&&(U=new o_(x,t.width,t.height,a,n,r));let ie=new Pc(C,N);this.xr=ie,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=ot.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ot.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(b){b!==void 0&&(me=b,this.setSize(ye,Re,!1))},this.getSize=function(b){return b.set(ye,Re)},this.setSize=function(b,I,G=!0){if(ie.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=b,Re=I,t.width=Math.floor(b*me),t.height=Math.floor(I*me),G===!0&&(t.style.width=b+"px",t.style.height=I+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(ye*me,Re*me).floor()},this.setDrawingBufferSize=function(b,I,G){ye=b,Re=I,me=G,t.width=Math.floor(b*G),t.height=Math.floor(I*G),this.setViewport(0,0,b,I)},this.setEffects=function(b){if(x===Qt){Le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let I=0;I<b.length;I++)if(b[I].isOutputPass===!0){we("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ee)},this.getViewport=function(b){return b.copy(Pe)},this.setViewport=function(b,I,G,B){b.isVector4?Pe.set(b.x,b.y,b.z,b.w):Pe.set(b,I,G,B),ue.viewport(ee.copy(Pe).multiplyScalar(li()).round())},this.getScissor=function(b){return b.copy(je)},this.setScissor=function(b,I,G,B){b.isVector4?je.set(b.x,b.y,b.z,b.w):je.set(b,I,G,B),ue.scissor(Se.copy(je).multiplyScalar(li()).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(b){ue.setScissorTest(it=b)},this.setOpaqueSort=function(b){Oe=b},this.setTransparentSort=function(b){ft=b},this.getClearColor=function(b){return b.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(b=!0,I=!0,G=!0){let B=0;if(b){let H=!1;if(Q!==null){let he=Q.texture.format;H=m.has(he)}if(H){let he=Q.texture.type,xe=p.has(he),le=P.getClearColor(),ge=P.getClearAlpha(),Me=le.r,Fe=le.g,Xe=le.b;xe?(v[0]=Me,v[1]=Fe,v[2]=Xe,v[3]=ge,N.clearBufferuiv(N.COLOR,0,v)):(A[0]=Me,A[1]=Fe,A[2]=Xe,A[3]=ge,N.clearBufferiv(N.COLOR,0,A))}else B|=N.COLOR_BUFFER_BIT}I&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),O=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",de,!1),P.dispose(),ce.dispose(),Y.dispose(),Ne.dispose(),Ce.dispose(),R.dispose(),te.dispose(),z.dispose(),re.dispose(),Ee.dispose(),J.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",uh),ie.removeEventListener("sessionend",dh),Rn.stop()};function Ae(b){b.preventDefault(),Qs("WebGLRenderer: Context Lost."),D=!0}function Be(){Qs("WebGLRenderer: Context Restored."),D=!1;let b=_t.autoReset,I=oe.enabled,G=oe.autoUpdate,B=oe.needsUpdate,H=oe.type;ze(),_t.autoReset=b,oe.enabled=I,oe.autoUpdate=G,oe.needsUpdate=B,oe.type=H}function de(b){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Qe(b){let I=b.target;I.removeEventListener("dispose",Qe),Rt(I)}function Rt(b){an(b),Ce.remove(b)}function an(b){let I=Ce.get(b).programs;I!==void 0&&(I.forEach(function(G){J.releaseProgram(G)}),b.isShaderMaterial&&J.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,G,B,H,he){I===null&&(I=oi);let xe=H.isMesh&&H.matrixWorld.determinantAffine()<0,le=$d(b,I,G,B,H);ue.setMaterial(B,xe);let ge=G.index,Me=1;if(B.wireframe===!0){if(ge=z.getWireframeAttribute(G),ge===void 0)return;Me=2}let Fe=G.drawRange,Xe=G.attributes.position,ve=Fe.start*Me,qe=(Fe.start+Fe.count)*Me;he!==null&&(ve=Math.max(ve,he.start*Me),qe=Math.min(qe,(he.start+he.count)*Me)),ge!==null?(ve=Math.max(ve,0),qe=Math.min(qe,ge.count)):Xe!=null&&(ve=Math.max(ve,0),qe=Math.min(qe,Xe.count));let pt=qe-ve;if(pt<0||pt===1/0)return;re.setup(H,B,le,G,ge);let rt,nt=q;if(ge!==null&&(rt=y.get(ge),nt=ae,nt.setIndex(rt)),H.isMesh)B.wireframe===!0?(ue.setLineWidth(B.wireframeLinewidth*li()),nt.setMode(N.LINES)):nt.setMode(N.TRIANGLES);else if(H.isLine){let Ot=B.linewidth;Ot===void 0&&(Ot=1),ue.setLineWidth(Ot*li()),H.isLineSegments?nt.setMode(N.LINES):H.isLineLoop?nt.setMode(N.LINE_LOOP):nt.setMode(N.LINE_STRIP)}else H.isPoints?nt.setMode(N.POINTS):H.isSprite&&nt.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))nt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ot=H._multiDrawStarts,be=H._multiDrawCounts,Vt=H._multiDrawCount,Ke=ge?y.get(ge).bytesPerElement:1,Cn=Ce.get(B).currentProgram.getUniforms();for(let Bt=0;Bt<Vt;Bt++)Cn.setValue(N,"_gl_DrawID",Bt),nt.render(Ot[Bt]/Ke,be[Bt])}else if(H.isInstancedMesh)nt.renderInstances(ve,pt,H.count);else if(G.isInstancedBufferGeometry){let Ot=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,be=Math.min(G.instanceCount,Ot);nt.renderInstances(ve,pt,be)}else nt.render(ve,pt)};function hh(b,I,G,B){O!==null&&b.isNodeMaterial&&O.setObject(B,b),gt===!0&&$.setState(b,G,!1),b.transparent===!0&&b.side===Ft&&b.forceSinglePass===!1?(b.side=$t,b.needsUpdate=!0,zs(b,I,B),b.side=Di,b.needsUpdate=!0,zs(b,I,B),b.side=Ft):zs(b,I,B)}this.compile=function(b,I,G=null){G===null&&(G=b),O!==null&&O.renderStart(b,I,G),w=Y.get(G),w.init(I),M.push(w),G.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),b!==G&&b.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),Kt=this.localClippingEnabled,gt=$.init(this.clippingPlanes,Kt),gt===!0&&$.setGlobalState(this.clippingPlanes,I),O!==null&&oe.render(w.state.shadowsArray,G,I);let B=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let he=H.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){let le=he[xe];hh(le,G,I,H),B.add(le)}else hh(he,G,I,H),B.add(he)}),w=M.pop(),O!==null&&O.renderEnd(),B},this.compileAsync=function(b,I,G=null){let B=this.compile(b,I,G);return new Promise(H=>{function he(){if(B.forEach(function(xe){let ge=Ce.get(xe).currentProgram;(ge===void 0||ge.isReady())&&B.delete(xe)}),B.size===0){H(b);return}setTimeout(he,10)}ot.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ya=null;function qd(b){Ya&&Ya(b)}function uh(){Rn.stop()}function dh(){Rn.start()}let Rn=new xd;Rn.setAnimationLoop(qd),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(b){Ya=b,ie.setAnimationLoop(b),b===null?Rn.stop():Rn.start()},ie.addEventListener("sessionstart",uh),ie.addEventListener("sessionend",dh),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(b,I);let G=ie.enabled===!0&&ie.isPresenting===!0,B=U!==null&&(Q===null||G)&&U.begin(C,Q);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(I),I=ie.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,I,Q),w=Y.get(b,M.length),w.init(I),w.state.textureUnits=Ne.getTextureUnits(),M.push(w),ct.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?Dt.setFromArrayCamera(I):We.setFromProjectionMatrix(ct,di,I.reversedDepth),Kt=this.localClippingEnabled,gt=$.init(this.clippingPlanes,Kt),T=ce.get(b,_.length),T.init(),_.push(T),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){let xe=C.xr.getDepthSensingMesh();xe!==null&&$a(xe,I,-1/0,C.sortObjects)}$a(b,I,0,C.sortObjects),T.finish(),O!==null&&O.updateLights(w.state.lightsArray),C.sortObjects===!0&&T.sort(Oe,ft),ai=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ai&&P.addToRenderList(T,b),this.info.autoReset===!0&&this.info.reset(),gt===!0&&$.beginShadows();let H=w.state.shadowsArray;if(oe.render(H,b,I),gt===!0&&$.endShadows(),(B&&U.hasRenderPass())===!1){let xe=T.opaque,le=T.transmissive;if(w.setupLights(),I.isArrayCamera){let ge=I.cameras;if(le.length>0)for(let Me=0,Fe=ge.length;Me<Fe;Me++){let Xe=ge[Me];ph(xe,le,b,Xe)}ai&&P.render(b);for(let Me=0,Fe=ge.length;Me<Fe;Me++){let Xe=ge[Me];fh(T,b,Xe,Xe.viewport)}}else le.length>0&&ph(xe,le,b,I),ai&&P.render(b),fh(T,b,I)}Q!==null&&k===0&&(Ne.updateMultisampleRenderTarget(Q),Ne.updateRenderTargetMipmap(Q)),B&&U.end(C),b.isScene===!0&&b.onAfterRender(C,b,I),re.resetDefaultState(),X=-1,j=null,M.pop(),M.length>0?(w=M[M.length-1],Ne.setTextureUnits(w.state.textureUnits),gt===!0&&$.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,O!==null&&O.renderEnd()};function $a(b,I,G,B){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){let xe=I.isArrayCamera?Dt:We;if(!b.frustumCulled||b.intersectsFrustum(xe)){B&&At.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ct);let le=te.update(b),ge=b.material;ge.visible&&T.push(b,le,ge,G,At.z,null,I)}}else if(b.isMesh||b.isLine||b.isPoints){let xe=I.isArrayCamera?Dt:We;if(!b.frustumCulled||b.intersectsFrustum(xe)){let le=te.update(b),ge=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),At.copy(b.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),At.copy(le.boundingSphere.center)),At.applyMatrix4(b.matrixWorld).applyMatrix4(ct)),Array.isArray(ge)){let Me=le.groups;for(let Fe=0,Xe=Me.length;Fe<Xe;Fe++){let ve=Me[Fe],qe=ge[ve.materialIndex];qe&&qe.visible&&T.push(b,le,qe,G,At.z,ve,I)}}else ge.visible&&T.push(b,le,ge,G,At.z,null,I)}}}let he=b.children;for(let xe=0,le=he.length;xe<le;xe++)$a(he[xe],I,G,B)}function fh(b,I,G,B){let{opaque:H,transmissive:he,transparent:xe}=b;w.setupLightsView(G),gt===!0&&$.setGlobalState(C.clippingPlanes,G),B&&ue.viewport(ee.copy(B)),H.length>0&&Or(H,I,G),he.length>0&&Or(he,I,G),xe.length>0&&Or(xe,I,G),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function ph(b,I,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){let ve=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new ni(1,1,{generateMipmaps:!0,type:ve?Ei:Qt,minFilter:fi,samples:Math.max(4,at.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}let he=w.state.transmissionRenderTarget[B.id],xe=B.viewport||ee;he.setSize(xe.z*C.transmissionResolutionScale,xe.w*C.transmissionResolutionScale);let le=C.getRenderTarget(),ge=C.getActiveCubeFace(),Me=C.getActiveMipmapLevel();C.setRenderTarget(he),C.getClearColor(K),pe=C.getClearAlpha(),pe<1&&C.setClearColor(16777215,.5),C.clear(),ai&&P.render(G);let Fe=C.toneMapping;C.toneMapping=Ni;let Xe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),gt===!0&&$.setGlobalState(C.clippingPlanes,B),Or(b,G,B),Ne.updateMultisampleRenderTarget(he),Ne.updateRenderTargetMipmap(he),ot.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let qe=0,pt=I.length;qe<pt;qe++){let rt=I[qe],{object:nt,geometry:Ot,material:be,group:Vt}=rt;if(be.side===Ft&&nt.layers.test(B.layers)){let Ke=be.side;be.side=$t,be.needsUpdate=!0,mh(nt,G,B,Ot,be,Vt),be.side=Ke,be.needsUpdate=!0,ve=!0}}ve===!0&&(Ne.updateMultisampleRenderTarget(he),Ne.updateRenderTargetMipmap(he))}C.setRenderTarget(le,ge,Me),C.setClearColor(K,pe),Xe!==void 0&&(B.viewport=Xe),C.toneMapping=Fe}function Or(b,I,G){let B=I.isScene===!0?I.overrideMaterial:null;for(let H=0,he=b.length;H<he;H++){let xe=b[H],{object:le,geometry:ge,group:Me}=xe,Fe=xe.material;Fe.allowOverride===!0&&B!==null&&(Fe=B),le.layers.test(G.layers)&&mh(le,I,G,ge,Fe,Me)}}function mh(b,I,G,B,H,he){O!==null&&H.isNodeMaterial&&O.setObject(b,H),b.onBeforeRender(C,I,G,B,H,he),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(C,I,G,B,b,he),H.transparent===!0&&H.side===Ft&&H.forceSinglePass===!1?(H.side=$t,H.needsUpdate=!0,C.renderBufferDirect(G,I,B,H,b,he),H.side=Di,H.needsUpdate=!0,C.renderBufferDirect(G,I,B,H,b,he),H.side=Ft):C.renderBufferDirect(G,I,B,H,b,he),b.onAfterRender(C,I,G,B,H,he)}function gh(b){let I=0;for(let G of b)G.texture!==null&&I++;return I}function zs(b,I,G){I.isScene!==!0&&(I=oi);let B=Ce.get(b),H=w.state.lights,he=w.state.shadowsArray,xe=H.state.version,le=J.getParameters(b,H.state,he,I,G,w.state.lightProbeGridArray),ge=J.getProgramCacheKey(le),Me=B.programs;B.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?I.environment:null,B.fog=I.fog;let Fe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;B.envMap=R.get(b.envMap||B.environment,Fe),B.envMapRotation=B.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,Me===void 0&&(b.addEventListener("dispose",Qe),Me=new Map,B.programs=Me,B.programVariants=new Map);let Xe=Me.get(ge);if(Xe!==void 0){if(B.currentProgram===Xe&&B.lightsStateVersion===xe)return xh(b,le),Xe}else le.uniforms=J.getUniforms(b),O!==null&&b.isNodeMaterial&&O.build(b,G,le),b.onBeforeCompile(le,C),Xe=J.acquireProgram(le,ge),Me.set(ge,Xe),B.uniforms=le.uniforms;let ve=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ve.clippingPlanes=$.uniform),xh(b,le),B.needsLights=Zd(b),B.lightsStateVersion=xe,B.needsLights&&(ve.ambientLightColor.value=H.state.ambient,ve.lightProbe.value=H.state.probe,ve.sunLights.value=H.state.sun,ve.sunLightShadows.value=H.state.sunShadow,ve.directionalLights.value=H.state.directional,ve.directionalLightShadows.value=H.state.directionalShadow,ve.spotLights.value=H.state.spot,ve.spotLightShadows.value=H.state.spotShadow,ve.rectAreaLights.value=H.state.rectArea,ve.ltc_1.value=H.state.rectAreaLTC1,ve.ltc_2.value=H.state.rectAreaLTC2,ve.pointLights.value=H.state.point,ve.pointLightShadows.value=H.state.pointShadow,ve.hemisphereLights.value=H.state.hemi,ve.sunShadowMatrix.value=H.state.sunShadowMatrix,ve.sunShadowCascade.value=H.state.sunShadowCascade,ve.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ve.spotLightMatrix.value=H.state.spotLightMatrix,ve.spotLightMap.value=H.state.spotLightMap,ve.pointShadowMatrix.value=H.state.pointShadowMatrix),B.numLightProbeGrids=gh(w.state.lightProbeGridArray),B.currentProgram=Xe,B.uniformsList=null,Xe}function Yd(b,I,G,B,H){let he=Ce.get(b),xe=he.currentProgram.id+","+B+","+H,le=he.programVariants.get(xe);return le===void 0?(le=zs(b,I,G),he.programVariants.set(xe,le)):(he.currentProgram=le,he.uniformsList=null,he.outputColorSpace=B,he.toneMapping=H),le}function _h(b){if(b.uniformsList===null){let I=b.currentProgram.getUniforms();b.uniformsList=Fs.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function xh(b,I){let G=Ce.get(b);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function $d(b,I,G,B,H){I.isScene!==!0&&(I=oi),Ne.resetTextureUnits();let he=I.fog,xe=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?I.environment:null,le=Q===null?C.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ge.workingColorSpace,ge=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Me=R.get(B.envMap||xe,ge),Fe=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Xe=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ve=!!G.morphAttributes.position,qe=!!G.morphAttributes.normal,pt=!!G.morphAttributes.color,rt=Ni;B.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(rt=C.toneMapping);let nt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ot=nt!==void 0?nt.length:0,be=Ce.get(B),Vt=w.state.lights;if(gt===!0&&(Kt===!0||b!==j)){let ht=b===j&&B.id===X;$.setState(B,b,ht)}let Ke=!1,Cn=!1;B.version===be.__version?be.needsLights&&be.lightsStateVersion!==Vt.state.version||H.isBatchedMesh&&be.batching===!1||!H.isBatchedMesh&&be.batching===!0||H.isBatchedMesh&&be.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&be.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&be.instancing===!1||!H.isInstancedMesh&&be.instancing===!0||H.isSkinnedMesh&&be.skinning===!1||!H.isSkinnedMesh&&be.skinning===!0||H.isInstancedMesh&&be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&be.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&be.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&be.instancingMorph===!1&&H.morphTexture!==null||be.envMap!==Me||B.fog===!0&&be.fog!==he||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==$.numPlanes||be.numIntersection!==$.numIntersection)||be.vertexAlphas!==Fe||be.vertexTangents!==Xe||be.morphTargets!==ve||be.morphNormals!==qe||be.morphColors!==pt||be.morphTargetsCount!==Ot||be.numLightProbeGrids!==gh(w.state.lightProbeGridArray)?Ke=!0:(be.outputColorSpace!==le||be.toneMapping!==rt)&&(Cn=!0):(Ke=!0,be.__version=B.version);let Bt=be.currentProgram;(Ke===!0||Cn===!0)&&(Bt=Cn===!0?Yd(B,I,H,le,rt):zs(B,I,H),O&&B.isNodeMaterial&&O.onUpdateProgram(B,Bt,be));let Br=!1,ln=!1,Pn=!1,Ye=Bt.getUniforms(),Nt=be.uniforms;if(ue.useProgram(Bt.program)&&(Br=!0,ln=!0,Pn=!0),B.id!==X&&(X=B.id,ln=!0),Br||j!==b){ue.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ye.setValue(N,"projectionMatrix",b.projectionMatrix),Ye.setValue(N,"viewMatrix",b.matrixWorldInverse);let Ct=Ye.map.cameraPosition;Ct!==void 0&&Ct.setValue(N,Ti.setFromMatrixPosition(b.matrixWorld)),at.logarithmicDepthBuffer&&Ye.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ye.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,ln=!0,Pn=!0)}if(be.needsLights&&(Vt.state.sunShadowMap.length>0&&Ye.setValue(N,"sunShadowMap",Vt.state.sunShadowMap,Ne),Vt.state.directionalShadowMap.length>0&&Ye.setValue(N,"directionalShadowMap",Vt.state.directionalShadowMap,Ne),Vt.state.spotShadowMap.length>0&&Ye.setValue(N,"spotShadowMap",Vt.state.spotShadowMap,Ne),Vt.state.pointShadowMap.length>0&&Ye.setValue(N,"pointShadowMap",Vt.state.pointShadowMap,Ne)),H.isSkinnedMesh){Ye.setOptional(N,H,"bindMatrix"),Ye.setOptional(N,H,"bindMatrixInverse");let ht=H.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),Ye.setValue(N,"boneTexture",ht.boneTexture,Ne))}H.isBatchedMesh&&(Ye.setOptional(N,H,"batchingTexture"),Ye.setValue(N,"batchingTexture",H._matricesTexture,Ne),Ye.setOptional(N,H,"batchingIdTexture"),Ye.setValue(N,"batchingIdTexture",H._indirectTexture,Ne),Ye.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&Ye.setValue(N,"batchingColorTexture",H._colorsTexture,Ne));let gi=G.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&Z.update(H,G,Bt),(ln||be.receiveShadow!==H.receiveShadow)&&(be.receiveShadow=H.receiveShadow,Ye.setValue(N,"receiveShadow",H.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&I.environment!==null&&(Nt.envMapIntensity.value=I.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=G0()),ln){if(Ye.setValue(N,"toneMappingExposure",C.toneMappingExposure),be.needsLights&&Kd(Nt,Pn),he&&B.fog===!0&&se.refreshFogUniforms(Nt,he),se.refreshMaterialUniforms(Nt,B,me,Re,w.state.transmissionRenderTarget[b.id]),be.needsLights&&be.numLightProbeGrids>0){let ht=S,Ct=0;for(let zi of w.state.lightProbeGridArray)zi.texture!==null&&(ht.textures[Ct]=zi.texture,ht.min[Ct]=zi.boundingBox.min,ht.max[Ct]=zi.boundingBox.max,ht.resolution[Ct]=zi.resolution,Ct++);for(let zi in ht)ht[zi].length=Ct;Nt.probesSH.value=ht.textures,Nt.probesMin.value=ht.min,Nt.probesMax.value=ht.max,Nt.probesResolution.value=ht.resolution}Fs.upload(N,_h(be),Nt,Ne)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Fs.upload(N,_h(be),Nt,Ne),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ye.setValue(N,"center",H.center),Ye.setValue(N,"modelViewMatrix",H.modelViewMatrix),Ye.setValue(N,"normalMatrix",H.normalMatrix),Ye.setValue(N,"modelMatrix",H.matrixWorld),B.uniformsGroups!==void 0){let ht=B.uniformsGroups;for(let Ct=0,zi=ht.length;Ct<zi;Ct++){let vh=ht[Ct];Ee.update(vh,Bt),Ee.bind(vh,Bt)}}return Bt}function Kd(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.sunLights.needsUpdate=I,b.sunLightShadows.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function Zd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(b,I,G){let B=Ce.get(b);B.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Ce.get(b.texture).__webglTexture=I,Ce.get(b.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,I){let G=Ce.get(b);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,G=0){Q=b,F=I,k=G;let B=null,H=!1,he=!1;if(b){let le=Ce.get(b);if(le.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(N.FRAMEBUFFER,le.__webglFramebuffer),ee.copy(b.viewport),Se.copy(b.scissor),Ue=b.scissorTest,ue.viewport(ee),ue.scissor(Se),ue.setScissorTest(Ue),X=-1;return}else if(le.__webglFramebuffer===void 0)Ne.setupRenderTarget(b);else if(le.__hasExternalTextures)Ne.rebindTextures(b,Ce.get(b.texture).__webglTexture,Ce.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Fe=b.depthTexture;if(le.__boundDepthTexture!==Fe){if(Fe!==null&&Ce.has(Fe)&&(b.width!==Fe.image.width||b.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(b)}}let ge=b.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(he=!0);let Me=Ce.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Me[I])?B=Me[I][G]:B=Me[I],H=!0):b.samples>0&&Ne.useMultisampledRTT(b)===!1?B=Ce.get(b).__webglMultisampledFramebuffer:Array.isArray(Me)?B=Me[G]:B=Me,ee.copy(b.viewport),Se.copy(b.scissor),Ue=b.scissorTest}else ee.copy(Pe).multiplyScalar(me).floor(),Se.copy(je).multiplyScalar(me).floor(),Ue=it;if(G!==0&&(B=V),ue.bindFramebuffer(N.FRAMEBUFFER,B)&&ue.drawBuffers(b,B),ue.viewport(ee),ue.scissor(Se),ue.setScissorTest(Ue),H){let le=Ce.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,le.__webglTexture,G)}else if(he){let le=I;for(let ge=0;ge<b.textures.length;ge++){let Me=Ce.get(b.textures[ge]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ge,Me.__webglTexture,G,le)}}else if(b!==null&&G!==0){let le=Ce.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,le.__webglTexture,G)}X=-1};function yh(b){let I=Ce.get(b);return(I.__readFormat!==b.format||I.__readType!==b.type)&&(I.__readFormat=b.format,I.__readType=b.type,I.__formatReadable=at.textureFormatReadable(b.format),I.__typeReadable=at.textureTypeReadable(b.type)),I}this.readRenderTargetPixels=function(b,I,G,B,H,he,xe,le=0){if(!(b&&b.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(ge=ge[xe],Array.isArray(ge)&&(ge=ge[0])),ge){ue.bindFramebuffer(N.FRAMEBUFFER,ge);try{let Me=b.textures[le],Fe=Me.format,Xe=Me.type;b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+le);let ve=yh(Me);if(ve.__formatReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ve.__typeReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-B&&G>=0&&G<=b.height-H&&N.readPixels(I,G,B,H,ne.convert(Fe),ne.convert(Xe),he)}finally{let Me=Q!==null?Ce.get(Q).__webglFramebuffer:null;ue.bindFramebuffer(N.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(b,I,G,B,H,he,xe,le=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(ge=ge[xe],Array.isArray(ge)&&(ge=ge[0])),ge)if(I>=0&&I<=b.width-B&&G>=0&&G<=b.height-H){ue.bindFramebuffer(N.FRAMEBUFFER,ge);let Me=b.textures[le],Fe=Me.format,Xe=Me.type;b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+le);let ve=yh(Me);if(ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,qe),N.bufferData(N.PIXEL_PACK_BUFFER,he.byteLength,N.STREAM_READ),N.readPixels(I,G,B,H,ne.convert(Fe),ne.convert(Xe),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let pt=Q!==null?Ce.get(Q).__webglFramebuffer:null;ue.bindFramebuffer(N.FRAMEBUFFER,pt);let rt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Xu(N,rt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,qe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,he),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(qe),N.deleteSync(rt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,I=null,G=0){let B=Math.pow(2,-G),H=Math.floor(b.image.width*B),he=Math.floor(b.image.height*B),xe=I!==null?I.x:0,le=I!==null?I.y:0;Ne.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,xe,le,H,he),ue.unbindTexture()},this.copyTextureToTexture=function(b,I,G=null,B=null,H=0,he=0){let xe,le,ge,Me,Fe,Xe,ve,qe,pt,rt=b.isCompressedTexture?b.mipmaps[he]:b.image;if(G!==null)xe=G.max.x-G.min.x,le=G.max.y-G.min.y,ge=G.isBox3?G.max.z-G.min.z:1,Me=G.min.x,Fe=G.min.y,Xe=G.isBox3?G.min.z:0;else{let Ye=Math.pow(2,-H);xe=Math.floor(rt.width*Ye),le=Math.floor(rt.height*Ye),b.isDataArrayTexture?ge=rt.depth:b.isData3DTexture?ge=Math.floor(rt.depth*Ye):ge=1,Me=0,Fe=0,Xe=0}B!==null?(ve=B.x,qe=B.y,pt=B.z):(ve=0,qe=0,pt=0);let nt=ne.convert(I.format),Ot=ne.convert(I.type),be;I.isData3DTexture?(Ne.setTexture3D(I,0),be=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ne.setTexture2DArray(I,0),be=N.TEXTURE_2D_ARRAY):(Ne.setTexture2D(I,0),be=N.TEXTURE_2D),ue.activeTexture(N.TEXTURE0),ue.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),ue.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),ue.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);let Vt=ue.getParameter(N.UNPACK_ROW_LENGTH),Ke=ue.getParameter(N.UNPACK_IMAGE_HEIGHT),Cn=ue.getParameter(N.UNPACK_SKIP_PIXELS),Bt=ue.getParameter(N.UNPACK_SKIP_ROWS),Br=ue.getParameter(N.UNPACK_SKIP_IMAGES);ue.pixelStorei(N.UNPACK_ROW_LENGTH,rt.width),ue.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rt.height),ue.pixelStorei(N.UNPACK_SKIP_PIXELS,Me),ue.pixelStorei(N.UNPACK_SKIP_ROWS,Fe),ue.pixelStorei(N.UNPACK_SKIP_IMAGES,Xe);let ln=b.isDataArrayTexture||b.isData3DTexture,Pn=I.isDataArrayTexture||I.isData3DTexture;if(b.isDepthTexture){let Ye=Ce.get(b),Nt=Ce.get(I),gi=Ce.get(Ye.__renderTarget),ht=Ce.get(Nt.__renderTarget);ue.bindFramebuffer(N.READ_FRAMEBUFFER,gi.__webglFramebuffer),ue.bindFramebuffer(N.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let Ct=0;Ct<ge;Ct++)ln&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.get(b).__webglTexture,H,Xe+Ct),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.get(I).__webglTexture,he,pt+Ct)),N.blitFramebuffer(Me,Fe,Me+xe,Fe+le,ve,qe,ve+xe,qe+le,N.DEPTH_BUFFER_BIT,N.NEAREST);ue.bindFramebuffer(N.READ_FRAMEBUFFER,null),ue.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||Ce.has(b)){let Ye=Ce.get(b),Nt=Ce.get(I);ue.bindFramebuffer(N.READ_FRAMEBUFFER,L),ue.bindFramebuffer(N.DRAW_FRAMEBUFFER,W);for(let gi=0;gi<ge;gi++)ln?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ye.__webglTexture,H,Xe+gi):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ye.__webglTexture,H),Pn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Nt.__webglTexture,he,pt+gi):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Nt.__webglTexture,he),H!==0?N.blitFramebuffer(Me,Fe,Me+xe,Fe+le,ve,qe,ve+xe,qe+le,N.COLOR_BUFFER_BIT,N.NEAREST):Pn?N.copyTexSubImage3D(be,he,ve,qe,pt+gi,Me,Fe,xe,le):N.copyTexSubImage2D(be,he,ve,qe,Me,Fe,xe,le);ue.bindFramebuffer(N.READ_FRAMEBUFFER,null),ue.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Pn?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(be,he,ve,qe,pt,xe,le,ge,nt,Ot,rt.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(be,he,ve,qe,pt,xe,le,ge,nt,rt.data):N.texSubImage3D(be,he,ve,qe,pt,xe,le,ge,nt,Ot,rt):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,he,ve,qe,xe,le,nt,Ot,rt.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,he,ve,qe,rt.width,rt.height,nt,rt.data):N.texSubImage2D(N.TEXTURE_2D,he,ve,qe,xe,le,nt,Ot,rt);ue.pixelStorei(N.UNPACK_ROW_LENGTH,Vt),ue.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ke),ue.pixelStorei(N.UNPACK_SKIP_PIXELS,Cn),ue.pixelStorei(N.UNPACK_SKIP_ROWS,Bt),ue.pixelStorei(N.UNPACK_SKIP_IMAGES,Br),he===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&N.generateMipmap(be),ue.unbindTexture()},this.initRenderTarget=function(b){Ce.get(b).__webglFramebuffer===void 0&&Ne.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ne.setTextureCube(b,0):b.isData3DTexture?Ne.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ne.setTexture2DArray(b,0):Ne.setTexture2D(b,0),ue.unbindTexture()},this.resetState=function(){F=0,k=0,Q=null,ue.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}};var Pd={type:"change"},Ic={type:"start"},Id={type:"end"},Na=new Ci,Ld=new Xt,V0=Math.cos(70*Tn.DEG2RAD),Tt=new E,ei=2*Math.PI,Ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Lc=1e-6,Ua=class extends Sr{constructor(e,t=null){super(e,t),this.state=Ze.NONE,this.target=new E,this.cursor=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mn.ROTATE,MIDDLE:Mn.DOLLY,RIGHT:Mn.PAN},this.touches={ONE:wn.ROTATE,TWO:wn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new E,this._lastQuaternion=new Lt,this._lastTargetPosition=new E,this._quat=new Lt().setFromUnitVectors(e.up,new E(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rs,this._sphericalDelta=new Rs,this._scale=1,this._panOffset=new E,this._rotateStart=new Te,this._rotateEnd=new Te,this._rotateDelta=new Te,this._panStart=new Te,this._panEnd=new Te,this._panDelta=new Te,this._dollyStart=new Te,this._dollyEnd=new Te,this._dollyDelta=new Te,this._dollyDirection=new E,this._mouse=new Te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=X0.bind(this),this._onPointerDown=W0.bind(this),this._onPointerUp=q0.bind(this),this._onContextMenu=Q0.bind(this),this._onMouseWheel=K0.bind(this),this._onKeyDown=Z0.bind(this),this._onTouchStart=J0.bind(this),this._onTouchMove=j0.bind(this),this._onMouseDown=Y0.bind(this),this._onMouseMove=$0.bind(this),this._interceptControlDown=ex.bind(this),this._interceptControlUp=tx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ze.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pd),this.update(),this.state=Ze.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Tt.copy(t).sub(this.target),Tt.applyQuaternion(this._quat),this._spherical.setFromVector3(Tt),this.autoRotate&&this.state===Ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=ei:i>Math.PI&&(i-=ei),n<-Math.PI?n+=ei:n>Math.PI&&(n-=ei),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Tt.setFromSpherical(this._spherical),Tt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Tt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Tt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new E(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new E(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Tt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Na.origin.copy(this.object.position),Na.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Na.direction))<V0?this.object.lookAt(this.target):(Ld.setFromNormalAndCoplanarPoint(this.object.up,this.target),Na.intersectPlane(Ld,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Lc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Lc||this._lastTargetPosition.distanceToSquared(this.target)>Lc?(this.dispatchEvent(Pd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ei/60*this.autoRotateSpeed*e:ei/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Tt.setFromMatrixColumn(t,0),Tt.multiplyScalar(-e),this._panOffset.add(Tt)}_panUp(e,t){this.screenSpacePanning===!0?Tt.setFromMatrixColumn(t,1):(Tt.setFromMatrixColumn(t,0),Tt.crossVectors(this.object.up,Tt)),Tt.multiplyScalar(e),this._panOffset.add(Tt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let n=this.object.position;Tt.copy(n).sub(this.target);let r=Tt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),n=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=n/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ei*this._rotateDelta.x/t.clientHeight),this._rotateUp(ei*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ei*this._rotateDelta.x/t.clientHeight),this._rotateUp(ei*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function W0(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function X0(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function q0(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Id),this.state=Ze.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Y0(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Mn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ze.DOLLY;break;case Mn.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ze.ROTATE}break;case Mn.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ze.PAN}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(Ic)}function $0(s){switch(this.state){case Ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function K0(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ze.NONE||(s.preventDefault(),this.dispatchEvent(Ic),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Id))}function Z0(s){this.enabled!==!1&&this._handleKeyDown(s)}function J0(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case wn.ROTATE:if(this.enableRotate===!1){this.state=Ze.NONE;break}this._handleTouchStartRotate(s),this.state=Ze.TOUCH_ROTATE;break;case wn.PAN:if(this.enablePan===!1){this.state=Ze.NONE;break}this._handleTouchStartPan(s),this.state=Ze.TOUCH_PAN;break;default:this.state=Ze.NONE}break;case 2:switch(this.touches.TWO){case wn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ze.TOUCH_DOLLY_PAN;break;case wn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ze.TOUCH_DOLLY_ROTATE;break;default:this.state=Ze.NONE}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(Ic)}function j0(s){switch(this._trackPointer(s),this.state){case Ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ze.NONE}}function Q0(s){this.enabled!==!1&&s.preventDefault()}function ex(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tx(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Dc(s,e){if(e===ec)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Us||e===Lr){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let i=t.count-2,n=[];if(e===Us)for(let r=1;r<=i;r++)n.push(t.getX(0)),n.push(t.getX(r)),n.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(n.push(t.getX(r)),n.push(t.getX(r+1)),n.push(t.getX(r+2))):(n.push(t.getX(r+2)),n.push(t.getX(r+1)),n.push(t.getX(r)));return n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Dd(s){let e=new Map,t=new Map,i=s.clone();return Nd(s,i,function(n,r){e.set(r,n),t.set(n,r)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;let r=n,o=e.get(n),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function Nd(s,e,t){t(s,e);for(let i=0;i<s.children.length;i++)Nd(s.children[i],e.children[i],t)}var Fa=class extends Ii{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zc(t)}),this.register(function(t){return new Hc(t)}),this.register(function(t){return new Gc(t)}),this.register(function(t){return new Jc(t)}),this.register(function(t){return new jc(t)}),this.register(function(t){return new Qc(t)}),this.register(function(t){return new Wc(t)}),this.register(function(t){return new Xc(t)}),this.register(function(t){return new qc(t)}),this.register(function(t){return new Yc(t)}),this.register(function(t){return new kc(t)}),this.register(function(t){return new $c(t)}),this.register(function(t){return new Vc(t)}),this.register(function(t){return new Zc(t)}),this.register(function(t){return new Kc(t)}),this.register(function(t){return new Oc(t)}),this.register(function(t){return new Oa(t,Ve.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Oa(t,Ve.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new eh(t)})}load(e,t,i,n){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=sn.extractUrlBase(e);o=sn.resolveURL(c,this.path)}else o=sn.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){n?n(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Es(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===kd){try{o[Ve.KHR_BINARY_GLTF]=new th(e)}catch(u){n&&n(u);return}r=JSON.parse(o[Ve.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new lh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ve.KHR_MATERIALS_UNLIT:o[u]=new Bc;break;case Ve.KHR_DRACO_MESH_COMPRESSION:o[u]=new ih(r,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:o[u]=new nh;break;case Ve.KHR_MESH_QUANTIZATION:o[u]=new sh;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,n)}parseAsync(e,t){let i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}};function ix(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function ut(s,e,t){let i=s.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Oc=class{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,n=t.cache.get(i);if(n)return n;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new _e(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],qt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Gn(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Mi(h),c.distance=u;break;case"spot":c=new _r(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Bi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},Bc=class{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return Mt}extendParams(e,t,i){let n=[];e.color=new _e(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],qt),e.opacity=o[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,xt))}return Promise.all(n)}},kc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=ut(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},zc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return ut(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let i=ut(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(n.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(r,r)}return Promise.all(n)}},Hc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return ut(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let i=ut(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(n)}},Gc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DISPERSION}getMaterialType(e){return ut(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let i=ut(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},Vc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return ut(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let i=ut(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(n)}},Wc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){return ut(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let i=ut(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.sheenColor=new _e(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],qt)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,xt)),i.sheenRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(n)}},Xc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return ut(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let i=ut(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&n.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(n)}},qc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){return ut(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let i=ut(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new _e().setRGB(r[0],r[1],r[2],qt),Promise.all(n)}},Yc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){return ut(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let i=ut(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},$c=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){return ut(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let i=ut(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new _e().setRGB(r[0],r[1],r[2],qt),i.specularColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,xt)),Promise.all(n)}},Kc=class{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){return ut(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let i=ut(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&n.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(n)}},Zc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return ut(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let i=ut(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&n.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(n)}},Jc=class{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let r=n.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},jc=class{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=n.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}},Qc=class{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=n.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}},Oa=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}},eh=class{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=t.meshes[i.mesh];for(let c of n.primitives)if(c.mode!==mi.TRIANGLES&&c.mode!==mi.TRIANGLE_STRIP&&c.mode!==mi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let x=new Ie,m=new E,p=new Lt,v=new E(1,1,1),A=new kn(g.geometry,g.material,d);for(let T=0;T<d;T++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,T),l.SCALE&&v.fromBufferAttribute(l.SCALE,T),A.setMatrixAt(T,x.compose(m,p,v));let S=null;for(let T in l)if(T==="_COLOR_0"){let w=l[T];A.instanceColor=new Zi(w.array,w.itemSize,w.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(S===null){let _=A.geometry;S=new St,S.name=_.name;for(let M in _.attributes)S.setAttribute(M,_.attributes[M]);for(let M in _.morphAttributes)S.morphAttributes[M]=_.morphAttributes[M];_.index!==null&&S.setIndex(_.index),S.morphTargetsRelative=_.morphTargetsRelative;for(let M of _.groups)S.addGroup(M.start,M.count,M.materialIndex);_.boundingBox!==null&&(S.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(S.boundingSphere=_.boundingSphere.clone()),S.drawRange.start=_.drawRange.start,S.drawRange.count=_.drawRange.count,S.userData=Object.assign({},_.userData),A.geometry=S}let w=l[T];S.setAttribute(T,new Zi(w.array,w.itemSize,w.normalized))}tt.prototype.copy.call(A,g),this.parser.assignFinalMaterial(A),f.push(A)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},kd="glTF",Fr=12,Ud={JSON:1313821514,BIN:5130562},th=class{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Fr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-Fr,r=new DataView(e,Fr),o=0;for(;o<n;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Ud.JSON){let c=new Uint8Array(e,Fr+o,a);this.content=i.decode(c)}else if(l===Ud.BIN){let c=Fr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ih=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=oh[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=oh[h]||h.toLowerCase();if(o[h]!==void 0){let d=i.accessors[e.attributes[h]],f=Bs[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){n.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(f)},a,c,qt,d)})})}},nh=class{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},sh=class{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}},Ba=class extends Li{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let o=0;o!==n;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=n-t,u=(i-t)/h,d=u*u,f=d*u,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,v=1-m,A=p-d+u;for(let S=0;S!==a;S++){let T=o[x+S+a],w=o[x+S+l]*h,_=o[g+S+a],M=o[g+S]*h;r[S]=v*T+A*w+m*_+p*M}return r}},nx=new Lt,rh=class extends Ba{interpolate_(e,t,i,n){let r=super.interpolate_(e,t,i,n);return nx.fromArray(r).normalize().toArray(r),r}},mi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Bs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fd={9728:dt,9729:bt,9984:Go,9985:Ds,9986:qn,9987:fi},Od={33071:ui,33648:ds,10497:gn},Nc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},oh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},An={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sx={CUBICSPLINE:void 0,LINEAR:On,STEP:Fn},Uc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ht({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Di})),s.DefaultMaterial}function Kn(s,e,t){for(let i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Bi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ox(s,e,t){let i=!1,n=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(n){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return i&&(s.morphAttributes.position=h),n&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function ax(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lx(s){let e,t=s.extensions&&s.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Fc(t.attributes):e=s.indices+":"+Fc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,n=s.targets.length;i<n;i++)e+=":"+Fc(s.targets[i]);return e}function Fc(s){let e="",t=Object.keys(s).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+s[t[i]]+";";return e}function ah(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function cx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var hx=new Ie,lh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ix,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||r&&o<98?(this.textureLoader=new pr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new yr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Es(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][n.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:n.asset,parser:i,userData:{}};return Kn(r,a,n),Bi(a,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let o=t[n].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let n=0,r=e.length;n<r;n++){let o=e[n];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let n=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let n=e(t[i]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let n=0;n<t.length;n++){let r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(r,o){i.load(sn.resolveURL(t.uri,n.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){let t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){let o=Nc[n.type],a=Bs[n.componentType],l=n.normalized===!0,c=new a(n.count*o);return Promise.resolve(new Ut(c,o,l))}let r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Nc[n.type],c=Bs[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),v="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count,A=t.cache.get(v);A||(x=new c(a,p*f,n.count*f/h),A=new vs(x,f/h),t.cache.add(v,A)),m=new bs(A,l,d%f/h,g)}else a===null?x=new c(n.count*l):x=new c(a,d,n.count*l),m=new Ut(x,l,g);if(n.sparse!==void 0){let p=Nc.SCALAR,v=Bs[n.sparse.indices.componentType],A=n.sparse.indices.byteOffset||0,S=n.sparse.values.byteOffset||0,T=new v(o[1],A,n.sparse.count*p),w=new c(o[2],S,n.sparse.count*l);a!==null&&(m=new Ut(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let _=0,M=T.length;_<M;_++){let U=T[_];if(m.setX(U,w[_*l]),l>=2&&m.setY(U,w[_*l+1]),l>=3&&m.setZ(U,w[_*l+2]),l>=4&&m.setW(U,w[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let n=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Fd[d.magFilter]||bt,h.minFilter=Fd[d.minFilter]||fi,h.wrapS=Od[d.wrapS]||gn,h.wrapT=Od[d.wrapT]||gn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==dt&&h.minFilter!==bt,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=n.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=i.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(f,g){t.parse(d,f,g)})});else{if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,g){let x=f;t.isImageBitmapLoader===!0&&(x=function(m){let p=new It(m);p.needsUpdate=!0,f(p)}),t.load(sn.resolveURL(d,r.path),x,void 0,g)})})}let u=h.then(function(d){return c===!0&&a.revokeObjectURL(l),Bi(d,o),d.userData.mimeType=o.mimeType||cx(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,n){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Ve.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return n!==void 0&&(o.colorSpace=n),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new ws,Jt.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new xn,Jt.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(n||r||o){let a="ClonedMaterial:"+i.uuid+":";n&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Ht}loadMaterial(e){let t=this,i=this.json,n=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Ve.KHR_MATERIALS_UNLIT]){let u=n[Ve.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new _e(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],qt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,xt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ft);let h=r.alphaMode||Uc.OPAQUE;if(h===Uc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Uc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Mt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Te(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Mt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Mt){let u=r.emissiveFactor;a.emissive=new _e().setRGB(u[0],u[1],u[2],qt)}return r.emissiveTexture!==void 0&&o!==Mt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,xt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Bi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Kn(n,u,r),u})}createUniqueName(e){let t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,n=this.primitiveCache;function r(a){return i[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Bd(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=lx(c),u=n[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Bd(new St,c,t),c.mode===mi.TRIANGLE_STRIP?d=d.then(f=>Dc(f,Lr)):c.mode===mi.TRIANGLE_FAN&&(d=d.then(f=>Dc(f,Us))),n[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,n=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?rx(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=o[f],p,v=c[f];if(m.mode===mi.TRIANGLES||m.mode===mi.TRIANGLE_STRIP||m.mode===mi.TRIANGLE_FAN||m.mode===void 0){let A=r.isSkinnedMesh===!0,S=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");A&&S===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=A&&S?new nr(x,v):new $e(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===mi.LINES)p=new rr(x,v);else if(m.mode===mi.LINE_STRIP)p=new Ji(x,v);else if(m.mode===mi.LINE_LOOP)p=new or(x,v);else if(m.mode===mi.POINTS)p=new ar(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ax(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Bi(p,r),m.extensions&&Kn(n,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Kn(n,u[0],r),u[0];let d=new vt;r.extensions&&Kn(n,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new yt(Tn.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Hn(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Bi(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let r=n.pop(),o=n,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new Ie;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new sr(a,l)})}loadAnimation(e){let t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){let f=n.channels[u],g=n.samplers[f.sampler],x=f.target,m=x.node,p=n.parameters!==void 0?n.parameters[g.input]:g.input,v=n.parameters!==void 0?n.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let A=0,S=d.length;A<S;A++){let T=d[A],w=f[A],_=g[A],M=x[A],U=m[A];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let C=i._createAnimationTracks(T,w,_,M,U);if(C)for(let D=0;D<C.length;D++)p.push(C[D])}let v=new fr(r,void 0,p);return Bi(v,n),v})}createNodeMesh(e){let t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=n.weights.length;l<c;l++)a.morphTargetInfluences[l]=n.weights[l]}),o})}loadNode(e){let t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=n.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));let l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,hx)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new E().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?n.createUniqueName(r.name):"",a=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(n.getDependency("camera",r.camera).then(function(c){return n._getNodeRef(n.cameraCache,r.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Ss:c.length>1?h=new vt:c.length===1?h=c[0]:h=new tt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Bi(h,r),r.extensions&&Kn(i,h,r),r.matrix!==void 0){let u=new Ie;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(r.mesh!==void 0&&n.meshCache.refs[r.mesh]>1){let u=n.associations.get(h);n.associations.set(h,{...u})}return n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],n=this,r=new vt;i.name&&(r.name=n.createUniqueName(i.name)),Bi(r,i),i.extensions&&Kn(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(n.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Dd(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of n.associations)(d instanceof Jt||d instanceof It)&&u.set(d,f);return h.traverse(d=>{let f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=c(r),r})}_createAnimationTracks(e,t,i,n,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}An[r.path]===An.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(An[r.path]){case An.weights:h=en;break;case An.rotation:h=tn;break;case An.translation:case An.scale:h=bn;break;default:i.itemSize===1?h=en:h=bn;break}let u=n.interpolation!==void 0?sx[n.interpolation]:On,d=this._getArrayFromAccessor(i);for(let f=0,g=l.length;f<g;f++){let x=new h(l[f]+"."+An[r.path],t.array,d,u);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=ah(t.constructor),n=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let n=this instanceof tn?rh:Ba;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ux(s,e,t){let i=e.attributes,n=new si;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(n.set(new E(l[0],l[1],l[2]),new E(c[0],c[1],c[2])),a.normalized){let h=ah(Bs[a.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new E,l=new E;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=ah(Bs[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(a)}s.boundingBox=n;let o=new Zt;n.getCenter(o.center),o.radius=n.min.distanceTo(n.max)/2,s.boundingSphere=o}function Bd(s,e,t){let i=e.attributes,n=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in i){let a=oh[o]||o.toLowerCase();a in s.attributes||n.push(r(i[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});n.push(o)}return Ge.workingColorSpace!==qt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ge.workingColorSpace}" not supported.`),Bi(s,e),ux(s,e,t),Promise.all(n).then(function(){return e.targets!==void 0?ox(s,e.targets,t):s})}var zd=new E,dx=new Lt,Hd=new E,ka=class extends tt{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var ki=new Ie,fx=new Ie,za=class{constructor(e={}){let t=this,i,n,r,o,a={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let h=document.createElement("div");h.style.transformStyle="preserve-3d",c.appendChild(h),this.getSize=function(){return{width:i,height:n}},this.render=function(m,p){let v=p.projectionMatrix.elements[5]*o;p.view&&p.view.enabled?(c.style.transform=`translate( ${-p.view.offsetX*(i/p.view.width)}px, ${-p.view.offsetY*(n/p.view.height)}px )`,c.style.transform+=`scale( ${p.view.fullWidth/p.view.width}, ${p.view.fullHeight/p.view.height} )`):c.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let A,S;p.isOrthographicCamera&&(A=-(p.right+p.left)/2,S=(p.top+p.bottom)/2);let T=p.view&&p.view.enabled?p.view.height/p.view.fullHeight:1,w=p.isOrthographicCamera?`scale( ${T} )scale(`+v+")translate("+u(A)+"px,"+u(S)+"px)"+d(p.matrixWorldInverse):`scale( ${T} )translateZ(`+v+"px)"+d(p.matrixWorldInverse),M=(p.isPerspectiveCamera?"perspective("+v+"px) ":"")+w+"translate("+r+"px,"+o+"px)";a.camera.style!==M&&(h.style.transform=M,a.camera.style=M),x(m,m,p,w)},this.setSize=function(m,p){i=m,n=p,r=i/2,o=n/2,l.style.width=m+"px",l.style.height=p+"px",c.style.width=m+"px",c.style.height=p+"px",h.style.width=m+"px",h.style.height=p+"px"};function u(m){return Math.abs(m)<1e-10?0:m}function d(m){let p=m.elements;return"matrix3d("+u(p[0])+","+u(-p[1])+","+u(p[2])+","+u(p[3])+","+u(p[4])+","+u(-p[5])+","+u(p[6])+","+u(p[7])+","+u(p[8])+","+u(-p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(-p[13])+","+u(p[14])+","+u(p[15])+")"}function f(m){let p=m.elements;return"translate(-50%,-50%)"+("matrix3d("+u(p[0])+","+u(p[1])+","+u(p[2])+","+u(p[3])+","+u(-p[4])+","+u(-p[5])+","+u(-p[6])+","+u(-p[7])+","+u(p[8])+","+u(p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(p[13])+","+u(p[14])+","+u(p[15])+")")}function g(m){m.isCSS3DObject&&(m.element.style.display="none");for(let p=0,v=m.children.length;p<v;p++)g(m.children[p])}function x(m,p,v,A){if(m.visible===!1){g(m);return}if(m.isCSS3DObject){let S=m.layers.test(v.layers)===!0,T=m.element;if(T.style.display=S===!0?"":"none",S===!0){m.onBeforeRender(t,p,v);let w;m.isCSS3DSprite?(ki.copy(v.matrixWorldInverse),ki.transpose(),m.rotation2D!==0&&ki.multiply(fx.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(zd,dx,Hd),ki.setPosition(zd),ki.scale(Hd),ki.elements[3]=0,ki.elements[7]=0,ki.elements[11]=0,ki.elements[15]=1,w=f(ki)):w=f(m.matrixWorld);let _=a.objects.get(m);if(_===void 0||_.style!==w){T.style.transform=w;let M={style:w};a.objects.set(m,M)}T.parentNode!==h&&h.appendChild(T),m.onAfterRender(t,p,v)}}for(let S=0,T=m.children.length;S<T;S++)x(m.children[S],p,v,A)}}};var Ha=class{constructor(e){this.scene=e,this.streams=[],this.meshes={},this.particleCountPerStream=48,this.paths={solar:new yn([new E(2.5,6.454,-6.2),new E(4.1,6.534,-6.2),new E(4.15,6.709,-5.8),new E(4.15,5.25,-5.8),new E(5.26,5.25,-1.1),new E(5.26,2.45,-1.1),new E(5.28,2.02,-.85),new E(5.28,1.65,-.95)]),grid:new yn([new E(6.4,6.95,6.95),new E(6.12,6.25,5.2),new E(5.86,5.525,3.465),new E(5.55,5.15,1.7),new E(5.32,5,-.02),new E(5.32,3,.04),new E(5.32,1.1,.04),new E(5.26,1.1,-.55),new E(5.27,.95,-.6)]),ev:new yn([new E(5.19,1.12,.05),new E(5.195,1.009,.15),new E(5.2,.91,.25),new E(5.205,.823,.35),new E(5.21,.748,.45),new E(5.215,.684,.55),new E(5.22,.633,.65),new E(5.225,.593,.75),new E(5.23,.565,.85),new E(5.235,.549,.95),new E(5.24,.545,1.05),new E(5.245,.553,1.15),new E(5.25,.573,1.25),new E(5.255,.604,1.35),new E(5.26,.648,1.45),new E(5.265,.703,1.55),new E(5.27,.77,1.65)]),gas:new yn([new E(-1.3,1.05,-8),new E(-1.3,.22,-8),new E(-.65,.22,-8.15),new E(-.08,.22,-8.32),new E(-.08,1.05,-8.32),new E(.301,1.05,-8.32),new E(.601,1.05,-8.32),new E(.601,1.35,-8.32)])},this.initStreams()}initStreams(){this.streamDefs={solar:{curve:this.paths.solar,color:new _e(16758528),baseSpeed:.4,size:.058},grid:{curve:this.paths.grid,color:new _e(54015),baseSpeed:.38,size:.065},ev:{curve:this.paths.ev,color:new _e(62875),baseSpeed:.44,size:.06,particleCount:5},gas:{curve:this.paths.gas,color:new _e(16739584),baseSpeed:.32,size:.052}};let e=new vn(1,12,12);for(let[t,i]of Object.entries(this.streamDefs)){let n=new Mt({color:i.color,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1,blending:Ls}),r=i.particleCount||this.particleCountPerStream,o=new kn(e,n,r);o.instanceMatrix.setUsage(rc),o.renderOrder=999;let a=new tt;for(let l=0;l<r;l++){let c=l/r,h=i.curve.getPointAt(c);a.position.copy(h),a.scale.setScalar(i.size),a.updateMatrix(),o.setMatrixAt(l,a.matrix)}o.instanceMatrix.needsUpdate=!0,this.scene.add(o),this.streams.push({id:t,mesh:o,def:i,dummy:a,offset:0})}this.glowLines={};for(let[t,i]of Object.entries(this.streamDefs)){let n=i.curve.getPoints(100),r=new St().setFromPoints(n),o=new xn({color:i.color,transparent:!0,opacity:.5,depthTest:!1,depthWrite:!1,blending:Ls}),a=new Ji(r,o);a.renderOrder=998,this.scene.add(a),this.glowLines[t]=a}}bindMeshes(e){e.traverse(t=>{if(!t.isMesh)return;let i=t.name;i.includes("Roof_Solar_Panels")?(this.meshes.solarPanels=t,t.material=t.material.clone()):i.includes("Solar_PV_Cabling")?(this.meshes.solarCable=t,t.material=t.material.clone()):i.includes("EV_Charger")?(this.meshes.evCharger=t,t.material=t.material.clone()):i.includes("EV_Charging_Cable")?(this.meshes.evCable=t,t.material=t.material.clone()):i.includes("Car_Peugeot_e2008_Body")?this.meshes.peugeotBody=t:i.includes("Car_Peugeot_e2008_Lights")?(this.meshes.peugeotLights=t,t.material=t.material.clone()):i.includes("Car_Peugeot_e2008_Taillights")?(this.meshes.peugeotTaillights=t,t.material=t.material.clone()):i.includes("Kitchen_Combi_Boiler")?(this.meshes.boiler=t,t.material=t.material.clone()):i.includes("Kitchen_Boiler_Pipes")||i.includes("Gas_Supply_Pipes")?(this.meshes.gasPipes||(this.meshes.gasPipes=[]),t.material=t.material.clone(),this.meshes.gasPipes.push(t)):(i.includes("Entrance_Meter_Box")||i.includes("Entrance_Meter_Fittings"))&&(this.meshes.meterBox||(this.meshes.meterBox=[]),t.material=t.material.clone(),this.meshes.meterBox.push(t))})}update(e,t){if(!t)return;function i(c){let h=Number(c||0);return isNaN(h)?0:Math.abs(h)>=20?h/1e3:h}let n=i(t.solar?.power_kw),r=i(t.octopus_electric?.power_kw),o=i(t.ev?.charger_power_kw),a=i(t.octopus_gas?.power_kw),l=!!((t.octopus_gas?.is_active||a>.05)&&t.octopus_gas?.boiler_status!=="off");for(let c of this.streams){let{id:h,mesh:u,def:d,dummy:f}=c,g=0,x=1;if(h==="solar")if(n>.02){let p=Math.min(n/4,2.5);g=Math.max(p*d.baseSpeed,.04),x=1}else g=0;else if(h==="grid"){let p=Math.abs(r),v=r<-.02||!!t.octopus_electric?.is_exporting&&p>.02;if(p>.02){let A=Math.min(p/3.5,2.5);if(g=Math.max(A*d.baseSpeed,.04),v){x=-1;let S=new _e(65416);u.material.color.lerp(S,.2),this.glowLines[h]&&this.glowLines[h].material.color.lerp(S,.2)}else{x=1;let S=new _e(54015);u.material.color.lerp(S,.2),this.glowLines[h]&&this.glowLines[h].material.color.lerp(S,.2)}}else g=0}else if(h==="ev")if(o>.04){let p=Math.min(o/7.2,2.5);g=Math.max(p*d.baseSpeed,.04),x=1}else g=0;else if(h==="gas")if(l&&a>.05){let p=Math.min(a/2,2.5);g=Math.max(p*d.baseSpeed,.04),x=1}else g=0;if(g===0){u.material.opacity=.2,this.glowLines[h]&&(this.glowLines[h].material.opacity=.12);continue}u.material.opacity=.95,this.glowLines[h]&&(this.glowLines[h].material.opacity=.5),c.offset+=e*g*x,c.offset>1&&(c.offset-=1),c.offset<0&&(c.offset+=1);let m=d.particleCount||this.particleCountPerStream;for(let p=0;p<m;p++){let v=(p/m+c.offset)%1;v<0&&(v+=1);let A=d.curve.getPointAt(v);f.position.copy(A);let S=Math.sin(v*Math.PI*4+e*5);f.scale.setScalar(d.size*(.9+.25*S)),f.updateMatrix(),u.setMatrixAt(p,f.matrix)}u.instanceMatrix.needsUpdate=!0}this.updateMeshGlows(n,r,o,o>.04,l)}updateMeshGlows(e,t,i,n,r){if(this.meshes.solarPanels?.material){let o=this.meshes.solarPanels.material;o.emissive=o.emissive||new _e;let a=e>.05?Math.min(e/2.2,1.3):0;o.emissive.setHex(16758528),o.emissiveIntensity=Tn.lerp(o.emissiveIntensity||0,a,.08)}if(this.meshes.solarCable?.material){let o=this.meshes.solarCable.material;o.emissive=o.emissive||new _e,o.emissive.setHex(16755200),o.emissiveIntensity=e>.05?.8:0}if(this.meshes.evCable?.material){let o=this.meshes.evCable.material;o.emissive=o.emissive||new _e,o.emissive.setHex(62875),o.emissiveIntensity=n?.9:0}if(this.meshes.peugeotLights?.material){let o=this.meshes.peugeotLights.material;o.emissive=o.emissive||new _e,o.emissive.setHex(62875);let a=n?Math.sin(Date.now()*.003)*.35+.65:0;o.emissiveIntensity=a}if(this.meshes.boiler?.material){let o=this.meshes.boiler.material;o.emissive=o.emissive||new _e,o.emissive.setHex(16733440),o.emissiveIntensity=r?.8:0}if(this.meshes.gasPipes)for(let o of this.meshes.gasPipes)o.material&&(o.material.emissive=o.material.emissive||new _e,o.material.emissive.setHex(16742144),o.material.emissiveIntensity=r?.6:0)}};var Va=[{id:"lounge",name:"Living Room Ceiling",floor:"ground",pos:{x:1.88,y:2.15,z:-2.35},range:7.5,maxIntensity:4.2,defaultColor:16769689,entity_id:"light.living_room"},{id:"kitchen",name:"Kitchen Ceiling",floor:"ground",pos:{x:1.8,y:2.15,z:-7.4},range:7,maxIntensity:4.5,defaultColor:16773334,entity_id:"light.kitchen"},{id:"dining",name:"Dining Room",floor:"ground",pos:{x:4.3,y:2.15,z:-7.4},range:6.5,maxIntensity:4,defaultColor:16770744,entity_id:"light.dining_room"},{id:"hallway",name:"Hall & Stairs",floor:"ground",pos:{x:4.2,y:2.15,z:-2.2},range:6,maxIntensity:3.8,defaultColor:16772565,entity_id:"light.hallway"},{id:"wc",name:"Downstairs WC",floor:"ground",pos:{x:.92,y:2.15,z:-5.32},range:4.5,maxIntensity:3.5,defaultColor:16773596,entity_id:"light.downstairs_wc"},{id:"living_lamp",name:"Living Room Lamp",floor:"ground",pos:{x:.6,y:1.58,z:-.65},range:5.5,maxIntensity:3.8,defaultColor:16766336,entity_id:"light.living_room_lamp",isFloorLamp:!0},{id:"master_bedroom",name:"Master Bedroom",floor:"first",pos:{x:1.9,y:4.55,z:-2.1},range:7.5,maxIntensity:4.2,defaultColor:16769689,entity_id:"light.master_bedroom"},{id:"ensuite",name:"Master En-Suite",floor:"first",pos:{x:4.4,y:4.55,z:-1.22},range:5,maxIntensity:3.6,defaultColor:16774890,entity_id:"light.ensuite"},{id:"bedroom2",name:"Bedroom 2 (Guestroom)",floor:"first",pos:{x:1.75,y:4.55,z:-7.3},range:6.8,maxIntensity:4,defaultColor:16769689,entity_id:"light.bedroom_2"},{id:"bedroom3",name:"Bedroom 3 (Nursery / Office)",floor:"first",pos:{x:4.3,y:4.55,z:-7.3},range:6.8,maxIntensity:4,defaultColor:16769689,entity_id:"light.bedroom_3"},{id:"bathroom",name:"Family Bathroom",floor:"first",pos:{x:1.22,y:4.55,z:-4.95},range:5.5,maxIntensity:3.8,defaultColor:16775406,entity_id:"light.family_bathroom"},{id:"landing",name:"Upstairs Landing",floor:"first",pos:{x:3.3,y:4.55,z:-4.95},range:6,maxIntensity:3.8,defaultColor:16772565,entity_id:"light.landing"}],px={lounge:{name:"Living Room",pos:new E(1.88,2.15,-2.35),range:7.5,maxIntensity:4.2,defaultColor:16769689,boxCenter:new E(1.88,1.2,-2.35),boxSize:new E(3.1,2.35,4.05)},kitchen:{name:"Kitchen",pos:new E(1.8,2.15,-7.4),range:7,maxIntensity:4.5,defaultColor:16773334,boxCenter:new E(1.8,1.2,-7.41),boxSize:new E(2.95,2.35,2.3)},dining:{name:"Dining Room",pos:new E(4.3,2.15,-7.4),range:6.5,maxIntensity:4,defaultColor:16770744,boxCenter:new E(4.32,1.2,-7.41),boxSize:new E(2,2.35,2.3)},hallway:{name:"Hallway",pos:new E(4.2,2.15,-2.2),range:6,maxIntensity:3.8,defaultColor:16772565,boxCenter:new E(4.35,1.2,-2.35),boxSize:new E(1.85,2.35,4.05)},wc:{name:"Downstairs WC",pos:new E(.92,2.15,-5.32),range:4.5,maxIntensity:3.5,defaultColor:16773596,boxCenter:new E(.92,1.2,-5.32),boxSize:new E(1.22,2.35,1.82)},master_bedroom:{name:"Master Bedroom",pos:new E(1.9,4.55,-2.1),range:7.5,maxIntensity:4.2,defaultColor:16769689,boxCenter:new E(1.88,3.85,-2.08),boxSize:new E(3.1,2.25,3.52)},ensuite:{name:"Master En-Suite",pos:new E(4.4,4.55,-1.22),range:5,maxIntensity:3.6,defaultColor:16774890,boxCenter:new E(4.38,3.85,-1.23),boxSize:new E(1.85,2.25,1.82)},bedroom2:{name:"Bedroom 2",pos:new E(1.75,4.55,-7.3),range:6.8,maxIntensity:4,defaultColor:16769689,boxCenter:new E(1.75,3.85,-7.31),boxSize:new E(2.85,2.25,2.48)},bedroom3:{name:"Bedroom 3",pos:new E(4.3,4.55,-7.3),range:6.8,maxIntensity:4,defaultColor:16769689,boxCenter:new E(4.32,3.85,-7.31),boxSize:new E(2,2.25,2.48)},bathroom:{name:"Family Bathroom",pos:new E(1.22,4.55,-4.95),range:5.5,maxIntensity:3.8,defaultColor:16775406,boxCenter:new E(1.22,3.85,-4.95),boxSize:new E(1.82,2.25,2.18)},landing:{name:"Landing & Stairs",pos:new E(3.3,4.55,-4.95),range:6,maxIntensity:3.8,defaultColor:16772565,boxCenter:new E(3.3,3.85,-4.95),boxSize:new E(2.25,2.25,2.18)}},Ga=class{constructor(e,t={}){this.container=e,this.options={modelUrl:t.modelUrl||"Taylor_Wimpey_Blair.glb",nightMode:t.nightMode||!1,autoRotate:t.autoRotate||!1,...t},this.hotspots=[{id:"solar",name:"Solax Solar PV",pos:new E(2.8,6.6,-6.8)},{id:"grid",name:"Octopus Grid & Meter",pos:new E(5.3,2,-.85)},{id:"boiler",name:"Combi Boiler & Gas",pos:new E(.45,1.8,-8.3)},{id:"ev",name:"Peugeot e-2008 EV",pos:new E(5.25,1.2,1.35)},{id:"ev_charger",name:"myenergi Zappi Charger",pos:new E(5.2,1.45,.05)},{id:"thermostat_downstairs",name:"Downstairs Heating",pos:new E(3.6,1.45,-2.4)},{id:"thermostat_upstairs",name:"Upstairs Heating",pos:new E(3.3,4.05,-4.95)},{id:"appliance_fridge",name:"Kitchen Fridge Freezer",pos:new E(2.45,1.45,-6.65)},{id:"appliance_tv",name:"Living Room TV",pos:new E(3.35,1.4,-3.1)}],this.roofParts=[],this.topFloorMeshes=[],this.cuttableMeshes=[],this.cutawayMode="normal",this.customLights=this.options.customLights||Va,this.roomLights={},this.xrayActive=!1,this.nightMode=this.options.nightMode,this.targetCameraPos=null,this.targetLookAt=null,this.clickToPlaceCallback=null,this.boundOnClickToPlace=null,this.init()}init(){let e=this.container.clientWidth||800,t=this.container.clientHeight||500;this.scene=new ys,this.camera=new yt(40,e/t,.1,100),this.camera.position.set(15,12,17),this.renderer=new La({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ko,this.renderer.toneMapping=wr,this.renderer.toneMappingExposure=1.1,this.renderer.localClippingEnabled=!0,this.downstairsClipPlane=new Xt(new E(0,-1,0),2.52),this.container.appendChild(this.renderer.domElement),this.css3dScene=new ys,this.css3dRenderer=new za,this.css3dRenderer.setSize(e,t),this.css3dRenderer.domElement.style.position="absolute",this.css3dRenderer.domElement.style.top="0",this.css3dRenderer.domElement.style.left="0",this.css3dRenderer.domElement.style.width="100%",this.css3dRenderer.domElement.style.height="100%",this.css3dRenderer.domElement.style.pointerEvents="none",this.container.appendChild(this.css3dRenderer.domElement),this.controls=new Ua(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI/2-.04,this.controls.minDistance=3,this.controls.maxDistance=45,this.controls.target.set(2.5,2.5,0),this.controls.autoRotate=this.options.autoRotate,this.controls.autoRotateSpeed=.8,this.initLighting(),this.initAppliancesAndFurniture(),this.energyFlow=new Ha(this.scene),this.loadModelWithFallbacks(this.options.modelUrl),this.handleResize=this.onResize.bind(this),window.addEventListener("resize",this.handleResize),this.clock=new br,this.animate=this.animate.bind(this),this.isRunning=!0,requestAnimationFrame(this.animate)}initLighting(){this.ambientLight=new xr(16777215,this.nightMode?.35:1.1),this.scene.add(this.ambientLight),this.sunLight=new Gn(16775917,this.nightMode?.2:1.8),this.sunLight.position.set(16,22,12),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=60,this.sunLight.shadow.camera.left=-15,this.sunLight.shadow.camera.right=15,this.sunLight.shadow.camera.top=15,this.sunLight.shadow.camera.bottom=-15,this.sunLight.shadow.bias=-5e-4,this.scene.add(this.sunLight),this.hemiLight=new mr(12244978,4020805,this.nightMode?.2:.6),this.scene.add(this.hemiLight),this.meterPointLight=new Mi(58879,0,4),this.meterPointLight.position.set(5.28,1.4,-.85),this.scene.add(this.meterPointLight),this.carPointLight=new Mi(62875,0,5),this.carPointLight.position.set(3.4,1.2,1.6),this.scene.add(this.carPointLight),this.roomLightsGroup=new vt,this.scene.add(this.roomLightsGroup),this.rebuildCustomLights(this.customLights),this.applyLightingMode()}rebuildCustomLights(e){if(!e||!Array.isArray(e))return;for(this.customLights=e;this.roomLightsGroup.children.length>0;){let i=this.roomLightsGroup.children[0];this.roomLightsGroup.remove(i),i.geometry&&i.geometry.dispose(),i.material&&(Array.isArray(i.material)?i.material.forEach(n=>n.dispose()):i.material.dispose())}this.roomLights={};let t=new Si(.14,.14,.04,16);for(let i of e){let n=i.pos||{x:2.5,y:2.2,z:-3.5},r=new E(n.x,n.y,n.z),o=i.defaultColor!==void 0?i.defaultColor:16769689,a=i.range||6.5,l=new Mi(o,0,a,1.2);l.position.copy(r);let c=new Ht({color:13421772,emissive:1118481,roughness:.3,metalness:.2}),h=new $e(t,c);h.position.copy(r),(i.isFloorLamp||i.id==="living_lamp")&&(h.visible=!1);let u=new vt;u.add(l),u.add(h);let d=null,f=px[i.id];if(f?.boxCenter&&f?.boxSize){let g=new bi(f.boxSize.x,f.boxSize.y,f.boxSize.z),x=new Mt({color:264212,transparent:!0,opacity:.65,side:Ft,depthWrite:!1});d=new $e(g,x),d.position.copy(f.boxCenter),u.add(d)}this.roomLightsGroup.add(u),this.roomLights[i.id]={config:i,light:l,fixture:h,container:u,shadeMesh:d,floor:i.floor||(r.y>3?"first":"ground"),isOn:!1,brightness:0,colorHex:o}}this.cutawayMode==="downstairs"&&this.setCutawayMode("downstairs")}updateLightPosition(e,t,i,n){let r=this.roomLights[e];r&&(r.light.position.set(t,i,n),r.fixture.position.set(t,i,n),r.config.pos={x:t,y:i,z:n},r.floor=i>3?"first":"ground"),e==="living_lamp"&&this.applianceLamp&&(this.applianceLamp.position.set(t,0,n),this.applianceLampLight&&this.applianceLampLight.position.set(t,i,n)),this.beaconGroup&&this.beaconGroup.visible&&this.setEditingLightBeacon(e,new E(t,i,n))}setEditingLightBeacon(e,t=null){if(!this.beaconGroup){this.beaconGroup=new vt,this.scene.add(this.beaconGroup);let r=new ur(.16,.28,32);r.rotateX(-Math.PI/2);let o=new Mt({color:3718648,side:Ft,transparent:!0,opacity:.85});this.beaconRing=new $e(r,o),this.beaconGroup.add(this.beaconRing);let a=new Si(.008,.008,1,8),l=new Mt({color:3718648,transparent:!0,opacity:.6});this.beaconLine=new $e(a,l),this.beaconGroup.add(this.beaconLine);let c=new vn(.07,16,16),h=new Mt({color:58879});this.beaconSphere=new $e(c,h),this.beaconGroup.add(this.beaconSphere)}let i=this.roomLights[e],n=t||(i?i.light.position:new E(2.5,2.2,-3.5));this.beaconGroup.visible=!0,this.beaconSphere.position.copy(n),this.beaconRing.position.set(n.x,.02,n.z),this.beaconLine.position.set(n.x,n.y/2,n.z),this.beaconLine.scale.set(1,Math.max(.1,n.y),1)}clearEditingLightBeacon(){this.beaconGroup&&(this.beaconGroup.visible=!1)}enableClickToPlace(e){this.clickToPlaceCallback=e,this.boundOnClickToPlace||(this.boundOnClickToPlace=t=>{if(!this.clickToPlaceCallback)return;let i=this.renderer.domElement.getBoundingClientRect(),n=new Te((t.clientX-i.left)/i.width*2-1,-((t.clientY-i.top)/i.height)*2+1),r=new vr;r.setFromCamera(n,this.camera);let a=r.intersectObjects(this.scene.children,!0).find(l=>{let c=l.object;for(;c;){if(c===this.beaconGroup||c===this.roomLightsGroup||c===this.energyFlow?.group)return!1;c=c.parent}return!0});if(a){let l=a.point,c=this.cutawayMode==="downstairs"?2.15:l.y>3?4.55:2.15;this.clickToPlaceCallback({x:parseFloat(l.x.toFixed(2)),y:parseFloat(c.toFixed(2)),z:parseFloat(l.z.toFixed(2))})}},this.renderer.domElement.addEventListener("pointerup",this.boundOnClickToPlace))}disableClickToPlace(){this.clickToPlaceCallback=null}updateRoomLights(e){if(!e)return;for(let[i,n]of Object.entries(e)){if(!this.roomLights[i])continue;let o=!!(n.is_on||n.state==="on"),a=n.brightness!==void 0?n.brightness:255,l=n.rgb_color;this.setRoomLightState(i,o,a,l)}let t=this.roomLights.lounge;if(t&&t.shadeMesh){let i=!!(e.lounge?.is_on||e.lounge?.state==="on"),n=!!(e.living_lamp?.is_on||e.living_lamp?.state==="on"),r=i||n;t.shadeMesh.visible=!r}if(this.applianceLampShade&&this.applianceLampLight){let i=e.living_lamp,n=!!(i?.is_on||i?.state==="on"),r=i?.brightness!==void 0?i.brightness:255,o=Math.max(.1,r/255);if(n){let a=new _e(16766336);i?.rgb_color&&Array.isArray(i.rgb_color)&&i.rgb_color.length===3&&a.setRGB(i.rgb_color[0]/255,i.rgb_color[1]/255,i.rgb_color[2]/255),this.applianceLampShade.material.emissive.copy(a),this.applianceLampShade.material.emissiveIntensity=2.4*o,this.applianceLampLight.color.copy(a),this.applianceLampLight.intensity=3.6*o}else this.applianceLampShade.material.emissive.setHex(0),this.applianceLampShade.material.emissiveIntensity=0,this.applianceLampLight.intensity=0}}initAppliancesAndFurniture(){this.appliancesGroup=new vt,this.scene.add(this.appliancesGroup);let e=new vt;e.position.set(2.45,0,-6.65),e.rotation.y=Math.PI;let t=new bi(.7,1.84,.65),i=new Ht({color:3028032,metalness:.82,roughness:.28}),n=new $e(t,i);n.position.y=.92,n.castShadow=!0,n.receiveShadow=!0,e.add(n);let r=new Si(.012,.012,.55,12),o=new Ht({color:14212841,metalness:.95,roughness:.15}),a=new $e(r,o);a.position.set(-.06,1.28,.34);let l=new $e(r,o);l.position.set(.06,1.28,.34),e.add(a),e.add(l);let c=new Si(.012,.012,.48,12),h=new $e(c,o);h.rotation.z=Math.PI/2,h.position.set(0,.65,.34),e.add(h);let u=new zn(.12,.18),d=new Mt({color:58879,side:Ft}),f=new $e(u,d);f.position.set(-.16,1.35,.33),e.add(f),this.appliancesGroup.add(e),this.applianceFridge=e;let g=new vt;g.position.set(3.38,1.35,-3.1);let x=new bi(.038,.72,1.22),m=new Ht({color:988970,roughness:.4,metalness:.6}),p=new $e(x,m);g.add(p);let v=new bi(.01,.67,1.17),A=new Ht({color:131845,roughness:.12,metalness:.2,emissive:0,emissiveIntensity:0});this.applianceTvScreen=new $e(v,A),this.applianceTvScreen.position.x=-.016,g.add(this.applianceTvScreen);let S=new vn(.007,8,8);this.applianceTvLed=new $e(S,new Mt({color:15680580})),this.applianceTvLed.position.set(-.022,-.34,.54),g.add(this.applianceTvLed),this.applianceTvLight=new Mi(7382527,0,3.8,1.6),this.applianceTvLight.position.set(3.18,1.35,-3.1),this.appliancesGroup.add(this.applianceTvLight),this.appliancesGroup.add(g),this.applianceTv=g;let T=document.createElement("div");T.style.width="640px",T.style.height="366px",T.style.backgroundColor="#000000",T.style.overflow="hidden",T.style.borderRadius="3px";let w=document.createElement("iframe");w.id="tv-youtube-iframe",w.style.width="100%",w.style.height="100%",w.style.border="none",w.style.pointerEvents="auto",w.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",w.referrerPolicy="strict-origin-when-cross-origin",w.setAttribute("allowfullscreen","true"),T.appendChild(w),this.tvIframe=w,this.tvIframeContainer=T,this.isTvMuted=!0,this.isTvPlaying=!1,this.tvCss3dObject=new ka(T),this.tvCss3dObject.position.set(3.36,1.35,-3.1),this.tvCss3dObject.rotation.y=-Math.PI/2;let _=1.17/640;this.tvCss3dObject.scale.set(_,_,_),this.tvCss3dObject.visible=!1,this.css3dScene.add(this.tvCss3dObject);let M=new vt;M.position.set(.6,0,-.65);let U=new Si(.18,.18,.025,24),C=new Ht({color:12884822,metalness:.85,roughness:.25}),D=new $e(U,C);D.position.y=.0125,M.add(D);let O=new Si(.014,.014,1.55,16),V=new $e(O,C);V.position.y=.775,M.add(V);let L=new Si(.18,.22,.28,24),W=new Ht({color:16708551,roughness:.85,side:Ft,emissive:0,emissiveIntensity:0});this.applianceLampShade=new $e(L,W),this.applianceLampShade.position.y=1.55,M.add(this.applianceLampShade),this.applianceLampLight=new Mi(16769706,0,5,1.2),this.applianceLampLight.position.set(.6,1.58,-.65),this.appliancesGroup.add(this.applianceLampLight),this.appliancesGroup.add(M),this.applianceLamp=M}updateAppliances(e){if(e&&this.applianceTvScreen&&this.applianceTvLight){let t=!!(e.tv?.is_on||e.tv?.state==="on");if(this.isTvPlaying=t,t){this.applianceTvScreen.material.emissive.setHex(6072565),this.applianceTvScreen.material.emissiveIntensity=1.8,this.applianceTvLight.intensity=1.6,this.applianceTvLed&&this.applianceTvLed.material.color.setHex(2278750);let i="https://www.youtube.com/embed/-m0iWqgyvKQ?autoplay=1&mute=1&loop=1&playlist=-m0iWqgyvKQ&enablejsapi=1";this.tvIframe&&(!this.tvIframe.src||!this.tvIframe.src.includes("-m0iWqgyvKQ"))&&(this.tvIframe.src=i)}else this.applianceTvScreen.material.emissive.setHex(0),this.applianceTvScreen.material.emissiveIntensity=0,this.applianceTvLight.intensity=0,this.applianceTvLed&&this.applianceTvLed.material.color.setHex(15680580),this.tvIframe&&this.tvIframe.src&&(this.tvIframe.src=""),this.tvCss3dObject&&(this.tvCss3dObject.visible=!1)}}toggleTvAudio(){if(!this.tvIframe||!this.tvIframe.contentWindow)return!1;this.isTvMuted=!this.isTvMuted;let e=this.isTvMuted?"mute":"unMute";return this.tvIframe.contentWindow.postMessage(JSON.stringify({event:"command",func:e,args:""}),"*"),!this.isTvMuted}setRoomLightState(e,t,i=255,n=null){let r=this.roomLights[e];if(r)if(r.isOn=t,r.brightness=i,t){r.shadeMesh&&(r.shadeMesh.visible=!1);let o=Math.max(.2,Math.min(1,i/255));Array.isArray(n)&&n.length===3?r.light.color.setRGB(n[0]/255,n[1]/255,n[2]/255):r.light.color.setHex(r.config.defaultColor);let a=this.nightMode?1.4:1;r.light.intensity=r.config.maxIntensity*o*a,r.fixture.material.emissive.copy(r.light.color).multiplyScalar(o*2.8),r.fixture.material.color.setHex(16777215)}else r.shadeMesh&&(r.shadeMesh.visible=!0),r.light.intensity=0,r.fixture.material.emissive.setHex(657930),r.fixture.material.color.setHex(2236962)}applyLightingMode(){this.nightMode?(this.scene.background=new _e(329745),this.ambientLight.intensity=.12,this.sunLight.intensity=.1,this.sunLight.color.setHex(3691909),this.hemiLight.intensity=.1,this.meterPointLight.intensity=1.2,this.carPointLight.intensity=1.2):(this.scene.background=new _e(922660),this.ambientLight.intensity=.35,this.sunLight.intensity=1.8,this.sunLight.color.setHex(16775917),this.hemiLight.intensity=.28,this.meterPointLight.intensity=.4,this.carPointLight.intensity=.4)}setNightMode(e){this.nightMode=e,this.applyLightingMode()}loadModelWithFallbacks(e){let t=[e,"Taylor_Wimpey_Blair.glb","./Taylor_Wimpey_Blair.glb","/local/ha-energy-3d/Taylor_Wimpey_Blair.glb","/hacsfiles/ha-energy-3d-card/Taylor_Wimpey_Blair.glb","https://raw.githubusercontent.com/aaronwatt91/ha-energy-3d-card/main/Taylor_Wimpey_Blair.glb"].filter(Boolean),i=[...new Set(t)],n=new Fa,r=o=>{if(o>=i.length){console.error("All model fallback URLs failed to load.");return}let a=i[o];n.load(a,l=>{this.model=l.scene,this.model.traverse(c=>{if(c.isMesh){c.castShadow=!0,c.receiveShadow=!0;let h=c.name;(h.includes("Roof_Main")||h.includes("Roof_Ridge_Tiles")||h.includes("First_Floor_Ceiling")||h.includes("Fascia_and_Soffits"))&&this.roofParts.push({mesh:c,originalMaterial:c.material,ghostMaterial:new Ht({color:8956620,transparent:!0,opacity:.15,roughness:.2,metalness:.1,depthWrite:!1})}),(h.includes("Roof_")||h.includes("Fascia_and_Soffits")||h.includes("Rainwater_Gutters")||h.includes("First_Floor_")||h.includes("Interior_Walls_First")||h.includes("Landing_Carpet")||h.includes("Carpet_")||h.includes("Room_Labels_3D")||h.includes("Solar_PV_"))&&this.topFloorMeshes.push({mesh:c,originalMaterial:c.material}),(h.includes("Exterior_Walls")||h.includes("Separating_Party_Wall")||h.includes("Windows_")||h.includes("Front_Entrance_Door")||h.includes("Rear_French_Doors")||h.includes("Interior_Doors")||h.includes("Sanitaryware")||h.includes("Exterior_Hardware_Chrome")||h.includes("Solar_PV_Cabling"))&&this.cuttableMeshes.push(c)}}),this.scene.add(this.model),this.energyFlow.bindMeshes(this.model),this.onModelLoaded&&this.onModelLoaded()},l=>{this.onProgress&&l.total&&this.onProgress(l.loaded/l.total)},l=>{console.warn(`Could not load GLB from ${a}, trying fallback...`,l),r(o+1)})};r(0)}setXRayRoof(e){this.xrayActive=e;for(let t of this.roofParts)t.mesh.material=e?t.ghostMaterial:t.originalMaterial}setCutawayMode(e){this.cutawayMode=e;let t=e==="downstairs";for(let i of this.topFloorMeshes)i.mesh.visible=!t;for(let i of this.cuttableMeshes)(Array.isArray(i.material)?i.material:[i.material]).forEach(r=>{r&&(r.clippingPlanes=t?[this.downstairsClipPlane]:[],r.clipShadows=!0,r.needsUpdate=!0)});for(let[i,n]of Object.entries(this.roomLights))(n.floor==="first"||n.config?.pos?.y>3)&&(n.container&&(n.container.visible=!t),n.fixture&&(n.fixture.visible=!t),n.shadeMesh&&(n.shadeMesh.visible=!t),t&&n.light&&(n.light.intensity=0))}setCameraPreset(e){let i={overview:{pos:new E(15,12,17),target:new E(2.5,2.5,0),xray:!1},solar:{pos:new E(3.2,10.5,-13.5),target:new E(2.8,6.2,-6.8),xray:!1},meter:{pos:new E(7.2,2.3,.5),target:new E(5.28,1.3,-.85),xray:!0},boiler:{pos:new E(-3.8,3.2,-11.5),target:new E(0,1.4,-8),xray:!0},ev:{pos:new E(7.2,2.2,3.2),target:new E(5.2,.95,1),xray:!1},charger:{pos:new E(7.4,2.2,.4),target:new E(5.2,1.25,.05),xray:!1},downstairs:{pos:new E(2.8,11.5,4.2),target:new E(2.8,.8,-4.5),xray:!1},upstairs:{pos:new E(2.8,11.5,4),target:new E(2.8,3.8,-4.5),xray:!0},heating:{pos:new E(7.8,4.5,-2.5),target:new E(3.4,2.5,-3.5),xray:!0}}[e];i&&(this.targetCameraPos=i.pos.clone(),this.targetLookAt=i.target.clone(),e==="downstairs"?this.setCutawayMode("downstairs"):this.setCutawayMode("normal"),i.xray!==void 0&&i.xray!==this.xrayActive&&e!=="downstairs"&&this.setXRayRoof(i.xray))}updateEnergyData(e){this.currentEnergyData=e,e?.appliances&&this.updateAppliances(e.appliances)}getProjectedHotspots(){let e=this.container.clientWidth||800,t=this.container.clientHeight||500,i=e/2,n=t/2;return this.hotspots.filter(r=>!(this.cutawayMode==="downstairs"&&(r.id==="solar"||r.id==="thermostat_upstairs"))).map(r=>{let o=r.pos.clone();o.project(this.camera);let a=o.z<1,l=o.x*i+i,c=-(o.y*n)+n;return{id:r.id,name:r.name,x:l,y:c,visible:a}})}onResize(){if(!this.container)return;let e=this.container.clientWidth||800,t=this.container.clientHeight||500;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.css3dRenderer&&this.css3dRenderer.setSize(e,t)}animate(){if(!this.isRunning)return;requestAnimationFrame(this.animate);let e=this.clock.getDelta();if(this.targetCameraPos&&this.targetLookAt&&(this.camera.position.lerp(this.targetCameraPos,.06),this.controls.target.lerp(this.targetLookAt,.06),this.camera.position.distanceTo(this.targetCameraPos)<.05&&(this.targetCameraPos=null,this.targetLookAt=null)),this.controls.update(),this.energyFlow&&this.energyFlow.update(e,this.currentEnergyData),this.renderer.render(this.scene,this.camera),this.tvCss3dObject)if(this.isTvPlaying){let t=this.camera.position.x<3.32,i=this.cutawayMode==="downstairs"||this.xrayActive||this.camera.position.distanceTo(new E(3.38,1.35,-3.1))<8.5;this.tvCss3dObject.visible=t&&i}else this.tvCss3dObject.visible=!1;this.css3dRenderer&&this.css3dScene&&this.css3dRenderer.render(this.css3dScene,this.camera),this.onFrame&&this.onFrame()}destroy(){this.isRunning=!1,window.removeEventListener("resize",this.handleResize),this.tvIframe&&(this.tvIframe.src=""),this.css3dRenderer?.domElement?.parentElement&&this.css3dRenderer.domElement.parentElement.removeChild(this.css3dRenderer.domElement),this.renderer?.domElement?.parentElement&&this.renderer.domElement.parentElement.removeChild(this.renderer.domElement),this.renderer?.dispose()}};function ks(s){let e=parseFloat(s);return isNaN(e)?0:Math.abs(e)>=20?e/1e3:e}function Wa(s){let e=Number(s);return isNaN(e)?{label:"Comfortable",color:"#10b981",icon:"\u2728",code:"comfortable"}:e<16?{label:"Cold (<16\xB0C)",color:"#38bdf8",icon:"\u2744\uFE0F",code:"cold"}:e>22?{label:"Hot (>22\xB0C)",color:"#ef4444",icon:"\u{1F525}",code:"hot"}:{label:"Comfortable (16\u201322\xB0C)",color:"#10b981",icon:"\u2728",code:"comfortable"}}var Xa=class{constructor(e,t={}){this.container=e,this.options=t,this.activeTab=null,this.availableEntities=t.availableEntities||[],this.currentSensorConfig=t.currentSensorConfig||{},this.onPresetClick=t.onPresetClick||(()=>{}),this.onToggleXray=t.onToggleXray||(()=>{}),this.onToggleNight=t.onToggleNight||(()=>{}),this.onToggleRotate=t.onToggleRotate||(()=>{}),this.onToggleLight=t.onToggleLight||(()=>{}),this.onToggleTvAudio=t.onToggleTvAudio||(()=>{}),this.onSaveSensors=t.onSaveSensors||(()=>{}),this.customLights=t.customLights||[],this.onSaveCustomLights=t.onSaveCustomLights||(()=>{}),this.onUpdateLightPosition=t.onUpdateLightPosition||(()=>{}),this.onBeaconFocus=t.onBeaconFocus||(()=>{}),this.onBeaconClear=t.onBeaconClear||(()=>{}),this.onEnableClickToPlace=t.onEnableClickToPlace||(()=>{}),this.onDisableClickToPlace=t.onDisableClickToPlace||(()=>{}),this.editingLight=null,this.initDOM()}initDOM(){this.el=document.createElement("div"),this.el.className="ha-energy-hud",this.el.innerHTML=`
      <style>
        .ha-energy-hud {
          position: absolute;
          inset: 0;
          pointer-events: none;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #f1f5f9;
          overflow: hidden;
          user-select: none;
        }

        /* Top Bar */
        .hud-header {
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          pointer-events: auto;
          z-index: 10;
        }

        .hud-brand {
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          padding: 8px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        }

        .hud-brand-title {
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.5px;
          background: linear-gradient(135deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hud-pulse-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 10px #10b981;
          animation: pulse-ring 2s infinite;
        }

        @keyframes pulse-ring {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        /* Power Flow Summary Pills */
        .hud-flow-summary {
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          padding: 6px 12px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
          font-size: 12px;
        }

        .hud-flow-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .hud-flow-val {
          font-weight: 700;
          font-feature-settings: "tnum";
        }

        .color-solar { color: #f59e0b; }
        .color-grid-import { color: #0284c7; }
        .color-grid-export { color: #10b981; }
        .color-ev { color: #06b6d4; }
        .color-gas { color: #f97316; }

        /* Quick View Controls Bar */
        .hud-controls-bar {
          position: absolute;
          bottom: 14px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 30px;
          padding: 5px 8px;
          pointer-events: auto;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
          z-index: 10;
        }

        .hud-btn {
          background: transparent;
          border: 1px solid transparent;
          color: #94a3b8;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          gap: 5px;
          white-space: nowrap;
        }

        .hud-btn:hover {
          color: #f8fafc;
          background: rgba(255, 255, 255, 0.08);
        }

        .hud-btn.active {
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.15);
          border-color: rgba(56, 189, 248, 0.35);
        }

        .hud-btn-divider {
          width: 1px;
          height: 18px;
          background: rgba(255, 255, 255, 0.12);
          align-self: center;
        }

        /* 3D Hotspot Pins */
        .hotspot-badge {
          position: absolute;
          transform: translate(-50%, -50%);
          pointer-events: auto;
          background: rgba(15, 23, 42, 0.88);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 20px;
          padding: 5px 11px;
          display: flex;
          align-items: center;
          gap: 7px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
          cursor: pointer;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          font-size: 11px;
          font-weight: 600;
        }

        .hotspot-badge:hover {
          transform: translate(-50%, -55%) scale(1.06);
          border-color: #38bdf8;
          box-shadow: 0 8px 24px rgba(56, 189, 248, 0.3);
        }

        /* Slide-Out Detail Modal / Drawer */
        .hud-drawer {
          position: absolute;
          top: 70px;
          right: 14px;
          width: 360px;
          max-width: calc(100vw - 28px);
          background: rgba(15, 23, 42, 0.94);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 18px;
          padding: 16px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
          pointer-events: auto;
          z-index: 20;
          display: none;
          animation: slide-in 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hud-drawer.open {
          display: block;
        }

        @keyframes slide-in {
          from { opacity: 0; transform: translateY(-10px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .drawer-title {
          font-size: 15px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .drawer-close {
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 18px;
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
        }

        .drawer-close:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
        }

        /* Stat Grid */
        .stat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 12px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 10px 12px;
        }

        .stat-card-full {
          grid-column: 1 / -1;
        }

        .stat-label {
          font-size: 11px;
          color: #94a3b8;
          margin-bottom: 4px;
          font-weight: 500;
        }

        .stat-val {
          font-size: 18px;
          font-weight: 700;
          font-feature-settings: "tnum";
        }

        .stat-unit {
          font-size: 11px;
          font-weight: 500;
          color: #94a3b8;
          margin-left: 3px;
        }

        .stat-subtext {
          font-size: 10px;
          color: #64748b;
          margin-top: 3px;
        }

        .battery-bar-container {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
          margin-top: 6px;
        }

        .battery-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #10b981, #06b6d4);
          border-radius: 4px;
          transition: width 0.4s ease;
        }

        .drawer-nav-tabs {
          display: flex;
          gap: 6px;
          margin-bottom: 12px;
          background: rgba(0, 0, 0, 0.25);
          border-radius: 10px;
          padding: 4px;
        }

        .drawer-nav-tab {
          flex: 1;
          text-align: center;
          padding: 6px 4px;
          font-size: 11px;
          font-weight: 600;
          color: #94a3b8;
          background: transparent;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .drawer-nav-tab.active {
          color: #fff;
          background: rgba(255, 255, 255, 0.12);
        }

        /* Sensor Settings Modal */
        .sensor-modal {
          position: absolute;
          inset: 20px;
          max-width: 600px;
          max-height: 520px;
          margin: auto;
          background: rgba(15, 23, 42, 0.96);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
          pointer-events: auto;
          z-index: 30;
          display: none;
          flex-direction: column;
        }

        .sensor-modal.open {
          display: flex;
        }

        .modal-body {
          flex: 1;
          overflow-y: auto;
          padding-right: 6px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .modal-body::-webkit-scrollbar {
          width: 5px;
        }
        .modal-body::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
        }

        .sensor-group-title {
          font-size: 12px;
          font-weight: 700;
          color: #38bdf8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-top: 6px;
        }

        .sensor-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .sensor-row label {
          font-size: 11px;
          color: #94a3b8;
        }

        .sensor-input-wrap {
          display: flex;
          gap: 6px;
          align-items: center;
        }

        .sensor-input-wrap input {
          flex: 1;
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #f8fafc;
          padding: 7px 10px;
          border-radius: 8px;
          font-size: 12px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .sensor-input-wrap input:focus {
          border-color: #38bdf8;
          box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.25);
        }

        .btn-entity-browse {
          background: rgba(56, 189, 248, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.35);
          color: #38bdf8;
          padding: 6px 10px;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
          pointer-events: auto;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .btn-entity-browse:hover {
          background: rgba(56, 189, 248, 0.3);
          border-color: #38bdf8;
          color: #fff;
        }

        /* Entity Picker Modal Dialog */
        .entity-picker-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 100;
          display: none;
          align-items: center;
          justify-content: center;
          pointer-events: auto;
        }

        .entity-picker-overlay.open {
          display: flex;
        }

        .entity-picker-card {
          width: 92%;
          max-width: 520px;
          max-height: 82vh;
          background: rgba(15, 23, 42, 0.98);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .entity-picker-header {
          padding: 14px 18px 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .entity-picker-title {
          font-weight: 700;
          font-size: 14px;
          color: #f8fafc;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .entity-filter-chips {
          display: flex;
          gap: 6px;
          padding: 10px 18px 6px;
          overflow-x: auto;
        }

        .filter-chip {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #94a3b8;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.15s ease;
        }

        .filter-chip.active, .filter-chip:hover {
          background: #0284c7;
          border-color: #38bdf8;
          color: #fff;
        }

        .entity-search-wrap {
          padding: 6px 18px 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .entity-search-input {
          width: 100%;
          box-sizing: border-box;
          background: rgba(0, 0, 0, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #f8fafc;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 13px;
          outline: none;
        }

        .entity-search-input:focus {
          border-color: #38bdf8;
          box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.25);
        }

        .entity-list-container {
          flex: 1;
          overflow-y: auto;
          padding: 8px 14px;
          max-height: 380px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .entity-item-row {
          padding: 8px 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid transparent;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.15s ease;
        }

        .entity-item-row:hover {
          background: rgba(56, 189, 248, 0.14);
          border-color: rgba(56, 189, 248, 0.4);
        }

        .entity-item-id {
          font-weight: 600;
          font-size: 12px;
          color: #e2e8f0;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        }

        .entity-item-state {
          font-size: 11px;
          font-weight: 600;
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.15);
          padding: 2px 8px;
          border-radius: 6px;
        }

        .sensor-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .light-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 8px;
          margin-top: 6px;
        }

        .light-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 8px 10px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .light-card.active {
          background: rgba(251, 191, 36, 0.12);
          border-color: rgba(251, 191, 36, 0.4);
          box-shadow: 0 0 12px rgba(251, 191, 36, 0.15);
        }

        .light-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .light-name {
          font-size: 11px;
          font-weight: 600;
          color: #f1f5f9;
        }

        .light-status-pill {
          font-size: 9px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .light-status-pill.on {
          background: #f59e0b;
          color: #000;
        }

        .light-status-pill.off {
          background: rgba(255, 255, 255, 0.1);
          color: #94a3b8;
        }

        .light-toggle-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #fff;
          font-size: 10px;
          font-weight: 600;
          padding: 5px;
          border-radius: 6px;
          cursor: pointer;
          text-align: center;
          pointer-events: auto;
          transition: background 0.2s;
        }

        .light-toggle-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .modal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 14px;
          padding-top: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-action {
          padding: 7px 16px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: 0.2s ease;
        }

        .btn-save {
          background: #0284c7;
          color: #fff;
        }
        .btn-save:hover { background: #0369a1; }

        .btn-detect {
          background: rgba(255, 255, 255, 0.1);
          color: #e2e8f0;
        }
        .btn-detect:hover { background: rgba(255, 255, 255, 0.18); }

        /* Light Customizer Overlay Modal */
        .light-customizer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 120;
          display: none;
          align-items: center;
          justify-content: center;
          pointer-events: auto;
        }

        .light-customizer-overlay.open {
          display: flex;
        }

        .light-customizer-card {
          width: 92%;
          max-width: 540px;
          max-height: 86vh;
          background: rgba(15, 23, 42, 0.98);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.75);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .coord-section {
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 6px 0;
        }

        .coord-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .coord-label {
          width: 80px;
          font-size: 11px;
          font-weight: 600;
          color: #94a3b8;
        }

        .coord-stepper {
          display: flex;
          align-items: center;
          gap: 6px;
          flex: 1;
        }

        .coord-slider {
          flex: 1;
          accent-color: #38bdf8;
          height: 6px;
          cursor: pointer;
        }

        .coord-val-input {
          width: 65px;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #38bdf8;
          font-weight: 700;
          padding: 4px 6px;
          border-radius: 6px;
          text-align: center;
          font-size: 12px;
          outline: none;
        }

        .coord-step-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #fff;
          width: 26px;
          height: 26px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s;
        }

        .coord-step-btn:hover {
          background: rgba(56, 189, 248, 0.3);
          border-color: #38bdf8;
        }

        .btn-pick-3d {
          background: rgba(56, 189, 248, 0.18);
          border: 1px solid #38bdf8;
          color: #38bdf8;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-pick-3d.active {
          background: #38bdf8;
          color: #000;
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.6);
        }

        .floor-select-group {
          display: flex;
          gap: 8px;
        }

        .floor-opt-btn {
          flex: 1;
          padding: 6px 10px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.05);
          color: #94a3b8;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          text-align: center;
          transition: all 0.15s;
        }

        .floor-opt-btn.active {
          background: rgba(56, 189, 248, 0.2);
          border-color: #38bdf8;
          color: #fff;
        }

        .color-preset-chips {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          align-items: center;
        }

        .color-chip-btn {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: transform 0.15s, border-color 0.15s;
        }

        .color-chip-btn:hover, .color-chip-btn.active {
          transform: scale(1.15);
          border-color: #fff;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
        }

        .light-card-footer {
          display: flex;
          gap: 6px;
          margin-top: 4px;
        }

        .btn-light-sub {
          flex: 1;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #cbd5e1;
          font-size: 10px;
          font-weight: 600;
          padding: 4px 6px;
          border-radius: 6px;
          cursor: pointer;
          text-align: center;
          transition: background 0.15s;
        }

        .btn-light-sub:hover {
          background: rgba(255, 255, 255, 0.14);
          color: #fff;
        }

        .btn-light-del {
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #f87171;
          width: 28px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s;
        }

        .btn-light-del:hover {
          background: rgba(239, 68, 68, 0.3);
          color: #fff;
        }

        @media (max-width: 600px) {
          .hud-controls-bar {
            width: calc(100% - 24px);
            overflow-x: auto;
            justify-content: flex-start;
          }
          .hud-flow-summary { display: none; }
          .hud-drawer {
            top: 60px;
            right: 8px;
            left: 8px;
            width: auto;
          }
          .sensor-modal {
            inset: 10px;
            max-height: calc(100vh - 20px);
          }
        }
      </style>

      <!-- Header -->
      <div class="hud-header">
        <div class="hud-brand">
          <div class="hud-pulse-dot"></div>
          <span class="hud-brand-title">HOME ENERGY 3D</span>
        </div>

        <div class="hud-flow-summary" id="flow-summary">
          <div class="hud-flow-item">
            <span>\u2600\uFE0F</span>
            <span class="hud-flow-val color-solar" id="hdr-solar-kw">0.00 kW</span>
          </div>
          <div class="hud-flow-item">
            <span>\u26A1</span>
            <span class="hud-flow-val color-grid-import" id="hdr-grid-kw">0.00 kW</span>
          </div>
          <div class="hud-flow-item">
            <span>\u{1F697}</span>
            <span class="hud-flow-val color-ev" id="hdr-ev-kw">0.00 kW</span>
          </div>
          <div class="hud-flow-item">
            <span>\u{1F525}</span>
            <span class="hud-flow-val color-gas" id="hdr-gas-val">Active</span>
          </div>
        </div>
      </div>

      <!-- 3D Hotspot Badges Container -->
      <div id="hotspots-container"></div>

      <!-- Detail Drawer Modal -->
      <div class="hud-drawer" id="hud-drawer">
        <div class="drawer-header">
          <div class="drawer-title" id="drawer-title">\u26A1 Energy Details</div>
          <button class="drawer-close" id="drawer-close-btn">&times;</button>
        </div>

        <div class="drawer-nav-tabs">
          <button class="drawer-nav-tab active" data-tab="solar">\u2600\uFE0F Solar</button>
          <button class="drawer-nav-tab" data-tab="electric">\u26A1 Electric</button>
          <button class="drawer-nav-tab" data-tab="gas">\u{1F525} Gas</button>
          <button class="drawer-nav-tab" data-tab="ev">\u{1F697} EV</button>
          <button class="drawer-nav-tab" data-tab="heating">\u{1F321}\uFE0F Heating</button>
          <button class="drawer-nav-tab" data-tab="lights">\u{1F4A1} Lights</button>
        </div>

        <div id="drawer-content"></div>
      </div>

      <!-- Sensor Configuration Modal (Add In My Own Sensors) -->
      <div class="sensor-modal" id="sensor-modal">
        <div class="drawer-header">
          <div class="drawer-title">\u2699\uFE0F Configure My Device Sensors</div>
          <button class="drawer-close" id="sensor-modal-close">&times;</button>
        </div>

        <div class="modal-body" id="sensor-modal-body">
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 6px;">
            Map your Home Assistant entities to monitor live power in the 3D model:
          </div>

          <!-- Solar -->
          <div class="sensor-group-title">\u2600\uFE0F Solax Solar Integration</div>
          <div class="sensor-row">
            <label>Live Solar Generation Power (kW)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-solax-power" placeholder="sensor.solax_pv_power_total">
              <button type="button" class="btn-entity-browse" data-target="#cfg-solax-power">\u{1F4CB} Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Today's Solar Energy (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-solax-today" placeholder="sensor.solax_today_s_solar_energy">
              <button type="button" class="btn-entity-browse" data-target="#cfg-solax-today">\u{1F4CB} Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>This Week's Solar Energy (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-solax-week" placeholder="sensor.solax_this_week_solar_energy">
              <button type="button" class="btn-entity-browse" data-target="#cfg-solax-week">\u{1F4CB} Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>This Month's Solar Energy (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-solax-month" placeholder="sensor.solax_this_month_solar_energy">
              <button type="button" class="btn-entity-browse" data-target="#cfg-solax-month">\u{1F4CB} Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>This Year's Solar Energy (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-solax-year" placeholder="sensor.solax_this_year_solar_energy">
              <button type="button" class="btn-entity-browse" data-target="#cfg-solax-year">\u{1F4CB} Select</button>
            </div>
          </div>

          <!-- Octopus Electricity -->
          <div class="sensor-group-title">\u26A1 Octopus Electricity & Grid</div>
          <div class="sensor-row">
            <label>Live Electricity Power / Home Mini (kW)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-octopus-power" placeholder="sensor.octopus_home_mini_current_electricity_power">
              <button type="button" class="btn-entity-browse" data-target="#cfg-octopus-power">\u{1F4CB} Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Solar Feed-In Export Power (kW)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-octopus-export" placeholder="sensor.solax_feed_in_power">
              <button type="button" class="btn-entity-browse" data-target="#cfg-octopus-export">\u{1F4CB} Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Electricity Unit Rate (p/kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-octopus-rate" placeholder="sensor.octopus_energy_electricity_current_rate">
              <button type="button" class="btn-entity-browse" data-target="#cfg-octopus-rate">\u{1F4CB} Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Month-to-Date Spend (\xA3)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-octopus-spend" placeholder="sensor.octopus_energy_electricity_current_month_cost">
              <button type="button" class="btn-entity-browse" data-target="#cfg-octopus-spend">\u{1F4CB} Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Octopus Home Mini 30-Min Reading (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-octopus-30min" placeholder="sensor.octopus_home_mini_electricity_30min">
              <button type="button" class="btn-entity-browse" data-target="#cfg-octopus-30min">\u{1F4CB} Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Electricity Day (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-octopus-day" placeholder="sensor.octopus_energy_electricity_day">
              <button type="button" class="btn-entity-browse" data-target="#cfg-octopus-day">\u{1F4CB} Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Electricity Week (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-octopus-week" placeholder="sensor.octopus_energy_electricity_week">
              <button type="button" class="btn-entity-browse" data-target="#cfg-octopus-week">\u{1F4CB} Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Electricity Month (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-octopus-month" placeholder="sensor.octopus_energy_electricity_month">
              <button type="button" class="btn-entity-browse" data-target="#cfg-octopus-month">\u{1F4CB} Select</button>
            </div>
          </div>

          <!-- Gas -->
          <div class="sensor-group-title">\u{1F525} Octopus Gas & Combi Boiler</div>
          <div class="sensor-row">
            <label>Boiler Status (switch / climate / sensor)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-boiler-status" placeholder="sensor.boiler_status">
              <button type="button" class="btn-entity-browse" data-target="#cfg-boiler-status">\u{1F4CB} Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Gas 30-Min Reading (Home Mini) (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-gas-30min" placeholder="sensor.octopus_home_mini_gas_30min">
              <button type="button" class="btn-entity-browse" data-target="#cfg-gas-30min">\u{1F4CB} Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Gas Day (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-gas-day" placeholder="sensor.octopus_energy_gas_day">
              <button type="button" class="btn-entity-browse" data-target="#cfg-gas-day">\u{1F4CB} Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Gas Week (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-gas-week" placeholder="sensor.octopus_energy_gas_week">
              <button type="button" class="btn-entity-browse" data-target="#cfg-gas-week">\u{1F4CB} Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Gas Month (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-gas-month" placeholder="sensor.octopus_energy_gas_month">
              <button type="button" class="btn-entity-browse" data-target="#cfg-gas-month">\u{1F4CB} Select</button>
            </div>
          </div>

          <!-- EV -->
          <div class="sensor-group-title">\u{1F697} myenergi Zappi & Peugeot e-2008</div>
          <div class="sensor-row">
            <label>Zappi Charging Speed (kW / Watts)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-zappi-power" placeholder="sensor.myenergi_zappi_power">
              <button type="button" class="btn-entity-browse" data-target="#cfg-zappi-power">\u{1F4CB} Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Zappi Connection Status (climate/sensor/binary_sensor)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-zappi-status" placeholder="sensor.myenergi_zappi_status">
              <button type="button" class="btn-entity-browse" data-target="#cfg-zappi-status">\u{1F4CB} Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Zappi Session Energy Added (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-zappi-energy" placeholder="sensor.myenergi_zappi_charge_added_session">
              <button type="button" class="btn-entity-browse" data-target="#cfg-zappi-energy">\u{1F4CB} Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Peugeot Battery SoC (%)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-peugeot-battery" placeholder="sensor.e2008_battery_level">
              <button type="button" class="btn-entity-browse" data-target="#cfg-peugeot-battery">\u{1F4CB} Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Peugeot Remaining Range (miles)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-peugeot-range" placeholder="sensor.e2008_battery_range">
              <button type="button" class="btn-entity-browse" data-target="#cfg-peugeot-range">\u{1F4CB} Select</button>
            </div>
          </div>

          <!-- Appliances & Furniture -->
          <div class="sensor-group-title">\u{1F37D}\uFE0F Appliances & Living Room Devices</div>
          <div class="sensor-grid-2">
            <div class="sensor-row">
              <label>Kitchen Fridge Freezer (power sensor)</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-sensor-fridge" placeholder="sensor.fridge_power">
                <button type="button" class="btn-entity-browse" data-target="#cfg-sensor-fridge">\u{1F4CB} Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>\u{1F4FA} Living Room TV (media_player/switch)</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-sensor-tv" placeholder="media_player.living_room_tv">
                <button type="button" class="btn-entity-browse" data-target="#cfg-sensor-tv">\u{1F4CB} Select</button>
              </div>
            </div>
          </div>

          <!-- Heating & Thermostats -->
          <div class="sensor-group-title">\u{1F321}\uFE0F Heating & Thermostats (Upstairs & Downstairs)</div>
          <div class="sensor-grid-2">
            <div class="sensor-row">
              <label>Downstairs Thermostat (climate / sensor)</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-thermostat-downstairs" placeholder="climate.downstairs">
                <button type="button" class="btn-entity-browse" data-target="#cfg-thermostat-downstairs">\u{1F4CB} Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>Upstairs Thermostat (climate / sensor)</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-thermostat-upstairs" placeholder="climate.upstairs">
                <button type="button" class="btn-entity-browse" data-target="#cfg-thermostat-upstairs">\u{1F4CB} Select</button>
              </div>
            </div>
          </div>

          <!-- Room Lights -->
          <div class="sensor-group-title">\u{1F4A1} Room Lights (11 Interior Rooms)</div>
          <div style="font-size: 11px; color: #94a3b8; margin-top: -6px;">
            Select light/switch entities for each room. When turned ON, the room glows in 3D!
          </div>
          <div class="sensor-grid-2">
            <div class="sensor-row">
              <label>\u{1F6CB}\uFE0F Living Room / Lounge</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-light-lounge" placeholder="light.living_room">
                <button type="button" class="btn-entity-browse" data-target="#cfg-light-lounge">\u{1F4CB} Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>\u{1F373} Kitchen</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-light-kitchen" placeholder="light.kitchen">
                <button type="button" class="btn-entity-browse" data-target="#cfg-light-kitchen">\u{1F4CB} Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>\u{1F37D}\uFE0F Dining Area</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-light-dining" placeholder="light.dining_room">
                <button type="button" class="btn-entity-browse" data-target="#cfg-light-dining">\u{1F4CB} Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>\u{1F6AA} Entrance Hall & Stairs</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-light-hallway" placeholder="light.hallway">
                <button type="button" class="btn-entity-browse" data-target="#cfg-light-hallway">\u{1F4CB} Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>\u{1F6BD} Downstairs WC / Cloakroom</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-light-wc" placeholder="light.downstairs_wc">
                <button type="button" class="btn-entity-browse" data-target="#cfg-light-wc">\u{1F4CB} Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>\u{1F6CF}\uFE0F Master Bedroom</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-light-master" placeholder="light.master_bedroom">
                <button type="button" class="btn-entity-browse" data-target="#cfg-light-master">\u{1F4CB} Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>\u{1F6BF} Master En-Suite</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-light-ensuite" placeholder="light.ensuite">
                <button type="button" class="btn-entity-browse" data-target="#cfg-light-ensuite">\u{1F4CB} Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>\u{1F6CF}\uFE0F Bedroom 2 (Guestroom)</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-light-bedroom2" placeholder="light.bedroom_2">
                <button type="button" class="btn-entity-browse" data-target="#cfg-light-bedroom2">\u{1F4CB} Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>\u{1F9F8} Bedroom 3 (Nursery / Office)</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-light-bedroom3" placeholder="light.bedroom_3">
                <button type="button" class="btn-entity-browse" data-target="#cfg-light-bedroom3">\u{1F4CB} Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>\u{1F6C1} Family Bathroom</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-light-bathroom" placeholder="light.family_bathroom">
                <button type="button" class="btn-entity-browse" data-target="#cfg-light-bathroom">\u{1F4CB} Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>\u{1FA9C} Upstairs Landing</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-light-landing" placeholder="light.landing">
                <button type="button" class="btn-entity-browse" data-target="#cfg-light-landing">\u{1F4CB} Select</button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-action btn-detect" id="btn-detect-sensors">\u{1F50D} Auto-Detect Sensors</button>
          <button class="btn-action btn-save" id="btn-save-sensors">\u{1F4BE} Save & Apply</button>
        </div>
      </div>

      <!-- Interactive Entity Picker Modal Dialog (Open a window and select from a list) -->
      <div class="entity-picker-overlay" id="entity-picker-dialog">
        <div class="entity-picker-card">
          <div class="entity-picker-header">
            <div class="entity-picker-title">
              <span>\u{1F4CB}</span>
              <span id="picker-dialog-title">Select Home Assistant Entity</span>
            </div>
            <button class="drawer-close" id="picker-dialog-close">&times;</button>
          </div>

          <div class="entity-filter-chips" id="picker-filter-chips">
            <button class="filter-chip active" data-filter="all">All</button>
            <button class="filter-chip" data-filter="light">\u{1F4A1} Lights</button>
            <button class="filter-chip" data-filter="switch">\u{1F50C} Switches</button>
            <button class="filter-chip" data-filter="sensor">\u{1F4CA} Sensors</button>
            <button class="filter-chip" data-filter="climate">\u{1F321}\uFE0F Climate</button>
            <button class="filter-chip" data-filter="media_player">\u{1F4FA} Media</button>
          </div>

          <div class="entity-search-wrap">
            <input type="text" class="entity-search-input" id="picker-search-input" placeholder="\u{1F50D} Search entity ID or friendly name...">
          </div>

          <div class="entity-list-container" id="picker-entity-list">
            <!-- Dynamic entities list populated on demand -->
          </div>
        </div>
      </div>

      <!-- Interactive 3D Light Customizer Modal Dialog (Add, Delete, Set & Move in 3D) -->
      <div class="light-customizer-overlay" id="light-customizer-dialog">
        <div class="light-customizer-card">
          <div class="entity-picker-header">
            <div class="entity-picker-title">
              <span>\u{1F4A1}</span>
              <span id="light-customizer-title">Configure & Position Light</span>
            </div>
            <button class="drawer-close" id="light-customizer-close">&times;</button>
          </div>

          <div class="modal-body" style="padding:14px 18px; overflow-y:auto; max-height:calc(86vh - 120px);">
            <!-- Light Name -->
            <div class="sensor-row">
              <label>Light Label / Friendly Name</label>
              <input type="text" id="custom-light-name" placeholder="e.g. Living Room Spotlight">
            </div>

            <!-- HA Entity -->
            <div class="sensor-row">
              <label>Mapped Home Assistant Entity (light or switch)</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="custom-light-entity" placeholder="e.g. light.living_room">
                <button type="button" class="btn-entity-browse" data-target="#custom-light-entity">\u{1F4CB} Select</button>
              </div>
            </div>

            <!-- Floor Location -->
            <div class="sensor-row">
              <label>Floor Level</label>
              <div class="floor-select-group">
                <button type="button" class="floor-opt-btn active" data-floor="ground" id="floor-btn-ground">\u{1F6CB}\uFE0F Downstairs (Ground)</button>
                <button type="button" class="floor-opt-btn" data-floor="first" id="floor-btn-first">\u{1F6CF}\uFE0F Upstairs (First)</button>
              </div>
            </div>

            <!-- 3D Positioning Controls -->
            <div class="coord-section">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:12px; font-weight:700; color:#38bdf8;">\u{1F4CD} Move Position in 3D (Meters)</span>
                <button type="button" class="btn-pick-3d" id="btn-pick-3d-point">\u{1F4CD} Click House to Place</button>
              </div>

              <!-- X: Left / Right -->
              <div class="coord-row">
                <span class="coord-label">X (Left/Right)</span>
                <div class="coord-stepper">
                  <button type="button" class="coord-step-btn" data-axis="x" data-dir="-1">&minus;</button>
                  <input type="range" class="coord-slider" id="coord-x-slider" min="-1.5" max="6.5" step="0.05">
                  <input type="number" class="coord-val-input" id="coord-x-val" step="0.05">
                  <button type="button" class="coord-step-btn" data-axis="x" data-dir="1">&plus;</button>
                </div>
              </div>

              <!-- Y: Height -->
              <div class="coord-row">
                <span class="coord-label">Y (Height)</span>
                <div class="coord-stepper">
                  <button type="button" class="coord-step-btn" data-axis="y" data-dir="-1">&minus;</button>
                  <input type="range" class="coord-slider" id="coord-y-slider" min="0.1" max="5.5" step="0.05">
                  <input type="number" class="coord-val-input" id="coord-y-val" step="0.05">
                  <button type="button" class="coord-step-btn" data-axis="y" data-dir="1">&plus;</button>
                </div>
              </div>

              <!-- Quick Height Presets -->
              <div style="display:flex; gap:6px; margin-top:-4px;">
                <button type="button" class="btn-light-sub" id="btn-preset-ceil-down">Ceiling Down (2.15m)</button>
                <button type="button" class="btn-light-sub" id="btn-preset-ceil-up">Ceiling Up (4.55m)</button>
                <button type="button" class="btn-light-sub" id="btn-preset-lamp">Floor Lamp (1.55m)</button>
              </div>

              <!-- Z: Front / Back -->
              <div class="coord-row">
                <span class="coord-label">Z (Front/Back)</span>
                <div class="coord-stepper">
                  <button type="button" class="coord-step-btn" data-axis="z" data-dir="-1">&minus;</button>
                  <input type="range" class="coord-slider" id="coord-z-slider" min="-9.0" max="1.5" step="0.05">
                  <input type="number" class="coord-val-input" id="coord-z-val" step="0.05">
                  <button type="button" class="coord-step-btn" data-axis="z" data-dir="1">&plus;</button>
                </div>
              </div>
            </div>

            <!-- Light Color Swatches -->
            <div class="sensor-row">
              <label>Light Color Tone</label>
              <div class="color-preset-chips">
                <button type="button" class="color-chip-btn" style="background:#ffe299" data-color="#ffe299" title="Warm Candle White"></button>
                <button type="button" class="color-chip-btn" style="background:#fff0d6" data-color="#fff0d6" title="Soft White"></button>
                <button type="button" class="color-chip-btn" style="background:#ffffff" data-color="#ffffff" title="Pure Daylight"></button>
                <button type="button" class="color-chip-btn" style="background:#f59e0b" data-color="#f59e0b" title="Amber Gold"></button>
                <button type="button" class="color-chip-btn" style="background:#38bdf8" data-color="#38bdf8" title="Sky Cyan"></button>
                <button type="button" class="color-chip-btn" style="background:#ec4899" data-color="#ec4899" title="Pink Accent"></button>
                <input type="color" id="custom-light-color-input" style="width:28px; height:24px; border:none; background:none; cursor:pointer;" title="Custom Color">
              </div>
            </div>
          </div>

          <div class="modal-footer" style="padding:12px 18px;">
            <button class="btn-action" style="background:rgba(239,68,68,0.2); color:#f87171; border:1px solid rgba(239,68,68,0.4);" id="btn-custom-light-delete">\u{1F5D1}\uFE0F Delete Light</button>
            <button class="btn-action btn-save" id="btn-custom-light-save">\u{1F4BE} Save Light</button>
          </div>
        </div>
      </div>

      <!-- HTML5 Datalist for Direct Typing Auto-Completion -->
      <datalist id="ha-entities-datalist"></datalist>

      <!-- Bottom Camera & Feature Bar -->
      <div class="hud-controls-bar">
        <button class="hud-btn active" data-preset="overview">\u{1F3E0} House</button>
        <button class="hud-btn" data-preset="solar">\u2600\uFE0F Solar</button>
        <button class="hud-btn" data-preset="meter">\u26A1 Meter</button>
        <button class="hud-btn" data-preset="boiler">\u{1F525} Boiler</button>
        <button class="hud-btn" data-preset="ev">\u{1F697} Peugeot</button>
        <button class="hud-btn" data-preset="downstairs">\u{1F6CB}\uFE0F Downstairs</button>
        <button class="hud-btn" data-preset="upstairs">\u{1F6CF}\uFE0F Upstairs</button>
        <div class="hud-btn-divider"></div>
        <button class="hud-btn" id="btn-xray">\u{1F441}\uFE0F X-Ray</button>
        <button class="hud-btn" id="btn-night">\u{1F319} Night</button>
        <button class="hud-btn" id="btn-rotate">\u{1F504} Orbit</button>
        <button class="hud-btn" id="btn-drawer">\u{1F4CA} Stats</button>
        <button class="hud-btn" id="btn-sensors">\u2699\uFE0F Sensors</button>
      </div>
    `,this.container.appendChild(this.el),this.bindEvents(),this.populateSensorInputs()}bindEvents(){let e=this.el.querySelectorAll("[data-preset]");e.forEach(F=>{F.addEventListener("click",()=>{e.forEach(Q=>Q.classList.remove("active")),F.classList.add("active");let k=F.getAttribute("data-preset");this.activePreset=k,this.onPresetClick(k)})});let t=this.el.querySelector("#btn-xray");t.addEventListener("click",()=>{t.classList.toggle("active"),this.onToggleXray(t.classList.contains("active"))});let i=this.el.querySelector("#btn-night");i.addEventListener("click",()=>{i.classList.toggle("active"),this.onToggleNight(i.classList.contains("active"))});let n=this.el.querySelector("#btn-rotate");n.addEventListener("click",()=>{n.classList.toggle("active"),this.onToggleRotate(n.classList.contains("active"))});let r=this.el.querySelector("#btn-drawer"),o=this.el.querySelector("#hud-drawer"),a=this.el.querySelector("#drawer-close-btn");r.addEventListener("click",()=>{o.classList.toggle("open"),r.classList.toggle("active",o.classList.contains("open")),o.classList.contains("open")&&!this.activeTab&&this.switchTab("solar")}),a.addEventListener("click",()=>{o.classList.remove("open"),r.classList.remove("active")});let l=this.el.querySelector("#btn-sensors"),c=this.el.querySelector("#sensor-modal"),h=this.el.querySelector("#sensor-modal-close"),u=this.el.querySelector("#btn-save-sensors"),d=this.el.querySelector("#btn-detect-sensors");l.addEventListener("click",()=>{c.classList.toggle("open"),l.classList.toggle("active",c.classList.contains("open"))}),h.addEventListener("click",()=>{c.classList.remove("open"),l.classList.remove("active")}),u.addEventListener("click",()=>{let F=this.readSensorInputs();this.currentSensorConfig=F;try{localStorage.setItem("ha_energy_3d_custom_sensors",JSON.stringify(F))}catch{}this.onSaveSensors(F),c.classList.remove("open"),l.classList.remove("active")}),d.addEventListener("click",()=>{this.autoDetectSensors()}),this.el.querySelectorAll(".btn-entity-browse").forEach(F=>{F.addEventListener("click",k=>{k.preventDefault(),k.stopPropagation();let Q=F.getAttribute("data-target");this.openEntityPicker(Q)})});let g=this.el.querySelector("#entity-picker-dialog"),x=this.el.querySelector("#picker-dialog-close");x&&x.addEventListener("click",()=>{g.classList.remove("open")}),g&&g.addEventListener("click",F=>{F.target===g&&g.classList.remove("open")});let m=this.el.querySelectorAll(".filter-chip");m.forEach(F=>{F.addEventListener("click",()=>{m.forEach(Q=>Q.classList.remove("active")),F.classList.add("active"),this.currentPickerFilter=F.getAttribute("data-filter")||"all";let k=this.el.querySelector("#picker-search-input")?.value||"";this.renderPickerEntityList(k,this.currentPickerFilter)})});let p=this.el.querySelector("#picker-search-input");p&&p.addEventListener("input",F=>{this.renderPickerEntityList(F.target.value,this.currentPickerFilter||"all")});let v=this.el.querySelector("#light-customizer-dialog"),A=this.el.querySelector("#light-customizer-close");A&&A.addEventListener("click",()=>{v.classList.remove("open"),this.onBeaconClear(),this.onDisableClickToPlace(),this.el.querySelector("#btn-pick-3d-point")?.classList.remove("active")}),v&&v.addEventListener("click",F=>{F.target===v&&(v.classList.remove("open"),this.onBeaconClear(),this.onDisableClickToPlace(),this.el.querySelector("#btn-pick-3d-point")?.classList.remove("active"))});let S=this.el.querySelector("#floor-btn-ground"),T=this.el.querySelector("#floor-btn-first");S&&T&&(S.addEventListener("click",()=>{S.classList.add("active"),T.classList.remove("active"),this.editingLight&&(this.editingLight.floor="ground")}),T.addEventListener("click",()=>{T.classList.add("active"),S.classList.remove("active"),this.editingLight&&(this.editingLight.floor="first")})),["x","y","z"].forEach(F=>{let k=this.el.querySelector(`#coord-${F}-slider`),Q=this.el.querySelector(`#coord-${F}-val`);k&&k.addEventListener("input",X=>this.onCoordChange(F,X.target.value)),Q&&Q.addEventListener("change",X=>this.onCoordChange(F,X.target.value))}),this.el.querySelectorAll(".coord-step-btn").forEach(F=>{F.addEventListener("click",()=>{let k=F.getAttribute("data-axis"),Q=parseFloat(F.getAttribute("data-dir")||"1");if(this.editingLight){let X=this.editingLight.pos[k]||0,j=parseFloat((X+Q*.1).toFixed(2));this.onCoordChange(k,j)}})});let _=this.el.querySelector("#btn-preset-ceil-down"),M=this.el.querySelector("#btn-preset-ceil-up"),U=this.el.querySelector("#btn-preset-lamp");_&&_.addEventListener("click",()=>this.onCoordChange("y",2.15)),M&&M.addEventListener("click",()=>this.onCoordChange("y",4.55)),U&&U.addEventListener("click",()=>this.onCoordChange("y",1.55));let C=this.el.querySelector("#btn-pick-3d-point");C&&C.addEventListener("click",()=>{C.classList.toggle("active"),C.classList.contains("active")?this.onEnableClickToPlace(F=>{this.onCoordChange("x",F.x),this.onCoordChange("y",F.y),this.onCoordChange("z",F.z)}):this.onDisableClickToPlace()});let D=this.el.querySelectorAll(".color-chip-btn"),O=this.el.querySelector("#custom-light-color-input");D.forEach(F=>{F.addEventListener("click",()=>{let k=F.getAttribute("data-color"),Q=parseInt(k.replace("#","0x"),16);this.editingLight&&(this.editingLight.defaultColor=Q),D.forEach(X=>X.classList.remove("active")),F.classList.add("active"),O&&(O.value=k)})}),O&&O.addEventListener("input",F=>{let k=parseInt(F.target.value.replace("#","0x"),16);this.editingLight&&(this.editingLight.defaultColor=k),D.forEach(Q=>Q.classList.remove("active"))});let V=this.el.querySelector("#btn-custom-light-save"),L=this.el.querySelector("#btn-custom-light-delete");V&&V.addEventListener("click",()=>this.saveEditingLight()),L&&L.addEventListener("click",()=>{this.editingLight?.id&&this.deleteLight(this.editingLight.id)}),this.el.querySelectorAll(".drawer-nav-tab").forEach(F=>{F.addEventListener("click",()=>{let k=F.getAttribute("data-tab");this.switchTab(k)})})}populateSensorInputs(){let e={};try{e=JSON.parse(localStorage.getItem("ha_energy_3d_custom_sensors")||"{}")}catch{}let t={...this.currentSensorConfig,...e},i=(r,o)=>{let a=this.el.querySelector(r);a&&o&&(a.value=o)};i("#cfg-solax-power",t.solax_power),i("#cfg-solax-today",t.solax_today),i("#cfg-solax-week",t.solax_week),i("#cfg-solax-month",t.solax_month),i("#cfg-solax-year",t.solax_year),i("#cfg-octopus-power",t.octopus_electric_power),i("#cfg-octopus-export",t.octopus_export_power),i("#cfg-octopus-rate",t.octopus_rate),i("#cfg-octopus-spend",t.octopus_monthly_spend),i("#cfg-octopus-30min",t.octopus_electric_30min),i("#cfg-octopus-day",t.octopus_electric_day),i("#cfg-octopus-week",t.octopus_electric_week),i("#cfg-octopus-month",t.octopus_electric_month),i("#cfg-boiler-status",t.boiler_status),i("#cfg-gas-30min",t.octopus_gas_30min),i("#cfg-gas-day",t.octopus_gas_day),i("#cfg-gas-week",t.octopus_gas_week),i("#cfg-gas-month",t.octopus_gas_month),i("#cfg-zappi-power",t.myenergi_power),i("#cfg-zappi-status",t.myenergi_status),i("#cfg-zappi-energy",t.myenergi_energy),i("#cfg-peugeot-battery",t.peugeot_battery),i("#cfg-peugeot-range",t.peugeot_range),i("#cfg-thermostat-downstairs",t.thermostat_downstairs),i("#cfg-thermostat-upstairs",t.thermostat_upstairs),i("#cfg-sensor-fridge",t.sensor_fridge),i("#cfg-sensor-tv",t.sensor_tv),i("#cfg-light-living-lamp",t.light_living_lamp);let n=["lounge","kitchen","dining","hallway","wc","master","ensuite","bedroom2","bedroom3","bathroom","landing"];for(let r of n){let o=r==="master"?"master_bedroom":r;i(`#cfg-light-${r}`,t[`light_${o}`]||t.room_lights?.[o]?.entity_id||t.room_lights?.[o])}}readSensorInputs(){let e=t=>{let i=this.el.querySelector(t);return i?i.value.trim():""};return{solax_power:e("#cfg-solax-power"),solax_today:e("#cfg-solax-today"),solax_week:e("#cfg-solax-week"),solax_month:e("#cfg-solax-month"),solax_year:e("#cfg-solax-year"),octopus_electric_power:e("#cfg-octopus-power"),octopus_export_power:e("#cfg-octopus-export"),octopus_rate:e("#cfg-octopus-rate"),octopus_monthly_spend:e("#cfg-octopus-spend"),octopus_electric_30min:e("#cfg-octopus-30min"),octopus_electric_day:e("#cfg-octopus-day"),octopus_electric_week:e("#cfg-octopus-week"),octopus_electric_month:e("#cfg-octopus-month"),boiler_status:e("#cfg-boiler-status"),octopus_gas_30min:e("#cfg-gas-30min"),octopus_gas_day:e("#cfg-gas-day"),octopus_gas_week:e("#cfg-gas-week"),octopus_gas_month:e("#cfg-gas-month"),myenergi_power:e("#cfg-zappi-power"),myenergi_status:e("#cfg-zappi-status"),myenergi_energy:e("#cfg-zappi-energy"),peugeot_battery:e("#cfg-peugeot-battery"),peugeot_range:e("#cfg-peugeot-range"),thermostat_downstairs:e("#cfg-thermostat-downstairs"),thermostat_upstairs:e("#cfg-thermostat-upstairs"),sensor_fridge:e("#cfg-sensor-fridge"),sensor_tv:e("#cfg-sensor-tv"),light_living_lamp:e("#cfg-light-living-lamp"),light_lounge:e("#cfg-light-lounge"),light_kitchen:e("#cfg-light-kitchen"),light_dining:e("#cfg-light-dining"),light_hallway:e("#cfg-light-hallway"),light_wc:e("#cfg-light-wc"),light_master_bedroom:e("#cfg-light-master"),light_ensuite:e("#cfg-light-ensuite"),light_bedroom2:e("#cfg-light-bedroom2"),light_bedroom3:e("#cfg-light-bedroom3"),light_bathroom:e("#cfg-light-bathroom"),light_landing:e("#cfg-light-landing")}}openEntityPicker(e){this.activePickerTarget=e;let t=this.el.querySelector("#entity-picker-dialog");if(!t)return;let i=this.el.querySelector(e),n=this.el.querySelector("#picker-dialog-title");if(n&&i){let l=i.closest(".sensor-row")?.querySelector("label")?.innerText||"Select Entity";n.innerText=l}let r="all";e.includes("light")?r="light":e.includes("thermostat")?r="climate":e.includes("tv")?r="media_player":(e.includes("power")||e.includes("energy")||e.includes("fridge"))&&(r="sensor"),this.currentPickerFilter=r,this.el.querySelectorAll(".filter-chip").forEach(l=>l.classList.toggle("active",l.getAttribute("data-filter")===r)),t.classList.add("open");let a=this.el.querySelector("#picker-search-input");a&&(a.value="",setTimeout(()=>a.focus(),60)),this.renderPickerEntityList("",r)}renderPickerEntityList(e="",t="all"){let i=this.el.querySelector("#picker-entity-list");if(!i)return;let n=this.availableEntities||[];n.length||(n=["sensor.solax_pv_power_total","sensor.solax_today_s_solar_energy","sensor.solax_feed_in_power","sensor.octopus_home_mini_current_electricity_power","sensor.octopus_energy_electricity_current_rate","sensor.octopus_energy_electricity_current_month_cost","sensor.boiler_status","sensor.octopus_home_mini_gas_30min","sensor.myenergi_zappi_power","sensor.e2008_battery_level","sensor.e2008_battery_range","climate.downstairs","climate.upstairs","sensor.fridge_power","media_player.living_room_tv","light.living_room_lamp","light.living_room","light.kitchen","light.dining_room","light.hallway","light.downstairs_wc","light.master_bedroom","light.ensuite","light.bedroom_2","light.bedroom_3","light.family_bathroom","light.landing"]);let r=e.toLowerCase().trim(),o=n.filter(l=>{let c=(typeof l=="string"?l:l.entity_id||"").toLowerCase(),h=c.split(".")[0]||"";if(t!=="all"){if(t==="media_player"){if(h!=="media_player"&&!c.includes("tv")&&h!=="switch")return!1}else if(t==="climate"){if(h!=="climate"&&!c.includes("thermostat")&&!c.includes("temp"))return!1}else if(h!==t)return!1}return!(r&&!c.includes(r))});if(!o.length){i.innerHTML=`
        <div style="padding: 24px 12px; text-align: center; color: #94a3b8; font-size: 13px;">
          No matching entities found. You can type any entity ID directly into the input field!
        </div>
      `;return}i.innerHTML=o.map(l=>{let c=typeof l=="string"?l:l.entity_id,h=c.split(".")[0]||"sensor";return`
        <div class="entity-item-row" data-entity-id="${c}">
          <div style="display:flex;align-items:center;gap:8px;">
            <span>${h==="light"?"\u{1F4A1}":h==="climate"?"\u{1F321}\uFE0F":h==="switch"?"\u{1F50C}":h==="media_player"?"\u{1F4FA}":"\u{1F4CA}"}</span>
            <span class="entity-item-id">${c}</span>
          </div>
          <span class="entity-item-state">${h}</span>
        </div>
      `}).join(""),i.querySelectorAll(".entity-item-row").forEach(l=>{l.addEventListener("click",()=>{let c=l.getAttribute("data-entity-id");this.selectEntityForTarget(c)})})}selectEntityForTarget(e){if(this.activePickerTarget){let i=this.el.querySelector(this.activePickerTarget);i&&(i.value=e,i.focus(),i.style.borderColor="#10b981",i.style.boxShadow="0 0 10px rgba(16, 185, 129, 0.6)",setTimeout(()=>{i.style.borderColor="",i.style.boxShadow=""},1200))}let t=this.el.querySelector("#entity-picker-dialog");t&&t.classList.remove("open")}setAvailableEntities(e){this.availableEntities=e||[],this.updateDatalist()}updateDatalist(){let e=this.el.querySelector("#ha-entities-datalist");if(!e)return;let t=this.availableEntities.map(i=>typeof i=="string"?i:i.entity_id||"").filter(Boolean);e.innerHTML=t.map(i=>`<option value="${i}"></option>`).join("")}setCustomLights(e){this.customLights=e||[],this.activeTab==="lights"&&this.renderDrawerContent()}openLightEditor(e=null){let t=this.el.querySelector("#light-customizer-dialog");if(!t)return;if(e){let n=this.customLights.find(r=>r.id===e);if(!n)return;this.editingLight=JSON.parse(JSON.stringify(n)),this.editingLight.isNew=!1,this.el.querySelector("#light-customizer-title").innerText=`\u{1F4A1} Configure & Move: ${this.editingLight.name}`,this.el.querySelector("#btn-custom-light-delete").style.display="block"}else{let n=this.activePreset==="downstairs",r=n?2.15:4.55,o=n?"ground":"first";this.editingLight={id:`light_custom_${Date.now()}`,name:`New Light ${this.customLights.length+1}`,floor:o,pos:{x:2.2,y:r,z:-3.5},range:6.5,maxIntensity:4,defaultColor:16769689,entity_id:"",isNew:!0},this.el.querySelector("#light-customizer-title").innerText="\u2795 Add New 3D Light",this.el.querySelector("#btn-custom-light-delete").style.display="none"}this.el.querySelector("#custom-light-name").value=this.editingLight.name||"",this.el.querySelector("#custom-light-entity").value=this.editingLight.entity_id||"";let i=this.editingLight.floor||(this.editingLight.pos.y>3?"first":"ground");this.el.querySelector("#floor-btn-ground").classList.toggle("active",i==="ground"),this.el.querySelector("#floor-btn-first").classList.toggle("active",i==="first"),this.updateCoordInputs(this.editingLight.pos.x,this.editingLight.pos.y,this.editingLight.pos.z),this.onBeaconFocus(this.editingLight.id,this.editingLight.pos),t.classList.add("open")}updateCoordInputs(e,t,i){let n=(r,o)=>{let a=this.el.querySelector(r);a&&(a.value=o)};n("#coord-x-slider",e),n("#coord-x-val",e),n("#coord-y-slider",t),n("#coord-y-val",t),n("#coord-z-slider",i),n("#coord-z-val",i)}onCoordChange(e,t){if(!this.editingLight)return;let i=parseFloat(t);isNaN(i)||(this.editingLight.pos[e]=i,this.updateCoordInputs(this.editingLight.pos.x,this.editingLight.pos.y,this.editingLight.pos.z),this.onUpdateLightPosition(this.editingLight.id,this.editingLight.pos.x,this.editingLight.pos.y,this.editingLight.pos.z),this.onBeaconFocus(this.editingLight.id,this.editingLight.pos))}saveEditingLight(){if(!this.editingLight)return;this.editingLight.name=this.el.querySelector("#custom-light-name")?.value?.trim()||"Custom Light",this.editingLight.entity_id=this.el.querySelector("#custom-light-entity")?.value?.trim()||"";let e=this.el.querySelector("#floor-btn-first")?.classList.contains("active");if(this.editingLight.floor=e?"first":"ground",this.editingLight.isNew)delete this.editingLight.isNew,this.customLights.push(this.editingLight);else{let t=this.customLights.findIndex(i=>i.id===this.editingLight.id);t!==-1?this.customLights[t]=this.editingLight:this.customLights.push(this.editingLight)}this.onSaveCustomLights(this.customLights),this.onBeaconClear(),this.onDisableClickToPlace(),this.el.querySelector("#btn-pick-3d-point")?.classList.remove("active"),this.el.querySelector("#light-customizer-dialog")?.classList.remove("open"),this.renderDrawerContent()}deleteLight(e){confirm("Are you sure you want to delete this light from the 3D model?")&&(this.customLights=this.customLights.filter(t=>t.id!==e),this.onSaveCustomLights(this.customLights),this.onBeaconClear(),this.onDisableClickToPlace(),this.el.querySelector("#btn-pick-3d-point")?.classList.remove("active"),this.el.querySelector("#light-customizer-dialog")?.classList.remove("open"),this.renderDrawerContent())}autoDetectSensors(){let e=this.availableEntities.map(n=>typeof n=="string"?n:n.entity_id||"");if(!e.length)return;let t=(...n)=>{for(let r of n){let o=e.find(a=>a.toLowerCase().includes(r.toLowerCase()));if(o)return o}return""},i=(n,...r)=>{let o=this.el.querySelector(n);if(o&&!o.value){let a=t(...r);a&&(o.value=a)}};i("#cfg-solax-power","solax_pv_power","solax_power","pv_power","solar_power"),i("#cfg-solax-today","solax_today","solar_today","pv_energy_today"),i("#cfg-solax-week","solax_week","solar_week"),i("#cfg-solax-month","solax_month","solar_month"),i("#cfg-solax-year","solax_year","solar_year"),i("#cfg-octopus-power","home_mini_current_electricity","octopus_electricity_power","grid_power"),i("#cfg-octopus-export","feed_in_power","solax_export","grid_export"),i("#cfg-octopus-rate","electricity_current_rate","octopus_rate","current_rate"),i("#cfg-octopus-spend","electricity_current_month_cost","octopus_month_cost","electricity_cost"),i("#cfg-octopus-30min","home_mini_electricity_30min","electricity_30min"),i("#cfg-octopus-day","electricity_day","octopus_electricity_today"),i("#cfg-octopus-week","electricity_week"),i("#cfg-octopus-month","electricity_month"),i("#cfg-boiler-status","boiler","climate.boiler","switch.boiler","heating"),i("#cfg-gas-30min","home_mini_gas_30min","gas_30min"),i("#cfg-gas-day","gas_day","octopus_gas_today"),i("#cfg-gas-week","gas_week"),i("#cfg-gas-month","gas_month"),i("#cfg-zappi-power","zappi_power","myenergi_power","ev_power","charger_power"),i("#cfg-zappi-status","zappi_status","zappi_plug_status","myenergi_status","charger_status"),i("#cfg-zappi-energy","charge_added_session","zappi_energy","zappi_today"),i("#cfg-peugeot-battery","e2008_battery","peugeot_battery","battery_level","soc"),i("#cfg-peugeot-range","e2008_range","peugeot_range","range"),i("#cfg-thermostat-downstairs","climate.downstairs","climate.ground_floor","climate.hallway","climate.living_room","downstairs_temperature"),i("#cfg-thermostat-upstairs","climate.upstairs","climate.first_floor","climate.landing","climate.master_bedroom","upstairs_temperature"),i("#cfg-sensor-fridge","fridge","refrigerator","freezer","fridge_power","kitchen_fridge"),i("#cfg-sensor-tv","living_room_tv","lounge_tv","media_player.tv","media_player.living_room","switch.tv"),i("#cfg-light-living-lamp","living_room_lamp","corner_lamp","living_lamp","floor_lamp","standard_lamp","lamp"),i("#cfg-light-lounge","light.living","light.lounge","light.sitting_room","switch.living"),i("#cfg-light-kitchen","light.kitchen","light.kitchen_lights","switch.kitchen"),i("#cfg-light-dining","light.dining","light.dining_room","switch.dining"),i("#cfg-light-hallway","light.hallway","light.hall","light.entrance","switch.hallway"),i("#cfg-light-wc","light.wc","light.cloakroom","light.downstairs_toilet","switch.wc"),i("#cfg-light-master","light.master","light.bedroom_1","light.main_bedroom","switch.master"),i("#cfg-light-ensuite","light.ensuite","light.en_suite","switch.ensuite"),i("#cfg-light-bedroom2","light.bedroom_2","light.bed_2","light.guest_room","switch.bedroom_2"),i("#cfg-light-bedroom3","light.bedroom_3","light.bed_3","light.nursery","light.office","switch.bedroom_3"),i("#cfg-light-bathroom","light.bathroom","light.family_bathroom","switch.bathroom"),i("#cfg-light-landing","light.landing","light.stairs","light.upstairs_hallway","switch.landing")}openDrawerTab(e){let t=this.el.querySelector("#hud-drawer"),i=this.el.querySelector("#btn-drawer");t.classList.add("open"),i.classList.add("active"),this.switchTab(e)}switchTab(e){this.activeTab=e,this.el.querySelectorAll(".drawer-nav-tab").forEach(i=>{i.classList.toggle("active",i.getAttribute("data-tab")===e)}),this.renderDrawerContent()}renderDrawerContent(){let e=this.el.querySelector("#drawer-content"),t=this.lastData;if(t){if(this.activeTab==="solar"){let i=t.solar||{},n=ks(i.power_kw),r=n>.04;e.innerHTML=`
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div class="stat-label">SOLAX LIVE GENERATION</div>
            <div class="stat-val color-solar">${n.toFixed(2)} <span class="stat-unit">kW</span></div>
            <div class="stat-subtext">Status: ${r?"Generating \u2022 Active Flow":"Frozen (No Generation)"}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">TODAY</div>
            <div class="stat-val">${Number(i.today_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">THIS WEEK</div>
            <div class="stat-val">${Number(i.week_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">THIS MONTH</div>
            <div class="stat-val">${Number(i.month_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">THIS YEAR</div>
            <div class="stat-val">${Number(i.year_kwh||0).toFixed(0)} <span class="stat-unit">kWh</span></div>
          </div>
        </div>
      `}else if(this.activeTab==="electric"){let i=t.octopus_electric||{},n=ks(i.power_kw),r=n<-.02||!!i.is_exporting,o=Math.abs(n)>.03;e.innerHTML=`
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div class="stat-label">OCTOPUS GRID POWER (${o?r?"EXPORTING TO GRID":"IMPORTING FROM GRID":"IDLE / FROZEN"})</div>
            <div class="stat-val ${r?"color-grid-export":"color-grid-import"}">
              ${Math.abs(n).toFixed(2)} <span class="stat-unit">kW</span>
            </div>
            <div class="stat-subtext">Flow: ${o?r?"\u2B06\uFE0F House to Pylon":"\u2B07\uFE0F Pylon to House":"Frozen (0 kW)"}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">CURRENT TARIFF RATE</div>
            <div class="stat-val">${Number(i.current_rate_p||0).toFixed(2)} <span class="stat-unit">p/kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">MONTH TO DATE SPEND</div>
            <div class="stat-val">\xA3${Number(i.monthly_spend_gbp||0).toFixed(2)}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">30-MIN READING (MINI)</div>
            <div class="stat-val">${Number(i.reading_30min_kwh||0).toFixed(2)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">TODAY</div>
            <div class="stat-val">${Number(i.day_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">THIS WEEK</div>
            <div class="stat-val">${Number(i.week_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">THIS MONTH</div>
            <div class="stat-val">${Number(i.month_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
        </div>
      `}else if(this.activeTab==="gas"){let i=t.octopus_gas||{},n=!!(i.is_active&&i.boiler_status!=="off");e.innerHTML=`
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div class="stat-label">KITCHEN COMBI BOILER</div>
            <div class="stat-val color-gas">${n?"\u{1F525} Heating":"Standby"}</div>
            <div class="stat-subtext">Status: ${n?"Heating (Firing)":"Standby (Idle)"} &bull; Supply: External LPG Bulk Tank</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">30-MIN READING (MINI)</div>
            <div class="stat-val">${Number(i.reading_30min_kwh||0).toFixed(2)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">TODAY</div>
            <div class="stat-val">${Number(i.day_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">THIS WEEK</div>
            <div class="stat-val">${Number(i.week_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">THIS MONTH</div>
            <div class="stat-val">${Number(i.month_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">GAS RATE</div>
            <div class="stat-val">${Number(i.current_rate_p||0).toFixed(2)} <span class="stat-unit">p/kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">EST. MONTH SPEND</div>
            <div class="stat-val">\xA3${Number(i.monthly_spend_gbp||0).toFixed(2)}</div>
          </div>
        </div>
      `}else if(this.activeTab==="ev"){let i=t.ev||{},n=Math.min(Math.max(Number(i.battery_soc_pct||0),0),100),r=ks(i.charger_power_kw),o=!!(i.is_charging&&r>.04),a=i.is_connected!==!1,l=i.status_text||(o?`Charging @ ${r.toFixed(1)} kW`:a?"Connected (Idle)":"Disconnected");e.innerHTML=`
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
              <div>
                <div class="stat-label">\u26A1 myenergi ZAPPI EV CHARGER</div>
                <div class="stat-val color-ev" style="font-size:24px;">
                  ${o?`${r.toFixed(2)} <span class="stat-unit">kW</span>`:a?"Connected":"Disconnected"}
                  <span style="font-size: 11px; font-weight: 600; padding: 2px 7px; border-radius: 6px; background: rgba(255,255,255,0.08); color: ${o?"#00f59b":a?"#38bdf8":"#94a3b8"}; vertical-align: middle; margin-left: 6px;">
                    ${o?"\u26A1 CHARGING":a?"\u{1F50C} CONNECTED":"DISCONNECTED"}
                  </span>
                </div>
                <div class="stat-subtext" style="margin-top: 4px;">
                  Connection: <strong style="color:${a?o?"#00f59b":"#38bdf8":"#94a3b8"};">${a?"Plugged In & Connected":"Disconnected"}</strong> &bull;
                  Charging Rate: <strong style="color:${o?"#00f59b":"#94a3b8"};">${o?`${r.toFixed(2)} kW`:"0.00 kW (Idle)"}</strong>
                </div>
              </div>
              <button class="light-toggle-btn" style="padding:6px 12px;" id="btn-focus-charger">\u26A1 View Charger</button>
            </div>
          </div>

          <div class="stat-card stat-card-full">
            <div class="stat-label">PEUGEOT e-2008 BATTERY</div>
            <div class="stat-val color-ev">${n}% <span class="stat-unit">(${Number(i.range_miles||0)} miles)</span></div>
            <div class="battery-bar-container">
              <div class="battery-bar-fill" style="width: ${n}%"></div>
            </div>
            <div class="stat-subtext" style="margin-top: 6px;">Charging Cable: ${o?"\u26A1 Flowing to Car (5 Pulses)":a?"\u{1F50C} Plugged In (Idle)":"Disconnected"}</div>
          </div>

          <div class="stat-card">
            <div class="stat-label">CHARGING SPEED</div>
            <div class="stat-val">${r.toFixed(2)} <span class="stat-unit">kW</span></div>
            <div class="stat-subtext">Mode: ${i.charger_mode||"Eco+"}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">SESSION ENERGY ADDED</div>
            <div class="stat-val">${Number(i.energy_added_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
            <div class="stat-subtext">Source: Solax PV & Grid</div>
          </div>
        </div>
      `;let c=e.querySelector("#btn-focus-charger");c&&c.addEventListener("click",()=>this.onPresetClick("charger"))}else if(this.activeTab==="heating"){let i=t.thermostats||{},n=i.downstairs||{},r=i.upstairs||{},o=t.octopus_gas||{},a=Number(n.current_temp||20),l=Number(n.target_temp||21),c=!!n.is_heating,h=Wa(a),u=Number(r.current_temp||19.5),d=Number(r.target_temp||19.5),f=!!r.is_heating,g=Wa(u),x=!!o.is_active;e.innerHTML=`
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
              <div>
                <div class="stat-label">DOWNSTAIRS HEATING & CLIMATE</div>
                <div class="stat-val" style="color: ${h.color}; font-size: 26px;">
                  ${a.toFixed(1)} <span class="stat-unit">\xB0C</span>
                  <span style="font-size: 11px; font-weight: 600; padding: 2px 7px; border-radius: 6px; background: rgba(255,255,255,0.08); color: ${h.color}; vertical-align: middle; margin-left: 6px;">
                    ${h.icon} ${h.label}
                  </span>
                </div>
                <div class="stat-subtext" style="margin-top: 4px;">
                  Target Setpoint: ${l.toFixed(1)}\xB0C &bull; 
                  <span style="color: ${c?"#f97316":"#94a3b8"}; font-weight: ${c?"700":"normal"};">
                    ${c?"\u{1F525} Calling for Heat":"\u2744\uFE0F Thermostat Idle / Off"}
                  </span>
                </div>
              </div>
              <button class="light-toggle-btn" style="padding:6px 12px;" id="btn-focus-down">\u{1F6CB}\uFE0F View Ground Floor</button>
            </div>
          </div>

          <div class="stat-card stat-card-full">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
              <div>
                <div class="stat-label">UPSTAIRS HEATING & CLIMATE</div>
                <div class="stat-val" style="color: ${g.color}; font-size: 26px;">
                  ${u.toFixed(1)} <span class="stat-unit">\xB0C</span>
                  <span style="font-size: 11px; font-weight: 600; padding: 2px 7px; border-radius: 6px; background: rgba(255,255,255,0.08); color: ${g.color}; vertical-align: middle; margin-left: 6px;">
                    ${g.icon} ${g.label}
                  </span>
                </div>
                <div class="stat-subtext" style="margin-top: 4px;">
                  Target Setpoint: ${d.toFixed(1)}\xB0C &bull; 
                  <span style="color: ${f?"#f97316":"#94a3b8"}; font-weight: ${f?"700":"normal"};">
                    ${f?"\u{1F525} Calling for Heat":"\u2744\uFE0F Thermostat Idle / Off"}
                  </span>
                </div>
              </div>
              <button class="light-toggle-btn" style="padding:6px 12px;" id="btn-focus-up">\u{1F6CF}\uFE0F View First Floor</button>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-label">KITCHEN COMBI BOILER</div>
            <div class="stat-val" style="color: ${x?"#f97316":"#94a3b8"};">
              ${x?"\u{1F525} Heating":"Standby"}
            </div>
            <div class="stat-subtext">
              Status: ${x?"Heating (Firing)":"Standby"} &bull; Supply: LPG Bulk Tank
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-label">GAS TODAY</div>
            <div class="stat-val">${Number(o.day_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
            <div class="stat-subtext">Supply: External LPG Bulk Tank</div>
          </div>
        </div>
      `;let m=e.querySelector("#btn-focus-down");m&&m.addEventListener("click",()=>this.onPresetClick("downstairs"));let p=e.querySelector("#btn-focus-up");p&&p.addEventListener("click",()=>this.onPresetClick("upstairs"))}else if(this.activeTab==="lights"){let i=t.room_lights||{},n=this.customLights||[],r="";for(let h of n){let u=i[h.id]||(h.id==="living_lamp"?t.appliances?.living_lamp:{})||{},d=!!u.is_on,f=u.brightness!==void 0?Math.round(u.brightness/255*100):100,g=h.isFloorLamp||h.name?.toLowerCase().includes("lamp")?"\u{1F6CB}\uFE0F":"\u{1F4A1}",x=h.floor==="first"||h.pos&&h.pos.y>3?"\u{1F6CF}\uFE0F Upstairs":"\u{1F6CB}\uFE0F Downstairs",m=h.pos?`(${h.pos.x.toFixed(1)}, ${h.pos.y.toFixed(1)}, ${h.pos.z.toFixed(1)})`:"";r+=`
          <div class="light-card ${d?"active":""}">
            <div class="light-card-top">
              <span class="light-name">${g} ${h.name}</span>
              <span class="light-status-pill ${d?"on":"off"}">${d?"\u{1F4A1} ON":"OFF"}</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; font-size:10px; color:#94a3b8;">
              <span>${x}</span>
              <span style="font-size:9px;">${m}</span>
            </div>
            <div style="font-size:10px; color:#94a3b8;">${d?`Brightness: ${f}%`:"Light is off"}</div>
            <button class="light-toggle-btn" data-entity="${h.entity_id||""}" data-light-id="${h.id}">
              ${d?"Turn Off":"Turn On"}
            </button>
            <div class="light-card-footer">
              <button class="btn-light-sub btn-edit-light-coords" data-light-id="${h.id}">
                \u2699\uFE0F Move / Edit
              </button>
              <button class="btn-light-del btn-delete-light-item" data-light-id="${h.id}" title="Delete light">
                \u{1F5D1}\uFE0F
              </button>
            </div>
          </div>
        `}e.innerHTML=`
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; gap:8px; flex-wrap:wrap;">
          <div>
            <div style="font-weight:700; font-size:13px; color:#f8fafc;">\u{1F4A1} Interactive 3D Lights (${n.length})</div>
            <div style="font-size:11px; color:#94a3b8;">Add, delete, move around in 3D, and link Home Assistant entities</div>
          </div>
          <button class="btn-action" id="btn-add-light-ui" style="background:#0284c7; color:#fff; display:flex; align-items:center; gap:6px; padding:6px 14px; border-radius:8px; font-weight:600; font-size:12px; cursor:pointer; border:none;">
            <span>\u2795</span>
            <span>Add Light</span>
          </button>
        </div>
        <div class="light-grid">
          ${r}
        </div>
      `,e.querySelectorAll(".light-toggle-btn").forEach(h=>{h.addEventListener("click",()=>{let u=h.getAttribute("data-entity"),d=h.getAttribute("data-light-id");u?this.onToggleLight(u):d&&(t.room_lights?.[d]&&(t.room_lights[d].is_on=!t.room_lights[d].is_on),d==="living_lamp"&&t.appliances?.living_lamp&&(t.appliances.living_lamp.is_on=!t.appliances.living_lamp.is_on),this.renderDrawerContent())})});let a=e.querySelector("#btn-add-light-ui");a&&a.addEventListener("click",()=>{this.openLightEditor(null)}),e.querySelectorAll(".btn-edit-light-coords").forEach(h=>{h.addEventListener("click",()=>{let u=h.getAttribute("data-light-id");this.openLightEditor(u)})}),e.querySelectorAll(".btn-delete-light-item").forEach(h=>{h.addEventListener("click",()=>{let u=h.getAttribute("data-light-id");this.deleteLight(u)})})}}}update(e,t=[]){this.lastData=e;let i=ks(e.solar?.power_kw),n=ks(e.octopus_electric?.power_kw),r=ks(e.ev?.charger_power_kw),o=n<-.02||!!e.octopus_electric?.is_exporting,a=this.el.querySelector("#hdr-solar-kw"),l=this.el.querySelector("#hdr-grid-kw"),c=this.el.querySelector("#hdr-ev-kw"),h=this.el.querySelector("#hdr-gas-val");a&&(a.innerText=`${i.toFixed(2)} kW`),l&&(l.innerText=`${o?"Export ":"Import "}${Math.abs(n).toFixed(2)} kW`,l.className=`hud-flow-val ${o?"color-grid-export":"color-grid-import"}`),c&&(c.innerText=`${r.toFixed(2)} kW`),h&&(h.innerText=e.octopus_gas?.is_active?"Heating":"Standby");let u=this.el.querySelector("#hotspots-container");u.innerHTML="";for(let d of t){if(!d.visible)continue;let f="";if(d.id==="solar"){let x=i>.04;f=`<span>\u2600\uFE0F Solax</span> <span class="color-solar">${i.toFixed(2)} kW</span> <span style="font-size:9px;color:${x?"#10b981":"#64748b"}">\u25CF</span>`}else if(d.id==="grid"){let x=Number(e.octopus_electric?.current_rate_p||0).toFixed(1);f=`<span>\u26A1 Octopus</span> <span>${Math.abs(n).toFixed(1)} kW</span> <span style="color:#94a3b8">(${x}p)</span>`}else if(d.id==="boiler")f=`<span>\u{1F525} Boiler</span> <span class="color-gas">${e.octopus_gas?.is_active?"Heating":"Standby"}</span>`;else if(d.id==="ev")f=`<span>\u{1F697} Peugeot</span> <span class="color-ev">${e.ev?.battery_soc_pct||68}%</span>`;else if(d.id==="ev_charger"){let x=e.ev||{},m=!!x.is_charging,p=x.is_connected!==!1,v=Number(x.charger_power_kw||0),A="Disconnected";m?A=`\u26A1 ${v.toFixed(1)} kW`:p&&(A="Connected"),f=`<span>\u26A1 Zappi</span> <span style="color:${m?"#00f59b":p?"#38bdf8":"#94a3b8"};font-weight:700;">${A}</span>`}else if(d.id==="thermostat_downstairs"){let x=e.thermostats?.downstairs||{},m=Number(x.current_temp||20).toFixed(1),p=!!x.is_heating,v=Wa(x.current_temp||20);f=`<span>\u{1F321}\uFE0F Downstairs</span> <span style="color:${v.color};font-weight:700;">${m}\xB0C</span> <span style="font-size:10px;">${v.icon}</span> ${p?'<span style="color:#f97316;font-size:9px;font-weight:700;">HEATING</span>':""}`}else if(d.id==="thermostat_upstairs"){let x=e.thermostats?.upstairs||{},m=Number(x.current_temp||19.5).toFixed(1),p=!!x.is_heating,v=Wa(x.current_temp||19.5);f=`<span>\u{1F321}\uFE0F Upstairs</span> <span style="color:${v.color};font-weight:700;">${m}\xB0C</span> <span style="font-size:10px;">${v.icon}</span> ${p?'<span style="color:#f97316;font-size:9px;font-weight:700;">HEATING</span>':""}`}else if(d.id==="appliance_fridge"){let x=e.appliances?.fridge||{},m=x.power_w!==void 0?`${x.power_w} W`:`${((x.power_kw||.085)*1e3).toFixed(0)} W`,p=!!x.is_active;f=`<span>\u{1F9CA} Fridge</span> <span style="color:#38bdf8;font-weight:700;">${m}</span> <span style="font-size:9px;color:${p?"#10b981":"#64748b"}">\u25CF</span>`}else if(d.id==="appliance_tv"){let m=!!(e.appliances?.tv||{}).is_on;f=`<span>\u{1F4FA} Living TV</span> <span style="color:${m?"#60a5fa":"#94a3b8"};font-weight:700;">${m?"\u25B6 Playing":"OFF"}</span> ${m?'<button class="btn-tv-audio" style="margin-left:4px;padding:1px 5px;border-radius:4px;background:rgba(255,255,255,0.2);border:none;color:#fff;cursor:pointer;font-size:9px;">\u{1F50A} Sound</button>':""}`}let g=document.createElement("div");g.className="hotspot-badge",g.style.left=`${d.x}px`,g.style.top=`${d.y}px`,g.innerHTML=f,g.addEventListener("click",x=>{if(d.id==="appliance_tv"){if(x.target.closest(".btn-tv-audio")){x.stopPropagation(),this.onToggleTvAudio&&this.onToggleTvAudio();return}let v=e.appliances?.tv;v?.entity_id?this.onToggleLight(v.entity_id):v&&(v.is_on=!v.is_on,this.updateData(e)),this.onPresetClick("downstairs");return}else if(d.id==="appliance_fridge"){this.openDrawerTab("electric"),this.onPresetClick("downstairs");return}else if(d.id==="ev_charger"){this.openDrawerTab("ev"),this.onPresetClick("charger");return}let m={solar:"solar",grid:"electric",boiler:"gas",ev:"ev",thermostat_downstairs:"heating",thermostat_upstairs:"heating"},p={thermostat_downstairs:"downstairs",thermostat_upstairs:"upstairs"};this.openDrawerTab(m[d.id]||"solar"),this.onPresetClick(p[d.id]||d.id)}),u.appendChild(g)}this.el.querySelector("#hud-drawer").classList.contains("open")&&this.renderDrawerContent()}};var Gd={solar:{power_kw:2.85,today_kwh:14.6,week_kwh:86.4,month_kwh:342.1,year_kwh:3820.5,inverter_temp:34.2,status:"Generating"},octopus_electric:{power_kw:.72,is_exporting:!1,current_rate_p:24.85,monthly_spend_gbp:74.2,reading_30min_kwh:.36,day_kwh:8.4,week_kwh:54.2,month_kwh:218.6,tariff_name:"Octopus Flexible / Agile"},octopus_gas:{is_active:!0,power_kw:1.45,reading_30min_kwh:.72,day_kwh:12.8,week_kwh:78.5,month_kwh:310.2,current_rate_p:6.24,monthly_spend_gbp:38.65,boiler_status:"Heating"},ev:{is_charging:!0,is_connected:!0,status_text:"Charging @ 7.2 kW",is_plugged:!0,charger_power_kw:7.2,energy_added_kwh:22.4,charger_mode:"Eco+",battery_soc_pct:68,range_miles:142,battery_capacity_kwh:50},home:{total_power_kw:2.15},thermostats:{downstairs:{entity_id:"climate.downstairs",current_temp:20.5,target_temp:21,state:"heat",hvac_action:"heating",is_heating:!0},upstairs:{entity_id:"climate.upstairs",current_temp:19.2,target_temp:19.5,state:"heat",hvac_action:"idle",is_heating:!1}},room_lights:{lounge:{is_on:!1,brightness:0,entity_id:""},kitchen:{is_on:!1,brightness:0,entity_id:""},dining:{is_on:!1,brightness:0,entity_id:""},hallway:{is_on:!1,brightness:0,entity_id:""},wc:{is_on:!1,brightness:0,entity_id:""},master_bedroom:{is_on:!1,brightness:0,entity_id:""},ensuite:{is_on:!1,brightness:0,entity_id:""},bedroom2:{is_on:!1,brightness:0,entity_id:""},bedroom3:{is_on:!1,brightness:0,entity_id:""},bathroom:{is_on:!1,brightness:0,entity_id:""},landing:{is_on:!1,brightness:0,entity_id:""},living_lamp:{is_on:!0,brightness:220,entity_id:"light.living_room_lamp"}},appliances:{fridge:{entity_id:"sensor.fridge_power",power_kw:.065,is_active:!0},tv:{entity_id:"media_player.living_room_tv",is_on:!0,power_kw:.11},living_lamp:{entity_id:"light.living_room_lamp",is_on:!0,brightness:255}}};function Xd(s,e=""){let t=parseFloat(s);if(isNaN(t))return 0;let i=(e||"").toLowerCase().trim();return i==="w"||i==="va"||i==="watt"||i==="watts"?t/1e3:i==="kw"||i==="kva"||i==="kilowatt"||i==="kilowatts"?t:Math.abs(t)>=20?t/1e3:t}function mx(s,e=""){let t=parseFloat(s);if(isNaN(t))return 0;let i=(e||"").toLowerCase().trim();return i==="wh"?t/1e3:i==="kwh"?t:i==="mwh"?t*1e3:Math.abs(t)>=1e3?t/1e3:t}function gx(s){let e=Number(s);return isNaN(e)?{label:"Comfortable",color:"#10b981",icon:"\u2728",code:"comfortable"}:e<16?{label:"Cold (<16\xB0C)",color:"#38bdf8",icon:"\u2744\uFE0F",code:"cold"}:e>22?{label:"Hot (>22\xB0C)",color:"#ef4444",icon:"\u{1F525}",code:"hot"}:{label:"Comfortable (16\u201322\xB0C)",color:"#10b981",icon:"\u2728",code:"comfortable"}}var ch=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config={},this._hass=null,this.sceneManager=null,this.hud=null,this.energyData=JSON.parse(JSON.stringify(Gd));try{let e=JSON.parse(localStorage.getItem("ha_energy_3d_custom_sensors")||"{}");this.customSensors=e}catch{this.customSensors={}}try{let e=JSON.parse(localStorage.getItem("ha_energy_3d_custom_lights")||"null");this.customLights=e&&Array.isArray(e)&&e.length?e:JSON.parse(JSON.stringify(Va));let t=this.customLights.find(i=>i.id==="living_lamp");t&&(t.name==="Living Room Corner Lamp"||!t.name)&&(t.name="Living Room Lamp")}catch{this.customLights=JSON.parse(JSON.stringify(Va))}}static getStubConfig(){return{type:"custom:ha-energy-3d-card",title:"Home Energy 3D",model_url:"Taylor_Wimpey_Blair.glb",height:"560px",solax_power:"sensor.solax_pv_power_total",solax_today:"sensor.solax_today_s_solar_energy",solax_week:"sensor.solax_this_week_solar_energy",solax_month:"sensor.solax_this_month_solar_energy",solax_year:"sensor.solax_this_year_solar_energy",octopus_electric_power:"sensor.octopus_home_mini_current_electricity_power",octopus_export_power:"sensor.solax_feed_in_power",octopus_rate:"sensor.octopus_energy_electricity_current_rate",octopus_monthly_spend:"sensor.octopus_energy_electricity_current_month_cost",octopus_electric_30min:"sensor.octopus_home_mini_electricity_30min",octopus_electric_day:"sensor.octopus_energy_electricity_day",octopus_electric_week:"sensor.octopus_energy_electricity_week",octopus_electric_month:"sensor.octopus_energy_electricity_month",boiler_status:"sensor.boiler_status",octopus_gas_30min:"sensor.octopus_home_mini_gas_30min",octopus_gas_day:"sensor.octopus_energy_gas_day",octopus_gas_week:"sensor.octopus_energy_gas_week",octopus_gas_month:"sensor.octopus_energy_gas_month",octopus_gas_rate:"sensor.octopus_energy_gas_current_rate",octopus_gas_spend:"sensor.octopus_energy_gas_current_month_cost",myenergi_power:"sensor.myenergi_zappi_power",myenergi_status:"sensor.myenergi_zappi_status",myenergi_energy:"sensor.myenergi_zappi_charge_added_session",peugeot_battery:"sensor.e2008_battery_level",peugeot_range:"sensor.e2008_battery_range",thermostat_downstairs:"climate.downstairs",thermostat_upstairs:"climate.upstairs",sensor_fridge:"sensor.fridge_power",sensor_tv:"media_player.living_room_tv",light_living_lamp:"light.living_room_lamp",light_lounge:"",light_kitchen:"",light_dining:"",light_hallway:"",light_wc:"",light_master_bedroom:"",light_ensuite:"",light_bedroom2:"",light_bedroom3:"",light_bathroom:"",light_landing:""}}static async getConfigElement(){return await Promise.resolve().then(()=>(Wd(),Vd)),document.createElement("ha-energy-3d-card-editor")}setConfig(e){this._config={model_url:"Taylor_Wimpey_Blair.glb",height:"560px",night_mode:!1,auto_rotate:!1,...e,...this.customSensors},this.wrapper&&(this.wrapper.style.height=this._config.height)}connectedCallback(){this.sceneManager||this.render()}disconnectedCallback(){this.sceneManager&&(this.sceneManager.destroy(),this.sceneManager=null)}render(){let e=this._config.height||"560px";this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          position: relative;
          border-radius: var(--ha-card-border-radius, 16px);
          overflow: hidden;
          background: #070b14;
          box-shadow: var(--ha-card-box-shadow, 0 8px 30px rgba(0, 0, 0, 0.4));
        }
        .container {
          position: relative;
          width: 100%;
          height: ${e};
          overflow: hidden;
        }
        .viewport {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
      </style>
      <div class="container" id="card-container">
        <div class="viewport" id="viewport"></div>
      </div>
    `,this.wrapper=this.shadowRoot.querySelector("#card-container");let t=this.shadowRoot.querySelector("#viewport");this.sceneManager=new Ga(t,{modelUrl:this._config.model_url,nightMode:this._config.night_mode,autoRotate:this._config.auto_rotate,customLights:this.customLights}),this.hud=new Xa(this.wrapper,{currentSensorConfig:this._config,customLights:this.customLights,onPresetClick:i=>this.sceneManager.setCameraPreset(i),onToggleXray:i=>this.sceneManager.setXRayRoof(i),onToggleNight:i=>this.sceneManager.setNightMode(i),onToggleRotate:i=>{this.sceneManager.controls.autoRotate=i},onToggleLight:i=>this.toggleLightEntity(i),onToggleTvAudio:()=>this.sceneManager.toggleTvAudio(),onSaveSensors:i=>{this.customSensors=i,this._config={...this._config,...i},this.updateStatesFromHass()},onSaveCustomLights:i=>{this.customLights=i;try{localStorage.setItem("ha_energy_3d_custom_lights",JSON.stringify(i))}catch{}this.sceneManager.rebuildCustomLights(i),this.updateStatesFromHass()},onUpdateLightPosition:(i,n,r,o)=>{this.sceneManager.updateLightPosition(i,n,r,o)},onBeaconFocus:(i,n)=>{this.sceneManager.setEditingLightBeacon(i,n)},onBeaconClear:()=>{this.sceneManager.clearEditingLightBeacon()},onEnableClickToPlace:i=>{this.sceneManager.enableClickToPlace(i)},onDisableClickToPlace:()=>{this.sceneManager.disableClickToPlace()}}),this.sceneManager.onFrame=()=>{let i=this.sceneManager.getProjectedHotspots();this.hud.update(this.energyData,i)},this._hass&&this.updateStatesFromHass()}set hass(e){this._hass=e,this.hud&&e?.states&&this.hud.setAvailableEntities(Object.keys(e.states)),this.updateStatesFromHass()}getPowerInKw(e,t=0){if(!this._hass||!e)return t;let i=this._hass.states[e];if(!i||i.state==="unavailable"||i.state==="unknown")return t;let n=i.attributes?.unit_of_measurement||"";return Xd(i.state,n)}getEnergyInKwh(e,t=0){if(!this._hass||!e)return t;let i=this._hass.states[e];if(!i||i.state==="unavailable"||i.state==="unknown")return t;let n=i.attributes?.unit_of_measurement||"";return mx(i.state,n)}getEntityNumericValue(e,t=0){if(!this._hass||!e)return t;let i=this._hass.states[e];if(!i||i.state==="unavailable"||i.state==="unknown")return t;let n=parseFloat(i.state);return isNaN(n)?t:n}getEntityState(e,t=""){if(!this._hass||!e)return t;let i=this._hass.states[e];return!i||i.state==="unavailable"||i.state==="unknown"?t:i.state}updateStatesFromHass(){if(!this._hass)return;let e={...this._config,...this.customSensors},t=this.getPowerInKw(e.solax_power,this.energyData.solar.power_kw);this.energyData.solar={power_kw:t,today_kwh:this.getEnergyInKwh(e.solax_today,this.energyData.solar.today_kwh),week_kwh:this.getEnergyInKwh(e.solax_week,this.energyData.solar.week_kwh),month_kwh:this.getEnergyInKwh(e.solax_month,this.energyData.solar.month_kwh),year_kwh:this.getEnergyInKwh(e.solax_year,this.energyData.solar.year_kwh),status:t>.04?"Generating":"Idle"};let i=this.getPowerInKw(e.octopus_electric_power,this.energyData.octopus_electric.power_kw),n=this.getPowerInKw(e.octopus_export_power,0),r=!1;n>.04?(i=-n,r=!0):i<-.04&&(r=!0),this.energyData.octopus_electric={power_kw:i,is_exporting:r,current_rate_p:this.getEntityNumericValue(e.octopus_rate,this.energyData.octopus_electric.current_rate_p),monthly_spend_gbp:this.getEntityNumericValue(e.octopus_monthly_spend,this.energyData.octopus_electric.monthly_spend_gbp),reading_30min_kwh:this.getEnergyInKwh(e.octopus_electric_30min,this.energyData.octopus_electric.reading_30min_kwh),day_kwh:this.getEnergyInKwh(e.octopus_electric_day,this.energyData.octopus_electric.day_kwh),week_kwh:this.getEnergyInKwh(e.octopus_electric_week,this.energyData.octopus_electric.week_kwh),month_kwh:this.getEnergyInKwh(e.octopus_electric_month,this.energyData.octopus_electric.month_kwh)};let o=this.getThermostatState(e.thermostat_downstairs,this.energyData.thermostats?.downstairs),a=this.getThermostatState(e.thermostat_upstairs,this.energyData.thermostats?.upstairs);this.energyData.thermostats={downstairs:o,upstairs:a};let l=!!(o.is_heating||a.is_heating),c=!1;if(e.boiler_status){let C=this.getEntityState(e.boiler_status,"");(C==="on"||C==="heat"||C==="heating"||C==="Central Heating")&&(c=!0)}let h=l||c,u=h?"Heating":"Standby";this.energyData.octopus_gas={is_active:h,power_kw:h?1.45:0,boiler_status:u,reading_30min_kwh:this.getEnergyInKwh(e.octopus_gas_30min,this.energyData.octopus_gas.reading_30min_kwh),day_kwh:this.getEnergyInKwh(e.octopus_gas_day,this.energyData.octopus_gas.day_kwh),week_kwh:this.getEnergyInKwh(e.octopus_gas_week,this.energyData.octopus_gas.week_kwh),month_kwh:this.getEnergyInKwh(e.octopus_gas_month,this.energyData.octopus_gas.month_kwh),current_rate_p:this.getEntityNumericValue(e.octopus_gas_rate,this.energyData.octopus_gas.current_rate_p),monthly_spend_gbp:this.getEntityNumericValue(e.octopus_gas_spend,this.energyData.octopus_gas.monthly_spend_gbp)};let d=this.getPowerInKw(e.myenergi_power,this.energyData.ev.charger_power_kw),f=this.getEntityState(e.myenergi_status,"").toLowerCase(),g=!0,x="Connected";if(f)f.includes("charg")?(g=!0,x="Charging"):f.includes("connect")||f.includes("wait")||f.includes("pause")||f.includes("plug")||f.includes("complete")?(g=!0,x="Connected (Idle)"):f.includes("disconn")||f==="off"?(g=!1,x="Disconnected"):x=f.charAt(0).toUpperCase()+f.slice(1);else if(d>.04)g=!0,x="Charging";else{let C=this.getEntityNumericValue(e.peugeot_battery,0)>0;g=C,x=C?"Connected (Idle)":"Disconnected"}let m=d>.04;m&&(x=`Charging @ ${d.toFixed(1)} kW`),this.energyData.ev={is_charging:m,is_connected:g,status_text:x,charger_power_kw:d,energy_added_kwh:this.getEnergyInKwh(e.myenergi_energy,this.energyData.ev.energy_added_kwh),charger_mode:d>3?"Fast":"Eco+",battery_soc_pct:this.getEntityNumericValue(e.peugeot_battery,this.energyData.ev.battery_soc_pct),range_miles:this.getEntityNumericValue(e.peugeot_range,this.energyData.ev.range_miles)};let p={};for(let C of this.customLights){let D=C.entity_id||e[`light_${C.id}`]||e.room_lights?.[C.id]||(C.id==="living_lamp"?e.light_living_lamp:void 0);p[C.id]=this.getLightState(D,this.energyData.room_lights?.[C.id])}this.energyData.room_lights=p;let v=this.getPowerInKw(e.sensor_fridge,this.energyData.appliances?.fridge?.power_kw??.085),A=this.getEntityState(e.sensor_fridge,""),S=v>.005||A==="on",T=e.sensor_tv&&this._hass?this._hass.states[e.sensor_tv]:null,w=!1,_=0;if(T){let C=T.state;w=C==="on"||C==="playing"||C==="paused"||C==="idle",T.attributes?.unit_of_measurement?(_=Xd(C,T.attributes.unit_of_measurement),w=_>.015):_=w?.095:.001}else this.energyData.appliances?.tv&&(w=!!this.energyData.appliances.tv.is_on,_=this.energyData.appliances.tv.power_kw);let M=e.light_living_lamp||this.customLights.find(C=>C.id==="living_lamp"||C.name?.toLowerCase().includes("corner lamp"))?.entity_id,U=this.getLightState(M,this.energyData.appliances?.living_lamp);this.energyData.appliances={fridge:{entity_id:e.sensor_fridge||"",power_kw:v,power_w:Math.round(v*1e3),is_active:S,state:S?"Running":"Standby"},tv:{entity_id:e.sensor_tv||"",is_on:w,power_kw:_,power_w:Math.round(_*1e3),state:w?"On":"Standby"},living_lamp:U},this.sceneManager&&(this.sceneManager.updateEnergyData(this.energyData),this.sceneManager.updateRoomLights(p),this.sceneManager.updateAppliances(this.energyData.appliances))}getThermostatState(e,t={}){let i={entity_id:e||t?.entity_id||"",current_temp:t?.current_temp??20,target_temp:t?.target_temp??21,hvac_action:t?.hvac_action||"idle",is_heating:t?.is_heating||!1,state:t?.state||"heat"};if(!this._hass||!e)return i;let n=this._hass.states[e];if(!n||n.state==="unavailable"||n.state==="unknown")return i;i.state=n.state;let r=n.attributes||{};if(r.current_temperature!==void 0)i.current_temp=parseFloat(r.current_temperature);else{let o=parseFloat(n.state);isNaN(o)||(i.current_temp=o)}return r.temperature!==void 0?i.target_temp=parseFloat(r.temperature):r.target_temp_high!==void 0&&(i.target_temp=parseFloat(r.target_temp_high)),i.hvac_action=r.hvac_action||(n.state==="heating"?"heating":n.state==="off"?"off":"idle"),i.is_heating=i.hvac_action==="heating"||i.target_temp!==null&&i.current_temp<i.target_temp&&n.state!=="off",i.comfort=gx(i.current_temp),i}getLightState(e,t={}){if(!e||typeof e!="string"||!e.trim())return{entity_id:"",is_on:!1,brightness:0,rgb_color:null};let i=e.trim(),n={entity_id:i,is_on:!1,brightness:0,rgb_color:null};if(!this._hass)return n;let r=this._hass.states[i];if(!r||r.state==="unavailable"||r.state==="unknown")return n;n.is_on=r.state==="on";let o=r.attributes||{};return n.brightness=o.brightness!==void 0?o.brightness:n.is_on?255:0,o.rgb_color&&Array.isArray(o.rgb_color)&&(n.rgb_color=o.rgb_color),n}toggleLightEntity(e){if(!this._hass||!e)return;let t=e.split(".")[0]||"light";try{this._hass.callService(t,"toggle",{entity_id:e})}catch(i){console.warn("Call service error:",i)}}getCardSize(){return 8}};customElements.define("ha-energy-3d-card",ch);window.customCards=window.customCards||[];window.customCards.push({type:"ha-energy-3d-card",name:"Home Energy 3D Card",description:"Interactive 3D Energy Flow Card for Solax Solar, Octopus Energy, myenergi Zappi, and Peugeot EV",preview:!0});export{ch as HaEnergy3DCard,Xd as autoFigureKw,mx as autoFigureKwh,gx as getComfortStatus};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=ha-energy-3d-card.js.map
