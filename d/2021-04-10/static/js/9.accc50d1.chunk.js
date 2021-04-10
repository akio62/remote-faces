(this["webpackJsonpremote-faces-web"]=this["webpackJsonpremote-faces-web"]||[]).push([[9],{102:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var a=function(e){return"object"===typeof e&&null!==e},r=function(e,t){return"string"===typeof e[t]},c=function(e,t){return a(e[t])}},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(13),r=n(2),c=n.n(r),i=n(3),s=n(5),o=n(1237),u=n(28),d=new Map,p=function(e,t){var n="".concat(e,":").concat(t);if(!d.has(n)){var r=function(e,t){var n=function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b.acceptingMediaTypes.includes(t)){e.next=3;break}return console.log("media type already added",t),e.abrupt("return");case 3:return b.acceptingMediaTypes.push(t),e.next=6,f;case 6:e.sent.acceptMediaTypes(Object(s.snapshot)(b.acceptingMediaTypes));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(){var e=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(-1!==(n=b.acceptingMediaTypes.indexOf(t))){e.next=4;break}return console.log("media type already added",t),e.abrupt("return");case 4:return b.acceptingMediaTypes.splice(n,1),e.next=7,f;case 7:e.sent.acceptMediaTypes(Object(s.snapshot)(b.acceptingMediaTypes));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:e.sent.addTrack(t,n);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:e.sent.removeTrack(t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:e.sent.dispose();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=Object(s.proxy)({networkStatusList:[],userIdMap:{},ydoc:Object(s.ref)(new o.a),acceptingMediaTypes:[],trackMap:{},addMediaType:n,removeMediaType:r,addTrack:d,removeTrack:p,dispose:l});b.ydoc.on("update",(function(e){var t=btoa(String.fromCharCode.apply(String,Object(a.a)(e)));f.then((function(e){e.broadcastData({ydocUpdate:t})}))}));var f=Object(u.b)(e,t,(function(e){console.log("[network status]",e),b.networkStatusList.unshift(e),b.networkStatusList.length>10&&b.networkStatusList.pop(),null===e||void 0===e||e.type}),(function(e){var t=o.c(b.ydoc),n={ydocUpdate:btoa(String.fromCharCode.apply(String,Object(a.a)(t)))};f.then((function(t){t.sendData(n,e)}))}),(function(e,t){if(b.userIdMap[t.userId]=t.peerIndex,null===e||void 0===e?void 0:e.ydocUpdate){var n=atob(e.ydocUpdate),a=new Uint8Array([].map.call(n,(function(e){return e.charCodeAt(0)})));o.b(b.ydoc,a)}}),(function(e,t,n){b.trackMap[e]||(b.trackMap[e]={}),t.addEventListener("ended",(function(){b.trackMap[e][n.userId]===t&&delete b.trackMap[e][n.userId]})),b.trackMap[e][n.userId]=Object(s.ref)(t)}));return b}(e,t);d.set(n,r)}return d.get(n)}},1242:function(e,t,n){"use strict";n.r(t),n.d(t,"SingleRoom",(function(){return X}));var a=n(4),r=n(0),c=n(1),i=n.n(c),s=n(16),o=(n(521),n(8)),u=n(10),d=n(101),p=(n(522),n(5)),l=n(119),b="gatherRegionMap",f=n(2),j=n.n(f),m=n(3),O=n(13),v=n(102),g=n(125),h=function(){var e=Object(m.a)(j.a.mark((function e(t,n){var a,r,c,i,s,o,u,d,p,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof ImageCapture){e.next=21;break}return a=new ImageCapture(n),e.next=4,Object(g.a)(2e3);case 4:return e.prev=4,e.next=7,a.takePhoto();case 7:return c=e.sent,e.next=10,createImageBitmap(c);case 10:r=e.sent,e.next=18;break;case 13:return e.prev=13,e.t0=e.catch(4),e.next=17,a.grabFrame();case 17:r=e.sent;case 18:return i=r.width,s=r.height,e.abrupt("return",{srcImg:r,srcW:i,srcH:s});case 21:return(o=document.createElement("video")).autoplay=!0,o.setAttribute("playsinline",""),o.style.display="block",o.style.width="1px",o.style.height="1px",o.style.position="absolute",o.style.bottom="0",document.body.appendChild(o),u=function(){document.body.removeChild(o)},o.srcObject=t,e.next=34,Object(g.a)(2e3);case 34:return d=o,p=o.videoWidth,l=o.videoHeight,e.abrupt("return",{srcImg:d,srcW:p,srcH:l,dispose:u});case 38:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(m.a)(j.a.mark((function e(t){var n,r,c,i,s,o,u,d,p,l,b,f,m,O,v,g,x,y,k;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?{video:{deviceId:t}}:{video:!0},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return r=e.sent,c=r.getVideoTracks(),i=Object(a.a)(c,1),s=i[0],o=document.createElement("canvas"),u=o.getContext("2d"),d=72,p=72,o.width=d,o.height=p,e.next=13,h(r,s);case 13:return l=e.sent,b=l.srcImg,f=l.srcW,m=l.srcH,O=l.dispose,v=Math.max(d/f,p/m),g=Math.min(f,d/v),x=Math.min(m,p/v),y=(f-g)/2,k=(m-x)/2,u.drawImage(b,y,k,g,x,0,0,d,p),O&&O(),s.stop(),e.abrupt("return",o.toDataURL("image/jpeg"));case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e){return Object(v.c)(e)&&"string"===typeof e.image&&function(e){return Object(v.c)(e)&&"string"===typeof e.nickname&&"string"===typeof e.message&&"boolean"===typeof e.liveMode&&"boolean"===typeof e.micOn&&"boolean"===typeof e.speakerOn}(e.info)&&"number"===typeof e.updated},k=function(e,t,n,r,i,s,o,u,d,b){var f=Object(c.useState)(),v=Object(a.a)(f,2),g=v[0],h=v[1],k=Object(c.useState)([]),M=Object(a.a)(k,2),I=M[0],w=M[1];return Object(c.useEffect)((function(){var n=Object(l.a)(e,t),a=n.ydoc.getMap("faceImages"),r=function(){w((function(e){var r=Object(O.a)(e),c=!1;a.forEach((function(e,a){if(a!==t&&n.userIdMap[a]&&y(e)){var i=r.findIndex((function(e){return e.userId===a}));-1===i?(r.push(e),c=!0):e.updated>r[i].updated&&(r[i]=e,c=!0)}}));var i=Date.now()-6e5,s=r.filter((function(e){return e.updated>=i&&n.userIdMap[e.userId]}));return(c=c||r.length!==s.length)?s:e}))};a.observe(r);var c=Object(p.subscribe)(n.userIdMap,r);return r(),function(){c(),a.unobserve(r)}}),[e,t]),Object(c.useEffect)((function(){var a,c=Object(l.a)(e,t).ydoc.getMap("faceImages"),p=!1,f=function(){var e=Object(m.a)(j.a.mark((function e(){var l,m;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p){e.next=2;break}return e.abrupt("return");case 2:if(e.prev=2,!s){e.next=7;break}e.t0=n,e.next=10;break;case 7:return e.next=9,x(b);case 9:e.t0=e.sent;case 10:if(l=e.t0,!p){e.next=13;break}return e.abrupt("return");case 13:h(l),m={userId:t,image:l,info:{nickname:r,message:i,liveMode:o,micOn:u,speakerOn:d},updated:Date.now()},c.set(t,m),e.next=22;break;case 19:e.prev=19,e.t1=e.catch(2),console.error(e.t1);case 22:a=setTimeout(f,12e4);case 23:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(){return e.apply(this,arguments)}}();return f(),function(){p=!0,clearTimeout(a)}}),[e,t,b,n,r,i,s,o,u,d]),{myImage:g,roomImages:I}},M=n(15),I=n(1238),w=n(1239),S=n(325),C=function(){var e=Object(m.a)(j.a.mark((function e(t){var n,r,c,i,s,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?{audio:{deviceId:t}}:{audio:!0},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return r=e.sent,c=r.getAudioTracks(),i=Object(a.a)(c,1),s=i[0],e.next=7,s.applyConstraints({echoCancellation:!0,echoCancellationType:{ideal:"system"},noiseSuppression:{ideal:!0}});case 7:return o=function(){s.stop()},e.abrupt("return",{stream:r,dispose:o});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e,t,n){var a=t||new MediaStream;return a.addTrack(e),a.dispatchEvent(new MediaStreamTrackEvent("addtrack",{track:e})),e.addEventListener("ended",(function(){a.removeTrack(e),0===a.getTracks().length&&n(a)})),a},E=(n(526),i.a.memo((function(e){var t=e.roomId,n=e.userId,i=Object(c.useState)(""),s=Object(a.a)(i,2),o=s[0],u=s[1],d=Object(c.useState)("background"),p=Object(a.a)(d,2),f=p[0],j=p[1],m=Object(c.useState)(100),O=Object(a.a)(m,2),v=O[0],g=O[1],h=Object(c.useState)(100),x=Object(a.a)(h,2),y=x[0],k=x[1],M=Object(c.useState)(100),I=Object(a.a)(M,2),w=I[0],S=I[1],C=Object(c.useState)(100),T=Object(a.a)(C,2),E=T[0],N=T[1],A=Object(c.useState)(0),D=Object(a.a)(A,2),z=D[0],L=D[1],R=Object(c.useState)(""),F=Object(a.a)(R,2),U=F[0],G=F[1],P=Object(c.useState)(""),B=Object(a.a)(P,2),H=B[0],J=B[1],V=Object(c.useState)(""),W=Object(a.a)(V,2),q=W[0],X=W[1],Y=Object(c.useState)(null),K=Object(a.a)(Y,2),_=K[0],Q=K[1];return Object(r.jsxs)("div",{className:"RegionEditor-container",children:[Object(r.jsx)("h3",{children:"Region Editor"}),Object(r.jsxs)("label",{children:["Region ID:"," ",Object(r.jsx)("input",{value:o,onChange:function(e){return u(e.target.value)}})]}),Object(r.jsx)("hr",{}),Object(r.jsxs)("label",{children:["Type:"," ",Object(r.jsxs)("select",{value:f,onChange:function(e){return j(e.target.value)},children:[Object(r.jsx)("option",{value:"background",children:"Background"}),Object(r.jsx)("option",{value:"meeting",children:"Meeting"}),Object(r.jsx)("option",{value:"chat",children:"Chat"}),Object(r.jsx)("option",{value:"media",children:"Media"}),Object(r.jsx)("option",{value:"goboard",children:"Go Board"})]})]}),Object(r.jsx)("hr",{}),Object(r.jsxs)("label",{children:["Left:"," ",Object(r.jsx)("input",{type:"number",value:v,onChange:function(e){return g(Number(e.target.value))}})]}),Object(r.jsxs)("label",{children:["Top:"," ",Object(r.jsx)("input",{type:"number",value:y,onChange:function(e){return k(Number(e.target.value))}})]}),Object(r.jsx)("hr",{}),Object(r.jsxs)("label",{children:["Width:"," ",Object(r.jsx)("input",{type:"number",value:w,onChange:function(e){return S(Number(e.target.value))}})]}),Object(r.jsxs)("label",{children:["Height:"," ",Object(r.jsx)("input",{type:"number",value:E,onChange:function(e){return N(Number(e.target.value))}})]}),Object(r.jsx)("hr",{}),"chat"!==f&&Object(r.jsxs)("label",{children:["zIndex:"," ",Object(r.jsx)("input",{type:"number",value:z,max:0,onChange:function(e){return L(Number(e.target.value))}})]}),Object(r.jsx)("hr",{}),Object(r.jsxs)("label",{children:["Background:"," ",Object(r.jsx)("input",{value:U,onChange:function(e){return G(e.target.value)}})]}),Object(r.jsxs)("label",{children:["Border:"," ",Object(r.jsx)("input",{value:H,onChange:function(e){return J(e.target.value)}})]}),Object(r.jsx)("hr",{}),Object(r.jsxs)("label",{children:["Iframe:"," ",Object(r.jsx)("input",{value:q,onChange:function(e){return X(e.target.value)}})]}),Object(r.jsx)("hr",{}),Object(r.jsx)("button",{type:"button",onClick:function(){return function(){var e={type:f,position:[v,y],size:[w,E],zIndex:z,background:U,border:H,iframe:q};Object(l.a)(t,n).ydoc.getMap(b).set(o,e)}()},disabled:!o,children:"Add Region"}),Object(r.jsx)("hr",{}),Object(r.jsxs)("button",{type:"button",className:"RegionEditor-toggle",onClick:function(){_?Q(null):function(){var e=Object(l.a)(t,n).ydoc.getMap(b);Q(JSON.stringify(e.toJSON()))}()},children:["Import/Export ",_?Object(r.jsx)(r.Fragment,{children:"\u25bc"}):Object(r.jsx)(r.Fragment,{children:"\u25b6"})]}),!!_&&Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{children:["All Region Data:"," ",Object(r.jsx)("textarea",{value:_,onChange:function(e){return Q(e.target.value)}})]}),Object(r.jsx)("button",{type:"button",onClick:function(){var e=Object(l.a)(t,n).ydoc.getMap(b);try{Object.entries(JSON.parse(_||"")).forEach((function(t){var n=Object(a.a)(t,2),r=n[0],c=n[1];e.set(r,c)})),Q(null)}catch(r){console.log("failed to save all region data",r)}},children:"Replace (Be careful)"})]})]})}))),N=(n(527),n(28)),A=n(9),D=function(){var e=Object(m.a)(j.a.mark((function e(t){var n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.slice(0,20),e.next=3,Object(A.h)(t.slice(N.a));case 3:return a=e.sent,e.next=6,window.crypto.subtle.exportKey("jwk",a);case 6:return r=e.sent.k,e.abrupt("return","https://excalidraw.com/#room=".concat(n,",").concat(r));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=i.a.memo((function(e){var t=e.roomId,n=Object(c.useState)(),i=Object(a.a)(n,2),s=i[0],o=i[1];Object(c.useEffect)((function(){Object(m.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,D(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[t]);var u="remote-faces://".concat(window.location.href.replace(/^https:\/\//,""));return Object(r.jsxs)("div",{className:"LinkOpener-container",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{title:"Share this link with your colleagues",children:"Room Link: "}),Object(r.jsx)("input",{value:window.location.href,readOnly:!0})]}),Object(r.jsx)("div",{children:Object(r.jsx)("a",{href:u,title:"Open this link in the desktop app",children:"Open App"})}),Object(r.jsx)("div",{children:Object(r.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:"Open Excalidraw"})})]})})),L=(n(528),n(529),i.a.memo((function(){return Object(r.jsx)("div",{className:"Loading-container",children:Object(r.jsx)("div",{className:"loader",children:Object(r.jsx)("div",{children:"Loading..."})})})}))),R=(n(530),n(31)),F=n(326),U=i.a.memo((function(e){var t=e.image,n=e.nickname,a=e.statusMesg,c=e.setStatusMesg,i=e.obsoleted,s=e.liveMode,o=e.stream,u=e.muted,d=e.micOn,p=e.speakerOn,l=e.toggleSuspended,b=e.suspended,f=Object(O.a)(a)[0],j=c?String.fromCodePoint(128221):"";f&&(j=Object(F.b)(f)?f:String.fromCodePoint(128172));return Object(r.jsxs)("div",{className:"FaceCard-container",style:{opacity:i?.2:1},children:[s&&!i&&o?Object(r.jsx)("video",{className:"FaceCard-photo",ref:function(e){e&&e.srcObject!==o&&(e.srcObject=o)},autoPlay:!0,playsInline:!0,muted:u}):Object(r.jsx)("img",{src:t||R.a,className:"FaceCard-photo",alt:"faceImage"}),Object(r.jsx)("div",{className:"FaceCard-name",children:n}),c?Object(r.jsx)("button",{type:"button",className:"FaceCard-mesg",title:a||"(No status message)",onClick:function(){if(c){var e=window.prompt("Enter status message");null!==e&&c(e)}},children:j}):Object(r.jsx)("div",{className:"FaceCard-mesg",title:a||"(No status message)",children:j}),s&&!i&&o&&Object(r.jsx)("div",{className:"FaceCard-live-indicator",title:"Live Mode On",children:"\u25c9"}),s&&!i&&!o&&Object(r.jsx)("div",{className:"FaceCard-live-indicator",title:"Live Mode Available",children:"\u25ce"}),s&&!i&&Object(r.jsxs)("div",{className:"FaceCard-mic-speaker-icons",children:[d&&Object(r.jsx)("span",{title:"Mic On",children:"\ud83c\udfa4"}),p&&Object(r.jsx)("span",{title:"Speaker On",children:"\ud83d\udd08"})]}),!s&&l&&Object(r.jsxs)("button",{type:"button",className:"FaceCard-camera",onClick:l,title:b?"Enable Camera":"Disable Camera",children:["\ud83d\udcf7",b&&Object(r.jsx)("span",{className:"FaceCard-camera-disabled",children:"\u274c"})]})]})})),G=i.a.memo((function(e){var t=e.roomId,n=e.userId,a=e.avatar,c=e.nickname,i=e.statusMesg,s=e.setStatusMesg,o=e.videoDeviceId,u=e.toggleSuspended,d=e.suspended,p=k(t,n,a,c,i,d,!1,!1,!1,o),l=p.myImage,b=p.roomImages,f=Date.now()-12e4;return Object(r.jsxs)("div",{className:"FaceList-list",children:[Object(r.jsx)("div",{className:"FaceList-item",children:Object(r.jsx)(U,{image:l,nickname:c,statusMesg:i,setStatusMesg:s,liveMode:!1,muted:!0,micOn:!1,speakerOn:!1,toggleSuspended:u,suspended:d})}),b.map((function(e){return Object(r.jsx)("div",{className:"FaceList-item",children:Object(r.jsx)(U,{image:e.image,nickname:e.info.nickname,statusMesg:e.info.message,obsoleted:e.updated<f,liveMode:!1,muted:!0,micOn:!1,speakerOn:!1})},e.userId)})),!b.length&&Object(r.jsx)("div",{className:"FaceList-item",children:Object(r.jsx)(L,{})})]})})),P=n(30),B=i.a.lazy((function(){return Promise.all([n.e(6),n.e(11)]).then(n.bind(null,1243))})),H=i.a.lazy((function(){return n.e(15).then(n.bind(null,1244))})),J=i.a.lazy((function(){return Promise.all([n.e(17),n.e(13)]).then(n.bind(null,1245))})),V=i.a.memo((function(e){var t=e.roomId,n=e.userId,a=e.nickname,i=e.id,s=e.data,o=e.highlight,u="meeting"===s.type&&(o?"0 0 0 5px pink":"0 0 0 1px pink")||void 0;return Object(r.jsxs)("div",{className:"GatherArea-region",style:{left:"".concat(s.position[0],"px"),top:"".concat(s.position[1],"px"),width:"".concat(s.size[0],"px"),height:"".concat(s.size[1],"px"),boxShadow:u,zIndex:"chat"!==s.type?s.zIndex:void 0,background:s.background,border:s.border},children:[s.iframe&&Object(r.jsx)("iframe",{title:i,src:s.iframe,frameBorder:"0"}),"chat"===s.type&&Object(r.jsx)(c.Suspense,{fallback:Object(r.jsx)(P.a,{}),children:Object(r.jsx)(B,{roomId:t,userId:n,nickname:a,uniqueId:i})}),"media"===s.type&&Object(r.jsx)(c.Suspense,{fallback:Object(r.jsx)(P.a,{}),children:Object(r.jsx)(H,{roomId:t,userId:n,nickname:a,uniqueId:i})}),"goboard"===s.type&&Object(r.jsx)(c.Suspense,{fallback:Object(r.jsx)(P.a,{}),children:Object(r.jsx)(J,{roomId:t,userId:n,uniqueId:i})})]})})),W=i.a.memo((function(e){var t=e.nickname,n=e.statusMesg,a=e.setStatusMesg,c=e.image,i=e.obsoleted,s=e.position,o=e.setPosition,u=e.registerOnMouseDrag,d=e.stream,p=e.muted,l=e.toggleSuspended,b=e.suspended,f=!!o;return Object(r.jsxs)("div",{className:"GatherArea-avatar",style:{left:"".concat(s[0],"px"),top:"".concat(s[1],"px")},onMouseDown:function(e){if(e.preventDefault(),f){var t=e.currentTarget,n=[e.clientX-s[0],e.clientY-s[1]];u((function(e){var a=e.clientX-n[0],r=e.clientY-n[1];t.style.left="".concat(a,"px"),t.style.top="".concat(r,"px"),null===o||void 0===o||o([a,r])}))}},children:[n&&Object(r.jsx)("div",{className:"GatherArea-avatar-balloon",children:n}),Object(r.jsx)(U,{image:c,nickname:t,statusMesg:n,setStatusMesg:a,obsoleted:!!i,liveMode:!!d,stream:d,muted:!!p,micOn:!!d,speakerOn:!!d,toggleSuspended:l,suspended:b})]})})),q=i.a.memo((function(e){var t=e.roomId,n=e.userId,i=e.avatar,o=e.nickname,u=e.statusMesg,f=e.setStatusMesg,O=e.videoDeviceId,v=e.audioDeviceId,g=e.toggleSuspended,h=e.suspended,x=k(t,n,i,o,u,h,!1,!1,!1,O),y=x.myImage,N=x.roomImages,A=function(e,t){var n,r=Object(c.useState)({}),i=Object(a.a)(r,2),s=i[0],o=i[1],u=Object(c.useState)({position:(n=t,[parseInt(n.slice(0,2),16)/2+50,parseInt(n.slice(2,4),16)/2+30])}),f=Object(a.a)(u,2),j=f[0],m=f[1];Object(c.useEffect)((function(){var n=Object(l.a)(e,t),a=n.ydoc.getMap("gatherAvatarMap"),r=function(){o((function(e){var r=Object(d.a)({},e),c=!1;return a.forEach((function(e,a){var i,s;a!==t&&n.userIdMap[a]&&function(e){try{var t=e;return"number"===typeof t.position[0]&&"number"===typeof t.position[1]}catch(n){return!1}}(e)&&(r[a]?(i=e,s=r[a],(i.position[0]!==s.position[0]||i.position[1]!==s.position[1])&&(r[a]=e,c=!0)):(r[a]=e,c=!0))})),Object.keys(r).forEach((function(e){n.userIdMap[e]||(delete r[e],c=!0)})),c?r:e}))};a.observe(r);var c=Object(p.subscribe)(n.userIdMap,r);return r(),function(){c(),a.unobserve(r)}}),[e,t]);var O=Object(c.useRef)();Object(c.useEffect)((function(){j&&(O.current?O.current=j:(O.current=j,setTimeout((function(){Object(l.a)(e,t).ydoc.getMap("gatherAvatarMap").set(t,O.current),O.current=void 0}),500)))}),[e,t,j]);var v=Object(c.useState)({}),g=Object(a.a)(v,2),h=g[0],x=g[1];Object(c.useEffect)((function(){var n=Object(l.a)(e,t).ydoc.getMap(b),a=function(){x((function(e){var t={};return n.forEach((function(n,a){var r,c;(function(e){try{var t=e;return!(!["background","meeting","chat","media","goboard"].includes(t.type)||"number"!==typeof t.position[0]||"number"!==typeof t.position[1]||"number"!==typeof t.size[0]||"number"!==typeof t.size[1]||"undefined"!==typeof t.zIndex&&"number"!==typeof t.zIndex||"undefined"!==typeof t.background&&"string"!==typeof t.background||"undefined"!==typeof t.border&&"string"!==typeof t.border||"undefined"!==typeof t.iframe&&"string"!==typeof t.iframe)}catch(n){return!1}})(n)&&(e[a]&&(c=n,(r=e[a]).type===c.type&&r.position[0]===c.position[0]&&r.position[1]===c.position[1]&&r.size[0]===c.size[0]&&r.size[1]===c.size[1]&&r.zIndex===c.zIndex&&r.background===c.background&&r.border===c.border&&r.iframe===c.iframe)?t[a]=e[a]:t[a]=n)})),t}))};return n.observe(a),a(),function(){n.unobserve(a)}}),[e,t]);var y=Object(c.useCallback)((function(n,a){Object(l.a)(e,t).ydoc.getMap(b).set(n,a)}),[e,t]);return{avatarMap:s,myAvatar:j,setMyAvatar:m,regionMap:h,updateRegion:y}}(t,n),D=A.avatarMap,L=A.myAvatar,R=A.setMyAvatar,F=A.regionMap,U=Object(c.useRef)(),P=Object(c.useCallback)((function(e){U.current=e}),[]),B=Object.keys(F).sort((function(e,t){var n,a;return(null!==(n=F[t].zIndex)&&void 0!==n?n:0)-(null!==(a=F[e].zIndex)&&void 0!==a?a:0)})).find((function(e){var t=F[e],n=t.type,a=t.position,r=t.size;return"meeting"===n&&a[0]<=L.position[0]&&a[1]<=L.position[1]&&L.position[0]+36<=a[0]+r[0]&&L.position[1]+36<=a[1]+r[1]})),H=function(e,t,n,r,i,o,u,p){var b="".concat(p||"face","Video"),f="".concat(p||"face","Audio"),O=Object(c.useState)(null),v=Object(a.a)(O,2),g=v[0],h=v[1],x=Object(c.useState)({}),y=Object(a.a)(x,2),k=y[0],E=y[1],N=Object(c.useRef)(!0);Object(c.useEffect)((function(){return function(){N.current=!1}}),[]);var A=function(e){var t,n=Object(a.a)(e,2),r=n[0],c=n[1];if("ended"!==c.readyState&&!(null===(t=k[r])||void 0===t?void 0:t.getTracks().includes(c))){var i=function(e){N.current&&E((function(t){var n=t[r],a=Object(I.a)(t,[r].map(w.a));return n===e?a:t}))};E((function(e){var t=e[r],n=T(c,t,i);return t===n?e:Object(d.a)(Object(d.a)({},e),{},Object(M.a)({},r,n))}))}},D=Object(s.useSnapshot)(Object(l.a)(e,t).trackMap);return Object.entries(D[b]||{}).forEach(A),Object.entries(D[f]||{}).forEach(A),Object(c.useEffect)((function(){var r=Object(l.a)(e,t),c=null;return n&&Object(m.a)(j.a.mark((function e(){var t,n,i,s,u,d,p,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.a)(o);case 2:t=e.sent,n=t.stream,i=t.dispose,s=n.getVideoTracks(),u=Object(a.a)(s,1),d=u[0],r.addMediaType(b),r.addTrack(b,d),p=function(e){N.current&&h((function(t){return t===e?null:t}))},h((function(e){return T(d,e,p)})),l=function(){r.removeMediaType(b),r.removeTrack(b),i(),d.dispatchEvent(new Event("ended"))},!1===c?l():c=l;case 12:case"end":return e.stop()}}),e)})))(),function(){c&&c(),c=!1}}),[e,t,n,o,b]),Object(c.useEffect)((function(){var n=Object(l.a)(e,t),c=null;return r&&Object(m.a)(j.a.mark((function e(){var t,r,i,s,o,d,p,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(u);case 2:t=e.sent,r=t.stream,i=t.dispose,s=r.getAudioTracks(),o=Object(a.a)(s,1),d=o[0],n.addMediaType(f),n.addTrack(f,d),p=function(e){N.current&&h((function(t){return t===e?null:t}))},h((function(e){return T(d,e,p)})),l=function(){n.removeMediaType(f),n.removeTrack(f),i(),d.dispatchEvent(new Event("ended"))},!1===c?l():c=l;case 12:case"end":return e.stop()}}),e)})))(),function(){c&&c(),c=!1}}),[e,t,r,u,f]),Object(c.useEffect)((function(){if(g){g.getAudioTracks().forEach((function(e){e.enabled=i}));var e=function(e){var t=e.track;"audio"===t.kind&&(t.enabled=i)};return g.addEventListener("addtrack",e),function(){g.removeEventListener("addtrack",e)}}}),[g,i]),{faceStream:g,faceStreamMap:k}}(t,n,!!B,!!B,!0,O,v,"gatherArea/meeting/".concat(B,"/")),J=H.faceStream,q=H.faceStreamMap,X=Object(c.useState)(null),Y=Object(a.a)(X,2),K=Y[0],_=Y[1],Q=Date.now()-12e4;return Object(r.jsxs)("div",{className:"GatherArea-container",children:[Object(r.jsxs)("div",{className:"GatherArea-body",onMouseMove:function(e){U.current&&U.current(e)},onMouseUp:function(){P()},children:[Object.entries(F).map((function(e){var c=Object(a.a)(e,2),i=c[0],s=c[1];return Object(r.jsx)(V,{roomId:t,userId:n,nickname:o,id:i,data:s,highlight:i===B},i)})),Object.entries(D).map((function(e){var t=Object(a.a)(e,2),c=t[0],i=t[1];if(c===n)return null;var s=N.find((function(e){return e.userId===c}));return s?Object(r.jsx)(W,{nickname:s.info.nickname,statusMesg:s.info.message,image:s.image,obsoleted:s.updated<Q,position:i.position,registerOnMouseDrag:P,stream:q[c]},c):null})),Object(r.jsx)(W,{nickname:o,statusMesg:u,setStatusMesg:f,image:y,position:L.position,setPosition:function(e){return R((function(t){return Object(d.a)(Object(d.a)({},t),{},{position:e})}))},registerOnMouseDrag:P,stream:J||void 0,muted:!0,toggleSuspended:g,suspended:h})]}),Object(r.jsx)("div",{className:"GatherArea-facelist",children:Object(r.jsx)(G,{roomId:t,userId:n,avatar:i,nickname:o,statusMesg:u,setStatusMesg:f,videoDeviceId:O,toggleSuspended:g,suspended:h})}),Object(r.jsxs)("div",{className:"GatherArea-toolbar",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{type:"button",onClick:function(){return _("region-editor"===K?null:"region-editor")},children:"region-editor"===K?"Close Region Editor":"Open Region Editor"}),"region-editor"===K&&Object(r.jsx)("div",{className:"GatherArea-region-editor",children:Object(r.jsx)(E,{roomId:t,userId:n})})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{type:"button",onClick:function(){return _("link-opener"===K?null:"link-opener")},children:"link-opener"===K?"Close Link Opener":"Open Link Opener"}),"link-opener"===K&&Object(r.jsx)("div",{className:"GatherArea-link-opener",children:Object(r.jsx)(z,{roomId:t})})]})]})]})})),X=i.a.memo((function(){var e=Object(s.useSnapshot)(o.b),t=e.roomId,n=e.userId,i=e.config,d=Object(c.useState)(""),p=Object(a.a)(d,2),l=p[0],b=p[1];return Object(c.useEffect)((function(){Object(u.e)(t)}),[t]),Object(r.jsx)("div",{className:"SingleRoom-container",children:Object(r.jsx)(q,{roomId:t,userId:n,avatar:i.avatar,nickname:i.nickname,statusMesg:l,setStatusMesg:b,suspended:!i.takePhoto,videoDeviceId:i.videoDeviceId,audioDeviceId:i.audioDeviceId,toggleSuspended:o.c})})}));t.default=X},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){return new Promise((function(t){return setTimeout(t,e)}))}},325:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o}));var a=n(2),r=n.n(a),c=n(4),i=n(3),s=function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a,i,s,o,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?{video:{deviceId:t}}:{video:!0},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return a=e.sent,i=a.getVideoTracks(),s=Object(c.a)(i,1),o=s[0],u=function(){o.stop()},e.abrupt("return",{stream:a,dispose:u});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a,i,s,o,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={video:{deviceId:t,frameRate:{max:5},width:{exact:72},height:{exact:72}}},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return a=e.sent,i=a.getVideoTracks(),s=Object(c.a)(i,1),o=s[0],u=function(){o.stop()},e.abrupt("return",{stream:a,dispose:u});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},326:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));n(531);var a=n(319),r=n(195),c=a.a,i=function(e){return!!Object(a.b)(e,"apple",r)}},521:function(e,t,n){},522:function(e,t,n){},526:function(e,t,n){},527:function(e,t,n){},528:function(e,t,n){},529:function(e,t,n){},530:function(e,t,n){}}]);
//# sourceMappingURL=9.accc50d1.chunk.js.map