var mf=Object.defineProperty;var gf=(s,e,t)=>()=>{if(t)throw t[0];try{return s&&(e=s(s=0)),e}catch(i){throw t=[i],i}};var _f=(s,e)=>{for(var t in e)mf(s,t,{get:e[t],enumerable:!0})};var ff={};_f(ff,{HaEnergy3DCardEditor:()=>Sl});var Sl,pf=gf(()=>{Sl=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config={}}setConfig(e){this._config=e,this.render()}set hass(e){this._hass=e}render(){let e=this._config;this.shadowRoot.innerHTML=`
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
            <input type="text" data-key="solax_power" value="${e.solax_power||"sensor.solax_snm9wncrqy_ac_output_power"}">
          </div>
          <div class="input-row">
            <label>Today Solar Energy (kWh)</label>
            <input type="text" data-key="solax_today" value="${e.solax_today||"sensor.solax_snm9wncrqy_today_s_generated_energy"}">
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
            <label>Total / Year Solar (kWh)</label>
            <input type="text" data-key="solax_year" value="${e.solax_year||"sensor.solax_snm9wncrqy_total_generated_energy"}">
          </div>
        </div>

        <div class="section-title">\u26A1 Octopus Electricity & Grid</div>
        <div class="grid-2">
          <div class="input-row">
            <label>Live Electric Power / Demand (kW/W)</label>
            <input type="text" data-key="octopus_electric_power" value="${e.octopus_electric_power||"sensor.octopus_energy_electricity_22l3956422_3200000391421_current_demand"}">
          </div>
          <div class="input-row">
            <label>Feed-In Export Power (kW)</label>
            <input type="text" data-key="octopus_export_power" value="${e.octopus_export_power||"sensor.solax_snm9wncrqy_exported_power"}">
          </div>
          <div class="input-row">
            <label>Electricity Unit Rate (p/kWh or GBP)</label>
            <input type="text" data-key="octopus_rate" value="${e.octopus_rate||"sensor.octopus_energy_electricity_22l3956422_3200000391421_current_rate"}">
          </div>
          <div class="input-row">
            <label>Month Spend (\xA3)</label>
            <input type="text" data-key="octopus_monthly_spend" value="${e.octopus_monthly_spend||"sensor.octopus_energy_electricity_22l3956422_3200000391421_current_accumulative_cost"}">
          </div>
          <div class="input-row">
            <label>Electricity Accumulative / 30-Min (kWh)</label>
            <input type="text" data-key="octopus_electric_30min" value="${e.octopus_electric_30min||"sensor.octopus_energy_electricity_22l3956422_3200000391421_current_accumulative_consumption"}">
          </div>
          <div class="input-row">
            <label>Electricity Day (kWh)</label>
            <input type="text" data-key="octopus_electric_day" value="${e.octopus_electric_day||"sensor.octopus_energy_electricity_22l3956422_3200000391421_current_accumulative_consumption"}">
          </div>
          <div class="input-row">
            <label>Electricity Week (kWh)</label>
            <input type="text" data-key="octopus_electric_week" value="${e.octopus_electric_week||"sensor.octopus_energy_electricity_week"}">
          </div>
          <div class="input-row">
            <label>Electricity Month (kWh)</label>
            <input type="text" data-key="octopus_electric_month" value="${e.octopus_energy_electricity_month||""}">
          </div>
        </div>

        <div class="section-title">\u{1F525} Octopus Gas & Kitchen Boiler</div>
        <div class="grid-2">
          <div class="input-row">
            <label>Boiler Status (switch/climate)</label>
            <input type="text" data-key="boiler_status" value="${e.boiler_status||"sensor.boiler_status"}">
          </div>
          <div class="input-row">
            <label>Gas Accumulative (kWh)</label>
            <input type="text" data-key="octopus_gas_30min" value="${e.octopus_gas_30min||"sensor.octopus_energy_gas_e6s18975782161_7756751506_current_accumulative_consumption_kwh"}">
          </div>
          <div class="input-row">
            <label>Gas Day (kWh)</label>
            <input type="text" data-key="octopus_gas_day" value="${e.octopus_gas_day||"sensor.octopus_energy_gas_e6s18975782161_7756751506_current_accumulative_consumption_kwh"}">
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
            <label>Gas Unit Rate (p/kWh or GBP)</label>
            <input type="text" data-key="octopus_gas_rate" value="${e.octopus_gas_rate||"sensor.octopus_energy_gas_e6s18975782161_7756751506_current_rate"}">
          </div>
          <div class="input-row">
            <label>Gas Month Spend (\xA3)</label>
            <input type="text" data-key="octopus_gas_spend" value="${e.octopus_gas_spend||"sensor.octopus_energy_gas_e6s18975782161_7756751506_current_accumulative_cost"}">
          </div>
        </div>

        <div class="section-title">\u{1F697} myenergi Zappi & Peugeot e-2008</div>
        <div class="grid-2">
          <div class="input-row">
            <label>Zappi Charging Power (kW)</label>
            <input type="text" data-key="myenergi_power" value="${e.myenergi_power||"sensor.myenergi_zappi_30084500_internal_load_ct1"}">
          </div>
          <div class="input-row">
            <label>Zappi Connection Status</label>
            <input type="text" data-key="myenergi_status" value="${e.myenergi_status||"sensor.myenergi_zappi_30084500_plug_status"}">
          </div>
          <div class="input-row">
            <label>Zappi Session Energy (kWh)</label>
            <input type="text" data-key="myenergi_energy" value="${e.myenergi_energy||"sensor.myenergi_zappi_30084500_charge_added_session"}">
          </div>
          <div class="input-row">
            <label>Peugeot Battery SoC (%)</label>
            <input type="text" data-key="peugeot_battery" value="${e.peugeot_battery||"sensor.vr3ukzkxzmj557948_battery"}">
          </div>
          <div class="input-row">
            <label>Peugeot Remaining Range (miles/km)</label>
            <input type="text" data-key="peugeot_range" value="${e.peugeot_range||"sensor.vr3ukzkxzmj557948_autonomy"}">
          </div>
          <div class="input-row">
            <label>Peugeot Wakeup Button</label>
            <input type="text" data-key="peugeot_wakeup" value="${e.peugeot_wakeup||"button.vr3ukzkxzmj557948_wakeup"}">
          </div>
        </div>

        <div class="section-title">\u{1F321}\uFE0F Heating & Thermostats</div>
        <div class="grid-2">
          <div class="input-row">
            <label>Downstairs Thermostat (climate/sensor)</label>
            <input type="text" data-key="thermostat_downstairs" value="${e.thermostat_downstairs||"climate.tado_x_downstairs"}">
          </div>
          <div class="input-row">
            <label>Upstairs Thermostat (climate/sensor)</label>
            <input type="text" data-key="thermostat_upstairs" value="${e.thermostat_upstairs||"climate.smart_thermostat_x"}">
          </div>
        </div>

        <div class="section-title">\u{1F37D}\uFE0F Appliances & Living Room Devices</div>
        <div class="grid-2">
          <div class="input-row">
            <label>Kitchen Fridge Freezer Power</label>
            <input type="text" data-key="sensor_fridge" value="${e.sensor_fridge||"sensor.refrigerator_power"}">
          </div>
          <div class="input-row">
            <label>Kitchen Washing Machine Energy/Power</label>
            <input type="text" data-key="sensor_washer" value="${e.sensor_washer||"sensor.kitchen_washing_machine_daily_energy"}">
          </div>
          <div class="input-row">
            <label>Living Room TV Plug (power sensor / wattage)</label>
            <input type="text" data-key="sensor_tv" value="${e.sensor_tv||"sensor.living_room_tv_plug_power"}">
          </div>
        </div>

        <div class="section-title">\u{1F4A1} Room Lights & Lamps</div>
        <div class="grid-2">
          <div class="input-row">
            <label>Living Room / Lounge Ceiling</label>
            <input type="text" data-key="light_lounge" value="${e.light_lounge||"light.living_room_living_room_light"}" placeholder="e.g. light.living_room_living_room_light">
          </div>
          <div class="input-row">
            <label>Living Room Lamp</label>
            <input type="text" data-key="light_living_lamp" value="${e.light_living_lamp||"light.living_room_lamp"}" placeholder="e.g. light.living_room_lamp">
          </div>
          <div class="input-row">
            <label>Kitchen</label>
            <input type="text" data-key="light_kitchen" value="${e.light_kitchen||"light.kitchen_light"}" placeholder="e.g. light.kitchen_light">
          </div>
          <div class="input-row">
            <label>Dining Room</label>
            <input type="text" data-key="light_dining" value="${e.light_dining||""}" placeholder="e.g. light.dining_room">
          </div>
          <div class="input-row">
            <label>Entrance Hall & Stairs</label>
            <input type="text" data-key="light_hallway" value="${e.light_hallway||"light.downstairs_hallway"}" placeholder="e.g. light.downstairs_hallway">
          </div>
          <div class="input-row">
            <label>Downstairs WC</label>
            <input type="text" data-key="light_wc" value="${e.light_wc||""}" placeholder="e.g. light.downstairs_wc">
          </div>
          <div class="input-row">
            <label>Master Bedroom</label>
            <input type="text" data-key="light_master_bedroom" value="${e.light_master_bedroom||"light.bedroom_bedroom_light"}" placeholder="e.g. light.bedroom_bedroom_light">
          </div>
          <div class="input-row">
            <label>Master En-Suite</label>
            <input type="text" data-key="light_ensuite" value="${e.light_ensuite||"light.en_suite_light"}" placeholder="e.g. light.en_suite_light">
          </div>
          <div class="input-row">
            <label>Bedroom 2 (Guestroom)</label>
            <input type="text" data-key="light_bedroom2" value="${e.light_bedroom2||"light.guest_room_guest_room_light"}" placeholder="e.g. light.guest_room_guest_room_light">
          </div>
          <div class="input-row">
            <label>Bedroom 3 (Nursery / Office)</label>
            <input type="text" data-key="light_bedroom3" value="${e.light_bedroom3||"light.office_nursey_light"}" placeholder="e.g. light.office_nursey_light">
          </div>
          <div class="input-row">
            <label>Family Bathroom</label>
            <input type="text" data-key="light_bathroom" value="${e.light_bathroom||"light.bathroom_light"}" placeholder="e.g. light.bathroom_light">
          </div>
          <div class="input-row">
            <label>Upstairs Landing</label>
            <input type="text" data-key="light_landing" value="${e.light_landing||"light.upstairs_hallway"}" placeholder="e.g. light.upstairs_hallway">
          </div>
        </div>
      </div>
    `,this.shadowRoot.querySelectorAll("input").forEach(i=>{i.addEventListener("change",n=>{let r=n.target.getAttribute("data-key"),a=n.target.value,o={...this._config,[r]:a},l=new CustomEvent("config-changed",{detail:{config:o},bubbles:!0,composed:!0});this.dispatchEvent(l)})})}};customElements.define("ha-energy-3d-card-editor",Sl)});var Pn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},In={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Iu=0,uc=1,Du=2;var Kr=1,xo=2,Gs=3,Xi=0,ri=1,kt=2,$n=0,Vs=1,Ws=2,dc=3,fc=4,Nu=5;var Kn=100,Ou=101,Fu=102,Uu=103,Bu=104,ku=200,Hu=201,zu=202,Gu=203,pc=204,mc=205,Vu=206,Wu=207,Xu=208,qu=209,Yu=210,$u=211,Ku=212,Zu=213,Ju=214,Ha=0,za=1,Ga=2,bs=3,Va=4,Wa=5,Xa=6,qa=7,gc=0,ju=1,Qu=2,qi=0,_c=1,yc=2,xc=3,Zr=4,vc=5,bc=6,wc=7,jl="attached",ed="detached",Sc=300,Zn=301,Xs=302,qs=303,vo=304,Pi=1e3,yi=1001,ws=1002,Dt=1003,bo=1004;var Jn=1005;var Gt=1006,Ys=1007;var wi=1008;var hi=1009,Mc=1010,Ec=1011,$s=1012,wo=1013,Oi=1014,gi=1015,Fi=1016,So=1017,Mo=1018,jn=1020,Tc=35902,Ac=35899,Rc=1021,Cc=1022,Si=1023,ln=1026,yn=1027,Eo=1028,To=1029,Dn=1030,Ao=1031;var Ro=1033,Jr=33776,jr=33777,Qr=33778,ea=33779,Co=35840,Lo=35841,Po=35842,Io=35843,Do=36196,No=37492,Oo=37496,Fo=37488,Uo=37489,ta=37490,Bo=37491,ko=37808,Ho=37809,zo=37810,Go=37811,Vo=37812,Wo=37813,Xo=37814,qo=37815,Yo=37816,$o=37817,Ko=37818,Zo=37819,Jo=37820,jo=37821,Qo=36492,el=36494,tl=36495,il=36283,nl=36284,ia=36285,sl=36286;var Gn=2300,Vn=2301,Ba=2302,Ql=2303,ec=2400,tc=2401,ic=2402,td=2500;var Lc=0,na=1,Ks=2,id=3200;var rl=0,nd=1,xn="",Ht="srgb",si="srgb-linear",br="linear",mt="srgb";var ka=7680;var sd=519,rd=512,ad=513,od=514,Pc=515,ld=516,cd=517,Ic=518,Dc=519,Nc=35044,Oc=35048;var Fc="300 es",xi=2e3,Ss=2001;function yf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function xf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ms(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function hd(){let s=Ms("canvas");return s.style.display="block",s}var zh={},Es=null;function wr(...s){let e="THREE."+s.shift();Es?Es("log",e,...s):console.log(e,...s)}function ud(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Be(...s){s=ud(s);let e="THREE."+s.shift();if(Es)Es("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Xe(...s){s=ud(s);let e="THREE."+s.shift();if(Es)Es("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function zn(...s){let e=s.join(" ");e in zh||(zh[e]=!0,Be(...s))}function dd(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var fd={[Ha]:Ha,[Ga]:Xa,[Va]:Va,[bs]:Wa,[za]:za,[Xa]:Ga,[qa]:qa,[Wa]:bs},Ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gh=1234567,_r=Math.PI/180,Wn=180/Math.PI;function Yi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[s&255]+Qt[s>>8&255]+Qt[s>>16&255]+Qt[s>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function je(s,e,t){return Math.max(e,Math.min(t,s))}function Uc(s,e){return(s%e+e)%e}function vf(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function bf(s,e,t){return s!==e?(t-s)/(e-s):0}function yr(s,e,t){return(1-t)*s+t*e}function wf(s,e,t,i){return yr(s,e,1-Math.exp(-t*i))}function Sf(s,e=1){return e-Math.abs(Uc(s,e*2)-e)}function Mf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ef(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Tf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Af(s,e){return s+Math.random()*(e-s)}function Rf(s){return s*(.5-Math.random())}function Cf(s){s!==void 0&&(Gh=s);let e=Gh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lf(s){return s*_r}function Pf(s){return s*Wn}function If(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Df(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Bc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Nf(s,e,t,i,n){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(n){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function al(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function kc(s,e){if(e.constructor===Float32Array)return s;let t=al(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Hc(s,e){if(e.constructor===Float32Array)return s;let t=al(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var Nn={DEG2RAD:_r,RAD2DEG:Wn,generateUUID:Yi,clamp:je,euclideanModulo:Uc,mapLinear:vf,inverseLerp:bf,lerp:yr,damp:wf,pingpong:Sf,smoothstep:Mf,smootherstep:Ef,randInt:Tf,randFloat:Af,randFloatSpread:Rf,seededRandom:Cf,degToRad:Lf,radToDeg:Pf,isPowerOfTwo:If,ceilPowerOfTwo:Df,floorPowerOfTwo:Bc,setQuaternionFromProperEuler:Nf,normalize:Hc,denormalize:kc},qc=class qc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qc.prototype.isVector2=!0;var xe=qc,Zt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(u!==x||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let y=Math.acos(m),S=Math.sin(y);p=Math.sin(p*y)/S,o=Math.sin(o*y)/S,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+x*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+x*o;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),d=l(i/2),f=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Yc=class Yc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-r*n),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return El.copy(this).projectOnVector(e),this.sub(El)}reflect(e){return this.sub(El.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yc.prototype.isVector3=!0;var w=Yc,El=new w,Vh=new Zt,$c=class $c{constructor(e,t,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=n[0],m=n[3],p=n[6],y=n[1],S=n[4],v=n[7],T=n[2],A=n[5],_=n[8];return r[0]=a*x+o*y+l*T,r[3]=a*m+o*S+l*A,r[6]=a*p+o*v+l*_,r[1]=c*x+h*y+u*T,r[4]=c*m+h*S+u*A,r[7]=c*p+h*v+u*_,r[2]=d*x+f*y+g*T,r[5]=d*m+f*S+g*A,r[8]=d*p+f*v+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(n*c-h*i)*x,e[2]=(o*i-n*a)*x,e[3]=d*x,e[4]=(h*t-n*l)*x,e[5]=(n*r-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return zn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tl.makeScale(e,t)),this}rotate(e){return zn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tl.makeRotation(-e)),this}translate(e,t){return zn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$c.prototype.isMatrix3=!0;var Ke=$c,Tl=new Ke,Wh=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Of(){let s={enabled:!0,workingColorSpace:si,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===mt&&(n.r=on(n.r),n.g=on(n.g),n.b=on(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(n.r=vs(n.r),n.g=vs(n.g),n.b=vs(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===xn?br:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[si]:{primaries:e,whitePoint:i,transfer:br,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),s}var tt=Of();function on(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var as,Ya=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{as===void 0&&(as=Ms("canvas")),as.width=e.width,as.height=e.height;let n=as.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=as}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ms("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=on(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(on(t[i]/255)*255):t[i]=on(t[i]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ff=0,Ts=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Al(n[a].image)):r.push(Al(n[a]))}else r=Al(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function Al(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ya.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}var Uf=0,Rl=new w,Vt=class s extends Ii{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=yi,n=yi,r=Gt,a=wi,o=Si,l=hi,c=s.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Yi(),this.name="",this.source=new Ts(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Rl).x}get height(){return this.source.getSize(Rl).y}get depth(){return this.source.getSize(Rl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pi:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case ws:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pi:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case ws:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Sc;Vt.DEFAULT_ANISOTROPY=1;var Kc=class Kc{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,v=(f+1)/2,T=(p+1)/2,A=(h+d)/4,_=(u+x)/4,E=(g+m)/4;return S>v&&S>T?S<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(S),n=A/i,r=_/i):v>T?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=A/n,r=E/n):T<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(T),i=_/r,n=E/r),this.set(i,n,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kc.prototype.isVector4=!0;var gt=Kc,$a=class extends Ii{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Vt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ts(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pi=class extends $a{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Sr=class extends Vt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ka=class extends Vt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var yo=class yo{constructor(e,t,i,n,r,a,o,l,c,h,u,d,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,h,u,d,f,g,x,m)}set(e,t,i,n,r,a,o,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yo().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/os.setFromMatrixColumn(e,0).length(),r=1/os.setFromMatrixColumn(e,1).length(),a=1/os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bf,e,kf)}lookAt(e,t,i){let n=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),vn.crossVectors(i,di),vn.lengthSq()===0&&(Math.abs(i.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),vn.crossVectors(i,di)),vn.normalize(),fa.crossVectors(di,vn),n[0]=vn.x,n[4]=fa.x,n[8]=di.x,n[1]=vn.y,n[5]=fa.y,n[9]=di.y,n[2]=vn.z,n[6]=fa.z,n[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],y=i[3],S=i[7],v=i[11],T=i[15],A=n[0],_=n[4],E=n[8],I=n[12],C=n[1],N=n[5],F=n[9],G=n[13],P=n[2],X=n[6],V=n[10],z=n[14],ie=n[3],q=n[7],Q=n[11],ee=n[15];return r[0]=a*A+o*C+l*P+c*ie,r[4]=a*_+o*N+l*X+c*q,r[8]=a*E+o*F+l*V+c*Q,r[12]=a*I+o*G+l*z+c*ee,r[1]=h*A+u*C+d*P+f*ie,r[5]=h*_+u*N+d*X+f*q,r[9]=h*E+u*F+d*V+f*Q,r[13]=h*I+u*G+d*z+f*ee,r[2]=g*A+x*C+m*P+p*ie,r[6]=g*_+x*N+m*X+p*q,r[10]=g*E+x*F+m*V+p*Q,r[14]=g*I+x*G+m*z+p*ee,r[3]=y*A+S*C+v*P+T*ie,r[7]=y*_+S*N+v*X+T*q,r[11]=y*E+S*F+v*V+T*Q,r[15]=y*I+S*G+v*z+T*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],y=l*f-c*d,S=o*f-c*u,v=o*d-l*u,T=a*f-c*h,A=a*d-l*h,_=a*u-o*h;return t*(x*y-m*S+p*v)-i*(g*y-m*T+p*A)+n*(g*S-x*T+p*_)-r*(g*v-x*A+m*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+n*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=t*o-i*a,S=t*l-n*a,v=t*c-r*a,T=i*l-n*o,A=i*c-r*o,_=n*c-r*l,E=h*x-u*g,I=h*m-d*g,C=h*p-f*g,N=u*m-d*x,F=u*p-f*x,G=d*p-f*m,P=y*G-S*F+v*N+T*C-A*I+_*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/P;return e[0]=(o*G-l*F+c*N)*X,e[1]=(n*F-i*G-r*N)*X,e[2]=(x*_-m*A+p*T)*X,e[3]=(d*A-u*_-f*T)*X,e[4]=(l*C-a*G-c*I)*X,e[5]=(t*G-n*C+r*I)*X,e[6]=(m*v-g*_-p*S)*X,e[7]=(h*_-d*v+f*S)*X,e[8]=(a*F-o*C+c*E)*X,e[9]=(i*C-t*F-r*E)*X,e[10]=(g*A-x*v+p*y)*X,e[11]=(u*v-h*A-f*y)*X,e[12]=(o*I-a*N-l*E)*X,e[13]=(t*N-i*I+n*E)*X,e[14]=(x*S-g*T-m*y)*X,e[15]=(h*T-u*S+d*y)*X,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,y=l*c,S=l*h,v=l*u,T=i.x,A=i.y,_=i.z;return n[0]=(1-(x+p))*T,n[1]=(f+v)*T,n[2]=(g-S)*T,n[3]=0,n[4]=(f-v)*A,n[5]=(1-(d+p))*A,n[6]=(m+y)*A,n[7]=0,n[8]=(g+S)*_,n[9]=(m-y)*_,n[10]=(1-(d+x))*_,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=os.set(n[0],n[1],n[2]).length(),o=os.set(n[4],n[5],n[6]).length(),l=os.set(n[8],n[9],n[10]).length();r<0&&(a=-a),Ri.copy(this);let c=1/a,h=1/o,u=1/l;return Ri.elements[0]*=c,Ri.elements[1]*=c,Ri.elements[2]*=c,Ri.elements[4]*=h,Ri.elements[5]*=h,Ri.elements[6]*=h,Ri.elements[8]*=u,Ri.elements[9]*=u,Ri.elements[10]*=u,t.setFromRotationMatrix(Ri),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,n,r,a,o=xi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===xi)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ss)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=xi,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-n),d=-(t+e)/(t-e),f=-(i+n)/(i-n),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===xi)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ss)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};yo.prototype.isMatrix4=!0;var qe=yo,os=new w,Ri=new qe,Bf=new w(0,0,0),kf=new w(1,1,1),vn=new w,fa=new w,di=new w,qh=new qe,Yh=new Zt,cn=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var As=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hf=0,$h=new w,ls=new Zt,en=new qe,pa=new w,lr=new w,zf=new w,Gf=new Zt,Kh=new w(1,0,0),Zh=new w(0,1,0),Jh=new w(0,0,1),jh={type:"added"},Vf={type:"removed"},cs={type:"childadded",child:null},Cl={type:"childremoved",child:null},bt=class s extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new w,t=new cn,i=new Zt,n=new w(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ke}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new As,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(Kh,e)}rotateY(e){return this.rotateOnAxis(Zh,e)}rotateZ(e){return this.rotateOnAxis(Jh,e)}translateOnAxis(e,t){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kh,e)}translateY(e){return this.translateOnAxis(Zh,e)}translateZ(e){return this.translateOnAxis(Jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?pa.copy(e):pa.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(lr,pa,this.up):en.lookAt(pa,lr,this.up),this.quaternion.setFromRotationMatrix(en),n&&(en.extractRotation(n.matrixWorld),ls.setFromRotationMatrix(en),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jh),cs.child=e,this.dispatchEvent(cs),cs.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vf),Cl.child=e,this.dispatchEvent(Cl),Cl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),en.multiply(e.parent.matrixWorld)),e.applyMatrix4(en),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jh),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,zf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Gf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bt.DEFAULT_UP=new w(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vt=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wf={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wf)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new vt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},ma={h:0,s:0,l:0};function Ll(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ce=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=tt.workingColorSpace){if(e=Uc(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ll(a,r,e+1/3),this.g=Ll(a,r,e),this.b=Ll(a,r,e-1/3)}return tt.colorSpaceToWorking(this,n),this}setStyle(e,t=Ht){function i(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let i=pd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=on(e.r),this.g=on(e.g),this.b=on(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return tt.workingToColorSpace(ei.copy(this),e),Math.round(je(ei.r*255,0,255))*65536+Math.round(je(ei.g*255,0,255))*256+Math.round(je(ei.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(ei.copy(this),t);let i=ei.r,n=ei.g,r=ei.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(ei.copy(this),t),e.r=ei.r,e.g=ei.g,e.b=ei.b,e}getStyle(e=Ht){tt.workingToColorSpace(ei.copy(this),e);let t=ei.r,i=ei.g,n=ei.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(ma);let i=yr(bn.h,ma.h,t),n=yr(bn.s,ma.s,t),r=yr(bn.l,ma.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ei=new Ce;Ce.NAMES=pd;var Cs=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ci=new w,tn=new w,Pl=new w,nn=new w,hs=new w,us=new w,Qh=new w,Il=new w,Dl=new w,Nl=new w,Ol=new gt,Fl=new gt,Ul=new gt,Tn=class s{constructor(e=new w,t=new w,i=new w){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ci.subVectors(e,t),n.cross(Ci);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Ci.subVectors(n,t),tn.subVectors(i,t),Pl.subVectors(e,t);let a=Ci.dot(Ci),o=Ci.dot(tn),l=Ci.dot(Pl),c=tn.dot(tn),h=tn.dot(Pl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,nn)===null?!1:nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,nn.x),l.addScaledVector(a,nn.y),l.addScaledVector(o,nn.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return Ol.setScalar(0),Fl.setScalar(0),Ul.setScalar(0),Ol.fromBufferAttribute(e,t),Fl.fromBufferAttribute(e,i),Ul.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Ol,r.x),a.addScaledVector(Fl,r.y),a.addScaledVector(Ul,r.z),a}static isFrontFacing(e,t,i,n){return Ci.subVectors(i,t),tn.subVectors(e,t),Ci.cross(tn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Ci.cross(tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,a,o;hs.subVectors(n,i),us.subVectors(r,i),Il.subVectors(e,i);let l=hs.dot(Il),c=us.dot(Il);if(l<=0&&c<=0)return t.copy(i);Dl.subVectors(e,n);let h=hs.dot(Dl),u=us.dot(Dl);if(h>=0&&u<=h)return t.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(hs,a);Nl.subVectors(e,r);let f=hs.dot(Nl),g=us.dot(Nl);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(us,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Qh.subVectors(r,n),o=(u-h)/(u-h+(f-g)),t.copy(n).addScaledVector(Qh,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(i).addScaledVector(hs,a).addScaledVector(us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mi=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Li):Li.fromBufferAttribute(r,a),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}let n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),_a.subVectors(this.max,cr),ds.subVectors(e.a,cr),fs.subVectors(e.b,cr),ps.subVectors(e.c,cr),wn.subVectors(fs,ds),Sn.subVectors(ps,fs),Un.subVectors(ds,ps);let t=[0,-wn.z,wn.y,0,-Sn.z,Sn.y,0,-Un.z,Un.y,wn.z,0,-wn.x,Sn.z,0,-Sn.x,Un.z,0,-Un.x,-wn.y,wn.x,0,-Sn.y,Sn.x,0,-Un.y,Un.x,0];return!Bl(t,ds,fs,ps,_a)||(t=[1,0,0,0,1,0,0,0,1],!Bl(t,ds,fs,ps,_a))?!1:(ya.crossVectors(wn,Sn),t=[ya.x,ya.y,ya.z],Bl(t,ds,fs,ps,_a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},sn=[new w,new w,new w,new w,new w,new w,new w,new w],Li=new w,ga=new mi,ds=new w,fs=new w,ps=new w,wn=new w,Sn=new w,Un=new w,cr=new w,_a=new w,ya=new w,Bn=new w;function Bl(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Bn.fromArray(s,r);let o=n.x*Math.abs(Bn.x)+n.y*Math.abs(Bn.y)+n.z*Math.abs(Bn.z),l=e.dot(Bn),c=t.dot(Bn),h=i.dot(Bn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ut=new w,xa=new xe,Xf=0,jt=class extends Ii{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nc,this.updateRanges=[],this.gpuType=gi,this.version=0,this._normalizationScale=e!==void 0?al(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):kc(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hc(e,this.array)}};var Mr=class extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Er=class extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ut=class extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}},qf=new mi,hr=new w,kl=new w,oi=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):qf.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);let t=hr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(hr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(kl)),this.expandByPoint(hr.copy(e.center).sub(kl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Yf=0,_i=new qe,Hl=new bt,ms=new w,fi=new mi,ur=new mi,Kt=new w,Pt=class s extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yf(e)?Er:Mr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,i){return _i.makeTranslation(e,t,i),this.applyMatrix4(_i),this}scale(e,t,i){return _i.makeScale(e,t,i),this.applyMatrix4(_i),this}lookAt(e){return Hl.lookAt(e),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ut(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];fi.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let i=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(fi.min,ur.min),fi.expandByPoint(Kt),Kt.addVectors(fi.max,ur.max),fi.expandByPoint(Kt)):(fi.expandByPoint(ur.min),fi.expandByPoint(ur.max))}fi.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)Kt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Kt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Kt.fromBufferAttribute(o,c),l&&(ms.fromBufferAttribute(e,c),Kt.add(ms)),n=Math.max(n,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new jt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let I=0;I<i.count;I++)o[I]=new w,l[I]=new w;let h=new w,u=new w,d=new w,f=new xe,g=new xe,x=new xe,m=new w,p=new w;function y(I,C,N){c[I]=c[C]=c[N]=1,h.fromBufferAttribute(i,I),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,N),f.fromBufferAttribute(r,I),g.fromBufferAttribute(r,C),x.fromBufferAttribute(r,N),u.sub(h),d.sub(h),g.sub(f),x.sub(f);let F=1/(g.x*x.y-x.x*g.y);isFinite(F)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(F),p.copy(d).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(F),o[I].add(m),o[C].add(m),o[N].add(m),l[I].add(p),l[C].add(p),l[N].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,C=S.length;I<C;++I){let N=S[I],F=N.start,G=N.count;for(let P=F,X=F+G;P<X;P+=3)y(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let v=new w,T=new w,A=new w,_=new w;function E(I){A.fromBufferAttribute(n,I),_.copy(A);let C=o[I];v.copy(C),v.sub(A.multiplyScalar(A.dot(C))).normalize(),T.crossVectors(_,C);let F=T.dot(l[I])<0?-1:1;a.setXYZW(I,v.x,v.y,v.z,F)}for(let I=0,C=i.count;I<C;++I)c[I]&&E(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new w,r=new w,a=new w,o=new w,l=new w,c=new w,h=new w,u=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new jt(d,h,u)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ls=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nc,this.updateRanges=[],this.version=0,this.uuid=Yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=eu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=eu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function eu(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Yi()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var ii=new w,Ps=class s{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n,this._normalizationScale=e!==void 0?al(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ii.fromBufferAttribute(this,t),ii.applyMatrix4(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ii.fromBufferAttribute(this,t),ii.applyNormalMatrix(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ii.fromBufferAttribute(this,t),ii.transformDirection(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){wr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){wr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):kc(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hc(e,this.data.array)}},zl=new w,$f=new w,Kf=new Ke,ni=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=zl.subVectors(i,t).cross($f.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(zl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Kf.getNormalMatrix(e),n=this.coplanarPoint(zl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Zf=0,li=class extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=Vs,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ka,this.stencilZFail=ka,this.stencilZPass=ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ni().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new xe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var rn=new w,Gl=new w,va=new w,ba=new w,Hi=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rn.copy(this.origin).addScaledVector(this.direction,t),rn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Gl.copy(e).add(t).multiplyScalar(.5),va.copy(t).sub(e).normalize(),ba.copy(this.origin).sub(Gl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(va),o=ba.dot(this.direction),l=-ba.dot(va),c=ba.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Gl).addScaledVector(va,d),f}intersectSphere(e,t){if(e.radius<0)return null;rn.subVectors(e.center,this.origin);let i=rn.dot(this.direction),n=rn.dot(rn)-i*i,r=e.radius*e.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,t,i,n,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,x=t.y-a.y,m=t.z-a.z,p=i.x-a.x,y=i.y-a.y,S=i.z-a.z,v=Math.abs(l),T=Math.abs(c),A=Math.abs(h),_,E,I,C,N,F,G,P,X,V,z,ie;if(v>=T&&v>=A?(I=l,F=u,X=g,ie=p,l>=0?(_=c,E=h,C=d,N=f,G=x,P=m,V=y,z=S):(_=h,E=c,C=f,N=d,G=m,P=x,V=S,z=y)):T>=A?(I=c,F=d,X=x,ie=y,c>=0?(_=h,E=l,C=f,N=u,G=m,P=g,V=S,z=p):(_=l,E=h,C=u,N=f,G=g,P=m,V=p,z=S)):(I=h,F=f,X=m,ie=S,h>=0?(_=l,E=c,C=u,N=d,G=g,P=x,V=p,z=y):(_=c,E=l,C=d,N=u,G=x,P=g,V=y,z=p)),I===0)return null;let q=_/I,Q=E/I,ee=1/I,J=C-q*F,_e=N-Q*F,W=G-q*X,ae=P-Q*X,Me=V-q*ie,Te=z-Q*ie,fe=Me*ae-Te*W,Pe=J*Te-_e*Me,ct=W*_e-ae*J;if(n){if(fe<0||Pe<0||ct<0)return null}else if((fe<0||Pe<0||ct<0)&&(fe>0||Pe>0||ct>0))return null;let Fe=fe+Pe+ct;if(Fe===0)return null;let rt=ee*(fe*F+Pe*X+ct*ie);return(Fe>0?rt<0:rt>0)?null:this.at(rt/Fe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Et=class extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},tu=new qe,kn=new Hi,wa=new oi,iu=new w,Sa=new w,Ma=new w,Ea=new w,Vl=new w,Ta=new w,nu=new w,Aa=new w,ne=class extends bt{constructor(e=new Pt,t=new Et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){Ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Vl.fromBufferAttribute(u,e),a?Ta.addScaledVector(Vl,h):Ta.addScaledVector(Vl.sub(t),h))}t.add(Ta)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(r),kn.copy(e.ray).recast(e.near),!(wa.containsPoint(kn.origin)===!1&&(kn.intersectSphere(wa,iu)===null||kn.origin.distanceToSquared(iu)>(e.far-e.near)**2))&&(tu.copy(r).invert(),kn.copy(e.ray).applyMatrix4(tu),!(i.boundingBox!==null&&kn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,kn)))}_computeIntersections(e,t,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,T=S;v<T;v+=3){let A=o.getX(v),_=o.getX(v+1),E=o.getX(v+2);n=Ra(this,p,e,i,c,h,u,A,_,E),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);n=Ra(this,a,e,i,c,h,u,y,S,v),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,T=S;v<T;v+=3){let A=v,_=v+1,E=v+2;n=Ra(this,p,e,i,c,h,u,A,_,E),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,S=m+1,v=m+2;n=Ra(this,a,e,i,c,h,u,y,S,v),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function Jf(s,e,t,i,n,r,a,o){let l;if(e.side===ri?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===Xi,o),l===null)return null;Aa.copy(o),Aa.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Aa);return c<t.near||c>t.far?null:{distance:c,point:Aa.clone(),object:s}}function Ra(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,Sa),s.getVertexPosition(l,Ma),s.getVertexPosition(c,Ea);let h=Jf(s,e,t,i,Sa,Ma,Ea,nu);if(h){let u=new w;Tn.getBarycoord(nu,Sa,Ma,Ea,u),n&&(h.uv=Tn.getInterpolatedAttribute(n,o,l,c,u,new xe)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,o,l,c,u,new xe)),a&&(h.normal=Tn.getInterpolatedAttribute(a,o,l,c,u,new w),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new w,materialIndex:0};Tn.getNormal(Sa,Ma,Ea,d.normal),h.face=d,h.barycoord=u}return h}var dr=new gt,su=new gt,ru=new gt,jf=new gt,au=new qe,Ca=new w,Wl=new oi,ou=new qe,Xl=new Hi,Tr=class extends ne{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jl,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ca),this.boundingBox.expandByPoint(Ca)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new oi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ca),this.boundingSphere.expandByPoint(Ca)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wl.copy(this.boundingSphere),Wl.applyMatrix4(n),e.ray.intersectsSphere(Wl)!==!1&&(ou.copy(n).invert(),Xl.copy(e.ray).applyMatrix4(ou),!(this.boundingBox!==null&&Xl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new gt,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===jl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ed?this.bindMatrixInverse.copy(this.bindMatrix).invert():Be("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;su.fromBufferAttribute(n.attributes.skinIndex,e),ru.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(dr.copy(t),t.set(0,0,0,0)):(dr.set(t.x,t.y,t.z,1),t.set(0,0,0)),dr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=ru.getComponent(r);if(a!==0){let o=su.getComponent(r);au.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(jf.copy(dr).applyMatrix4(au),a)}}return t.isVector4&&(t.w=dr.w),t.applyMatrix4(this.bindMatrixInverse)}},Is=class extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ds=class extends Vt{constructor(e=null,t=1,i=1,n,r,a,o,l,c=Dt,h=Dt,u,d){super(null,a,o,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},lu=new qe,Qf=new qe,Ar=class s{constructor(e=[],t=[]){this.uuid=Yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Be("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Qf;lu.multiplyMatrices(o,t[r]),lu.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Ds(t,e,e,Si,gi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let r=e.bones[i],a=t[r];a===void 0&&(Be("Skeleton: No bone found with UUID:",r),a=new Is),this.bones.push(a),this.boneInverses.push(new qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){let a=t[n];e.bones.push(a.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}},hn=class extends jt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},gs=new qe,cu=new qe,La=[],hu=new mi,ep=new qe,fr=new ne,pr=new oi,Xn=class extends ne{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,ep)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gs),hu.copy(e.boundingBox).applyMatrix4(gs),this.boundingBox.union(hu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gs),pr.copy(e.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(i),e.ray.intersectsSphere(pr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,gs),cu.multiplyMatrices(i,gs),fr.matrixWorld=cu,fr.raycast(e,La);for(let a=0,o=La.length;a<o;a++){let l=La[a];l.instanceId=r,l.object=this,t.push(l)}La.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new hn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ds(new Float32Array(n*this.count),n,this.count,Eo,gi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hn=new oi,tp=new xe(.5,.5),Pa=new w,An=class{constructor(e=new ni,t=new ni,i=new ni,n=new ni,r=new ni,a=new ni){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xi,i=!1){let n=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],y=r[12],S=r[13],v=r[14],T=r[15];if(n[0].setComponents(c-a,f-h,p-g,T-y).normalize(),n[1].setComponents(c+a,f+h,p+g,T+y).normalize(),n[2].setComponents(c+o,f+u,p+x,T+S).normalize(),n[3].setComponents(c-o,f-u,p-x,T-S).normalize(),i)n[4].setComponents(l,d,m,v).normalize(),n[5].setComponents(c-l,f-d,p-m,T-v).normalize();else if(n[4].setComponents(c-l,f-d,p-m,T-v).normalize(),t===xi)n[5].setComponents(c+l,f+d,p+m,T+v).normalize();else if(t===Ss)n[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){Hn.center.set(0,0,0);let t=tp.distanceTo(e.center);return Hn.radius=.7071067811865476+t,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Pa.x=n.normal.x>0?e.max.x:e.min.x,Pa.y=n.normal.y>0?e.max.y:e.min.y,Pa.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},uu=new qe,Za=class s{constructor(){this.coordinateSystem=xi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let r=t[n];uu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new An),i[n].setFromProjectionMatrix(uu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++)t[n]===void 0&&(t[n]=new An),t[n].copy(i[n]);return this._count=e._count,this}clone(){return new s().copy(this)}};var Rn=class extends li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ja=new w,ja=new w,du=new qe,mr=new Hi,Ia=new oi,ql=new w,fu=new w,un=class extends bt{constructor(e=new Pt,t=new Rn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)Ja.fromBufferAttribute(t,n-1),ja.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Ja.distanceTo(ja);e.setAttribute("lineDistance",new ut(i,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(n),Ia.radius+=r,e.ray.intersectsSphere(Ia)===!1)return;du.copy(n).invert(),mr.copy(e.ray).applyMatrix4(du);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),y=h.getX(x+1),S=Da(this,e,mr,l,p,y,x);S&&t.push(S)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=Da(this,e,mr,l,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=Da(this,e,mr,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Da(this,e,mr,l,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Da(s,e,t,i,n,r,a){let o=s.geometry.attributes.position;if(Ja.fromBufferAttribute(o,n),ja.fromBufferAttribute(o,r),t.distanceSqToSegment(Ja,ja,ql,fu)>i)return;ql.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(ql);if(!(c<e.near||c>e.far))return{distance:c,point:fu.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var pu=new w,mu=new w,Rr=class extends un{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)pu.fromBufferAttribute(t,n),mu.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+pu.distanceTo(mu);e.setAttribute("lineDistance",new ut(i,1))}else Be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Cr=class extends un{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ns=class extends li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gu=new qe,nc=new Hi,Na=new oi,Oa=new w,Lr=class extends bt{constructor(e=new Pt,t=new Ns){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(n),Na.radius+=r,e.ray.intersectsSphere(Na)===!1)return;gu.copy(n).invert(),nc.copy(e.ray).applyMatrix4(gu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);Oa.fromBufferAttribute(u,m),_u(Oa,m,l,n,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)Oa.fromBufferAttribute(u,g),_u(Oa,g,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _u(s,e,t,i,n,r,a){let o=nc.distanceSqToPoint(s);if(o<t){let l=new w;nc.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Pr=class extends Vt{constructor(e=[],t=Zn,i,n,r,a,o,l,c,h){super(e,t,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Os=class extends Vt{constructor(e,t,i,n,r,a,o,l,c){super(e,t,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var dn=class extends Vt{constructor(e,t,i=Oi,n,r,a,o=Dt,l=Dt,c,h=ln,u=1){if(h!==ln&&h!==yn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ts(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ir=class extends dn{constructor(e,t=Oi,i=Zn,n,r,a=Dt,o=Dt,l,c=ln){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,n,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Dr=class extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ke=class s extends Pt{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2));function g(x,m,p,y,S,v,T,A,_,E,I){let C=v/_,N=T/E,F=v/2,G=T/2,P=A/2,X=_+1,V=E+1,z=0,ie=0,q=new w;for(let Q=0;Q<V;Q++){let ee=Q*N-G;for(let J=0;J<X;J++){let _e=J*C-F;q[x]=_e*y,q[m]=ee*S,q[p]=P,c.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[p]=A>0?1:-1,h.push(q.x,q.y,q.z),u.push(J/_),u.push(1-Q/E),z+=1}}for(let Q=0;Q<E;Q++)for(let ee=0;ee<_;ee++){let J=d+ee+X*Q,_e=d+ee+X*(Q+1),W=d+(ee+1)+X*(Q+1),ae=d+(ee+1)+X*Q;l.push(J,_e,ae),l.push(_e,W,ae),ie+=6}o.addGroup(f,ie,I),f+=ie,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Nr=class s extends Pt{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new w,h=new xe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(o,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Rt=class s extends Pt{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=i/2,p=0;y(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function y(){let v=new w,T=new w,A=0,_=(t-e)/i;for(let E=0;E<=r;E++){let I=[],C=E/r,N=C*(t-e)+e;for(let F=0;F<=n;F++){let G=F/n,P=G*l+o,X=Math.sin(P),V=Math.cos(P);T.x=N*X,T.y=-C*i+m,T.z=N*V,u.push(T.x,T.y,T.z),v.set(X,_,V).normalize(),d.push(v.x,v.y,v.z),f.push(G,1-C),I.push(g++)}x.push(I)}for(let E=0;E<n;E++)for(let I=0;I<r;I++){let C=x[I][E],N=x[I+1][E],F=x[I+1][E+1],G=x[I][E+1];(e>0||I!==0)&&(h.push(C,N,G),A+=3),(t>0||I!==r-1)&&(h.push(N,F,G),A+=3)}c.addGroup(p,A,0),p+=A}function S(v){let T=g,A=new xe,_=new w,E=0,I=v===!0?e:t,C=v===!0?1:-1;for(let F=1;F<=n;F++)u.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),g++;let N=g;for(let F=0;F<=n;F++){let P=F/n*l+o,X=Math.cos(P),V=Math.sin(P);_.x=I*V,_.y=m*C,_.z=I*X,u.push(_.x,_.y,_.z),d.push(0,C,0),A.x=X*.5+.5,A.y=V*.5*C+.5,f.push(A.x,A.y),g++}for(let F=0;F<n;F++){let G=T+F,P=N+F;v===!0?h.push(P,P+1,G):h.push(P+1,P,G),E+=3}c.addGroup(p,E,v===!0?1:2),p+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);let h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=t||(a.isVector2?new xe:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new w,n=[],r=[],a=[],o=new w,l=new qe;for(let f=0;f<=e;f++){let g=f/e;n[f]=this.getTangentAt(g,new w)}r[0]=new w,a[0]=new w;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(je(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(n[f],r[f])}if(t===!0){let f=Math.acos(je(r[0].dot(r[e]),-1,1));f/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Or=class extends vi{constructor(e=0,t=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new xe){let i=t,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Qa=class extends Or{constructor(e,t,i,n,r,a){super(e,t,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function zc(){let s=0,e=0,t=0,i=0;function n(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+i*o}}}var yu=new w,xu=new w,Yl=new zc,$l=new zc,Kl=new zc,Di=class extends vi{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new w){let i=t,n=this.points,r=n.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(xu.subVectors(n[0],n[1]).add(n[0]),c=xu);let u=n[o%r],d=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(yu.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=yu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Yl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),$l.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Kl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Yl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),$l.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Kl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Yl.calc(l),$l.calc(l),Kl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new w().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function vu(s,e,t,i,n){let r=(i-e)*.5,a=(n-t)*.5,o=s*s,l=s*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*s+t}function ip(s,e){let t=1-s;return t*t*e}function np(s,e){return 2*(1-s)*s*e}function sp(s,e){return s*s*e}function xr(s,e,t,i){return ip(s,e)+np(s,t)+sp(s,i)}function rp(s,e){let t=1-s;return t*t*t*e}function ap(s,e){let t=1-s;return 3*t*t*s*e}function op(s,e){return 3*(1-s)*s*s*e}function lp(s,e){return s*s*s*e}function vr(s,e,t,i,n){return rp(s,e)+ap(s,t)+op(s,i)+lp(s,n)}var eo=class extends vi{constructor(e=new xe,t=new xe,i=new xe,n=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new xe){let i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(vr(e,n.x,r.x,a.x,o.x),vr(e,n.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},to=class extends vi{constructor(e=new w,t=new w,i=new w,n=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new w){let i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(vr(e,n.x,r.x,a.x,o.x),vr(e,n.y,r.y,a.y,o.y),vr(e,n.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},io=class extends vi{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},no=class extends vi{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},so=class extends vi{constructor(e=new xe,t=new xe,i=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new xe){let i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(xr(e,n.x,r.x,a.x),xr(e,n.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fr=class extends vi{constructor(e=new w,t=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){let i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(xr(e,n.x,r.x,a.x),xr(e,n.y,r.y,a.y),xr(e,n.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ro=class extends vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){let i=t,n=this.points,r=(n.length-1)*e,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(vu(o,l.x,c.x,h.x,u.x),vu(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new xe().fromArray(n))}return this}},cp=Object.freeze({__proto__:null,ArcCurve:Qa,CatmullRomCurve3:Di,CubicBezierCurve:eo,CubicBezierCurve3:to,EllipseCurve:Or,LineCurve:io,LineCurve3:no,QuadraticBezierCurve:so,QuadraticBezierCurve3:Fr,SplineCurve:ro});var zi=class s extends Pt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let S=0;S<c;S++){let v=S*u-r;g.push(v,-y,0),x.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let S=y+c*p,v=y+c*(p+1),T=y+1+c*(p+1),A=y+1+c*p;f.push(S,v,A),f.push(v,T,A)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Ur=class s extends Pt{constructor(e=.5,t=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/n,f=new w,g=new xe;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){let p=r+m/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<n;x++){let m=x*(i+1);for(let p=0;p<i;p++){let y=p+m,S=y,v=y+i+1,T=y+i+2,A=y+1;o.push(S,v,A),o.push(v,T,A)}}this.setIndex(o),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ni=class s extends Pt{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new w,d=new w,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let y=[],S=p/i,v=a+S*o,T=e*Math.cos(v),A=Math.sqrt(e*e-T*T),_=0;p===0&&a===0?_=.5/t:p===i&&l===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){let I=E/t,C=n+I*r;u.x=-A*Math.cos(C),u.y=T,u.z=A*Math.sin(C),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(I+_,1-S),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){let S=h[p][y+1],v=h[p][y],T=h[p+1][y],A=h[p+1][y+1];(p!==0||a>0)&&f.push(S,v,A),(p!==i-1||l<Math.PI)&&f.push(v,T,A)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Fs=class s extends Pt{constructor(e=1,t=.4,i=12,n=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],u=[],d=new w,f=new w,g=new w;for(let x=0;x<=i;x++){let m=a+x/i*o;for(let p=0;p<=n;p++){let y=p/n*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/n),u.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=n;m++){let p=(n+1)*x+m-1,y=(n+1)*(x-1)+m-1,S=(n+1)*(x-1)+m,v=(n+1)*x+m;l.push(p,y,v),l.push(y,S,v)}this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Br=class s extends Pt{constructor(e=new Fr(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new w,l=new w,c=new xe,h=new w,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function x(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),y(),p()}function m(S){h=e.getPointAt(S/t,h);let v=a.normals[S],T=a.binormals[S];for(let A=0;A<=n;A++){let _=A/n*Math.PI*2,E=Math.sin(_),I=-Math.cos(_);l.x=I*v.x+E*T.x,l.y=I*v.y+E*T.y,l.z=I*v.z+E*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let S=1;S<=t;S++)for(let v=1;v<=n;v++){let T=(n+1)*(S-1)+(v-1),A=(n+1)*S+(v-1),_=(n+1)*S+v,E=(n+1)*(S-1)+v;g.push(T,A,E),g.push(A,_,E)}}function y(){for(let S=0;S<=t;S++)for(let v=0;v<=n;v++)c.x=S/t,c.y=v/n,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new cp[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Qn(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];if(bu(n))n.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(bu(n[0])){let r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();e[t][i]=r}else e[t][i]=n.slice();else e[t][i]=n}}return e}function ti(s){let e={};for(let t=0;t<s.length;t++){let i=Qn(s[t]);for(let n in i)e[n]=i[n]}return e}function bu(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function hp(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Gc(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var md={clone:Qn,merge:ti},up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gi=class extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=up,this.fragmentShader=dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qn(e.uniforms),this.uniformsGroups=hp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new Ce().setHex(n.value);break;case"v2":this.uniforms[i].value=new xe().fromArray(n.value);break;case"v3":this.uniforms[i].value=new w().fromArray(n.value);break;case"v4":this.uniforms[i].value=new gt().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ke().fromArray(n.value);break;case"m4":this.uniforms[i].value=new qe().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ao=class extends Gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ve=class extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rl,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bt=class extends ve{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return zn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){zn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var oo=class extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},lo=class extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function En(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function gr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function fp(s){function e(n,r){return s[n]-s[r]}let t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function wu(s,e,t){let i=s.length,n=new s.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)n[a++]=s[o+l]}return n}function pp(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[n++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=s[n++];while(r!==void 0)}var Vi=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},co=class extends Vi{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ec,endingEnd:ec}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case tc:r=e,o=2*t-i;break;case ic:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case tc:a=e,l=2*i-t;break;case ic:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(n-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let T=0;T!==o;++T)r[T]=p*a[h+T]+y*a[c+T]+S*a[l+T]+v*a[u+T];return r}},ho=class extends Vi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},uo=class extends Vi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},fo=class extends Vi{interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-t)/(n-t),x=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*x+a[l+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let x=a[c+g],m=a[l+g],p=f*d+g*2,y=u[p],S=u[p+1],v=e*d+g*2,T=h[v],A=h[v+1],_=gp(i,t,y,T,n);r[g]=gd(_,x,S,A,m)}return r}};function gd(s,e,t,i,n){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*i+s*s*s*n}function mp(s,e,t,i,n){let r=1-s;return 3*r*r*(t-e)+6*r*s*(i-t)+3*s*s*(n-i)}function gp(s,e,t,i,n){let r=(s-e)/(n-e);for(let a=0;a<8;a++){let o=gd(r,e,t,i,n)-s;if(Math.abs(o)<1e-10)break;let l=mp(r,e,t,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var ci=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=En(t,this.TimeBufferType),this.values=En(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:En(e.times,Array),values:En(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),gr(e.settings)&&(i.settings={inTangents:En(e.settings.inTangents,Array),outTangents:En(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new fo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Gn:t=this.InterpolantFactoryMethodDiscrete;break;case Vn:t=this.InterpolantFactoryMethodLinear;break;case Ba:t=this.InterpolantFactoryMethodSmooth;break;case Ql:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Be("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gn;case this.InterpolantFactoryMethodLinear:return Vn;case this.InterpolantFactoryMethodSmooth:return Ba;case this.InterpolantFactoryMethodBezier:return Ql}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;gr(this.settings)&&(Su(this.settings.inTangents,e),Su(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;gr(this.settings)&&(Mu(this.settings.inTangents,e),Mu(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Xe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&xf(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ba,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,gr(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Su(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]+=e}function Mu(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]*=e}ci.prototype.ValueTypeName="";ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=Vn;var fn=class extends ci{constructor(e,t,i){super(e,t,i)}};fn.prototype.ValueTypeName="bool";fn.prototype.ValueBufferType=Array;fn.prototype.DefaultInterpolation=Gn;fn.prototype.InterpolantFactoryMethodLinear=void 0;fn.prototype.InterpolantFactoryMethodSmooth=void 0;var kr=class extends ci{constructor(e,t,i,n){super(e,t,i,n)}};kr.prototype.ValueTypeName="color";var pn=class extends ci{constructor(e,t,i,n){super(e,t,i,n)}};pn.prototype.ValueTypeName="number";var po=class extends Vi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)Zt.slerpFlat(r,0,a,c-o,a,c,l);return r}},mn=class extends ci{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new po(this.times,this.values,this.getValueSize(),e)}};mn.prototype.ValueTypeName="quaternion";mn.prototype.InterpolantFactoryMethodSmooth=void 0;var gn=class extends ci{constructor(e,t,i){super(e,t,i)}};gn.prototype.ValueTypeName="string";gn.prototype.ValueBufferType=Array;gn.prototype.DefaultInterpolation=Gn;gn.prototype.InterpolantFactoryMethodLinear=void 0;gn.prototype.InterpolantFactoryMethodSmooth=void 0;var Cn=class extends ci{constructor(e,t,i,n){super(e,t,i,n)}};Cn.prototype.ValueTypeName="vector";var Hr=class{constructor(e="",t=-1,i=[],n=td){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Yi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(yp(i[a]).scale(n));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(ci.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=fp(l);l=wu(l,1,h),c=wu(c,1,h),!n&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new pn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=n[u];d||(n[u]=d=[]),d.push(c)}}let a=[];for(let o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function _p(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return pn;case"vector":case"vector2":case"vector3":case"vector4":return Cn;case"color":return kr;case"quaternion":return mn;case"bool":case"boolean":return fn;case"string":return gn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function yp(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=_p(s.type);if(s.times===void 0){let i=[],n=[];pp(s.keys,i,n,"value"),s.times=i,s.values=n}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),gr(s.settings)&&(t.settings={inTangents:En(s.settings.inTangents,Float32Array),outTangents:En(s.settings.outTangents,Float32Array)}),t}var ki={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Eu(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Eu(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Eu(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var mo=class{constructor(e,t,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_d=new mo,Wi=class{constructor(e){this.manager=e!==void 0?e:_d,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Wi.DEFAULT_MATERIAL_NAME="__DEFAULT";var an={},sc=class extends Error{constructor(e,t){super(e),this.response=t}},Us=class extends Wi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ki.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(an[e]!==void 0){an[e].push({onLoad:t,onProgress:i,onError:n});return}an[e]=[],an[e].push({onLoad:t,onProgress:i,onError:n});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=an[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:S,value:v})=>{if(S)p.close();else{x+=v.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let A=0,_=h.length;A<_;A++){let E=h[A];E.onProgress&&E.onProgress(T)}p.enqueue(v),y()}},S=>{p.error(S)})}}});return new Response(m)}else throw new sc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ki.add(`file:${e}`,c);let h=an[e];delete an[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=an[e];if(h===void 0)throw this.manager.itemError(e),c;delete an[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var _s=new WeakMap,go=class extends Wi{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ki.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=_s.get(a);u===void 0&&(u=[],_s.set(a,u)),u.push({onLoad:t,onError:n})}return a}let o=Ms("img");function l(){h(),t&&t(this);let u=_s.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}_s.delete(this),r.manager.itemEnd(e)}function c(u){h(),n&&n(u),ki.remove(`image:${e}`);let d=_s.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}_s.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ki.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var zr=class extends Wi{constructor(e){super(e)}load(e,t,i,n){let r=new Vt,a=new go(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}},Ln=class extends bt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Gr=class extends Ln{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Zl=new qe,Tu=new w,Au=new w,Bs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new An,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Tu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tu),Au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Au),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){Zl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Zl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;e.coordinateSystem===Ss||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fa=new w,Ua=new Zt,Bi=new w,Vr=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fa,Ua,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Ua,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Fa,Ua,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Ua,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Mn=new w,Ru=new xe,Cu=new xe,zt=class extends Vr{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Wn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wn*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z)}getViewSize(e,t){return this.getViewBounds(e,Ru,Cu),t.subVectors(Cu,Ru)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_r*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},rc=class extends Bs{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Wn*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Wr=class extends Ln{constructor(e,t,i=0,n=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new rc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ac=class extends Bs{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0}},bi=class extends Ln{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new ac}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},qn=class extends Vr{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},oc=class extends Bs{constructor(){super(new qn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yn=class extends Ln{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new oc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Xr=class extends Ln{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var _n=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Jl=new WeakMap,qr=class extends Wi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Be("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Be("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ki.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Jl.has(a)===!0?(n&&n(Jl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ki.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){n&&n(c),Jl.set(l,c),ki.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ki.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ys=-90,xs=1,ks=class extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new zt(ys,xs,e,t);n.layers=this.layers,this.add(n);let r=new zt(ys,xs,e,t);r.layers=this.layers,this.add(r);let a=new zt(ys,xs,e,t);a.layers=this.layers,this.add(a);let o=new zt(ys,xs,e,t);o.layers=this.layers,this.add(o);let l=new zt(ys,xs,e,t);l.layers=this.layers,this.add(l);let c=new zt(ys,xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ss)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},_o=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Vc="\\[\\]\\.:\\/",xp=new RegExp("["+Vc+"]","g"),Wc="[^"+Vc+"]",vp="[^"+Vc.replace("\\.","")+"]",bp=/((?:WC+[\/:])*)/.source.replace("WC",Wc),wp=/(WCOD+)?/.source.replace("WCOD",vp),Sp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wc),Mp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wc),Ep=new RegExp("^"+bp+wp+Sp+Mp+"$"),Tp=["material","materials","bones","map"],lc=class{constructor(e,t,i){let n=i||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},wt=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xp,"")}static parseTrackName(e){let t=Ep.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);Tp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=lc;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qy=new Float32Array(1);var Lu=new qe,Hs=class{constructor(e,t,i=0,n=1/0){this.ray=new Hi(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new As,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lu),this}intersectObject(e,t=!0,i=[]){return cc(e,this,i,t),i.sort(Pu),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)cc(e[n],this,i,t);return i.sort(Pu),i}};function Pu(s,e){return s.distance-e.distance}function cc(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)cc(r[a],e,t,!0)}}var Yr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Be("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},zs=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Zc=class Zc{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}};Zc.prototype.isMatrix2=!0;var hc=Zc;var $r=class extends Ii{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Xc(s,e,t,i){let n=Ap(i);switch(t){case Rc:return s*e;case Eo:return s*e/n.components*n.byteLength;case To:return s*e/n.components*n.byteLength;case Dn:return s*e*2/n.components*n.byteLength;case Ao:return s*e*2/n.components*n.byteLength;case Cc:return s*e*3/n.components*n.byteLength;case Si:return s*e*4/n.components*n.byteLength;case Ro:return s*e*4/n.components*n.byteLength;case Jr:case jr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Qr:case ea:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lo:case Io:return Math.max(s,16)*Math.max(e,8)/4;case Co:case Po:return Math.max(s,8)*Math.max(e,8)/2;case Do:case No:case Fo:case Uo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Oo:case ta:case Bo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ko:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case zo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Go:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case qo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Yo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case $o:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Zo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Jo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case jo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Qo:case el:case tl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case il:case nl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ia:case sl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ap(s){switch(s){case hi:case Mc:return{byteLength:1,components:1};case $s:case Ec:case Fi:return{byteLength:2,components:1};case So:case Mo:return{byteLength:2,components:4};case Oi:case wo:case gi:return{byteLength:4,components:1};case Tc:case Ac:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function kd(){let s=null,e=!1,t=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Cp(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var Lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pp=`#ifdef USE_ALPHAHASH
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
#endif`,Ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Np=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fp=`#ifdef USE_AOMAP
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
#endif`,Up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bp=`#ifdef USE_BATCHING
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
#endif`,kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vp=`#ifdef USE_IRIDESCENCE
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
#endif`,Wp=`#ifdef USE_BUMPMAP
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Qp=`#define PI 3.141592653589793
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
} // validated`,em=`vec3 transformedNormal = objectNormal;
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
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",am=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,om=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gm=`#ifdef USE_GRADIENTMAP
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
}`,_m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ym=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,bm=`#ifdef USE_ENVMAP
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
#endif`,wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tm=`PhysicalMaterial material;
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
#endif`,Am=`uniform sampler2D dfgLUT;
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
}`,Rm=`
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
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,km=`#if defined( USE_POINTS_UV )
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
#endif`,Hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vm=`#if defined( USE_MORPHCOLORS )
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
#endif`,Wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`#ifdef USE_MORPHTARGETS
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
#endif`,qm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$m=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jm=`#ifdef USE_NORMALMAP
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
#endif`,Qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tg=`#ifdef USE_CLEARCOATMAP
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
#endif`,ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pg=`float getShadowMask() {
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
}`,mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gg=`#ifdef USE_SKINNING
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
#endif`,_g=`#ifdef USE_SKINNING
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
#endif`,xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sg=`#ifdef USE_TRANSMISSION
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
#endif`,Mg=`#ifdef USE_TRANSMISSION
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lg=`uniform sampler2D t2D;
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`uniform float backgroundBlurriness;
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
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`uniform samplerCube tCube;
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
}`,Fg=`#if DEPTH_PACKING == 3200
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
}`,Ug=`#define DISTANCE
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
}`,Bg=`#define DISTANCE
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`uniform float scale;
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Vg=`#include <common>
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
}`,Wg=`uniform vec3 diffuse;
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
}`,Xg=`#define LAMBERT
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
}`,qg=`#define LAMBERT
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
}`,Yg=`#define MATCAP
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
}`,$g=`#define MATCAP
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
}`,Kg=`#define NORMAL
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
}`,Zg=`#define NORMAL
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
}`,Jg=`#define PHONG
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
}`,jg=`#define PHONG
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
}`,Qg=`#define STANDARD
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
}`,e0=`#define STANDARD
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
}`,t0=`#define TOON
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
}`,n0=`uniform float size;
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
}`,s0=`uniform vec3 diffuse;
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
}`,r0=`#include <common>
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
}`,a0=`uniform vec3 color;
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
}`,o0=`uniform float rotation;
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
}`,l0=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Lp,alphahash_pars_fragment:Pp,alphamap_fragment:Ip,alphamap_pars_fragment:Dp,alphatest_fragment:Np,alphatest_pars_fragment:Op,aomap_fragment:Fp,aomap_pars_fragment:Up,batching_pars_vertex:Bp,batching_vertex:kp,begin_vertex:Hp,beginnormal_vertex:zp,bsdfs:Gp,iridescence_fragment:Vp,bumpmap_pars_fragment:Wp,clipping_planes_fragment:Xp,clipping_planes_pars_fragment:qp,clipping_planes_pars_vertex:Yp,clipping_planes_vertex:$p,color_fragment:Kp,color_pars_fragment:Zp,color_pars_vertex:Jp,color_vertex:jp,common:Qp,defaultnormal_vertex:em,displacementmap_pars_vertex:tm,displacementmap_vertex:im,emissivemap_fragment:nm,emissivemap_pars_fragment:sm,colorspace_fragment:rm,colorspace_pars_fragment:am,envmap_fragment:om,envmap_common_pars_fragment:lm,envmap_pars_fragment:cm,envmap_pars_vertex:hm,envmap_physical_pars_fragment:bm,envmap_vertex:um,fog_vertex:dm,fog_pars_vertex:fm,fog_fragment:pm,fog_pars_fragment:mm,gradientmap_pars_fragment:gm,lightmap_pars_fragment:_m,lights_lambert_fragment:ym,lights_lambert_pars_fragment:xm,lights_pars_begin:vm,lights_toon_fragment:wm,lights_toon_pars_fragment:Sm,lights_phong_fragment:Mm,lights_phong_pars_fragment:Em,lights_physical_fragment:Tm,lights_physical_pars_fragment:Am,lights_fragment_begin:Rm,lights_fragment_maps:Cm,lights_fragment_end:Lm,lightprobes_pars_fragment:Pm,logdepthbuf_fragment:Im,logdepthbuf_pars_fragment:Dm,logdepthbuf_pars_vertex:Nm,logdepthbuf_vertex:Om,map_fragment:Fm,map_pars_fragment:Um,map_particle_fragment:Bm,map_particle_pars_fragment:km,metalnessmap_fragment:Hm,metalnessmap_pars_fragment:zm,morphinstance_vertex:Gm,morphcolor_vertex:Vm,morphnormal_vertex:Wm,morphtarget_pars_vertex:Xm,morphtarget_vertex:qm,normal_fragment_begin:Ym,normal_fragment_maps:$m,normal_pars_fragment:Km,normal_pars_vertex:Zm,normal_vertex:Jm,normalmap_pars_fragment:jm,clearcoat_normal_fragment_begin:Qm,clearcoat_normal_fragment_maps:eg,clearcoat_pars_fragment:tg,iridescence_pars_fragment:ig,opaque_fragment:ng,packing:sg,premultiplied_alpha_fragment:rg,project_vertex:ag,dithering_fragment:og,dithering_pars_fragment:lg,roughnessmap_fragment:cg,roughnessmap_pars_fragment:hg,shadowmap_pars_fragment:ug,shadowmap_pars_vertex:dg,shadowmap_vertex:fg,shadowmask_pars_fragment:pg,skinbase_vertex:mg,skinning_pars_vertex:gg,skinning_vertex:_g,skinnormal_vertex:yg,specularmap_fragment:xg,specularmap_pars_fragment:vg,tonemapping_fragment:bg,tonemapping_pars_fragment:wg,transmission_fragment:Sg,transmission_pars_fragment:Mg,uv_pars_fragment:Eg,uv_pars_vertex:Tg,uv_vertex:Ag,worldpos_vertex:Rg,background_vert:Cg,background_frag:Lg,backgroundCube_vert:Pg,backgroundCube_frag:Ig,cube_vert:Dg,cube_frag:Ng,depth_vert:Og,depth_frag:Fg,distance_vert:Ug,distance_frag:Bg,equirect_vert:kg,equirect_frag:Hg,linedashed_vert:zg,linedashed_frag:Gg,meshbasic_vert:Vg,meshbasic_frag:Wg,meshlambert_vert:Xg,meshlambert_frag:qg,meshmatcap_vert:Yg,meshmatcap_frag:$g,meshnormal_vert:Kg,meshnormal_frag:Zg,meshphong_vert:Jg,meshphong_frag:jg,meshphysical_vert:Qg,meshphysical_frag:e0,meshtoon_vert:t0,meshtoon_frag:i0,points_vert:n0,points_frag:s0,shadow_vert:r0,shadow_frag:a0,sprite_vert:o0,sprite_frag:l0},we={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Ki={basic:{uniforms:ti([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:ti([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:ti([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:ti([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:ti([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ce(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:ti([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:ti([we.points,we.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:ti([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:ti([we.common,we.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:ti([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:ti([we.sprite,we.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:ti([we.common,we.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:ti([we.lights,we.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Ki.physical={uniforms:ti([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var ol={r:0,b:0,g:0},c0=new qe,Hd=new Ke;Hd.set(-1,0,0,0,1,0,0,0,1);function h0(s,e,t,i,n,r){let a=new Ce(0),o=n===!0?0:1,l,c,h=null,u=0,d=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let v=y.backgroundBlurriness>0;S=e.get(S,v)}return S}function g(y){let S=!1,v=f(y);v===null?m(a,o):v&&v.isColor&&(m(v,1),S=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(y,S){let v=f(S);v&&v.isCubeTexture?(c===void 0&&(c=new ne(new ke(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:Qn(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(c0.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hd),c.material.toneMapped=tt.getTransfer(v.colorSpace)!==mt,(h!==v||u!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ne(new zi(2,2),new Gi({name:"BackgroundMaterial",uniforms:Qn(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=tt.getTransfer(v.colorSpace)!==mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,S){y.getRGB(ol,Gc(s)),t.buffers.color.setClear(ol.r,ol.g,ol.b,S,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:x,dispose:p}}function u0(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,a=!1;function o(N,F,G,P,X){let V=!1,z=u(N,P,G,F);r!==z&&(r=z,c(r.object)),V=f(N,P,G,X),V&&g(N,P,G,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,v(N,F,G,P),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return s.createVertexArray()}function c(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function u(N,F,G,P){let X=P.wireframe===!0,V=i[F.id];V===void 0&&(V={},i[F.id]=V);let z=N.isInstancedMesh===!0?N.id:0,ie=V[z];ie===void 0&&(ie={},V[z]=ie);let q=ie[G.id];q===void 0&&(q={},ie[G.id]=q);let Q=q[X];return Q===void 0&&(Q=d(l()),q[X]=Q),Q}function d(N){let F=[],G=[],P=[];for(let X=0;X<t;X++)F[X]=0,G[X]=0,P[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:P,object:N,attributes:{},index:null}}function f(N,F,G,P){let X=r.attributes,V=F.attributes,z=0,ie=G.getAttributes();for(let q in ie)if(ie[q].location>=0){let ee=X[q],J=V[q];if(J===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),ee===void 0||ee.attribute!==J||J&&ee.data!==J.data)return!0;z++}return r.attributesNum!==z||r.index!==P}function g(N,F,G,P){let X={},V=F.attributes,z=0,ie=G.getAttributes();for(let q in ie)if(ie[q].location>=0){let ee=V[q];ee===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor));let J={};J.attribute=ee,ee&&ee.data&&(J.data=ee.data),X[q]=J,z++}r.attributes=X,r.attributesNum=z,r.index=P}function x(){let N=r.newAttributes;for(let F=0,G=N.length;F<G;F++)N[F]=0}function m(N){p(N,0)}function p(N,F){let G=r.newAttributes,P=r.enabledAttributes,X=r.attributeDivisors;G[N]=1,P[N]===0&&(s.enableVertexAttribArray(N),P[N]=1),X[N]!==F&&(s.vertexAttribDivisor(N,F),X[N]=F)}function y(){let N=r.newAttributes,F=r.enabledAttributes;for(let G=0,P=F.length;G<P;G++)F[G]!==N[G]&&(s.disableVertexAttribArray(G),F[G]=0)}function S(N,F,G,P,X,V,z){z===!0?s.vertexAttribIPointer(N,F,G,X,V):s.vertexAttribPointer(N,F,G,P,X,V)}function v(N,F,G,P){x();let X=P.attributes,V=G.getAttributes(),z=F.defaultAttributeValues;for(let ie in V){let q=V[ie];if(q.location>=0){let Q=X[ie];if(Q===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){let ee=Q.normalized,J=Q.itemSize,_e=e.get(Q);if(_e===void 0)continue;let W=_e.buffer,ae=_e.type,Me=_e.bytesPerElement,Te=ae===s.INT||ae===s.UNSIGNED_INT||Q.gpuType===wo;if(Q.isInterleavedBufferAttribute){let fe=Q.data,Pe=fe.isInterleavedBuffer===!0?fe.stride:fe.itemSize,ct=Q.offset;if(fe.isInstancedInterleavedBuffer||fe.isInstancedBufferAttribute){for(let Fe=0;Fe<q.locationSize;Fe++)p(q.location+Fe,fe.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Fe=0;Fe<q.locationSize;Fe++)m(q.location+Fe);s.bindBuffer(s.ARRAY_BUFFER,W);for(let Fe=0;Fe<q.locationSize;Fe++)S(q.location+Fe,J/q.locationSize,ae,ee,Pe*Me,(ct+J/q.locationSize*Fe)*Me,Te)}else{if(Q.isInstancedBufferAttribute){for(let fe=0;fe<q.locationSize;fe++)p(q.location+fe,Q.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let fe=0;fe<q.locationSize;fe++)m(q.location+fe);s.bindBuffer(s.ARRAY_BUFFER,W);for(let fe=0;fe<q.locationSize;fe++)S(q.location+fe,J/q.locationSize,ae,ee,J*Me,J/q.locationSize*fe*Me,Te)}}else if(z!==void 0){let ee=z[ie];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(q.location,ee);break;case 3:s.vertexAttrib3fv(q.location,ee);break;case 4:s.vertexAttrib4fv(q.location,ee);break;default:s.vertexAttrib1fv(q.location,ee)}}}}y()}function T(){I();for(let N in i){let F=i[N];for(let G in F){let P=F[G];for(let X in P){let V=P[X];for(let z in V)h(V[z].object),delete V[z];delete P[X]}}delete i[N]}}function A(N){if(i[N.id]===void 0)return;let F=i[N.id];for(let G in F){let P=F[G];for(let X in P){let V=P[X];for(let z in V)h(V[z].object),delete V[z];delete P[X]}}delete i[N.id]}function _(N){for(let F in i){let G=i[F];for(let P in G){let X=G[P];if(X[N.id]===void 0)continue;let V=X[N.id];for(let z in V)h(V[z].object),delete V[z];delete X[N.id]}}}function E(N){for(let F in i){let G=i[F],P=N.isInstancedMesh===!0?N.id:0,X=G[P];if(X!==void 0){for(let V in X){let z=X[V];for(let ie in z)h(z[ie].object),delete z[ie];delete X[V]}delete G[P],Object.keys(G).length===0&&delete i[F]}}}function I(){C(),a=!0,r!==n&&(r=n,c(r.object))}function C(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:I,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:E,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function d0(s,e,t){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function f0(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(_){return!(_!==Si&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let E=_===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==hi&&_!==gi&&!E&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Be("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Be("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),A=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:v,maxSamples:T,samples:A}}function p0(s){let e=this,t=null,i=0,n=!1,r=!1,a=new ni,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,S=y*4,v=p.clippingState||null;l.value=v,v=h(g,d,S,f);for(let T=0;T!==S;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=f;S!==x;++S,v+=4)a.copy(u[S]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var aa=class extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Pr(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ke(5,5,5),r=new Gi({name:"CubemapFromEquirect",uniforms:Qn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ri,blending:$n});r.uniforms.tEquirect.value=t;let a=new ne(n,r),o=t.minFilter;return t.minFilter===wi&&(t.minFilter=Gt),new ks(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}},yd=256,m0=3,g0=20,zd=256,Gd=16,_0=3,y0=new w,x0=new Ce,Js=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ks(1,10,null),this._boxMesh=new ne(new ke(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){let{size:a=256,position:o=y0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(x0));let m=new ks(i,n,h);return m.position.copy(o),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(yd,Bc(e))}_fromTexture(e,t){e.mapping===Zn||e.mapping===Xs?this._setSize(e.image.length===0?yd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=xd(e,!1,!1),i=Math.log2(e)-m0;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=xd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Zn||e.mapping===Xs?(this._cubemapMaterial===null&&(this._cubemapMaterial=bd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=vd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=v0(),this._integrationMaterial=b0());let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Gd);for(let a=0;a<=i;a++){let o=s.lodToRoughness(a,i);if(a>i-_0)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(zd*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=w0());let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(r,0,i)}};function xd(s,e,t){return new aa(s,{minFilter:wi,generateMipmaps:e,type:Fi,colorSpace:si,depthBuffer:t})}function oa(s,e,t){return new Gi({name:s,uniforms:e,vertexShader:et.cube_vert,fragmentShader:t,side:ri,blending:$n,depthTest:!1,depthWrite:!1})}function v0(){return oa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function b0(){return oa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Gd}},`

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
	`)}function w0(){return oa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${g0}
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
	`)}function vd(){return oa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function bd(){return oa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function S0(s){let e=new WeakMap,t=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===qs||f===vo)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new aa(g.height);return x.fromEquirectangularTexture(s,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===qs||f===vo,x=f===Zn||f===Xs;if(g||x){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Js(s)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return g&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new Js(s)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===qs?d.mapping=Zn:f===vo&&(d.mapping=Xs),d}function l(d){let f=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function M0(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&zn("WebGLRenderer: "+i+" extension not supported."),n}}}function E0(s,e,t,i){let n={},r=new WeakMap,a=new FinalizationRegistry(g=>delete n[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete n[g.id],a.unregister(g);let x=r.get(g);x&&(e.remove(x),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,x){return n[x.id]!==void 0||(x.addEventListener("dispose",o),n[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(g){let x=g.attributes;for(let m in x)e.update(x[m],s.ARRAY_BUFFER)}function u(g){let x=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let y=x!==null?x.array.length:m.array.length/3-1,S=m.count>=65535?Er:Mr,v=new S(Math.ceil(y/3)*6,1),T=v.array;if(x!==null){let _=x.array;p=x.version;for(let E=0,I=0;E<y;E+=3){let C=_[E+0],N=_[E+1],F=_[E+2];T[I++]=C,T[I++]=N,T[I++]=N,T[I++]=F,T[I++]=F,T[I++]=C}}else{p=m.version;for(let _=0,E=0;_<y;_+=3){let I=_+0,C=_+1,N=_+2;T[E++]=I,T[E++]=C,T[E++]=C,T[E++]=N,T[E++]=N,T[E++]=I}}v.version=p;let A=r.get(g);A&&e.remove(A),r.set(g,v)}function d(g){let x=r.get(g);if(x){let m=g.index;m!==null&&x.version<m.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in n){let x=n[g].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function T0(s,e,t){let i;function n(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(i,d,r,u*a),t.update(d,i,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(i,d,r,u*a,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];t.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function A0(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function R0(s,e,t){let i=new WeakMap,n=new gt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let I=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let v=o.attributes.position.count*S,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let A=new Float32Array(v*T*4*u),_=new Sr(A,v,T,u);_.type=gi,_.needsUpdate=!0;let E=S*4;for(let C=0;C<u;C++){let N=m[C],F=p[C],G=y[C],P=v*T*4*C;for(let X=0;X<N.count;X++){let V=X*E;f===!0&&(n.fromBufferAttribute(N,X),A[P+V+0]=n.x,A[P+V+1]=n.y,A[P+V+2]=n.z,A[P+V+3]=0),g===!0&&(n.fromBufferAttribute(F,X),A[P+V+4]=n.x,A[P+V+5]=n.y,A[P+V+6]=n.z,A[P+V+7]=0),x===!0&&(n.fromBufferAttribute(G,X),A[P+V+8]=n.x,A[P+V+9]=n.y,A[P+V+10]=n.z,A[P+V+11]=G.itemSize===4?n.w:1)}}d={count:u,texture:_,size:new xe(v,T)},i.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function C0(s,e,t,i,n){let r=new WeakMap;function a(c){let h=n.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var L0={[_c]:"LINEAR_TONE_MAPPING",[yc]:"REINHARD_TONE_MAPPING",[xc]:"CINEON_TONE_MAPPING",[Zr]:"ACES_FILMIC_TONE_MAPPING",[bc]:"AGX_TONE_MAPPING",[wc]:"NEUTRAL_TONE_MAPPING",[vc]:"CUSTOM_TONE_MAPPING"};function P0(s,e,t,i,n,r){let a=new pi(e,t,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Pt;h.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ut([0,2,0,0,2,0],2));let u=new ao({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ne(h,u),f=new qn(-1,1,1,-1,0,1),g=null,x=null,m=!1,p,y=null,S=[],v=!1;this.setSize=function(T,A){a.setSize(T,A),o!==null&&o.setSize(T,A),l!==null&&l.setSize(T,A);for(let _=0;_<S.length;_++){let E=S[_];E.setSize&&E.setSize(T,A)}},this.setEffects=function(T){S=T,v=S.length>0&&S[0].isRenderPass===!0;let A=a.width,_=a.height;S.length>0&&o===null&&(o=new pi(A,_,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),l=new pi(A,_,{type:Fi,depthBuffer:!1,stencilBuffer:!1}));let E=n===!0&&S.some(I=>I.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new dn(A,_),r===!0&&(c.format=yn,c.type=jn)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let I=0;I<S.length;I++){let C=S[I];C.setSize&&C.setSize(A,_),E&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(T,A){if(m||T.toneMapping===qi&&S.length===0)return!1;if(y=A,A!==null){let _=A.width,E=A.height;(a.width!==_||a.height!==E)&&this.setSize(_,E)}return v===!1&&T.setRenderTarget(a),p=T.toneMapping,T.toneMapping=qi,!0},this.hasRenderPass=function(){return v},this.end=function(T,A){T.toneMapping=p,m=!0;let _=a,E=o;for(let I=0;I<S.length;I++){let C=S[I];C.enabled!==!1&&(C.render(T,E,_,A),C.needsSwap!==!1&&(_=E,E=E===o?l:o))}if(g!==T.outputColorSpace||x!==T.toneMapping){g=T.outputColorSpace,x=T.toneMapping,u.defines={},tt.getTransfer(g)===mt&&(u.defines.SRGB_TRANSFER="");let I=L0[x];I&&(u.defines[I]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(y),T.render(d,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Vd=new Vt,Wd=new dn(1,1),Xd=new Ir(1),qd=new Sr,Yd=new Ka,$d=new Pr,wd=[],Sd=[],Md=new Float32Array(16),Ed=new Float32Array(9),Td=new Float32Array(4);function js(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=wd[n];if(r===void 0&&(r=new Float32Array(n),wd[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Wt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Xt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function hl(s,e){let t=Sd[e];t===void 0&&(t=new Int32Array(e),Sd[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function I0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function D0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;s.uniform2fv(this.addr,e),Xt(t,e)}}function N0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;s.uniform3fv(this.addr,e),Xt(t,e)}}function O0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;s.uniform4fv(this.addr,e),Xt(t,e)}}function F0(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Td.set(i),s.uniformMatrix2fv(this.addr,!1,Td),Xt(t,i)}}function U0(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Ed.set(i),s.uniformMatrix3fv(this.addr,!1,Ed),Xt(t,i)}}function B0(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Md.set(i),s.uniformMatrix4fv(this.addr,!1,Md),Xt(t,i)}}function k0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function H0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;s.uniform2iv(this.addr,e),Xt(t,e)}}function z0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;s.uniform3iv(this.addr,e),Xt(t,e)}}function G0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;s.uniform4iv(this.addr,e),Xt(t,e)}}function V0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function W0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;s.uniform2uiv(this.addr,e),Xt(t,e)}}function X0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;s.uniform3uiv(this.addr,e),Xt(t,e)}}function q0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;s.uniform4uiv(this.addr,e),Xt(t,e)}}function ul(s){return s.version===0&&(s.compareFunction=Dc,s.needsUpdate=!0),s}function Y0(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=ul(Wd):r=Vd,t.setTexture2D(e||r,n)}function $0(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Yd,n)}function K0(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=ul(Xd):r=$d,t.setTextureCube(e||r,n)}function Z0(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||qd,n)}function J0(s){switch(s){case 5126:return I0;case 35664:return D0;case 35665:return N0;case 35666:return O0;case 35674:return F0;case 35675:return U0;case 35676:return B0;case 5124:case 35670:return k0;case 35667:case 35671:return H0;case 35668:case 35672:return z0;case 35669:case 35673:return G0;case 5125:return V0;case 36294:return W0;case 36295:return X0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return K0;case 36289:case 36303:case 36311:case 36292:return Z0}}function j0(s,e){s.uniform1fv(this.addr,e)}function Q0(s,e){let t=js(e,this.size,2);s.uniform2fv(this.addr,t)}function e_(s,e){let t=js(e,this.size,3);s.uniform3fv(this.addr,t)}function t_(s,e){let t=js(e,this.size,4);s.uniform4fv(this.addr,t)}function i_(s,e){let t=js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function n_(s,e){let t=js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function s_(s,e){let t=js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function r_(s,e){s.uniform1iv(this.addr,e)}function a_(s,e){s.uniform2iv(this.addr,e)}function o_(s,e){s.uniform3iv(this.addr,e)}function l_(s,e){s.uniform4iv(this.addr,e)}function c_(s,e){s.uniform1uiv(this.addr,e)}function h_(s,e){s.uniform2uiv(this.addr,e)}function u_(s,e){s.uniform3uiv(this.addr,e)}function d_(s,e){s.uniform4uiv(this.addr,e)}function f_(s,e,t){let i=this.cache,n=e.length,r=hl(t,n);Wt(i,r)||(s.uniform1iv(this.addr,r),Xt(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=ul(Wd):a=Vd;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,r[o])}function p_(s,e,t){let i=this.cache,n=e.length,r=hl(t,n);Wt(i,r)||(s.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Yd,r[a])}function m_(s,e,t){let i=this.cache,n=e.length,r=hl(t,n);Wt(i,r)||(s.uniform1iv(this.addr,r),Xt(i,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=ul(Xd):a=$d;for(let o=0;o!==n;++o)t.setTextureCube(e[o]||a,r[o])}function g_(s,e,t){let i=this.cache,n=e.length,r=hl(t,n);Wt(i,r)||(s.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||qd,r[a])}function __(s){switch(s){case 5126:return j0;case 35664:return Q0;case 35665:return e_;case 35666:return t_;case 35674:return i_;case 35675:return n_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return a_;case 35668:case 35672:return o_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return h_;case 36295:return u_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}var Qc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=J0(t.type)}},eh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=__(t.type)}},th=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(e,t[o.id],i)}}},Jc=/(\w+)(\])?(\[|\.)?/g;function Ad(s,e){s.seq.push(e),s.map[e.id]=e}function y_(s,e,t){let i=s.name,n=i.length;for(Jc.lastIndex=0;;){let r=Jc.exec(i),a=Jc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Ad(t,c===void 0?new Qc(o,s,e):new eh(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new th(o),Ad(t,u)),t=u}}}var Zs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);y_(o,l,this)}let n=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function Rd(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var x_=37297,v_=0;function b_(s,e){let t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Cd=new Ke;function w_(s){tt._getMatrix(Cd,tt.workingColorSpace,s);let e=`mat3( ${Cd.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(s)){case br:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ld(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+b_(s.getShaderSource(e),o)}else return r}function S_(s,e){let t=w_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var M_={[_c]:"Linear",[yc]:"Reinhard",[xc]:"Cineon",[Zr]:"ACESFilmic",[bc]:"AgX",[wc]:"Neutral",[vc]:"Custom"};function E_(s,e){let t=M_[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ll=new w;function T_(){tt.getLuminanceCoefficients(ll);let s=ll.x.toFixed(4),e=ll.y.toFixed(4),t=ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function R_(s){let e=[];for(let t in s){let i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function C_(s,e){let t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(e,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ra(s){return s!==""}function Pd(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Id(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var L_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(s){return s.replace(L_,P_)}function P_(s,e){let t=et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ih(t)}var I_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dd(s){return s.replace(I_,D_)}function D_(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Nd(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var N_={[Kr]:"SHADOWMAP_TYPE_PCF",[Gs]:"SHADOWMAP_TYPE_VSM"};function O_(s){return N_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var F_={[Xs]:"ENVMAP_MODE_REFRACTION"};function U_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":F_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var B_={[gc]:"ENVMAP_BLENDING_MULTIPLY",[ju]:"ENVMAP_BLENDING_MIX",[Qu]:"ENVMAP_BLENDING_ADD"};function k_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":B_[s.combine]||"ENVMAP_BLENDING_NONE"}function H_(s,e,t,i){let n=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=O_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=U_(t),u=k_(t),d=A_(t),f=R_(r),g=n.createProgram(),x,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ra).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ra).join(`
`),m.length>0&&(m+=`
`)):(x=[Nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),m=[Nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?et.tonemapping_pars_fragment:"",t.toneMapping!==qi?E_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,S_("linearToOutputTexel",t.outputColorSpace),T_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ra).join(`
`)),a=ih(a),a=Pd(a,t),a=Id(a,t),o=ih(o),o=Pd(o,t),o=Id(o,t),a=Dd(a),o=Dd(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=p+x+a,S=p+m+o,v=Rd(n,n.VERTEX_SHADER,y),T=Rd(n,n.FRAGMENT_SHADER,S);n.attachShader(g,v),n.attachShader(g,T),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function A(C){if(s.debug.checkShaderErrors){let N=n.getProgramInfoLog(g)||"",F=n.getShaderInfoLog(v)||"",G=n.getShaderInfoLog(T)||"",P=N.trim(),X=F.trim(),V=G.trim(),z=!0,ie=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,g,v,T);else{let q=Ld(n,v,"vertex"),Q=Ld(n,T,"fragment");Xe("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+q+`
`+Q)}else P!==""?Be("WebGLProgram: Program Info Log:",P):(X===""||V==="")&&(ie=!1);ie&&(C.diagnostics={runnable:z,programLog:P,vertexShader:{log:X,prefix:x},fragmentShader:{log:V,prefix:m}})}n.deleteShader(v),n.deleteShader(T),_=new Zs(n,g),E=C_(n,g)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=n.getProgramParameter(g,x_)),I},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=v_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=T,this}var z_=0,nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new sh(e),t.set(e,i)),i}},sh=class{constructor(e){this.id=z_++,this.code=e,this.usedTimes=0}};function G_(s){return s===Dn||s===ta||s===ia}function V_(s,e,t,i,n,r){let a=new As,o=new nh,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,E,I,C,N,F){let G=C.fog,P=N.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,z=e.get(_.envMap||X,V),ie=d[_.type],q=i.precision;_.precision!==null&&(q=i.getMaxPrecision(_.precision),q!==_.precision&&Be("WebGLProgram.getParameters:",_.precision,"not supported, using",q,"instead."));let Q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ee=Q!==void 0?Q.length:0,J=0;P.morphAttributes.position!==void 0&&(J=1),P.morphAttributes.normal!==void 0&&(J=2),P.morphAttributes.color!==void 0&&(J=3);let _e,W,ae,Me;if(ie){let ye=Ki[ie];_e=ye.vertexShader,W=ye.fragmentShader}else{_e=_.vertexShader,W=_.fragmentShader;let ye=o.getVertexShaderStage(_),dt=o.getFragmentShaderStage(_);o.update(_,ye,dt),ae=ye.id,Me=dt.id}let Te=s.getRenderTarget(),fe=s.state.buffers.depth.getReversed(),Pe=N.isInstancedMesh===!0,ct=N.isBatchedMesh===!0,Fe=!!_.map,rt=!!_.matcap,ht=!!z,Ye=ht&&z.isPMREMTexture===!0,nt=!!_.aoMap,Se=!!_.lightMap,Ae=!!_.bumpMap&&_.wireframe===!1,ue=!!_.normalMap,Ee=!!_.displacementMap,Ne=!!_.emissiveMap,We=!!_.metalnessMap,St=!!_.roughnessMap,Nt=_.anisotropy>0,O=_.clearcoat>0,Mt=_.diffuseRoughness>0,at=_.dispersion>0,ot=_.retroreflectivity>0,oe=_.iridescence>0,_t=_.sheen>0,Ue=_.transmission>0,Ge=Nt&&!!_.anisotropyMap,R=O&&!!_.clearcoatMap,b=O&&!!_.clearcoatNormalMap,U=O&&!!_.clearcoatRoughnessMap,se=Mt&&!!_.diffuseRoughnessMap,$=oe&&!!_.iridescenceMap,te=oe&&!!_.iridescenceThicknessMap,le=_t&&!!_.sheenColorMap,K=_t&&!!_.sheenRoughnessMap,Z=!!_.specularMap,he=!!_.specularColorMap,L=!!_.specularIntensityMap,j=Ue&&!!_.transmissionMap,Y=Ue&&!!_.thicknessMap,pe=!!_.gradientMap,ce=!!_.alphaMap,de=_.alphaTest>0,He=!!_.alphaHash,Ze=!!_.extensions,re=qi;_.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(re=s.toneMapping);let ze=Ye?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Je={shaderID:ie,shaderType:_.type,shaderName:_.name,vertexShader:_e,fragmentShader:W,defines:_.defines,customVertexShaderID:ae,customFragmentShaderID:Me,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:q,batching:ct,batchingColor:ct&&N._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&N.instanceColor!==null,instancingMorph:Pe&&N.morphTexture!==null,outputColorSpace:Te===null?s.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Fe,matcap:rt,envMap:ht,envMapMode:ht&&z.mapping,envMapPMREM:Ye,envMapMaxLod:Ye?ze.length-1:null,envMapSize:Ye?ze[0].width:null,aoMap:nt,lightMap:Se,bumpMap:Ae,normalMap:ue,displacementMap:Ee,emissiveMap:Ne,normalMapObjectSpace:ue&&_.normalMapType===nd,normalMapTangentSpace:ue&&_.normalMapType===rl,packedNormalMap:ue&&_.normalMapType===rl&&G_(_.normalMap.format),metalnessMap:We,roughnessMap:St,anisotropy:Nt,anisotropyMap:Ge,clearcoat:O,clearcoatMap:R,clearcoatNormalMap:b,clearcoatRoughnessMap:U,diffuseRoughness:Mt,diffuseRoughnessMap:se,dispersion:at,retroreflection:ot,iridescence:oe,iridescenceMap:$,iridescenceThicknessMap:te,sheen:_t,sheenColorMap:le,sheenRoughnessMap:K,specularMap:Z,specularColorMap:he,specularIntensityMap:L,transmission:Ue,transmissionMap:j,thicknessMap:Y,gradientMap:pe,opaque:_.transparent===!1&&_.blending===Vs&&_.alphaToCoverage===!1,alphaMap:ce,alphaTest:de,alphaHash:He,combine:_.combine,mapUv:Fe&&f(_.map.channel),aoMapUv:nt&&f(_.aoMap.channel),lightMapUv:Se&&f(_.lightMap.channel),bumpMapUv:Ae&&f(_.bumpMap.channel),normalMapUv:ue&&f(_.normalMap.channel),displacementMapUv:Ee&&f(_.displacementMap.channel),emissiveMapUv:Ne&&f(_.emissiveMap.channel),metalnessMapUv:We&&f(_.metalnessMap.channel),roughnessMapUv:St&&f(_.roughnessMap.channel),anisotropyMapUv:Ge&&f(_.anisotropyMap.channel),clearcoatMapUv:R&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:$&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:te&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:le&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:K&&f(_.sheenRoughnessMap.channel),specularMapUv:Z&&f(_.specularMap.channel),specularColorMapUv:he&&f(_.specularColorMap.channel),specularIntensityMapUv:L&&f(_.specularIntensityMap.channel),transmissionMapUv:j&&f(_.transmissionMap.channel),thicknessMapUv:Y&&f(_.thicknessMap.channel),alphaMapUv:ce&&f(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ue||Nt),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(Fe||ce),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&ue===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:fe,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:J,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:F.filter(ye=>ye.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:re,decodeVideoTexture:Fe&&_.map.isVideoTexture===!0&&tt.getTransfer(_.map.colorSpace)===mt,decodeVideoTextureEmissive:Ne&&_.emissiveMap.isVideoTexture===!0&&tt.getTransfer(_.emissiveMap.colorSpace)===mt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===kt,flipSided:_.side===ri,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ze&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&_.extensions.multiDraw===!0||ct)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Je.vertexUv1s=l.has(1),Je.vertexUv2s=l.has(2),Je.vertexUv3s=l.has(3),l.clear(),Je}function x(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)E.push(I),E.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(m(E,_),p(E,_),E.push(s.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function m(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapPMREM),_.push(E.envMapMaxLod),_.push(E.envMapSize),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.diffuseRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.numLightProbeGrids),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function p(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){let E=d[_.type],I;if(E){let C=Ki[E];I=md.clone(C.uniforms)}else I=_.uniforms;return I}function S(_,E){let I=h.get(E);return I!==void 0?++I.usedTimes:(I=new H_(s,E,_,n),c.push(I),h.set(E,I)),I}function v(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:y,acquireProgram:S,releaseProgram:v,releaseShaderCache:T,programs:c,dispose:A}}function W_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function X_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Od(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Fd(){let s=[],e=0,t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,x,m,p){let y=s[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},s[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=g,y.materialVariant=a(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=m,y.group=p),e++,y}function l(d,f,g,x,m,p,y){y.reversedDepth===!0&&(m=-m);let S=o(d,f,g,x,m,p);g.transmission>0?i.push(S):g.transparent===!0?n.push(S):t.push(S)}function c(d,f,g,x,m,p){let y=o(d,f,g,x,m,p);g.transmission>0?i.unshift(y):g.transparent===!0?n.unshift(y):t.unshift(y)}function h(d,f){t.length>1&&t.sort(d||X_),i.length>1&&i.sort(f||Od),n.length>1&&n.sort(f||Od)}function u(){for(let d=e,f=s.length;d<f;d++){let g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:u,sort:h}}function q_(){let s=new WeakMap;function e(i,n){let r=s.get(i),a;return r===void 0?(a=new Fd,s.set(i,[a])):n>=r.length?(a=new Fd,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Y_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new w,color:new Ce};break;case"SpotLight":t={position:new w,direction:new w,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new w,halfWidth:new w,halfHeight:new w};break}return s[e.id]=t,t}}}function $_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var K_=0;function Z_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function J_(s){let e=new Y_,t=$_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new w);let n=new w,r=new qe,a=new qe;function o(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,S=0,v=0,T=0,A=0,_=0,E=0,I=0,C=0;c.sort(Z_);for(let F=0,G=c.length;F<G;F++){let P=c[F],X=P.color,V=P.intensity,z=P.distance,ie=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Dn?ie=P.shadow.map.texture:ie=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=X.r*V,u+=X.g*V,d+=X.b*V;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],V);C++}else if(P.isSunLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[g]=ee,i.sunShadowMap[g]=ie;let J=Q.getViewportCount();for(let _e=0;_e<J;_e++)i.sunShadowMatrix[x+_e]=Q.getMatrix(_e),i.sunShadowCascade[x+_e]=Q._cascadeData[_e];x+=J,g++}i.sun[f]=q,f++}else if(P.isDirectionalLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,i.directionalShadow[m]=ee,i.directionalShadowMap[m]=ie,i.directionalShadowMatrix[m]=P.shadow.matrix,T++}i.directional[m]=q,m++}else if(P.isSpotLight){let q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(X).multiplyScalar(V),q.distance=z,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[y]=q;let Q=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,Q.updateMatrices(P),P.castShadow&&I++),i.spotLightMatrix[y]=Q.matrix,P.castShadow){let ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,i.spotShadow[y]=ee,i.spotShadowMap[y]=ie,_++}y++}else if(P.isRectAreaLight){let q=e.get(P);q.color.copy(X).multiplyScalar(V),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[S]=q,S++}else if(P.isPointLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){let Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,ee.shadowCameraNear=Q.camera.near,ee.shadowCameraFar=Q.camera.far,i.pointShadow[p]=ee,i.pointShadowMap[p]=ie,i.pointShadowMatrix[p]=P.shadow.matrix,A++}i.point[p]=q,p++}else if(P.isHemisphereLight){let q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(V),q.groundColor.copy(P.groundColor).multiplyScalar(V),i.hemi[v]=q,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let N=i.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==y||N.rectAreaLength!==S||N.hemiLength!==v||N.numSunShadows!==g||N.numDirectionalShadows!==T||N.numPointShadows!==A||N.numSpotShadows!==_||N.numSpotMaps!==E||N.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=m,i.spot.length=y,i.rectArea.length=S,i.point.length=p,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+E-I,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=C,N.sunLength=f,N.directionalLength=m,N.pointLength=p,N.spotLength=y,N.rectAreaLength=S,N.hemiLength=v,N.numSunShadows=g,N.numDirectionalShadows=T,N.numPointShadows=A,N.numSpotShadows=_,N.numSpotMaps=E,N.numLightProbes=C,i.version=K_++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let y=0,S=c.length;y<S;y++){let v=c[y];if(v.isSunLight){let T=i.sun[u];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let T=i.directional[d];T.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(p),d++}else if(v.isSpotLight){let T=i.spot[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let T=i.rectArea[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let T=i.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Ud(s){let e=new J_(s),t=[],i=[],n=[];function r(u){h.camera=u,t.length=0,i.length=0,n.length=0}function a(u){u.isLightProbeGrid?n.push(u):t.push(u)}function o(u){i.push(u)}function l(){e.setup(t),n.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function j_(s){let e=new WeakMap;function t(n,r=0){let a=e.get(n),o;return a===void 0?(o=new Ud(s),e.set(n,[o])):r>=a.length?(o=new Ud(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ey=`uniform sampler2D shadow_pass;
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
}`,ty=[new w(1,0,0),new w(-1,0,0),new w(0,1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1)],iy=[new w(0,-1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1),new w(0,-1,0),new w(0,-1,0)],Bd=new qe,sa=new w,jc=new w;function ny(s,e,t){let i=new An,n=new xe,r=new xe,a=new gt,o=new oo,l=new lo,c={},h=t.maxTextureSize,u={[Xi]:ri,[ri]:Xi,[kt]:kt},d=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:Q_,fragmentShader:ey}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Pt;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ne(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kr;let p=this.type;this.render=function(A,_,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===xo&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Kr);let I=s.getRenderTarget(),C=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),F=s.state;F.setBlending($n),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let G=p!==this.type;G&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(X=>X.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,X=A.length;P<X;P++){let V=A[P],z=V.shadow;if(z===void 0){Be("WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;n.copy(z.mapSize);let ie=z.getFrameExtents();n.multiply(ie),r.copy(z.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/ie.x),n.x=r.x*ie.x,z.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/ie.y),n.y=r.y*ie.y,z.mapSize.y=r.y));let q=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=q,z.map===null||G===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Gs){if(V.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new pi(n.x,n.y,{format:Dn,type:Fi,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),z.map.texture.name=V.name+".shadowMap",z.map.depthTexture=new dn(n.x,n.y,gi),z.map.depthTexture.name=V.name+".shadowMapDepth",z.map.depthTexture.format=ln,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Dt,z.map.depthTexture.magFilter=Dt}else V.isPointLight?(z.map=new aa(n.x),z.map.depthTexture=new Ir(n.x,Oi)):(z.map=new pi(n.x,n.y),z.map.depthTexture=new dn(n.x,n.y,Oi)),z.map.depthTexture.name=V.name+".shadowMap",z.map.depthTexture.format=ln,this.type===Kr?(z.map.depthTexture.compareFunction=q?Ic:Pc,z.map.depthTexture.minFilter=Gt,z.map.depthTexture.magFilter=Gt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Dt,z.map.depthTexture.magFilter=Dt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==n.x||z.map.height!==n.y)&&z.map.setSize(n.x,n.y);let Q=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();V.isPointLight!==!0&&z.updateMatrices(V,E);let ee=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:E.layers;for(let J=0;J<Q;J++){let _e=z.getCamera(J);if(V.isPointLight){let W=z.camera,ae=z.matrix,Me=V.distance||W.far;Me!==W.far&&(W.far=Me,W.updateProjectionMatrix()),sa.setFromMatrixPosition(V.matrixWorld),W.position.copy(sa),jc.copy(W.position),jc.add(ty[J]),W.up.copy(iy[J]),W.lookAt(jc),W.updateMatrixWorld(),ae.makeTranslation(-sa.x,-sa.y,-sa.z),Bd.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Bd,W.coordinateSystem,W.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,J),s.clear();else{J===0&&(s.setRenderTarget(z.map),s.clear());let W=z.getViewport(J);a.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),F.viewport(a)}i=z.getFrustum(J),v(_,E,_e,V,ee,this.type)}z.isPointLightShadow!==!0&&this.type===Gs&&y(z,E),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(I,C,N)};function y(A,_){let E=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new pi(n.x,n.y,{format:Dn,type:Fi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(_,null,E,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(_,null,E,f,x,null)}function S(A,_,E,I){let C=null,N=E.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)C=N;else if(C=E.isPointLight===!0?l:o,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let F=C.uuid,G=_.uuid,P=c[F];P===void 0&&(P={},c[F]=P);let X=P[G];X===void 0&&(X=C.clone(),P[G]=X,_.addEventListener("dispose",T)),C=X}if(C.visible=_.visible,C.wireframe=_.wireframe,I===Gs?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:u[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,E.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=s.properties.get(C);F.light=E}return C}function v(A,_,E,I,C,N){if(A.visible===!1)return;if(A.layers.test(C)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===Gs)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,A.matrixWorld);let P=e.update(A),X=A.material;if(Array.isArray(X)){let V=P.groups;for(let z=0,ie=V.length;z<ie;z++){let q=V[z],Q=X[q.materialIndex];if(Q&&Q.visible){let ee=S(A,Q,I,N);A.onBeforeShadow(s,A,_,E,P,ee,q),s.renderBufferDirect(E,null,P,ee,A,q),A.onAfterShadow(s,A,_,E,P,ee,q)}}}else if(X.visible){let V=S(A,X,I,N);A.onBeforeShadow(s,A,_,E,P,V,null),s.renderBufferDirect(E,null,P,V,A,null),A.onAfterShadow(s,A,_,E,P,V,null)}}let G=A.children;for(let P=0,X=G.length;P<X;P++)v(G[P],_,E,I,C,N)}function T(A){A.target.removeEventListener("dispose",T);for(let E in c){let I=c[E],C=A.target.uuid;C in I&&(I[C].dispose(),delete I[C])}}}function sy(s,e){function t(){let L=!1,j=new gt,Y=null,pe=new gt(0,0,0,0);return{setMask:function(ce){Y!==ce&&!L&&(s.colorMask(ce,ce,ce,ce),Y=ce)},setLocked:function(ce){L=ce},setClear:function(ce,de,He,Ze,re){re===!0&&(ce*=Ze,de*=Ze,He*=Ze),j.set(ce,de,He,Ze),pe.equals(j)===!1&&(s.clearColor(ce,de,He,Ze),pe.copy(j))},reset:function(){L=!1,Y=null,pe.set(-1,0,0,0)}}}function i(){let L=!1,j=!1,Y=null,pe=null,ce=null;return{setReversed:function(de){if(j!==de){let He=e.get("EXT_clip_control");de?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),j=de;let Ze=ce;ce=null,this.setClear(Ze)}},getReversed:function(){return j},setTest:function(de){de?fe(s.DEPTH_TEST):Pe(s.DEPTH_TEST)},setMask:function(de){Y!==de&&!L&&(s.depthMask(de),Y=de)},setFunc:function(de){if(j&&(de=fd[de]),pe!==de){switch(de){case Ha:s.depthFunc(s.NEVER);break;case za:s.depthFunc(s.ALWAYS);break;case Ga:s.depthFunc(s.LESS);break;case bs:s.depthFunc(s.LEQUAL);break;case Va:s.depthFunc(s.EQUAL);break;case Wa:s.depthFunc(s.GEQUAL);break;case Xa:s.depthFunc(s.GREATER);break;case qa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=de}},setLocked:function(de){L=de},setClear:function(de){ce!==de&&(ce=de,j&&(de=1-de),s.clearDepth(de))},reset:function(){L=!1,Y=null,pe=null,ce=null,j=!1}}}function n(){let L=!1,j=null,Y=null,pe=null,ce=null,de=null,He=null,Ze=null,re=null;return{setTest:function(ze){L||(ze?fe(s.STENCIL_TEST):Pe(s.STENCIL_TEST))},setMask:function(ze){j!==ze&&!L&&(s.stencilMask(ze),j=ze)},setFunc:function(ze,Je,ye){(Y!==ze||pe!==Je||ce!==ye)&&(s.stencilFunc(ze,Je,ye),Y=ze,pe=Je,ce=ye)},setOp:function(ze,Je,ye){(de!==ze||He!==Je||Ze!==ye)&&(s.stencilOp(ze,Je,ye),de=ze,He=Je,Ze=ye)},setLocked:function(ze){L=ze},setClear:function(ze){re!==ze&&(s.clearStencil(ze),re=ze)},reset:function(){L=!1,j=null,Y=null,pe=null,ce=null,de=null,He=null,Ze=null,re=null}}}let r=new t,a=new i,o=new n,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],x=null,m=!1,p=null,y=null,S=null,v=null,T=null,A=null,_=null,E=new Ce(0,0,0),I=0,C=!1,N=null,F=null,G=null,P=null,X=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,ie=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=ie>=1):q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=ie>=2);let Q=null,ee={},J=s.getParameter(s.SCISSOR_BOX),_e=s.getParameter(s.VIEWPORT),W=new gt().fromArray(J),ae=new gt().fromArray(_e);function Me(L,j,Y,pe){let ce=new Uint8Array(4),de=s.createTexture();s.bindTexture(L,de),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<Y;He++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,ce):s.texImage2D(j+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ce);return de}let Te={};Te[s.TEXTURE_2D]=Me(s.TEXTURE_2D,s.TEXTURE_2D,1),Te[s.TEXTURE_CUBE_MAP]=Me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[s.TEXTURE_2D_ARRAY]=Me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Te[s.TEXTURE_3D]=Me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(s.DEPTH_TEST),a.setFunc(bs),Ae(!1),ue(uc),fe(s.CULL_FACE),nt($n);function fe(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Pe(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function ct(L,j){return d[L]!==j?(s.bindFramebuffer(L,j),d[L]=j,L===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=j),L===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=j),!0):!1}function Fe(L,j){let Y=g,pe=!1;if(L){Y=f.get(j),Y===void 0&&(Y=[],f.set(j,Y));let ce=L.textures;if(Y.length!==ce.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let de=0,He=ce.length;de<He;de++)Y[de]=s.COLOR_ATTACHMENT0+de;Y.length=ce.length,pe=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,pe=!0);pe&&s.drawBuffers(Y)}function rt(L){return x!==L?(s.useProgram(L),x=L,!0):!1}let ht={[Kn]:s.FUNC_ADD,[Ou]:s.FUNC_SUBTRACT,[Fu]:s.FUNC_REVERSE_SUBTRACT};ht[Uu]=s.MIN,ht[Bu]=s.MAX;let Ye={[ku]:s.ZERO,[Hu]:s.ONE,[zu]:s.SRC_COLOR,[pc]:s.SRC_ALPHA,[Yu]:s.SRC_ALPHA_SATURATE,[Xu]:s.DST_COLOR,[Vu]:s.DST_ALPHA,[Gu]:s.ONE_MINUS_SRC_COLOR,[mc]:s.ONE_MINUS_SRC_ALPHA,[qu]:s.ONE_MINUS_DST_COLOR,[Wu]:s.ONE_MINUS_DST_ALPHA,[$u]:s.CONSTANT_COLOR,[Ku]:s.ONE_MINUS_CONSTANT_COLOR,[Zu]:s.CONSTANT_ALPHA,[Ju]:s.ONE_MINUS_CONSTANT_ALPHA};function nt(L,j,Y,pe,ce,de,He,Ze,re,ze){if(L===$n){m===!0&&(Pe(s.BLEND),m=!1);return}if(m===!1&&(fe(s.BLEND),m=!0),L!==Nu){if(L!==p||ze!==C){if((y!==Kn||T!==Kn)&&(s.blendEquation(s.FUNC_ADD),y=Kn,T=Kn),ze)switch(L){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ws:s.blendFunc(s.ONE,s.ONE);break;case dc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Xe("WebGLState: Invalid blending: ",L);break}else switch(L){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case dc:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fc:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",L);break}S=null,v=null,A=null,_=null,E.set(0,0,0),I=0,p=L,C=ze}return}ce=ce||j,de=de||Y,He=He||pe,(j!==y||ce!==T)&&(s.blendEquationSeparate(ht[j],ht[ce]),y=j,T=ce),(Y!==S||pe!==v||de!==A||He!==_)&&(s.blendFuncSeparate(Ye[Y],Ye[pe],Ye[de],Ye[He]),S=Y,v=pe,A=de,_=He),(Ze.equals(E)===!1||re!==I)&&(s.blendColor(Ze.r,Ze.g,Ze.b,re),E.copy(Ze),I=re),p=L,C=!1}function Se(L,j){L.side===kt?Pe(s.CULL_FACE):fe(s.CULL_FACE);let Y=L.side===ri;j&&(Y=!Y),Ae(Y),L.blending===Vs&&L.transparent===!1?nt($n):nt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let pe=L.stencilWrite;o.setTest(pe),pe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):Pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(L){N!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),N=L)}function ue(L){L!==Iu?(fe(s.CULL_FACE),L!==F&&(L===uc?s.cullFace(s.BACK):L===Du?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pe(s.CULL_FACE),F=L}function Ee(L){L!==G&&(z&&s.lineWidth(L),G=L)}function Ne(L,j,Y){L?(fe(s.POLYGON_OFFSET_FILL),(P!==j||X!==Y)&&(P=j,X=Y,a.getReversed()&&(j=-j,Y=-Y),s.polygonOffset(j,Y))):Pe(s.POLYGON_OFFSET_FILL)}function We(L){L?fe(s.SCISSOR_TEST):Pe(s.SCISSOR_TEST)}function St(L){L===void 0&&(L=s.TEXTURE0+V-1),Q!==L&&(s.activeTexture(L),Q=L)}function Nt(L,j,Y){Y===void 0&&(Q===null?Y=s.TEXTURE0+V-1:Y=Q);let pe=ee[Y];pe===void 0&&(pe={type:void 0,texture:void 0},ee[Y]=pe),(pe.type!==L||pe.texture!==j)&&(Q!==Y&&(s.activeTexture(Y),Q=Y),s.bindTexture(L,j||Te[L]),pe.type=L,pe.texture=j)}function O(){let L=ee[Q];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Mt(){try{s.compressedTexImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function at(){try{s.compressedTexImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function ot(){try{s.texSubImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function oe(){try{s.texSubImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function _t(){try{s.compressedTexSubImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function Ue(){try{s.compressedTexSubImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function Ge(){try{s.texStorage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function R(){try{s.texStorage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function b(){try{s.texImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function U(){try{s.texImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function se(L){return u[L]!==void 0?u[L]:s.getParameter(L)}function $(L,j){u[L]!==j&&(s.pixelStorei(L,j),u[L]=j)}function te(L){W.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),W.copy(L))}function le(L){ae.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),ae.copy(L))}function K(L,j){let Y=c.get(j);Y===void 0&&(Y=new WeakMap,c.set(j,Y));let pe=Y.get(L);pe===void 0&&(pe=s.getUniformBlockIndex(j,L.name),s.uniformBlockBinding(j,pe,pe),Y.set(L,pe))}function Z(L,j,Y){let ce=c.get(j).get(L);l[ce]!==Y&&(s.bindBufferBase(s.UNIFORM_BUFFER,ce,Y),l[ce]=Y)}function he(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},Q=null,ee={},d={},l={},f=new WeakMap,g=[],x=null,m=!1,p=null,y=null,S=null,v=null,T=null,A=null,_=null,E=new Ce(0,0,0),I=0,C=!1,N=null,F=null,G=null,P=null,X=null,W.set(0,0,s.canvas.width,s.canvas.height),ae.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:fe,disable:Pe,bindFramebuffer:ct,drawBuffers:Fe,useProgram:rt,setBlending:nt,setMaterial:Se,setFlipSided:Ae,setCullFace:ue,setLineWidth:Ee,setPolygonOffset:Ne,setScissorTest:We,activeTexture:St,bindTexture:Nt,unbindTexture:O,compressedTexImage2D:Mt,compressedTexImage3D:at,texImage2D:b,texImage3D:U,pixelStorei:$,getParameter:se,updateUBOMapping:K,uniformBlockBinding:Z,texStorage2D:Ge,texStorage3D:R,texSubImage2D:ot,texSubImage3D:oe,compressedTexSubImage2D:_t,compressedTexSubImage3D:Ue,scissor:te,viewport:le,reset:he}}function ry(s,e,t,i,n,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,x=new FinalizationRegistry(R=>g.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,b){return m?new OffscreenCanvas(R,b):Ms("canvas")}function y(R,b,U){let se=1,$=Ge(R);if(($.width>U||$.height>U)&&(se=U/Math.max($.width,$.height)),se<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let te=Math.floor(se*$.width),le=Math.floor(se*$.height);d===void 0&&(d=p(te,le));let K=b?p(te,le):d;return K.width=te,K.height=le,K.getContext("2d").drawImage(R,0,0,te,le),Be("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+te+"x"+le+")."),K}else return"data"in R&&Be("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function S(R){return R.generateMipmaps}function v(R){s.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(R,b,U,se,$,te=!1){if(R!==null){if(s[R]!==void 0)return s[R];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le;se&&(le=e.get("EXT_texture_norm16"),le||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=b;if(b===s.RED&&(U===s.FLOAT&&(K=s.R32F),U===s.HALF_FLOAT&&(K=s.R16F),U===s.UNSIGNED_BYTE&&(K=s.R8),U===s.UNSIGNED_SHORT&&le&&(K=le.R16_EXT),U===s.SHORT&&le&&(K=le.R16_SNORM_EXT)),b===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(K=s.R8UI),U===s.UNSIGNED_SHORT&&(K=s.R16UI),U===s.UNSIGNED_INT&&(K=s.R32UI),U===s.BYTE&&(K=s.R8I),U===s.SHORT&&(K=s.R16I),U===s.INT&&(K=s.R32I)),b===s.RG&&(U===s.FLOAT&&(K=s.RG32F),U===s.HALF_FLOAT&&(K=s.RG16F),U===s.UNSIGNED_BYTE&&(K=s.RG8),U===s.UNSIGNED_SHORT&&le&&(K=le.RG16_EXT),U===s.SHORT&&le&&(K=le.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&(K=s.RG8UI),U===s.UNSIGNED_SHORT&&(K=s.RG16UI),U===s.UNSIGNED_INT&&(K=s.RG32UI),U===s.BYTE&&(K=s.RG8I),U===s.SHORT&&(K=s.RG16I),U===s.INT&&(K=s.RG32I)),b===s.RGB_INTEGER&&(U===s.UNSIGNED_BYTE&&(K=s.RGB8UI),U===s.UNSIGNED_SHORT&&(K=s.RGB16UI),U===s.UNSIGNED_INT&&(K=s.RGB32UI),U===s.BYTE&&(K=s.RGB8I),U===s.SHORT&&(K=s.RGB16I),U===s.INT&&(K=s.RGB32I)),b===s.RGBA_INTEGER&&(U===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),U===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),U===s.UNSIGNED_INT&&(K=s.RGBA32UI),U===s.BYTE&&(K=s.RGBA8I),U===s.SHORT&&(K=s.RGBA16I),U===s.INT&&(K=s.RGBA32I)),b===s.RGB&&(U===s.UNSIGNED_SHORT&&le&&(K=le.RGB16_EXT),U===s.SHORT&&le&&(K=le.RGB16_SNORM_EXT),U===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),U===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),b===s.RGBA){let Z=te?br:tt.getTransfer($);U===s.FLOAT&&(K=s.RGBA32F),U===s.HALF_FLOAT&&(K=s.RGBA16F),U===s.UNSIGNED_BYTE&&(K=Z===mt?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT&&le&&(K=le.RGBA16_EXT),U===s.SHORT&&le&&(K=le.RGBA16_SNORM_EXT),U===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(R,b){let U;return R?b===null||b===Oi||b===jn?U=s.DEPTH24_STENCIL8:b===gi?U=s.DEPTH32F_STENCIL8:b===$s&&(U=s.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Oi||b===jn?U=s.DEPTH_COMPONENT24:b===gi?U=s.DEPTH_COMPONENT32F:b===$s&&(U=s.DEPTH_COMPONENT16),U}function E(R,b){return S(R)===!0||R.isFramebufferTexture&&R.minFilter!==Dt&&R.minFilter!==Gt?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function I(R){let b=new WeakRef(R);i.get(R).__ref=b,g.add(b),x.register(R,b,b)}function C(R){let b=i.get(R).__ref;b!==void 0&&(g.delete(b),x.unregister(b))}function N(R){G(R.target)}function F(R){P(R.target)}function G(R){R.removeEventListener("dispose",N),C(R),V(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function P(R){R.removeEventListener("dispose",F),C(R),ie(R)}function X(){for(let R of g){let b=R.deref();b!==void 0&&(b.isRenderTarget===!0?P(b):G(b))}g.clear(),u.clear()}function V(R){let b=i.get(R);if(b.__webglInit===void 0)return;let U=R.source,se=f.get(U);if(se){let $=se[b.__cacheKey];$.usedTimes--,$.usedTimes===0&&z(R),Object.keys(se).length===0&&f.delete(U)}i.remove(R)}function z(R){let b=i.get(R);s.deleteTexture(b.__webglTexture);let U=R.source,se=f.get(U);delete se[b.__cacheKey],a.memory.textures--}function ie(R){let b=i.get(R);b.__depthDisposeCallback&&b.__depthDisposeCallback();let U=R.depthTexture;if(U&&U.renderTarget===R&&G(U),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let te=0;te<b.__webglFramebuffer[$].length;te++)s.deleteFramebuffer(b.__webglFramebuffer[$][te]);else s.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)s.deleteFramebuffer(b.__webglFramebuffer[$]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let se=R.textures;for(let $=0,te=se.length;$<te;$++){let le=i.get(se[$]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),a.memory.textures--),i.remove(se[$])}i.remove(R)}let q=0;function Q(){q=0}function ee(){return q}function J(R){q=R}function _e(){let R=q;return R>=n.maxTextures&&Be("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+n.maxTextures),q+=1,R}function W(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.mipmapsAutoUpdate),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function ae(R,b){let U=i.get(R);if(R.isVideoTexture&&_t(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){let se=R.image;if(se===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(U,R,b);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+b)}function Me(R,b){let U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){Se(U,R,b);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+b)}function Te(R,b){let U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){Se(U,R,b);return}t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+b)}function fe(R,b){let U=i.get(R);if(R.version>0&&U.__version!==R.version){Ae(U,R,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+b)}let Pe={[Pi]:s.REPEAT,[yi]:s.CLAMP_TO_EDGE,[ws]:s.MIRRORED_REPEAT},ct={[Dt]:s.NEAREST,[bo]:s.NEAREST_MIPMAP_NEAREST,[Jn]:s.NEAREST_MIPMAP_LINEAR,[Gt]:s.LINEAR,[Ys]:s.LINEAR_MIPMAP_NEAREST,[wi]:s.LINEAR_MIPMAP_LINEAR},Fe={[rd]:s.NEVER,[Dc]:s.ALWAYS,[ad]:s.LESS,[Pc]:s.LEQUAL,[od]:s.EQUAL,[Ic]:s.GEQUAL,[ld]:s.GREATER,[cd]:s.NOTEQUAL};function rt(R,b){if(b.type===gi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Gt||b.magFilter===Ys||b.magFilter===Jn||b.magFilter===wi||b.minFilter===Gt||b.minFilter===Ys||b.minFilter===Jn||b.minFilter===wi)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Pe[b.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Pe[b.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Pe[b.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ct[b.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ct[b.minFilter]),b.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Fe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Dt||b.minFilter!==Jn&&b.minFilter!==wi||b.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ht(R,b){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",N),I(b));let se=b.source,$=f.get(se);$===void 0&&($={},f.set(se,$));let te=W(b);if(te!==R.__cacheKey){$[te]===void 0&&($[te]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,U=!0),$[te].usedTimes++;let le=$[R.__cacheKey];le!==void 0&&($[R.__cacheKey].usedTimes--,le.usedTimes===0&&z(b)),R.__cacheKey=te,R.__webglTexture=$[te].texture}return U}function Ye(R,b,U){return Math.floor(Math.floor(R/U)/b)}function nt(R,b,U,se){let te=R.updateRanges;if(te.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,U,se,b.data);else{te.sort((L,j)=>L.start-j.start);let le=0;for(let L=1;L<te.length;L++){let j=te[le],Y=te[L],pe=j.start+j.count,ce=Ye(Y.start,b.width,4),de=Ye(j.start,b.width,4);Y.start<=pe+1&&ce===de&&Ye(Y.start+Y.count-1,b.width,4)===ce?j.count=Math.max(j.count,Y.start+Y.count-j.start):(++le,te[le]=Y)}te.length=le+1;let K=t.getParameter(s.UNPACK_ROW_LENGTH),Z=t.getParameter(s.UNPACK_SKIP_PIXELS),he=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let L=0,j=te.length;L<j;L++){let Y=te[L],pe=Math.floor(Y.start/4),ce=Math.ceil(Y.count/4),de=pe%b.width,He=Math.floor(pe/b.width),Ze=ce,re=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,de),t.pixelStorei(s.UNPACK_SKIP_ROWS,He),t.texSubImage2D(s.TEXTURE_2D,0,de,He,Ze,re,U,se,b.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,K),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(s.UNPACK_SKIP_ROWS,he)}}function Se(R,b,U){let se=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(se=s.TEXTURE_3D);let $=ht(R,b),te=b.source;t.bindTexture(se,R.__webglTexture,s.TEXTURE0+U);let le=i.get(te);if(te.version!==le.__version||$===!0){if(t.activeTexture(s.TEXTURE0+U),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let re=tt.getPrimaries(tt.workingColorSpace),ze=b.colorSpace===xn?null:tt.getPrimaries(b.colorSpace),Je=b.colorSpace===xn||re===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je)}t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let Z=y(b.image,!1,n.maxTextureSize);Z=Ue(b,Z);let he=r.convert(b.format,b.colorSpace),L=r.convert(b.type),j=A(b.internalFormat,he,L,b.normalized,b.colorSpace,b.isVideoTexture);rt(se,b);let Y,pe=b.mipmaps,ce=b.isVideoTexture!==!0,de=le.__version===void 0||$===!0,He=te.dataReady,Ze=E(b,Z);if(b.isDepthTexture)j=_(b.format===yn,b.type),de&&(ce?t.texStorage2D(s.TEXTURE_2D,1,j,Z.width,Z.height):t.texImage2D(s.TEXTURE_2D,0,j,Z.width,Z.height,0,he,L,null));else if(b.isDataTexture)if(pe.length>0){ce&&de&&t.texStorage2D(s.TEXTURE_2D,Ze,j,pe[0].width,pe[0].height);for(let re=0,ze=pe.length;re<ze;re++)Y=pe[re],ce?He&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,Y.width,Y.height,he,L,Y.data):t.texImage2D(s.TEXTURE_2D,re,j,Y.width,Y.height,0,he,L,Y.data);b.generateMipmaps=!1}else ce?(de&&t.texStorage2D(s.TEXTURE_2D,Ze,j,Z.width,Z.height),He&&nt(b,Z,he,L)):t.texImage2D(s.TEXTURE_2D,0,j,Z.width,Z.height,0,he,L,Z.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ce&&de&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ze,j,pe[0].width,pe[0].height,Z.depth);for(let re=0,ze=pe.length;re<ze;re++)if(Y=pe[re],b.format!==Si)if(he!==null)if(ce){if(He)if(b.layerUpdates.size>0){let Je=Xc(Y.width,Y.height,b.format,b.type);for(let ye of b.layerUpdates){let dt=Y.data.subarray(ye*Je/Y.data.BYTES_PER_ELEMENT,(ye+1)*Je/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,ye,Y.width,Y.height,1,he,dt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,Y.width,Y.height,Z.depth,he,Y.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,j,Y.width,Y.height,Z.depth,0,Y.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?He&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,Y.width,Y.height,Z.depth,he,L,Y.data):t.texImage3D(s.TEXTURE_2D_ARRAY,re,j,Y.width,Y.height,Z.depth,0,he,L,Y.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ce&&de&&t.texStorage2D(s.TEXTURE_2D,Ze,j,pe[0].width,pe[0].height);for(let re=0,ze=pe.length;re<ze;re++)Y=pe[re],b.format!==Si?he!==null?ce?He&&t.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,Y.width,Y.height,he,Y.data):t.compressedTexImage2D(s.TEXTURE_2D,re,j,Y.width,Y.height,0,Y.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?He&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,Y.width,Y.height,he,L,Y.data):t.texImage2D(s.TEXTURE_2D,re,j,Y.width,Y.height,0,he,L,Y.data)}else if(b.isDataArrayTexture)if(ce){if(de&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ze,j,Z.width,Z.height,Z.depth),He)if(b.layerUpdates.size>0){let re=Xc(Z.width,Z.height,b.format,b.type);for(let ze of b.layerUpdates){let Je=Z.data.subarray(ze*re/Z.data.BYTES_PER_ELEMENT,(ze+1)*re/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ze,Z.width,Z.height,1,he,L,Je)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,he,L,Z.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,j,Z.width,Z.height,Z.depth,0,he,L,Z.data);else if(b.isData3DTexture)ce?(de&&t.texStorage3D(s.TEXTURE_3D,Ze,j,Z.width,Z.height,Z.depth),He&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,he,L,Z.data)):t.texImage3D(s.TEXTURE_3D,0,j,Z.width,Z.height,Z.depth,0,he,L,Z.data);else if(b.isFramebufferTexture){if(de)if(ce)t.texStorage2D(s.TEXTURE_2D,Ze,j,Z.width,Z.height);else{let re=Z.width,ze=Z.height;for(let Je=0;Je<Ze;Je++)t.texImage2D(s.TEXTURE_2D,Je,j,re,ze,0,he,L,null),re>>=1,ze>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){let re=s.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),Z.parentNode!==re){re.appendChild(Z),u.add(b),re.onpaint=ze=>{let Je=ze.changedElements;for(let ye of u)Je.includes(ye.image)&&(ye.needsUpdate=!0)},re.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Z);else{let Je=s.RGBA,ye=s.RGBA,dt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Je,ye,dt,Z)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(pe.length>0){if(ce&&de){let re=Ge(pe[0]);t.texStorage2D(s.TEXTURE_2D,Ze,j,re.width,re.height)}for(let re=0,ze=pe.length;re<ze;re++)Y=pe[re],ce?He&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,he,L,Y):t.texImage2D(s.TEXTURE_2D,re,j,he,L,Y);b.generateMipmaps=!1}else if(ce){if(de){let re=Ge(Z);t.texStorage2D(s.TEXTURE_2D,Ze,j,re.width,re.height)}He&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he,L,Z)}else t.texImage2D(s.TEXTURE_2D,0,j,he,L,Z);S(b)&&b.mipmapsAutoUpdate===!0&&v(se),le.__version=te.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Ae(R,b,U){if(b.image.length!==6)return;let se=ht(R,b),$=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+U);let te=i.get($);if($.version!==te.__version||se===!0){t.activeTexture(s.TEXTURE0+U);let le=tt.getPrimaries(tt.workingColorSpace),K=b.colorSpace===xn?null:tt.getPrimaries(b.colorSpace),Z=b.colorSpace===xn||le===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let he=b.isCompressedTexture||b.image[0].isCompressedTexture,L=b.image[0]&&b.image[0].isDataTexture,j=[];for(let ye=0;ye<6;ye++)!he&&!L?j[ye]=y(b.image[ye],!0,n.maxCubemapSize):j[ye]=L?b.image[ye].image:b.image[ye],j[ye]=Ue(b,j[ye]);let Y=j[0],pe=r.convert(b.format,b.colorSpace),ce=r.convert(b.type),de=A(b.internalFormat,pe,ce,b.normalized,b.colorSpace),He=b.isVideoTexture!==!0,Ze=te.__version===void 0||se===!0,re=$.dataReady,ze=E(b,Y);rt(s.TEXTURE_CUBE_MAP,b);let Je;if(b.isDepthTexture){if(de=_(b.format===yn,b.type),Ze)if(He)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,de,Y.width,Y.height);else for(let ye=0;ye<6;ye++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,de,Y.width,Y.height,0,pe,ce,null)}else if(he){He&&Ze&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ze,de,Y.width,Y.height);for(let ye=0;ye<6;ye++){Je=j[ye].mipmaps;for(let dt=0;dt<Je.length;dt++){let It=Je[dt];b.format!==Si?pe!==null?He?re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt,0,0,It.width,It.height,pe,It.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt,de,It.width,It.height,0,It.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt,0,0,It.width,It.height,pe,ce,It.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt,de,It.width,It.height,0,pe,ce,It.data)}}}else{if(Je=b.mipmaps,He&&Ze){Je.length>0&&ze++;let ye=Ge(j[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ze,de,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(L){He?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,j[ye].width,j[ye].height,pe,ce,j[ye].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,de,j[ye].width,j[ye].height,0,pe,ce,j[ye].data);for(let dt=0;dt<Je.length;dt++){let Yt=Je[dt].image[ye].image;He?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt+1,0,0,Yt.width,Yt.height,pe,ce,Yt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt+1,de,Yt.width,Yt.height,0,pe,ce,Yt.data)}}else{He?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,pe,ce,j[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,de,pe,ce,j[ye]);for(let dt=0;dt<Je.length;dt++){let It=Je[dt];He?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt+1,0,0,pe,ce,It.image[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt+1,de,pe,ce,It.image[ye])}}}S(b)&&b.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),te.__version=$.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ue(R,b,U,se,$,te){let le=r.convert(U.format,U.colorSpace),K=r.convert(U.type),Z=A(U.internalFormat,le,K,U.normalized,U.colorSpace),he=i.get(b),L=i.get(U);if(L.__renderTarget=b,!he.__hasExternalTextures){let j=Math.max(1,b.width>>te),Y=Math.max(1,b.height>>te);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,te,Z,j,Y,b.depth,0,le,K,null):t.texImage2D($,te,Z,j,Y,0,le,K,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),oe(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,$,L.__webglTexture,0,ot(b)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,$,L.__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ee(R,b,U){if(s.bindRenderbuffer(s.RENDERBUFFER,R),b.depthBuffer){let se=b.depthTexture,$=se&&se.isDepthTexture?se.type:null,te=_(b.stencilBuffer,$),le=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;oe(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot(b),te,b.width,b.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot(b),te,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,te,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,le,s.RENDERBUFFER,R)}else{let se=b.textures;for(let $=0;$<se.length;$++){let te=se[$],le=r.convert(te.format,te.colorSpace),K=r.convert(te.type),Z=A(te.internalFormat,le,K,te.normalized,te.colorSpace);oe(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot(b),Z,b.width,b.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot(b),Z,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Z,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ne(R,b,U){let se=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=i.get(b.depthTexture);$.__renderTarget=b;let te=se?b.depthTexture.image[0]:b.depthTexture.image;(!$.__webglTexture||te.width!==b.width||te.height!==b.height)&&(te.width=b.width,te.height=b.height,b.depthTexture.needsUpdate=!0),se?fe(b.depthTexture,0):ae(b.depthTexture,0);let le=$.__webglTexture,K=ot(b),Z=se?s.TEXTURE_CUBE_MAP_POSITIVE_X+U:s.TEXTURE_2D,he=b.depthTexture.format===yn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===ln)oe(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,Z,le,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,he,Z,le,0);else if(b.depthTexture.format===yn)oe(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,Z,le,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,he,Z,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(R){let b=i.get(R),U=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let se=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),se){let $=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,se.removeEventListener("dispose",$)};se.addEventListener("dispose",$),b.__depthDisposeCallback=$}b.__boundDepthTexture=se}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(U)for(let se=0;se<6;se++)Ne(b.__webglFramebuffer[se],R,se);else R.texture.mipmaps.length>0?Ne(b.__webglFramebuffer[0],R,0):Ne(b.__webglFramebuffer,R,0);else if(U){b.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[se]),b.__webglDepthbuffer[se]===void 0)b.__webglDepthbuffer[se]=s.createRenderbuffer(),Ee(b.__webglDepthbuffer[se],R,!1);else{let $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=b.__webglDepthbuffer[se];s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,te)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Ee(b.__webglDepthbuffer,R,!1);else{let $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,te)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function St(R,b,U){let se=i.get(R);b!==void 0&&ue(se.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&We(R)}function Nt(R){let b=R.texture,U=i.get(R),se=i.get(b);R.addEventListener("dispose",F),I(R);let $=R.textures,te=R.isWebGLCubeRenderTarget===!0,le=$.length>1;if(le||(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=b.version,a.memory.textures++),te){U.__webglFramebuffer=[];for(let K=0;K<6;K++)if(b.mipmaps.length>0){U.__webglFramebuffer[K]=[];for(let Z=0;Z<b.mipmaps.length;Z++)U.__webglFramebuffer[K][Z]=s.createFramebuffer()}else U.__webglFramebuffer[K]=s.createFramebuffer()}else{if(b.mipmaps.length>0){U.__webglFramebuffer=[];for(let K=0;K<b.mipmaps.length;K++)U.__webglFramebuffer[K]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(le)for(let K=0,Z=$.length;K<Z;K++){let he=i.get($[K]);he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&oe(R)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let K=0;K<$.length;K++){let Z=$[K];U.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[K]);let he=r.convert(Z.format,Z.colorSpace),L=r.convert(Z.type),j=A(Z.internalFormat,he,L,Z.normalized,Z.colorSpace,R.isXRRenderTarget===!0),Y=ot(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Y,j,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,U.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),Ee(U.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),rt(s.TEXTURE_CUBE_MAP,b);for(let K=0;K<6;K++)if(b.mipmaps.length>0)for(let Z=0;Z<b.mipmaps.length;Z++)ue(U.__webglFramebuffer[K][Z],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Z);else ue(U.__webglFramebuffer[K],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);S(b)?v(s.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(le){for(let K=0,Z=$.length;K<Z;K++){let he=$[K],L=i.get(he),j=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(j,L.__webglTexture),rt(j,he),ue(U.__webglFramebuffer,R,he,s.COLOR_ATTACHMENT0+K,j,0),S(he)&&v(j)}t.unbindTexture()}else{let K=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(K,se.__webglTexture),rt(K,b),b.mipmaps.length>0)for(let Z=0;Z<b.mipmaps.length;Z++)ue(U.__webglFramebuffer[Z],R,b,s.COLOR_ATTACHMENT0,K,Z);else ue(U.__webglFramebuffer,R,b,s.COLOR_ATTACHMENT0,K,0);S(b)?v(K):b.mipmaps.length>0&&s.texParameteri(K,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&We(R)}function O(R){let b=R.textures;for(let U=0,se=b.length;U<se;U++){let $=b[U];if(S($)&&$.mipmapsAutoUpdate===!0){let te=T(R),le=i.get($).__webglTexture;t.bindTexture(te,le),v(te),t.unbindTexture()}}}let Mt=[];function at(R){if(R.samples>0){if(oe(R)===!1){let b=R.textures,U=R.width,se=R.height,$=s.COLOR_BUFFER_BIT,te=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=i.get(R),K=b.length>1;if(K)for(let he=0;he<b.length;he++)t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let he=0;he<b.length;he++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,le.__webglColorRenderbuffer[he]);let L=i.get(b[he]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,L,0)}s.blitFramebuffer(0,0,U,se,0,0,U,se,$,s.NEAREST),l===!0&&(Mt.length=0,Mt.push(s.COLOR_ATTACHMENT0+he),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Mt.push(te),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let he=0;he<b.length;he++){t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,le.__webglColorRenderbuffer[he]);let L=i.get(b[he]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,L,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let b=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ot(R){return Math.min(n.maxSamples,R.samples)}function oe(R){let b=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function _t(R){let b=a.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Ue(R,b){let U=R.colorSpace,se=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==si&&U!==xn&&(tt.getTransfer(U)===mt?(se!==Si||$!==hi)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",U)),b}function Ge(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=_e,this.resetTextureUnits=Q,this.getTextureUnits=ee,this.setTextureUnits=J,this.setTexture2D=ae,this.setTexture2DArray=Me,this.setTexture3D=Te,this.setTextureCube=fe,this.rebindTextures=St,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=oe,this.dispose=X}function ay(s,e){function t(i,n=xn){let r,a=tt.getTransfer(n);if(i===hi)return s.UNSIGNED_BYTE;if(i===So)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Mo)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Tc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Ac)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Mc)return s.BYTE;if(i===Ec)return s.SHORT;if(i===$s)return s.UNSIGNED_SHORT;if(i===wo)return s.INT;if(i===Oi)return s.UNSIGNED_INT;if(i===gi)return s.FLOAT;if(i===Fi)return s.HALF_FLOAT;if(i===Rc)return s.ALPHA;if(i===Cc)return s.RGB;if(i===Si)return s.RGBA;if(i===ln)return s.DEPTH_COMPONENT;if(i===yn)return s.DEPTH_STENCIL;if(i===Eo)return s.RED;if(i===To)return s.RED_INTEGER;if(i===Dn)return s.RG;if(i===Ao)return s.RG_INTEGER;if(i===Ro)return s.RGBA_INTEGER;if(i===Jr||i===jr||i===Qr||i===ea)if(a===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Co||i===Lo||i===Po||i===Io)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Co)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Po)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Do||i===No||i===Oo||i===Fo||i===Uo||i===ta||i===Bo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Do||i===No)return a===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Oo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Fo)return r.COMPRESSED_R11_EAC;if(i===Uo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ta)return r.COMPRESSED_RG11_EAC;if(i===Bo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ko||i===Ho||i===zo||i===Go||i===Vo||i===Wo||i===Xo||i===qo||i===Yo||i===$o||i===Ko||i===Zo||i===Jo||i===jo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ko)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ho)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Go)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$o)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ko)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qo||i===el||i===tl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Qo)return a===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===el)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===il||i===nl||i===ia||i===sl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===il)return r.COMPRESSED_RED_RGTC1_EXT;if(i===nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jn?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}var oy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ly=`
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

}`,rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Dr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Gi({vertexShader:oy,fragmentShader:ly,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ne(new zi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ah=class extends Ii{constructor(e,t){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new rh,p={},y=t.getContextAttributes(),S=null,v=null,T=[],A=[],_=new xe,E=null,I=null,C=new zt;C.viewport=new gt;let N=new zt;N.viewport=new gt;let F=[C,N],G=new _o,P=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ae=T[W];return ae===void 0&&(ae=new Rs,T[W]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(W){let ae=T[W];return ae===void 0&&(ae=new Rs,T[W]=ae),ae.getGripSpace()},this.getHand=function(W){let ae=T[W];return ae===void 0&&(ae=new Rs,T[W]=ae),ae.getHandSpace()};function V(W){let ae=A.indexOf(W.inputSource);if(ae===-1)return;let Me=T[ae];Me!==void 0&&(Me.update(W.inputSource,W.frame,c||a),Me.dispatchEvent({type:W.type,data:W.inputSource}))}function z(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",z),n.removeEventListener("inputsourceschange",ie);for(let W=0;W<T.length;W++){let ae=A[W];ae!==null&&(A[W]=null,T[W].disconnect(ae))}P=null,X=null,m.reset();for(let W in p)delete p[W];if(e.setRenderTarget(S),f=null,d=null,u=null,n=null,v=null,_e.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(_.width,_.height,!1),I!==null){let W=I.camera;W.fov=I.fov,W.zoom=I.zoom,W.updateProjectionMatrix(),I=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(W){if(n=W,n!==null){if(S=e.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",z),n.addEventListener("inputsourceschange",ie),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Te=null,fe=null;y.depth&&(fe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=y.stencil?yn:ln,Te=y.stencil?jn:Oi);let Pe={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Pe),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new pi(d.textureWidth,d.textureHeight,{format:Si,type:hi,depthTexture:new dn(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,Me),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new pi(f.framebufferWidth,f.framebufferHeight,{format:Si,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),_e.setContext(n),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(W){for(let ae=0;ae<W.removed.length;ae++){let Me=W.removed[ae],Te=A.indexOf(Me);Te>=0&&(A[Te]=null,T[Te].disconnect(Me))}for(let ae=0;ae<W.added.length;ae++){let Me=W.added[ae],Te=A.indexOf(Me);if(Te===-1){for(let Pe=0;Pe<T.length;Pe++)if(Pe>=A.length){A.push(Me),Te=Pe;break}else if(A[Pe]===null){A[Pe]=Me,Te=Pe;break}if(Te===-1)break}let fe=T[Te];fe&&fe.connect(Me)}}function q(W,ae){ae===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ae.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(n===null)return;let ae=W.near,Me=W.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),G.near=N.near=C.near=ae,G.far=N.far=C.far=Me,(P!==G.near||X!==G.far)&&(n.updateRenderState({depthNear:G.near,depthFar:G.far}),P=G.near,X=G.far),G.layers.mask=W.layers.mask|6,C.layers.mask=G.layers.mask&-5,N.layers.mask=G.layers.mask&-3;let Te=W.parent,fe=G.cameras;q(G,Te);for(let Pe=0;Pe<fe.length;Pe++)q(fe[Pe],Te);G.projectionMatrix.copy(C.projectionMatrix),G.projectionMatrixInverse.copy(C.projectionMatrixInverse),I===null&&W.isPerspectiveCamera&&(I={camera:W,fov:W.fov,zoom:W.zoom}),Q(W,G,Te)};function Q(W,ae,Me){Me===null?W.matrix.copy(ae.matrixWorld):(W.matrix.copy(Me.matrixWorld),W.matrix.invert(),W.matrix.multiply(ae.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ae.projectionMatrix),W.projectionMatrixInverse.copy(ae.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Wn*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(W){return p[W]};let ee=null;function J(W,ae){if(h=ae.getViewerPose(c||a),g=ae,h!==null){let Me=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Te=!1;Me.length!==G.cameras.length&&(G.cameras.length=0,Te=!0);for(let Fe=0;Fe<Me.length;Fe++){let rt=Me[Fe],ht=null;if(f!==null)ht=f.getViewport(rt);else{let nt=u.getViewSubImage(d,rt);ht=nt.viewport,Fe===0&&(e.setRenderTargetTextures(v,nt.colorTexture,nt.depthStencilTexture),e.setRenderTarget(v))}let Ye=F[Fe];Ye===void 0&&(Ye=new zt,Ye.layers.enable(Fe),Ye.viewport=new gt,F[Fe]=Ye),Ye.matrix.fromArray(rt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(rt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(ht.x,ht.y,ht.width,ht.height),Fe===0&&(G.matrix.copy(Ye.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Te===!0&&G.cameras.push(Ye)}let fe=n.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let Fe=u.getDepthInformation(Me[0]);Fe&&Fe.isValid&&Fe.texture&&m.init(Fe,n.renderState)}if(fe&&fe.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let Fe=0;Fe<Me.length;Fe++){let rt=Me[Fe].camera;if(rt){let ht=p[rt];ht||(ht=new Dr,p[rt]=ht);let Ye=u.getCameraImage(rt);ht.sourceTexture=Ye}}}}for(let Me=0;Me<T.length;Me++){let Te=A[Me],fe=T[Me];Te!==null&&fe!==void 0&&fe.update(Te,ae,c||a)}ee&&ee(W,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}let _e=new kd;_e.setAnimationLoop(J),this.setAnimationLoop=function(W){ee=W},this.dispose=function(){}}},cy=new qe,Kd=new Ke;Kd.set(-1,0,0,0,1,0,0,0,1);function hy(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Gc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,S,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ri&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ri&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),S=y.envMap,v=y.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(cy.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Kd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ri&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function uy(s,e,t,i){let n={},r={};function a(y,S){let v=S.program;i.uniformBlockBinding(y,v,n[y.id])}function o(y,S){let v=n[y.id];v===void 0&&(g(y),v=l(y),n[y.id]=v,y.addEventListener("dispose",m));let T=S.program;i.updateUBOMapping(y,T);let A=e.render.frame;r[y.id]!==A&&(c(y),r[y.id]=A)}function l(y){let S=s.createBuffer(),v=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,v,T),s.bindBuffer(s.UNIFORM_BUFFER,null),S}function c(y){let S=n[y.id],v=y.uniforms,T=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let A=0,_=v.length;A<_;A++){let E=v[A];if(Array.isArray(E))for(let I=0,C=E.length;I<C;I++)h(E[I],A,I,T);else h(E,A,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,S,v,T){if(d(y,S,v,T)===!0){let A=y.__offset,_=y.value;if(Array.isArray(_)){let E=0;for(let I=0;I<_.length;I++){let C=_[I],N=x(C,!0);u(C,y.__data,E),E+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,A,y.__data)}}function u(y,S,v){typeof y=="number"||typeof y=="boolean"?S[v]=y:y.isMatrix3?(S[v]=y.elements[0],S[v+1]=y.elements[1],S[v+2]=y.elements[2],S[v+3]=0,S[v+4]=y.elements[3],S[v+5]=y.elements[4],S[v+6]=y.elements[5],S[v+7]=0,S[v+8]=y.elements[6],S[v+9]=y.elements[7],S[v+10]=y.elements[8],S[v+11]=0):ArrayBuffer.isView(y)?S.set(y.subarray(0,S.length-v),v):y.toArray(S,v)}function d(y,S,v,T){let A=y.value,_=S+"_"+v;if(Array.isArray(A)){T[_]===void 0&&(T[_]=[]);let E=T[_],I=!1;for(let C=0;C<A.length;C++)f(A[C],E,C)===!0&&(I=!0);return I}return f(A,T,_)}function f(y,S,v){if(S[v]===void 0)return typeof y=="number"||typeof y=="boolean"?S[v]=y:ArrayBuffer.isView(y)?S[v]=y.slice():S[v]=y.clone(),!0;{let T=S[v];if(typeof y=="number"||typeof y=="boolean"){if(T!==y)return S[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(T.equals(y)===!1)return T.copy(y),!0}}return!1}function g(y){let S=y.uniforms,v=0,T=16;for(let _=0,E=S.length;_<E;_++){let I=Array.isArray(S[_])?S[_]:[S[_]];for(let C=0,N=I.length;C<N;C++){let F=I[C],G=Array.isArray(F.value)?F.value:[F.value],P=Array.isArray(S[_])||Array.isArray(F.value),X=v;for(let z=0,ie=G.length;z<ie;z++){let q=G[z],Q=x(q,P),ee=v%T,J=ee%Q.boundary,_e=ee+J;v+=J,_e!==0&&T-_e<Q.storage&&(v+=T-_e),z===0&&(X=v),v+=Q.storage}let V=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new V((v-X)/Float32Array.BYTES_PER_ELEMENT),F.__offset=X}}let A=v%T;return A>0&&(v+=T-A),y.__size=v,y.__cache={},this}function x(y,S){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",y),S===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(y){let S=y.target;S.removeEventListener("dispose",m),s.deleteBuffer(n[S.id]),delete n[S.id],delete r[S.id]}function p(){for(let y in n)s.deleteBuffer(n[y]);n={},r={}}return{bind:a,update:o,dispose:p}}var dy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$i=null;function fy(){return $i===null&&($i=new Ds(dy,16,16,Dn,Fi),$i.name="DFG_LUT",$i.minFilter=Gt,$i.magFilter=Gt,$i.wrapS=yi,$i.wrapT=yi,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}var cl=class{constructor(e={}){let{canvas:t=hd(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=hi}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let x=f,m=new Set([Ro,Ao,To]),p=new Set([hi,Oi,$s,jn,So,Mo]),y=new Uint32Array(4),S=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},T=null,A=null,_=[],E=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,F=null,G=null,P=null,X=null;this._outputColorSpace=Ht;let V=0,z=0,ie=null,q=-1,Q=null,ee=new gt,J=new gt,_e=null,W=new Ce(0),ae=0,Me=t.width,Te=t.height,fe=1,Pe=null,ct=null,Fe=new gt(0,0,Me,Te),rt=new gt(0,0,Me,Te),ht=!1,Ye=new An,nt=new Za,Se=!1,Ae=!1,ue=new qe,Ee=new w,Ne=new gt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},St=!1;function Nt(){return ie===null?fe:1}let O=i;function Mt(M,D){return t.getContext(M,D)}let at,ot,oe,_t,Ue,Ge,R,b,U,se,$,te,le,K,Z,he,L,j,Y,pe,ce,de,He;try{let M={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",ye,!1),O===null){let D="webgl2";if(O=Mt(D,M),O===null)throw Mt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(M){throw t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Xe("WebGLRenderer: "+M.message),M}function Ze(){at=new M0(O),at.init(),ce=new ay(O,at),ot=new f0(O,at,e,ce),oe=new sy(O,at),ot.reversedDepthBuffer&&d&&oe.buffers.depth.setReversed(!0),G=O.createFramebuffer(),P=O.createFramebuffer(),X=O.createFramebuffer(),_t=new A0(O),Ue=new W_,Ge=new ry(O,at,oe,Ue,ot,ce,_t),R=new S0(C),b=new Cp(O),de=new u0(O,b),U=new E0(O,b,_t,de),se=new C0(O,U,b,de,_t),j=new R0(O,ot,Ge),Z=new p0(Ue),$=new V_(C,R,at,ot,de,Z),te=new hy(C,Ue),le=new q_,K=new j_(at),L=new h0(C,R,oe,se,g,l),he=new ny(C,se,ot),He=new uy(O,_t,ot,oe),Y=new d0(O,at,_t),pe=new T0(O,at,_t),_t.programs=$.programs,C.capabilities=ot,C.extensions=at,C.properties=Ue,C.renderLists=le,C.shadowMap=he,C.state=oe,C.info=_t}x!==hi&&(I=new P0(x,t.width,t.height,o,n,r));let re=new ah(C,O);this.xr=re,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let M=at.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=at.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(M){M!==void 0&&(fe=M,this.setSize(Me,Te,!1))},this.getSize=function(M){return M.set(Me,Te)},this.setSize=function(M,D,H=!0){if(re.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=M,Te=D,t.width=Math.floor(M*fe),t.height=Math.floor(D*fe),H===!0&&(t.style.width=M+"px",t.style.height=D+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(Me*fe,Te*fe).floor()},this.setDrawingBufferSize=function(M,D,H){Me=M,Te=D,fe=H,t.width=Math.floor(M*H),t.height=Math.floor(D*H),this.setViewport(0,0,M,D)},this.setEffects=function(M){if(x===hi){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let D=0;D<M.length;D++)if(M[D].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ee)},this.getViewport=function(M){return M.copy(Fe)},this.setViewport=function(M,D,H,B){M.isVector4?Fe.set(M.x,M.y,M.z,M.w):Fe.set(M,D,H,B),oe.viewport(ee.copy(Fe).multiplyScalar(Nt()).round())},this.getScissor=function(M){return M.copy(rt)},this.setScissor=function(M,D,H,B){M.isVector4?rt.set(M.x,M.y,M.z,M.w):rt.set(M,D,H,B),oe.scissor(J.copy(rt).multiplyScalar(Nt()).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(M){oe.setScissorTest(ht=M)},this.setOpaqueSort=function(M){Pe=M},this.setTransparentSort=function(M){ct=M},this.getClearColor=function(M){return M.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(M=!0,D=!0,H=!0){let B=0;if(M){let k=!1;if(ie!==null){let ge=ie.texture.format;k=m.has(ge)}if(k){let ge=ie.texture.type,Le=p.has(ge),me=L.getClearColor(),be=L.getClearAlpha(),Oe=me.r,$e=me.g,Qe=me.b;Le?(y[0]=Oe,y[1]=$e,y[2]=Qe,y[3]=be,O.clearBufferuiv(O.COLOR,0,y)):(S[0]=Oe,S[1]=$e,S[2]=Qe,S[3]=be,O.clearBufferiv(O.COLOR,0,S))}else B|=O.COLOR_BUFFER_BIT}D&&(B|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&O.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),L.dispose(),le.dispose(),K.dispose(),Ge.dispose(),Ue.dispose(),R.dispose(),se.dispose(),U.dispose(),de.dispose(),He.dispose(),$.dispose(),re.dispose(),re.removeEventListener("sessionstart",is),re.removeEventListener("sessionend",ns),Ti.stop()};function ze(M){M.preventDefault(),wr("WebGLRenderer: Context Lost."),N=!0}function Je(){wr("WebGLRenderer: Context Restored."),N=!1;let M=_t.autoReset,D=he.enabled,H=he.autoUpdate,B=he.needsUpdate,k=he.type;Ze(),_t.autoReset=M,he.enabled=D,he.autoUpdate=H,he.needsUpdate=B,he.type=k}function ye(M){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function dt(M){let D=M.target;D.removeEventListener("dispose",dt),It(D)}function It(M){Yt(M),Ue.remove(M)}function Yt(M){let D=Ue.get(M).programs;D!==void 0&&(D.forEach(function(H){$.releaseProgram(H)}),M.isShaderMaterial&&$.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,H,B,k,ge){D===null&&(D=We);let Le=k.isMesh&&k.matrixWorld.determinantAffine()<0,me=ha(M,D,H,B,k);oe.setMaterial(B,Le);let be=H.index,Oe=1;if(B.wireframe===!0){if(be=U.getWireframeAttribute(H),be===void 0)return;Oe=2}let $e=H.drawRange,Qe=H.attributes.position,Ie=$e.start*Oe,st=($e.start+$e.count)*Oe;ge!==null&&(Ie=Math.max(Ie,ge.start*Oe),st=Math.min(st,(ge.start+ge.count)*Oe)),be!==null?(Ie=Math.max(Ie,0),st=Math.min(st,be.count)):Qe!=null&&(Ie=Math.max(Ie,0),st=Math.min(st,Qe.count));let Lt=st-Ie;if(Lt<0||Lt===1/0)return;de.setup(k,B,me,H,be);let yt,ft=Y;if(be!==null&&(yt=b.get(be),ft=pe,ft.setIndex(yt)),k.isMesh)B.wireframe===!0?(oe.setLineWidth(B.wireframeLinewidth*Nt()),ft.setMode(O.LINES)):ft.setMode(O.TRIANGLES);else if(k.isLine){let Ft=B.linewidth;Ft===void 0&&(Ft=1),oe.setLineWidth(Ft*Nt()),k.isLineSegments?ft.setMode(O.LINES):k.isLineLoop?ft.setMode(O.LINE_LOOP):ft.setMode(O.LINE_STRIP)}else k.isPoints?ft.setMode(O.POINTS):k.isSprite&&ft.setMode(O.TRIANGLES);if(k.isBatchedMesh)if(at.get("WEBGL_multi_draw"))ft.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ft=k._multiDrawStarts,De=k._multiDrawCounts,Ve=k._multiDrawCount,Re=be?b.get(be).bytesPerElement:1,xt=Ue.get(B).currentProgram.getUniforms();for(let Tt=0;Tt<Ve;Tt++)xt.setValue(O,"_gl_DrawID",Tt),ft.render(Ft[Tt]/Re,De[Tt])}else if(k.isInstancedMesh)ft.renderInstances(Ie,Lt,k.count);else if(H.isInstancedBufferGeometry){let Ft=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,De=Math.min(H.instanceCount,Ft);ft.renderInstances(Ie,Lt,De)}else ft.render(Ie,Lt)};function ts(M,D,H,B){F!==null&&M.isNodeMaterial&&F.setObject(B,M),Se===!0&&Z.setState(M,H,!1),M.transparent===!0&&M.side===kt&&M.forceSinglePass===!1?(M.side=ri,M.needsUpdate=!0,Fn(M,D,B),M.side=Xi,M.needsUpdate=!0,Fn(M,D,B),M.side=kt):Fn(M,D,B)}this.compile=function(M,D,H=null){H===null&&(H=M),F!==null&&F.renderStart(M,D,H),A=K.get(H),A.init(D),E.push(A),H.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),M!==H&&M.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),A.setupLights(),F!==null&&F.updateLights(A.state.lightsArray),Ae=this.localClippingEnabled,Se=Z.init(this.clippingPlanes,Ae),Se===!0&&Z.setGlobalState(this.clippingPlanes,D),F!==null&&he.render(A.state.shadowsArray,H,D);let B=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ge=k.material;if(ge)if(Array.isArray(ge))for(let Le=0;Le<ge.length;Le++){let me=ge[Le];ts(me,H,D,k),B.add(me)}else ts(ge,H,D,k),B.add(ge)}),A=E.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(M,D,H=null){let B=this.compile(M,D,H);return new Promise(k=>{function ge(){if(B.forEach(function(Le){let be=Ue.get(Le).currentProgram;(be===void 0||be.isReady())&&B.delete(Le)}),B.size===0){k(M);return}setTimeout(ge,10)}at.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let tr=null;function ir(M){tr&&tr(M)}function is(){Ti.stop()}function ns(){Ti.start()}let Ti=new kd;Ti.setAnimationLoop(ir),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(M){tr=M,re.setAnimationLoop(M),M===null?Ti.stop():Ti.start()},re.addEventListener("sessionstart",is),re.addEventListener("sessionend",ns),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(M,D);let H=re.enabled===!0&&re.isPresenting===!0,B=I!==null&&(ie===null||H)&&I.begin(C,ie);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(D),D=re.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,D,ie),A=K.get(M,E.length),A.init(D),A.state.textureUnits=Ge.getTextureUnits(),E.push(A),ue.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?nt.setFromArrayCamera(D):Ye.setFromProjectionMatrix(ue,xi,D.reversedDepth),Ae=this.localClippingEnabled,Se=Z.init(this.clippingPlanes,Ae),T=le.get(M,_.length),T.init(),_.push(T),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Le=C.xr.getDepthSensingMesh();Le!==null&&ss(Le,D,-1/0,C.sortObjects)}ss(M,D,0,C.sortObjects),T.finish(),F!==null&&F.updateLights(A.state.lightsArray),C.sortObjects===!0&&T.sort(Pe,ct),St=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,St&&L.addToRenderList(T,M),this.info.autoReset===!0&&this.info.reset(),Se===!0&&Z.beginShadows();let k=A.state.shadowsArray;if(he.render(k,M,D),Se===!0&&Z.endShadows(),(B&&I.hasRenderPass())===!1){let Le=T.opaque,me=T.transmissive;if(A.setupLights(),D.isArrayCamera){let be=D.cameras;if(me.length>0)for(let Oe=0,$e=be.length;Oe<$e;Oe++){let Qe=be[Oe];sr(Le,me,M,Qe)}St&&L.render(M);for(let Oe=0,$e=be.length;Oe<$e;Oe++){let Qe=be[Oe];nr(T,M,Qe,Qe.viewport)}}else me.length>0&&sr(Le,me,M,D),St&&L.render(M),nr(T,M,D)}ie!==null&&z===0&&(Ge.updateMultisampleRenderTarget(ie),Ge.updateRenderTargetMipmap(ie)),B&&I.end(C),M.isScene===!0&&M.onAfterRender(C,M,D),de.resetDefaultState(),q=-1,Q=null,E.pop(),E.length>0?(A=E[E.length-1],Ge.setTextureUnits(A.state.textureUnits),Se===!0&&Z.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,F!==null&&F.renderEnd()};function ss(M,D,H,B){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){let Le=D.isArrayCamera?nt:Ye;if(!M.frustumCulled||M.intersectsFrustum(Le)){B&&Ne.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ue);let me=se.update(M),be=M.material;be.visible&&T.push(M,me,be,H,Ne.z,null,D)}}else if(M.isMesh||M.isLine||M.isPoints){let Le=D.isArrayCamera?nt:Ye;if(!M.frustumCulled||M.intersectsFrustum(Le)){let me=se.update(M),be=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ne.copy(M.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ne.copy(me.boundingSphere.center)),Ne.applyMatrix4(M.matrixWorld).applyMatrix4(ue)),Array.isArray(be)){let Oe=me.groups;for(let $e=0,Qe=Oe.length;$e<Qe;$e++){let Ie=Oe[$e],st=be[Ie.materialIndex];st&&st.visible&&T.push(M,me,st,H,Ne.z,Ie,D)}}else be.visible&&T.push(M,me,be,H,Ne.z,null,D)}}}let ge=M.children;for(let Le=0,me=ge.length;Le<me;Le++)ss(ge[Le],D,H,B)}function nr(M,D,H,B){let{opaque:k,transmissive:ge,transparent:Le}=M;A.setupLightsView(H),Se===!0&&Z.setGlobalState(C.clippingPlanes,H),B&&oe.viewport(ee.copy(B)),k.length>0&&Ot(k,D,H),ge.length>0&&Ot(ge,D,H),Le.length>0&&Ot(Le,D,H),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function sr(M,D,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[B.id]===void 0){let Ie=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[B.id]=new pi(1,1,{generateMipmaps:!0,type:Ie?Fi:hi,minFilter:wi,samples:Math.max(4,ot.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}let ge=A.state.transmissionRenderTarget[B.id],Le=B.viewport||ee;ge.setSize(Le.z*C.transmissionResolutionScale,Le.w*C.transmissionResolutionScale);let me=C.getRenderTarget(),be=C.getActiveCubeFace(),Oe=C.getActiveMipmapLevel();C.setRenderTarget(ge),C.getClearColor(W),ae=C.getClearAlpha(),ae<1&&C.setClearColor(16777215,.5),C.clear(),St&&L.render(H);let $e=C.toneMapping;C.toneMapping=qi;let Qe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),A.setupLightsView(B),Se===!0&&Z.setGlobalState(C.clippingPlanes,B),Ot(M,H,B),Ge.updateMultisampleRenderTarget(ge),Ge.updateRenderTargetMipmap(ge),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let st=0,Lt=D.length;st<Lt;st++){let yt=D[st],{object:ft,geometry:Ft,material:De,group:Ve}=yt;if(De.side===kt&&ft.layers.test(B.layers)){let Re=De.side;De.side=ri,De.needsUpdate=!0,ai(ft,H,B,Ft,De,Ve),De.side=Re,De.needsUpdate=!0,Ie=!0}}Ie===!0&&(Ge.updateMultisampleRenderTarget(ge),Ge.updateRenderTargetMipmap(ge))}C.setRenderTarget(me,be,Oe),C.setClearColor(W,ae),Qe!==void 0&&(B.viewport=Qe),C.toneMapping=$e}function Ot(M,D,H){let B=D.isScene===!0?D.overrideMaterial:null;for(let k=0,ge=M.length;k<ge;k++){let Le=M[k],{object:me,geometry:be,group:Oe}=Le,$e=Le.material;$e.allowOverride===!0&&B!==null&&($e=B),me.layers.test(H.layers)&&ai(me,D,H,be,$e,Oe)}}function ai(M,D,H,B,k,ge){F!==null&&k.isNodeMaterial&&F.setObject(M,k),M.onBeforeRender(C,D,H,B,k,ge),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(C,D,H,B,M,ge),k.transparent===!0&&k.side===kt&&k.forceSinglePass===!1?(k.side=ri,k.needsUpdate=!0,C.renderBufferDirect(H,D,B,k,M,ge),k.side=Xi,k.needsUpdate=!0,C.renderBufferDirect(H,D,B,k,M,ge),k.side=kt):C.renderBufferDirect(H,D,B,k,M,ge),M.onAfterRender(C,D,H,B,k,ge)}function ca(M){let D=0;for(let H of M)H.texture!==null&&D++;return D}function Fn(M,D,H){D.isScene!==!0&&(D=We);let B=Ue.get(M),k=A.state.lights,ge=A.state.shadowsArray,Le=k.state.version,me=$.getParameters(M,k.state,ge,D,H,A.state.lightProbeGridArray),be=$.getProgramCacheKey(me),Oe=B.programs;B.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;let $e=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;B.envMap=R.get(M.envMap||B.environment,$e),B.envMapRotation=B.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Oe===void 0&&(M.addEventListener("dispose",dt),Oe=new Map,B.programs=Oe,B.programVariants=new Map);let Qe=Oe.get(be);if(Qe!==void 0){if(B.currentProgram===Qe&&B.lightsStateVersion===Le)return ar(M,me),Qe}else me.uniforms=$.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,H,me),M.onBeforeCompile(me,C),Qe=$.acquireProgram(me,be),Oe.set(be,Qe),B.uniforms=me.uniforms;let Ie=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ie.clippingPlanes=Z.uniform),ar(M,me),B.needsLights=da(M),B.lightsStateVersion=Le,B.needsLights&&(Ie.ambientLightColor.value=k.state.ambient,Ie.lightProbe.value=k.state.probe,Ie.sunLights.value=k.state.sun,Ie.sunLightShadows.value=k.state.sunShadow,Ie.directionalLights.value=k.state.directional,Ie.directionalLightShadows.value=k.state.directionalShadow,Ie.spotLights.value=k.state.spot,Ie.spotLightShadows.value=k.state.spotShadow,Ie.rectAreaLights.value=k.state.rectArea,Ie.ltc_1.value=k.state.rectAreaLTC1,Ie.ltc_2.value=k.state.rectAreaLTC2,Ie.pointLights.value=k.state.point,Ie.pointLightShadows.value=k.state.pointShadow,Ie.hemisphereLights.value=k.state.hemi,Ie.sunShadowMatrix.value=k.state.sunShadowMatrix,Ie.sunShadowCascade.value=k.state.sunShadowCascade,Ie.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ie.spotLightMatrix.value=k.state.spotLightMatrix,Ie.spotLightMap.value=k.state.spotLightMap,Ie.pointShadowMatrix.value=k.state.pointShadowMatrix),B.numLightProbeGrids=ca(A.state.lightProbeGridArray),B.currentProgram=Qe,B.uniformsList=null,Qe}function Ml(M,D,H,B,k){let ge=Ue.get(M),Le=ge.currentProgram.id+","+B+","+k,me=ge.programVariants.get(Le);return me===void 0?(me=Fn(M,D,H),ge.programVariants.set(Le,me)):(ge.currentProgram=me,ge.uniformsList=null,ge.outputColorSpace=B,ge.toneMapping=k),me}function rr(M){if(M.uniformsList===null){let D=M.currentProgram.getUniforms();M.uniformsList=Zs.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function ar(M,D){let H=Ue.get(M);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.batchingColor=D.batchingColor,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function ha(M,D,H,B,k){D.isScene!==!0&&(D=We),Ge.resetTextureUnits();let ge=D.fog,Le=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,me=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:tt.workingColorSpace,be=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Oe=R.get(B.envMap||Le,be),$e=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Qe=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ie=!!H.morphAttributes.position,st=!!H.morphAttributes.normal,Lt=!!H.morphAttributes.color,yt=qi;B.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(yt=C.toneMapping);let ft=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ft=ft!==void 0?ft.length:0,De=Ue.get(B),Ve=A.state.lights;if(Se===!0&&(Ae===!0||M!==Q)){let At=M===Q&&B.id===q;Z.setState(B,M,At)}let Re=!1,xt=!1;B.version===De.__version?De.needsLights&&De.lightsStateVersion!==Ve.state.version||k.isBatchedMesh&&De.batching===!1||!k.isBatchedMesh&&De.batching===!0||k.isBatchedMesh&&De.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&De.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&De.instancing===!1||!k.isInstancedMesh&&De.instancing===!0||k.isSkinnedMesh&&De.skinning===!1||!k.isSkinnedMesh&&De.skinning===!0||k.isInstancedMesh&&De.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&De.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&De.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&De.instancingMorph===!1&&k.morphTexture!==null||De.envMap!==Oe||B.fog===!0&&De.fog!==ge||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Z.numPlanes||De.numIntersection!==Z.numIntersection)||De.vertexAlphas!==$e||De.vertexTangents!==Qe||De.morphTargets!==Ie||De.morphNormals!==st||De.morphColors!==Lt||De.morphTargetsCount!==Ft||De.numLightProbeGrids!==ca(A.state.lightProbeGridArray)?Re=!0:(De.outputColorSpace!==me||De.toneMapping!==yt)&&(xt=!0):(Re=!0,De.__version=B.version);let Tt=De.currentProgram;(Re===!0||xt===!0)&&(Tt=xt===!0?Ml(B,D,k,me,yt):Fn(B,D,k),F&&B.isNodeMaterial&&F.onUpdateProgram(B,Tt,De));let rs=!1,Ui=!1,ji=!1,lt=Tt.getUniforms(),Jt=De.uniforms;if(oe.useProgram(Tt.program)&&(rs=!0,Ui=!0,ji=!0),B.id!==q&&(q=B.id,Ui=!0),rs||Q!==M){oe.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),lt.setValue(O,"projectionMatrix",M.projectionMatrix),lt.setValue(O,"viewMatrix",M.matrixWorldInverse);let $t=lt.map.cameraPosition;$t!==void 0&&$t.setValue(O,Ee.setFromMatrixPosition(M.matrixWorld)),ot.logarithmicDepthBuffer&&lt.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&lt.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),Q!==M&&(Q=M,Ui=!0,ji=!0)}if(De.needsLights&&(Ve.state.sunShadowMap.length>0&&lt.setValue(O,"sunShadowMap",Ve.state.sunShadowMap,Ge),Ve.state.directionalShadowMap.length>0&&lt.setValue(O,"directionalShadowMap",Ve.state.directionalShadowMap,Ge),Ve.state.spotShadowMap.length>0&&lt.setValue(O,"spotShadowMap",Ve.state.spotShadowMap,Ge),Ve.state.pointShadowMap.length>0&&lt.setValue(O,"pointShadowMap",Ve.state.pointShadowMap,Ge)),k.isSkinnedMesh){lt.setOptional(O,k,"bindMatrix"),lt.setOptional(O,k,"bindMatrixInverse");let At=k.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),lt.setValue(O,"boneTexture",At.boneTexture,Ge))}k.isBatchedMesh&&(lt.setOptional(O,k,"batchingTexture"),lt.setValue(O,"batchingTexture",k._matricesTexture,Ge),lt.setOptional(O,k,"batchingIdTexture"),lt.setValue(O,"batchingIdTexture",k._indirectTexture,Ge),lt.setOptional(O,k,"batchingColorTexture"),k._colorsTexture!==null&&lt.setValue(O,"batchingColorTexture",k._colorsTexture,Ge));let Ai=H.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&j.update(k,H,Tt),(Ui||De.receiveShadow!==k.receiveShadow)&&(De.receiveShadow=k.receiveShadow,lt.setValue(O,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null&&(Jt.envMapIntensity.value=D.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=fy()),Ui){if(lt.setValue(O,"toneMappingExposure",C.toneMappingExposure),De.needsLights&&ua(Jt,ji),ge&&B.fog===!0&&te.refreshFogUniforms(Jt,ge),te.refreshMaterialUniforms(Jt,B,fe,Te,A.state.transmissionRenderTarget[M.id]),De.needsLights&&De.numLightProbeGrids>0){let At=v,$t=0;for(let Qi of A.state.lightProbeGridArray)Qi.texture!==null&&(At.textures[$t]=Qi.texture,At.min[$t]=Qi.boundingBox.min,At.max[$t]=Qi.boundingBox.max,At.resolution[$t]=Qi.resolution,$t++);for(let Qi in At)At[Qi].length=$t;Jt.probesSH.value=At.textures,Jt.probesMin.value=At.min,Jt.probesMax.value=At.max,Jt.probesResolution.value=At.resolution}Zs.upload(O,rr(De),Jt,Ge)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Zs.upload(O,rr(De),Jt,Ge),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&lt.setValue(O,"center",k.center),lt.setValue(O,"modelViewMatrix",k.modelViewMatrix),lt.setValue(O,"normalMatrix",k.normalMatrix),lt.setValue(O,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let At=B.uniformsGroups;for(let $t=0,Qi=At.length;$t<Qi;$t++){let Hh=At[$t];He.update(Hh,Tt),He.bind(Hh,Tt)}}return Tt}function ua(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.sunLights.needsUpdate=D,M.sunLightShadows.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function da(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(M,D,H){let B=Ue.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Ue.get(M.texture).__webglTexture=D,Ue.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,D){let H=Ue.get(M);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,H=0){ie=M,V=D,z=H;let B=null,k=!1,ge=!1;if(M){let me=Ue.get(M);if(me.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(O.FRAMEBUFFER,me.__webglFramebuffer),ee.copy(M.viewport),J.copy(M.scissor),_e=M.scissorTest,oe.viewport(ee),oe.scissor(J),oe.setScissorTest(_e),q=-1;return}else if(me.__webglFramebuffer===void 0)Ge.setupRenderTarget(M);else if(me.__hasExternalTextures)Ge.rebindTextures(M,Ue.get(M.texture).__webglTexture,Ue.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let $e=M.depthTexture;if(me.__boundDepthTexture!==$e){if($e!==null&&Ue.has($e)&&(M.width!==$e.image.width||M.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(M)}}let be=M.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ge=!0);let Oe=Ue.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Oe[D])?B=Oe[D][H]:B=Oe[D],k=!0):M.samples>0&&Ge.useMultisampledRTT(M)===!1?B=Ue.get(M).__webglMultisampledFramebuffer:Array.isArray(Oe)?B=Oe[H]:B=Oe,ee.copy(M.viewport),J.copy(M.scissor),_e=M.scissorTest}else ee.copy(Fe).multiplyScalar(fe).floor(),J.copy(rt).multiplyScalar(fe).floor(),_e=ht;if(H!==0&&(B=G),oe.bindFramebuffer(O.FRAMEBUFFER,B)&&oe.drawBuffers(M,B),oe.viewport(ee),oe.scissor(J),oe.setScissorTest(_e),k){let me=Ue.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,me.__webglTexture,H)}else if(ge){let me=D;for(let be=0;be<M.textures.length;be++){let Oe=Ue.get(M.textures[be]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+be,Oe.__webglTexture,H,me)}}else if(M!==null&&H!==0){let me=Ue.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,me.__webglTexture,H)}q=-1};function or(M){let D=Ue.get(M);return(D.__readFormat!==M.format||D.__readType!==M.type)&&(D.__readFormat=M.format,D.__readType=M.type,D.__formatReadable=ot.textureFormatReadable(M.format),D.__typeReadable=ot.textureTypeReadable(M.type)),D}this.readRenderTargetPixels=function(M,D,H,B,k,ge,Le,me=0){if(!(M&&M.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ue.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Le!==void 0&&(be=be[Le],Array.isArray(be)&&(be=be[0])),be){oe.bindFramebuffer(O.FRAMEBUFFER,be);try{let Oe=M.textures[me],$e=Oe.format,Qe=Oe.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me);let Ie=or(Oe);if(Ie.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-B&&H>=0&&H<=M.height-k&&O.readPixels(D,H,B,k,ce.convert($e),ce.convert(Qe),ge)}finally{let Oe=ie!==null?Ue.get(ie).__webglFramebuffer:null;oe.bindFramebuffer(O.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(M,D,H,B,k,ge,Le,me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Ue.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Le!==void 0&&(be=be[Le],Array.isArray(be)&&(be=be[0])),be)if(D>=0&&D<=M.width-B&&H>=0&&H<=M.height-k){oe.bindFramebuffer(O.FRAMEBUFFER,be);let Oe=M.textures[me],$e=Oe.format,Qe=Oe.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me);let Ie=or(Oe);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let st=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,st),O.bufferData(O.PIXEL_PACK_BUFFER,ge.byteLength,O.STREAM_READ),O.readPixels(D,H,B,k,ce.convert($e),ce.convert(Qe),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Lt=ie!==null?Ue.get(ie).__webglFramebuffer:null;oe.bindFramebuffer(O.FRAMEBUFFER,Lt);let yt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await dd(O,yt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,st),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ge),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(st),O.deleteSync(yt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,D=null,H=0){let B=Math.pow(2,-H),k=Math.floor(M.image.width*B),ge=Math.floor(M.image.height*B),Le=D!==null?D.x:0,me=D!==null?D.y:0;Ge.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,Le,me,k,ge),oe.unbindTexture()},this.copyTextureToTexture=function(M,D,H=null,B=null,k=0,ge=0){let Le,me,be,Oe,$e,Qe,Ie,st,Lt,yt=M.isCompressedTexture?M.mipmaps[ge]:M.image;if(H!==null)Le=H.max.x-H.min.x,me=H.max.y-H.min.y,be=H.isBox3?H.max.z-H.min.z:1,Oe=H.min.x,$e=H.min.y,Qe=H.isBox3?H.min.z:0;else{let lt=Math.pow(2,-k);Le=Math.floor(yt.width*lt),me=Math.floor(yt.height*lt),M.isDataArrayTexture?be=yt.depth:M.isData3DTexture?be=Math.floor(yt.depth*lt):be=1,Oe=0,$e=0,Qe=0}B!==null?(Ie=B.x,st=B.y,Lt=B.z):(Ie=0,st=0,Lt=0);let ft=ce.convert(D.format),Ft=ce.convert(D.type),De;D.isData3DTexture?(Ge.setTexture3D(D,0),De=O.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ge.setTexture2DArray(D,0),De=O.TEXTURE_2D_ARRAY):(Ge.setTexture2D(D,0),De=O.TEXTURE_2D),oe.activeTexture(O.TEXTURE0),oe.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),oe.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),oe.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);let Ve=oe.getParameter(O.UNPACK_ROW_LENGTH),Re=oe.getParameter(O.UNPACK_IMAGE_HEIGHT),xt=oe.getParameter(O.UNPACK_SKIP_PIXELS),Tt=oe.getParameter(O.UNPACK_SKIP_ROWS),rs=oe.getParameter(O.UNPACK_SKIP_IMAGES);oe.pixelStorei(O.UNPACK_ROW_LENGTH,yt.width),oe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,yt.height),oe.pixelStorei(O.UNPACK_SKIP_PIXELS,Oe),oe.pixelStorei(O.UNPACK_SKIP_ROWS,$e),oe.pixelStorei(O.UNPACK_SKIP_IMAGES,Qe);let Ui=M.isDataArrayTexture||M.isData3DTexture,ji=D.isDataArrayTexture||D.isData3DTexture;if(M.isDepthTexture){let lt=Ue.get(M),Jt=Ue.get(D),Ai=Ue.get(lt.__renderTarget),At=Ue.get(Jt.__renderTarget);oe.bindFramebuffer(O.READ_FRAMEBUFFER,Ai.__webglFramebuffer),oe.bindFramebuffer(O.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let $t=0;$t<be;$t++)Ui&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ue.get(M).__webglTexture,k,Qe+$t),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ue.get(D).__webglTexture,ge,Lt+$t)),O.blitFramebuffer(Oe,$e,Oe+Le,$e+me,Ie,st,Ie+Le,st+me,O.DEPTH_BUFFER_BIT,O.NEAREST);oe.bindFramebuffer(O.READ_FRAMEBUFFER,null),oe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||Ue.has(M)){let lt=Ue.get(M),Jt=Ue.get(D);oe.bindFramebuffer(O.READ_FRAMEBUFFER,P),oe.bindFramebuffer(O.DRAW_FRAMEBUFFER,X);for(let Ai=0;Ai<be;Ai++)Ui?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,lt.__webglTexture,k,Qe+Ai):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,lt.__webglTexture,k),ji?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Jt.__webglTexture,ge,Lt+Ai):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Jt.__webglTexture,ge),k!==0?O.blitFramebuffer(Oe,$e,Oe+Le,$e+me,Ie,st,Ie+Le,st+me,O.COLOR_BUFFER_BIT,O.NEAREST):ji?O.copyTexSubImage3D(De,ge,Ie,st,Lt+Ai,Oe,$e,Le,me):O.copyTexSubImage2D(De,ge,Ie,st,Oe,$e,Le,me);oe.bindFramebuffer(O.READ_FRAMEBUFFER,null),oe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ji?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(De,ge,Ie,st,Lt,Le,me,be,ft,Ft,yt.data):D.isCompressedArrayTexture?O.compressedTexSubImage3D(De,ge,Ie,st,Lt,Le,me,be,ft,yt.data):O.texSubImage3D(De,ge,Ie,st,Lt,Le,me,be,ft,Ft,yt):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ge,Ie,st,Le,me,ft,Ft,yt.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ge,Ie,st,yt.width,yt.height,ft,yt.data):O.texSubImage2D(O.TEXTURE_2D,ge,Ie,st,Le,me,ft,Ft,yt);oe.pixelStorei(O.UNPACK_ROW_LENGTH,Ve),oe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Re),oe.pixelStorei(O.UNPACK_SKIP_PIXELS,xt),oe.pixelStorei(O.UNPACK_SKIP_ROWS,Tt),oe.pixelStorei(O.UNPACK_SKIP_IMAGES,rs),ge===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&O.generateMipmap(De),oe.unbindTexture()},this.initRenderTarget=function(M){Ue.get(M).__webglFramebuffer===void 0&&Ge.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ge.setTextureCube(M,0):M.isData3DTexture?Ge.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ge.setTexture2DArray(M,0):Ge.setTexture2D(M,0),oe.unbindTexture()},this.resetState=function(){V=0,z=0,ie=null,oe.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};var Jd={type:"change"},lh={type:"start"},Qd={type:"end"},dl=new Hi,jd=new ni,py=Math.cos(70*Nn.DEG2RAD),qt=new w,ui=2*Math.PI,pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},oh=1e-6,fl=class extends $r{constructor(e,t=null){super(e,t),this.state=pt.NONE,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pn.ROTATE,MIDDLE:Pn.DOLLY,RIGHT:Pn.PAN},this.touches={ONE:In.ROTATE,TWO:In.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new Zt,this._lastTargetPosition=new w,this._quat=new Zt().setFromUnitVectors(e.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zs,this._sphericalDelta=new zs,this._scale=1,this._panOffset=new w,this._rotateStart=new xe,this._rotateEnd=new xe,this._rotateDelta=new xe,this._panStart=new xe,this._panEnd=new xe,this._panDelta=new xe,this._dollyStart=new xe,this._dollyEnd=new xe,this._dollyDelta=new xe,this._dollyDirection=new w,this._mouse=new xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gy.bind(this),this._onPointerDown=my.bind(this),this._onPointerUp=_y.bind(this),this._onContextMenu=My.bind(this),this._onMouseWheel=vy.bind(this),this._onKeyDown=by.bind(this),this._onTouchStart=wy.bind(this),this._onTouchMove=Sy.bind(this),this._onMouseDown=yy.bind(this),this._onMouseMove=xy.bind(this),this._interceptControlDown=Ey.bind(this),this._interceptControlUp=Ty.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=pt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jd),this.update(),this.state=pt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;qt.copy(t).sub(this.target),qt.applyQuaternion(this._quat),this._spherical.setFromVector3(qt),this.autoRotate&&this.state===pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=ui:i>Math.PI&&(i-=ui),n<-Math.PI?n+=ui:n>Math.PI&&(n-=ui),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(qt.setFromSpherical(this._spherical),qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=qt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new w(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new w(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(dl.origin.copy(this.object.position),dl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(dl.direction))<py?this.object.lookAt(this.target):(jd.setFromNormalAndCoplanarPoint(this.object.up,this.target),dl.intersectPlane(jd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>oh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>oh||this._lastTargetPosition.distanceToSquared(this.target)>oh?(this.dispatchEvent(Jd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ui/60*this.autoRotateSpeed*e:ui/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){qt.setFromMatrixColumn(t,0),qt.multiplyScalar(-e),this._panOffset.add(qt)}_panUp(e,t){this.screenSpacePanning===!0?qt.setFromMatrixColumn(t,1):(qt.setFromMatrixColumn(t,0),qt.crossVectors(this.object.up,qt)),qt.multiplyScalar(e),this._panOffset.add(qt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let n=this.object.position;qt.copy(n).sub(this.target);let r=qt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),n=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=n/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/t.clientHeight),this._rotateUp(ui*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/t.clientHeight),this._rotateUp(ui*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function my(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function gy(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function _y(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qd),this.state=pt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function yy(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Pn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=pt.DOLLY;break;case Pn.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=pt.ROTATE}break;case Pn.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=pt.PAN}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(lh)}function xy(s){switch(this.state){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function vy(s){this.enabled===!1||this.enableZoom===!1||this.state!==pt.NONE||(s.preventDefault(),this.dispatchEvent(lh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Qd))}function by(s){this.enabled!==!1&&this._handleKeyDown(s)}function wy(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case In.ROTATE:if(this.enableRotate===!1){this.state=pt.NONE;break}this._handleTouchStartRotate(s),this.state=pt.TOUCH_ROTATE;break;case In.PAN:if(this.enablePan===!1){this.state=pt.NONE;break}this._handleTouchStartPan(s),this.state=pt.TOUCH_PAN;break;default:this.state=pt.NONE}break;case 2:switch(this.touches.TWO){case In.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=pt.TOUCH_DOLLY_PAN;break;case In.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=pt.TOUCH_DOLLY_ROTATE;break;default:this.state=pt.NONE}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(lh)}function Sy(s){switch(this._trackPointer(s),this.state){case pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=pt.NONE}}function My(s){this.enabled!==!1&&s.preventDefault()}function Ey(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ty(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ch(s,e){if(e===Lc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ks||e===na){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let i=t.count-2,n=[];if(e===Ks)for(let r=1;r<=i;r++)n.push(t.getX(0)),n.push(t.getX(r)),n.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(n.push(t.getX(r)),n.push(t.getX(r+1)),n.push(t.getX(r+2))):(n.push(t.getX(r+2)),n.push(t.getX(r+1)),n.push(t.getX(r)));return n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function ef(s){let e=new Map,t=new Map,i=s.clone();return tf(s,i,function(n,r){e.set(r,n),t.set(n,r)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;let r=n,a=e.get(n),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function tf(s,e,t){t(s,e);for(let i=0;i<s.children.length;i++)tf(s.children[i],e.children[i],t)}var pl=class extends Wi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new gh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new ml(t,it.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ml(t,it.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Lh(t)})}load(e,t,i,n){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=_n.extractUrlBase(e);a=_n.resolveURL(c,this.path)}else a=_n.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){n?n(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Us(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===of){try{a[it.KHR_BINARY_GLTF]=new Ph(e)}catch(u){n&&n(u);return}r=JSON.parse(a[it.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Bh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case it.KHR_MATERIALS_UNLIT:a[u]=new ph;break;case it.KHR_DRACO_MESH_COMPRESSION:a[u]=new Ih(r,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:a[u]=new Dh;break;case it.KHR_MESH_QUANTIZATION:a[u]=new Nh;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){let i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}};function Ay(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Ct(s,e,t){let i=s.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},fh=class{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,n=t.cache.get(i);if(n)return n;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ce(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],si);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Yn(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new bi(h),c.distance=u;break;case"spot":c=new Wr(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Zi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}},ph=class{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return Et}extendParams(e,t,i){let n=[];e.color=new Ce(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],si),e.opacity=a[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,Ht))}return Promise.all(n)}},mh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=Ct(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},gh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Bt:null}extendMaterialParams(e,t){let i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(n.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new xe(r,r)}return Promise.all(n)}},_h=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Bt:null}extendMaterialParams(e,t){let i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(n)}},yh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Bt:null}extendMaterialParams(e,t){let i=Ct(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},xh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Bt:null}extendMaterialParams(e,t){let i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(n)}},vh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Bt:null}extendMaterialParams(e,t){let i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],si)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Ht)),i.sheenRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(n)}},bh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Bt:null}extendMaterialParams(e,t){let i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&n.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(n)}},wh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Bt:null}extendMaterialParams(e,t){let i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(r[0],r[1],r[2],si),Promise.all(n)}},Sh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Bt:null}extendMaterialParams(e,t){let i=Ct(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Mh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Bt:null}extendMaterialParams(e,t){let i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(r[0],r[1],r[2],si),i.specularColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Ht)),Promise.all(n)}},Eh=class{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Bt:null}extendMaterialParams(e,t){let i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&n.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(n)}},Th=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Bt:null}extendMaterialParams(e,t){let i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&n.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(n)}},Ah=class{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let r=n.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Rh=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=n.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},Ch=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=n.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},ml=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}},Lh=class{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=t.meshes[i.mesh];for(let c of n.primitives)if(c.mode!==Mi.TRIANGLES&&c.mode!==Mi.TRIANGLE_STRIP&&c.mode!==Mi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let x=new qe,m=new w,p=new Zt,y=new w(1,1,1),S=new Xn(g.geometry,g.material,d);for(let T=0;T<d;T++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,T),l.SCALE&&y.fromBufferAttribute(l.SCALE,T),S.setMatrixAt(T,x.compose(m,p,y));let v=null;for(let T in l)if(T==="_COLOR_0"){let A=l[T];S.instanceColor=new hn(A.array,A.itemSize,A.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(v===null){let _=S.geometry;v=new Pt,v.name=_.name;for(let E in _.attributes)v.setAttribute(E,_.attributes[E]);for(let E in _.morphAttributes)v.morphAttributes[E]=_.morphAttributes[E];_.index!==null&&v.setIndex(_.index),v.morphTargetsRelative=_.morphTargetsRelative;for(let E of _.groups)v.addGroup(E.start,E.count,E.materialIndex);_.boundingBox!==null&&(v.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(v.boundingSphere=_.boundingSphere.clone()),v.drawRange.start=_.drawRange.start,v.drawRange.count=_.drawRange.count,v.userData=Object.assign({},_.userData),S.geometry=v}let A=l[T];v.setAttribute(T,new hn(A.array,A.itemSize,A.normalized))}bt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},of="glTF",la=12,nf={JSON:1313821514,BIN:5130562},Ph=class{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,la),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==of)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-la,r=new DataView(e,la),a=0;for(;a<n;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===nf.JSON){let c=new Uint8Array(e,la+a,o);this.content=i.decode(c)}else if(l===nf.BIN){let c=la+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ih=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Fh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Fh[h]||h.toLowerCase();if(a[h]!==void 0){let d=i.accessors[e.attributes[h]],f=Qs[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){n.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(f)},o,c,si,d)})})}},Dh=class{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Nh=class{constructor(){this.name=it.KHR_MESH_QUANTIZATION}},gl=class extends Vi{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let a=0;a!==n;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,u=(i-t)/h,d=u*u,f=d*u,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,y=1-m,S=p-d+u;for(let v=0;v!==o;v++){let T=a[x+v+o],A=a[x+v+l]*h,_=a[g+v+o],E=a[g+v]*h;r[v]=y*T+S*A+m*_+p*E}return r}},Ry=new Zt,Oh=class extends gl{interpolate_(e,t,i,n){let r=super.interpolate_(e,t,i,n);return Ry.fromArray(r).normalize().toArray(r),r}},Mi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sf={9728:Dt,9729:Gt,9984:bo,9985:Ys,9986:Jn,9987:wi},rf={33071:yi,33648:ws,10497:Pi},hh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},On={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Cy={CUBICSPLINE:void 0,LINEAR:Vn,STEP:Gn},uh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ly(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ve({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xi})),s.DefaultMaterial}function es(s,e,t){for(let i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Zi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Py(s,e,t){let i=!1,n=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(n){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return i&&(s.morphAttributes.position=h),n&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Iy(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Dy(s){let e,t=s.extensions&&s.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+dh(t.attributes):e=s.indices+":"+dh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,n=s.targets.length;i<n;i++)e+=":"+dh(s.targets[i]);return e}function dh(s){let e="",t=Object.keys(s).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+s[t[i]]+";";return e}function Uh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ny(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Oy=new qe,Bh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ay,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||r&&a<98?(this.textureLoader=new zr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new qr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Us(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return es(r,o,n),Zi(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let a=t[n].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let n=0,r=e.length;n<r;n++){let a=e[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let n=i.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let n=e(t[i]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let n=0;n<t.length;n++){let r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(r,a){i.load(_n.resolveURL(t.uri,n.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){let t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){let a=hh[n.type],o=Qs[n.componentType],l=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new jt(c,a,l))}let r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=hh[n.type],c=Qs[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),y="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count,S=t.cache.get(y);S||(x=new c(o,p*f,n.count*f/h),S=new Ls(x,f/h),t.cache.add(y,S)),m=new Ps(S,l,d%f/h,g)}else o===null?x=new c(n.count*l):x=new c(o,d,n.count*l),m=new jt(x,l,g);if(n.sparse!==void 0){let p=hh.SCALAR,y=Qs[n.sparse.indices.componentType],S=n.sparse.indices.byteOffset||0,v=n.sparse.values.byteOffset||0,T=new y(a[1],S,n.sparse.count*p),A=new c(a[2],v,n.sparse.count*l);o!==null&&(m=new jt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let _=0,E=T.length;_<E;_++){let I=T[_];if(m.setX(I,A[_*l]),l>=2&&m.setY(I,A[_*l+1]),l>=3&&m.setZ(I,A[_*l+2]),l>=4&&m.setW(I,A[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let n=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=sf[d.magFilter]||Gt,h.minFilter=sf[d.minFilter]||wi,h.wrapS=rf[d.wrapS]||Pi,h.wrapT=rf[d.wrapT]||Pi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Dt&&h.minFilter!==Gt,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=n.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=i.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,g){t.parse(d,f,g)})});else{if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,g){let x=f;t.isImageBitmapLoader===!0&&(x=function(m){let p=new Vt(m);p.needsUpdate=!0,f(p)}),t.load(_n.resolveURL(d,r.path),x,void 0,g)})})}let u=h.then(function(d){return c===!0&&o.revokeObjectURL(l),Zi(d,a),d.userData.mimeType=a.mimeType||Ny(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,n){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[it.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Ns,li.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Rn,li.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||r||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return ve}loadMaterial(e){let t=this,i=this.json,n=this.extensions,r=i.materials[e],a,o={},l=r.extensions||{},c=[];if(l[it.KHR_MATERIALS_UNLIT]){let u=n[it.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Ce(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],si),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Ht)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=kt);let h=r.alphaMode||uh.OPAQUE;if(h===uh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===uh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Et&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new xe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Et&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Et){let u=r.emissiveFactor;o.emissive=new Ce().setRGB(u[0],u[1],u[2],si)}return r.emissiveTexture!==void 0&&a!==Et&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ht)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Zi(u,r),t.associations.set(u,{materials:e}),r.extensions&&es(n,u,r),u})}createUniqueName(e){let t=wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,n=this.primitiveCache;function r(o){return i[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return af(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Dy(c),u=n[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[it.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=af(new Pt,c,t),c.mode===Mi.TRIANGLE_STRIP?d=d.then(f=>ch(f,na)):c.mode===Mi.TRIANGLE_FAN&&(d=d.then(f=>ch(f,Ks))),n[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,n=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?Ly(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=a[f],p,y=c[f];if(m.mode===Mi.TRIANGLES||m.mode===Mi.TRIANGLE_STRIP||m.mode===Mi.TRIANGLE_FAN||m.mode===void 0){let S=r.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");S&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=S&&v?new Tr(x,y):new ne(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===Mi.LINES)p=new Rr(x,y);else if(m.mode===Mi.LINE_STRIP)p=new un(x,y);else if(m.mode===Mi.LINE_LOOP)p=new Cr(x,y);else if(m.mode===Mi.POINTS)p=new Lr(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Iy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Zi(p,r),m.extensions&&es(n,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&es(n,u[0],r),u[0];let d=new vt;r.extensions&&es(n,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new zt(Nn.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new qn(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Zi(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let r=n.pop(),a=n,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new qe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ar(o,l)})}loadAnimation(e){let t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){let f=n.channels[u],g=n.samplers[f.sampler],x=f.target,m=x.node,p=n.parameters!==void 0?n.parameters[g.input]:g.input,y=n.parameters!==void 0?n.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let S=0,v=d.length;S<v;S++){let T=d[S],A=f[S],_=g[S],E=x[S],I=m[S];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let C=i._createAnimationTracks(T,A,_,E,I);if(C)for(let N=0;N<C.length;N++)p.push(C[N])}let y=new Hr(r,void 0,p);return Zi(y,n),y})}createNodeMesh(e){let t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(e){let t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));let l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Oy)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new w().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?n.createUniqueName(r.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(n.getDependency("camera",r.camera).then(function(c){return n._getNodeRef(n.cameraCache,r.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Is:c.length>1?h=new vt:c.length===1?h=c[0]:h=new bt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Zi(h,r),r.extensions&&es(i,h,r),r.matrix!==void 0){let u=new qe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(r.mesh!==void 0&&n.meshCache.refs[r.mesh]>1){let u=n.associations.get(h);n.associations.set(h,{...u})}return n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],n=this,r=new vt;i.name&&(r.name=n.createUniqueName(i.name)),Zi(r,i),i.extensions&&es(t,r,i);let a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(ef(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of n.associations)(d instanceof li||d instanceof Vt)&&u.set(d,f);return h.traverse(d=>{let f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=c(r),r})}_createAnimationTracks(e,t,i,n,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}On[r.path]===On.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(On[r.path]){case On.weights:h=pn;break;case On.rotation:h=mn;break;case On.translation:case On.scale:h=Cn;break;default:i.itemSize===1?h=pn:h=Cn;break}let u=n.interpolation!==void 0?Cy[n.interpolation]:Vn,d=this._getArrayFromAccessor(i);for(let f=0,g=l.length;f<g;f++){let x=new h(l[f]+"."+On[r.path],t.array,d,u);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Uh(t.constructor),n=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let n=this instanceof mn?Oh:gl;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Fy(s,e,t){let i=e.attributes,n=new mi;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new w(l[0],l[1],l[2]),new w(c[0],c[1],c[2])),o.normalized){let h=Uh(Qs[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new w,l=new w;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Uh(Qs[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}s.boundingBox=n;let a=new oi;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,s.boundingSphere=a}function af(s,e,t){let i=e.attributes,n=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in i){let o=Fh[a]||a.toLowerCase();o in s.attributes||n.push(r(i[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});n.push(a)}return tt.workingColorSpace!==si&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),Zi(s,e),Fy(s,e,t),Promise.all(n).then(function(){return e.targets!==void 0?Py(s,e.targets,t):s})}var lf=new w,Uy=new Zt,cf=new w,_l=class extends bt{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var Ji=new qe,By=new qe,yl=class{constructor(e={}){let t=this,i,n,r,a,o={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let h=document.createElement("div");h.style.transformStyle="preserve-3d",c.appendChild(h),this.getSize=function(){return{width:i,height:n}},this.render=function(m,p){let y=p.projectionMatrix.elements[5]*a;p.view&&p.view.enabled?(c.style.transform=`translate( ${-p.view.offsetX*(i/p.view.width)}px, ${-p.view.offsetY*(n/p.view.height)}px )`,c.style.transform+=`scale( ${p.view.fullWidth/p.view.width}, ${p.view.fullHeight/p.view.height} )`):c.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let S,v;p.isOrthographicCamera&&(S=-(p.right+p.left)/2,v=(p.top+p.bottom)/2);let T=p.view&&p.view.enabled?p.view.height/p.view.fullHeight:1,A=p.isOrthographicCamera?`scale( ${T} )scale(`+y+")translate("+u(S)+"px,"+u(v)+"px)"+d(p.matrixWorldInverse):`scale( ${T} )translateZ(`+y+"px)"+d(p.matrixWorldInverse),E=(p.isPerspectiveCamera?"perspective("+y+"px) ":"")+A+"translate("+r+"px,"+a+"px)";o.camera.style!==E&&(h.style.transform=E,o.camera.style=E),x(m,m,p,A)},this.setSize=function(m,p){i=m,n=p,r=i/2,a=n/2,l.style.width=m+"px",l.style.height=p+"px",c.style.width=m+"px",c.style.height=p+"px",h.style.width=m+"px",h.style.height=p+"px"};function u(m){return Math.abs(m)<1e-10?0:m}function d(m){let p=m.elements;return"matrix3d("+u(p[0])+","+u(-p[1])+","+u(p[2])+","+u(p[3])+","+u(p[4])+","+u(-p[5])+","+u(p[6])+","+u(p[7])+","+u(p[8])+","+u(-p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(-p[13])+","+u(p[14])+","+u(p[15])+")"}function f(m){let p=m.elements;return"translate(-50%,-50%)"+("matrix3d("+u(p[0])+","+u(p[1])+","+u(p[2])+","+u(p[3])+","+u(-p[4])+","+u(-p[5])+","+u(-p[6])+","+u(-p[7])+","+u(p[8])+","+u(p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(p[13])+","+u(p[14])+","+u(p[15])+")")}function g(m){m.isCSS3DObject&&(m.element.style.display="none");for(let p=0,y=m.children.length;p<y;p++)g(m.children[p])}function x(m,p,y,S){if(m.visible===!1){g(m);return}if(m.isCSS3DObject){let v=m.layers.test(y.layers)===!0,T=m.element;if(T.style.display=v===!0?"":"none",v===!0){m.onBeforeRender(t,p,y);let A;m.isCSS3DSprite?(Ji.copy(y.matrixWorldInverse),Ji.transpose(),m.rotation2D!==0&&Ji.multiply(By.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(lf,Uy,cf),Ji.setPosition(lf),Ji.scale(cf),Ji.elements[3]=0,Ji.elements[7]=0,Ji.elements[11]=0,Ji.elements[15]=1,A=f(Ji)):A=f(m.matrixWorld);let _=o.objects.get(m);if(_===void 0||_.style!==A){T.style.transform=A;let E={style:A};o.objects.set(m,E)}T.parentNode!==h&&h.appendChild(T),m.onAfterRender(t,p,y)}}for(let v=0,T=m.children.length;v<T;v++)x(m.children[v],p,y,S)}}};var xl=class{constructor(e){this.scene=e,this.streams=[],this.meshes={},this.particleCountPerStream=48,this.paths={solar:new Di([new w(3.2,6.06,-6.5),new w(4.4,6.06,-6.5),new w(5.61,6.06,-6.5),new w(5.632,6.05,-6.5),new w(5.632,6.6,-5.3),new w(5.632,7.15,-4.16),new w(5.632,6.2,-2.3),new w(5.632,5.3,-.5),new w(5.632,3.8,-.5),new w(5.632,2.8,-.5),new w(5.632,2.1,-.5),new w(5.632,1.75,-.5),new w(5.632,1.4,-.5),new w(5.632,1.15,-.5),new w(5.45,1.15,-.65),new w(5.27,1.15,-.75)]),grid:new Di([new w(6.4,6.95,6.95),new w(6.34,6.747,6.563),new w(6.28,6.556,6.176),new w(6.22,6.375,5.788),new w(6.16,6.206,5.401),new w(6.1,6.047,5.014),new w(6.04,5.9,4.627),new w(5.98,5.764,4.239),new w(5.92,5.639,3.852),new w(5.86,5.525,3.465),new w(5.8,5.422,3.078),new w(5.74,5.331,2.691),new w(5.68,5.25,2.303),new w(5.62,5.181,1.916),new w(5.56,5.122,1.529),new w(5.5,5.075,1.142),new w(5.44,5.039,.754),new w(5.38,5.014,.367),new w(5.32,5,-.02),new w(5.32,5,.04),new w(5.32,3,.04),new w(5.32,1.1,.04),new w(5.26,1.1,-.55),new w(5.27,.95,-.6)]),ev:new Di([new w(5.19,1.12,.05),new w(5.195,1.009,.15),new w(5.2,.91,.25),new w(5.205,.823,.35),new w(5.21,.748,.45),new w(5.215,.684,.55),new w(5.22,.633,.65),new w(5.225,.593,.75),new w(5.23,.565,.85),new w(5.235,.549,.95),new w(5.24,.545,1.05),new w(5.245,.553,1.15),new w(5.25,.573,1.25),new w(5.255,.604,1.35),new w(5.26,.648,1.45),new w(5.265,.703,1.55),new w(5.27,.77,1.65)]),gas:new Di([new w(-1.3,1.05,-8),new w(-1.3,.22,-8),new w(-.65,.22,-8.15),new w(-.08,.22,-8.32),new w(-.08,1.05,-8.32),new w(.301,1.05,-8.32),new w(.601,1.05,-8.32),new w(.601,1.35,-8.32)])},this.initStreams()}initStreams(){this.streamDefs={solar:{curve:this.paths.solar,color:new Ce(16758528),baseSpeed:.2,size:.058,particleCount:24},grid:{curve:this.paths.grid,color:new Ce(54015),baseSpeed:.19,size:.048,particleCount:24},ev:{curve:this.paths.ev,color:new Ce(62875),baseSpeed:.44,size:.06,particleCount:5},gas:{curve:this.paths.gas,color:new Ce(16739584),baseSpeed:.32,size:.052,particleCount:12}};let e=new Ni(1,12,12);for(let[t,i]of Object.entries(this.streamDefs)){let n=new Et({color:i.color,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1,blending:Ws}),r=i.particleCount||this.particleCountPerStream,a=new Xn(e,n,r);a.instanceMatrix.setUsage(Oc),a.renderOrder=999;let o=new bt;for(let l=0;l<r;l++){let c=l/r,h=i.curve.getPointAt(c);o.position.copy(h),o.scale.setScalar(i.size),o.updateMatrix(),a.setMatrixAt(l,o.matrix)}a.instanceMatrix.needsUpdate=!0,this.scene.add(a),this.streams.push({id:t,mesh:a,def:i,dummy:o,offset:0})}this.glowLines={};for(let[t,i]of Object.entries(this.streamDefs)){let n=i.curve.getPoints(100),r=new Pt().setFromPoints(n),a=new Rn({color:i.color,transparent:!0,opacity:.5,depthTest:!1,depthWrite:!1,blending:Ws}),o=new un(r,a);o.renderOrder=998,this.scene.add(o),this.glowLines[t]=o}}bindMeshes(e){e.traverse(t=>{if(!t.isMesh)return;let i=t.name;i.includes("Roof_Solar_Panels")?(this.meshes.solarPanels=t,t.material=t.material.clone()):i.includes("Solar_PV_Cabling")?(this.meshes.solarCable=t,t.material=t.material.clone()):i.includes("EV_Charger")?(this.meshes.evCharger=t,t.material=t.material.clone()):i.includes("EV_Charging_Cable")?(this.meshes.evCable=t,t.material=t.material.clone()):i.includes("Car_Peugeot_e2008_Body")?this.meshes.peugeotBody=t:i.includes("Car_Peugeot_e2008_Lights")?(this.meshes.peugeotLights=t,t.material=t.material.clone()):i.includes("Car_Peugeot_e2008_Taillights")?(this.meshes.peugeotTaillights=t,t.material=t.material.clone()):i.includes("Kitchen_Combi_Boiler")?(this.meshes.boiler=t,t.material=t.material.clone()):i.includes("Kitchen_Boiler_Pipes")||i.includes("Gas_Supply_Pipes")?(this.meshes.gasPipes||(this.meshes.gasPipes=[]),t.material=t.material.clone(),this.meshes.gasPipes.push(t)):(i.includes("Entrance_Meter_Box")||i.includes("Entrance_Meter_Fittings"))&&(this.meshes.meterBox||(this.meshes.meterBox=[]),t.material=t.material.clone(),this.meshes.meterBox.push(t))}),this.scene.traverse(t=>{t.name==="Solar_PV_Cabling_Wall"&&(this.meshes.solarCableWall=t)})}update(e,t){if(!t)return;function i(h){let u=Number(h||0);return isNaN(u)?0:Math.abs(u)>=20?u/1e3:u}let n=i(t.solar?.power_kw),r=i(t.octopus_electric?.power_kw),a=i(t.ev?.charger_power_kw),o=i(t.octopus_gas?.power_kw),c=!!(t.octopus_gas?.is_active&&t.octopus_gas?.boiler_status==="Heating")&&o>.05;for(let h of this.streams){let{id:u,mesh:d,def:f,dummy:g}=h,x=0,m=1;if(u==="solar")if(n>.02){let y=Math.min(n/4,2.5);x=Math.max(y*f.baseSpeed,.02),m=1}else x=0;else if(u==="grid"){let y=Math.abs(r),S=r<-.02||!!t.octopus_electric?.is_exporting&&r<=.02;if(y>.02){let v=Math.min(y/3.5,2.5);if(x=Math.max(v*f.baseSpeed,.02),S){m=-1;let T=new Ce(65416);d.material.color.lerp(T,.2),this.glowLines[u]&&this.glowLines[u].material.color.lerp(T,.2)}else{m=1;let T=new Ce(54015);d.material.color.lerp(T,.2),this.glowLines[u]&&this.glowLines[u].material.color.lerp(T,.2)}}else x=0}else if(u==="ev")if(!!t.ev?.is_connected&&a>.04){let S=Math.min(a/7.2,2.5);x=Math.max(S*f.baseSpeed,.04),m=1}else x=0;else if(u==="gas")if(c&&o>.05){let y=Math.min(o/2,2.5);x=Math.max(y*f.baseSpeed,.04),m=1}else x=0;if(x===0){u==="ev"&&t.ev?.is_connected===!1?(d.material.opacity=0,this.glowLines[u]&&(this.glowLines[u].material.opacity=0)):(d.material.opacity=.2,this.glowLines[u]&&(this.glowLines[u].material.opacity=.12));continue}d.material.opacity=.95,this.glowLines[u]&&(this.glowLines[u].material.opacity=.5),h.offset+=e*x*m,h.offset>1&&(h.offset-=1),h.offset<0&&(h.offset+=1);let p=f.particleCount||this.particleCountPerStream;for(let y=0;y<p;y++){let S=(y/p+h.offset)%1;S<0&&(S+=1);let v=f.curve.getPointAt(S);if(g.position.copy(v),u==="grid"||u==="ev")g.scale.setScalar(f.size);else{let T=Math.sin(S*Math.PI*4);g.scale.setScalar(f.size*(.9+.25*T))}g.updateMatrix(),d.setMatrixAt(y,g.matrix)}d.instanceMatrix.needsUpdate=!0}this.updateMeshGlows(n,r,a,a>.04,c)}updateMeshGlows(e,t,i,n,r){if(this.meshes.solarPanels?.material){let a=this.meshes.solarPanels.material;a.emissive=a.emissive||new Ce;let o=e>.05?Math.min(e/2.2,1.3):0;a.emissive.setHex(16758528),a.emissiveIntensity=Nn.lerp(a.emissiveIntensity||0,o,.08)}if(this.meshes.solarCable?.material){let a=this.meshes.solarCable.material;a.emissive=a.emissive||new Ce,a.emissive.setHex(16755200),a.emissiveIntensity=e>.05?.8:0}if(this.meshes.solarCableWall?.material){let a=this.meshes.solarCableWall.material;a.emissive=a.emissive||new Ce,a.emissive.setHex(16755200),a.emissiveIntensity=e>.05?.45:0}if(this.meshes.evCable?.material){let a=this.meshes.evCable.material;a.emissive=a.emissive||new Ce,a.emissive.setHex(62875),a.emissiveIntensity=n?.9:0}if(this.meshes.peugeotLights?.material){let a=this.meshes.peugeotLights.material;a.emissive=a.emissive||new Ce,a.emissive.setHex(62875);let o=n?Math.sin(Date.now()*.003)*.35+.65:0;a.emissiveIntensity=o}if(this.meshes.boiler?.material){let a=this.meshes.boiler.material;a.emissive=a.emissive||new Ce,a.emissive.setHex(16733440),a.emissiveIntensity=r?.8:0}if(this.meshes.gasPipes)for(let a of this.meshes.gasPipes)a.material&&(a.material.emissive=a.material.emissive||new Ce,a.material.emissive.setHex(16742144),a.material.emissiveIntensity=r?.6:0)}};var Ei=[{id:"lounge",name:"Living Room Ceiling",floor:"ground",pos:{x:1.88,y:2.15,z:-2.35},range:7.5,maxIntensity:4.2,defaultColor:16769689,entity_id:"light.living_room_living_room_light"},{id:"kitchen",name:"Kitchen Ceiling",floor:"ground",pos:{x:1.8,y:2.15,z:-7.4},range:7,maxIntensity:4.5,defaultColor:16773334,entity_id:"light.kitchen_light"},{id:"dining",name:"Dining Room",floor:"ground",pos:{x:4.3,y:2.15,z:-7.4},range:6.5,maxIntensity:4,defaultColor:16770744,entity_id:""},{id:"hallway",name:"Hall & Stairs",floor:"ground",pos:{x:4.3,y:2.15,z:-3.25},range:7.5,maxIntensity:3.8,defaultColor:16772565,entity_id:"light.downstairs_hallway"},{id:"wc",name:"Downstairs WC",floor:"ground",pos:{x:1.85,y:2.15,z:-5.32},range:5.5,maxIntensity:3.8,defaultColor:16773596,entity_id:""},{id:"living_lamp",name:"Living Room Lamp",floor:"ground",pos:{x:.6,y:1.58,z:-.65},range:5.5,maxIntensity:3.8,defaultColor:16766336,entity_id:"light.living_room_lamp",isFloorLamp:!0},{id:"master_bedroom",name:"Master Bedroom",floor:"first",pos:{x:1.9,y:4.55,z:-2.1},range:7.5,maxIntensity:4.2,defaultColor:16769689,entity_id:"light.bedroom_bedroom_light"},{id:"ensuite",name:"Master En-Suite",floor:"first",pos:{x:4.4,y:4.55,z:-1.22},range:5,maxIntensity:3.6,defaultColor:16774890,entity_id:"light.en_suite_light"},{id:"bedroom2",name:"Bedroom 2 (Guestroom)",floor:"first",pos:{x:1.75,y:4.55,z:-7.3},range:6.8,maxIntensity:4,defaultColor:16769689,entity_id:"light.guest_room_guest_room_light"},{id:"bedroom3",name:"Bedroom 3 (Nursery / Office)",floor:"first",pos:{x:4.3,y:4.55,z:-7.3},range:6.8,maxIntensity:4,defaultColor:16769689,entity_id:"light.office_nursey_light"},{id:"bathroom",name:"Family Bathroom",floor:"first",pos:{x:1.22,y:4.55,z:-4.95},range:5.5,maxIntensity:3.8,defaultColor:16775406,entity_id:"light.bathroom_light"},{id:"landing",name:"Upstairs Landing",floor:"first",pos:{x:3.3,y:4.55,z:-4.95},range:6,maxIntensity:3.8,defaultColor:16772565,entity_id:"light.upstairs_hallway"}],ky={lounge:{name:"Living Room",pos:new w(1.88,2.15,-2.35),range:7.5,maxIntensity:4.2,defaultColor:16769689,boxCenter:new w(1.88,1.2,-2.35),boxSize:new w(3.1,2.35,4.05)},kitchen:{name:"Kitchen",pos:new w(1.8,2.15,-7.4),range:7,maxIntensity:4.5,defaultColor:16773334,boxCenter:new w(1.8,1.2,-7.41),boxSize:new w(2.95,2.35,2.3)},dining:{name:"Dining Room",pos:new w(4.3,2.15,-7.4),range:6.5,maxIntensity:4,defaultColor:16770744,boxCenter:new w(4.32,1.2,-7.41),boxSize:new w(2,2.35,2.3)},hallway:{name:"Hallway",pos:new w(4.3,2.15,-3.25),range:7.5,maxIntensity:3.8,defaultColor:16772565,boxCenter:new w(4.37,1.2,-3.275),boxSize:new w(1.98,2.4,6)},wc:{name:"Downstairs WC",pos:new w(1.85,2.15,-5.32),range:5.5,maxIntensity:3.8,defaultColor:16773596,boxCenter:new w(1.85,1.2,-5.32),boxSize:new w(3.08,2.35,1.82)},master_bedroom:{name:"Master Bedroom",pos:new w(1.9,4.55,-2.1),range:7.5,maxIntensity:4.2,defaultColor:16769689,boxCenter:new w(2.325,3.85,-2.075),boxSize:new w(4.1,2.4,3.62)},ensuite:{name:"Master En-Suite",pos:new w(4.4,4.55,-1.22),range:5,maxIntensity:3.6,defaultColor:16774890,boxCenter:new w(4.38,3.85,-1.23),boxSize:new w(1.85,2.25,1.82)},bedroom2:{name:"Bedroom 2",pos:new w(1.75,4.55,-7.3),range:6.8,maxIntensity:4,defaultColor:16769689,boxCenter:new w(1.775,3.85,-7.315),boxSize:new w(3,2.4,2.6)},bedroom3:{name:"Bedroom 3",pos:new w(4.3,4.55,-7.3),range:6.8,maxIntensity:4,defaultColor:16769689,boxCenter:new w(4.295,3.85,-7.315),boxSize:new w(2.15,2.4,2.6)},bathroom:{name:"Family Bathroom",pos:new w(1.22,4.55,-4.95),range:5.5,maxIntensity:3.8,defaultColor:16775406,boxCenter:new w(1.22,3.85,-4.95),boxSize:new w(1.82,2.25,2.18)},landing:{name:"Landing & Stairs",pos:new w(3.3,4.55,-4.95),range:6,maxIntensity:3.8,defaultColor:16772565,boxCenter:new w(3.3,3.85,-4.95),boxSize:new w(2.25,2.25,2.18)}},vl=class{constructor(e,t={}){this.container=e,this.options={modelUrl:t.modelUrl||"Taylor_Wimpey_Blair.glb",nightMode:t.nightMode||!1,autoRotate:t.autoRotate||!1,...t},this.hotspots=[{id:"solar",name:"Solax Solar Inverter",pos:new w(5.88,1.78,-.5)},{id:"grid",name:"Octopus Grid & Meter",pos:new w(5.3,2,-.85)},{id:"boiler",name:"Combi Boiler & Gas",pos:new w(.45,1.8,-8.3)},{id:"ev",name:"Peugeot e-2008 EV",pos:new w(5.25,1.2,1.35)},{id:"ev_charger",name:"myenergi Zappi Charger",pos:new w(5.2,1.45,.05)},{id:"thermostat_downstairs",name:"Downstairs Heating",pos:new w(3.6,1.45,-2.4)},{id:"thermostat_upstairs",name:"Upstairs Heating",pos:new w(3.3,4.05,-4.95)},{id:"appliance_fridge",name:"Kitchen Fridge Freezer",pos:new w(2.45,1.45,-6.65)},{id:"appliance_washer",name:"Kitchen Washing Machine",pos:new w(2.15,.9,-8.2)},{id:"appliance_tv",name:"LG TV",pos:new w(3.35,1.4,-3.1)},{id:"lighting",name:"Lighting Energy Usage",pos:new w(3.6,2.3,-3.8)}],this.roofParts=[],this.xrayMeshes=[],this.roofMeshes=[],this.firstFloorMeshes=[],this.topFloorMeshes=[],this.cuttableMeshes=[],this.occludingMeshes=[],this.tvRaycaster=new Hs,this.tvTargetPos=new w(3.34,1.35,-3.1),this.cutawayMode="normal",this.customLights=this.options.customLights||Ei,this.roomLights={},this.xrayActive=!1,this.nightMode=this.options.nightMode,this.targetCameraPos=null,this.targetLookAt=null,this.clickToPlaceCallback=null,this.boundOnClickToPlace=null,this.init()}init(){let e=this.container.clientWidth||800,t=this.container.clientHeight||500;this.scene=new Cs,this.camera=new zt(40,e/t,.1,100),this.camera.position.set(15,12,17),this.renderer=new cl({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=xo,this.renderer.toneMapping=Zr,this.renderer.toneMappingExposure=.88,this.renderer.localClippingEnabled=!0,this.downstairsClipPlane=new ni(new w(0,-1,0),2.52),this.container.appendChild(this.renderer.domElement),this.css3dScene=new Cs,this.css3dRenderer=new yl,this.css3dRenderer.setSize(e,t),this.css3dRenderer.domElement.style.position="absolute",this.css3dRenderer.domElement.style.top="0",this.css3dRenderer.domElement.style.left="0",this.css3dRenderer.domElement.style.width="100%",this.css3dRenderer.domElement.style.height="100%",this.css3dRenderer.domElement.style.pointerEvents="none",this.container.appendChild(this.css3dRenderer.domElement),this.controls=new fl(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI/2-.04,this.controls.minDistance=3,this.controls.maxDistance=45,this.controls.target.set(2.5,2.5,0),this.controls.autoRotate=this.options.autoRotate,this.controls.autoRotateSpeed=.8,this.controls.addEventListener("start",()=>this.stopCameraAnimation());let i=()=>this.stopCameraAnimation();this.renderer.domElement.addEventListener("pointerdown",i,{passive:!0}),this.renderer.domElement.addEventListener("wheel",i,{passive:!0}),this.renderer.domElement.addEventListener("touchstart",i,{passive:!0}),this.css3dRenderer?.domElement&&(this.css3dRenderer.domElement.addEventListener("pointerdown",i,{passive:!0}),this.css3dRenderer.domElement.addEventListener("wheel",i,{passive:!0})),this.initLighting(),this.initEnvironment(),this.energyFlow=new xl(this.scene),this.initAppliancesAndFurniture(),this.loadModelWithFallbacks(this.options.modelUrl),this.handleResize=this.onResize.bind(this),window.addEventListener("resize",this.handleResize),typeof window<"u"&&window.ResizeObserver&&this.container&&(this.resizeObserver=new ResizeObserver(()=>this.onResize()),this.resizeObserver.observe(this.container)),this.clock=new Yr,this.animate=this.animate.bind(this),this.isRunning=!0,requestAnimationFrame(this.animate)}initLighting(){this.ambientLight=new Xr(16777215,this.nightMode?.05:.12),this.scene.add(this.ambientLight),this.sunLight=new Yn(16774630,this.nightMode?.08:1.45),this.sunLight.position.set(20,26,14),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=4096,this.sunLight.shadow.mapSize.height=4096,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=65,this.sunLight.shadow.camera.left=-16,this.sunLight.shadow.camera.right=16,this.sunLight.shadow.camera.top=16,this.sunLight.shadow.camera.bottom=-16,this.sunLight.shadow.bias=-15e-5,this.sunLight.shadow.normalBias=.02,this.sunLight.shadow.radius=2,this.scene.add(this.sunLight),this.hemiLight=new Gr(9684477,2964011,this.nightMode?.06:.18),this.scene.add(this.hemiLight),this.meterPointLight=new bi(58879,0,4),this.meterPointLight.position.set(5.28,1.4,-.85),this.scene.add(this.meterPointLight),this.carPointLight=new bi(62875,0,5),this.carPointLight.position.set(3.4,1.2,1.6),this.scene.add(this.carPointLight),this.roomLightsGroup=new vt,this.scene.add(this.roomLightsGroup),this.rebuildCustomLights(this.customLights),this.applyLightingMode()}initEnvironment(){try{if(typeof document>"u")return;let e=document.createElement("canvas");e.width=1024,e.height=512;let t=e.getContext("2d"),i=t.createLinearGradient(0,0,0,512);i.addColorStop(0,"#103965"),i.addColorStop(.35,"#3b82f6"),i.addColorStop(.48,"#93c5fd"),i.addColorStop(.5,"#ffedd5"),i.addColorStop(.52,"#9ca3af"),i.addColorStop(.65,"#374151"),i.addColorStop(1,"#1e293b"),t.fillStyle=i,t.fillRect(0,0,1024,512);let n=t.createRadialGradient(680,240,5,680,240,160);n.addColorStop(0,"rgba(255, 255, 255, 1.0)"),n.addColorStop(.15,"rgba(255, 245, 220, 0.85)"),n.addColorStop(.5,"rgba(254, 215, 170, 0.35)"),n.addColorStop(1,"rgba(254, 215, 170, 0.0)"),t.fillStyle=n,t.beginPath(),t.arc(680,240,160,0,Math.PI*2),t.fill();for(let l=0;l<18;l++){let c=(l*58+40)%1024,h=80+Math.sin(l*1.7)*60,u=40+Math.cos(l)*25,d=t.createRadialGradient(c,h,10,c,h,u);d.addColorStop(0,"rgba(255, 255, 255, 0.38)"),d.addColorStop(.6,"rgba(255, 255, 255, 0.15)"),d.addColorStop(1,"rgba(255, 255, 255, 0.0)"),t.fillStyle=d,t.beginPath(),t.arc(c,h,u,0,Math.PI*2),t.fill()}let r=new Os(e);r.mapping=qs;let a=new Js(this.renderer);a.compileEquirectangularShader();let o=a.fromEquirectangular(r).texture;this.scene.environment=o,this.scene.environmentIntensity=this.nightMode?.1:.55,a.dispose(),r.dispose()}catch(e){console.warn("Could not generate procedural environment map:",e)}}rebuildCustomLights(e){if(!e||!Array.isArray(e))return;for(this.customLights=e;this.roomLightsGroup.children.length>0;){let i=this.roomLightsGroup.children[0];this.roomLightsGroup.remove(i),i.geometry&&i.geometry.dispose(),i.material&&(Array.isArray(i.material)?i.material.forEach(n=>n.dispose()):i.material.dispose())}this.roomLights={};let t=new Rt(.14,.14,.04,16);for(let i of e){let n=i.pos||{x:2.5,y:2.2,z:-3.5},r=new w(n.x,n.y,n.z),a=i.defaultColor!==void 0?i.defaultColor:16769689,o=i.range||6.5,l=new bi(a,0,o,1.2);l.position.copy(r);let c=new ve({color:13421772,emissive:1118481,roughness:.3,metalness:.2}),h=new ne(t,c);h.position.copy(r),(i.isFloorLamp||i.id==="living_lamp")&&(h.visible=!1);let u=new vt;u.add(l),u.add(h);let d=null,f=ky[i.id];if(f?.boxCenter&&f?.boxSize){let g=new ke(f.boxSize.x,f.boxSize.y,f.boxSize.z),x=new Et({color:264212,transparent:!0,opacity:.65,side:kt,depthWrite:!1});d=new ne(g,x),d.position.copy(f.boxCenter),u.add(d)}this.roomLightsGroup.add(u),this.roomLights[i.id]={config:i,light:l,fixture:h,container:u,shadeMesh:d,floor:i.floor||(r.y>3?"first":"ground"),isOn:!1,brightness:0,colorHex:a}}this.cutawayMode==="downstairs"&&this.setCutawayMode("downstairs")}updateLightPosition(e,t,i,n){let r=this.roomLights[e];r&&(r.light.position.set(t,i,n),r.fixture.position.set(t,i,n),r.config.pos={x:t,y:i,z:n},r.floor=i>3?"first":"ground"),e==="living_lamp"&&this.applianceLamp&&(this.applianceLamp.position.set(t,0,n),this.applianceLampLight&&this.applianceLampLight.position.set(t,i,n)),this.beaconGroup&&this.beaconGroup.visible&&this.setEditingLightBeacon(e,new w(t,i,n))}setEditingLightBeacon(e,t=null){if(!this.beaconGroup){this.beaconGroup=new vt,this.scene.add(this.beaconGroup);let r=new Ur(.16,.28,32);r.rotateX(-Math.PI/2);let a=new Et({color:3718648,side:kt,transparent:!0,opacity:.85});this.beaconRing=new ne(r,a),this.beaconGroup.add(this.beaconRing);let o=new Rt(.008,.008,1,8),l=new Et({color:3718648,transparent:!0,opacity:.6});this.beaconLine=new ne(o,l),this.beaconGroup.add(this.beaconLine);let c=new Ni(.07,16,16),h=new Et({color:58879});this.beaconSphere=new ne(c,h),this.beaconGroup.add(this.beaconSphere)}let i=this.roomLights[e],n=t||(i?i.light.position:new w(2.5,2.2,-3.5));this.beaconGroup.visible=!0,this.beaconSphere.position.copy(n),this.beaconRing.position.set(n.x,.02,n.z),this.beaconLine.position.set(n.x,n.y/2,n.z),this.beaconLine.scale.set(1,Math.max(.1,n.y),1)}clearEditingLightBeacon(){this.beaconGroup&&(this.beaconGroup.visible=!1)}enableClickToPlace(e){this.clickToPlaceCallback=e,this.boundOnClickToPlace||(this.boundOnClickToPlace=t=>{if(!this.clickToPlaceCallback)return;let i=this.renderer.domElement.getBoundingClientRect(),n=new xe((t.clientX-i.left)/i.width*2-1,-((t.clientY-i.top)/i.height)*2+1),r=new Hs;r.setFromCamera(n,this.camera);let o=r.intersectObjects(this.scene.children,!0).find(l=>{let c=l.object;for(;c;){if(c===this.beaconGroup||c===this.roomLightsGroup||c===this.energyFlow?.group)return!1;c=c.parent}return!0});if(o){let l=o.point,c=this.cutawayMode==="downstairs"?2.15:l.y>3?4.55:2.15;this.clickToPlaceCallback({x:parseFloat(l.x.toFixed(2)),y:parseFloat(c.toFixed(2)),z:parseFloat(l.z.toFixed(2))})}},this.renderer.domElement.addEventListener("pointerup",this.boundOnClickToPlace))}disableClickToPlace(){this.clickToPlaceCallback=null}updateRoomLights(e){if(!e)return;this.lastLightsData=e;for(let[i,n]of Object.entries(e)){if(!this.roomLights[i])continue;let a=!!(n.is_on||n.state==="on"),o=n.brightness!==void 0?n.brightness:255,l=n.rgb_color;this.setRoomLightState(i,a,o,l)}let t=this.roomLights.lounge;if(t&&t.shadeMesh){let i=!!(e.lounge?.is_on||e.lounge?.state==="on"),n=!!(e.living_lamp?.is_on||e.living_lamp?.state==="on"),r=i||n;t.shadeMesh.visible=!r}if(this.applianceLampShade&&this.applianceLampLight){let i=e.living_lamp,n=!!(i?.is_on||i?.state==="on"),r=i?.brightness!==void 0?i.brightness:255,a=Math.max(.1,r/255);if(n){let o=new Ce(16766336);i?.rgb_color&&Array.isArray(i.rgb_color)&&i.rgb_color.length===3&&o.setRGB(i.rgb_color[0]/255,i.rgb_color[1]/255,i.rgb_color[2]/255),this.applianceLampShade.material.emissive.copy(o),this.applianceLampShade.material.emissiveIntensity=2.4*a,this.applianceLampLight.color.copy(o),this.applianceLampLight.intensity=3.6*a}else this.applianceLampShade.material.emissive.setHex(0),this.applianceLampShade.material.emissiveIntensity=0,this.applianceLampLight.intensity=0}}initAppliancesAndFurniture(){this.appliancesGroup=new vt,this.scene.add(this.appliancesGroup);let e=new vt;e.position.set(2.45,0,-6.65),e.rotation.y=Math.PI;let t=new ke(.7,1.84,.65),i=new ve({color:3028032,metalness:.82,roughness:.28}),n=new ne(t,i);n.position.y=.92,n.castShadow=!0,n.receiveShadow=!0,e.add(n);let r=new Rt(.012,.012,.55,12),a=new ve({color:14212841,metalness:.95,roughness:.15}),o=new ne(r,a);o.position.set(-.06,1.28,.34);let l=new ne(r,a);l.position.set(.06,1.28,.34),e.add(o),e.add(l);let c=new Rt(.012,.012,.48,12),h=new ne(c,a);h.rotation.z=Math.PI/2,h.position.set(0,.65,.34),e.add(h);let u=new zi(.12,.18),d=new Et({color:58879,side:kt}),f=new ne(u,d);f.position.set(-.16,1.35,.33),e.add(f),this.appliancesGroup.add(e),this.applianceFridge=e;let g=new vt;g.position.set(3.38,1.35,-3.1);let x=new ke(.038,.72,1.22),m=new ve({color:988970,roughness:.4,metalness:.6}),p=new ne(x,m);g.add(p);let y=new ke(.01,.67,1.17),S=new ve({color:131845,roughness:.12,metalness:.2,emissive:0,emissiveIntensity:0});this.applianceTvScreen=new ne(y,S),this.applianceTvScreen.position.x=-.016,g.add(this.applianceTvScreen);let v=new Ni(.007,8,8);this.applianceTvLed=new ne(v,new Et({color:15680580})),this.applianceTvLed.position.set(-.022,-.34,.54),g.add(this.applianceTvLed),this.applianceTvLight=new bi(7382527,0,3.8,1.6),this.applianceTvLight.position.set(3.18,1.35,-3.1),this.appliancesGroup.add(this.applianceTvLight),this.appliancesGroup.add(g),this.applianceTv=g;let T=document.createElement("div");T.style.width="640px",T.style.height="366px",T.style.backgroundColor="#000000",T.style.overflow="hidden",T.style.borderRadius="3px",T.style.backfaceVisibility="hidden",T.style.webkitBackfaceVisibility="hidden";let A=document.createElement("iframe");A.id="tv-youtube-iframe",A.style.width="100%",A.style.height="100%",A.style.border="none",A.style.pointerEvents="auto",A.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",A.referrerPolicy="strict-origin-when-cross-origin",A.setAttribute("allowfullscreen","true"),T.appendChild(A),this.tvIframe=A,this.tvIframeContainer=T,this.isTvMuted=!0,this.isTvPlaying=!1,this.tvCss3dObject=new _l(T),this.tvCss3dObject.position.set(3.352,1.35,-3.1),this.tvCss3dObject.rotation.y=-Math.PI/2;let _=1.17/640;this.tvCss3dObject.scale.set(_,_,_),this.tvCss3dObject.visible=!1,this.css3dScene.add(this.tvCss3dObject);let E=new vt;E.position.set(.6,0,-.65);let I=new Rt(.18,.18,.025,24),C=new ve({color:12884822,metalness:.85,roughness:.25}),N=new ne(I,C);N.position.y=.0125,E.add(N);let F=new Rt(.014,.014,1.55,16),G=new ne(F,C);G.position.y=.775,E.add(G);let P=new Rt(.18,.22,.28,24),X=new ve({color:16708551,roughness:.85,side:kt,emissive:0,emissiveIntensity:0});this.applianceLampShade=new ne(P,X),this.applianceLampShade.position.y=1.55,E.add(this.applianceLampShade),this.applianceLampLight=new bi(16769706,0,5,1.2),this.applianceLampLight.position.set(.6,1.58,-.65),this.appliancesGroup.add(this.applianceLampLight),this.appliancesGroup.add(E),this.applianceLamp=E;let V=new vt;V.position.set(2.15,0,-8.2);let z=new ke(.58,.85,.58),ie=new ve({color:15857145,roughness:.35,metalness:.25}),q=new ne(z,ie);q.position.y=.425,q.castShadow=!0,q.receiveShadow=!0,V.add(q);let Q=new Fs(.19,.024,16,36),ee=new ve({color:9741240,metalness:.9,roughness:.18}),J=new ne(Q,ee);J.position.set(0,.42,.295),V.add(J);let _e=new Nr(.175,32),W=new ve({color:988970,roughness:.1,metalness:.6,transparent:!0,opacity:.85,side:kt});this.applianceWasherGlass=new ne(_e,W),this.applianceWasherGlass.position.set(0,.42,.298),V.add(this.applianceWasherGlass);let ae=new Fs(.14,.012,12,28),Me=new ne(ae,ee);Me.position.set(0,.42,.296),V.add(Me);let Te=new zi(.54,.14),fe=new ve({color:1976635,roughness:.4,metalness:.5,side:kt}),Pe=new ne(Te,fe);Pe.position.set(0,.74,.295),V.add(Pe);let ct=new ke(.14,.08,.015),Fe=new ve({color:14870768,roughness:.3}),rt=new ne(ct,Fe);rt.position.set(-.17,.74,.3),V.add(rt);let ht=new Rt(.032,.032,.018,20),Ye=new ne(ht,ee);Ye.rotation.x=Math.PI/2,Ye.position.set(0,.74,.302),V.add(Ye);let nt=new zi(.12,.05),Se=new Et({color:62875,side:kt});this.applianceWasherDisplay=new ne(nt,Se),this.applianceWasherDisplay.position.set(.17,.74,.302),V.add(this.applianceWasherDisplay);let Ae=new Ni(.006,8,8);this.applianceWasherLed=new ne(Ae,new Et({color:6583435})),this.applianceWasherLed.position.set(.24,.77,.304),V.add(this.applianceWasherLed),this.applianceWasherLight=new bi(62875,0,2,1.4),this.applianceWasherLight.position.set(2.15,.45,-7.95),this.appliancesGroup.add(this.applianceWasherLight),this.appliancesGroup.add(V),this.applianceWasher=V;let ue=new vt,Ee=new ve({color:3359061,roughness:.85,metalness:.05}),Ne=new ve({color:4674921,roughness:.8,metalness:.02}),We=new ve({color:14251782,roughness:.7}),St=new ve({color:15857145,roughness:.8}),Nt=new ve({color:988970,roughness:.6}),O=new ne(new ke(.88,.22,2.1),Ee);O.position.set(.99,.17,-3.05),O.castShadow=!0,O.receiveShadow=!0,ue.add(O);let Mt=new ne(new ke(.95,.22,.88),Ee);Mt.position.set(1.905,.17,-3.66),Mt.castShadow=!0,Mt.receiveShadow=!0,ue.add(Mt);let at=new ne(new ke(.2,.46,2.1),Ee);at.position.set(.65,.51,-3.05),at.castShadow=!0,at.receiveShadow=!0,ue.add(at);let ot=new ne(new ke(.95,.46,.2),Ee);ot.position.set(1.905,.51,-4),ot.castShadow=!0,ot.receiveShadow=!0,ue.add(ot);let oe=new ne(new ke(.88,.38,.16),Ee);oe.position.set(.99,.41,-2),oe.castShadow=!0,oe.receiveShadow=!0,ue.add(oe);let _t=new ne(new ke(.16,.38,.88),Ee);_t.position.set(2.38,.41,-3.66),_t.castShadow=!0,_t.receiveShadow=!0,ue.add(_t);let Ue=new ne(new ke(.66,.13,.92),Ne);Ue.position.set(1.1,.345,-2.55),Ue.castShadow=!0,ue.add(Ue);let Ge=new ne(new ke(.66,.13,.92),Ne);Ge.position.set(1.1,.345,-3.49),Ge.castShadow=!0,ue.add(Ge);let R=new ne(new ke(.93,.13,.66),Ne);R.position.set(1.905,.345,-3.56),R.castShadow=!0,ue.add(R);let b=new ne(new ke(.32,.3,.1),We);b.position.set(.82,.52,-2.18),b.rotation.y=.25,ue.add(b);let U=new ne(new ke(.32,.3,.1),St);U.position.set(.84,.52,-3.88),U.rotation.y=.78,ue.add(U);let se=new ne(new ke(.3,.28,.1),We);se.position.set(2.22,.52,-3.68),se.rotation.y=1.35,ue.add(se);let $=[[.6,-2],[1.38,-2],[.6,-4.05],[2.35,-4.05],[2.35,-3.25],[1.38,-3.25]];for(let[Ve,Re]of $){let xt=new ne(new Rt(.025,.025,.06,8),Nt);xt.position.set(Ve,.03,Re),ue.add(xt)}this.appliancesGroup.add(ue),this.couchGroup=ue;let te=new vt,le=new ve({color:10120007,roughness:.45,metalness:.08}),K=new ve({color:3359061,roughness:.8}),Z=new ne(new ke(1.4,.045,.85),le);Z.position.set(4.3,.73,-7.4),Z.castShadow=!0,Z.receiveShadow=!0,te.add(Z);let he=[[-.62,-.36],[.62,-.36],[-.62,.36],[.62,.36]];for(let[Ve,Re]of he){let xt=new ne(new ke(.05,.71,.05),le);xt.position.set(4.3+Ve,.355,-7.4+Re),xt.castShadow=!0,te.add(xt)}let L=[{x:4.02,z:-7.4-.52,rotY:0},{x:4.58,z:-7.4-.52,rotY:0},{x:4.02,z:-7.4+.52,rotY:Math.PI},{x:4.58,z:-7.4+.52,rotY:Math.PI}];for(let Ve of L){let Re=new vt;Re.position.set(Ve.x,0,Ve.z),Re.rotation.y=Ve.rotY;let xt=new ne(new ke(.38,.04,.38),K);xt.position.y=.44,xt.castShadow=!0,Re.add(xt);let Tt=new ne(new ke(.38,.38,.035),K);Tt.position.set(0,.66,-.17),Tt.castShadow=!0,Re.add(Tt);let rs=[[-.16,-.16],[.16,-.16],[-.16,.16],[.16,.16]];for(let[Ui,ji]of rs){let lt=new ne(new Rt(.015,.015,.42,6),le);lt.position.set(Ui,.21,ji),Re.add(lt)}te.add(Re)}this.appliancesGroup.add(te),this.diningTable=te,this.upstairsFurnitureGroup=new vt,this.scene.add(this.upstairsFurnitureGroup);let j=2.52,Y=new vt;Y.position.set(.55,j,-2.15);let pe=new ve({color:1976635,roughness:.6}),ce=new ve({color:1976635,roughness:.7}),de=new ve({color:16317180,roughness:.85}),He=new ve({color:4674921,roughness:.75}),Ze=new ve({color:16777215,roughness:.8}),re=new ne(new ke(.08,.95,1.62),ce);re.position.set(.04,.52,0),re.castShadow=!0,Y.add(re);let ze=new ne(new ke(1.95,.28,1.55),pe);ze.position.set(1.015,.14,0),ze.castShadow=!0,Y.add(ze);let Je=new ne(new ke(1.9,.2,1.48),de);Je.position.set(1.02,.38,0),Je.castShadow=!0,Y.add(Je);let ye=new ne(new ke(1.42,.09,1.52),He);ye.position.set(1.26,.485,0),ye.castShadow=!0,Y.add(ye);let dt=new ne(new ke(.38,.12,.58),Ze);dt.position.set(.28,.51,-.34),Y.add(dt);let It=new ne(new ke(.38,.12,.58),Ze);It.position.set(.28,.51,.34),Y.add(It);for(let Ve of[-.98,.98]){let Re=new ne(new ke(.4,.44,.38),pe);Re.position.set(.22,.22,Ve),Y.add(Re);let xt=new ne(new Rt(.06,.08,.03,12),new ve({color:14251782}));xt.position.set(.22,.455,Ve),Y.add(xt);let Tt=new ne(new Rt(.08,.11,.16,12),new ve({color:16772565}));Tt.position.set(.22,.58,Ve),Y.add(Tt)}this.upstairsFurnitureGroup.add(Y);let Yt=new vt;Yt.position.set(.55,j,-7.3);let ts=new ve({color:3359061,roughness:.6}),tr=new ve({color:5073243,roughness:.75}),ir=new ne(new ke(.08,.88,1.5),ts);ir.position.set(.04,.48,0),ir.castShadow=!0,Yt.add(ir);let is=new ne(new ke(1.9,.26,1.44),ts);is.position.set(.99,.13,0),is.castShadow=!0,Yt.add(is);let ns=new ne(new ke(1.85,.18,1.38),de);ns.position.set(1,.35,0),ns.castShadow=!0,Yt.add(ns);let Ti=new ne(new ke(1.38,.08,1.42),tr);Ti.position.set(1.23,.445,0),Ti.castShadow=!0,Yt.add(Ti);let ss=new ne(new ke(.36,.11,.52),Ze);ss.position.set(.27,.47,-.32),Yt.add(ss);let nr=new ne(new ke(.36,.11,.52),Ze);nr.position.set(.27,.47,.32),Yt.add(nr);let sr=new ne(new ke(.38,.42,.36),ts);sr.position.set(.22,.21,.92),Yt.add(sr),this.upstairsFurnitureGroup.add(Yt);let Ot=new vt;Ot.position.set(5.18,j,-7.3);let ai=new ve({color:16317180,roughness:.35}),ca=new ve({color:16777215,roughness:.8}),Fn=new ve({color:16707722,roughness:.7}),Ml=[[0,-.58],[-.64,-.58],[0,.58],[-.64,.58]];for(let[Ve,Re]of Ml){let xt=new ne(new ke(.04,.82,.04),ai);xt.position.set(Ve,.41,Re),xt.castShadow=!0,Ot.add(xt)}let rr=new ne(new ke(.035,.035,1.2),ai);rr.position.set(0,.8,0),Ot.add(rr);let ar=new ne(new ke(.035,.035,1.2),ai);ar.position.set(-.64,.8,0),Ot.add(ar);let ha=new ne(new ke(.6,.035,.035),ai);ha.position.set(-.32,.8,-.58),Ot.add(ha);let ua=new ne(new ke(.6,.035,.035),ai);ua.position.set(-.32,.8,.58),Ot.add(ua);let da=new ne(new ke(.035,.035,1.2),ai);da.position.set(0,.22,0),Ot.add(da);let or=new ne(new ke(.035,.035,1.2),ai);or.position.set(-.64,.22,0),Ot.add(or);for(let Ve=-.5;Ve<=.5;Ve+=.1){let Re=new ne(new Rt(.007,.007,.55,6),ai);Re.position.set(-.64,.51,Ve),Ot.add(Re)}for(let Ve=-.5;Ve<=.5;Ve+=.1){let Re=new ne(new Rt(.007,.007,.55,6),ai);Re.position.set(0,.51,Ve),Ot.add(Re)}for(let Ve=-.52;Ve<=-.1;Ve+=.1){let Re=new ne(new Rt(.007,.007,.55,6),ai);Re.position.set(Ve,.51,-.58),Ot.add(Re);let xt=new ne(new Rt(.007,.007,.55,6),ai);xt.position.set(Ve,.51,.58),Ot.add(xt)}let M=new ne(new ke(.6,.1,1.14),ca);M.position.set(-.32,.27,0),M.castShadow=!0,Ot.add(M);let D=new ne(new ke(.61,.03,.76),Fn);D.position.set(-.32,.33,.19),D.castShadow=!0,Ot.add(D),this.upstairsFurnitureGroup.add(Ot);let H=new vt;H.position.set(5.73,1.75,-.5),H.rotation.y=Math.PI/2;let B=new ne(new ke(.44,.58,.16),new ve({color:16317180,roughness:.35,metalness:.2}));B.castShadow=!0,B.receiveShadow=!0,H.add(B);let k=new ne(new ke(.42,.54,.04),new ve({color:3359061,roughness:.6,metalness:.8}));k.position.z=-.09,H.add(k);let ge=new ne(new ke(.38,.22,.01),new ve({color:659229,roughness:.1,metalness:.8}));ge.position.set(0,.08,.085),H.add(ge);let Le=new ne(new ke(.38,.014,.012),new ve({color:15680580,roughness:.4}));Le.position.set(0,-.035,.086),H.add(Le);let me=new ne(new zi(.18,.07),new Et({color:165063}));me.position.set(0,.08,.092),H.add(me),this.applianceInverterScreen=me;let be=new ne(new Ni(.007,8,8),new Et({color:62875}));be.position.set(-.11,.01,.093),H.add(be),this.applianceInverterLed=be;let Oe=new ne(new Ni(.007,8,8),new Et({color:3718648}));Oe.position.set(-.06,.01,.093),H.add(Oe);let $e=new ne(new ke(.06,.06,.02),new ve({color:16096779,roughness:.5}));$e.position.set(.24,-.16,.02),H.add($e);let Qe=new ne(new Rt(.022,.022,.025,12),new ve({color:15680580,roughness:.4}));Qe.rotation.z=Math.PI/2,Qe.position.set(.255,-.16,.02),H.add(Qe);for(let Ve of[-.06,.06]){let Re=new ne(new Rt(.015,.015,.04,8),new ve({color:988970,roughness:.5}));Re.position.set(Ve,.3,0),H.add(Re)}let Ie=new ne(new Rt(.018,.018,.04,8),new ve({color:988970,roughness:.5}));Ie.position.set(0,-.3,0),H.add(Ie),this.appliancesGroup.add(H),this.applianceInverter=H;let st=this.energyFlow?.paths?.solar||new Di([new w(3.2,6.06,-6.5),new w(4.4,6.06,-6.5),new w(5.61,6.06,-6.5),new w(5.632,6.05,-6.5),new w(5.632,6.6,-5.3),new w(5.632,7.15,-4.16),new w(5.632,6.2,-2.3),new w(5.632,5.3,-.5),new w(5.632,3.8,-.5),new w(5.632,2.8,-.5),new w(5.632,2.1,-.5),new w(5.632,1.75,-.5),new w(5.632,1.4,-.5),new w(5.632,1.15,-.5),new w(5.45,1.15,-.65),new w(5.27,1.15,-.75)]),Lt=new Br(st,96,.016,8,!1),yt=new ve({color:1976635,roughness:.45,metalness:.2}),ft=new ne(Lt,yt);ft.name="Solar_PV_Cabling_Wall",ft.castShadow=!0,this.appliancesGroup.add(ft),this.solarCableConduit=ft;let Ft=new ve({color:4674921,roughness:.35,metalness:.8});for(let Ve of[1.25,2.35,3.1,3.85,4.6]){let Re=new ne(new ke(.018,.04,.045),Ft);Re.position.set(5.632,Ve,-.5),this.appliancesGroup.add(Re)}let De=[new w(5.632,5.8,-1.45),new w(5.632,6.55,-2.9),new w(5.632,7.1,-4.16),new w(5.632,6.6,-5.3),new w(5.632,6.1,-6.4)];for(let Ve of De){let Re=new ne(new ke(.018,.04,.04),Ft);Re.position.copy(Ve),this.appliancesGroup.add(Re)}for(let Ve of[3.6,4.3,5]){let Re=new ne(new ke(.04,.02,.04),Ft);Re.position.set(Ve,6.06,-6.5),this.appliancesGroup.add(Re)}}updateAppliances(e){if(e){if(this.applianceInverterLed&&this.applianceInverterScreen&&(Number(this.currentEnergyData?.solar?.power_kw||0)>.04?(this.applianceInverterLed.material.color.setHex(62875),this.applianceInverterScreen.material.color.setHex(165063)):(this.applianceInverterLed.material.color.setHex(6583435),this.applianceInverterScreen.material.color.setHex(661807))),this.applianceTvScreen&&this.applianceTvLight){let t=!!(e.tv?.is_on||e.tv?.state==="on");if(this.isTvPlaying=t,t){this.applianceTvScreen.material.emissive.setHex(6072565),this.applianceTvScreen.material.emissiveIntensity=1.8,this.applianceTvLight.intensity=1.6,this.applianceTvLed&&this.applianceTvLed.material.color.setHex(2278750);let i="https://www.youtube.com/embed/-m0iWqgyvKQ?autoplay=1&mute=1&loop=1&playlist=-m0iWqgyvKQ&enablejsapi=1";this.tvIframe&&(!this.tvIframe.src||!this.tvIframe.src.includes("-m0iWqgyvKQ"))&&(this.tvIframe.src=i)}else this.applianceTvScreen.material.emissive.setHex(0),this.applianceTvScreen.material.emissiveIntensity=0,this.applianceTvLight.intensity=0,this.applianceTvLed&&this.applianceTvLed.material.color.setHex(15680580),this.tvIframe&&this.tvIframe.src&&(this.tvIframe.src=""),this.tvCss3dObject&&(this.tvCss3dObject.visible=!1)}if(this.applianceWasher&&this.applianceWasherLight){let t=e.washer||{};!!(t.is_active||t.power_w&&t.power_w>10)?(this.applianceWasherLed&&this.applianceWasherLed.material.color.setHex(2278750),this.applianceWasherDisplay&&this.applianceWasherDisplay.material.color.setHex(62875),this.applianceWasherGlass&&(this.applianceWasherGlass.material.emissive.setHex(62875),this.applianceWasherGlass.material.emissiveIntensity=.8),this.applianceWasherLight.intensity=1.4):(this.applianceWasherLed&&this.applianceWasherLed.material.color.setHex(6583435),this.applianceWasherDisplay&&this.applianceWasherDisplay.material.color.setHex(3359061),this.applianceWasherGlass&&(this.applianceWasherGlass.material.emissive.setHex(0),this.applianceWasherGlass.material.emissiveIntensity=0),this.applianceWasherLight.intensity=0)}}}toggleTvAudio(){if(!this.tvIframe||!this.tvIframe.contentWindow)return!1;this.isTvMuted=!this.isTvMuted;let e=this.isTvMuted?"mute":"unMute";return this.tvIframe.contentWindow.postMessage(JSON.stringify({event:"command",func:e,args:""}),"*"),!this.isTvMuted}setRoomLightState(e,t,i=255,n=null){let r=this.roomLights[e];if(r)if(r.isOn=t,r.brightness=i,t){r.shadeMesh&&(r.shadeMesh.visible=!1);let a=Math.max(.2,Math.min(1,i/255));Array.isArray(n)&&n.length===3?r.light.color.setRGB(n[0]/255,n[1]/255,n[2]/255):r.light.color.setHex(r.config.defaultColor);let o=this.nightMode?1.4:1;r.light.intensity=r.config.maxIntensity*a*o,r.fixture.material.emissive.copy(r.light.color).multiplyScalar(a*2.8),r.fixture.material.color.setHex(16777215)}else r.shadeMesh&&(r.shadeMesh.visible=!0),r.light.intensity=0,r.fixture.material.emissive.setHex(657930),r.fixture.material.color.setHex(2236962)}applyLightingMode(){this.nightMode?(this.scene.background=new Ce(329745),"environmentIntensity"in this.scene&&(this.scene.environmentIntensity=.1),this.ambientLight.intensity=.05,this.sunLight.intensity=.08,this.sunLight.color.setHex(2636638),this.hemiLight.intensity=.06,this.meterPointLight.intensity=1.2,this.carPointLight.intensity=1.2):(this.scene.background=new Ce(922660),"environmentIntensity"in this.scene&&(this.scene.environmentIntensity=.55),this.ambientLight.intensity=.12,this.sunLight.intensity=1.45,this.sunLight.color.setHex(16774630),this.hemiLight.intensity=.18,this.meterPointLight.intensity=.4,this.carPointLight.intensity=.4)}setNightMode(e){this.nightMode=e,this.applyLightingMode(),this.lastLightsData&&this.updateRoomLights(this.lastLightsData)}generateNormalMap(e,t=2.5){if(typeof document>"u")return null;try{let i=e.width,n=e.height,o=e.getContext("2d").getImageData(0,0,i,n).data,l=document.createElement("canvas");l.width=i,l.height=n;let c=l.getContext("2d"),h=c.createImageData(i,n),u=h.data;for(let d=0;d<n;d++){let f=(d-1+n)%n,g=(d+1)%n;for(let x=0;x<i;x++){let m=(x-1+i)%i,p=(x+1)%i,y=o[(d*i+m)*4]/255,S=o[(d*i+p)*4]/255,v=o[(f*i+x)*4]/255,T=o[(g*i+x)*4]/255,A=(S-y)*t,_=(T-v)*t,E=1,I=Math.hypot(A,_,E),C=-A/I,N=-_/I,F=E/I,G=(d*i+x)*4;u[G]=Math.round((C*.5+.5)*255),u[G+1]=Math.round((N*.5+.5)*255),u[G+2]=Math.round((F*.5+.5)*255),u[G+3]=255}}return c.putImageData(h,0,0),l}catch(i){return console.warn("Normal map generation error:",i),null}}createRealisticTextures(){if(typeof document>"u")return null;try{let e=(Se,Ae)=>{let ue=document.createElement("canvas");return ue.width=Se,ue.height=Ae,ue},t=e(512,512),i=t.getContext("2d"),n=e(512,512),r=n.getContext("2d");i.fillStyle="#dde0e5",i.fillRect(0,0,512,512),r.fillStyle="#808080",r.fillRect(0,0,512,512);for(let Se=0;Se<8;Se++){let Ae=Math.random()*512,ue=Math.random()*512,Ee=80+Math.random()*120,Ne=i.createRadialGradient(Ae,ue,10,Ae,ue,Ee);Ne.addColorStop(0,Math.random()>.5?"rgba(215, 220, 228, 0.45)":"rgba(240, 244, 250, 0.55)"),Ne.addColorStop(1,"rgba(221, 224, 229, 0)"),i.fillStyle=Ne,i.beginPath(),i.arc(Ae,ue,Ee,0,Math.PI*2),i.fill()}for(let Se=0;Se<15e3;Se++){let Ae=Math.random()*512,ue=Math.random()*512,Ee=Math.random();Ee<.35?(i.fillStyle="rgba(195, 200, 210, 0.35)",r.fillStyle="#505050"):Ee<.7?(i.fillStyle="rgba(255, 255, 255, 0.7)",r.fillStyle="#b8b8b8"):(i.fillStyle="rgba(225, 220, 210, 0.4)",r.fillStyle="#909090"),i.fillRect(Ae,ue,1.2,1.2),r.fillRect(Ae,ue,1.2,1.2)}let a=["#d8dbe0","#c5cad2","#ffffff","#e8e4dc","#b0b6c2","#f0f2f5"];for(let Se=0;Se<2800;Se++){let Ae=Math.random()*512,ue=Math.random()*512,Ee=1.8+Math.random()*2.2,Ne=1.8+Math.random()*2.2,We=a[Math.floor(Math.random()*a.length)];i.fillStyle=We,i.fillRect(Ae,ue,Ee,Ne),r.fillStyle="#e5e5e5",r.fillRect(Ae,ue,Ee,Ne),r.fillStyle="#383838",r.fillRect(Ae+Ee*.5,ue+Ne*.5,Ee*.6,Ne*.6)}let o=e(512,512),l=o.getContext("2d"),c=e(512,512),h=c.getContext("2d");l.fillStyle="#1c2026",l.fillRect(0,0,512,512),h.fillStyle="#111111",h.fillRect(0,0,512,512);let u=10,d=512/u,f=512/6,g=["#272b33","#2e333d","#22252c","#343a44","#2a2f37"];for(let Se=0;Se<u;Se++){let Ae=Se*d,ue=Se%2===0?0:-f/2;for(let Ee=ue-f;Ee<512+f;Ee+=f){let Ne=g[Math.floor(Math.random()*g.length)];l.fillStyle=Ne,l.fillRect(Ee+1,Ae,f-2,d);for(let St=0;St<12;St++)l.fillStyle="rgba(255, 255, 255, 0.04)",l.fillRect(Ee+Math.random()*f,Ae,1,d);l.fillStyle="rgba(0, 0, 0, 0.35)",l.fillRect(Ee,Ae+d-2.5,f,2.5);let We=h.createLinearGradient(Ee,Ae,Ee,Ae+d);We.addColorStop(0,"#555555"),We.addColorStop(.9,"#eeeeee"),We.addColorStop(1,"#111111"),h.fillStyle=We,h.fillRect(Ee+1,Ae,f-2,d)}}let x=e(512,512),m=x.getContext("2d"),p=e(512,512),y=p.getContext("2d");m.fillStyle="#c49760",m.fillRect(0,0,512,512),y.fillStyle="#222222",y.fillRect(0,0,512,512);let S=6,v=512/S,T=["#caa06a","#be925b","#d3a973","#b68953","#cf9f67"];for(let Se=0;Se<S;Se++){let Ae=Se*v,Ee=512/4,Ne=Se*73%Ee;for(let We=-Ne;We<512+Ee;We+=Ee){let St=T[Math.floor(Math.random()*T.length)];m.fillStyle=St,m.fillRect(Ae+1.5,We+1.5,v-3,Ee-3);for(let Nt=0;Nt<15;Nt++){let O=Ae+Math.random()*v;m.fillStyle="rgba(70, 45, 18, 0.07)",m.fillRect(O,We,1,Ee)}m.fillStyle="rgba(45, 25, 10, 0.4)",m.fillRect(Ae,We,v,1.5),m.fillRect(Ae,We,1.5,Ee),y.fillStyle="#dcdcdc",y.fillRect(Ae+1.5,We+1.5,v-3,Ee-3),y.fillStyle="#111111",y.fillRect(Ae,We,v,1.5),y.fillRect(Ae,We,1.5,Ee)}}let A=e(512,512),_=A.getContext("2d"),E=e(512,512),I=E.getContext("2d");_.fillStyle="#9ca3af",_.fillRect(0,0,512,512),I.fillStyle="#151515",I.fillRect(0,0,512,512);let C=4,N=512/C,F=4;for(let Se=0;Se<C;Se++)for(let Ae=0;Ae<C;Ae++){let ue=Se*N+F/2,Ee=Ae*N+F/2,Ne=N-F;_.fillStyle="#f4f3ee",_.fillRect(ue,Ee,Ne,Ne);for(let We=0;We<3;We++)_.beginPath(),_.moveTo(ue+Math.random()*Ne,Ee+Math.random()*Ne),_.bezierCurveTo(ue+Math.random()*Ne,Ee+Math.random()*Ne,ue+Math.random()*Ne,Ee+Math.random()*Ne,ue+Math.random()*Ne,Ee+Math.random()*Ne),_.strokeStyle="rgba(190, 185, 175, 0.28)",_.lineWidth=2+Math.random()*2,_.stroke();I.fillStyle="#f0f0f0",I.fillRect(ue,Ee,Ne,Ne)}let G=e(256,256),P=G.getContext("2d");P.fillStyle="#d3cbc2",P.fillRect(0,0,256,256);for(let Se=0;Se<256;Se+=4)for(let Ae=0;Ae<256;Ae+=4){let ue=Math.random();P.fillStyle=ue>.6?"#ded8cf":ue<.3?"#b8afa4":"#c9c1b7",P.fillRect(Ae,Se,3,3)}let X=e(512,512),V=X.getContext("2d"),z=e(512,512),ie=z.getContext("2d");V.fillStyle="#374151",V.fillRect(0,0,512,512),ie.fillStyle="#111111",ie.fillRect(0,0,512,512);let q=12,Q=512/q,ee=512/6,J=["#5b626e","#666e7b","#4f5661","#737a88"];for(let Se=0;Se<q;Se++){let Ae=Se*Q,ue=Se%2===0?0:-ee/2;for(let Ee=ue-ee;Ee<512+ee;Ee+=ee){let Ne=J[Math.floor(Math.random()*J.length)];V.fillStyle=Ne,V.fillRect(Ee+2,Ae+2,ee-4,Q-4),ie.fillStyle="#e0e0e0",ie.fillRect(Ee+2,Ae+2,ee-4,Q-4)}}let _e=e(256,256),W=_e.getContext("2d");W.fillStyle="#3d7a2e",W.fillRect(0,0,256,256);let ae=["#4a9037","#356d27","#5bb044","#2e5d22"];for(let Se=0;Se<4e3;Se++){let Ae=Math.random()*256,ue=Math.random()*256;W.fillStyle=ae[Math.floor(Math.random()*ae.length)],W.fillRect(Ae,ue,1.5,2.5)}let Me=e(512,512),Te=Me.getContext("2d");Te.fillStyle="#08101e",Te.fillRect(0,0,512,512);let fe=6,Pe=512/fe;for(let Se=0;Se<fe;Se++)for(let Ae=0;Ae<fe;Ae++){let ue=Se*Pe+1.5,Ee=Ae*Pe+1.5,Ne=Pe-3;Te.fillStyle="#0e1b30",Te.fillRect(ue,Ee,Ne,Ne),Te.strokeStyle="rgba(220, 230, 245, 0.45)",Te.lineWidth=1;for(let We of[ue+Ne*.25,ue+Ne*.5,ue+Ne*.75])Te.beginPath(),Te.moveTo(We,Ee),Te.lineTo(We,Ee+Ne),Te.stroke();Te.strokeStyle="rgba(180, 200, 230, 0.12)";for(let We=Ee+4;We<Ee+Ne;We+=5)Te.beginPath(),Te.moveTo(ue,We),Te.lineTo(ue+Ne,We),Te.stroke()}let ct=this.generateNormalMap(n,3.2),Fe=this.generateNormalMap(c,2.6),rt=this.generateNormalMap(p,2.2),ht=this.generateNormalMap(E,2.4),Ye=this.generateNormalMap(z,2.8),nt=(Se,Ae,ue)=>{if(!Se)return null;let Ee=new Os(Se);return Ee.wrapS=Pi,Ee.wrapT=Pi,Ee.repeat.set(Ae,ue),Ee};return{roughcastMap:nt(t,6,6),roughcastNormal:nt(ct,6,6),roofMap:nt(o,5,5),roofNormal:nt(Fe,5,5),woodMap:nt(x,3,3),woodNormal:nt(rt,3,3),tileMap:nt(A,3,3),tileNormal:nt(ht,3,3),carpetMap:nt(G,4,4),pavingMap:nt(X,4,4),pavingNormal:nt(Ye,4,4),grassMap:nt(_e,6,6),solarMap:nt(Me,2,2)}}catch(e){return console.warn("Procedural texture generation error:",e),null}}applyRealisticMaterials(e){if(!e)return;let t=this.createRealisticTextures();e.traverse(i=>{if(!i.isMesh)return;let n=i.name;n.includes("Exterior_Walls")||n.includes("Separating_Party_Wall")?t&&(i.material=new ve({map:t.roughcastMap,normalMap:t.roughcastNormal,normalScale:new xe(1.8,1.8),roughness:.94,metalness:.02})):n.includes("Roof_Main")?t&&(i.material=new ve({map:t.roofMap,normalMap:t.roofNormal,normalScale:new xe(1.5,1.5),roughness:.78,metalness:.12})):n.includes("Roof_Ridge_Tiles")?i.material=new ve({color:2237997,roughness:.8,metalness:.1}):n.includes("Roof_Solar_Panels")?i.material=new Bt({map:t?.solarMap,color:660516,roughness:.08,metalness:.92,clearcoat:1,clearcoatRoughness:.04}):n.includes("Ground_Floor_Wood_Floor")?t&&(i.material=new ve({map:t.woodMap,normalMap:t.woodNormal,normalScale:new xe(1.2,1.2),roughness:.3,metalness:.04})):n.includes("Ground_Floor_Tile_Floor")||n.includes("First_Floor_Tiles")?t&&(i.material=new ve({map:t.tileMap,normalMap:t.tileNormal,normalScale:new xe(1.2,1.2),roughness:.18,metalness:.08})):n.includes("Carpet_")||n.includes("Landing_Carpet")?t&&(i.material=new ve({map:t.carpetMap,roughness:.96,metalness:.02})):n.includes("Interior_Walls_")?i.material=new ve({color:16053493,roughness:.88,metalness:.02}):n.includes("First_Floor_Ceiling")?i.material=new ve({color:16448250,roughness:.92,metalness:.01}):n.includes("Windows_Frames")||n.includes("Rear_French_Doors")?i.material=new ve({color:15857145,roughness:.35,metalness:.1}):n.includes("Windows_Glass")?i.material=new Bt({color:10863848,transmission:.88,roughness:.03,metalness:.12,ior:1.52,transparent:!0,opacity:.25,depthWrite:!1}):n.includes("Front_Entrance_Door")?i.material=new ve({color:1976635,roughness:.32,metalness:.15}):n.includes("Driveway")?t&&(i.material=new ve({map:t.pavingMap,normalMap:t.pavingNormal,normalScale:new xe(1.5,1.5),roughness:.78,metalness:.05})):n.includes("Landscape_Grass")?t&&(i.material=new ve({map:t.grassMap,roughness:.88,metalness:.02})):n.includes("Landscape_Paving")?t&&(i.material=new ve({map:t.pavingMap,roughness:.82,metalness:.05})):n.includes("Landscape_Fencing")?i.material=new ve({color:9132587,roughness:.75,metalness:.05}):n.includes("Fascia_and_Soffits")||n.includes("Rainwater_Gutters")?i.material=new ve({color:2042167,roughness:.35,metalness:.2}):n.includes("Car_Peugeot_e2008_Body")?i.material=new Bt({color:1920728,metalness:.88,roughness:.18,clearcoat:1,clearcoatRoughness:.06}):n.includes("Car_Peugeot_e2008_Trim")?i.material=new ve({color:988970,roughness:.12,metalness:.4}):n.includes("Car_Peugeot_e2008_Glass")?i.material=new Bt({color:1976635,transmission:.85,roughness:.05,metalness:.1,transparent:!0,opacity:.35}):n.includes("Car_Peugeot_e2008_Wheels")?i.material=new ve({color:14870768,metalness:.95,roughness:.12}):n.includes("Car_Peugeot_e2008_Tires")?i.material=new ve({color:1580068,roughness:.92,metalness:.02}):n.includes("Car_Peugeot_e2008_Lights")?i.material=new ve({color:16777215,emissive:16777215,emissiveIntensity:.45,roughness:.1}):n.includes("Car_Peugeot_e2008_Taillights")?i.material=new ve({color:14427686,emissive:15680580,emissiveIntensity:.65,roughness:.2}):n.includes("EV_Charger")?i.material=new ve({color:16317180,roughness:.25,metalness:.15}):n.includes("EV_Charging_Cable")?i.material=new ve({color:1976635,roughness:.85,metalness:.05}):n.includes("Kitchen_Worktop")?i.material=new ve({color:1975344,roughness:.18,metalness:.15}):n.includes("Kitchen_Cabinets")?i.material=new ve({color:14078929,roughness:.4,metalness:.05}):n.includes("Kitchen_Sink_Hob")?i.material=new ve({color:2237998,roughness:.25,metalness:.85}):n.includes("Kitchen_Combi_Boiler")?i.material=new ve({color:16645629,roughness:.22,metalness:.1}):n.includes("Sanitaryware")?i.material=new ve({color:16777215,roughness:.12,metalness:.05}):n.includes("Staircase")?i.material=new ve({color:11897170,roughness:.42,metalness:.05}):n.includes("Interior_Doors")&&(i.material=new ve({color:16317180,roughness:.45,metalness:.05}))})}loadModelWithFallbacks(e){let t=[e,"Taylor_Wimpey_Blair.glb","./Taylor_Wimpey_Blair.glb","/local/ha-energy-3d/Taylor_Wimpey_Blair.glb","/hacsfiles/ha-energy-3d-card/Taylor_Wimpey_Blair.glb","https://raw.githubusercontent.com/aaronwatt91/ha-energy-3d-card/main/Taylor_Wimpey_Blair.glb"].filter(Boolean),i=[...new Set(t)],n=new pl,r=a=>{if(a>=i.length){console.error("All model fallback URLs failed to load.");return}let o=i[a];n.load(o,l=>{this.model=l.scene,this.applyRealisticMaterials(this.model),this.model.traverse(c=>{if(c.isMesh){if(c.name==="Solar_PV_Cabling"){c.visible=!1;return}c.castShadow=!0,c.receiveShadow=!0;let h=c.name;if(h.includes("Roof_Main")||h.includes("Roof_Ridge_Tiles")||h.includes("First_Floor_Ceiling")||h.includes("Fascia_and_Soffits")||h.includes("Exterior_Walls")||h.includes("Separating_Party_Wall")||h.includes("Interior_Walls")||h.includes("Front_Entrance_Door")||h.includes("Rear_French_Doors")||h.includes("Interior_Doors")){let f=h.includes("Wall")||h.includes("Door"),g=new ve({color:f?10536168:8956620,transparent:!0,opacity:f?.18:.14,roughness:.25,metalness:.1,depthWrite:!1}),x={mesh:c,originalMaterial:c.material,ghostMaterial:g};this.xrayMeshes.push(x),this.roofParts.push(x)}let u=h.includes("Roof_")||h.includes("Fascia_and_Soffits")||h.includes("Rainwater_Gutters")||h.includes("Solar_PV_")||h==="First_Floor_Ceiling",d=h==="First_Floor_Structure"||h==="First_Floor_Tiles"||h.includes("Interior_Walls_First")||h.includes("Landing_Carpet")||h.includes("Carpet_")||h.includes("Room_Labels_3D");u&&this.roofMeshes.push({mesh:c,originalMaterial:c.material}),d&&this.firstFloorMeshes.push({mesh:c,originalMaterial:c.material}),(u||d)&&this.topFloorMeshes.push({mesh:c,originalMaterial:c.material}),(h.includes("Exterior_Walls")||h.includes("Separating_Party_Wall")||h.includes("Windows_")||h.includes("Front_Entrance_Door")||h.includes("Rear_French_Doors")||h.includes("Interior_Doors")||h.includes("Sanitaryware")||h.includes("Exterior_Hardware_Chrome")||h.includes("Solar_PV_Cabling"))&&this.cuttableMeshes.push(c),(h.includes("Exterior_Walls")||h.includes("Separating_Party_Wall")||h.includes("Interior_Walls_")||h.includes("First_Floor_")||h.includes("Roof_")||h.includes("Front_Entrance_Door"))&&this.occludingMeshes.push(c)}}),this.scene.add(this.model),this.energyFlow.bindMeshes(this.model),this.onModelLoaded&&this.onModelLoaded()},l=>{this.onProgress&&l.total&&this.onProgress(l.loaded/l.total)},l=>{console.warn(`Could not load GLB from ${o}, trying fallback...`,l),r(a+1)})};r(0)}setXRayRoof(e){this.xrayActive=e;for(let t of this.roofParts)t.mesh.material=e?t.ghostMaterial:t.originalMaterial;this.onXRayChange&&this.onXRayChange(e)}setCutawayMode(e){this.cutawayMode=e;let t=e==="downstairs",n=t||e==="upstairs";for(let r of this.roofMeshes)r.mesh.visible=!n;for(let r of this.firstFloorMeshes)r.mesh.visible=!t;this.upstairsFurnitureGroup&&(this.upstairsFurnitureGroup.visible=!t);for(let r of this.cuttableMeshes)(Array.isArray(r.material)?r.material:[r.material]).forEach(o=>{o&&(o.clippingPlanes=t?[this.downstairsClipPlane]:[],o.clipShadows=!0,o.needsUpdate=!0)});for(let[r,a]of Object.entries(this.roomLights))if((a.floor==="first"||a.config?.pos?.y>3)&&(a.container&&(a.container.visible=!t),a.fixture&&(a.fixture.visible=!t),a.shadeMesh&&(a.shadeMesh.visible=!t),a.light)){if(t)a.light.intensity=0;else if(a.isOn){let l=Math.max(.2,Math.min(1,(a.brightness||255)/255)),c=this.nightMode?1.4:1;a.light.intensity=(a.config?.maxIntensity||4)*l*c}}}setCameraPreset(e){let i={overview:{pos:new w(15,12,17),target:new w(2.5,2.5,0)},solar:{pos:new w(9.2,2.4,.5),target:new w(5.73,1.75,-.5)},meter:{pos:new w(7.2,2.3,.5),target:new w(5.28,1.3,-.85)},boiler:{pos:new w(-3.8,3.2,-11.5),target:new w(0,1.4,-8)},ev:{pos:new w(7.2,2.2,3.2),target:new w(5.2,.95,1)},charger:{pos:new w(7.4,2.2,.4),target:new w(5.2,1.25,.05)},downstairs:{pos:new w(2.8,11.5,4.2),target:new w(2.8,.8,-4.5)},upstairs:{pos:new w(2.8,11.5,4),target:new w(2.8,3.8,-4.5)},heating:{pos:new w(7.8,4.5,-2.5),target:new w(3.4,2.5,-3.5)}}[e];i&&(this.targetCameraPos=i.pos.clone(),this.targetLookAt=i.target.clone(),this.setXRayRoof(!1),e==="downstairs"?this.setCutawayMode("downstairs"):e==="upstairs"?this.setCutawayMode("upstairs"):this.setCutawayMode("normal"))}updateEnergyData(e){this.currentEnergyData=e,e?.appliances&&this.updateAppliances(e.appliances)}getProjectedHotspots(){let e=this.container.clientWidth||800,t=this.container.clientHeight||500,i=e/2,n=t/2;return this.hotspots.filter(r=>!(this.cutawayMode==="downstairs"&&r.id==="thermostat_upstairs"||this.cutawayMode==="upstairs"&&(r.id==="thermostat_downstairs"||r.id==="boiler"))).map(r=>{let a=r.pos.clone();a.project(this.camera);let o=a.z<1,l=a.x*i+i,c=-(a.y*n)+n;return{id:r.id,name:r.name,x:l,y:c,visible:o}})}onResize(){if(!this.container)return;let e=this.container.clientWidth||800,t=this.container.clientHeight||500;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.css3dRenderer&&this.css3dRenderer.setSize(e,t)}stopCameraAnimation(){(this.targetCameraPos||this.targetLookAt)&&(this.targetCameraPos=null,this.targetLookAt=null,this.onUserCameraInteraction&&this.onUserCameraInteraction())}animate(){if(!this.isRunning)return;requestAnimationFrame(this.animate);let e=this.clock.getDelta();if(this.targetCameraPos&&this.targetLookAt&&(this.camera.position.lerp(this.targetCameraPos,.06),this.controls.target.lerp(this.targetLookAt,.06),this.camera.position.distanceTo(this.targetCameraPos)<.05&&this.controls.target.distanceTo(this.targetLookAt)<.05&&(this.targetCameraPos=null,this.targetLookAt=null)),this.controls.update(),this.energyFlow&&this.energyFlow.update(e,this.currentEnergyData),this.renderer.render(this.scene,this.camera),this.tvCss3dObject)if(this.isTvPlaying){let t=this.camera.position.x<3.38,i=!1;if(t&&this.occludingMeshes&&this.occludingMeshes.length>0){let n=[new w(3.28,1.35,-3.1),new w(3.28,1.35,-2.75),new w(3.28,1.35,-3.45)],r=this.occludingMeshes.filter(o=>o.visible),a=!1;for(let o of n){let l=new w().subVectors(o,this.camera.position),c=l.length();l.normalize(),this.tvRaycaster.set(this.camera.position,l),this.tvRaycaster.near=.1,this.tvRaycaster.far=c;let h=this.tvRaycaster.intersectObjects(r,!1),u=!1;for(let d of h)if(!(this.cutawayMode==="downstairs"&&d.point.y>2.5)&&!(this.xrayActive&&this.roofParts.some(f=>f.mesh===d.object))&&d.distance<c-.35){u=!0;break}if(!u){a=!0;break}}i=!a}this.tvCss3dObject.visible=t&&!i}else this.tvCss3dObject.visible=!1;this.css3dRenderer&&this.css3dScene&&this.css3dRenderer.render(this.css3dScene,this.camera),this.onFrame&&this.onFrame()}destroy(){this.isRunning=!1,this.stopCameraAnimation(),window.removeEventListener("resize",this.handleResize),this.resizeObserver&&this.resizeObserver.disconnect(),this.controls?.dispose(),this.tvIframe&&(this.tvIframe.src=""),this.css3dRenderer?.domElement?.parentElement&&this.css3dRenderer.domElement.parentElement.removeChild(this.css3dRenderer.domElement),this.renderer?.domElement?.parentElement&&this.renderer.domElement.parentElement.removeChild(this.renderer.domElement),this.renderer?.dispose()}};function er(s){let e=parseFloat(s);return isNaN(e)?0:Math.abs(e)>=20?e/1e3:e}function hf(s){let e=Number(s)||0;return Math.abs(e)<1?`${Math.round(e*1e3)} W`:`${e.toFixed(2)} kW`}function Hy(s,e){let t=Math.abs(Number(s)||0),i=e?"Export ":"Import ";if(t<1){let n=Math.round(t*1e3);return`${i}${n} W`}return`${i}${t.toFixed(2)} kW`}function uf(s){let e=Number(s)||0;return Math.abs(e)<1?{value:Math.round(e*1e3).toString(),unit:"W"}:{value:e.toFixed(2),unit:"kW"}}function zy(s){return uf(s)}function bl(s){let e=Number(s);return isNaN(e)?{label:"Comfortable",color:"#10b981",icon:"\u2728",code:"comfortable"}:e<16?{label:"Cold (<16\xB0C)",color:"#38bdf8",icon:"\u2744\uFE0F",code:"cold"}:e>22?{label:"Hot (>22\xB0C)",color:"#ef4444",icon:"\u{1F525}",code:"hot"}:{label:"Comfortable (16\u201322\xB0C)",color:"#10b981",icon:"\u2728",code:"comfortable"}}var wl=class{constructor(e,t={}){this.container=e,this.options=t,this.activeTab=null,this.availableEntities=t.availableEntities||[],this.currentSensorConfig=t.currentSensorConfig||{},this.onPresetClick=t.onPresetClick||(()=>{}),this.onToggleXray=t.onToggleXray||(()=>{}),this.onToggleNight=t.onToggleNight||(()=>{}),this.onToggleRotate=t.onToggleRotate||(()=>{}),this.onToggleLight=t.onToggleLight||(()=>{}),this.onWakeupVehicle=t.onWakeupVehicle||(()=>{}),this.onToggleTvAudio=t.onToggleTvAudio||(()=>{}),this.onSaveSensors=t.onSaveSensors||(()=>{}),this.onSetTemperature=t.onSetTemperature||(()=>{}),this.onSetHvacMode=t.onSetHvacMode||(()=>{}),this.onThermostatChange=t.onThermostatChange||(()=>{}),this.customLights=t.customLights||[],this.lightFilterFloor="all",this.onSaveCustomLights=t.onSaveCustomLights||(()=>{}),this.onUpdateLightPosition=t.onUpdateLightPosition||(()=>{}),this.onBeaconFocus=t.onBeaconFocus||(()=>{}),this.onBeaconClear=t.onBeaconClear||(()=>{}),this.onEnableClickToPlace=t.onEnableClickToPlace||(()=>{}),this.onDisableClickToPlace=t.onDisableClickToPlace||(()=>{}),this.editingLight=null,this.showTags=!0,this.tagCategories={solar:!0,grid:!0,boiler:!0,ev:!0,thermostats:!0,appliances:!0,lighting:!0},this.initDOM()}initDOM(){this.el=document.createElement("div"),this.el.className="ha-energy-hud",this.el.innerHTML=`
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
          max-height: calc(100% - 90px);
          background: rgba(15, 23, 42, 0.94);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 18px;
          padding: 16px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
          pointer-events: auto;
          z-index: 20;
          display: none;
          flex-direction: column;
          box-sizing: border-box;
          animation: slide-in 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hud-drawer.open {
          display: flex;
        }

        #drawer-content {
          overflow-y: auto;
          overflow-x: hidden;
          flex: 1 1 auto;
          min-height: 0;
          padding-right: 4px;
          touch-action: pan-y;
          -webkit-overflow-scrolling: touch;
        }

        #drawer-content::-webkit-scrollbar {
          width: 6px;
        }
        #drawer-content::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        #drawer-content::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.22);
          border-radius: 4px;
        }
        #drawer-content::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.38);
        }

        /* Thermostat interactive controls */
        .thermo-control-card {
          margin-top: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 10px 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .thermo-control-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .thermo-control-title {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: #94a3b8;
        }

        .thermo-mode-badge {
          font-size: 10px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 6px;
          text-transform: uppercase;
        }
        .thermo-mode-badge.heating {
          background: rgba(249, 115, 22, 0.2);
          color: #f97316;
          border: 1px solid rgba(249, 115, 22, 0.4);
        }
        .thermo-mode-badge.idle {
          background: rgba(148, 163, 184, 0.15);
          color: #94a3b8;
          border: 1px solid rgba(148, 163, 184, 0.25);
        }
        .thermo-mode-badge.off {
          background: rgba(56, 189, 248, 0.15);
          color: #38bdf8;
          border: 1px solid rgba(56, 189, 248, 0.25);
        }

        .thermo-stepper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin: 4px 0;
        }

        .thermo-step-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.08);
          color: #f8fafc;
          font-size: 20px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.15s ease;
          user-select: none;
        }
        .thermo-step-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
          transform: scale(1.06);
        }
        .thermo-step-btn:active {
          transform: scale(0.94);
        }

        .thermo-setpoint-readout {
          display: flex;
          align-items: baseline;
          gap: 2px;
          min-width: 80px;
          justify-content: center;
        }

        .thermo-setpoint-num {
          font-size: 30px;
          font-weight: 800;
          color: #f8fafc;
          letter-spacing: -0.5px;
        }

        .thermo-setpoint-deg {
          font-size: 15px;
          font-weight: 600;
          color: #94a3b8;
        }

        .thermo-presets {
          display: flex;
          gap: 6px;
          justify-content: center;
        }

        .thermo-preset-pill {
          flex: 1;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
          font-size: 11px;
          font-weight: 600;
          padding: 5px 6px;
          border-radius: 8px;
          cursor: pointer;
          text-align: center;
          transition: all 0.15s ease;
        }
        .thermo-preset-pill:hover {
          background: rgba(255, 255, 255, 0.14);
          color: #fff;
        }
        .thermo-preset-pill.active {
          background: rgba(249, 115, 22, 0.25);
          border-color: #f97316;
          color: #ffedd5;
          font-weight: 700;
        }

        .thermo-mode-row {
          display: flex;
          gap: 8px;
          margin-top: 2px;
        }

        .thermo-mode-btn {
          flex: 1;
          padding: 6px 10px;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.05);
          color: #94a3b8;
          transition: all 0.15s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }
        .thermo-mode-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
        }
        .thermo-mode-btn.active-heat {
          background: rgba(249, 115, 22, 0.25);
          border-color: #f97316;
          color: #ffedd5;
        }
        .thermo-mode-btn.active-off {
          background: rgba(56, 189, 248, 0.2);
          border-color: #38bdf8;
          color: #e0f2fe;
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
          grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
          gap: 10px;
          margin-top: 10px;
        }

        .light-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          transition: all 0.2s ease;
        }

        .light-card.active {
          background: rgba(251, 191, 36, 0.10);
          border-color: rgba(251, 191, 36, 0.35);
          box-shadow: 0 0 14px rgba(251, 191, 36, 0.12);
        }

        .light-card-body {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
        }

        .light-avatar {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
          transition: all 0.2s;
        }

        .light-avatar.on {
          background: rgba(245, 158, 11, 0.25);
          box-shadow: 0 0 10px rgba(245, 158, 11, 0.35);
        }

        .light-info {
          flex: 1;
          min-width: 0;
        }

        .light-name {
          font-size: 13px;
          font-weight: 600;
          color: #f8fafc;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .light-subtext {
          font-size: 11px;
          color: #94a3b8;
          margin-top: 2px;
        }

        .light-actions {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }

        .light-toggle-btn {
          min-width: 52px;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          border: 1px solid rgba(255, 255, 255, 0.12);
          cursor: pointer;
          transition: all 0.2s;
        }

        .light-toggle-btn.on {
          background: #f59e0b;
          color: #0f172a;
          border-color: #f59e0b;
          box-shadow: 0 0 10px rgba(245, 158, 11, 0.3);
        }

        .light-toggle-btn.off {
          background: rgba(255, 255, 255, 0.08);
          color: #94a3b8;
        }

        .light-toggle-btn:hover {
          filter: brightness(1.15);
        }

        .btn-light-gear {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 13px;
          transition: all 0.2s;
        }

        .btn-light-gear:hover {
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
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
            max-height: calc(100% - 75px);
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
          <div class="hud-flow-item" id="hdr-lights-item" title="Lighting Energy Usage (7W per active bulb)" style="cursor:pointer;">
            <span>\u{1F4A1}</span>
            <span class="hud-flow-val" id="hdr-lights-val" style="color:#f59e0b;">0 W</span>
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
          <div class="sensor-row">
            <label>Peugeot Wakeup Button</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-peugeot-wakeup" placeholder="button.vr3ukzkxzmj557948_wakeup">
              <button type="button" class="btn-entity-browse" data-target="#cfg-peugeot-wakeup">\u{1F4CB} Select</button>
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
              <label>\u{1F4FA} Living Room TV Plug (power wattage sensor)</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-sensor-tv" placeholder="sensor.living_room_tv_plug_power">
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
            <div class="tags-menu-item">
              <label class="tag-switch-label">
                <span>\u{1F4A1} Lighting Energy Usage (7W/bulb)</span>
                <input type="checkbox" class="chk-tag-cat" data-tag-cat="lighting" checked>
              </label>
            </div>
          </div>
        </div>
        <button class="hud-btn" id="btn-drawer">\u{1F4CA} Stats</button>
        <button class="hud-btn" id="btn-sensors">\u2699\uFE0F Sensors</button>
      </div>
    `,this.container.appendChild(this.el),this.bindEvents(),this.populateSensorInputs()}bindEvents(){let e=this.el.querySelectorAll("[data-preset]");e.forEach(J=>{J.addEventListener("click",()=>{e.forEach(W=>W.classList.remove("active")),J.classList.add("active");let _e=J.getAttribute("data-preset");this.activePreset=_e,this.setXRayActive(!1),this.onPresetClick(_e)})});let t=this.el.querySelector("#btn-xray");t.addEventListener("click",()=>{t.classList.toggle("active"),this.onToggleXray(t.classList.contains("active"))});let i=this.el.querySelector("#btn-night");i.addEventListener("click",()=>{i.classList.toggle("active"),this.onToggleNight(i.classList.contains("active"))});let n=this.el.querySelector("#btn-rotate");n.addEventListener("click",()=>{n.classList.toggle("active"),this.onToggleRotate(n.classList.contains("active"))});let r=this.el.querySelector("#hdr-lights-item");r&&r.addEventListener("click",()=>{this.openTab("lights")});let a=this.el.querySelector("#btn-tags-menu"),o=this.el.querySelector("#tags-popover-menu"),l=this.el.querySelector("#btn-tags-menu-close"),c=this.el.querySelector("#chk-tag-all"),h=this.el.querySelectorAll(".chk-tag-cat");a&&o&&(a.addEventListener("click",J=>{J.stopPropagation(),o.classList.toggle("open")}),l&&l.addEventListener("click",J=>{J.stopPropagation(),o.classList.remove("open")}),document.addEventListener("click",J=>{!o.contains(J.target)&&!a.contains(J.target)&&o.classList.remove("open")}),o.addEventListener("click",J=>{J.stopPropagation()}),c&&c.addEventListener("change",()=>{this.showTags=c.checked,a.classList.toggle("active",this.showTags),a.innerHTML=this.showTags?"\u{1F3F7}\uFE0F Tags \u25BE":"\u{1F3F7}\uFE0F Tags (Off) \u25BE",h.forEach(_e=>{_e.checked=this.showTags;let W=_e.getAttribute("data-tag-cat");W&&(this.tagCategories[W]=this.showTags)});let J=this.el.querySelector("#hotspots-container");J&&!this.showTags&&(J.innerHTML="")}),h.forEach(J=>{J.addEventListener("change",()=>{let _e=J.getAttribute("data-tag-cat");_e&&(this.tagCategories[_e]=J.checked);let W=Object.values(this.tagCategories).some(Boolean);this.showTags=W,c&&(c.checked=W),a.classList.toggle("active",this.showTags),a.innerHTML=this.showTags?"\u{1F3F7}\uFE0F Tags \u25BE":"\u{1F3F7}\uFE0F Tags (Off) \u25BE";let ae=this.el.querySelector("#hotspots-container");ae&&!this.showTags&&(ae.innerHTML="")})}));let u=this.el.querySelector("#btn-drawer"),d=this.el.querySelector("#hud-drawer"),f=this.el.querySelector("#drawer-close-btn");u.addEventListener("click",()=>{d.classList.toggle("open"),u.classList.toggle("active",d.classList.contains("open")),d.classList.contains("open")&&!this.activeTab&&this.switchTab("solar")}),f.addEventListener("click",()=>{d.classList.remove("open"),u.classList.remove("active")});let g=this.el.querySelector("#btn-sensors"),x=this.el.querySelector("#sensor-modal"),m=this.el.querySelector("#sensor-modal-close"),p=this.el.querySelector("#btn-save-sensors"),y=this.el.querySelector("#btn-detect-sensors");g.addEventListener("click",()=>{x.classList.toggle("open"),g.classList.toggle("active",x.classList.contains("open"))}),m.addEventListener("click",()=>{x.classList.remove("open"),g.classList.remove("active")}),p.addEventListener("click",()=>{let J=this.readSensorInputs();this.currentSensorConfig=J;try{localStorage.setItem("ha_energy_3d_custom_sensors",JSON.stringify(J))}catch{}this.onSaveSensors(J),x.classList.remove("open"),g.classList.remove("active")}),y.addEventListener("click",()=>{this.autoDetectSensors()}),this.el.querySelectorAll(".btn-entity-browse").forEach(J=>{J.addEventListener("click",_e=>{_e.preventDefault(),_e.stopPropagation();let W=J.getAttribute("data-target");this.openEntityPicker(W)})});let v=this.el.querySelector("#entity-picker-dialog"),T=this.el.querySelector("#picker-dialog-close");T&&T.addEventListener("click",()=>{v.classList.remove("open")}),v&&v.addEventListener("click",J=>{J.target===v&&v.classList.remove("open")});let A=this.el.querySelectorAll(".filter-chip");A.forEach(J=>{J.addEventListener("click",()=>{A.forEach(W=>W.classList.remove("active")),J.classList.add("active"),this.currentPickerFilter=J.getAttribute("data-filter")||"all";let _e=this.el.querySelector("#picker-search-input")?.value||"";this.renderPickerEntityList(_e,this.currentPickerFilter)})});let _=this.el.querySelector("#picker-search-input");_&&_.addEventListener("input",J=>{this.renderPickerEntityList(J.target.value,this.currentPickerFilter||"all")});let E=this.el.querySelector("#light-customizer-dialog"),I=this.el.querySelector("#light-customizer-close");I&&I.addEventListener("click",()=>{E.classList.remove("open"),this.onBeaconClear(),this.onDisableClickToPlace(),this.el.querySelector("#btn-pick-3d-point")?.classList.remove("active")}),E&&E.addEventListener("click",J=>{J.target===E&&(E.classList.remove("open"),this.onBeaconClear(),this.onDisableClickToPlace(),this.el.querySelector("#btn-pick-3d-point")?.classList.remove("active"))});let C=this.el.querySelector("#floor-btn-ground"),N=this.el.querySelector("#floor-btn-first");C&&N&&(C.addEventListener("click",()=>{C.classList.add("active"),N.classList.remove("active"),this.editingLight&&(this.editingLight.floor="ground")}),N.addEventListener("click",()=>{N.classList.add("active"),C.classList.remove("active"),this.editingLight&&(this.editingLight.floor="first")})),["x","y","z"].forEach(J=>{let _e=this.el.querySelector(`#coord-${J}-slider`),W=this.el.querySelector(`#coord-${J}-val`);_e&&_e.addEventListener("input",ae=>this.onCoordChange(J,ae.target.value)),W&&W.addEventListener("change",ae=>this.onCoordChange(J,ae.target.value))}),this.el.querySelectorAll(".coord-step-btn").forEach(J=>{J.addEventListener("click",()=>{let _e=J.getAttribute("data-axis"),W=parseFloat(J.getAttribute("data-dir")||"1");if(this.editingLight){let ae=this.editingLight.pos[_e]||0,Me=parseFloat((ae+W*.1).toFixed(2));this.onCoordChange(_e,Me)}})});let G=this.el.querySelector("#btn-preset-ceil-down"),P=this.el.querySelector("#btn-preset-ceil-up"),X=this.el.querySelector("#btn-preset-lamp");G&&G.addEventListener("click",()=>this.onCoordChange("y",2.15)),P&&P.addEventListener("click",()=>this.onCoordChange("y",4.55)),X&&X.addEventListener("click",()=>this.onCoordChange("y",1.55));let V=this.el.querySelector("#btn-pick-3d-point");V&&V.addEventListener("click",()=>{V.classList.toggle("active"),V.classList.contains("active")?this.onEnableClickToPlace(J=>{this.onCoordChange("x",J.x),this.onCoordChange("y",J.y),this.onCoordChange("z",J.z)}):this.onDisableClickToPlace()});let z=this.el.querySelectorAll(".color-chip-btn"),ie=this.el.querySelector("#custom-light-color-input");z.forEach(J=>{J.addEventListener("click",()=>{let _e=J.getAttribute("data-color"),W=parseInt(_e.replace("#","0x"),16);this.editingLight&&(this.editingLight.defaultColor=W),z.forEach(ae=>ae.classList.remove("active")),J.classList.add("active"),ie&&(ie.value=_e)})}),ie&&ie.addEventListener("input",J=>{let _e=parseInt(J.target.value.replace("#","0x"),16);this.editingLight&&(this.editingLight.defaultColor=_e),z.forEach(W=>W.classList.remove("active"))});let q=this.el.querySelector("#btn-custom-light-save"),Q=this.el.querySelector("#btn-custom-light-delete");q&&q.addEventListener("click",()=>this.saveEditingLight()),Q&&Q.addEventListener("click",()=>{this.editingLight?.id&&this.deleteLight(this.editingLight.id)}),this.el.querySelectorAll(".drawer-nav-tab").forEach(J=>{J.addEventListener("click",()=>{let _e=J.getAttribute("data-tab");this.switchTab(_e)})})}populateSensorInputs(){let e={};try{e=JSON.parse(localStorage.getItem("ha_energy_3d_custom_sensors")||"{}")}catch{}let t={...this.currentSensorConfig,...e},i=(r,a)=>{let o=this.el.querySelector(r);o&&a&&(o.value=a)};i("#cfg-solax-power",t.solax_power),i("#cfg-solax-today",t.solax_today),i("#cfg-solax-week",t.solax_week),i("#cfg-solax-month",t.solax_month),i("#cfg-solax-year",t.solax_year),i("#cfg-octopus-power",t.octopus_electric_power),i("#cfg-octopus-export",t.octopus_export_power),i("#cfg-octopus-rate",t.octopus_rate),i("#cfg-octopus-spend",t.octopus_monthly_spend),i("#cfg-octopus-30min",t.octopus_electric_30min),i("#cfg-octopus-day",t.octopus_electric_day),i("#cfg-octopus-week",t.octopus_electric_week),i("#cfg-octopus-month",t.octopus_electric_month),i("#cfg-boiler-status",t.boiler_status),i("#cfg-gas-30min",t.octopus_gas_30min),i("#cfg-gas-day",t.octopus_gas_day),i("#cfg-gas-week",t.octopus_gas_week),i("#cfg-gas-month",t.octopus_gas_month),i("#cfg-zappi-power",t.myenergi_power),i("#cfg-zappi-status",t.myenergi_status),i("#cfg-zappi-energy",t.myenergi_energy),i("#cfg-peugeot-battery",t.peugeot_battery),i("#cfg-peugeot-range",t.peugeot_range),i("#cfg-peugeot-wakeup",t.peugeot_wakeup),i("#cfg-thermostat-downstairs",t.thermostat_downstairs),i("#cfg-thermostat-upstairs",t.thermostat_upstairs),i("#cfg-sensor-fridge",t.sensor_fridge),i("#cfg-sensor-washer",t.sensor_washer),i("#cfg-sensor-tv",t.sensor_tv),i("#cfg-light-living-lamp",t.light_living_lamp);let n=["lounge","kitchen","dining","hallway","wc","master","ensuite","bedroom2","bedroom3","bathroom","landing"];for(let r of n){let a=r==="master"?"master_bedroom":r;i(`#cfg-light-${r}`,t[`light_${a}`]||t.room_lights?.[a]?.entity_id||t.room_lights?.[a])}}readSensorInputs(){let e=t=>{let i=this.el.querySelector(t);return i?i.value.trim():""};return{solax_power:e("#cfg-solax-power"),solax_today:e("#cfg-solax-today"),solax_week:e("#cfg-solax-week"),solax_month:e("#cfg-solax-month"),solax_year:e("#cfg-solax-year"),octopus_electric_power:e("#cfg-octopus-power"),octopus_export_power:e("#cfg-octopus-export"),octopus_rate:e("#cfg-octopus-rate"),octopus_monthly_spend:e("#cfg-octopus-spend"),octopus_electric_30min:e("#cfg-octopus-30min"),octopus_electric_day:e("#cfg-octopus-day"),octopus_electric_week:e("#cfg-octopus-week"),octopus_electric_month:e("#cfg-octopus-month"),boiler_status:e("#cfg-boiler-status"),octopus_gas_30min:e("#cfg-gas-30min"),octopus_gas_day:e("#cfg-gas-day"),octopus_gas_week:e("#cfg-gas-week"),octopus_gas_month:e("#cfg-gas-month"),myenergi_power:e("#cfg-zappi-power"),myenergi_status:e("#cfg-zappi-status"),myenergi_energy:e("#cfg-zappi-energy"),peugeot_battery:e("#cfg-peugeot-battery"),peugeot_range:e("#cfg-peugeot-range"),peugeot_wakeup:e("#cfg-peugeot-wakeup"),thermostat_downstairs:e("#cfg-thermostat-downstairs"),thermostat_upstairs:e("#cfg-thermostat-upstairs"),sensor_fridge:e("#cfg-sensor-fridge"),sensor_washer:e("#cfg-sensor-washer"),sensor_tv:e("#cfg-sensor-tv"),light_living_lamp:e("#cfg-light-living-lamp"),light_lounge:e("#cfg-light-lounge"),light_kitchen:e("#cfg-light-kitchen"),light_dining:e("#cfg-light-dining"),light_hallway:e("#cfg-light-hallway"),light_wc:e("#cfg-light-wc"),light_master_bedroom:e("#cfg-light-master"),light_ensuite:e("#cfg-light-ensuite"),light_bedroom2:e("#cfg-light-bedroom2"),light_bedroom3:e("#cfg-light-bedroom3"),light_bathroom:e("#cfg-light-bathroom"),light_landing:e("#cfg-light-landing")}}openEntityPicker(e){this.activePickerTarget=e;let t=this.el.querySelector("#entity-picker-dialog");if(!t)return;let i=this.el.querySelector(e),n=this.el.querySelector("#picker-dialog-title");if(n&&i){let l=i.closest(".sensor-row")?.querySelector("label")?.innerText||"Select Entity";n.innerText=l}let r="all";e.includes("light")?r="light":e.includes("thermostat")?r="climate":e.includes("tv")?r="media_player":(e.includes("power")||e.includes("energy")||e.includes("fridge"))&&(r="sensor"),this.currentPickerFilter=r,this.el.querySelectorAll(".filter-chip").forEach(l=>l.classList.toggle("active",l.getAttribute("data-filter")===r)),t.classList.add("open");let o=this.el.querySelector("#picker-search-input");o&&(o.value="",setTimeout(()=>o.focus(),60)),this.renderPickerEntityList("",r)}renderPickerEntityList(e="",t="all"){let i=this.el.querySelector("#picker-entity-list");if(!i)return;let n=this.availableEntities||[];n.length||(n=["sensor.solax_pv_power_total","sensor.solax_today_s_solar_energy","sensor.solax_feed_in_power","sensor.octopus_home_mini_current_electricity_power","sensor.octopus_energy_electricity_current_rate","sensor.octopus_energy_electricity_current_month_cost","sensor.boiler_status","sensor.octopus_home_mini_gas_30min","sensor.myenergi_zappi_power","sensor.e2008_battery_level","sensor.e2008_battery_range","climate.downstairs","climate.upstairs","sensor.fridge_power","media_player.living_room_tv","light.living_room_lamp","light.living_room","light.kitchen","light.dining_room","light.hallway","light.downstairs_wc","light.master_bedroom","light.ensuite","light.bedroom_2","light.bedroom_3","light.family_bathroom","light.landing"]);let r=e.toLowerCase().trim(),a=n.filter(l=>{let c=(typeof l=="string"?l:l.entity_id||"").toLowerCase(),h=c.split(".")[0]||"";if(t!=="all"){if(t==="media_player"){if(h!=="media_player"&&!c.includes("tv")&&h!=="switch")return!1}else if(t==="climate"){if(h!=="climate"&&!c.includes("thermostat")&&!c.includes("temp"))return!1}else if(h!==t)return!1}return!(r&&!c.includes(r))});if(!a.length){i.innerHTML=`
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
      `}).join(""),i.querySelectorAll(".entity-item-row").forEach(l=>{l.addEventListener("click",()=>{let c=l.getAttribute("data-entity-id");this.selectEntityForTarget(c)})})}selectEntityForTarget(e){if(this.activePickerTarget){let i=this.el.querySelector(this.activePickerTarget);i&&(i.value=e,i.focus(),i.style.borderColor="#10b981",i.style.boxShadow="0 0 10px rgba(16, 185, 129, 0.6)",setTimeout(()=>{i.style.borderColor="",i.style.boxShadow=""},1200))}let t=this.el.querySelector("#entity-picker-dialog");t&&t.classList.remove("open")}setAvailableEntities(e){this.availableEntities=e||[],this.updateDatalist()}updateDatalist(){let e=this.el.querySelector("#ha-entities-datalist");if(!e)return;let t=this.availableEntities.map(i=>typeof i=="string"?i:i.entity_id||"").filter(Boolean);e.innerHTML=t.map(i=>`<option value="${i}"></option>`).join("")}setCustomLights(e){this.customLights=e||[],this.activeTab==="lights"&&this.renderDrawerContent()}clearActivePreset(){this.el.querySelectorAll("[data-preset]").forEach(t=>t.classList.remove("active")),this.activePreset=null}setActivePreset(e){this.activePreset=e,this.el.querySelectorAll("[data-preset]").forEach(i=>{i.classList.toggle("active",i.getAttribute("data-preset")===e)}),this.setXRayActive(!1)}setXRayActive(e){let t=this.el.querySelector("#btn-xray");t&&t.classList.toggle("active",!!e)}openLightEditor(e=null){let t=this.el.querySelector("#light-customizer-dialog");if(!t)return;if(e){let a=this.customLights.find(o=>o.id===e);if(!a)return;this.editingLight=JSON.parse(JSON.stringify(a)),this.editingLight.isNew=!1,this.el.querySelector("#light-customizer-title").innerText=`\u{1F4A1} Configure & Move: ${this.editingLight.name}`,this.el.querySelector("#btn-custom-light-delete").style.display="block"}else{let a=this.activePreset==="downstairs",o=a?2.15:4.55,l=a?"ground":"first";this.editingLight={id:`light_custom_${Date.now()}`,name:`New Light ${this.customLights.length+1}`,floor:l,pos:{x:2.2,y:o,z:-3.5},range:6.5,maxIntensity:4,defaultColor:16769689,entity_id:"",isNew:!0},this.el.querySelector("#light-customizer-title").innerText="\u2795 Add New 3D Light",this.el.querySelector("#btn-custom-light-delete").style.display="none"}this.el.querySelector("#custom-light-name").value=this.editingLight.name||"";let i=Ei.find(a=>a.id===this.editingLight.id),n=this.editingLight.entity_id||this.currentSensorConfig?.[`light_${this.editingLight.id}`]||(this.editingLight.id==="living_lamp"?this.currentSensorConfig?.light_living_lamp:"")||i?.entity_id||"";this.el.querySelector("#custom-light-entity").value=n;let r=this.editingLight.floor||(this.editingLight.pos.y>3?"first":"ground");this.el.querySelector("#floor-btn-ground").classList.toggle("active",r==="ground"),this.el.querySelector("#floor-btn-first").classList.toggle("active",r==="first"),this.updateCoordInputs(this.editingLight.pos.x,this.editingLight.pos.y,this.editingLight.pos.z),this.onBeaconFocus(this.editingLight.id,this.editingLight.pos),t.classList.add("open")}updateCoordInputs(e,t,i){let n=(r,a)=>{let o=this.el.querySelector(r);o&&(o.value=a)};n("#coord-x-slider",e),n("#coord-x-val",e),n("#coord-y-slider",t),n("#coord-y-val",t),n("#coord-z-slider",i),n("#coord-z-val",i)}onCoordChange(e,t){if(!this.editingLight)return;let i=parseFloat(t);isNaN(i)||(this.editingLight.pos[e]=i,this.updateCoordInputs(this.editingLight.pos.x,this.editingLight.pos.y,this.editingLight.pos.z),this.onUpdateLightPosition(this.editingLight.id,this.editingLight.pos.x,this.editingLight.pos.y,this.editingLight.pos.z),this.onBeaconFocus(this.editingLight.id,this.editingLight.pos))}saveEditingLight(){if(!this.editingLight)return;this.editingLight.name=this.el.querySelector("#custom-light-name")?.value?.trim()||"Custom Light",this.editingLight.entity_id=this.el.querySelector("#custom-light-entity")?.value?.trim()||"";let e=this.el.querySelector("#floor-btn-first")?.classList.contains("active");if(this.editingLight.floor=e?"first":"ground",this.editingLight.isNew)delete this.editingLight.isNew,this.customLights.push(this.editingLight);else{let t=this.customLights.findIndex(i=>i.id===this.editingLight.id);t!==-1?this.customLights[t]=this.editingLight:this.customLights.push(this.editingLight)}this.onSaveCustomLights(this.customLights),this.onBeaconClear(),this.onDisableClickToPlace(),this.el.querySelector("#btn-pick-3d-point")?.classList.remove("active"),this.el.querySelector("#light-customizer-dialog")?.classList.remove("open"),this.renderDrawerContent()}deleteLight(e){confirm("Are you sure you want to delete this light from the 3D model?")&&(this.customLights=this.customLights.filter(t=>t.id!==e),this.onSaveCustomLights(this.customLights),this.onBeaconClear(),this.onDisableClickToPlace(),this.el.querySelector("#btn-pick-3d-point")?.classList.remove("active"),this.el.querySelector("#light-customizer-dialog")?.classList.remove("open"),this.renderDrawerContent())}autoDetectSensors(){let e=this.availableEntities.map(n=>typeof n=="string"?n:n.entity_id||"");if(!e.length)return;let t=(...n)=>{for(let r of n){let a=e.find(o=>o.toLowerCase().includes(r.toLowerCase()));if(a)return a}return""},i=(n,...r)=>{let a=this.el.querySelector(n);if(a&&!a.value){let o=t(...r);o&&(a.value=o)}};i("#cfg-solax-power","solax_snm9wncrqy_ac_output_power","ac_output_power","solax_pv_power","solax_power","pv1_power","pv_power","solar_power"),i("#cfg-solax-today","solax_snm9wncrqy_today_s_generated_energy","today_s_generated_energy","solax_today","solar_today","pv_energy_today"),i("#cfg-solax-week","solax_week","solar_week"),i("#cfg-solax-month","solax_month","solar_month"),i("#cfg-solax-year","solax_snm9wncrqy_total_generated_energy","total_generated_energy","solax_year","solar_year"),i("#cfg-octopus-power","electricity_22l3956422_3200000391421_current_demand","electricity_current_demand","current_demand","home_mini_current_electricity","octopus_electricity_power","grid_power"),i("#cfg-octopus-export","solax_snm9wncrqy_exported_power","power_export","feed_in_power","solax_export","grid_export"),i("#cfg-octopus-rate","electricity_22l3956422_3200000391421_current_rate","electricity_current_rate","octopus_rate","current_rate"),i("#cfg-octopus-spend","electricity_22l3956422_3200000391421_current_accumulative_cost","electricity_current_accumulative_cost","electricity_current_month_cost","octopus_month_cost","electricity_cost"),i("#cfg-octopus-30min","electricity_22l3956422_3200000391421_current_accumulative_consumption","home_mini_electricity_30min","electricity_30min"),i("#cfg-octopus-day","electricity_22l3956422_3200000391421_current_accumulative_consumption","electricity_day","octopus_electricity_today"),i("#cfg-octopus-week","electricity_22l3956422_3200000391421_previous_accumulative_consumption","electricity_week"),i("#cfg-octopus-month","electricity_22l3956422_3200000391421_current_total_consumption","electricity_month"),i("#cfg-boiler-status","boiler","climate.boiler","switch.boiler","heating"),i("#cfg-gas-30min","gas_e6s18975782161_7756751506_current_accumulative_consumption_kwh","home_mini_gas_30min","gas_30min"),i("#cfg-gas-day","gas_e6s18975782161_7756751506_current_accumulative_consumption_kwh","gas_day","octopus_gas_today"),i("#cfg-gas-week","gas_e6s18975782161_7756751506_previous_accumulative_consumption_kwh","gas_week"),i("#cfg-gas-month","gas_e6s18975782161_7756751506_current_total_consumption_kwh","gas_month"),i("#cfg-gas-rate","gas_e6s18975782161_7756751506_current_rate","gas_current_rate"),i("#cfg-gas-spend","gas_e6s18975782161_7756751506_current_accumulative_cost","gas_current_accumulative_cost"),i("#cfg-zappi-power","myenergi_zappi_30084500_internal_load_ct1","power_ct_internal_load","zappi_power","myenergi_power","ev_power","charger_power"),i("#cfg-zappi-status","myenergi_zappi_30084500_plug_status","plug_status","zappi_plug_status","zappi_status","myenergi_status","charger_status"),i("#cfg-zappi-energy","myenergi_zappi_30084500_charge_added_session","charge_added_session","zappi_energy","zappi_today"),i("#cfg-peugeot-battery","sensor.vr3ukzkxzmj557948_battery","vr3ukzkxzmj557948_battery","e2008_battery","peugeot_battery","battery_level","soc"),i("#cfg-peugeot-range","sensor.vr3ukzkxzmj557948_autonomy","vr3ukzkxzmj557948_autonomy","autonomy","e2008_range","peugeot_range","range"),i("#cfg-peugeot-wakeup","button.vr3ukzkxzmj557948_wakeup","vr3ukzkxzmj557948_wakeup","peugeot_wakeup","car_wakeup"),i("#cfg-thermostat-downstairs","climate.tado_x_downstairs","climate.downstairs","climate.ground_floor","climate.hallway","climate.living_room","downstairs_temperature"),i("#cfg-thermostat-upstairs","climate.smart_thermostat_x","climate.tado_x_upstairs","climate.upstairs","climate.first_floor","climate.landing","climate.master_bedroom","upstairs_temperature"),i("#cfg-sensor-fridge","sensor.refrigerator_power","refrigerator_power","fridge_power","refrigerator","fridge","freezer","kitchen_fridge"),i("#cfg-sensor-washer","sensor.kitchen_washing_machine_daily_energy","washing_machine_power","washer_power","washing_machine","washer","laundry_power","laundry"),i("#cfg-sensor-tv","sensor.living_room_tv_plug_power","switch.living_room_tv_plug","sensor.tv_plug_power","switch.living_room_living_room_tv_plug","media_player.lg_webos_tv_oled55c43la_2","media_player.living_room_tv","living_room_tv","lounge_tv","media_player.tv","media_player.living_room","switch.tv"),i("#cfg-light-living-lamp","light.living_room_lamp","living_room_lamp","corner_lamp","living_lamp","floor_lamp","standard_lamp","lamp"),i("#cfg-light-lounge","light.living_room_living_room_light","light.living","light.lounge","light.sitting_room","switch.living"),i("#cfg-light-kitchen","light.kitchen_light","light.kitchen","light.kitchen_lights","switch.kitchen"),i("#cfg-light-dining","light.dining","light.dining_room","switch.dining"),i("#cfg-light-hallway","light.downstairs_hallway","light.hallway","light.hall","light.entrance","switch.hallway"),i("#cfg-light-wc","light.wc","light.cloakroom","light.downstairs_toilet","switch.wc"),i("#cfg-light-master","light.bedroom_bedroom_light","light.master","light.bedroom_1","light.main_bedroom","switch.master"),i("#cfg-light-ensuite","light.en_suite_light","light.ensuite","light.en_suite","switch.ensuite"),i("#cfg-light-bedroom2","light.guest_room_guest_room_light","light.bedroom_2","light.bed_2","light.guest_room","switch.bedroom_2"),i("#cfg-light-bedroom3","light.office_nursey_light","light.bedroom_3","light.bed_3","light.nursery","light.office","switch.bedroom_3"),i("#cfg-light-bathroom","light.bathroom_light","light.bathroom","light.family_bathroom","switch.bathroom"),i("#cfg-light-landing","light.upstairs_hallway","light.landing","light.stairs","light.upstairs_hallway","switch.landing")}adjustThermostatTemp(e,t){if(!this.lastData)return;this.lastData.thermostats||(this.lastData.thermostats={}),this.lastData.thermostats[e]||(this.lastData.thermostats[e]={current_temp:e==="downstairs"?20:19.5,target_temp:e==="downstairs"?21:19.5,state:"heat",is_heating:!1});let i=this.lastData.thermostats[e],n=Number(i.target_temp||(e==="downstairs"?21:19.5)),r=Math.round((n+t)*2)/2;r=Math.max(5,Math.min(30,r)),this.setThermostatTemp(e,r)}setThermostatTemp(e,t){if(!this.lastData)return;this.lastData.thermostats||(this.lastData.thermostats={}),this.lastData.thermostats[e]||(this.lastData.thermostats[e]={current_temp:e==="downstairs"?20:19.5,target_temp:20,state:"heat",is_heating:!1});let i=this.lastData.thermostats[e];i.target_temp=t;let n=Number(i.current_temp||20),r=(i.state||"").toLowerCase()==="off";i.is_heating=!r&&n<t;let a=e==="downstairs"?i.entity_id||this.currentSensorConfig?.thermostat_downstairs||"climate.tado_x_downstairs":i.entity_id||this.currentSensorConfig?.thermostat_upstairs||"climate.smart_thermostat_x";this.onSetTemperature&&this.onSetTemperature(e,t,a),this._syncThermostatDemand(),this.renderDrawerContent()}setThermostatMode(e,t){if(!this.lastData)return;this.lastData.thermostats||(this.lastData.thermostats={}),this.lastData.thermostats[e]||(this.lastData.thermostats[e]={current_temp:e==="downstairs"?20:19.5,target_temp:20,state:"heat",is_heating:!1});let i=this.lastData.thermostats[e];i.state=t;let n=t==="off",r=Number(i.current_temp||20),a=Number(i.target_temp||20);i.is_heating=!n&&r<a;let o=e==="downstairs"?i.entity_id||this.currentSensorConfig?.thermostat_downstairs||"climate.tado_x_downstairs":i.entity_id||this.currentSensorConfig?.thermostat_upstairs||"climate.smart_thermostat_x";this.onSetHvacMode&&this.onSetHvacMode(e,t,o),this._syncThermostatDemand(),this.renderDrawerContent()}_syncThermostatDemand(){if(!this.lastData?.thermostats)return;let e=this.lastData.thermostats.downstairs,t=this.lastData.thermostats.upstairs,i=!!(e&&e.is_heating||t&&t.is_heating);this.lastData.octopus_gas||(this.lastData.octopus_gas={}),this.lastData.octopus_gas.is_active=i,this.lastData.octopus_gas.boiler_status=i?"Heating":"Standby",this.lastData.octopus_gas.power_kw=i?1.45:0,this.onThermostatChange&&this.onThermostatChange(this.lastData.thermostats,this.lastData.octopus_gas)}isDrawerOpen(){let e=this.el?.querySelector("#hud-drawer");return!!(e&&e.classList.contains("open"))}openDrawerTab(e){let t=this.el.querySelector("#hud-drawer"),i=this.el.querySelector("#btn-drawer");t.classList.add("open"),i.classList.add("active"),this.switchTab(e)}switchTab(e){this.activeTab=e,this.el.querySelectorAll(".drawer-nav-tab").forEach(i=>{i.classList.toggle("active",i.getAttribute("data-tab")===e)}),this.renderDrawerContent()}renderDrawerContent(){let e=this.el.querySelector("#drawer-content"),t=this.lastData;if(t){if(this.activeTab==="solar"){let i=t.solar||{},n=er(i.power_kw),r=n>.04,a=zy(n),o=i.week_kwh!==null&&i.week_kwh!==void 0&&i.week_kwh!==""?`
        <div class="stat-card">
          <div class="stat-label">THIS WEEK</div>
          <div class="stat-val">${Number(i.week_kwh).toFixed(1)} <span class="stat-unit">kWh</span></div>
        </div>`:"",l=i.month_kwh!==null&&i.month_kwh!==void 0&&i.month_kwh!==""?`
        <div class="stat-card">
          <div class="stat-label">THIS MONTH</div>
          <div class="stat-val">${Number(i.month_kwh).toFixed(1)} <span class="stat-unit">kWh</span></div>
        </div>`:"",c=i.total_kwh||i.year_kwh?`
        <div class="stat-card">
          <div class="stat-label">LIFETIME GENERATED</div>
          <div class="stat-val">${Number(i.total_kwh||i.year_kwh).toFixed(0)} <span class="stat-unit">kWh</span></div>
        </div>`:"";e.innerHTML=`
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div class="stat-label">SOLAX LIVE GENERATION</div>
            <div class="stat-val color-solar">${a.value} <span class="stat-unit">${a.unit}</span></div>
            <div class="stat-subtext">Status: ${r?"Generating \u2022 Active Flow":"Standby / Night (No Generation)"}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">TODAY</div>
            <div class="stat-val">${Number(i.today_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          ${o}
          ${l}
          ${c}
        </div>
      `}else if(this.activeTab==="electric"){let i=t.octopus_electric||{},n=er(i.power_kw),r=Math.abs(n),a=n<-.02||!!i.is_exporting,o=r>.03,l=uf(r),c=i.today_spend_gbp!==null&&i.today_spend_gbp!==void 0?i.today_spend_gbp:i.monthly_spend_gbp,h=t.appliances?.fridge||{},u=h.power_w!==void 0?h.power_w:Math.round((h.power_kw||0)*1e3),d=!!(h.is_active||u>5),f=h.fridge_temp!==void 0&&h.freezer_temp!==void 0?`Fridge ${h.fridge_temp}\xB0C &bull; Freezer ${h.freezer_temp}\xB0C`:d?"Active Cooling Cycle":"Standby";e.innerHTML=`
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div class="stat-label">OCTOPUS GRID POWER (${o?a?"EXPORTING TO GRID":"IMPORTING FROM GRID":"IDLE / BALANCED"})</div>
            <div class="stat-val ${a?"color-grid-export":"color-grid-import"}">
              ${l.value} <span class="stat-unit">${l.unit}</span>
            </div>
            <div class="stat-subtext">Flow: ${o?a?"\u2B06\uFE0F House to Pylon":"\u2B07\uFE0F Pylon to House":"Balanced (0 W)"}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">CURRENT TARIFF RATE</div>
            <div class="stat-val">${Number(i.current_rate_p||0).toFixed(2)} <span class="stat-unit">p/kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">TODAY'S SPEND</div>
            <div class="stat-val">\xA3${Number(c||0).toFixed(2)}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">TODAY'S CONSUMPTION</div>
            <div class="stat-val">${Number(i.day_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">KITCHEN REFRIGERATOR</div>
            <div class="stat-val" style="color:${d?"#38bdf8":"#94a3b8"};">
              ${u} <span class="stat-unit">W</span>
            </div>
            <div class="stat-subtext">${f}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">LG TV</div>
            <div class="stat-val" style="color:${t.appliances?.tv?.is_on?"#60a5fa":"#94a3b8"};">
              ${t.appliances?.tv?.power_w||0} <span class="stat-unit">W</span>
            </div>
            <div class="stat-subtext">Status: ${t.appliances?.tv?.is_on?"On / Active":"Standby"} &bull; TV Plug</div>
          </div>
          ${t.appliances?.washer?.power_w?`
          <div class="stat-card">
            <div class="stat-label">KITCHEN WASHING MACHINE</div>
            <div class="stat-val" style="color:${t.appliances?.washer?.is_active?"#00f59b":"#94a3b8"};">
              ${t.appliances?.washer?.power_w||0} <span class="stat-unit">W</span>
            </div>
            <div class="stat-subtext">Status: ${t.appliances?.washer?.state||"Standby"}</div>
          </div>`:""}
        </div>
      `}else if(this.activeTab==="gas"){let i=t.octopus_gas||{},n=!!(i.is_active&&i.boiler_status==="Heating");e.innerHTML=`
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div class="stat-label">KITCHEN COMBI BOILER</div>
            <div class="stat-val" style="color:${n?"#f97316":"#94a3b8"};">${n?"\u{1F525} Heating":"Standby"}</div>
            <div class="stat-subtext">Status: ${n?"Heating (Firing)":"Standby (Idle)"} &bull; Supply: External LPG Bulk Tank</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">TODAY</div>
            <div class="stat-val">${Number(i.day_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">TODAY'S SPEND</div>
            <div class="stat-val">\xA3${Number(i.today_spend_gbp||i.monthly_spend_gbp||0).toFixed(2)}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">GAS RATE</div>
            <div class="stat-val">${Number(i.current_rate_p||0).toFixed(2)} <span class="stat-unit">p/kWh</span></div>
          </div>
        </div>
      `}else if(this.activeTab==="ev"){let i=t.ev||{},n=Math.min(Math.max(Number(i.battery_soc_pct||0),0),100),r=er(i.charger_power_kw),a=!!i.is_connected,o=!!(i.is_charging&&r>.04&&a),l=i.status_text||(o?`Charging @ ${r.toFixed(1)} kW`:a?"Connected (Idle)":"Disconnected");e.innerHTML=`
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
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
              <div style="flex:1;min-width:200px;">
                <div class="stat-label">PEUGEOT e-2008 BATTERY</div>
                <div class="stat-val color-ev">${n}% <span class="stat-unit">(${Number(i.range_miles||0)} miles)</span></div>
                <div class="battery-bar-container">
                  <div class="battery-bar-fill" style="width: ${n}%"></div>
                </div>
                <div class="stat-subtext" style="margin-top: 6px;">Charging Cable: ${o?"\u26A1 Flowing to Car (5 Pulses)":a?"\u{1F50C} Plugged In (Idle)":"Disconnected"}</div>
              </div>
              <button class="btn-action" id="btn-wakeup-vehicle" style="background:linear-gradient(135deg, #0284c7, #2563eb); color:#fff; display:flex; align-items:center; gap:8px; padding:10px 16px; border-radius:10px; font-weight:700; font-size:12px; cursor:pointer; border:none; box-shadow:0 4px 12px rgba(2,132,199,0.3); transition:all 0.2s;">
                <span>\u{1F697}</span>
                <span id="btn-wakeup-text">Wake Up Vehicle</span>
              </button>
            </div>
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
      `;let c=e.querySelector("#btn-wakeup-vehicle");c&&c.addEventListener("click",()=>{let u=c.querySelector("#btn-wakeup-text");c.disabled=!0,c.style.opacity="0.7",u&&(u.innerText="Waking vehicle..."),this.onWakeupVehicle&&this.onWakeupVehicle(),setTimeout(()=>{u&&(u.innerText="\u2705 Wakeup sent!"),setTimeout(()=>{c.disabled=!1,c.style.opacity="1",u&&(u.innerText="Wake Up Vehicle")},3e3)},1200)});let h=e.querySelector("#btn-focus-charger");h&&h.addEventListener("click",()=>this.onPresetClick("charger"))}else if(this.activeTab==="heating"){let i=t.thermostats||{},n=i.downstairs||{},r=i.upstairs||{},a=t.octopus_gas||{},o=Number(n.current_temp||20),l=Number(n.target_temp||21),h=(n.state||"heat").toLowerCase()==="off",u=!!n.is_heating,d=bl(o),f=Number(r.current_temp||19.5),g=Number(r.target_temp||19.5),m=(r.state||"heat").toLowerCase()==="off",p=!!r.is_heating,y=bl(f),S=!!(a.is_active&&a.boiler_status==="Heating");e.innerHTML=`
        <div class="stat-grid">
          <!-- Downstairs Thermostat -->
          <div class="stat-card stat-card-full">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
              <div>
                <div class="stat-label">DOWNSTAIRS HEATING & CLIMATE</div>
                <div class="stat-val" style="color: ${d.color}; font-size: 26px;">
                  ${o.toFixed(1)} <span class="stat-unit">\xB0C</span>
                  <span style="font-size: 11px; font-weight: 600; padding: 2px 7px; border-radius: 6px; background: rgba(255,255,255,0.08); color: ${d.color}; vertical-align: middle; margin-left: 6px;">
                    ${d.icon} ${d.label}
                  </span>
                </div>
                <div class="stat-subtext" style="margin-top: 4px;">
                  Current: <strong>${o.toFixed(1)}\xB0C</strong> &bull; Target: <strong>${l.toFixed(1)}\xB0C</strong> &bull;
                  <span style="color: ${u?"#f97316":h?"#38bdf8":"#94a3b8"}; font-weight: ${u?"700":"normal"};">
                    ${u?"\u{1F525} Calling for Heat":h?"\u2744\uFE0F Thermostat Off":o>=l?"\u2705 Set Temp Reached (Standby)":"Standby"}
                  </span>
                </div>
              </div>
              <button class="light-toggle-btn" style="padding:6px 12px;" id="btn-focus-down">\u{1F6CB}\uFE0F View Ground Floor</button>
            </div>

            <!-- Interactive Setpoint Adjuster -->
            <div class="thermo-control-card">
              <div class="thermo-control-header">
                <span class="thermo-control-title">Target Temperature Setpoint</span>
                <span class="thermo-mode-badge ${u?"heating":h?"off":"idle"}">
                  ${u?"\u{1F525} Heating":h?"\u2744\uFE0F Off":"Standby"}
                </span>
              </div>
              <div class="thermo-stepper">
                <button class="thermo-step-btn" data-floor="downstairs" data-action="down" title="Decrease 0.5\xB0C">\u2212</button>
                <div class="thermo-setpoint-readout">
                  <span class="thermo-setpoint-num">${l.toFixed(1)}</span>
                  <span class="thermo-setpoint-deg">\xB0C</span>
                </div>
                <button class="thermo-step-btn" data-floor="downstairs" data-action="up" title="Increase 0.5\xB0C">+</button>
              </div>
              <div class="thermo-presets">
                <button class="thermo-preset-pill ${Math.abs(l-18)<.25?"active":""}" data-floor="downstairs" data-temp="18.0">18\xB0C Eco</button>
                <button class="thermo-preset-pill ${Math.abs(l-20)<.25?"active":""}" data-floor="downstairs" data-temp="20.0">20\xB0C Comfort</button>
                <button class="thermo-preset-pill ${Math.abs(l-21.5)<.25?"active":""}" data-floor="downstairs" data-temp="21.5">21.5\xB0C Warm</button>
              </div>
              <div class="thermo-mode-row">
                <button class="thermo-mode-btn ${h?"":"active-heat"}" data-floor="downstairs" data-mode="heat">\u{1F525} Heat Mode</button>
                <button class="thermo-mode-btn ${h?"active-off":""}" data-floor="downstairs" data-mode="off">\u2744\uFE0F Turn Off</button>
              </div>
            </div>
          </div>

          <!-- Upstairs Thermostat -->
          <div class="stat-card stat-card-full">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
              <div>
                <div class="stat-label">UPSTAIRS HEATING & CLIMATE</div>
                <div class="stat-val" style="color: ${y.color}; font-size: 26px;">
                  ${f.toFixed(1)} <span class="stat-unit">\xB0C</span>
                  <span style="font-size: 11px; font-weight: 600; padding: 2px 7px; border-radius: 6px; background: rgba(255,255,255,0.08); color: ${y.color}; vertical-align: middle; margin-left: 6px;">
                    ${y.icon} ${y.label}
                  </span>
                </div>
                <div class="stat-subtext" style="margin-top: 4px;">
                  Current: <strong>${f.toFixed(1)}\xB0C</strong> &bull; Target: <strong>${g.toFixed(1)}\xB0C</strong> &bull;
                  <span style="color: ${p?"#f97316":m?"#38bdf8":"#94a3b8"}; font-weight: ${p?"700":"normal"};">
                    ${p?"\u{1F525} Calling for Heat":m?"\u2744\uFE0F Thermostat Off":f>=g?"\u2705 Set Temp Reached (Standby)":"Standby"}
                  </span>
                </div>
              </div>
              <button class="light-toggle-btn" style="padding:6px 12px;" id="btn-focus-up">\u{1F6CF}\uFE0F View First Floor</button>
            </div>

            <!-- Interactive Setpoint Adjuster -->
            <div class="thermo-control-card">
              <div class="thermo-control-header">
                <span class="thermo-control-title">Target Temperature Setpoint</span>
                <span class="thermo-mode-badge ${p?"heating":m?"off":"idle"}">
                  ${p?"\u{1F525} Heating":m?"\u2744\uFE0F Off":"Standby"}
                </span>
              </div>
              <div class="thermo-stepper">
                <button class="thermo-step-btn" data-floor="upstairs" data-action="down" title="Decrease 0.5\xB0C">\u2212</button>
                <div class="thermo-setpoint-readout">
                  <span class="thermo-setpoint-num">${g.toFixed(1)}</span>
                  <span class="thermo-setpoint-deg">\xB0C</span>
                </div>
                <button class="thermo-step-btn" data-floor="upstairs" data-action="up" title="Increase 0.5\xB0C">+</button>
              </div>
              <div class="thermo-presets">
                <button class="thermo-preset-pill ${Math.abs(g-18)<.25?"active":""}" data-floor="upstairs" data-temp="18.0">18\xB0C Eco</button>
                <button class="thermo-preset-pill ${Math.abs(g-20)<.25?"active":""}" data-floor="upstairs" data-temp="20.0">20\xB0C Comfort</button>
                <button class="thermo-preset-pill ${Math.abs(g-21.5)<.25?"active":""}" data-floor="upstairs" data-temp="21.5">21.5\xB0C Warm</button>
              </div>
              <div class="thermo-mode-row">
                <button class="thermo-mode-btn ${m?"":"active-heat"}" data-floor="upstairs" data-mode="heat">\u{1F525} Heat Mode</button>
                <button class="thermo-mode-btn ${m?"active-off":""}" data-floor="upstairs" data-mode="off">\u2744\uFE0F Turn Off</button>
              </div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-label">KITCHEN COMBI BOILER</div>
            <div class="stat-val" style="color: ${S?"#f97316":"#94a3b8"};">
              ${S?"\u{1F525} Heating":"Standby"}
            </div>
            <div class="stat-subtext">
              Status: ${S?"Heating (Firing)":"Standby"} &bull; Supply: LPG Bulk Tank
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-label">GAS TODAY</div>
            <div class="stat-val">${Number(a.day_kwh||0).toFixed(1)} <span class="stat-unit">kWh</span></div>
            <div class="stat-subtext">Supply: External LPG Bulk Tank</div>
          </div>
        </div>
      `,e.querySelectorAll(".thermo-step-btn").forEach(I=>{I.addEventListener("click",C=>{C.stopPropagation();let N=I.getAttribute("data-floor"),G=I.getAttribute("data-action")==="up"?.5:-.5;this.adjustThermostatTemp(N,G)})}),e.querySelectorAll(".thermo-preset-pill").forEach(I=>{I.addEventListener("click",C=>{C.stopPropagation();let N=I.getAttribute("data-floor"),F=parseFloat(I.getAttribute("data-temp"));this.setThermostatTemp(N,F)})}),e.querySelectorAll(".thermo-mode-btn").forEach(I=>{I.addEventListener("click",C=>{C.stopPropagation();let N=I.getAttribute("data-floor"),F=I.getAttribute("data-mode");this.setThermostatMode(N,F)})});let _=e.querySelector("#btn-focus-down");_&&_.addEventListener("click",()=>this.onPresetClick("downstairs"));let E=e.querySelector("#btn-focus-up");E&&E.addEventListener("click",()=>this.onPresetClick("upstairs"))}else if(this.activeTab==="lights"){let i=t.room_lights||{},n=this.customLights||[],r=this.lightFilterFloor||"all",a=0,o=0,l=0;for(let y of n){let S=i[y.id]||(y.id==="living_lamp"?t.appliances?.living_lamp:{})||{};(S.is_on||S.state==="on")&&a++,y.floor==="first"||y.pos&&y.pos.y>3?l++:o++}let c=a*7,h=n.filter(y=>{let S=y.floor==="first"||y.pos&&y.pos.y>3;return r==="ground"?!S:r==="first"?S:!0}),u="";for(let y of h){let S=i[y.id]||(y.id==="living_lamp"?t.appliances?.living_lamp:{})||{},v=!!(S.is_on||S.state==="on"),T=S.brightness!==void 0?Math.round(S.brightness/255*100):v?100:0,A=y.isFloorLamp||y.name?.toLowerCase().includes("lamp")?"\u{1F6CB}\uFE0F":"\u{1F4A1}",E=y.floor==="first"||y.pos&&y.pos.y>3?"\u{1F6CF}\uFE0F Upstairs":"\u{1F6CB}\uFE0F Downstairs",I=Ei.find(N=>N.id===y.id),C=y.entity_id||this.currentSensorConfig?.[`light_${y.id}`]||(y.id==="living_lamp"?this.currentSensorConfig?.light_living_lamp:"")||I?.entity_id||"";u+=`
          <div class="light-card ${v?"active":""}">
            <div class="light-card-body">
              <div class="light-avatar ${v?"on":"off"}">
                ${A}
              </div>
              <div class="light-info">
                <div class="light-name">${y.name}</div>
                <div class="light-subtext">${E} &bull; <span style="color:${v?"#f59e0b":"#94a3b8"};font-weight:${v?"600":"normal"};">${v?`${T}% Brightness (7W)`:"Off (0W)"}</span></div>
              </div>
              <div class="light-actions">
                <button class="light-toggle-btn ${v?"on":"off"}" data-entity="${C}" data-light-id="${y.id}">
                  ${v?"ON":"OFF"}
                </button>
                <button class="btn-light-gear btn-edit-light-coords" data-light-id="${y.id}" title="Edit 3D Position & Entity">
                  \u2699\uFE0F
                </button>
              </div>
            </div>
          </div>
        `}e.innerHTML=`
        <div class="stat-card stat-card-full" style="margin-bottom:12px;background:rgba(245, 158, 11, 0.08);border-color:rgba(245, 158, 11, 0.25);">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
            <div>
              <div class="stat-label">TOTAL LIGHTING ENERGY USAGE</div>
              <div class="stat-val" style="color:#f59e0b;font-size:24px;">
                ${c} <span class="stat-unit">W</span>
                <span style="font-size:11px;font-weight:600;padding:2px 7px;border-radius:6px;background:rgba(245, 158, 11, 0.15);color:#f59e0b;vertical-align:middle;margin-left:6px;">
                  ${a} of ${n.length} BULBS ACTIVE
                </span>
              </div>
              <div class="stat-subtext" style="margin-top:4px;">
                Formula: <strong>7W per bulb</strong> &bull; ${a} active &times; 7W = <strong>${c} Watts</strong>
              </div>
            </div>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; gap:10px; flex-wrap:wrap;">
          <div style="display:flex; gap:6px;">
            <button class="thermo-preset-pill ${r==="all"?"active":""}" data-filter-floor="all">All (${n.length})</button>
            <button class="thermo-preset-pill ${r==="ground"?"active":""}" data-filter-floor="ground">\u{1F6CB}\uFE0F Ground Floor (${o})</button>
            <button class="thermo-preset-pill ${r==="first"?"active":""}" data-filter-floor="first">\u{1F6CF}\uFE0F Upstairs (${l})</button>
          </div>
          <div style="display:flex; gap:6px; align-items:center;">
            <button class="light-toggle-btn off" id="btn-lights-all-on" style="padding:5px 10px;font-size:11px;min-width:auto;">All On</button>
            <button class="light-toggle-btn off" id="btn-lights-all-off" style="padding:5px 10px;font-size:11px;min-width:auto;">All Off</button>
            <button class="btn-action" id="btn-add-light-ui" style="background:#0284c7; color:#fff; display:flex; align-items:center; gap:5px; padding:6px 12px; border-radius:8px; font-weight:600; font-size:11px; cursor:pointer; border:none;">
              <span>\u2795</span>
              <span>Add Light</span>
            </button>
          </div>
        </div>
        <div class="light-grid">
          ${u}
        </div>
      `,e.querySelectorAll("[data-filter-floor]").forEach(y=>{y.addEventListener("click",()=>{this.lightFilterFloor=y.getAttribute("data-filter-floor"),this.renderDrawerContent()})});let f=e.querySelector("#btn-lights-all-on");f&&f.addEventListener("click",()=>{for(let y of h){let S=Ei.find(T=>T.id===y.id),v=y.entity_id||this.currentSensorConfig?.[`light_${y.id}`]||(y.id==="living_lamp"?this.currentSensorConfig?.light_living_lamp:"")||S?.entity_id||"";t.room_lights?.[y.id]&&(t.room_lights[y.id].is_on=!0,t.room_lights[y.id].brightness=255),y.id==="living_lamp"&&t.appliances?.living_lamp&&(t.appliances.living_lamp.is_on=!0,t.appliances.living_lamp.brightness=255),v&&this.onToggleLight(v),this.options.onToggleRoomLight&&this.options.onToggleRoomLight(y.id,!0)}this.renderDrawerContent()});let g=e.querySelector("#btn-lights-all-off");g&&g.addEventListener("click",()=>{for(let y of h){let S=Ei.find(T=>T.id===y.id),v=y.entity_id||this.currentSensorConfig?.[`light_${y.id}`]||(y.id==="living_lamp"?this.currentSensorConfig?.light_living_lamp:"")||S?.entity_id||"";t.room_lights?.[y.id]&&(t.room_lights[y.id].is_on=!1,t.room_lights[y.id].brightness=0),y.id==="living_lamp"&&t.appliances?.living_lamp&&(t.appliances.living_lamp.is_on=!1,t.appliances.living_lamp.brightness=0),v&&this.onToggleLight(v),this.options.onToggleRoomLight&&this.options.onToggleRoomLight(y.id,!1)}this.renderDrawerContent()}),e.querySelectorAll(".light-toggle-btn").forEach(y=>{y.addEventListener("click",()=>{let S=y.getAttribute("data-light-id");if(!S)return;let v=Ei.find(I=>I.id===S),T=y.getAttribute("data-entity")?.trim()||v?.entity_id||"",A=t.room_lights?.[S];S==="living_lamp"&&(A=t.appliances?.living_lamp||A);let E=!!!(A?.is_on||A?.state==="on");t.room_lights?.[S]&&(t.room_lights[S].is_on=E,t.room_lights[S].brightness=E?t.room_lights[S].brightness||255:0),S==="living_lamp"&&t.appliances?.living_lamp&&(t.appliances.living_lamp.is_on=E,t.appliances.living_lamp.brightness=E?t.appliances.living_lamp.brightness||255:0),T&&this.onToggleLight(T),this.options.onToggleRoomLight&&this.options.onToggleRoomLight(S,E),this.renderDrawerContent()})});let m=e.querySelector("#btn-add-light-ui");m&&m.addEventListener("click",()=>{this.openLightEditor(null)}),e.querySelectorAll(".btn-edit-light-coords").forEach(y=>{y.addEventListener("click",()=>{let S=y.getAttribute("data-light-id");this.openLightEditor(S)})})}}}update(e,t=[]){this.lastData=e;let i=er(e.solar?.power_kw),n=er(e.octopus_electric?.power_kw),r=er(e.ev?.charger_power_kw),a=n<-.02||!!e.octopus_electric?.is_exporting,o=this.el.querySelector("#hdr-solar-kw"),l=this.el.querySelector("#hdr-grid-kw"),c=this.el.querySelector("#hdr-ev-kw"),h=this.el.querySelector("#hdr-gas-val");if(o&&(o.innerText=hf(i)),l&&(l.innerText=Hy(n,a),l.className=`hud-flow-val ${a?"color-grid-export":"color-grid-import"}`),c&&(c.innerText=`${r.toFixed(2)} kW`),h){let g=!!(e.octopus_gas?.is_active&&e.octopus_gas?.boiler_status==="Heating");h.innerText=g?"Heating":"Standby",h.style.color=g?"#f97316":"#94a3b8"}let u=this.el.querySelector("#hdr-lights-val");if(u){let g=0;for(let[m,p]of Object.entries(e.room_lights||{}))p&&(p.is_on||p.state==="on")&&g++;e.appliances?.living_lamp?.is_on&&!e.room_lights?.living_lamp?.is_on&&g++;let x=g*7;u.innerText=`${x} W`,u.style.color=g>0?"#f59e0b":"#94a3b8"}let d=this.el.querySelector("#hotspots-container");if(d.innerHTML="",!this.showTags){d.style.display="none";return}d.style.display="block";let f={solar:"solar",grid:"grid",boiler:"boiler",ev:"ev",ev_charger:"ev",thermostat_downstairs:"thermostats",thermostat_upstairs:"thermostats",appliance_fridge:"appliances",appliance_washer:"appliances",appliance_tv:"appliances",lighting:"lighting"};for(let g of t){if(!g.visible)continue;let x=f[g.id];if(x&&this.tagCategories&&this.tagCategories[x]===!1)continue;let m="";if(g.id==="solar"){let y=i>.04;m=`<span>\u2600\uFE0F Solax</span> <span class="color-solar">${hf(i)}</span> <span style="font-size:9px;color:${y?"#10b981":"#64748b"}">\u25CF</span>`}else if(g.id==="grid"){let y=Number(e.octopus_electric?.current_rate_p||0).toFixed(1),S=Math.abs(n),v=S<1?`${Math.round(S*1e3)} W`:`${S.toFixed(1)} kW`;m=`<span>\u26A1 Octopus</span> <span class="${a?"color-grid-export":"color-grid-import"}">${a?"Export ":""}${v}</span> <span style="color:#94a3b8">(${y}p)</span>`}else if(g.id==="boiler"){let y=!!(e.octopus_gas?.is_active&&e.octopus_gas?.boiler_status==="Heating");m=`<span>\u{1F525} Boiler</span> <span style="color:${y?"#f97316":"#94a3b8"};font-weight:700;">${y?"Heating":"Standby"}</span>`}else if(g.id==="ev")m=`<span>\u{1F697} Peugeot</span> <span class="color-ev">${e.ev?.battery_soc_pct||68}%</span>`;else if(g.id==="ev_charger"){let y=e.ev||{},S=!!y.is_connected,v=!!(y.is_charging&&S),T=Number(y.charger_power_kw||0),A="Disconnected";v?A=`\u26A1 ${T.toFixed(1)} kW`:S&&(A="Connected"),m=`<span>\u26A1 Zappi</span> <span style="color:${v?"#00f59b":S?"#38bdf8":"#94a3b8"};font-weight:700;">${A}</span>`}else if(g.id==="thermostat_downstairs"){let y=e.thermostats?.downstairs||{},S=Number(y.current_temp||20).toFixed(1),v=!!y.is_heating,T=bl(y.current_temp||20);m=`<span>\u{1F321}\uFE0F Downstairs</span> <span style="color:${T.color};font-weight:700;">${S}\xB0C</span> <span style="font-size:10px;">${T.icon}</span> ${v?'<span style="color:#f97316;font-size:9px;font-weight:700;">HEATING</span>':""}`}else if(g.id==="thermostat_upstairs"){let y=e.thermostats?.upstairs||{},S=Number(y.current_temp||19.5).toFixed(1),v=!!y.is_heating,T=bl(y.current_temp||19.5);m=`<span>\u{1F321}\uFE0F Upstairs</span> <span style="color:${T.color};font-weight:700;">${S}\xB0C</span> <span style="font-size:10px;">${T.icon}</span> ${v?'<span style="color:#f97316;font-size:9px;font-weight:700;">HEATING</span>':""}`}else if(g.id==="appliance_fridge"){let y=e.appliances?.fridge||{},S=y.power_w!==void 0?`${y.power_w} W`:"0 W",v=!!y.is_active;m=`<span>\u{1F9CA} Fridge</span> <span style="color:#38bdf8;font-weight:700;">${S}</span> <span style="font-size:9px;color:${v?"#10b981":"#64748b"}">\u25CF</span>`}else if(g.id==="appliance_washer"){let y=e.appliances?.washer||{},S=!!y.is_active,v=y.power_w!==void 0?`${y.power_w} W`:S?"Running":"0 W";m=`<span>\u{1FAE7} Washer</span> <span style="color:${S?"#00f59b":"#94a3b8"};font-weight:700;">${v}</span> <span style="font-size:9px;color:${S?"#10b981":"#64748b"}">\u25CF</span>`}else if(g.id==="appliance_tv"){let y=e.appliances?.tv||{},S=!!y.is_on,v=y.power_w!==void 0?`${y.power_w} W`:S?"ON":"OFF";m=`<span>\u{1F4FA} Living TV</span> <span style="color:${S?"#60a5fa":"#94a3b8"};font-weight:700;">${v}</span> <span style="font-size:9px;color:${S?"#10b981":"#64748b"}">\u25CF</span>`}else if(g.id==="lighting"){let y=e.room_lights||{},S=0;for(let[A,_]of Object.entries(y))_&&(_.is_on||_.state==="on")&&S++;e.appliances?.living_lamp?.is_on&&!y.living_lamp?.is_on&&S++;let v=S*7;m=`<span>\u{1F4A1} Lighting</span> <span style="color:${S>0?"#f59e0b":"#94a3b8"};font-weight:700;">${v} W</span>`}let p=document.createElement("div");p.className="hotspot-badge",p.style.left=`${g.x}px`,p.style.top=`${g.y}px`,p.innerHTML=m,p.addEventListener("click",y=>{if(g.id==="lighting"){this.openTab("lights");return}if(g.id==="appliance_tv"){let T=e.appliances?.tv,A=T?.entity_id||"switch.living_room_tv_plug";A.startsWith("sensor.")&&(A="switch.living_room_tv_plug"),A?this.onToggleLight(A):T&&(T.is_on=!T.is_on,this.updateData(e)),this.onPresetClick("downstairs");return}else if(g.id==="appliance_fridge"){this.openDrawerTab("electric"),this.onPresetClick("downstairs");return}else if(g.id==="appliance_washer"){this.openDrawerTab("electric"),this.onPresetClick("downstairs");return}else if(g.id==="ev_charger"){this.openDrawerTab("ev"),this.onPresetClick("charger");return}let S={solar:"solar",grid:"electric",boiler:"gas",ev:"ev",thermostat_downstairs:"heating",thermostat_upstairs:"heating"},v={thermostat_downstairs:"downstairs",thermostat_upstairs:"upstairs"};this.openDrawerTab(S[g.id]||"solar"),this.onPresetClick(v[g.id]||g.id)}),d.appendChild(p)}}};var df={solar:{power_kw:.18,today_kwh:1.2,week_kwh:24.5,month_kwh:112.4,year_kwh:341.2,inverter_temp:24.5,status:"Generating"},octopus_electric:{power_kw:.171,is_exporting:!1,current_rate_p:31.57,today_spend_gbp:1.82,monthly_spend_gbp:1.82,day_kwh:7.01,yesterday_kwh:7.26,yesterday_cost_gbp:2.15,tariff_name:"Octopus Energy Electricity"},octopus_gas:{is_active:!1,power_kw:0,day_kwh:12.69,today_spend_gbp:1.4,yesterday_kwh:29.06,yesterday_cost_gbp:2.82,current_rate_p:8.71,monthly_spend_gbp:1.4,boiler_status:"Standby"},ev:{is_charging:!1,is_connected:!1,status_text:"EV Disconnected",is_plugged:!1,charger_power_kw:0,energy_added_kwh:19.3,charger_mode:"Eco+",battery_soc_pct:100,range_miles:163,battery_capacity_kwh:50},home:{total_power_kw:.464},thermostats:{downstairs:{entity_id:"climate.tado_x_downstairs",current_temp:17.7,target_temp:19,state:"heat",hvac_action:"idle",is_heating:!1},upstairs:{entity_id:"climate.smart_thermostat_x",current_temp:17.9,target_temp:20,state:"heat",hvac_action:"idle",is_heating:!1}},room_lights:{lounge:{is_on:!1,brightness:0,entity_id:"light.living_room_living_room_light"},kitchen:{is_on:!1,brightness:0,entity_id:"light.kitchen_light"},dining:{is_on:!1,brightness:0,entity_id:""},hallway:{is_on:!1,brightness:0,entity_id:"light.downstairs_hallway"},wc:{is_on:!1,brightness:0,entity_id:""},master_bedroom:{is_on:!1,brightness:0,entity_id:"light.bedroom_bedroom_light"},ensuite:{is_on:!1,brightness:0,entity_id:"light.en_suite_light"},bedroom2:{is_on:!1,brightness:0,entity_id:"light.guest_room_guest_room_light"},bedroom3:{is_on:!1,brightness:0,entity_id:"light.office_nursey_light"},bathroom:{is_on:!1,brightness:0,entity_id:"light.bathroom_light"},landing:{is_on:!1,brightness:0,entity_id:"light.upstairs_hallway"},living_lamp:{is_on:!0,brightness:220,entity_id:"light.living_room_lamp"}},appliances:{fridge:{entity_id:"sensor.refrigerator_power",power_kw:.037,power_w:37,is_active:!0,fridge_temp:1,freezer_temp:-18},washer:{entity_id:"sensor.kitchen_washing_machine_daily_energy",power_kw:0,power_w:0,today_kwh:1.97,is_active:!1},tv:{entity_id:"switch.living_room_living_room_tv_plug",is_on:!0,power_kw:.095},living_lamp:{entity_id:"light.living_room_lamp",is_on:!0,brightness:255}}};function Gy(s,e=""){let t=parseFloat(s);if(isNaN(t))return 0;let i=(e||"").toLowerCase().trim();return i==="w"||i==="va"||i==="watt"||i==="watts"?t/1e3:i==="kw"||i==="kva"||i==="kilowatt"||i==="kilowatts"?t:Math.abs(t)>=20?t/1e3:t}function Vy(s,e=""){let t=parseFloat(s);if(isNaN(t))return 0;let i=(e||"").toLowerCase().trim();return i==="wh"?t/1e3:i==="kwh"?t:i==="mwh"?t*1e3:Math.abs(t)>=1e3?t/1e3:t}function Wy(s){let e=Number(s);return isNaN(e)?{label:"Comfortable",color:"#10b981",icon:"\u2728",code:"comfortable"}:e<16?{label:"Cold (<16\xB0C)",color:"#38bdf8",icon:"\u2744\uFE0F",code:"cold"}:e>22?{label:"Hot (>22\xB0C)",color:"#ef4444",icon:"\u{1F525}",code:"hot"}:{label:"Comfortable (16\u201322\xB0C)",color:"#10b981",icon:"\u2728",code:"comfortable"}}var kh=class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config={},this._hass=null,this.sceneManager=null,this.hud=null,this.energyData=JSON.parse(JSON.stringify(df)),this._pendingState={lights:{},thermostats:{}},this._thermoDebounceTimers={};try{let e=JSON.parse(localStorage.getItem("ha_energy_3d_custom_sensors")||"{}");this.customSensors=e}catch{this.customSensors={}}try{let e=JSON.parse(localStorage.getItem("ha_energy_3d_custom_lights")||"null");if(e&&Array.isArray(e)&&e.length){let t=new Set(["light.living_room","light.kitchen","light.dining_room","light.downstairs_wc","light.master_bedroom","light.ensuite","light.bedroom_2","light.bedroom_3","light.family_bathroom","light.landing"]);for(let i of e){let n=Ei.find(r=>r.id===i.id);(!i.entity_id||t.has(i.entity_id))&&(i.entity_id=this.customSensors[`light_${i.id}`]||n?.entity_id||""),i.id==="living_lamp"&&((!i.entity_id||i.entity_id==="light.living_room_corner_lamp"||t.has(i.entity_id))&&(i.entity_id="light.living_room_lamp"),(i.name==="Living Room Corner Lamp"||!i.name)&&(i.name="Living Room Lamp"))}this.customLights=e;try{localStorage.setItem("ha_energy_3d_custom_lights",JSON.stringify(this.customLights))}catch{}}else this.customLights=JSON.parse(JSON.stringify(Ei))}catch{this.customLights=JSON.parse(JSON.stringify(Ei))}}static getStubConfig(){return{type:"custom:ha-energy-3d-card",title:"Home Energy 3D",model_url:"Taylor_Wimpey_Blair.glb",height:"560px",solax_power:"sensor.solax_snm9wncrqy_ac_output_power",solax_today:"sensor.solax_snm9wncrqy_today_s_generated_energy",solax_week:"",solax_month:"",solax_year:"sensor.solax_snm9wncrqy_total_generated_energy",octopus_electric_power:"sensor.octopus_energy_electricity_22l3956422_3200000391421_current_demand",octopus_export_power:"sensor.solax_snm9wncrqy_exported_power",octopus_rate:"sensor.octopus_energy_electricity_22l3956422_3200000391421_current_rate",octopus_monthly_spend:"sensor.octopus_energy_electricity_22l3956422_3200000391421_current_accumulative_cost",octopus_electric_30min:"sensor.octopus_energy_electricity_22l3956422_3200000391421_current_accumulative_consumption",octopus_electric_day:"sensor.octopus_energy_electricity_22l3956422_3200000391421_current_accumulative_consumption",octopus_electric_yesterday:"sensor.octopus_energy_electricity_22l3956422_3200000391421_previous_accumulative_consumption",octopus_electric_yesterday_cost:"sensor.octopus_energy_electricity_22l3956422_3200000391421_previous_accumulative_cost",octopus_electric_week:"",octopus_electric_month:"",boiler_status:"sensor.boiler_status",octopus_gas_30min:"sensor.octopus_energy_gas_e6s18975782161_7756751506_current_accumulative_consumption_kwh",octopus_gas_day:"sensor.octopus_energy_gas_e6s18975782161_7756751506_current_accumulative_consumption_kwh",octopus_gas_yesterday:"sensor.octopus_energy_gas_e6s18975782161_7756751506_previous_accumulative_consumption_kwh",octopus_gas_yesterday_cost:"sensor.octopus_energy_gas_e6s18975782161_7756751506_previous_accumulative_cost",octopus_gas_week:"",octopus_gas_month:"",octopus_gas_rate:"sensor.octopus_energy_gas_e6s18975782161_7756751506_current_rate",octopus_gas_spend:"sensor.octopus_energy_gas_e6s18975782161_7756751506_current_accumulative_cost",myenergi_power:"sensor.myenergi_zappi_30084500_internal_load_ct1",myenergi_status:"sensor.myenergi_zappi_30084500_plug_status",myenergi_energy:"sensor.myenergi_zappi_30084500_charge_added_session",peugeot_battery:"sensor.vr3ukzkxzmj557948_battery",peugeot_range:"sensor.vr3ukzkxzmj557948_autonomy",peugeot_wakeup:"button.vr3ukzkxzmj557948_wakeup",thermostat_downstairs:"climate.tado_x_downstairs",thermostat_upstairs:"climate.smart_thermostat_x",sensor_fridge:"sensor.refrigerator_power",sensor_washer:"sensor.kitchen_washing_machine_daily_energy",sensor_tv:"sensor.living_room_tv_plug_power",light_living_lamp:"light.living_room_lamp",light_lounge:"light.living_room_living_room_light",light_kitchen:"light.kitchen_light",light_dining:"",light_hallway:"light.downstairs_hallway",light_wc:"",light_master_bedroom:"light.bedroom_bedroom_light",light_ensuite:"light.en_suite_light",light_bedroom2:"light.guest_room_guest_room_light",light_bedroom3:"light.office_nursey_light",light_bathroom:"light.bathroom_light",light_landing:"light.upstairs_hallway"}}static async getConfigElement(){return await Promise.resolve().then(()=>(pf(),ff)),document.createElement("ha-energy-3d-card-editor")}setConfig(e){this._config={model_url:"Taylor_Wimpey_Blair.glb",height:"560px",night_mode:!1,auto_rotate:!1,...s.getStubConfig(),...e,...this.customSensors},this.wrapper&&(this.wrapper.style.height=this._config.height)}connectedCallback(){this.sceneManager||this.render()}disconnectedCallback(){this.sceneManager&&(this.sceneManager.destroy(),this.sceneManager=null)}render(){let e=this._config.height||"560px";this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          flex: 1;
          height: 100%;
          width: 100%;
          position: relative;
          border-radius: var(--ha-card-border-radius, 16px);
          overflow: hidden;
          background: #070b14;
          box-shadow: var(--ha-card-box-shadow, 0 8px 30px rgba(0, 0, 0, 0.4));
          min-height: 0;
        }
        .container {
          position: relative;
          width: 100%;
          height: ${e};
          flex: 1;
          min-height: ${e==="100%"?"560px":e};
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
    `,this.wrapper=this.shadowRoot.querySelector("#card-container");let t=this.shadowRoot.querySelector("#viewport");this.sceneManager=new vl(t,{modelUrl:this._config.model_url,nightMode:this._config.night_mode,autoRotate:this._config.auto_rotate,customLights:this.customLights}),this.sceneManager.onXRayChange=i=>{this.hud&&this.hud.setXRayActive(i)},this.hud=new wl(this.wrapper,{currentSensorConfig:this._config,customLights:this.customLights,onPresetClick:i=>{this.sceneManager.setCameraPreset(i),this.hud&&this.hud.setActivePreset(i)},onToggleXray:i=>this.sceneManager.setXRayRoof(i),onToggleNight:i=>this.sceneManager.setNightMode(i),onToggleRotate:i=>{this.sceneManager.controls.autoRotate=i},onWakeupVehicle:()=>this.wakeupVehicle(),onToggleLight:i=>this.toggleLightEntity(i),onSetTemperature:(i,n,r)=>this.setThermostatTemperature(r,n),onSetHvacMode:(i,n,r)=>this.setThermostatHvacMode(r,n),onThermostatChange:(i,n)=>{this.energyData&&(this.energyData.thermostats=i,this.energyData.octopus_gas=n),this.sceneManager&&this.sceneManager.updateEnergyData(this.energyData)},onToggleRoomLight:(i,n)=>{this.energyData.room_lights||(this.energyData.room_lights={}),this.energyData.room_lights[i]?(this.energyData.room_lights[i].is_on=n,this.energyData.room_lights[i].brightness=n?this.energyData.room_lights[i].brightness||255:0):this.energyData.room_lights[i]={entity_id:"",is_on:n,brightness:n?255:0,rgb_color:null},i==="living_lamp"&&(this.energyData.appliances||(this.energyData.appliances={}),this.energyData.appliances.living_lamp=this.energyData.room_lights[i]),this.sceneManager&&this.sceneManager.updateRoomLights(this.energyData.room_lights)},onToggleTvAudio:()=>this.sceneManager.toggleTvAudio(),onSaveSensors:i=>{this.customSensors=i,this._config={...this._config,...i};for(let n of this.customLights){let r=i[`light_${n.id}`];r===void 0&&n.id==="master_bedroom"&&(r=i.light_master_bedroom||i.light_master),r===void 0&&n.id==="living_lamp"&&(r=i.light_living_lamp),r!==void 0&&(n.entity_id=r)}try{localStorage.setItem("ha_energy_3d_custom_lights",JSON.stringify(this.customLights))}catch{}this.sceneManager.rebuildCustomLights(this.customLights),this.updateStatesFromHass(),this.hud&&(this.hud.setCustomLights(this.customLights),this.hud.renderDrawerContent())},onSaveCustomLights:i=>{this.customLights=i;try{localStorage.setItem("ha_energy_3d_custom_lights",JSON.stringify(i))}catch{}for(let n of i)n.id==="living_lamp"?(this.customSensors.light_living_lamp=n.entity_id||"",this._config.light_living_lamp=n.entity_id||""):(this.customSensors[`light_${n.id}`]=n.entity_id||"",this._config[`light_${n.id}`]=n.entity_id||"",n.id==="master_bedroom"&&(this.customSensors.light_master=n.entity_id||"",this._config.light_master=n.entity_id||""));try{localStorage.setItem("ha_energy_3d_custom_sensors",JSON.stringify(this.customSensors))}catch{}this.sceneManager.rebuildCustomLights(i),this.updateStatesFromHass()},onUpdateLightPosition:(i,n,r,a)=>{this.sceneManager.updateLightPosition(i,n,r,a)},onBeaconFocus:(i,n)=>{this.sceneManager.setEditingLightBeacon(i,n)},onBeaconClear:()=>{this.sceneManager.clearEditingLightBeacon()},onEnableClickToPlace:i=>{this.sceneManager.enableClickToPlace(i)},onDisableClickToPlace:()=>{this.sceneManager.disableClickToPlace()}}),this.sceneManager.onFrame=()=>{let i=this.sceneManager.getProjectedHotspots();this.hud.update(this.energyData,i)},this.sceneManager.onUserCameraInteraction=()=>{this.hud&&this.hud.clearActivePreset()},this._hass&&this.updateStatesFromHass()}set hass(e){this._hass=e,this.hud&&e?.states&&this.hud.setAvailableEntities(Object.keys(e.states)),this.updateStatesFromHass()}getPowerInKw(e,t=0){if(!this._hass||!e)return t;let i=this._hass.states[e];if(!i||i.state==="unavailable"||i.state==="unknown")return 0;let n=i.attributes?.unit_of_measurement||"";return Gy(i.state,n)}getEnergyInKwh(e,t=0){if(!this._hass||!e)return t;let i=this._hass.states[e];if(!i||i.state==="unavailable"||i.state==="unknown")return 0;let n=i.attributes?.unit_of_measurement||"";return Vy(i.state,n)}getEntityNumericValue(e,t=0){if(!this._hass||!e)return t;let i=this._hass.states[e];if(!i||i.state==="unavailable"||i.state==="unknown")return 0;let n=parseFloat(i.state);return isNaN(n)?t:n}getEntityState(e,t=""){if(!this._hass||!e)return t;let i=this._hass.states[e];return!i||i.state==="unavailable"||i.state==="unknown"?t:i.state}resolveEntity(e,...t){if(e&&this._hass?.states?.[e])return e;if(!this._hass?.states)return e||"";let i=Object.keys(this._hass.states);for(let n of t){let r=i.find(a=>a.toLowerCase().includes(n.toLowerCase()));if(r)return r}return e||""}getTariffRate(e,t=0){if(!this._hass||!e)return t;let i=this._hass.states[e];if(!i||i.state==="unavailable"||i.state==="unknown")return t;let n=parseFloat(i.state);if(isNaN(n))return t;let r=(i.attributes?.unit_of_measurement||"").toLowerCase();return r.includes("gbp")||r.includes("\xA3")||n<1.5?parseFloat((n*100).toFixed(2)):parseFloat(n.toFixed(2))}getVehicleRange(e,t=0){if(!this._hass||!e)return t;let i=this._hass.states[e];if(!i||i.state==="unavailable"||i.state==="unknown")return t;let n=parseFloat(i.state);return isNaN(n)?t:(i.attributes?.unit_of_measurement||"").toLowerCase()==="km"||n>200?Math.round(n*.621371):Math.round(n)}updateStatesFromHass(){if(!this._hass)return;let e={...this._config,...this.customSensors},t=this.resolveEntity(e.solax_power,"solax_snm9wncrqy_ac_output_power","ac_output_power","pv1_power","solax_pv_power"),i=this.resolveEntity(e.solax_today,"solax_snm9wncrqy_today_s_generated_energy","today_s_generated_energy","solax_today"),n=e.solax_week?this.resolveEntity(e.solax_week):null,r=e.solax_month?this.resolveEntity(e.solax_month):null,a=this.resolveEntity(e.solax_year,"solax_snm9wncrqy_total_generated_energy","total_generated_energy","solax_year"),o=this.getPowerInKw(t,this.energyData.solar.power_kw);this.energyData.solar={power_kw:o,today_kwh:this.getEnergyInKwh(i,this.energyData.solar.today_kwh),week_kwh:n?this.getEnergyInKwh(n,null):null,month_kwh:r?this.getEnergyInKwh(r,null):null,year_kwh:a?this.getEnergyInKwh(a,this.energyData.solar.year_kwh):null,status:o>.04?"Generating":"Idle"};let l=this.resolveEntity(e.octopus_electric_power,"electricity_22l3956422_3200000391421_current_demand","electricity_current_demand","current_demand"),c=this.resolveEntity(e.octopus_export_power,"solax_snm9wncrqy_exported_power","power_export","exported_power"),h=this.resolveEntity(e.octopus_rate,"electricity_22l3956422_3200000391421_current_rate","electricity_current_rate"),u=this.resolveEntity(e.octopus_monthly_spend,"electricity_22l3956422_3200000391421_current_accumulative_cost","electricity_current_accumulative_cost"),d=this.resolveEntity(e.octopus_electric_30min,"electricity_22l3956422_3200000391421_current_accumulative_consumption","electricity_30min"),f=this.resolveEntity(e.octopus_electric_day,"electricity_22l3956422_3200000391421_current_accumulative_consumption","electricity_today"),g=this.resolveEntity(e.octopus_electric_yesterday,"electricity_22l3956422_3200000391421_previous_accumulative_consumption","electricity_yesterday"),x=this.resolveEntity(e.octopus_electric_yesterday_cost,"electricity_22l3956422_3200000391421_previous_accumulative_cost","electricity_yesterday_cost"),m=e.octopus_electric_week?this.resolveEntity(e.octopus_electric_week):null,p=e.octopus_electric_month?this.resolveEntity(e.octopus_electric_month):null,y=this.getPowerInKw(l,this.energyData.octopus_electric.power_kw),S=this.getPowerInKw(c,0);S>25&&(S=0);let v=!1;y<-.02?v=!0:y>.02?v=!1:S>.04&&(y=-S,v=!0),this.energyData.octopus_electric={power_kw:y,is_exporting:v,current_rate_p:this.getTariffRate(h,this.energyData.octopus_electric.current_rate_p),today_spend_gbp:this.getEntityNumericValue(u,this.energyData.octopus_electric.today_spend_gbp||this.energyData.octopus_electric.monthly_spend_gbp),monthly_spend_gbp:this.getEntityNumericValue(u,this.energyData.octopus_electric.monthly_spend_gbp),reading_30min_kwh:this.getEnergyInKwh(d,this.energyData.octopus_electric.reading_30min_kwh),day_kwh:this.getEnergyInKwh(f,this.energyData.octopus_electric.day_kwh),yesterday_kwh:g?this.getEnergyInKwh(g,this.energyData.octopus_electric.yesterday_kwh):null,yesterday_cost_gbp:x?this.getEntityNumericValue(x,this.energyData.octopus_electric.yesterday_cost_gbp):null,week_kwh:m?this.getEnergyInKwh(m,null):null,month_kwh:p?this.getEnergyInKwh(p,null):null};let T=this.resolveEntity(e.thermostat_downstairs,"climate.tado_x_downstairs","climate.downstairs"),A=this.resolveEntity(e.thermostat_upstairs,"climate.smart_thermostat_x","climate.tado_x_upstairs","climate.upstairs"),_=this.getThermostatState(T,this.energyData.thermostats?.downstairs),E=this.getThermostatState(A,this.energyData.thermostats?.upstairs);this.energyData.thermostats={downstairs:_,upstairs:E};let I=this.resolveEntity(e.octopus_gas_rate,"gas_e6s18975782161_7756751506_current_rate","gas_current_rate"),C=this.resolveEntity(e.octopus_gas_spend,"gas_e6s18975782161_7756751506_current_accumulative_cost","gas_current_accumulative_cost"),N=this.resolveEntity(e.octopus_gas_30min,"gas_e6s18975782161_7756751506_current_accumulative_consumption_kwh","gas_30min"),F=this.resolveEntity(e.octopus_gas_day,"gas_e6s18975782161_7756751506_current_accumulative_consumption_kwh","gas_day"),G=this.resolveEntity(e.octopus_gas_yesterday,"gas_e6s18975782161_7756751506_previous_accumulative_consumption_kwh","gas_yesterday"),P=this.resolveEntity(e.octopus_gas_yesterday_cost,"gas_e6s18975782161_7756751506_previous_accumulative_cost","gas_yesterday_cost"),X=e.octopus_gas_week?this.resolveEntity(e.octopus_gas_week):null,V=e.octopus_gas_month?this.resolveEntity(e.octopus_gas_month):null,z=!1,ie=!!(T&&this._hass?.states?.[T]),q=!!(A&&this._hass?.states?.[A]),Q=ie||q,ee=!!(ie&&_.is_heating||q&&E.is_heating||!Q&&(_.is_heating||E.is_heating));if(Q)if(e.boiler_status&&this._hass?.states?.[e.boiler_status]){let te=(this._hass.states[e.boiler_status].state||"").toLowerCase().trim();["standby","idle","off","ready","waiting","0","false"].includes(te)?z=!1:te==="hot water"||te==="hot_water"?z=!0:z=ee}else z=ee;else if(e.boiler_status&&this._hass?.states?.[e.boiler_status]){let $=this._hass.states[e.boiler_status],te=($.state||"").toLowerCase().trim(),le=$.attributes||{},K=["heating","heat","firing","on","central heating","hot water","active"],Z=["standby","idle","off","ready","waiting","0","false"];if(K.includes(te)||le.hvac_action==="heating"||le.is_heating===!0)z=!0;else if(Z.includes(te))z=!1;else{let he=parseFloat(te);z=isNaN(he)?!1:he>.05}}else z=!!(_.is_heating||E.is_heating);let J=z?"Heating":"Standby";this.energyData.octopus_gas={is_active:z,power_kw:z?1.45:0,boiler_status:J,reading_30min_kwh:this.getEnergyInKwh(N,this.energyData.octopus_gas.reading_30min_kwh),day_kwh:this.getEnergyInKwh(F,this.energyData.octopus_gas.day_kwh),today_spend_gbp:this.getEntityNumericValue(C,this.energyData.octopus_gas.today_spend_gbp||this.energyData.octopus_gas.monthly_spend_gbp),yesterday_kwh:G?this.getEnergyInKwh(G,this.energyData.octopus_gas.yesterday_kwh):null,yesterday_cost_gbp:P?this.getEntityNumericValue(P,this.energyData.octopus_gas.yesterday_cost_gbp):null,week_kwh:X?this.getEnergyInKwh(X,null):null,month_kwh:V?this.getEnergyInKwh(V,null):null,current_rate_p:this.getTariffRate(I,this.energyData.octopus_gas.current_rate_p),monthly_spend_gbp:this.getEntityNumericValue(C,this.energyData.octopus_gas.monthly_spend_gbp)};let _e=this.resolveEntity(e.myenergi_power,"myenergi_zappi_30084500_internal_load_ct1","power_ct_internal_load","zappi_power"),W=this.resolveEntity(e.myenergi_status,"myenergi_zappi_30084500_plug_status","zappi_plug_status","plug_status"),ae=this.resolveEntity(e.myenergi_energy,"myenergi_zappi_30084500_charge_added_session","charge_added_session"),Me=this.resolveEntity(e.peugeot_battery,"sensor.vr3ukzkxzmj557948_battery","vr3ukzkxzmj557948_battery","battery_level","e2008_battery"),Te=this.resolveEntity(e.peugeot_range,"sensor.vr3ukzkxzmj557948_autonomy","vr3ukzkxzmj557948_autonomy","autonomy","e2008_range"),fe=this.getPowerInKw(_e,this.energyData.ev.charger_power_kw),Pe=this.getEntityState(W,"").toLowerCase().trim(),ct=!1,Fe="Disconnected";Pe?Pe.includes("disconn")||Pe.includes("unplug")||Pe==="off"||Pe==="unavailable"||Pe==="unknown"?(ct=!1,Fe="Disconnected"):Pe.includes("charg")?(ct=!0,Fe="Charging"):Pe.includes("connect")||Pe.includes("wait")||Pe.includes("pause")||Pe.includes("plug")||Pe.includes("complete")||Pe.includes("stop")?(ct=!0,Fe="Connected (Idle)"):(ct=fe>.04,Fe=ct?Pe.charAt(0).toUpperCase()+Pe.slice(1):"Disconnected"):fe>.04?(ct=!0,Fe="Charging"):(ct=!1,Fe="Disconnected");let rt=ct&&fe>.04;rt&&(Fe=`Charging @ ${fe.toFixed(1)} kW`),this.energyData.ev={is_charging:rt,is_connected:ct,status_text:Fe,charger_power_kw:ct?fe:0,energy_added_kwh:this.getEnergyInKwh(ae,this.energyData.ev.energy_added_kwh),charger_mode:fe>3?"Fast":"Eco+",battery_soc_pct:this.getEntityNumericValue(Me,this.energyData.ev.battery_soc_pct),range_miles:this.getVehicleRange(Te,this.energyData.ev.range_miles)};let ht={};for(let $ of this.customLights){let te=e[`light_${$.id}`];if(te===void 0&&$.id==="master_bedroom"&&(te=e.light_master_bedroom||e.light_master),te===void 0&&$.id==="living_lamp"&&(te=e.light_living_lamp),!te&&$.entity_id&&(te=$.entity_id),!te&&this._hass?.states){let le=[`light.${$.id}`,`switch.${$.id}`,`light.${$.id.replace("_bedroom","")}`,`light.${$.id.replace("bedroom","bed_")}`];for(let K of le)if(this._hass.states[K]){te=K;break}}ht[$.id]=this.getLightState(te,this.energyData.room_lights?.[$.id])}this.energyData.room_lights=ht;let Ye=this.resolveEntity(e.sensor_fridge,"sensor.refrigerator_power","refrigerator_power","fridge_power"),nt=this.resolveEntity(e.sensor_washer,"sensor.kitchen_washing_machine_daily_energy","washing_machine_power","washer_power"),Se=this.resolveEntity(e.sensor_tv,"sensor.living_room_tv_plug_power","switch.living_room_tv_plug","sensor.tv_plug_power","switch.living_room_living_room_tv_plug","media_player.lg_webos_tv_oled55c43la_2","media_player.living_room_tv"),Ae="",ue="";Se.startsWith("sensor.")?(Ae=Se,ue=this.resolveEntity(e.switch_tv,"switch.living_room_tv_plug",Se.replace("sensor.","switch.").replace("_power",""))):Se.startsWith("switch.")?(ue=Se,Ae=this.resolveEntity("sensor.living_room_tv_plug_power",Se.replace("switch.","sensor.")+"_power")):(ue=Se,Ae=this.resolveEntity("sensor.living_room_tv_plug_power","sensor.tv_plug_power"));let Ee=Ye&&this._hass?this._hass.states[Ye]:null,Ne=(Ee?Ee.state:"").toLowerCase(),We=Ee&&(Ne==="unavailable"||Ne==="unknown"),St=0;We?St=0:St=this.getPowerInKw(Ye,this.energyData.appliances?.fridge?.power_kw??.048);let Nt=!We&&(St>.005||Ne==="on"),O=Ae&&this._hass?this._hass.states[Ae]:null,Mt=ue&&this._hass?this._hass.states[ue]:null,at=!1,ot=0,oe=0;if(O&&O.state!=="unavailable"&&O.state!=="unknown"){let $=(O.attributes?.unit_of_measurement||"W").trim(),te=parseFloat(O.state);isNaN(te)||($.toLowerCase()==="kw"?(ot=te,oe=Math.round(te*1e3)):(oe=Math.round(te),ot=te/1e3),at=oe>5||Mt&&Mt.state==="on")}else if(Mt&&Mt.state!=="unavailable"&&Mt.state!=="unknown"){let $=Mt.state.toLowerCase();at=$==="on"||$==="playing"||$==="paused",oe=at?37:1,ot=oe/1e3}else this.energyData.appliances?.tv&&(at=!!this.energyData.appliances.tv.is_on,ot=this.energyData.appliances.tv.power_kw,oe=this.energyData.appliances.tv.power_w||Math.round(ot*1e3));let _t=nt&&this._hass?this._hass.states[nt]:null,Ue=(_t?_t.state:"").toLowerCase(),Ge=_t&&(Ue==="unavailable"||Ue==="unknown"),R=0;Ge?R=0:R=this.getPowerInKw(nt,this.energyData.appliances?.washer?.power_kw??0);let b=!Ge&&(R>.01||Ue==="on"||Ue==="running"),U=e.light_living_lamp||this.customLights.find($=>$.id==="living_lamp"||$.name?.toLowerCase().includes("corner lamp"))?.entity_id,se=this.getLightState(U,this.energyData.appliances?.living_lamp);this.energyData.appliances={fridge:{entity_id:Ye||"",power_kw:St,power_w:We?0:Math.round(St*1e3),is_active:Nt,state:We?"Unavailable":Nt?"Running":"Standby",fridge_temp:this._hass?.states?.["sensor.refrigerator_fridge_temperature"]?.state,freezer_temp:this._hass?.states?.["sensor.refrigerator_freezer_temperature"]?.state},washer:{entity_id:nt||"",power_kw:R,power_w:Ge?0:Math.round(R*1e3),is_active:b,state:Ge?"Unavailable":b?"Running":"Standby"},tv:{entity_id:ue||Se||"switch.living_room_tv_plug",power_entity_id:Ae||"sensor.living_room_tv_plug_power",is_on:at,power_kw:ot,power_w:oe,state:at?"On":"Standby"},living_lamp:se},this.sceneManager&&(this.sceneManager.updateEnergyData(this.energyData),this.sceneManager.updateRoomLights(ht),this.sceneManager.updateAppliances(this.energyData.appliances)),this.hud&&this.hud.isDrawerOpen()&&this.hud.renderDrawerContent()}getThermostatState(e,t={}){let i={entity_id:e||t?.entity_id||"",current_temp:t?.current_temp??20,target_temp:t?.target_temp??21,hvac_action:t?.hvac_action||"idle",is_heating:t?.is_heating||!1,state:t?.state||"heat"};if(this._hass&&e&&this._hass.states?.[e]){let f=this._hass.states[e];if(f.state!=="unavailable"&&f.state!=="unknown"){i.state=f.state;let g=f.attributes||{};if(g.current_temperature!==void 0)i.current_temp=parseFloat(g.current_temperature);else{let x=parseFloat(f.state);isNaN(x)||(i.current_temp=x)}g.temperature!==void 0?i.target_temp=parseFloat(g.temperature):g.target_temp_high!==void 0&&(i.target_temp=parseFloat(g.target_temp_high)),g.hvac_action!==void 0&&(i.hvac_action=g.hvac_action)}}let n=this._pendingState?.thermostats?.[e];n&&(Date.now()>n.expiry?delete this._pendingState.thermostats[e]:(n.target_temp!==void 0&&(i.target_temp===n.target_temp?delete n.target_temp:i.target_temp=n.target_temp),n.hvac_mode!==void 0&&(i.state===n.hvac_mode?delete n.hvac_mode:i.state=n.hvac_mode)));let r=(i.state||"").toLowerCase().trim(),a=r==="off"||r==="standby"||r==="idle",o=!a&&(r==="heat"||r==="heating"||r==="auto"||r==="on"||r==="boost"||r==="comfort"||r===""),l=i.target_temp!==null&&!isNaN(i.target_temp),c=i.current_temp!==null&&!isNaN(i.current_temp),h=(i.hvac_action||"").toLowerCase().trim(),u=l&&c&&i.current_temp>=i.target_temp,d=!1;return!a&&o?l&&c?u?d=!1:d=h!=="idle"&&h!=="off":d=h==="heating"||r==="heating":d=!1,i.is_heating=d,i.hvac_action=d?"heating":a?"off":"idle",i.comfort=Wy(i.current_temp),i}getLightState(e,t={}){let i=(e||"").trim(),n=!!(t?.is_on||t?.state==="on"),r=t?.brightness!==void 0?t.brightness:n?255:0,a=t?.rgb_color||null,o={entity_id:i,is_on:n,brightness:r,rgb_color:a};if(i&&this._hass?.states?.[i]){let c=this._hass.states[i];if(c.state!=="unavailable"&&c.state!=="unknown"){o.is_on=c.state==="on";let h=c.attributes||{};o.brightness=h.brightness!==void 0?h.brightness:o.is_on?255:0,h.rgb_color&&Array.isArray(h.rgb_color)&&(o.rgb_color=h.rgb_color)}}let l=this._pendingState?.lights?.[i];return l&&(Date.now()>l.expiry?delete this._pendingState.lights[i]:this._hass?.states?.[i]&&this._hass.states[i].state==="on"===l.is_on?delete this._pendingState.lights[i]:(o.is_on=l.is_on,o.brightness=l.is_on?l.brightness||255:0)),o}toggleLightEntity(e){let t=e?e.trim():"";if(!t&&this._config&&(t=this._config.light_living_lamp||""),!t)return;let i=Ei.find(l=>l.id===t||l.entity_id===t);i&&!this._hass?.states?.[t]&&i.entity_id&&(t=i.entity_id);let r=!this.getLightState(t,this.energyData.room_lights?.[t]).is_on;if(this._pendingState.lights||(this._pendingState.lights={}),this._pendingState.lights[t]={is_on:r,brightness:r?255:0,expiry:Date.now()+4500},this.energyData.room_lights)for(let l of Object.keys(this.energyData.room_lights))(this.energyData.room_lights[l].entity_id===t||l===t)&&(this.energyData.room_lights[l].is_on=r,this.energyData.room_lights[l].brightness=r?255:0);this.energyData.appliances&&(this.energyData.appliances.living_lamp?.entity_id===t&&(this.energyData.appliances.living_lamp.is_on=r,this.energyData.appliances.living_lamp.brightness=r?255:0),(this.energyData.appliances.tv?.entity_id===t||this.energyData.appliances.tv?.power_entity_id===t)&&(this.energyData.appliances.tv.is_on=r,this.energyData.appliances.tv.state=r?"On":"Standby")),this.sceneManager&&(this.sceneManager.updateRoomLights(this.energyData.room_lights),this.sceneManager.updateAppliances(this.energyData.appliances)),this.hud&&this.hud.renderDrawerContent();let a=t;a.startsWith("sensor.")&&(a.includes("tv_plug")||a.includes("tv"))&&(a=this.energyData.appliances?.tv?.entity_id||"switch.living_room_tv_plug");let o=a.startsWith("switch.")?"switch":a.startsWith("light.")?"light":"homeassistant";this.callHAService(o,"toggle",{entity_id:a})}wakeupVehicle(){let e=this._config||{},t=this.resolveEntity(e.peugeot_wakeup,"button.vr3ukzkxzmj557948_wakeup","button.vr3ukzkxzmj557948_wakeup_vehicle","button.peugeot_wakeup","button.car_wakeup");t&&this.callHAService("button","press",{entity_id:t})}setThermostatTemperature(e,t){let i=e?e.trim():"";if(!i||i==="climate.downstairs"||i.includes("downstairs")&&!this._hass?.states?.[i]?i=this.resolveEntity(this._config?.thermostat_downstairs,"climate.tado_x_downstairs","climate.downstairs"):(i==="climate.upstairs"||i.includes("upstairs")&&!this._hass?.states?.[i])&&(i=this.resolveEntity(this._config?.thermostat_upstairs,"climate.smart_thermostat_x","climate.upstairs")),!i)return;let n=Math.round(Number(t)*2)/2;if(isNaN(n))return;if(this._pendingState.thermostats||(this._pendingState.thermostats={}),this._pendingState.thermostats[i]||(this._pendingState.thermostats[i]={}),this._pendingState.thermostats[i].target_temp=n,this._pendingState.thermostats[i].expiry=Date.now()+5e3,this.energyData.thermostats)for(let l of["downstairs","upstairs"]){let c=this.energyData.thermostats[l];if(c&&(c.entity_id===i||!c.entity_id&&(l==="downstairs"?i.includes("downstairs"):i.includes("smart_thermostat_x")))){c.target_temp=n;let h=(c.state||"").toLowerCase()==="off";c.is_heating=!h&&c.current_temp<n}}let r=this.energyData.thermostats?.downstairs,a=this.energyData.thermostats?.upstairs,o=!!(r&&r.is_heating||a&&a.is_heating);this.energyData.octopus_gas&&(this.energyData.octopus_gas.is_active=o,this.energyData.octopus_gas.boiler_status=o?"Heating":"Standby"),this.sceneManager&&this.sceneManager.updateEnergyData(this.energyData),this.hud&&this.hud.renderDrawerContent(),this._thermoDebounceTimers[i]&&clearTimeout(this._thermoDebounceTimers[i]),this._thermoDebounceTimers[i]=setTimeout(()=>{delete this._thermoDebounceTimers[i];let l=(this.energyData.thermostats?.downstairs?.entity_id===i?this.energyData.thermostats?.downstairs?.state:this.energyData.thermostats?.upstairs?.state)||"",c={entity_id:i,temperature:n};l.toLowerCase()==="off"&&(c.hvac_mode="heat"),this.callHAService("climate","set_temperature",c)},250)}setThermostatHvacMode(e,t){let i=e?e.trim():"";if(!i||i==="climate.downstairs"||i.includes("downstairs")&&!this._hass?.states?.[i]?i=this.resolveEntity(this._config?.thermostat_downstairs,"climate.tado_x_downstairs","climate.downstairs"):(i==="climate.upstairs"||i.includes("upstairs")&&!this._hass?.states?.[i])&&(i=this.resolveEntity(this._config?.thermostat_upstairs,"climate.smart_thermostat_x","climate.upstairs")),!i)return;if(this._pendingState.thermostats||(this._pendingState.thermostats={}),this._pendingState.thermostats[i]||(this._pendingState.thermostats[i]={}),this._pendingState.thermostats[i].hvac_mode=t,this._pendingState.thermostats[i].expiry=Date.now()+5e3,this.energyData.thermostats)for(let o of["downstairs","upstairs"]){let l=this.energyData.thermostats[o];if(l&&(l.entity_id===i||!l.entity_id&&(o==="downstairs"?i.includes("downstairs"):i.includes("smart_thermostat_x")))){l.state=t;let c=t==="off";l.is_heating=!c&&l.current_temp<l.target_temp}}let n=this.energyData.thermostats?.downstairs,r=this.energyData.thermostats?.upstairs,a=!!(n&&n.is_heating||r&&r.is_heating);this.energyData.octopus_gas&&(this.energyData.octopus_gas.is_active=a,this.energyData.octopus_gas.boiler_status=a?"Heating":"Standby"),this.sceneManager&&this.sceneManager.updateEnergyData(this.energyData),this.hud&&this.hud.renderDrawerContent(),this.callHAService("climate","set_hvac_mode",{entity_id:i,hvac_mode:t})}async callHAService(e,t,i={}){if(console.log(`[HA-3D] Calling service: ${e}.${t}`,i),this._hass&&typeof this._hass.callService=="function")try{return await this._hass.callService(e,t,i),console.log(`[HA-3D] Service ${e}.${t} succeeded via hass.callService`),!0}catch(n){console.warn(`[HA-3D] hass.callService(${e}, ${t}) error:`,n)}try{this.dispatchEvent(new CustomEvent("hass-call-service",{detail:{domain:e,service:t,serviceData:i},bubbles:!0,composed:!0}))}catch{}try{if((await fetch("api/ha-service",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({domain:e,service:t,serviceData:i})})).ok)return console.log(`[HA-3D] Service ${e}.${t} succeeded via /api/ha-service proxy`),!0}catch{}return!1}getCardSize(){return 8}};customElements.define("ha-energy-3d-card",kh);window.customCards=window.customCards||[];window.customCards.push({type:"ha-energy-3d-card",name:"Home Energy 3D Card",description:"Interactive 3D Energy Flow Card for Solax Solar, Octopus Energy, myenergi Zappi, and Peugeot EV",preview:!0});export{kh as HaEnergy3DCard,Gy as autoFigureKw,Vy as autoFigureKwh,Wy as getComfortStatus};
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
