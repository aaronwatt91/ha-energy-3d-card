var gf=Object.defineProperty;var _f=(s,e,t)=>()=>{if(t)throw t[0];try{return s&&(e=s(s=0)),e}catch(n){throw t=[n],n}};var xf=(s,e)=>{for(var t in e)gf(s,t,{get:e[t],enumerable:!0})};var ff={};xf(ff,{HaEnergy3DCardEditor:()=>Ml});var Ml,pf=_f(()=>{Ml=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config={}}setConfig(e){this._config=e,this.render()}set hass(e){this._hass=e}render(){let e=this._config;this.shadowRoot.innerHTML=`
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
            <label>Kitchen Washing Machine Power</label>
            <input type="text" data-key="sensor_washer" value="${e.sensor_washer||"sensor.washing_machine_power"}">
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
            <input type="text" data-key="light_lounge" value="${e.light_lounge||""}" placeholder="e.g. light.living_room">
          </div>
          <div class="input-row">
            <label>Living Room Lamp</label>
            <input type="text" data-key="light_living_lamp" value="${e.light_living_lamp||"light.living_room_lamp"}" placeholder="e.g. light.living_room_lamp">
          </div>
          <div class="input-row">
            <label>Kitchen</label>
            <input type="text" data-key="light_kitchen" value="${e.light_kitchen||""}" placeholder="e.g. light.kitchen">
          </div>
          <div class="input-row">
            <label>Dining Room</label>
            <input type="text" data-key="light_dining" value="${e.light_dining||""}" placeholder="e.g. light.dining_room">
          </div>
          <div class="input-row">
            <label>Entrance Hall & Stairs</label>
            <input type="text" data-key="light_hallway" value="${e.light_hallway||""}" placeholder="e.g. light.hallway">
          </div>
          <div class="input-row">
            <label>Downstairs WC</label>
            <input type="text" data-key="light_wc" value="${e.light_wc||""}" placeholder="e.g. light.downstairs_wc">
          </div>
          <div class="input-row">
            <label>Master Bedroom</label>
            <input type="text" data-key="light_master_bedroom" value="${e.light_master_bedroom||""}" placeholder="e.g. light.master_bedroom">
          </div>
          <div class="input-row">
            <label>Master En-Suite</label>
            <input type="text" data-key="light_ensuite" value="${e.light_ensuite||""}" placeholder="e.g. light.ensuite">
          </div>
          <div class="input-row">
            <label>Bedroom 2 (Guestroom)</label>
            <input type="text" data-key="light_bedroom2" value="${e.light_bedroom2||""}" placeholder="e.g. light.bedroom_2">
          </div>
          <div class="input-row">
            <label>Bedroom 3 (Nursery / Office)</label>
            <input type="text" data-key="light_bedroom3" value="${e.light_bedroom3||""}" placeholder="e.g. light.bedroom_3">
          </div>
          <div class="input-row">
            <label>Family Bathroom</label>
            <input type="text" data-key="light_bathroom" value="${e.light_bathroom||""}" placeholder="e.g. light.family_bathroom">
          </div>
          <div class="input-row">
            <label>Upstairs Landing</label>
            <input type="text" data-key="light_landing" value="${e.light_landing||""}" placeholder="e.g. light.landing">
          </div>
        </div>
      </div>
    `,this.shadowRoot.querySelectorAll("input").forEach(n=>{n.addEventListener("change",i=>{let r=i.target.getAttribute("data-key"),a=i.target.value,o={...this._config,[r]:a},l=new CustomEvent("config-changed",{detail:{config:o},bubbles:!0,composed:!0});this.dispatchEvent(l)})})}};customElements.define("ha-energy-3d-card-editor",Ml)});var Li={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Iu=0,uc=1,Du=2;var $r=1,xo=2,zs=3,qn=0,rn=1,Dt=2,Yi=0,Gs=1,Vs=2,dc=3,fc=4,Nu=5;var $i=100,Fu=101,Ou=102,Uu=103,Bu=104,ku=200,Hu=201,zu=202,Gu=203,pc=204,mc=205,Vu=206,Wu=207,Xu=208,qu=209,Yu=210,$u=211,Ku=212,Zu=213,Ju=214,ka=0,Ha=1,za=2,vs=3,Ga=4,Va=5,Wa=6,Xa=7,gc=0,ju=1,Qu=2,Yn=0,_c=1,xc=2,yc=3,Kr=4,vc=5,bc=6,Sc=7,jl="attached",ed="detached",Mc=300,Ki=301,Ws=302,Xs=303,yo=304,Pn=1e3,yn=1001,bs=1002,Ct=1003,vo=1004;var Zi=1005;var Ut=1006,qs=1007;var Mn=1008;var un=1009,wc=1010,Ec=1011,Ys=1012,bo=1013,Fn=1014,_n=1015,On=1016,So=1017,Mo=1018,Ji=1020,Tc=35902,Ac=35899,Rc=1021,Cc=1022,wn=1023,oi=1026,_i=1027,wo=1028,Eo=1029,Ii=1030,To=1031;var Ao=1033,Zr=33776,Jr=33777,jr=33778,Qr=33779,Ro=35840,Co=35841,Lo=35842,Po=35843,Io=36196,Do=37492,No=37496,Fo=37488,Oo=37489,ea=37490,Uo=37491,Bo=37808,ko=37809,Ho=37810,zo=37811,Go=37812,Vo=37813,Wo=37814,Xo=37815,qo=37816,Yo=37817,$o=37818,Ko=37819,Zo=37820,Jo=37821,jo=36492,Qo=36494,el=36495,tl=36283,nl=36284,ta=36285,il=36286;var zi=2300,Gi=2301,Ua=2302,Ql=2303,ec=2400,tc=2401,nc=2402,td=2500;var Lc=0,na=1,$s=2,nd=3200;var sl=0,id=1,xi="",Ft="srgb",sn="srgb-linear",vr="linear",dt="srgb";var Ba=7680;var sd=519,rd=512,ad=513,od=514,Pc=515,ld=516,cd=517,Ic=518,Dc=519,Nc=35044,Fc=35048;var Oc="300 es",vn=2e3,Ss=2001;function yf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function vf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ms(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function hd(){let s=Ms("canvas");return s.style.display="block",s}var zh={},ws=null;function br(...s){let e="THREE."+s.shift();ws?ws("log",e,...s):console.log(e,...s)}function ud(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function De(...s){s=ud(s);let e="THREE."+s.shift();if(ws)ws("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ve(...s){s=ud(s);let e="THREE."+s.shift();if(ws)ws("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Hi(...s){let e=s.join(" ");e in zh||(zh[e]=!0,De(...s))}function dd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var fd={[ka]:ka,[za]:Wa,[Ga]:Ga,[vs]:Va,[Ha]:Ha,[Wa]:za,[Xa]:Xa,[Va]:vs},In=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gh=1234567,gr=Math.PI/180,Vi=180/Math.PI;function $n(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[s&255]+jt[s>>8&255]+jt[s>>16&255]+jt[s>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function je(s,e,t){return Math.max(e,Math.min(t,s))}function Uc(s,e){return(s%e+e)%e}function bf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Sf(s,e,t){return s!==e?(t-s)/(e-s):0}function _r(s,e,t){return(1-t)*s+t*e}function Mf(s,e,t,n){return _r(s,e,1-Math.exp(-t*n))}function wf(s,e=1){return e-Math.abs(Uc(s,e*2)-e)}function Ef(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Tf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Af(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Rf(s,e){return s+Math.random()*(e-s)}function Cf(s){return s*(.5-Math.random())}function Lf(s){s!==void 0&&(Gh=s);let e=Gh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pf(s){return s*gr}function If(s){return s*Vi}function Df(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Nf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Bc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ff(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function rl(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function kc(s,e){if(e.constructor===Float32Array)return s;let t=rl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Hc(s,e){if(e.constructor===Float32Array)return s;let t=rl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var Di={DEG2RAD:gr,RAD2DEG:Vi,generateUUID:$n,clamp:je,euclideanModulo:Uc,mapLinear:bf,inverseLerp:Sf,lerp:_r,damp:Mf,pingpong:wf,smoothstep:Ef,smootherstep:Tf,randInt:Af,randFloat:Rf,randFloatSpread:Cf,seededRandom:Lf,degToRad:Pf,radToDeg:If,isPowerOfTwo:Df,ceilPowerOfTwo:Nf,floorPowerOfTwo:Bc,setQuaternionFromProperEuler:Ff,normalize:Hc,denormalize:kc},qc=class qc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qc.prototype.isVector2=!0;var ye=qc,Yt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(u!==x||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let y=Math.acos(m),E=Math.sin(y);p=Math.sin(p*y)/E,o=Math.sin(o*y)/E,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+x*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+x*o;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Yc=class Yc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return El.copy(this).projectOnVector(e),this.sub(El)}reflect(e){return this.sub(El.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yc.prototype.isVector3=!0;var w=Yc,El=new w,Vh=new Yt,$c=class $c{constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],y=i[1],E=i[4],b=i[7],T=i[2],A=i[5],_=i[8];return r[0]=a*x+o*y+l*T,r[3]=a*m+o*E+l*A,r[6]=a*p+o*b+l*_,r[1]=c*x+h*y+u*T,r[4]=c*m+h*E+u*A,r[7]=c*p+h*b+u*_,r[2]=d*x+f*y+g*T,r[5]=d*m+f*E+g*A,r[8]=d*p+f*b+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tl.makeScale(e,t)),this}rotate(e){return Hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tl.makeRotation(-e)),this}translate(e,t){return Hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$c.prototype.isMatrix3=!0;var Ye=$c,Tl=new Ye,Wh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Of(){let s={enabled:!0,workingColorSpace:sn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===dt&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xi?vr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[sn]:{primaries:e,whitePoint:n,transfer:vr,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),s}var nt=Of();function ai(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var rs,qa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rs===void 0&&(rs=Ms("canvas")),rs.width=e.width,rs.height=e.height;let i=rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=rs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ms("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ai(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ai(t[n]/255)*255):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Uf=0,Es=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Al(i[a].image)):r.push(Al(i[a]))}else r=Al(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Al(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}var Bf=0,Rl=new w,Bt=class s extends In{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=yn,i=yn,r=Ut,a=Mn,o=wn,l=un,c=s.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=$n(),this.name="",this.source=new Es(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Rl).x}get height(){return this.source.getSize(Rl).y}get depth(){return this.source.getSize(Rl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pn:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case bs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pn:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case bs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Mc;Bt.DEFAULT_ANISOTROPY=1;var Kc=class Kc{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,b=(f+1)/2,T=(p+1)/2,A=(h+d)/4,_=(u+x)/4,M=(g+m)/4;return E>b&&E>T?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=A/n,r=_/n):b>T?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=A/i,r=M/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=_/r,i=M/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kc.prototype.isVector4=!0;var mt=Kc,Ya=class extends In{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Bt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Es(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends Ya{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Sr=class extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $a=class extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var _o=class _o{constructor(e,t,n,i,r,a,o,l,c,h,u,d,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,f,g,x,m)}set(e,t,n,i,r,a,o,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _o().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/as.setFromMatrixColumn(e,0).length(),r=1/as.setFromMatrixColumn(e,1).length(),a=1/as.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kf,e,Hf)}lookAt(e,t,n){let i=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),yi.crossVectors(n,fn),yi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),yi.crossVectors(n,fn)),yi.normalize(),da.crossVectors(fn,yi),i[0]=yi.x,i[4]=da.x,i[8]=fn.x,i[1]=yi.y,i[5]=da.y,i[9]=fn.y,i[2]=yi.z,i[6]=da.z,i[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],E=n[7],b=n[11],T=n[15],A=i[0],_=i[4],M=i[8],D=i[12],P=i[1],N=i[5],U=i[9],V=i[13],L=i[2],W=i[6],G=i[10],X=i[14],ee=i[3],q=i[7],Y=i[11],O=i[15];return r[0]=a*A+o*P+l*L+c*ee,r[4]=a*_+o*N+l*W+c*q,r[8]=a*M+o*U+l*G+c*Y,r[12]=a*D+o*V+l*X+c*O,r[1]=h*A+u*P+d*L+f*ee,r[5]=h*_+u*N+d*W+f*q,r[9]=h*M+u*U+d*G+f*Y,r[13]=h*D+u*V+d*X+f*O,r[2]=g*A+x*P+m*L+p*ee,r[6]=g*_+x*N+m*W+p*q,r[10]=g*M+x*U+m*G+p*Y,r[14]=g*D+x*V+m*X+p*O,r[3]=y*A+E*P+b*L+T*ee,r[7]=y*_+E*N+b*W+T*q,r[11]=y*M+E*U+b*G+T*Y,r[15]=y*D+E*V+b*X+T*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],y=l*f-c*d,E=o*f-c*u,b=o*d-l*u,T=a*f-c*h,A=a*d-l*h,_=a*u-o*h;return t*(x*y-m*E+p*b)-n*(g*y-m*T+p*A)+i*(g*E-x*T+p*_)-r*(g*b-x*A+m*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=t*o-n*a,E=t*l-i*a,b=t*c-r*a,T=n*l-i*o,A=n*c-r*o,_=i*c-r*l,M=h*x-u*g,D=h*m-d*g,P=h*p-f*g,N=u*m-d*x,U=u*p-f*x,V=d*p-f*m,L=y*V-E*U+b*N+T*P-A*D+_*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/L;return e[0]=(o*V-l*U+c*N)*W,e[1]=(i*U-n*V-r*N)*W,e[2]=(x*_-m*A+p*T)*W,e[3]=(d*A-u*_-f*T)*W,e[4]=(l*P-a*V-c*D)*W,e[5]=(t*V-i*P+r*D)*W,e[6]=(m*b-g*_-p*E)*W,e[7]=(h*_-d*b+f*E)*W,e[8]=(a*U-o*P+c*M)*W,e[9]=(n*P-t*U-r*M)*W,e[10]=(g*A-x*b+p*y)*W,e[11]=(u*b-h*A-f*y)*W,e[12]=(o*D-a*N-l*M)*W,e[13]=(t*N-n*D+i*M)*W,e[14]=(x*E-g*T-m*y)*W,e[15]=(h*T-u*E+d*y)*W,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,y=l*c,E=l*h,b=l*u,T=n.x,A=n.y,_=n.z;return i[0]=(1-(x+p))*T,i[1]=(f+b)*T,i[2]=(g-E)*T,i[3]=0,i[4]=(f-b)*A,i[5]=(1-(d+p))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(g+E)*_,i[9]=(m-y)*_,i[10]=(1-(d+x))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=as.set(i[0],i[1],i[2]).length(),o=as.set(i[4],i[5],i[6]).length(),l=as.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Rn.copy(this);let c=1/a,h=1/o,u=1/l;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,t.setFromRotationMatrix(Rn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=vn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===vn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ss)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=vn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===vn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ss)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};_o.prototype.isMatrix4=!0;var We=_o,as=new w,Rn=new We,kf=new w(0,0,0),Hf=new w(1,1,1),yi=new w,da=new w,fn=new w,qh=new We,Yh=new Yt,li=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};li.DEFAULT_ORDER="XYZ";var Ts=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zf=0,$h=new w,os=new Yt,ei=new We,fa=new w,or=new w,Gf=new w,Vf=new Yt,Kh=new w(1,0,0),Zh=new w(0,1,0),Jh=new w(0,0,1),jh={type:"added"},Wf={type:"removed"},ls={type:"childadded",child:null},Cl={type:"childremoved",child:null},xt=class s extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new w,t=new li,n=new Yt,i=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new We},normalMatrix:{value:new Ye}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Kh,e)}rotateY(e){return this.rotateOnAxis(Zh,e)}rotateZ(e){return this.rotateOnAxis(Jh,e)}translateOnAxis(e,t){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kh,e)}translateY(e){return this.translateOnAxis(Zh,e)}translateZ(e){return this.translateOnAxis(Jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fa.copy(e):fa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(or,fa,this.up):ei.lookAt(fa,or,this.up),this.quaternion.setFromRotationMatrix(ei),i&&(ei.extractRotation(i.matrixWorld),os.setFromRotationMatrix(ei),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jh),ls.child=e,this.dispatchEvent(ls),ls.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wf),Cl.child=e,this.dispatchEvent(Cl),Cl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jh),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,Gf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,Vf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};xt.DEFAULT_UP=new w(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _t=class extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xf={type:"move"},As=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xf)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new _t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},pa={h:0,s:0,l:0};function Ll(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=nt.workingColorSpace){if(e=Uc(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ll(a,r,e+1/3),this.g=Ll(a,r,e),this.b=Ll(a,r,e-1/3)}return nt.colorSpaceToWorking(this,i),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=pd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return nt.workingToColorSpace(Qt.copy(this),e),Math.round(je(Qt.r*255,0,255))*65536+Math.round(je(Qt.g*255,0,255))*256+Math.round(je(Qt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Qt.copy(this),t);let n=Qt.r,i=Qt.g,r=Qt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Ft){nt.workingToColorSpace(Qt.copy(this),e);let t=Qt.r,n=Qt.g,i=Qt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(pa);let n=_r(vi.h,pa.h,t),i=_r(vi.s,pa.s,t),r=_r(vi.l,pa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qt=new Ae;Ae.NAMES=pd;var Rs=class extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Cn=new w,ti=new w,Pl=new w,ni=new w,cs=new w,hs=new w,Qh=new w,Il=new w,Dl=new w,Nl=new w,Fl=new mt,Ol=new mt,Ul=new mt,Ei=class s{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Cn.subVectors(e,t),i.cross(Cn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Cn.subVectors(i,t),ti.subVectors(n,t),Pl.subVectors(e,t);let a=Cn.dot(Cn),o=Cn.dot(ti),l=Cn.dot(Pl),c=ti.dot(ti),h=ti.dot(Pl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Fl.setScalar(0),Ol.setScalar(0),Ul.setScalar(0),Fl.fromBufferAttribute(e,t),Ol.fromBufferAttribute(e,n),Ul.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Fl,r.x),a.addScaledVector(Ol,r.y),a.addScaledVector(Ul,r.z),a}static isFrontFacing(e,t,n,i){return Cn.subVectors(n,t),ti.subVectors(e,t),Cn.cross(ti).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Cn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;cs.subVectors(i,n),hs.subVectors(r,n),Il.subVectors(e,n);let l=cs.dot(Il),c=hs.dot(Il);if(l<=0&&c<=0)return t.copy(n);Dl.subVectors(e,i);let h=cs.dot(Dl),u=hs.dot(Dl);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(cs,a);Nl.subVectors(e,r);let f=cs.dot(Nl),g=hs.dot(Nl);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(hs,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Qh.subVectors(r,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Qh,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(cs,a).addScaledVector(hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gn=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(r,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ma.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ma.copy(n.boundingBox)),ma.applyMatrix4(e.matrixWorld),this.union(ma)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),ga.subVectors(this.max,lr),us.subVectors(e.a,lr),ds.subVectors(e.b,lr),fs.subVectors(e.c,lr),bi.subVectors(ds,us),Si.subVectors(fs,ds),Oi.subVectors(us,fs);let t=[0,-bi.z,bi.y,0,-Si.z,Si.y,0,-Oi.z,Oi.y,bi.z,0,-bi.x,Si.z,0,-Si.x,Oi.z,0,-Oi.x,-bi.y,bi.x,0,-Si.y,Si.x,0,-Oi.y,Oi.x,0];return!Bl(t,us,ds,fs,ga)||(t=[1,0,0,0,1,0,0,0,1],!Bl(t,us,ds,fs,ga))?!1:(_a.crossVectors(bi,Si),t=[_a.x,_a.y,_a.z],Bl(t,us,ds,fs,ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ii=[new w,new w,new w,new w,new w,new w,new w,new w],Ln=new w,ma=new gn,us=new w,ds=new w,fs=new w,bi=new w,Si=new w,Oi=new w,lr=new w,ga=new w,_a=new w,Ui=new w;function Bl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ui.fromArray(s,r);let o=i.x*Math.abs(Ui.x)+i.y*Math.abs(Ui.y)+i.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),h=n.dot(Ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Pt=new w,xa=new ye,qf=0,Jt=class extends In{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nc,this.updateRanges=[],this.gpuType=_n,this.version=0,this._normalizationScale=e!==void 0?rl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):kc(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hc(e,this.array)}};var Mr=class extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var wr=class extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ot=class extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Yf=new gn,cr=new w,kl=new w,ln=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Yf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);let t=cr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(cr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(kl)),this.expandByPoint(cr.copy(e.center).sub(kl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},$f=0,xn=new We,Hl=new xt,ps=new w,pn=new gn,hr=new gn,qt=new w,At=class s extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yf(e)?wr:Mr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return Hl.lookAt(e),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ot(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];hr.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(pn.min,hr.min),pn.expandByPoint(qt),qt.addVectors(pn.max,hr.max),pn.expandByPoint(qt)):(pn.expandByPoint(hr.min),pn.expandByPoint(hr.max))}pn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)qt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(qt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)qt.fromBufferAttribute(o,c),l&&(ps.fromBufferAttribute(e,c),qt.add(ps)),i=Math.max(i,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Jt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new w,l[D]=new w;let h=new w,u=new w,d=new w,f=new ye,g=new ye,x=new ye,m=new w,p=new w;function y(D,P,N){c[D]=c[P]=c[N]=1,h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,P),d.fromBufferAttribute(n,N),f.fromBufferAttribute(r,D),g.fromBufferAttribute(r,P),x.fromBufferAttribute(r,N),u.sub(h),d.sub(h),g.sub(f),x.sub(f);let U=1/(g.x*x.y-x.x*g.y);isFinite(U)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(U),p.copy(d).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(U),o[D].add(m),o[P].add(m),o[N].add(m),l[D].add(p),l[P].add(p),l[N].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let D=0,P=E.length;D<P;++D){let N=E[D],U=N.start,V=N.count;for(let L=U,W=U+V;L<W;L+=3)y(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let b=new w,T=new w,A=new w,_=new w;function M(D){A.fromBufferAttribute(i,D),_.copy(A);let P=o[D];b.copy(P),b.sub(A.multiplyScalar(A.dot(P))).normalize(),T.crossVectors(_,P);let U=T.dot(l[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,U)}for(let D=0,P=n.count;D<P;++D)c[D]&&M(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new w,r=new w,a=new w,o=new w,l=new w,c=new w,h=new w,u=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Jt(d,h,u)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nc,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=eu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=eu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function eu(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=$n()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var tn=new w,Ls=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?rl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){br("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){br("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):kc(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hc(e,this.data.array)}},zl=new w,Kf=new w,Zf=new Ye,nn=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=zl.subVectors(n,t).cross(Kf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(zl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Zf.getNormalMatrix(e),i=this.coplanarPoint(zl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Jf=0,cn=class extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Gs,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ba,this.stencilZFail=Ba,this.stencilZPass=Ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ae().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new nn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ye().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var si=new w,Gl=new w,ya=new w,va=new w,zn=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Gl.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),va.copy(this.origin).sub(Gl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ya),o=va.dot(this.direction),l=-va.dot(ya),c=va.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Gl).addScaledVector(ya,d),f}intersectSphere(e,t){if(e.radius<0)return null;si.subVectors(e.center,this.origin);let n=si.dot(this.direction),i=si.dot(si)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,x=t.y-a.y,m=t.z-a.z,p=n.x-a.x,y=n.y-a.y,E=n.z-a.z,b=Math.abs(l),T=Math.abs(c),A=Math.abs(h),_,M,D,P,N,U,V,L,W,G,X,ee;if(b>=T&&b>=A?(D=l,U=u,W=g,ee=p,l>=0?(_=c,M=h,P=d,N=f,V=x,L=m,G=y,X=E):(_=h,M=c,P=f,N=d,V=m,L=x,G=E,X=y)):T>=A?(D=c,U=d,W=x,ee=y,c>=0?(_=h,M=l,P=f,N=u,V=m,L=g,G=E,X=p):(_=l,M=h,P=u,N=f,V=g,L=m,G=p,X=E)):(D=h,U=f,W=m,ee=E,h>=0?(_=l,M=c,P=u,N=d,V=g,L=x,G=p,X=y):(_=c,M=l,P=d,N=u,V=x,L=g,G=y,X=p)),D===0)return null;let q=_/D,Y=M/D,O=1/D,ne=P-q*U,Se=N-Y*U,K=V-q*W,fe=L-Y*W,we=G-q*ee,Ee=X-Y*ee,_e=we*fe-Ee*K,ze=ne*Ee-Se*we,vt=K*Se-fe*ne;if(i){if(_e<0||ze<0||vt<0)return null}else if((_e<0||ze<0||vt<0)&&(_e>0||ze>0||vt>0))return null;let He=_e+ze+vt;if(He===0)return null;let st=O*(_e*U+ze*W+vt*ee);return(He>0?st<0:st>0)?null:this.at(st/He,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},St=class extends cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},tu=new We,Bi=new zn,ba=new ln,nu=new w,Sa=new w,Ma=new w,wa=new w,Vl=new w,Ea=new w,iu=new w,Ta=new w,te=class extends xt{constructor(e=new At,t=new St){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Vl.fromBufferAttribute(u,e),a?Ea.addScaledVector(Vl,h):Ea.addScaledVector(Vl.sub(t),h))}t.add(Ea)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(r),Bi.copy(e.ray).recast(e.near),!(ba.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(ba,nu)===null||Bi.origin.distanceToSquared(nu)>(e.far-e.near)**2))&&(tu.copy(r).invert(),Bi.copy(e.ray).applyMatrix4(tu),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,T=E;b<T;b+=3){let A=o.getX(b),_=o.getX(b+1),M=o.getX(b+2);i=Aa(this,p,e,n,c,h,u,A,_,M),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=o.getX(m),E=o.getX(m+1),b=o.getX(m+2);i=Aa(this,a,e,n,c,h,u,y,E,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,T=E;b<T;b+=3){let A=b,_=b+1,M=b+2;i=Aa(this,p,e,n,c,h,u,A,_,M),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,E=m+1,b=m+2;i=Aa(this,a,e,n,c,h,u,y,E,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function jf(s,e,t,n,i,r,a,o){let l;if(e.side===rn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===qn,o),l===null)return null;Ta.copy(o),Ta.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Ta);return c<t.near||c>t.far?null:{distance:c,point:Ta.clone(),object:s}}function Aa(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Sa),s.getVertexPosition(l,Ma),s.getVertexPosition(c,wa);let h=jf(s,e,t,n,Sa,Ma,wa,iu);if(h){let u=new w;Ei.getBarycoord(iu,Sa,Ma,wa,u),i&&(h.uv=Ei.getInterpolatedAttribute(i,o,l,c,u,new ye)),r&&(h.uv1=Ei.getInterpolatedAttribute(r,o,l,c,u,new ye)),a&&(h.normal=Ei.getInterpolatedAttribute(a,o,l,c,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new w,materialIndex:0};Ei.getNormal(Sa,Ma,wa,d.normal),h.face=d,h.barycoord=u}return h}var ur=new mt,su=new mt,ru=new mt,Qf=new mt,au=new We,Ra=new w,Wl=new ln,ou=new We,Xl=new zn,Er=class extends te{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jl,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ra),this.boundingBox.expandByPoint(Ra)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ln),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ra),this.boundingSphere.expandByPoint(Ra)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wl.copy(this.boundingSphere),Wl.applyMatrix4(i),e.ray.intersectsSphere(Wl)!==!1&&(ou.copy(i).invert(),Xl.copy(e.ray).applyMatrix4(ou),!(this.boundingBox!==null&&Xl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===jl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ed?this.bindMatrixInverse.copy(this.bindMatrix).invert():De("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;su.fromBufferAttribute(i.attributes.skinIndex,e),ru.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(ur.copy(t),t.set(0,0,0,0)):(ur.set(t.x,t.y,t.z,1),t.set(0,0,0)),ur.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=ru.getComponent(r);if(a!==0){let o=su.getComponent(r);au.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Qf.copy(ur).applyMatrix4(au),a)}}return t.isVector4&&(t.w=ur.w),t.applyMatrix4(this.bindMatrixInverse)}},Ps=class extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Is=class extends Bt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Ct,h=Ct,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},lu=new We,ep=new We,Tr=class s{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){De("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:ep;lu.multiplyMatrices(o,t[r]),lu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Is(t,e,e,wn,_n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(De("Skeleton: No bone found with UUID:",r),a=new Ps),this.bones.push(a),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},ci=class extends Jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ms=new We,cu=new We,Ca=[],hu=new gn,tp=new We,dr=new te,fr=new ln,Wi=class extends te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ci(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,tp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),hu.copy(e.boundingBox).applyMatrix4(ms),this.boundingBox.union(hu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),fr.copy(e.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fr.copy(this.boundingSphere),fr.applyMatrix4(n),e.ray.intersectsSphere(fr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ms),cu.multiplyMatrices(n,ms),dr.matrixWorld=cu,dr.raycast(e,Ca);for(let a=0,o=Ca.length;a<o;a++){let l=Ca[a];l.instanceId=r,l.object=this,t.push(l)}Ca.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ci(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Is(new Float32Array(i*this.count),i,this.count,wo,_n));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ki=new ln,np=new ye(.5,.5),La=new w,Ti=class{constructor(e=new nn,t=new nn,n=new nn,i=new nn,r=new nn,a=new nn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vn,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],y=r[12],E=r[13],b=r[14],T=r[15];if(i[0].setComponents(c-a,f-h,p-g,T-y).normalize(),i[1].setComponents(c+a,f+h,p+g,T+y).normalize(),i[2].setComponents(c+o,f+u,p+x,T+E).normalize(),i[3].setComponents(c-o,f-u,p-x,T-E).normalize(),n)i[4].setComponents(l,d,m,b).normalize(),i[5].setComponents(c-l,f-d,p-m,T-b).normalize();else if(i[4].setComponents(c-l,f-d,p-m,T-b).normalize(),t===vn)i[5].setComponents(c+l,f+d,p+m,T+b).normalize();else if(t===Ss)i[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){ki.center.set(0,0,0);let t=np.distanceTo(e.center);return ki.radius=.7071067811865476+t,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(La.x=i.normal.x>0?e.max.x:e.min.x,La.y=i.normal.y>0?e.max.y:e.min.y,La.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(La)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},uu=new We,Ka=class s{constructor(){this.coordinateSystem=vn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];uu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ti),n[i].setFromProjectionMatrix(uu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Ti),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};var Ai=class extends cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Za=new w,Ja=new w,du=new We,pr=new zn,Pa=new ln,ql=new w,fu=new w,hi=class extends xt{constructor(e=new At,t=new Ai){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Za.fromBufferAttribute(t,i-1),Ja.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Za.distanceTo(Ja);e.setAttribute("lineDistance",new ot(n,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(i),Pa.radius+=r,e.ray.intersectsSphere(Pa)===!1)return;du.copy(i).invert(),pr.copy(e.ray).applyMatrix4(du);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),y=h.getX(x+1),E=Ia(this,e,pr,l,p,y,x);E&&t.push(E)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=Ia(this,e,pr,l,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=Ia(this,e,pr,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Ia(this,e,pr,l,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ia(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(Za.fromBufferAttribute(o,i),Ja.fromBufferAttribute(o,r),t.distanceSqToSegment(Za,Ja,ql,fu)>n)return;ql.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(ql);if(!(c<e.near||c>e.far))return{distance:c,point:fu.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var pu=new w,mu=new w,Ar=class extends hi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)pu.fromBufferAttribute(t,i),mu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+pu.distanceTo(mu);e.setAttribute("lineDistance",new ot(n,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Rr=class extends hi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ds=class extends cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gu=new We,ic=new zn,Da=new ln,Na=new w,Cr=class extends xt{constructor(e=new At,t=new Ds){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(i),Da.radius+=r,e.ray.intersectsSphere(Da)===!1)return;gu.copy(i).invert(),ic.copy(e.ray).applyMatrix4(gu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);Na.fromBufferAttribute(u,m),_u(Na,m,l,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)Na.fromBufferAttribute(u,g),_u(Na,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _u(s,e,t,n,i,r,a){let o=ic.distanceSqToPoint(s);if(o<t){let l=new w;ic.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Lr=class extends Bt{constructor(e=[],t=Ki,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ns=class extends Bt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ui=class extends Bt{constructor(e,t,n=Fn,i,r,a,o=Ct,l=Ct,c,h=oi,u=1){if(h!==oi&&h!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Es(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Pr=class extends ui{constructor(e,t=Fn,n=Ki,i,r,a=Ct,o=Ct,l,c=oi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ir=class extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ue=class s extends At{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(u,2));function g(x,m,p,y,E,b,T,A,_,M,D){let P=b/_,N=T/M,U=b/2,V=T/2,L=A/2,W=_+1,G=M+1,X=0,ee=0,q=new w;for(let Y=0;Y<G;Y++){let O=Y*N-V;for(let ne=0;ne<W;ne++){let Se=ne*P-U;q[x]=Se*y,q[m]=O*E,q[p]=L,c.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[p]=A>0?1:-1,h.push(q.x,q.y,q.z),u.push(ne/_),u.push(1-Y/M),X+=1}}for(let Y=0;Y<M;Y++)for(let O=0;O<_;O++){let ne=d+O+W*Y,Se=d+O+W*(Y+1),K=d+(O+1)+W*(Y+1),fe=d+(O+1)+W*Y;l.push(ne,Se,fe),l.push(Se,K,fe),ee+=6}o.addGroup(f,ee,D),f+=ee,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Dr=class s extends At{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new w,h=new ye;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(o,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},wt=class s extends At{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;y(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(f,2));function y(){let b=new w,T=new w,A=0,_=(t-e)/n;for(let M=0;M<=r;M++){let D=[],P=M/r,N=P*(t-e)+e;for(let U=0;U<=i;U++){let V=U/i,L=V*l+o,W=Math.sin(L),G=Math.cos(L);T.x=N*W,T.y=-P*n+m,T.z=N*G,u.push(T.x,T.y,T.z),b.set(W,_,G).normalize(),d.push(b.x,b.y,b.z),f.push(V,1-P),D.push(g++)}x.push(D)}for(let M=0;M<i;M++)for(let D=0;D<r;D++){let P=x[D][M],N=x[D+1][M],U=x[D+1][M+1],V=x[D][M+1];(e>0||D!==0)&&(h.push(P,N,V),A+=3),(t>0||D!==r-1)&&(h.push(N,U,V),A+=3)}c.addGroup(p,A,0),p+=A}function E(b){let T=g,A=new ye,_=new w,M=0,D=b===!0?e:t,P=b===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,m*P,0),d.push(0,P,0),f.push(.5,.5),g++;let N=g;for(let U=0;U<=i;U++){let L=U/i*l+o,W=Math.cos(L),G=Math.sin(L);_.x=D*G,_.y=m*P,_.z=D*W,u.push(_.x,_.y,_.z),d.push(0,P,0),A.x=W*.5+.5,A.y=G*.5*P+.5,f.push(A.x,A.y),g++}for(let U=0;U<i;U++){let V=T+U,L=N+U;b===!0?h.push(L,L+1,V):h.push(L+1,L,V),M+=3}c.addGroup(p,M,b===!0?1:2),p+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){De("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new ye:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new w,i=[],r=[],a=[],o=new w,l=new We;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new w)}r[0]=new w,a[0]=new w;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(je(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(je(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Nr=class extends bn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ye){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ja=class extends Nr{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function zc(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var xu=new w,yu=new w,Yl=new zc,$l=new zc,Kl=new zc,Dn=class extends bn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(yu.subVectors(i[0],i[1]).add(i[0]),c=yu);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(xu.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=xu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Yl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),$l.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Kl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Yl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),$l.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Kl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Yl.calc(l),$l.calc(l),Kl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function vu(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function ip(s,e){let t=1-s;return t*t*e}function sp(s,e){return 2*(1-s)*s*e}function rp(s,e){return s*s*e}function xr(s,e,t,n){return ip(s,e)+sp(s,t)+rp(s,n)}function ap(s,e){let t=1-s;return t*t*t*e}function op(s,e){let t=1-s;return 3*t*t*s*e}function lp(s,e){return 3*(1-s)*s*s*e}function cp(s,e){return s*s*s*e}function yr(s,e,t,n,i){return ap(s,e)+op(s,t)+lp(s,n)+cp(s,i)}var Qa=class extends bn{constructor(e=new ye,t=new ye,n=new ye,i=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ye){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,i.x,r.x,a.x,o.x),yr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},eo=class extends bn{constructor(e=new w,t=new w,n=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new w){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,i.x,r.x,a.x,o.x),yr(e,i.y,r.y,a.y,o.y),yr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},to=class extends bn{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},no=class extends bn{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},io=class extends bn{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(xr(e,i.x,r.x,a.x),xr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fr=class extends bn{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(xr(e,i.x,r.x,a.x),xr(e,i.y,r.y,a.y),xr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},so=class extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(vu(o,l.x,c.x,h.x,u.x),vu(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ye().fromArray(i))}return this}},hp=Object.freeze({__proto__:null,ArcCurve:ja,CatmullRomCurve3:Dn,CubicBezierCurve:Qa,CubicBezierCurve3:eo,EllipseCurve:Nr,LineCurve:to,LineCurve3:no,QuadraticBezierCurve:io,QuadraticBezierCurve3:Fr,SplineCurve:so});var Gn=class s extends At{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let E=0;E<c;E++){let b=E*u-r;g.push(b,-y,0),x.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let E=y+c*p,b=y+c*(p+1),T=y+1+c*(p+1),A=y+1+c*p;f.push(E,b,A),f.push(b,T,A)}this.setIndex(f),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Or=class s extends At{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/i,f=new w,g=new ye;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,E=y,b=y+n+1,T=y+n+2,A=y+1;o.push(E,b,A),o.push(b,T,A)}}this.setIndex(o),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Nn=class s extends At{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new w,d=new w,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],E=p/n,b=a+E*o,T=e*Math.cos(b),A=Math.sqrt(e*e-T*T),_=0;p===0&&a===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let M=0;M<=t;M++){let D=M/t,P=i+D*r;u.x=-A*Math.cos(P),u.y=T,u.z=A*Math.sin(P),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(D+_,1-E),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let E=h[p][y+1],b=h[p][y],T=h[p+1][y],A=h[p+1][y+1];(p!==0||a>0)&&f.push(E,b,A),(p!==n-1||l<Math.PI)&&f.push(b,T,A)}this.setIndex(f),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Fs=class s extends At{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],d=new w,f=new w,g=new w;for(let x=0;x<=n;x++){let m=a+x/n*o;for(let p=0;p<=i;p++){let y=p/i*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/i),u.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){let p=(i+1)*x+m-1,y=(i+1)*(x-1)+m-1,E=(i+1)*(x-1)+m,b=(i+1)*x+m;l.push(p,y,b),l.push(y,E,b)}this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ur=class s extends At{constructor(e=new Fr(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new w,l=new w,c=new ye,h=new w,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(f,2));function x(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),y(),p()}function m(E){h=e.getPointAt(E/t,h);let b=a.normals[E],T=a.binormals[E];for(let A=0;A<=i;A++){let _=A/i*Math.PI*2,M=Math.sin(_),D=-Math.cos(_);l.x=D*b.x+M*T.x,l.y=D*b.y+M*T.y,l.z=D*b.z+M*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=t;E++)for(let b=1;b<=i;b++){let T=(i+1)*(E-1)+(b-1),A=(i+1)*E+(b-1),_=(i+1)*E+b,M=(i+1)*(E-1)+b;g.push(T,A,M),g.push(A,_,M)}}function y(){for(let E=0;E<=t;E++)for(let b=0;b<=i;b++)c.x=E/t,c.y=b/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new hp[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ji(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(bu(i))i.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(bu(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function en(s){let e={};for(let t=0;t<s.length;t++){let n=ji(s[t]);for(let i in n)e[i]=n[i]}return e}function bu(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function up(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Gc(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var md={clone:ji,merge:en},dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vn=class extends cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dp,this.fragmentShader=fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=up(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ae().setHex(i.value);break;case"v2":this.uniforms[n].value=new ye().fromArray(i.value);break;case"v3":this.uniforms[n].value=new w().fromArray(i.value);break;case"v4":this.uniforms[n].value=new mt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(i.value);break;case"m4":this.uniforms[n].value=new We().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ro=class extends Vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ve=class extends cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sl,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},It=class extends ve{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Hi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Hi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ao=class extends cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},oo=class extends cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function wi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function mr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function pp(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Su(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function mp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var Wn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},lo=class extends Wn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ec,endingEnd:ec}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case tc:r=e,o=2*t-n;break;case nc:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case tc:a=e,l=2*n-t;break;case nc:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,E=(-1-f)*m+(1.5+f)*x+.5*g,b=f*m-f*x;for(let T=0;T!==o;++T)r[T]=p*a[h+T]+y*a[c+T]+E*a[l+T]+b*a[u+T];return r}},co=class extends Wn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},ho=class extends Wn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},uo=class extends Wn{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(i-t),x=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*x+a[l+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let x=a[c+g],m=a[l+g],p=f*d+g*2,y=u[p],E=u[p+1],b=e*d+g*2,T=h[b],A=h[b+1],_=_p(n,t,y,T,i);r[g]=gd(_,x,E,A,m)}return r}};function gd(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function gp(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function _p(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=gd(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let l=gp(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var hn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wi(t,this.TimeBufferType),this.values=wi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wi(e.times,Array),values:wi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),mr(e.settings)&&(n.settings={inTangents:wi(e.settings.inTangents,Array),outTangents:wi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new uo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case zi:t=this.InterpolantFactoryMethodDiscrete;break;case Gi:t=this.InterpolantFactoryMethodLinear;break;case Ua:t=this.InterpolantFactoryMethodSmooth;break;case Ql:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return De("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zi;case this.InterpolantFactoryMethodLinear:return Gi;case this.InterpolantFactoryMethodSmooth:return Ua;case this.InterpolantFactoryMethodBezier:return Ql}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;mr(this.settings)&&(Mu(this.settings.inTangents,e),Mu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;mr(this.settings)&&(wu(this.settings.inTangents,e),wu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ve("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&vf(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ua,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,mr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Mu(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function wu(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=Gi;var di=class extends hn{constructor(e,t,n){super(e,t,n)}};di.prototype.ValueTypeName="bool";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=zi;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Br=class extends hn{constructor(e,t,n,i){super(e,t,n,i)}};Br.prototype.ValueTypeName="color";var fi=class extends hn{constructor(e,t,n,i){super(e,t,n,i)}};fi.prototype.ValueTypeName="number";var fo=class extends Wn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Yt.slerpFlat(r,0,a,c-o,a,c,l);return r}},pi=class extends hn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new fo(this.times,this.values,this.getValueSize(),e)}};pi.prototype.ValueTypeName="quaternion";pi.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends hn{constructor(e,t,n){super(e,t,n)}};mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=zi;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends hn{constructor(e,t,n,i){super(e,t,n,i)}};Ri.prototype.ValueTypeName="vector";var kr=class{constructor(e="",t=-1,n=[],i=td){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=$n(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(yp(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(hn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=pp(l);l=Su(l,1,h),c=Su(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new fi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function xp(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fi;case"vector":case"vector2":case"vector3":case"vector4":return Ri;case"color":return Br;case"quaternion":return pi;case"bool":case"boolean":return di;case"string":return mi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function yp(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=xp(s.type);if(s.times===void 0){let n=[],i=[];mp(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),mr(s.settings)&&(t.settings={inTangents:wi(s.settings.inTangents,Float32Array),outTangents:wi(s.settings.outTangents,Float32Array)}),t}var Hn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Eu(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Eu(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Eu(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var po=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_d=new po,Xn=class{constructor(e){this.manager=e!==void 0?e:_d,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Xn.DEFAULT_MATERIAL_NAME="__DEFAULT";var ri={},sc=class extends Error{constructor(e,t){super(e),this.response=t}},Os=class extends Xn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Hn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ri[e]!==void 0){ri[e].push({onLoad:t,onProgress:n,onError:i});return}ri[e]=[],ri[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&De("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=ri[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:E,value:b})=>{if(E)p.close();else{x+=b.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let A=0,_=h.length;A<_;A++){let M=h[A];M.onProgress&&M.onProgress(T)}p.enqueue(b),y()}},E=>{p.error(E)})}}});return new Response(m)}else throw new sc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Hn.add(`file:${e}`,c);let h=ri[e];delete ri[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=ri[e];if(h===void 0)throw this.manager.itemError(e),c;delete ri[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var gs=new WeakMap,mo=class extends Xn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Hn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=gs.get(a);u===void 0&&(u=[],gs.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=Ms("img");function l(){h(),t&&t(this);let u=gs.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}gs.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Hn.remove(`image:${e}`);let d=gs.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}gs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Hn.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Hr=class extends Xn{constructor(e){super(e)}load(e,t,n,i){let r=new Bt,a=new mo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Ci=class extends xt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},zr=class extends Ci{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Zl=new We,Tu=new w,Au=new w,Us=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ti,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Tu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tu),Au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Au),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Zl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Zl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Ss||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fa=new w,Oa=new Yt,kn=new w,Gr=class extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fa,Oa,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Oa,kn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Fa,Oa,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Oa,kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Mi=new w,Ru=new ye,Cu=new ye,Ot=class extends Gr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vi*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,Ru,Cu),t.subVectors(Cu,Ru)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},rc=class extends Us{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Vi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Vr=class extends Ci{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new rc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ac=class extends Us{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0}},Sn=class extends Ci{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ac}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Xi=class extends Gr{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},oc=class extends Us{constructor(){super(new Xi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qi=class extends Ci{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new oc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Wr=class extends Ci{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var gi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Jl=new WeakMap,Xr=class extends Xn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&De("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&De("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Hn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Jl.has(a)===!0?(i&&i(Jl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Hn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Jl.set(l,c),Hn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Hn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var _s=-90,xs=1,Bs=class extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ot(_s,xs,e,t);i.layers=this.layers,this.add(i);let r=new Ot(_s,xs,e,t);r.layers=this.layers,this.add(r);let a=new Ot(_s,xs,e,t);a.layers=this.layers,this.add(a);let o=new Ot(_s,xs,e,t);o.layers=this.layers,this.add(o);let l=new Ot(_s,xs,e,t);l.layers=this.layers,this.add(l);let c=new Ot(_s,xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},go=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Vc="\\[\\]\\.:\\/",vp=new RegExp("["+Vc+"]","g"),Wc="[^"+Vc+"]",bp="[^"+Vc.replace("\\.","")+"]",Sp=/((?:WC+[\/:])*)/.source.replace("WC",Wc),Mp=/(WCOD+)?/.source.replace("WCOD",bp),wp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wc),Ep=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wc),Tp=new RegExp("^"+Sp+Mp+wp+Ep+"$"),Ap=["material","materials","bones","map"],lc=class{constructor(e,t,n){let i=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vp,"")}static parseTrackName(e){let t=Tp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Ap.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=lc;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qx=new Float32Array(1);var Lu=new We,ks=class{constructor(e,t,n=0,i=1/0){this.ray=new zn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lu),this}intersectObject(e,t=!0,n=[]){return cc(e,this,n,t),n.sort(Pu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)cc(e[i],this,n,t);return n.sort(Pu),n}};function Pu(s,e){return s.distance-e.distance}function cc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)cc(r[a],e,t,!0)}}var qr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,De("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Hs=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Zc=class Zc{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Zc.prototype.isMatrix2=!0;var hc=Zc;var Yr=class extends In{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Xc(s,e,t,n){let i=Rp(n);switch(t){case Rc:return s*e;case wo:return s*e/i.components*i.byteLength;case Eo:return s*e/i.components*i.byteLength;case Ii:return s*e*2/i.components*i.byteLength;case To:return s*e*2/i.components*i.byteLength;case Cc:return s*e*3/i.components*i.byteLength;case wn:return s*e*4/i.components*i.byteLength;case Ao:return s*e*4/i.components*i.byteLength;case Zr:case Jr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jr:case Qr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Co:case Po:return Math.max(s,16)*Math.max(e,8)/4;case Ro:case Lo:return Math.max(s,8)*Math.max(e,8)/2;case Io:case Do:case Fo:case Oo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case No:case ea:case Uo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ko:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case zo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Go:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case qo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case $o:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ko:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Zo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Jo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case jo:case Qo:case el:return Math.ceil(s/4)*Math.ceil(e/4)*16;case tl:case nl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ta:case il:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rp(s){switch(s){case un:case wc:return{byteLength:1,components:1};case Ys:case Ec:case On:return{byteLength:2,components:1};case So:case Mo:return{byteLength:2,components:4};case Fn:case bo:case _n:return{byteLength:4,components:1};case Tc:case Ac:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function kd(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Lp(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ip=`#ifdef USE_ALPHAHASH
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
#endif`,Dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Up=`#ifdef USE_AOMAP
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
#endif`,Bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kp=`#ifdef USE_BATCHING
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
#endif`,Hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wp=`#ifdef USE_IRIDESCENCE
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
#endif`,Xp=`#ifdef USE_BUMPMAP
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
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,em=`#define PI 3.141592653589793
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
} // validated`,tm=`vec3 transformedNormal = objectNormal;
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
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,am="gl_FragColor = linearToOutputTexel( gl_FragColor );",om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_m=`#ifdef USE_GRADIENTMAP
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
}`,xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ym=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Sm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Am=`PhysicalMaterial material;
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
#endif`,Rm=`uniform sampler2D dfgLUT;
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
}`,Cm=`
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
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Im=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hm=`#if defined( USE_POINTS_UV )
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
#endif`,zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wm=`#if defined( USE_MORPHCOLORS )
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
#endif`,Xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qm=`#ifdef USE_MORPHTARGETS
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
#endif`,Ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Km=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qm=`#ifdef USE_NORMALMAP
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
#endif`,eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ag=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mg=`float getShadowMask() {
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
}`,gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_g=`#ifdef USE_SKINNING
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
#endif`,xg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yg=`#ifdef USE_SKINNING
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
#endif`,vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wg=`#ifdef USE_TRANSMISSION
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
#endif`,Eg=`#ifdef USE_TRANSMISSION
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pg=`uniform sampler2D t2D;
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`uniform float backgroundBlurriness;
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`#include <common>
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
}`,Ug=`#if DEPTH_PACKING == 3200
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
}`,Bg=`#define DISTANCE
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
}`,kg=`#define DISTANCE
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
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gg=`uniform float scale;
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
}`,Vg=`uniform vec3 diffuse;
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
}`,Wg=`#include <common>
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
}`,Xg=`uniform vec3 diffuse;
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
}`,qg=`#define LAMBERT
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
}`,Yg=`#define LAMBERT
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
}`,$g=`#define MATCAP
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
}`,Kg=`#define MATCAP
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
}`,Zg=`#define NORMAL
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
}`,Jg=`#define NORMAL
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
}`,jg=`#define PHONG
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
}`,Qg=`#define PHONG
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
}`,e0=`#define STANDARD
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
}`,t0=`#define STANDARD
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
}`,n0=`#define TOON
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
}`,i0=`#define TOON
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
}`,s0=`uniform float size;
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
}`,r0=`uniform vec3 diffuse;
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
}`,a0=`#include <common>
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
}`,o0=`uniform vec3 color;
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
}`,l0=`uniform float rotation;
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
}`,c0=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Pp,alphahash_pars_fragment:Ip,alphamap_fragment:Dp,alphamap_pars_fragment:Np,alphatest_fragment:Fp,alphatest_pars_fragment:Op,aomap_fragment:Up,aomap_pars_fragment:Bp,batching_pars_vertex:kp,batching_vertex:Hp,begin_vertex:zp,beginnormal_vertex:Gp,bsdfs:Vp,iridescence_fragment:Wp,bumpmap_pars_fragment:Xp,clipping_planes_fragment:qp,clipping_planes_pars_fragment:Yp,clipping_planes_pars_vertex:$p,clipping_planes_vertex:Kp,color_fragment:Zp,color_pars_fragment:Jp,color_pars_vertex:jp,color_vertex:Qp,common:em,defaultnormal_vertex:tm,displacementmap_pars_vertex:nm,displacementmap_vertex:im,emissivemap_fragment:sm,emissivemap_pars_fragment:rm,colorspace_fragment:am,colorspace_pars_fragment:om,envmap_fragment:lm,envmap_common_pars_fragment:cm,envmap_pars_fragment:hm,envmap_pars_vertex:um,envmap_physical_pars_fragment:Sm,envmap_vertex:dm,fog_vertex:fm,fog_pars_vertex:pm,fog_fragment:mm,fog_pars_fragment:gm,gradientmap_pars_fragment:_m,lightmap_pars_fragment:xm,lights_lambert_fragment:ym,lights_lambert_pars_fragment:vm,lights_pars_begin:bm,lights_toon_fragment:Mm,lights_toon_pars_fragment:wm,lights_phong_fragment:Em,lights_phong_pars_fragment:Tm,lights_physical_fragment:Am,lights_physical_pars_fragment:Rm,lights_fragment_begin:Cm,lights_fragment_maps:Lm,lights_fragment_end:Pm,lightprobes_pars_fragment:Im,logdepthbuf_fragment:Dm,logdepthbuf_pars_fragment:Nm,logdepthbuf_pars_vertex:Fm,logdepthbuf_vertex:Om,map_fragment:Um,map_pars_fragment:Bm,map_particle_fragment:km,map_particle_pars_fragment:Hm,metalnessmap_fragment:zm,metalnessmap_pars_fragment:Gm,morphinstance_vertex:Vm,morphcolor_vertex:Wm,morphnormal_vertex:Xm,morphtarget_pars_vertex:qm,morphtarget_vertex:Ym,normal_fragment_begin:$m,normal_fragment_maps:Km,normal_pars_fragment:Zm,normal_pars_vertex:Jm,normal_vertex:jm,normalmap_pars_fragment:Qm,clearcoat_normal_fragment_begin:eg,clearcoat_normal_fragment_maps:tg,clearcoat_pars_fragment:ng,iridescence_pars_fragment:ig,opaque_fragment:sg,packing:rg,premultiplied_alpha_fragment:ag,project_vertex:og,dithering_fragment:lg,dithering_pars_fragment:cg,roughnessmap_fragment:hg,roughnessmap_pars_fragment:ug,shadowmap_pars_fragment:dg,shadowmap_pars_vertex:fg,shadowmap_vertex:pg,shadowmask_pars_fragment:mg,skinbase_vertex:gg,skinning_pars_vertex:_g,skinning_vertex:xg,skinnormal_vertex:yg,specularmap_fragment:vg,specularmap_pars_fragment:bg,tonemapping_fragment:Sg,tonemapping_pars_fragment:Mg,transmission_fragment:wg,transmission_pars_fragment:Eg,uv_pars_fragment:Tg,uv_pars_vertex:Ag,uv_vertex:Rg,worldpos_vertex:Cg,background_vert:Lg,background_frag:Pg,backgroundCube_vert:Ig,backgroundCube_frag:Dg,cube_vert:Ng,cube_frag:Fg,depth_vert:Og,depth_frag:Ug,distance_vert:Bg,distance_frag:kg,equirect_vert:Hg,equirect_frag:zg,linedashed_vert:Gg,linedashed_frag:Vg,meshbasic_vert:Wg,meshbasic_frag:Xg,meshlambert_vert:qg,meshlambert_frag:Yg,meshmatcap_vert:$g,meshmatcap_frag:Kg,meshnormal_vert:Zg,meshnormal_frag:Jg,meshphong_vert:jg,meshphong_frag:Qg,meshphysical_vert:e0,meshphysical_frag:t0,meshtoon_vert:n0,meshtoon_frag:i0,points_vert:s0,points_frag:r0,shadow_vert:a0,shadow_frag:o0,sprite_vert:l0,sprite_frag:c0},Me={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Zn={basic:{uniforms:en([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:en([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ae(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:en([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:en([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:en([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ae(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:en([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:en([Me.points,Me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:en([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:en([Me.common,Me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:en([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:en([Me.sprite,Me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:en([Me.common,Me.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:en([Me.lights,Me.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Zn.physical={uniforms:en([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var al={r:0,b:0,g:0},h0=new We,Hd=new Ye;Hd.set(-1,0,0,0,1,0,0,0,1);function u0(s,e,t,n,i,r){let a=new Ae(0),o=i===!0?0:1,l,c,h=null,u=0,d=null;function f(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){let b=y.backgroundBlurriness>0;E=e.get(E,b)}return E}function g(y){let E=!1,b=f(y);b===null?m(a,o):b&&b.isColor&&(m(b,1),E=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(y,E){let b=f(E);b&&b.isCubeTexture?(c===void 0&&(c=new te(new Ue(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:ji(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(h0.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hd),c.material.toneMapped=nt.getTransfer(b.colorSpace)!==dt,(h!==b||u!==b.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new te(new Gn(2,2),new Vn({name:"BackgroundMaterial",uniforms:ji(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=nt.getTransfer(b.colorSpace)!==dt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,E){y.getRGB(al,Gc(s)),t.buffers.color.setClear(al.r,al.g,al.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,E=1){a.set(y),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:x,dispose:p}}function d0(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(N,U,V,L,W){let G=!1,X=u(N,L,V,U);r!==X&&(r=X,c(r.object)),G=f(N,L,V,W),G&&g(N,L,V,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,b(N,U,V,L),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return s.createVertexArray()}function c(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function u(N,U,V,L){let W=L.wireframe===!0,G=n[U.id];G===void 0&&(G={},n[U.id]=G);let X=N.isInstancedMesh===!0?N.id:0,ee=G[X];ee===void 0&&(ee={},G[X]=ee);let q=ee[V.id];q===void 0&&(q={},ee[V.id]=q);let Y=q[W];return Y===void 0&&(Y=d(l()),q[W]=Y),Y}function d(N){let U=[],V=[],L=[];for(let W=0;W<t;W++)U[W]=0,V[W]=0,L[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:L,object:N,attributes:{},index:null}}function f(N,U,V,L){let W=r.attributes,G=U.attributes,X=0,ee=V.getAttributes();for(let q in ee)if(ee[q].location>=0){let O=W[q],ne=G[q];if(ne===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor)),O===void 0||O.attribute!==ne||ne&&O.data!==ne.data)return!0;X++}return r.attributesNum!==X||r.index!==L}function g(N,U,V,L){let W={},G=U.attributes,X=0,ee=V.getAttributes();for(let q in ee)if(ee[q].location>=0){let O=G[q];O===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(O=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(O=N.instanceColor));let ne={};ne.attribute=O,O&&O.data&&(ne.data=O.data),W[q]=ne,X++}r.attributes=W,r.attributesNum=X,r.index=L}function x(){let N=r.newAttributes;for(let U=0,V=N.length;U<V;U++)N[U]=0}function m(N){p(N,0)}function p(N,U){let V=r.newAttributes,L=r.enabledAttributes,W=r.attributeDivisors;V[N]=1,L[N]===0&&(s.enableVertexAttribArray(N),L[N]=1),W[N]!==U&&(s.vertexAttribDivisor(N,U),W[N]=U)}function y(){let N=r.newAttributes,U=r.enabledAttributes;for(let V=0,L=U.length;V<L;V++)U[V]!==N[V]&&(s.disableVertexAttribArray(V),U[V]=0)}function E(N,U,V,L,W,G,X){X===!0?s.vertexAttribIPointer(N,U,V,W,G):s.vertexAttribPointer(N,U,V,L,W,G)}function b(N,U,V,L){x();let W=L.attributes,G=V.getAttributes(),X=U.defaultAttributeValues;for(let ee in G){let q=G[ee];if(q.location>=0){let Y=W[ee];if(Y===void 0&&(ee==="instanceMatrix"&&N.instanceMatrix&&(Y=N.instanceMatrix),ee==="instanceColor"&&N.instanceColor&&(Y=N.instanceColor)),Y!==void 0){let O=Y.normalized,ne=Y.itemSize,Se=e.get(Y);if(Se===void 0)continue;let K=Se.buffer,fe=Se.type,we=Se.bytesPerElement,Ee=fe===s.INT||fe===s.UNSIGNED_INT||Y.gpuType===bo;if(Y.isInterleavedBufferAttribute){let _e=Y.data,ze=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,vt=Y.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let He=0;He<q.locationSize;He++)p(q.location+He,_e.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let He=0;He<q.locationSize;He++)m(q.location+He);s.bindBuffer(s.ARRAY_BUFFER,K);for(let He=0;He<q.locationSize;He++)E(q.location+He,ne/q.locationSize,fe,O,ze*we,(vt+ne/q.locationSize*He)*we,Ee)}else{if(Y.isInstancedBufferAttribute){for(let _e=0;_e<q.locationSize;_e++)p(q.location+_e,Y.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let _e=0;_e<q.locationSize;_e++)m(q.location+_e);s.bindBuffer(s.ARRAY_BUFFER,K);for(let _e=0;_e<q.locationSize;_e++)E(q.location+_e,ne/q.locationSize,fe,O,ne*we,ne/q.locationSize*_e*we,Ee)}}else if(X!==void 0){let O=X[ee];if(O!==void 0)switch(O.length){case 2:s.vertexAttrib2fv(q.location,O);break;case 3:s.vertexAttrib3fv(q.location,O);break;case 4:s.vertexAttrib4fv(q.location,O);break;default:s.vertexAttrib1fv(q.location,O)}}}}y()}function T(){D();for(let N in n){let U=n[N];for(let V in U){let L=U[V];for(let W in L){let G=L[W];for(let X in G)h(G[X].object),delete G[X];delete L[W]}}delete n[N]}}function A(N){if(n[N.id]===void 0)return;let U=n[N.id];for(let V in U){let L=U[V];for(let W in L){let G=L[W];for(let X in G)h(G[X].object),delete G[X];delete L[W]}}delete n[N.id]}function _(N){for(let U in n){let V=n[U];for(let L in V){let W=V[L];if(W[N.id]===void 0)continue;let G=W[N.id];for(let X in G)h(G[X].object),delete G[X];delete W[N.id]}}}function M(N){for(let U in n){let V=n[U],L=N.isInstancedMesh===!0?N.id:0,W=V[L];if(W!==void 0){for(let G in W){let X=W[G];for(let ee in X)h(X[ee].object),delete X[ee];delete W[G]}delete V[L],Object.keys(V).length===0&&delete n[U]}}}function D(){P(),a=!0,r!==i&&(r=i,c(r.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function f0(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function p0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(_){return!(_!==wn&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let M=_===On&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==un&&_!==_n&&!M&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(De("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&De("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),A=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:b,maxSamples:T,samples:A}}function m0(s){let e=this,t=null,n=0,i=!1,r=!1,a=new nn,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,E=y*4,b=p.clippingState||null;l.value=b,b=h(g,d,E,f);for(let T=0;T!==E;++T)b[T]=t[T];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,b=f;E!==x;++E,b+=4)a.copy(u[E]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var ra=class extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Lr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ue(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Yi});r.uniforms.tEquirect.value=t;let a=new te(i,r),o=t.minFilter;return t.minFilter===Mn&&(t.minFilter=Ut),new Bs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},xd=256,g0=3,_0=20,zd=256,Gd=16,x0=3,y0=new w,v0=new Ae,Zs=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Bs(1,10,null),this._boxMesh=new te(new Ue(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=y0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(v0));let m=new Bs(n,i,h);return m.position.copy(o),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(xd,Bc(e))}_fromTexture(e,t){e.mapping===Ki||e.mapping===Ws?this._setSize(e.image.length===0?xd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=yd(e,!1,!1),n=Math.log2(e)-g0;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=yd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ki||e.mapping===Ws?(this._cubemapMaterial===null&&(this._cubemapMaterial=bd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=vd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=b0(),this._integrationMaterial=S0());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Gd);for(let a=0;a<=n;a++){let o=s.lodToRoughness(a,n);if(a>n-x0)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(zd*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=M0());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function yd(s,e,t){return new ra(s,{minFilter:Mn,generateMipmaps:e,type:On,colorSpace:sn,depthBuffer:t})}function aa(s,e,t){return new Vn({name:s,uniforms:e,vertexShader:et.cube_vert,fragmentShader:t,side:rn,blending:Yi,depthTest:!1,depthWrite:!1})}function b0(){return aa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${zd}u

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
	`)}function S0(){return aa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Gd}},`

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
	`)}function M0(){return aa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${_0}
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
	`)}function vd(){return aa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function bd(){return aa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function w0(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Xs||f===yo)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new ra(g.height);return x.fromEquirectangularTexture(s,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===Xs||f===yo,x=f===Ki||f===Ws;if(g||x){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Zs(s)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return g&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Zs(s)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Xs?d.mapping=Ki:f===yo&&(d.mapping=Ws),d}function l(d){let f=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function E0(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Hi("WebGLRenderer: "+n+" extension not supported."),i}}}function T0(s,e,t,n){let i={},r=new WeakMap,a=new FinalizationRegistry(g=>delete i[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete i[g.id],a.unregister(g);let x=r.get(g);x&&(e.remove(x),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,x){return i[x.id]!==void 0||(x.addEventListener("dispose",o),i[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(g){let x=g.attributes;for(let m in x)e.update(x[m],s.ARRAY_BUFFER)}function u(g){let x=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let y=x!==null?x.array.length:m.array.length/3-1,E=m.count>=65535?wr:Mr,b=new E(Math.ceil(y/3)*6,1),T=b.array;if(x!==null){let _=x.array;p=x.version;for(let M=0,D=0;M<y;M+=3){let P=_[M+0],N=_[M+1],U=_[M+2];T[D++]=P,T[D++]=N,T[D++]=N,T[D++]=U,T[D++]=U,T[D++]=P}}else{p=m.version;for(let _=0,M=0;_<y;_+=3){let D=_+0,P=_+1,N=_+2;T[M++]=D,T[M++]=P,T[M++]=P,T[M++]=N,T[M++]=N,T[M++]=D}}b.version=p;let A=r.get(g);A&&e.remove(A),r.set(g,b)}function d(g){let x=r.get(g);if(x){let m=g.index;m!==null&&x.version<m.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in i){let x=i[g].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function A0(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];t.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function R0(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function C0(s,e,t){let n=new WeakMap,i=new mt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let D=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),x===!0&&(E=3);let b=o.attributes.position.count*E,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let A=new Float32Array(b*T*4*u),_=new Sr(A,b,T,u);_.type=_n,_.needsUpdate=!0;let M=E*4;for(let P=0;P<u;P++){let N=m[P],U=p[P],V=y[P],L=b*T*4*P;for(let W=0;W<N.count;W++){let G=W*M;f===!0&&(i.fromBufferAttribute(N,W),A[L+G+0]=i.x,A[L+G+1]=i.y,A[L+G+2]=i.z,A[L+G+3]=0),g===!0&&(i.fromBufferAttribute(U,W),A[L+G+4]=i.x,A[L+G+5]=i.y,A[L+G+6]=i.z,A[L+G+7]=0),x===!0&&(i.fromBufferAttribute(V,W),A[L+G+8]=i.x,A[L+G+9]=i.y,A[L+G+10]=i.z,A[L+G+11]=V.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new ye(b,T)},n.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function L0(s,e,t,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var P0={[_c]:"LINEAR_TONE_MAPPING",[xc]:"REINHARD_TONE_MAPPING",[yc]:"CINEON_TONE_MAPPING",[Kr]:"ACES_FILMIC_TONE_MAPPING",[bc]:"AGX_TONE_MAPPING",[Sc]:"NEUTRAL_TONE_MAPPING",[vc]:"CUSTOM_TONE_MAPPING"};function I0(s,e,t,n,i,r){let a=new mn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new At;h.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ot([0,2,0,0,2,0],2));let u=new ro({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new te(h,u),f=new Xi(-1,1,1,-1,0,1),g=null,x=null,m=!1,p,y=null,E=[],b=!1;this.setSize=function(T,A){a.setSize(T,A),o!==null&&o.setSize(T,A),l!==null&&l.setSize(T,A);for(let _=0;_<E.length;_++){let M=E[_];M.setSize&&M.setSize(T,A)}},this.setEffects=function(T){E=T,b=E.length>0&&E[0].isRenderPass===!0;let A=a.width,_=a.height;E.length>0&&o===null&&(o=new mn(A,_,{type:On,depthBuffer:!1,stencilBuffer:!1}),l=new mn(A,_,{type:On,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&E.some(D=>D.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new ui(A,_),r===!0&&(c.format=_i,c.type=Ji)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let D=0;D<E.length;D++){let P=E[D];P.setSize&&P.setSize(A,_),M&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(T,A){if(m||T.toneMapping===Yn&&E.length===0)return!1;if(y=A,A!==null){let _=A.width,M=A.height;(a.width!==_||a.height!==M)&&this.setSize(_,M)}return b===!1&&T.setRenderTarget(a),p=T.toneMapping,T.toneMapping=Yn,!0},this.hasRenderPass=function(){return b},this.end=function(T,A){T.toneMapping=p,m=!0;let _=a,M=o;for(let D=0;D<E.length;D++){let P=E[D];P.enabled!==!1&&(P.render(T,M,_,A),P.needsSwap!==!1&&(_=M,M=M===o?l:o))}if(g!==T.outputColorSpace||x!==T.toneMapping){g=T.outputColorSpace,x=T.toneMapping,u.defines={},nt.getTransfer(g)===dt&&(u.defines.SRGB_TRANSFER="");let D=P0[x];D&&(u.defines[D]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(y),T.render(d,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Vd=new Bt,Wd=new ui(1,1),Xd=new Pr(1),qd=new Sr,Yd=new $a,$d=new Lr,Sd=[],Md=[],wd=new Float32Array(16),Ed=new Float32Array(9),Td=new Float32Array(4);function Js(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Sd[i];if(r===void 0&&(r=new Float32Array(i),Sd[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function kt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ht(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function cl(s,e){let t=Md[e];t===void 0&&(t=new Int32Array(e),Md[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function D0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function N0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2fv(this.addr,e),Ht(t,e)}}function F0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;s.uniform3fv(this.addr,e),Ht(t,e)}}function O0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4fv(this.addr,e),Ht(t,e)}}function U0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;Td.set(n),s.uniformMatrix2fv(this.addr,!1,Td),Ht(t,n)}}function B0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;Ed.set(n),s.uniformMatrix3fv(this.addr,!1,Ed),Ht(t,n)}}function k0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;wd.set(n),s.uniformMatrix4fv(this.addr,!1,wd),Ht(t,n)}}function H0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function z0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2iv(this.addr,e),Ht(t,e)}}function G0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;s.uniform3iv(this.addr,e),Ht(t,e)}}function V0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4iv(this.addr,e),Ht(t,e)}}function W0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function X0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2uiv(this.addr,e),Ht(t,e)}}function q0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;s.uniform3uiv(this.addr,e),Ht(t,e)}}function Y0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4uiv(this.addr,e),Ht(t,e)}}function hl(s){return s.version===0&&(s.compareFunction=Dc,s.needsUpdate=!0),s}function $0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=hl(Wd):r=Vd,t.setTexture2D(e||r,i)}function K0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yd,i)}function Z0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=hl(Xd):r=$d,t.setTextureCube(e||r,i)}function J0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qd,i)}function j0(s){switch(s){case 5126:return D0;case 35664:return N0;case 35665:return F0;case 35666:return O0;case 35674:return U0;case 35675:return B0;case 35676:return k0;case 5124:case 35670:return H0;case 35667:case 35671:return z0;case 35668:case 35672:return G0;case 35669:case 35673:return V0;case 5125:return W0;case 36294:return X0;case 36295:return q0;case 36296:return Y0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return K0;case 35680:case 36300:case 36308:case 36293:return Z0;case 36289:case 36303:case 36311:case 36292:return J0}}function Q0(s,e){s.uniform1fv(this.addr,e)}function e_(s,e){let t=Js(e,this.size,2);s.uniform2fv(this.addr,t)}function t_(s,e){let t=Js(e,this.size,3);s.uniform3fv(this.addr,t)}function n_(s,e){let t=Js(e,this.size,4);s.uniform4fv(this.addr,t)}function i_(s,e){let t=Js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function s_(s,e){let t=Js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function r_(s,e){let t=Js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function a_(s,e){s.uniform1iv(this.addr,e)}function o_(s,e){s.uniform2iv(this.addr,e)}function l_(s,e){s.uniform3iv(this.addr,e)}function c_(s,e){s.uniform4iv(this.addr,e)}function h_(s,e){s.uniform1uiv(this.addr,e)}function u_(s,e){s.uniform2uiv(this.addr,e)}function d_(s,e){s.uniform3uiv(this.addr,e)}function f_(s,e){s.uniform4uiv(this.addr,e)}function p_(s,e,t){let n=this.cache,i=e.length,r=cl(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=hl(Wd):a=Vd;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function m_(s,e,t){let n=this.cache,i=e.length,r=cl(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Yd,r[a])}function g_(s,e,t){let n=this.cache,i=e.length,r=cl(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=hl(Xd):a=$d;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,r[o])}function __(s,e,t){let n=this.cache,i=e.length,r=cl(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||qd,r[a])}function x_(s){switch(s){case 5126:return Q0;case 35664:return e_;case 35665:return t_;case 35666:return n_;case 35674:return i_;case 35675:return s_;case 35676:return r_;case 5124:case 35670:return a_;case 35667:case 35671:return o_;case 35668:case 35672:return l_;case 35669:case 35673:return c_;case 5125:return h_;case 36294:return u_;case 36295:return d_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return __}}var Qc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=j0(t.type)}},eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=x_(t.type)}},th=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Jc=/(\w+)(\])?(\[|\.)?/g;function Ad(s,e){s.seq.push(e),s.map[e.id]=e}function y_(s,e,t){let n=s.name,i=n.length;for(Jc.lastIndex=0;;){let r=Jc.exec(n),a=Jc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ad(t,c===void 0?new Qc(o,s,e):new eh(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new th(o),Ad(t,u)),t=u}}}var Ks=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);y_(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Rd(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var v_=37297,b_=0;function S_(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Cd=new Ye;function M_(s){nt._getMatrix(Cd,nt.workingColorSpace,s);let e=`mat3( ${Cd.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(s)){case vr:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ld(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+S_(s.getShaderSource(e),o)}else return r}function w_(s,e){let t=M_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var E_={[_c]:"Linear",[xc]:"Reinhard",[yc]:"Cineon",[Kr]:"ACESFilmic",[bc]:"AgX",[Sc]:"Neutral",[vc]:"Custom"};function T_(s,e){let t=E_[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ol=new w;function A_(){nt.getLuminanceCoefficients(ol);let s=ol.x.toFixed(4),e=ol.y.toFixed(4),t=ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function C_(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function L_(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function sa(s){return s!==""}function Pd(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Id(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var P_=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(s){return s.replace(P_,I_)}function I_(s,e){let t=et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return nh(t)}var D_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dd(s){return s.replace(D_,N_)}function N_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Nd(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var F_={[$r]:"SHADOWMAP_TYPE_PCF",[zs]:"SHADOWMAP_TYPE_VSM"};function O_(s){return F_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var U_={[Ws]:"ENVMAP_MODE_REFRACTION"};function B_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":U_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var k_={[gc]:"ENVMAP_BLENDING_MULTIPLY",[ju]:"ENVMAP_BLENDING_MIX",[Qu]:"ENVMAP_BLENDING_ADD"};function H_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":k_[s.combine]||"ENVMAP_BLENDING_NONE"}function z_(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=O_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=B_(t),u=H_(t),d=R_(t),f=C_(r),g=i.createProgram(),x,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(sa).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(sa).join(`
`),m.length>0&&(m+=`
`)):(x=[Nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),m=[Nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?et.tonemapping_pars_fragment:"",t.toneMapping!==Yn?T_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,w_("linearToOutputTexel",t.outputColorSpace),A_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sa).join(`
`)),a=nh(a),a=Pd(a,t),a=Id(a,t),o=nh(o),o=Pd(o,t),o=Id(o,t),a=Dd(a),o=Dd(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=p+x+a,E=p+m+o,b=Rd(i,i.VERTEX_SHADER,y),T=Rd(i,i.FRAGMENT_SHADER,E);i.attachShader(g,b),i.attachShader(g,T),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(P){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(g)||"",U=i.getShaderInfoLog(b)||"",V=i.getShaderInfoLog(T)||"",L=N.trim(),W=U.trim(),G=V.trim(),X=!0,ee=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,b,T);else{let q=Ld(i,b,"vertex"),Y=Ld(i,T,"fragment");Ve("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+q+`
`+Y)}else L!==""?De("WebGLProgram: Program Info Log:",L):(W===""||G==="")&&(ee=!1);ee&&(P.diagnostics={runnable:X,programLog:L,vertexShader:{log:W,prefix:x},fragmentShader:{log:G,prefix:m}})}i.deleteShader(b),i.deleteShader(T),_=new Ks(i,g),M=L_(i,g)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(g,v_)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=b_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=T,this}var G_=0,ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new sh(e),t.set(e,n)),n}},sh=class{constructor(e){this.id=G_++,this.code=e,this.usedTimes=0}};function V_(s){return s===Ii||s===ea||s===ta}function W_(s,e,t,n,i,r){let a=new Ts,o=new ih,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,M,D,P,N,U){let V=P.fog,L=N.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,X=e.get(_.envMap||W,G),ee=d[_.type],q=n.precision;_.precision!==null&&(q=n.getMaxPrecision(_.precision),q!==_.precision&&De("WebGLProgram.getParameters:",_.precision,"not supported, using",q,"instead."));let Y=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,O=Y!==void 0?Y.length:0,ne=0;L.morphAttributes.position!==void 0&&(ne=1),L.morphAttributes.normal!==void 0&&(ne=2),L.morphAttributes.color!==void 0&&(ne=3);let Se,K,fe,we;if(ee){let xe=Zn[ee];Se=xe.vertexShader,K=xe.fragmentShader}else{Se=_.vertexShader,K=_.fragmentShader;let xe=o.getVertexShaderStage(_),lt=o.getFragmentShaderStage(_);o.update(_,xe,lt),fe=xe.id,we=lt.id}let Ee=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),ze=N.isInstancedMesh===!0,vt=N.isBatchedMesh===!0,He=!!_.map,st=!!_.matcap,ht=!!X,Je=ht&&X.isPMREMTexture===!0,rt=!!_.aoMap,Le=!!_.lightMap,Pe=!!_.bumpMap&&_.wireframe===!1,ge=!!_.normalMap,Te=!!_.displacementMap,Ne=!!_.emissiveMap,Ze=!!_.metalnessMap,Nt=!!_.roughnessMap,$t=_.anisotropy>0,F=_.clearcoat>0,Kt=_.diffuseRoughness>0,ft=_.dispersion>0,pt=_.retroreflectivity>0,me=_.iridescence>0,bt=_.sheen>0,Be=_.transmission>0,Ge=$t&&!!_.anisotropyMap,R=F&&!!_.clearcoatMap,v=F&&!!_.clearcoatNormalMap,k=F&&!!_.clearcoatRoughnessMap,ie=Kt&&!!_.diffuseRoughnessMap,Q=me&&!!_.iridescenceMap,ae=me&&!!_.iridescenceThicknessMap,ue=bt&&!!_.sheenColorMap,Z=bt&&!!_.sheenRoughnessMap,J=!!_.specularMap,de=!!_.specularColorMap,C=!!_.specularIntensityMap,j=Be&&!!_.transmissionMap,$=Be&&!!_.thicknessMap,ce=!!_.gradientMap,oe=!!_.alphaMap,le=_.alphaTest>0,Fe=!!_.alphaHash,$e=!!_.extensions,se=Yn;_.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(se=s.toneMapping);let Oe=Je?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,Ke={shaderID:ee,shaderType:_.type,shaderName:_.name,vertexShader:Se,fragmentShader:K,defines:_.defines,customVertexShaderID:fe,customFragmentShaderID:we,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:q,batching:vt,batchingColor:vt&&N._colorsTexture!==null,instancing:ze,instancingColor:ze&&N.instanceColor!==null,instancingMorph:ze&&N.morphTexture!==null,outputColorSpace:Ee===null?s.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:He,matcap:st,envMap:ht,envMapMode:ht&&X.mapping,envMapPMREM:Je,envMapMaxLod:Je?Oe.length-1:null,envMapSize:Je?Oe[0].width:null,aoMap:rt,lightMap:Le,bumpMap:Pe,normalMap:ge,displacementMap:Te,emissiveMap:Ne,normalMapObjectSpace:ge&&_.normalMapType===id,normalMapTangentSpace:ge&&_.normalMapType===sl,packedNormalMap:ge&&_.normalMapType===sl&&V_(_.normalMap.format),metalnessMap:Ze,roughnessMap:Nt,anisotropy:$t,anisotropyMap:Ge,clearcoat:F,clearcoatMap:R,clearcoatNormalMap:v,clearcoatRoughnessMap:k,diffuseRoughness:Kt,diffuseRoughnessMap:ie,dispersion:ft,retroreflection:pt,iridescence:me,iridescenceMap:Q,iridescenceThicknessMap:ae,sheen:bt,sheenColorMap:ue,sheenRoughnessMap:Z,specularMap:J,specularColorMap:de,specularIntensityMap:C,transmission:Be,transmissionMap:j,thicknessMap:$,gradientMap:ce,opaque:_.transparent===!1&&_.blending===Gs&&_.alphaToCoverage===!1,alphaMap:oe,alphaTest:le,alphaHash:Fe,combine:_.combine,mapUv:He&&f(_.map.channel),aoMapUv:rt&&f(_.aoMap.channel),lightMapUv:Le&&f(_.lightMap.channel),bumpMapUv:Pe&&f(_.bumpMap.channel),normalMapUv:ge&&f(_.normalMap.channel),displacementMapUv:Te&&f(_.displacementMap.channel),emissiveMapUv:Ne&&f(_.emissiveMap.channel),metalnessMapUv:Ze&&f(_.metalnessMap.channel),roughnessMapUv:Nt&&f(_.roughnessMap.channel),anisotropyMapUv:Ge&&f(_.anisotropyMap.channel),clearcoatMapUv:R&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(_.sheenRoughnessMap.channel),specularMapUv:J&&f(_.specularMap.channel),specularColorMapUv:de&&f(_.specularColorMap.channel),specularIntensityMapUv:C&&f(_.specularIntensityMap.channel),transmissionMapUv:j&&f(_.transmissionMap.channel),thicknessMapUv:$&&f(_.thicknessMap.channel),alphaMapUv:oe&&f(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ge||$t),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(He||oe),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&ge===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_e,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ne,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:U.filter(xe=>xe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:se,decodeVideoTexture:He&&_.map.isVideoTexture===!0&&nt.getTransfer(_.map.colorSpace)===dt,decodeVideoTextureEmissive:Ne&&_.emissiveMap.isVideoTexture===!0&&nt.getTransfer(_.emissiveMap.colorSpace)===dt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Dt,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:$e&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&_.extensions.multiDraw===!0||vt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}function x(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)M.push(D),M.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(m(M,_),p(M,_),M.push(s.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function m(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function p(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){let M=d[_.type],D;if(M){let P=Zn[M];D=md.clone(P.uniforms)}else D=_.uniforms;return D}function E(_,M){let D=h.get(M);return D!==void 0?++D.usedTimes:(D=new z_(s,M,_,i),c.push(D),h.set(M,D)),D}function b(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:y,acquireProgram:E,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:A}}function X_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function q_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Fd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Od(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,x,m,p){let y=s[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},s[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=g,y.materialVariant=a(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=m,y.group=p),e++,y}function l(d,f,g,x,m,p,y){y.reversedDepth===!0&&(m=-m);let E=o(d,f,g,x,m,p);g.transmission>0?n.push(E):g.transparent===!0?i.push(E):t.push(E)}function c(d,f,g,x,m,p){let y=o(d,f,g,x,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?i.unshift(y):t.unshift(y)}function h(d,f){t.length>1&&t.sort(d||q_),n.length>1&&n.sort(f||Fd),i.length>1&&i.sort(f||Fd)}function u(){for(let d=e,f=s.length;d<f;d++){let g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function Y_(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Od,s.set(n,[a])):i>=r.length?(a=new Od,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function $_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new w,color:new Ae};break;case"SpotLight":t={position:new w,direction:new w,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new w,halfWidth:new w,halfHeight:new w};break}return s[e.id]=t,t}}}function K_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Z_=0;function J_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function j_(s){let e=new $_,t=K_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);let i=new w,r=new We,a=new We;function o(c){let h=0,u=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,E=0,b=0,T=0,A=0,_=0,M=0,D=0,P=0;c.sort(J_);for(let U=0,V=c.length;U<V;U++){let L=c[U],W=L.color,G=L.intensity,X=L.distance,ee=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ii?ee=L.shadow.map.texture:ee=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=W.r*G,u+=W.g*G,d+=W.b*G;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],G);P++}else if(L.isSunLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Y=L.shadow,O=t.get(L);O.shadowIntensity=Y.intensity,O.shadowBias=Y.bias,O.shadowNormalBias=Y.normalBias,O.shadowRadius=Y.radius,O.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[g]=O,n.sunShadowMap[g]=ee;let ne=Y.getViewportCount();for(let Se=0;Se<ne;Se++)n.sunShadowMatrix[x+Se]=Y.getMatrix(Se),n.sunShadowCascade[x+Se]=Y._cascadeData[Se];x+=ne,g++}n.sun[f]=q,f++}else if(L.isDirectionalLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Y=L.shadow,O=t.get(L);O.shadowIntensity=Y.intensity,O.shadowBias=Y.bias,O.shadowNormalBias=Y.normalBias,O.shadowRadius=Y.radius,O.shadowMapSize=Y.mapSize,n.directionalShadow[m]=O,n.directionalShadowMap[m]=ee,n.directionalShadowMatrix[m]=L.shadow.matrix,T++}n.directional[m]=q,m++}else if(L.isSpotLight){let q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(W).multiplyScalar(G),q.distance=X,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[y]=q;let Y=L.shadow;if(L.map&&(n.spotLightMap[M]=L.map,M++,Y.updateMatrices(L),L.castShadow&&D++),n.spotLightMatrix[y]=Y.matrix,L.castShadow){let O=t.get(L);O.shadowIntensity=Y.intensity,O.shadowBias=Y.bias,O.shadowNormalBias=Y.normalBias,O.shadowRadius=Y.radius,O.shadowMapSize=Y.mapSize,n.spotShadow[y]=O,n.spotShadowMap[y]=ee,_++}y++}else if(L.isRectAreaLight){let q=e.get(L);q.color.copy(W).multiplyScalar(G),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[E]=q,E++}else if(L.isPointLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let Y=L.shadow,O=t.get(L);O.shadowIntensity=Y.intensity,O.shadowBias=Y.bias,O.shadowNormalBias=Y.normalBias,O.shadowRadius=Y.radius,O.shadowMapSize=Y.mapSize,O.shadowCameraNear=Y.camera.near,O.shadowCameraFar=Y.camera.far,n.pointShadow[p]=O,n.pointShadowMap[p]=ee,n.pointShadowMatrix[p]=L.shadow.matrix,A++}n.point[p]=q,p++}else if(L.isHemisphereLight){let q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(G),q.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[b]=q,b++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let N=n.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==y||N.rectAreaLength!==E||N.hemiLength!==b||N.numSunShadows!==g||N.numDirectionalShadows!==T||N.numPointShadows!==A||N.numSpotShadows!==_||N.numSpotMaps!==M||N.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=E,n.point.length=p,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+M-D,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=P,N.sunLength=f,N.directionalLength=m,N.pointLength=p,N.spotLength=y,N.rectAreaLength=E,N.hemiLength=b,N.numSunShadows=g,N.numDirectionalShadows=T,N.numPointShadows=A,N.numSpotShadows=_,N.numSpotMaps=M,N.numLightProbes=P,n.version=Z_++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let y=0,E=c.length;y<E;y++){let b=c[y];if(b.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),u++}else if(b.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(p),d++}else if(b.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Ud(s){let e=new j_(s),t=[],n=[],i=[];function r(u){h.camera=u,t.length=0,n.length=0,i.length=0}function a(u){u.isLightProbeGrid?i.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),i.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Q_(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Ud(s),e.set(i,[o])):r>=a.length?(o=new Ud(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tx=`uniform sampler2D shadow_pass;
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
}`,nx=[new w(1,0,0),new w(-1,0,0),new w(0,1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1)],ix=[new w(0,-1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1),new w(0,-1,0),new w(0,-1,0)],Bd=new We,ia=new w,jc=new w;function sx(s,e,t){let n=new Ti,i=new ye,r=new ye,a=new mt,o=new ao,l=new oo,c={},h=t.maxTextureSize,u={[qn]:rn,[rn]:qn,[Dt]:Dt},d=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:ex,fragmentShader:tx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new At;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new te(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$r;let p=this.type;this.render=function(A,_,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===xo&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$r);let D=s.getRenderTarget(),P=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Yi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let V=p!==this.type;V&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(W=>W.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,W=A.length;L<W;L++){let G=A[L],X=G.shadow;if(X===void 0){De("WebGLShadowMap:",G,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let ee=X.getFrameExtents();i.multiply(ee),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ee.x),i.x=r.x*ee.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ee.y),i.y=r.y*ee.y,X.mapSize.y=r.y));let q=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=q,X.map===null||V===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===zs){if(G.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new mn(i.x,i.y,{format:Ii,type:On,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),X.map.texture.name=G.name+".shadowMap",X.map.depthTexture=new ui(i.x,i.y,_n),X.map.depthTexture.name=G.name+".shadowMapDepth",X.map.depthTexture.format=oi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ct,X.map.depthTexture.magFilter=Ct}else G.isPointLight?(X.map=new ra(i.x),X.map.depthTexture=new Pr(i.x,Fn)):(X.map=new mn(i.x,i.y),X.map.depthTexture=new ui(i.x,i.y,Fn)),X.map.depthTexture.name=G.name+".shadowMap",X.map.depthTexture.format=oi,this.type===$r?(X.map.depthTexture.compareFunction=q?Ic:Pc,X.map.depthTexture.minFilter=Ut,X.map.depthTexture.magFilter=Ut):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ct,X.map.depthTexture.magFilter=Ct);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==i.x||X.map.height!==i.y)&&X.map.setSize(i.x,i.y);let Y=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();G.isPointLight!==!0&&X.updateMatrices(G,M);let O=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:M.layers;for(let ne=0;ne<Y;ne++){let Se=X.getCamera(ne);if(G.isPointLight){let K=X.camera,fe=X.matrix,we=G.distance||K.far;we!==K.far&&(K.far=we,K.updateProjectionMatrix()),ia.setFromMatrixPosition(G.matrixWorld),K.position.copy(ia),jc.copy(K.position),jc.add(nx[ne]),K.up.copy(ix[ne]),K.lookAt(jc),K.updateMatrixWorld(),fe.makeTranslation(-ia.x,-ia.y,-ia.z),Bd.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Bd,K.coordinateSystem,K.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,ne),s.clear();else{ne===0&&(s.setRenderTarget(X.map),s.clear());let K=X.getViewport(ne);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),U.viewport(a)}n=X.getFrustum(ne),b(_,M,Se,G,O,this.type)}X.isPointLightShadow!==!0&&this.type===zs&&y(X,M),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(D,P,N)};function y(A,_){let M=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new mn(i.x,i.y,{format:Ii,type:On}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(_,null,M,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(_,null,M,f,x,null)}function E(A,_,M,D){let P=null,N=M.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)P=N;else if(P=M.isPointLight===!0?l:o,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let U=P.uuid,V=_.uuid,L=c[U];L===void 0&&(L={},c[U]=L);let W=L[V];W===void 0&&(W=P.clone(),L[V]=W,_.addEventListener("dispose",T)),P=W}if(P.visible=_.visible,P.wireframe=_.wireframe,D===zs?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:u[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,M.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let U=s.properties.get(P);U.light=M}return P}function b(A,_,M,D,P,N){if(A.visible===!1)return;if(A.layers.test(P)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===zs)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,A.matrixWorld);let L=e.update(A),W=A.material;if(Array.isArray(W)){let G=L.groups;for(let X=0,ee=G.length;X<ee;X++){let q=G[X],Y=W[q.materialIndex];if(Y&&Y.visible){let O=E(A,Y,D,N);A.onBeforeShadow(s,A,_,M,L,O,q),s.renderBufferDirect(M,null,L,O,A,q),A.onAfterShadow(s,A,_,M,L,O,q)}}}else if(W.visible){let G=E(A,W,D,N);A.onBeforeShadow(s,A,_,M,L,G,null),s.renderBufferDirect(M,null,L,G,A,null),A.onAfterShadow(s,A,_,M,L,G,null)}}let V=A.children;for(let L=0,W=V.length;L<W;L++)b(V[L],_,M,D,P,N)}function T(A){A.target.removeEventListener("dispose",T);for(let M in c){let D=c[M],P=A.target.uuid;P in D&&(D[P].dispose(),delete D[P])}}}function rx(s,e){function t(){let C=!1,j=new mt,$=null,ce=new mt(0,0,0,0);return{setMask:function(oe){$!==oe&&!C&&(s.colorMask(oe,oe,oe,oe),$=oe)},setLocked:function(oe){C=oe},setClear:function(oe,le,Fe,$e,se){se===!0&&(oe*=$e,le*=$e,Fe*=$e),j.set(oe,le,Fe,$e),ce.equals(j)===!1&&(s.clearColor(oe,le,Fe,$e),ce.copy(j))},reset:function(){C=!1,$=null,ce.set(-1,0,0,0)}}}function n(){let C=!1,j=!1,$=null,ce=null,oe=null;return{setReversed:function(le){if(j!==le){let Fe=e.get("EXT_clip_control");le?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),j=le;let $e=oe;oe=null,this.setClear($e)}},getReversed:function(){return j},setTest:function(le){le?_e(s.DEPTH_TEST):ze(s.DEPTH_TEST)},setMask:function(le){$!==le&&!C&&(s.depthMask(le),$=le)},setFunc:function(le){if(j&&(le=fd[le]),ce!==le){switch(le){case ka:s.depthFunc(s.NEVER);break;case Ha:s.depthFunc(s.ALWAYS);break;case za:s.depthFunc(s.LESS);break;case vs:s.depthFunc(s.LEQUAL);break;case Ga:s.depthFunc(s.EQUAL);break;case Va:s.depthFunc(s.GEQUAL);break;case Wa:s.depthFunc(s.GREATER);break;case Xa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=le}},setLocked:function(le){C=le},setClear:function(le){oe!==le&&(oe=le,j&&(le=1-le),s.clearDepth(le))},reset:function(){C=!1,$=null,ce=null,oe=null,j=!1}}}function i(){let C=!1,j=null,$=null,ce=null,oe=null,le=null,Fe=null,$e=null,se=null;return{setTest:function(Oe){C||(Oe?_e(s.STENCIL_TEST):ze(s.STENCIL_TEST))},setMask:function(Oe){j!==Oe&&!C&&(s.stencilMask(Oe),j=Oe)},setFunc:function(Oe,Ke,xe){($!==Oe||ce!==Ke||oe!==xe)&&(s.stencilFunc(Oe,Ke,xe),$=Oe,ce=Ke,oe=xe)},setOp:function(Oe,Ke,xe){(le!==Oe||Fe!==Ke||$e!==xe)&&(s.stencilOp(Oe,Ke,xe),le=Oe,Fe=Ke,$e=xe)},setLocked:function(Oe){C=Oe},setClear:function(Oe){se!==Oe&&(s.clearStencil(Oe),se=Oe)},reset:function(){C=!1,j=null,$=null,ce=null,oe=null,le=null,Fe=null,$e=null,se=null}}}let r=new t,a=new n,o=new i,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],x=null,m=!1,p=null,y=null,E=null,b=null,T=null,A=null,_=null,M=new Ae(0,0,0),D=0,P=!1,N=null,U=null,V=null,L=null,W=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ee=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=ee>=1):q.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=ee>=2);let Y=null,O={},ne=s.getParameter(s.SCISSOR_BOX),Se=s.getParameter(s.VIEWPORT),K=new mt().fromArray(ne),fe=new mt().fromArray(Se);function we(C,j,$,ce){let oe=new Uint8Array(4),le=s.createTexture();s.bindTexture(C,le),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Fe=0;Fe<$;Fe++)C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,ce,0,s.RGBA,s.UNSIGNED_BYTE,oe):s.texImage2D(j+Fe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,oe);return le}let Ee={};Ee[s.TEXTURE_2D]=we(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=we(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=we(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=we(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(s.DEPTH_TEST),a.setFunc(vs),Pe(!1),ge(uc),_e(s.CULL_FACE),rt(Yi);function _e(C){h[C]!==!0&&(s.enable(C),h[C]=!0)}function ze(C){h[C]!==!1&&(s.disable(C),h[C]=!1)}function vt(C,j){return d[C]!==j?(s.bindFramebuffer(C,j),d[C]=j,C===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=j),C===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=j),!0):!1}function He(C,j){let $=g,ce=!1;if(C){$=f.get(j),$===void 0&&($=[],f.set(j,$));let oe=C.textures;if($.length!==oe.length||$[0]!==s.COLOR_ATTACHMENT0){for(let le=0,Fe=oe.length;le<Fe;le++)$[le]=s.COLOR_ATTACHMENT0+le;$.length=oe.length,ce=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,ce=!0);ce&&s.drawBuffers($)}function st(C){return x!==C?(s.useProgram(C),x=C,!0):!1}let ht={[$i]:s.FUNC_ADD,[Fu]:s.FUNC_SUBTRACT,[Ou]:s.FUNC_REVERSE_SUBTRACT};ht[Uu]=s.MIN,ht[Bu]=s.MAX;let Je={[ku]:s.ZERO,[Hu]:s.ONE,[zu]:s.SRC_COLOR,[pc]:s.SRC_ALPHA,[Yu]:s.SRC_ALPHA_SATURATE,[Xu]:s.DST_COLOR,[Vu]:s.DST_ALPHA,[Gu]:s.ONE_MINUS_SRC_COLOR,[mc]:s.ONE_MINUS_SRC_ALPHA,[qu]:s.ONE_MINUS_DST_COLOR,[Wu]:s.ONE_MINUS_DST_ALPHA,[$u]:s.CONSTANT_COLOR,[Ku]:s.ONE_MINUS_CONSTANT_COLOR,[Zu]:s.CONSTANT_ALPHA,[Ju]:s.ONE_MINUS_CONSTANT_ALPHA};function rt(C,j,$,ce,oe,le,Fe,$e,se,Oe){if(C===Yi){m===!0&&(ze(s.BLEND),m=!1);return}if(m===!1&&(_e(s.BLEND),m=!0),C!==Nu){if(C!==p||Oe!==P){if((y!==$i||T!==$i)&&(s.blendEquation(s.FUNC_ADD),y=$i,T=$i),Oe)switch(C){case Gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vs:s.blendFunc(s.ONE,s.ONE);break;case dc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ve("WebGLState: Invalid blending: ",C);break}else switch(C){case Gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case dc:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fc:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",C);break}E=null,b=null,A=null,_=null,M.set(0,0,0),D=0,p=C,P=Oe}return}oe=oe||j,le=le||$,Fe=Fe||ce,(j!==y||oe!==T)&&(s.blendEquationSeparate(ht[j],ht[oe]),y=j,T=oe),($!==E||ce!==b||le!==A||Fe!==_)&&(s.blendFuncSeparate(Je[$],Je[ce],Je[le],Je[Fe]),E=$,b=ce,A=le,_=Fe),($e.equals(M)===!1||se!==D)&&(s.blendColor($e.r,$e.g,$e.b,se),M.copy($e),D=se),p=C,P=!1}function Le(C,j){C.side===Dt?ze(s.CULL_FACE):_e(s.CULL_FACE);let $=C.side===rn;j&&($=!$),Pe($),C.blending===Gs&&C.transparent===!1?rt(Yi):rt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let ce=C.stencilWrite;o.setTest(ce),ce&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ne(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):ze(s.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(C){N!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),N=C)}function ge(C){C!==Iu?(_e(s.CULL_FACE),C!==U&&(C===uc?s.cullFace(s.BACK):C===Du?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ze(s.CULL_FACE),U=C}function Te(C){C!==V&&(X&&s.lineWidth(C),V=C)}function Ne(C,j,$){C?(_e(s.POLYGON_OFFSET_FILL),(L!==j||W!==$)&&(L=j,W=$,a.getReversed()&&(j=-j,$=-$),s.polygonOffset(j,$))):ze(s.POLYGON_OFFSET_FILL)}function Ze(C){C?_e(s.SCISSOR_TEST):ze(s.SCISSOR_TEST)}function Nt(C){C===void 0&&(C=s.TEXTURE0+G-1),Y!==C&&(s.activeTexture(C),Y=C)}function $t(C,j,$){$===void 0&&(Y===null?$=s.TEXTURE0+G-1:$=Y);let ce=O[$];ce===void 0&&(ce={type:void 0,texture:void 0},O[$]=ce),(ce.type!==C||ce.texture!==j)&&(Y!==$&&(s.activeTexture($),Y=$),s.bindTexture(C,j||Ee[C]),ce.type=C,ce.texture=j)}function F(){let C=O[Y];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Kt(){try{s.compressedTexImage2D(...arguments)}catch(C){Ve("WebGLState:",C)}}function ft(){try{s.compressedTexImage3D(...arguments)}catch(C){Ve("WebGLState:",C)}}function pt(){try{s.texSubImage2D(...arguments)}catch(C){Ve("WebGLState:",C)}}function me(){try{s.texSubImage3D(...arguments)}catch(C){Ve("WebGLState:",C)}}function bt(){try{s.compressedTexSubImage2D(...arguments)}catch(C){Ve("WebGLState:",C)}}function Be(){try{s.compressedTexSubImage3D(...arguments)}catch(C){Ve("WebGLState:",C)}}function Ge(){try{s.texStorage2D(...arguments)}catch(C){Ve("WebGLState:",C)}}function R(){try{s.texStorage3D(...arguments)}catch(C){Ve("WebGLState:",C)}}function v(){try{s.texImage2D(...arguments)}catch(C){Ve("WebGLState:",C)}}function k(){try{s.texImage3D(...arguments)}catch(C){Ve("WebGLState:",C)}}function ie(C){return u[C]!==void 0?u[C]:s.getParameter(C)}function Q(C,j){u[C]!==j&&(s.pixelStorei(C,j),u[C]=j)}function ae(C){K.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),K.copy(C))}function ue(C){fe.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),fe.copy(C))}function Z(C,j){let $=c.get(j);$===void 0&&($=new WeakMap,c.set(j,$));let ce=$.get(C);ce===void 0&&(ce=s.getUniformBlockIndex(j,C.name),s.uniformBlockBinding(j,ce,ce),$.set(C,ce))}function J(C,j,$){let oe=c.get(j).get(C);l[oe]!==$&&(s.bindBufferBase(s.UNIFORM_BUFFER,oe,$),l[oe]=$)}function de(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},Y=null,O={},d={},l={},f=new WeakMap,g=[],x=null,m=!1,p=null,y=null,E=null,b=null,T=null,A=null,_=null,M=new Ae(0,0,0),D=0,P=!1,N=null,U=null,V=null,L=null,W=null,K.set(0,0,s.canvas.width,s.canvas.height),fe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_e,disable:ze,bindFramebuffer:vt,drawBuffers:He,useProgram:st,setBlending:rt,setMaterial:Le,setFlipSided:Pe,setCullFace:ge,setLineWidth:Te,setPolygonOffset:Ne,setScissorTest:Ze,activeTexture:Nt,bindTexture:$t,unbindTexture:F,compressedTexImage2D:Kt,compressedTexImage3D:ft,texImage2D:v,texImage3D:k,pixelStorei:Q,getParameter:ie,updateUBOMapping:Z,uniformBlockBinding:J,texStorage2D:Ge,texStorage3D:R,texSubImage2D:pt,texSubImage3D:me,compressedTexSubImage2D:bt,compressedTexSubImage3D:Be,scissor:ae,viewport:ue,reset:de}}function ax(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,x=new FinalizationRegistry(R=>g.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,v){return m?new OffscreenCanvas(R,v):Ms("canvas")}function y(R,v,k){let ie=1,Q=Ge(R);if((Q.width>k||Q.height>k)&&(ie=k/Math.max(Q.width,Q.height)),ie<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ae=Math.floor(ie*Q.width),ue=Math.floor(ie*Q.height);d===void 0&&(d=p(ae,ue));let Z=v?p(ae,ue):d;return Z.width=ae,Z.height=ue,Z.getContext("2d").drawImage(R,0,0,ae,ue),De("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ae+"x"+ue+")."),Z}else return"data"in R&&De("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function E(R){return R.generateMipmaps}function b(R){s.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(R,v,k,ie,Q,ae=!1){if(R!==null){if(s[R]!==void 0)return s[R];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ue;ie&&(ue=e.get("EXT_texture_norm16"),ue||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=v;if(v===s.RED&&(k===s.FLOAT&&(Z=s.R32F),k===s.HALF_FLOAT&&(Z=s.R16F),k===s.UNSIGNED_BYTE&&(Z=s.R8),k===s.UNSIGNED_SHORT&&ue&&(Z=ue.R16_EXT),k===s.SHORT&&ue&&(Z=ue.R16_SNORM_EXT)),v===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.R8UI),k===s.UNSIGNED_SHORT&&(Z=s.R16UI),k===s.UNSIGNED_INT&&(Z=s.R32UI),k===s.BYTE&&(Z=s.R8I),k===s.SHORT&&(Z=s.R16I),k===s.INT&&(Z=s.R32I)),v===s.RG&&(k===s.FLOAT&&(Z=s.RG32F),k===s.HALF_FLOAT&&(Z=s.RG16F),k===s.UNSIGNED_BYTE&&(Z=s.RG8),k===s.UNSIGNED_SHORT&&ue&&(Z=ue.RG16_EXT),k===s.SHORT&&ue&&(Z=ue.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RG8UI),k===s.UNSIGNED_SHORT&&(Z=s.RG16UI),k===s.UNSIGNED_INT&&(Z=s.RG32UI),k===s.BYTE&&(Z=s.RG8I),k===s.SHORT&&(Z=s.RG16I),k===s.INT&&(Z=s.RG32I)),v===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),k===s.UNSIGNED_INT&&(Z=s.RGB32UI),k===s.BYTE&&(Z=s.RGB8I),k===s.SHORT&&(Z=s.RGB16I),k===s.INT&&(Z=s.RGB32I)),v===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),k===s.UNSIGNED_INT&&(Z=s.RGBA32UI),k===s.BYTE&&(Z=s.RGBA8I),k===s.SHORT&&(Z=s.RGBA16I),k===s.INT&&(Z=s.RGBA32I)),v===s.RGB&&(k===s.UNSIGNED_SHORT&&ue&&(Z=ue.RGB16_EXT),k===s.SHORT&&ue&&(Z=ue.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),v===s.RGBA){let J=ae?vr:nt.getTransfer(Q);k===s.FLOAT&&(Z=s.RGBA32F),k===s.HALF_FLOAT&&(Z=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Z=J===dt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&ue&&(Z=ue.RGBA16_EXT),k===s.SHORT&&ue&&(Z=ue.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(R,v){let k;return R?v===null||v===Fn||v===Ji?k=s.DEPTH24_STENCIL8:v===_n?k=s.DEPTH32F_STENCIL8:v===Ys&&(k=s.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Fn||v===Ji?k=s.DEPTH_COMPONENT24:v===_n?k=s.DEPTH_COMPONENT32F:v===Ys&&(k=s.DEPTH_COMPONENT16),k}function M(R,v){return E(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ct&&R.minFilter!==Ut?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function D(R){let v=new WeakRef(R);n.get(R).__ref=v,g.add(v),x.register(R,v,v)}function P(R){let v=n.get(R).__ref;v!==void 0&&(g.delete(v),x.unregister(v))}function N(R){V(R.target)}function U(R){L(R.target)}function V(R){R.removeEventListener("dispose",N),P(R),G(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function L(R){R.removeEventListener("dispose",U),P(R),ee(R)}function W(){for(let R of g){let v=R.deref();v!==void 0&&(v.isRenderTarget===!0?L(v):V(v))}g.clear(),u.clear()}function G(R){let v=n.get(R);if(v.__webglInit===void 0)return;let k=R.source,ie=f.get(k);if(ie){let Q=ie[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&X(R),Object.keys(ie).length===0&&f.delete(k)}n.remove(R)}function X(R){let v=n.get(R);s.deleteTexture(v.__webglTexture);let k=R.source,ie=f.get(k);delete ie[v.__cacheKey],a.memory.textures--}function ee(R){let v=n.get(R);v.__depthDisposeCallback&&v.__depthDisposeCallback();let k=R.depthTexture;if(k&&k.renderTarget===R&&V(k),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(v.__webglFramebuffer[Q]))for(let ae=0;ae<v.__webglFramebuffer[Q].length;ae++)s.deleteFramebuffer(v.__webglFramebuffer[Q][ae]);else s.deleteFramebuffer(v.__webglFramebuffer[Q]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[Q])}else{if(Array.isArray(v.__webglFramebuffer))for(let Q=0;Q<v.__webglFramebuffer.length;Q++)s.deleteFramebuffer(v.__webglFramebuffer[Q]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Q=0;Q<v.__webglColorRenderbuffer.length;Q++)v.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[Q]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let ie=R.textures;for(let Q=0,ae=ie.length;Q<ae;Q++){let ue=n.get(ie[Q]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(ie[Q])}n.remove(R)}let q=0;function Y(){q=0}function O(){return q}function ne(R){q=R}function Se(){let R=q;return R>=i.maxTextures&&De("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),q+=1,R}function K(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.mipmapsAutoUpdate),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function fe(R,v){let k=n.get(R);if(R.isVideoTexture&&bt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){let ie=R.image;if(ie===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(k,R,v);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+v)}function we(R,v){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){Le(k,R,v);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+v)}function Ee(R,v){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){Le(k,R,v);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+v)}function _e(R,v){let k=n.get(R);if(R.version>0&&k.__version!==R.version){Pe(k,R,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+v)}let ze={[Pn]:s.REPEAT,[yn]:s.CLAMP_TO_EDGE,[bs]:s.MIRRORED_REPEAT},vt={[Ct]:s.NEAREST,[vo]:s.NEAREST_MIPMAP_NEAREST,[Zi]:s.NEAREST_MIPMAP_LINEAR,[Ut]:s.LINEAR,[qs]:s.LINEAR_MIPMAP_NEAREST,[Mn]:s.LINEAR_MIPMAP_LINEAR},He={[rd]:s.NEVER,[Dc]:s.ALWAYS,[ad]:s.LESS,[Pc]:s.LEQUAL,[od]:s.EQUAL,[Ic]:s.GEQUAL,[ld]:s.GREATER,[cd]:s.NOTEQUAL};function st(R,v){if(v.type===_n&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ut||v.magFilter===qs||v.magFilter===Zi||v.magFilter===Mn||v.minFilter===Ut||v.minFilter===qs||v.minFilter===Zi||v.minFilter===Mn)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,ze[v.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ze[v.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ze[v.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,vt[v.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,vt[v.minFilter]),v.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,He[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ct||v.minFilter!==Zi&&v.minFilter!==Mn||v.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ht(R,v){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",N),D(v));let ie=v.source,Q=f.get(ie);Q===void 0&&(Q={},f.set(ie,Q));let ae=K(v);if(ae!==R.__cacheKey){Q[ae]===void 0&&(Q[ae]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[ae].usedTimes++;let ue=Q[R.__cacheKey];ue!==void 0&&(Q[R.__cacheKey].usedTimes--,ue.usedTimes===0&&X(v)),R.__cacheKey=ae,R.__webglTexture=Q[ae].texture}return k}function Je(R,v,k){return Math.floor(Math.floor(R/k)/v)}function rt(R,v,k,ie){let ae=R.updateRanges;if(ae.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,k,ie,v.data);else{ae.sort((C,j)=>C.start-j.start);let ue=0;for(let C=1;C<ae.length;C++){let j=ae[ue],$=ae[C],ce=j.start+j.count,oe=Je($.start,v.width,4),le=Je(j.start,v.width,4);$.start<=ce+1&&oe===le&&Je($.start+$.count-1,v.width,4)===oe?j.count=Math.max(j.count,$.start+$.count-j.start):(++ue,ae[ue]=$)}ae.length=ue+1;let Z=t.getParameter(s.UNPACK_ROW_LENGTH),J=t.getParameter(s.UNPACK_SKIP_PIXELS),de=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let C=0,j=ae.length;C<j;C++){let $=ae[C],ce=Math.floor($.start/4),oe=Math.ceil($.count/4),le=ce%v.width,Fe=Math.floor(ce/v.width),$e=oe,se=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,le),t.pixelStorei(s.UNPACK_SKIP_ROWS,Fe),t.texSubImage2D(s.TEXTURE_2D,0,le,Fe,$e,se,k,ie,v.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Z),t.pixelStorei(s.UNPACK_SKIP_PIXELS,J),t.pixelStorei(s.UNPACK_SKIP_ROWS,de)}}function Le(R,v,k){let ie=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ie=s.TEXTURE_3D);let Q=ht(R,v),ae=v.source;t.bindTexture(ie,R.__webglTexture,s.TEXTURE0+k);let ue=n.get(ae);if(ae.version!==ue.__version||Q===!0){if(t.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let se=nt.getPrimaries(nt.workingColorSpace),Oe=v.colorSpace===xi?null:nt.getPrimaries(v.colorSpace),Ke=v.colorSpace===xi||se===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}t.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let J=y(v.image,!1,i.maxTextureSize);J=Be(v,J);let de=r.convert(v.format,v.colorSpace),C=r.convert(v.type),j=A(v.internalFormat,de,C,v.normalized,v.colorSpace,v.isVideoTexture);st(ie,v);let $,ce=v.mipmaps,oe=v.isVideoTexture!==!0,le=ue.__version===void 0||Q===!0,Fe=ae.dataReady,$e=M(v,J);if(v.isDepthTexture)j=_(v.format===_i,v.type),le&&(oe?t.texStorage2D(s.TEXTURE_2D,1,j,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,j,J.width,J.height,0,de,C,null));else if(v.isDataTexture)if(ce.length>0){oe&&le&&t.texStorage2D(s.TEXTURE_2D,$e,j,ce[0].width,ce[0].height);for(let se=0,Oe=ce.length;se<Oe;se++)$=ce[se],oe?Fe&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,$.width,$.height,de,C,$.data):t.texImage2D(s.TEXTURE_2D,se,j,$.width,$.height,0,de,C,$.data);v.generateMipmaps=!1}else oe?(le&&t.texStorage2D(s.TEXTURE_2D,$e,j,J.width,J.height),Fe&&rt(v,J,de,C)):t.texImage2D(s.TEXTURE_2D,0,j,J.width,J.height,0,de,C,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){oe&&le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,$e,j,ce[0].width,ce[0].height,J.depth);for(let se=0,Oe=ce.length;se<Oe;se++)if($=ce[se],v.format!==wn)if(de!==null)if(oe){if(Fe)if(v.layerUpdates.size>0){let Ke=Xc($.width,$.height,v.format,v.type);for(let xe of v.layerUpdates){let lt=$.data.subarray(xe*Ke/$.data.BYTES_PER_ELEMENT,(xe+1)*Ke/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,xe,$.width,$.height,1,de,lt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,$.width,$.height,J.depth,de,$.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,j,$.width,$.height,J.depth,0,$.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Fe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,$.width,$.height,J.depth,de,C,$.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,j,$.width,$.height,J.depth,0,de,C,$.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{oe&&le&&t.texStorage2D(s.TEXTURE_2D,$e,j,ce[0].width,ce[0].height);for(let se=0,Oe=ce.length;se<Oe;se++)$=ce[se],v.format!==wn?de!==null?oe?Fe&&t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,$.width,$.height,de,$.data):t.compressedTexImage2D(s.TEXTURE_2D,se,j,$.width,$.height,0,$.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Fe&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,$.width,$.height,de,C,$.data):t.texImage2D(s.TEXTURE_2D,se,j,$.width,$.height,0,de,C,$.data)}else if(v.isDataArrayTexture)if(oe){if(le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,$e,j,J.width,J.height,J.depth),Fe)if(v.layerUpdates.size>0){let se=Xc(J.width,J.height,v.format,v.type);for(let Oe of v.layerUpdates){let Ke=J.data.subarray(Oe*se/J.data.BYTES_PER_ELEMENT,(Oe+1)*se/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Oe,J.width,J.height,1,de,C,Ke)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,de,C,J.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,j,J.width,J.height,J.depth,0,de,C,J.data);else if(v.isData3DTexture)oe?(le&&t.texStorage3D(s.TEXTURE_3D,$e,j,J.width,J.height,J.depth),Fe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,de,C,J.data)):t.texImage3D(s.TEXTURE_3D,0,j,J.width,J.height,J.depth,0,de,C,J.data);else if(v.isFramebufferTexture){if(le)if(oe)t.texStorage2D(s.TEXTURE_2D,$e,j,J.width,J.height);else{let se=J.width,Oe=J.height;for(let Ke=0;Ke<$e;Ke++)t.texImage2D(s.TEXTURE_2D,Ke,j,se,Oe,0,de,C,null),se>>=1,Oe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){let se=s.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),J.parentNode!==se){se.appendChild(J),u.add(v),se.onpaint=Oe=>{let Ke=Oe.changedElements;for(let xe of u)Ke.includes(xe.image)&&(xe.needsUpdate=!0)},se.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,J);else{let Ke=s.RGBA,xe=s.RGBA,lt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ke,xe,lt,J)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ce.length>0){if(oe&&le){let se=Ge(ce[0]);t.texStorage2D(s.TEXTURE_2D,$e,j,se.width,se.height)}for(let se=0,Oe=ce.length;se<Oe;se++)$=ce[se],oe?Fe&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,de,C,$):t.texImage2D(s.TEXTURE_2D,se,j,de,C,$);v.generateMipmaps=!1}else if(oe){if(le){let se=Ge(J);t.texStorage2D(s.TEXTURE_2D,$e,j,se.width,se.height)}Fe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,de,C,J)}else t.texImage2D(s.TEXTURE_2D,0,j,de,C,J);E(v)&&v.mipmapsAutoUpdate===!0&&b(ie),ue.__version=ae.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Pe(R,v,k){if(v.image.length!==6)return;let ie=ht(R,v),Q=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+k);let ae=n.get(Q);if(Q.version!==ae.__version||ie===!0){t.activeTexture(s.TEXTURE0+k);let ue=nt.getPrimaries(nt.workingColorSpace),Z=v.colorSpace===xi?null:nt.getPrimaries(v.colorSpace),J=v.colorSpace===xi||ue===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let de=v.isCompressedTexture||v.image[0].isCompressedTexture,C=v.image[0]&&v.image[0].isDataTexture,j=[];for(let xe=0;xe<6;xe++)!de&&!C?j[xe]=y(v.image[xe],!0,i.maxCubemapSize):j[xe]=C?v.image[xe].image:v.image[xe],j[xe]=Be(v,j[xe]);let $=j[0],ce=r.convert(v.format,v.colorSpace),oe=r.convert(v.type),le=A(v.internalFormat,ce,oe,v.normalized,v.colorSpace),Fe=v.isVideoTexture!==!0,$e=ae.__version===void 0||ie===!0,se=Q.dataReady,Oe=M(v,$);st(s.TEXTURE_CUBE_MAP,v);let Ke;if(v.isDepthTexture){if(le=_(v.format===_i,v.type),$e)if(Fe)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,le,$.width,$.height);else for(let xe=0;xe<6;xe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,le,$.width,$.height,0,ce,oe,null)}else if(de){Fe&&$e&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,le,$.width,$.height);for(let xe=0;xe<6;xe++){Ke=j[xe].mipmaps;for(let lt=0;lt<Ke.length;lt++){let Rt=Ke[lt];v.format!==wn?ce!==null?Fe?se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,lt,0,0,Rt.width,Rt.height,ce,Rt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,lt,le,Rt.width,Rt.height,0,Rt.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,lt,0,0,Rt.width,Rt.height,ce,oe,Rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,lt,le,Rt.width,Rt.height,0,ce,oe,Rt.data)}}}else{if(Ke=v.mipmaps,Fe&&$e){Ke.length>0&&Oe++;let xe=Ge(j[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,le,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(C){Fe?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,j[xe].width,j[xe].height,ce,oe,j[xe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,le,j[xe].width,j[xe].height,0,ce,oe,j[xe].data);for(let lt=0;lt<Ke.length;lt++){let Gt=Ke[lt].image[xe].image;Fe?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,lt+1,0,0,Gt.width,Gt.height,ce,oe,Gt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,lt+1,le,Gt.width,Gt.height,0,ce,oe,Gt.data)}}else{Fe?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ce,oe,j[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,le,ce,oe,j[xe]);for(let lt=0;lt<Ke.length;lt++){let Rt=Ke[lt];Fe?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,lt+1,0,0,ce,oe,Rt.image[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,lt+1,le,ce,oe,Rt.image[xe])}}}E(v)&&v.mipmapsAutoUpdate===!0&&b(s.TEXTURE_CUBE_MAP),ae.__version=Q.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function ge(R,v,k,ie,Q,ae){let ue=r.convert(k.format,k.colorSpace),Z=r.convert(k.type),J=A(k.internalFormat,ue,Z,k.normalized,k.colorSpace),de=n.get(v),C=n.get(k);if(C.__renderTarget=v,!de.__hasExternalTextures){let j=Math.max(1,v.width>>ae),$=Math.max(1,v.height>>ae);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,ae,J,j,$,v.depth,0,ue,Z,null):t.texImage2D(Q,ae,J,j,$,0,ue,Z,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),me(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,Q,C.__webglTexture,0,pt(v)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,Q,C.__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Te(R,v,k){if(s.bindRenderbuffer(s.RENDERBUFFER,R),v.depthBuffer){let ie=v.depthTexture,Q=ie&&ie.isDepthTexture?ie.type:null,ae=_(v.stencilBuffer,Q),ue=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;me(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt(v),ae,v.width,v.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt(v),ae,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ae,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,R)}else{let ie=v.textures;for(let Q=0;Q<ie.length;Q++){let ae=ie[Q],ue=r.convert(ae.format,ae.colorSpace),Z=r.convert(ae.type),J=A(ae.internalFormat,ue,Z,ae.normalized,ae.colorSpace);me(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt(v),J,v.width,v.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt(v),J,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,J,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ne(R,v,k){let ie=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(v.depthTexture);Q.__renderTarget=v;let ae=ie?v.depthTexture.image[0]:v.depthTexture.image;(!Q.__webglTexture||ae.width!==v.width||ae.height!==v.height)&&(ae.width=v.width,ae.height=v.height,v.depthTexture.needsUpdate=!0),ie?_e(v.depthTexture,0):fe(v.depthTexture,0);let ue=Q.__webglTexture,Z=pt(v),J=ie?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,de=v.depthTexture.format===_i?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===oi)me(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,J,ue,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,de,J,ue,0);else if(v.depthTexture.format===_i)me(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,J,ue,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,de,J,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ze(R){let v=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let ie=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ie){let Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ie.removeEventListener("dispose",Q)};ie.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=ie}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let ie=0;ie<6;ie++)Ne(v.__webglFramebuffer[ie],R,ie);else R.texture.mipmaps.length>0?Ne(v.__webglFramebuffer[0],R,0):Ne(v.__webglFramebuffer,R,0);else if(k){v.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[ie]),v.__webglDepthbuffer[ie]===void 0)v.__webglDepthbuffer[ie]=s.createRenderbuffer(),Te(v.__webglDepthbuffer[ie],R,!1);else{let Q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer[ie];s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,ae)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Te(v.__webglDepthbuffer,R,!1);else{let Q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,ae)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(R,v,k){let ie=n.get(R);v!==void 0&&ge(ie.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Ze(R)}function $t(R){let v=R.texture,k=n.get(R),ie=n.get(v);R.addEventListener("dispose",U),D(R);let Q=R.textures,ae=R.isWebGLCubeRenderTarget===!0,ue=Q.length>1;if(ue||(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=v.version,a.memory.textures++),ae){k.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(v.mipmaps.length>0){k.__webglFramebuffer[Z]=[];for(let J=0;J<v.mipmaps.length;J++)k.__webglFramebuffer[Z][J]=s.createFramebuffer()}else k.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(v.mipmaps.length>0){k.__webglFramebuffer=[];for(let Z=0;Z<v.mipmaps.length;Z++)k.__webglFramebuffer[Z]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(ue)for(let Z=0,J=Q.length;Z<J;Z++){let de=n.get(Q[Z]);de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&me(R)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Z=0;Z<Q.length;Z++){let J=Q[Z];k.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[Z]);let de=r.convert(J.format,J.colorSpace),C=r.convert(J.type),j=A(J.internalFormat,de,C,J.normalized,J.colorSpace,R.isXRRenderTarget===!0),$=pt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,$,j,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,k.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Te(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),st(s.TEXTURE_CUBE_MAP,v);for(let Z=0;Z<6;Z++)if(v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)ge(k.__webglFramebuffer[Z][J],R,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else ge(k.__webglFramebuffer[Z],R,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);E(v)?b(s.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(ue){for(let Z=0,J=Q.length;Z<J;Z++){let de=Q[Z],C=n.get(de),j=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(j,C.__webglTexture),st(j,de),ge(k.__webglFramebuffer,R,de,s.COLOR_ATTACHMENT0+Z,j,0),E(de)&&b(j)}t.unbindTexture()}else{let Z=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Z,ie.__webglTexture),st(Z,v),v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)ge(k.__webglFramebuffer[J],R,v,s.COLOR_ATTACHMENT0,Z,J);else ge(k.__webglFramebuffer,R,v,s.COLOR_ATTACHMENT0,Z,0);E(v)?b(Z):v.mipmaps.length>0&&s.texParameteri(Z,s.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&Ze(R)}function F(R){let v=R.textures;for(let k=0,ie=v.length;k<ie;k++){let Q=v[k];if(E(Q)&&Q.mipmapsAutoUpdate===!0){let ae=T(R),ue=n.get(Q).__webglTexture;t.bindTexture(ae,ue),b(ae),t.unbindTexture()}}}let Kt=[];function ft(R){if(R.samples>0){if(me(R)===!1){let v=R.textures,k=R.width,ie=R.height,Q=s.COLOR_BUFFER_BIT,ae=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=n.get(R),Z=v.length>1;if(Z)for(let de=0;de<v.length;de++)t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let de=0;de<v.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);let C=n.get(v[de]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,C,0)}s.blitFramebuffer(0,0,k,ie,0,0,k,ie,Q,s.NEAREST),l===!0&&(Kt.length=0,Kt.push(s.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Kt.push(ae),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Kt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let de=0;de<v.length;de++){t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);let C=n.get(v[de]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,C,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let v=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function pt(R){return Math.min(i.maxSamples,R.samples)}function me(R){let v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function bt(R){let v=a.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function Be(R,v){let k=R.colorSpace,ie=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==sn&&k!==xi&&(nt.getTransfer(k)===dt?(ie!==wn||Q!==un)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",k)),v}function Ge(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Se,this.resetTextureUnits=Y,this.getTextureUnits=O,this.setTextureUnits=ne,this.setTexture2D=fe,this.setTexture2DArray=we,this.setTexture3D=Ee,this.setTextureCube=_e,this.rebindTextures=Nt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=me,this.dispose=W}function ox(s,e){function t(n,i=xi){let r,a=nt.getTransfer(i);if(n===un)return s.UNSIGNED_BYTE;if(n===So)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Mo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Tc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ac)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===wc)return s.BYTE;if(n===Ec)return s.SHORT;if(n===Ys)return s.UNSIGNED_SHORT;if(n===bo)return s.INT;if(n===Fn)return s.UNSIGNED_INT;if(n===_n)return s.FLOAT;if(n===On)return s.HALF_FLOAT;if(n===Rc)return s.ALPHA;if(n===Cc)return s.RGB;if(n===wn)return s.RGBA;if(n===oi)return s.DEPTH_COMPONENT;if(n===_i)return s.DEPTH_STENCIL;if(n===wo)return s.RED;if(n===Eo)return s.RED_INTEGER;if(n===Ii)return s.RG;if(n===To)return s.RG_INTEGER;if(n===Ao)return s.RGBA_INTEGER;if(n===Zr||n===Jr||n===jr||n===Qr)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ro||n===Co||n===Lo||n===Po)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ro)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Io||n===Do||n===No||n===Fo||n===Oo||n===ea||n===Uo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Io||n===Do)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===No)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Fo)return r.COMPRESSED_R11_EAC;if(n===Oo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ea)return r.COMPRESSED_RG11_EAC;if(n===Uo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bo||n===ko||n===Ho||n===zo||n===Go||n===Vo||n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===Ko||n===Zo||n===Jo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ko)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ho)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Go)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$o)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ko)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jo||n===Qo||n===el)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===jo)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tl||n===nl||n===ta||n===il)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===tl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ji?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var lx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cx=`
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

}`,rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ir(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Vn({vertexShader:lx,fragmentShader:cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new te(new Gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ah=class extends In{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new rh,p={},y=t.getContextAttributes(),E=null,b=null,T=[],A=[],_=new ye,M=null,D=null,P=new Ot;P.viewport=new mt;let N=new Ot;N.viewport=new mt;let U=[P,N],V=new go,L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let fe=T[K];return fe===void 0&&(fe=new As,T[K]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(K){let fe=T[K];return fe===void 0&&(fe=new As,T[K]=fe),fe.getGripSpace()},this.getHand=function(K){let fe=T[K];return fe===void 0&&(fe=new As,T[K]=fe),fe.getHandSpace()};function G(K){let fe=A.indexOf(K.inputSource);if(fe===-1)return;let we=T[fe];we!==void 0&&(we.update(K.inputSource,K.frame,c||a),we.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",ee);for(let K=0;K<T.length;K++){let fe=A[K];fe!==null&&(A[K]=null,T[K].disconnect(fe))}L=null,W=null,m.reset();for(let K in p)delete p[K];if(e.setRenderTarget(E),f=null,d=null,u=null,i=null,b=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),D!==null){let K=D.camera;K.fov=D.fov,K.zoom=D.zoom,K.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",X),i.addEventListener("inputsourceschange",ee),y.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ee=null,_e=null;y.depth&&(_e=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=y.stencil?_i:oi,Ee=y.stencil?Ji:Fn);let ze={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ze),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new mn(d.textureWidth,d.textureHeight,{format:wn,type:un,depthTexture:new ui(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let we={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,we),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new mn(f.framebufferWidth,f.framebufferHeight,{format:wn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Se.setContext(i),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(K){for(let fe=0;fe<K.removed.length;fe++){let we=K.removed[fe],Ee=A.indexOf(we);Ee>=0&&(A[Ee]=null,T[Ee].disconnect(we))}for(let fe=0;fe<K.added.length;fe++){let we=K.added[fe],Ee=A.indexOf(we);if(Ee===-1){for(let ze=0;ze<T.length;ze++)if(ze>=A.length){A.push(we),Ee=ze;break}else if(A[ze]===null){A[ze]=we,Ee=ze;break}if(Ee===-1)break}let _e=T[Ee];_e&&_e.connect(we)}}function q(K,fe){fe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(fe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let fe=K.near,we=K.far;m.texture!==null&&(m.depthNear>0&&(fe=m.depthNear),m.depthFar>0&&(we=m.depthFar)),V.near=N.near=P.near=fe,V.far=N.far=P.far=we,(L!==V.near||W!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),L=V.near,W=V.far),V.layers.mask=K.layers.mask|6,P.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;let Ee=K.parent,_e=V.cameras;q(V,Ee);for(let ze=0;ze<_e.length;ze++)q(_e[ze],Ee);V.projectionMatrix.copy(P.projectionMatrix),V.projectionMatrixInverse.copy(P.projectionMatrixInverse),D===null&&K.isPerspectiveCamera&&(D={camera:K,fov:K.fov,zoom:K.zoom}),Y(K,V,Ee)};function Y(K,fe,we){we===null?K.matrix.copy(fe.matrixWorld):(K.matrix.copy(we.matrixWorld),K.matrix.invert(),K.matrix.multiply(fe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Vi*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(K){return p[K]};let O=null;function ne(K,fe){if(h=fe.getViewerPose(c||a),g=fe,h!==null){let we=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Ee=!1;we.length!==V.cameras.length&&(V.cameras.length=0,Ee=!0);for(let He=0;He<we.length;He++){let st=we[He],ht=null;if(f!==null)ht=f.getViewport(st);else{let rt=u.getViewSubImage(d,st);ht=rt.viewport,He===0&&(e.setRenderTargetTextures(b,rt.colorTexture,rt.depthStencilTexture),e.setRenderTarget(b))}let Je=U[He];Je===void 0&&(Je=new Ot,Je.layers.enable(He),Je.viewport=new mt,U[He]=Je),Je.matrix.fromArray(st.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(st.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(ht.x,ht.y,ht.width,ht.height),He===0&&(V.matrix.copy(Je.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ee===!0&&V.cameras.push(Je)}let _e=i.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let He=u.getDepthInformation(we[0]);He&&He.isValid&&He.texture&&m.init(He,i.renderState)}if(_e&&_e.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let He=0;He<we.length;He++){let st=we[He].camera;if(st){let ht=p[st];ht||(ht=new Ir,p[st]=ht);let Je=u.getCameraImage(st);ht.sourceTexture=Je}}}}for(let we=0;we<T.length;we++){let Ee=A[we],_e=T[we];Ee!==null&&_e!==void 0&&_e.update(Ee,fe,c||a)}O&&O(K,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),g=null}let Se=new kd;Se.setAnimationLoop(ne),this.setAnimationLoop=function(K){O=K},this.dispose=function(){}}},hx=new We,Kd=new Ye;Kd.set(-1,0,0,0,1,0,0,0,1);function ux(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,E,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),E=y.envMap,b=y.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(hx.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Kd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dx(s,e,t,n){let i={},r={};function a(y,E){let b=E.program;n.uniformBlockBinding(y,b,i[y.id])}function o(y,E){let b=i[y.id];b===void 0&&(g(y),b=l(y),i[y.id]=b,y.addEventListener("dispose",m));let T=E.program;n.updateUBOMapping(y,T);let A=e.render.frame;r[y.id]!==A&&(c(y),r[y.id]=A)}function l(y){let E=s.createBuffer(),b=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,b,T),s.bindBuffer(s.UNIFORM_BUFFER,null),E}function c(y){let E=i[y.id],b=y.uniforms,T=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let A=0,_=b.length;A<_;A++){let M=b[A];if(Array.isArray(M))for(let D=0,P=M.length;D<P;D++)h(M[D],A,D,T);else h(M,A,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,E,b,T){if(d(y,E,b,T)===!0){let A=y.__offset,_=y.value;if(Array.isArray(_)){let M=0;for(let D=0;D<_.length;D++){let P=_[D],N=x(P,!0);u(P,y.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,A,y.__data)}}function u(y,E,b){typeof y=="number"||typeof y=="boolean"?E[b]=y:y.isMatrix3?(E[b]=y.elements[0],E[b+1]=y.elements[1],E[b+2]=y.elements[2],E[b+3]=0,E[b+4]=y.elements[3],E[b+5]=y.elements[4],E[b+6]=y.elements[5],E[b+7]=0,E[b+8]=y.elements[6],E[b+9]=y.elements[7],E[b+10]=y.elements[8],E[b+11]=0):ArrayBuffer.isView(y)?E.set(y.subarray(0,E.length-b),b):y.toArray(E,b)}function d(y,E,b,T){let A=y.value,_=E+"_"+b;if(Array.isArray(A)){T[_]===void 0&&(T[_]=[]);let M=T[_],D=!1;for(let P=0;P<A.length;P++)f(A[P],M,P)===!0&&(D=!0);return D}return f(A,T,_)}function f(y,E,b){if(E[b]===void 0)return typeof y=="number"||typeof y=="boolean"?E[b]=y:ArrayBuffer.isView(y)?E[b]=y.slice():E[b]=y.clone(),!0;{let T=E[b];if(typeof y=="number"||typeof y=="boolean"){if(T!==y)return E[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(T.equals(y)===!1)return T.copy(y),!0}}return!1}function g(y){let E=y.uniforms,b=0,T=16;for(let _=0,M=E.length;_<M;_++){let D=Array.isArray(E[_])?E[_]:[E[_]];for(let P=0,N=D.length;P<N;P++){let U=D[P],V=Array.isArray(U.value)?U.value:[U.value],L=Array.isArray(E[_])||Array.isArray(U.value),W=b;for(let X=0,ee=V.length;X<ee;X++){let q=V[X],Y=x(q,L),O=b%T,ne=O%Y.boundary,Se=O+ne;b+=ne,Se!==0&&T-Se<Y.storage&&(b+=T-Se),X===0&&(W=b),b+=Y.storage}let G=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new G((b-W)/Float32Array.BYTES_PER_ELEMENT),U.__offset=W}}let A=b%T;return A>0&&(b+=T-A),y.__size=b,y.__cache={},this}function x(y,E){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=16,b.storage=48):y.isMatrix4?(b.boundary=16,b.storage=64):y.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):De("WebGLRenderer: Unsupported uniform value type.",y),E===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(y){let E=y.target;E.removeEventListener("dispose",m),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function p(){for(let y in i)s.deleteBuffer(i[y]);i={},r={}}return{bind:a,update:o,dispose:p}}var fx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Kn=null;function px(){return Kn===null&&(Kn=new Is(fx,16,16,Ii,On),Kn.name="DFG_LUT",Kn.minFilter=Ut,Kn.magFilter=Ut,Kn.wrapS=yn,Kn.wrapT=yn,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}var ll=class{constructor(e={}){let{canvas:t=hd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=un}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=f,m=new Set([Ao,To,Eo]),p=new Set([un,Fn,Ys,Ji,So,Mo]),y=new Uint32Array(4),E=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},T=null,A=null,_=[],M=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,N=!1,U=null,V=null,L=null,W=null;this._outputColorSpace=Ft;let G=0,X=0,ee=null,q=-1,Y=null,O=new mt,ne=new mt,Se=null,K=new Ae(0),fe=0,we=t.width,Ee=t.height,_e=1,ze=null,vt=null,He=new mt(0,0,we,Ee),st=new mt(0,0,we,Ee),ht=!1,Je=new Ti,rt=new Ka,Le=!1,Pe=!1,ge=new We,Te=new w,Ne=new mt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Nt=!1;function $t(){return ee===null?_e:1}let F=n;function Kt(S,I){return t.getContext(S,I)}let ft,pt,me,bt,Be,Ge,R,v,k,ie,Q,ae,ue,Z,J,de,C,j,$,ce,oe,le,Fe;try{let S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",xe,!1),F===null){let I="webgl2";if(F=Kt(I,S),F===null)throw Kt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(S){throw t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Ve("WebGLRenderer: "+S.message),S}function $e(){ft=new E0(F),ft.init(),oe=new ox(F,ft),pt=new p0(F,ft,e,oe),me=new rx(F,ft),pt.reversedDepthBuffer&&d&&me.buffers.depth.setReversed(!0),V=F.createFramebuffer(),L=F.createFramebuffer(),W=F.createFramebuffer(),bt=new R0(F),Be=new X_,Ge=new ax(F,ft,me,Be,pt,oe,bt),R=new w0(P),v=new Lp(F),le=new d0(F,v),k=new T0(F,v,bt,le),ie=new L0(F,k,v,le,bt),j=new C0(F,pt,Ge),J=new m0(Be),Q=new W_(P,R,ft,pt,le,J),ae=new ux(P,Be),ue=new Y_,Z=new Q_(ft),C=new u0(P,R,me,ie,g,l),de=new sx(P,ie,pt),Fe=new dx(F,bt,pt,me),$=new f0(F,ft,bt),ce=new A0(F,ft,bt),bt.programs=Q.programs,P.capabilities=pt,P.extensions=ft,P.properties=Be,P.renderLists=ue,P.shadowMap=de,P.state=me,P.info=bt}x!==un&&(D=new I0(x,t.width,t.height,o,i,r));let se=new ah(P,F);this.xr=se,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let S=ft.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ft.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(S){S!==void 0&&(_e=S,this.setSize(we,Ee,!1))},this.getSize=function(S){return S.set(we,Ee)},this.setSize=function(S,I,z=!0){if(se.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}we=S,Ee=I,t.width=Math.floor(S*_e),t.height=Math.floor(I*_e),z===!0&&(t.style.width=S+"px",t.style.height=I+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(we*_e,Ee*_e).floor()},this.setDrawingBufferSize=function(S,I,z){we=S,Ee=I,_e=z,t.width=Math.floor(S*z),t.height=Math.floor(I*z),this.setViewport(0,0,S,I)},this.setEffects=function(S){if(x===un){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let I=0;I<S.length;I++)if(S[I].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(O)},this.getViewport=function(S){return S.copy(He)},this.setViewport=function(S,I,z,B){S.isVector4?He.set(S.x,S.y,S.z,S.w):He.set(S,I,z,B),me.viewport(O.copy(He).multiplyScalar($t()).round())},this.getScissor=function(S){return S.copy(st)},this.setScissor=function(S,I,z,B){S.isVector4?st.set(S.x,S.y,S.z,S.w):st.set(S,I,z,B),me.scissor(ne.copy(st).multiplyScalar($t()).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(S){me.setScissorTest(ht=S)},this.setOpaqueSort=function(S){ze=S},this.setTransparentSort=function(S){vt=S},this.getClearColor=function(S){return S.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(S=!0,I=!0,z=!0){let B=0;if(S){let H=!1;if(ee!==null){let pe=ee.texture.format;H=m.has(pe)}if(H){let pe=ee.texture.type,Re=p.has(pe),he=C.getClearColor(),be=C.getClearAlpha(),Ie=he.r,Xe=he.g,Qe=he.b;Re?(y[0]=Ie,y[1]=Xe,y[2]=Qe,y[3]=be,F.clearBufferuiv(F.COLOR,0,y)):(E[0]=Ie,E[1]=Xe,E[2]=Qe,E[3]=be,F.clearBufferiv(F.COLOR,0,E))}else B|=F.COLOR_BUFFER_BIT}I&&(B|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),U=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),C.dispose(),ue.dispose(),Z.dispose(),Ge.dispose(),Be.dispose(),R.dispose(),ie.dispose(),k.dispose(),le.dispose(),Fe.dispose(),Q.dispose(),se.dispose(),se.removeEventListener("sessionstart",ts),se.removeEventListener("sessionend",ns),Tn.stop()};function Oe(S){S.preventDefault(),br("WebGLRenderer: Context Lost."),N=!0}function Ke(){br("WebGLRenderer: Context Restored."),N=!1;let S=bt.autoReset,I=de.enabled,z=de.autoUpdate,B=de.needsUpdate,H=de.type;$e(),bt.autoReset=S,de.enabled=I,de.autoUpdate=z,de.needsUpdate=B,de.type=H}function xe(S){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function lt(S){let I=S.target;I.removeEventListener("dispose",lt),Rt(I)}function Rt(S){Gt(S),Be.remove(S)}function Gt(S){let I=Be.get(S).programs;I!==void 0&&(I.forEach(function(z){Q.releaseProgram(z)}),S.isShaderMaterial&&Q.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,z,B,H,pe){I===null&&(I=Ze);let Re=H.isMesh&&H.matrixWorld.determinantAffine()<0,he=ca(S,I,z,B,H);me.setMaterial(B,Re);let be=z.index,Ie=1;if(B.wireframe===!0){if(be=k.getWireframeAttribute(z),be===void 0)return;Ie=2}let Xe=z.drawRange,Qe=z.attributes.position,Ce=Xe.start*Ie,tt=(Xe.start+Xe.count)*Ie;pe!==null&&(Ce=Math.max(Ce,pe.start*Ie),tt=Math.min(tt,(pe.start+pe.count)*Ie)),be!==null?(Ce=Math.max(Ce,0),tt=Math.min(tt,be.count)):Qe!=null&&(Ce=Math.max(Ce,0),tt=Math.min(tt,Qe.count));let Tt=tt-Ce;if(Tt<0||Tt===1/0)return;le.setup(H,B,he,z,be);let gt,ct=$;if(be!==null&&(gt=v.get(be),ct=ce,ct.setIndex(gt)),H.isMesh)B.wireframe===!0?(me.setLineWidth(B.wireframeLinewidth*$t()),ct.setMode(F.LINES)):ct.setMode(F.TRIANGLES);else if(H.isLine){let Vt=B.linewidth;Vt===void 0&&(Vt=1),me.setLineWidth(Vt*$t()),H.isLineSegments?ct.setMode(F.LINES):H.isLineLoop?ct.setMode(F.LINE_LOOP):ct.setMode(F.LINE_STRIP)}else H.isPoints?ct.setMode(F.POINTS):H.isSprite&&ct.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))ct.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Vt=H._multiDrawStarts,re=H._multiDrawCounts,qe=H._multiDrawCount,ke=be?v.get(be).bytesPerElement:1,on=Be.get(B).currentProgram.getUniforms();for(let Wt=0;Wt<qe;Wt++)on.setValue(F,"_gl_DrawID",Wt),ct.render(Vt[Wt]/ke,re[Wt])}else if(H.isInstancedMesh)ct.renderInstances(Ce,Tt,H.count);else if(z.isInstancedBufferGeometry){let Vt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,re=Math.min(z.instanceCount,Vt);ct.renderInstances(Ce,Tt,re)}else ct.render(Ce,Tt)};function es(S,I,z,B){U!==null&&S.isNodeMaterial&&U.setObject(B,S),Le===!0&&J.setState(S,z,!1),S.transparent===!0&&S.side===Dt&&S.forceSinglePass===!1?(S.side=rn,S.needsUpdate=!0,Fi(S,I,B),S.side=qn,S.needsUpdate=!0,Fi(S,I,B),S.side=Dt):Fi(S,I,B)}this.compile=function(S,I,z=null){z===null&&(z=S),U!==null&&U.renderStart(S,I,z),A=Z.get(z),A.init(I),M.push(A),z.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(A.pushLight(H),H.castShadow&&A.pushShadow(H))}),S!==z&&S.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(A.pushLight(H),H.castShadow&&A.pushShadow(H))}),A.setupLights(),U!==null&&U.updateLights(A.state.lightsArray),Pe=this.localClippingEnabled,Le=J.init(this.clippingPlanes,Pe),Le===!0&&J.setGlobalState(this.clippingPlanes,I),U!==null&&de.render(A.state.shadowsArray,z,I);let B=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let pe=H.material;if(pe)if(Array.isArray(pe))for(let Re=0;Re<pe.length;Re++){let he=pe[Re];es(he,z,I,H),B.add(he)}else es(pe,z,I,H),B.add(pe)}),A=M.pop(),U!==null&&U.renderEnd(),B},this.compileAsync=function(S,I,z=null){let B=this.compile(S,I,z);return new Promise(H=>{function pe(){if(B.forEach(function(Re){let be=Be.get(Re).currentProgram;(be===void 0||be.isReady())&&B.delete(Re)}),B.size===0){H(S);return}setTimeout(pe,10)}ft.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let er=null;function tr(S){er&&er(S)}function ts(){Tn.stop()}function ns(){Tn.start()}let Tn=new kd;Tn.setAnimationLoop(tr),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(S){er=S,se.setAnimationLoop(S),S===null?Tn.stop():Tn.start()},se.addEventListener("sessionstart",ts),se.addEventListener("sessionend",ns),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(S,I);let z=se.enabled===!0&&se.isPresenting===!0,B=D!==null&&(ee===null||z)&&D.begin(P,ee);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(I),I=se.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,I,ee),A=Z.get(S,M.length),A.init(I),A.state.textureUnits=Ge.getTextureUnits(),M.push(A),ge.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?rt.setFromArrayCamera(I):Je.setFromProjectionMatrix(ge,vn,I.reversedDepth),Pe=this.localClippingEnabled,Le=J.init(this.clippingPlanes,Pe),T=ue.get(S,_.length),T.init(),_.push(T),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){let Re=P.xr.getDepthSensingMesh();Re!==null&&is(Re,I,-1/0,P.sortObjects)}is(S,I,0,P.sortObjects),T.finish(),U!==null&&U.updateLights(A.state.lightsArray),P.sortObjects===!0&&T.sort(ze,vt),Nt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Nt&&C.addToRenderList(T,S),this.info.autoReset===!0&&this.info.reset(),Le===!0&&J.beginShadows();let H=A.state.shadowsArray;if(de.render(H,S,I),Le===!0&&J.endShadows(),(B&&D.hasRenderPass())===!1){let Re=T.opaque,he=T.transmissive;if(A.setupLights(),I.isArrayCamera){let be=I.cameras;if(he.length>0)for(let Ie=0,Xe=be.length;Ie<Xe;Ie++){let Qe=be[Ie];ir(Re,he,S,Qe)}Nt&&C.render(S);for(let Ie=0,Xe=be.length;Ie<Xe;Ie++){let Qe=be[Ie];nr(T,S,Qe,Qe.viewport)}}else he.length>0&&ir(Re,he,S,I),Nt&&C.render(S),nr(T,S,I)}ee!==null&&X===0&&(Ge.updateMultisampleRenderTarget(ee),Ge.updateRenderTargetMipmap(ee)),B&&D.end(P),S.isScene===!0&&S.onAfterRender(P,S,I),le.resetDefaultState(),q=-1,Y=null,M.pop(),M.length>0?(A=M[M.length-1],Ge.setTextureUnits(A.state.textureUnits),Le===!0&&J.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,U!==null&&U.renderEnd()};function is(S,I,z,B){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){let Re=I.isArrayCamera?rt:Je;if(!S.frustumCulled||S.intersectsFrustum(Re)){B&&Ne.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ge);let he=ie.update(S),be=S.material;be.visible&&T.push(S,he,be,z,Ne.z,null,I)}}else if(S.isMesh||S.isLine||S.isPoints){let Re=I.isArrayCamera?rt:Je;if(!S.frustumCulled||S.intersectsFrustum(Re)){let he=ie.update(S),be=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ne.copy(S.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ne.copy(he.boundingSphere.center)),Ne.applyMatrix4(S.matrixWorld).applyMatrix4(ge)),Array.isArray(be)){let Ie=he.groups;for(let Xe=0,Qe=Ie.length;Xe<Qe;Xe++){let Ce=Ie[Xe],tt=be[Ce.materialIndex];tt&&tt.visible&&T.push(S,he,tt,z,Ne.z,Ce,I)}}else be.visible&&T.push(S,he,be,z,Ne.z,null,I)}}}let pe=S.children;for(let Re=0,he=pe.length;Re<he;Re++)is(pe[Re],I,z,B)}function nr(S,I,z,B){let{opaque:H,transmissive:pe,transparent:Re}=S;A.setupLightsView(z),Le===!0&&J.setGlobalState(P.clippingPlanes,z),B&&me.viewport(O.copy(B)),H.length>0&&Lt(H,I,z),pe.length>0&&Lt(pe,I,z),Re.length>0&&Lt(Re,I,z),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function ir(S,I,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[B.id]===void 0){let Ce=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[B.id]=new mn(1,1,{generateMipmaps:!0,type:Ce?On:un,minFilter:Mn,samples:Math.max(4,pt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let pe=A.state.transmissionRenderTarget[B.id],Re=B.viewport||O;pe.setSize(Re.z*P.transmissionResolutionScale,Re.w*P.transmissionResolutionScale);let he=P.getRenderTarget(),be=P.getActiveCubeFace(),Ie=P.getActiveMipmapLevel();P.setRenderTarget(pe),P.getClearColor(K),fe=P.getClearAlpha(),fe<1&&P.setClearColor(16777215,.5),P.clear(),Nt&&C.render(z);let Xe=P.toneMapping;P.toneMapping=Yn;let Qe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),A.setupLightsView(B),Le===!0&&J.setGlobalState(P.clippingPlanes,B),Lt(S,z,B),Ge.updateMultisampleRenderTarget(pe),Ge.updateRenderTargetMipmap(pe),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let tt=0,Tt=I.length;tt<Tt;tt++){let gt=I[tt],{object:ct,geometry:Vt,material:re,group:qe}=gt;if(re.side===Dt&&ct.layers.test(B.layers)){let ke=re.side;re.side=rn,re.needsUpdate=!0,an(ct,z,B,Vt,re,qe),re.side=ke,re.needsUpdate=!0,Ce=!0}}Ce===!0&&(Ge.updateMultisampleRenderTarget(pe),Ge.updateRenderTargetMipmap(pe))}P.setRenderTarget(he,be,Ie),P.setClearColor(K,fe),Qe!==void 0&&(B.viewport=Qe),P.toneMapping=Xe}function Lt(S,I,z){let B=I.isScene===!0?I.overrideMaterial:null;for(let H=0,pe=S.length;H<pe;H++){let Re=S[H],{object:he,geometry:be,group:Ie}=Re,Xe=Re.material;Xe.allowOverride===!0&&B!==null&&(Xe=B),he.layers.test(z.layers)&&an(he,I,z,be,Xe,Ie)}}function an(S,I,z,B,H,pe){U!==null&&H.isNodeMaterial&&U.setObject(S,H),S.onBeforeRender(P,I,z,B,H,pe),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(P,I,z,B,S,pe),H.transparent===!0&&H.side===Dt&&H.forceSinglePass===!1?(H.side=rn,H.needsUpdate=!0,P.renderBufferDirect(z,I,B,H,S,pe),H.side=qn,H.needsUpdate=!0,P.renderBufferDirect(z,I,B,H,S,pe),H.side=Dt):P.renderBufferDirect(z,I,B,H,S,pe),S.onAfterRender(P,I,z,B,H,pe)}function la(S){let I=0;for(let z of S)z.texture!==null&&I++;return I}function Fi(S,I,z){I.isScene!==!0&&(I=Ze);let B=Be.get(S),H=A.state.lights,pe=A.state.shadowsArray,Re=H.state.version,he=Q.getParameters(S,H.state,pe,I,z,A.state.lightProbeGridArray),be=Q.getProgramCacheKey(he),Ie=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?I.environment:null,B.fog=I.fog;let Xe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=R.get(S.envMap||B.environment,Xe),B.envMapRotation=B.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Ie===void 0&&(S.addEventListener("dispose",lt),Ie=new Map,B.programs=Ie,B.programVariants=new Map);let Qe=Ie.get(be);if(Qe!==void 0){if(B.currentProgram===Qe&&B.lightsStateVersion===Re)return rr(S,he),Qe}else he.uniforms=Q.getUniforms(S),U!==null&&S.isNodeMaterial&&U.build(S,z,he),S.onBeforeCompile(he,P),Qe=Q.acquireProgram(he,be),Ie.set(be,Qe),B.uniforms=he.uniforms;let Ce=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=J.uniform),rr(S,he),B.needsLights=ua(S),B.lightsStateVersion=Re,B.needsLights&&(Ce.ambientLightColor.value=H.state.ambient,Ce.lightProbe.value=H.state.probe,Ce.sunLights.value=H.state.sun,Ce.sunLightShadows.value=H.state.sunShadow,Ce.directionalLights.value=H.state.directional,Ce.directionalLightShadows.value=H.state.directionalShadow,Ce.spotLights.value=H.state.spot,Ce.spotLightShadows.value=H.state.spotShadow,Ce.rectAreaLights.value=H.state.rectArea,Ce.ltc_1.value=H.state.rectAreaLTC1,Ce.ltc_2.value=H.state.rectAreaLTC2,Ce.pointLights.value=H.state.point,Ce.pointLightShadows.value=H.state.pointShadow,Ce.hemisphereLights.value=H.state.hemi,Ce.sunShadowMatrix.value=H.state.sunShadowMatrix,Ce.sunShadowCascade.value=H.state.sunShadowCascade,Ce.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ce.spotLightMatrix.value=H.state.spotLightMatrix,Ce.spotLightMap.value=H.state.spotLightMap,Ce.pointShadowMatrix.value=H.state.pointShadowMatrix),B.numLightProbeGrids=la(A.state.lightProbeGridArray),B.currentProgram=Qe,B.uniformsList=null,Qe}function wl(S,I,z,B,H){let pe=Be.get(S),Re=pe.currentProgram.id+","+B+","+H,he=pe.programVariants.get(Re);return he===void 0?(he=Fi(S,I,z),pe.programVariants.set(Re,he)):(pe.currentProgram=he,pe.uniformsList=null,pe.outputColorSpace=B,pe.toneMapping=H),he}function sr(S){if(S.uniformsList===null){let I=S.currentProgram.getUniforms();S.uniformsList=Ks.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function rr(S,I){let z=Be.get(S);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function ca(S,I,z,B,H){I.isScene!==!0&&(I=Ze),Ge.resetTextureUnits();let pe=I.fog,Re=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?I.environment:null,he=ee===null?P.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:nt.workingColorSpace,be=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ie=R.get(B.envMap||Re,be),Xe=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Qe=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ce=!!z.morphAttributes.position,tt=!!z.morphAttributes.normal,Tt=!!z.morphAttributes.color,gt=Yn;B.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(gt=P.toneMapping);let ct=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Vt=ct!==void 0?ct.length:0,re=Be.get(B),qe=A.state.lights;if(Le===!0&&(Pe===!0||S!==Y)){let Mt=S===Y&&B.id===q;J.setState(B,S,Mt)}let ke=!1,on=!1;B.version===re.__version?re.needsLights&&re.lightsStateVersion!==qe.state.version||H.isBatchedMesh&&re.batching===!1||!H.isBatchedMesh&&re.batching===!0||H.isBatchedMesh&&re.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&re.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&re.instancing===!1||!H.isInstancedMesh&&re.instancing===!0||H.isSkinnedMesh&&re.skinning===!1||!H.isSkinnedMesh&&re.skinning===!0||H.isInstancedMesh&&re.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&re.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&re.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&re.instancingMorph===!1&&H.morphTexture!==null||re.envMap!==Ie||B.fog===!0&&re.fog!==pe||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==J.numPlanes||re.numIntersection!==J.numIntersection)||re.vertexAlphas!==Xe||re.vertexTangents!==Qe||re.morphTargets!==Ce||re.morphNormals!==tt||re.morphColors!==Tt||re.morphTargetsCount!==Vt||re.numLightProbeGrids!==la(A.state.lightProbeGridArray)?ke=!0:(re.outputColorSpace!==he||re.toneMapping!==gt)&&(on=!0):(ke=!0,re.__version=B.version);let Wt=re.currentProgram;(ke===!0||on===!0)&&(Wt=on===!0?wl(B,I,H,he,gt):Fi(B,I,H),U&&B.isNodeMaterial&&U.onUpdateProgram(B,Wt,re));let ss=!1,Un=!1,Bn=!1,at=Wt.getUniforms(),Zt=re.uniforms;if(me.useProgram(Wt.program)&&(ss=!0,Un=!0,Bn=!0),B.id!==q&&(q=B.id,Un=!0),ss||Y!==S){me.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),at.setValue(F,"projectionMatrix",S.projectionMatrix),at.setValue(F,"viewMatrix",S.matrixWorldInverse);let Xt=at.map.cameraPosition;Xt!==void 0&&Xt.setValue(F,Te.setFromMatrixPosition(S.matrixWorld)),pt.logarithmicDepthBuffer&&at.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&at.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),Y!==S&&(Y=S,Un=!0,Bn=!0)}if(re.needsLights&&(qe.state.sunShadowMap.length>0&&at.setValue(F,"sunShadowMap",qe.state.sunShadowMap,Ge),qe.state.directionalShadowMap.length>0&&at.setValue(F,"directionalShadowMap",qe.state.directionalShadowMap,Ge),qe.state.spotShadowMap.length>0&&at.setValue(F,"spotShadowMap",qe.state.spotShadowMap,Ge),qe.state.pointShadowMap.length>0&&at.setValue(F,"pointShadowMap",qe.state.pointShadowMap,Ge)),H.isSkinnedMesh){at.setOptional(F,H,"bindMatrix"),at.setOptional(F,H,"bindMatrixInverse");let Mt=H.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),at.setValue(F,"boneTexture",Mt.boneTexture,Ge))}H.isBatchedMesh&&(at.setOptional(F,H,"batchingTexture"),at.setValue(F,"batchingTexture",H._matricesTexture,Ge),at.setOptional(F,H,"batchingIdTexture"),at.setValue(F,"batchingIdTexture",H._indirectTexture,Ge),at.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&at.setValue(F,"batchingColorTexture",H._colorsTexture,Ge));let An=z.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&j.update(H,z,Wt),(Un||re.receiveShadow!==H.receiveShadow)&&(re.receiveShadow=H.receiveShadow,at.setValue(F,"receiveShadow",H.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&I.environment!==null&&(Zt.envMapIntensity.value=I.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=px()),Un){if(at.setValue(F,"toneMappingExposure",P.toneMappingExposure),re.needsLights&&ha(Zt,Bn),pe&&B.fog===!0&&ae.refreshFogUniforms(Zt,pe),ae.refreshMaterialUniforms(Zt,B,_e,Ee,A.state.transmissionRenderTarget[S.id]),re.needsLights&&re.numLightProbeGrids>0){let Mt=b,Xt=0;for(let Qn of A.state.lightProbeGridArray)Qn.texture!==null&&(Mt.textures[Xt]=Qn.texture,Mt.min[Xt]=Qn.boundingBox.min,Mt.max[Xt]=Qn.boundingBox.max,Mt.resolution[Xt]=Qn.resolution,Xt++);for(let Qn in Mt)Mt[Qn].length=Xt;Zt.probesSH.value=Mt.textures,Zt.probesMin.value=Mt.min,Zt.probesMax.value=Mt.max,Zt.probesResolution.value=Mt.resolution}Ks.upload(F,sr(re),Zt,Ge)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ks.upload(F,sr(re),Zt,Ge),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&at.setValue(F,"center",H.center),at.setValue(F,"modelViewMatrix",H.modelViewMatrix),at.setValue(F,"normalMatrix",H.normalMatrix),at.setValue(F,"modelMatrix",H.matrixWorld),B.uniformsGroups!==void 0){let Mt=B.uniformsGroups;for(let Xt=0,Qn=Mt.length;Xt<Qn;Xt++){let Hh=Mt[Xt];Fe.update(Hh,Wt),Fe.bind(Hh,Wt)}}return Wt}function ha(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.sunLights.needsUpdate=I,S.sunLightShadows.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function ua(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(S,I,z){let B=Be.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Be.get(S.texture).__webglTexture=I,Be.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:z,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,I){let z=Be.get(S);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,z=0){ee=S,G=I,X=z;let B=null,H=!1,pe=!1;if(S){let he=Be.get(S);if(he.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(F.FRAMEBUFFER,he.__webglFramebuffer),O.copy(S.viewport),ne.copy(S.scissor),Se=S.scissorTest,me.viewport(O),me.scissor(ne),me.setScissorTest(Se),q=-1;return}else if(he.__webglFramebuffer===void 0)Ge.setupRenderTarget(S);else if(he.__hasExternalTextures)Ge.rebindTextures(S,Be.get(S.texture).__webglTexture,Be.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Xe=S.depthTexture;if(he.__boundDepthTexture!==Xe){if(Xe!==null&&Be.has(Xe)&&(S.width!==Xe.image.width||S.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(S)}}let be=S.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(pe=!0);let Ie=Be.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ie[I])?B=Ie[I][z]:B=Ie[I],H=!0):S.samples>0&&Ge.useMultisampledRTT(S)===!1?B=Be.get(S).__webglMultisampledFramebuffer:Array.isArray(Ie)?B=Ie[z]:B=Ie,O.copy(S.viewport),ne.copy(S.scissor),Se=S.scissorTest}else O.copy(He).multiplyScalar(_e).floor(),ne.copy(st).multiplyScalar(_e).floor(),Se=ht;if(z!==0&&(B=V),me.bindFramebuffer(F.FRAMEBUFFER,B)&&me.drawBuffers(S,B),me.viewport(O),me.scissor(ne),me.setScissorTest(Se),H){let he=Be.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,he.__webglTexture,z)}else if(pe){let he=I;for(let be=0;be<S.textures.length;be++){let Ie=Be.get(S.textures[be]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+be,Ie.__webglTexture,z,he)}}else if(S!==null&&z!==0){let he=Be.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,he.__webglTexture,z)}q=-1};function ar(S){let I=Be.get(S);return(I.__readFormat!==S.format||I.__readType!==S.type)&&(I.__readFormat=S.format,I.__readType=S.type,I.__formatReadable=pt.textureFormatReadable(S.format),I.__typeReadable=pt.textureTypeReadable(S.type)),I}this.readRenderTargetPixels=function(S,I,z,B,H,pe,Re,he=0){if(!(S&&S.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Be.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Re!==void 0&&(be=be[Re],Array.isArray(be)&&(be=be[0])),be){me.bindFramebuffer(F.FRAMEBUFFER,be);try{let Ie=S.textures[he],Xe=Ie.format,Qe=Ie.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+he);let Ce=ar(Ie);if(Ce.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-B&&z>=0&&z<=S.height-H&&F.readPixels(I,z,B,H,oe.convert(Xe),oe.convert(Qe),pe)}finally{let Ie=ee!==null?Be.get(ee).__webglFramebuffer:null;me.bindFramebuffer(F.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(S,I,z,B,H,pe,Re,he=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Be.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Re!==void 0&&(be=be[Re],Array.isArray(be)&&(be=be[0])),be)if(I>=0&&I<=S.width-B&&z>=0&&z<=S.height-H){me.bindFramebuffer(F.FRAMEBUFFER,be);let Ie=S.textures[he],Xe=Ie.format,Qe=Ie.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+he);let Ce=ar(Ie);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,tt),F.bufferData(F.PIXEL_PACK_BUFFER,pe.byteLength,F.STREAM_READ),F.readPixels(I,z,B,H,oe.convert(Xe),oe.convert(Qe),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Tt=ee!==null?Be.get(ee).__webglFramebuffer:null;me.bindFramebuffer(F.FRAMEBUFFER,Tt);let gt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await dd(F,gt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,tt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,pe),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(tt),F.deleteSync(gt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,I=null,z=0){let B=Math.pow(2,-z),H=Math.floor(S.image.width*B),pe=Math.floor(S.image.height*B),Re=I!==null?I.x:0,he=I!==null?I.y:0;Ge.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,Re,he,H,pe),me.unbindTexture()},this.copyTextureToTexture=function(S,I,z=null,B=null,H=0,pe=0){let Re,he,be,Ie,Xe,Qe,Ce,tt,Tt,gt=S.isCompressedTexture?S.mipmaps[pe]:S.image;if(z!==null)Re=z.max.x-z.min.x,he=z.max.y-z.min.y,be=z.isBox3?z.max.z-z.min.z:1,Ie=z.min.x,Xe=z.min.y,Qe=z.isBox3?z.min.z:0;else{let at=Math.pow(2,-H);Re=Math.floor(gt.width*at),he=Math.floor(gt.height*at),S.isDataArrayTexture?be=gt.depth:S.isData3DTexture?be=Math.floor(gt.depth*at):be=1,Ie=0,Xe=0,Qe=0}B!==null?(Ce=B.x,tt=B.y,Tt=B.z):(Ce=0,tt=0,Tt=0);let ct=oe.convert(I.format),Vt=oe.convert(I.type),re;I.isData3DTexture?(Ge.setTexture3D(I,0),re=F.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ge.setTexture2DArray(I,0),re=F.TEXTURE_2D_ARRAY):(Ge.setTexture2D(I,0),re=F.TEXTURE_2D),me.activeTexture(F.TEXTURE0),me.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),me.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),me.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);let qe=me.getParameter(F.UNPACK_ROW_LENGTH),ke=me.getParameter(F.UNPACK_IMAGE_HEIGHT),on=me.getParameter(F.UNPACK_SKIP_PIXELS),Wt=me.getParameter(F.UNPACK_SKIP_ROWS),ss=me.getParameter(F.UNPACK_SKIP_IMAGES);me.pixelStorei(F.UNPACK_ROW_LENGTH,gt.width),me.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt.height),me.pixelStorei(F.UNPACK_SKIP_PIXELS,Ie),me.pixelStorei(F.UNPACK_SKIP_ROWS,Xe),me.pixelStorei(F.UNPACK_SKIP_IMAGES,Qe);let Un=S.isDataArrayTexture||S.isData3DTexture,Bn=I.isDataArrayTexture||I.isData3DTexture;if(S.isDepthTexture){let at=Be.get(S),Zt=Be.get(I),An=Be.get(at.__renderTarget),Mt=Be.get(Zt.__renderTarget);me.bindFramebuffer(F.READ_FRAMEBUFFER,An.__webglFramebuffer),me.bindFramebuffer(F.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Xt=0;Xt<be;Xt++)Un&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.get(S).__webglTexture,H,Qe+Xt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.get(I).__webglTexture,pe,Tt+Xt)),F.blitFramebuffer(Ie,Xe,Ie+Re,Xe+he,Ce,tt,Ce+Re,tt+he,F.DEPTH_BUFFER_BIT,F.NEAREST);me.bindFramebuffer(F.READ_FRAMEBUFFER,null),me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||Be.has(S)){let at=Be.get(S),Zt=Be.get(I);me.bindFramebuffer(F.READ_FRAMEBUFFER,L),me.bindFramebuffer(F.DRAW_FRAMEBUFFER,W);for(let An=0;An<be;An++)Un?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,at.__webglTexture,H,Qe+An):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,at.__webglTexture,H),Bn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Zt.__webglTexture,pe,Tt+An):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Zt.__webglTexture,pe),H!==0?F.blitFramebuffer(Ie,Xe,Ie+Re,Xe+he,Ce,tt,Ce+Re,tt+he,F.COLOR_BUFFER_BIT,F.NEAREST):Bn?F.copyTexSubImage3D(re,pe,Ce,tt,Tt+An,Ie,Xe,Re,he):F.copyTexSubImage2D(re,pe,Ce,tt,Ie,Xe,Re,he);me.bindFramebuffer(F.READ_FRAMEBUFFER,null),me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Bn?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(re,pe,Ce,tt,Tt,Re,he,be,ct,Vt,gt.data):I.isCompressedArrayTexture?F.compressedTexSubImage3D(re,pe,Ce,tt,Tt,Re,he,be,ct,gt.data):F.texSubImage3D(re,pe,Ce,tt,Tt,Re,he,be,ct,Vt,gt):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,pe,Ce,tt,Re,he,ct,Vt,gt.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,pe,Ce,tt,gt.width,gt.height,ct,gt.data):F.texSubImage2D(F.TEXTURE_2D,pe,Ce,tt,Re,he,ct,Vt,gt);me.pixelStorei(F.UNPACK_ROW_LENGTH,qe),me.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ke),me.pixelStorei(F.UNPACK_SKIP_PIXELS,on),me.pixelStorei(F.UNPACK_SKIP_ROWS,Wt),me.pixelStorei(F.UNPACK_SKIP_IMAGES,ss),pe===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&F.generateMipmap(re),me.unbindTexture()},this.initRenderTarget=function(S){Be.get(S).__webglFramebuffer===void 0&&Ge.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ge.setTextureCube(S,0):S.isData3DTexture?Ge.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ge.setTexture2DArray(S,0):Ge.setTexture2D(S,0),me.unbindTexture()},this.resetState=function(){G=0,X=0,ee=null,me.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var Jd={type:"change"},lh={type:"start"},Qd={type:"end"},ul=new zn,jd=new nn,mx=Math.cos(70*Di.DEG2RAD),zt=new w,dn=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},oh=1e-6,dl=class extends Yr{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Pi.ROTATE,TWO:Pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new Yt,this._lastTargetPosition=new w,this._quat=new Yt().setFromUnitVectors(e.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hs,this._sphericalDelta=new Hs,this._scale=1,this._panOffset=new w,this._rotateStart=new ye,this._rotateEnd=new ye,this._rotateDelta=new ye,this._panStart=new ye,this._panEnd=new ye,this._panDelta=new ye,this._dollyStart=new ye,this._dollyEnd=new ye,this._dollyDelta=new ye,this._dollyDirection=new w,this._mouse=new ye,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_x.bind(this),this._onPointerDown=gx.bind(this),this._onPointerUp=xx.bind(this),this._onContextMenu=Ex.bind(this),this._onMouseWheel=bx.bind(this),this._onKeyDown=Sx.bind(this),this._onTouchStart=Mx.bind(this),this._onTouchMove=wx.bind(this),this._onMouseDown=yx.bind(this),this._onMouseMove=vx.bind(this),this._interceptControlDown=Tx.bind(this),this._interceptControlUp=Ax.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ut.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jd),this.update(),this.state=ut.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;zt.copy(t).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=dn:n>Math.PI&&(n-=dn),i<-Math.PI?i+=dn:i>Math.PI&&(i-=dn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=zt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new w(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new w(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ul.origin.copy(this.object.position),ul.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ul.direction))<mx?this.object.lookAt(this.target):(jd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ul.intersectPlane(jd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>oh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>oh||this._lastTargetPosition.distanceToSquared(this.target)>oh?(this.dispatchEvent(Jd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?dn/60*this.autoRotateSpeed*e:dn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){zt.setFromMatrixColumn(t,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,t){this.screenSpacePanning===!0?zt.setFromMatrixColumn(t,1):(zt.setFromMatrixColumn(t,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;zt.copy(i).sub(this.target);let r=zt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ye,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function gx(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function _x(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function xx(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qd),this.state=ut.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function yx(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ut.DOLLY;break;case Li.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ut.ROTATE}break;case Li.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(lh)}function vx(s){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function bx(s){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(s.preventDefault(),this.dispatchEvent(lh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Qd))}function Sx(s){this.enabled!==!1&&this._handleKeyDown(s)}function Mx(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Pi.ROTATE:if(this.enableRotate===!1){this.state=ut.NONE;break}this._handleTouchStartRotate(s),this.state=ut.TOUCH_ROTATE;break;case Pi.PAN:if(this.enablePan===!1){this.state=ut.NONE;break}this._handleTouchStartPan(s),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case Pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ut.TOUCH_DOLLY_PAN;break;case Pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(lh)}function wx(s){switch(this._trackPointer(s),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ut.NONE}}function Ex(s){this.enabled!==!1&&s.preventDefault()}function Tx(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ax(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ch(s,e){if(e===Lc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===$s||e===na){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===$s)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function ef(s){let e=new Map,t=new Map,n=s.clone();return tf(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function tf(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)tf(s.children[n],e.children[n],t)}var fl=class extends Xn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new gh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new pl(t,it.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new pl(t,it.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Lh(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=gi.extractUrlBase(e);a=gi.resolveURL(c,this.path)}else a=gi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Os(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===of){try{a[it.KHR_BINARY_GLTF]=new Ph(e)}catch(u){i&&i(u);return}r=JSON.parse(a[it.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Bh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case it.KHR_MATERIALS_UNLIT:a[u]=new ph;break;case it.KHR_DRACO_MESH_COMPRESSION:a[u]=new Ih(r,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:a[u]=new Dh;break;case it.KHR_MESH_QUANTIZATION:a[u]=new Nh;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Rx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Et(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},fh=class{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ae(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],sn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new qi(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Sn(h),c.distance=u;break;case"spot":c=new Vr(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Jn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},ph=class{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return St}extendParams(e,t,n){let i=[];e.color=new Ae(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],sn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ft))}return Promise.all(i)}},mh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},gh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Et(this.parser,e,this.name)!==null?It:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ye(r,r)}return Promise.all(i)}},_h=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Et(this.parser,e,this.name)!==null?It:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},xh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Et(this.parser,e,this.name)!==null?It:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},yh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Et(this.parser,e,this.name)!==null?It:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},vh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){return Et(this.parser,e,this.name)!==null?It:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],sn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ft)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},bh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Et(this.parser,e,this.name)!==null?It:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Sh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){return Et(this.parser,e,this.name)!==null?It:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(r[0],r[1],r[2],sn),Promise.all(i)}},Mh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){return Et(this.parser,e,this.name)!==null?It:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},wh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Et(this.parser,e,this.name)!==null?It:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(r[0],r[1],r[2],sn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ft)),Promise.all(i)}},Eh=class{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){return Et(this.parser,e,this.name)!==null?It:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Th=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Et(this.parser,e,this.name)!==null?It:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Ah=class{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Rh=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Ch=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},pl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Lh=class{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==En.TRIANGLES&&c.mode!==En.TRIANGLE_STRIP&&c.mode!==En.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let x=new We,m=new w,p=new Yt,y=new w(1,1,1),E=new Wi(g.geometry,g.material,d);for(let T=0;T<d;T++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,T),l.SCALE&&y.fromBufferAttribute(l.SCALE,T),E.setMatrixAt(T,x.compose(m,p,y));let b=null;for(let T in l)if(T==="_COLOR_0"){let A=l[T];E.instanceColor=new ci(A.array,A.itemSize,A.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(b===null){let _=E.geometry;b=new At,b.name=_.name;for(let M in _.attributes)b.setAttribute(M,_.attributes[M]);for(let M in _.morphAttributes)b.morphAttributes[M]=_.morphAttributes[M];_.index!==null&&b.setIndex(_.index),b.morphTargetsRelative=_.morphTargetsRelative;for(let M of _.groups)b.addGroup(M.start,M.count,M.materialIndex);_.boundingBox!==null&&(b.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(b.boundingSphere=_.boundingSphere.clone()),b.drawRange.start=_.drawRange.start,b.drawRange.count=_.drawRange.count,b.userData=Object.assign({},_.userData),E.geometry=b}let A=l[T];b.setAttribute(T,new ci(A.array,A.itemSize,A.normalized))}xt.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),f.push(E)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},of="glTF",oa=12,nf={JSON:1313821514,BIN:5130562},Ph=class{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,oa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==of)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-oa,r=new DataView(e,oa),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===nf.JSON){let c=new Uint8Array(e,oa+a,o);this.content=n.decode(c)}else if(l===nf.BIN){let c=oa+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ih=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Oh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Oh[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=js[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(f)},o,c,sn,d)})})}},Dh=class{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Nh=class{constructor(){this.name=it.KHR_MESH_QUANTIZATION}},ml=class extends Wn{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,y=1-m,E=p-d+u;for(let b=0;b!==o;b++){let T=a[x+b+o],A=a[x+b+l]*h,_=a[g+b+o],M=a[g+b]*h;r[b]=y*T+E*A+m*_+p*M}return r}},Cx=new Yt,Fh=class extends ml{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Cx.fromArray(r).normalize().toArray(r),r}},En={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},js={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sf={9728:Ct,9729:Ut,9984:vo,9985:qs,9986:Zi,9987:Mn},rf={33071:yn,33648:bs,10497:Pn},hh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Oh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Lx={CUBICSPLINE:void 0,LINEAR:Gi,STEP:zi},uh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Px(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ve({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qn})),s.DefaultMaterial}function Qi(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Jn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ix(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Dx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Nx(s){let e,t=s.extensions&&s.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+dh(t.attributes):e=s.indices+":"+dh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+dh(s.targets[n]);return e}function dh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Uh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Fx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Ox=new We,Bh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Rx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?(this.textureLoader=new Hr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Xr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Os(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Qi(r,o,i),Jn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(gi.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=hh[i.type],o=js[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Jt(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=hh[i.type],c=js[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,E=t.cache.get(y);E||(x=new c(o,p*f,i.count*f/h),E=new Cs(x,f/h),t.cache.add(y,E)),m=new Ls(E,l,d%f/h,g)}else o===null?x=new c(i.count*l):x=new c(o,d,i.count*l),m=new Jt(x,l,g);if(i.sparse!==void 0){let p=hh.SCALAR,y=js[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,T=new y(a[1],E,i.sparse.count*p),A=new c(a[2],b,i.sparse.count*l);o!==null&&(m=new Jt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let _=0,M=T.length;_<M;_++){let D=T[_];if(m.setX(D,A[_*l]),l>=2&&m.setY(D,A[_*l+1]),l>=3&&m.setZ(D,A[_*l+2]),l>=4&&m.setW(D,A[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=sf[d.magFilter]||Ut,h.minFilter=sf[d.minFilter]||Mn,h.wrapS=rf[d.wrapS]||Pn,h.wrapT=rf[d.wrapT]||Pn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ct&&h.minFilter!==Ut,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,g){t.parse(d,f,g)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,g){let x=f;t.isImageBitmapLoader===!0&&(x=function(m){let p=new Bt(m);p.needsUpdate=!0,f(p)}),t.load(gi.resolveURL(d,r.path),x,void 0,g)})})}let u=h.then(function(d){return c===!0&&o.revokeObjectURL(l),Jn(d,a),d.userData.mimeType=a.mimeType||Fx(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[it.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ds,cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ai,cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ve}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[it.KHR_MATERIALS_UNLIT]){let u=i[it.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Ae(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],sn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Ft)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Dt);let h=r.alphaMode||uh.OPAQUE;if(h===uh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===uh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==St&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ye(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==St&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==St){let u=r.emissiveFactor;o.emissive=new Ae().setRGB(u[0],u[1],u[2],sn)}return r.emissiveTexture!==void 0&&a!==St&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ft)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Jn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Qi(i,u,r),u})}createUniqueName(e){let t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return af(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Nx(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[it.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=af(new At,c,t),c.mode===En.TRIANGLE_STRIP?d=d.then(f=>ch(f,na)):c.mode===En.TRIANGLE_FAN&&(d=d.then(f=>ch(f,$s))),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?Px(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=a[f],p,y=c[f];if(m.mode===En.TRIANGLES||m.mode===En.TRIANGLE_STRIP||m.mode===En.TRIANGLE_FAN||m.mode===void 0){let E=r.isSkinnedMesh===!0,b=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");E&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=E&&b?new Er(x,y):new te(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===En.LINES)p=new Ar(x,y);else if(m.mode===En.LINE_STRIP)p=new hi(x,y);else if(m.mode===En.LINE_LOOP)p=new Rr(x,y);else if(m.mode===En.POINTS)p=new Cr(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Dx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Jn(p,r),m.extensions&&Qi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Qi(i,u[0],r),u[0];let d=new _t;r.extensions&&Qi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ot(Di.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Xi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Jn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new We;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Tr(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],g=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let E=0,b=d.length;E<b;E++){let T=d[E],A=f[E],_=g[E],M=x[E],D=m[E];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let P=n._createAnimationTracks(T,A,_,M,D);if(P)for(let N=0;N<P.length;N++)p.push(P[N])}let y=new kr(r,void 0,p);return Jn(y,i),y})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Ox)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new w().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Ps:c.length>1?h=new _t:c.length===1?h=c[0]:h=new xt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Jn(h,r),r.extensions&&Qi(n,h,r),r.matrix!==void 0){let u=new We;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new _t;n.name&&(r.name=i.createUniqueName(n.name)),Jn(r,n),n.extensions&&Qi(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(ef(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof cn||d instanceof Bt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Ni[r.path]===Ni.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Ni[r.path]){case Ni.weights:h=fi;break;case Ni.rotation:h=pi;break;case Ni.translation:case Ni.scale:h=Ri;break;default:n.itemSize===1?h=fi:h=Ri;break}let u=i.interpolation!==void 0?Lx[i.interpolation]:Gi,d=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){let x=new h(l[f]+"."+Ni[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Uh(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof pi?Fh:ml;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Ux(s,e,t){let n=e.attributes,i=new gn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new w(l[0],l[1],l[2]),new w(c[0],c[1],c[2])),o.normalized){let h=Uh(js[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new w,l=new w;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Uh(js[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new ln;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function af(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=Oh[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return nt.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),Jn(s,e),Ux(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ix(s,e.targets,t):s})}var lf=new w,Bx=new Yt,cf=new w,gl=class extends xt{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var jn=new We,kx=new We,_l=class{constructor(e={}){let t=this,n,i,r,a,o={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let h=document.createElement("div");h.style.transformStyle="preserve-3d",c.appendChild(h),this.getSize=function(){return{width:n,height:i}},this.render=function(m,p){let y=p.projectionMatrix.elements[5]*a;p.view&&p.view.enabled?(c.style.transform=`translate( ${-p.view.offsetX*(n/p.view.width)}px, ${-p.view.offsetY*(i/p.view.height)}px )`,c.style.transform+=`scale( ${p.view.fullWidth/p.view.width}, ${p.view.fullHeight/p.view.height} )`):c.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let E,b;p.isOrthographicCamera&&(E=-(p.right+p.left)/2,b=(p.top+p.bottom)/2);let T=p.view&&p.view.enabled?p.view.height/p.view.fullHeight:1,A=p.isOrthographicCamera?`scale( ${T} )scale(`+y+")translate("+u(E)+"px,"+u(b)+"px)"+d(p.matrixWorldInverse):`scale( ${T} )translateZ(`+y+"px)"+d(p.matrixWorldInverse),M=(p.isPerspectiveCamera?"perspective("+y+"px) ":"")+A+"translate("+r+"px,"+a+"px)";o.camera.style!==M&&(h.style.transform=M,o.camera.style=M),x(m,m,p,A)},this.setSize=function(m,p){n=m,i=p,r=n/2,a=i/2,l.style.width=m+"px",l.style.height=p+"px",c.style.width=m+"px",c.style.height=p+"px",h.style.width=m+"px",h.style.height=p+"px"};function u(m){return Math.abs(m)<1e-10?0:m}function d(m){let p=m.elements;return"matrix3d("+u(p[0])+","+u(-p[1])+","+u(p[2])+","+u(p[3])+","+u(p[4])+","+u(-p[5])+","+u(p[6])+","+u(p[7])+","+u(p[8])+","+u(-p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(-p[13])+","+u(p[14])+","+u(p[15])+")"}function f(m){let p=m.elements;return"translate(-50%,-50%)"+("matrix3d("+u(p[0])+","+u(p[1])+","+u(p[2])+","+u(p[3])+","+u(-p[4])+","+u(-p[5])+","+u(-p[6])+","+u(-p[7])+","+u(p[8])+","+u(p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(p[13])+","+u(p[14])+","+u(p[15])+")")}function g(m){m.isCSS3DObject&&(m.element.style.display="none");for(let p=0,y=m.children.length;p<y;p++)g(m.children[p])}function x(m,p,y,E){if(m.visible===!1){g(m);return}if(m.isCSS3DObject){let b=m.layers.test(y.layers)===!0,T=m.element;if(T.style.display=b===!0?"":"none",b===!0){m.onBeforeRender(t,p,y);let A;m.isCSS3DSprite?(jn.copy(y.matrixWorldInverse),jn.transpose(),m.rotation2D!==0&&jn.multiply(kx.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(lf,Bx,cf),jn.setPosition(lf),jn.scale(cf),jn.elements[3]=0,jn.elements[7]=0,jn.elements[11]=0,jn.elements[15]=1,A=f(jn)):A=f(m.matrixWorld);let _=o.objects.get(m);if(_===void 0||_.style!==A){T.style.transform=A;let M={style:A};o.objects.set(m,M)}T.parentNode!==h&&h.appendChild(T),m.onAfterRender(t,p,y)}}for(let b=0,T=m.children.length;b<T;b++)x(m.children[b],p,y,E)}}};var xl=class{constructor(e){this.scene=e,this.streams=[],this.meshes={},this.particleCountPerStream=48,this.paths={solar:new Dn([new w(2.5,6.45,-6.5),new w(4.1,6.55,-6.5),new w(5.63,6.55,-6.5),new w(5.63,5.2,-4.5),new w(5.63,3.8,-2.5),new w(5.63,2.6,-1),new w(5.63,2.05,-.5),new w(5.63,1.75,-.5),new w(5.63,1.4,-.5),new w(5.5,1.25,-.75)]),grid:new Dn([new w(6.4,6.95,6.95),new w(6.12,6.25,5.2),new w(5.86,5.525,3.465),new w(5.55,5.15,1.7),new w(5.32,5,-.02),new w(5.32,3,.04),new w(5.32,1.1,.04),new w(5.26,1.1,-.55),new w(5.27,.95,-.6)]),ev:new Dn([new w(5.19,1.12,.05),new w(5.195,1.009,.15),new w(5.2,.91,.25),new w(5.205,.823,.35),new w(5.21,.748,.45),new w(5.215,.684,.55),new w(5.22,.633,.65),new w(5.225,.593,.75),new w(5.23,.565,.85),new w(5.235,.549,.95),new w(5.24,.545,1.05),new w(5.245,.553,1.15),new w(5.25,.573,1.25),new w(5.255,.604,1.35),new w(5.26,.648,1.45),new w(5.265,.703,1.55),new w(5.27,.77,1.65)]),gas:new Dn([new w(-1.3,1.05,-8),new w(-1.3,.22,-8),new w(-.65,.22,-8.15),new w(-.08,.22,-8.32),new w(-.08,1.05,-8.32),new w(.301,1.05,-8.32),new w(.601,1.05,-8.32),new w(.601,1.35,-8.32)])},this.initStreams()}initStreams(){this.streamDefs={solar:{curve:this.paths.solar,color:new Ae(16758528),baseSpeed:.2,size:.058,particleCount:24},grid:{curve:this.paths.grid,color:new Ae(54015),baseSpeed:.19,size:.065,particleCount:24},ev:{curve:this.paths.ev,color:new Ae(62875),baseSpeed:.44,size:.06,particleCount:5},gas:{curve:this.paths.gas,color:new Ae(16739584),baseSpeed:.32,size:.052,particleCount:12}};let e=new Nn(1,12,12);for(let[t,n]of Object.entries(this.streamDefs)){let i=new St({color:n.color,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1,blending:Vs}),r=n.particleCount||this.particleCountPerStream,a=new Wi(e,i,r);a.instanceMatrix.setUsage(Fc),a.renderOrder=999;let o=new xt;for(let l=0;l<r;l++){let c=l/r,h=n.curve.getPointAt(c);o.position.copy(h),o.scale.setScalar(n.size),o.updateMatrix(),a.setMatrixAt(l,o.matrix)}a.instanceMatrix.needsUpdate=!0,this.scene.add(a),this.streams.push({id:t,mesh:a,def:n,dummy:o,offset:0})}this.glowLines={};for(let[t,n]of Object.entries(this.streamDefs)){let i=n.curve.getPoints(100),r=new At().setFromPoints(i),a=new Ai({color:n.color,transparent:!0,opacity:.5,depthTest:!1,depthWrite:!1,blending:Vs}),o=new hi(r,a);o.renderOrder=998,this.scene.add(o),this.glowLines[t]=o}}bindMeshes(e){e.traverse(t=>{if(!t.isMesh)return;let n=t.name;n.includes("Roof_Solar_Panels")?(this.meshes.solarPanels=t,t.material=t.material.clone()):n.includes("Solar_PV_Cabling")?(this.meshes.solarCable=t,t.material=t.material.clone()):n.includes("EV_Charger")?(this.meshes.evCharger=t,t.material=t.material.clone()):n.includes("EV_Charging_Cable")?(this.meshes.evCable=t,t.material=t.material.clone()):n.includes("Car_Peugeot_e2008_Body")?this.meshes.peugeotBody=t:n.includes("Car_Peugeot_e2008_Lights")?(this.meshes.peugeotLights=t,t.material=t.material.clone()):n.includes("Car_Peugeot_e2008_Taillights")?(this.meshes.peugeotTaillights=t,t.material=t.material.clone()):n.includes("Kitchen_Combi_Boiler")?(this.meshes.boiler=t,t.material=t.material.clone()):n.includes("Kitchen_Boiler_Pipes")||n.includes("Gas_Supply_Pipes")?(this.meshes.gasPipes||(this.meshes.gasPipes=[]),t.material=t.material.clone(),this.meshes.gasPipes.push(t)):(n.includes("Entrance_Meter_Box")||n.includes("Entrance_Meter_Fittings"))&&(this.meshes.meterBox||(this.meshes.meterBox=[]),t.material=t.material.clone(),this.meshes.meterBox.push(t))}),this.scene.traverse(t=>{t.name==="Solar_PV_Cabling_Wall"&&(this.meshes.solarCableWall=t)})}update(e,t){if(!t)return;function n(h){let u=Number(h||0);return isNaN(u)?0:Math.abs(u)>=20?u/1e3:u}let i=n(t.solar?.power_kw),r=n(t.octopus_electric?.power_kw),a=n(t.ev?.charger_power_kw),o=n(t.octopus_gas?.power_kw),c=!!(t.octopus_gas?.is_active&&t.octopus_gas?.boiler_status==="Heating")&&o>.05;for(let h of this.streams){let{id:u,mesh:d,def:f,dummy:g}=h,x=0,m=1;if(u==="solar")if(i>.02){let y=Math.min(i/4,2.5);x=Math.max(y*f.baseSpeed,.02),m=1}else x=0;else if(u==="grid"){let y=Math.abs(r),E=r<-.02||!!t.octopus_electric?.is_exporting&&r<=.02;if(y>.02){let b=Math.min(y/3.5,2.5);if(x=Math.max(b*f.baseSpeed,.02),E){m=-1;let T=new Ae(65416);d.material.color.lerp(T,.2),this.glowLines[u]&&this.glowLines[u].material.color.lerp(T,.2)}else{m=1;let T=new Ae(54015);d.material.color.lerp(T,.2),this.glowLines[u]&&this.glowLines[u].material.color.lerp(T,.2)}}else x=0}else if(u==="ev")if(!!t.ev?.is_connected&&a>.04){let E=Math.min(a/7.2,2.5);x=Math.max(E*f.baseSpeed,.04),m=1}else x=0;else if(u==="gas")if(c&&o>.05){let y=Math.min(o/2,2.5);x=Math.max(y*f.baseSpeed,.04),m=1}else x=0;if(x===0){u==="ev"&&t.ev?.is_connected===!1?(d.material.opacity=0,this.glowLines[u]&&(this.glowLines[u].material.opacity=0)):(d.material.opacity=.2,this.glowLines[u]&&(this.glowLines[u].material.opacity=.12));continue}d.material.opacity=.95,this.glowLines[u]&&(this.glowLines[u].material.opacity=.5),h.offset+=e*x*m,h.offset>1&&(h.offset-=1),h.offset<0&&(h.offset+=1);let p=f.particleCount||this.particleCountPerStream;for(let y=0;y<p;y++){let E=(y/p+h.offset)%1;E<0&&(E+=1);let b=f.curve.getPointAt(E);if(g.position.copy(b),u==="grid"||u==="ev")g.scale.setScalar(f.size);else{let T=Math.sin(E*Math.PI*4);g.scale.setScalar(f.size*(.9+.25*T))}g.updateMatrix(),d.setMatrixAt(y,g.matrix)}d.instanceMatrix.needsUpdate=!0}this.updateMeshGlows(i,r,a,a>.04,c)}updateMeshGlows(e,t,n,i,r){if(this.meshes.solarPanels?.material){let a=this.meshes.solarPanels.material;a.emissive=a.emissive||new Ae;let o=e>.05?Math.min(e/2.2,1.3):0;a.emissive.setHex(16758528),a.emissiveIntensity=Di.lerp(a.emissiveIntensity||0,o,.08)}if(this.meshes.solarCable?.material){let a=this.meshes.solarCable.material;a.emissive=a.emissive||new Ae,a.emissive.setHex(16755200),a.emissiveIntensity=e>.05?.8:0}if(this.meshes.solarCableWall?.material){let a=this.meshes.solarCableWall.material;a.emissive=a.emissive||new Ae,a.emissive.setHex(16755200),a.emissiveIntensity=e>.05?.45:0}if(this.meshes.evCable?.material){let a=this.meshes.evCable.material;a.emissive=a.emissive||new Ae,a.emissive.setHex(62875),a.emissiveIntensity=i?.9:0}if(this.meshes.peugeotLights?.material){let a=this.meshes.peugeotLights.material;a.emissive=a.emissive||new Ae,a.emissive.setHex(62875);let o=i?Math.sin(Date.now()*.003)*.35+.65:0;a.emissiveIntensity=o}if(this.meshes.boiler?.material){let a=this.meshes.boiler.material;a.emissive=a.emissive||new Ae,a.emissive.setHex(16733440),a.emissiveIntensity=r?.8:0}if(this.meshes.gasPipes)for(let a of this.meshes.gasPipes)a.material&&(a.material.emissive=a.material.emissive||new Ae,a.material.emissive.setHex(16742144),a.material.emissiveIntensity=r?.6:0)}};var vl=[{id:"lounge",name:"Living Room Ceiling",floor:"ground",pos:{x:1.88,y:2.15,z:-2.35},range:7.5,maxIntensity:4.2,defaultColor:16769689,entity_id:""},{id:"kitchen",name:"Kitchen Ceiling",floor:"ground",pos:{x:1.8,y:2.15,z:-7.4},range:7,maxIntensity:4.5,defaultColor:16773334,entity_id:""},{id:"dining",name:"Dining Room",floor:"ground",pos:{x:4.3,y:2.15,z:-7.4},range:6.5,maxIntensity:4,defaultColor:16770744,entity_id:""},{id:"hallway",name:"Hall & Stairs",floor:"ground",pos:{x:4.3,y:2.15,z:-3.25},range:7.5,maxIntensity:3.8,defaultColor:16772565,entity_id:""},{id:"wc",name:"Downstairs WC",floor:"ground",pos:{x:1.85,y:2.15,z:-5.32},range:5.5,maxIntensity:3.8,defaultColor:16773596,entity_id:""},{id:"living_lamp",name:"Living Room Lamp",floor:"ground",pos:{x:.6,y:1.58,z:-.65},range:5.5,maxIntensity:3.8,defaultColor:16766336,entity_id:"light.living_room_lamp",isFloorLamp:!0},{id:"master_bedroom",name:"Master Bedroom",floor:"first",pos:{x:1.9,y:4.55,z:-2.1},range:7.5,maxIntensity:4.2,defaultColor:16769689,entity_id:""},{id:"ensuite",name:"Master En-Suite",floor:"first",pos:{x:4.4,y:4.55,z:-1.22},range:5,maxIntensity:3.6,defaultColor:16774890,entity_id:""},{id:"bedroom2",name:"Bedroom 2 (Guestroom)",floor:"first",pos:{x:1.75,y:4.55,z:-7.3},range:6.8,maxIntensity:4,defaultColor:16769689,entity_id:""},{id:"bedroom3",name:"Bedroom 3 (Nursery / Office)",floor:"first",pos:{x:4.3,y:4.55,z:-7.3},range:6.8,maxIntensity:4,defaultColor:16769689,entity_id:""},{id:"bathroom",name:"Family Bathroom",floor:"first",pos:{x:1.22,y:4.55,z:-4.95},range:5.5,maxIntensity:3.8,defaultColor:16775406,entity_id:""},{id:"landing",name:"Upstairs Landing",floor:"first",pos:{x:3.3,y:4.55,z:-4.95},range:6,maxIntensity:3.8,defaultColor:16772565,entity_id:""}],Hx={lounge:{name:"Living Room",pos:new w(1.88,2.15,-2.35),range:7.5,maxIntensity:4.2,defaultColor:16769689,boxCenter:new w(1.88,1.2,-2.35),boxSize:new w(3.1,2.35,4.05)},kitchen:{name:"Kitchen",pos:new w(1.8,2.15,-7.4),range:7,maxIntensity:4.5,defaultColor:16773334,boxCenter:new w(1.8,1.2,-7.41),boxSize:new w(2.95,2.35,2.3)},dining:{name:"Dining Room",pos:new w(4.3,2.15,-7.4),range:6.5,maxIntensity:4,defaultColor:16770744,boxCenter:new w(4.32,1.2,-7.41),boxSize:new w(2,2.35,2.3)},hallway:{name:"Hallway",pos:new w(4.3,2.15,-3.25),range:7.5,maxIntensity:3.8,defaultColor:16772565,boxCenter:new w(4.37,1.2,-3.275),boxSize:new w(1.98,2.4,6)},wc:{name:"Downstairs WC",pos:new w(1.85,2.15,-5.32),range:5.5,maxIntensity:3.8,defaultColor:16773596,boxCenter:new w(1.85,1.2,-5.32),boxSize:new w(3.08,2.35,1.82)},master_bedroom:{name:"Master Bedroom",pos:new w(1.9,4.55,-2.1),range:7.5,maxIntensity:4.2,defaultColor:16769689,boxCenter:new w(2.325,3.85,-2.075),boxSize:new w(4.1,2.4,3.62)},ensuite:{name:"Master En-Suite",pos:new w(4.4,4.55,-1.22),range:5,maxIntensity:3.6,defaultColor:16774890,boxCenter:new w(4.38,3.85,-1.23),boxSize:new w(1.85,2.25,1.82)},bedroom2:{name:"Bedroom 2",pos:new w(1.75,4.55,-7.3),range:6.8,maxIntensity:4,defaultColor:16769689,boxCenter:new w(1.775,3.85,-7.315),boxSize:new w(3,2.4,2.6)},bedroom3:{name:"Bedroom 3",pos:new w(4.3,4.55,-7.3),range:6.8,maxIntensity:4,defaultColor:16769689,boxCenter:new w(4.295,3.85,-7.315),boxSize:new w(2.15,2.4,2.6)},bathroom:{name:"Family Bathroom",pos:new w(1.22,4.55,-4.95),range:5.5,maxIntensity:3.8,defaultColor:16775406,boxCenter:new w(1.22,3.85,-4.95),boxSize:new w(1.82,2.25,2.18)},landing:{name:"Landing & Stairs",pos:new w(3.3,4.55,-4.95),range:6,maxIntensity:3.8,defaultColor:16772565,boxCenter:new w(3.3,3.85,-4.95),boxSize:new w(2.25,2.25,2.18)}},yl=class{constructor(e,t={}){this.container=e,this.options={modelUrl:t.modelUrl||"Taylor_Wimpey_Blair.glb",nightMode:t.nightMode||!1,autoRotate:t.autoRotate||!1,...t},this.hotspots=[{id:"solar",name:"Solax Solar Inverter",pos:new w(5.88,1.78,-.5)},{id:"grid",name:"Octopus Grid & Meter",pos:new w(5.3,2,-.85)},{id:"boiler",name:"Combi Boiler & Gas",pos:new w(.45,1.8,-8.3)},{id:"ev",name:"Peugeot e-2008 EV",pos:new w(5.25,1.2,1.35)},{id:"ev_charger",name:"myenergi Zappi Charger",pos:new w(5.2,1.45,.05)},{id:"thermostat_downstairs",name:"Downstairs Heating",pos:new w(3.6,1.45,-2.4)},{id:"thermostat_upstairs",name:"Upstairs Heating",pos:new w(3.3,4.05,-4.95)},{id:"appliance_fridge",name:"Kitchen Fridge Freezer",pos:new w(2.45,1.45,-6.65)},{id:"appliance_washer",name:"Kitchen Washing Machine",pos:new w(2.15,.9,-8.2)},{id:"appliance_tv",name:"Living Room TV",pos:new w(3.35,1.4,-3.1)}],this.roofParts=[],this.topFloorMeshes=[],this.cuttableMeshes=[],this.occludingMeshes=[],this.tvRaycaster=new ks,this.tvTargetPos=new w(3.34,1.35,-3.1),this.cutawayMode="normal",this.customLights=this.options.customLights||vl,this.roomLights={},this.xrayActive=!1,this.nightMode=this.options.nightMode,this.targetCameraPos=null,this.targetLookAt=null,this.clickToPlaceCallback=null,this.boundOnClickToPlace=null,this.init()}init(){let e=this.container.clientWidth||800,t=this.container.clientHeight||500;this.scene=new Rs,this.camera=new Ot(40,e/t,.1,100),this.camera.position.set(15,12,17),this.renderer=new ll({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=xo,this.renderer.toneMapping=Kr,this.renderer.toneMappingExposure=.88,this.renderer.localClippingEnabled=!0,this.downstairsClipPlane=new nn(new w(0,-1,0),2.52),this.container.appendChild(this.renderer.domElement),this.css3dScene=new Rs,this.css3dRenderer=new _l,this.css3dRenderer.setSize(e,t),this.css3dRenderer.domElement.style.position="absolute",this.css3dRenderer.domElement.style.top="0",this.css3dRenderer.domElement.style.left="0",this.css3dRenderer.domElement.style.width="100%",this.css3dRenderer.domElement.style.height="100%",this.css3dRenderer.domElement.style.pointerEvents="none",this.container.appendChild(this.css3dRenderer.domElement),this.controls=new dl(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI/2-.04,this.controls.minDistance=3,this.controls.maxDistance=45,this.controls.target.set(2.5,2.5,0),this.controls.autoRotate=this.options.autoRotate,this.controls.autoRotateSpeed=.8,this.controls.addEventListener("start",()=>this.stopCameraAnimation());let n=()=>this.stopCameraAnimation();this.renderer.domElement.addEventListener("pointerdown",n,{passive:!0}),this.renderer.domElement.addEventListener("wheel",n,{passive:!0}),this.renderer.domElement.addEventListener("touchstart",n,{passive:!0}),this.css3dRenderer?.domElement&&(this.css3dRenderer.domElement.addEventListener("pointerdown",n,{passive:!0}),this.css3dRenderer.domElement.addEventListener("wheel",n,{passive:!0})),this.initLighting(),this.initEnvironment(),this.energyFlow=new xl(this.scene),this.initAppliancesAndFurniture(),this.loadModelWithFallbacks(this.options.modelUrl),this.handleResize=this.onResize.bind(this),window.addEventListener("resize",this.handleResize),this.clock=new qr,this.animate=this.animate.bind(this),this.isRunning=!0,requestAnimationFrame(this.animate)}initLighting(){this.ambientLight=new Wr(16777215,this.nightMode?.05:.12),this.scene.add(this.ambientLight),this.sunLight=new qi(16774630,this.nightMode?.08:1.45),this.sunLight.position.set(20,26,14),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=4096,this.sunLight.shadow.mapSize.height=4096,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=65,this.sunLight.shadow.camera.left=-16,this.sunLight.shadow.camera.right=16,this.sunLight.shadow.camera.top=16,this.sunLight.shadow.camera.bottom=-16,this.sunLight.shadow.bias=-15e-5,this.sunLight.shadow.normalBias=.02,this.sunLight.shadow.radius=2,this.scene.add(this.sunLight),this.hemiLight=new zr(9684477,2964011,this.nightMode?.06:.18),this.scene.add(this.hemiLight),this.meterPointLight=new Sn(58879,0,4),this.meterPointLight.position.set(5.28,1.4,-.85),this.scene.add(this.meterPointLight),this.carPointLight=new Sn(62875,0,5),this.carPointLight.position.set(3.4,1.2,1.6),this.scene.add(this.carPointLight),this.roomLightsGroup=new _t,this.scene.add(this.roomLightsGroup),this.rebuildCustomLights(this.customLights),this.applyLightingMode()}initEnvironment(){try{if(typeof document>"u")return;let e=document.createElement("canvas");e.width=1024,e.height=512;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,512);n.addColorStop(0,"#103965"),n.addColorStop(.35,"#3b82f6"),n.addColorStop(.48,"#93c5fd"),n.addColorStop(.5,"#ffedd5"),n.addColorStop(.52,"#9ca3af"),n.addColorStop(.65,"#374151"),n.addColorStop(1,"#1e293b"),t.fillStyle=n,t.fillRect(0,0,1024,512);let i=t.createRadialGradient(680,240,5,680,240,160);i.addColorStop(0,"rgba(255, 255, 255, 1.0)"),i.addColorStop(.15,"rgba(255, 245, 220, 0.85)"),i.addColorStop(.5,"rgba(254, 215, 170, 0.35)"),i.addColorStop(1,"rgba(254, 215, 170, 0.0)"),t.fillStyle=i,t.beginPath(),t.arc(680,240,160,0,Math.PI*2),t.fill();for(let l=0;l<18;l++){let c=(l*58+40)%1024,h=80+Math.sin(l*1.7)*60,u=40+Math.cos(l)*25,d=t.createRadialGradient(c,h,10,c,h,u);d.addColorStop(0,"rgba(255, 255, 255, 0.38)"),d.addColorStop(.6,"rgba(255, 255, 255, 0.15)"),d.addColorStop(1,"rgba(255, 255, 255, 0.0)"),t.fillStyle=d,t.beginPath(),t.arc(c,h,u,0,Math.PI*2),t.fill()}let r=new Ns(e);r.mapping=Xs;let a=new Zs(this.renderer);a.compileEquirectangularShader();let o=a.fromEquirectangular(r).texture;this.scene.environment=o,this.scene.environmentIntensity=this.nightMode?.1:.55,a.dispose(),r.dispose()}catch(e){console.warn("Could not generate procedural environment map:",e)}}rebuildCustomLights(e){if(!e||!Array.isArray(e))return;for(this.customLights=e;this.roomLightsGroup.children.length>0;){let n=this.roomLightsGroup.children[0];this.roomLightsGroup.remove(n),n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(i=>i.dispose()):n.material.dispose())}this.roomLights={};let t=new wt(.14,.14,.04,16);for(let n of e){let i=n.pos||{x:2.5,y:2.2,z:-3.5},r=new w(i.x,i.y,i.z),a=n.defaultColor!==void 0?n.defaultColor:16769689,o=n.range||6.5,l=new Sn(a,0,o,1.2);l.position.copy(r);let c=new ve({color:13421772,emissive:1118481,roughness:.3,metalness:.2}),h=new te(t,c);h.position.copy(r),(n.isFloorLamp||n.id==="living_lamp")&&(h.visible=!1);let u=new _t;u.add(l),u.add(h);let d=null,f=Hx[n.id];if(f?.boxCenter&&f?.boxSize){let g=new Ue(f.boxSize.x,f.boxSize.y,f.boxSize.z),x=new St({color:264212,transparent:!0,opacity:.65,side:Dt,depthWrite:!1});d=new te(g,x),d.position.copy(f.boxCenter),u.add(d)}this.roomLightsGroup.add(u),this.roomLights[n.id]={config:n,light:l,fixture:h,container:u,shadeMesh:d,floor:n.floor||(r.y>3?"first":"ground"),isOn:!1,brightness:0,colorHex:a}}this.cutawayMode==="downstairs"&&this.setCutawayMode("downstairs")}updateLightPosition(e,t,n,i){let r=this.roomLights[e];r&&(r.light.position.set(t,n,i),r.fixture.position.set(t,n,i),r.config.pos={x:t,y:n,z:i},r.floor=n>3?"first":"ground"),e==="living_lamp"&&this.applianceLamp&&(this.applianceLamp.position.set(t,0,i),this.applianceLampLight&&this.applianceLampLight.position.set(t,n,i)),this.beaconGroup&&this.beaconGroup.visible&&this.setEditingLightBeacon(e,new w(t,n,i))}setEditingLightBeacon(e,t=null){if(!this.beaconGroup){this.beaconGroup=new _t,this.scene.add(this.beaconGroup);let r=new Or(.16,.28,32);r.rotateX(-Math.PI/2);let a=new St({color:3718648,side:Dt,transparent:!0,opacity:.85});this.beaconRing=new te(r,a),this.beaconGroup.add(this.beaconRing);let o=new wt(.008,.008,1,8),l=new St({color:3718648,transparent:!0,opacity:.6});this.beaconLine=new te(o,l),this.beaconGroup.add(this.beaconLine);let c=new Nn(.07,16,16),h=new St({color:58879});this.beaconSphere=new te(c,h),this.beaconGroup.add(this.beaconSphere)}let n=this.roomLights[e],i=t||(n?n.light.position:new w(2.5,2.2,-3.5));this.beaconGroup.visible=!0,this.beaconSphere.position.copy(i),this.beaconRing.position.set(i.x,.02,i.z),this.beaconLine.position.set(i.x,i.y/2,i.z),this.beaconLine.scale.set(1,Math.max(.1,i.y),1)}clearEditingLightBeacon(){this.beaconGroup&&(this.beaconGroup.visible=!1)}enableClickToPlace(e){this.clickToPlaceCallback=e,this.boundOnClickToPlace||(this.boundOnClickToPlace=t=>{if(!this.clickToPlaceCallback)return;let n=this.renderer.domElement.getBoundingClientRect(),i=new ye((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1),r=new ks;r.setFromCamera(i,this.camera);let o=r.intersectObjects(this.scene.children,!0).find(l=>{let c=l.object;for(;c;){if(c===this.beaconGroup||c===this.roomLightsGroup||c===this.energyFlow?.group)return!1;c=c.parent}return!0});if(o){let l=o.point,c=this.cutawayMode==="downstairs"?2.15:l.y>3?4.55:2.15;this.clickToPlaceCallback({x:parseFloat(l.x.toFixed(2)),y:parseFloat(c.toFixed(2)),z:parseFloat(l.z.toFixed(2))})}},this.renderer.domElement.addEventListener("pointerup",this.boundOnClickToPlace))}disableClickToPlace(){this.clickToPlaceCallback=null}updateRoomLights(e){if(!e)return;this.lastLightsData=e;for(let[n,i]of Object.entries(e)){if(!this.roomLights[n])continue;let a=!!(i.is_on||i.state==="on"),o=i.brightness!==void 0?i.brightness:255,l=i.rgb_color;this.setRoomLightState(n,a,o,l)}let t=this.roomLights.lounge;if(t&&t.shadeMesh){let n=!!(e.lounge?.is_on||e.lounge?.state==="on"),i=!!(e.living_lamp?.is_on||e.living_lamp?.state==="on"),r=n||i;t.shadeMesh.visible=!r}if(this.applianceLampShade&&this.applianceLampLight){let n=e.living_lamp,i=!!(n?.is_on||n?.state==="on"),r=n?.brightness!==void 0?n.brightness:255,a=Math.max(.1,r/255);if(i){let o=new Ae(16766336);n?.rgb_color&&Array.isArray(n.rgb_color)&&n.rgb_color.length===3&&o.setRGB(n.rgb_color[0]/255,n.rgb_color[1]/255,n.rgb_color[2]/255),this.applianceLampShade.material.emissive.copy(o),this.applianceLampShade.material.emissiveIntensity=2.4*a,this.applianceLampLight.color.copy(o),this.applianceLampLight.intensity=3.6*a}else this.applianceLampShade.material.emissive.setHex(0),this.applianceLampShade.material.emissiveIntensity=0,this.applianceLampLight.intensity=0}}initAppliancesAndFurniture(){this.appliancesGroup=new _t,this.scene.add(this.appliancesGroup);let e=new _t;e.position.set(2.45,0,-6.65),e.rotation.y=Math.PI;let t=new Ue(.7,1.84,.65),n=new ve({color:3028032,metalness:.82,roughness:.28}),i=new te(t,n);i.position.y=.92,i.castShadow=!0,i.receiveShadow=!0,e.add(i);let r=new wt(.012,.012,.55,12),a=new ve({color:14212841,metalness:.95,roughness:.15}),o=new te(r,a);o.position.set(-.06,1.28,.34);let l=new te(r,a);l.position.set(.06,1.28,.34),e.add(o),e.add(l);let c=new wt(.012,.012,.48,12),h=new te(c,a);h.rotation.z=Math.PI/2,h.position.set(0,.65,.34),e.add(h);let u=new Gn(.12,.18),d=new St({color:58879,side:Dt}),f=new te(u,d);f.position.set(-.16,1.35,.33),e.add(f),this.appliancesGroup.add(e),this.applianceFridge=e;let g=new _t;g.position.set(3.38,1.35,-3.1);let x=new Ue(.038,.72,1.22),m=new ve({color:988970,roughness:.4,metalness:.6}),p=new te(x,m);g.add(p);let y=new Ue(.01,.67,1.17),E=new ve({color:131845,roughness:.12,metalness:.2,emissive:0,emissiveIntensity:0});this.applianceTvScreen=new te(y,E),this.applianceTvScreen.position.x=-.016,g.add(this.applianceTvScreen);let b=new Nn(.007,8,8);this.applianceTvLed=new te(b,new St({color:15680580})),this.applianceTvLed.position.set(-.022,-.34,.54),g.add(this.applianceTvLed),this.applianceTvLight=new Sn(7382527,0,3.8,1.6),this.applianceTvLight.position.set(3.18,1.35,-3.1),this.appliancesGroup.add(this.applianceTvLight),this.appliancesGroup.add(g),this.applianceTv=g;let T=document.createElement("div");T.style.width="640px",T.style.height="366px",T.style.backgroundColor="#000000",T.style.overflow="hidden",T.style.borderRadius="3px",T.style.backfaceVisibility="hidden",T.style.webkitBackfaceVisibility="hidden";let A=document.createElement("iframe");A.id="tv-youtube-iframe",A.style.width="100%",A.style.height="100%",A.style.border="none",A.style.pointerEvents="auto",A.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",A.referrerPolicy="strict-origin-when-cross-origin",A.setAttribute("allowfullscreen","true"),T.appendChild(A),this.tvIframe=A,this.tvIframeContainer=T,this.isTvMuted=!0,this.isTvPlaying=!1,this.tvCss3dObject=new gl(T),this.tvCss3dObject.position.set(3.352,1.35,-3.1),this.tvCss3dObject.rotation.y=-Math.PI/2;let _=1.17/640;this.tvCss3dObject.scale.set(_,_,_),this.tvCss3dObject.visible=!1,this.css3dScene.add(this.tvCss3dObject);let M=new _t;M.position.set(.6,0,-.65);let D=new wt(.18,.18,.025,24),P=new ve({color:12884822,metalness:.85,roughness:.25}),N=new te(D,P);N.position.y=.0125,M.add(N);let U=new wt(.014,.014,1.55,16),V=new te(U,P);V.position.y=.775,M.add(V);let L=new wt(.18,.22,.28,24),W=new ve({color:16708551,roughness:.85,side:Dt,emissive:0,emissiveIntensity:0});this.applianceLampShade=new te(L,W),this.applianceLampShade.position.y=1.55,M.add(this.applianceLampShade),this.applianceLampLight=new Sn(16769706,0,5,1.2),this.applianceLampLight.position.set(.6,1.58,-.65),this.appliancesGroup.add(this.applianceLampLight),this.appliancesGroup.add(M),this.applianceLamp=M;let G=new _t;G.position.set(2.15,0,-8.2);let X=new Ue(.58,.85,.58),ee=new ve({color:15857145,roughness:.35,metalness:.25}),q=new te(X,ee);q.position.y=.425,q.castShadow=!0,q.receiveShadow=!0,G.add(q);let Y=new Fs(.19,.024,16,36),O=new ve({color:9741240,metalness:.9,roughness:.18}),ne=new te(Y,O);ne.position.set(0,.42,.295),G.add(ne);let Se=new Dr(.175,32),K=new ve({color:988970,roughness:.1,metalness:.6,transparent:!0,opacity:.85,side:Dt});this.applianceWasherGlass=new te(Se,K),this.applianceWasherGlass.position.set(0,.42,.298),G.add(this.applianceWasherGlass);let fe=new Fs(.14,.012,12,28),we=new te(fe,O);we.position.set(0,.42,.296),G.add(we);let Ee=new Gn(.54,.14),_e=new ve({color:1976635,roughness:.4,metalness:.5,side:Dt}),ze=new te(Ee,_e);ze.position.set(0,.74,.295),G.add(ze);let vt=new Ue(.14,.08,.015),He=new ve({color:14870768,roughness:.3}),st=new te(vt,He);st.position.set(-.17,.74,.3),G.add(st);let ht=new wt(.032,.032,.018,20),Je=new te(ht,O);Je.rotation.x=Math.PI/2,Je.position.set(0,.74,.302),G.add(Je);let rt=new Gn(.12,.05),Le=new St({color:62875,side:Dt});this.applianceWasherDisplay=new te(rt,Le),this.applianceWasherDisplay.position.set(.17,.74,.302),G.add(this.applianceWasherDisplay);let Pe=new Nn(.006,8,8);this.applianceWasherLed=new te(Pe,new St({color:6583435})),this.applianceWasherLed.position.set(.24,.77,.304),G.add(this.applianceWasherLed),this.applianceWasherLight=new Sn(62875,0,2,1.4),this.applianceWasherLight.position.set(2.15,.45,-7.95),this.appliancesGroup.add(this.applianceWasherLight),this.appliancesGroup.add(G),this.applianceWasher=G;let ge=new _t,Te=new ve({color:3359061,roughness:.85,metalness:.05}),Ne=new ve({color:4674921,roughness:.8,metalness:.02}),Ze=new ve({color:14251782,roughness:.7}),Nt=new ve({color:15857145,roughness:.8}),$t=new ve({color:988970,roughness:.6}),F=new te(new Ue(.88,.22,2.1),Te);F.position.set(.99,.17,-3.05),F.castShadow=!0,F.receiveShadow=!0,ge.add(F);let Kt=new te(new Ue(.95,.22,.88),Te);Kt.position.set(1.905,.17,-3.66),Kt.castShadow=!0,Kt.receiveShadow=!0,ge.add(Kt);let ft=new te(new Ue(.2,.46,2.1),Te);ft.position.set(.65,.51,-3.05),ft.castShadow=!0,ft.receiveShadow=!0,ge.add(ft);let pt=new te(new Ue(.95,.46,.2),Te);pt.position.set(1.905,.51,-4),pt.castShadow=!0,pt.receiveShadow=!0,ge.add(pt);let me=new te(new Ue(.88,.38,.16),Te);me.position.set(.99,.41,-2),me.castShadow=!0,me.receiveShadow=!0,ge.add(me);let bt=new te(new Ue(.16,.38,.88),Te);bt.position.set(2.38,.41,-3.66),bt.castShadow=!0,bt.receiveShadow=!0,ge.add(bt);let Be=new te(new Ue(.66,.13,.92),Ne);Be.position.set(1.1,.345,-2.55),Be.castShadow=!0,ge.add(Be);let Ge=new te(new Ue(.66,.13,.92),Ne);Ge.position.set(1.1,.345,-3.49),Ge.castShadow=!0,ge.add(Ge);let R=new te(new Ue(.93,.13,.66),Ne);R.position.set(1.905,.345,-3.56),R.castShadow=!0,ge.add(R);let v=new te(new Ue(.32,.3,.1),Ze);v.position.set(.82,.52,-2.18),v.rotation.y=.25,ge.add(v);let k=new te(new Ue(.32,.3,.1),Nt);k.position.set(.84,.52,-3.88),k.rotation.y=.78,ge.add(k);let ie=new te(new Ue(.3,.28,.1),Ze);ie.position.set(2.22,.52,-3.68),ie.rotation.y=1.35,ge.add(ie);let Q=[[.6,-2],[1.38,-2],[.6,-4.05],[2.35,-4.05],[2.35,-3.25],[1.38,-3.25]];for(let[re,qe]of Q){let ke=new te(new wt(.025,.025,.06,8),$t);ke.position.set(re,.03,qe),ge.add(ke)}this.appliancesGroup.add(ge),this.couchGroup=ge;let ae=new _t,ue=new ve({color:10120007,roughness:.45,metalness:.08}),Z=new ve({color:3359061,roughness:.8}),J=new te(new Ue(1.4,.045,.85),ue);J.position.set(4.3,.73,-7.4),J.castShadow=!0,J.receiveShadow=!0,ae.add(J);let de=[[-.62,-.36],[.62,-.36],[-.62,.36],[.62,.36]];for(let[re,qe]of de){let ke=new te(new Ue(.05,.71,.05),ue);ke.position.set(4.3+re,.355,-7.4+qe),ke.castShadow=!0,ae.add(ke)}let C=[{x:4.02,z:-7.4-.52,rotY:0},{x:4.58,z:-7.4-.52,rotY:0},{x:4.02,z:-7.4+.52,rotY:Math.PI},{x:4.58,z:-7.4+.52,rotY:Math.PI}];for(let re of C){let qe=new _t;qe.position.set(re.x,0,re.z),qe.rotation.y=re.rotY;let ke=new te(new Ue(.38,.04,.38),Z);ke.position.y=.44,ke.castShadow=!0,qe.add(ke);let on=new te(new Ue(.38,.38,.035),Z);on.position.set(0,.66,-.17),on.castShadow=!0,qe.add(on);let Wt=[[-.16,-.16],[.16,-.16],[-.16,.16],[.16,.16]];for(let[ss,Un]of Wt){let Bn=new te(new wt(.015,.015,.42,6),ue);Bn.position.set(ss,.21,Un),qe.add(Bn)}ae.add(qe)}this.appliancesGroup.add(ae),this.diningTable=ae,this.upstairsFurnitureGroup=new _t,this.scene.add(this.upstairsFurnitureGroup);let j=2.52,$=new _t;$.position.set(.55,j,-2.15);let ce=new ve({color:1976635,roughness:.6}),oe=new ve({color:1976635,roughness:.7}),le=new ve({color:16317180,roughness:.85}),Fe=new ve({color:4674921,roughness:.75}),$e=new ve({color:16777215,roughness:.8}),se=new te(new Ue(.08,.95,1.62),oe);se.position.set(.04,.52,0),se.castShadow=!0,$.add(se);let Oe=new te(new Ue(1.95,.28,1.55),ce);Oe.position.set(1.015,.14,0),Oe.castShadow=!0,$.add(Oe);let Ke=new te(new Ue(1.9,.2,1.48),le);Ke.position.set(1.02,.38,0),Ke.castShadow=!0,$.add(Ke);let xe=new te(new Ue(1.42,.09,1.52),Fe);xe.position.set(1.26,.485,0),xe.castShadow=!0,$.add(xe);let lt=new te(new Ue(.38,.12,.58),$e);lt.position.set(.28,.51,-.34),$.add(lt);let Rt=new te(new Ue(.38,.12,.58),$e);Rt.position.set(.28,.51,.34),$.add(Rt);for(let re of[-.98,.98]){let qe=new te(new Ue(.4,.44,.38),ce);qe.position.set(.22,.22,re),$.add(qe);let ke=new te(new wt(.06,.08,.03,12),new ve({color:14251782}));ke.position.set(.22,.455,re),$.add(ke);let on=new te(new wt(.08,.11,.16,12),new ve({color:16772565}));on.position.set(.22,.58,re),$.add(on)}this.upstairsFurnitureGroup.add($);let Gt=new _t;Gt.position.set(.55,j,-7.3);let es=new ve({color:3359061,roughness:.6}),er=new ve({color:5073243,roughness:.75}),tr=new te(new Ue(.08,.88,1.5),es);tr.position.set(.04,.48,0),tr.castShadow=!0,Gt.add(tr);let ts=new te(new Ue(1.9,.26,1.44),es);ts.position.set(.99,.13,0),ts.castShadow=!0,Gt.add(ts);let ns=new te(new Ue(1.85,.18,1.38),le);ns.position.set(1,.35,0),ns.castShadow=!0,Gt.add(ns);let Tn=new te(new Ue(1.38,.08,1.42),er);Tn.position.set(1.23,.445,0),Tn.castShadow=!0,Gt.add(Tn);let is=new te(new Ue(.36,.11,.52),$e);is.position.set(.27,.47,-.32),Gt.add(is);let nr=new te(new Ue(.36,.11,.52),$e);nr.position.set(.27,.47,.32),Gt.add(nr);let ir=new te(new Ue(.38,.42,.36),es);ir.position.set(.22,.21,.92),Gt.add(ir),this.upstairsFurnitureGroup.add(Gt);let Lt=new _t;Lt.position.set(5.18,j,-7.3);let an=new ve({color:16317180,roughness:.35}),la=new ve({color:16777215,roughness:.8}),Fi=new ve({color:16707722,roughness:.7}),wl=[[0,-.58],[-.64,-.58],[0,.58],[-.64,.58]];for(let[re,qe]of wl){let ke=new te(new Ue(.04,.82,.04),an);ke.position.set(re,.41,qe),ke.castShadow=!0,Lt.add(ke)}let sr=new te(new Ue(.035,.035,1.2),an);sr.position.set(0,.8,0),Lt.add(sr);let rr=new te(new Ue(.035,.035,1.2),an);rr.position.set(-.64,.8,0),Lt.add(rr);let ca=new te(new Ue(.6,.035,.035),an);ca.position.set(-.32,.8,-.58),Lt.add(ca);let ha=new te(new Ue(.6,.035,.035),an);ha.position.set(-.32,.8,.58),Lt.add(ha);let ua=new te(new Ue(.035,.035,1.2),an);ua.position.set(0,.22,0),Lt.add(ua);let ar=new te(new Ue(.035,.035,1.2),an);ar.position.set(-.64,.22,0),Lt.add(ar);for(let re=-.5;re<=.5;re+=.1){let qe=new te(new wt(.007,.007,.55,6),an);qe.position.set(-.64,.51,re),Lt.add(qe)}for(let re=-.5;re<=.5;re+=.1){let qe=new te(new wt(.007,.007,.55,6),an);qe.position.set(0,.51,re),Lt.add(qe)}for(let re=-.52;re<=-.1;re+=.1){let qe=new te(new wt(.007,.007,.55,6),an);qe.position.set(re,.51,-.58),Lt.add(qe);let ke=new te(new wt(.007,.007,.55,6),an);ke.position.set(re,.51,.58),Lt.add(ke)}let S=new te(new Ue(.6,.1,1.14),la);S.position.set(-.32,.27,0),S.castShadow=!0,Lt.add(S);let I=new te(new Ue(.61,.03,.76),Fi);I.position.set(-.32,.33,.19),I.castShadow=!0,Lt.add(I),this.upstairsFurnitureGroup.add(Lt);let z=new _t;z.position.set(5.73,1.75,-.5),z.rotation.y=Math.PI/2;let B=new te(new Ue(.44,.58,.16),new ve({color:16317180,roughness:.35,metalness:.2}));B.castShadow=!0,B.receiveShadow=!0,z.add(B);let H=new te(new Ue(.42,.54,.04),new ve({color:3359061,roughness:.6,metalness:.8}));H.position.z=-.09,z.add(H);let pe=new te(new Ue(.38,.22,.01),new ve({color:659229,roughness:.1,metalness:.8}));pe.position.set(0,.08,.085),z.add(pe);let Re=new te(new Ue(.38,.014,.012),new ve({color:15680580,roughness:.4}));Re.position.set(0,-.035,.086),z.add(Re);let he=new te(new Gn(.18,.07),new St({color:165063}));he.position.set(0,.08,.092),z.add(he),this.applianceInverterScreen=he;let be=new te(new Nn(.007,8,8),new St({color:62875}));be.position.set(-.11,.01,.093),z.add(be),this.applianceInverterLed=be;let Ie=new te(new Nn(.007,8,8),new St({color:3718648}));Ie.position.set(-.06,.01,.093),z.add(Ie);let Xe=new te(new Ue(.06,.06,.02),new ve({color:16096779,roughness:.5}));Xe.position.set(.24,-.16,.02),z.add(Xe);let Qe=new te(new wt(.022,.022,.025,12),new ve({color:15680580,roughness:.4}));Qe.rotation.z=Math.PI/2,Qe.position.set(.255,-.16,.02),z.add(Qe);for(let re of[-.06,.06]){let qe=new te(new wt(.015,.015,.04,8),new ve({color:988970,roughness:.5}));qe.position.set(re,.3,0),z.add(qe)}let Ce=new te(new wt(.018,.018,.04,8),new ve({color:988970,roughness:.5}));Ce.position.set(0,-.3,0),z.add(Ce),this.appliancesGroup.add(z),this.applianceInverter=z;let tt=this.energyFlow?.paths?.solar||new Dn([new w(2.5,6.45,-6.5),new w(4.1,6.55,-6.5),new w(5.63,6.55,-6.5),new w(5.63,5.2,-4.5),new w(5.63,3.8,-2.5),new w(5.63,2.6,-1),new w(5.63,2.05,-.5),new w(5.63,1.75,-.5),new w(5.63,1.4,-.5),new w(5.5,1.25,-.75)]),Tt=new Ur(tt,84,.016,8,!1),gt=new ve({color:1976635,roughness:.45,metalness:.2}),ct=new te(Tt,gt);ct.name="Solar_PV_Cabling_Wall",ct.castShadow=!0,this.appliancesGroup.add(ct),this.solarCableConduit=ct;let Vt=new ve({color:6583435,roughness:.3,metalness:.8});for(let re=.3;re<=.88;re+=.08){let qe=tt.getPointAt(re),ke=new te(new Ue(.018,.04,.045),Vt);ke.position.set(5.64,qe.y,qe.z),this.appliancesGroup.add(ke)}}updateAppliances(e){if(e){if(this.applianceInverterLed&&this.applianceInverterScreen&&(Number(this.currentEnergyData?.solar?.power_kw||0)>.04?(this.applianceInverterLed.material.color.setHex(62875),this.applianceInverterScreen.material.color.setHex(165063)):(this.applianceInverterLed.material.color.setHex(6583435),this.applianceInverterScreen.material.color.setHex(661807))),this.applianceTvScreen&&this.applianceTvLight){let t=!!(e.tv?.is_on||e.tv?.state==="on");if(this.isTvPlaying=t,t){this.applianceTvScreen.material.emissive.setHex(6072565),this.applianceTvScreen.material.emissiveIntensity=1.8,this.applianceTvLight.intensity=1.6,this.applianceTvLed&&this.applianceTvLed.material.color.setHex(2278750);let n="https://www.youtube.com/embed/-m0iWqgyvKQ?autoplay=1&mute=1&loop=1&playlist=-m0iWqgyvKQ&enablejsapi=1";this.tvIframe&&(!this.tvIframe.src||!this.tvIframe.src.includes("-m0iWqgyvKQ"))&&(this.tvIframe.src=n)}else this.applianceTvScreen.material.emissive.setHex(0),this.applianceTvScreen.material.emissiveIntensity=0,this.applianceTvLight.intensity=0,this.applianceTvLed&&this.applianceTvLed.material.color.setHex(15680580),this.tvIframe&&this.tvIframe.src&&(this.tvIframe.src=""),this.tvCss3dObject&&(this.tvCss3dObject.visible=!1)}if(this.applianceWasher&&this.applianceWasherLight){let t=e.washer||{};!!(t.is_active||t.power_w&&t.power_w>10)?(this.applianceWasherLed&&this.applianceWasherLed.material.color.setHex(2278750),this.applianceWasherDisplay&&this.applianceWasherDisplay.material.color.setHex(62875),this.applianceWasherGlass&&(this.applianceWasherGlass.material.emissive.setHex(62875),this.applianceWasherGlass.material.emissiveIntensity=.8),this.applianceWasherLight.intensity=1.4):(this.applianceWasherLed&&this.applianceWasherLed.material.color.setHex(6583435),this.applianceWasherDisplay&&this.applianceWasherDisplay.material.color.setHex(3359061),this.applianceWasherGlass&&(this.applianceWasherGlass.material.emissive.setHex(0),this.applianceWasherGlass.material.emissiveIntensity=0),this.applianceWasherLight.intensity=0)}}}toggleTvAudio(){if(!this.tvIframe||!this.tvIframe.contentWindow)return!1;this.isTvMuted=!this.isTvMuted;let e=this.isTvMuted?"mute":"unMute";return this.tvIframe.contentWindow.postMessage(JSON.stringify({event:"command",func:e,args:""}),"*"),!this.isTvMuted}setRoomLightState(e,t,n=255,i=null){let r=this.roomLights[e];if(r)if(r.isOn=t,r.brightness=n,t){r.shadeMesh&&(r.shadeMesh.visible=!1);let a=Math.max(.2,Math.min(1,n/255));Array.isArray(i)&&i.length===3?r.light.color.setRGB(i[0]/255,i[1]/255,i[2]/255):r.light.color.setHex(r.config.defaultColor);let o=this.nightMode?1.4:1;r.light.intensity=r.config.maxIntensity*a*o,r.fixture.material.emissive.copy(r.light.color).multiplyScalar(a*2.8),r.fixture.material.color.setHex(16777215)}else r.shadeMesh&&(r.shadeMesh.visible=!0),r.light.intensity=0,r.fixture.material.emissive.setHex(657930),r.fixture.material.color.setHex(2236962)}applyLightingMode(){this.nightMode?(this.scene.background=new Ae(329745),"environmentIntensity"in this.scene&&(this.scene.environmentIntensity=.1),this.ambientLight.intensity=.05,this.sunLight.intensity=.08,this.sunLight.color.setHex(2636638),this.hemiLight.intensity=.06,this.meterPointLight.intensity=1.2,this.carPointLight.intensity=1.2):(this.scene.background=new Ae(922660),"environmentIntensity"in this.scene&&(this.scene.environmentIntensity=.55),this.ambientLight.intensity=.12,this.sunLight.intensity=1.45,this.sunLight.color.setHex(16774630),this.hemiLight.intensity=.18,this.meterPointLight.intensity=.4,this.carPointLight.intensity=.4)}setNightMode(e){this.nightMode=e,this.applyLightingMode(),this.lastLightsData&&this.updateRoomLights(this.lastLightsData)}generateNormalMap(e,t=2.5){if(typeof document>"u")return null;try{let n=e.width,i=e.height,o=e.getContext("2d").getImageData(0,0,n,i).data,l=document.createElement("canvas");l.width=n,l.height=i;let c=l.getContext("2d"),h=c.createImageData(n,i),u=h.data;for(let d=0;d<i;d++){let f=(d-1+i)%i,g=(d+1)%i;for(let x=0;x<n;x++){let m=(x-1+n)%n,p=(x+1)%n,y=o[(d*n+m)*4]/255,E=o[(d*n+p)*4]/255,b=o[(f*n+x)*4]/255,T=o[(g*n+x)*4]/255,A=(E-y)*t,_=(T-b)*t,M=1,D=Math.hypot(A,_,M),P=-A/D,N=-_/D,U=M/D,V=(d*n+x)*4;u[V]=Math.round((P*.5+.5)*255),u[V+1]=Math.round((N*.5+.5)*255),u[V+2]=Math.round((U*.5+.5)*255),u[V+3]=255}}return c.putImageData(h,0,0),l}catch(n){return console.warn("Normal map generation error:",n),null}}createRealisticTextures(){if(typeof document>"u")return null;try{let e=(Le,Pe)=>{let ge=document.createElement("canvas");return ge.width=Le,ge.height=Pe,ge},t=e(512,512),n=t.getContext("2d"),i=e(512,512),r=i.getContext("2d");n.fillStyle="#dde0e5",n.fillRect(0,0,512,512),r.fillStyle="#808080",r.fillRect(0,0,512,512);for(let Le=0;Le<8;Le++){let Pe=Math.random()*512,ge=Math.random()*512,Te=80+Math.random()*120,Ne=n.createRadialGradient(Pe,ge,10,Pe,ge,Te);Ne.addColorStop(0,Math.random()>.5?"rgba(215, 220, 228, 0.45)":"rgba(240, 244, 250, 0.55)"),Ne.addColorStop(1,"rgba(221, 224, 229, 0)"),n.fillStyle=Ne,n.beginPath(),n.arc(Pe,ge,Te,0,Math.PI*2),n.fill()}for(let Le=0;Le<15e3;Le++){let Pe=Math.random()*512,ge=Math.random()*512,Te=Math.random();Te<.35?(n.fillStyle="rgba(195, 200, 210, 0.35)",r.fillStyle="#505050"):Te<.7?(n.fillStyle="rgba(255, 255, 255, 0.7)",r.fillStyle="#b8b8b8"):(n.fillStyle="rgba(225, 220, 210, 0.4)",r.fillStyle="#909090"),n.fillRect(Pe,ge,1.2,1.2),r.fillRect(Pe,ge,1.2,1.2)}let a=["#d8dbe0","#c5cad2","#ffffff","#e8e4dc","#b0b6c2","#f0f2f5"];for(let Le=0;Le<2800;Le++){let Pe=Math.random()*512,ge=Math.random()*512,Te=1.8+Math.random()*2.2,Ne=1.8+Math.random()*2.2,Ze=a[Math.floor(Math.random()*a.length)];n.fillStyle=Ze,n.fillRect(Pe,ge,Te,Ne),r.fillStyle="#e5e5e5",r.fillRect(Pe,ge,Te,Ne),r.fillStyle="#383838",r.fillRect(Pe+Te*.5,ge+Ne*.5,Te*.6,Ne*.6)}let o=e(512,512),l=o.getContext("2d"),c=e(512,512),h=c.getContext("2d");l.fillStyle="#1c2026",l.fillRect(0,0,512,512),h.fillStyle="#111111",h.fillRect(0,0,512,512);let u=10,d=512/u,f=512/6,g=["#272b33","#2e333d","#22252c","#343a44","#2a2f37"];for(let Le=0;Le<u;Le++){let Pe=Le*d,ge=Le%2===0?0:-f/2;for(let Te=ge-f;Te<512+f;Te+=f){let Ne=g[Math.floor(Math.random()*g.length)];l.fillStyle=Ne,l.fillRect(Te+1,Pe,f-2,d);for(let Nt=0;Nt<12;Nt++)l.fillStyle="rgba(255, 255, 255, 0.04)",l.fillRect(Te+Math.random()*f,Pe,1,d);l.fillStyle="rgba(0, 0, 0, 0.35)",l.fillRect(Te,Pe+d-2.5,f,2.5);let Ze=h.createLinearGradient(Te,Pe,Te,Pe+d);Ze.addColorStop(0,"#555555"),Ze.addColorStop(.9,"#eeeeee"),Ze.addColorStop(1,"#111111"),h.fillStyle=Ze,h.fillRect(Te+1,Pe,f-2,d)}}let x=e(512,512),m=x.getContext("2d"),p=e(512,512),y=p.getContext("2d");m.fillStyle="#c49760",m.fillRect(0,0,512,512),y.fillStyle="#222222",y.fillRect(0,0,512,512);let E=6,b=512/E,T=["#caa06a","#be925b","#d3a973","#b68953","#cf9f67"];for(let Le=0;Le<E;Le++){let Pe=Le*b,Te=512/4,Ne=Le*73%Te;for(let Ze=-Ne;Ze<512+Te;Ze+=Te){let Nt=T[Math.floor(Math.random()*T.length)];m.fillStyle=Nt,m.fillRect(Pe+1.5,Ze+1.5,b-3,Te-3);for(let $t=0;$t<15;$t++){let F=Pe+Math.random()*b;m.fillStyle="rgba(70, 45, 18, 0.07)",m.fillRect(F,Ze,1,Te)}m.fillStyle="rgba(45, 25, 10, 0.4)",m.fillRect(Pe,Ze,b,1.5),m.fillRect(Pe,Ze,1.5,Te),y.fillStyle="#dcdcdc",y.fillRect(Pe+1.5,Ze+1.5,b-3,Te-3),y.fillStyle="#111111",y.fillRect(Pe,Ze,b,1.5),y.fillRect(Pe,Ze,1.5,Te)}}let A=e(512,512),_=A.getContext("2d"),M=e(512,512),D=M.getContext("2d");_.fillStyle="#9ca3af",_.fillRect(0,0,512,512),D.fillStyle="#151515",D.fillRect(0,0,512,512);let P=4,N=512/P,U=4;for(let Le=0;Le<P;Le++)for(let Pe=0;Pe<P;Pe++){let ge=Le*N+U/2,Te=Pe*N+U/2,Ne=N-U;_.fillStyle="#f4f3ee",_.fillRect(ge,Te,Ne,Ne);for(let Ze=0;Ze<3;Ze++)_.beginPath(),_.moveTo(ge+Math.random()*Ne,Te+Math.random()*Ne),_.bezierCurveTo(ge+Math.random()*Ne,Te+Math.random()*Ne,ge+Math.random()*Ne,Te+Math.random()*Ne,ge+Math.random()*Ne,Te+Math.random()*Ne),_.strokeStyle="rgba(190, 185, 175, 0.28)",_.lineWidth=2+Math.random()*2,_.stroke();D.fillStyle="#f0f0f0",D.fillRect(ge,Te,Ne,Ne)}let V=e(256,256),L=V.getContext("2d");L.fillStyle="#d3cbc2",L.fillRect(0,0,256,256);for(let Le=0;Le<256;Le+=4)for(let Pe=0;Pe<256;Pe+=4){let ge=Math.random();L.fillStyle=ge>.6?"#ded8cf":ge<.3?"#b8afa4":"#c9c1b7",L.fillRect(Pe,Le,3,3)}let W=e(512,512),G=W.getContext("2d"),X=e(512,512),ee=X.getContext("2d");G.fillStyle="#374151",G.fillRect(0,0,512,512),ee.fillStyle="#111111",ee.fillRect(0,0,512,512);let q=12,Y=512/q,O=512/6,ne=["#5b626e","#666e7b","#4f5661","#737a88"];for(let Le=0;Le<q;Le++){let Pe=Le*Y,ge=Le%2===0?0:-O/2;for(let Te=ge-O;Te<512+O;Te+=O){let Ne=ne[Math.floor(Math.random()*ne.length)];G.fillStyle=Ne,G.fillRect(Te+2,Pe+2,O-4,Y-4),ee.fillStyle="#e0e0e0",ee.fillRect(Te+2,Pe+2,O-4,Y-4)}}let Se=e(256,256),K=Se.getContext("2d");K.fillStyle="#3d7a2e",K.fillRect(0,0,256,256);let fe=["#4a9037","#356d27","#5bb044","#2e5d22"];for(let Le=0;Le<4e3;Le++){let Pe=Math.random()*256,ge=Math.random()*256;K.fillStyle=fe[Math.floor(Math.random()*fe.length)],K.fillRect(Pe,ge,1.5,2.5)}let we=e(512,512),Ee=we.getContext("2d");Ee.fillStyle="#08101e",Ee.fillRect(0,0,512,512);let _e=6,ze=512/_e;for(let Le=0;Le<_e;Le++)for(let Pe=0;Pe<_e;Pe++){let ge=Le*ze+1.5,Te=Pe*ze+1.5,Ne=ze-3;Ee.fillStyle="#0e1b30",Ee.fillRect(ge,Te,Ne,Ne),Ee.strokeStyle="rgba(220, 230, 245, 0.45)",Ee.lineWidth=1;for(let Ze of[ge+Ne*.25,ge+Ne*.5,ge+Ne*.75])Ee.beginPath(),Ee.moveTo(Ze,Te),Ee.lineTo(Ze,Te+Ne),Ee.stroke();Ee.strokeStyle="rgba(180, 200, 230, 0.12)";for(let Ze=Te+4;Ze<Te+Ne;Ze+=5)Ee.beginPath(),Ee.moveTo(ge,Ze),Ee.lineTo(ge+Ne,Ze),Ee.stroke()}let vt=this.generateNormalMap(i,3.2),He=this.generateNormalMap(c,2.6),st=this.generateNormalMap(p,2.2),ht=this.generateNormalMap(M,2.4),Je=this.generateNormalMap(X,2.8),rt=(Le,Pe,ge)=>{if(!Le)return null;let Te=new Ns(Le);return Te.wrapS=Pn,Te.wrapT=Pn,Te.repeat.set(Pe,ge),Te};return{roughcastMap:rt(t,6,6),roughcastNormal:rt(vt,6,6),roofMap:rt(o,5,5),roofNormal:rt(He,5,5),woodMap:rt(x,3,3),woodNormal:rt(st,3,3),tileMap:rt(A,3,3),tileNormal:rt(ht,3,3),carpetMap:rt(V,4,4),pavingMap:rt(W,4,4),pavingNormal:rt(Je,4,4),grassMap:rt(Se,6,6),solarMap:rt(we,2,2)}}catch(e){return console.warn("Procedural texture generation error:",e),null}}applyRealisticMaterials(e){if(!e)return;let t=this.createRealisticTextures();e.traverse(n=>{if(!n.isMesh)return;let i=n.name;i.includes("Exterior_Walls")||i.includes("Separating_Party_Wall")?t&&(n.material=new ve({map:t.roughcastMap,normalMap:t.roughcastNormal,normalScale:new ye(1.8,1.8),roughness:.94,metalness:.02})):i.includes("Roof_Main")?t&&(n.material=new ve({map:t.roofMap,normalMap:t.roofNormal,normalScale:new ye(1.5,1.5),roughness:.78,metalness:.12})):i.includes("Roof_Ridge_Tiles")?n.material=new ve({color:2237997,roughness:.8,metalness:.1}):i.includes("Roof_Solar_Panels")?n.material=new It({map:t?.solarMap,color:660516,roughness:.08,metalness:.92,clearcoat:1,clearcoatRoughness:.04}):i.includes("Ground_Floor_Wood_Floor")?t&&(n.material=new ve({map:t.woodMap,normalMap:t.woodNormal,normalScale:new ye(1.2,1.2),roughness:.3,metalness:.04})):i.includes("Ground_Floor_Tile_Floor")||i.includes("First_Floor_Tiles")?t&&(n.material=new ve({map:t.tileMap,normalMap:t.tileNormal,normalScale:new ye(1.2,1.2),roughness:.18,metalness:.08})):i.includes("Carpet_")||i.includes("Landing_Carpet")?t&&(n.material=new ve({map:t.carpetMap,roughness:.96,metalness:.02})):i.includes("Interior_Walls_")?n.material=new ve({color:16053493,roughness:.88,metalness:.02}):i.includes("First_Floor_Ceiling")?n.material=new ve({color:16448250,roughness:.92,metalness:.01}):i.includes("Windows_Frames")||i.includes("Rear_French_Doors")?n.material=new ve({color:15857145,roughness:.35,metalness:.1}):i.includes("Windows_Glass")?n.material=new It({color:10863848,transmission:.88,roughness:.03,metalness:.12,ior:1.52,transparent:!0,opacity:.25,depthWrite:!1}):i.includes("Front_Entrance_Door")?n.material=new ve({color:1976635,roughness:.32,metalness:.15}):i.includes("Driveway")?t&&(n.material=new ve({map:t.pavingMap,normalMap:t.pavingNormal,normalScale:new ye(1.5,1.5),roughness:.78,metalness:.05})):i.includes("Landscape_Grass")?t&&(n.material=new ve({map:t.grassMap,roughness:.88,metalness:.02})):i.includes("Landscape_Paving")?t&&(n.material=new ve({map:t.pavingMap,roughness:.82,metalness:.05})):i.includes("Landscape_Fencing")?n.material=new ve({color:9132587,roughness:.75,metalness:.05}):i.includes("Fascia_and_Soffits")||i.includes("Rainwater_Gutters")?n.material=new ve({color:2042167,roughness:.35,metalness:.2}):i.includes("Car_Peugeot_e2008_Body")?n.material=new It({color:1920728,metalness:.88,roughness:.18,clearcoat:1,clearcoatRoughness:.06}):i.includes("Car_Peugeot_e2008_Trim")?n.material=new ve({color:988970,roughness:.12,metalness:.4}):i.includes("Car_Peugeot_e2008_Glass")?n.material=new It({color:1976635,transmission:.85,roughness:.05,metalness:.1,transparent:!0,opacity:.35}):i.includes("Car_Peugeot_e2008_Wheels")?n.material=new ve({color:14870768,metalness:.95,roughness:.12}):i.includes("Car_Peugeot_e2008_Tires")?n.material=new ve({color:1580068,roughness:.92,metalness:.02}):i.includes("Car_Peugeot_e2008_Lights")?n.material=new ve({color:16777215,emissive:16777215,emissiveIntensity:.45,roughness:.1}):i.includes("Car_Peugeot_e2008_Taillights")?n.material=new ve({color:14427686,emissive:15680580,emissiveIntensity:.65,roughness:.2}):i.includes("EV_Charger")?n.material=new ve({color:16317180,roughness:.25,metalness:.15}):i.includes("EV_Charging_Cable")?n.material=new ve({color:1976635,roughness:.85,metalness:.05}):i.includes("Kitchen_Worktop")?n.material=new ve({color:1975344,roughness:.18,metalness:.15}):i.includes("Kitchen_Cabinets")?n.material=new ve({color:14078929,roughness:.4,metalness:.05}):i.includes("Kitchen_Sink_Hob")?n.material=new ve({color:2237998,roughness:.25,metalness:.85}):i.includes("Kitchen_Combi_Boiler")?n.material=new ve({color:16645629,roughness:.22,metalness:.1}):i.includes("Sanitaryware")?n.material=new ve({color:16777215,roughness:.12,metalness:.05}):i.includes("Staircase")?n.material=new ve({color:11897170,roughness:.42,metalness:.05}):i.includes("Interior_Doors")&&(n.material=new ve({color:16317180,roughness:.45,metalness:.05}))})}loadModelWithFallbacks(e){let t=[e,"Taylor_Wimpey_Blair.glb","./Taylor_Wimpey_Blair.glb","/local/ha-energy-3d/Taylor_Wimpey_Blair.glb","/hacsfiles/ha-energy-3d-card/Taylor_Wimpey_Blair.glb","https://raw.githubusercontent.com/aaronwatt91/ha-energy-3d-card/main/Taylor_Wimpey_Blair.glb"].filter(Boolean),n=[...new Set(t)],i=new fl,r=a=>{if(a>=n.length){console.error("All model fallback URLs failed to load.");return}let o=n[a];i.load(o,l=>{this.model=l.scene,this.applyRealisticMaterials(this.model),this.model.traverse(c=>{if(c.isMesh){if(c.name==="Solar_PV_Cabling"){c.visible=!1;return}c.castShadow=!0,c.receiveShadow=!0;let h=c.name;(h.includes("Roof_Main")||h.includes("Roof_Ridge_Tiles")||h.includes("First_Floor_Ceiling")||h.includes("Fascia_and_Soffits"))&&this.roofParts.push({mesh:c,originalMaterial:c.material,ghostMaterial:new ve({color:8956620,transparent:!0,opacity:.15,roughness:.2,metalness:.1,depthWrite:!1})}),(h.includes("Roof_")||h.includes("Fascia_and_Soffits")||h.includes("Rainwater_Gutters")||h.includes("First_Floor_")||h.includes("Interior_Walls_First")||h.includes("Landing_Carpet")||h.includes("Carpet_")||h.includes("Room_Labels_3D")||h.includes("Solar_PV_"))&&this.topFloorMeshes.push({mesh:c,originalMaterial:c.material}),(h.includes("Exterior_Walls")||h.includes("Separating_Party_Wall")||h.includes("Windows_")||h.includes("Front_Entrance_Door")||h.includes("Rear_French_Doors")||h.includes("Interior_Doors")||h.includes("Sanitaryware")||h.includes("Exterior_Hardware_Chrome")||h.includes("Solar_PV_Cabling"))&&this.cuttableMeshes.push(c),(h.includes("Exterior_Walls")||h.includes("Separating_Party_Wall")||h.includes("Interior_Walls_")||h.includes("First_Floor_")||h.includes("Roof_")||h.includes("Front_Entrance_Door"))&&this.occludingMeshes.push(c)}}),this.scene.add(this.model),this.energyFlow.bindMeshes(this.model),this.onModelLoaded&&this.onModelLoaded()},l=>{this.onProgress&&l.total&&this.onProgress(l.loaded/l.total)},l=>{console.warn(`Could not load GLB from ${o}, trying fallback...`,l),r(a+1)})};r(0)}setXRayRoof(e){this.xrayActive=e;for(let t of this.roofParts)t.mesh.material=e?t.ghostMaterial:t.originalMaterial}setCutawayMode(e){this.cutawayMode=e;let t=e==="downstairs";for(let n of this.topFloorMeshes)n.mesh.visible=!t;this.upstairsFurnitureGroup&&(this.upstairsFurnitureGroup.visible=!t);for(let n of this.cuttableMeshes)(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>{r&&(r.clippingPlanes=t?[this.downstairsClipPlane]:[],r.clipShadows=!0,r.needsUpdate=!0)});for(let[n,i]of Object.entries(this.roomLights))if((i.floor==="first"||i.config?.pos?.y>3)&&(i.container&&(i.container.visible=!t),i.fixture&&(i.fixture.visible=!t),i.shadeMesh&&(i.shadeMesh.visible=!t),i.light)){if(t)i.light.intensity=0;else if(i.isOn){let a=Math.max(.2,Math.min(1,(i.brightness||255)/255)),o=this.nightMode?1.4:1;i.light.intensity=(i.config?.maxIntensity||4)*a*o}}}setCameraPreset(e){let n={overview:{pos:new w(15,12,17),target:new w(2.5,2.5,0),xray:!1},solar:{pos:new w(9.2,2.4,.5),target:new w(5.73,1.75,-.5),xray:!1},meter:{pos:new w(7.2,2.3,.5),target:new w(5.28,1.3,-.85),xray:!0},boiler:{pos:new w(-3.8,3.2,-11.5),target:new w(0,1.4,-8),xray:!0},ev:{pos:new w(7.2,2.2,3.2),target:new w(5.2,.95,1),xray:!1},charger:{pos:new w(7.4,2.2,.4),target:new w(5.2,1.25,.05),xray:!1},downstairs:{pos:new w(2.8,11.5,4.2),target:new w(2.8,.8,-4.5),xray:!1},upstairs:{pos:new w(2.8,11.5,4),target:new w(2.8,3.8,-4.5),xray:!0},heating:{pos:new w(7.8,4.5,-2.5),target:new w(3.4,2.5,-3.5),xray:!0}}[e];n&&(this.targetCameraPos=n.pos.clone(),this.targetLookAt=n.target.clone(),e==="downstairs"?this.setCutawayMode("downstairs"):this.setCutawayMode("normal"),n.xray!==void 0&&n.xray!==this.xrayActive&&e!=="downstairs"&&this.setXRayRoof(n.xray))}updateEnergyData(e){this.currentEnergyData=e,e?.appliances&&this.updateAppliances(e.appliances)}getProjectedHotspots(){let e=this.container.clientWidth||800,t=this.container.clientHeight||500,n=e/2,i=t/2;return this.hotspots.filter(r=>!(this.cutawayMode==="downstairs"&&r.id==="thermostat_upstairs")).map(r=>{let a=r.pos.clone();a.project(this.camera);let o=a.z<1,l=a.x*n+n,c=-(a.y*i)+i;return{id:r.id,name:r.name,x:l,y:c,visible:o}})}onResize(){if(!this.container)return;let e=this.container.clientWidth||800,t=this.container.clientHeight||500;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.css3dRenderer&&this.css3dRenderer.setSize(e,t)}stopCameraAnimation(){(this.targetCameraPos||this.targetLookAt)&&(this.targetCameraPos=null,this.targetLookAt=null,this.onUserCameraInteraction&&this.onUserCameraInteraction())}animate(){if(!this.isRunning)return;requestAnimationFrame(this.animate);let e=this.clock.getDelta();if(this.targetCameraPos&&this.targetLookAt&&(this.camera.position.lerp(this.targetCameraPos,.06),this.controls.target.lerp(this.targetLookAt,.06),this.camera.position.distanceTo(this.targetCameraPos)<.05&&this.controls.target.distanceTo(this.targetLookAt)<.05&&(this.targetCameraPos=null,this.targetLookAt=null)),this.controls.update(),this.energyFlow&&this.energyFlow.update(e,this.currentEnergyData),this.renderer.render(this.scene,this.camera),this.tvCss3dObject)if(this.isTvPlaying){let t=this.camera.position.x<3.38,n=!1;if(t&&this.occludingMeshes&&this.occludingMeshes.length>0){let i=[new w(3.28,1.35,-3.1),new w(3.28,1.35,-2.75),new w(3.28,1.35,-3.45)],r=this.occludingMeshes.filter(o=>o.visible),a=!1;for(let o of i){let l=new w().subVectors(o,this.camera.position),c=l.length();l.normalize(),this.tvRaycaster.set(this.camera.position,l),this.tvRaycaster.near=.1,this.tvRaycaster.far=c;let h=this.tvRaycaster.intersectObjects(r,!1),u=!1;for(let d of h)if(!(this.cutawayMode==="downstairs"&&d.point.y>2.5)&&!(this.xrayActive&&this.roofParts.some(f=>f.mesh===d.object))&&d.distance<c-.35){u=!0;break}if(!u){a=!0;break}}n=!a}this.tvCss3dObject.visible=t&&!n}else this.tvCss3dObject.visible=!1;this.css3dRenderer&&this.css3dScene&&this.css3dRenderer.render(this.css3dScene,this.camera),this.onFrame&&this.onFrame()}destroy(){this.isRunning=!1,this.stopCameraAnimation(),window.removeEventListener("resize",this.handleResize),this.controls?.dispose(),this.tvIframe&&(this.tvIframe.src=""),this.css3dRenderer?.domElement?.parentElement&&this.css3dRenderer.domElement.parentElement.removeChild(this.css3dRenderer.domElement),this.renderer?.domElement?.parentElement&&this.renderer.domElement.parentElement.removeChild(this.renderer.domElement),this.renderer?.dispose()}};function Qs(s){let e=parseFloat(s);return isNaN(e)?0:Math.abs(e)>=20?e/1e3:e}function hf(s){let e=Number(s)||0;return Math.abs(e)<1?`${Math.round(e*1e3)} W`:`${e.toFixed(2)} kW`}function zx(s,e){let t=Math.abs(Number(s)||0),n=e?"Export ":"Import ";if(t<1){let i=Math.round(t*1e3);return`${n}${i} W`}return`${n}${t.toFixed(2)} kW`}function uf(s){let e=Number(s)||0;return Math.abs(e)<1?{value:Math.round(e*1e3).toString(),unit:"W"}:{value:e.toFixed(2),unit:"kW"}}function Gx(s){return uf(s)}function bl(s){let e=Number(s);return isNaN(e)?{label:"Comfortable",color:"#10b981",icon:"\u2728",code:"comfortable"}:e<16?{label:"Cold (<16\xB0C)",color:"#38bdf8",icon:"\u2744\uFE0F",code:"cold"}:e>22?{label:"Hot (>22\xB0C)",color:"#ef4444",icon:"\u{1F525}",code:"hot"}:{label:"Comfortable (16\u201322\xB0C)",color:"#10b981",icon:"\u2728",code:"comfortable"}}var Sl=class{constructor(e,t={}){this.container=e,this.options=t,this.activeTab=null,this.availableEntities=t.availableEntities||[],this.currentSensorConfig=t.currentSensorConfig||{},this.onPresetClick=t.onPresetClick||(()=>{}),this.onToggleXray=t.onToggleXray||(()=>{}),this.onToggleNight=t.onToggleNight||(()=>{}),this.onToggleRotate=t.onToggleRotate||(()=>{}),this.onToggleLight=t.onToggleLight||(()=>{}),this.onToggleTvAudio=t.onToggleTvAudio||(()=>{}),this.onSaveSensors=t.onSaveSensors||(()=>{}),this.customLights=t.customLights||[],this.onSaveCustomLights=t.onSaveCustomLights||(()=>{}),this.onUpdateLightPosition=t.onUpdateLightPosition||(()=>{}),this.onBeaconFocus=t.onBeaconFocus||(()=>{}),this.onBeaconClear=t.onBeaconClear||(()=>{}),this.onEnableClickToPlace=t.onEnableClickToPlace||(()=>{}),this.onDisableClickToPlace=t.onDisableClickToPlace||(()=>{}),this.editingLight=null,this.showTags=!0,this.tagCategories={solar:!0,grid:!0,boiler:!0,ev:!0,thermostats:!0,appliances:!0},this.initDOM()}initDOM(){this.el=document.createElement("div"),this.el.className="ha-energy-hud",this.el.innerHTML=`
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

        /* Bottom Tags Popover Menu */
        .tags-menu-wrap {
          position: relative;
          display: inline-flex;
        }

        .tags-popover-menu {
          position: absolute;
          bottom: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 14px;
          padding: 10px 14px;
          min-width: 240px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.65);
          z-index: 100;
          display: none;
          flex-direction: column;
          gap: 6px;
          pointer-events: auto;
        }

        .tags-popover-menu.open {
          display: flex;
        }

        .tags-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          font-weight: 700;
          color: #f8fafc;
          padding-bottom: 6px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tags-menu-close {
          background: none;
          border: none;
          color: #94a3b8;
          font-size: 16px;
          cursor: pointer;
          padding: 0 4px;
          line-height: 1;
        }

        .tags-menu-close:hover {
          color: #fff;
        }

        .tags-menu-item {
          display: flex;
          align-items: center;
        }

        .tag-switch-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          font-size: 11px;
          color: #cbd5e1;
          cursor: pointer;
          padding: 3px 0;
          user-select: none;
        }

        .tag-switch-label:hover {
          color: #f8fafc;
        }

        .tag-switch-label input[type="checkbox"] {
          accent-color: #38bdf8;
          cursor: pointer;
          width: 15px;
          height: 15px;
          margin-left: 8px;
        }

        .tags-menu-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          margin: 3px 0;
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
            <span class="hud-flow-val color-solar" id="hdr-solar-kw">0 W</span>
          </div>
          <div class="hud-flow-item">
            <span>\u26A1</span>
            <span class="hud-flow-val color-grid-import" id="hdr-grid-kw">Import 0 W</span>
          </div>
          <div class="hud-flow-item">
            <span>\u{1F697}</span>
            <span class="hud-flow-val color-ev" id="hdr-ev-kw">0.00 kW</span>
          </div>
          <div class="hud-flow-item">
            <span>\u{1F525}</span>
            <span class="hud-flow-val color-gas" id="hdr-gas-val" style="color:#94a3b8;">Standby</span>
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
              <label>Kitchen Washing Machine (power sensor)</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-sensor-washer" placeholder="sensor.washing_machine_power">
                <button type="button" class="btn-entity-browse" data-target="#cfg-sensor-washer">\u{1F4CB} Select</button>
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
        <div class="hud-btn-divider"></div>
        <div class="tags-menu-wrap">
          <button class="hud-btn active" id="btn-tags-menu">\u{1F3F7}\uFE0F Tags \u25BE</button>
          <div class="tags-popover-menu" id="tags-popover-menu">
            <div class="tags-menu-header">
              <span>\u{1F3F7}\uFE0F 3D Tags & Badges</span>
              <button class="tags-menu-close" id="btn-tags-menu-close">&times;</button>
            </div>
            <div class="tags-menu-item">
              <label class="tag-switch-label" style="font-weight:700;color:#f8fafc;">
                <span>\u{1F441}\uFE0F Show All 3D Tags</span>
                <input type="checkbox" id="chk-tag-all" checked>
              </label>
            </div>
            <div class="tags-menu-divider"></div>
            <div class="tags-menu-item">
              <label class="tag-switch-label">
                <span>\u2600\uFE0F Solax Solar</span>
                <input type="checkbox" class="chk-tag-cat" data-tag-cat="solar" checked>
              </label>
            </div>
            <div class="tags-menu-item">
              <label class="tag-switch-label">
                <span>\u26A1 Octopus Meter</span>
                <input type="checkbox" class="chk-tag-cat" data-tag-cat="grid" checked>
              </label>
            </div>
            <div class="tags-menu-item">
              <label class="tag-switch-label">
                <span>\u{1F525} Combi Boiler</span>
                <input type="checkbox" class="chk-tag-cat" data-tag-cat="boiler" checked>
              </label>
            </div>
            <div class="tags-menu-item">
              <label class="tag-switch-label">
                <span>\u{1F697} EV & Zappi</span>
                <input type="checkbox" class="chk-tag-cat" data-tag-cat="ev" checked>
              </label>
            </div>
            <div class="tags-menu-item">
              <label class="tag-switch-label">
                <span>\u{1F321}\uFE0F Thermostats</span>
                <input type="checkbox" class="chk-tag-cat" data-tag-cat="thermostats" checked>
              </label>
            </div>
            <div class="tags-menu-item">
              <label class="tag-switch-label">
                <span>\u{1F4FA} Appliances (TV/Fridge/Washer)</span>
                <input type="checkbox" class="chk-tag-cat" data-tag-cat="appliances" checked>
              </label>
            </div>
          </div>
        </div>
        <button class="hud-btn" id="btn-drawer">\u{1F4CA} Stats</button>
        <button class="hud-btn" id="btn-sensors">\u2699\uFE0F Sensors</button>
      </div>
    `,this.container.appendChild(this.el),this.bindEvents(),this.populateSensorInputs()}bindEvents(){let e=this.el.querySelectorAll("[data-preset]");e.forEach(O=>{O.addEventListener("click",()=>{e.forEach(Se=>Se.classList.remove("active")),O.classList.add("active");let ne=O.getAttribute("data-preset");this.activePreset=ne,this.onPresetClick(ne)})});let t=this.el.querySelector("#btn-xray");t.addEventListener("click",()=>{t.classList.toggle("active"),this.onToggleXray(t.classList.contains("active"))});let n=this.el.querySelector("#btn-night");n.addEventListener("click",()=>{n.classList.toggle("active"),this.onToggleNight(n.classList.contains("active"))});let i=this.el.querySelector("#btn-rotate");i.addEventListener("click",()=>{i.classList.toggle("active"),this.onToggleRotate(i.classList.contains("active"))});let r=this.el.querySelector("#btn-tags-menu"),a=this.el.querySelector("#tags-popover-menu"),o=this.el.querySelector("#btn-tags-menu-close"),l=this.el.querySelector("#chk-tag-all"),c=this.el.querySelectorAll(".chk-tag-cat");r&&a&&(r.addEventListener("click",O=>{O.stopPropagation(),a.classList.toggle("open")}),o&&o.addEventListener("click",O=>{O.stopPropagation(),a.classList.remove("open")}),document.addEventListener("click",O=>{!a.contains(O.target)&&!r.contains(O.target)&&a.classList.remove("open")}),a.addEventListener("click",O=>{O.stopPropagation()}),l&&l.addEventListener("change",()=>{this.showTags=l.checked,r.classList.toggle("active",this.showTags),r.innerHTML=this.showTags?"\u{1F3F7}\uFE0F Tags \u25BE":"\u{1F3F7}\uFE0F Tags (Off) \u25BE",c.forEach(ne=>{ne.checked=this.showTags;let Se=ne.getAttribute("data-tag-cat");Se&&(this.tagCategories[Se]=this.showTags)});let O=this.el.querySelector("#hotspots-container");O&&!this.showTags&&(O.innerHTML="")}),c.forEach(O=>{O.addEventListener("change",()=>{let ne=O.getAttribute("data-tag-cat");ne&&(this.tagCategories[ne]=O.checked);let Se=Object.values(this.tagCategories).some(Boolean);this.showTags=Se,l&&(l.checked=Se),r.classList.toggle("active",this.showTags),r.innerHTML=this.showTags?"\u{1F3F7}\uFE0F Tags \u25BE":"\u{1F3F7}\uFE0F Tags (Off) \u25BE";let K=this.el.querySelector("#hotspots-container");K&&!this.showTags&&(K.innerHTML="")})}));let h=this.el.querySelector("#btn-drawer"),u=this.el.querySelector("#hud-drawer"),d=this.el.querySelector("#drawer-close-btn");h.addEventListener("click",()=>{u.classList.toggle("open"),h.classList.toggle("active",u.classList.contains("open")),u.classList.contains("open")&&!this.activeTab&&this.switchTab("solar")}),d.addEventListener("click",()=>{u.classList.remove("open"),h.classList.remove("active")});let f=this.el.querySelector("#btn-sensors"),g=this.el.querySelector("#sensor-modal"),x=this.el.querySelector("#sensor-modal-close"),m=this.el.querySelector("#btn-save-sensors"),p=this.el.querySelector("#btn-detect-sensors");f.addEventListener("click",()=>{g.classList.toggle("open"),f.classList.toggle("active",g.classList.contains("open"))}),x.addEventListener("click",()=>{g.classList.remove("open"),f.classList.remove("active")}),m.addEventListener("click",()=>{let O=this.readSensorInputs();this.currentSensorConfig=O;try{localStorage.setItem("ha_energy_3d_custom_sensors",JSON.stringify(O))}catch{}this.onSaveSensors(O),g.classList.remove("open"),f.classList.remove("active")}),p.addEventListener("click",()=>{this.autoDetectSensors()}),this.el.querySelectorAll(".btn-entity-browse").forEach(O=>{O.addEventListener("click",ne=>{ne.preventDefault(),ne.stopPropagation();let Se=O.getAttribute("data-target");this.openEntityPicker(Se)})});let E=this.el.querySelector("#entity-picker-dialog"),b=this.el.querySelector("#picker-dialog-close");b&&b.addEventListener("click",()=>{E.classList.remove("open")}),E&&E.addEventListener("click",O=>{O.target===E&&E.classList.remove("open")});let T=this.el.querySelectorAll(".filter-chip");T.forEach(O=>{O.addEventListener("click",()=>{T.forEach(Se=>Se.classList.remove("active")),O.classList.add("active"),this.currentPickerFilter=O.getAttribute("data-filter")||"all";let ne=this.el.querySelector("#picker-search-input")?.value||"";this.renderPickerEntityList(ne,this.currentPickerFilter)})});let A=this.el.querySelector("#picker-search-input");A&&A.addEventListener("input",O=>{this.renderPickerEntityList(O.target.value,this.currentPickerFilter||"all")});let _=this.el.querySelector("#light-customizer-dialog"),M=this.el.querySelector("#light-customizer-close");M&&M.addEventListener("click",()=>{_.classList.remove("open"),this.onBeaconClear(),this.onDisableClickToPlace(),this.el.querySelector("#btn-pick-3d-point")?.classList.remove("active")}),_&&_.addEventListener("click",O=>{O.target===_&&(_.classList.remove("open"),this.onBeaconClear(),this.onDisableClickToPlace(),this.el.querySelector("#btn-pick-3d-point")?.classList.remove("active"))});let D=this.el.querySelector("#floor-btn-ground"),P=this.el.querySelector("#floor-btn-first");D&&P&&(D.addEventListener("click",()=>{D.classList.add("active"),P.classList.remove("active"),this.editingLight&&(this.editingLight.floor="ground")}),P.addEventListener("click",()=>{P.classList.add("active"),D.classList.remove("active"),this.editingLight&&(this.editingLight.floor="first")})),["x","y","z"].forEach(O=>{let ne=this.el.querySelector(`#coord-${O}-slider`),Se=this.el.querySelector(`#coord-${O}-val`);ne&&ne.addEventListener("input",K=>this.onCoordChange(O,K.target.value)),Se&&Se.addEventListener("change",K=>this.onCoordChange(O,K.target.value))}),this.el.querySelectorAll(".coord-step-btn").forEach(O=>{O.addEventListener("click",()=>{let ne=O.getAttribute("data-axis"),Se=parseFloat(O.getAttribute("data-dir")||"1");if(this.editingLight){let K=this.editingLight.pos[ne]||0,fe=parseFloat((K+Se*.1).toFixed(2));this.onCoordChange(ne,fe)}})});let U=this.el.querySelector("#btn-preset-ceil-down"),V=this.el.querySelector("#btn-preset-ceil-up"),L=this.el.querySelector("#btn-preset-lamp");U&&U.addEventListener("click",()=>this.onCoordChange("y",2.15)),V&&V.addEventListener("click",()=>this.onCoordChange("y",4.55)),L&&L.addEventListener("click",()=>this.onCoordChange("y",1.55));let W=this.el.querySelector("#btn-pick-3d-point");W&&W.addEventListener("click",()=>{W.classList.toggle("active"),W.classList.contains("active")?this.onEnableClickToPlace(O=>{this.onCoordChange("x",O.x),this.onCoordChange("y",O.y),this.onCoordChange("z",O.z)}):this.onDisableClickToPlace()});let G=this.el.querySelectorAll(".color-chip-btn"),X=this.el.querySelector("#custom-light-color-input");G.forEach(O=>{O.addEventListener("click",()=>{let ne=O.getAttribute("data-color"),Se=parseInt(ne.replace("#","0x"),16);this.editingLight&&(this.editingLight.defaultColor=Se),G.forEach(K=>K.classList.remove("active")),O.classList.add("active"),X&&(X.value=ne)})}),X&&X.addEventListener("input",O=>{let ne=parseInt(O.target.value.replace("#","0x"),16);this.editingLight&&(this.editingLight.defaultColor=ne),G.forEach(Se=>Se.classList.remove("active"))});let ee=this.el.querySelector("#btn-custom-light-save"),q=this.el.querySelector("#btn-custom-light-delete");ee&&ee.addEventListener("click",()=>this.saveEditingLight()),q&&q.addEventListener("click",()=>{this.editingLight?.id&&this.deleteLight(this.editingLight.id)}),this.el.querySelectorAll(".drawer-nav-tab").forEach(O=>{O.addEventListener("click",()=>{let ne=O.getAttribute("data-tab");this.switchTab(ne)})})}populateSensorInputs(){let e={};try{e=JSON.parse(localStorage.getItem("ha_energy_3d_custom_sensors")||"{}")}catch{}let t={...this.currentSensorConfig,...e},n=(r,a)=>{let o=this.el.querySelector(r);o&&a&&(o.value=a)};n("#cfg-solax-power",t.solax_power),n("#cfg-solax-today",t.solax_today),n("#cfg-solax-week",t.solax_week),n("#cfg-solax-month",t.solax_month),n("#cfg-solax-year",t.solax_year),n("#cfg-octopus-power",t.octopus_electric_power),n("#cfg-octopus-export",t.octopus_export_power),n("#cfg-octopus-rate",t.octopus_rate),n("#cfg-octopus-spend",t.octopus_monthly_spend),n("#cfg-octopus-30min",t.octopus_electric_30min),n("#cfg-octopus-day",t.octopus_electric_day),n("#cfg-octopus-week",t.octopus_electric_week),n("#cfg-octopus-month",t.octopus_electric_month),n("#cfg-boiler-status",t.boiler_status),n("#cfg-gas-30min",t.octopus_gas_30min),n("#cfg-gas-day",t.octopus_gas_day),n("#cfg-gas-week",t.octopus_gas_week),n("#cfg-gas-month",t.octopus_gas_month),n("#cfg-zappi-power",t.myenergi_power),n("#cfg-zappi-status",t.myenergi_status),n("#cfg-zappi-energy",t.myenergi_energy),n("#cfg-peugeot-battery",t.peugeot_battery),n("#cfg-peugeot-range",t.peugeot_range),n("#cfg-thermostat-downstairs",t.thermostat_downstairs),n("#cfg-thermostat-upstairs",t.thermostat_upstairs),n("#cfg-sensor-fridge",t.sensor_fridge),n("#cfg-sensor-washer",t.sensor_washer),n("#cfg-sensor-tv",t.sensor_tv),n("#cfg-light-living-lamp",t.light_living_lamp);let i=["lounge","kitchen","dining","hallway","wc","master","ensuite","bedroom2","bedroom3","bathroom","landing"];for(let r of i){let a=r==="master"?"master_bedroom":r;n(`#cfg-light-${r}`,t[`light_${a}`]||t.room_lights?.[a]?.entity_id||t.room_lights?.[a])}}readSensorInputs(){let e=t=>{let n=this.el.querySelector(t);return n?n.value.trim():""};return{solax_power:e("#cfg-solax-power"),solax_today:e("#cfg-solax-today"),solax_week:e("#cfg-solax-week"),solax_month:e("#cfg-solax-month"),solax_year:e("#cfg-solax-year"),octopus_electric_power:e("#cfg-octopus-power"),octopus_export_power:e("#cfg-octopus-export"),octopus_rate:e("#cfg-octopus-rate"),octopus_monthly_spend:e("#cfg-octopus-spend"),octopus_electric_30min:e("#cfg-octopus-30min"),octopus_electric_day:e("#cfg-octopus-day"),octopus_electric_week:e("#cfg-octopus-week"),octopus_electric_month:e("#cfg-octopus-month"),boiler_status:e("#cfg-boiler-status"),octopus_gas_30min:e("#cfg-gas-30min"),octopus_gas_day:e("#cfg-gas-day"),octopus_gas_week:e("#cfg-gas-week"),octopus_gas_month:e("#cfg-gas-month"),myenergi_power:e("#cfg-zappi-power"),myenergi_status:e("#cfg-zappi-status"),myenergi_energy:e("#cfg-zappi-energy"),peugeot_battery:e("#cfg-peugeot-battery"),peugeot_range:e("#cfg-peugeot-range"),thermostat_downstairs:e("#cfg-thermostat-downstairs"),thermostat_upstairs:e("#cfg-thermostat-upstairs"),sensor_fridge:e("#cfg-sensor-fridge"),sensor_washer:e("#cfg-sensor-washer"),sensor_tv:e("#cfg-sensor-tv"),light_living_lamp:e("#cfg-light-living-lamp"),light_lounge:e("#cfg-light-lounge"),light_kitchen:e("#cfg-light-kitchen"),light_dining:e("#cfg-light-dining"),light_hallway:e("#cfg-light-hallway"),light_wc:e("#cfg-light-wc"),light_master_bedroom:e("#cfg-light-master"),light_ensuite:e("#cfg-light-ensuite"),light_bedroom2:e("#cfg-light-bedroom2"),light_bedroom3:e("#cfg-light-bedroom3"),light_bathroom:e("#cfg-light-bathroom"),light_landing:e("#cfg-light-landing")}}openEntityPicker(e){this.activePickerTarget=e;let t=this.el.querySelector("#entity-picker-dialog");if(!t)return;let n=this.el.querySelector(e),i=this.el.querySelector("#picker-dialog-title");if(i&&n){let l=n.closest(".sensor-row")?.querySelector("label")?.innerText||"Select Entity";i.innerText=l}let r="all";e.includes("light")?r="light":e.includes("thermostat")?r="climate":e.includes("tv")?r="media_player":(e.includes("power")||e.includes("energy")||e.includes("fridge"))&&(r="sensor"),this.currentPickerFilter=r,this.el.querySelectorAll(".filter-chip").forEach(l=>l.classList.toggle("active",l.getAttribute("data-filter")===r)),t.classList.add("open");let o=this.el.querySelector("#picker-search-input");o&&(o.value="",setTimeout(()=>o.focus(),60)),this.renderPickerEntityList("",r)}renderPickerEntityList(e="",t="all"){let n=this.el.querySelector("#picker-entity-list");if(!n)return;let i=this.availableEntities||[];i.length||(i=["sensor.solax_pv_power_total","sensor.solax_today_s_solar_energy","sensor.solax_feed_in_power","sensor.octopus_home_mini_current_electricity_power","sensor.octopus_energy_electricity_current_rate","sensor.octopus_energy_electricity_current_month_cost","sensor.boiler_status","sensor.octopus_home_mini_gas_30min","sensor.myenergi_zappi_power","sensor.e2008_battery_level","sensor.e2008_battery_range","climate.downstairs","climate.upstairs","sensor.fridge_power","media_player.living_room_tv","light.living_room_lamp","light.living_room","light.kitchen","light.dining_room","light.hallway","light.downstairs_wc","light.master_bedroom","light.ensuite","light.bedroom_2","light.bedroom_3","light.family_bathroom","light.landing"]);let r=e.toLowerCase().trim(),a=i.filter(l=>{let c=(typeof l=="string"?l:l.entity_id||"").toLowerCase(),h=c.split(".")[0]||"";if(t!=="all"){if(t==="media_player"){if(h!=="media_player"&&!c.includes("tv")&&h!=="switch")return!1}else if(t==="climate"){if(h!=="climate"&&!c.includes("thermostat")&&!c.includes("temp"))return!1}else if(h!==t)return!1}return!(r&&!c.includes(r))});if(!a.length){n.innerHTML=`
        <div style="padding: 24px 12px; text-align: center; color: #94a3b8; font-size: 13px;">
          No matching entities found. You can type any entity ID directly into the input field!
        </div>
      `;return}n.innerHTML=a.map(l=>{let c=typeof l=="string"?l:l.entity_id,h=c.split(".")[0]||"sensor";return`
        <div class="entity-item-row" data-entity-id="${c}">
          <div style="display:flex;align-items:center;gap:8px;">
            <span>${h==="light"?"\u{1F4A1}":h==="climate"?"\u{1F321}\uFE0F":h==="switch"?"\u{1F50C}":h==="media_player"?"\u{1F4FA}":"\u{1F4CA}"}</span>
            <span class="entity-item-id">${c}</span>
          </div>
          <span class="entity-item-state">${h}</span>
        </div>
      `}).join(""),n.querySelectorAll(".entity-item-row").forEach(l=>{l.addEventListener("click",()=>{let c=l.getAttribute("data-entity-id");this.selectEntityForTarget(c)})})}selectEntityForTarget(e){if(this.activePickerTarget){let n=this.el.querySelector(this.activePickerTarget);n&&(n.value=e,n.focus(),n.style.borderColor="#10b981",n.style.boxShadow="0 0 10px rgba(16, 185, 129, 0.6)",setTimeout(()=>{n.style.borderColor="",n.style.boxShadow=""},1200))}let t=this.el.querySelector("#entity-picker-dialog");t&&t.classList.remove("open")}setAvailableEntities(e){this.availableEntities=e||[],this.updateDatalist()}updateDatalist(){let e=this.el.querySelector("#ha-entities-datalist");if(!e)return;let t=this.availableEntities.map(n=>typeof n=="string"?n:n.entity_id||"").filter(Boolean);e.innerHTML=t.map(n=>`<option value="${n}"></option>`).join("")}setCustomLights(e){this.customLights=e||[],this.activeTab==="lights"&&this.renderDrawerContent()}clearActivePreset(){this.el.querySelectorAll("[data-preset]").forEach(t=>t.classList.remove("active")),this.activePreset=null}openLightEditor(e=null){let t=this.el.querySelector("#light-customizer-dialog");if(!t)return;if(e){let r=this.customLights.find(a=>a.id===e);if(!r)return;this.editingLight=JSON.parse(JSON.stringify(r)),this.editingLight.isNew=!1,this.el.querySelector("#light-customizer-title").innerText=`\u{1F4A1} Configure & Move: ${this.editingLight.name}`,this.el.querySelector("#btn-custom-light-delete").style.display="block"}else{let r=this.activePreset==="downstairs",a=r?2.15:4.55,o=r?"ground":"first";this.editingLight={id:`light_custom_${Date.now()}`,name:`New Light ${this.customLights.length+1}`,floor:o,pos:{x:2.2,y:a,z:-3.5},range:6.5,maxIntensity:4,defaultColor:16769689,entity_id:"",isNew:!0},this.el.querySelector("#light-customizer-title").innerText="\u2795 Add New 3D Light",this.el.querySelector("#btn-custom-light-delete").style.display="none"}this.el.querySelector("#custom-light-name").value=this.editingLight.name||"";let n=this.editingLight.entity_id||this.currentSensorConfig?.[`light_${this.editingLight.id}`]||(this.editingLight.id==="living_lamp"?this.currentSensorConfig?.light_living_lamp:"")||"";this.el.querySelector("#custom-light-entity").value=n;let i=this.editingLight.floor||(this.editingLight.pos.y>3?"first":"ground");this.el.querySelector("#floor-btn-ground").classList.toggle("active",i==="ground"),this.el.querySelector("#floor-btn-first").classList.toggle("active",i==="first"),this.updateCoordInputs(this.editingLight.pos.x,this.editingLight.pos.y,this.editingLight.pos.z),this.onBeaconFocus(this.editingLight.id,this.editingLight.pos),t.classList.add("open")}updateCoordInputs(e,t,n){let i=(r,a)=>{let o=this.el.querySelector(r);o&&(o.value=a)};i("#coord-x-slider",e),i("#coord-x-val",e),i("#coord-y-slider",t),i("#coord-y-val",t),i("#coord-z-slider",n),i("#coord-z-val",n)}onCoordChange(e,t){if(!this.editingLight)return;let n=parseFloat(t);isNaN(n)||(this.editingLight.pos[e]=n,this.updateCoordInputs(this.editingLight.pos.x,this.editingLight.pos.y,this.editingLight.pos.z),this.onUpdateLightPosition(this.editingLight.id,this.editingLight.pos.x,this.editingLight.pos.y,this.editingLight.pos.z),this.onBeaconFocus(this.editingLight.id,this.editingLight.pos))}saveEditingLight(){if(!this.editingLight)return;this.editingLight.name=this.el.querySelector("#custom-light-name")?.value?.trim()||"Custom Light",this.editingLight.entity_id=this.el.querySelector("#custom-light-entity")?.value?.trim()||"";let e=this.el.querySelector("#floor-btn-first")?.classList.contains("active");if(this.editingLight.floor=e?"first":"ground",this.editingLight.isNew)delete this.editingLight.isNew,this.customLights.push(this.editingLight);else{let t=this.customLights.findIndex(n=>n.id===this.editingLight.id);t!==-1?this.customLights[t]=this.editingLight:this.customLights.push(this.editingLight)}this.onSaveCustomLights(this.customLights),this.onBeaconClear(),this.onDisableClickToPlace(),this.el.querySelector("#btn-pick-3d-point")?.classList.remove("active"),this.el.querySelector("#light-customizer-dialog")?.classList.remove("open"),this.renderDrawerContent()}deleteLight(e){confirm("Are you sure you want to delete this light from the 3D model?")&&(this.customLights=this.customLights.filter(t=>t.id!==e),this.onSaveCustomLights(this.customLights),this.onBeaconClear(),this.onDisableClickToPlace(),this.el.querySelector("#btn-pick-3d-point")?.classList.remove("active"),this.el.querySelector("#light-customizer-dialog")?.classList.remove("open"),this.renderDrawerContent())}autoDetectSensors(){let e=this.availableEntities.map(i=>typeof i=="string"?i:i.entity_id||"");if(!e.length)return;let t=(...i)=>{for(let r of i){let a=e.find(o=>o.toLowerCase().includes(r.toLowerCase()));if(a)return a}return""},n=(i,...r)=>{let a=this.el.querySelector(i);if(a&&!a.value){let o=t(...r);o&&(a.value=o)}};n("#cfg-solax-power","solax_pv_power","solax_power","pv_power","solar_power"),n("#cfg-solax-today","solax_today","solar_today","pv_energy_today"),n("#cfg-solax-week","solax_week","solar_week"),n("#cfg-solax-month","solax_month","solar_month"),n("#cfg-solax-year","solax_year","solar_year"),n("#cfg-octopus-power","home_mini_current_electricity","octopus_electricity_power","grid_power"),n("#cfg-octopus-export","feed_in_power","solax_export","grid_export"),n("#cfg-octopus-rate","electricity_current_rate","octopus_rate","current_rate"),n("#cfg-octopus-spend","electricity_current_month_cost","octopus_month_cost","electricity_cost"),n("#cfg-octopus-30min","home_mini_electricity_30min","electricity_30min"),n("#cfg-octopus-day","electricity_day","octopus_electricity_today"),n("#cfg-octopus-week","electricity_week"),n("#cfg-octopus-month","electricity_month"),n("#cfg-boiler-status","boiler","climate.boiler","switch.boiler","heating"),n("#cfg-gas-30min","home_mini_gas_30min","gas_30min"),n("#cfg-gas-day","gas_day","octopus_gas_today"),n("#cfg-gas-week","gas_week"),n("#cfg-gas-month","gas_month"),n("#cfg-zappi-power","zappi_power","myenergi_power","ev_power","charger_power"),n("#cfg-zappi-status","plug_status","zappi_plug_status","zappi_status","myenergi_status","charger_status"),n("#cfg-zappi-energy","charge_added_session","zappi_energy","zappi_today"),n("#cfg-peugeot-battery","e2008_battery","peugeot_battery","battery_level","soc"),n("#cfg-peugeot-range","e2008_range","peugeot_range","range"),n("#cfg-thermostat-downstairs","climate.downstairs","climate.ground_floor","climate.hallway","climate.living_room","downstairs_temperature"),n("#cfg-thermostat-upstairs","climate.upstairs","climate.first_floor","climate.landing","climate.master_bedroom","upstairs_temperature"),n("#cfg-sensor-fridge","fridge","refrigerator","freezer","fridge_power","kitchen_fridge"),n("#cfg-sensor-washer","washer_power","washing_machine_power","washing_machine","washer","laundry_power","laundry"),n("#cfg-sensor-tv","living_room_tv","lounge_tv","media_player.tv","media_player.living_room","switch.tv"),n("#cfg-light-living-lamp","living_room_lamp","corner_lamp","living_lamp","floor_lamp","standard_lamp","lamp"),n("#cfg-light-lounge","light.living","light.lounge","light.sitting_room","switch.living"),n("#cfg-light-kitchen","light.kitchen","light.kitchen_lights","switch.kitchen"),n("#cfg-light-dining","light.dining","light.dining_room","switch.dining"),n("#cfg-light-hallway","light.hallway","light.hall","light.entrance","switch.hallway"),n("#cfg-light-wc","light.wc","light.cloakroom","light.downstairs_toilet","switch.wc"),n("#cfg-light-master","light.master","light.bedroom_1","light.main_bedroom","switch.master"),n("#cfg-light-ensuite","light.ensuite","light.en_suite","switch.ensuite"),n("#cfg-light-bedroom2","light.bedroom_2","light.bed_2","light.guest_room","switch.bedroom_2"),n("#cfg-light-bedroom3","light.bedroom_3","light.bed_3","light.nursery","light.office","switch.bedroom_3"),n("#cfg-light-bathroom","light.bathroom","light.family_bathroom","switch.bathroom"),n("#cfg-light-landing","light.landing","light.stairs","light.upstairs_hallway","switch.landing")}openDrawerTab(e){let t=this.el.querySelector("#hud-drawer"),n=this.el.querySelector("#btn-drawer");t.classList.add("open"),n.classList.add("active"),this.switchTab(e)}switchTab(e){this.activeTab=e,this.el.querySelectorAll(".drawer-nav-tab").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-tab")===e)}),this.renderDrawerContent()}renderDrawerContent(){let e=this.el.querySelector("#drawer-content"),t=this.lastData;if(t){if(this.activeTab==="solar"){let n=t.solar||{},i=Qs(n.power_kw),r=i>.04,a=Gx(i);e.innerHTML=`
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div class="stat-label">SOLAX LIVE GENERATION</div>
            <div class="stat-val color-solar">${a.value} <span class="stat-unit">${a.unit}</span></div>
            <div class="stat-subtext">Status: ${r?"Generating \u2022 Active Flow":"Frozen (No Generation)"}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">TODAY</div>
            <div class="stat-val">${Number(n.today_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">THIS WEEK</div>
            <div class="stat-val">${Number(n.week_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">THIS MONTH</div>
            <div class="stat-val">${Number(n.month_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">THIS YEAR</div>
            <div class="stat-val">${Number(n.year_kwh||0).toFixed(0)} <span class="stat-unit">kWh</span></div>
          </div>
        </div>
      `}else if(this.activeTab==="electric"){let n=t.octopus_electric||{},i=Qs(n.power_kw),r=Math.abs(i),a=i<-.02||!!n.is_exporting,o=r>.03,l=uf(r);e.innerHTML=`
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div class="stat-label">OCTOPUS GRID POWER (${o?a?"EXPORTING TO GRID":"IMPORTING FROM GRID":"IDLE / FROZEN"})</div>
            <div class="stat-val ${a?"color-grid-export":"color-grid-import"}">
              ${l.value} <span class="stat-unit">${l.unit}</span>
            </div>
            <div class="stat-subtext">Flow: ${o?a?"\u2B06\uFE0F House to Pylon":"\u2B07\uFE0F Pylon to House":"Frozen (0 W)"}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">CURRENT TARIFF RATE</div>
            <div class="stat-val">${Number(n.current_rate_p||0).toFixed(2)} <span class="stat-unit">p/kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">MONTH TO DATE SPEND</div>
            <div class="stat-val">\xA3${Number(n.monthly_spend_gbp||0).toFixed(2)}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">30-MIN READING (MINI)</div>
            <div class="stat-val">${Number(n.reading_30min_kwh||0).toFixed(2)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">TODAY</div>
            <div class="stat-val">${Number(n.day_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">THIS WEEK</div>
            <div class="stat-val">${Number(n.week_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">THIS MONTH</div>
            <div class="stat-val">${Number(n.month_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">KITCHEN WASHING MACHINE</div>
            <div class="stat-val" style="color:${t.appliances?.washer?.is_active?"#00f59b":"#94a3b8"};">
              ${t.appliances?.washer?.power_w||0} <span class="stat-unit">W</span>
            </div>
            <div class="stat-subtext">Status: ${t.appliances?.washer?.state||"Standby"}</div>
          </div>
        </div>
      `}else if(this.activeTab==="gas"){let n=t.octopus_gas||{},i=!!(n.is_active&&n.boiler_status==="Heating");e.innerHTML=`
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div class="stat-label">KITCHEN COMBI BOILER</div>
            <div class="stat-val" style="color:${i?"#f97316":"#94a3b8"};">${i?"\u{1F525} Heating":"Standby"}</div>
            <div class="stat-subtext">Status: ${i?"Heating (Firing)":"Standby (Idle)"} &bull; Supply: External LPG Bulk Tank</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">30-MIN READING (MINI)</div>
            <div class="stat-val">${Number(n.reading_30min_kwh||0).toFixed(2)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">TODAY</div>
            <div class="stat-val">${Number(n.day_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">THIS WEEK</div>
            <div class="stat-val">${Number(n.week_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">THIS MONTH</div>
            <div class="stat-val">${Number(n.month_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">GAS RATE</div>
            <div class="stat-val">${Number(n.current_rate_p||0).toFixed(2)} <span class="stat-unit">p/kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">EST. MONTH SPEND</div>
            <div class="stat-val">\xA3${Number(n.monthly_spend_gbp||0).toFixed(2)}</div>
          </div>
        </div>
      `}else if(this.activeTab==="ev"){let n=t.ev||{},i=Math.min(Math.max(Number(n.battery_soc_pct||0),0),100),r=Qs(n.charger_power_kw),a=!!n.is_connected,o=!!(n.is_charging&&r>.04&&a),l=n.status_text||(o?`Charging @ ${r.toFixed(1)} kW`:a?"Connected (Idle)":"Disconnected");e.innerHTML=`
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
            <div class="stat-val color-ev">${i}% <span class="stat-unit">(${Number(n.range_miles||0)} miles)</span></div>
            <div class="battery-bar-container">
              <div class="battery-bar-fill" style="width: ${i}%"></div>
            </div>
            <div class="stat-subtext" style="margin-top: 6px;">Charging Cable: ${o?"\u26A1 Flowing to Car (5 Pulses)":a?"\u{1F50C} Plugged In (Idle)":"Disconnected"}</div>
          </div>

          <div class="stat-card">
            <div class="stat-label">CHARGING SPEED</div>
            <div class="stat-val">${r.toFixed(2)} <span class="stat-unit">kW</span></div>
            <div class="stat-subtext">Mode: ${n.charger_mode||"Eco+"}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">SESSION ENERGY ADDED</div>
            <div class="stat-val">${Number(n.energy_added_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
            <div class="stat-subtext">Source: Solax PV & Grid</div>
          </div>
        </div>
      `;let c=e.querySelector("#btn-focus-charger");c&&c.addEventListener("click",()=>this.onPresetClick("charger"))}else if(this.activeTab==="heating"){let n=t.thermostats||{},i=n.downstairs||{},r=n.upstairs||{},a=t.octopus_gas||{},o=Number(i.current_temp||20),l=Number(i.target_temp||21),c=!!i.is_heating,h=bl(o),u=Number(r.current_temp||19.5),d=Number(r.target_temp||19.5),f=!!r.is_heating,g=bl(u),x=!!(a.is_active&&a.boiler_status==="Heating");e.innerHTML=`
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
              <div>
                <div class="stat-label">DOWNSTAIRS HEATING & CLIMATE</div>
                <div class="stat-val" style="color: ${h.color}; font-size: 26px;">
                  ${o.toFixed(1)} <span class="stat-unit">\xB0C</span>
                  <span style="font-size: 11px; font-weight: 600; padding: 2px 7px; border-radius: 6px; background: rgba(255,255,255,0.08); color: ${h.color}; vertical-align: middle; margin-left: 6px;">
                    ${h.icon} ${h.label}
                  </span>
                </div>
                <div class="stat-subtext" style="margin-top: 4px;">
                  Target Setpoint: ${l.toFixed(1)}\xB0C &bull; 
                  <span style="color: ${c?"#f97316":"#94a3b8"}; font-weight: ${c?"700":"normal"};">
                    ${c?"\u{1F525} Calling for Heat":o>=l?"\u2705 Set Temp Reached (Standby)":"\u2744\uFE0F Thermostat Idle / Off"}
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
                    ${f?"\u{1F525} Calling for Heat":u>=d?"\u2705 Set Temp Reached (Standby)":"\u2744\uFE0F Thermostat Idle / Off"}
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
            <div class="stat-val">${Number(a.day_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
            <div class="stat-subtext">Supply: External LPG Bulk Tank</div>
          </div>
        </div>
      `;let m=e.querySelector("#btn-focus-down");m&&m.addEventListener("click",()=>this.onPresetClick("downstairs"));let p=e.querySelector("#btn-focus-up");p&&p.addEventListener("click",()=>this.onPresetClick("upstairs"))}else if(this.activeTab==="lights"){let n=t.room_lights||{},i=this.customLights||[],r="";for(let h of i){let u=n[h.id]||(h.id==="living_lamp"?t.appliances?.living_lamp:{})||{},d=!!(u.is_on||u.state==="on"),f=u.brightness!==void 0?Math.round(u.brightness/255*100):d?100:0,g=h.isFloorLamp||h.name?.toLowerCase().includes("lamp")?"\u{1F6CB}\uFE0F":"\u{1F4A1}",x=h.floor==="first"||h.pos&&h.pos.y>3?"\u{1F6CF}\uFE0F Upstairs":"\u{1F6CB}\uFE0F Downstairs",m=h.pos?`(${h.pos.x.toFixed(1)}, ${h.pos.y.toFixed(1)}, ${h.pos.z.toFixed(1)})`:"",p=h.entity_id||this.currentSensorConfig?.[`light_${h.id}`]||(h.id==="living_lamp"?this.currentSensorConfig?.light_living_lamp:"")||"";r+=`
          <div class="light-card ${d?"active":""}">
            <div class="light-card-top">
              <span class="light-name">${g} ${h.name}</span>
              <span class="light-status-pill ${d?"on":"off"}">${d?"\u{1F4A1} ON":"OFF"}</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; font-size:10px; color:#94a3b8;">
              <span>${x}</span>
              <span style="font-size:9px;">${m}</span>
            </div>
            <div style="font-size:10px; color:#94a3b8; display:flex; justify-content:space-between; align-items:center;">
              <span>${d?`Brightness: ${f}%`:"Light is off"}</span>
              <span style="font-size:9px; color:#64748b; font-family:monospace; max-width:140px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${p||"Manual Toggle"}">
                ${p?`\u{1F517} ${p}`:"\u26AA Manual"}
              </span>
            </div>
            <button class="light-toggle-btn" data-entity="${p}" data-light-id="${h.id}">
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
            <div style="font-weight:700; font-size:13px; color:#f8fafc;">\u{1F4A1} Interactive 3D Lights (${i.length})</div>
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
      `,e.querySelectorAll(".light-toggle-btn").forEach(h=>{h.addEventListener("click",()=>{let u=h.getAttribute("data-entity")?.trim(),d=h.getAttribute("data-light-id");if(!d)return;let f=t.room_lights?.[d];d==="living_lamp"&&(f=t.appliances?.living_lamp||f);let x=!!!(f?.is_on||f?.state==="on");t.room_lights?.[d]&&(t.room_lights[d].is_on=x,t.room_lights[d].brightness=x?t.room_lights[d].brightness||255:0),d==="living_lamp"&&t.appliances?.living_lamp&&(t.appliances.living_lamp.is_on=x,t.appliances.living_lamp.brightness=x?t.appliances.living_lamp.brightness||255:0),u&&this.onToggleLight(u),this.options.onToggleRoomLight&&this.options.onToggleRoomLight(d,x),this.renderDrawerContent()})});let o=e.querySelector("#btn-add-light-ui");o&&o.addEventListener("click",()=>{this.openLightEditor(null)}),e.querySelectorAll(".btn-edit-light-coords").forEach(h=>{h.addEventListener("click",()=>{let u=h.getAttribute("data-light-id");this.openLightEditor(u)})}),e.querySelectorAll(".btn-delete-light-item").forEach(h=>{h.addEventListener("click",()=>{let u=h.getAttribute("data-light-id");this.deleteLight(u)})})}}}update(e,t=[]){this.lastData=e;let n=Qs(e.solar?.power_kw),i=Qs(e.octopus_electric?.power_kw),r=Qs(e.ev?.charger_power_kw),a=i<-.02||!!e.octopus_electric?.is_exporting,o=this.el.querySelector("#hdr-solar-kw"),l=this.el.querySelector("#hdr-grid-kw"),c=this.el.querySelector("#hdr-ev-kw"),h=this.el.querySelector("#hdr-gas-val");if(o&&(o.innerText=hf(n)),l&&(l.innerText=zx(i,a),l.className=`hud-flow-val ${a?"color-grid-export":"color-grid-import"}`),c&&(c.innerText=`${r.toFixed(2)} kW`),h){let f=!!(e.octopus_gas?.is_active&&e.octopus_gas?.boiler_status==="Heating");h.innerText=f?"Heating":"Standby",h.style.color=f?"#f97316":"#94a3b8"}let u=this.el.querySelector("#hotspots-container");if(u.innerHTML="",!this.showTags){u.style.display="none",this.el.querySelector("#hud-drawer").classList.contains("open")&&this.renderDrawerContent();return}u.style.display="block";let d={solar:"solar",grid:"grid",boiler:"boiler",ev:"ev",ev_charger:"ev",thermostat_downstairs:"thermostats",thermostat_upstairs:"thermostats",appliance_fridge:"appliances",appliance_washer:"appliances",appliance_tv:"appliances"};for(let f of t){if(!f.visible)continue;let g=d[f.id];if(g&&this.tagCategories&&this.tagCategories[g]===!1)continue;let x="";if(f.id==="solar"){let p=n>.04;x=`<span>\u2600\uFE0F Solax</span> <span class="color-solar">${hf(n)}</span> <span style="font-size:9px;color:${p?"#10b981":"#64748b"}">\u25CF</span>`}else if(f.id==="grid"){let p=Number(e.octopus_electric?.current_rate_p||0).toFixed(1),y=Math.abs(i),E=y<1?`${Math.round(y*1e3)} W`:`${y.toFixed(1)} kW`;x=`<span>\u26A1 Octopus</span> <span class="${a?"color-grid-export":"color-grid-import"}">${a?"Export ":""}${E}</span> <span style="color:#94a3b8">(${p}p)</span>`}else if(f.id==="boiler"){let p=!!(e.octopus_gas?.is_active&&e.octopus_gas?.boiler_status==="Heating");x=`<span>\u{1F525} Boiler</span> <span style="color:${p?"#f97316":"#94a3b8"};font-weight:700;">${p?"Heating":"Standby"}</span>`}else if(f.id==="ev")x=`<span>\u{1F697} Peugeot</span> <span class="color-ev">${e.ev?.battery_soc_pct||68}%</span>`;else if(f.id==="ev_charger"){let p=e.ev||{},y=!!p.is_connected,E=!!(p.is_charging&&y),b=Number(p.charger_power_kw||0),T="Disconnected";E?T=`\u26A1 ${b.toFixed(1)} kW`:y&&(T="Connected"),x=`<span>\u26A1 Zappi</span> <span style="color:${E?"#00f59b":y?"#38bdf8":"#94a3b8"};font-weight:700;">${T}</span>`}else if(f.id==="thermostat_downstairs"){let p=e.thermostats?.downstairs||{},y=Number(p.current_temp||20).toFixed(1),E=!!p.is_heating,b=bl(p.current_temp||20);x=`<span>\u{1F321}\uFE0F Downstairs</span> <span style="color:${b.color};font-weight:700;">${y}\xB0C</span> <span style="font-size:10px;">${b.icon}</span> ${E?'<span style="color:#f97316;font-size:9px;font-weight:700;">HEATING</span>':""}`}else if(f.id==="thermostat_upstairs"){let p=e.thermostats?.upstairs||{},y=Number(p.current_temp||19.5).toFixed(1),E=!!p.is_heating,b=bl(p.current_temp||19.5);x=`<span>\u{1F321}\uFE0F Upstairs</span> <span style="color:${b.color};font-weight:700;">${y}\xB0C</span> <span style="font-size:10px;">${b.icon}</span> ${E?'<span style="color:#f97316;font-size:9px;font-weight:700;">HEATING</span>':""}`}else if(f.id==="appliance_fridge"){let p=e.appliances?.fridge||{},y=p.power_w!==void 0?`${p.power_w} W`:"0 W",E=!!p.is_active;x=`<span>\u{1F9CA} Fridge</span> <span style="color:#38bdf8;font-weight:700;">${y}</span> <span style="font-size:9px;color:${E?"#10b981":"#64748b"}">\u25CF</span>`}else if(f.id==="appliance_washer"){let p=e.appliances?.washer||{},y=!!p.is_active,E=p.power_w!==void 0?`${p.power_w} W`:y?"Running":"0 W";x=`<span>\u{1FAE7} Washer</span> <span style="color:${y?"#00f59b":"#94a3b8"};font-weight:700;">${E}</span> <span style="font-size:9px;color:${y?"#10b981":"#64748b"}">\u25CF</span>`}else if(f.id==="appliance_tv"){let y=!!(e.appliances?.tv||{}).is_on;x=`<span>\u{1F4FA} Living TV</span> <span style="color:${y?"#60a5fa":"#94a3b8"};font-weight:700;">${y?"\u25B6 Playing":"OFF"}</span>`}let m=document.createElement("div");m.className="hotspot-badge",m.style.left=`${f.x}px`,m.style.top=`${f.y}px`,m.innerHTML=x,m.addEventListener("click",p=>{if(f.id==="appliance_tv"){let b=e.appliances?.tv;b?.entity_id?this.onToggleLight(b.entity_id):b&&(b.is_on=!b.is_on,this.updateData(e)),this.onPresetClick("downstairs");return}else if(f.id==="appliance_fridge"){this.openDrawerTab("electric"),this.onPresetClick("downstairs");return}else if(f.id==="appliance_washer"){this.openDrawerTab("electric"),this.onPresetClick("downstairs");return}else if(f.id==="ev_charger"){this.openDrawerTab("ev"),this.onPresetClick("charger");return}let y={solar:"solar",grid:"electric",boiler:"gas",ev:"ev",thermostat_downstairs:"heating",thermostat_upstairs:"heating"},E={thermostat_downstairs:"downstairs",thermostat_upstairs:"upstairs"};this.openDrawerTab(y[f.id]||"solar"),this.onPresetClick(E[f.id]||f.id)}),u.appendChild(m)}this.el.querySelector("#hud-drawer").classList.contains("open")&&this.renderDrawerContent()}};var df={solar:{power_kw:2.85,today_kwh:14.6,week_kwh:86.4,month_kwh:342.1,year_kwh:3820.5,inverter_temp:34.2,status:"Generating"},octopus_electric:{power_kw:.72,is_exporting:!1,current_rate_p:24.85,monthly_spend_gbp:74.2,reading_30min_kwh:.36,day_kwh:8.4,week_kwh:54.2,month_kwh:218.6,tariff_name:"Octopus Flexible / Agile"},octopus_gas:{is_active:!1,power_kw:0,reading_30min_kwh:.72,day_kwh:12.8,week_kwh:78.5,month_kwh:310.2,current_rate_p:6.24,monthly_spend_gbp:38.65,boiler_status:"Standby"},ev:{is_charging:!0,is_connected:!0,status_text:"Charging @ 7.2 kW",is_plugged:!0,charger_power_kw:7.2,energy_added_kwh:22.4,charger_mode:"Eco+",battery_soc_pct:68,range_miles:142,battery_capacity_kwh:50},home:{total_power_kw:2.15},thermostats:{downstairs:{entity_id:"climate.downstairs",current_temp:20.5,target_temp:21,state:"heat",hvac_action:"heating",is_heating:!0},upstairs:{entity_id:"climate.upstairs",current_temp:19.2,target_temp:19.5,state:"heat",hvac_action:"idle",is_heating:!1}},room_lights:{lounge:{is_on:!1,brightness:0,entity_id:""},kitchen:{is_on:!1,brightness:0,entity_id:""},dining:{is_on:!1,brightness:0,entity_id:""},hallway:{is_on:!1,brightness:0,entity_id:""},wc:{is_on:!1,brightness:0,entity_id:""},master_bedroom:{is_on:!1,brightness:0,entity_id:""},ensuite:{is_on:!1,brightness:0,entity_id:""},bedroom2:{is_on:!1,brightness:0,entity_id:""},bedroom3:{is_on:!1,brightness:0,entity_id:""},bathroom:{is_on:!1,brightness:0,entity_id:""},landing:{is_on:!1,brightness:0,entity_id:""},living_lamp:{is_on:!0,brightness:220,entity_id:"light.living_room_lamp"}},appliances:{fridge:{entity_id:"sensor.fridge_power",power_kw:.065,is_active:!0},washer:{entity_id:"sensor.washing_machine_power",power_kw:.45,power_w:450,is_active:!0},tv:{entity_id:"media_player.living_room_tv",is_on:!0,power_kw:.11},living_lamp:{entity_id:"light.living_room_lamp",is_on:!0,brightness:255}}};function mf(s,e=""){let t=parseFloat(s);if(isNaN(t))return 0;let n=(e||"").toLowerCase().trim();return n==="w"||n==="va"||n==="watt"||n==="watts"?t/1e3:n==="kw"||n==="kva"||n==="kilowatt"||n==="kilowatts"?t:Math.abs(t)>=20?t/1e3:t}function Vx(s,e=""){let t=parseFloat(s);if(isNaN(t))return 0;let n=(e||"").toLowerCase().trim();return n==="wh"?t/1e3:n==="kwh"?t:n==="mwh"?t*1e3:Math.abs(t)>=1e3?t/1e3:t}function Wx(s){let e=Number(s);return isNaN(e)?{label:"Comfortable",color:"#10b981",icon:"\u2728",code:"comfortable"}:e<16?{label:"Cold (<16\xB0C)",color:"#38bdf8",icon:"\u2744\uFE0F",code:"cold"}:e>22?{label:"Hot (>22\xB0C)",color:"#ef4444",icon:"\u{1F525}",code:"hot"}:{label:"Comfortable (16\u201322\xB0C)",color:"#10b981",icon:"\u2728",code:"comfortable"}}var kh=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config={},this._hass=null,this.sceneManager=null,this.hud=null,this.energyData=JSON.parse(JSON.stringify(df));try{let e=JSON.parse(localStorage.getItem("ha_energy_3d_custom_sensors")||"{}");this.customSensors=e}catch{this.customSensors={}}try{let e=JSON.parse(localStorage.getItem("ha_energy_3d_custom_lights")||"null");if(e&&Array.isArray(e)&&e.length){let t=new Set(["light.living_room","light.kitchen","light.dining_room","light.downstairs_wc","light.master_bedroom","light.ensuite","light.bedroom_2","light.bedroom_3","light.family_bathroom","light.landing"]);for(let n of e)n.id!=="living_lamp"&&t.has(n.entity_id)&&(n.entity_id=this.customSensors[`light_${n.id}`]||this.customSensors[`light_${n.id==="master_bedroom"?"master":n.id}`]||""),n.id==="living_lamp"&&(n.name==="Living Room Corner Lamp"||!n.name)&&(n.name="Living Room Lamp");this.customLights=e}else this.customLights=JSON.parse(JSON.stringify(vl))}catch{this.customLights=JSON.parse(JSON.stringify(vl))}}static getStubConfig(){return{type:"custom:ha-energy-3d-card",title:"Home Energy 3D",model_url:"Taylor_Wimpey_Blair.glb",height:"560px",solax_power:"sensor.solax_pv_power_total",solax_today:"sensor.solax_today_s_solar_energy",solax_week:"sensor.solax_this_week_solar_energy",solax_month:"sensor.solax_this_month_solar_energy",solax_year:"sensor.solax_this_year_solar_energy",octopus_electric_power:"sensor.octopus_home_mini_current_electricity_power",octopus_export_power:"sensor.solax_feed_in_power",octopus_rate:"sensor.octopus_energy_electricity_current_rate",octopus_monthly_spend:"sensor.octopus_energy_electricity_current_month_cost",octopus_electric_30min:"sensor.octopus_home_mini_electricity_30min",octopus_electric_day:"sensor.octopus_energy_electricity_day",octopus_electric_week:"sensor.octopus_energy_electricity_week",octopus_electric_month:"sensor.octopus_energy_electricity_month",boiler_status:"sensor.boiler_status",octopus_gas_30min:"sensor.octopus_home_mini_gas_30min",octopus_gas_day:"sensor.octopus_energy_gas_day",octopus_gas_week:"sensor.octopus_energy_gas_week",octopus_gas_month:"sensor.octopus_energy_gas_month",octopus_gas_rate:"sensor.octopus_energy_gas_current_rate",octopus_gas_spend:"sensor.octopus_energy_gas_current_month_cost",myenergi_power:"sensor.myenergi_zappi_power",myenergi_status:"sensor.myenergi_zappi_status",myenergi_energy:"sensor.myenergi_zappi_charge_added_session",peugeot_battery:"sensor.e2008_battery_level",peugeot_range:"sensor.e2008_battery_range",thermostat_downstairs:"climate.downstairs",thermostat_upstairs:"climate.upstairs",sensor_fridge:"sensor.fridge_power",sensor_washer:"sensor.washing_machine_power",sensor_tv:"media_player.living_room_tv",light_living_lamp:"light.living_room_lamp",light_lounge:"",light_kitchen:"",light_dining:"",light_hallway:"",light_wc:"",light_master_bedroom:"",light_ensuite:"",light_bedroom2:"",light_bedroom3:"",light_bathroom:"",light_landing:""}}static async getConfigElement(){return await Promise.resolve().then(()=>(pf(),ff)),document.createElement("ha-energy-3d-card-editor")}setConfig(e){this._config={model_url:"Taylor_Wimpey_Blair.glb",height:"560px",night_mode:!1,auto_rotate:!1,...e,...this.customSensors},this.wrapper&&(this.wrapper.style.height=this._config.height)}connectedCallback(){this.sceneManager||this.render()}disconnectedCallback(){this.sceneManager&&(this.sceneManager.destroy(),this.sceneManager=null)}render(){let e=this._config.height||"560px";this.shadowRoot.innerHTML=`
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
    `,this.wrapper=this.shadowRoot.querySelector("#card-container");let t=this.shadowRoot.querySelector("#viewport");this.sceneManager=new yl(t,{modelUrl:this._config.model_url,nightMode:this._config.night_mode,autoRotate:this._config.auto_rotate,customLights:this.customLights}),this.hud=new Sl(this.wrapper,{currentSensorConfig:this._config,customLights:this.customLights,onPresetClick:n=>this.sceneManager.setCameraPreset(n),onToggleXray:n=>this.sceneManager.setXRayRoof(n),onToggleNight:n=>this.sceneManager.setNightMode(n),onToggleRotate:n=>{this.sceneManager.controls.autoRotate=n},onToggleLight:n=>this.toggleLightEntity(n),onToggleRoomLight:(n,i)=>{this.energyData.room_lights||(this.energyData.room_lights={}),this.energyData.room_lights[n]?(this.energyData.room_lights[n].is_on=i,this.energyData.room_lights[n].brightness=i?this.energyData.room_lights[n].brightness||255:0):this.energyData.room_lights[n]={entity_id:"",is_on:i,brightness:i?255:0,rgb_color:null},n==="living_lamp"&&(this.energyData.appliances||(this.energyData.appliances={}),this.energyData.appliances.living_lamp=this.energyData.room_lights[n]),this.sceneManager&&this.sceneManager.updateRoomLights(this.energyData.room_lights)},onToggleTvAudio:()=>this.sceneManager.toggleTvAudio(),onSaveSensors:n=>{this.customSensors=n,this._config={...this._config,...n};for(let i of this.customLights){let r=n[`light_${i.id}`];r===void 0&&i.id==="master_bedroom"&&(r=n.light_master_bedroom||n.light_master),r===void 0&&i.id==="living_lamp"&&(r=n.light_living_lamp),r!==void 0&&(i.entity_id=r)}try{localStorage.setItem("ha_energy_3d_custom_lights",JSON.stringify(this.customLights))}catch{}this.sceneManager.rebuildCustomLights(this.customLights),this.updateStatesFromHass(),this.hud&&(this.hud.setCustomLights(this.customLights),this.hud.renderDrawerContent())},onSaveCustomLights:n=>{this.customLights=n;try{localStorage.setItem("ha_energy_3d_custom_lights",JSON.stringify(n))}catch{}for(let i of n)i.id==="living_lamp"?(this.customSensors.light_living_lamp=i.entity_id||"",this._config.light_living_lamp=i.entity_id||""):(this.customSensors[`light_${i.id}`]=i.entity_id||"",this._config[`light_${i.id}`]=i.entity_id||"",i.id==="master_bedroom"&&(this.customSensors.light_master=i.entity_id||"",this._config.light_master=i.entity_id||""));try{localStorage.setItem("ha_energy_3d_custom_sensors",JSON.stringify(this.customSensors))}catch{}this.sceneManager.rebuildCustomLights(n),this.updateStatesFromHass()},onUpdateLightPosition:(n,i,r,a)=>{this.sceneManager.updateLightPosition(n,i,r,a)},onBeaconFocus:(n,i)=>{this.sceneManager.setEditingLightBeacon(n,i)},onBeaconClear:()=>{this.sceneManager.clearEditingLightBeacon()},onEnableClickToPlace:n=>{this.sceneManager.enableClickToPlace(n)},onDisableClickToPlace:()=>{this.sceneManager.disableClickToPlace()}}),this.sceneManager.onFrame=()=>{let n=this.sceneManager.getProjectedHotspots();this.hud.update(this.energyData,n)},this.sceneManager.onUserCameraInteraction=()=>{this.hud&&this.hud.clearActivePreset()},this._hass&&this.updateStatesFromHass()}set hass(e){this._hass=e,this.hud&&e?.states&&this.hud.setAvailableEntities(Object.keys(e.states)),this.updateStatesFromHass()}getPowerInKw(e,t=0){if(!this._hass||!e)return t;let n=this._hass.states[e];if(!n||n.state==="unavailable"||n.state==="unknown")return 0;let i=n.attributes?.unit_of_measurement||"";return mf(n.state,i)}getEnergyInKwh(e,t=0){if(!this._hass||!e)return t;let n=this._hass.states[e];if(!n||n.state==="unavailable"||n.state==="unknown")return 0;let i=n.attributes?.unit_of_measurement||"";return Vx(n.state,i)}getEntityNumericValue(e,t=0){if(!this._hass||!e)return t;let n=this._hass.states[e];if(!n||n.state==="unavailable"||n.state==="unknown")return 0;let i=parseFloat(n.state);return isNaN(i)?t:i}getEntityState(e,t=""){if(!this._hass||!e)return t;let n=this._hass.states[e];return!n||n.state==="unavailable"||n.state==="unknown"?t:n.state}updateStatesFromHass(){if(!this._hass)return;let e={...this._config,...this.customSensors},t=this.getPowerInKw(e.solax_power,this.energyData.solar.power_kw);this.energyData.solar={power_kw:t,today_kwh:this.getEnergyInKwh(e.solax_today,this.energyData.solar.today_kwh),week_kwh:this.getEnergyInKwh(e.solax_week,this.energyData.solar.week_kwh),month_kwh:this.getEnergyInKwh(e.solax_month,this.energyData.solar.month_kwh),year_kwh:this.getEnergyInKwh(e.solax_year,this.energyData.solar.year_kwh),status:t>.04?"Generating":"Idle"};let n=this.getPowerInKw(e.octopus_electric_power,this.energyData.octopus_electric.power_kw),i=this.getPowerInKw(e.octopus_export_power,0),r=!1;n<-.02?r=!0:n>.02?r=!1:i>.04&&(n=-i,r=!0),this.energyData.octopus_electric={power_kw:n,is_exporting:r,current_rate_p:this.getEntityNumericValue(e.octopus_rate,this.energyData.octopus_electric.current_rate_p),monthly_spend_gbp:this.getEntityNumericValue(e.octopus_monthly_spend,this.energyData.octopus_electric.monthly_spend_gbp),reading_30min_kwh:this.getEnergyInKwh(e.octopus_electric_30min,this.energyData.octopus_electric.reading_30min_kwh),day_kwh:this.getEnergyInKwh(e.octopus_electric_day,this.energyData.octopus_electric.day_kwh),week_kwh:this.getEnergyInKwh(e.octopus_electric_week,this.energyData.octopus_electric.week_kwh),month_kwh:this.getEnergyInKwh(e.octopus_electric_month,this.energyData.octopus_electric.month_kwh)};let a=this.getThermostatState(e.thermostat_downstairs,this.energyData.thermostats?.downstairs),o=this.getThermostatState(e.thermostat_upstairs,this.energyData.thermostats?.upstairs);this.energyData.thermostats={downstairs:a,upstairs:o};let l=!1,c=!!(e.thermostat_downstairs&&this._hass?.states?.[e.thermostat_downstairs]),h=!!(e.thermostat_upstairs&&this._hass?.states?.[e.thermostat_upstairs]),u=c||h,d=!!(c&&a.is_heating||h&&o.is_heating||!u&&(a.is_heating||o.is_heating));if(u)if(e.boiler_status&&this._hass?.states?.[e.boiler_status]){let O=(this._hass.states[e.boiler_status].state||"").toLowerCase().trim();["standby","idle","off","ready","waiting","0","false"].includes(O)?l=!1:O==="hot water"||O==="hot_water"?l=!0:l=d}else l=d;else if(e.boiler_status&&this._hass?.states?.[e.boiler_status]){let Y=this._hass.states[e.boiler_status],O=(Y.state||"").toLowerCase().trim(),ne=Y.attributes||{},Se=["heating","heat","firing","on","central heating","hot water","active"],K=["standby","idle","off","ready","waiting","0","false"];if(Se.includes(O)||ne.hvac_action==="heating"||ne.is_heating===!0)l=!0;else if(K.includes(O))l=!1;else{let fe=parseFloat(O);l=isNaN(fe)?!1:fe>.05}}else l=!!(a.is_heating||o.is_heating);let f=l?"Heating":"Standby";this.energyData.octopus_gas={is_active:l,power_kw:l?1.45:0,boiler_status:f,reading_30min_kwh:this.getEnergyInKwh(e.octopus_gas_30min,this.energyData.octopus_gas.reading_30min_kwh),day_kwh:this.getEnergyInKwh(e.octopus_gas_day,this.energyData.octopus_gas.day_kwh),week_kwh:this.getEnergyInKwh(e.octopus_gas_week,this.energyData.octopus_gas.week_kwh),month_kwh:this.getEnergyInKwh(e.octopus_gas_month,this.energyData.octopus_gas.month_kwh),current_rate_p:this.getEntityNumericValue(e.octopus_gas_rate,this.energyData.octopus_gas.current_rate_p),monthly_spend_gbp:this.getEntityNumericValue(e.octopus_gas_spend,this.energyData.octopus_gas.monthly_spend_gbp)};let g=this.getPowerInKw(e.myenergi_power,this.energyData.ev.charger_power_kw),x=e.myenergi_status;if((!x||!this._hass?.states?.[x])&&this._hass?.states){let Y=Object.keys(this._hass.states).find(O=>(O.includes("zappi")||O.includes("myenergi"))&&(O.includes("plug_status")||O.includes("status")));Y&&(x=Y)}let m=this.getEntityState(x,"").toLowerCase().trim(),p=!1,y="Disconnected";m?m.includes("disconn")||m.includes("unplug")||m==="off"||m==="unavailable"||m==="unknown"?(p=!1,y="Disconnected"):m.includes("charg")?(p=!0,y="Charging"):m.includes("connect")||m.includes("wait")||m.includes("pause")||m.includes("plug")||m.includes("complete")||m.includes("stop")?(p=!0,y="Connected (Idle)"):(p=g>.04,y=p?m.charAt(0).toUpperCase()+m.slice(1):"Disconnected"):g>.04?(p=!0,y="Charging"):(p=!1,y="Disconnected");let E=p&&g>.04;E&&(y=`Charging @ ${g.toFixed(1)} kW`),this.energyData.ev={is_charging:E,is_connected:p,status_text:y,charger_power_kw:p?g:0,energy_added_kwh:this.getEnergyInKwh(e.myenergi_energy,this.energyData.ev.energy_added_kwh),charger_mode:g>3?"Fast":"Eco+",battery_soc_pct:this.getEntityNumericValue(e.peugeot_battery,this.energyData.ev.battery_soc_pct),range_miles:this.getEntityNumericValue(e.peugeot_range,this.energyData.ev.range_miles)};let b={};for(let Y of this.customLights){let O=e[`light_${Y.id}`];if(O===void 0&&Y.id==="master_bedroom"&&(O=e.light_master_bedroom||e.light_master),O===void 0&&Y.id==="living_lamp"&&(O=e.light_living_lamp),!O&&Y.entity_id&&(O=Y.entity_id),!O&&this._hass?.states){let ne=[`light.${Y.id}`,`switch.${Y.id}`,`light.${Y.id.replace("_bedroom","")}`,`light.${Y.id.replace("bedroom","bed_")}`];for(let Se of ne)if(this._hass.states[Se]){O=Se;break}}b[Y.id]=this.getLightState(O,this.energyData.room_lights?.[Y.id])}this.energyData.room_lights=b;let T=e.sensor_fridge&&this._hass?this._hass.states[e.sensor_fridge]:null,A=(T?T.state:this.getEntityState(e.sensor_fridge,"")).toLowerCase(),_=T&&(A==="unavailable"||A==="unknown"),M=0;_?M=0:M=this.getPowerInKw(e.sensor_fridge,this.energyData.appliances?.fridge?.power_kw??.085);let D=!_&&(M>.005||A==="on"),P=e.sensor_tv&&this._hass?this._hass.states[e.sensor_tv]:null,N=!1,U=0;if(P){let Y=P.state;N=Y==="on"||Y==="playing"||Y==="paused"||Y==="idle",P.attributes?.unit_of_measurement?(U=mf(Y,P.attributes.unit_of_measurement),N=U>.015):U=N?.095:.001}else this.energyData.appliances?.tv&&(N=!!this.energyData.appliances.tv.is_on,U=this.energyData.appliances.tv.power_kw);let V=e.sensor_washer&&this._hass?this._hass.states[e.sensor_washer]:null,L=(V?V.state:this.getEntityState(e.sensor_washer,"")).toLowerCase(),W=V&&(L==="unavailable"||L==="unknown"),G=0;W?G=0:G=this.getPowerInKw(e.sensor_washer,this.energyData.appliances?.washer?.power_kw??0);let X=!W&&(G>.01||L==="on"||L==="running"),ee=e.light_living_lamp||this.customLights.find(Y=>Y.id==="living_lamp"||Y.name?.toLowerCase().includes("corner lamp"))?.entity_id,q=this.getLightState(ee,this.energyData.appliances?.living_lamp);this.energyData.appliances={fridge:{entity_id:e.sensor_fridge||"",power_kw:M,power_w:_?0:Math.round(M*1e3),is_active:D,state:_?"Unavailable":D?"Running":"Standby"},washer:{entity_id:e.sensor_washer||"",power_kw:G,power_w:W?0:Math.round(G*1e3),is_active:X,state:W?"Unavailable":X?"Running":"Standby"},tv:{entity_id:e.sensor_tv||"",is_on:N,power_kw:U,power_w:Math.round(U*1e3),state:N?"On":"Standby"},living_lamp:q},this.sceneManager&&(this.sceneManager.updateEnergyData(this.energyData),this.sceneManager.updateRoomLights(b),this.sceneManager.updateAppliances(this.energyData.appliances))}getThermostatState(e,t={}){let n={entity_id:e||t?.entity_id||"",current_temp:t?.current_temp??20,target_temp:t?.target_temp??21,hvac_action:t?.hvac_action||"idle",is_heating:t?.is_heating||!1,state:t?.state||"heat"};if(!this._hass||!e)return n;let i=this._hass.states[e];if(!i||i.state==="unavailable"||i.state==="unknown")return n;n.state=i.state;let r=i.attributes||{};if(r.current_temperature!==void 0)n.current_temp=parseFloat(r.current_temperature);else{let g=parseFloat(i.state);isNaN(g)||(n.current_temp=g)}r.temperature!==void 0?n.target_temp=parseFloat(r.temperature):r.target_temp_high!==void 0&&(n.target_temp=parseFloat(r.target_temp_high));let a=(i.state||"").toLowerCase().trim(),o=a==="off"||a==="standby"||a==="idle",l=!o&&(a==="heat"||a==="heating"||a==="auto"||a==="on"||a==="boost"||a==="comfort"||a===""),c=n.target_temp!==null&&!isNaN(n.target_temp),h=n.current_temp!==null&&!isNaN(n.current_temp),u=(r.hvac_action||"").toLowerCase().trim(),d=c&&h&&n.current_temp>=n.target_temp,f=!1;return!o&&l?c&&h?d?f=!1:f=u!=="idle"&&u!=="off":f=u==="heating"||a==="heating":f=!1,n.is_heating=f,n.hvac_action=f?"heating":o?"off":"idle",n.comfort=Wx(n.current_temp),n}getLightState(e,t={}){let n=(e||"").trim(),i=!!(t?.is_on||t?.state==="on"),r=t?.brightness!==void 0?t.brightness:i?255:0,a=t?.rgb_color||null,o={entity_id:n,is_on:i,brightness:r,rgb_color:a};if(!n||!this._hass)return o;let l=this._hass.states[n];if(!l)return o;if(l.state==="unavailable"||l.state==="unknown")return o.is_on=!1,o.brightness=0,o;o.is_on=l.state==="on";let c=l.attributes||{};return o.brightness=c.brightness!==void 0?c.brightness:o.is_on?255:0,c.rgb_color&&Array.isArray(c.rgb_color)&&(o.rgb_color=c.rgb_color),o}toggleLightEntity(e){if(!this._hass||!e)return;let t=e.split(".")[0]||"light";try{this._hass.callService(t,"toggle",{entity_id:e})}catch(n){console.warn("Call service error:",n)}}getCardSize(){return 8}};customElements.define("ha-energy-3d-card",kh);window.customCards=window.customCards||[];window.customCards.push({type:"ha-energy-3d-card",name:"Home Energy 3D Card",description:"Interactive 3D Energy Flow Card for Solax Solar, Octopus Energy, myenergi Zappi, and Peugeot EV",preview:!0});export{kh as HaEnergy3DCard,mf as autoFigureKw,Vx as autoFigureKwh,Wx as getComfortStatus};
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
