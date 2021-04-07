(this["webpackJsonpremote-faces-web"]=this["webpackJsonpremote-faces-web"]||[]).push([[14],{1248:function(e,t,n){},1249:function(e,t,n){},1250:function(e,t,n){},1251:function(e,t,n){},1281:function(e,t,n){"use strict";n.r(t),n.d(t,"GatherArea",(function(){return z}));var a=n(95),r=n(4),c=n(0),i=n(1),s=n.n(i),o=(n(1248),n(6)),u=n(105),d="gatherRegionMap",j=n(334),l=n(335),b=(n(1249),s.a.memo((function(e){var t=e.roomId,n=e.userId,a=Object(i.useState)(""),s=Object(r.a)(a,2),o=s[0],j=s[1],l=Object(i.useState)("background"),b=Object(r.a)(l,2),p=b[0],O=b[1],f=Object(i.useState)(100),m=Object(r.a)(f,2),g=m[0],h=m[1],v=Object(i.useState)(100),x=Object(r.a)(v,2),y=x[0],k=x[1],I=Object(i.useState)(100),M=Object(r.a)(I,2),S=M[0],w=M[1],z=Object(i.useState)(100),N=Object(r.a)(z,2),C=N[0],A=N[1],E=Object(i.useState)(0),R=Object(r.a)(E,2),D=R[0],G=R[1],L=Object(i.useState)(""),B=Object(r.a)(L,2),F=B[0],J=B[1],P=Object(i.useState)(""),T=Object(r.a)(P,2),q=T[0],X=T[1],Y=Object(i.useState)(""),H=Object(r.a)(Y,2),K=H[0],U=H[1],W=Object(i.useState)(null),_=Object(r.a)(W,2),Q=_[0],V=_[1];return Object(c.jsxs)("div",{className:"RegionEditor-container",children:[Object(c.jsx)("h3",{children:"Region Editor"}),Object(c.jsxs)("label",{children:["Region ID:"," ",Object(c.jsx)("input",{value:o,onChange:function(e){return j(e.target.value)}})]}),Object(c.jsx)("hr",{}),Object(c.jsxs)("label",{children:["Type:"," ",Object(c.jsxs)("select",{value:p,onChange:function(e){return O(e.target.value)},children:[Object(c.jsx)("option",{value:"background",children:"Background"}),Object(c.jsx)("option",{value:"meeting",children:"Meeting"}),Object(c.jsx)("option",{value:"chat",children:"Chat"}),Object(c.jsx)("option",{value:"media",children:"Media"}),Object(c.jsx)("option",{value:"goboard",children:"Go Board"})]})]}),Object(c.jsx)("hr",{}),Object(c.jsxs)("label",{children:["Left:"," ",Object(c.jsx)("input",{type:"number",value:g,onChange:function(e){return h(Number(e.target.value))}})]}),Object(c.jsxs)("label",{children:["Top:"," ",Object(c.jsx)("input",{type:"number",value:y,onChange:function(e){return k(Number(e.target.value))}})]}),Object(c.jsx)("hr",{}),Object(c.jsxs)("label",{children:["Width:"," ",Object(c.jsx)("input",{type:"number",value:S,onChange:function(e){return w(Number(e.target.value))}})]}),Object(c.jsxs)("label",{children:["Height:"," ",Object(c.jsx)("input",{type:"number",value:C,onChange:function(e){return A(Number(e.target.value))}})]}),Object(c.jsx)("hr",{}),"chat"!==p&&Object(c.jsxs)("label",{children:["zIndex:"," ",Object(c.jsx)("input",{type:"number",value:D,max:0,onChange:function(e){return G(Number(e.target.value))}})]}),Object(c.jsx)("hr",{}),Object(c.jsxs)("label",{children:["Background:"," ",Object(c.jsx)("input",{value:F,onChange:function(e){return J(e.target.value)}})]}),Object(c.jsxs)("label",{children:["Border:"," ",Object(c.jsx)("input",{value:q,onChange:function(e){return X(e.target.value)}})]}),Object(c.jsx)("hr",{}),Object(c.jsxs)("label",{children:["Iframe:"," ",Object(c.jsx)("input",{value:K,onChange:function(e){return U(e.target.value)}})]}),Object(c.jsx)("hr",{}),Object(c.jsx)("button",{type:"button",onClick:function(){return function(){var e={type:p,position:[g,y],size:[S,C],zIndex:D,background:F,border:q,iframe:K};Object(u.a)(t,n).ydoc.getMap(d).set(o,e)}()},disabled:!o,children:"Add Region"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("button",{type:"button",className:"RegionEditor-toggle",onClick:function(){Q?V(null):function(){var e=Object(u.a)(t,n).ydoc.getMap(d);V(JSON.stringify(e.toJSON()))}()},children:["Import/Export ",Q?Object(c.jsx)(c.Fragment,{children:"\u25bc"}):Object(c.jsx)(c.Fragment,{children:"\u25b6"})]}),!!Q&&Object(c.jsxs)("div",{children:[Object(c.jsxs)("label",{children:["All Region Data:"," ",Object(c.jsx)("textarea",{value:Q,onChange:function(e){return V(e.target.value)}})]}),Object(c.jsx)("button",{type:"button",onClick:function(){var e=Object(u.a)(t,n).ydoc.getMap(d);try{Object.entries(JSON.parse(Q||"")).forEach((function(t){var n=Object(r.a)(t,2),a=n[0],c=n[1];e.set(a,c)})),V(null)}catch(a){console.log("failed to save all region data",a)}},children:"Replace (Be careful)"})]})]})}))),p=n(2),O=n.n(p),f=n(3),m=(n(1250),n(331)),g=s.a.memo((function(e){var t=e.roomId,n=Object(i.useState)(),a=Object(r.a)(n,2),s=a[0],o=a[1];Object(i.useEffect)((function(){Object(f.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,Object(m.a)(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[t]);var u="remote-faces://".concat(window.location.href.replace(/^https:\/\//,""));return Object(c.jsxs)("div",{className:"LinkOpener-container",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{title:"Share this link with your colleagues",children:"Room Link: "}),Object(c.jsx)("input",{value:window.location.href,readOnly:!0})]}),Object(c.jsx)("div",{children:Object(c.jsx)("a",{href:u,title:"Open this link in the desktop app",children:"Open App"})}),Object(c.jsx)("div",{children:Object(c.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:"Open Excalidraw"})})]})})),h=(n(1251),n(337)),v=n(238),x=s.a.memo((function(e){var t=e.roomId,n=e.userId,a=e.avatar,r=e.nickname,i=e.statusMesg,s=e.setStatusMesg,o=e.videoDeviceId,u=e.toggleSuspended,d=e.suspended,l=Object(j.a)(t,n,a,r,i,d,!1,!1,!1,o),b=l.myImage,p=l.roomImages,O=Date.now()-12e4;return Object(c.jsxs)("div",{className:"FaceList-list",children:[Object(c.jsx)("div",{className:"FaceList-item",children:Object(c.jsx)(v.a,{image:b,nickname:r,statusMesg:i,setStatusMesg:s,liveMode:!1,muted:!0,micOn:!1,speakerOn:!1,toggleSuspended:u,suspended:d})}),p.map((function(e){return Object(c.jsx)("div",{className:"FaceList-item",children:Object(c.jsx)(v.a,{image:e.image,nickname:e.info.nickname,statusMesg:e.info.message,obsoleted:e.updated<O,liveMode:!1,muted:!0,micOn:!1,speakerOn:!1})},e.userId)})),!p.length&&Object(c.jsx)("div",{className:"FaceList-item",children:Object(c.jsx)(h.a,{})})]})})),y=n(31),k=s.a.lazy((function(){return Promise.all([n.e(2),n.e(3)]).then(n.bind(null,1283))})),I=s.a.lazy((function(){return n.e(17).then(n.bind(null,1289))})),M=s.a.lazy((function(){return Promise.all([n.e(5),n.e(4)]).then(n.bind(null,1288))})),S=s.a.memo((function(e){var t=e.roomId,n=e.userId,a=e.nickname,r=e.id,s=e.data,o=e.highlight,u="meeting"===s.type&&(o?"0 0 0 5px pink":"0 0 0 1px pink")||void 0;return Object(c.jsxs)("div",{className:"GatherArea-region",style:{left:"".concat(s.position[0],"px"),top:"".concat(s.position[1],"px"),width:"".concat(s.size[0],"px"),height:"".concat(s.size[1],"px"),boxShadow:u,zIndex:"chat"!==s.type?s.zIndex:void 0,background:s.background,border:s.border},children:[s.iframe&&Object(c.jsx)("iframe",{title:r,src:s.iframe,frameBorder:"0"}),"chat"===s.type&&Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(y.a,{}),children:Object(c.jsx)(k,{roomId:t,userId:n,nickname:a,uniqueId:r})}),"media"===s.type&&Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(y.a,{}),children:Object(c.jsx)(I,{roomId:t,userId:n,nickname:a,uniqueId:r})}),"goboard"===s.type&&Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(y.a,{}),children:Object(c.jsx)(M,{roomId:t,userId:n,uniqueId:r})})]})})),w=s.a.memo((function(e){var t=e.nickname,n=e.statusMesg,a=e.setStatusMesg,r=e.image,i=e.obsoleted,s=e.position,o=e.setPosition,u=e.registerOnMouseDrag,d=e.stream,j=e.muted,l=e.toggleSuspended,b=e.suspended,p=!!o;return Object(c.jsx)("div",{className:"GatherArea-avatar",style:{left:"".concat(s[0],"px"),top:"".concat(s[1],"px")},onMouseDown:function(e){if(e.preventDefault(),p){var t=e.currentTarget,n=[e.clientX-s[0],e.clientY-s[1]];u((function(e){var a=e.clientX-n[0],r=e.clientY-n[1];t.style.left="".concat(a,"px"),t.style.top="".concat(r,"px"),null===o||void 0===o||o([a,r])}))}},children:Object(c.jsx)(v.a,{image:r,nickname:t,statusMesg:n,setStatusMesg:a,obsoleted:!!i,liveMode:!!d,stream:d,muted:!!j,micOn:!!d,speakerOn:!!d,toggleSuspended:l,suspended:b})})})),z=s.a.memo((function(e){var t=e.roomId,n=e.userId,s=e.avatar,p=e.nickname,O=e.statusMesg,f=e.setStatusMesg,m=e.videoDeviceId,h=e.audioDeviceId,v=e.toggleSuspended,y=e.suspended,k=Object(j.a)(t,n,s,p,O,y,!1,!1,!1,m),I=k.myImage,M=k.roomImages,z=function(e,t){var n,c=Object(i.useState)({}),s=Object(r.a)(c,2),j=s[0],l=s[1],b=Object(i.useState)({position:(n=t,[parseInt(n.slice(0,2),16)/2+50,parseInt(n.slice(2,4),16)/2+30])}),p=Object(r.a)(b,2),O=p[0],f=p[1];Object(i.useEffect)((function(){var n=Object(u.a)(e,t),r=n.ydoc.getMap("gatherAvatarMap"),c=function(){l((function(e){var c=Object(a.a)({},e),i=!1;return r.forEach((function(e,a){var r,s;a!==t&&n.userIdMap[a]&&function(e){try{var t=e;return"number"===typeof t.position[0]&&"number"===typeof t.position[1]}catch(n){return!1}}(e)&&(c[a]?(r=e,s=c[a],(r.position[0]!==s.position[0]||r.position[1]!==s.position[1])&&(c[a]=e,i=!0)):(c[a]=e,i=!0))})),Object.keys(c).forEach((function(e){n.userIdMap[e]||(delete c[e],i=!0)})),i?c:e}))};r.observe(c);var i=Object(o.subscribe)(n.userIdMap,c);return c(),function(){i(),r.unobserve(c)}}),[e,t]);var m=Object(i.useRef)();Object(i.useEffect)((function(){O&&(m.current?m.current=O:(m.current=O,setTimeout((function(){Object(u.a)(e,t).ydoc.getMap("gatherAvatarMap").set(t,m.current),m.current=void 0}),500)))}),[e,t,O]);var g=Object(i.useState)({}),h=Object(r.a)(g,2),v=h[0],x=h[1];Object(i.useEffect)((function(){var n=Object(u.a)(e,t).ydoc.getMap(d),a=function(){x((function(e){var t={};return n.forEach((function(n,a){var r,c;(function(e){try{var t=e;return!(!["background","meeting","chat","media","goboard"].includes(t.type)||"number"!==typeof t.position[0]||"number"!==typeof t.position[1]||"number"!==typeof t.size[0]||"number"!==typeof t.size[1]||"undefined"!==typeof t.zIndex&&"number"!==typeof t.zIndex||"undefined"!==typeof t.background&&"string"!==typeof t.background||"undefined"!==typeof t.border&&"string"!==typeof t.border||"undefined"!==typeof t.iframe&&"string"!==typeof t.iframe)}catch(n){return!1}})(n)&&(e[a]&&(c=n,(r=e[a]).type===c.type&&r.position[0]===c.position[0]&&r.position[1]===c.position[1]&&r.size[0]===c.size[0]&&r.size[1]===c.size[1]&&r.zIndex===c.zIndex&&r.background===c.background&&r.border===c.border&&r.iframe===c.iframe)?t[a]=e[a]:t[a]=n)})),t}))};return n.observe(a),a(),function(){n.unobserve(a)}}),[e,t]);var y=Object(i.useCallback)((function(n,a){Object(u.a)(e,t).ydoc.getMap(d).set(n,a)}),[e,t]);return{avatarMap:j,myAvatar:O,setMyAvatar:f,regionMap:v,updateRegion:y}}(t,n),N=z.avatarMap,C=z.myAvatar,A=z.setMyAvatar,E=z.regionMap,R=Object(i.useRef)(),D=Object(i.useCallback)((function(e){R.current=e}),[]),G=Object.keys(E).sort((function(e,t){var n,a;return(null!==(n=E[t].zIndex)&&void 0!==n?n:0)-(null!==(a=E[e].zIndex)&&void 0!==a?a:0)})).find((function(e){var t=E[e],n=t.type,a=t.position,r=t.size;return"meeting"===n&&a[0]<=C.position[0]&&a[1]<=C.position[1]&&C.position[0]+36<=a[0]+r[0]&&C.position[1]+36<=a[1]+r[1]})),L=Object(l.a)(t,n,!!G,!!G,!0,m,h,"gatherArea/meeting/".concat(G,"/")),B=L.faceStream,F=L.faceStreamMap,J=Object(i.useState)(null),P=Object(r.a)(J,2),T=P[0],q=P[1],X=Date.now()-12e4;return Object(c.jsxs)("div",{className:"GatherArea-container",children:[Object(c.jsxs)("div",{className:"GatherArea-body",onMouseMove:function(e){R.current&&R.current(e)},onMouseUp:function(){D()},children:[Object.entries(E).map((function(e){var a=Object(r.a)(e,2),i=a[0],s=a[1];return Object(c.jsx)(S,{roomId:t,userId:n,nickname:p,id:i,data:s,highlight:i===G},i)})),Object.entries(N).map((function(e){var t=Object(r.a)(e,2),a=t[0],i=t[1];if(a===n)return null;var s=M.find((function(e){return e.userId===a}));return s?Object(c.jsx)(w,{nickname:s.info.nickname,statusMesg:s.info.message,image:s.image,obsoleted:s.updated<X,position:i.position,registerOnMouseDrag:D,stream:F[a]},a):null})),Object(c.jsx)(w,{nickname:p,statusMesg:O,setStatusMesg:f,image:I,position:C.position,setPosition:function(e){return A((function(t){return Object(a.a)(Object(a.a)({},t),{},{position:e})}))},registerOnMouseDrag:D,stream:B||void 0,muted:!0,toggleSuspended:v,suspended:y})]}),Object(c.jsx)("div",{className:"GatherArea-facelist",children:Object(c.jsx)(x,{roomId:t,userId:n,avatar:s,nickname:p,statusMesg:O,setStatusMesg:f,videoDeviceId:m,toggleSuspended:v,suspended:y})}),Object(c.jsxs)("div",{className:"GatherArea-toolbar",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{type:"button",onClick:function(){return q("region-editor"===T?null:"region-editor")},children:"region-editor"===T?"Close Region Editor":"Open Region Editor"}),"region-editor"===T&&Object(c.jsx)("div",{className:"GatherArea-region-editor",children:Object(c.jsx)(b,{roomId:t,userId:n})})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{type:"button",onClick:function(){return q("link-opener"===T?null:"link-opener")},children:"link-opener"===T?"Close Link Opener":"Open Link Opener"}),"link-opener"===T&&Object(c.jsx)("div",{className:"GatherArea-link-opener",children:Object(c.jsx)(g,{roomId:t})})]})]})]})}));t.default=z},331:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(2),r=n.n(a),c=n(3),i=n(28),s=n(10),o=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.slice(0,20),e.next=3,Object(s.h)(t.slice(i.a));case 3:return a=e.sent,e.next=6,window.crypto.subtle.exportKey("jwk",a);case 6:return c=e.sent.k,e.abrupt("return","https://excalidraw.com/#room=".concat(n,",").concat(c));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=14.6634186c.chunk.js.map