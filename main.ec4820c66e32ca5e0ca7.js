webpackJsonp([0],{17:function(t,e,n){"use strict";var i=n(493);n.d(e,"j",function(){return i.a}),n.d(e,"k",function(){return i.b}),n.d(e,"l",function(){return i.c});var r=n(494);n.d(e,"d",function(){return r.a});var s=n(495);n.d(e,"e",function(){return s.a});var a=n(496);n.d(e,"a",function(){return a.a});var o=n(497);n.d(e,"f",function(){return o.a}),n.d(e,"g",function(){return o.b}),n.d(e,"h",function(){return o.c}),n.d(e,"i",function(){return o.d});var c=n(498);n.d(e,"b",function(){return c.a});var u=n(499);n.d(e,"c",function(){return u.a})},21:function(t,e,n){"use strict";var i=n(500);n.d(e,"n",function(){return i.a});var r=n(501);n.d(e,"b",function(){return r.a}),n.d(e,"g",function(){return r.b}),n.d(e,"k",function(){return r.c}),n.d(e,"o",function(){return r.d}),n.d(e,"t",function(){return r.e}),n.d(e,"y",function(){return r.f}),n.d(e,"B",function(){return r.g});var s=n(502);n.d(e,"e",function(){return s.a}),n.d(e,"f",function(){return s.b}),n.d(e,"i",function(){return s.c}),n.d(e,"j",function(){return s.d}),n.d(e,"p",function(){return s.e}),n.d(e,"u",function(){return s.f}),n.d(e,"w",function(){return s.g}),n.d(e,"x",function(){return s.h});var a=n(503);n.d(e,"q",function(){return a.a}),n.d(e,"C",function(){return a.b});var o=n(504);n.d(e,"l",function(){return o.a}),n.d(e,"m",function(){return o.b}),n.d(e,"z",function(){return o.c}),n.d(e,"A",function(){return o.d});var c=n(505);n.d(e,"r",function(){return c.a}),n.d(e,"s",function(){return c.b});var u=n(506);n.d(e,"a",function(){return u.a}),n.d(e,"c",function(){return u.b});var d=n(507);n.d(e,"d",function(){return d.a}),n.d(e,"h",function(){return d.b}),n.d(e,"v",function(){return d.c})},231:function(t,e,n){"use strict";e.a=function(t){const e=Object(i.createStore)(Object(i.combineReducers)({servers:u.f,agencies:u.a,transports:u.g,userPosition:u.h,drawers:u.b,radius:u.e,itineraries:u.c,linesRoutes:u.d}),t,Object(o.composeWithDevTools)(Object(c.a)(),Object(i.applyMiddleware)(s.a,Object(a.createLogger)())));return Object(c.b)(e,{whitelist:["agencies","linesRoutes","radius"]}),e};var i=n(126),r=n(482),s=n.n(r),a=n(483),o=(n.n(a),n(484)),c=(n.n(o),n(485)),u=n(491)},276:function(t,e,n){"use strict";var i=n(1),r=(n.n(i),n(704)),s=n.n(r),a=n(37),o=(n.n(a),n(705)),c=n(707);n.n(c);class u extends i.Component{constructor(t){super(t),this.state={isOpen:!1},this.handleClick=this.handleClick.bind(this)}handleClick(){this.setState(t=>({isOpen:!t.isOpen}))}render(){const{agency:t,transport:e,userPosition:n,onDirectionRequest:r}=this.props,c=`transport-container ${this.state.isOpen?"transport-container-open":""}`,u=e.iconURL||t.types[e.type].icon;return i.createElement("div",{className:c,onClick:this.handleClick},i.createElement("div",{className:"transport-header"},i.createElement("span",{className:"transport-icon",style:{backgroundImage:`url(${u})`}}),i.createElement("span",{className:"transport-name"},Object(o.a)(e.name)),i.createElement("span",{className:"transport-distance",style:{color:a.grey500},onClick:()=>r(e.id)},e.position.distanceFrom(n)," m",i.createElement(s.a,{style:{width:16,height:16,marginLeft:5},color:a.grey500}))),e.informations&&e.informations.map(t=>i.createElement("div",{className:"transport-informations-container",key:t.title},i.createElement("div",{className:"transport-informations-title"},t.title),i.createElement("div",{className:"transport-informations-times-container"},t.content.filter((t,e)=>this.state.isOpen||e<1).map((e,n)=>i.createElement("div",{className:`\n\t\t\t\t\t\t\t\t\t\t\ttransport-informations-time\n\t\t\t\t\t\t\t\t\t\t\t${t.timestamp?"transport-informations-real-time":""}\n\t\t\t\t\t\t\t\t\t\t\t${t.warn?"transport-informations-warning":""}\n\t\t\t\t\t\t\t\t\t\t`,key:n},e))))))}}e.a=u},279:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=(n.n(i),n(30)),s=(n.n(r),n(203)),a=n(212),o=n.n(a),c=n(226),u=n.n(c),d=n(223),l=n.n(d),p=n(37),f=(n.n(p),n(473)),m=(n.n(f),n(479)),h=(n.n(m),n(231)),g=n(516);f();const y=Object(h.a)(),v=Object.assign({},u.a,{palette:Object.assign({},u.a.palette,{primary1Color:p.blueA700,accent1Color:p.pink500})});r.render(i.createElement(s.a,{store:y},i.createElement(o.a,{muiTheme:l()(v)},i.createElement(g.a,null))),document.getElementById("root"))},479:function(t,e,n){var i=n(480);"string"==typeof i&&(i=[[t.i,i,""]]);var r={};r.transform=void 0;n(97)(i,r);i.locals&&(t.exports=i.locals)},491:function(t,e,n){"use strict";n(231);var i=n(492);n.d(e,"f",function(){return i.a});var r=n(509);n.d(e,"a",function(){return r.a});var s=n(510);n.d(e,"g",function(){return s.a});var a=n(511);n.d(e,"h",function(){return a.a});var o=n(512);n.d(e,"e",function(){return o.a});var c=n(513);n.d(e,"b",function(){return c.a});var u=n(514);n.d(e,"c",function(){return u.a});var d=n(515);n.d(e,"d",function(){return d.a})},492:function(t,e,n){"use strict";e.a=function(t=o,e){switch(e.type){case r.n:return Object.assign({},t,{activated:Object(i.l)(t.activated,e.serverID)});default:return t}};var i=n(17),r=n(21),s=n(508),a=n.n(s);const o={items:Object(i.k)(a.a.map(t=>new i.e(t))),activated:[]}},493:function(t,e,n){"use strict";e.a=function(t,e){return Object.keys(t).forEach(n=>t[n]=e(t[n])),t},e.b=function(t){return t.reduce((t,e)=>(t[e.id]=e,t),{})},e.c=function(t,e){const n=t.indexOf(e);return-1==n?[...t.slice(),e]:[...t.slice(0,n),...t.slice(n+1)]}},494:function(t,e,n){"use strict";class i{constructor(t){t=t||{latitude:0,longitude:0},this.map(t)}map(t){this.latitude=t.latitude,this.longitude=t.longitude,this.heading=t.heading}distanceFrom(t){const e=(this.latitude-t.latitude)*Math.PI/180,n=(this.longitude-t.longitude)*Math.PI/180,i=Math.sin(e/2),r=Math.sin(n/2),s=i*i+Math.cos(this.latitude*Math.PI/180)*Math.cos(t.latitude*Math.PI/180)*(r*r);return Math.round(12742e3*Math.atan2(Math.sqrt(s),Math.sqrt(1-s)))}isEqual(t){return this.latitude==t.latitude&&this.longitude==t.longitude}}e.a=i},495:function(t,e,n){"use strict";var i=n(17);class r{constructor(t){this.id=t.id,this.url=t.url,this.center=new i.d(t.center),this.radius=t.radius}}e.a=r},496:function(t,e,n){"use strict";var i=n(17);class r{constructor(t,e){this.id=t.id,this.serverID=e,this.url=t.url,this.git=t.git,this.name=t.name,this.center=new i.d(t.center),this.radius=t.radius,this.types=t.types}}e.a=r},497:function(t,e,n){"use strict";n.d(e,"b",function(){return s});var i=n(17);class r{constructor(t){this.id=t.id,this.agencyID=t.agencyID,this.name=t.name,this.type=t.type,this.position=new i.d(t.position),this.iconURL=t.iconURL,this.line=t.line,this.informations=t.informations}}e.a=r;var s;!function(t){t[t.Tram=0]="Tram",t[t.Metro=1]="Metro",t[t.Rail=2]="Rail",t[t.Bus=3]="Bus",t[t.Ferry=4]="Ferry",t[t.Cable=5]="Cable",t[t.Gondola=6]="Gondola",t[t.Funicular=7]="Funicular",t[t.Bike=8]="Bike",t[t.Car=9]="Car",t[t.Unknown=10]="Unknown"}(s||(s={}));const a={[s.Tram]:"Tram",[s.Metro]:"Metro",[s.Rail]:"Rail",[s.Bus]:"Bus",[s.Ferry]:"Ferry",[s.Cable]:"Cable",[s.Gondola]:"Gondola",[s.Funicular]:"Funicular",[s.Bike]:"Bike",[s.Car]:"Car",[s.Unknown]:"Unknown"};e.c=a;class o{constructor(t,e){this.agency=t,this.transports=[],void 0!=e&&this.addTransport(e)}addTransport(t){if(0!=t.length){this.transports=this.transports.concat(t),void 0==this.position&&(this.position=t[0].position),void 0==this.type&&(this.type=t[0].type);for(let e of t){if(!e.position.isEqual(this.position))throw"Transport and cluster position are different";if(e.type!=this.type)throw"Transport and cluster type are different"}}}}e.d=o},498:function(t,e,n){"use strict";var i=n(17);class r{constructor(t,e,n){this.from=t,this.to=e,this.distance=n.distance,this.duration=n.duration,this.points=n.geometry.coordinates.map(t=>new i.d({latitude:t[1],longitude:t[0]})),this.points.unshift(t)}}e.a=r},499:function(t,e,n){"use strict";class i{constructor(t){this.id=t.id,this.color=t.color,this.points=t.points}}e.a=i},500:function(t,e,n){"use strict";const i="TOGGLE_SERVER";e.a=i},501:function(t,e,n){"use strict";function i(){return{type:c}}function r(t,e){return{type:u,date:new Date,agencies:t,userPosition:e}}e.e=function(){return(t,e)=>o(this,void 0,void 0,function*(){const{userPosition:n,radius:c,servers:u}=e();Object.keys(u.items).map(t=>u.items[t]).filter(t=>-1===t.radius||t.center.distanceFrom(n)<=t.radius).map(t=>t).map(e=>new Promise(()=>o(this,void 0,void 0,function*(){t(i());const o=(yield(yield fetch(`${e.url}/agencies?latitude=${n.latitude}&longitude=${n.longitude}&radius=${c}`)).json()).map(t=>new s.a(t,e.id));t(r(o,n)),t(Object(a.w)())})))})},e.f=function(t){return(e,n)=>o(this,void 0,void 0,function*(){e({type:d,agencyID:t}),e(Object(a.w)())})},e.g=function(t,e){return(n,i)=>o(this,void 0,void 0,function*(){n({type:l,agencyID:t,typeID:e}),n(Object(a.w)())})};var s=n(17),a=n(21),o=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(r,s){function a(t){try{c(i.next(t))}catch(t){s(t)}}function o(t){try{c(i.throw(t))}catch(t){s(t)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(a,o)}c((i=i.apply(t,e||[])).next())})};const c="REQUEST_AGENCIES";e.b=c;const u="RECEIVE_AGENCIES";e.a=u;const d="TOGGLE_AGENCY";e.c=d;const l="TOGGLE_TYPE";e.d=l},502:function(t,e,n){"use strict";function i(){return{type:u}}function r(t,e){return{type:d,payload:{transports:t},meta:{date:new Date,userPosition:e}}}function s(){return(t,e)=>c(this,void 0,void 0,function*(){const{agencies:n,userPosition:i,radius:r}=e();t({type:"REDRAW_TRANSPORTS",meta:{agencies:n,userPosition:i,radius:r}})})}e.f=function(){return(t,e)=>c(this,void 0,void 0,function*(){const{userPosition:n,servers:u}=e();Object.keys(u.items).map(t=>u.items[t]).filter(t=>-1===t.radius||t.center.distanceFrom(n)<=t.radius).map(u=>new Promise(()=>c(this,void 0,void 0,function*(){t(i());const c=(yield(yield fetch(`${u.url}/transports?latitude=${n.latitude}&longitude=${n.longitude}&radius=${e().radius}`)).json()).map(t=>new a.f(t));t(r(c,n)),t(s());const d=e().transports;d.visible.map(t=>d.items[t]).filter(t=>t.type===a.g.Tram||t.type===a.g.Metro||t.type===a.g.Bus||t.type===a.g.Rail).forEach(e=>t(Object(o.v)(e)))})))})},e.h=function(t){return(e,n)=>{n().drawers.mapIsOpen||e(Object(o.z)());const{transports:i,userPosition:r}=n(),s=i.items[t];e({type:l,payload:{transport:s}})}},e.g=s;var a=n(17),o=n(21),c=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(r,s){function a(t){try{c(i.next(t))}catch(t){s(t)}}function o(t){try{c(i.throw(t))}catch(t){s(t)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(a,o)}c((i=i.apply(t,e||[])).next())})};const u="REQUEST_TRANSPORTS";e.c=u;const d="RECEIVE_TRANSPORTS";e.a=d;const l="SELECT_TRANSPORT";e.d=l;const p="UNSELECT_TRANSPORT";e.e=p;e.b="REDRAW_TRANSPORTS"},503:function(t,e,n){"use strict";function i(t){return{type:a,position:t}}e.b=function(){return(t,e)=>{navigator.geolocation.watchPosition(n=>{const{userPosition:a,agencies:o,transports:c}=e(),u=new r.d(n.coords);u.isEqual(a)||(t(i(u)),t(Object(s.w)()),u.distanceFrom(o.lastUpdated.position)>5e3&&t(Object(s.t)()),(u.distanceFrom(c.lastUpdated.position)>50||c.lastUpdated.date.getTime()-Date.now()>12e4)&&t(Object(s.u)()))},t=>console.error(t)),window.ondeviceorientation=function({absolute:n,alpha:a}){if(n){const{userPosition:n}=e();t(i(new r.d(Object.assign({},n,{heading:a})))),t(Object(s.w)())}}}};var r=n(17),s=n(21);const a="UPDATE_POSITION";e.a=a},504:function(t,e,n){"use strict";e.d=function(){return{type:i}},e.c=function(){return{type:r}};const i="TOGGLE_MENU";e.b=i;const r="TOGGLE_MAP";e.a=r},505:function(t,e,n){"use strict";function i(t){return{type:s,radius:t}}e.b=function(t){return(e,n)=>{const{radius:s}=n();e(i(t)),e(Object(r.w)()),t>s&&e(Object(r.u)())}};var r=n(21);const s="UPDATE_RADIUS";e.a=s},506:function(t,e,n){"use strict";n(17),this&&this.__awaiter;const i="RECEIVE_ITINERARY";e.b=i;const r="DISPLAY_ITINERARY";e.a=r},507:function(t,e,n){"use strict";function i(t){return{type:c,lineRoute:t}}function r(t){return{type:o,lineID:t}}e.c=function(t){return(e,n)=>a(this,void 0,void 0,function*(){const{linesRoutes:a,agencies:o,servers:c}=n();if(void 0!==a.items[t.line])return;e(r(t.line));const u=o.items[t.agencyID],d=c.items[u.serverID];try{const n=yield(yield fetch(`${d.url}/transports/${t.id}/route`)).json();e(i(new s.c(n)))}catch(t){e(i(void 0))}})};var s=n(17),a=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(r,s){function a(t){try{c(i.next(t))}catch(t){s(t)}}function o(t){try{c(i.throw(t))}catch(t){s(t)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(a,o)}c((i=i.apply(t,e||[])).next())})};const o="REQUEST_LINE_ROUTE";e.b=o;const c="RECEIVE_LINE_ROUTE";e.a=c},508:function(t,e){t.exports=[{id:"France.Paris.RATP",url:"https://artonge.duckdns.org/opentransports-paris",git:"https://github.com/OpenTransports/Paris",radius:2e4,center:{latitude:48.856,longitude:2.35}},{id:"WorldWide.Bikes",url:"https://artonge.duckdns.org/opentransports-bikes",git:"https://github.com/OpenTransports/Bikes",radius:-1,center:{latitude:0,longitude:0}},{id:"Finlande.Helsinki.HSL",git:"https://github.com/OpenTransports/Helsinki@",url:"https://artonge.duckdns.org/opentransports-bikes",radius:5e4,center:{latitude:60.170833,longitude:24.9375}}]},509:function(t,e,n){"use strict";e.a=function(t=a,e){switch(e.type){case s.g:return Object.assign({},t,{fetching:t.fetching+1});case s.b:return Object.assign({},t,{items:Object.assign({},t.items,Object(r.k)(e.agencies)),activated:e.agencies.filter(e=>void 0==t.items[e.id]).map(t=>t.id).concat(t.activated),activatedTypes:e.agencies.filter(e=>void 0==t.items[e.id]).map(t=>Object.keys(t.types).map(e=>t.id+e)).reduce((t,e)=>t.concat(e),t.activatedTypes),lastUpdated:{date:e.date,position:e.userPosition},fetching:t.fetching-1});case s.k:return Object.assign({},t,{activated:Object(r.l)(t.activated,e.agencyID)});case s.o:return Object.assign({},t,{activatedTypes:Object(r.l)(t.activatedTypes,e.agencyID+String(e.typeID))});case i.b:return void 0===e.payload.agencies?t:Object.assign({},t,e.payload.agencies,{items:Object.assign({},Object(r.j)(e.payload.agencies.items,t=>new r.a(t,t.serverID))),activated:e.payload.agencies.activated.concat(t.activated),activatedTypes:e.payload.agencies.activatedTypes.concat(t.activatedTypes)});default:return t}};var i=n(38),r=n(17),s=n(21);const a={items:{},activated:[],activatedTypes:[],fetching:0,lastUpdated:{date:null,position:new r.d}}},510:function(t,e,n){"use strict";function i(t,e,n,i){return Object.keys(t).map(e=>t[e]).filter(t=>t.position.distanceFrom(n)<=i).filter(t=>-1!=e.activated.indexOf(t.agencyID)).filter(t=>-1!=e.activatedTypes.indexOf(t.agencyID+String(t.type))).filter(t=>t.informations&&t.informations.length>0).sort((t,e)=>t.position.distanceFrom(n)-e.position.distanceFrom(n)).reduce((t,e)=>{if(e.type===r.g.Bike||e.type===r.g.Car)return t.push(e),t;const n=t.filter(t=>e.line===t.line).reduce((t,e)=>t.concat(e.informations),[]);return e.informations.filter(t=>void 0==n.find(e=>t.title==e.title)).length>0&&t.push(e),t},[]).map(t=>t.id)}e.a=function(t=a,e){switch(e.type){case s.i:return Object.assign({},t,{fetching:t.fetching+1});case s.e:return Object.assign({},t,{items:Object.assign({},t.items,Object(r.k)(e.payload.transports)),fetching:t.fetching-1,lastUpdated:{date:e.meta.date,position:e.meta.userPosition}});case s.j:return Object.assign({},t,{selected:e.payload.transport});case s.p:return Object.assign({},t,{selected:null});case s.f:return Object.assign({},t,{visible:i(t.items,e.meta.agencies,e.meta.userPosition,e.meta.radius)});default:return t}};var r=n(17),s=n(21);const a={items:{},selected:null,visible:[],fetching:0,lastUpdated:{date:null,position:new r.d}}},511:function(t,e,n){"use strict";e.a=function(t=s,e){switch(e.type){case r.q:return e.position;default:return t}};var i=n(17),r=n(21);const s=new i.d},512:function(t,e,n){"use strict";e.a=function(t=s,e){switch(e.type){case r.r:return e.radius;case i.b:return void 0===e.payload.agencies?t:e.payload.radius;default:return t}};var i=n(38),r=n(21);const s=500},513:function(t,e,n){"use strict";e.a=function(t=r,e){switch(e.type){case i.m:return Object.assign({},t,{menuIsOpen:!t.menuIsOpen});case i.l:return Object.assign({},t,{mapIsOpen:!t.mapIsOpen});default:return t}};var i=n(21);const r={menuIsOpen:!1,mapIsOpen:!1}},514:function(t,e,n){"use strict";e.a=function(t=r,e){switch(e.type){case i.c:const n=`${e.itinerary.from.latitude}${e.itinerary.from.longitude}${e.itinerary.to.latitude}${e.itinerary.to.longitude}`;return Object.assign({},t,{items:Object.assign({},t.items,{[n]:e.itinerary})});case i.a:return Object.assign({},t,{display:e.hash});default:return t}};var i=n(21);const r={display:null,items:{}}},515:function(t,e,n){"use strict";e.a=function(t=a,e){switch(e.type){case s.d:return void 0==e.lineRoute?t:Object.assign({},t,{fetching:t.fetching-1,items:Object.assign({},t.items,{[e.lineRoute.id]:e.lineRoute})});case s.h:return Object.assign({},t,{fetching:t.fetching+1});case i.b:return void 0===e.payload.linesRoutes?t:Object.assign({},t,e.payload.linesRoutes,{items:Object.assign({},Object(r.j)(e.payload.linesRoutes.items,t=>new r.c(t)))});default:return t}};var i=n(38),r=n(17),s=n(21);const a={items:{},fetching:0}},516:function(t,e,n){"use strict";var i=n(1),r=(n.n(i),n(203)),s=n(517),a=n(21);class o extends i.Component{constructor(t){super(t)}componentDidMount(){this.props.dispatch(Object(a.C)())}render(){const{dispatch:t,agencies:e,transports:n,itineraries:r,userPosition:o,radius:c,drawers:u,linesRoutes:d}=this.props,l=n.visible.map(t=>n.items[t]);return i.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100%"}},i.createElement(s.a,{fetching:e.fetching+n.fetching,toggleMenu:()=>this.props.dispatch(Object(a.A)()),toggleMap:()=>this.props.dispatch(Object(a.z)()),refresh:()=>{this.props.dispatch(Object(a.t)()),this.props.dispatch(Object(a.u)())}}),i.createElement(s.c,{agencies:e,visibleTransports:l,radius:c,lock:u.mapIsOpen,isOpen:u.menuIsOpen,toggleOpen:()=>t(Object(a.A)()),onRadiusChange:e=>t(Object(a.s)(e)),onAgencyToggle:e=>t(Object(a.y)(e)),onTypeToggle:(e,n)=>t(Object(a.B)(e,n))}),i.createElement(s.b,{transports:l,agencies:e.items,linesRoutes:d.items,selectedTransport:n.selected,itinerary:r.items[r.display],userPosition:o,mapIsOpen:u.mapIsOpen,toggleOpen:()=>t(Object(a.z)()),onDirectionRequest:e=>t(Object(a.x)(e))}),0!==o.latitude&&0!==o.longitude&&i.createElement(s.d,{agencies:e.items,transports:l,userPosition:o,onDirectionRequest:e=>t(Object(a.x)(e))}))}}e.a=Object(r.b)(function(t){return t})(o)},517:function(t,e,n){"use strict";var i=n(518);n.d(e,"a",function(){return i.a});var r=n(551);n.d(e,"b",function(){return r.a});var s=n(712);n.d(e,"c",function(){return s.a});var a=n(726);n.d(e,"d",function(){return a.a})},518:function(t,e,n){"use strict";e.a=function(t){return i.createElement("header",null,i.createElement(s.a,{style:{flexShrink:0},title:"OpenTransport",iconElementRight:i.createElement("div",null,i.createElement(o.a,{iconStyle:{color:"white"},onTouchTap:t.refresh},i.createElement(u.a,null)),i.createElement(o.a,{iconStyle:{color:"white"},onTouchTap:t.toggleMap},i.createElement(f.a,null))),onLeftIconButtonTouchTap:t.toggleMenu}),t.fetching>0&&i.createElement(l.a,{color:m.greenA700,style:{flexShrink:0}}))};var i=n(1),r=(n.n(i),n(519)),s=n.n(r),a=n(148),o=n.n(a),c=n(547),u=n.n(c),d=n(548),l=n.n(d),p=n(550),f=n.n(p),m=n(37);n.n(m)},551:function(t,e,n){"use strict";e.a=function(t){const{agencies:e,transports:n,selectedTransport:r,itinerary:c,linesRoutes:u,onDirectionRequest:d,userPosition:l,mapIsOpen:p,toggleOpen:f}=t,m=n.reduce((t,n)=>{for(let e of t)if(n.position.isEqual(e.position))return e.addTransport([n]),t;return t.push(new a.i(e[n.agencyID],[n])),t},[]);return i.createElement(s.a,{open:p,openSecondary:!0,docked:!p,overlayStyle:{opacity:1,backgroundColor:"white"},width:"95%",onRequestChange:f},p&&i.createElement(o.a,{clusters:m,linesRoutes:u,userPosition:l,itinerary:c,selectedTransport:r,onDirectionRequest:d}))};var i=n(1),r=(n.n(i),n(243)),s=n.n(r),a=n(17),o=n(557)},557:function(t,e,n){"use strict";var i=n(1),r=(n.n(i),n(102)),s=(n.n(r),n(696)),a=n.n(s),o=n(698),c=(n.n(o),n(703)),u=n(709),d=n(710);n.n(d);class l extends i.Component{constructor(t){super(t),this.state={viewport:{center:[this.props.userPosition.latitude,this.props.userPosition.longitude],zoom:15}}}render(){const{clusters:t,linesRoutes:e,userPosition:n,itinerary:s,selectedTransport:o,onDirectionRequest:d}=this.props;return i.createElement(r.Map,{center:{lat:n.latitude,lng:n.longitude},zoom:15,maxZoom:18,bounceAtZoomLimits:!0,style:{height:"100%"}},i.createElement(r.TileLayer,{url:"https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png",attribution:'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> — Map data © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}),i.createElement(u.a,{position:n}),t.map(t=>i.createElement(c.a,{key:t.transports[0].id,cluster:t,userPosition:n,onDirectionRequest:d})),t.reduce((t,e)=>t.concat(e.transports),[]).map(t=>{void 0!==e[t.line]&&i.createElement(a.a,{key:t.line,positions:e[t.line].points.map(t=>({lat:t.latitude,lng:t.longitude}))})}),o&&s&&i.createElement(a.a,{positions:s.points.map(t=>({lat:t.latitude,lng:t.longitude}))}))}}e.a=l},703:function(t,e,n){"use strict";var i=n(1),r=(n.n(i),n(102)),s=(n.n(r),n(11)),a=(n.n(s),n(276)),o=n(212),c=n.n(o);class u extends r.MapComponent{constructor(t){super(t)}render(){const{userPosition:t,cluster:e,onDirectionRequest:n}=this.props,o=e.agency.types[e.type].icon,u=e.transports[0].iconURL||o;var d=e.transports.length>1?o:u;return i.createElement(r.Marker,{position:{lat:e.position.latitude,lng:e.position.longitude},alt:e.agency.types[e.type].name,icon:s.icon({iconUrl:d,iconSize:[30,30],className:"map-transport-marker-icon"})},i.createElement(r.Popup,{maxWidth:250,maxHeight:400,offset:[0,-10],className:"map-transport-marker-popup"},i.createElement(c.a,null,i.createElement("div",null,e.transports.map(r=>i.createElement(a.a,{key:r.id,transport:r,agency:e.agency,userPosition:t,onDirectionRequest:n}))))))}}e.a=u},705:function(t,e,n){"use strict";var i=n(706);n.d(e,"a",function(){return i.a})},706:function(t,e,n){"use strict";e.a=function(t){for(var e="",n=0,i=(t=t.toLowerCase()).length,r=!0;n<i;)e+=r?t[n].toUpperCase():t[n],r=" "==t[n],n++;return e}},707:function(t,e,n){var i=n(708);"string"==typeof i&&(i=[[t.i,i,""]]);var r={};r.transform=void 0;n(97)(i,r);i.locals&&(t.exports=i.locals)},709:function(t,e,n){"use strict";e.a=function({position:t}){return i.createElement(r.Marker,{icon:s.divIcon({html:t.heading?`<div class='map-user-position-marker-icon map-user-position-heading-marker-icon' style='transform: rotate(${t.heading}deg);'></div>`:`<div class='map-user-position-marker-icon'></div>`}),position:{lat:t.latitude,lng:t.longitude}})};var i=n(1),r=(n.n(i),n(102)),s=(n.n(r),n(11));n.n(s)},710:function(t,e,n){var i=n(711);"string"==typeof i&&(i=[[t.i,i,""]]);var r={};r.transform=void 0;n(97)(i,r);i.locals&&(t.exports=i.locals)},712:function(t,e,n){"use strict";var i=n(1),r=(n.n(i),n(277)),s=(n.n(r),n(243)),a=n.n(s),o=n(720),c=n.n(o),u=n(723),d=n.n(u),l=n(37),p=(n.n(l),n(17));class f extends i.Component{constructor(t){super(t),this.state={radius:this.props.radius}}render(){const{agencies:t,visibleTransports:e,onAgencyToggle:n,onTypeToggle:s,radius:o,onRadiusChange:u,isOpen:f,lock:m,toggleOpen:h}=this.props;return i.createElement(a.a,{containerStyle:{display:"flex",flexDirection:"column"},open:f,swipeAreaWidth:m?0:void 0,docked:!1,onRequestChange:h},i.createElement(r.List,{style:{flexGrow:1}},Object.keys(t.items).map(e=>i.createElement(r.ListItem,{key:e,primaryText:t.items[e].name,nestedItems:Object.keys(t.items[e].types).length>1?Object.keys(t.items[e].types).map(n=>i.createElement(r.ListItem,{key:n,style:{height:40}},i.createElement(c.a,{label:t.items[e].types[n].name||p.h[n],defaultToggled:-1!=t.activatedTypes.indexOf(e+n),onToggle:()=>s(e,n),thumbSwitchedStyle:{backgroundColor:l.greenA700},trackSwitchedStyle:{backgroundColor:l.green100},disabled:-1==t.activated.indexOf(e)}))):void 0,rightToggle:1==Object.keys(t.items[e].types).length?i.createElement(c.a,{defaultToggled:-1!=t.activated.indexOf(e),onToggle:()=>n(e),thumbSwitchedStyle:{backgroundColor:l.greenA700},trackSwitchedStyle:{backgroundColor:l.green100}}):void 0}))),i.createElement("div",{className:"radius-slider-container"},"Radius: ",i.createElement("b",null,this.state.radius," m"),i.createElement(d.a,{min:20,max:2e3,step:10,value:o,onChange:(t,e)=>this.setState({radius:e}),onDragStop:()=>u(this.state.radius)})))}}e.a=f},726:function(t,e,n){"use strict";e.a=function(t){const{agencies:e,transports:n,userPosition:s,onDirectionRequest:u}=t;return i.createElement(r.List,{style:{backgroundColor:o.grey100,overflow:"scroll",flexGrow:1}},n.sort((t,e)=>t.position.distanceFrom(s)-e.position.distanceFrom(s)).map(t=>i.createElement(r.ListItem,{key:t.id,innerDivStyle:{padding:"16px 10px"}},i.createElement(a.a,{style:{backgroundColor:"white"}},i.createElement(c.a,{transport:t,agency:e[t.agencyID],userPosition:s,onDirectionRequest:u})))))};var i=n(1),r=(n.n(i),n(277)),s=(n.n(r),n(80)),a=n.n(s),o=n(37),c=(n.n(o),n(276))}},[279]);