webpackJsonp([0],{146:function(t,e,n){"use strict";e.a=function(t){return t.reduce((t,e)=>(t[e.ID]=e,t),{})},e.b=function(t,e){const n=t.indexOf(e);return-1==n?[...t.slice(),e]:[...t.slice(0,n),...t.slice(n+1)]}},229:function(t,e,n){"use strict";function s(){return{type:o}}function i(t,e,n){return{type:c,date:Date.now(),agencies:t,position:e,radius:n}}e.f=function(t){return{type:u,agencyID:t}},e.g=function(t,e){return{type:l,agencyID:t,typeID:e}},e.e=function(){return(t,e)=>a(this,void 0,void 0,function*(){const n=e(),{userPosition:a,radius:o,servers:c}=n;if(n.agencies.isFetching)return;t(s());let u=[],l=Object.keys(c.items).map(t=>c.items[t]).filter(t=>t.center.distanceFrom(a)<=t.radius).map(t=>t);for(let t of l)u.push(fetch(`${t.URL}/agencies?latitude=${a.latitude}&longitude=${a.longitude}&radius=${n.radius}`).then(t=>t.json()).then(e=>e.map(e=>new r.a(e,t.ID))));let p=[];for(let t of u)try{p=p.concat(yield t)}catch(t){console.error(t)}t(i(p,a,o))})};var r=n(23),a=this&&this.__awaiter||function(t,e,n,s){return new(n||(n=Promise))(function(i,r){function a(t){try{c(s.next(t))}catch(t){r(t)}}function o(t){try{c(s.throw(t))}catch(t){r(t)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,o)}c((s=s.apply(t,e||[])).next())})};const o="REQUEST_AGENCIES";e.b=o;const c="RECEIVE_AGENCIES";e.a=c;const u="TOGGLE_AGENCY";e.c=u;const l="TOGGLE_TYPE";e.d=l},23:function(t,e,n){"use strict";var s=n(483);n.d(e,"b",function(){return s.a});var i=n(484);n.d(e,"c",function(){return i.a});var r=n(485);n.d(e,"a",function(){return r.a});var a=n(486);n.d(e,"d",function(){return a.a}),n.d(e,"e",function(){return a.b})},230:function(t,e,n){"use strict";function s(){return{type:o}}function i(t,e,n){return{type:c,date:Date.now(),transports:t,position:e,radius:n}}e.e=function(){return(t,e)=>a(this,void 0,void 0,function*(){const n=e(),{userPosition:a,radius:o,servers:c}=n;if(n.transports.isFetching)return;t(s());let u=[],l=Object.keys(c.items).map(t=>c.items[t]).filter(t=>t.center.distanceFrom(a)<=t.radius).map(t=>t.URL);for(let t of l)u.push(fetch(`${t}/transports?latitude=${a.latitude}&longitude=${a.longitude}&radius=${e().radius}`).then(t=>t.json()).then(t=>t.map(t=>new r.d(t))));let p=[];for(let t of u)try{p=p.concat(yield t)}catch(t){console.error(t)}t(i(p,a,o))})};var r=n(23),a=this&&this.__awaiter||function(t,e,n,s){return new(n||(n=Promise))(function(i,r){function a(t){try{c(s.next(t))}catch(t){r(t)}}function o(t){try{c(s.throw(t))}catch(t){r(t)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,o)}c((s=s.apply(t,e||[])).next())})};const o="REQUEST_TRANSPORTS";e.b=o;const c="RECEIVE_TRANSPORTS";e.a=c;const u="SELECT_TRANSPORT";e.c=u;const l="UNSELECT_TRANSPORT";e.d=l},270:function(t,e,n){"use strict";var s=n(1),i=(n.n(s),n(683)),r=n.n(i),a=n(58),o=(n.n(a),n(684)),c=n(686);n.n(c);class u extends s.Component{constructor(t){super(t),this.state={isOpen:!1},this.handleClick=this.handleClick.bind(this)}handleClick(){this.setState(t=>({isOpen:!t.isOpen}))}render(){const{transport:t,userPosition:e}=this.props,n=`transport-container ${this.state.isOpen?"transport-container-open":""}`;return s.createElement("div",{className:n,onClick:this.handleClick},s.createElement("div",{className:"transport-header"},s.createElement("span",{className:"transport-icon",style:{backgroundImage:`url(${t.iconURL})`}}),s.createElement("span",{className:"transport-name"},Object(o.a)(t.name)),s.createElement("span",{className:"transport-distance",style:{color:a.grey500}},s.createElement(r.a,{style:{width:16,height:16,marginRight:5},color:a.grey500}),t.position.distanceFrom(e)," m")),t.passages.map(t=>s.createElement("div",{className:"transport-passages-container",key:t.direction},s.createElement("div",{className:"transport-passages-direction"},t.direction),s.createElement("div",{className:"transport-passages-times-container"},t.times.filter((t,e)=>this.state.isOpen||e<1).map((t,e)=>s.createElement("div",{style:{color:a.greenA700},className:"transport-passages-time",key:e},t))))))}}e.a=u},273:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),i=(n.n(s),n(29)),r=(n.n(i),n(203)),a=n(212),o=n.n(a),c=n(469),u=(n.n(c),n(475)),l=(n.n(u),n(478)),p=n(497);c();const d=Object(l.a)();i.render(s.createElement(r.a,{store:d},s.createElement(o.a,null,s.createElement(p.a,null))),document.getElementById("root"))},36:function(t,e,n){"use strict";var s=n(487);n.d(e,"i",function(){return s.a});var i=n(229);n.d(e,"a",function(){return i.a}),n.d(e,"c",function(){return i.b}),n.d(e,"f",function(){return i.c}),n.d(e,"j",function(){return i.d}),n.d(e,"o",function(){return i.e}),n.d(e,"q",function(){return i.f}),n.d(e,"t",function(){return i.g});var r=n(230);n.d(e,"b",function(){return r.a}),n.d(e,"d",function(){return r.b}),n.d(e,"e",function(){return r.c}),n.d(e,"k",function(){return r.d}),n.d(e,"p",function(){return r.e});var a=n(488);n.d(e,"l",function(){return a.a}),n.d(e,"u",function(){return a.b});var o=n(489);n.d(e,"g",function(){return o.a}),n.d(e,"h",function(){return o.b}),n.d(e,"r",function(){return o.c}),n.d(e,"s",function(){return o.d});var c=n(490);n.d(e,"m",function(){return c.a}),n.d(e,"n",function(){return c.b})},475:function(t,e,n){var s=n(476);"string"==typeof s&&(s=[[t.i,s,""]]);var i={};i.transform=void 0;n(95)(s,i);s.locals&&(t.exports=s.locals)},478:function(t,e,n){"use strict";e.a=function(t){return Object(s.createStore)(Object(s.combineReducers)({servers:c.a,agencies:l.a,transports:u.a,userPosition:p.a,drawers:d.a,radius:f.a}),t,Object(o.composeWithDevTools)(Object(s.applyMiddleware)(r.a,Object(a.createLogger)())))};var s=n(123),i=n(479),r=n.n(i),a=n(480),o=(n.n(a),n(481)),c=(n.n(o),n(482)),u=n(492),l=n(493),p=n(494),d=n(495),f=n(496)},482:function(t,e,n){"use strict";e.a=function(t=o,e){switch(e.type){case r.i:return Object.assign({},t,{activated:Object(s.b)(t.activated,e.serverID)});default:return t}};var s=n(146),i=n(23),r=n(36),a=n(491);const o={items:Object(s.a)(a.a.map(t=>new i.c(t))),activated:[]}},483:function(t,e,n){"use strict";class s{constructor(t){t=t||{latitude:0,longitude:0},this.map(t)}map(t){this.latitude=t.latitude,this.longitude=t.longitude,this.heading=t.heading}distanceFrom(t){const e=(this.latitude-t.latitude)*Math.PI/180,n=(this.longitude-t.longitude)*Math.PI/180,s=Math.sin(e/2),i=Math.sin(n/2),r=s*s+Math.cos(this.latitude*Math.PI/180)*Math.cos(t.latitude*Math.PI/180)*(i*i);return Math.round(12742e3*Math.atan2(Math.sqrt(r),Math.sqrt(1-r)))}isEqual(t){return this.latitude==t.latitude&&this.longitude==t.longitude}}e.a=s},484:function(t,e,n){"use strict";var s=n(23);class i{constructor(t){this.ID=t.ID,this.URL=t.URL,this.center=new s.b(t.center),this.radius=t.radius}}e.a=i},485:function(t,e,n){"use strict";var s=n(23);class i{constructor(t,e){this.ID=t.ID,this.serverID=t.serverID,this.URL=t.URL,this.git=t.git,this.name=t.name,this.center=new s.b(t.center),this.radius=t.radius,this.types=t.types,this.typesString=t.typesString,this.iconsURL=t.iconsURL}}e.a=i},486:function(t,e,n){"use strict";var s=n(23);class i{constructor(t){null==t.passages&&console.log(t),this.ID=t.ID,this.agencyID=t.agencyID,this.name=t.name,this.type=t.type,this.position=new s.b(t.position),this.iconURL=t.iconURL,this.line=t.line,this.passages=t.passages,this.count=t.count}}e.a=i;var r;!function(t){t[t.Tram=0]="Tram",t[t.Metro=1]="Metro",t[t.Rail=2]="Rail",t[t.Bus=3]="Bus",t[t.Ferry=4]="Ferry",t[t.Bike=5]="Bike",t[t.Unknown=6]="Unknown"}(r||(r={}));class a{constructor(t,e){this.agency=t,this.transports=[],void 0!=e&&this.addTransport(e)}addTransport(t){if(0!=t.length){this.transports=this.transports.concat(t),void 0==this.position&&(this.position=t[0].position),void 0==this.type&&(this.type=t[0].type);for(let e of t){if(!e.position.isEqual(this.position))throw"Transport and cluster position are different";if(e.type!=this.type)throw"Transport and cluster type are different"}}}}e.b=a},487:function(t,e,n){"use strict";const s="TOGGLE_SERVER";e.a=s},488:function(t,e,n){"use strict";function s(t,e){return{type:o,position:t,radius:e}}e.b=function(){return(t,e)=>{navigator.geolocation.watchPosition(n=>{const o=e(),c=new i.b(n.coords);t(s(c,o.radius)),c.distanceFrom(o.agencies.lastUpdated.position)>5e3&&t(Object(a.e)()),(c.distanceFrom(o.transports.lastUpdated.position)>50||o.transports.lastUpdated.date-Date.now()>12e4)&&t(Object(r.e)())}),window.ondeviceorientation=function(n){n.absolute;const{userPosition:r,radius:a}=e();t(s(new i.b(Object.assign({},r,{heading:n.gamma})),a))}}};var i=n(23),r=n(230),a=n(229);const o="UPDATE_POSITION";e.a=o},489:function(t,e,n){"use strict";e.d=function(){return{type:s}},e.c=function(){return{type:i}};const s="TOGGLE_MENU";e.b=s;const i="TOGGLE_MAP";e.a=i},490:function(t,e,n){"use strict";function s(t,e){return{type:r,radius:t,position:e}}e.b=function(t){return(e,n)=>{const{radius:r,userPosition:a}=n();e(s(t,a)),t>r&&(e(Object(i.p)()),e(Object(i.o)()))}};var i=n(36);const r="UPDATE_RADIUS";e.a=r},491:function(t,e,n){"use strict";e.a=[{ID:"France.Paris",URL:"https://artonge.duckdns.org/opentransports",radius:2e4,center:{latitude:48.856,longitude:2.35}}]},492:function(t,e,n){"use strict";e.a=function(t=a,e){switch(e.type){case r.d:return Object.assign({},t,{isFetching:!0});case r.b:return Object.assign({},t,{items:Object.assign({},t.items,Object(s.a)(e.transports)),isFetching:!1,lastUpdated:{date:e.date,position:e.position}});case r.e:return Object.assign({},t,{selected:e.transport});case r.k:return Object.assign({},t,{selected:null});default:return t}};var s=n(146),i=n(23),r=n(36);const a={items:{},selected:null,isFetching:!1,lastUpdated:{date:0,position:new i.b}}},493:function(t,e,n){"use strict";e.a=function(t=a,e){switch(e.type){case r.c:return Object.assign({},t,{isFetching:!0});case r.a:return Object.assign({},t,{items:Object.assign({},t.items,Object(s.a)(e.agencies)),activated:e.agencies.filter(e=>void 0==t.items[e.ID]).map(t=>t.ID).concat(t.activated),activatedTypes:e.agencies.filter(e=>void 0==t.items[e.ID]).map(t=>t.types.map(e=>t.ID+String(e))).reduce((t,e)=>t.concat(e),t.activatedTypes),lastUpdated:{date:e.date,position:e.position},isFetching:!1});case r.f:return Object.assign({},t,{activated:Object(s.b)(t.activated,e.agencyID)});case r.j:return Object.assign({},t,{activatedTypes:Object(s.b)(t.activatedTypes,e.agencyID+String(e.typeID))});default:return t}};var s=n(146),i=n(23),r=n(36);const a={items:{},activated:[],activatedTypes:[],isFetching:!1,lastUpdated:{date:0,position:new i.b}}},494:function(t,e,n){"use strict";e.a=function(t=r,e){switch(e.type){case i.l:return e.position;default:return t}};var s=n(23),i=n(36);const r=new s.b},495:function(t,e,n){"use strict";e.a=function(t=i,e){switch(e.type){case s.h:return Object.assign({},t,{menuIsOpen:!t.menuIsOpen});case s.g:return Object.assign({},t,{mapIsOpen:!t.mapIsOpen});default:return t}};var s=n(36);const i={menuIsOpen:!1,mapIsOpen:!1}},496:function(t,e,n){"use strict";e.a=function(t=i,e){switch(e.type){case s.m:return e.radius;default:return t}};var s=n(36);const i=500},497:function(t,e,n){"use strict";var s=n(1),i=(n.n(s),n(203)),r=n(498),a=n(36);class o extends s.Component{constructor(t){super(t)}componentDidMount(){this.props.dispatch(Object(a.u)())}render(){const{dispatch:t,agencies:e,transports:n,userPosition:i,radius:o,drawers:c}=this.props,u=Object.keys(n.items).map(t=>n.items[t]).filter(t=>-1!=e.activated.indexOf(t.agencyID)).filter(t=>-1!=e.activatedTypes.indexOf(t.agencyID+String(t.type))).filter(t=>t.passages.length>0).filter(t=>t.position.distanceFrom(i)<=o);return s.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100%"}},s.createElement(r.a,{isFetching:e.isFetching||n.isFetching,toggleMenu:()=>this.props.dispatch(Object(a.s)()),toggleMap:()=>this.props.dispatch(Object(a.r)()),refresh:()=>{this.props.dispatch(Object(a.o)()),this.props.dispatch(Object(a.p)())}}),s.createElement(r.c,{agencies:e,radius:o,lock:c.mapIsOpen,isOpen:c.menuIsOpen,toggleOpen:()=>t(Object(a.s)()),onRadiusChange:e=>t(Object(a.n)(e)),onAgencyToggle:e=>t(Object(a.q)(e)),onTypeToggle:(e,n)=>t(Object(a.t)(e,n))}),s.createElement(r.b,{transports:u,agencies:e.items,selectedTransport:n.selected,userPosition:i,mapIsOpen:c.mapIsOpen,toggleOpen:()=>t(Object(a.r)())}),s.createElement(r.d,{transports:u,userPosition:i}))}}e.a=Object(i.b)(function(t){return t})(o)},498:function(t,e,n){"use strict";var s=n(499);n.d(e,"a",function(){return s.a});var i=n(532);n.d(e,"b",function(){return i.a});var r=n(691);n.d(e,"c",function(){return r.a});var a=n(705);n.d(e,"d",function(){return a.a})},499:function(t,e,n){"use strict";e.a=function(t){return s.createElement("header",null,s.createElement(r.a,{style:{flexShrink:0,backgroundColor:h.blueA700},title:"OpenTransport",iconElementRight:s.createElement("div",null,s.createElement(o.a,{iconStyle:{color:"white"},onTouchTap:t.refresh},s.createElement(u.a,null)),s.createElement(o.a,{iconStyle:{color:"white"},onTouchTap:t.toggleMap},s.createElement(f.a,null))),onLeftIconButtonTouchTap:t.toggleMenu}),t.isFetching&&s.createElement(p.a,{style:{flexShrink:0}}))};var s=n(1),i=(n.n(s),n(500)),r=n.n(i),a=n(147),o=n.n(a),c=n(528),u=n.n(c),l=n(529),p=n.n(l),d=n(531),f=n.n(d),h=n(58);n.n(h)},532:function(t,e,n){"use strict";e.a=function(t){const{transports:e,agencies:n,selectedTransport:i,userPosition:c,mapIsOpen:u,toggleOpen:l}=t,p=e.reduce((t,e)=>{for(let n of t)if(e.position.isEqual(n.position))return n.addTransport([e]),t;return t.push(new a.e(n[e.agencyID],[e])),t},[]);return s.createElement(r.a,{open:u,openSecondary:!0,docked:!u,overlayStyle:{opacity:1,backgroundColor:"white"},width:"95%",onRequestChange:l},s.createElement(o.a,{clusters:p,userPosition:c,selectedTransport:i}))};var s=n(1),i=(n.n(s),n(237)),r=n.n(i),a=n(23),o=n(538)},538:function(t,e,n){"use strict";var s=n(1),i=(n.n(s),n(149)),r=(n.n(i),n(677)),a=(n.n(r),n(682)),o=n(688),c=n(689);n.n(c);class u extends s.Component{constructor(t){super(t),this.state={viewport:{center:[this.props.userPosition.latitude,this.props.userPosition.longitude],zoom:15}}}render(){const{userPosition:t,clusters:e,selectedTransport:n}=this.props;return s.createElement(i.Map,{center:{lat:t.latitude,lng:t.longitude},zoom:15,maxZoom:18,bounceAtZoomLimits:!0,style:{height:"100%"}},s.createElement(i.TileLayer,{url:"https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png",attribution:'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> — Map data © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}),s.createElement(o.a,{position:t}),e.map(e=>s.createElement(a.a,{key:e.transports[0].ID,cluster:e,userPosition:t})))}}e.a=u},682:function(t,e,n){"use strict";e.a=function({userPosition:t,cluster:e}){const n=e.transports.length>1?e.agency.iconsURL[e.type]:e.transports[0].iconURL;return s.createElement(i.Marker,{position:{lat:e.position.latitude,lng:e.position.longitude},alt:e.agency.typesString[e.agency.types.indexOf(e.type)],icon:r.icon({iconUrl:n,iconSize:[30,30],className:"map-transport-marker-icon"})},s.createElement(i.Popup,{maxWidth:250,maxHeight:400,offset:[0,-10],className:"map-transport-marker-popup"},s.createElement(c.a,null,s.createElement("div",null,e.transports.map(e=>s.createElement(a.a,{key:e.ID,transport:e,userPosition:t}))))))};var s=n(1),i=(n.n(s),n(149)),r=(n.n(i),n(11)),a=(n.n(r),n(270)),o=n(212),c=n.n(o)},684:function(t,e,n){"use strict";var s=n(685);n.d(e,"a",function(){return s.a})},685:function(t,e,n){"use strict";e.a=function(t){for(var e="",n=0,s=(t=t.toLowerCase()).length,i=!0;n<s;)e+=i?t[n].toUpperCase():t[n],i=" "==t[n],n++;return e}},686:function(t,e,n){var s=n(687);"string"==typeof s&&(s=[[t.i,s,""]]);var i={};i.transform=void 0;n(95)(s,i);s.locals&&(t.exports=s.locals)},688:function(t,e,n){"use strict";e.a=function({position:t}){return s.createElement(i.Marker,{icon:r.divIcon({html:t.heading?`<div class='map-user-position-marker-icon map-user-position-heading-marker-icon' style='transform: rotate(${t.heading}deg);'></div>`:`<div class='map-user-position-marker-icon'></div>`}),position:{lat:t.latitude,lng:t.longitude}})};var s=n(1),i=(n.n(s),n(149)),r=(n.n(i),n(11));n.n(r)},689:function(t,e,n){var s=n(690);"string"==typeof s&&(s=[[t.i,s,""]]);var i={};i.transform=void 0;n(95)(s,i);s.locals&&(t.exports=s.locals)},691:function(t,e,n){"use strict";var s=n(1),i=(n.n(s),n(271)),r=(n.n(i),n(237)),a=n.n(r),o=n(699),c=n.n(o),u=n(702),l=n.n(u);class p extends s.Component{constructor(t){super(t),this.state={radius:this.props.radius}}render(){const{agencies:t,onAgencyToggle:e,onTypeToggle:n,radius:r,onRadiusChange:o,isOpen:u,lock:p,toggleOpen:d}=this.props;return s.createElement(a.a,{containerStyle:{display:"flex",flexDirection:"column"},open:u,swipeAreaWidth:p?0:void 0,docked:!1,onRequestChange:d},s.createElement(i.List,{style:{flexGrow:1}},Object.keys(t.items).map(r=>s.createElement(i.ListItem,{key:r,nestedItems:t.items[r].types.map((e,a)=>s.createElement(i.ListItem,{key:e,style:{height:40}},s.createElement(c.a,{label:t.items[r].typesString[a],defaultToggled:-1!=t.activatedTypes.indexOf(r+String(e)),onToggle:()=>n(r,e)})))},s.createElement(c.a,{label:t.items[r].name,defaultToggled:-1!=t.activated.indexOf(r),onToggle:()=>e(r)})))),s.createElement("div",{style:{margin:"0px 25px"}},"Radius: ",s.createElement("b",null,this.state.radius)," meters",s.createElement(l.a,{min:20,max:2e3,step:10,value:r,onChange:(t,e)=>this.setState({radius:e}),onDragStop:()=>o(this.state.radius)})))}}e.a=p},705:function(t,e,n){"use strict";e.a=function(t){const{transports:e,userPosition:n}=t;return s.createElement(i.List,{style:{backgroundColor:o.grey100,overflow:"scroll",flexGrow:1}},e.sort((t,e)=>t.position.distanceFrom(n)-e.position.distanceFrom(n)).map(t=>s.createElement(i.ListItem,{key:t.ID,innerDivStyle:{padding:"16px 10px"}},s.createElement(a.a,{style:{backgroundColor:"white"}},s.createElement(c.a,{transport:t,userPosition:n})))))};var s=n(1),i=(n.n(s),n(271)),r=(n.n(i),n(79)),a=n.n(r),o=n(58),c=(n.n(o),n(270))}},[273]);