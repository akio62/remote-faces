(this["webpackJsonpremote-faces-web"]=this["webpackJsonpremote-faces-web"]||[]).push([[8],{105:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=function(e){return"object"===typeof e&&null!==e},a=function(e,t){return"string"===typeof e[t]},c=function(e,t){return r(e[t])}},107:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(16);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return new Promise((function(t){return setTimeout(t,e)}))}},120:function(e,t,n){"use strict";n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return p})),n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return j}));var r=n(13),a=n(4),c=n(2),i=n.n(c),s=n(3),u=n(1),o=n(27),d=function(){var e=Object(s.a)(i.a.mark((function e(t,n){var r,a,c,s,u,d,f,l,b,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Set,a=new Set,c=new Set,s=new Map,u=new Map,d=function(e){r.forEach((function(t){t(e)}))},f=function(e){a.forEach((function(t){t(e)}))},l=function(e,t){c.forEach((function(n){n(e,t)}))},b=function(e,t,n){var r=u.get(e);r||(r=new Set,u.set(e,r)),r.add({track:t,info:n});var a=s.get(e);a&&a.forEach((function(e){e(t,n)}))},e.next=11,Object(o.b)(t,n,d,f,l,b);case 11:return p=e.sent,e.abrupt("return",{room:p,networkStatusListeners:r,newPeerListeners:a,dataListeners:c,trackListeners:s,trackCache:u,count:0});case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=new Map,l=function(){var e=Object(s.a)(i.a.mark((function e(t,n,r){var a,c,s,u,o,l,b,p,m,O;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"_").concat(n),f.has(a)||f.set(a,d(t,n)),e.next=4,f.get(a);case 4:return c=e.sent,r.networkStatusListener&&c.networkStatusListeners.add(r.networkStatusListener),r.newPeerListener&&c.newPeerListeners.add(r.newPeerListener),r.dataListener&&c.dataListeners.add(r.dataListener),r.trackListener&&(s=r.trackListener,u=s.mediaType,o=s.listener,l=new Set(c.trackListeners.keys()),b=l.size,(p=c.trackListeners.get(u))||(p=new Set,c.trackListeners.set(u,p)),p.add(o),l.add(u),b!==l.size&&c.room.acceptMediaTypes(Array.from(l)),(m=c.trackCache.get(u))&&m.forEach((function(e){"ended"!==e.track.readyState?o(e.track,e.info):m.delete(e)}))),c.count+=1,O=function(){if(r.networkStatusListener&&c.networkStatusListeners.delete(r.networkStatusListener),r.newPeerListener&&c.newPeerListeners.delete(r.newPeerListener),r.dataListener&&c.dataListeners.delete(r.dataListener),r.trackListener){var e=r.trackListener,t=e.mediaType,n=e.listener,i=c.trackListeners.get(t);i&&(i.delete(n),0===i.size&&(c.trackListeners.delete(t),c.room.acceptMediaTypes(Array.from(c.trackListeners.keys()))))}c.count-=1,c.count<=0&&(c.room.dispose(),f.delete(a))},e.abrupt("return",{broadcastData:c.room.broadcastData,sendData:c.room.sendData,addTrack:c.room.addTrack,removeTrack:c.room.removeTrack,unregister:O});case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),b=function(e,t,n){var r=Object(u.useState)(),c=Object(a.a)(r,2),o=c[0],d=c[1];if(o&&"UNKNOWN_ERROR"===o.type)throw new Error("Network Error: ".concat(o.err.message));return Object(u.useEffect)((function(){var r=function(){};return Object(s.a)(i.a.mark((function a(){var c,s;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l(e,t,{networkStatusListener:function(e){d(e),n&&n(e)}});case 2:c=a.sent,s=c.unregister,r=s;case 5:case"end":return a.stop()}}),a)})))(),function(){r()}}),[e,t,n]),o},p=function(e,t,n){Object(u.useEffect)((function(){var r=function(){};return Object(s.a)(i.a.mark((function a(){var c,s,u;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l(e,t,{newPeerListener:function(e){n((function(t){return u(t,e)}))}});case 2:c=a.sent,s=c.unregister,u=c.sendData,r=s;case 6:case"end":return a.stop()}}),a)})))(),function(){r()}}),[e,t,n])},m=function(e,t){var n=Object(u.useRef)([]),a=Object(u.useRef)(),c=Object(u.useCallback)((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];a.current?a.current.apply(a,t):n.current.push(t)}),[]);return Object(u.useEffect)((function(){var c=function(){};return Object(s.a)(i.a.mark((function s(){var u;return i.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,l(e,t,{});case 2:u=i.sent,a.current=u.broadcastData,c=u.unregister,n.current.forEach((function(e){u.broadcastData.apply(u,Object(r.a)(e))})),n.current.splice(0,n.current.length);case 7:case"end":return i.stop()}}),s)})))(),function(){c()}}),[e,t]),c},O=function(e,t,n){Object(u.useEffect)((function(){var r=function(){};return Object(s.a)(i.a.mark((function a(){var c,s;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l(e,t,{dataListener:n});case 2:c=a.sent,s=c.unregister,r=s;case 5:case"end":return a.stop()}}),a)})))(),function(){r()}}),[e,t,n])},j=function(e,t,n,r){var c=Object(u.useState)(),o=Object(a.a)(c,2),d=o[0],f=o[1];return Object(u.useEffect)((function(){var a=function(){};return r&&Object(s.a)(i.a.mark((function c(){var s;return i.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,l(e,t,{trackListener:{mediaType:r,listener:n}});case 2:s=c.sent,f((function(){return function(e){return s.addTrack(r,e),function(){return s.removeTrack(r)}}})),a=function(){f(void 0),s.unregister()};case 5:case"end":return c.stop()}}),c)})))(),function(){a()}}),[e,t,n,r]),d}},1254:function(e,t,n){"use strict";n.r(t),n.d(t,"SingleRoom",(function(){return C}));var r=n(4),a=n(0),c=n(1),i=n.n(c),s=n(14),u=(n(527),n(8)),o=n(10),d=n(200),f=n(13),l=(n(528),n(35)),b=n(2),p=n.n(b),m=n(3),O=n(107),j=n(105),v=n(109),h=function(){var e=Object(m.a)(p.a.mark((function e(t,n){var r,a,c,i,s,u,o,d,f,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof ImageCapture){e.next=21;break}return r=new ImageCapture(n),e.next=4,Object(v.a)(2e3);case 4:return e.prev=4,e.next=7,r.takePhoto();case 7:return c=e.sent,e.next=10,createImageBitmap(c);case 10:a=e.sent,e.next=18;break;case 13:return e.prev=13,e.t0=e.catch(4),e.next=17,r.grabFrame();case 17:a=e.sent;case 18:return i=a.width,s=a.height,e.abrupt("return",{srcImg:a,srcW:i,srcH:s});case 21:return(u=document.createElement("video")).autoplay=!0,u.setAttribute("playsinline",""),u.style.display="block",u.style.width="1px",u.style.height="1px",u.style.position="absolute",u.style.bottom="0",document.body.appendChild(u),o=function(){document.body.removeChild(u)},u.srcObject=t,e.next=34,Object(v.a)(2e3);case 34:return d=u,f=u.videoWidth,l=u.videoHeight,e.abrupt("return",{srcImg:d,srcW:f,srcH:l,dispose:o});case 38:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(p.a.mark((function e(t){var n,a,c,i,s,u,o,d,f,l,b,m,O,j,v,k,g,x,y;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?{video:{deviceId:t}}:{video:!0},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return a=e.sent,c=a.getVideoTracks(),i=Object(r.a)(c,1),s=i[0],u=document.createElement("canvas"),o=u.getContext("2d"),d=72,f=72,u.width=d,u.height=f,e.next=13,h(a,s);case 13:return l=e.sent,b=l.srcImg,m=l.srcW,O=l.srcH,j=l.dispose,v=Math.max(d/m,f/O),k=Math.min(m,d/v),g=Math.min(O,f/v),x=(m-k)/2,y=(O-g)/2,o.drawImage(b,x,y,k,g,0,0,d,f),j&&j(),s.stop(),e.abrupt("return",u.toDataURL("image/jpeg"));case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=n(120),x=function(e){return Object(j.c)(e)&&"string"===typeof e.image&&function(e){return Object(j.c)(e)&&"string"===typeof e.nickname&&"string"===typeof e.message&&"boolean"===typeof e.liveMode&&"boolean"===typeof e.micOn&&"boolean"===typeof e.speakerOn}(e.info)},y=n(522),w=i.a.memo((function(e){var t=e.image,n=e.nickname,r=e.statusMesg,c=e.obsoleted,i=e.liveMode,s=e.stream,u=e.muted,o=e.micOn,d=e.speakerOn;return Object(a.jsxs)("div",{className:"FaceImages-card",style:{opacity:c?.2:1},children:[i&&!c&&s?Object(a.jsx)("video",{className:"FaceImages-photo",ref:function(e){e&&e.srcObject!==s&&(e.srcObject=s)},autoPlay:!0,playsInline:!0,muted:u}):Object(a.jsx)("img",{src:t||l.a,className:"FaceImages-photo",alt:"myself"}),Object(a.jsx)("div",{className:"FaceImages-name",children:n}),Object(a.jsx)("div",{className:"FaceImages-mesg",title:Object(f.a)(r)[1]?r:"(No status message)",children:Object(f.a)(r)[0]}),i&&!c&&s&&Object(a.jsx)("div",{className:"FaceImages-live-indicator",title:"Live Mode On",children:"\u25c9"}),i&&!c&&!s&&Object(a.jsx)("div",{className:"FaceImages-live-indicator",title:"Live Mode Available",children:"\u25ce"}),i&&!c&&Object(a.jsxs)("div",{className:"FaceImages-mic-speaker-icons",children:[o&&Object(a.jsx)("span",{title:"Mic On",children:"\ud83c\udfa4"}),d&&Object(a.jsx)("span",{title:"Speaker On",children:"\ud83d\udd08"})]})]})})),S=i.a.memo((function(e){var t=e.roomId,n=e.userId,i=e.avatar,s=e.nickname,u=e.statusMesg,o=e.suspended,d=e.liveMode,l=e.micOn,b=e.speakerOn,j=e.videoDeviceId,v=e.audioDeviceId,h=function(e,t,n,a,i,s,u,o,d,l){var b=Object(c.useState)(),j=Object(r.a)(b,2),v=j[0],h=j[1],y=Object(c.useState)([]),w=Object(r.a)(y,2),S=w[0],I=w[1],M=Object(c.useState)(),L=Object(r.a)(M,2),E=L[0],C=L[1];if(E)throw E;var P=Object(c.useRef)();Object(g.e)(e,t,Object(c.useCallback)((function(e){P.current&&e(P.current)}),[]));var D=Object(g.a)(e,t);return Object(g.b)(e,t,Object(c.useCallback)((function(e,t){if(x(e)){var n=Object(O.a)(Object(O.a)({},e),{},{userId:t.userId,received:Date.now(),obsoleted:!1,peerIndex:t.peerIndex});I((function(e){return e.find((function(e){return e.userId===n.userId}))?e.map((function(e){return e.userId===n.userId?n:e})):[].concat(Object(f.a)(e),[n])}))}}),[])),Object(g.d)(e,t,Object(c.useCallback)((function(e){if(e&&"CONNECTION_CLOSED"===e.type){var t=e.peerIndex;I((function(e){var n=!1,r=e.map((function(e){return e.peerIndex===t?(n=!0,Object(O.a)(Object(O.a)({},e),{},{obsoleted:!0})):e}));return n?r:e}))}}),[])),Object(c.useEffect)((function(){var e,t=function(){var e=Date.now()-12e4,t=Date.now()-6e5;I((function(n){var r=!1,a=n.map((function(n){return n.received<e&&!n.obsoleted?(r=!0,Object(O.a)(Object(O.a)({},n),{},{obsoleted:!0})):n.received<t&&n.obsoleted?(r=!0,null):n})).filter((function(e){return e}));return r?a:n}))},r=!1,c=function(){var f=Object(m.a)(p.a.mark((function f(){var b,m;return p.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(!r){f.next=2;break}return f.abrupt("return");case 2:if(f.prev=2,t(),!s){f.next=8;break}f.t0=n,f.next=11;break;case 8:return f.next=10,k(l);case 10:f.t0=f.sent;case 11:if(b=f.t0,!r){f.next=14;break}return f.abrupt("return");case 14:h(b),D(m={image:b,info:{nickname:a,message:i,liveMode:u,micOn:o,speakerOn:d}}),P.current=m,f.next=24;break;case 21:f.prev=21,f.t1=f.catch(2),C(f.t1);case 24:e=setTimeout(c,12e4);case 25:case"end":return f.stop()}}),f,null,[[2,21]])})));return function(){return f.apply(this,arguments)}}();return c(),function(){r=!0,clearTimeout(e)}}),[e,t,l,n,a,i,s,u,o,d,D]),{myImage:v,roomImages:S}}(t,n,i,s,u,o,d,l,b,j),S=h.myImage,I=h.roomImages,M=Object(y.a)(t,n,d,d,l,j,v),L=M.faceStream,E=M.faceStreamMap;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(w,{image:S,nickname:s,statusMesg:u,liveMode:d,stream:L||void 0,muted:!0,micOn:l,speakerOn:b}),I.map((function(e){return Object(a.jsx)(w,{image:e.image,nickname:e.info.nickname,statusMesg:e.info.message,obsoleted:e.obsoleted,liveMode:e.info.liveMode,stream:d&&E[e.userId]||void 0,muted:!b,micOn:e.info.micOn,speakerOn:e.info.speakerOn},e.userId)}))]})})),I=(n(529),i.a.memo((function(e){var t=e.suspended,n=e.setSuspended,r=e.liveMode,c=e.setLiveMode,i=e.setMicOn,s=e.setSpeakerOn,u=e.secondColumnOpen,o=e.setSecondColumnOpen;return Object(a.jsxs)("div",{className:"ControlPanel-container",children:[Object(a.jsxs)("button",{type:"button",onClick:function(){return n((function(e){return!e}))},title:t?"Enable Camera":"Disable Camera",children:["\ud83d\udcf7",t&&Object(a.jsx)("span",{className:"ControlPanel-disabled",children:"\u274c"})]}),Object(a.jsx)("button",{type:"button",onClick:function(){return o((function(e){return!e}))},title:u?"Close Right Pane":"Open Right Pane",children:u?Object(a.jsx)(a.Fragment,{children:"\u25c0"}):Object(a.jsx)(a.Fragment,{children:"\u25b6"})}),Object(a.jsxs)("button",{type:"button",onClick:function(){return c((function(e){return!e}))},title:r?"Disable Live Mode":"Enable Live Mode",children:["\ud83c\udfa5",!r&&Object(a.jsx)("span",{className:"ControlPanel-disabled",children:"\u274c"})]}),Object(a.jsxs)("div",{className:"ControlPanel-select",children:["\ud83c\udf9b",Object(a.jsxs)("select",{onChange:function(e){switch(e.target.value){case"off":s(!1),i(!1);break;case"speaker":s(!0),i(!1);break;case"mic":s(!0),i(!0);break;default:throw new Error("no option")}},children:[Object(a.jsx)("option",{value:"off",children:"Audio Off"}),Object(a.jsx)("option",{value:"speaker",children:"Speaker Only"}),Object(a.jsx)("option",{value:"mic",children:"Mic + Speaker"})]})]})]})}))),M=n(34),L=(n(530),{Welcome:i.a.lazy((function(){return Promise.all([n.e(1),n.e(11)]).then(n.bind(null,1256))})),"Momentary Chat":i.a.lazy((function(){return Promise.all([n.e(1),n.e(5),n.e(12)]).then(n.bind(null,1255))})),"Spatial Area":i.a.lazy((function(){return Promise.all([n.e(9),n.e(14)]).then(n.bind(null,1258))})),"Screen Share":i.a.lazy((function(){return n.e(18).then(n.bind(null,1257))})),"White Board":i.a.lazy((function(){return n.e(15).then(n.bind(null,1259))})),"Video Share":i.a.lazy((function(){return n.e(19).then(n.bind(null,1260))})),"Go Board":i.a.lazy((function(){return Promise.all([n.e(21),n.e(16)]).then(n.bind(null,1261))}))}),E=i.a.memo((function(e){var t=e.roomId,n=e.userId,i=e.nickname,s=e.statusMesg,u=e.setStatusMesg,o=Object(c.useState)(["Welcome","Momentary Chat"]),d=Object(r.a)(o,2),l=d[0],b=d[1];return Object(a.jsxs)("div",{className:"SelectivePane-container",children:[Object(a.jsxs)("div",{className:"SelectivePane-select",children:["\u2630",Object(a.jsx)("select",{multiple:!0,size:Object.keys(L).length,value:l,onChange:function(e){return t=e.target.value,void b((function(e){return e.includes(t)?e.filter((function(e){return e!==t})):[].concat(Object(f.a)(e),[t])}));var t},children:Object.keys(L).map((function(e){var t=l.indexOf(e);return t>=0?Object(a.jsx)("option",{value:e,children:"[".concat(t+1,"] ").concat(e)},e):Object(a.jsxs)("option",{value:e,children:["\xa0\xa0\xa0\xa0\xa0",e]},e)}))})]}),Object(a.jsx)("div",{className:"SelectivePane-body",children:l.map((function(e){return Object(a.jsx)(c.Suspense,{fallback:Object(a.jsx)(M.a,{}),children:Object(c.createElement)(L[e],{roomId:t,userId:n,nickname:i,statusMesg:s,setStatusMesg:u})},e)}))})]})})),C=i.a.memo((function(){var e=Object(s.b)(u.b),t=e.roomId,n=e.userId,i=e.config,f=Object(c.useState)(""),l=Object(r.a)(f,2),b=l[0],p=l[1];Object(c.useEffect)((function(){Object(o.e)(t)}),[t]);var m=Object(c.useState)(!0),O=Object(r.a)(m,2),j=O[0],v=O[1],h=Object(c.useState)(!1),k=Object(r.a)(h,2),g=k[0],x=k[1],y=Object(c.useState)(!1),w=Object(r.a)(y,2),M=w[0],L=w[1],C=Object(c.useState)(!1),P=Object(r.a)(C,2),D=P[0],T=P[1],N=Object(c.useState)(!0),R=Object(r.a)(N,2),F=R[0],z=R[1];return Object(d.a)(t,n),Object(a.jsxs)("div",{className:"SingleRoom-container",children:[Object(a.jsxs)("div",{className:"SingleRoom-1st-column",children:[Object(a.jsx)(I,{suspended:j,setSuspended:v,liveMode:g,setLiveMode:x,micOn:M,setMicOn:L,speakerOn:D,setSpeakerOn:T,secondColumnOpen:F,setSecondColumnOpen:z}),Object(a.jsx)(S,{roomId:t,userId:n,videoDeviceId:i.videoDeviceId,audioDeviceId:i.audioDeviceId,avatar:i.avatar,nickname:i.nickname,statusMesg:b,suspended:j,liveMode:g,micOn:M,speakerOn:D})]}),Object(a.jsx)("div",{className:"SingleRoom-2nd-column",style:{display:F?"inherit":"none"},children:Object(a.jsx)(E,{roomId:t,userId:n,nickname:i.nickname,statusMesg:b,setStatusMesg:p})})]})}));t.default=C},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(4),a=n(1),c=n(105),i=n(120),s=[],u=function(e){var t={};return s.forEach((function(n){n.roomId===e&&(t[n.userId]=n.nickname)})),t},o=function(e,t){var n=Object(a.useState)((function(){return u(e)})),o=Object(r.a)(n,2),d=o[0],f=o[1];return Object(i.b)(e,t,Object(a.useCallback)((function(t,n){if(r=t,Object(c.c)(r)&&Object(c.c)(r.info)&&"string"===typeof r.info.nickname){var r,a=s.findIndex((function(t){return t.roomId===e&&t.userId===n.userId})),i=Date.now();a>=0?(s[a].nickname!==t.info.nickname&&(s[a].nickname=t.info.nickname),s[a].lastUpdated=i):s.push({roomId:e,userId:n.userId,nickname:t.info.nickname,lastUpdated:i});for(var o=s.length-1;o>=0;o-=1)s[o].lastUpdated+6e5<i&&s.splice(o,1);f((function(t){var n=u(e),r=Object.keys(n);return r.length===Object.keys(t).length&&r.every((function(e){return n[e]===t[e]}))?t:n}))}}),[e])),d}},325:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u}));var r=n(2),a=n.n(r),c=n(4),i=n(3),s=function(){var e=Object(i.a)(a.a.mark((function e(t){var n,r,i,s,u,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?{video:{deviceId:t}}:{video:!0},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return r=e.sent,i=r.getVideoTracks(),s=Object(c.a)(i,1),u=s[0],o=function(){u.stop()},e.abrupt("return",{stream:r,dispose:o});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(i.a)(a.a.mark((function e(t){var n,r,i,s,u,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={video:{deviceId:t,frameRate:{max:5},width:{exact:72},height:{exact:72}}},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return r=e.sent,i=r.getVideoTracks(),s=Object(c.a)(i,1),u=s[0],o=function(){u.stop()},e.abrupt("return",{stream:r,dispose:o});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},522:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(2),a=n.n(r),c=n(16),i=n(107),s=n(523),u=n(26);function o(e){var t=function(e,t){if("object"!==Object(u.a)(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==Object(u.a)(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===Object(u.a)(t)?t:String(t)}var d=n(3),f=n(4),l=n(1),b=n(325),p=function(){var e=Object(d.a)(a.a.mark((function e(t){var n,r,c,i,s,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?{audio:{deviceId:t}}:{audio:!0},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return r=e.sent,c=r.getAudioTracks(),i=Object(f.a)(c,1),s=i[0],e.next=7,s.applyConstraints({echoCancellation:!0,echoCancellationType:{ideal:"system"},noiseSuppression:{ideal:!0}});case 7:return u=function(){s.stop()},e.abrupt("return",{stream:r,dispose:u});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=n(120),O=function(e,t,n){var r=t||new MediaStream;return r.addTrack(e),r.dispatchEvent(new MediaStreamTrackEvent("addtrack",{track:e})),e.addEventListener("ended",(function(){r.removeTrack(e),0===r.getTracks().length&&n(r)})),r},j=function(e,t,n,r,u,j,v,h){var k=Object(l.useState)(null),g=Object(f.a)(k,2),x=g[0],y=g[1],w=Object(l.useState)({}),S=Object(f.a)(w,2),I=S[0],M=S[1],L=Object(l.useRef)(!0);Object(l.useEffect)((function(){return function(){L.current=!1}}),[]);var E=Object(l.useCallback)(function(){var e=Object(d.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=function(e){L.current&&M((function(t){var r=n.userId,a=t[r],c=Object(s.a)(t,[r].map(o));return a===e?c:t}))},M((function(e){var a=e[n.userId],s=O(t,a,r);return a===s?e:Object(i.a)(Object(i.a)({},e),{},Object(c.a)({},n.userId,s))}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[]),C=Object(m.c)(e,t,E,n?"".concat(h||"face","Video"):void 0),P=Object(m.c)(e,t,E,r?"".concat(h||"face","Audio"):void 0);return Object(l.useEffect)((function(){var e=null;return n&&C&&Object(d.a)(a.a.mark((function t(){var n,r,c,i,s,u,o,d;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.a)(j);case 2:n=t.sent,r=n.stream,c=n.dispose,i=r.getVideoTracks(),s=Object(f.a)(i,1),u=s[0],o=C(u),d=function(e){L.current&&y((function(t){return t===e?null:t}))},y((function(e){return O(u,e,d)})),e=function(){o(),c(),u.dispatchEvent(new Event("ended"))};case 10:case"end":return t.stop()}}),t)})))(),function(){e&&e()}}),[e,n,j,C]),Object(l.useEffect)((function(){var e=null;return r&&P&&Object(d.a)(a.a.mark((function t(){var n,r,c,i,s,u,o,d;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(v);case 2:n=t.sent,r=n.stream,c=n.dispose,i=r.getAudioTracks(),s=Object(f.a)(i,1),u=s[0],o=P(u),d=function(e){L.current&&y((function(t){return t===e?null:t}))},y((function(e){return O(u,e,d)})),e=function(){o(),c(),u.dispatchEvent(new Event("ended"))};case 10:case"end":return t.stop()}}),t)})))(),function(){e&&e()}}),[e,r,v,P]),Object(l.useEffect)((function(){if(x){x.getAudioTracks().forEach((function(e){e.enabled=u}));var e=function(e){var t=e.track;"audio"===t.kind&&(t.enabled=u)};return x.addEventListener("addtrack",e),function(){x.removeEventListener("addtrack",e)}}}),[x,u]),{faceStream:x,faceStreamMap:I}}},523:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},527:function(e,t,n){},528:function(e,t,n){},529:function(e,t,n){},530:function(e,t,n){}}]);
//# sourceMappingURL=8.8bbd9a75.chunk.js.map