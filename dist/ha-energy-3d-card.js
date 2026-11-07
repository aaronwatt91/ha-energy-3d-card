var gf=Object.defineProperty;var _f=(s,e,t)=>()=>{if(t)throw t[0];try{return s&&(e=s(s=0)),e}catch(i){throw t=[i],i}};var xf=(s,e)=>{for(var t in e)gf(s,t,{get:e[t],enumerable:!0})};var ff={};xf(ff,{HaEnergy3DCardEditor:()=>Ml});var Ml,pf=_f(()=>{Ml=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config={}}setConfig(e){this._config=e,this.render()}set hass(e){this._hass=e}render(){let e=this._config;this.shadowRoot.innerHTML=`
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
    `,this.shadowRoot.querySelectorAll("input").forEach(i=>{i.addEventListener("change",n=>{let r=n.target.getAttribute("data-key"),a=n.target.value,o={...this._config,[r]:a},l=new CustomEvent("config-changed",{detail:{config:o},bubbles:!0,composed:!0});this.dispatchEvent(l)})})}};customElements.define("ha-energy-3d-card-editor",Ml)});var Ln={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Pn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Iu=0,uc=1,Du=2;var qr=1,go=2,Hs=3,Xi=0,ii=1,Ct=2,Yn=0,zs=1,Gs=2,dc=3,fc=4,Nu=5;var $n=100,Fu=101,Ou=102,Uu=103,Bu=104,ku=200,Hu=201,zu=202,Gu=203,pc=204,mc=205,Vu=206,Wu=207,Xu=208,qu=209,Yu=210,$u=211,Ku=212,Zu=213,Ju=214,Ua=0,Ba=1,ka=2,vs=3,Ha=4,za=5,Ga=6,Va=7,gc=0,ju=1,Qu=2,qi=0,_c=1,xc=2,yc=3,Yr=4,vc=5,bc=6,Sc=7,jl="attached",ed="detached",Mc=300,Kn=301,Vs=302,_o=303,xo=304,Li=1e3,xi=1001,bs=1002,Tt=1003,yo=1004;var Zn=1005;var It=1006,Ws=1007;var Si=1008;var hi=1009,wc=1010,Ec=1011,Xs=1012,vo=1013,Ni=1014,gi=1015,Fi=1016,bo=1017,So=1018,Jn=1020,Tc=35902,Ac=35899,Rc=1021,Cc=1022,Mi=1023,on=1026,_n=1027,Mo=1028,wo=1029,In=1030,Eo=1031;var To=1033,$r=33776,Kr=33777,Zr=33778,Jr=33779,Ao=35840,Ro=35841,Co=35842,Lo=35843,Po=36196,Io=37492,Do=37496,No=37488,Fo=37489,jr=37490,Oo=37491,Uo=37808,Bo=37809,ko=37810,Ho=37811,zo=37812,Go=37813,Vo=37814,Wo=37815,Xo=37816,qo=37817,Yo=37818,$o=37819,Ko=37820,Zo=37821,Jo=36492,jo=36494,Qo=36495,el=36283,tl=36284,Qr=36285,il=36286;var zn=2300,Gn=2301,Fa=2302,Ql=2303,ec=2400,tc=2401,ic=2402,td=2500;var Lc=0,ea=1,qs=2,id=3200;var nl=0,nd=1,xn="",Lt="srgb",ei="srgb-linear",_r="linear",ot="srgb";var Oa=7680;var sd=519,rd=512,ad=513,od=514,Pc=515,ld=516,cd=517,Ic=518,Dc=519,Nc=35044,Fc=35048;var Oc="300 es",yi=2e3,Ss=2001;function yf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function vf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ms(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function hd(){let s=Ms("canvas");return s.style.display="block",s}var zh={},ws=null;function xr(...s){let e="THREE."+s.shift();ws?ws("log",e,...s):console.log(e,...s)}function ud(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ie(...s){s=ud(s);let e="THREE."+s.shift();if(ws)ws("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function He(...s){s=ud(s);let e="THREE."+s.shift();if(ws)ws("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Hn(...s){let e=s.join(" ");e in zh||(zh[e]=!0,Ie(...s))}function dd(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var fd={[Ua]:Ua,[ka]:Ga,[Ha]:Ha,[vs]:za,[Ba]:Ba,[Ga]:ka,[Va]:Va,[za]:vs},Pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gh=1234567,fr=Math.PI/180,Vn=180/Math.PI;function Yi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[s&255]+$t[s>>8&255]+$t[s>>16&255]+$t[s>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function $e(s,e,t){return Math.max(e,Math.min(t,s))}function Uc(s,e){return(s%e+e)%e}function bf(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function Sf(s,e,t){return s!==e?(t-s)/(e-s):0}function pr(s,e,t){return(1-t)*s+t*e}function Mf(s,e,t,i){return pr(s,e,1-Math.exp(-t*i))}function wf(s,e=1){return e-Math.abs(Uc(s,e*2)-e)}function Ef(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Tf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Af(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Rf(s,e){return s+Math.random()*(e-s)}function Cf(s){return s*(.5-Math.random())}function Lf(s){s!==void 0&&(Gh=s);let e=Gh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pf(s){return s*fr}function If(s){return s*Vn}function Df(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Nf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Bc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ff(s,e,t,i,n){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),f=a((e-i)/2),d=r((i-e)/2),g=a((i-e)/2);switch(n){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*d,o*h,o*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function sl(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function kc(s,e){if(e.constructor===Float32Array)return s;let t=sl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Hc(s,e){if(e.constructor===Float32Array)return s;let t=sl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var Dn={DEG2RAD:fr,RAD2DEG:Vn,generateUUID:Yi,clamp:$e,euclideanModulo:Uc,mapLinear:bf,inverseLerp:Sf,lerp:pr,damp:Mf,pingpong:wf,smoothstep:Ef,smootherstep:Tf,randInt:Af,randFloat:Rf,randFloatSpread:Cf,seededRandom:Lf,degToRad:Pf,radToDeg:If,isPowerOfTwo:Df,ceilPowerOfTwo:Nf,floorPowerOfTwo:Bc,setQuaternionFromProperEuler:Ff,normalize:Hc,denormalize:kc},qc=class qc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qc.prototype.isVector2=!0;var Ee=qc,Gt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],f=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(u!==x||l!==f||c!==d||h!==g){let m=l*f+c*d+h*g+u*x;m<0&&(f=-f,d=-d,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let y=Math.acos(m),E=Math.sin(y);p=Math.sin(p*y)/E,o=Math.sin(o*y)/E,l=l*p+f*o,c=c*p+d*o,h=h*p+g*o,u=u*p+x*o}else{l=l*p+f*o,c=c*p+d*o,h=h*p+g*o,u=u*p+x*o;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),f=l(i/2),d=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-n)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(r-c)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-n)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Yc=class Yc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-r*n),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return El.copy(this).projectOnVector(e),this.sub(El)}reflect(e){return this.sub(El.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yc.prototype.isVector3=!0;var w=Yc,El=new w,Vh=new Gt,$c=class $c{constructor(e,t,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],x=n[0],m=n[3],p=n[6],y=n[1],E=n[4],b=n[7],T=n[2],A=n[5],_=n[8];return r[0]=a*x+o*y+l*T,r[3]=a*m+o*E+l*A,r[6]=a*p+o*b+l*_,r[1]=c*x+h*y+u*T,r[4]=c*m+h*E+u*A,r[7]=c*p+h*b+u*_,r[2]=f*x+d*y+g*T,r[5]=f*m+d*E+g*A,r[8]=f*p+d*b+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=t*u+i*f+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(n*c-h*i)*x,e[2]=(o*i-n*a)*x,e[3]=f*x,e[4]=(h*t-n*l)*x,e[5]=(n*r-o*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Hn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tl.makeScale(e,t)),this}rotate(e){return Hn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tl.makeRotation(-e)),this}translate(e,t){return Hn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$c.prototype.isMatrix3=!0;var We=$c,Tl=new We,Wh=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Of(){let s={enabled:!0,workingColorSpace:ei,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ot&&(n.r=an(n.r),n.g=an(n.g),n.b=an(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(n.r=ys(n.r),n.g=ys(n.g),n.b=ys(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===xn?_r:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[ei]:{primaries:e,whitePoint:i,transfer:_r,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),s}var Qe=Of();function an(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var rs,Wa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rs===void 0&&(rs=Ms("canvas")),rs.width=e.width,rs.height=e.height;let n=rs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=rs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ms("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=an(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(an(t[i]/255)*255):t[i]=an(t[i]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Uf=0,Es=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Al(n[a].image)):r.push(Al(n[a]))}else r=Al(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function Al(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Wa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var Bf=0,Rl=new w,Dt=class s extends Pi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=xi,n=xi,r=It,a=Si,o=Mi,l=hi,c=s.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Yi(),this.name="",this.source=new Es(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Rl).x}get height(){return this.source.getSize(Rl).y}get depth(){return this.source.getSize(Rl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Li:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case bs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Li:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case bs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Mc;Dt.DEFAULT_ANISOTROPY=1;var Kc=class Kc{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,b=(d+1)/2,T=(p+1)/2,A=(h+f)/4,_=(u+x)/4,M=(g+m)/4;return E>b&&E>T?E<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(E),n=A/i,r=_/i):b>T?b<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(b),i=A/n,r=M/n):T<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(T),i=_/r,n=M/r),this.set(i,n,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kc.prototype.isVector4=!0;var ht=Kc,Xa=class extends Pi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Dt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Es(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pi=class extends Xa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},yr=class extends Dt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var qa=class extends Dt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var mo=class mo{constructor(e,t,i,n,r,a,o,l,c,h,u,f,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,h,u,f,d,g,x,m)}set(e,t,i,n,r,a,o,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mo().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/as.setFromMatrixColumn(e,0).length(),r=1/as.setFromMatrixColumn(e,1).length(),a=1/as.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f+x*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f-x*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=a*l,d=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kf,e,Hf)}lookAt(e,t,i){let n=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),yn.crossVectors(i,di),yn.lengthSq()===0&&(Math.abs(i.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),yn.crossVectors(i,di)),yn.normalize(),ha.crossVectors(di,yn),n[0]=yn.x,n[4]=ha.x,n[8]=di.x,n[1]=yn.y,n[5]=ha.y,n[9]=di.y,n[2]=yn.z,n[6]=ha.z,n[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],y=i[3],E=i[7],b=i[11],T=i[15],A=n[0],_=n[4],M=n[8],N=n[12],P=n[1],D=n[5],U=n[9],X=n[13],L=n[2],V=n[6],G=n[10],W=n[14],te=n[3],q=n[7],Y=n[11],F=n[15];return r[0]=a*A+o*P+l*L+c*te,r[4]=a*_+o*D+l*V+c*q,r[8]=a*M+o*U+l*G+c*Y,r[12]=a*N+o*X+l*W+c*F,r[1]=h*A+u*P+f*L+d*te,r[5]=h*_+u*D+f*V+d*q,r[9]=h*M+u*U+f*G+d*Y,r[13]=h*N+u*X+f*W+d*F,r[2]=g*A+x*P+m*L+p*te,r[6]=g*_+x*D+m*V+p*q,r[10]=g*M+x*U+m*G+p*Y,r[14]=g*N+x*X+m*W+p*F,r[3]=y*A+E*P+b*L+T*te,r[7]=y*_+E*D+b*V+T*q,r[11]=y*M+E*U+b*G+T*Y,r[15]=y*N+E*X+b*W+T*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15],y=l*d-c*f,E=o*d-c*u,b=o*f-l*u,T=a*d-c*h,A=a*f-l*h,_=a*u-o*h;return t*(x*y-m*E+p*b)-i*(g*y-m*T+p*A)+n*(g*E-x*T+p*_)-r*(g*b-x*A+m*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+n*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=t*o-i*a,E=t*l-n*a,b=t*c-r*a,T=i*l-n*o,A=i*c-r*o,_=n*c-r*l,M=h*x-u*g,N=h*m-f*g,P=h*p-d*g,D=u*m-f*x,U=u*p-d*x,X=f*p-d*m,L=y*X-E*U+b*D+T*P-A*N+_*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/L;return e[0]=(o*X-l*U+c*D)*V,e[1]=(n*U-i*X-r*D)*V,e[2]=(x*_-m*A+p*T)*V,e[3]=(f*A-u*_-d*T)*V,e[4]=(l*P-a*X-c*N)*V,e[5]=(t*X-n*P+r*N)*V,e[6]=(m*b-g*_-p*E)*V,e[7]=(h*_-f*b+d*E)*V,e[8]=(a*U-o*P+c*M)*V,e[9]=(i*P-t*U-r*M)*V,e[10]=(g*A-x*b+p*y)*V,e[11]=(u*b-h*A-d*y)*V,e[12]=(o*N-a*D-l*M)*V,e[13]=(t*D-i*N+n*M)*V,e[14]=(x*E-g*T-m*y)*V,e[15]=(h*T-u*E+f*y)*V,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,x=a*h,m=a*u,p=o*u,y=l*c,E=l*h,b=l*u,T=i.x,A=i.y,_=i.z;return n[0]=(1-(x+p))*T,n[1]=(d+b)*T,n[2]=(g-E)*T,n[3]=0,n[4]=(d-b)*A,n[5]=(1-(f+p))*A,n[6]=(m+y)*A,n[7]=0,n[8]=(g+E)*_,n[9]=(m-y)*_,n[10]=(1-(f+x))*_,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=as.set(n[0],n[1],n[2]).length(),o=as.set(n[4],n[5],n[6]).length(),l=as.set(n[8],n[9],n[10]).length();r<0&&(a=-a),Ai.copy(this);let c=1/a,h=1/o,u=1/l;return Ai.elements[0]*=c,Ai.elements[1]*=c,Ai.elements[2]*=c,Ai.elements[4]*=h,Ai.elements[5]*=h,Ai.elements[6]*=h,Ai.elements[8]*=u,Ai.elements[9]*=u,Ai.elements[10]*=u,t.setFromRotationMatrix(Ai),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,n,r,a,o=yi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-n),f=(t+e)/(t-e),d=(i+n)/(i-n),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===yi)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ss)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=yi,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-n),f=-(t+e)/(t-e),d=-(i+n)/(i-n),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===yi)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ss)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};mo.prototype.isMatrix4=!0;var ze=mo,as=new w,Ai=new ze,kf=new w(0,0,0),Hf=new w(1,1,1),yn=new w,ha=new w,di=new w,qh=new ze,Yh=new Gt,ln=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER="XYZ";var Ts=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zf=0,$h=new w,os=new Gt,Qi=new ze,ua=new w,sr=new w,Gf=new w,Vf=new Gt,Kh=new w(1,0,0),Zh=new w(0,1,0),Jh=new w(0,0,1),jh={type:"added"},Wf={type:"removed"},ls={type:"childadded",child:null},Cl={type:"childremoved",child:null},ft=class s extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new w,t=new ln,i=new Gt,n=new w(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ze},normalMatrix:{value:new We}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Kh,e)}rotateY(e){return this.rotateOnAxis(Zh,e)}rotateZ(e){return this.rotateOnAxis(Jh,e)}translateOnAxis(e,t){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kh,e)}translateY(e){return this.translateOnAxis(Zh,e)}translateZ(e){return this.translateOnAxis(Jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ua.copy(e):ua.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(sr,ua,this.up):Qi.lookAt(ua,sr,this.up),this.quaternion.setFromRotationMatrix(Qi),n&&(Qi.extractRotation(n.matrixWorld),os.setFromRotationMatrix(Qi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jh),ls.child=e,this.dispatchEvent(ls),ls.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wf),Cl.child=e,this.dispatchEvent(Cl),Cl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jh),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,Gf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,Vf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ft.DEFAULT_UP=new w(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dt=class extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xf={type:"move"},As=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xf)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},da={h:0,s:0,l:0};function Ll(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Re=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Qe.workingColorSpace){if(e=Uc(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ll(a,r,e+1/3),this.g=Ll(a,r,e),this.b=Ll(a,r,e-1/3)}return Qe.colorSpaceToWorking(this,n),this}setStyle(e,t=Lt){function i(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let i=pd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=an(e.r),this.g=an(e.g),this.b=an(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Qe.workingToColorSpace(Kt.copy(this),e),Math.round($e(Kt.r*255,0,255))*65536+Math.round($e(Kt.g*255,0,255))*256+Math.round($e(Kt.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Kt.copy(this),t);let i=Kt.r,n=Kt.g,r=Kt.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Lt){Qe.workingToColorSpace(Kt.copy(this),e);let t=Kt.r,i=Kt.g,n=Kt.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(vn),this.setHSL(vn.h+e,vn.s+t,vn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vn),e.getHSL(da);let i=pr(vn.h,da.h,t),n=pr(vn.s,da.s,t),r=pr(vn.l,da.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new Re;Re.NAMES=pd;var Rs=class extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ri=new w,en=new w,Pl=new w,tn=new w,cs=new w,hs=new w,Qh=new w,Il=new w,Dl=new w,Nl=new w,Fl=new ht,Ol=new ht,Ul=new ht,En=class s{constructor(e=new w,t=new w,i=new w){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ri.subVectors(e,t),n.cross(Ri);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Ri.subVectors(n,t),en.subVectors(i,t),Pl.subVectors(e,t);let a=Ri.dot(Ri),o=Ri.dot(en),l=Ri.dot(Pl),c=en.dot(en),h=en.dot(Pl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,tn.x),l.addScaledVector(a,tn.y),l.addScaledVector(o,tn.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return Fl.setScalar(0),Ol.setScalar(0),Ul.setScalar(0),Fl.fromBufferAttribute(e,t),Ol.fromBufferAttribute(e,i),Ul.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Fl,r.x),a.addScaledVector(Ol,r.y),a.addScaledVector(Ul,r.z),a}static isFrontFacing(e,t,i,n){return Ri.subVectors(i,t),en.subVectors(e,t),Ri.cross(en).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),en.subVectors(this.a,this.b),Ri.cross(en).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,a,o;cs.subVectors(n,i),hs.subVectors(r,i),Il.subVectors(e,i);let l=cs.dot(Il),c=hs.dot(Il);if(l<=0&&c<=0)return t.copy(i);Dl.subVectors(e,n);let h=cs.dot(Dl),u=hs.dot(Dl);if(h>=0&&u<=h)return t.copy(n);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(cs,a);Nl.subVectors(e,r);let d=cs.dot(Nl),g=hs.dot(Nl);if(g>=0&&d<=g)return t.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(hs,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Qh.subVectors(r,n),o=(u-h)/(u-h+(d-g)),t.copy(n).addScaledVector(Qh,o);let p=1/(m+x+f);return a=x*p,o=f*p,t.copy(i).addScaledVector(cs,a).addScaledVector(hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mi=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ci):Ci.fromBufferAttribute(r,a),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fa.copy(i.boundingBox)),fa.applyMatrix4(e.matrixWorld),this.union(fa)}let n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),pa.subVectors(this.max,rr),us.subVectors(e.a,rr),ds.subVectors(e.b,rr),fs.subVectors(e.c,rr),bn.subVectors(ds,us),Sn.subVectors(fs,ds),On.subVectors(us,fs);let t=[0,-bn.z,bn.y,0,-Sn.z,Sn.y,0,-On.z,On.y,bn.z,0,-bn.x,Sn.z,0,-Sn.x,On.z,0,-On.x,-bn.y,bn.x,0,-Sn.y,Sn.x,0,-On.y,On.x,0];return!Bl(t,us,ds,fs,pa)||(t=[1,0,0,0,1,0,0,0,1],!Bl(t,us,ds,fs,pa))?!1:(ma.crossVectors(bn,Sn),t=[ma.x,ma.y,ma.z],Bl(t,us,ds,fs,pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},nn=[new w,new w,new w,new w,new w,new w,new w,new w],Ci=new w,fa=new mi,us=new w,ds=new w,fs=new w,bn=new w,Sn=new w,On=new w,rr=new w,pa=new w,ma=new w,Un=new w;function Bl(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Un.fromArray(s,r);let o=n.x*Math.abs(Un.x)+n.y*Math.abs(Un.y)+n.z*Math.abs(Un.z),l=e.dot(Un),c=t.dot(Un),h=i.dot(Un);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Rt=new w,ga=new Ee,qf=0,qt=class extends Pi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nc,this.updateRanges=[],this.gpuType=gi,this.version=0,this._normalizationScale=e!==void 0?sl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ga.fromBufferAttribute(this,t),ga.applyMatrix3(e),this.setXY(t,ga.x,ga.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):kc(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hc(e,this.array)}};var vr=class extends qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var br=class extends qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var nt=class extends qt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Yf=new mi,ar=new w,kl=new w,oi=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Yf.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);let t=ar.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ar,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(kl)),this.expandByPoint(ar.copy(e.center).sub(kl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},$f=0,_i=new ze,Hl=new ft,ps=new w,fi=new mi,or=new mi,zt=new w,St=class s extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yf(e)?br:vr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,i){return _i.makeTranslation(e,t,i),this.applyMatrix4(_i),this}scale(e,t,i){return _i.makeScale(e,t,i),this.applyMatrix4(_i),this}lookAt(e){return Hl.lookAt(e),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];fi.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let i=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];or.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(fi.min,or.min),fi.expandByPoint(zt),zt.addVectors(fi.max,or.max),fi.expandByPoint(zt)):(fi.expandByPoint(or.min),fi.expandByPoint(or.max))}fi.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)zt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(zt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)zt.fromBufferAttribute(o,c),l&&(ps.fromBufferAttribute(e,c),zt.add(ps)),n=Math.max(n,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new qt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let N=0;N<i.count;N++)o[N]=new w,l[N]=new w;let h=new w,u=new w,f=new w,d=new Ee,g=new Ee,x=new Ee,m=new w,p=new w;function y(N,P,D){c[N]=c[P]=c[D]=1,h.fromBufferAttribute(i,N),u.fromBufferAttribute(i,P),f.fromBufferAttribute(i,D),d.fromBufferAttribute(r,N),g.fromBufferAttribute(r,P),x.fromBufferAttribute(r,D),u.sub(h),f.sub(h),g.sub(d),x.sub(d);let U=1/(g.x*x.y-x.x*g.y);isFinite(U)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(U),p.copy(f).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(U),o[N].add(m),o[P].add(m),o[D].add(m),l[N].add(p),l[P].add(p),l[D].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let N=0,P=E.length;N<P;++N){let D=E[N],U=D.start,X=D.count;for(let L=U,V=U+X;L<V;L+=3)y(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let b=new w,T=new w,A=new w,_=new w;function M(N){A.fromBufferAttribute(n,N),_.copy(A);let P=o[N];b.copy(P),b.sub(A.multiplyScalar(A.dot(P))).normalize(),T.crossVectors(_,P);let U=T.dot(l[N])<0?-1:1;a.setXYZW(N,b.x,b.y,b.z,U)}for(let N=0,P=i.count;N<P;++N)c[N]&&M(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let n=new w,r=new w,a=new w,o=new w,l=new w,c=new w,h=new w,u=new w;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)n.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new qt(f,h,u)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nc,this.updateRanges=[],this.version=0,this.uuid=Yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=eu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=eu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function eu(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Yi()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var jt=new w,Ls=class s{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n,this._normalizationScale=e!==void 0?sl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){xr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){xr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):kc(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hc(e,this.data.array)}},zl=new w,Kf=new w,Zf=new We,Qt=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=zl.subVectors(i,t).cross(Kf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(zl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Zf.getNormalMatrix(e),n=this.coplanarPoint(zl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Jf=0,li=class extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=zs,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oa,this.stencilZFail=Oa,this.stencilZPass=Oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Qt().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ee().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var sn=new w,Gl=new w,_a=new w,xa=new w,Hi=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.origin).addScaledVector(this.direction,t),sn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Gl.copy(e).add(t).multiplyScalar(.5),_a.copy(t).sub(e).normalize(),xa.copy(this.origin).sub(Gl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(_a),o=xa.dot(this.direction),l=-xa.dot(_a),c=xa.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Gl).addScaledVector(_a,f),d}intersectSphere(e,t){if(e.radius<0)return null;sn.subVectors(e.center,this.origin);let i=sn.dot(this.direction),n=sn.dot(sn)-i*i,r=e.radius*e.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,i,n,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,d=e.z-a.z,g=t.x-a.x,x=t.y-a.y,m=t.z-a.z,p=i.x-a.x,y=i.y-a.y,E=i.z-a.z,b=Math.abs(l),T=Math.abs(c),A=Math.abs(h),_,M,N,P,D,U,X,L,V,G,W,te;if(b>=T&&b>=A?(N=l,U=u,V=g,te=p,l>=0?(_=c,M=h,P=f,D=d,X=x,L=m,G=y,W=E):(_=h,M=c,P=d,D=f,X=m,L=x,G=E,W=y)):T>=A?(N=c,U=f,V=x,te=y,c>=0?(_=h,M=l,P=d,D=u,X=m,L=g,G=E,W=p):(_=l,M=h,P=u,D=d,X=g,L=m,G=p,W=E)):(N=h,U=d,V=m,te=E,h>=0?(_=l,M=c,P=u,D=f,X=g,L=x,G=p,W=y):(_=c,M=l,P=f,D=u,X=x,L=g,G=y,W=p)),N===0)return null;let q=_/N,Y=M/N,F=1/N,ne=P-q*U,Me=D-Y*U,K=X-q*V,me=L-Y*V,ye=G-q*te,oe=W-Y*te,ee=ye*me-oe*K,xe=ne*oe-Me*ye,Ae=K*Me-me*ne;if(n){if(ee<0||xe<0||Ae<0)return null}else if((ee<0||xe<0||Ae<0)&&(ee>0||xe>0||Ae>0))return null;let ve=ee+xe+Ae;if(ve===0)return null;let Be=F*(ee*U+xe*V+Ae*te);return(ve>0?Be<0:Be>0)?null:this.at(Be/ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gt=class extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},tu=new ze,Bn=new Hi,ya=new oi,iu=new w,va=new w,ba=new w,Sa=new w,Vl=new w,Ma=new w,nu=new w,wa=new w,ie=class extends ft{constructor(e=new St,t=new gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){Ma.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Vl.fromBufferAttribute(u,e),a?Ma.addScaledVector(Vl,h):Ma.addScaledVector(Vl.sub(t),h))}t.add(Ma)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(r),Bn.copy(e.ray).recast(e.near),!(ya.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(ya,iu)===null||Bn.origin.distanceToSquared(iu)>(e.far-e.near)**2))&&(tu.copy(r).invert(),Bn.copy(e.ray).applyMatrix4(tu),!(i.boundingBox!==null&&Bn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Bn)))}_computeIntersections(e,t,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let b=y,T=E;b<T;b+=3){let A=o.getX(b),_=o.getX(b+1),M=o.getX(b+2);n=Ea(this,p,e,i,c,h,u,A,_,M),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=o.getX(m),E=o.getX(m+1),b=o.getX(m+2);n=Ea(this,a,e,i,c,h,u,y,E,b),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=y,T=E;b<T;b+=3){let A=b,_=b+1,M=b+2;n=Ea(this,p,e,i,c,h,u,A,_,M),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=m,E=m+1,b=m+2;n=Ea(this,a,e,i,c,h,u,y,E,b),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function jf(s,e,t,i,n,r,a,o){let l;if(e.side===ii?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===Xi,o),l===null)return null;wa.copy(o),wa.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(wa);return c<t.near||c>t.far?null:{distance:c,point:wa.clone(),object:s}}function Ea(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,va),s.getVertexPosition(l,ba),s.getVertexPosition(c,Sa);let h=jf(s,e,t,i,va,ba,Sa,nu);if(h){let u=new w;En.getBarycoord(nu,va,ba,Sa,u),n&&(h.uv=En.getInterpolatedAttribute(n,o,l,c,u,new Ee)),r&&(h.uv1=En.getInterpolatedAttribute(r,o,l,c,u,new Ee)),a&&(h.normal=En.getInterpolatedAttribute(a,o,l,c,u,new w),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new w,materialIndex:0};En.getNormal(va,ba,Sa,f.normal),h.face=f,h.barycoord=u}return h}var lr=new ht,su=new ht,ru=new ht,Qf=new ht,au=new ze,Ta=new w,Wl=new oi,ou=new ze,Xl=new Hi,Sr=class extends ie{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jl,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ta),this.boundingBox.expandByPoint(Ta)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new oi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ta),this.boundingSphere.expandByPoint(Ta)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wl.copy(this.boundingSphere),Wl.applyMatrix4(n),e.ray.intersectsSphere(Wl)!==!1&&(ou.copy(n).invert(),Xl.copy(e.ray).applyMatrix4(ou),!(this.boundingBox!==null&&Xl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ht,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===jl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ed?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;su.fromBufferAttribute(n.attributes.skinIndex,e),ru.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(lr.copy(t),t.set(0,0,0,0)):(lr.set(t.x,t.y,t.z,1),t.set(0,0,0)),lr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=ru.getComponent(r);if(a!==0){let o=su.getComponent(r);au.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Qf.copy(lr).applyMatrix4(au),a)}}return t.isVector4&&(t.w=lr.w),t.applyMatrix4(this.bindMatrixInverse)}},Ps=class extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},Is=class extends Dt{constructor(e=null,t=1,i=1,n,r,a,o,l,c=Tt,h=Tt,u,f){super(null,a,o,l,c,h,n,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},lu=new ze,ep=new ze,Mr=class s{constructor(e=[],t=[]){this.uuid=Yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new ze;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:ep;lu.multiplyMatrices(o,t[r]),lu.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Is(t,e,e,Mi,gi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let r=e.bones[i],a=t[r];a===void 0&&(Ie("Skeleton: No bone found with UUID:",r),a=new Ps),this.bones.push(a),this.boneInverses.push(new ze().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){let a=t[n];e.bones.push(a.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}},cn=class extends qt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ms=new ze,cu=new ze,Aa=[],hu=new mi,tp=new ze,cr=new ie,hr=new oi,Wn=class extends ie{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,tp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ms),hu.copy(e.boundingBox).applyMatrix4(ms),this.boundingBox.union(hu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ms),hr.copy(e.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(i),e.ray.intersectsSphere(hr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,ms),cu.multiplyMatrices(i,ms),cr.matrixWorld=cu,cr.raycast(e,Aa);for(let a=0,o=Aa.length;a<o;a++){let l=Aa[a];l.instanceId=r,l.object=this,t.push(l)}Aa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new cn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Is(new Float32Array(n*this.count),n,this.count,Mo,gi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},kn=new oi,ip=new Ee(.5,.5),Ra=new w,Tn=class{constructor(e=new Qt,t=new Qt,i=new Qt,n=new Qt,r=new Qt,a=new Qt){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yi,i=!1){let n=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],y=r[12],E=r[13],b=r[14],T=r[15];if(n[0].setComponents(c-a,d-h,p-g,T-y).normalize(),n[1].setComponents(c+a,d+h,p+g,T+y).normalize(),n[2].setComponents(c+o,d+u,p+x,T+E).normalize(),n[3].setComponents(c-o,d-u,p-x,T-E).normalize(),i)n[4].setComponents(l,f,m,b).normalize(),n[5].setComponents(c-l,d-f,p-m,T-b).normalize();else if(n[4].setComponents(c-l,d-f,p-m,T-b).normalize(),t===yi)n[5].setComponents(c+l,d+f,p+m,T+b).normalize();else if(t===Ss)n[5].setComponents(l,f,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(e){kn.center.set(0,0,0);let t=ip.distanceTo(e.center);return kn.radius=.7071067811865476+t,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Ra.x=n.normal.x>0?e.max.x:e.min.x,Ra.y=n.normal.y>0?e.max.y:e.min.y,Ra.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},uu=new ze,Ya=class s{constructor(){this.coordinateSystem=yi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let r=t[n];uu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new Tn),i[n].setFromProjectionMatrix(uu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++)t[n]===void 0&&(t[n]=new Tn),t[n].copy(i[n]);return this._count=e._count,this}clone(){return new s().copy(this)}};var An=class extends li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$a=new w,Ka=new w,du=new ze,ur=new Hi,Ca=new oi,ql=new w,fu=new w,hn=class extends ft{constructor(e=new St,t=new An){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)$a.fromBufferAttribute(t,n-1),Ka.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=$a.distanceTo(Ka);e.setAttribute("lineDistance",new nt(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(n),Ca.radius+=r,e.ray.intersectsSphere(Ca)===!1)return;du.copy(n).invert(),ur.copy(e.ray).applyMatrix4(du);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=c){let p=h.getX(x),y=h.getX(x+1),E=La(this,e,ur,l,p,y,x);E&&t.push(E)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),p=La(this,e,ur,l,x,m,g-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=c){let p=La(this,e,ur,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=La(this,e,ur,l,g-1,d,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function La(s,e,t,i,n,r,a){let o=s.geometry.attributes.position;if($a.fromBufferAttribute(o,n),Ka.fromBufferAttribute(o,r),t.distanceSqToSegment($a,Ka,ql,fu)>i)return;ql.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(ql);if(!(c<e.near||c>e.far))return{distance:c,point:fu.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var pu=new w,mu=new w,wr=class extends hn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)pu.fromBufferAttribute(t,n),mu.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+pu.distanceTo(mu);e.setAttribute("lineDistance",new nt(i,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Er=class extends hn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ds=class extends li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gu=new ze,nc=new Hi,Pa=new oi,Ia=new w,Tr=class extends ft{constructor(e=new St,t=new Ds){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(n),Pa.radius+=r,e.ray.intersectsSphere(Pa)===!1)return;gu.copy(n).invert(),nc.copy(e.ray).applyMatrix4(gu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);Ia.fromBufferAttribute(u,m),_u(Ia,m,l,n,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,x=d;g<x;g++)Ia.fromBufferAttribute(u,g),_u(Ia,g,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _u(s,e,t,i,n,r,a){let o=nc.distanceSqToPoint(s);if(o<t){let l=new w;nc.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ar=class extends Dt{constructor(e=[],t=Kn,i,n,r,a,o,l,c,h){super(e,t,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Rr=class extends Dt{constructor(e,t,i,n,r,a,o,l,c){super(e,t,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var un=class extends Dt{constructor(e,t,i=Ni,n,r,a,o=Tt,l=Tt,c,h=on,u=1){if(h!==on&&h!==_n)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Es(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Cr=class extends un{constructor(e,t=Ni,i=Kn,n,r,a=Tt,o=Tt,l,c=on){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,n,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Lr=class extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fe=class s extends St{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(u,2));function g(x,m,p,y,E,b,T,A,_,M,N){let P=b/_,D=T/M,U=b/2,X=T/2,L=A/2,V=_+1,G=M+1,W=0,te=0,q=new w;for(let Y=0;Y<G;Y++){let F=Y*D-X;for(let ne=0;ne<V;ne++){let Me=ne*P-U;q[x]=Me*y,q[m]=F*E,q[p]=L,c.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[p]=A>0?1:-1,h.push(q.x,q.y,q.z),u.push(ne/_),u.push(1-Y/M),W+=1}}for(let Y=0;Y<M;Y++)for(let F=0;F<_;F++){let ne=f+F+V*Y,Me=f+F+V*(Y+1),K=f+(F+1)+V*(Y+1),me=f+(F+1)+V*Y;l.push(ne,Me,me),l.push(Me,K,me),te+=6}o.addGroup(d,te,N),d+=te,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Pr=class s extends St{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new w,h=new Ee;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=i+u/t*n;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},xt=class s extends St{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=i/2,p=0;y(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(d,2));function y(){let b=new w,T=new w,A=0,_=(t-e)/i;for(let M=0;M<=r;M++){let N=[],P=M/r,D=P*(t-e)+e;for(let U=0;U<=n;U++){let X=U/n,L=X*l+o,V=Math.sin(L),G=Math.cos(L);T.x=D*V,T.y=-P*i+m,T.z=D*G,u.push(T.x,T.y,T.z),b.set(V,_,G).normalize(),f.push(b.x,b.y,b.z),d.push(X,1-P),N.push(g++)}x.push(N)}for(let M=0;M<n;M++)for(let N=0;N<r;N++){let P=x[N][M],D=x[N+1][M],U=x[N+1][M+1],X=x[N][M+1];(e>0||N!==0)&&(h.push(P,D,X),A+=3),(t>0||N!==r-1)&&(h.push(D,U,X),A+=3)}c.addGroup(p,A,0),p+=A}function E(b){let T=g,A=new Ee,_=new w,M=0,N=b===!0?e:t,P=b===!0?1:-1;for(let U=1;U<=n;U++)u.push(0,m*P,0),f.push(0,P,0),d.push(.5,.5),g++;let D=g;for(let U=0;U<=n;U++){let L=U/n*l+o,V=Math.cos(L),G=Math.sin(L);_.x=N*G,_.y=m*P,_.z=N*V,u.push(_.x,_.y,_.z),f.push(0,P,0),A.x=V*.5+.5,A.y=G*.5*P+.5,d.push(A.x,A.y),g++}for(let U=0;U<n;U++){let X=T+U,L=D+U;b===!0?h.push(L,L+1,X):h.push(L+1,L,X),M+=3}c.addGroup(p,M,b===!0?1:2),p+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);let h=i[n],f=i[n+1]-h,d=(a-h)/f;return(n+d)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=t||(a.isVector2?new Ee:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new w,n=[],r=[],a=[],o=new w,l=new ze;for(let d=0;d<=e;d++){let g=d/e;n[d]=this.getTangentAt(g,new w)}r[0]=new w,a[0]=new w;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos($e(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(n[d],r[d])}if(t===!0){let d=Math.acos($e(r[0].dot(r[e]),-1,1));d/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],d*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ir=class extends vi{constructor(e=0,t=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ee){let i=t,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Za=class extends Ir{constructor(e,t,i,n,r,a){super(e,t,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function zc(){let s=0,e=0,t=0,i=0;function n(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,n(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+i*o}}}var xu=new w,yu=new w,Yl=new zc,$l=new zc,Kl=new zc,Ii=class extends vi{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new w){let i=t,n=this.points,r=n.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(yu.subVectors(n[0],n[1]).add(n[0]),c=yu);let u=n[o%r],f=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(xu.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=xu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Yl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),$l.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),Kl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Yl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),$l.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Kl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Yl.calc(l),$l.calc(l),Kl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new w().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function vu(s,e,t,i,n){let r=(i-e)*.5,a=(n-t)*.5,o=s*s,l=s*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*s+t}function np(s,e){let t=1-s;return t*t*e}function sp(s,e){return 2*(1-s)*s*e}function rp(s,e){return s*s*e}function mr(s,e,t,i){return np(s,e)+sp(s,t)+rp(s,i)}function ap(s,e){let t=1-s;return t*t*t*e}function op(s,e){let t=1-s;return 3*t*t*s*e}function lp(s,e){return 3*(1-s)*s*s*e}function cp(s,e){return s*s*s*e}function gr(s,e,t,i,n){return ap(s,e)+op(s,t)+lp(s,i)+cp(s,n)}var Ja=class extends vi{constructor(e=new Ee,t=new Ee,i=new Ee,n=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new Ee){let i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(gr(e,n.x,r.x,a.x,o.x),gr(e,n.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ja=class extends vi{constructor(e=new w,t=new w,i=new w,n=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new w){let i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(gr(e,n.x,r.x,a.x,o.x),gr(e,n.y,r.y,a.y,o.y),gr(e,n.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qa=class extends vi{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eo=class extends vi{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},to=class extends vi{constructor(e=new Ee,t=new Ee,i=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ee){let i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(mr(e,n.x,r.x,a.x),mr(e,n.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dr=class extends vi{constructor(e=new w,t=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){let i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(mr(e,n.x,r.x,a.x),mr(e,n.y,r.y,a.y),mr(e,n.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},io=class extends vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){let i=t,n=this.points,r=(n.length-1)*e,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(vu(o,l.x,c.x,h.x,u.x),vu(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new Ee().fromArray(n))}return this}},hp=Object.freeze({__proto__:null,ArcCurve:Za,CatmullRomCurve3:Ii,CubicBezierCurve:Ja,CubicBezierCurve3:ja,EllipseCurve:Ir,LineCurve:Qa,LineCurve3:eo,QuadraticBezierCurve:to,QuadraticBezierCurve3:Dr,SplineCurve:io});var zi=class s extends St{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*f-a;for(let E=0;E<c;E++){let b=E*u-r;g.push(b,-y,0),x.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let E=y+c*p,b=y+c*(p+1),T=y+1+c*(p+1),A=y+1+c*p;d.push(E,b,A),d.push(b,T,A)}this.setIndex(d),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Nr=class s extends St{constructor(e=.5,t=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],h=[],u=e,f=(t-e)/n,d=new w,g=new Ee;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){let p=r+m/i*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<n;x++){let m=x*(i+1);for(let p=0;p<i;p++){let y=p+m,E=y,b=y+i+1,T=y+i+2,A=y+1;o.push(E,b,A),o.push(b,T,A)}}this.setIndex(o),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Di=class s extends St{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new w,f=new w,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let y=[],E=p/i,b=a+E*o,T=e*Math.cos(b),A=Math.sqrt(e*e-T*T),_=0;p===0&&a===0?_=.5/t:p===i&&l===Math.PI&&(_=-.5/t);for(let M=0;M<=t;M++){let N=M/t,P=n+N*r;u.x=-A*Math.cos(P),u.y=T,u.z=A*Math.sin(P),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(N+_,1-E),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){let E=h[p][y+1],b=h[p][y],T=h[p+1][y],A=h[p+1][y+1];(p!==0||a>0)&&d.push(E,b,A),(p!==i-1||l<Math.PI)&&d.push(b,T,A)}this.setIndex(d),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ns=class s extends St{constructor(e=1,t=.4,i=12,n=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],u=[],f=new w,d=new w,g=new w;for(let x=0;x<=i;x++){let m=a+x/i*o;for(let p=0;p<=n;p++){let y=p/n*r;d.x=(e+t*Math.cos(m))*Math.cos(y),d.y=(e+t*Math.cos(m))*Math.sin(y),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),g.subVectors(d,f).normalize(),h.push(g.x,g.y,g.z),u.push(p/n),u.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=n;m++){let p=(n+1)*x+m-1,y=(n+1)*(x-1)+m-1,E=(n+1)*(x-1)+m,b=(n+1)*x+m;l.push(p,y,b),l.push(y,E,b)}this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Fr=class s extends St{constructor(e=new Dr(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new w,l=new w,c=new Ee,h=new w,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(d,2));function x(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),y(),p()}function m(E){h=e.getPointAt(E/t,h);let b=a.normals[E],T=a.binormals[E];for(let A=0;A<=n;A++){let _=A/n*Math.PI*2,M=Math.sin(_),N=-Math.cos(_);l.x=N*b.x+M*T.x,l.y=N*b.y+M*T.y,l.z=N*b.z+M*T.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=t;E++)for(let b=1;b<=n;b++){let T=(n+1)*(E-1)+(b-1),A=(n+1)*E+(b-1),_=(n+1)*E+b,M=(n+1)*(E-1)+b;g.push(T,A,M),g.push(A,_,M)}}function y(){for(let E=0;E<=t;E++)for(let b=0;b<=n;b++)c.x=E/t,c.y=b/n,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new hp[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function jn(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];if(bu(n))n.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(bu(n[0])){let r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();e[t][i]=r}else e[t][i]=n.slice();else e[t][i]=n}}return e}function Zt(s){let e={};for(let t=0;t<s.length;t++){let i=jn(s[t]);for(let n in i)e[n]=i[n]}return e}function bu(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function up(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Gc(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var md={clone:jn,merge:Zt},dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gi=class extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dp,this.fragmentShader=fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jn(e.uniforms),this.uniformsGroups=up(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new Re().setHex(n.value);break;case"v2":this.uniforms[i].value=new Ee().fromArray(n.value);break;case"v3":this.uniforms[i].value=new w().fromArray(n.value);break;case"v4":this.uniforms[i].value=new ht().fromArray(n.value);break;case"m3":this.uniforms[i].value=new We().fromArray(n.value);break;case"m4":this.uniforms[i].value=new ze().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},no=class extends Gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Te=class extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ti=class extends Te{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Hn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Hn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var so=class extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ro=class extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function wn(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function dr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function pp(s){function e(n,r){return s[n]-s[r]}let t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function Su(s,e,t){let i=s.length,n=new s.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)n[a++]=s[o+l]}return n}function mp(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[n++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=s[n++];while(r!==void 0)}var Vi=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ao=class extends Vi{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ec,endingEnd:ec}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case tc:r=e,o=2*t-i;break;case ic:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case tc:a=e,l=2*i-t;break;case ic:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(n-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,E=(-1-d)*m+(1.5+d)*x+.5*g,b=d*m-d*x;for(let T=0;T!==o;++T)r[T]=p*a[h+T]+y*a[c+T]+E*a[l+T]+b*a[u+T];return r}},oo=class extends Vi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},lo=class extends Vi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},co=class extends Vi{interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-t)/(n-t),x=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*x+a[l+m]*g;return r}let f=o*2,d=e-1;for(let g=0;g!==o;++g){let x=a[c+g],m=a[l+g],p=d*f+g*2,y=u[p],E=u[p+1],b=e*f+g*2,T=h[b],A=h[b+1],_=_p(i,t,y,T,n);r[g]=gd(_,x,E,A,m)}return r}};function gd(s,e,t,i,n){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*i+s*s*s*n}function gp(s,e,t,i,n){let r=1-s;return 3*r*r*(t-e)+6*r*s*(i-t)+3*s*s*(n-i)}function _p(s,e,t,i,n){let r=(s-e)/(n-e);for(let a=0;a<8;a++){let o=gd(r,e,t,i,n)-s;if(Math.abs(o)<1e-10)break;let l=gp(r,e,t,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var ci=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wn(t,this.TimeBufferType),this.values=wn(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:wn(e.times,Array),values:wn(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),dr(e.settings)&&(i.settings={inTangents:wn(e.settings.inTangents,Array),outTangents:wn(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new co(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case zn:t=this.InterpolantFactoryMethodDiscrete;break;case Gn:t=this.InterpolantFactoryMethodLinear;break;case Fa:t=this.InterpolantFactoryMethodSmooth;break;case Ql:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ie("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zn;case this.InterpolantFactoryMethodLinear:return Gn;case this.InterpolantFactoryMethodSmooth:return Fa;case this.InterpolantFactoryMethodBezier:return Ql}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;dr(this.settings)&&(Mu(this.settings.inTangents,e),Mu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;dr(this.settings)&&(wu(this.settings.inTangents,e),wu(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){He("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){He("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&vf(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){He("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Fa,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{let u=o*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,f=a*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,dr(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Mu(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]+=e}function wu(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]*=e}ci.prototype.ValueTypeName="";ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=Gn;var dn=class extends ci{constructor(e,t,i){super(e,t,i)}};dn.prototype.ValueTypeName="bool";dn.prototype.ValueBufferType=Array;dn.prototype.DefaultInterpolation=zn;dn.prototype.InterpolantFactoryMethodLinear=void 0;dn.prototype.InterpolantFactoryMethodSmooth=void 0;var Or=class extends ci{constructor(e,t,i,n){super(e,t,i,n)}};Or.prototype.ValueTypeName="color";var fn=class extends ci{constructor(e,t,i,n){super(e,t,i,n)}};fn.prototype.ValueTypeName="number";var ho=class extends Vi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)Gt.slerpFlat(r,0,a,c-o,a,c,l);return r}},pn=class extends ci{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new ho(this.times,this.values,this.getValueSize(),e)}};pn.prototype.ValueTypeName="quaternion";pn.prototype.InterpolantFactoryMethodSmooth=void 0;var mn=class extends ci{constructor(e,t,i){super(e,t,i)}};mn.prototype.ValueTypeName="string";mn.prototype.ValueBufferType=Array;mn.prototype.DefaultInterpolation=zn;mn.prototype.InterpolantFactoryMethodLinear=void 0;mn.prototype.InterpolantFactoryMethodSmooth=void 0;var Rn=class extends ci{constructor(e,t,i,n){super(e,t,i,n)}};Rn.prototype.ValueTypeName="vector";var Ur=class{constructor(e="",t=-1,i=[],n=td){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Yi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(yp(i[a]).scale(n));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(ci.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=pp(l);l=Su(l,1,h),c=Su(c,1,h),!n&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new fn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=n[u];f||(n[u]=f=[]),f.push(c)}}let a=[];for(let o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function xp(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fn;case"vector":case"vector2":case"vector3":case"vector4":return Rn;case"color":return Or;case"quaternion":return pn;case"bool":case"boolean":return dn;case"string":return mn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function yp(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=xp(s.type);if(s.times===void 0){let i=[],n=[];mp(s.keys,i,n,"value"),s.times=i,s.values=n}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),dr(s.settings)&&(t.settings={inTangents:wn(s.settings.inTangents,Float32Array),outTangents:wn(s.settings.outTangents,Float32Array)}),t}var ki={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Eu(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Eu(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Eu(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var uo=class{constructor(e,t,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_d=new uo,Wi=class{constructor(e){this.manager=e!==void 0?e:_d,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Wi.DEFAULT_MATERIAL_NAME="__DEFAULT";var rn={},sc=class extends Error{constructor(e,t){super(e),this.response=t}},Fs=class extends Wi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ki.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(rn[e]!==void 0){rn[e].push({onLoad:t,onProgress:i,onError:n});return}rn[e]=[],rn[e].push({onLoad:t,onProgress:i,onError:n});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=rn[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,x=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:E,value:b})=>{if(E)p.close();else{x+=b.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let A=0,_=h.length;A<_;A++){let M=h[A];M.onProgress&&M.onProgress(T)}p.enqueue(b),y()}},E=>{p.error(E)})}}});return new Response(m)}else throw new sc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{ki.add(`file:${e}`,c);let h=rn[e];delete rn[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=rn[e];if(h===void 0)throw this.manager.itemError(e),c;delete rn[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var gs=new WeakMap,fo=class extends Wi{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ki.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=gs.get(a);u===void 0&&(u=[],gs.set(a,u)),u.push({onLoad:t,onError:n})}return a}let o=Ms("img");function l(){h(),t&&t(this);let u=gs.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}gs.delete(this),r.manager.itemEnd(e)}function c(u){h(),n&&n(u),ki.remove(`image:${e}`);let f=gs.get(this)||[];for(let d=0;d<f.length;d++){let g=f[d];g.onError&&g.onError(u)}gs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ki.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Br=class extends Wi{constructor(e){super(e)}load(e,t,i,n){let r=new Dt,a=new fo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}},Cn=class extends ft{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},kr=class extends Cn{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Zl=new ze,Tu=new w,Au=new w,Os=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tn,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Tu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tu),Au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Au),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){Zl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Zl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;e.coordinateSystem===Ss||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Da=new w,Na=new Gt,Bi=new w,Hr=class extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Da,Na,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Da,Na,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Da,Na,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Da,Na,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Mn=new w,Ru=new Ee,Cu=new Ee,Pt=class extends Hr{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vn*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z)}getViewSize(e,t){return this.getViewBounds(e,Ru,Cu),t.subVectors(Cu,Ru)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fr*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},rc=class extends Os{constructor(){super(new Pt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Vn*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},zr=class extends Cn{constructor(e,t,i=0,n=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new rc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ac=class extends Os{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0}},bi=class extends Cn{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new ac}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Xn=class extends Hr{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},oc=class extends Os{constructor(){super(new Xn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qn=class extends Cn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new oc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Gr=class extends Cn{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var gn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Jl=new WeakMap,Vr=class extends Wi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ki.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Jl.has(a)===!0?(n&&n(Jl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ki.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){n&&n(c),Jl.set(l,c),ki.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ki.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var _s=-90,xs=1,Us=class extends ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Pt(_s,xs,e,t);n.layers=this.layers,this.add(n);let r=new Pt(_s,xs,e,t);r.layers=this.layers,this.add(r);let a=new Pt(_s,xs,e,t);a.layers=this.layers,this.add(a);let o=new Pt(_s,xs,e,t);o.layers=this.layers,this.add(o);let l=new Pt(_s,xs,e,t);l.layers=this.layers,this.add(l);let c=new Pt(_s,xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ss)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},po=class extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Vc="\\[\\]\\.:\\/",vp=new RegExp("["+Vc+"]","g"),Wc="[^"+Vc+"]",bp="[^"+Vc.replace("\\.","")+"]",Sp=/((?:WC+[\/:])*)/.source.replace("WC",Wc),Mp=/(WCOD+)?/.source.replace("WCOD",bp),wp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wc),Ep=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wc),Tp=new RegExp("^"+Sp+Mp+wp+Ep+"$"),Ap=["material","materials","bones","map"],lc=class{constructor(e,t,i){let n=i||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},pt=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vp,"")}static parseTrackName(e){let t=Tp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);Ap.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;He("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=lc;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qx=new Float32Array(1);var Lu=new ze,Bs=class{constructor(e,t,i=0,n=1/0){this.ray=new Hi(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):He("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lu),this}intersectObject(e,t=!0,i=[]){return cc(e,this,i,t),i.sort(Pu),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)cc(e[n],this,i,t);return i.sort(Pu),i}};function Pu(s,e){return s.distance-e.distance}function cc(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)cc(r[a],e,t,!0)}}var Wr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ie("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},ks=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($e(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Zc=class Zc{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}};Zc.prototype.isMatrix2=!0;var hc=Zc;var Xr=class extends Pi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Xc(s,e,t,i){let n=Rp(i);switch(t){case Rc:return s*e;case Mo:return s*e/n.components*n.byteLength;case wo:return s*e/n.components*n.byteLength;case In:return s*e*2/n.components*n.byteLength;case Eo:return s*e*2/n.components*n.byteLength;case Cc:return s*e*3/n.components*n.byteLength;case Mi:return s*e*4/n.components*n.byteLength;case To:return s*e*4/n.components*n.byteLength;case $r:case Kr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zr:case Jr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ro:case Lo:return Math.max(s,16)*Math.max(e,8)/4;case Ao:case Co:return Math.max(s,8)*Math.max(e,8)/2;case Po:case Io:case No:case Fo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Do:case jr:case Oo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ko:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case zo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Go:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Xo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case qo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Yo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case $o:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ko:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Zo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Jo:case jo:case Qo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case el:case tl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Qr:case il:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rp(s){switch(s){case hi:case wc:return{byteLength:1,components:1};case Xs:case Ec:case Fi:return{byteLength:2,components:1};case bo:case So:return{byteLength:2,components:4};case Ni:case vo:case gi:return{byteLength:4,components:1};case Tc:case Ac:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function kd(){let s=null,e=!1,t=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Lp(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var Pp=`#ifdef USE_ALPHAHASH
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
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
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
#endif`,ig=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ng=`#ifdef USE_IRIDESCENCEMAP
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
}`,i0=`#define TOON
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
}`,n0=`#define TOON
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
}`,Ze={alphahash_fragment:Pp,alphahash_pars_fragment:Ip,alphamap_fragment:Dp,alphamap_pars_fragment:Np,alphatest_fragment:Fp,alphatest_pars_fragment:Op,aomap_fragment:Up,aomap_pars_fragment:Bp,batching_pars_vertex:kp,batching_vertex:Hp,begin_vertex:zp,beginnormal_vertex:Gp,bsdfs:Vp,iridescence_fragment:Wp,bumpmap_pars_fragment:Xp,clipping_planes_fragment:qp,clipping_planes_pars_fragment:Yp,clipping_planes_pars_vertex:$p,clipping_planes_vertex:Kp,color_fragment:Zp,color_pars_fragment:Jp,color_pars_vertex:jp,color_vertex:Qp,common:em,defaultnormal_vertex:tm,displacementmap_pars_vertex:im,displacementmap_vertex:nm,emissivemap_fragment:sm,emissivemap_pars_fragment:rm,colorspace_fragment:am,colorspace_pars_fragment:om,envmap_fragment:lm,envmap_common_pars_fragment:cm,envmap_pars_fragment:hm,envmap_pars_vertex:um,envmap_physical_pars_fragment:Sm,envmap_vertex:dm,fog_vertex:fm,fog_pars_vertex:pm,fog_fragment:mm,fog_pars_fragment:gm,gradientmap_pars_fragment:_m,lightmap_pars_fragment:xm,lights_lambert_fragment:ym,lights_lambert_pars_fragment:vm,lights_pars_begin:bm,lights_toon_fragment:Mm,lights_toon_pars_fragment:wm,lights_phong_fragment:Em,lights_phong_pars_fragment:Tm,lights_physical_fragment:Am,lights_physical_pars_fragment:Rm,lights_fragment_begin:Cm,lights_fragment_maps:Lm,lights_fragment_end:Pm,lightprobes_pars_fragment:Im,logdepthbuf_fragment:Dm,logdepthbuf_pars_fragment:Nm,logdepthbuf_pars_vertex:Fm,logdepthbuf_vertex:Om,map_fragment:Um,map_pars_fragment:Bm,map_particle_fragment:km,map_particle_pars_fragment:Hm,metalnessmap_fragment:zm,metalnessmap_pars_fragment:Gm,morphinstance_vertex:Vm,morphcolor_vertex:Wm,morphnormal_vertex:Xm,morphtarget_pars_vertex:qm,morphtarget_vertex:Ym,normal_fragment_begin:$m,normal_fragment_maps:Km,normal_pars_fragment:Zm,normal_pars_vertex:Jm,normal_vertex:jm,normalmap_pars_fragment:Qm,clearcoat_normal_fragment_begin:eg,clearcoat_normal_fragment_maps:tg,clearcoat_pars_fragment:ig,iridescence_pars_fragment:ng,opaque_fragment:sg,packing:rg,premultiplied_alpha_fragment:ag,project_vertex:og,dithering_fragment:lg,dithering_pars_fragment:cg,roughnessmap_fragment:hg,roughnessmap_pars_fragment:ug,shadowmap_pars_fragment:dg,shadowmap_pars_vertex:fg,shadowmap_vertex:pg,shadowmask_pars_fragment:mg,skinbase_vertex:gg,skinning_pars_vertex:_g,skinning_vertex:xg,skinnormal_vertex:yg,specularmap_fragment:vg,specularmap_pars_fragment:bg,tonemapping_fragment:Sg,tonemapping_pars_fragment:Mg,transmission_fragment:wg,transmission_pars_fragment:Eg,uv_pars_fragment:Tg,uv_pars_vertex:Ag,uv_vertex:Rg,worldpos_vertex:Cg,background_vert:Lg,background_frag:Pg,backgroundCube_vert:Ig,backgroundCube_frag:Dg,cube_vert:Ng,cube_frag:Fg,depth_vert:Og,depth_frag:Ug,distance_vert:Bg,distance_frag:kg,equirect_vert:Hg,equirect_frag:zg,linedashed_vert:Gg,linedashed_frag:Vg,meshbasic_vert:Wg,meshbasic_frag:Xg,meshlambert_vert:qg,meshlambert_frag:Yg,meshmatcap_vert:$g,meshmatcap_frag:Kg,meshnormal_vert:Zg,meshnormal_frag:Jg,meshphong_vert:jg,meshphong_frag:Qg,meshphysical_vert:e0,meshphysical_frag:t0,meshtoon_vert:i0,meshtoon_frag:n0,points_vert:s0,points_frag:r0,shadow_vert:a0,shadow_frag:o0,sprite_vert:l0,sprite_frag:c0},we={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Ki={basic:{uniforms:Zt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Zt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Re(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Zt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Zt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Zt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Zt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Zt([we.points,we.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Zt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Zt([we.common,we.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Zt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Zt([we.sprite,we.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Zt([we.common,we.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Zt([we.lights,we.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Ki.physical={uniforms:Zt([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var rl={r:0,b:0,g:0},h0=new ze,Hd=new We;Hd.set(-1,0,0,0,1,0,0,0,1);function u0(s,e,t,i,n,r){let a=new Re(0),o=n===!0?0:1,l,c,h=null,u=0,f=null;function d(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){let b=y.backgroundBlurriness>0;E=e.get(E,b)}return E}function g(y){let E=!1,b=d(y);b===null?m(a,o):b&&b.isColor&&(m(b,1),E=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(y,E){let b=d(E);b&&b.isCubeTexture?(c===void 0&&(c=new ie(new Fe(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:jn(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(h0.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hd),c.material.toneMapped=Qe.getTransfer(b.colorSpace)!==ot,(h!==b||u!==b.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ie(new zi(2,2),new Gi({name:"BackgroundMaterial",uniforms:jn(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(b.colorSpace)!==ot,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,E){y.getRGB(rl,Gc(s)),t.buffers.color.setClear(rl.r,rl.g,rl.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,E=1){a.set(y),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:x,dispose:p}}function d0(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=f(null),r=n,a=!1;function o(D,U,X,L,V){let G=!1,W=u(D,L,X,U);r!==W&&(r=W,c(r.object)),G=d(D,L,X,V),G&&g(D,L,X,V),V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,b(D,U,X,L),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function u(D,U,X,L){let V=L.wireframe===!0,G=i[U.id];G===void 0&&(G={},i[U.id]=G);let W=D.isInstancedMesh===!0?D.id:0,te=G[W];te===void 0&&(te={},G[W]=te);let q=te[X.id];q===void 0&&(q={},te[X.id]=q);let Y=q[V];return Y===void 0&&(Y=f(l()),q[V]=Y),Y}function f(D){let U=[],X=[],L=[];for(let V=0;V<t;V++)U[V]=0,X[V]=0,L[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:X,attributeDivisors:L,object:D,attributes:{},index:null}}function d(D,U,X,L){let V=r.attributes,G=U.attributes,W=0,te=X.getAttributes();for(let q in te)if(te[q].location>=0){let F=V[q],ne=G[q];if(ne===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor)),F===void 0||F.attribute!==ne||ne&&F.data!==ne.data)return!0;W++}return r.attributesNum!==W||r.index!==L}function g(D,U,X,L){let V={},G=U.attributes,W=0,te=X.getAttributes();for(let q in te)if(te[q].location>=0){let F=G[q];F===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(F=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(F=D.instanceColor));let ne={};ne.attribute=F,F&&F.data&&(ne.data=F.data),V[q]=ne,W++}r.attributes=V,r.attributesNum=W,r.index=L}function x(){let D=r.newAttributes;for(let U=0,X=D.length;U<X;U++)D[U]=0}function m(D){p(D,0)}function p(D,U){let X=r.newAttributes,L=r.enabledAttributes,V=r.attributeDivisors;X[D]=1,L[D]===0&&(s.enableVertexAttribArray(D),L[D]=1),V[D]!==U&&(s.vertexAttribDivisor(D,U),V[D]=U)}function y(){let D=r.newAttributes,U=r.enabledAttributes;for(let X=0,L=U.length;X<L;X++)U[X]!==D[X]&&(s.disableVertexAttribArray(X),U[X]=0)}function E(D,U,X,L,V,G,W){W===!0?s.vertexAttribIPointer(D,U,X,V,G):s.vertexAttribPointer(D,U,X,L,V,G)}function b(D,U,X,L){x();let V=L.attributes,G=X.getAttributes(),W=U.defaultAttributeValues;for(let te in G){let q=G[te];if(q.location>=0){let Y=V[te];if(Y===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor)),Y!==void 0){let F=Y.normalized,ne=Y.itemSize,Me=e.get(Y);if(Me===void 0)continue;let K=Me.buffer,me=Me.type,ye=Me.bytesPerElement,oe=me===s.INT||me===s.UNSIGNED_INT||Y.gpuType===vo;if(Y.isInterleavedBufferAttribute){let ee=Y.data,xe=ee.isInterleavedBuffer===!0?ee.stride:ee.itemSize,Ae=Y.offset;if(ee.isInstancedInterleavedBuffer||ee.isInstancedBufferAttribute){for(let ve=0;ve<q.locationSize;ve++)p(q.location+ve,ee.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ve=0;ve<q.locationSize;ve++)m(q.location+ve);s.bindBuffer(s.ARRAY_BUFFER,K);for(let ve=0;ve<q.locationSize;ve++)E(q.location+ve,ne/q.locationSize,me,F,xe*ye,(Ae+ne/q.locationSize*ve)*ye,oe)}else{if(Y.isInstancedBufferAttribute){for(let ee=0;ee<q.locationSize;ee++)p(q.location+ee,Y.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ee=0;ee<q.locationSize;ee++)m(q.location+ee);s.bindBuffer(s.ARRAY_BUFFER,K);for(let ee=0;ee<q.locationSize;ee++)E(q.location+ee,ne/q.locationSize,me,F,ne*ye,ne/q.locationSize*ee*ye,oe)}}else if(W!==void 0){let F=W[te];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(q.location,F);break;case 3:s.vertexAttrib3fv(q.location,F);break;case 4:s.vertexAttrib4fv(q.location,F);break;default:s.vertexAttrib1fv(q.location,F)}}}}y()}function T(){N();for(let D in i){let U=i[D];for(let X in U){let L=U[X];for(let V in L){let G=L[V];for(let W in G)h(G[W].object),delete G[W];delete L[V]}}delete i[D]}}function A(D){if(i[D.id]===void 0)return;let U=i[D.id];for(let X in U){let L=U[X];for(let V in L){let G=L[V];for(let W in G)h(G[W].object),delete G[W];delete L[V]}}delete i[D.id]}function _(D){for(let U in i){let X=i[U];for(let L in X){let V=X[L];if(V[D.id]===void 0)continue;let G=V[D.id];for(let W in G)h(G[W].object),delete G[W];delete V[D.id]}}}function M(D){for(let U in i){let X=i[U],L=D.isInstancedMesh===!0?D.id:0,V=X[L];if(V!==void 0){for(let G in V){let W=V[G];for(let te in W)h(W[te].object),delete W[te];delete V[G]}delete X[L],Object.keys(X).length===0&&delete i[U]}}}function N(){P(),a=!0,r!==n&&(r=n,c(r.object))}function P(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:N,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function f0(s,e,t){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function p0(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(_){return!(_!==Mi&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let M=_===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==hi&&_!==gi&&!M&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),A=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:b,maxSamples:T,samples:A}}function m0(s){let e=this,t=null,i=0,n=!1,r=!1,a=new Qt,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||n;return n=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,E=y*4,b=p.clippingState||null;l.value=b,b=h(g,f,E,d);for(let T=0;T!==E;++T)b[T]=t[T];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,b=d;E!==x;++E,b+=4)a.copy(u[E]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var na=class extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Ar(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Fe(5,5,5),r=new Gi({name:"CubemapFromEquirect",uniforms:jn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ii,blending:Yn});r.uniforms.tEquirect.value=t;let a=new ie(n,r),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=It),new Us(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}},xd=256,g0=3,_0=20,zd=256,Gd=16,x0=3,y0=new w,v0=new Re,ol=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Us(1,10,null),this._boxMesh=new ie(new Fe(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){let{size:a=256,position:o=y0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(v0));let m=new Us(i,n,h);return m.position.copy(o),m.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=g,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(xd,Bc(e))}_fromTexture(e,t){e.mapping===Kn||e.mapping===Vs?this._setSize(e.image.length===0?xd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=yd(e,!1,!1),i=Math.log2(e)-g0;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=yd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Kn||e.mapping===Vs?(this._cubemapMaterial===null&&(this._cubemapMaterial=bd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=vd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=b0(),this._integrationMaterial=S0());let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Gd);for(let a=0;a<=i;a++){let o=s.lodToRoughness(a,i);if(a>i-x0)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(zd*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=M0());let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(r,0,i)}};function yd(s,e,t){return new na(s,{minFilter:Si,generateMipmaps:e,type:Fi,colorSpace:ei,depthBuffer:t})}function sa(s,e,t){return new Gi({name:s,uniforms:e,vertexShader:Ze.cube_vert,fragmentShader:t,side:ii,blending:Yn,depthTest:!1,depthWrite:!1})}function b0(){return sa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function S0(){return sa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Gd}},`

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
	`)}function M0(){return sa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

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
	`)}function vd(){return sa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function bd(){return sa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function w0(s){let e=new WeakMap,t=new WeakMap,i=null;function n(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===_o||d===xo)if(e.has(f)){let g=e.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new na(g.height);return x.fromEquirectangularTexture(s,f),e.set(f,x),f.addEventListener("dispose",c),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,g=d===_o||d===xo,x=d===Kn||d===Vs;if(g||x){let m=t.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new ol(s)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let y=f.image;return g&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new ol(s)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,d){return d===_o?f.mapping=Kn:d===xo&&(f.mapping=Vs),f}function l(f){let d=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&d++;return d===g}function c(f){let d=f.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function E0(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Hn("WebGLRenderer: "+i+" extension not supported."),n}}}function T0(s,e,t,i){let n={},r=new WeakMap,a=new FinalizationRegistry(g=>delete n[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete n[g.id],a.unregister(g);let x=r.get(g);x&&(e.remove(x),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,x){return n[x.id]!==void 0||(x.addEventListener("dispose",o),n[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(g){let x=g.attributes;for(let m in x)e.update(x[m],s.ARRAY_BUFFER)}function u(g){let x=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let y=x!==null?x.array.length:m.array.length/3-1,E=m.count>=65535?br:vr,b=new E(Math.ceil(y/3)*6,1),T=b.array;if(x!==null){let _=x.array;p=x.version;for(let M=0,N=0;M<y;M+=3){let P=_[M+0],D=_[M+1],U=_[M+2];T[N++]=P,T[N++]=D,T[N++]=D,T[N++]=U,T[N++]=U,T[N++]=P}}else{p=m.version;for(let _=0,M=0;_<y;_+=3){let N=_+0,P=_+1,D=_+2;T[M++]=N,T[M++]=P,T[M++]=P,T[M++]=D,T[M++]=D,T[M++]=N}}b.version=p;let A=r.get(g);A&&e.remove(A),r.set(g,b)}function f(g){let x=r.get(g);if(x){let m=g.index;m!==null&&x.version<m.version&&u(g)}else u(g);return r.get(g)}function d(){for(let g in n){let x=n[g].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function A0(s,e,t){let i;function n(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){s.drawElements(i,f,r,u*a),t.update(f,i,1)}function c(u,f,d){d!==0&&(s.drawElementsInstanced(i,f,r,u*a,d),t.update(f,i,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,d);let x=0;for(let m=0;m<d;m++)x+=f[m];t.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function R0(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function C0(s,e,t){let i=new WeakMap,n=new ht;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==u){let N=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",N)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],E=0;d===!0&&(E=1),g===!0&&(E=2),x===!0&&(E=3);let b=o.attributes.position.count*E,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let A=new Float32Array(b*T*4*u),_=new yr(A,b,T,u);_.type=gi,_.needsUpdate=!0;let M=E*4;for(let P=0;P<u;P++){let D=m[P],U=p[P],X=y[P],L=b*T*4*P;for(let V=0;V<D.count;V++){let G=V*M;d===!0&&(n.fromBufferAttribute(D,V),A[L+G+0]=n.x,A[L+G+1]=n.y,A[L+G+2]=n.z,A[L+G+3]=0),g===!0&&(n.fromBufferAttribute(U,V),A[L+G+4]=n.x,A[L+G+5]=n.y,A[L+G+6]=n.z,A[L+G+7]=0),x===!0&&(n.fromBufferAttribute(X,V),A[L+G+8]=n.x,A[L+G+9]=n.y,A[L+G+10]=n.z,A[L+G+11]=X.itemSize===4?n.w:1)}}f={count:u,texture:_,size:new Ee(b,T)},i.set(o,f),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function L0(s,e,t,i,n){let r=new WeakMap;function a(c){let h=n.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var P0={[_c]:"LINEAR_TONE_MAPPING",[xc]:"REINHARD_TONE_MAPPING",[yc]:"CINEON_TONE_MAPPING",[Yr]:"ACES_FILMIC_TONE_MAPPING",[bc]:"AGX_TONE_MAPPING",[Sc]:"NEUTRAL_TONE_MAPPING",[vc]:"CUSTOM_TONE_MAPPING"};function I0(s,e,t,i,n,r){let a=new pi(e,t,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new St;h.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new nt([0,2,0,0,2,0],2));let u=new no({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ie(h,u),d=new Xn(-1,1,1,-1,0,1),g=null,x=null,m=!1,p,y=null,E=[],b=!1;this.setSize=function(T,A){a.setSize(T,A),o!==null&&o.setSize(T,A),l!==null&&l.setSize(T,A);for(let _=0;_<E.length;_++){let M=E[_];M.setSize&&M.setSize(T,A)}},this.setEffects=function(T){E=T,b=E.length>0&&E[0].isRenderPass===!0;let A=a.width,_=a.height;E.length>0&&o===null&&(o=new pi(A,_,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),l=new pi(A,_,{type:Fi,depthBuffer:!1,stencilBuffer:!1}));let M=n===!0&&E.some(N=>N.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new un(A,_),r===!0&&(c.format=_n,c.type=Jn)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let N=0;N<E.length;N++){let P=E[N];P.setSize&&P.setSize(A,_),M&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(T,A){if(m||T.toneMapping===qi&&E.length===0)return!1;if(y=A,A!==null){let _=A.width,M=A.height;(a.width!==_||a.height!==M)&&this.setSize(_,M)}return b===!1&&T.setRenderTarget(a),p=T.toneMapping,T.toneMapping=qi,!0},this.hasRenderPass=function(){return b},this.end=function(T,A){T.toneMapping=p,m=!0;let _=a,M=o;for(let N=0;N<E.length;N++){let P=E[N];P.enabled!==!1&&(P.render(T,M,_,A),P.needsSwap!==!1&&(_=M,M=M===o?l:o))}if(g!==T.outputColorSpace||x!==T.toneMapping){g=T.outputColorSpace,x=T.toneMapping,u.defines={},Qe.getTransfer(g)===ot&&(u.defines.SRGB_TRANSFER="");let N=P0[x];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(y),T.render(f,d),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Vd=new Dt,Wd=new un(1,1),Xd=new Cr(1),qd=new yr,Yd=new qa,$d=new Ar,Sd=[],Md=[],wd=new Float32Array(16),Ed=new Float32Array(9),Td=new Float32Array(4);function $s(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=Sd[n];if(r===void 0&&(r=new Float32Array(n),Sd[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Nt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Ft(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function cl(s,e){let t=Md[e];t===void 0&&(t=new Int32Array(e),Md[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function D0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function N0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2fv(this.addr,e),Ft(t,e)}}function F0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;s.uniform3fv(this.addr,e),Ft(t,e)}}function O0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4fv(this.addr,e),Ft(t,e)}}function U0(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,i))return;Td.set(i),s.uniformMatrix2fv(this.addr,!1,Td),Ft(t,i)}}function B0(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,i))return;Ed.set(i),s.uniformMatrix3fv(this.addr,!1,Ed),Ft(t,i)}}function k0(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,i))return;wd.set(i),s.uniformMatrix4fv(this.addr,!1,wd),Ft(t,i)}}function H0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function z0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2iv(this.addr,e),Ft(t,e)}}function G0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;s.uniform3iv(this.addr,e),Ft(t,e)}}function V0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4iv(this.addr,e),Ft(t,e)}}function W0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function X0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2uiv(this.addr,e),Ft(t,e)}}function q0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;s.uniform3uiv(this.addr,e),Ft(t,e)}}function Y0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4uiv(this.addr,e),Ft(t,e)}}function hl(s){return s.version===0&&(s.compareFunction=Dc,s.needsUpdate=!0),s}function $0(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=hl(Wd):r=Vd,t.setTexture2D(e||r,n)}function K0(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Yd,n)}function Z0(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=hl(Xd):r=$d,t.setTextureCube(e||r,n)}function J0(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||qd,n)}function j0(s){switch(s){case 5126:return D0;case 35664:return N0;case 35665:return F0;case 35666:return O0;case 35674:return U0;case 35675:return B0;case 35676:return k0;case 5124:case 35670:return H0;case 35667:case 35671:return z0;case 35668:case 35672:return G0;case 35669:case 35673:return V0;case 5125:return W0;case 36294:return X0;case 36295:return q0;case 36296:return Y0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return K0;case 35680:case 36300:case 36308:case 36293:return Z0;case 36289:case 36303:case 36311:case 36292:return J0}}function Q0(s,e){s.uniform1fv(this.addr,e)}function e_(s,e){let t=$s(e,this.size,2);s.uniform2fv(this.addr,t)}function t_(s,e){let t=$s(e,this.size,3);s.uniform3fv(this.addr,t)}function i_(s,e){let t=$s(e,this.size,4);s.uniform4fv(this.addr,t)}function n_(s,e){let t=$s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function s_(s,e){let t=$s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function r_(s,e){let t=$s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function a_(s,e){s.uniform1iv(this.addr,e)}function o_(s,e){s.uniform2iv(this.addr,e)}function l_(s,e){s.uniform3iv(this.addr,e)}function c_(s,e){s.uniform4iv(this.addr,e)}function h_(s,e){s.uniform1uiv(this.addr,e)}function u_(s,e){s.uniform2uiv(this.addr,e)}function d_(s,e){s.uniform3uiv(this.addr,e)}function f_(s,e){s.uniform4uiv(this.addr,e)}function p_(s,e,t){let i=this.cache,n=e.length,r=cl(t,n);Nt(i,r)||(s.uniform1iv(this.addr,r),Ft(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=hl(Wd):a=Vd;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,r[o])}function m_(s,e,t){let i=this.cache,n=e.length,r=cl(t,n);Nt(i,r)||(s.uniform1iv(this.addr,r),Ft(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Yd,r[a])}function g_(s,e,t){let i=this.cache,n=e.length,r=cl(t,n);Nt(i,r)||(s.uniform1iv(this.addr,r),Ft(i,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=hl(Xd):a=$d;for(let o=0;o!==n;++o)t.setTextureCube(e[o]||a,r[o])}function __(s,e,t){let i=this.cache,n=e.length,r=cl(t,n);Nt(i,r)||(s.uniform1iv(this.addr,r),Ft(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||qd,r[a])}function x_(s){switch(s){case 5126:return Q0;case 35664:return e_;case 35665:return t_;case 35666:return i_;case 35674:return n_;case 35675:return s_;case 35676:return r_;case 5124:case 35670:return a_;case 35667:case 35671:return o_;case 35668:case 35672:return l_;case 35669:case 35673:return c_;case 5125:return h_;case 36294:return u_;case 36295:return d_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return __}}var Qc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=j0(t.type)}},eh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=x_(t.type)}},th=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(e,t[o.id],i)}}},Jc=/(\w+)(\])?(\[|\.)?/g;function Ad(s,e){s.seq.push(e),s.map[e.id]=e}function y_(s,e,t){let i=s.name,n=i.length;for(Jc.lastIndex=0;;){let r=Jc.exec(i),a=Jc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Ad(t,c===void 0?new Qc(o,s,e):new eh(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new th(o),Ad(t,u)),t=u}}}var Ys=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);y_(o,l,this)}let n=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function Rd(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var v_=37297,b_=0;function S_(s,e){let t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Cd=new We;function M_(s){Qe._getMatrix(Cd,Qe.workingColorSpace,s);let e=`mat3( ${Cd.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(s)){case _r:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ld(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+S_(s.getShaderSource(e),o)}else return r}function w_(s,e){let t=M_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var E_={[_c]:"Linear",[xc]:"Reinhard",[yc]:"Cineon",[Yr]:"ACESFilmic",[bc]:"AgX",[Sc]:"Neutral",[vc]:"Custom"};function T_(s,e){let t=E_[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var al=new w;function A_(){Qe.getLuminanceCoefficients(al);let s=al.x.toFixed(4),e=al.y.toFixed(4),t=al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function C_(s){let e=[];for(let t in s){let i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function L_(s,e){let t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(e,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ia(s){return s!==""}function Pd(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Id(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var P_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(s){return s.replace(P_,I_)}function I_(s,e){let t=Ze[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ih(t)}var D_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dd(s){return s.replace(D_,N_)}function N_(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Nd(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var F_={[qr]:"SHADOWMAP_TYPE_PCF",[Hs]:"SHADOWMAP_TYPE_VSM"};function O_(s){return F_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var U_={[Vs]:"ENVMAP_MODE_REFRACTION"};function B_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":U_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var k_={[gc]:"ENVMAP_BLENDING_MULTIPLY",[ju]:"ENVMAP_BLENDING_MIX",[Qu]:"ENVMAP_BLENDING_ADD"};function H_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":k_[s.combine]||"ENVMAP_BLENDING_NONE"}function z_(s,e,t,i){let n=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=O_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=B_(t),u=H_(t),f=R_(t),d=C_(r),g=n.createProgram(),x,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ia).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ia).join(`
`),m.length>0&&(m+=`
`)):(x=[Nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),m=[Nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==qi?T_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,w_("linearToOutputTexel",t.outputColorSpace),A_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ia).join(`
`)),a=ih(a),a=Pd(a,t),a=Id(a,t),o=ih(o),o=Pd(o,t),o=Id(o,t),a=Dd(a),o=Dd(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=p+x+a,E=p+m+o,b=Rd(n,n.VERTEX_SHADER,y),T=Rd(n,n.FRAGMENT_SHADER,E);n.attachShader(g,b),n.attachShader(g,T),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function A(P){if(s.debug.checkShaderErrors){let D=n.getProgramInfoLog(g)||"",U=n.getShaderInfoLog(b)||"",X=n.getShaderInfoLog(T)||"",L=D.trim(),V=U.trim(),G=X.trim(),W=!0,te=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,g,b,T);else{let q=Ld(n,b,"vertex"),Y=Ld(n,T,"fragment");He("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+q+`
`+Y)}else L!==""?Ie("WebGLProgram: Program Info Log:",L):(V===""||G==="")&&(te=!1);te&&(P.diagnostics={runnable:W,programLog:L,vertexShader:{log:V,prefix:x},fragmentShader:{log:G,prefix:m}})}n.deleteShader(b),n.deleteShader(T),_=new Ys(n,g),M=L_(n,g)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=n.getProgramParameter(g,v_)),N},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=b_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=T,this}var G_=0,nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new sh(e),t.set(e,i)),i}},sh=class{constructor(e){this.id=G_++,this.code=e,this.usedTimes=0}};function V_(s){return s===In||s===jr||s===Qr}function W_(s,e,t,i,n,r){let a=new Ts,o=new nh,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,M,N,P,D,U){let X=P.fog,L=D.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,W=e.get(_.envMap||V,G),te=f[_.type],q=i.precision;_.precision!==null&&(q=i.getMaxPrecision(_.precision),q!==_.precision&&Ie("WebGLProgram.getParameters:",_.precision,"not supported, using",q,"instead."));let Y=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,F=Y!==void 0?Y.length:0,ne=0;L.morphAttributes.position!==void 0&&(ne=1),L.morphAttributes.normal!==void 0&&(ne=2),L.morphAttributes.color!==void 0&&(ne=3);let Me,K,me,ye;if(te){let be=Ki[te];Me=be.vertexShader,K=be.fragmentShader}else{Me=_.vertexShader,K=_.fragmentShader;let be=o.getVertexShaderStage(_),st=o.getFragmentShaderStage(_);o.update(_,be,st),me=be.id,ye=st.id}let oe=s.getRenderTarget(),ee=s.state.buffers.depth.getReversed(),xe=D.isInstancedMesh===!0,Ae=D.isBatchedMesh===!0,ve=!!_.map,Be=!!_.matcap,tt=!!W,Ye=tt&&W.isPMREMTexture===!0,Mt=!!_.aoMap,wt=!!_.lightMap,Yt=!!_.bumpMap&&_.wireframe===!1,Je=!!_.normalMap,Vt=!!_.displacementMap,vt=!!_.emissiveMap,Jt=!!_.metalnessMap,ni=!!_.roughnessMap,si=_.anisotropy>0,O=_.clearcoat>0,Wt=_.diffuseRoughness>0,lt=_.dispersion>0,ct=_.retroreflectivity>0,_e=_.iridescence>0,mt=_.sheen>0,Oe=_.transmission>0,ke=si&&!!_.anisotropyMap,R=O&&!!_.clearcoatMap,v=O&&!!_.clearcoatNormalMap,k=O&&!!_.clearcoatRoughnessMap,se=Wt&&!!_.diffuseRoughnessMap,Q=_e&&!!_.iridescenceMap,le=_e&&!!_.iridescenceThicknessMap,fe=mt&&!!_.sheenColorMap,Z=mt&&!!_.sheenRoughnessMap,J=!!_.specularMap,pe=!!_.specularColorMap,C=!!_.specularIntensityMap,j=Oe&&!!_.transmissionMap,$=Oe&&!!_.thicknessMap,ue=!!_.gradientMap,ce=!!_.alphaMap,he=_.alphaTest>0,De=!!_.alphaHash,Xe=!!_.extensions,re=qi;_.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(re=s.toneMapping);let Ne=Ye?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,qe={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:Me,fragmentShader:K,defines:_.defines,customVertexShaderID:me,customFragmentShaderID:ye,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:q,batching:Ae,batchingColor:Ae&&D._colorsTexture!==null,instancing:xe,instancingColor:xe&&D.instanceColor!==null,instancingMorph:xe&&D.morphTexture!==null,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ve,matcap:Be,envMap:tt,envMapMode:tt&&W.mapping,envMapPMREM:Ye,envMapMaxLod:Ye?Ne.length-1:null,envMapSize:Ye?Ne[0].width:null,aoMap:Mt,lightMap:wt,bumpMap:Yt,normalMap:Je,displacementMap:Vt,emissiveMap:vt,normalMapObjectSpace:Je&&_.normalMapType===nd,normalMapTangentSpace:Je&&_.normalMapType===nl,packedNormalMap:Je&&_.normalMapType===nl&&V_(_.normalMap.format),metalnessMap:Jt,roughnessMap:ni,anisotropy:si,anisotropyMap:ke,clearcoat:O,clearcoatMap:R,clearcoatNormalMap:v,clearcoatRoughnessMap:k,diffuseRoughness:Wt,diffuseRoughnessMap:se,dispersion:lt,retroreflection:ct,iridescence:_e,iridescenceMap:Q,iridescenceThicknessMap:le,sheen:mt,sheenColorMap:fe,sheenRoughnessMap:Z,specularMap:J,specularColorMap:pe,specularIntensityMap:C,transmission:Oe,transmissionMap:j,thicknessMap:$,gradientMap:ue,opaque:_.transparent===!1&&_.blending===zs&&_.alphaToCoverage===!1,alphaMap:ce,alphaTest:he,alphaHash:De,combine:_.combine,mapUv:ve&&d(_.map.channel),aoMapUv:Mt&&d(_.aoMap.channel),lightMapUv:wt&&d(_.lightMap.channel),bumpMapUv:Yt&&d(_.bumpMap.channel),normalMapUv:Je&&d(_.normalMap.channel),displacementMapUv:Vt&&d(_.displacementMap.channel),emissiveMapUv:vt&&d(_.emissiveMap.channel),metalnessMapUv:Jt&&d(_.metalnessMap.channel),roughnessMapUv:ni&&d(_.roughnessMap.channel),anisotropyMapUv:ke&&d(_.anisotropyMap.channel),clearcoatMapUv:R&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:le&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:Z&&d(_.sheenRoughnessMap.channel),specularMapUv:J&&d(_.specularMap.channel),specularColorMapUv:pe&&d(_.specularColorMap.channel),specularIntensityMapUv:C&&d(_.specularIntensityMap.channel),transmissionMapUv:j&&d(_.transmissionMap.channel),thicknessMapUv:$&&d(_.thicknessMap.channel),alphaMapUv:ce&&d(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Je||si),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(ve||ce),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&Je===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ee,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ne,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:U.filter(be=>be.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:re,decodeVideoTexture:ve&&_.map.isVideoTexture===!0&&Qe.getTransfer(_.map.colorSpace)===ot,decodeVideoTextureEmissive:vt&&_.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(_.emissiveMap.colorSpace)===ot,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ct,flipSided:_.side===ii,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Xe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&_.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return qe.vertexUv1s=l.has(1),qe.vertexUv2s=l.has(2),qe.vertexUv3s=l.has(3),l.clear(),qe}function x(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)M.push(N),M.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(m(M,_),p(M,_),M.push(s.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function m(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function p(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){let M=f[_.type],N;if(M){let P=Ki[M];N=md.clone(P.uniforms)}else N=_.uniforms;return N}function E(_,M){let N=h.get(M);return N!==void 0?++N.usedTimes:(N=new z_(s,M,_,n),c.push(N),h.set(M,N)),N}function b(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:y,acquireProgram:E,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:A}}function X_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function q_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Fd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Od(){let s=[],e=0,t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,g,x,m,p){let y=s[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:g,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:p},s[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=g,y.materialVariant=a(f),y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=m,y.group=p),e++,y}function l(f,d,g,x,m,p,y){y.reversedDepth===!0&&(m=-m);let E=o(f,d,g,x,m,p);g.transmission>0?i.push(E):g.transparent===!0?n.push(E):t.push(E)}function c(f,d,g,x,m,p){let y=o(f,d,g,x,m,p);g.transmission>0?i.unshift(y):g.transparent===!0?n.unshift(y):t.unshift(y)}function h(f,d){t.length>1&&t.sort(f||q_),i.length>1&&i.sort(d||Fd),n.length>1&&n.sort(d||Fd)}function u(){for(let f=e,d=s.length;f<d;f++){let g=s[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:u,sort:h}}function Y_(){let s=new WeakMap;function e(i,n){let r=s.get(i),a;return r===void 0?(a=new Od,s.set(i,[a])):n>=r.length?(a=new Od,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function $_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new w,color:new Re};break;case"SpotLight":t={position:new w,direction:new w,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new w,halfWidth:new w,halfHeight:new w};break}return s[e.id]=t,t}}}function K_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Z_=0;function J_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function j_(s){let e=new $_,t=K_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new w);let n=new w,r=new ze,a=new ze;function o(c){let h=0,u=0,f=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,y=0,E=0,b=0,T=0,A=0,_=0,M=0,N=0,P=0;c.sort(J_);for(let U=0,X=c.length;U<X;U++){let L=c[U],V=L.color,G=L.intensity,W=L.distance,te=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===In?te=L.shadow.map.texture:te=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=V.r*G,u+=V.g*G,f+=V.b*G;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],G);P++}else if(L.isSunLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Y=L.shadow,F=t.get(L);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),i.sunShadow[g]=F,i.sunShadowMap[g]=te;let ne=Y.getViewportCount();for(let Me=0;Me<ne;Me++)i.sunShadowMatrix[x+Me]=Y.getMatrix(Me),i.sunShadowCascade[x+Me]=Y._cascadeData[Me];x+=ne,g++}i.sun[d]=q,d++}else if(L.isDirectionalLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Y=L.shadow,F=t.get(L);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,i.directionalShadow[m]=F,i.directionalShadowMap[m]=te,i.directionalShadowMatrix[m]=L.shadow.matrix,T++}i.directional[m]=q,m++}else if(L.isSpotLight){let q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(V).multiplyScalar(G),q.distance=W,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[y]=q;let Y=L.shadow;if(L.map&&(i.spotLightMap[M]=L.map,M++,Y.updateMatrices(L),L.castShadow&&N++),i.spotLightMatrix[y]=Y.matrix,L.castShadow){let F=t.get(L);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,i.spotShadow[y]=F,i.spotShadowMap[y]=te,_++}y++}else if(L.isRectAreaLight){let q=e.get(L);q.color.copy(V).multiplyScalar(G),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[E]=q,E++}else if(L.isPointLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let Y=L.shadow,F=t.get(L);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,F.shadowCameraNear=Y.camera.near,F.shadowCameraFar=Y.camera.far,i.pointShadow[p]=F,i.pointShadowMap[p]=te,i.pointShadowMatrix[p]=L.shadow.matrix,A++}i.point[p]=q,p++}else if(L.isHemisphereLight){let q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(G),q.groundColor.copy(L.groundColor).multiplyScalar(G),i.hemi[b]=q,b++}}E>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let D=i.hash;(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==y||D.rectAreaLength!==E||D.hemiLength!==b||D.numSunShadows!==g||D.numDirectionalShadows!==T||D.numPointShadows!==A||D.numSpotShadows!==_||D.numSpotMaps!==M||D.numLightProbes!==P)&&(i.sun.length=d,i.directional.length=m,i.spot.length=y,i.rectArea.length=E,i.point.length=p,i.hemi.length=b,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+M-N,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=P,D.sunLength=d,D.directionalLength=m,D.pointLength=p,D.spotLength=y,D.rectAreaLength=E,D.hemiLength=b,D.numSunShadows=g,D.numDirectionalShadows=T,D.numPointShadows=A,D.numSpotShadows=_,D.numSpotMaps=M,D.numLightProbes=P,i.version=Z_++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let y=0,E=c.length;y<E;y++){let b=c[y];if(b.isSunLight){let T=i.sun[u];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),u++}else if(b.isDirectionalLight){let T=i.directional[f];T.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(p),f++}else if(b.isSpotLight){let T=i.spot[g];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let T=i.rectArea[x];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let T=i.point[d];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Ud(s){let e=new j_(s),t=[],i=[],n=[];function r(u){h.camera=u,t.length=0,i.length=0,n.length=0}function a(u){u.isLightProbeGrid?n.push(u):t.push(u)}function o(u){i.push(u)}function l(){e.setup(t),n.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Q_(s){let e=new WeakMap;function t(n,r=0){let a=e.get(n),o;return a===void 0?(o=new Ud(s),e.set(n,[o])):r>=a.length?(o=new Ud(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var ex=`void main() {
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
}`,ix=[new w(1,0,0),new w(-1,0,0),new w(0,1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1)],nx=[new w(0,-1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1),new w(0,-1,0),new w(0,-1,0)],Bd=new ze,ta=new w,jc=new w;function sx(s,e,t){let i=new Tn,n=new Ee,r=new Ee,a=new ht,o=new so,l=new ro,c={},h=t.maxTextureSize,u={[Xi]:ii,[ii]:Xi,[Ct]:Ct},f=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:ex,fragmentShader:tx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new St;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ie(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qr;let p=this.type;this.render=function(A,_,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===go&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qr);let N=s.getRenderTarget(),P=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Yn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let X=p!==this.type;X&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(V=>V.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,V=A.length;L<V;L++){let G=A[L],W=G.shadow;if(W===void 0){Ie("WebGLShadowMap:",G,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);let te=W.getFrameExtents();n.multiply(te),r.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/te.x),n.x=r.x*te.x,W.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/te.y),n.y=r.y*te.y,W.mapSize.y=r.y));let q=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||X===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Hs){if(G.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new pi(n.x,n.y,{format:In,type:Fi,minFilter:It,magFilter:It,generateMipmaps:!1}),W.map.texture.name=G.name+".shadowMap",W.map.depthTexture=new un(n.x,n.y,gi),W.map.depthTexture.name=G.name+".shadowMapDepth",W.map.depthTexture.format=on,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Tt,W.map.depthTexture.magFilter=Tt}else G.isPointLight?(W.map=new na(n.x),W.map.depthTexture=new Cr(n.x,Ni)):(W.map=new pi(n.x,n.y),W.map.depthTexture=new un(n.x,n.y,Ni)),W.map.depthTexture.name=G.name+".shadowMap",W.map.depthTexture.format=on,this.type===qr?(W.map.depthTexture.compareFunction=q?Ic:Pc,W.map.depthTexture.minFilter=It,W.map.depthTexture.magFilter=It):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Tt,W.map.depthTexture.magFilter=Tt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==n.x||W.map.height!==n.y)&&W.map.setSize(n.x,n.y);let Y=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();G.isPointLight!==!0&&W.updateMatrices(G,M);let F=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:M.layers;for(let ne=0;ne<Y;ne++){let Me=W.getCamera(ne);if(G.isPointLight){let K=W.camera,me=W.matrix,ye=G.distance||K.far;ye!==K.far&&(K.far=ye,K.updateProjectionMatrix()),ta.setFromMatrixPosition(G.matrixWorld),K.position.copy(ta),jc.copy(K.position),jc.add(ix[ne]),K.up.copy(nx[ne]),K.lookAt(jc),K.updateMatrixWorld(),me.makeTranslation(-ta.x,-ta.y,-ta.z),Bd.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Bd,K.coordinateSystem,K.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,ne),s.clear();else{ne===0&&(s.setRenderTarget(W.map),s.clear());let K=W.getViewport(ne);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),U.viewport(a)}i=W.getFrustum(ne),b(_,M,Me,G,F,this.type)}W.isPointLightShadow!==!0&&this.type===Hs&&y(W,M),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(N,P,D)};function y(A,_){let M=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new pi(n.x,n.y,{format:In,type:Fi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(_,null,M,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(_,null,M,d,x,null)}function E(A,_,M,N){let P=null,D=M.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)P=D;else if(P=M.isPointLight===!0?l:o,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let U=P.uuid,X=_.uuid,L=c[U];L===void 0&&(L={},c[U]=L);let V=L[X];V===void 0&&(V=P.clone(),L[X]=V,_.addEventListener("dispose",T)),P=V}if(P.visible=_.visible,P.wireframe=_.wireframe,N===Hs?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:u[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,M.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let U=s.properties.get(P);U.light=M}return P}function b(A,_,M,N,P,D){if(A.visible===!1)return;if(A.layers.test(P)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===Hs)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,A.matrixWorld);let L=e.update(A),V=A.material;if(Array.isArray(V)){let G=L.groups;for(let W=0,te=G.length;W<te;W++){let q=G[W],Y=V[q.materialIndex];if(Y&&Y.visible){let F=E(A,Y,N,D);A.onBeforeShadow(s,A,_,M,L,F,q),s.renderBufferDirect(M,null,L,F,A,q),A.onAfterShadow(s,A,_,M,L,F,q)}}}else if(V.visible){let G=E(A,V,N,D);A.onBeforeShadow(s,A,_,M,L,G,null),s.renderBufferDirect(M,null,L,G,A,null),A.onAfterShadow(s,A,_,M,L,G,null)}}let X=A.children;for(let L=0,V=X.length;L<V;L++)b(X[L],_,M,N,P,D)}function T(A){A.target.removeEventListener("dispose",T);for(let M in c){let N=c[M],P=A.target.uuid;P in N&&(N[P].dispose(),delete N[P])}}}function rx(s,e){function t(){let C=!1,j=new ht,$=null,ue=new ht(0,0,0,0);return{setMask:function(ce){$!==ce&&!C&&(s.colorMask(ce,ce,ce,ce),$=ce)},setLocked:function(ce){C=ce},setClear:function(ce,he,De,Xe,re){re===!0&&(ce*=Xe,he*=Xe,De*=Xe),j.set(ce,he,De,Xe),ue.equals(j)===!1&&(s.clearColor(ce,he,De,Xe),ue.copy(j))},reset:function(){C=!1,$=null,ue.set(-1,0,0,0)}}}function i(){let C=!1,j=!1,$=null,ue=null,ce=null;return{setReversed:function(he){if(j!==he){let De=e.get("EXT_clip_control");he?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),j=he;let Xe=ce;ce=null,this.setClear(Xe)}},getReversed:function(){return j},setTest:function(he){he?ee(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(he){$!==he&&!C&&(s.depthMask(he),$=he)},setFunc:function(he){if(j&&(he=fd[he]),ue!==he){switch(he){case Ua:s.depthFunc(s.NEVER);break;case Ba:s.depthFunc(s.ALWAYS);break;case ka:s.depthFunc(s.LESS);break;case vs:s.depthFunc(s.LEQUAL);break;case Ha:s.depthFunc(s.EQUAL);break;case za:s.depthFunc(s.GEQUAL);break;case Ga:s.depthFunc(s.GREATER);break;case Va:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ue=he}},setLocked:function(he){C=he},setClear:function(he){ce!==he&&(ce=he,j&&(he=1-he),s.clearDepth(he))},reset:function(){C=!1,$=null,ue=null,ce=null,j=!1}}}function n(){let C=!1,j=null,$=null,ue=null,ce=null,he=null,De=null,Xe=null,re=null;return{setTest:function(Ne){C||(Ne?ee(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(Ne){j!==Ne&&!C&&(s.stencilMask(Ne),j=Ne)},setFunc:function(Ne,qe,be){($!==Ne||ue!==qe||ce!==be)&&(s.stencilFunc(Ne,qe,be),$=Ne,ue=qe,ce=be)},setOp:function(Ne,qe,be){(he!==Ne||De!==qe||Xe!==be)&&(s.stencilOp(Ne,qe,be),he=Ne,De=qe,Xe=be)},setLocked:function(Ne){C=Ne},setClear:function(Ne){re!==Ne&&(s.clearStencil(Ne),re=Ne)},reset:function(){C=!1,j=null,$=null,ue=null,ce=null,he=null,De=null,Xe=null,re=null}}}let r=new t,a=new i,o=new n,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,g=[],x=null,m=!1,p=null,y=null,E=null,b=null,T=null,A=null,_=null,M=new Re(0,0,0),N=0,P=!1,D=null,U=null,X=null,L=null,V=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,te=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=te>=2);let Y=null,F={},ne=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),K=new ht().fromArray(ne),me=new ht().fromArray(Me);function ye(C,j,$,ue){let ce=new Uint8Array(4),he=s.createTexture();s.bindTexture(C,he),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let De=0;De<$;De++)C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,ue,0,s.RGBA,s.UNSIGNED_BYTE,ce):s.texImage2D(j+De,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ce);return he}let oe={};oe[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),oe[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),oe[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(s.DEPTH_TEST),a.setFunc(vs),Yt(!1),Je(uc),ee(s.CULL_FACE),Mt(Yn);function ee(C){h[C]!==!0&&(s.enable(C),h[C]=!0)}function xe(C){h[C]!==!1&&(s.disable(C),h[C]=!1)}function Ae(C,j){return f[C]!==j?(s.bindFramebuffer(C,j),f[C]=j,C===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=j),C===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=j),!0):!1}function ve(C,j){let $=g,ue=!1;if(C){$=d.get(j),$===void 0&&($=[],d.set(j,$));let ce=C.textures;if($.length!==ce.length||$[0]!==s.COLOR_ATTACHMENT0){for(let he=0,De=ce.length;he<De;he++)$[he]=s.COLOR_ATTACHMENT0+he;$.length=ce.length,ue=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,ue=!0);ue&&s.drawBuffers($)}function Be(C){return x!==C?(s.useProgram(C),x=C,!0):!1}let tt={[$n]:s.FUNC_ADD,[Fu]:s.FUNC_SUBTRACT,[Ou]:s.FUNC_REVERSE_SUBTRACT};tt[Uu]=s.MIN,tt[Bu]=s.MAX;let Ye={[ku]:s.ZERO,[Hu]:s.ONE,[zu]:s.SRC_COLOR,[pc]:s.SRC_ALPHA,[Yu]:s.SRC_ALPHA_SATURATE,[Xu]:s.DST_COLOR,[Vu]:s.DST_ALPHA,[Gu]:s.ONE_MINUS_SRC_COLOR,[mc]:s.ONE_MINUS_SRC_ALPHA,[qu]:s.ONE_MINUS_DST_COLOR,[Wu]:s.ONE_MINUS_DST_ALPHA,[$u]:s.CONSTANT_COLOR,[Ku]:s.ONE_MINUS_CONSTANT_COLOR,[Zu]:s.CONSTANT_ALPHA,[Ju]:s.ONE_MINUS_CONSTANT_ALPHA};function Mt(C,j,$,ue,ce,he,De,Xe,re,Ne){if(C===Yn){m===!0&&(xe(s.BLEND),m=!1);return}if(m===!1&&(ee(s.BLEND),m=!0),C!==Nu){if(C!==p||Ne!==P){if((y!==$n||T!==$n)&&(s.blendEquation(s.FUNC_ADD),y=$n,T=$n),Ne)switch(C){case zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gs:s.blendFunc(s.ONE,s.ONE);break;case dc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:He("WebGLState: Invalid blending: ",C);break}else switch(C){case zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case dc:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fc:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",C);break}E=null,b=null,A=null,_=null,M.set(0,0,0),N=0,p=C,P=Ne}return}ce=ce||j,he=he||$,De=De||ue,(j!==y||ce!==T)&&(s.blendEquationSeparate(tt[j],tt[ce]),y=j,T=ce),($!==E||ue!==b||he!==A||De!==_)&&(s.blendFuncSeparate(Ye[$],Ye[ue],Ye[he],Ye[De]),E=$,b=ue,A=he,_=De),(Xe.equals(M)===!1||re!==N)&&(s.blendColor(Xe.r,Xe.g,Xe.b,re),M.copy(Xe),N=re),p=C,P=!1}function wt(C,j){C.side===Ct?xe(s.CULL_FACE):ee(s.CULL_FACE);let $=C.side===ii;j&&($=!$),Yt($),C.blending===zs&&C.transparent===!1?Mt(Yn):Mt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let ue=C.stencilWrite;o.setTest(ue),ue&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),vt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(C){D!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),D=C)}function Je(C){C!==Iu?(ee(s.CULL_FACE),C!==U&&(C===uc?s.cullFace(s.BACK):C===Du?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),U=C}function Vt(C){C!==X&&(W&&s.lineWidth(C),X=C)}function vt(C,j,$){C?(ee(s.POLYGON_OFFSET_FILL),(L!==j||V!==$)&&(L=j,V=$,a.getReversed()&&(j=-j,$=-$),s.polygonOffset(j,$))):xe(s.POLYGON_OFFSET_FILL)}function Jt(C){C?ee(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function ni(C){C===void 0&&(C=s.TEXTURE0+G-1),Y!==C&&(s.activeTexture(C),Y=C)}function si(C,j,$){$===void 0&&(Y===null?$=s.TEXTURE0+G-1:$=Y);let ue=F[$];ue===void 0&&(ue={type:void 0,texture:void 0},F[$]=ue),(ue.type!==C||ue.texture!==j)&&(Y!==$&&(s.activeTexture($),Y=$),s.bindTexture(C,j||oe[C]),ue.type=C,ue.texture=j)}function O(){let C=F[Y];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Wt(){try{s.compressedTexImage2D(...arguments)}catch(C){He("WebGLState:",C)}}function lt(){try{s.compressedTexImage3D(...arguments)}catch(C){He("WebGLState:",C)}}function ct(){try{s.texSubImage2D(...arguments)}catch(C){He("WebGLState:",C)}}function _e(){try{s.texSubImage3D(...arguments)}catch(C){He("WebGLState:",C)}}function mt(){try{s.compressedTexSubImage2D(...arguments)}catch(C){He("WebGLState:",C)}}function Oe(){try{s.compressedTexSubImage3D(...arguments)}catch(C){He("WebGLState:",C)}}function ke(){try{s.texStorage2D(...arguments)}catch(C){He("WebGLState:",C)}}function R(){try{s.texStorage3D(...arguments)}catch(C){He("WebGLState:",C)}}function v(){try{s.texImage2D(...arguments)}catch(C){He("WebGLState:",C)}}function k(){try{s.texImage3D(...arguments)}catch(C){He("WebGLState:",C)}}function se(C){return u[C]!==void 0?u[C]:s.getParameter(C)}function Q(C,j){u[C]!==j&&(s.pixelStorei(C,j),u[C]=j)}function le(C){K.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),K.copy(C))}function fe(C){me.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),me.copy(C))}function Z(C,j){let $=c.get(j);$===void 0&&($=new WeakMap,c.set(j,$));let ue=$.get(C);ue===void 0&&(ue=s.getUniformBlockIndex(j,C.name),s.uniformBlockBinding(j,ue,ue),$.set(C,ue))}function J(C,j,$){let ce=c.get(j).get(C);l[ce]!==$&&(s.bindBufferBase(s.UNIFORM_BUFFER,ce,$),l[ce]=$)}function pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},Y=null,F={},f={},l={},d=new WeakMap,g=[],x=null,m=!1,p=null,y=null,E=null,b=null,T=null,A=null,_=null,M=new Re(0,0,0),N=0,P=!1,D=null,U=null,X=null,L=null,V=null,K.set(0,0,s.canvas.width,s.canvas.height),me.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:xe,bindFramebuffer:Ae,drawBuffers:ve,useProgram:Be,setBlending:Mt,setMaterial:wt,setFlipSided:Yt,setCullFace:Je,setLineWidth:Vt,setPolygonOffset:vt,setScissorTest:Jt,activeTexture:ni,bindTexture:si,unbindTexture:O,compressedTexImage2D:Wt,compressedTexImage3D:lt,texImage2D:v,texImage3D:k,pixelStorei:Q,getParameter:se,updateUBOMapping:Z,uniformBlockBinding:J,texStorage2D:ke,texStorage3D:R,texSubImage2D:ct,texSubImage3D:_e,compressedTexSubImage2D:mt,compressedTexSubImage3D:Oe,scissor:le,viewport:fe,reset:pe}}function ax(s,e,t,i,n,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,h=new WeakMap,u=new Set,f,d=new WeakMap,g=new Set,x=new FinalizationRegistry(R=>g.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,v){return m?new OffscreenCanvas(R,v):Ms("canvas")}function y(R,v,k){let se=1,Q=ke(R);if((Q.width>k||Q.height>k)&&(se=k/Math.max(Q.width,Q.height)),se<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let le=Math.floor(se*Q.width),fe=Math.floor(se*Q.height);f===void 0&&(f=p(le,fe));let Z=v?p(le,fe):f;return Z.width=le,Z.height=fe,Z.getContext("2d").drawImage(R,0,0,le,fe),Ie("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+le+"x"+fe+")."),Z}else return"data"in R&&Ie("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function E(R){return R.generateMipmaps}function b(R){s.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(R,v,k,se,Q,le=!1){if(R!==null){if(s[R]!==void 0)return s[R];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;se&&(fe=e.get("EXT_texture_norm16"),fe||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=v;if(v===s.RED&&(k===s.FLOAT&&(Z=s.R32F),k===s.HALF_FLOAT&&(Z=s.R16F),k===s.UNSIGNED_BYTE&&(Z=s.R8),k===s.UNSIGNED_SHORT&&fe&&(Z=fe.R16_EXT),k===s.SHORT&&fe&&(Z=fe.R16_SNORM_EXT)),v===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.R8UI),k===s.UNSIGNED_SHORT&&(Z=s.R16UI),k===s.UNSIGNED_INT&&(Z=s.R32UI),k===s.BYTE&&(Z=s.R8I),k===s.SHORT&&(Z=s.R16I),k===s.INT&&(Z=s.R32I)),v===s.RG&&(k===s.FLOAT&&(Z=s.RG32F),k===s.HALF_FLOAT&&(Z=s.RG16F),k===s.UNSIGNED_BYTE&&(Z=s.RG8),k===s.UNSIGNED_SHORT&&fe&&(Z=fe.RG16_EXT),k===s.SHORT&&fe&&(Z=fe.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RG8UI),k===s.UNSIGNED_SHORT&&(Z=s.RG16UI),k===s.UNSIGNED_INT&&(Z=s.RG32UI),k===s.BYTE&&(Z=s.RG8I),k===s.SHORT&&(Z=s.RG16I),k===s.INT&&(Z=s.RG32I)),v===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),k===s.UNSIGNED_INT&&(Z=s.RGB32UI),k===s.BYTE&&(Z=s.RGB8I),k===s.SHORT&&(Z=s.RGB16I),k===s.INT&&(Z=s.RGB32I)),v===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),k===s.UNSIGNED_INT&&(Z=s.RGBA32UI),k===s.BYTE&&(Z=s.RGBA8I),k===s.SHORT&&(Z=s.RGBA16I),k===s.INT&&(Z=s.RGBA32I)),v===s.RGB&&(k===s.UNSIGNED_SHORT&&fe&&(Z=fe.RGB16_EXT),k===s.SHORT&&fe&&(Z=fe.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),v===s.RGBA){let J=le?_r:Qe.getTransfer(Q);k===s.FLOAT&&(Z=s.RGBA32F),k===s.HALF_FLOAT&&(Z=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Z=J===ot?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&fe&&(Z=fe.RGBA16_EXT),k===s.SHORT&&fe&&(Z=fe.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(R,v){let k;return R?v===null||v===Ni||v===Jn?k=s.DEPTH24_STENCIL8:v===gi?k=s.DEPTH32F_STENCIL8:v===Xs&&(k=s.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ni||v===Jn?k=s.DEPTH_COMPONENT24:v===gi?k=s.DEPTH_COMPONENT32F:v===Xs&&(k=s.DEPTH_COMPONENT16),k}function M(R,v){return E(R)===!0||R.isFramebufferTexture&&R.minFilter!==Tt&&R.minFilter!==It?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function N(R){let v=new WeakRef(R);i.get(R).__ref=v,g.add(v),x.register(R,v,v)}function P(R){let v=i.get(R).__ref;v!==void 0&&(g.delete(v),x.unregister(v))}function D(R){X(R.target)}function U(R){L(R.target)}function X(R){R.removeEventListener("dispose",D),P(R),G(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function L(R){R.removeEventListener("dispose",U),P(R),te(R)}function V(){for(let R of g){let v=R.deref();v!==void 0&&(v.isRenderTarget===!0?L(v):X(v))}g.clear(),u.clear()}function G(R){let v=i.get(R);if(v.__webglInit===void 0)return;let k=R.source,se=d.get(k);if(se){let Q=se[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&W(R),Object.keys(se).length===0&&d.delete(k)}i.remove(R)}function W(R){let v=i.get(R);s.deleteTexture(v.__webglTexture);let k=R.source,se=d.get(k);delete se[v.__cacheKey],a.memory.textures--}function te(R){let v=i.get(R);v.__depthDisposeCallback&&v.__depthDisposeCallback();let k=R.depthTexture;if(k&&k.renderTarget===R&&X(k),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(v.__webglFramebuffer[Q]))for(let le=0;le<v.__webglFramebuffer[Q].length;le++)s.deleteFramebuffer(v.__webglFramebuffer[Q][le]);else s.deleteFramebuffer(v.__webglFramebuffer[Q]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[Q])}else{if(Array.isArray(v.__webglFramebuffer))for(let Q=0;Q<v.__webglFramebuffer.length;Q++)s.deleteFramebuffer(v.__webglFramebuffer[Q]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Q=0;Q<v.__webglColorRenderbuffer.length;Q++)v.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[Q]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let se=R.textures;for(let Q=0,le=se.length;Q<le;Q++){let fe=i.get(se[Q]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),a.memory.textures--),i.remove(se[Q])}i.remove(R)}let q=0;function Y(){q=0}function F(){return q}function ne(R){q=R}function Me(){let R=q;return R>=n.maxTextures&&Ie("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+n.maxTextures),q+=1,R}function K(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.mipmapsAutoUpdate),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function me(R,v){let k=i.get(R);if(R.isVideoTexture&&mt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){let se=R.image;if(se===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(k,R,v);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+v)}function ye(R,v){let k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){wt(k,R,v);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+v)}function oe(R,v){let k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){wt(k,R,v);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+v)}function ee(R,v){let k=i.get(R);if(R.version>0&&k.__version!==R.version){Yt(k,R,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+v)}let xe={[Li]:s.REPEAT,[xi]:s.CLAMP_TO_EDGE,[bs]:s.MIRRORED_REPEAT},Ae={[Tt]:s.NEAREST,[yo]:s.NEAREST_MIPMAP_NEAREST,[Zn]:s.NEAREST_MIPMAP_LINEAR,[It]:s.LINEAR,[Ws]:s.LINEAR_MIPMAP_NEAREST,[Si]:s.LINEAR_MIPMAP_LINEAR},ve={[rd]:s.NEVER,[Dc]:s.ALWAYS,[ad]:s.LESS,[Pc]:s.LEQUAL,[od]:s.EQUAL,[Ic]:s.GEQUAL,[ld]:s.GREATER,[cd]:s.NOTEQUAL};function Be(R,v){if(v.type===gi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===It||v.magFilter===Ws||v.magFilter===Zn||v.magFilter===Si||v.minFilter===It||v.minFilter===Ws||v.minFilter===Zn||v.minFilter===Si)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,xe[v.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,xe[v.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,xe[v.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,Ae[v.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,Ae[v.minFilter]),v.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ve[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Tt||v.minFilter!==Zn&&v.minFilter!==Si||v.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,n.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function tt(R,v){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",D),N(v));let se=v.source,Q=d.get(se);Q===void 0&&(Q={},d.set(se,Q));let le=K(v);if(le!==R.__cacheKey){Q[le]===void 0&&(Q[le]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[le].usedTimes++;let fe=Q[R.__cacheKey];fe!==void 0&&(Q[R.__cacheKey].usedTimes--,fe.usedTimes===0&&W(v)),R.__cacheKey=le,R.__webglTexture=Q[le].texture}return k}function Ye(R,v,k){return Math.floor(Math.floor(R/k)/v)}function Mt(R,v,k,se){let le=R.updateRanges;if(le.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,k,se,v.data);else{le.sort((C,j)=>C.start-j.start);let fe=0;for(let C=1;C<le.length;C++){let j=le[fe],$=le[C],ue=j.start+j.count,ce=Ye($.start,v.width,4),he=Ye(j.start,v.width,4);$.start<=ue+1&&ce===he&&Ye($.start+$.count-1,v.width,4)===ce?j.count=Math.max(j.count,$.start+$.count-j.start):(++fe,le[fe]=$)}le.length=fe+1;let Z=t.getParameter(s.UNPACK_ROW_LENGTH),J=t.getParameter(s.UNPACK_SKIP_PIXELS),pe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let C=0,j=le.length;C<j;C++){let $=le[C],ue=Math.floor($.start/4),ce=Math.ceil($.count/4),he=ue%v.width,De=Math.floor(ue/v.width),Xe=ce,re=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,he),t.pixelStorei(s.UNPACK_SKIP_ROWS,De),t.texSubImage2D(s.TEXTURE_2D,0,he,De,Xe,re,k,se,v.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Z),t.pixelStorei(s.UNPACK_SKIP_PIXELS,J),t.pixelStorei(s.UNPACK_SKIP_ROWS,pe)}}function wt(R,v,k){let se=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(se=s.TEXTURE_3D);let Q=tt(R,v),le=v.source;t.bindTexture(se,R.__webglTexture,s.TEXTURE0+k);let fe=i.get(le);if(le.version!==fe.__version||Q===!0){if(t.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let re=Qe.getPrimaries(Qe.workingColorSpace),Ne=v.colorSpace===xn?null:Qe.getPrimaries(v.colorSpace),qe=v.colorSpace===xn||re===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe)}t.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let J=y(v.image,!1,n.maxTextureSize);J=Oe(v,J);let pe=r.convert(v.format,v.colorSpace),C=r.convert(v.type),j=A(v.internalFormat,pe,C,v.normalized,v.colorSpace,v.isVideoTexture);Be(se,v);let $,ue=v.mipmaps,ce=v.isVideoTexture!==!0,he=fe.__version===void 0||Q===!0,De=le.dataReady,Xe=M(v,J);if(v.isDepthTexture)j=_(v.format===_n,v.type),he&&(ce?t.texStorage2D(s.TEXTURE_2D,1,j,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,j,J.width,J.height,0,pe,C,null));else if(v.isDataTexture)if(ue.length>0){ce&&he&&t.texStorage2D(s.TEXTURE_2D,Xe,j,ue[0].width,ue[0].height);for(let re=0,Ne=ue.length;re<Ne;re++)$=ue[re],ce?De&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,$.width,$.height,pe,C,$.data):t.texImage2D(s.TEXTURE_2D,re,j,$.width,$.height,0,pe,C,$.data);v.generateMipmaps=!1}else ce?(he&&t.texStorage2D(s.TEXTURE_2D,Xe,j,J.width,J.height),De&&Mt(v,J,pe,C)):t.texImage2D(s.TEXTURE_2D,0,j,J.width,J.height,0,pe,C,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ce&&he&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Xe,j,ue[0].width,ue[0].height,J.depth);for(let re=0,Ne=ue.length;re<Ne;re++)if($=ue[re],v.format!==Mi)if(pe!==null)if(ce){if(De)if(v.layerUpdates.size>0){let qe=Xc($.width,$.height,v.format,v.type);for(let be of v.layerUpdates){let st=$.data.subarray(be*qe/$.data.BYTES_PER_ELEMENT,(be+1)*qe/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,be,$.width,$.height,1,pe,st)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,$.width,$.height,J.depth,pe,$.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,j,$.width,$.height,J.depth,0,$.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?De&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,$.width,$.height,J.depth,pe,C,$.data):t.texImage3D(s.TEXTURE_2D_ARRAY,re,j,$.width,$.height,J.depth,0,pe,C,$.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ce&&he&&t.texStorage2D(s.TEXTURE_2D,Xe,j,ue[0].width,ue[0].height);for(let re=0,Ne=ue.length;re<Ne;re++)$=ue[re],v.format!==Mi?pe!==null?ce?De&&t.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,$.width,$.height,pe,$.data):t.compressedTexImage2D(s.TEXTURE_2D,re,j,$.width,$.height,0,$.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?De&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,$.width,$.height,pe,C,$.data):t.texImage2D(s.TEXTURE_2D,re,j,$.width,$.height,0,pe,C,$.data)}else if(v.isDataArrayTexture)if(ce){if(he&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Xe,j,J.width,J.height,J.depth),De)if(v.layerUpdates.size>0){let re=Xc(J.width,J.height,v.format,v.type);for(let Ne of v.layerUpdates){let qe=J.data.subarray(Ne*re/J.data.BYTES_PER_ELEMENT,(Ne+1)*re/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ne,J.width,J.height,1,pe,C,qe)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,pe,C,J.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,j,J.width,J.height,J.depth,0,pe,C,J.data);else if(v.isData3DTexture)ce?(he&&t.texStorage3D(s.TEXTURE_3D,Xe,j,J.width,J.height,J.depth),De&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,pe,C,J.data)):t.texImage3D(s.TEXTURE_3D,0,j,J.width,J.height,J.depth,0,pe,C,J.data);else if(v.isFramebufferTexture){if(he)if(ce)t.texStorage2D(s.TEXTURE_2D,Xe,j,J.width,J.height);else{let re=J.width,Ne=J.height;for(let qe=0;qe<Xe;qe++)t.texImage2D(s.TEXTURE_2D,qe,j,re,Ne,0,pe,C,null),re>>=1,Ne>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){let re=s.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),J.parentNode!==re){re.appendChild(J),u.add(v),re.onpaint=Ne=>{let qe=Ne.changedElements;for(let be of u)qe.includes(be.image)&&(be.needsUpdate=!0)},re.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,J);else{let qe=s.RGBA,be=s.RGBA,st=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,qe,be,st,J)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ue.length>0){if(ce&&he){let re=ke(ue[0]);t.texStorage2D(s.TEXTURE_2D,Xe,j,re.width,re.height)}for(let re=0,Ne=ue.length;re<Ne;re++)$=ue[re],ce?De&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,pe,C,$):t.texImage2D(s.TEXTURE_2D,re,j,pe,C,$);v.generateMipmaps=!1}else if(ce){if(he){let re=ke(J);t.texStorage2D(s.TEXTURE_2D,Xe,j,re.width,re.height)}De&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe,C,J)}else t.texImage2D(s.TEXTURE_2D,0,j,pe,C,J);E(v)&&v.mipmapsAutoUpdate===!0&&b(se),fe.__version=le.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Yt(R,v,k){if(v.image.length!==6)return;let se=tt(R,v),Q=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+k);let le=i.get(Q);if(Q.version!==le.__version||se===!0){t.activeTexture(s.TEXTURE0+k);let fe=Qe.getPrimaries(Qe.workingColorSpace),Z=v.colorSpace===xn?null:Qe.getPrimaries(v.colorSpace),J=v.colorSpace===xn||fe===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let pe=v.isCompressedTexture||v.image[0].isCompressedTexture,C=v.image[0]&&v.image[0].isDataTexture,j=[];for(let be=0;be<6;be++)!pe&&!C?j[be]=y(v.image[be],!0,n.maxCubemapSize):j[be]=C?v.image[be].image:v.image[be],j[be]=Oe(v,j[be]);let $=j[0],ue=r.convert(v.format,v.colorSpace),ce=r.convert(v.type),he=A(v.internalFormat,ue,ce,v.normalized,v.colorSpace),De=v.isVideoTexture!==!0,Xe=le.__version===void 0||se===!0,re=Q.dataReady,Ne=M(v,$);Be(s.TEXTURE_CUBE_MAP,v);let qe;if(v.isDepthTexture){if(he=_(v.format===_n,v.type),Xe)if(De)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,he,$.width,$.height);else for(let be=0;be<6;be++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,he,$.width,$.height,0,ue,ce,null)}else if(pe){De&&Xe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,he,$.width,$.height);for(let be=0;be<6;be++){qe=j[be].mipmaps;for(let st=0;st<qe.length;st++){let Et=qe[st];v.format!==Mi?ue!==null?De?re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,st,0,0,Et.width,Et.height,ue,Et.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,st,he,Et.width,Et.height,0,Et.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,st,0,0,Et.width,Et.height,ue,ce,Et.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,st,he,Et.width,Et.height,0,ue,ce,Et.data)}}}else{if(qe=v.mipmaps,De&&Xe){qe.length>0&&Ne++;let be=ke(j[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,he,be.width,be.height)}for(let be=0;be<6;be++)if(C){De?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,j[be].width,j[be].height,ue,ce,j[be].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,he,j[be].width,j[be].height,0,ue,ce,j[be].data);for(let st=0;st<qe.length;st++){let Ut=qe[st].image[be].image;De?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,st+1,0,0,Ut.width,Ut.height,ue,ce,Ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,st+1,he,Ut.width,Ut.height,0,ue,ce,Ut.data)}}else{De?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ue,ce,j[be]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,he,ue,ce,j[be]);for(let st=0;st<qe.length;st++){let Et=qe[st];De?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,st+1,0,0,ue,ce,Et.image[be]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,st+1,he,ue,ce,Et.image[be])}}}E(v)&&v.mipmapsAutoUpdate===!0&&b(s.TEXTURE_CUBE_MAP),le.__version=Q.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Je(R,v,k,se,Q,le){let fe=r.convert(k.format,k.colorSpace),Z=r.convert(k.type),J=A(k.internalFormat,fe,Z,k.normalized,k.colorSpace),pe=i.get(v),C=i.get(k);if(C.__renderTarget=v,!pe.__hasExternalTextures){let j=Math.max(1,v.width>>le),$=Math.max(1,v.height>>le);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,le,J,j,$,v.depth,0,fe,Z,null):t.texImage2D(Q,le,J,j,$,0,fe,Z,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),_e(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,Q,C.__webglTexture,0,ct(v)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,Q,C.__webglTexture,le),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(R,v,k){if(s.bindRenderbuffer(s.RENDERBUFFER,R),v.depthBuffer){let se=v.depthTexture,Q=se&&se.isDepthTexture?se.type:null,le=_(v.stencilBuffer,Q),fe=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;_e(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct(v),le,v.width,v.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct(v),le,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,le,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,R)}else{let se=v.textures;for(let Q=0;Q<se.length;Q++){let le=se[Q],fe=r.convert(le.format,le.colorSpace),Z=r.convert(le.type),J=A(le.internalFormat,fe,Z,le.normalized,le.colorSpace);_e(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct(v),J,v.width,v.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct(v),J,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,J,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function vt(R,v,k){let se=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(v.depthTexture);Q.__renderTarget=v;let le=se?v.depthTexture.image[0]:v.depthTexture.image;(!Q.__webglTexture||le.width!==v.width||le.height!==v.height)&&(le.width=v.width,le.height=v.height,v.depthTexture.needsUpdate=!0),se?ee(v.depthTexture,0):me(v.depthTexture,0);let fe=Q.__webglTexture,Z=ct(v),J=se?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,pe=v.depthTexture.format===_n?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===on)_e(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,J,fe,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,pe,J,fe,0);else if(v.depthTexture.format===_n)_e(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,J,fe,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,pe,J,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Jt(R){let v=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let se=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),se){let Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,se.removeEventListener("dispose",Q)};se.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=se}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let se=0;se<6;se++)vt(v.__webglFramebuffer[se],R,se);else R.texture.mipmaps.length>0?vt(v.__webglFramebuffer[0],R,0):vt(v.__webglFramebuffer,R,0);else if(k){v.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[se]),v.__webglDepthbuffer[se]===void 0)v.__webglDepthbuffer[se]=s.createRenderbuffer(),Vt(v.__webglDepthbuffer[se],R,!1);else{let Q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer[se];s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,le)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Vt(v.__webglDepthbuffer,R,!1);else{let Q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,le)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ni(R,v,k){let se=i.get(R);v!==void 0&&Je(se.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Jt(R)}function si(R){let v=R.texture,k=i.get(R),se=i.get(v);R.addEventListener("dispose",U),N(R);let Q=R.textures,le=R.isWebGLCubeRenderTarget===!0,fe=Q.length>1;if(fe||(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=v.version,a.memory.textures++),le){k.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(v.mipmaps.length>0){k.__webglFramebuffer[Z]=[];for(let J=0;J<v.mipmaps.length;J++)k.__webglFramebuffer[Z][J]=s.createFramebuffer()}else k.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(v.mipmaps.length>0){k.__webglFramebuffer=[];for(let Z=0;Z<v.mipmaps.length;Z++)k.__webglFramebuffer[Z]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(fe)for(let Z=0,J=Q.length;Z<J;Z++){let pe=i.get(Q[Z]);pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&_e(R)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Z=0;Z<Q.length;Z++){let J=Q[Z];k.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[Z]);let pe=r.convert(J.format,J.colorSpace),C=r.convert(J.type),j=A(J.internalFormat,pe,C,J.normalized,J.colorSpace,R.isXRRenderTarget===!0),$=ct(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,$,j,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,k.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Vt(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),Be(s.TEXTURE_CUBE_MAP,v);for(let Z=0;Z<6;Z++)if(v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Je(k.__webglFramebuffer[Z][J],R,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else Je(k.__webglFramebuffer[Z],R,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);E(v)?b(s.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(fe){for(let Z=0,J=Q.length;Z<J;Z++){let pe=Q[Z],C=i.get(pe),j=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(j,C.__webglTexture),Be(j,pe),Je(k.__webglFramebuffer,R,pe,s.COLOR_ATTACHMENT0+Z,j,0),E(pe)&&b(j)}t.unbindTexture()}else{let Z=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Z,se.__webglTexture),Be(Z,v),v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Je(k.__webglFramebuffer[J],R,v,s.COLOR_ATTACHMENT0,Z,J);else Je(k.__webglFramebuffer,R,v,s.COLOR_ATTACHMENT0,Z,0);E(v)?b(Z):v.mipmaps.length>0&&s.texParameteri(Z,s.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&Jt(R)}function O(R){let v=R.textures;for(let k=0,se=v.length;k<se;k++){let Q=v[k];if(E(Q)&&Q.mipmapsAutoUpdate===!0){let le=T(R),fe=i.get(Q).__webglTexture;t.bindTexture(le,fe),b(le),t.unbindTexture()}}}let Wt=[];function lt(R){if(R.samples>0){if(_e(R)===!1){let v=R.textures,k=R.width,se=R.height,Q=s.COLOR_BUFFER_BIT,le=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=i.get(R),Z=v.length>1;if(Z)for(let pe=0;pe<v.length;pe++)t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let pe=0;pe<v.length;pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,fe.__webglColorRenderbuffer[pe]);let C=i.get(v[pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,C,0)}s.blitFramebuffer(0,0,k,se,0,0,k,se,Q,s.NEAREST),l===!0&&(Wt.length=0,Wt.push(s.COLOR_ATTACHMENT0+pe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Wt.push(le),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Wt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let pe=0;pe<v.length;pe++){t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,fe.__webglColorRenderbuffer[pe]);let C=i.get(v[pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,C,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let v=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function ct(R){return Math.min(n.maxSamples,R.samples)}function _e(R){let v=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function mt(R){let v=a.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function Oe(R,v){let k=R.colorSpace,se=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==ei&&k!==xn&&(Qe.getTransfer(k)===ot?(se!==Mi||Q!==hi)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",k)),v}function ke(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Me,this.resetTextureUnits=Y,this.getTextureUnits=F,this.setTextureUnits=ne,this.setTexture2D=me,this.setTexture2DArray=ye,this.setTexture3D=oe,this.setTextureCube=ee,this.rebindTextures=ni,this.setupRenderTarget=si,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=_e,this.dispose=V}function ox(s,e){function t(i,n=xn){let r,a=Qe.getTransfer(n);if(i===hi)return s.UNSIGNED_BYTE;if(i===bo)return s.UNSIGNED_SHORT_4_4_4_4;if(i===So)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Tc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Ac)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===wc)return s.BYTE;if(i===Ec)return s.SHORT;if(i===Xs)return s.UNSIGNED_SHORT;if(i===vo)return s.INT;if(i===Ni)return s.UNSIGNED_INT;if(i===gi)return s.FLOAT;if(i===Fi)return s.HALF_FLOAT;if(i===Rc)return s.ALPHA;if(i===Cc)return s.RGB;if(i===Mi)return s.RGBA;if(i===on)return s.DEPTH_COMPONENT;if(i===_n)return s.DEPTH_STENCIL;if(i===Mo)return s.RED;if(i===wo)return s.RED_INTEGER;if(i===In)return s.RG;if(i===Eo)return s.RG_INTEGER;if(i===To)return s.RGBA_INTEGER;if(i===$r||i===Kr||i===Zr||i===Jr)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ao||i===Ro||i===Co||i===Lo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ro)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Po||i===Io||i===Do||i===No||i===Fo||i===jr||i===Oo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Po||i===Io)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Do)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===No)return r.COMPRESSED_R11_EAC;if(i===Fo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===jr)return r.COMPRESSED_RG11_EAC;if(i===Oo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Uo||i===Bo||i===ko||i===Ho||i===zo||i===Go||i===Vo||i===Wo||i===Xo||i===qo||i===Yo||i===$o||i===Ko||i===Zo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Uo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ko)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ho)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Go)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$o)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ko)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jo||i===jo||i===Qo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Jo)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===el||i===tl||i===Qr||i===il)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===el)return r.COMPRESSED_RED_RGTC1_EXT;if(i===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Jn?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}var lx=`
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

}`,rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Lr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Gi({vertexShader:lx,fragmentShader:cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ie(new zi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ah=class extends Pi{constructor(e,t){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new rh,p={},y=t.getContextAttributes(),E=null,b=null,T=[],A=[],_=new Ee,M=null,N=null,P=new Pt;P.viewport=new ht;let D=new Pt;D.viewport=new ht;let U=[P,D],X=new po,L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let me=T[K];return me===void 0&&(me=new As,T[K]=me),me.getTargetRaySpace()},this.getControllerGrip=function(K){let me=T[K];return me===void 0&&(me=new As,T[K]=me),me.getGripSpace()},this.getHand=function(K){let me=T[K];return me===void 0&&(me=new As,T[K]=me),me.getHandSpace()};function G(K){let me=A.indexOf(K.inputSource);if(me===-1)return;let ye=T[me];ye!==void 0&&(ye.update(K.inputSource,K.frame,c||a),ye.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){n.removeEventListener("select",G),n.removeEventListener("selectstart",G),n.removeEventListener("selectend",G),n.removeEventListener("squeeze",G),n.removeEventListener("squeezestart",G),n.removeEventListener("squeezeend",G),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",te);for(let K=0;K<T.length;K++){let me=A[K];me!==null&&(A[K]=null,T[K].disconnect(me))}L=null,V=null,m.reset();for(let K in p)delete p[K];if(e.setRenderTarget(E),d=null,f=null,u=null,n=null,b=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),N!==null){let K=N.camera;K.fov=N.fov,K.zoom=N.zoom,K.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(E=e.getRenderTarget(),n.addEventListener("select",G),n.addEventListener("selectstart",G),n.addEventListener("selectend",G),n.addEventListener("squeeze",G),n.addEventListener("squeezestart",G),n.addEventListener("squeezeend",G),n.addEventListener("end",W),n.addEventListener("inputsourceschange",te),y.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,oe=null,ee=null;y.depth&&(ee=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=y.stencil?_n:on,oe=y.stencil?Jn:Ni);let xe={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(xe),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new pi(f.textureWidth,f.textureHeight,{format:Mi,type:hi,depthTexture:new un(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ye={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,t,ye),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new pi(d.framebufferWidth,d.framebufferHeight,{format:Mi,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Me.setContext(n),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(K){for(let me=0;me<K.removed.length;me++){let ye=K.removed[me],oe=A.indexOf(ye);oe>=0&&(A[oe]=null,T[oe].disconnect(ye))}for(let me=0;me<K.added.length;me++){let ye=K.added[me],oe=A.indexOf(ye);if(oe===-1){for(let xe=0;xe<T.length;xe++)if(xe>=A.length){A.push(ye),oe=xe;break}else if(A[xe]===null){A[xe]=ye,oe=xe;break}if(oe===-1)break}let ee=T[oe];ee&&ee.connect(ye)}}function q(K,me){me===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(me.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let me=K.near,ye=K.far;m.texture!==null&&(m.depthNear>0&&(me=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),X.near=D.near=P.near=me,X.far=D.far=P.far=ye,(L!==X.near||V!==X.far)&&(n.updateRenderState({depthNear:X.near,depthFar:X.far}),L=X.near,V=X.far),X.layers.mask=K.layers.mask|6,P.layers.mask=X.layers.mask&-5,D.layers.mask=X.layers.mask&-3;let oe=K.parent,ee=X.cameras;q(X,oe);for(let xe=0;xe<ee.length;xe++)q(ee[xe],oe);X.projectionMatrix.copy(P.projectionMatrix),X.projectionMatrixInverse.copy(P.projectionMatrixInverse),N===null&&K.isPerspectiveCamera&&(N={camera:K,fov:K.fov,zoom:K.zoom}),Y(K,X,oe)};function Y(K,me,ye){ye===null?K.matrix.copy(me.matrixWorld):(K.matrix.copy(ye.matrixWorld),K.matrix.invert(),K.matrix.multiply(me.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(me.projectionMatrix),K.projectionMatrixInverse.copy(me.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Vn*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(K){return p[K]};let F=null;function ne(K,me){if(h=me.getViewerPose(c||a),g=me,h!==null){let ye=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let oe=!1;ye.length!==X.cameras.length&&(X.cameras.length=0,oe=!0);for(let ve=0;ve<ye.length;ve++){let Be=ye[ve],tt=null;if(d!==null)tt=d.getViewport(Be);else{let Mt=u.getViewSubImage(f,Be);tt=Mt.viewport,ve===0&&(e.setRenderTargetTextures(b,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(b))}let Ye=U[ve];Ye===void 0&&(Ye=new Pt,Ye.layers.enable(ve),Ye.viewport=new ht,U[ve]=Ye),Ye.matrix.fromArray(Be.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Be.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(tt.x,tt.y,tt.width,tt.height),ve===0&&(X.matrix.copy(Ye.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),oe===!0&&X.cameras.push(Ye)}let ee=n.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let ve=u.getDepthInformation(ye[0]);ve&&ve.isValid&&ve.texture&&m.init(ve,n.renderState)}if(ee&&ee.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let ve=0;ve<ye.length;ve++){let Be=ye[ve].camera;if(Be){let tt=p[Be];tt||(tt=new Lr,p[Be]=tt);let Ye=u.getCameraImage(Be);tt.sourceTexture=Ye}}}}for(let ye=0;ye<T.length;ye++){let oe=A[ye],ee=T[ye];oe!==null&&ee!==void 0&&ee.update(oe,me,c||a)}F&&F(K,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),g=null}let Me=new kd;Me.setAnimationLoop(ne),this.setAnimationLoop=function(K){F=K},this.dispose=function(){}}},hx=new ze,Kd=new We;Kd.set(-1,0,0,0,1,0,0,0,1);function ux(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Gc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,E,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ii&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ii&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),E=y.envMap,b=y.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(hx.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Kd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ii&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function dx(s,e,t,i){let n={},r={};function a(y,E){let b=E.program;i.uniformBlockBinding(y,b,n[y.id])}function o(y,E){let b=n[y.id];b===void 0&&(g(y),b=l(y),n[y.id]=b,y.addEventListener("dispose",m));let T=E.program;i.updateUBOMapping(y,T);let A=e.render.frame;r[y.id]!==A&&(c(y),r[y.id]=A)}function l(y){let E=s.createBuffer(),b=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,b,T),s.bindBuffer(s.UNIFORM_BUFFER,null),E}function c(y){let E=n[y.id],b=y.uniforms,T=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let A=0,_=b.length;A<_;A++){let M=b[A];if(Array.isArray(M))for(let N=0,P=M.length;N<P;N++)h(M[N],A,N,T);else h(M,A,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,E,b,T){if(f(y,E,b,T)===!0){let A=y.__offset,_=y.value;if(Array.isArray(_)){let M=0;for(let N=0;N<_.length;N++){let P=_[N],D=x(P,!0);u(P,y.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,A,y.__data)}}function u(y,E,b){typeof y=="number"||typeof y=="boolean"?E[b]=y:y.isMatrix3?(E[b]=y.elements[0],E[b+1]=y.elements[1],E[b+2]=y.elements[2],E[b+3]=0,E[b+4]=y.elements[3],E[b+5]=y.elements[4],E[b+6]=y.elements[5],E[b+7]=0,E[b+8]=y.elements[6],E[b+9]=y.elements[7],E[b+10]=y.elements[8],E[b+11]=0):ArrayBuffer.isView(y)?E.set(y.subarray(0,E.length-b),b):y.toArray(E,b)}function f(y,E,b,T){let A=y.value,_=E+"_"+b;if(Array.isArray(A)){T[_]===void 0&&(T[_]=[]);let M=T[_],N=!1;for(let P=0;P<A.length;P++)d(A[P],M,P)===!0&&(N=!0);return N}return d(A,T,_)}function d(y,E,b){if(E[b]===void 0)return typeof y=="number"||typeof y=="boolean"?E[b]=y:ArrayBuffer.isView(y)?E[b]=y.slice():E[b]=y.clone(),!0;{let T=E[b];if(typeof y=="number"||typeof y=="boolean"){if(T!==y)return E[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(T.equals(y)===!1)return T.copy(y),!0}}return!1}function g(y){let E=y.uniforms,b=0,T=16;for(let _=0,M=E.length;_<M;_++){let N=Array.isArray(E[_])?E[_]:[E[_]];for(let P=0,D=N.length;P<D;P++){let U=N[P],X=Array.isArray(U.value)?U.value:[U.value],L=Array.isArray(E[_])||Array.isArray(U.value),V=b;for(let W=0,te=X.length;W<te;W++){let q=X[W],Y=x(q,L),F=b%T,ne=F%Y.boundary,Me=F+ne;b+=ne,Me!==0&&T-Me<Y.storage&&(b+=T-Me),W===0&&(V=b),b+=Y.storage}let G=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new G((b-V)/Float32Array.BYTES_PER_ELEMENT),U.__offset=V}}let A=b%T;return A>0&&(b+=T-A),y.__size=b,y.__cache={},this}function x(y,E){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=16,b.storage=48):y.isMatrix4?(b.boundary=16,b.storage=64):y.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",y),E===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(y){let E=y.target;E.removeEventListener("dispose",m),s.deleteBuffer(n[E.id]),delete n[E.id],delete r[E.id]}function p(){for(let y in n)s.deleteBuffer(n[y]);n={},r={}}return{bind:a,update:o,dispose:p}}var fx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$i=null;function px(){return $i===null&&($i=new Is(fx,16,16,In,Fi),$i.name="DFG_LUT",$i.minFilter=It,$i.magFilter=It,$i.wrapS=xi,$i.wrapT=xi,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}var ll=class{constructor(e={}){let{canvas:t=hd(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=hi}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let x=d,m=new Set([To,Eo,wo]),p=new Set([hi,Ni,Xs,Jn,bo,So]),y=new Uint32Array(4),E=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},T=null,A=null,_=[],M=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,U=null,X=null,L=null,V=null;this._outputColorSpace=Lt;let G=0,W=0,te=null,q=-1,Y=null,F=new ht,ne=new ht,Me=null,K=new Re(0),me=0,ye=t.width,oe=t.height,ee=1,xe=null,Ae=null,ve=new ht(0,0,ye,oe),Be=new ht(0,0,ye,oe),tt=!1,Ye=new Tn,Mt=new Ya,wt=!1,Yt=!1,Je=new ze,Vt=new w,vt=new ht,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ni=!1;function si(){return te===null?ee:1}let O=i;function Wt(S,I){return t.getContext(S,I)}let lt,ct,_e,mt,Oe,ke,R,v,k,se,Q,le,fe,Z,J,pe,C,j,$,ue,ce,he,De;try{let S={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",be,!1),O===null){let I="webgl2";if(O=Wt(I,S),O===null)throw Wt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(S){throw t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",be,!1),He("WebGLRenderer: "+S.message),S}function Xe(){lt=new E0(O),lt.init(),ce=new ox(O,lt),ct=new p0(O,lt,e,ce),_e=new rx(O,lt),ct.reversedDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),X=O.createFramebuffer(),L=O.createFramebuffer(),V=O.createFramebuffer(),mt=new R0(O),Oe=new X_,ke=new ax(O,lt,_e,Oe,ct,ce,mt),R=new w0(P),v=new Lp(O),he=new d0(O,v),k=new T0(O,v,mt,he),se=new L0(O,k,v,he,mt),j=new C0(O,ct,ke),J=new m0(Oe),Q=new W_(P,R,lt,ct,he,J),le=new ux(P,Oe),fe=new Y_,Z=new Q_(lt),C=new u0(P,R,_e,se,g,l),pe=new sx(P,se,ct),De=new dx(O,mt,ct,_e),$=new f0(O,lt,mt),ue=new A0(O,lt,mt),mt.programs=Q.programs,P.capabilities=ct,P.extensions=lt,P.properties=Oe,P.renderLists=fe,P.shadowMap=pe,P.state=_e,P.info=mt}x!==hi&&(N=new I0(x,t.width,t.height,o,n,r));let re=new ah(P,O);this.xr=re,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let S=lt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=lt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(S){S!==void 0&&(ee=S,this.setSize(ye,oe,!1))},this.getSize=function(S){return S.set(ye,oe)},this.setSize=function(S,I,z=!0){if(re.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=S,oe=I,t.width=Math.floor(S*ee),t.height=Math.floor(I*ee),z===!0&&(t.style.width=S+"px",t.style.height=I+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(ye*ee,oe*ee).floor()},this.setDrawingBufferSize=function(S,I,z){ye=S,oe=I,ee=z,t.width=Math.floor(S*z),t.height=Math.floor(I*z),this.setViewport(0,0,S,I)},this.setEffects=function(S){if(x===hi){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let I=0;I<S.length;I++)if(S[I].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(F)},this.getViewport=function(S){return S.copy(ve)},this.setViewport=function(S,I,z,B){S.isVector4?ve.set(S.x,S.y,S.z,S.w):ve.set(S,I,z,B),_e.viewport(F.copy(ve).multiplyScalar(si()).round())},this.getScissor=function(S){return S.copy(Be)},this.setScissor=function(S,I,z,B){S.isVector4?Be.set(S.x,S.y,S.z,S.w):Be.set(S,I,z,B),_e.scissor(ne.copy(Be).multiplyScalar(si()).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(S){_e.setScissorTest(tt=S)},this.setOpaqueSort=function(S){xe=S},this.setTransparentSort=function(S){Ae=S},this.getClearColor=function(S){return S.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(S=!0,I=!0,z=!0){let B=0;if(S){let H=!1;if(te!==null){let ge=te.texture.format;H=m.has(ge)}if(H){let ge=te.texture.type,Ce=p.has(ge),de=C.getClearColor(),Se=C.getClearAlpha(),Pe=de.r,Ge=de.g,Ke=de.b;Ce?(y[0]=Pe,y[1]=Ge,y[2]=Ke,y[3]=Se,O.clearBufferuiv(O.COLOR,0,y)):(E[0]=Pe,E[1]=Ge,E[2]=Ke,E[3]=Se,O.clearBufferiv(O.COLOR,0,E))}else B|=O.COLOR_BUFFER_BIT}I&&(B|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(B|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&O.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),U=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",be,!1),C.dispose(),fe.dispose(),Z.dispose(),ke.dispose(),Oe.dispose(),R.dispose(),se.dispose(),k.dispose(),he.dispose(),De.dispose(),Q.dispose(),re.dispose(),re.removeEventListener("sessionstart",ts),re.removeEventListener("sessionend",is),Ei.stop()};function Ne(S){S.preventDefault(),xr("WebGLRenderer: Context Lost."),D=!0}function qe(){xr("WebGLRenderer: Context Restored."),D=!1;let S=mt.autoReset,I=pe.enabled,z=pe.autoUpdate,B=pe.needsUpdate,H=pe.type;Xe(),mt.autoReset=S,pe.enabled=I,pe.autoUpdate=z,pe.needsUpdate=B,pe.type=H}function be(S){He("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function st(S){let I=S.target;I.removeEventListener("dispose",st),Et(I)}function Et(S){Ut(S),Oe.remove(S)}function Ut(S){let I=Oe.get(S).programs;I!==void 0&&(I.forEach(function(z){Q.releaseProgram(z)}),S.isShaderMaterial&&Q.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,z,B,H,ge){I===null&&(I=Jt);let Ce=H.isMesh&&H.matrixWorld.determinantAffine()<0,de=oa(S,I,z,B,H);_e.setMaterial(B,Ce);let Se=z.index,Pe=1;if(B.wireframe===!0){if(Se=k.getWireframeAttribute(z),Se===void 0)return;Pe=2}let Ge=z.drawRange,Ke=z.attributes.position,Le=Ge.start*Pe,je=(Ge.start+Ge.count)*Pe;ge!==null&&(Le=Math.max(Le,ge.start*Pe),je=Math.min(je,(ge.start+ge.count)*Pe)),Se!==null?(Le=Math.max(Le,0),je=Math.min(je,Se.count)):Ke!=null&&(Le=Math.max(Le,0),je=Math.min(je,Ke.count));let bt=je-Le;if(bt<0||bt===1/0)return;he.setup(H,B,de,z,Se);let ut,rt=$;if(Se!==null&&(ut=v.get(Se),rt=ue,rt.setIndex(ut)),H.isMesh)B.wireframe===!0?(_e.setLineWidth(B.wireframeLinewidth*si()),rt.setMode(O.LINES)):rt.setMode(O.TRIANGLES);else if(H.isLine){let Bt=B.linewidth;Bt===void 0&&(Bt=1),_e.setLineWidth(Bt*si()),H.isLineSegments?rt.setMode(O.LINES):H.isLineLoop?rt.setMode(O.LINE_LOOP):rt.setMode(O.LINE_STRIP)}else H.isPoints?rt.setMode(O.POINTS):H.isSprite&&rt.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))rt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Bt=H._multiDrawStarts,ae=H._multiDrawCounts,Ve=H._multiDrawCount,Ue=Se?v.get(Se).bytesPerElement:1,ai=Oe.get(B).currentProgram.getUniforms();for(let kt=0;kt<Ve;kt++)ai.setValue(O,"_gl_DrawID",kt),rt.render(Bt[kt]/Ue,ae[kt])}else if(H.isInstancedMesh)rt.renderInstances(Le,bt,H.count);else if(z.isInstancedBufferGeometry){let Bt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ae=Math.min(z.instanceCount,Bt);rt.renderInstances(Le,bt,ae)}else rt.render(Le,bt)};function es(S,I,z,B){U!==null&&S.isNodeMaterial&&U.setObject(B,S),wt===!0&&J.setState(S,z,!1),S.transparent===!0&&S.side===Ct&&S.forceSinglePass===!1?(S.side=ii,S.needsUpdate=!0,Fn(S,I,B),S.side=Xi,S.needsUpdate=!0,Fn(S,I,B),S.side=Ct):Fn(S,I,B)}this.compile=function(S,I,z=null){z===null&&(z=S),U!==null&&U.renderStart(S,I,z),A=Z.get(z),A.init(I),M.push(A),z.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(A.pushLight(H),H.castShadow&&A.pushShadow(H))}),S!==z&&S.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(A.pushLight(H),H.castShadow&&A.pushShadow(H))}),A.setupLights(),U!==null&&U.updateLights(A.state.lightsArray),Yt=this.localClippingEnabled,wt=J.init(this.clippingPlanes,Yt),wt===!0&&J.setGlobalState(this.clippingPlanes,I),U!==null&&pe.render(A.state.shadowsArray,z,I);let B=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ge=H.material;if(ge)if(Array.isArray(ge))for(let Ce=0;Ce<ge.length;Ce++){let de=ge[Ce];es(de,z,I,H),B.add(de)}else es(ge,z,I,H),B.add(ge)}),A=M.pop(),U!==null&&U.renderEnd(),B},this.compileAsync=function(S,I,z=null){let B=this.compile(S,I,z);return new Promise(H=>{function ge(){if(B.forEach(function(Ce){let Se=Oe.get(Ce).currentProgram;(Se===void 0||Se.isReady())&&B.delete(Ce)}),B.size===0){H(S);return}setTimeout(ge,10)}lt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Js=null;function js(S){Js&&Js(S)}function ts(){Ei.stop()}function is(){Ei.start()}let Ei=new kd;Ei.setAnimationLoop(js),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(S){Js=S,re.setAnimationLoop(S),S===null?Ei.stop():Ei.start()},re.addEventListener("sessionstart",ts),re.addEventListener("sessionend",is),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(S,I);let z=re.enabled===!0&&re.isPresenting===!0,B=N!==null&&(te===null||z)&&N.begin(P,te);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(I),I=re.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,I,te),A=Z.get(S,M.length),A.init(I),A.state.textureUnits=ke.getTextureUnits(),M.push(A),Je.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?Mt.setFromArrayCamera(I):Ye.setFromProjectionMatrix(Je,yi,I.reversedDepth),Yt=this.localClippingEnabled,wt=J.init(this.clippingPlanes,Yt),T=fe.get(S,_.length),T.init(),_.push(T),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Ce=P.xr.getDepthSensingMesh();Ce!==null&&ns(Ce,I,-1/0,P.sortObjects)}ns(S,I,0,P.sortObjects),T.finish(),U!==null&&U.updateLights(A.state.lightsArray),P.sortObjects===!0&&T.sort(xe,Ae),ni=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,ni&&C.addToRenderList(T,S),this.info.autoReset===!0&&this.info.reset(),wt===!0&&J.beginShadows();let H=A.state.shadowsArray;if(pe.render(H,S,I),wt===!0&&J.endShadows(),(B&&N.hasRenderPass())===!1){let Ce=T.opaque,de=T.transmissive;if(A.setupLights(),I.isArrayCamera){let Se=I.cameras;if(de.length>0)for(let Pe=0,Ge=Se.length;Pe<Ge;Pe++){let Ke=Se[Pe];er(Ce,de,S,Ke)}ni&&C.render(S);for(let Pe=0,Ge=Se.length;Pe<Ge;Pe++){let Ke=Se[Pe];Qs(T,S,Ke,Ke.viewport)}}else de.length>0&&er(Ce,de,S,I),ni&&C.render(S),Qs(T,S,I)}te!==null&&W===0&&(ke.updateMultisampleRenderTarget(te),ke.updateRenderTargetMipmap(te)),B&&N.end(P),S.isScene===!0&&S.onAfterRender(P,S,I),he.resetDefaultState(),q=-1,Y=null,M.pop(),M.length>0?(A=M[M.length-1],ke.setTextureUnits(A.state.textureUnits),wt===!0&&J.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,U!==null&&U.renderEnd()};function ns(S,I,z,B){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){let Ce=I.isArrayCamera?Mt:Ye;if(!S.frustumCulled||S.intersectsFrustum(Ce)){B&&vt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Je);let de=se.update(S),Se=S.material;Se.visible&&T.push(S,de,Se,z,vt.z,null,I)}}else if(S.isMesh||S.isLine||S.isPoints){let Ce=I.isArrayCamera?Mt:Ye;if(!S.frustumCulled||S.intersectsFrustum(Ce)){let de=se.update(S),Se=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),vt.copy(S.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),vt.copy(de.boundingSphere.center)),vt.applyMatrix4(S.matrixWorld).applyMatrix4(Je)),Array.isArray(Se)){let Pe=de.groups;for(let Ge=0,Ke=Pe.length;Ge<Ke;Ge++){let Le=Pe[Ge],je=Se[Le.materialIndex];je&&je.visible&&T.push(S,de,je,z,vt.z,Le,I)}}else Se.visible&&T.push(S,de,Se,z,vt.z,null,I)}}}let ge=S.children;for(let Ce=0,de=ge.length;Ce<de;Ce++)ns(ge[Ce],I,z,B)}function Qs(S,I,z,B){let{opaque:H,transmissive:ge,transparent:Ce}=S;A.setupLightsView(z),wt===!0&&J.setGlobalState(P.clippingPlanes,z),B&&_e.viewport(F.copy(B)),H.length>0&&At(H,I,z),ge.length>0&&At(ge,I,z),Ce.length>0&&At(Ce,I,z),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function er(S,I,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[B.id]===void 0){let Le=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[B.id]=new pi(1,1,{generateMipmaps:!0,type:Le?Fi:hi,minFilter:Si,samples:Math.max(4,ct.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}let ge=A.state.transmissionRenderTarget[B.id],Ce=B.viewport||F;ge.setSize(Ce.z*P.transmissionResolutionScale,Ce.w*P.transmissionResolutionScale);let de=P.getRenderTarget(),Se=P.getActiveCubeFace(),Pe=P.getActiveMipmapLevel();P.setRenderTarget(ge),P.getClearColor(K),me=P.getClearAlpha(),me<1&&P.setClearColor(16777215,.5),P.clear(),ni&&C.render(z);let Ge=P.toneMapping;P.toneMapping=qi;let Ke=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),A.setupLightsView(B),wt===!0&&J.setGlobalState(P.clippingPlanes,B),At(S,z,B),ke.updateMultisampleRenderTarget(ge),ke.updateRenderTargetMipmap(ge),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let je=0,bt=I.length;je<bt;je++){let ut=I[je],{object:rt,geometry:Bt,material:ae,group:Ve}=ut;if(ae.side===Ct&&rt.layers.test(B.layers)){let Ue=ae.side;ae.side=ii,ae.needsUpdate=!0,ri(rt,z,B,Bt,ae,Ve),ae.side=Ue,ae.needsUpdate=!0,Le=!0}}Le===!0&&(ke.updateMultisampleRenderTarget(ge),ke.updateRenderTargetMipmap(ge))}P.setRenderTarget(de,Se,Pe),P.setClearColor(K,me),Ke!==void 0&&(B.viewport=Ke),P.toneMapping=Ge}function At(S,I,z){let B=I.isScene===!0?I.overrideMaterial:null;for(let H=0,ge=S.length;H<ge;H++){let Ce=S[H],{object:de,geometry:Se,group:Pe}=Ce,Ge=Ce.material;Ge.allowOverride===!0&&B!==null&&(Ge=B),de.layers.test(z.layers)&&ri(de,I,z,Se,Ge,Pe)}}function ri(S,I,z,B,H,ge){U!==null&&H.isNodeMaterial&&U.setObject(S,H),S.onBeforeRender(P,I,z,B,H,ge),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(P,I,z,B,S,ge),H.transparent===!0&&H.side===Ct&&H.forceSinglePass===!1?(H.side=ii,H.needsUpdate=!0,P.renderBufferDirect(z,I,B,H,S,ge),H.side=Xi,H.needsUpdate=!0,P.renderBufferDirect(z,I,B,H,S,ge),H.side=Ct):P.renderBufferDirect(z,I,B,H,S,ge),S.onAfterRender(P,I,z,B,H,ge)}function aa(S){let I=0;for(let z of S)z.texture!==null&&I++;return I}function Fn(S,I,z){I.isScene!==!0&&(I=Jt);let B=Oe.get(S),H=A.state.lights,ge=A.state.shadowsArray,Ce=H.state.version,de=Q.getParameters(S,H.state,ge,I,z,A.state.lightProbeGridArray),Se=Q.getProgramCacheKey(de),Pe=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?I.environment:null,B.fog=I.fog;let Ge=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=R.get(S.envMap||B.environment,Ge),B.envMapRotation=B.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Pe===void 0&&(S.addEventListener("dispose",st),Pe=new Map,B.programs=Pe,B.programVariants=new Map);let Ke=Pe.get(Se);if(Ke!==void 0){if(B.currentProgram===Ke&&B.lightsStateVersion===Ce)return ir(S,de),Ke}else de.uniforms=Q.getUniforms(S),U!==null&&S.isNodeMaterial&&U.build(S,z,de),S.onBeforeCompile(de,P),Ke=Q.acquireProgram(de,Se),Pe.set(Se,Ke),B.uniforms=de.uniforms;let Le=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Le.clippingPlanes=J.uniform),ir(S,de),B.needsLights=ca(S),B.lightsStateVersion=Ce,B.needsLights&&(Le.ambientLightColor.value=H.state.ambient,Le.lightProbe.value=H.state.probe,Le.sunLights.value=H.state.sun,Le.sunLightShadows.value=H.state.sunShadow,Le.directionalLights.value=H.state.directional,Le.directionalLightShadows.value=H.state.directionalShadow,Le.spotLights.value=H.state.spot,Le.spotLightShadows.value=H.state.spotShadow,Le.rectAreaLights.value=H.state.rectArea,Le.ltc_1.value=H.state.rectAreaLTC1,Le.ltc_2.value=H.state.rectAreaLTC2,Le.pointLights.value=H.state.point,Le.pointLightShadows.value=H.state.pointShadow,Le.hemisphereLights.value=H.state.hemi,Le.sunShadowMatrix.value=H.state.sunShadowMatrix,Le.sunShadowCascade.value=H.state.sunShadowCascade,Le.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Le.spotLightMatrix.value=H.state.spotLightMatrix,Le.spotLightMap.value=H.state.spotLightMap,Le.pointShadowMatrix.value=H.state.pointShadowMatrix),B.numLightProbeGrids=aa(A.state.lightProbeGridArray),B.currentProgram=Ke,B.uniformsList=null,Ke}function wl(S,I,z,B,H){let ge=Oe.get(S),Ce=ge.currentProgram.id+","+B+","+H,de=ge.programVariants.get(Ce);return de===void 0?(de=Fn(S,I,z),ge.programVariants.set(Ce,de)):(ge.currentProgram=de,ge.uniformsList=null,ge.outputColorSpace=B,ge.toneMapping=H),de}function tr(S){if(S.uniformsList===null){let I=S.currentProgram.getUniforms();S.uniformsList=Ys.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function ir(S,I){let z=Oe.get(S);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function oa(S,I,z,B,H){I.isScene!==!0&&(I=Jt),ke.resetTextureUnits();let ge=I.fog,Ce=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?I.environment:null,de=te===null?P.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Qe.workingColorSpace,Se=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Pe=R.get(B.envMap||Ce,Se),Ge=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ke=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Le=!!z.morphAttributes.position,je=!!z.morphAttributes.normal,bt=!!z.morphAttributes.color,ut=qi;B.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ut=P.toneMapping);let rt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Bt=rt!==void 0?rt.length:0,ae=Oe.get(B),Ve=A.state.lights;if(wt===!0&&(Yt===!0||S!==Y)){let _t=S===Y&&B.id===q;J.setState(B,S,_t)}let Ue=!1,ai=!1;B.version===ae.__version?ae.needsLights&&ae.lightsStateVersion!==Ve.state.version||H.isBatchedMesh&&ae.batching===!1||!H.isBatchedMesh&&ae.batching===!0||H.isBatchedMesh&&ae.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&ae.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&ae.instancing===!1||!H.isInstancedMesh&&ae.instancing===!0||H.isSkinnedMesh&&ae.skinning===!1||!H.isSkinnedMesh&&ae.skinning===!0||H.isInstancedMesh&&ae.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ae.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ae.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ae.instancingMorph===!1&&H.morphTexture!==null||ae.envMap!==Pe||B.fog===!0&&ae.fog!==ge||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==J.numPlanes||ae.numIntersection!==J.numIntersection)||ae.vertexAlphas!==Ge||ae.vertexTangents!==Ke||ae.morphTargets!==Le||ae.morphNormals!==je||ae.morphColors!==bt||ae.morphTargetsCount!==Bt||ae.numLightProbeGrids!==aa(A.state.lightProbeGridArray)?Ue=!0:(ae.outputColorSpace!==de||ae.toneMapping!==ut)&&(ai=!0):(Ue=!0,ae.__version=B.version);let kt=ae.currentProgram;(Ue===!0||ai===!0)&&(kt=ai===!0?wl(B,I,H,de,ut):Fn(B,I,H),U&&B.isNodeMaterial&&U.onUpdateProgram(B,kt,ae));let ss=!1,Oi=!1,Ui=!1,it=kt.getUniforms(),Xt=ae.uniforms;if(_e.useProgram(kt.program)&&(ss=!0,Oi=!0,Ui=!0),B.id!==q&&(q=B.id,Oi=!0),ss||Y!==S){_e.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),it.setValue(O,"projectionMatrix",S.projectionMatrix),it.setValue(O,"viewMatrix",S.matrixWorldInverse);let Ht=it.map.cameraPosition;Ht!==void 0&&Ht.setValue(O,Vt.setFromMatrixPosition(S.matrixWorld)),ct.logarithmicDepthBuffer&&it.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&it.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),Y!==S&&(Y=S,Oi=!0,Ui=!0)}if(ae.needsLights&&(Ve.state.sunShadowMap.length>0&&it.setValue(O,"sunShadowMap",Ve.state.sunShadowMap,ke),Ve.state.directionalShadowMap.length>0&&it.setValue(O,"directionalShadowMap",Ve.state.directionalShadowMap,ke),Ve.state.spotShadowMap.length>0&&it.setValue(O,"spotShadowMap",Ve.state.spotShadowMap,ke),Ve.state.pointShadowMap.length>0&&it.setValue(O,"pointShadowMap",Ve.state.pointShadowMap,ke)),H.isSkinnedMesh){it.setOptional(O,H,"bindMatrix"),it.setOptional(O,H,"bindMatrixInverse");let _t=H.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),it.setValue(O,"boneTexture",_t.boneTexture,ke))}H.isBatchedMesh&&(it.setOptional(O,H,"batchingTexture"),it.setValue(O,"batchingTexture",H._matricesTexture,ke),it.setOptional(O,H,"batchingIdTexture"),it.setValue(O,"batchingIdTexture",H._indirectTexture,ke),it.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&it.setValue(O,"batchingColorTexture",H._colorsTexture,ke));let Ti=z.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&j.update(H,z,kt),(Oi||ae.receiveShadow!==H.receiveShadow)&&(ae.receiveShadow=H.receiveShadow,it.setValue(O,"receiveShadow",H.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&I.environment!==null&&(Xt.envMapIntensity.value=I.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=px()),Oi){if(it.setValue(O,"toneMappingExposure",P.toneMappingExposure),ae.needsLights&&la(Xt,Ui),ge&&B.fog===!0&&le.refreshFogUniforms(Xt,ge),le.refreshMaterialUniforms(Xt,B,ee,oe,A.state.transmissionRenderTarget[S.id]),ae.needsLights&&ae.numLightProbeGrids>0){let _t=b,Ht=0;for(let ji of A.state.lightProbeGridArray)ji.texture!==null&&(_t.textures[Ht]=ji.texture,_t.min[Ht]=ji.boundingBox.min,_t.max[Ht]=ji.boundingBox.max,_t.resolution[Ht]=ji.resolution,Ht++);for(let ji in _t)_t[ji].length=Ht;Xt.probesSH.value=_t.textures,Xt.probesMin.value=_t.min,Xt.probesMax.value=_t.max,Xt.probesResolution.value=_t.resolution}Ys.upload(O,tr(ae),Xt,ke)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ys.upload(O,tr(ae),Xt,ke),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&it.setValue(O,"center",H.center),it.setValue(O,"modelViewMatrix",H.modelViewMatrix),it.setValue(O,"normalMatrix",H.normalMatrix),it.setValue(O,"modelMatrix",H.matrixWorld),B.uniformsGroups!==void 0){let _t=B.uniformsGroups;for(let Ht=0,ji=_t.length;Ht<ji;Ht++){let Hh=_t[Ht];De.update(Hh,kt),De.bind(Hh,kt)}}return kt}function la(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.sunLights.needsUpdate=I,S.sunLightShadows.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function ca(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(S,I,z){let B=Oe.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Oe.get(S.texture).__webglTexture=I,Oe.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:z,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,I){let z=Oe.get(S);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,z=0){te=S,G=I,W=z;let B=null,H=!1,ge=!1;if(S){let de=Oe.get(S);if(de.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(O.FRAMEBUFFER,de.__webglFramebuffer),F.copy(S.viewport),ne.copy(S.scissor),Me=S.scissorTest,_e.viewport(F),_e.scissor(ne),_e.setScissorTest(Me),q=-1;return}else if(de.__webglFramebuffer===void 0)ke.setupRenderTarget(S);else if(de.__hasExternalTextures)ke.rebindTextures(S,Oe.get(S.texture).__webglTexture,Oe.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ge=S.depthTexture;if(de.__boundDepthTexture!==Ge){if(Ge!==null&&Oe.has(Ge)&&(S.width!==Ge.image.width||S.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(S)}}let Se=S.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ge=!0);let Pe=Oe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pe[I])?B=Pe[I][z]:B=Pe[I],H=!0):S.samples>0&&ke.useMultisampledRTT(S)===!1?B=Oe.get(S).__webglMultisampledFramebuffer:Array.isArray(Pe)?B=Pe[z]:B=Pe,F.copy(S.viewport),ne.copy(S.scissor),Me=S.scissorTest}else F.copy(ve).multiplyScalar(ee).floor(),ne.copy(Be).multiplyScalar(ee).floor(),Me=tt;if(z!==0&&(B=X),_e.bindFramebuffer(O.FRAMEBUFFER,B)&&_e.drawBuffers(S,B),_e.viewport(F),_e.scissor(ne),_e.setScissorTest(Me),H){let de=Oe.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,de.__webglTexture,z)}else if(ge){let de=I;for(let Se=0;Se<S.textures.length;Se++){let Pe=Oe.get(S.textures[Se]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Se,Pe.__webglTexture,z,de)}}else if(S!==null&&z!==0){let de=Oe.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,de.__webglTexture,z)}q=-1};function nr(S){let I=Oe.get(S);return(I.__readFormat!==S.format||I.__readType!==S.type)&&(I.__readFormat=S.format,I.__readType=S.type,I.__formatReadable=ct.textureFormatReadable(S.format),I.__typeReadable=ct.textureTypeReadable(S.type)),I}this.readRenderTargetPixels=function(S,I,z,B,H,ge,Ce,de=0){if(!(S&&S.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Oe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0&&(Se=Se[Ce],Array.isArray(Se)&&(Se=Se[0])),Se){_e.bindFramebuffer(O.FRAMEBUFFER,Se);try{let Pe=S.textures[de],Ge=Pe.format,Ke=Pe.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+de);let Le=nr(Pe);if(Le.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-B&&z>=0&&z<=S.height-H&&O.readPixels(I,z,B,H,ce.convert(Ge),ce.convert(Ke),ge)}finally{let Pe=te!==null?Oe.get(te).__webglFramebuffer:null;_e.bindFramebuffer(O.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(S,I,z,B,H,ge,Ce,de=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Oe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0&&(Se=Se[Ce],Array.isArray(Se)&&(Se=Se[0])),Se)if(I>=0&&I<=S.width-B&&z>=0&&z<=S.height-H){_e.bindFramebuffer(O.FRAMEBUFFER,Se);let Pe=S.textures[de],Ge=Pe.format,Ke=Pe.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+de);let Le=nr(Pe);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,je),O.bufferData(O.PIXEL_PACK_BUFFER,ge.byteLength,O.STREAM_READ),O.readPixels(I,z,B,H,ce.convert(Ge),ce.convert(Ke),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let bt=te!==null?Oe.get(te).__webglFramebuffer:null;_e.bindFramebuffer(O.FRAMEBUFFER,bt);let ut=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await dd(O,ut,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,je),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ge),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(je),O.deleteSync(ut),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,I=null,z=0){let B=Math.pow(2,-z),H=Math.floor(S.image.width*B),ge=Math.floor(S.image.height*B),Ce=I!==null?I.x:0,de=I!==null?I.y:0;ke.setTexture2D(S,0),O.copyTexSubImage2D(O.TEXTURE_2D,z,0,0,Ce,de,H,ge),_e.unbindTexture()},this.copyTextureToTexture=function(S,I,z=null,B=null,H=0,ge=0){let Ce,de,Se,Pe,Ge,Ke,Le,je,bt,ut=S.isCompressedTexture?S.mipmaps[ge]:S.image;if(z!==null)Ce=z.max.x-z.min.x,de=z.max.y-z.min.y,Se=z.isBox3?z.max.z-z.min.z:1,Pe=z.min.x,Ge=z.min.y,Ke=z.isBox3?z.min.z:0;else{let it=Math.pow(2,-H);Ce=Math.floor(ut.width*it),de=Math.floor(ut.height*it),S.isDataArrayTexture?Se=ut.depth:S.isData3DTexture?Se=Math.floor(ut.depth*it):Se=1,Pe=0,Ge=0,Ke=0}B!==null?(Le=B.x,je=B.y,bt=B.z):(Le=0,je=0,bt=0);let rt=ce.convert(I.format),Bt=ce.convert(I.type),ae;I.isData3DTexture?(ke.setTexture3D(I,0),ae=O.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(ke.setTexture2DArray(I,0),ae=O.TEXTURE_2D_ARRAY):(ke.setTexture2D(I,0),ae=O.TEXTURE_2D),_e.activeTexture(O.TEXTURE0),_e.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,I.flipY),_e.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),_e.pixelStorei(O.UNPACK_ALIGNMENT,I.unpackAlignment);let Ve=_e.getParameter(O.UNPACK_ROW_LENGTH),Ue=_e.getParameter(O.UNPACK_IMAGE_HEIGHT),ai=_e.getParameter(O.UNPACK_SKIP_PIXELS),kt=_e.getParameter(O.UNPACK_SKIP_ROWS),ss=_e.getParameter(O.UNPACK_SKIP_IMAGES);_e.pixelStorei(O.UNPACK_ROW_LENGTH,ut.width),_e.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ut.height),_e.pixelStorei(O.UNPACK_SKIP_PIXELS,Pe),_e.pixelStorei(O.UNPACK_SKIP_ROWS,Ge),_e.pixelStorei(O.UNPACK_SKIP_IMAGES,Ke);let Oi=S.isDataArrayTexture||S.isData3DTexture,Ui=I.isDataArrayTexture||I.isData3DTexture;if(S.isDepthTexture){let it=Oe.get(S),Xt=Oe.get(I),Ti=Oe.get(it.__renderTarget),_t=Oe.get(Xt.__renderTarget);_e.bindFramebuffer(O.READ_FRAMEBUFFER,Ti.__webglFramebuffer),_e.bindFramebuffer(O.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Ht=0;Ht<Se;Ht++)Oi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.get(S).__webglTexture,H,Ke+Ht),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.get(I).__webglTexture,ge,bt+Ht)),O.blitFramebuffer(Pe,Ge,Pe+Ce,Ge+de,Le,je,Le+Ce,je+de,O.DEPTH_BUFFER_BIT,O.NEAREST);_e.bindFramebuffer(O.READ_FRAMEBUFFER,null),_e.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||Oe.has(S)){let it=Oe.get(S),Xt=Oe.get(I);_e.bindFramebuffer(O.READ_FRAMEBUFFER,L),_e.bindFramebuffer(O.DRAW_FRAMEBUFFER,V);for(let Ti=0;Ti<Se;Ti++)Oi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,it.__webglTexture,H,Ke+Ti):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,it.__webglTexture,H),Ui?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xt.__webglTexture,ge,bt+Ti):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Xt.__webglTexture,ge),H!==0?O.blitFramebuffer(Pe,Ge,Pe+Ce,Ge+de,Le,je,Le+Ce,je+de,O.COLOR_BUFFER_BIT,O.NEAREST):Ui?O.copyTexSubImage3D(ae,ge,Le,je,bt+Ti,Pe,Ge,Ce,de):O.copyTexSubImage2D(ae,ge,Le,je,Pe,Ge,Ce,de);_e.bindFramebuffer(O.READ_FRAMEBUFFER,null),_e.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ui?S.isDataTexture||S.isData3DTexture?O.texSubImage3D(ae,ge,Le,je,bt,Ce,de,Se,rt,Bt,ut.data):I.isCompressedArrayTexture?O.compressedTexSubImage3D(ae,ge,Le,je,bt,Ce,de,Se,rt,ut.data):O.texSubImage3D(ae,ge,Le,je,bt,Ce,de,Se,rt,Bt,ut):S.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ge,Le,je,Ce,de,rt,Bt,ut.data):S.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ge,Le,je,ut.width,ut.height,rt,ut.data):O.texSubImage2D(O.TEXTURE_2D,ge,Le,je,Ce,de,rt,Bt,ut);_e.pixelStorei(O.UNPACK_ROW_LENGTH,Ve),_e.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ue),_e.pixelStorei(O.UNPACK_SKIP_PIXELS,ai),_e.pixelStorei(O.UNPACK_SKIP_ROWS,kt),_e.pixelStorei(O.UNPACK_SKIP_IMAGES,ss),ge===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&O.generateMipmap(ae),_e.unbindTexture()},this.initRenderTarget=function(S){Oe.get(S).__webglFramebuffer===void 0&&ke.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ke.setTextureCube(S,0):S.isData3DTexture?ke.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ke.setTexture2DArray(S,0):ke.setTexture2D(S,0),_e.unbindTexture()},this.resetState=function(){G=0,W=0,te=null,_e.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};var Jd={type:"change"},lh={type:"start"},Qd={type:"end"},ul=new Hi,jd=new Qt,mx=Math.cos(70*Dn.DEG2RAD),Ot=new w,ui=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},oh=1e-6,dl=class extends Xr{constructor(e,t=null){super(e,t),this.state=at.NONE,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ln.ROTATE,MIDDLE:Ln.DOLLY,RIGHT:Ln.PAN},this.touches={ONE:Pn.ROTATE,TWO:Pn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new Gt,this._lastTargetPosition=new w,this._quat=new Gt().setFromUnitVectors(e.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ks,this._sphericalDelta=new ks,this._scale=1,this._panOffset=new w,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new w,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_x.bind(this),this._onPointerDown=gx.bind(this),this._onPointerUp=xx.bind(this),this._onContextMenu=Ex.bind(this),this._onMouseWheel=bx.bind(this),this._onKeyDown=Sx.bind(this),this._onTouchStart=Mx.bind(this),this._onTouchMove=wx.bind(this),this._onMouseDown=yx.bind(this),this._onMouseMove=vx.bind(this),this._interceptControlDown=Tx.bind(this),this._interceptControlUp=Ax.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=at.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jd),this.update(),this.state=at.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ot.copy(t).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=ui:i>Math.PI&&(i-=ui),n<-Math.PI?n+=ui:n>Math.PI&&(n-=ui),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ot.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new w(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new w(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ul.origin.copy(this.object.position),ul.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ul.direction))<mx?this.object.lookAt(this.target):(jd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ul.intersectPlane(jd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>oh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>oh||this._lastTargetPosition.distanceToSquared(this.target)>oh?(this.dispatchEvent(Jd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ui/60*this.autoRotateSpeed*e:ui/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ot.setFromMatrixColumn(t,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,t){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(t,1):(Ot.setFromMatrixColumn(t,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let n=this.object.position;Ot.copy(n).sub(this.target);let r=Ot.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),n=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=n/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/t.clientHeight),this._rotateUp(ui*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/t.clientHeight),this._rotateUp(ui*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function gx(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function _x(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function xx(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qd),this.state=at.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function yx(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ln.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=at.DOLLY;break;case Ln.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=at.ROTATE}break;case Ln.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(lh)}function vx(s){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function bx(s){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(s.preventDefault(),this.dispatchEvent(lh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Qd))}function Sx(s){this.enabled!==!1&&this._handleKeyDown(s)}function Mx(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Pn.ROTATE:if(this.enableRotate===!1){this.state=at.NONE;break}this._handleTouchStartRotate(s),this.state=at.TOUCH_ROTATE;break;case Pn.PAN:if(this.enablePan===!1){this.state=at.NONE;break}this._handleTouchStartPan(s),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case Pn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=at.TOUCH_DOLLY_PAN;break;case Pn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(lh)}function wx(s){switch(this._trackPointer(s),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=at.NONE}}function Ex(s){this.enabled!==!1&&s.preventDefault()}function Tx(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ax(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ch(s,e){if(e===Lc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===qs||e===ea){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let i=t.count-2,n=[];if(e===qs)for(let r=1;r<=i;r++)n.push(t.getX(0)),n.push(t.getX(r)),n.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(n.push(t.getX(r)),n.push(t.getX(r+1)),n.push(t.getX(r+2))):(n.push(t.getX(r+2)),n.push(t.getX(r+1)),n.push(t.getX(r)));return n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function ef(s){let e=new Map,t=new Map,i=s.clone();return tf(s,i,function(n,r){e.set(r,n),t.set(n,r)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;let r=n,a=e.get(n),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function tf(s,e,t){t(s,e);for(let i=0;i<s.children.length;i++)tf(s.children[i],e.children[i],t)}var fl=class extends Wi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new gh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new pl(t,et.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new pl(t,et.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Lh(t)})}load(e,t,i,n){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=gn.extractUrlBase(e);a=gn.resolveURL(c,this.path)}else a=gn.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){n?n(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Fs(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===of){try{a[et.KHR_BINARY_GLTF]=new Ph(e)}catch(u){n&&n(u);return}r=JSON.parse(a[et.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Bh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case et.KHR_MATERIALS_UNLIT:a[u]=new ph;break;case et.KHR_DRACO_MESH_COMPRESSION:a[u]=new Ih(r,this.dracoLoader);break;case et.KHR_TEXTURE_TRANSFORM:a[u]=new Dh;break;case et.KHR_MESH_QUANTIZATION:a[u]=new Nh;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){let i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}};function Rx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function yt(s,e,t){let i=s.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},fh=class{constructor(e){this.parser=e,this.name=et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,n=t.cache.get(i);if(n)return n;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Re(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],ei);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new qn(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new bi(h),c.distance=u;break;case"spot":c=new zr(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Zi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}},ph=class{constructor(){this.name=et.KHR_MATERIALS_UNLIT}getMaterialType(){return gt}extendParams(e,t,i){let n=[];e.color=new Re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],ei),e.opacity=a[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,Lt))}return Promise.all(n)}},mh=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=yt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},gh=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return yt(this.parser,e,this.name)!==null?ti:null}extendMaterialParams(e,t){let i=yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(n.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ee(r,r)}return Promise.all(n)}},_h=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return yt(this.parser,e,this.name)!==null?ti:null}extendMaterialParams(e,t){let i=yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(n)}},xh=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_DISPERSION}getMaterialType(e){return yt(this.parser,e,this.name)!==null?ti:null}extendMaterialParams(e,t){let i=yt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},yh=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return yt(this.parser,e,this.name)!==null?ti:null}extendMaterialParams(e,t){let i=yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(n)}},vh=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SHEEN}getMaterialType(e){return yt(this.parser,e,this.name)!==null?ti:null}extendMaterialParams(e,t){let i=yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],ei)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Lt)),i.sheenRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(n)}},bh=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return yt(this.parser,e,this.name)!==null?ti:null}extendMaterialParams(e,t){let i=yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&n.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(n)}},Sh=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_VOLUME}getMaterialType(e){return yt(this.parser,e,this.name)!==null?ti:null}extendMaterialParams(e,t){let i=yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(r[0],r[1],r[2],ei),Promise.all(n)}},Mh=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IOR}getMaterialType(e){return yt(this.parser,e,this.name)!==null?ti:null}extendMaterialParams(e,t){let i=yt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},wh=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SPECULAR}getMaterialType(e){return yt(this.parser,e,this.name)!==null?ti:null}extendMaterialParams(e,t){let i=yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(r[0],r[1],r[2],ei),i.specularColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Lt)),Promise.all(n)}},Eh=class{constructor(e){this.parser=e,this.name=et.EXT_MATERIALS_BUMP}getMaterialType(e){return yt(this.parser,e,this.name)!==null?ti:null}extendMaterialParams(e,t){let i=yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&n.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(n)}},Th=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return yt(this.parser,e,this.name)!==null?ti:null}extendMaterialParams(e,t){let i=yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&n.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(n)}},Ah=class{constructor(e){this.parser=e,this.name=et.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let r=n.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Rh=class{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=n.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},Ch=class{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=n.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},pl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,n.mode,n.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,n.mode,n.filter),d})})}else return null}},Lh=class{constructor(e){this.name=et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=t.meshes[i.mesh];for(let c of n.primitives)if(c.mode!==wi.TRIANGLES&&c.mode!==wi.TRIANGLE_STRIP&&c.mode!==wi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let g of u){let x=new ze,m=new w,p=new Gt,y=new w(1,1,1),E=new Wn(g.geometry,g.material,f);for(let T=0;T<f;T++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,T),l.SCALE&&y.fromBufferAttribute(l.SCALE,T),E.setMatrixAt(T,x.compose(m,p,y));let b=null;for(let T in l)if(T==="_COLOR_0"){let A=l[T];E.instanceColor=new cn(A.array,A.itemSize,A.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(b===null){let _=E.geometry;b=new St,b.name=_.name;for(let M in _.attributes)b.setAttribute(M,_.attributes[M]);for(let M in _.morphAttributes)b.morphAttributes[M]=_.morphAttributes[M];_.index!==null&&b.setIndex(_.index),b.morphTargetsRelative=_.morphTargetsRelative;for(let M of _.groups)b.addGroup(M.start,M.count,M.materialIndex);_.boundingBox!==null&&(b.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(b.boundingSphere=_.boundingSphere.clone()),b.drawRange.start=_.drawRange.start,b.drawRange.count=_.drawRange.count,b.userData=Object.assign({},_.userData),E.geometry=b}let A=l[T];b.setAttribute(T,new cn(A.array,A.itemSize,A.normalized))}ft.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),d.push(E)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},of="glTF",ra=12,nf={JSON:1313821514,BIN:5130562},Ph=class{constructor(e){this.name=et.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ra),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==of)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-ra,r=new DataView(e,ra),a=0;for(;a<n;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===nf.JSON){let c=new Uint8Array(e,ra+a,o);this.content=i.decode(c)}else if(l===nf.BIN){let c=ra+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ih=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Oh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Oh[h]||h.toLowerCase();if(a[h]!==void 0){let f=i.accessors[e.attributes[h]],d=Ks[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){n.decodeDracoFile(h,function(d){for(let g in d.attributes){let x=d.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(d)},o,c,ei,f)})})}},Dh=class{constructor(){this.name=et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Nh=class{constructor(){this.name=et.KHR_MESH_QUANTIZATION}},ml=class extends Vi{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let a=0;a!==n;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,u=(i-t)/h,f=u*u,d=f*u,g=e*c,x=g-c,m=-2*d+3*f,p=d-f,y=1-m,E=p-f+u;for(let b=0;b!==o;b++){let T=a[x+b+o],A=a[x+b+l]*h,_=a[g+b+o],M=a[g+b]*h;r[b]=y*T+E*A+m*_+p*M}return r}},Cx=new Gt,Fh=class extends ml{interpolate_(e,t,i,n){let r=super.interpolate_(e,t,i,n);return Cx.fromArray(r).normalize().toArray(r),r}},wi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ks={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sf={9728:Tt,9729:It,9984:yo,9985:Ws,9986:Zn,9987:Si},rf={33071:xi,33648:bs,10497:Li},hh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Oh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Nn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Lx={CUBICSPLINE:void 0,LINEAR:Gn,STEP:zn},uh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Px(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Te({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xi})),s.DefaultMaterial}function Qn(s,e,t){for(let i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Zi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ix(s,e,t){let i=!1,n=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(i){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(f)}if(n){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return i&&(s.morphAttributes.position=h),n&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Dx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Nx(s){let e,t=s.extensions&&s.extensions[et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+dh(t.attributes):e=s.indices+":"+dh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,n=s.targets.length;i<n;i++)e+=":"+dh(s.targets[i]);return e}function dh(s){let e="",t=Object.keys(s).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+s[t[i]]+";";return e}function Uh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Fx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Ox=new ze,Bh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Rx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||r&&a<98?(this.textureLoader=new Br(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Vr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fs(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return Qn(r,o,n),Zi(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let a=t[n].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let n=0,r=e.length;n<r;n++){let a=e[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let n=i.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let n=e(t[i]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let n=0;n<t.length;n++){let r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[et.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(r,a){i.load(gn.resolveURL(t.uri,n.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){let t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){let a=hh[n.type],o=Ks[n.componentType],l=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new qt(c,a,l))}let r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=hh[n.type],c=Ks[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=n.byteOffset||0,d=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0,x,m;if(d&&d!==u){let p=Math.floor(f/d),y="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count,E=t.cache.get(y);E||(x=new c(o,p*d,n.count*d/h),E=new Cs(x,d/h),t.cache.add(y,E)),m=new Ls(E,l,f%d/h,g)}else o===null?x=new c(n.count*l):x=new c(o,f,n.count*l),m=new qt(x,l,g);if(n.sparse!==void 0){let p=hh.SCALAR,y=Ks[n.sparse.indices.componentType],E=n.sparse.indices.byteOffset||0,b=n.sparse.values.byteOffset||0,T=new y(a[1],E,n.sparse.count*p),A=new c(a[2],b,n.sparse.count*l);o!==null&&(m=new qt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let _=0,M=T.length;_<M;_++){let N=T[_];if(m.setX(N,A[_*l]),l>=2&&m.setY(N,A[_*l+1]),l>=3&&m.setZ(N,A[_*l+2]),l>=4&&m.setW(N,A[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let n=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=sf[f.magFilter]||It,h.minFilter=sf[f.minFilter]||Si,h.wrapS=rf[f.wrapS]||Li,h.wrapT=rf[f.wrapT]||Li,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Tt&&h.minFilter!==It,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let a=n.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=i.getDependency("bufferView",a.bufferView).then(function(f){return new Promise(function(d,g){t.parse(f,d,g)})});else{if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(f){return new Promise(function(d,g){let x=d;t.isImageBitmapLoader===!0&&(x=function(m){let p=new Dt(m);p.needsUpdate=!0,d(p)}),t.load(gn.resolveURL(f,r.path),x,void 0,g)})})}let u=h.then(function(f){return c===!0&&o.revokeObjectURL(l),Zi(f,a),f.userData.mimeType=a.mimeType||Fx(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,n){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[et.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[et.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[et.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Ds,li.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new An,li.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||r||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Te}loadMaterial(e){let t=this,i=this.json,n=this.extensions,r=i.materials[e],a,o={},l=r.extensions||{},c=[];if(l[et.KHR_MATERIALS_UNLIT]){let u=n[et.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Re(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],ei),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Lt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ct);let h=r.alphaMode||uh.OPAQUE;if(h===uh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===uh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==gt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ee(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==gt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==gt){let u=r.emissiveFactor;o.emissive=new Re().setRGB(u[0],u[1],u[2],ei)}return r.emissiveTexture!==void 0&&a!==gt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Lt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Zi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Qn(n,u,r),u})}createUniqueName(e){let t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,n=this.primitiveCache;function r(o){return i[et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return af(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Nx(c),u=n[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[et.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=af(new St,c,t),c.mode===wi.TRIANGLE_STRIP?f=f.then(d=>ch(d,ea)):c.mode===wi.TRIANGLE_FAN&&(f=f.then(d=>ch(d,qs))),n[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,n=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?Px(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let x=h[d],m=a[d],p,y=c[d];if(m.mode===wi.TRIANGLES||m.mode===wi.TRIANGLE_STRIP||m.mode===wi.TRIANGLE_FAN||m.mode===void 0){let E=r.isSkinnedMesh===!0,b=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");E&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=E&&b?new Sr(x,y):new ie(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===wi.LINES)p=new wr(x,y);else if(m.mode===wi.LINE_STRIP)p=new hn(x,y);else if(m.mode===wi.LINE_LOOP)p=new Er(x,y);else if(m.mode===wi.POINTS)p=new Tr(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Dx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Zi(p,r),m.extensions&&Qn(n,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Qn(n,u[0],r),u[0];let f=new dt;r.extensions&&Qn(n,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Pt(Dn.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Xn(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Zi(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let r=n.pop(),a=n,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let f=new ze;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Mr(o,l)})}loadAnimation(e){let t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=n.channels.length;u<f;u++){let d=n.channels[u],g=n.samplers[d.sampler],x=d.target,m=x.node,p=n.parameters!==void 0?n.parameters[g.input]:g.input,y=n.parameters!==void 0?n.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let E=0,b=f.length;E<b;E++){let T=f[E],A=d[E],_=g[E],M=x[E],N=m[E];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let P=i._createAnimationTracks(T,A,_,M,N);if(P)for(let D=0;D<P.length;D++)p.push(P[D])}let y=new Ur(r,void 0,p);return Zi(y,n),y})}createNodeMesh(e){let t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(e){let t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));let l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Ox)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,g=u[0];h.pivot=new w().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?n.createUniqueName(r.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(n.getDependency("camera",r.camera).then(function(c){return n._getNodeRef(n.cameraCache,r.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Ps:c.length>1?h=new dt:c.length===1?h=c[0]:h=new ft,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Zi(h,r),r.extensions&&Qn(i,h,r),r.matrix!==void 0){let u=new ze;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(r.mesh!==void 0&&n.meshCache.refs[r.mesh]>1){let u=n.associations.get(h);n.associations.set(h,{...u})}return n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],n=this,r=new dt;i.name&&(r.name=n.createUniqueName(i.name)),Zi(r,i),i.extensions&&Qn(t,r,i);let a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add(ef(f)):r.add(f)}let c=h=>{let u=new Map;for(let[f,d]of n.associations)(f instanceof li||f instanceof Dt)&&u.set(f,d);return h.traverse(f=>{let d=n.associations.get(f);d!=null&&u.set(f,d)}),u};return n.associations=c(r),r})}_createAnimationTracks(e,t,i,n,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Nn[r.path]===Nn.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Nn[r.path]){case Nn.weights:h=fn;break;case Nn.rotation:h=pn;break;case Nn.translation:case Nn.scale:h=Rn;break;default:i.itemSize===1?h=fn:h=Rn;break}let u=n.interpolation!==void 0?Lx[n.interpolation]:Gn,f=this._getArrayFromAccessor(i);for(let d=0,g=l.length;d<g;d++){let x=new h(l[d]+"."+Nn[r.path],t.array,f,u);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Uh(t.constructor),n=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let n=this instanceof pn?Fh:ml;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Ux(s,e,t){let i=e.attributes,n=new mi;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new w(l[0],l[1],l[2]),new w(c[0],c[1],c[2])),o.normalized){let h=Uh(Ks[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new w,l=new w;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let x=Uh(Ks[f.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}s.boundingBox=n;let a=new oi;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,s.boundingSphere=a}function af(s,e,t){let i=e.attributes,n=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in i){let o=Oh[a]||a.toLowerCase();o in s.attributes||n.push(r(i[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});n.push(a)}return Qe.workingColorSpace!==ei&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),Zi(s,e),Ux(s,e,t),Promise.all(n).then(function(){return e.targets!==void 0?Ix(s,e.targets,t):s})}var lf=new w,Bx=new Gt,cf=new w,gl=class extends ft{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var Ji=new ze,kx=new ze,_l=class{constructor(e={}){let t=this,i,n,r,a,o={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let h=document.createElement("div");h.style.transformStyle="preserve-3d",c.appendChild(h),this.getSize=function(){return{width:i,height:n}},this.render=function(m,p){let y=p.projectionMatrix.elements[5]*a;p.view&&p.view.enabled?(c.style.transform=`translate( ${-p.view.offsetX*(i/p.view.width)}px, ${-p.view.offsetY*(n/p.view.height)}px )`,c.style.transform+=`scale( ${p.view.fullWidth/p.view.width}, ${p.view.fullHeight/p.view.height} )`):c.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let E,b;p.isOrthographicCamera&&(E=-(p.right+p.left)/2,b=(p.top+p.bottom)/2);let T=p.view&&p.view.enabled?p.view.height/p.view.fullHeight:1,A=p.isOrthographicCamera?`scale( ${T} )scale(`+y+")translate("+u(E)+"px,"+u(b)+"px)"+f(p.matrixWorldInverse):`scale( ${T} )translateZ(`+y+"px)"+f(p.matrixWorldInverse),M=(p.isPerspectiveCamera?"perspective("+y+"px) ":"")+A+"translate("+r+"px,"+a+"px)";o.camera.style!==M&&(h.style.transform=M,o.camera.style=M),x(m,m,p,A)},this.setSize=function(m,p){i=m,n=p,r=i/2,a=n/2,l.style.width=m+"px",l.style.height=p+"px",c.style.width=m+"px",c.style.height=p+"px",h.style.width=m+"px",h.style.height=p+"px"};function u(m){return Math.abs(m)<1e-10?0:m}function f(m){let p=m.elements;return"matrix3d("+u(p[0])+","+u(-p[1])+","+u(p[2])+","+u(p[3])+","+u(p[4])+","+u(-p[5])+","+u(p[6])+","+u(p[7])+","+u(p[8])+","+u(-p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(-p[13])+","+u(p[14])+","+u(p[15])+")"}function d(m){let p=m.elements;return"translate(-50%,-50%)"+("matrix3d("+u(p[0])+","+u(p[1])+","+u(p[2])+","+u(p[3])+","+u(-p[4])+","+u(-p[5])+","+u(-p[6])+","+u(-p[7])+","+u(p[8])+","+u(p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(p[13])+","+u(p[14])+","+u(p[15])+")")}function g(m){m.isCSS3DObject&&(m.element.style.display="none");for(let p=0,y=m.children.length;p<y;p++)g(m.children[p])}function x(m,p,y,E){if(m.visible===!1){g(m);return}if(m.isCSS3DObject){let b=m.layers.test(y.layers)===!0,T=m.element;if(T.style.display=b===!0?"":"none",b===!0){m.onBeforeRender(t,p,y);let A;m.isCSS3DSprite?(Ji.copy(y.matrixWorldInverse),Ji.transpose(),m.rotation2D!==0&&Ji.multiply(kx.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(lf,Bx,cf),Ji.setPosition(lf),Ji.scale(cf),Ji.elements[3]=0,Ji.elements[7]=0,Ji.elements[11]=0,Ji.elements[15]=1,A=d(Ji)):A=d(m.matrixWorld);let _=o.objects.get(m);if(_===void 0||_.style!==A){T.style.transform=A;let M={style:A};o.objects.set(m,M)}T.parentNode!==h&&h.appendChild(T),m.onAfterRender(t,p,y)}}for(let b=0,T=m.children.length;b<T;b++)x(m.children[b],p,y,E)}}};var xl=class{constructor(e){this.scene=e,this.streams=[],this.meshes={},this.particleCountPerStream=48,this.paths={solar:new Ii([new w(2.5,6.45,-6.5),new w(4.1,6.55,-6.5),new w(5.63,6.55,-6.5),new w(5.63,5.2,-4.5),new w(5.63,3.8,-2.5),new w(5.63,2.6,-1),new w(5.63,2.05,-.5),new w(5.63,1.75,-.5),new w(5.63,1.4,-.5),new w(5.5,1.25,-.75)]),grid:new Ii([new w(6.4,6.95,6.95),new w(6.12,6.25,5.2),new w(5.86,5.525,3.465),new w(5.55,5.15,1.7),new w(5.32,5,-.02),new w(5.32,3,.04),new w(5.32,1.1,.04),new w(5.26,1.1,-.55),new w(5.27,.95,-.6)]),ev:new Ii([new w(5.19,1.12,.05),new w(5.195,1.009,.15),new w(5.2,.91,.25),new w(5.205,.823,.35),new w(5.21,.748,.45),new w(5.215,.684,.55),new w(5.22,.633,.65),new w(5.225,.593,.75),new w(5.23,.565,.85),new w(5.235,.549,.95),new w(5.24,.545,1.05),new w(5.245,.553,1.15),new w(5.25,.573,1.25),new w(5.255,.604,1.35),new w(5.26,.648,1.45),new w(5.265,.703,1.55),new w(5.27,.77,1.65)]),gas:new Ii([new w(-1.3,1.05,-8),new w(-1.3,.22,-8),new w(-.65,.22,-8.15),new w(-.08,.22,-8.32),new w(-.08,1.05,-8.32),new w(.301,1.05,-8.32),new w(.601,1.05,-8.32),new w(.601,1.35,-8.32)])},this.initStreams()}initStreams(){this.streamDefs={solar:{curve:this.paths.solar,color:new Re(16758528),baseSpeed:.2,size:.058,particleCount:24},grid:{curve:this.paths.grid,color:new Re(54015),baseSpeed:.19,size:.065,particleCount:24},ev:{curve:this.paths.ev,color:new Re(62875),baseSpeed:.44,size:.06,particleCount:5},gas:{curve:this.paths.gas,color:new Re(16739584),baseSpeed:.32,size:.052,particleCount:12}};let e=new Di(1,12,12);for(let[t,i]of Object.entries(this.streamDefs)){let n=new gt({color:i.color,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1,blending:Gs}),r=i.particleCount||this.particleCountPerStream,a=new Wn(e,n,r);a.instanceMatrix.setUsage(Fc),a.renderOrder=999;let o=new ft;for(let l=0;l<r;l++){let c=l/r,h=i.curve.getPointAt(c);o.position.copy(h),o.scale.setScalar(i.size),o.updateMatrix(),a.setMatrixAt(l,o.matrix)}a.instanceMatrix.needsUpdate=!0,this.scene.add(a),this.streams.push({id:t,mesh:a,def:i,dummy:o,offset:0})}this.glowLines={};for(let[t,i]of Object.entries(this.streamDefs)){let n=i.curve.getPoints(100),r=new St().setFromPoints(n),a=new An({color:i.color,transparent:!0,opacity:.5,depthTest:!1,depthWrite:!1,blending:Gs}),o=new hn(r,a);o.renderOrder=998,this.scene.add(o),this.glowLines[t]=o}}bindMeshes(e){e.traverse(t=>{if(!t.isMesh)return;let i=t.name;i.includes("Roof_Solar_Panels")?(this.meshes.solarPanels=t,t.material=t.material.clone()):i.includes("Solar_PV_Cabling")?(this.meshes.solarCable=t,t.material=t.material.clone()):i.includes("EV_Charger")?(this.meshes.evCharger=t,t.material=t.material.clone()):i.includes("EV_Charging_Cable")?(this.meshes.evCable=t,t.material=t.material.clone()):i.includes("Car_Peugeot_e2008_Body")?this.meshes.peugeotBody=t:i.includes("Car_Peugeot_e2008_Lights")?(this.meshes.peugeotLights=t,t.material=t.material.clone()):i.includes("Car_Peugeot_e2008_Taillights")?(this.meshes.peugeotTaillights=t,t.material=t.material.clone()):i.includes("Kitchen_Combi_Boiler")?(this.meshes.boiler=t,t.material=t.material.clone()):i.includes("Kitchen_Boiler_Pipes")||i.includes("Gas_Supply_Pipes")?(this.meshes.gasPipes||(this.meshes.gasPipes=[]),t.material=t.material.clone(),this.meshes.gasPipes.push(t)):(i.includes("Entrance_Meter_Box")||i.includes("Entrance_Meter_Fittings"))&&(this.meshes.meterBox||(this.meshes.meterBox=[]),t.material=t.material.clone(),this.meshes.meterBox.push(t))}),this.scene.traverse(t=>{t.name==="Solar_PV_Cabling_Wall"&&(this.meshes.solarCableWall=t)})}update(e,t){if(!t)return;function i(h){let u=Number(h||0);return isNaN(u)?0:Math.abs(u)>=20?u/1e3:u}let n=i(t.solar?.power_kw),r=i(t.octopus_electric?.power_kw),a=i(t.ev?.charger_power_kw),o=i(t.octopus_gas?.power_kw),c=!!(t.octopus_gas?.is_active&&t.octopus_gas?.boiler_status==="Heating")&&o>.05;for(let h of this.streams){let{id:u,mesh:f,def:d,dummy:g}=h,x=0,m=1;if(u==="solar")if(n>.02){let y=Math.min(n/4,2.5);x=Math.max(y*d.baseSpeed,.02),m=1}else x=0;else if(u==="grid"){let y=Math.abs(r),E=r<-.02||!!t.octopus_electric?.is_exporting&&r<=.02;if(y>.02){let b=Math.min(y/3.5,2.5);if(x=Math.max(b*d.baseSpeed,.02),E){m=-1;let T=new Re(65416);f.material.color.lerp(T,.2),this.glowLines[u]&&this.glowLines[u].material.color.lerp(T,.2)}else{m=1;let T=new Re(54015);f.material.color.lerp(T,.2),this.glowLines[u]&&this.glowLines[u].material.color.lerp(T,.2)}}else x=0}else if(u==="ev")if(!!t.ev?.is_connected&&a>.04){let E=Math.min(a/7.2,2.5);x=Math.max(E*d.baseSpeed,.04),m=1}else x=0;else if(u==="gas")if(c&&o>.05){let y=Math.min(o/2,2.5);x=Math.max(y*d.baseSpeed,.04),m=1}else x=0;if(x===0){u==="ev"&&t.ev?.is_connected===!1?(f.material.opacity=0,this.glowLines[u]&&(this.glowLines[u].material.opacity=0)):(f.material.opacity=.2,this.glowLines[u]&&(this.glowLines[u].material.opacity=.12));continue}f.material.opacity=.95,this.glowLines[u]&&(this.glowLines[u].material.opacity=.5),h.offset+=e*x*m,h.offset>1&&(h.offset-=1),h.offset<0&&(h.offset+=1);let p=d.particleCount||this.particleCountPerStream;for(let y=0;y<p;y++){let E=(y/p+h.offset)%1;E<0&&(E+=1);let b=d.curve.getPointAt(E);if(g.position.copy(b),u==="grid"||u==="ev")g.scale.setScalar(d.size);else{let T=Math.sin(E*Math.PI*4);g.scale.setScalar(d.size*(.9+.25*T))}g.updateMatrix(),f.setMatrixAt(y,g.matrix)}f.instanceMatrix.needsUpdate=!0}this.updateMeshGlows(n,r,a,a>.04,c)}updateMeshGlows(e,t,i,n,r){if(this.meshes.solarPanels?.material){let a=this.meshes.solarPanels.material;a.emissive=a.emissive||new Re;let o=e>.05?Math.min(e/2.2,1.3):0;a.emissive.setHex(16758528),a.emissiveIntensity=Dn.lerp(a.emissiveIntensity||0,o,.08)}if(this.meshes.solarCable?.material){let a=this.meshes.solarCable.material;a.emissive=a.emissive||new Re,a.emissive.setHex(16755200),a.emissiveIntensity=e>.05?.8:0}if(this.meshes.solarCableWall?.material){let a=this.meshes.solarCableWall.material;a.emissive=a.emissive||new Re,a.emissive.setHex(16755200),a.emissiveIntensity=e>.05?.45:0}if(this.meshes.evCable?.material){let a=this.meshes.evCable.material;a.emissive=a.emissive||new Re,a.emissive.setHex(62875),a.emissiveIntensity=n?.9:0}if(this.meshes.peugeotLights?.material){let a=this.meshes.peugeotLights.material;a.emissive=a.emissive||new Re,a.emissive.setHex(62875);let o=n?Math.sin(Date.now()*.003)*.35+.65:0;a.emissiveIntensity=o}if(this.meshes.boiler?.material){let a=this.meshes.boiler.material;a.emissive=a.emissive||new Re,a.emissive.setHex(16733440),a.emissiveIntensity=r?.8:0}if(this.meshes.gasPipes)for(let a of this.meshes.gasPipes)a.material&&(a.material.emissive=a.material.emissive||new Re,a.material.emissive.setHex(16742144),a.material.emissiveIntensity=r?.6:0)}};var vl=[{id:"lounge",name:"Living Room Ceiling",floor:"ground",pos:{x:1.88,y:2.15,z:-2.35},range:7.5,maxIntensity:4.2,defaultColor:16769689,entity_id:""},{id:"kitchen",name:"Kitchen Ceiling",floor:"ground",pos:{x:1.8,y:2.15,z:-7.4},range:7,maxIntensity:4.5,defaultColor:16773334,entity_id:""},{id:"dining",name:"Dining Room",floor:"ground",pos:{x:4.3,y:2.15,z:-7.4},range:6.5,maxIntensity:4,defaultColor:16770744,entity_id:""},{id:"hallway",name:"Hall & Stairs",floor:"ground",pos:{x:4.3,y:2.15,z:-3.25},range:7.5,maxIntensity:3.8,defaultColor:16772565,entity_id:""},{id:"wc",name:"Downstairs WC",floor:"ground",pos:{x:1.85,y:2.15,z:-5.32},range:5.5,maxIntensity:3.8,defaultColor:16773596,entity_id:""},{id:"living_lamp",name:"Living Room Lamp",floor:"ground",pos:{x:.6,y:1.58,z:-.65},range:5.5,maxIntensity:3.8,defaultColor:16766336,entity_id:"light.living_room_lamp",isFloorLamp:!0},{id:"master_bedroom",name:"Master Bedroom",floor:"first",pos:{x:1.9,y:4.55,z:-2.1},range:7.5,maxIntensity:4.2,defaultColor:16769689,entity_id:""},{id:"ensuite",name:"Master En-Suite",floor:"first",pos:{x:4.4,y:4.55,z:-1.22},range:5,maxIntensity:3.6,defaultColor:16774890,entity_id:""},{id:"bedroom2",name:"Bedroom 2 (Guestroom)",floor:"first",pos:{x:1.75,y:4.55,z:-7.3},range:6.8,maxIntensity:4,defaultColor:16769689,entity_id:""},{id:"bedroom3",name:"Bedroom 3 (Nursery / Office)",floor:"first",pos:{x:4.3,y:4.55,z:-7.3},range:6.8,maxIntensity:4,defaultColor:16769689,entity_id:""},{id:"bathroom",name:"Family Bathroom",floor:"first",pos:{x:1.22,y:4.55,z:-4.95},range:5.5,maxIntensity:3.8,defaultColor:16775406,entity_id:""},{id:"landing",name:"Upstairs Landing",floor:"first",pos:{x:3.3,y:4.55,z:-4.95},range:6,maxIntensity:3.8,defaultColor:16772565,entity_id:""}],Hx={lounge:{name:"Living Room",pos:new w(1.88,2.15,-2.35),range:7.5,maxIntensity:4.2,defaultColor:16769689,boxCenter:new w(1.88,1.2,-2.35),boxSize:new w(3.1,2.35,4.05)},kitchen:{name:"Kitchen",pos:new w(1.8,2.15,-7.4),range:7,maxIntensity:4.5,defaultColor:16773334,boxCenter:new w(1.8,1.2,-7.41),boxSize:new w(2.95,2.35,2.3)},dining:{name:"Dining Room",pos:new w(4.3,2.15,-7.4),range:6.5,maxIntensity:4,defaultColor:16770744,boxCenter:new w(4.32,1.2,-7.41),boxSize:new w(2,2.35,2.3)},hallway:{name:"Hallway",pos:new w(4.3,2.15,-3.25),range:7.5,maxIntensity:3.8,defaultColor:16772565,boxCenter:new w(4.37,1.2,-3.275),boxSize:new w(1.98,2.4,6)},wc:{name:"Downstairs WC",pos:new w(1.85,2.15,-5.32),range:5.5,maxIntensity:3.8,defaultColor:16773596,boxCenter:new w(1.85,1.2,-5.32),boxSize:new w(3.08,2.35,1.82)},master_bedroom:{name:"Master Bedroom",pos:new w(1.9,4.55,-2.1),range:7.5,maxIntensity:4.2,defaultColor:16769689,boxCenter:new w(2.325,3.85,-2.075),boxSize:new w(4.1,2.4,3.62)},ensuite:{name:"Master En-Suite",pos:new w(4.4,4.55,-1.22),range:5,maxIntensity:3.6,defaultColor:16774890,boxCenter:new w(4.38,3.85,-1.23),boxSize:new w(1.85,2.25,1.82)},bedroom2:{name:"Bedroom 2",pos:new w(1.75,4.55,-7.3),range:6.8,maxIntensity:4,defaultColor:16769689,boxCenter:new w(1.775,3.85,-7.315),boxSize:new w(3,2.4,2.6)},bedroom3:{name:"Bedroom 3",pos:new w(4.3,4.55,-7.3),range:6.8,maxIntensity:4,defaultColor:16769689,boxCenter:new w(4.295,3.85,-7.315),boxSize:new w(2.15,2.4,2.6)},bathroom:{name:"Family Bathroom",pos:new w(1.22,4.55,-4.95),range:5.5,maxIntensity:3.8,defaultColor:16775406,boxCenter:new w(1.22,3.85,-4.95),boxSize:new w(1.82,2.25,2.18)},landing:{name:"Landing & Stairs",pos:new w(3.3,4.55,-4.95),range:6,maxIntensity:3.8,defaultColor:16772565,boxCenter:new w(3.3,3.85,-4.95),boxSize:new w(2.25,2.25,2.18)}},yl=class{constructor(e,t={}){this.container=e,this.options={modelUrl:t.modelUrl||"Taylor_Wimpey_Blair.glb",nightMode:t.nightMode||!1,autoRotate:t.autoRotate||!1,...t},this.hotspots=[{id:"solar",name:"Solax Solar Inverter",pos:new w(5.88,1.78,-.5)},{id:"grid",name:"Octopus Grid & Meter",pos:new w(5.3,2,-.85)},{id:"boiler",name:"Combi Boiler & Gas",pos:new w(.45,1.8,-8.3)},{id:"ev",name:"Peugeot e-2008 EV",pos:new w(5.25,1.2,1.35)},{id:"ev_charger",name:"myenergi Zappi Charger",pos:new w(5.2,1.45,.05)},{id:"thermostat_downstairs",name:"Downstairs Heating",pos:new w(3.6,1.45,-2.4)},{id:"thermostat_upstairs",name:"Upstairs Heating",pos:new w(3.3,4.05,-4.95)},{id:"appliance_fridge",name:"Kitchen Fridge Freezer",pos:new w(2.45,1.45,-6.65)},{id:"appliance_washer",name:"Kitchen Washing Machine",pos:new w(2.15,.9,-8.2)},{id:"appliance_tv",name:"Living Room TV",pos:new w(3.35,1.4,-3.1)}],this.roofParts=[],this.topFloorMeshes=[],this.cuttableMeshes=[],this.occludingMeshes=[],this.tvRaycaster=new Bs,this.tvTargetPos=new w(3.34,1.35,-3.1),this.cutawayMode="normal",this.customLights=this.options.customLights||vl,this.roomLights={},this.xrayActive=!1,this.nightMode=this.options.nightMode,this.targetCameraPos=null,this.targetLookAt=null,this.clickToPlaceCallback=null,this.boundOnClickToPlace=null,this.init()}init(){let e=this.container.clientWidth||800,t=this.container.clientHeight||500;this.scene=new Rs,this.camera=new Pt(40,e/t,.1,100),this.camera.position.set(15,12,17),this.renderer=new ll({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=go,this.renderer.toneMapping=Yr,this.renderer.toneMappingExposure=1.1,this.renderer.localClippingEnabled=!0,this.downstairsClipPlane=new Qt(new w(0,-1,0),2.52),this.container.appendChild(this.renderer.domElement),this.css3dScene=new Rs,this.css3dRenderer=new _l,this.css3dRenderer.setSize(e,t),this.css3dRenderer.domElement.style.position="absolute",this.css3dRenderer.domElement.style.top="0",this.css3dRenderer.domElement.style.left="0",this.css3dRenderer.domElement.style.width="100%",this.css3dRenderer.domElement.style.height="100%",this.css3dRenderer.domElement.style.pointerEvents="none",this.container.appendChild(this.css3dRenderer.domElement),this.controls=new dl(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI/2-.04,this.controls.minDistance=3,this.controls.maxDistance=45,this.controls.target.set(2.5,2.5,0),this.controls.autoRotate=this.options.autoRotate,this.controls.autoRotateSpeed=.8,this.controls.addEventListener("start",()=>this.stopCameraAnimation());let i=()=>this.stopCameraAnimation();this.renderer.domElement.addEventListener("pointerdown",i,{passive:!0}),this.renderer.domElement.addEventListener("wheel",i,{passive:!0}),this.renderer.domElement.addEventListener("touchstart",i,{passive:!0}),this.css3dRenderer?.domElement&&(this.css3dRenderer.domElement.addEventListener("pointerdown",i,{passive:!0}),this.css3dRenderer.domElement.addEventListener("wheel",i,{passive:!0})),this.initLighting(),this.energyFlow=new xl(this.scene),this.initAppliancesAndFurniture(),this.loadModelWithFallbacks(this.options.modelUrl),this.handleResize=this.onResize.bind(this),window.addEventListener("resize",this.handleResize),this.clock=new Wr,this.animate=this.animate.bind(this),this.isRunning=!0,requestAnimationFrame(this.animate)}initLighting(){this.ambientLight=new Gr(16777215,this.nightMode?.35:1.1),this.scene.add(this.ambientLight),this.sunLight=new qn(16775917,this.nightMode?.2:1.8),this.sunLight.position.set(16,22,12),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=60,this.sunLight.shadow.camera.left=-15,this.sunLight.shadow.camera.right=15,this.sunLight.shadow.camera.top=15,this.sunLight.shadow.camera.bottom=-15,this.sunLight.shadow.bias=-5e-4,this.scene.add(this.sunLight),this.hemiLight=new kr(12244978,4020805,this.nightMode?.2:.6),this.scene.add(this.hemiLight),this.meterPointLight=new bi(58879,0,4),this.meterPointLight.position.set(5.28,1.4,-.85),this.scene.add(this.meterPointLight),this.carPointLight=new bi(62875,0,5),this.carPointLight.position.set(3.4,1.2,1.6),this.scene.add(this.carPointLight),this.roomLightsGroup=new dt,this.scene.add(this.roomLightsGroup),this.rebuildCustomLights(this.customLights),this.applyLightingMode()}rebuildCustomLights(e){if(!e||!Array.isArray(e))return;for(this.customLights=e;this.roomLightsGroup.children.length>0;){let i=this.roomLightsGroup.children[0];this.roomLightsGroup.remove(i),i.geometry&&i.geometry.dispose(),i.material&&(Array.isArray(i.material)?i.material.forEach(n=>n.dispose()):i.material.dispose())}this.roomLights={};let t=new xt(.14,.14,.04,16);for(let i of e){let n=i.pos||{x:2.5,y:2.2,z:-3.5},r=new w(n.x,n.y,n.z),a=i.defaultColor!==void 0?i.defaultColor:16769689,o=i.range||6.5,l=new bi(a,0,o,1.2);l.position.copy(r);let c=new Te({color:13421772,emissive:1118481,roughness:.3,metalness:.2}),h=new ie(t,c);h.position.copy(r),(i.isFloorLamp||i.id==="living_lamp")&&(h.visible=!1);let u=new dt;u.add(l),u.add(h);let f=null,d=Hx[i.id];if(d?.boxCenter&&d?.boxSize){let g=new Fe(d.boxSize.x,d.boxSize.y,d.boxSize.z),x=new gt({color:264212,transparent:!0,opacity:.65,side:Ct,depthWrite:!1});f=new ie(g,x),f.position.copy(d.boxCenter),u.add(f)}this.roomLightsGroup.add(u),this.roomLights[i.id]={config:i,light:l,fixture:h,container:u,shadeMesh:f,floor:i.floor||(r.y>3?"first":"ground"),isOn:!1,brightness:0,colorHex:a}}this.cutawayMode==="downstairs"&&this.setCutawayMode("downstairs")}updateLightPosition(e,t,i,n){let r=this.roomLights[e];r&&(r.light.position.set(t,i,n),r.fixture.position.set(t,i,n),r.config.pos={x:t,y:i,z:n},r.floor=i>3?"first":"ground"),e==="living_lamp"&&this.applianceLamp&&(this.applianceLamp.position.set(t,0,n),this.applianceLampLight&&this.applianceLampLight.position.set(t,i,n)),this.beaconGroup&&this.beaconGroup.visible&&this.setEditingLightBeacon(e,new w(t,i,n))}setEditingLightBeacon(e,t=null){if(!this.beaconGroup){this.beaconGroup=new dt,this.scene.add(this.beaconGroup);let r=new Nr(.16,.28,32);r.rotateX(-Math.PI/2);let a=new gt({color:3718648,side:Ct,transparent:!0,opacity:.85});this.beaconRing=new ie(r,a),this.beaconGroup.add(this.beaconRing);let o=new xt(.008,.008,1,8),l=new gt({color:3718648,transparent:!0,opacity:.6});this.beaconLine=new ie(o,l),this.beaconGroup.add(this.beaconLine);let c=new Di(.07,16,16),h=new gt({color:58879});this.beaconSphere=new ie(c,h),this.beaconGroup.add(this.beaconSphere)}let i=this.roomLights[e],n=t||(i?i.light.position:new w(2.5,2.2,-3.5));this.beaconGroup.visible=!0,this.beaconSphere.position.copy(n),this.beaconRing.position.set(n.x,.02,n.z),this.beaconLine.position.set(n.x,n.y/2,n.z),this.beaconLine.scale.set(1,Math.max(.1,n.y),1)}clearEditingLightBeacon(){this.beaconGroup&&(this.beaconGroup.visible=!1)}enableClickToPlace(e){this.clickToPlaceCallback=e,this.boundOnClickToPlace||(this.boundOnClickToPlace=t=>{if(!this.clickToPlaceCallback)return;let i=this.renderer.domElement.getBoundingClientRect(),n=new Ee((t.clientX-i.left)/i.width*2-1,-((t.clientY-i.top)/i.height)*2+1),r=new Bs;r.setFromCamera(n,this.camera);let o=r.intersectObjects(this.scene.children,!0).find(l=>{let c=l.object;for(;c;){if(c===this.beaconGroup||c===this.roomLightsGroup||c===this.energyFlow?.group)return!1;c=c.parent}return!0});if(o){let l=o.point,c=this.cutawayMode==="downstairs"?2.15:l.y>3?4.55:2.15;this.clickToPlaceCallback({x:parseFloat(l.x.toFixed(2)),y:parseFloat(c.toFixed(2)),z:parseFloat(l.z.toFixed(2))})}},this.renderer.domElement.addEventListener("pointerup",this.boundOnClickToPlace))}disableClickToPlace(){this.clickToPlaceCallback=null}updateRoomLights(e){if(!e)return;this.lastLightsData=e;for(let[i,n]of Object.entries(e)){if(!this.roomLights[i])continue;let a=!!(n.is_on||n.state==="on"),o=n.brightness!==void 0?n.brightness:255,l=n.rgb_color;this.setRoomLightState(i,a,o,l)}let t=this.roomLights.lounge;if(t&&t.shadeMesh){let i=!!(e.lounge?.is_on||e.lounge?.state==="on"),n=!!(e.living_lamp?.is_on||e.living_lamp?.state==="on"),r=i||n;t.shadeMesh.visible=!r}if(this.applianceLampShade&&this.applianceLampLight){let i=e.living_lamp,n=!!(i?.is_on||i?.state==="on"),r=i?.brightness!==void 0?i.brightness:255,a=Math.max(.1,r/255);if(n){let o=new Re(16766336);i?.rgb_color&&Array.isArray(i.rgb_color)&&i.rgb_color.length===3&&o.setRGB(i.rgb_color[0]/255,i.rgb_color[1]/255,i.rgb_color[2]/255),this.applianceLampShade.material.emissive.copy(o),this.applianceLampShade.material.emissiveIntensity=2.4*a,this.applianceLampLight.color.copy(o),this.applianceLampLight.intensity=3.6*a}else this.applianceLampShade.material.emissive.setHex(0),this.applianceLampShade.material.emissiveIntensity=0,this.applianceLampLight.intensity=0}}initAppliancesAndFurniture(){this.appliancesGroup=new dt,this.scene.add(this.appliancesGroup);let e=new dt;e.position.set(2.45,0,-6.65),e.rotation.y=Math.PI;let t=new Fe(.7,1.84,.65),i=new Te({color:3028032,metalness:.82,roughness:.28}),n=new ie(t,i);n.position.y=.92,n.castShadow=!0,n.receiveShadow=!0,e.add(n);let r=new xt(.012,.012,.55,12),a=new Te({color:14212841,metalness:.95,roughness:.15}),o=new ie(r,a);o.position.set(-.06,1.28,.34);let l=new ie(r,a);l.position.set(.06,1.28,.34),e.add(o),e.add(l);let c=new xt(.012,.012,.48,12),h=new ie(c,a);h.rotation.z=Math.PI/2,h.position.set(0,.65,.34),e.add(h);let u=new zi(.12,.18),f=new gt({color:58879,side:Ct}),d=new ie(u,f);d.position.set(-.16,1.35,.33),e.add(d),this.appliancesGroup.add(e),this.applianceFridge=e;let g=new dt;g.position.set(3.38,1.35,-3.1);let x=new Fe(.038,.72,1.22),m=new Te({color:988970,roughness:.4,metalness:.6}),p=new ie(x,m);g.add(p);let y=new Fe(.01,.67,1.17),E=new Te({color:131845,roughness:.12,metalness:.2,emissive:0,emissiveIntensity:0});this.applianceTvScreen=new ie(y,E),this.applianceTvScreen.position.x=-.016,g.add(this.applianceTvScreen);let b=new Di(.007,8,8);this.applianceTvLed=new ie(b,new gt({color:15680580})),this.applianceTvLed.position.set(-.022,-.34,.54),g.add(this.applianceTvLed),this.applianceTvLight=new bi(7382527,0,3.8,1.6),this.applianceTvLight.position.set(3.18,1.35,-3.1),this.appliancesGroup.add(this.applianceTvLight),this.appliancesGroup.add(g),this.applianceTv=g;let T=document.createElement("div");T.style.width="640px",T.style.height="366px",T.style.backgroundColor="#000000",T.style.overflow="hidden",T.style.borderRadius="3px",T.style.backfaceVisibility="hidden",T.style.webkitBackfaceVisibility="hidden";let A=document.createElement("iframe");A.id="tv-youtube-iframe",A.style.width="100%",A.style.height="100%",A.style.border="none",A.style.pointerEvents="auto",A.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",A.referrerPolicy="strict-origin-when-cross-origin",A.setAttribute("allowfullscreen","true"),T.appendChild(A),this.tvIframe=A,this.tvIframeContainer=T,this.isTvMuted=!0,this.isTvPlaying=!1,this.tvCss3dObject=new gl(T),this.tvCss3dObject.position.set(3.352,1.35,-3.1),this.tvCss3dObject.rotation.y=-Math.PI/2;let _=1.17/640;this.tvCss3dObject.scale.set(_,_,_),this.tvCss3dObject.visible=!1,this.css3dScene.add(this.tvCss3dObject);let M=new dt;M.position.set(.6,0,-.65);let N=new xt(.18,.18,.025,24),P=new Te({color:12884822,metalness:.85,roughness:.25}),D=new ie(N,P);D.position.y=.0125,M.add(D);let U=new xt(.014,.014,1.55,16),X=new ie(U,P);X.position.y=.775,M.add(X);let L=new xt(.18,.22,.28,24),V=new Te({color:16708551,roughness:.85,side:Ct,emissive:0,emissiveIntensity:0});this.applianceLampShade=new ie(L,V),this.applianceLampShade.position.y=1.55,M.add(this.applianceLampShade),this.applianceLampLight=new bi(16769706,0,5,1.2),this.applianceLampLight.position.set(.6,1.58,-.65),this.appliancesGroup.add(this.applianceLampLight),this.appliancesGroup.add(M),this.applianceLamp=M;let G=new dt;G.position.set(2.15,0,-8.2);let W=new Fe(.58,.85,.58),te=new Te({color:15857145,roughness:.35,metalness:.25}),q=new ie(W,te);q.position.y=.425,q.castShadow=!0,q.receiveShadow=!0,G.add(q);let Y=new Ns(.19,.024,16,36),F=new Te({color:9741240,metalness:.9,roughness:.18}),ne=new ie(Y,F);ne.position.set(0,.42,.295),G.add(ne);let Me=new Pr(.175,32),K=new Te({color:988970,roughness:.1,metalness:.6,transparent:!0,opacity:.85,side:Ct});this.applianceWasherGlass=new ie(Me,K),this.applianceWasherGlass.position.set(0,.42,.298),G.add(this.applianceWasherGlass);let me=new Ns(.14,.012,12,28),ye=new ie(me,F);ye.position.set(0,.42,.296),G.add(ye);let oe=new zi(.54,.14),ee=new Te({color:1976635,roughness:.4,metalness:.5,side:Ct}),xe=new ie(oe,ee);xe.position.set(0,.74,.295),G.add(xe);let Ae=new Fe(.14,.08,.015),ve=new Te({color:14870768,roughness:.3}),Be=new ie(Ae,ve);Be.position.set(-.17,.74,.3),G.add(Be);let tt=new xt(.032,.032,.018,20),Ye=new ie(tt,F);Ye.rotation.x=Math.PI/2,Ye.position.set(0,.74,.302),G.add(Ye);let Mt=new zi(.12,.05),wt=new gt({color:62875,side:Ct});this.applianceWasherDisplay=new ie(Mt,wt),this.applianceWasherDisplay.position.set(.17,.74,.302),G.add(this.applianceWasherDisplay);let Yt=new Di(.006,8,8);this.applianceWasherLed=new ie(Yt,new gt({color:6583435})),this.applianceWasherLed.position.set(.24,.77,.304),G.add(this.applianceWasherLed),this.applianceWasherLight=new bi(62875,0,2,1.4),this.applianceWasherLight.position.set(2.15,.45,-7.95),this.appliancesGroup.add(this.applianceWasherLight),this.appliancesGroup.add(G),this.applianceWasher=G;let Je=new dt,Vt=new Te({color:3359061,roughness:.85,metalness:.05}),vt=new Te({color:4674921,roughness:.8,metalness:.02}),Jt=new Te({color:14251782,roughness:.7}),ni=new Te({color:15857145,roughness:.8}),si=new Te({color:988970,roughness:.6}),O=new ie(new Fe(.88,.22,2.1),Vt);O.position.set(.99,.17,-3.05),O.castShadow=!0,O.receiveShadow=!0,Je.add(O);let Wt=new ie(new Fe(.95,.22,.88),Vt);Wt.position.set(1.905,.17,-3.66),Wt.castShadow=!0,Wt.receiveShadow=!0,Je.add(Wt);let lt=new ie(new Fe(.2,.46,2.1),Vt);lt.position.set(.65,.51,-3.05),lt.castShadow=!0,lt.receiveShadow=!0,Je.add(lt);let ct=new ie(new Fe(.95,.46,.2),Vt);ct.position.set(1.905,.51,-4),ct.castShadow=!0,ct.receiveShadow=!0,Je.add(ct);let _e=new ie(new Fe(.88,.38,.16),Vt);_e.position.set(.99,.41,-2),_e.castShadow=!0,_e.receiveShadow=!0,Je.add(_e);let mt=new ie(new Fe(.16,.38,.88),Vt);mt.position.set(2.38,.41,-3.66),mt.castShadow=!0,mt.receiveShadow=!0,Je.add(mt);let Oe=new ie(new Fe(.66,.13,.92),vt);Oe.position.set(1.1,.345,-2.55),Oe.castShadow=!0,Je.add(Oe);let ke=new ie(new Fe(.66,.13,.92),vt);ke.position.set(1.1,.345,-3.49),ke.castShadow=!0,Je.add(ke);let R=new ie(new Fe(.93,.13,.66),vt);R.position.set(1.905,.345,-3.56),R.castShadow=!0,Je.add(R);let v=new ie(new Fe(.32,.3,.1),Jt);v.position.set(.82,.52,-2.18),v.rotation.y=.25,Je.add(v);let k=new ie(new Fe(.32,.3,.1),ni);k.position.set(.84,.52,-3.88),k.rotation.y=.78,Je.add(k);let se=new ie(new Fe(.3,.28,.1),Jt);se.position.set(2.22,.52,-3.68),se.rotation.y=1.35,Je.add(se);let Q=[[.6,-2],[1.38,-2],[.6,-4.05],[2.35,-4.05],[2.35,-3.25],[1.38,-3.25]];for(let[ae,Ve]of Q){let Ue=new ie(new xt(.025,.025,.06,8),si);Ue.position.set(ae,.03,Ve),Je.add(Ue)}this.appliancesGroup.add(Je),this.couchGroup=Je;let le=new dt,fe=new Te({color:10120007,roughness:.45,metalness:.08}),Z=new Te({color:3359061,roughness:.8}),J=new ie(new Fe(1.4,.045,.85),fe);J.position.set(4.3,.73,-7.4),J.castShadow=!0,J.receiveShadow=!0,le.add(J);let pe=[[-.62,-.36],[.62,-.36],[-.62,.36],[.62,.36]];for(let[ae,Ve]of pe){let Ue=new ie(new Fe(.05,.71,.05),fe);Ue.position.set(4.3+ae,.355,-7.4+Ve),Ue.castShadow=!0,le.add(Ue)}let C=[{x:4.02,z:-7.4-.52,rotY:0},{x:4.58,z:-7.4-.52,rotY:0},{x:4.02,z:-7.4+.52,rotY:Math.PI},{x:4.58,z:-7.4+.52,rotY:Math.PI}];for(let ae of C){let Ve=new dt;Ve.position.set(ae.x,0,ae.z),Ve.rotation.y=ae.rotY;let Ue=new ie(new Fe(.38,.04,.38),Z);Ue.position.y=.44,Ue.castShadow=!0,Ve.add(Ue);let ai=new ie(new Fe(.38,.38,.035),Z);ai.position.set(0,.66,-.17),ai.castShadow=!0,Ve.add(ai);let kt=[[-.16,-.16],[.16,-.16],[-.16,.16],[.16,.16]];for(let[ss,Oi]of kt){let Ui=new ie(new xt(.015,.015,.42,6),fe);Ui.position.set(ss,.21,Oi),Ve.add(Ui)}le.add(Ve)}this.appliancesGroup.add(le),this.diningTable=le,this.upstairsFurnitureGroup=new dt,this.scene.add(this.upstairsFurnitureGroup);let j=2.52,$=new dt;$.position.set(.55,j,-2.15);let ue=new Te({color:1976635,roughness:.6}),ce=new Te({color:1976635,roughness:.7}),he=new Te({color:16317180,roughness:.85}),De=new Te({color:4674921,roughness:.75}),Xe=new Te({color:16777215,roughness:.8}),re=new ie(new Fe(.08,.95,1.62),ce);re.position.set(.04,.52,0),re.castShadow=!0,$.add(re);let Ne=new ie(new Fe(1.95,.28,1.55),ue);Ne.position.set(1.015,.14,0),Ne.castShadow=!0,$.add(Ne);let qe=new ie(new Fe(1.9,.2,1.48),he);qe.position.set(1.02,.38,0),qe.castShadow=!0,$.add(qe);let be=new ie(new Fe(1.42,.09,1.52),De);be.position.set(1.26,.485,0),be.castShadow=!0,$.add(be);let st=new ie(new Fe(.38,.12,.58),Xe);st.position.set(.28,.51,-.34),$.add(st);let Et=new ie(new Fe(.38,.12,.58),Xe);Et.position.set(.28,.51,.34),$.add(Et);for(let ae of[-.98,.98]){let Ve=new ie(new Fe(.4,.44,.38),ue);Ve.position.set(.22,.22,ae),$.add(Ve);let Ue=new ie(new xt(.06,.08,.03,12),new Te({color:14251782}));Ue.position.set(.22,.455,ae),$.add(Ue);let ai=new ie(new xt(.08,.11,.16,12),new Te({color:16772565}));ai.position.set(.22,.58,ae),$.add(ai)}this.upstairsFurnitureGroup.add($);let Ut=new dt;Ut.position.set(.55,j,-7.3);let es=new Te({color:3359061,roughness:.6}),Js=new Te({color:5073243,roughness:.75}),js=new ie(new Fe(.08,.88,1.5),es);js.position.set(.04,.48,0),js.castShadow=!0,Ut.add(js);let ts=new ie(new Fe(1.9,.26,1.44),es);ts.position.set(.99,.13,0),ts.castShadow=!0,Ut.add(ts);let is=new ie(new Fe(1.85,.18,1.38),he);is.position.set(1,.35,0),is.castShadow=!0,Ut.add(is);let Ei=new ie(new Fe(1.38,.08,1.42),Js);Ei.position.set(1.23,.445,0),Ei.castShadow=!0,Ut.add(Ei);let ns=new ie(new Fe(.36,.11,.52),Xe);ns.position.set(.27,.47,-.32),Ut.add(ns);let Qs=new ie(new Fe(.36,.11,.52),Xe);Qs.position.set(.27,.47,.32),Ut.add(Qs);let er=new ie(new Fe(.38,.42,.36),es);er.position.set(.22,.21,.92),Ut.add(er),this.upstairsFurnitureGroup.add(Ut);let At=new dt;At.position.set(5.18,j,-7.3);let ri=new Te({color:16317180,roughness:.35}),aa=new Te({color:16777215,roughness:.8}),Fn=new Te({color:16707722,roughness:.7}),wl=[[0,-.58],[-.64,-.58],[0,.58],[-.64,.58]];for(let[ae,Ve]of wl){let Ue=new ie(new Fe(.04,.82,.04),ri);Ue.position.set(ae,.41,Ve),Ue.castShadow=!0,At.add(Ue)}let tr=new ie(new Fe(.035,.035,1.2),ri);tr.position.set(0,.8,0),At.add(tr);let ir=new ie(new Fe(.035,.035,1.2),ri);ir.position.set(-.64,.8,0),At.add(ir);let oa=new ie(new Fe(.6,.035,.035),ri);oa.position.set(-.32,.8,-.58),At.add(oa);let la=new ie(new Fe(.6,.035,.035),ri);la.position.set(-.32,.8,.58),At.add(la);let ca=new ie(new Fe(.035,.035,1.2),ri);ca.position.set(0,.22,0),At.add(ca);let nr=new ie(new Fe(.035,.035,1.2),ri);nr.position.set(-.64,.22,0),At.add(nr);for(let ae=-.5;ae<=.5;ae+=.1){let Ve=new ie(new xt(.007,.007,.55,6),ri);Ve.position.set(-.64,.51,ae),At.add(Ve)}for(let ae=-.5;ae<=.5;ae+=.1){let Ve=new ie(new xt(.007,.007,.55,6),ri);Ve.position.set(0,.51,ae),At.add(Ve)}for(let ae=-.52;ae<=-.1;ae+=.1){let Ve=new ie(new xt(.007,.007,.55,6),ri);Ve.position.set(ae,.51,-.58),At.add(Ve);let Ue=new ie(new xt(.007,.007,.55,6),ri);Ue.position.set(ae,.51,.58),At.add(Ue)}let S=new ie(new Fe(.6,.1,1.14),aa);S.position.set(-.32,.27,0),S.castShadow=!0,At.add(S);let I=new ie(new Fe(.61,.03,.76),Fn);I.position.set(-.32,.33,.19),I.castShadow=!0,At.add(I),this.upstairsFurnitureGroup.add(At);let z=new dt;z.position.set(5.73,1.75,-.5),z.rotation.y=Math.PI/2;let B=new ie(new Fe(.44,.58,.16),new Te({color:16317180,roughness:.35,metalness:.2}));B.castShadow=!0,B.receiveShadow=!0,z.add(B);let H=new ie(new Fe(.42,.54,.04),new Te({color:3359061,roughness:.6,metalness:.8}));H.position.z=-.09,z.add(H);let ge=new ie(new Fe(.38,.22,.01),new Te({color:659229,roughness:.1,metalness:.8}));ge.position.set(0,.08,.085),z.add(ge);let Ce=new ie(new Fe(.38,.014,.012),new Te({color:15680580,roughness:.4}));Ce.position.set(0,-.035,.086),z.add(Ce);let de=new ie(new zi(.18,.07),new gt({color:165063}));de.position.set(0,.08,.092),z.add(de),this.applianceInverterScreen=de;let Se=new ie(new Di(.007,8,8),new gt({color:62875}));Se.position.set(-.11,.01,.093),z.add(Se),this.applianceInverterLed=Se;let Pe=new ie(new Di(.007,8,8),new gt({color:3718648}));Pe.position.set(-.06,.01,.093),z.add(Pe);let Ge=new ie(new Fe(.06,.06,.02),new Te({color:16096779,roughness:.5}));Ge.position.set(.24,-.16,.02),z.add(Ge);let Ke=new ie(new xt(.022,.022,.025,12),new Te({color:15680580,roughness:.4}));Ke.rotation.z=Math.PI/2,Ke.position.set(.255,-.16,.02),z.add(Ke);for(let ae of[-.06,.06]){let Ve=new ie(new xt(.015,.015,.04,8),new Te({color:988970,roughness:.5}));Ve.position.set(ae,.3,0),z.add(Ve)}let Le=new ie(new xt(.018,.018,.04,8),new Te({color:988970,roughness:.5}));Le.position.set(0,-.3,0),z.add(Le),this.appliancesGroup.add(z),this.applianceInverter=z;let je=this.energyFlow?.paths?.solar||new Ii([new w(2.5,6.45,-6.5),new w(4.1,6.55,-6.5),new w(5.63,6.55,-6.5),new w(5.63,5.2,-4.5),new w(5.63,3.8,-2.5),new w(5.63,2.6,-1),new w(5.63,2.05,-.5),new w(5.63,1.75,-.5),new w(5.63,1.4,-.5),new w(5.5,1.25,-.75)]),bt=new Fr(je,84,.016,8,!1),ut=new Te({color:1976635,roughness:.45,metalness:.2}),rt=new ie(bt,ut);rt.name="Solar_PV_Cabling_Wall",rt.castShadow=!0,this.appliancesGroup.add(rt),this.solarCableConduit=rt;let Bt=new Te({color:6583435,roughness:.3,metalness:.8});for(let ae=.3;ae<=.88;ae+=.08){let Ve=je.getPointAt(ae),Ue=new ie(new Fe(.018,.04,.045),Bt);Ue.position.set(5.64,Ve.y,Ve.z),this.appliancesGroup.add(Ue)}}updateAppliances(e){if(e){if(this.applianceInverterLed&&this.applianceInverterScreen&&(Number(this.currentEnergyData?.solar?.power_kw||0)>.04?(this.applianceInverterLed.material.color.setHex(62875),this.applianceInverterScreen.material.color.setHex(165063)):(this.applianceInverterLed.material.color.setHex(6583435),this.applianceInverterScreen.material.color.setHex(661807))),this.applianceTvScreen&&this.applianceTvLight){let t=!!(e.tv?.is_on||e.tv?.state==="on");if(this.isTvPlaying=t,t){this.applianceTvScreen.material.emissive.setHex(6072565),this.applianceTvScreen.material.emissiveIntensity=1.8,this.applianceTvLight.intensity=1.6,this.applianceTvLed&&this.applianceTvLed.material.color.setHex(2278750);let i="https://www.youtube.com/embed/-m0iWqgyvKQ?autoplay=1&mute=1&loop=1&playlist=-m0iWqgyvKQ&enablejsapi=1";this.tvIframe&&(!this.tvIframe.src||!this.tvIframe.src.includes("-m0iWqgyvKQ"))&&(this.tvIframe.src=i)}else this.applianceTvScreen.material.emissive.setHex(0),this.applianceTvScreen.material.emissiveIntensity=0,this.applianceTvLight.intensity=0,this.applianceTvLed&&this.applianceTvLed.material.color.setHex(15680580),this.tvIframe&&this.tvIframe.src&&(this.tvIframe.src=""),this.tvCss3dObject&&(this.tvCss3dObject.visible=!1)}if(this.applianceWasher&&this.applianceWasherLight){let t=e.washer||{};!!(t.is_active||t.power_w&&t.power_w>10)?(this.applianceWasherLed&&this.applianceWasherLed.material.color.setHex(2278750),this.applianceWasherDisplay&&this.applianceWasherDisplay.material.color.setHex(62875),this.applianceWasherGlass&&(this.applianceWasherGlass.material.emissive.setHex(62875),this.applianceWasherGlass.material.emissiveIntensity=.8),this.applianceWasherLight.intensity=1.4):(this.applianceWasherLed&&this.applianceWasherLed.material.color.setHex(6583435),this.applianceWasherDisplay&&this.applianceWasherDisplay.material.color.setHex(3359061),this.applianceWasherGlass&&(this.applianceWasherGlass.material.emissive.setHex(0),this.applianceWasherGlass.material.emissiveIntensity=0),this.applianceWasherLight.intensity=0)}}}toggleTvAudio(){if(!this.tvIframe||!this.tvIframe.contentWindow)return!1;this.isTvMuted=!this.isTvMuted;let e=this.isTvMuted?"mute":"unMute";return this.tvIframe.contentWindow.postMessage(JSON.stringify({event:"command",func:e,args:""}),"*"),!this.isTvMuted}setRoomLightState(e,t,i=255,n=null){let r=this.roomLights[e];if(r)if(r.isOn=t,r.brightness=i,t){r.shadeMesh&&(r.shadeMesh.visible=!1);let a=Math.max(.2,Math.min(1,i/255));Array.isArray(n)&&n.length===3?r.light.color.setRGB(n[0]/255,n[1]/255,n[2]/255):r.light.color.setHex(r.config.defaultColor);let o=this.nightMode?1.4:1;r.light.intensity=r.config.maxIntensity*a*o,r.fixture.material.emissive.copy(r.light.color).multiplyScalar(a*2.8),r.fixture.material.color.setHex(16777215)}else r.shadeMesh&&(r.shadeMesh.visible=!0),r.light.intensity=0,r.fixture.material.emissive.setHex(657930),r.fixture.material.color.setHex(2236962)}applyLightingMode(){this.nightMode?(this.scene.background=new Re(329745),this.ambientLight.intensity=.12,this.sunLight.intensity=.1,this.sunLight.color.setHex(3691909),this.hemiLight.intensity=.1,this.meterPointLight.intensity=1.2,this.carPointLight.intensity=1.2):(this.scene.background=new Re(922660),this.ambientLight.intensity=.35,this.sunLight.intensity=1.8,this.sunLight.color.setHex(16775917),this.hemiLight.intensity=.28,this.meterPointLight.intensity=.4,this.carPointLight.intensity=.4)}setNightMode(e){this.nightMode=e,this.applyLightingMode(),this.lastLightsData&&this.updateRoomLights(this.lastLightsData)}createRealisticTextures(){if(typeof document>"u")return null;try{let e=(oe,ee)=>{let xe=document.createElement("canvas");return xe.width=oe,xe.height=ee,xe},t=e(512,512),i=t.getContext("2d"),n=e(512,512),r=n.getContext("2d");i.fillStyle="#f4f5f8",i.fillRect(0,0,512,512),r.fillStyle="#828282",r.fillRect(0,0,512,512);for(let oe=0;oe<8;oe++){let ee=Math.random()*512,xe=Math.random()*512,Ae=80+Math.random()*120,ve=i.createRadialGradient(ee,xe,10,ee,xe,Ae);ve.addColorStop(0,Math.random()>.5?"rgba(235, 238, 242, 0.5)":"rgba(255, 255, 255, 0.6)"),ve.addColorStop(1,"rgba(244, 245, 248, 0)"),i.fillStyle=ve,i.beginPath(),i.arc(ee,xe,Ae,0,Math.PI*2),i.fill()}for(let oe=0;oe<15e3;oe++){let ee=Math.random()*512,xe=Math.random()*512,Ae=Math.random();Ae<.35?(i.fillStyle="rgba(195, 200, 210, 0.35)",r.fillStyle="#505050"):Ae<.7?(i.fillStyle="rgba(255, 255, 255, 0.7)",r.fillStyle="#b8b8b8"):(i.fillStyle="rgba(225, 220, 210, 0.4)",r.fillStyle="#909090"),i.fillRect(ee,xe,1.2,1.2),r.fillRect(ee,xe,1.2,1.2)}let a=["#d8dbe0","#c5cad2","#ffffff","#e8e4dc","#b0b6c2","#f0f2f5"];for(let oe=0;oe<2800;oe++){let ee=Math.random()*512,xe=Math.random()*512,Ae=1.8+Math.random()*2.2,ve=1.8+Math.random()*2.2,Be=a[Math.floor(Math.random()*a.length)];i.fillStyle=Be,i.fillRect(ee,xe,Ae,ve),r.fillStyle="#e5e5e5",r.fillRect(ee,xe,Ae,ve),r.fillStyle="#383838",r.fillRect(ee+Ae*.5,xe+ve*.5,Ae*.6,ve*.6)}let o=e(512,512),l=o.getContext("2d"),c=e(512,512),h=c.getContext("2d");l.fillStyle="#1c2026",l.fillRect(0,0,512,512),h.fillStyle="#111111",h.fillRect(0,0,512,512);let u=10,f=512/u,d=512/6,g=["#272b33","#2e333d","#22252c","#343a44","#2a2f37"];for(let oe=0;oe<u;oe++){let ee=oe*f,xe=oe%2===0?0:-d/2;for(let Ae=xe-d;Ae<512+d;Ae+=d){let ve=g[Math.floor(Math.random()*g.length)];l.fillStyle=ve,l.fillRect(Ae+1,ee,d-2,f);for(let tt=0;tt<12;tt++)l.fillStyle="rgba(255, 255, 255, 0.04)",l.fillRect(Ae+Math.random()*d,ee,1,f);l.fillStyle="rgba(0, 0, 0, 0.35)",l.fillRect(Ae,ee+f-2.5,d,2.5);let Be=h.createLinearGradient(Ae,ee,Ae,ee+f);Be.addColorStop(0,"#555555"),Be.addColorStop(.9,"#eeeeee"),Be.addColorStop(1,"#111111"),h.fillStyle=Be,h.fillRect(Ae+1,ee,d-2,f)}}let x=e(512,512),m=x.getContext("2d"),p=e(512,512),y=p.getContext("2d");m.fillStyle="#c49760",m.fillRect(0,0,512,512),y.fillStyle="#222222",y.fillRect(0,0,512,512);let E=6,b=512/E,T=["#caa06a","#be925b","#d3a973","#b68953","#cf9f67"];for(let oe=0;oe<E;oe++){let ee=oe*b,Ae=512/4,ve=oe*73%Ae;for(let Be=-ve;Be<512+Ae;Be+=Ae){let tt=T[Math.floor(Math.random()*T.length)];m.fillStyle=tt,m.fillRect(ee+1.5,Be+1.5,b-3,Ae-3);for(let Ye=0;Ye<15;Ye++){let Mt=ee+Math.random()*b;m.fillStyle="rgba(70, 45, 18, 0.07)",m.fillRect(Mt,Be,1,Ae)}m.fillStyle="rgba(45, 25, 10, 0.4)",m.fillRect(ee,Be,b,1.5),m.fillRect(ee,Be,1.5,Ae),y.fillStyle="#dcdcdc",y.fillRect(ee+1.5,Be+1.5,b-3,Ae-3),y.fillStyle="#111111",y.fillRect(ee,Be,b,1.5),y.fillRect(ee,Be,1.5,Ae)}}let A=e(512,512),_=A.getContext("2d"),M=e(512,512),N=M.getContext("2d");_.fillStyle="#9ca3af",_.fillRect(0,0,512,512),N.fillStyle="#151515",N.fillRect(0,0,512,512);let P=4,D=512/P,U=4;for(let oe=0;oe<P;oe++)for(let ee=0;ee<P;ee++){let xe=oe*D+U/2,Ae=ee*D+U/2,ve=D-U;_.fillStyle="#f4f3ee",_.fillRect(xe,Ae,ve,ve);for(let Be=0;Be<3;Be++)_.beginPath(),_.moveTo(xe+Math.random()*ve,Ae+Math.random()*ve),_.bezierCurveTo(xe+Math.random()*ve,Ae+Math.random()*ve,xe+Math.random()*ve,Ae+Math.random()*ve,xe+Math.random()*ve,Ae+Math.random()*ve),_.strokeStyle="rgba(190, 185, 175, 0.28)",_.lineWidth=2+Math.random()*2,_.stroke();N.fillStyle="#f0f0f0",N.fillRect(xe,Ae,ve,ve)}let X=e(256,256),L=X.getContext("2d");L.fillStyle="#d3cbc2",L.fillRect(0,0,256,256);for(let oe=0;oe<256;oe+=4)for(let ee=0;ee<256;ee+=4){let xe=Math.random();L.fillStyle=xe>.6?"#ded8cf":xe<.3?"#b8afa4":"#c9c1b7",L.fillRect(ee,oe,3,3)}let V=e(512,512),G=V.getContext("2d"),W=e(512,512),te=W.getContext("2d");G.fillStyle="#374151",G.fillRect(0,0,512,512),te.fillStyle="#111111",te.fillRect(0,0,512,512);let q=12,Y=512/q,F=512/6,ne=["#5b626e","#666e7b","#4f5661","#737a88"];for(let oe=0;oe<q;oe++){let ee=oe*Y,xe=oe%2===0?0:-F/2;for(let Ae=xe-F;Ae<512+F;Ae+=F){let ve=ne[Math.floor(Math.random()*ne.length)];G.fillStyle=ve,G.fillRect(Ae+2,ee+2,F-4,Y-4),te.fillStyle="#e0e0e0",te.fillRect(Ae+2,ee+2,F-4,Y-4)}}let Me=e(256,256),K=Me.getContext("2d");K.fillStyle="#3d7a2e",K.fillRect(0,0,256,256);let me=["#4a9037","#356d27","#5bb044","#2e5d22"];for(let oe=0;oe<4e3;oe++){let ee=Math.random()*256,xe=Math.random()*256;K.fillStyle=me[Math.floor(Math.random()*me.length)],K.fillRect(ee,xe,1.5,2.5)}let ye=(oe,ee,xe)=>{let Ae=new Rr(oe);return Ae.wrapS=Li,Ae.wrapT=Li,Ae.repeat.set(ee,xe),Ae};return{roughcastMap:ye(t,6,6),roughcastBump:ye(n,6,6),roofMap:ye(o,5,5),roofBump:ye(c,5,5),woodMap:ye(x,3,3),woodBump:ye(p,3,3),tileMap:ye(A,3,3),tileBump:ye(M,3,3),carpetMap:ye(X,4,4),pavingMap:ye(V,4,4),pavingBump:ye(W,4,4),grassMap:ye(Me,6,6)}}catch(e){return console.warn("Procedural texture generation error:",e),null}}applyRealisticMaterials(e){if(!e)return;let t=this.createRealisticTextures();e.traverse(i=>{if(!i.isMesh)return;let n=i.name;n.includes("Exterior_Walls")||n.includes("Separating_Party_Wall")?t&&(i.material=new Te({map:t.roughcastMap,bumpMap:t.roughcastBump,bumpScale:.05,roughness:.94,metalness:.02})):n.includes("Roof_Main")?t&&(i.material=new Te({map:t.roofMap,bumpMap:t.roofBump,bumpScale:.05,roughness:.82,metalness:.1})):n.includes("Roof_Ridge_Tiles")?i.material=new Te({color:2237997,roughness:.8,metalness:.1}):n.includes("Roof_Solar_Panels")?i.material=new Te({color:1055276,roughness:.12,metalness:.88}):n.includes("Ground_Floor_Wood_Floor")?t&&(i.material=new Te({map:t.woodMap,bumpMap:t.woodBump,bumpScale:.025,roughness:.32,metalness:.05})):n.includes("Ground_Floor_Tile_Floor")||n.includes("First_Floor_Tiles")?t&&(i.material=new Te({map:t.tileMap,bumpMap:t.tileBump,bumpScale:.02,roughness:.22,metalness:.08})):n.includes("Carpet_")||n.includes("Landing_Carpet")?t&&(i.material=new Te({map:t.carpetMap,roughness:.95,metalness:.02})):n.includes("Interior_Walls_")?i.material=new Te({color:16053493,roughness:.88,metalness:.02}):n.includes("First_Floor_Ceiling")?i.material=new Te({color:16448250,roughness:.92,metalness:.01}):n.includes("Windows_Frames")||n.includes("Rear_French_Doors")?i.material=new Te({color:15857145,roughness:.35,metalness:.1}):n.includes("Windows_Glass")?i.material=new Te({color:9684477,roughness:.04,metalness:.15,transparent:!0,opacity:.28,depthWrite:!1}):n.includes("Front_Entrance_Door")?i.material=new Te({color:1976635,roughness:.32,metalness:.15}):n.includes("Driveway")?t&&(i.material=new Te({map:t.pavingMap,bumpMap:t.pavingBump,bumpScale:.035,roughness:.78,metalness:.05})):n.includes("Landscape_Grass")?t&&(i.material=new Te({map:t.grassMap,roughness:.88,metalness:.02})):n.includes("Landscape_Paving")?t&&(i.material=new Te({map:t.pavingMap,roughness:.82,metalness:.05})):n.includes("Landscape_Fencing")?i.material=new Te({color:9132587,roughness:.75,metalness:.05}):n.includes("Fascia_and_Soffits")||n.includes("Rainwater_Gutters")?i.material=new Te({color:2042167,roughness:.35,metalness:.2}):n.includes("Kitchen_Worktop")?i.material=new Te({color:1975344,roughness:.18,metalness:.15}):n.includes("Kitchen_Cabinets")?i.material=new Te({color:14078929,roughness:.4,metalness:.05}):n.includes("Kitchen_Sink_Hob")?i.material=new Te({color:2237998,roughness:.25,metalness:.85}):n.includes("Kitchen_Combi_Boiler")?i.material=new Te({color:16645629,roughness:.22,metalness:.1}):n.includes("Sanitaryware")?i.material=new Te({color:16777215,roughness:.12,metalness:.05}):n.includes("Staircase")?i.material=new Te({color:11897170,roughness:.42,metalness:.05}):n.includes("Interior_Doors")&&(i.material=new Te({color:16317180,roughness:.45,metalness:.05}))})}loadModelWithFallbacks(e){let t=[e,"Taylor_Wimpey_Blair.glb","./Taylor_Wimpey_Blair.glb","/local/ha-energy-3d/Taylor_Wimpey_Blair.glb","/hacsfiles/ha-energy-3d-card/Taylor_Wimpey_Blair.glb","https://raw.githubusercontent.com/aaronwatt91/ha-energy-3d-card/main/Taylor_Wimpey_Blair.glb"].filter(Boolean),i=[...new Set(t)],n=new fl,r=a=>{if(a>=i.length){console.error("All model fallback URLs failed to load.");return}let o=i[a];n.load(o,l=>{this.model=l.scene,this.applyRealisticMaterials(this.model),this.model.traverse(c=>{if(c.isMesh){if(c.name==="Solar_PV_Cabling"){c.visible=!1;return}c.castShadow=!0,c.receiveShadow=!0;let h=c.name;(h.includes("Roof_Main")||h.includes("Roof_Ridge_Tiles")||h.includes("First_Floor_Ceiling")||h.includes("Fascia_and_Soffits"))&&this.roofParts.push({mesh:c,originalMaterial:c.material,ghostMaterial:new Te({color:8956620,transparent:!0,opacity:.15,roughness:.2,metalness:.1,depthWrite:!1})}),(h.includes("Roof_")||h.includes("Fascia_and_Soffits")||h.includes("Rainwater_Gutters")||h.includes("First_Floor_")||h.includes("Interior_Walls_First")||h.includes("Landing_Carpet")||h.includes("Carpet_")||h.includes("Room_Labels_3D")||h.includes("Solar_PV_"))&&this.topFloorMeshes.push({mesh:c,originalMaterial:c.material}),(h.includes("Exterior_Walls")||h.includes("Separating_Party_Wall")||h.includes("Windows_")||h.includes("Front_Entrance_Door")||h.includes("Rear_French_Doors")||h.includes("Interior_Doors")||h.includes("Sanitaryware")||h.includes("Exterior_Hardware_Chrome")||h.includes("Solar_PV_Cabling"))&&this.cuttableMeshes.push(c),(h.includes("Exterior_Walls")||h.includes("Separating_Party_Wall")||h.includes("Interior_Walls_")||h.includes("First_Floor_")||h.includes("Roof_")||h.includes("Front_Entrance_Door"))&&this.occludingMeshes.push(c)}}),this.scene.add(this.model),this.energyFlow.bindMeshes(this.model),this.onModelLoaded&&this.onModelLoaded()},l=>{this.onProgress&&l.total&&this.onProgress(l.loaded/l.total)},l=>{console.warn(`Could not load GLB from ${o}, trying fallback...`,l),r(a+1)})};r(0)}setXRayRoof(e){this.xrayActive=e;for(let t of this.roofParts)t.mesh.material=e?t.ghostMaterial:t.originalMaterial}setCutawayMode(e){this.cutawayMode=e;let t=e==="downstairs";for(let i of this.topFloorMeshes)i.mesh.visible=!t;this.upstairsFurnitureGroup&&(this.upstairsFurnitureGroup.visible=!t);for(let i of this.cuttableMeshes)(Array.isArray(i.material)?i.material:[i.material]).forEach(r=>{r&&(r.clippingPlanes=t?[this.downstairsClipPlane]:[],r.clipShadows=!0,r.needsUpdate=!0)});for(let[i,n]of Object.entries(this.roomLights))if((n.floor==="first"||n.config?.pos?.y>3)&&(n.container&&(n.container.visible=!t),n.fixture&&(n.fixture.visible=!t),n.shadeMesh&&(n.shadeMesh.visible=!t),n.light)){if(t)n.light.intensity=0;else if(n.isOn){let a=Math.max(.2,Math.min(1,(n.brightness||255)/255)),o=this.nightMode?1.4:1;n.light.intensity=(n.config?.maxIntensity||4)*a*o}}}setCameraPreset(e){let i={overview:{pos:new w(15,12,17),target:new w(2.5,2.5,0),xray:!1},solar:{pos:new w(9.2,2.4,.5),target:new w(5.73,1.75,-.5),xray:!1},meter:{pos:new w(7.2,2.3,.5),target:new w(5.28,1.3,-.85),xray:!0},boiler:{pos:new w(-3.8,3.2,-11.5),target:new w(0,1.4,-8),xray:!0},ev:{pos:new w(7.2,2.2,3.2),target:new w(5.2,.95,1),xray:!1},charger:{pos:new w(7.4,2.2,.4),target:new w(5.2,1.25,.05),xray:!1},downstairs:{pos:new w(2.8,11.5,4.2),target:new w(2.8,.8,-4.5),xray:!1},upstairs:{pos:new w(2.8,11.5,4),target:new w(2.8,3.8,-4.5),xray:!0},heating:{pos:new w(7.8,4.5,-2.5),target:new w(3.4,2.5,-3.5),xray:!0}}[e];i&&(this.targetCameraPos=i.pos.clone(),this.targetLookAt=i.target.clone(),e==="downstairs"?this.setCutawayMode("downstairs"):this.setCutawayMode("normal"),i.xray!==void 0&&i.xray!==this.xrayActive&&e!=="downstairs"&&this.setXRayRoof(i.xray))}updateEnergyData(e){this.currentEnergyData=e,e?.appliances&&this.updateAppliances(e.appliances)}getProjectedHotspots(){let e=this.container.clientWidth||800,t=this.container.clientHeight||500,i=e/2,n=t/2;return this.hotspots.filter(r=>!(this.cutawayMode==="downstairs"&&r.id==="thermostat_upstairs")).map(r=>{let a=r.pos.clone();a.project(this.camera);let o=a.z<1,l=a.x*i+i,c=-(a.y*n)+n;return{id:r.id,name:r.name,x:l,y:c,visible:o}})}onResize(){if(!this.container)return;let e=this.container.clientWidth||800,t=this.container.clientHeight||500;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.css3dRenderer&&this.css3dRenderer.setSize(e,t)}stopCameraAnimation(){(this.targetCameraPos||this.targetLookAt)&&(this.targetCameraPos=null,this.targetLookAt=null,this.onUserCameraInteraction&&this.onUserCameraInteraction())}animate(){if(!this.isRunning)return;requestAnimationFrame(this.animate);let e=this.clock.getDelta();if(this.targetCameraPos&&this.targetLookAt&&(this.camera.position.lerp(this.targetCameraPos,.06),this.controls.target.lerp(this.targetLookAt,.06),this.camera.position.distanceTo(this.targetCameraPos)<.05&&this.controls.target.distanceTo(this.targetLookAt)<.05&&(this.targetCameraPos=null,this.targetLookAt=null)),this.controls.update(),this.energyFlow&&this.energyFlow.update(e,this.currentEnergyData),this.renderer.render(this.scene,this.camera),this.tvCss3dObject)if(this.isTvPlaying){let t=this.camera.position.x<3.38,i=!1;if(t&&this.occludingMeshes&&this.occludingMeshes.length>0){let n=[new w(3.28,1.35,-3.1),new w(3.28,1.35,-2.75),new w(3.28,1.35,-3.45)],r=this.occludingMeshes.filter(o=>o.visible),a=!1;for(let o of n){let l=new w().subVectors(o,this.camera.position),c=l.length();l.normalize(),this.tvRaycaster.set(this.camera.position,l),this.tvRaycaster.near=.1,this.tvRaycaster.far=c;let h=this.tvRaycaster.intersectObjects(r,!1),u=!1;for(let f of h)if(!(this.cutawayMode==="downstairs"&&f.point.y>2.5)&&!(this.xrayActive&&this.roofParts.some(d=>d.mesh===f.object))&&f.distance<c-.35){u=!0;break}if(!u){a=!0;break}}i=!a}this.tvCss3dObject.visible=t&&!i}else this.tvCss3dObject.visible=!1;this.css3dRenderer&&this.css3dScene&&this.css3dRenderer.render(this.css3dScene,this.camera),this.onFrame&&this.onFrame()}destroy(){this.isRunning=!1,this.stopCameraAnimation(),window.removeEventListener("resize",this.handleResize),this.controls?.dispose(),this.tvIframe&&(this.tvIframe.src=""),this.css3dRenderer?.domElement?.parentElement&&this.css3dRenderer.domElement.parentElement.removeChild(this.css3dRenderer.domElement),this.renderer?.domElement?.parentElement&&this.renderer.domElement.parentElement.removeChild(this.renderer.domElement),this.renderer?.dispose()}};function Zs(s){let e=parseFloat(s);return isNaN(e)?0:Math.abs(e)>=20?e/1e3:e}function hf(s){let e=Number(s)||0;return Math.abs(e)<1?`${Math.round(e*1e3)} W`:`${e.toFixed(2)} kW`}function zx(s,e){let t=Math.abs(Number(s)||0),i=e?"Export ":"Import ";if(t<1){let n=Math.round(t*1e3);return`${i}${n} W`}return`${i}${t.toFixed(2)} kW`}function uf(s){let e=Number(s)||0;return Math.abs(e)<1?{value:Math.round(e*1e3).toString(),unit:"W"}:{value:e.toFixed(2),unit:"kW"}}function Gx(s){return uf(s)}function bl(s){let e=Number(s);return isNaN(e)?{label:"Comfortable",color:"#10b981",icon:"\u2728",code:"comfortable"}:e<16?{label:"Cold (<16\xB0C)",color:"#38bdf8",icon:"\u2744\uFE0F",code:"cold"}:e>22?{label:"Hot (>22\xB0C)",color:"#ef4444",icon:"\u{1F525}",code:"hot"}:{label:"Comfortable (16\u201322\xB0C)",color:"#10b981",icon:"\u2728",code:"comfortable"}}var Sl=class{constructor(e,t={}){this.container=e,this.options=t,this.activeTab=null,this.availableEntities=t.availableEntities||[],this.currentSensorConfig=t.currentSensorConfig||{},this.onPresetClick=t.onPresetClick||(()=>{}),this.onToggleXray=t.onToggleXray||(()=>{}),this.onToggleNight=t.onToggleNight||(()=>{}),this.onToggleRotate=t.onToggleRotate||(()=>{}),this.onToggleLight=t.onToggleLight||(()=>{}),this.onToggleTvAudio=t.onToggleTvAudio||(()=>{}),this.onSaveSensors=t.onSaveSensors||(()=>{}),this.customLights=t.customLights||[],this.onSaveCustomLights=t.onSaveCustomLights||(()=>{}),this.onUpdateLightPosition=t.onUpdateLightPosition||(()=>{}),this.onBeaconFocus=t.onBeaconFocus||(()=>{}),this.onBeaconClear=t.onBeaconClear||(()=>{}),this.onEnableClickToPlace=t.onEnableClickToPlace||(()=>{}),this.onDisableClickToPlace=t.onDisableClickToPlace||(()=>{}),this.editingLight=null,this.showTags=!0,this.tagCategories={solar:!0,grid:!0,boiler:!0,ev:!0,thermostats:!0,appliances:!0},this.initDOM()}initDOM(){this.el=document.createElement("div"),this.el.className="ha-energy-hud",this.el.innerHTML=`
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
    `,this.container.appendChild(this.el),this.bindEvents(),this.populateSensorInputs()}bindEvents(){let e=this.el.querySelectorAll("[data-preset]");e.forEach(F=>{F.addEventListener("click",()=>{e.forEach(Me=>Me.classList.remove("active")),F.classList.add("active");let ne=F.getAttribute("data-preset");this.activePreset=ne,this.onPresetClick(ne)})});let t=this.el.querySelector("#btn-xray");t.addEventListener("click",()=>{t.classList.toggle("active"),this.onToggleXray(t.classList.contains("active"))});let i=this.el.querySelector("#btn-night");i.addEventListener("click",()=>{i.classList.toggle("active"),this.onToggleNight(i.classList.contains("active"))});let n=this.el.querySelector("#btn-rotate");n.addEventListener("click",()=>{n.classList.toggle("active"),this.onToggleRotate(n.classList.contains("active"))});let r=this.el.querySelector("#btn-tags-menu"),a=this.el.querySelector("#tags-popover-menu"),o=this.el.querySelector("#btn-tags-menu-close"),l=this.el.querySelector("#chk-tag-all"),c=this.el.querySelectorAll(".chk-tag-cat");r&&a&&(r.addEventListener("click",F=>{F.stopPropagation(),a.classList.toggle("open")}),o&&o.addEventListener("click",F=>{F.stopPropagation(),a.classList.remove("open")}),document.addEventListener("click",F=>{!a.contains(F.target)&&!r.contains(F.target)&&a.classList.remove("open")}),a.addEventListener("click",F=>{F.stopPropagation()}),l&&l.addEventListener("change",()=>{this.showTags=l.checked,r.classList.toggle("active",this.showTags),r.innerHTML=this.showTags?"\u{1F3F7}\uFE0F Tags \u25BE":"\u{1F3F7}\uFE0F Tags (Off) \u25BE",c.forEach(ne=>{ne.checked=this.showTags;let Me=ne.getAttribute("data-tag-cat");Me&&(this.tagCategories[Me]=this.showTags)});let F=this.el.querySelector("#hotspots-container");F&&!this.showTags&&(F.innerHTML="")}),c.forEach(F=>{F.addEventListener("change",()=>{let ne=F.getAttribute("data-tag-cat");ne&&(this.tagCategories[ne]=F.checked);let Me=Object.values(this.tagCategories).some(Boolean);this.showTags=Me,l&&(l.checked=Me),r.classList.toggle("active",this.showTags),r.innerHTML=this.showTags?"\u{1F3F7}\uFE0F Tags \u25BE":"\u{1F3F7}\uFE0F Tags (Off) \u25BE";let K=this.el.querySelector("#hotspots-container");K&&!this.showTags&&(K.innerHTML="")})}));let h=this.el.querySelector("#btn-drawer"),u=this.el.querySelector("#hud-drawer"),f=this.el.querySelector("#drawer-close-btn");h.addEventListener("click",()=>{u.classList.toggle("open"),h.classList.toggle("active",u.classList.contains("open")),u.classList.contains("open")&&!this.activeTab&&this.switchTab("solar")}),f.addEventListener("click",()=>{u.classList.remove("open"),h.classList.remove("active")});let d=this.el.querySelector("#btn-sensors"),g=this.el.querySelector("#sensor-modal"),x=this.el.querySelector("#sensor-modal-close"),m=this.el.querySelector("#btn-save-sensors"),p=this.el.querySelector("#btn-detect-sensors");d.addEventListener("click",()=>{g.classList.toggle("open"),d.classList.toggle("active",g.classList.contains("open"))}),x.addEventListener("click",()=>{g.classList.remove("open"),d.classList.remove("active")}),m.addEventListener("click",()=>{let F=this.readSensorInputs();this.currentSensorConfig=F;try{localStorage.setItem("ha_energy_3d_custom_sensors",JSON.stringify(F))}catch{}this.onSaveSensors(F),g.classList.remove("open"),d.classList.remove("active")}),p.addEventListener("click",()=>{this.autoDetectSensors()}),this.el.querySelectorAll(".btn-entity-browse").forEach(F=>{F.addEventListener("click",ne=>{ne.preventDefault(),ne.stopPropagation();let Me=F.getAttribute("data-target");this.openEntityPicker(Me)})});let E=this.el.querySelector("#entity-picker-dialog"),b=this.el.querySelector("#picker-dialog-close");b&&b.addEventListener("click",()=>{E.classList.remove("open")}),E&&E.addEventListener("click",F=>{F.target===E&&E.classList.remove("open")});let T=this.el.querySelectorAll(".filter-chip");T.forEach(F=>{F.addEventListener("click",()=>{T.forEach(Me=>Me.classList.remove("active")),F.classList.add("active"),this.currentPickerFilter=F.getAttribute("data-filter")||"all";let ne=this.el.querySelector("#picker-search-input")?.value||"";this.renderPickerEntityList(ne,this.currentPickerFilter)})});let A=this.el.querySelector("#picker-search-input");A&&A.addEventListener("input",F=>{this.renderPickerEntityList(F.target.value,this.currentPickerFilter||"all")});let _=this.el.querySelector("#light-customizer-dialog"),M=this.el.querySelector("#light-customizer-close");M&&M.addEventListener("click",()=>{_.classList.remove("open"),this.onBeaconClear(),this.onDisableClickToPlace(),this.el.querySelector("#btn-pick-3d-point")?.classList.remove("active")}),_&&_.addEventListener("click",F=>{F.target===_&&(_.classList.remove("open"),this.onBeaconClear(),this.onDisableClickToPlace(),this.el.querySelector("#btn-pick-3d-point")?.classList.remove("active"))});let N=this.el.querySelector("#floor-btn-ground"),P=this.el.querySelector("#floor-btn-first");N&&P&&(N.addEventListener("click",()=>{N.classList.add("active"),P.classList.remove("active"),this.editingLight&&(this.editingLight.floor="ground")}),P.addEventListener("click",()=>{P.classList.add("active"),N.classList.remove("active"),this.editingLight&&(this.editingLight.floor="first")})),["x","y","z"].forEach(F=>{let ne=this.el.querySelector(`#coord-${F}-slider`),Me=this.el.querySelector(`#coord-${F}-val`);ne&&ne.addEventListener("input",K=>this.onCoordChange(F,K.target.value)),Me&&Me.addEventListener("change",K=>this.onCoordChange(F,K.target.value))}),this.el.querySelectorAll(".coord-step-btn").forEach(F=>{F.addEventListener("click",()=>{let ne=F.getAttribute("data-axis"),Me=parseFloat(F.getAttribute("data-dir")||"1");if(this.editingLight){let K=this.editingLight.pos[ne]||0,me=parseFloat((K+Me*.1).toFixed(2));this.onCoordChange(ne,me)}})});let U=this.el.querySelector("#btn-preset-ceil-down"),X=this.el.querySelector("#btn-preset-ceil-up"),L=this.el.querySelector("#btn-preset-lamp");U&&U.addEventListener("click",()=>this.onCoordChange("y",2.15)),X&&X.addEventListener("click",()=>this.onCoordChange("y",4.55)),L&&L.addEventListener("click",()=>this.onCoordChange("y",1.55));let V=this.el.querySelector("#btn-pick-3d-point");V&&V.addEventListener("click",()=>{V.classList.toggle("active"),V.classList.contains("active")?this.onEnableClickToPlace(F=>{this.onCoordChange("x",F.x),this.onCoordChange("y",F.y),this.onCoordChange("z",F.z)}):this.onDisableClickToPlace()});let G=this.el.querySelectorAll(".color-chip-btn"),W=this.el.querySelector("#custom-light-color-input");G.forEach(F=>{F.addEventListener("click",()=>{let ne=F.getAttribute("data-color"),Me=parseInt(ne.replace("#","0x"),16);this.editingLight&&(this.editingLight.defaultColor=Me),G.forEach(K=>K.classList.remove("active")),F.classList.add("active"),W&&(W.value=ne)})}),W&&W.addEventListener("input",F=>{let ne=parseInt(F.target.value.replace("#","0x"),16);this.editingLight&&(this.editingLight.defaultColor=ne),G.forEach(Me=>Me.classList.remove("active"))});let te=this.el.querySelector("#btn-custom-light-save"),q=this.el.querySelector("#btn-custom-light-delete");te&&te.addEventListener("click",()=>this.saveEditingLight()),q&&q.addEventListener("click",()=>{this.editingLight?.id&&this.deleteLight(this.editingLight.id)}),this.el.querySelectorAll(".drawer-nav-tab").forEach(F=>{F.addEventListener("click",()=>{let ne=F.getAttribute("data-tab");this.switchTab(ne)})})}populateSensorInputs(){let e={};try{e=JSON.parse(localStorage.getItem("ha_energy_3d_custom_sensors")||"{}")}catch{}let t={...this.currentSensorConfig,...e},i=(r,a)=>{let o=this.el.querySelector(r);o&&a&&(o.value=a)};i("#cfg-solax-power",t.solax_power),i("#cfg-solax-today",t.solax_today),i("#cfg-solax-week",t.solax_week),i("#cfg-solax-month",t.solax_month),i("#cfg-solax-year",t.solax_year),i("#cfg-octopus-power",t.octopus_electric_power),i("#cfg-octopus-export",t.octopus_export_power),i("#cfg-octopus-rate",t.octopus_rate),i("#cfg-octopus-spend",t.octopus_monthly_spend),i("#cfg-octopus-30min",t.octopus_electric_30min),i("#cfg-octopus-day",t.octopus_electric_day),i("#cfg-octopus-week",t.octopus_electric_week),i("#cfg-octopus-month",t.octopus_electric_month),i("#cfg-boiler-status",t.boiler_status),i("#cfg-gas-30min",t.octopus_gas_30min),i("#cfg-gas-day",t.octopus_gas_day),i("#cfg-gas-week",t.octopus_gas_week),i("#cfg-gas-month",t.octopus_gas_month),i("#cfg-zappi-power",t.myenergi_power),i("#cfg-zappi-status",t.myenergi_status),i("#cfg-zappi-energy",t.myenergi_energy),i("#cfg-peugeot-battery",t.peugeot_battery),i("#cfg-peugeot-range",t.peugeot_range),i("#cfg-thermostat-downstairs",t.thermostat_downstairs),i("#cfg-thermostat-upstairs",t.thermostat_upstairs),i("#cfg-sensor-fridge",t.sensor_fridge),i("#cfg-sensor-washer",t.sensor_washer),i("#cfg-sensor-tv",t.sensor_tv),i("#cfg-light-living-lamp",t.light_living_lamp);let n=["lounge","kitchen","dining","hallway","wc","master","ensuite","bedroom2","bedroom3","bathroom","landing"];for(let r of n){let a=r==="master"?"master_bedroom":r;i(`#cfg-light-${r}`,t[`light_${a}`]||t.room_lights?.[a]?.entity_id||t.room_lights?.[a])}}readSensorInputs(){let e=t=>{let i=this.el.querySelector(t);return i?i.value.trim():""};return{solax_power:e("#cfg-solax-power"),solax_today:e("#cfg-solax-today"),solax_week:e("#cfg-solax-week"),solax_month:e("#cfg-solax-month"),solax_year:e("#cfg-solax-year"),octopus_electric_power:e("#cfg-octopus-power"),octopus_export_power:e("#cfg-octopus-export"),octopus_rate:e("#cfg-octopus-rate"),octopus_monthly_spend:e("#cfg-octopus-spend"),octopus_electric_30min:e("#cfg-octopus-30min"),octopus_electric_day:e("#cfg-octopus-day"),octopus_electric_week:e("#cfg-octopus-week"),octopus_electric_month:e("#cfg-octopus-month"),boiler_status:e("#cfg-boiler-status"),octopus_gas_30min:e("#cfg-gas-30min"),octopus_gas_day:e("#cfg-gas-day"),octopus_gas_week:e("#cfg-gas-week"),octopus_gas_month:e("#cfg-gas-month"),myenergi_power:e("#cfg-zappi-power"),myenergi_status:e("#cfg-zappi-status"),myenergi_energy:e("#cfg-zappi-energy"),peugeot_battery:e("#cfg-peugeot-battery"),peugeot_range:e("#cfg-peugeot-range"),thermostat_downstairs:e("#cfg-thermostat-downstairs"),thermostat_upstairs:e("#cfg-thermostat-upstairs"),sensor_fridge:e("#cfg-sensor-fridge"),sensor_washer:e("#cfg-sensor-washer"),sensor_tv:e("#cfg-sensor-tv"),light_living_lamp:e("#cfg-light-living-lamp"),light_lounge:e("#cfg-light-lounge"),light_kitchen:e("#cfg-light-kitchen"),light_dining:e("#cfg-light-dining"),light_hallway:e("#cfg-light-hallway"),light_wc:e("#cfg-light-wc"),light_master_bedroom:e("#cfg-light-master"),light_ensuite:e("#cfg-light-ensuite"),light_bedroom2:e("#cfg-light-bedroom2"),light_bedroom3:e("#cfg-light-bedroom3"),light_bathroom:e("#cfg-light-bathroom"),light_landing:e("#cfg-light-landing")}}openEntityPicker(e){this.activePickerTarget=e;let t=this.el.querySelector("#entity-picker-dialog");if(!t)return;let i=this.el.querySelector(e),n=this.el.querySelector("#picker-dialog-title");if(n&&i){let l=i.closest(".sensor-row")?.querySelector("label")?.innerText||"Select Entity";n.innerText=l}let r="all";e.includes("light")?r="light":e.includes("thermostat")?r="climate":e.includes("tv")?r="media_player":(e.includes("power")||e.includes("energy")||e.includes("fridge"))&&(r="sensor"),this.currentPickerFilter=r,this.el.querySelectorAll(".filter-chip").forEach(l=>l.classList.toggle("active",l.getAttribute("data-filter")===r)),t.classList.add("open");let o=this.el.querySelector("#picker-search-input");o&&(o.value="",setTimeout(()=>o.focus(),60)),this.renderPickerEntityList("",r)}renderPickerEntityList(e="",t="all"){let i=this.el.querySelector("#picker-entity-list");if(!i)return;let n=this.availableEntities||[];n.length||(n=["sensor.solax_pv_power_total","sensor.solax_today_s_solar_energy","sensor.solax_feed_in_power","sensor.octopus_home_mini_current_electricity_power","sensor.octopus_energy_electricity_current_rate","sensor.octopus_energy_electricity_current_month_cost","sensor.boiler_status","sensor.octopus_home_mini_gas_30min","sensor.myenergi_zappi_power","sensor.e2008_battery_level","sensor.e2008_battery_range","climate.downstairs","climate.upstairs","sensor.fridge_power","media_player.living_room_tv","light.living_room_lamp","light.living_room","light.kitchen","light.dining_room","light.hallway","light.downstairs_wc","light.master_bedroom","light.ensuite","light.bedroom_2","light.bedroom_3","light.family_bathroom","light.landing"]);let r=e.toLowerCase().trim(),a=n.filter(l=>{let c=(typeof l=="string"?l:l.entity_id||"").toLowerCase(),h=c.split(".")[0]||"";if(t!=="all"){if(t==="media_player"){if(h!=="media_player"&&!c.includes("tv")&&h!=="switch")return!1}else if(t==="climate"){if(h!=="climate"&&!c.includes("thermostat")&&!c.includes("temp"))return!1}else if(h!==t)return!1}return!(r&&!c.includes(r))});if(!a.length){i.innerHTML=`
        <div style="padding: 24px 12px; text-align: center; color: #94a3b8; font-size: 13px;">
          No matching entities found. You can type any entity ID directly into the input field!
        </div>
      `;return}i.innerHTML=a.map(l=>{let c=typeof l=="string"?l:l.entity_id,h=c.split(".")[0]||"sensor";return`
        <div class="entity-item-row" data-entity-id="${c}">
          <div style="display:flex;align-items:center;gap:8px;">
            <span>${h==="light"?"\u{1F4A1}":h==="climate"?"\u{1F321}\uFE0F":h==="switch"?"\u{1F50C}":h==="media_player"?"\u{1F4FA}":"\u{1F4CA}"}</span>
            <span class="entity-item-id">${c}</span>
          </div>
          <span class="entity-item-state">${h}</span>
        </div>
      `}).join(""),i.querySelectorAll(".entity-item-row").forEach(l=>{l.addEventListener("click",()=>{let c=l.getAttribute("data-entity-id");this.selectEntityForTarget(c)})})}selectEntityForTarget(e){if(this.activePickerTarget){let i=this.el.querySelector(this.activePickerTarget);i&&(i.value=e,i.focus(),i.style.borderColor="#10b981",i.style.boxShadow="0 0 10px rgba(16, 185, 129, 0.6)",setTimeout(()=>{i.style.borderColor="",i.style.boxShadow=""},1200))}let t=this.el.querySelector("#entity-picker-dialog");t&&t.classList.remove("open")}setAvailableEntities(e){this.availableEntities=e||[],this.updateDatalist()}updateDatalist(){let e=this.el.querySelector("#ha-entities-datalist");if(!e)return;let t=this.availableEntities.map(i=>typeof i=="string"?i:i.entity_id||"").filter(Boolean);e.innerHTML=t.map(i=>`<option value="${i}"></option>`).join("")}setCustomLights(e){this.customLights=e||[],this.activeTab==="lights"&&this.renderDrawerContent()}clearActivePreset(){this.el.querySelectorAll("[data-preset]").forEach(t=>t.classList.remove("active")),this.activePreset=null}openLightEditor(e=null){let t=this.el.querySelector("#light-customizer-dialog");if(!t)return;if(e){let r=this.customLights.find(a=>a.id===e);if(!r)return;this.editingLight=JSON.parse(JSON.stringify(r)),this.editingLight.isNew=!1,this.el.querySelector("#light-customizer-title").innerText=`\u{1F4A1} Configure & Move: ${this.editingLight.name}`,this.el.querySelector("#btn-custom-light-delete").style.display="block"}else{let r=this.activePreset==="downstairs",a=r?2.15:4.55,o=r?"ground":"first";this.editingLight={id:`light_custom_${Date.now()}`,name:`New Light ${this.customLights.length+1}`,floor:o,pos:{x:2.2,y:a,z:-3.5},range:6.5,maxIntensity:4,defaultColor:16769689,entity_id:"",isNew:!0},this.el.querySelector("#light-customizer-title").innerText="\u2795 Add New 3D Light",this.el.querySelector("#btn-custom-light-delete").style.display="none"}this.el.querySelector("#custom-light-name").value=this.editingLight.name||"";let i=this.editingLight.entity_id||this.currentSensorConfig?.[`light_${this.editingLight.id}`]||(this.editingLight.id==="living_lamp"?this.currentSensorConfig?.light_living_lamp:"")||"";this.el.querySelector("#custom-light-entity").value=i;let n=this.editingLight.floor||(this.editingLight.pos.y>3?"first":"ground");this.el.querySelector("#floor-btn-ground").classList.toggle("active",n==="ground"),this.el.querySelector("#floor-btn-first").classList.toggle("active",n==="first"),this.updateCoordInputs(this.editingLight.pos.x,this.editingLight.pos.y,this.editingLight.pos.z),this.onBeaconFocus(this.editingLight.id,this.editingLight.pos),t.classList.add("open")}updateCoordInputs(e,t,i){let n=(r,a)=>{let o=this.el.querySelector(r);o&&(o.value=a)};n("#coord-x-slider",e),n("#coord-x-val",e),n("#coord-y-slider",t),n("#coord-y-val",t),n("#coord-z-slider",i),n("#coord-z-val",i)}onCoordChange(e,t){if(!this.editingLight)return;let i=parseFloat(t);isNaN(i)||(this.editingLight.pos[e]=i,this.updateCoordInputs(this.editingLight.pos.x,this.editingLight.pos.y,this.editingLight.pos.z),this.onUpdateLightPosition(this.editingLight.id,this.editingLight.pos.x,this.editingLight.pos.y,this.editingLight.pos.z),this.onBeaconFocus(this.editingLight.id,this.editingLight.pos))}saveEditingLight(){if(!this.editingLight)return;this.editingLight.name=this.el.querySelector("#custom-light-name")?.value?.trim()||"Custom Light",this.editingLight.entity_id=this.el.querySelector("#custom-light-entity")?.value?.trim()||"";let e=this.el.querySelector("#floor-btn-first")?.classList.contains("active");if(this.editingLight.floor=e?"first":"ground",this.editingLight.isNew)delete this.editingLight.isNew,this.customLights.push(this.editingLight);else{let t=this.customLights.findIndex(i=>i.id===this.editingLight.id);t!==-1?this.customLights[t]=this.editingLight:this.customLights.push(this.editingLight)}this.onSaveCustomLights(this.customLights),this.onBeaconClear(),this.onDisableClickToPlace(),this.el.querySelector("#btn-pick-3d-point")?.classList.remove("active"),this.el.querySelector("#light-customizer-dialog")?.classList.remove("open"),this.renderDrawerContent()}deleteLight(e){confirm("Are you sure you want to delete this light from the 3D model?")&&(this.customLights=this.customLights.filter(t=>t.id!==e),this.onSaveCustomLights(this.customLights),this.onBeaconClear(),this.onDisableClickToPlace(),this.el.querySelector("#btn-pick-3d-point")?.classList.remove("active"),this.el.querySelector("#light-customizer-dialog")?.classList.remove("open"),this.renderDrawerContent())}autoDetectSensors(){let e=this.availableEntities.map(n=>typeof n=="string"?n:n.entity_id||"");if(!e.length)return;let t=(...n)=>{for(let r of n){let a=e.find(o=>o.toLowerCase().includes(r.toLowerCase()));if(a)return a}return""},i=(n,...r)=>{let a=this.el.querySelector(n);if(a&&!a.value){let o=t(...r);o&&(a.value=o)}};i("#cfg-solax-power","solax_pv_power","solax_power","pv_power","solar_power"),i("#cfg-solax-today","solax_today","solar_today","pv_energy_today"),i("#cfg-solax-week","solax_week","solar_week"),i("#cfg-solax-month","solax_month","solar_month"),i("#cfg-solax-year","solax_year","solar_year"),i("#cfg-octopus-power","home_mini_current_electricity","octopus_electricity_power","grid_power"),i("#cfg-octopus-export","feed_in_power","solax_export","grid_export"),i("#cfg-octopus-rate","electricity_current_rate","octopus_rate","current_rate"),i("#cfg-octopus-spend","electricity_current_month_cost","octopus_month_cost","electricity_cost"),i("#cfg-octopus-30min","home_mini_electricity_30min","electricity_30min"),i("#cfg-octopus-day","electricity_day","octopus_electricity_today"),i("#cfg-octopus-week","electricity_week"),i("#cfg-octopus-month","electricity_month"),i("#cfg-boiler-status","boiler","climate.boiler","switch.boiler","heating"),i("#cfg-gas-30min","home_mini_gas_30min","gas_30min"),i("#cfg-gas-day","gas_day","octopus_gas_today"),i("#cfg-gas-week","gas_week"),i("#cfg-gas-month","gas_month"),i("#cfg-zappi-power","zappi_power","myenergi_power","ev_power","charger_power"),i("#cfg-zappi-status","plug_status","zappi_plug_status","zappi_status","myenergi_status","charger_status"),i("#cfg-zappi-energy","charge_added_session","zappi_energy","zappi_today"),i("#cfg-peugeot-battery","e2008_battery","peugeot_battery","battery_level","soc"),i("#cfg-peugeot-range","e2008_range","peugeot_range","range"),i("#cfg-thermostat-downstairs","climate.downstairs","climate.ground_floor","climate.hallway","climate.living_room","downstairs_temperature"),i("#cfg-thermostat-upstairs","climate.upstairs","climate.first_floor","climate.landing","climate.master_bedroom","upstairs_temperature"),i("#cfg-sensor-fridge","fridge","refrigerator","freezer","fridge_power","kitchen_fridge"),i("#cfg-sensor-washer","washer_power","washing_machine_power","washing_machine","washer","laundry_power","laundry"),i("#cfg-sensor-tv","living_room_tv","lounge_tv","media_player.tv","media_player.living_room","switch.tv"),i("#cfg-light-living-lamp","living_room_lamp","corner_lamp","living_lamp","floor_lamp","standard_lamp","lamp"),i("#cfg-light-lounge","light.living","light.lounge","light.sitting_room","switch.living"),i("#cfg-light-kitchen","light.kitchen","light.kitchen_lights","switch.kitchen"),i("#cfg-light-dining","light.dining","light.dining_room","switch.dining"),i("#cfg-light-hallway","light.hallway","light.hall","light.entrance","switch.hallway"),i("#cfg-light-wc","light.wc","light.cloakroom","light.downstairs_toilet","switch.wc"),i("#cfg-light-master","light.master","light.bedroom_1","light.main_bedroom","switch.master"),i("#cfg-light-ensuite","light.ensuite","light.en_suite","switch.ensuite"),i("#cfg-light-bedroom2","light.bedroom_2","light.bed_2","light.guest_room","switch.bedroom_2"),i("#cfg-light-bedroom3","light.bedroom_3","light.bed_3","light.nursery","light.office","switch.bedroom_3"),i("#cfg-light-bathroom","light.bathroom","light.family_bathroom","switch.bathroom"),i("#cfg-light-landing","light.landing","light.stairs","light.upstairs_hallway","switch.landing")}openDrawerTab(e){let t=this.el.querySelector("#hud-drawer"),i=this.el.querySelector("#btn-drawer");t.classList.add("open"),i.classList.add("active"),this.switchTab(e)}switchTab(e){this.activeTab=e,this.el.querySelectorAll(".drawer-nav-tab").forEach(i=>{i.classList.toggle("active",i.getAttribute("data-tab")===e)}),this.renderDrawerContent()}renderDrawerContent(){let e=this.el.querySelector("#drawer-content"),t=this.lastData;if(t){if(this.activeTab==="solar"){let i=t.solar||{},n=Zs(i.power_kw),r=n>.04,a=Gx(n);e.innerHTML=`
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div class="stat-label">SOLAX LIVE GENERATION</div>
            <div class="stat-val color-solar">${a.value} <span class="stat-unit">${a.unit}</span></div>
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
      `}else if(this.activeTab==="electric"){let i=t.octopus_electric||{},n=Zs(i.power_kw),r=Math.abs(n),a=n<-.02||!!i.is_exporting,o=r>.03,l=uf(r);e.innerHTML=`
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
          <div class="stat-card">
            <div class="stat-label">KITCHEN WASHING MACHINE</div>
            <div class="stat-val" style="color:${t.appliances?.washer?.is_active?"#00f59b":"#94a3b8"};">
              ${t.appliances?.washer?.power_w||0} <span class="stat-unit">W</span>
            </div>
            <div class="stat-subtext">Status: ${t.appliances?.washer?.state||"Standby"}</div>
          </div>
        </div>
      `}else if(this.activeTab==="gas"){let i=t.octopus_gas||{},n=!!(i.is_active&&i.boiler_status==="Heating");e.innerHTML=`
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div class="stat-label">KITCHEN COMBI BOILER</div>
            <div class="stat-val" style="color:${n?"#f97316":"#94a3b8"};">${n?"\u{1F525} Heating":"Standby"}</div>
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
      `}else if(this.activeTab==="ev"){let i=t.ev||{},n=Math.min(Math.max(Number(i.battery_soc_pct||0),0),100),r=Zs(i.charger_power_kw),a=!!i.is_connected,o=!!(i.is_charging&&r>.04&&a),l=i.status_text||(o?`Charging @ ${r.toFixed(1)} kW`:a?"Connected (Idle)":"Disconnected");e.innerHTML=`
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
      `;let c=e.querySelector("#btn-focus-charger");c&&c.addEventListener("click",()=>this.onPresetClick("charger"))}else if(this.activeTab==="heating"){let i=t.thermostats||{},n=i.downstairs||{},r=i.upstairs||{},a=t.octopus_gas||{},o=Number(n.current_temp||20),l=Number(n.target_temp||21),c=!!n.is_heating,h=bl(o),u=Number(r.current_temp||19.5),f=Number(r.target_temp||19.5),d=!!r.is_heating,g=bl(u),x=!!(a.is_active&&a.boiler_status==="Heating");e.innerHTML=`
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
                  Target Setpoint: ${f.toFixed(1)}\xB0C &bull; 
                  <span style="color: ${d?"#f97316":"#94a3b8"}; font-weight: ${d?"700":"normal"};">
                    ${d?"\u{1F525} Calling for Heat":u>=f?"\u2705 Set Temp Reached (Standby)":"\u2744\uFE0F Thermostat Idle / Off"}
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
      `;let m=e.querySelector("#btn-focus-down");m&&m.addEventListener("click",()=>this.onPresetClick("downstairs"));let p=e.querySelector("#btn-focus-up");p&&p.addEventListener("click",()=>this.onPresetClick("upstairs"))}else if(this.activeTab==="lights"){let i=t.room_lights||{},n=this.customLights||[],r="";for(let h of n){let u=i[h.id]||(h.id==="living_lamp"?t.appliances?.living_lamp:{})||{},f=!!(u.is_on||u.state==="on"),d=u.brightness!==void 0?Math.round(u.brightness/255*100):f?100:0,g=h.isFloorLamp||h.name?.toLowerCase().includes("lamp")?"\u{1F6CB}\uFE0F":"\u{1F4A1}",x=h.floor==="first"||h.pos&&h.pos.y>3?"\u{1F6CF}\uFE0F Upstairs":"\u{1F6CB}\uFE0F Downstairs",m=h.pos?`(${h.pos.x.toFixed(1)}, ${h.pos.y.toFixed(1)}, ${h.pos.z.toFixed(1)})`:"",p=h.entity_id||this.currentSensorConfig?.[`light_${h.id}`]||(h.id==="living_lamp"?this.currentSensorConfig?.light_living_lamp:"")||"";r+=`
          <div class="light-card ${f?"active":""}">
            <div class="light-card-top">
              <span class="light-name">${g} ${h.name}</span>
              <span class="light-status-pill ${f?"on":"off"}">${f?"\u{1F4A1} ON":"OFF"}</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; font-size:10px; color:#94a3b8;">
              <span>${x}</span>
              <span style="font-size:9px;">${m}</span>
            </div>
            <div style="font-size:10px; color:#94a3b8; display:flex; justify-content:space-between; align-items:center;">
              <span>${f?`Brightness: ${d}%`:"Light is off"}</span>
              <span style="font-size:9px; color:#64748b; font-family:monospace; max-width:140px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${p||"Manual Toggle"}">
                ${p?`\u{1F517} ${p}`:"\u26AA Manual"}
              </span>
            </div>
            <button class="light-toggle-btn" data-entity="${p}" data-light-id="${h.id}">
              ${f?"Turn Off":"Turn On"}
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
      `,e.querySelectorAll(".light-toggle-btn").forEach(h=>{h.addEventListener("click",()=>{let u=h.getAttribute("data-entity")?.trim(),f=h.getAttribute("data-light-id");if(!f)return;let d=t.room_lights?.[f];f==="living_lamp"&&(d=t.appliances?.living_lamp||d);let x=!!!(d?.is_on||d?.state==="on");t.room_lights?.[f]&&(t.room_lights[f].is_on=x,t.room_lights[f].brightness=x?t.room_lights[f].brightness||255:0),f==="living_lamp"&&t.appliances?.living_lamp&&(t.appliances.living_lamp.is_on=x,t.appliances.living_lamp.brightness=x?t.appliances.living_lamp.brightness||255:0),u&&this.onToggleLight(u),this.options.onToggleRoomLight&&this.options.onToggleRoomLight(f,x),this.renderDrawerContent()})});let o=e.querySelector("#btn-add-light-ui");o&&o.addEventListener("click",()=>{this.openLightEditor(null)}),e.querySelectorAll(".btn-edit-light-coords").forEach(h=>{h.addEventListener("click",()=>{let u=h.getAttribute("data-light-id");this.openLightEditor(u)})}),e.querySelectorAll(".btn-delete-light-item").forEach(h=>{h.addEventListener("click",()=>{let u=h.getAttribute("data-light-id");this.deleteLight(u)})})}}}update(e,t=[]){this.lastData=e;let i=Zs(e.solar?.power_kw),n=Zs(e.octopus_electric?.power_kw),r=Zs(e.ev?.charger_power_kw),a=n<-.02||!!e.octopus_electric?.is_exporting,o=this.el.querySelector("#hdr-solar-kw"),l=this.el.querySelector("#hdr-grid-kw"),c=this.el.querySelector("#hdr-ev-kw"),h=this.el.querySelector("#hdr-gas-val");if(o&&(o.innerText=hf(i)),l&&(l.innerText=zx(n,a),l.className=`hud-flow-val ${a?"color-grid-export":"color-grid-import"}`),c&&(c.innerText=`${r.toFixed(2)} kW`),h){let d=!!(e.octopus_gas?.is_active&&e.octopus_gas?.boiler_status==="Heating");h.innerText=d?"Heating":"Standby",h.style.color=d?"#f97316":"#94a3b8"}let u=this.el.querySelector("#hotspots-container");if(u.innerHTML="",!this.showTags){u.style.display="none",this.el.querySelector("#hud-drawer").classList.contains("open")&&this.renderDrawerContent();return}u.style.display="block";let f={solar:"solar",grid:"grid",boiler:"boiler",ev:"ev",ev_charger:"ev",thermostat_downstairs:"thermostats",thermostat_upstairs:"thermostats",appliance_fridge:"appliances",appliance_washer:"appliances",appliance_tv:"appliances"};for(let d of t){if(!d.visible)continue;let g=f[d.id];if(g&&this.tagCategories&&this.tagCategories[g]===!1)continue;let x="";if(d.id==="solar"){let p=i>.04;x=`<span>\u2600\uFE0F Solax</span> <span class="color-solar">${hf(i)}</span> <span style="font-size:9px;color:${p?"#10b981":"#64748b"}">\u25CF</span>`}else if(d.id==="grid"){let p=Number(e.octopus_electric?.current_rate_p||0).toFixed(1),y=Math.abs(n),E=y<1?`${Math.round(y*1e3)} W`:`${y.toFixed(1)} kW`;x=`<span>\u26A1 Octopus</span> <span class="${a?"color-grid-export":"color-grid-import"}">${a?"Export ":""}${E}</span> <span style="color:#94a3b8">(${p}p)</span>`}else if(d.id==="boiler"){let p=!!(e.octopus_gas?.is_active&&e.octopus_gas?.boiler_status==="Heating");x=`<span>\u{1F525} Boiler</span> <span style="color:${p?"#f97316":"#94a3b8"};font-weight:700;">${p?"Heating":"Standby"}</span>`}else if(d.id==="ev")x=`<span>\u{1F697} Peugeot</span> <span class="color-ev">${e.ev?.battery_soc_pct||68}%</span>`;else if(d.id==="ev_charger"){let p=e.ev||{},y=!!p.is_connected,E=!!(p.is_charging&&y),b=Number(p.charger_power_kw||0),T="Disconnected";E?T=`\u26A1 ${b.toFixed(1)} kW`:y&&(T="Connected"),x=`<span>\u26A1 Zappi</span> <span style="color:${E?"#00f59b":y?"#38bdf8":"#94a3b8"};font-weight:700;">${T}</span>`}else if(d.id==="thermostat_downstairs"){let p=e.thermostats?.downstairs||{},y=Number(p.current_temp||20).toFixed(1),E=!!p.is_heating,b=bl(p.current_temp||20);x=`<span>\u{1F321}\uFE0F Downstairs</span> <span style="color:${b.color};font-weight:700;">${y}\xB0C</span> <span style="font-size:10px;">${b.icon}</span> ${E?'<span style="color:#f97316;font-size:9px;font-weight:700;">HEATING</span>':""}`}else if(d.id==="thermostat_upstairs"){let p=e.thermostats?.upstairs||{},y=Number(p.current_temp||19.5).toFixed(1),E=!!p.is_heating,b=bl(p.current_temp||19.5);x=`<span>\u{1F321}\uFE0F Upstairs</span> <span style="color:${b.color};font-weight:700;">${y}\xB0C</span> <span style="font-size:10px;">${b.icon}</span> ${E?'<span style="color:#f97316;font-size:9px;font-weight:700;">HEATING</span>':""}`}else if(d.id==="appliance_fridge"){let p=e.appliances?.fridge||{},y=p.power_w!==void 0?`${p.power_w} W`:"0 W",E=!!p.is_active;x=`<span>\u{1F9CA} Fridge</span> <span style="color:#38bdf8;font-weight:700;">${y}</span> <span style="font-size:9px;color:${E?"#10b981":"#64748b"}">\u25CF</span>`}else if(d.id==="appliance_washer"){let p=e.appliances?.washer||{},y=!!p.is_active,E=p.power_w!==void 0?`${p.power_w} W`:y?"Running":"0 W";x=`<span>\u{1FAE7} Washer</span> <span style="color:${y?"#00f59b":"#94a3b8"};font-weight:700;">${E}</span> <span style="font-size:9px;color:${y?"#10b981":"#64748b"}">\u25CF</span>`}else if(d.id==="appliance_tv"){let y=!!(e.appliances?.tv||{}).is_on;x=`<span>\u{1F4FA} Living TV</span> <span style="color:${y?"#60a5fa":"#94a3b8"};font-weight:700;">${y?"\u25B6 Playing":"OFF"}</span>`}let m=document.createElement("div");m.className="hotspot-badge",m.style.left=`${d.x}px`,m.style.top=`${d.y}px`,m.innerHTML=x,m.addEventListener("click",p=>{if(d.id==="appliance_tv"){let b=e.appliances?.tv;b?.entity_id?this.onToggleLight(b.entity_id):b&&(b.is_on=!b.is_on,this.updateData(e)),this.onPresetClick("downstairs");return}else if(d.id==="appliance_fridge"){this.openDrawerTab("electric"),this.onPresetClick("downstairs");return}else if(d.id==="appliance_washer"){this.openDrawerTab("electric"),this.onPresetClick("downstairs");return}else if(d.id==="ev_charger"){this.openDrawerTab("ev"),this.onPresetClick("charger");return}let y={solar:"solar",grid:"electric",boiler:"gas",ev:"ev",thermostat_downstairs:"heating",thermostat_upstairs:"heating"},E={thermostat_downstairs:"downstairs",thermostat_upstairs:"upstairs"};this.openDrawerTab(y[d.id]||"solar"),this.onPresetClick(E[d.id]||d.id)}),u.appendChild(m)}this.el.querySelector("#hud-drawer").classList.contains("open")&&this.renderDrawerContent()}};var df={solar:{power_kw:2.85,today_kwh:14.6,week_kwh:86.4,month_kwh:342.1,year_kwh:3820.5,inverter_temp:34.2,status:"Generating"},octopus_electric:{power_kw:.72,is_exporting:!1,current_rate_p:24.85,monthly_spend_gbp:74.2,reading_30min_kwh:.36,day_kwh:8.4,week_kwh:54.2,month_kwh:218.6,tariff_name:"Octopus Flexible / Agile"},octopus_gas:{is_active:!1,power_kw:0,reading_30min_kwh:.72,day_kwh:12.8,week_kwh:78.5,month_kwh:310.2,current_rate_p:6.24,monthly_spend_gbp:38.65,boiler_status:"Standby"},ev:{is_charging:!0,is_connected:!0,status_text:"Charging @ 7.2 kW",is_plugged:!0,charger_power_kw:7.2,energy_added_kwh:22.4,charger_mode:"Eco+",battery_soc_pct:68,range_miles:142,battery_capacity_kwh:50},home:{total_power_kw:2.15},thermostats:{downstairs:{entity_id:"climate.downstairs",current_temp:20.5,target_temp:21,state:"heat",hvac_action:"heating",is_heating:!0},upstairs:{entity_id:"climate.upstairs",current_temp:19.2,target_temp:19.5,state:"heat",hvac_action:"idle",is_heating:!1}},room_lights:{lounge:{is_on:!1,brightness:0,entity_id:""},kitchen:{is_on:!1,brightness:0,entity_id:""},dining:{is_on:!1,brightness:0,entity_id:""},hallway:{is_on:!1,brightness:0,entity_id:""},wc:{is_on:!1,brightness:0,entity_id:""},master_bedroom:{is_on:!1,brightness:0,entity_id:""},ensuite:{is_on:!1,brightness:0,entity_id:""},bedroom2:{is_on:!1,brightness:0,entity_id:""},bedroom3:{is_on:!1,brightness:0,entity_id:""},bathroom:{is_on:!1,brightness:0,entity_id:""},landing:{is_on:!1,brightness:0,entity_id:""},living_lamp:{is_on:!0,brightness:220,entity_id:"light.living_room_lamp"}},appliances:{fridge:{entity_id:"sensor.fridge_power",power_kw:.065,is_active:!0},washer:{entity_id:"sensor.washing_machine_power",power_kw:.45,power_w:450,is_active:!0},tv:{entity_id:"media_player.living_room_tv",is_on:!0,power_kw:.11},living_lamp:{entity_id:"light.living_room_lamp",is_on:!0,brightness:255}}};function mf(s,e=""){let t=parseFloat(s);if(isNaN(t))return 0;let i=(e||"").toLowerCase().trim();return i==="w"||i==="va"||i==="watt"||i==="watts"?t/1e3:i==="kw"||i==="kva"||i==="kilowatt"||i==="kilowatts"?t:Math.abs(t)>=20?t/1e3:t}function Vx(s,e=""){let t=parseFloat(s);if(isNaN(t))return 0;let i=(e||"").toLowerCase().trim();return i==="wh"?t/1e3:i==="kwh"?t:i==="mwh"?t*1e3:Math.abs(t)>=1e3?t/1e3:t}function Wx(s){let e=Number(s);return isNaN(e)?{label:"Comfortable",color:"#10b981",icon:"\u2728",code:"comfortable"}:e<16?{label:"Cold (<16\xB0C)",color:"#38bdf8",icon:"\u2744\uFE0F",code:"cold"}:e>22?{label:"Hot (>22\xB0C)",color:"#ef4444",icon:"\u{1F525}",code:"hot"}:{label:"Comfortable (16\u201322\xB0C)",color:"#10b981",icon:"\u2728",code:"comfortable"}}var kh=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config={},this._hass=null,this.sceneManager=null,this.hud=null,this.energyData=JSON.parse(JSON.stringify(df));try{let e=JSON.parse(localStorage.getItem("ha_energy_3d_custom_sensors")||"{}");this.customSensors=e}catch{this.customSensors={}}try{let e=JSON.parse(localStorage.getItem("ha_energy_3d_custom_lights")||"null");if(e&&Array.isArray(e)&&e.length){let t=new Set(["light.living_room","light.kitchen","light.dining_room","light.downstairs_wc","light.master_bedroom","light.ensuite","light.bedroom_2","light.bedroom_3","light.family_bathroom","light.landing"]);for(let i of e)i.id!=="living_lamp"&&t.has(i.entity_id)&&(i.entity_id=this.customSensors[`light_${i.id}`]||this.customSensors[`light_${i.id==="master_bedroom"?"master":i.id}`]||""),i.id==="living_lamp"&&(i.name==="Living Room Corner Lamp"||!i.name)&&(i.name="Living Room Lamp");this.customLights=e}else this.customLights=JSON.parse(JSON.stringify(vl))}catch{this.customLights=JSON.parse(JSON.stringify(vl))}}static getStubConfig(){return{type:"custom:ha-energy-3d-card",title:"Home Energy 3D",model_url:"Taylor_Wimpey_Blair.glb",height:"560px",solax_power:"sensor.solax_pv_power_total",solax_today:"sensor.solax_today_s_solar_energy",solax_week:"sensor.solax_this_week_solar_energy",solax_month:"sensor.solax_this_month_solar_energy",solax_year:"sensor.solax_this_year_solar_energy",octopus_electric_power:"sensor.octopus_home_mini_current_electricity_power",octopus_export_power:"sensor.solax_feed_in_power",octopus_rate:"sensor.octopus_energy_electricity_current_rate",octopus_monthly_spend:"sensor.octopus_energy_electricity_current_month_cost",octopus_electric_30min:"sensor.octopus_home_mini_electricity_30min",octopus_electric_day:"sensor.octopus_energy_electricity_day",octopus_electric_week:"sensor.octopus_energy_electricity_week",octopus_electric_month:"sensor.octopus_energy_electricity_month",boiler_status:"sensor.boiler_status",octopus_gas_30min:"sensor.octopus_home_mini_gas_30min",octopus_gas_day:"sensor.octopus_energy_gas_day",octopus_gas_week:"sensor.octopus_energy_gas_week",octopus_gas_month:"sensor.octopus_energy_gas_month",octopus_gas_rate:"sensor.octopus_energy_gas_current_rate",octopus_gas_spend:"sensor.octopus_energy_gas_current_month_cost",myenergi_power:"sensor.myenergi_zappi_power",myenergi_status:"sensor.myenergi_zappi_status",myenergi_energy:"sensor.myenergi_zappi_charge_added_session",peugeot_battery:"sensor.e2008_battery_level",peugeot_range:"sensor.e2008_battery_range",thermostat_downstairs:"climate.downstairs",thermostat_upstairs:"climate.upstairs",sensor_fridge:"sensor.fridge_power",sensor_washer:"sensor.washing_machine_power",sensor_tv:"media_player.living_room_tv",light_living_lamp:"light.living_room_lamp",light_lounge:"",light_kitchen:"",light_dining:"",light_hallway:"",light_wc:"",light_master_bedroom:"",light_ensuite:"",light_bedroom2:"",light_bedroom3:"",light_bathroom:"",light_landing:""}}static async getConfigElement(){return await Promise.resolve().then(()=>(pf(),ff)),document.createElement("ha-energy-3d-card-editor")}setConfig(e){this._config={model_url:"Taylor_Wimpey_Blair.glb",height:"560px",night_mode:!1,auto_rotate:!1,...e,...this.customSensors},this.wrapper&&(this.wrapper.style.height=this._config.height)}connectedCallback(){this.sceneManager||this.render()}disconnectedCallback(){this.sceneManager&&(this.sceneManager.destroy(),this.sceneManager=null)}render(){let e=this._config.height||"560px";this.shadowRoot.innerHTML=`
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
    `,this.wrapper=this.shadowRoot.querySelector("#card-container");let t=this.shadowRoot.querySelector("#viewport");this.sceneManager=new yl(t,{modelUrl:this._config.model_url,nightMode:this._config.night_mode,autoRotate:this._config.auto_rotate,customLights:this.customLights}),this.hud=new Sl(this.wrapper,{currentSensorConfig:this._config,customLights:this.customLights,onPresetClick:i=>this.sceneManager.setCameraPreset(i),onToggleXray:i=>this.sceneManager.setXRayRoof(i),onToggleNight:i=>this.sceneManager.setNightMode(i),onToggleRotate:i=>{this.sceneManager.controls.autoRotate=i},onToggleLight:i=>this.toggleLightEntity(i),onToggleRoomLight:(i,n)=>{this.energyData.room_lights||(this.energyData.room_lights={}),this.energyData.room_lights[i]?(this.energyData.room_lights[i].is_on=n,this.energyData.room_lights[i].brightness=n?this.energyData.room_lights[i].brightness||255:0):this.energyData.room_lights[i]={entity_id:"",is_on:n,brightness:n?255:0,rgb_color:null},i==="living_lamp"&&(this.energyData.appliances||(this.energyData.appliances={}),this.energyData.appliances.living_lamp=this.energyData.room_lights[i]),this.sceneManager&&this.sceneManager.updateRoomLights(this.energyData.room_lights)},onToggleTvAudio:()=>this.sceneManager.toggleTvAudio(),onSaveSensors:i=>{this.customSensors=i,this._config={...this._config,...i};for(let n of this.customLights){let r=i[`light_${n.id}`];r===void 0&&n.id==="master_bedroom"&&(r=i.light_master_bedroom||i.light_master),r===void 0&&n.id==="living_lamp"&&(r=i.light_living_lamp),r!==void 0&&(n.entity_id=r)}try{localStorage.setItem("ha_energy_3d_custom_lights",JSON.stringify(this.customLights))}catch{}this.sceneManager.rebuildCustomLights(this.customLights),this.updateStatesFromHass(),this.hud&&(this.hud.setCustomLights(this.customLights),this.hud.renderDrawerContent())},onSaveCustomLights:i=>{this.customLights=i;try{localStorage.setItem("ha_energy_3d_custom_lights",JSON.stringify(i))}catch{}for(let n of i)n.id==="living_lamp"?(this.customSensors.light_living_lamp=n.entity_id||"",this._config.light_living_lamp=n.entity_id||""):(this.customSensors[`light_${n.id}`]=n.entity_id||"",this._config[`light_${n.id}`]=n.entity_id||"",n.id==="master_bedroom"&&(this.customSensors.light_master=n.entity_id||"",this._config.light_master=n.entity_id||""));try{localStorage.setItem("ha_energy_3d_custom_sensors",JSON.stringify(this.customSensors))}catch{}this.sceneManager.rebuildCustomLights(i),this.updateStatesFromHass()},onUpdateLightPosition:(i,n,r,a)=>{this.sceneManager.updateLightPosition(i,n,r,a)},onBeaconFocus:(i,n)=>{this.sceneManager.setEditingLightBeacon(i,n)},onBeaconClear:()=>{this.sceneManager.clearEditingLightBeacon()},onEnableClickToPlace:i=>{this.sceneManager.enableClickToPlace(i)},onDisableClickToPlace:()=>{this.sceneManager.disableClickToPlace()}}),this.sceneManager.onFrame=()=>{let i=this.sceneManager.getProjectedHotspots();this.hud.update(this.energyData,i)},this.sceneManager.onUserCameraInteraction=()=>{this.hud&&this.hud.clearActivePreset()},this._hass&&this.updateStatesFromHass()}set hass(e){this._hass=e,this.hud&&e?.states&&this.hud.setAvailableEntities(Object.keys(e.states)),this.updateStatesFromHass()}getPowerInKw(e,t=0){if(!this._hass||!e)return t;let i=this._hass.states[e];if(!i||i.state==="unavailable"||i.state==="unknown")return 0;let n=i.attributes?.unit_of_measurement||"";return mf(i.state,n)}getEnergyInKwh(e,t=0){if(!this._hass||!e)return t;let i=this._hass.states[e];if(!i||i.state==="unavailable"||i.state==="unknown")return 0;let n=i.attributes?.unit_of_measurement||"";return Vx(i.state,n)}getEntityNumericValue(e,t=0){if(!this._hass||!e)return t;let i=this._hass.states[e];if(!i||i.state==="unavailable"||i.state==="unknown")return 0;let n=parseFloat(i.state);return isNaN(n)?t:n}getEntityState(e,t=""){if(!this._hass||!e)return t;let i=this._hass.states[e];return!i||i.state==="unavailable"||i.state==="unknown"?t:i.state}updateStatesFromHass(){if(!this._hass)return;let e={...this._config,...this.customSensors},t=this.getPowerInKw(e.solax_power,this.energyData.solar.power_kw);this.energyData.solar={power_kw:t,today_kwh:this.getEnergyInKwh(e.solax_today,this.energyData.solar.today_kwh),week_kwh:this.getEnergyInKwh(e.solax_week,this.energyData.solar.week_kwh),month_kwh:this.getEnergyInKwh(e.solax_month,this.energyData.solar.month_kwh),year_kwh:this.getEnergyInKwh(e.solax_year,this.energyData.solar.year_kwh),status:t>.04?"Generating":"Idle"};let i=this.getPowerInKw(e.octopus_electric_power,this.energyData.octopus_electric.power_kw),n=this.getPowerInKw(e.octopus_export_power,0),r=!1;i<-.02?r=!0:i>.02?r=!1:n>.04&&(i=-n,r=!0),this.energyData.octopus_electric={power_kw:i,is_exporting:r,current_rate_p:this.getEntityNumericValue(e.octopus_rate,this.energyData.octopus_electric.current_rate_p),monthly_spend_gbp:this.getEntityNumericValue(e.octopus_monthly_spend,this.energyData.octopus_electric.monthly_spend_gbp),reading_30min_kwh:this.getEnergyInKwh(e.octopus_electric_30min,this.energyData.octopus_electric.reading_30min_kwh),day_kwh:this.getEnergyInKwh(e.octopus_electric_day,this.energyData.octopus_electric.day_kwh),week_kwh:this.getEnergyInKwh(e.octopus_electric_week,this.energyData.octopus_electric.week_kwh),month_kwh:this.getEnergyInKwh(e.octopus_electric_month,this.energyData.octopus_electric.month_kwh)};let a=this.getThermostatState(e.thermostat_downstairs,this.energyData.thermostats?.downstairs),o=this.getThermostatState(e.thermostat_upstairs,this.energyData.thermostats?.upstairs);this.energyData.thermostats={downstairs:a,upstairs:o};let l=!1,c=!!(e.thermostat_downstairs&&this._hass?.states?.[e.thermostat_downstairs]),h=!!(e.thermostat_upstairs&&this._hass?.states?.[e.thermostat_upstairs]),u=c||h,f=!!(c&&a.is_heating||h&&o.is_heating||!u&&(a.is_heating||o.is_heating));if(u)if(e.boiler_status&&this._hass?.states?.[e.boiler_status]){let F=(this._hass.states[e.boiler_status].state||"").toLowerCase().trim();["standby","idle","off","ready","waiting","0","false"].includes(F)?l=!1:F==="hot water"||F==="hot_water"?l=!0:l=f}else l=f;else if(e.boiler_status&&this._hass?.states?.[e.boiler_status]){let Y=this._hass.states[e.boiler_status],F=(Y.state||"").toLowerCase().trim(),ne=Y.attributes||{},Me=["heating","heat","firing","on","central heating","hot water","active"],K=["standby","idle","off","ready","waiting","0","false"];if(Me.includes(F)||ne.hvac_action==="heating"||ne.is_heating===!0)l=!0;else if(K.includes(F))l=!1;else{let me=parseFloat(F);l=isNaN(me)?!1:me>.05}}else l=!!(a.is_heating||o.is_heating);let d=l?"Heating":"Standby";this.energyData.octopus_gas={is_active:l,power_kw:l?1.45:0,boiler_status:d,reading_30min_kwh:this.getEnergyInKwh(e.octopus_gas_30min,this.energyData.octopus_gas.reading_30min_kwh),day_kwh:this.getEnergyInKwh(e.octopus_gas_day,this.energyData.octopus_gas.day_kwh),week_kwh:this.getEnergyInKwh(e.octopus_gas_week,this.energyData.octopus_gas.week_kwh),month_kwh:this.getEnergyInKwh(e.octopus_gas_month,this.energyData.octopus_gas.month_kwh),current_rate_p:this.getEntityNumericValue(e.octopus_gas_rate,this.energyData.octopus_gas.current_rate_p),monthly_spend_gbp:this.getEntityNumericValue(e.octopus_gas_spend,this.energyData.octopus_gas.monthly_spend_gbp)};let g=this.getPowerInKw(e.myenergi_power,this.energyData.ev.charger_power_kw),x=e.myenergi_status;if((!x||!this._hass?.states?.[x])&&this._hass?.states){let Y=Object.keys(this._hass.states).find(F=>(F.includes("zappi")||F.includes("myenergi"))&&(F.includes("plug_status")||F.includes("status")));Y&&(x=Y)}let m=this.getEntityState(x,"").toLowerCase().trim(),p=!1,y="Disconnected";m?m.includes("disconn")||m.includes("unplug")||m==="off"||m==="unavailable"||m==="unknown"?(p=!1,y="Disconnected"):m.includes("charg")?(p=!0,y="Charging"):m.includes("connect")||m.includes("wait")||m.includes("pause")||m.includes("plug")||m.includes("complete")||m.includes("stop")?(p=!0,y="Connected (Idle)"):(p=g>.04,y=p?m.charAt(0).toUpperCase()+m.slice(1):"Disconnected"):g>.04?(p=!0,y="Charging"):(p=!1,y="Disconnected");let E=p&&g>.04;E&&(y=`Charging @ ${g.toFixed(1)} kW`),this.energyData.ev={is_charging:E,is_connected:p,status_text:y,charger_power_kw:p?g:0,energy_added_kwh:this.getEnergyInKwh(e.myenergi_energy,this.energyData.ev.energy_added_kwh),charger_mode:g>3?"Fast":"Eco+",battery_soc_pct:this.getEntityNumericValue(e.peugeot_battery,this.energyData.ev.battery_soc_pct),range_miles:this.getEntityNumericValue(e.peugeot_range,this.energyData.ev.range_miles)};let b={};for(let Y of this.customLights){let F=e[`light_${Y.id}`];if(F===void 0&&Y.id==="master_bedroom"&&(F=e.light_master_bedroom||e.light_master),F===void 0&&Y.id==="living_lamp"&&(F=e.light_living_lamp),!F&&Y.entity_id&&(F=Y.entity_id),!F&&this._hass?.states){let ne=[`light.${Y.id}`,`switch.${Y.id}`,`light.${Y.id.replace("_bedroom","")}`,`light.${Y.id.replace("bedroom","bed_")}`];for(let Me of ne)if(this._hass.states[Me]){F=Me;break}}b[Y.id]=this.getLightState(F,this.energyData.room_lights?.[Y.id])}this.energyData.room_lights=b;let T=e.sensor_fridge&&this._hass?this._hass.states[e.sensor_fridge]:null,A=(T?T.state:this.getEntityState(e.sensor_fridge,"")).toLowerCase(),_=T&&(A==="unavailable"||A==="unknown"),M=0;_?M=0:M=this.getPowerInKw(e.sensor_fridge,this.energyData.appliances?.fridge?.power_kw??.085);let N=!_&&(M>.005||A==="on"),P=e.sensor_tv&&this._hass?this._hass.states[e.sensor_tv]:null,D=!1,U=0;if(P){let Y=P.state;D=Y==="on"||Y==="playing"||Y==="paused"||Y==="idle",P.attributes?.unit_of_measurement?(U=mf(Y,P.attributes.unit_of_measurement),D=U>.015):U=D?.095:.001}else this.energyData.appliances?.tv&&(D=!!this.energyData.appliances.tv.is_on,U=this.energyData.appliances.tv.power_kw);let X=e.sensor_washer&&this._hass?this._hass.states[e.sensor_washer]:null,L=(X?X.state:this.getEntityState(e.sensor_washer,"")).toLowerCase(),V=X&&(L==="unavailable"||L==="unknown"),G=0;V?G=0:G=this.getPowerInKw(e.sensor_washer,this.energyData.appliances?.washer?.power_kw??0);let W=!V&&(G>.01||L==="on"||L==="running"),te=e.light_living_lamp||this.customLights.find(Y=>Y.id==="living_lamp"||Y.name?.toLowerCase().includes("corner lamp"))?.entity_id,q=this.getLightState(te,this.energyData.appliances?.living_lamp);this.energyData.appliances={fridge:{entity_id:e.sensor_fridge||"",power_kw:M,power_w:_?0:Math.round(M*1e3),is_active:N,state:_?"Unavailable":N?"Running":"Standby"},washer:{entity_id:e.sensor_washer||"",power_kw:G,power_w:V?0:Math.round(G*1e3),is_active:W,state:V?"Unavailable":W?"Running":"Standby"},tv:{entity_id:e.sensor_tv||"",is_on:D,power_kw:U,power_w:Math.round(U*1e3),state:D?"On":"Standby"},living_lamp:q},this.sceneManager&&(this.sceneManager.updateEnergyData(this.energyData),this.sceneManager.updateRoomLights(b),this.sceneManager.updateAppliances(this.energyData.appliances))}getThermostatState(e,t={}){let i={entity_id:e||t?.entity_id||"",current_temp:t?.current_temp??20,target_temp:t?.target_temp??21,hvac_action:t?.hvac_action||"idle",is_heating:t?.is_heating||!1,state:t?.state||"heat"};if(!this._hass||!e)return i;let n=this._hass.states[e];if(!n||n.state==="unavailable"||n.state==="unknown")return i;i.state=n.state;let r=n.attributes||{};if(r.current_temperature!==void 0)i.current_temp=parseFloat(r.current_temperature);else{let g=parseFloat(n.state);isNaN(g)||(i.current_temp=g)}r.temperature!==void 0?i.target_temp=parseFloat(r.temperature):r.target_temp_high!==void 0&&(i.target_temp=parseFloat(r.target_temp_high));let a=(n.state||"").toLowerCase().trim(),o=a==="off"||a==="standby"||a==="idle",l=!o&&(a==="heat"||a==="heating"||a==="auto"||a==="on"||a==="boost"||a==="comfort"||a===""),c=i.target_temp!==null&&!isNaN(i.target_temp),h=i.current_temp!==null&&!isNaN(i.current_temp),u=(r.hvac_action||"").toLowerCase().trim(),f=c&&h&&i.current_temp>=i.target_temp,d=!1;return!o&&l?c&&h?f?d=!1:d=u!=="idle"&&u!=="off":d=u==="heating"||a==="heating":d=!1,i.is_heating=d,i.hvac_action=d?"heating":o?"off":"idle",i.comfort=Wx(i.current_temp),i}getLightState(e,t={}){let i=(e||"").trim(),n=!!(t?.is_on||t?.state==="on"),r=t?.brightness!==void 0?t.brightness:n?255:0,a=t?.rgb_color||null,o={entity_id:i,is_on:n,brightness:r,rgb_color:a};if(!i||!this._hass)return o;let l=this._hass.states[i];if(!l)return o;if(l.state==="unavailable"||l.state==="unknown")return o.is_on=!1,o.brightness=0,o;o.is_on=l.state==="on";let c=l.attributes||{};return o.brightness=c.brightness!==void 0?c.brightness:o.is_on?255:0,c.rgb_color&&Array.isArray(c.rgb_color)&&(o.rgb_color=c.rgb_color),o}toggleLightEntity(e){if(!this._hass||!e)return;let t=e.split(".")[0]||"light";try{this._hass.callService(t,"toggle",{entity_id:e})}catch(i){console.warn("Call service error:",i)}}getCardSize(){return 8}};customElements.define("ha-energy-3d-card",kh);window.customCards=window.customCards||[];window.customCards.push({type:"ha-energy-3d-card",name:"Home Energy 3D Card",description:"Interactive 3D Energy Flow Card for Solax Solar, Octopus Energy, myenergi Zappi, and Peugeot EV",preview:!0});export{kh as HaEnergy3DCard,mf as autoFigureKw,Vx as autoFigureKwh,Wx as getComfortStatus};
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
