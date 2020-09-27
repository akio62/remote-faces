(this["webpackJsonpremote-faces-web"]=this["webpackJsonpremote-faces-web"]||[]).push([[5],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){return new Promise((function(t){return setTimeout(t,e)}))}},1151:function(e,t,n){"use strict";n.r(t),n.d(t,"SingleRoom",(function(){return ce}));var a=n(5),r=n(0),c=n.n(r),i=(n(470),n(4)),o=function(e,t){try{window.localStorage.setItem(e,t)}catch(n){console.info("Failed to save string to localStorage",n)}},u=function(e){try{return window.localStorage.getItem(e)||""}catch(t){return""}},s=n(209),l=n(182),d=(n(471),n(1)),f=n.n(d),m=n(2),p=n(114),b=n(99),v=n(104),A=function(){var e=Object(m.a)(f.a.mark((function e(t,n){var a,r,c,i,o,u,s,l,d,m,p;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof ImageCapture){e.next=21;break}return a=new ImageCapture(n),e.next=4,Object(v.a)(2e3);case 4:return e.prev=4,e.next=7,a.takePhoto();case 7:return c=e.sent,e.next=10,createImageBitmap(c);case 10:r=e.sent,e.next=18;break;case 13:return e.prev=13,e.t0=e.catch(4),e.next=17,a.grabFrame();case 17:r=e.sent;case 18:return i=r.width,o=r.height,e.abrupt("return",{srcImg:r,srcW:i,srcH:o});case 21:return(u=document.getElementById("internal-video")).style.display="block",s=u.srcObject,l=function(){u.srcObject=s},u.srcObject=t,e.next=28,Object(v.a)(2e3);case 28:return d=u,m=u.videoWidth,p=u.videoHeight,e.abrupt("return",{srcImg:d,srcW:m,srcH:p,revert:l});case 32:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(m.a)(f.a.mark((function e(t){var n,r,c,i,o,u,s,l,d,m,p,b,v,O,g,E,j,k,h;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?{video:{deviceId:t}}:{video:!0},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return r=e.sent,c=r.getVideoTracks(),i=Object(a.a)(c,1),o=i[0],u=document.getElementById("internal-canvas"),s=u.getContext("2d"),l=72,d=72,u.width=l,u.height=d,e.next=13,A(r,o);case 13:return m=e.sent,p=m.srcImg,b=m.srcW,v=m.srcH,O=m.revert,g=Math.max(l/b,d/v),E=Math.min(b,l/g),j=Math.min(v,d/g),k=(b-E)/2,h=(v-j)/2,s.drawImage(p,k,h,E,j,0,0,l,d),O&&O(),o.stop(),e.abrupt("return",u.toDataURL("image/jpeg"));case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=n(121),E=function(e){return Object(b.c)(e)&&"string"===typeof e.image&&function(e){return Object(b.c)(e)&&"string"===typeof e.nickname&&"string"===typeof e.message&&"boolean"===typeof e.liveMode&&"boolean"===typeof e.micOn&&"boolean"===typeof e.speakerOn}(e.info)},j=n(108),k=n(1147),h=n(1148),y=n(292),w=function(){var e=Object(m.a)(f.a.mark((function e(t){var n,r,c,i,o,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?{audio:{deviceId:t}}:{audio:!0},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return r=e.sent,c=r.getAudioTracks(),i=Object(a.a)(c,1),o=i[0],e.next=7,o.applyConstraints({echoCancellation:!0,echoCancellationType:{ideal:"system"},noiseSuppression:{ideal:!0}});case 7:return u=function(){o.stop()},e.abrupt("return",{stream:r,dispose:u});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e,t,n){var a=t||new MediaStream;return a.addTrack(e),a.dispatchEvent(new MediaStreamTrackEvent("addtrack",{track:e})),e.addEventListener("ended",(function(){a.removeTrack(e),0===a.getTracks().length&&n(a)})),a},I=c.a.memo((function(e){var t=e.image,n=e.nickname,a=e.statusMesg,r=e.obsoleted,i=e.liveMode,o=e.stream,u=e.muted,s=e.micOn,d=e.speakerOn;return c.a.createElement("div",{className:"FaceImages-card",style:{opacity:r?.2:1}},i&&!r&&o?c.a.createElement("video",{className:"FaceImages-photo",ref:function(e){e&&e.srcObject!==o&&(e.srcObject=o)},autoPlay:!0,playsInline:!0,muted:u}):c.a.createElement("img",{src:t||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=",className:"FaceImages-photo",alt:"myself"}),c.a.createElement("div",{className:"FaceImages-name"},n),c.a.createElement("div",{className:"FaceImages-mesg",title:Object(l.a)(a)[1]?a:"(No status message)"},Object(l.a)(a)[0]),i&&!r&&o&&c.a.createElement("div",{className:"FaceImages-live-indicator",title:"Live Mode On"},"\u25c9"),i&&!r&&!o&&c.a.createElement("div",{className:"FaceImages-live-indicator",title:"Live Mode Available"},"\u25ce"),i&&!r&&c.a.createElement("div",{className:"FaceImages-mic-speaker-icons"},s&&c.a.createElement("span",{title:"Mic On"},"\ud83c\udfa4"),d&&c.a.createElement("span",{title:"Speaker On"},"\ud83d\udd08")))})),C=c.a.memo((function(e){var t=e.roomId,n=e.userId,i=e.nickname,o=e.statusMesg,u=e.suspended,s=e.liveMode,d=e.micOn,b=e.speakerOn,v=e.videoDeviceId,A=e.audioDeviceId,C=function(e,t,n,c,i,o,u,s,d){var b=Object(r.useState)(),v=Object(a.a)(b,2),A=v[0],j=v[1],k=Object(r.useState)([]),h=Object(a.a)(k,2),y=h[0],w=h[1],S=Object(r.useState)(),I=Object(a.a)(S,2),C=I[0],x=I[1];if(C)throw C;var M=Object(r.useRef)();Object(g.e)(e,t,Object(r.useCallback)((function(e){M.current&&e(M.current)}),[]));var N=Object(g.a)(e,t);return Object(g.b)(e,t,Object(r.useCallback)((function(e,t){if(E(e)){var n=Object(p.a)(Object(p.a)({},e),{},{userId:t.userId,received:Date.now(),obsoleted:!1,peerIndex:t.peerIndex});w((function(e){return e.find((function(e){return e.userId===n.userId}))?e.map((function(e){return e.userId===n.userId?n:e})):[].concat(Object(l.a)(e),[n])}))}}),[])),Object(g.d)(e,t,Object(r.useCallback)((function(e){if(e&&"CONNECTION_CLOSED"===e.type){var t=e.peerIndex;w((function(e){var n=!1,a=e.map((function(e){return e.peerIndex===t?(n=!0,Object(p.a)(Object(p.a)({},e),{},{obsoleted:!0})):e}));return n?a:e}))}}),[])),Object(r.useEffect)((function(){var e,t=function(){var e=Date.now()-12e4,t=Date.now()-6e5;w((function(n){var a=!1,r=n.map((function(n){return n.received<e&&!n.obsoleted?(a=!0,Object(p.a)(Object(p.a)({},n),{},{obsoleted:!0})):n.received<t&&n.obsoleted?(a=!0,null):n})).filter((function(e){return e}));return a?r:n}))},a=!1,r=function(){var l=Object(m.a)(f.a.mark((function l(){var m,p;return f.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(!a){l.next=2;break}return l.abrupt("return");case 2:if(l.prev=2,t(),!i){l.next=8;break}l.t0="data:image/jpeg;base64,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",l.next=11;break;case 8:return l.next=10,O(d);case 10:l.t0=l.sent;case 11:if(m=l.t0,!a){l.next=14;break}return l.abrupt("return");case 14:j(m),N(p={image:m,info:{nickname:n,message:c,liveMode:o,micOn:u,speakerOn:s}}),M.current=p,l.next=24;break;case 21:l.prev=21,l.t1=l.catch(2),x(l.t1);case 24:e=setTimeout(r,12e4);case 25:case"end":return l.stop()}}),l,null,[[2,21]])})));return function(){return l.apply(this,arguments)}}();return r(),function(){a=!0,clearTimeout(e)}}),[e,t,d,n,c,i,o,u,s,N]),{myImage:A,roomImages:y}}(t,n,i,o,u,s,d,b,v),x=C.myImage,M=C.roomImages,N=function(e,t,n,c,i,o,u){var s=Object(r.useState)(null),l=Object(a.a)(s,2),d=l[0],b=l[1],v=Object(r.useState)({}),A=Object(a.a)(v,2),O=A[0],E=A[1],I=Object(r.useRef)(!0);Object(r.useEffect)((function(){return function(){I.current=!1}}),[]);var C=Object(r.useCallback)(function(){var e=Object(m.a)(f.a.mark((function e(t,n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=function(e){I.current&&E((function(t){var a=n.userId,r=t[a],c=Object(k.a)(t,[a].map(h.a));return r===e?c:t}))},E((function(e){var r=e[n.userId],c=S(t,r,a);return r===c?e:Object(p.a)(Object(p.a)({},e),{},Object(j.a)({},n.userId,c))}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[]),x=Object(g.c)(e,t,C,n?"faceVideo":void 0),M=Object(g.c)(e,t,C,c?"faceAudio":void 0);return Object(r.useEffect)((function(){var e=null;return n&&x&&Object(m.a)(f.a.mark((function t(){var n,r,c,i,u,s,l,d;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(y.a)(o);case 2:n=t.sent,r=n.stream,c=n.dispose,i=r.getVideoTracks(),u=Object(a.a)(i,1),s=u[0],l=x(s),d=function(e){I.current&&b((function(t){return t===e?null:t}))},b((function(e){return S(s,e,d)})),e=function(){l(),c(),s.dispatchEvent(new Event("ended"))};case 10:case"end":return t.stop()}}),t)})))(),function(){e&&e()}}),[e,n,o,x]),Object(r.useEffect)((function(){var e=null;return c&&M&&Object(m.a)(f.a.mark((function t(){var n,r,c,i,o,s,l,d;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(u);case 2:n=t.sent,r=n.stream,c=n.dispose,i=r.getAudioTracks(),o=Object(a.a)(i,1),s=o[0],l=M(s),d=function(e){I.current&&b((function(t){return t===e?null:t}))},b((function(e){return S(s,e,d)})),e=function(){l(),c(),s.dispatchEvent(new Event("ended"))};case 10:case"end":return t.stop()}}),t)})))(),function(){e&&e()}}),[e,c,u,M]),Object(r.useEffect)((function(){if(d){d.getAudioTracks().forEach((function(e){e.enabled=i}));var e=function(e){var t=e.track;"audio"===t.kind&&(t.enabled=i)};return d.addEventListener("addtrack",e),function(){d.removeEventListener("addtrack",e)}}}),[d,i]),{faceStream:d,faceStreamMap:O}}(t,n,s,s,d,v,A),L=N.faceStream,B=N.faceStreamMap;return c.a.createElement(c.a.Fragment,null,c.a.createElement(I,{image:x,nickname:i,statusMesg:o,liveMode:s,stream:L||void 0,muted:!0,micOn:d,speakerOn:b}),M.map((function(e){return c.a.createElement(I,{key:e.userId,image:e.image,nickname:e.info.nickname,statusMesg:e.info.message,obsoleted:e.obsoleted,liveMode:e.info.liveMode,stream:s&&B[e.userId]||void 0,muted:!b,micOn:e.info.micOn,speakerOn:e.info.speakerOn})})))})),x=n(472),M=n.n(x),N=(n(473),n(7)),L=function(e){return Array.isArray(e)&&2===e.length&&"string"===typeof e[0]&&"number"===typeof e[1]},B=function(e){return Object(b.c)(e)&&"string"===typeof e.nickname&&"string"===typeof e.messageId&&"number"===typeof e.createdAt&&"string"===typeof e.text&&("undefined"===typeof e.inReplyTo||"string"===typeof e.inReplyTo)&&("undefined"===typeof e.replies||function(e){return Array.isArray(e)&&e.every(L)}(e.replies))},Q=function(e,t){var n=t[1]-e[1];return 0===n?e[0].length-t[0].length:n},D=function(e,t,n){var c=Object(r.useState)([]),i=Object(a.a)(c,2),o=i[0],u=i[1],s=Object(r.useRef)(o);Object(r.useEffect)((function(){s.current=o}));var d=Object(r.useCallback)((function(e){if(e.inReplyTo){var t=e.text,n=e.inReplyTo;u((function(e){return e.map((function(e){if(e.messageId===n){var a=new Map(e.replies);a.set(t,(a.get(t)||0)+1);var r=Object(l.a)(a.entries());return r.sort(Q),Object(p.a)(Object(p.a)({},e),{},{replies:r})}return e}))}))}else u((function(t){if(t.some((function(t){return t.messageId===e.messageId})))return t;var n=[e].concat(Object(l.a)(t));return n.length>100&&n.pop(),n.sort((function(e,t){return t.createdAt-e.createdAt})),n}))}),[]);Object(g.e)(e,t,Object(r.useCallback)((function(e){s.current.forEach((function(t){e({chat:t})}))}),[]));var f=Object(g.a)(e,t);Object(g.b)(e,t,Object(r.useCallback)((function(e){var t;t=e,Object(b.c)(t)&&B(t.chat)&&d(e.chat)}),[d]));var m=Object(r.useCallback)((function(e){var t={nickname:n,messageId:Object(N.j)(),createdAt:Date.now(),text:e};f({chat:t}),d(t)}),[f,n,d]),v=Object(r.useCallback)((function(e,t){var a={nickname:n,messageId:Object(N.j)(),createdAt:Date.now(),text:e,inReplyTo:t};f({chat:a}),d(a)}),[f,n,d]);return{chatList:o,sendChat:m,replyChat:v}},T=(n(474),n(291)),R=T.b,P=n(478),K=n.n(P),U=n(479),F=n.n(U),V=(n(480),{toolbar:["specialCharacters","|","bold","italic","link","blockQuote","|","imageUpload","insertTable","mediaEmbed","|","undo","redo"],balloonToolbar:["heading","|","bulletedList","numberedList","indent","outdent"],link:{addTargetToExternalLinks:!0}}),W=c.a.memo((function(e){var t=e.registerClear,n=e.onChange,a=e.onMetaEnter,i=Object(r.useRef)();return Object(r.useEffect)((function(){var e=function(e){e.metaKey&&"Enter"===e.code&&a()};return i.current.addEventListener("keydown",e),function(){i.current.removeEventListener("keydown",e)}}),[a]),c.a.createElement(K.a,{editor:F.a,config:V,onInit:function(e){i.current=e.sourceElement,t((function(){e.setData("")})),function(e){e.plugins.get("SpecialCharacters").addItems("Emoji",[{title:"smiley face",character:"\ud83d\ude0a"},{title:"rocket",character:"\ud83d\ude80"},{title:"wind blowing face",character:"\ud83c\udf2c\ufe0f"},{title:"floppy disk",character:"\ud83d\udcbe"},{title:"heart",character:"\u2764\ufe0f"}])}(e)},onChange:function(e,t){var a=t.getData();n(a)}})})),Y=c.a.memo((function(e){var t,n=e.item,i=e.replyChat,o=Object(r.useState)(!1),u=Object(a.a)(o,2),s=u[0],l=u[1],d=function(e){return i(e,n.messageId)};return c.a.createElement("li",{key:n.messageId,className:"MomentaryChat-listPart"},s&&c.a.createElement(R,{onSelect:function(e){d(e.native),l(!1)},style:{width:"100%"}}),c.a.createElement("div",{className:"MomentaryChat-listPart-header"},c.a.createElement("div",{className:"MomentaryChat-iconButton-container"},c.a.createElement("div",{className:"MomentaryChat-iconButton"},c.a.createElement("button",{type:"button",onClick:function(){l(!s)}},"+"))),c.a.createElement("span",{className:"MomentaryChat-nickname"},n.nickname||"No Name"),c.a.createElement("span",{className:"MomentaryChat-time"},function(e){return new Date(e.createdAt).toLocaleString().split(" ")[1].slice(0,-3)}(n))),c.a.createElement("div",{className:"MomentaryChat-text ck-content",dangerouslySetInnerHTML:(t=n.text,{__html:M.a.sanitize(t,{ADD_ATTR:["target"]})})}),(n.replies||[]).map((function(e){var t=Object(a.a)(e,2),n=t[0],r=t[1];return c.a.createElement("button",{key:n,className:"MomentaryChat-icon",type:"button",onClick:function(){return d(n)}},n," ",r)})))})),G=c.a.memo((function(e){var t,n=e.chatList,a=e.replyChat,i=Object(r.useRef)(null),o=null===(t=n[0])||void 0===t?void 0:t.messageId;return Object(r.useEffect)((function(){i.current&&o&&(i.current.scrollTop=i.current.scrollHeight)}),[o]),c.a.createElement("ul",{className:"MomentaryChat-list",ref:i},n.map((function(e){return c.a.createElement(Y,{key:e.messageId,item:e,replyChat:a})})))})),q=c.a.memo((function(e){var t=e.roomId,n=e.userId,i=e.nickname,o=Object(r.useRef)(null),u=D(t,n,i),s=u.chatList,l=u.sendChat,d=u.replyChat,f=Object(r.useRef)(),m=Object(r.useState)(!1),p=Object(a.a)(m,2),b=p[0],v=p[1],A=Object(r.useRef)(""),O=Object(r.useCallback)((function(e){A.current=e,v(!!e&&e.length<=1048576)}),[]),g=Object(r.useCallback)((function(){A.current&&A.current.length<=1048576&&(l(A.current),O(""),f.current&&f.current())}),[l,O]),E=function(){var e=Object(r.useRef)(),t=Object(r.useCallback)((function(t){"granted"===Notification.permission&&(e.current&&e.current.close(),e.current=new Notification(t))}),[]);return Object(r.useEffect)((function(){"granted"!==Notification.permission&&Notification.requestPermission()}),[]),t}(),j=s[0];return Object(r.useEffect)((function(){j&&j.createdAt>Date.now()-1e4&&new RegExp("@".concat(i,"\\b")).test(j.text)&&E("You got a new message!")}),[i,j,E]),c.a.createElement("div",{className:"MomentaryChat-container",ref:o},c.a.createElement(G,{chatList:s,replyChat:d}),c.a.createElement("div",{className:"MomentaryChat-editor"},c.a.createElement(W,{registerClear:function(e){f.current=e},onChange:O,onMetaEnter:g})),c.a.createElement("div",{className:"MomentaryChat-button"},c.a.createElement("button",{type:"button",onClick:g,disabled:!b},"Send")))})),z=(n(481),c.a.memo((function(e){var t=e.suspended,n=e.setSuspended,a=e.liveMode,r=e.setLiveMode,i=e.setMicOn,o=e.setSpeakerOn,u=e.secondColumnOpen,s=e.setSecondColumnOpen;return c.a.createElement("div",{className:"ControlPanel-container"},c.a.createElement("button",{type:"button",onClick:function(){return n((function(e){return!e}))},title:t?"Enable Camera":"Disable Camera"},"\ud83d\udcf7",t&&c.a.createElement("span",{className:"ControlPanel-disabled"},"\u274c")),c.a.createElement("button",{type:"button",onClick:function(){return s((function(e){return!e}))},title:u?"Close Right Pane":"Open Right Pane"},u?c.a.createElement(c.a.Fragment,null,"\u25c0"):c.a.createElement(c.a.Fragment,null,"\u25b6")),c.a.createElement("button",{type:"button",onClick:function(){return r((function(e){return!e}))},title:a?"Disable Live Mode":"Enable Live Mode"},"\ud83c\udfa5",!a&&c.a.createElement("span",{className:"ControlPanel-disabled"},"\u274c")),c.a.createElement("div",{className:"ControlPanel-select"},"\ud83c\udf9b",c.a.createElement("select",{onChange:function(e){switch(e.target.value){case"off":o(!1),i(!1);break;case"speaker":o(!0),i(!1);break;case"mic":o(!0),i(!0);break;default:throw new Error("no option")}}},c.a.createElement("option",{value:"off"},"Audio Off"),c.a.createElement("option",{value:"speaker"},"Speaker Only"),c.a.createElement("option",{value:"mic"},"Mic + Speaker"))))}))),H=(n(482),n(467)),Z="true"!==u("config_hidden"),J=c.a.memo((function(e){var t=e.initialText,n=e.onUpdate,i=e.buttonLabel,o=e.placeholder,u=e.clearOnUpdate,s=Object(r.useState)(t),l=Object(a.a)(s,2),d=l[0],f=l[1];return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),d&&(n(d),u&&f(""))}},c.a.createElement("input",{value:d,onChange:function(e){return f(e.target.value)},placeholder:o}),i&&c.a.createElement("button",{type:"submit",disabled:!d},i))})),X=c.a.memo((function(e){var t=e.roomId,n=e.userId,i=e.nickname,u=e.setNickname,s=e.videoDeviceId,l=e.setVideoDeviceId,d=e.audioDeviceId,f=e.setAudioDeviceId,m=Object(r.useState)(Z),p=Object(a.a)(m,2),b=p[0],v=p[1];Object(r.useEffect)((function(){o("config_hidden",b?"false":"true")}),[b]);var A=Object(H.b)(),O=Object(H.a)(),E=Object(g.d)(t,n),j="remote-faces://".concat(window.location.href.replace(/^https:\/\//,""));return c.a.createElement("div",{className:"SettingPanel-container"},c.a.createElement("button",{type:"button",className:"SettingPanel-config-toggle",onClick:function(){return v((function(e){return!e}))}},"Setting",b?c.a.createElement(c.a.Fragment,null,"\u25bc"):c.a.createElement(c.a.Fragment,null,"\u25b6")),b&&c.a.createElement("div",{className:"SettingPanel-config"},c.a.createElement("div",{className:"SettingPanel-config-row"},c.a.createElement("span",{title:"Share this link with your colleagues"},"Room Link:"," "),c.a.createElement("input",{value:window.location.href,readOnly:!0})," ",c.a.createElement("a",{href:j,title:"Open this link in the desktop app"},"Open App")),c.a.createElement("div",{className:"SettingPanel-config-row"},"Your Name:"," ",c.a.createElement(J,{initialText:i,onUpdate:function(e){u(e),o("nickname",e)},placeholder:"Enter your name",buttonLabel:"Set"})),c.a.createElement("div",{className:"SettingPanel-config-row"},"Select Camera:"," ",c.a.createElement("select",{value:s,onChange:function(e){l(e.target.value),o("faceimage_video_device_id",e.target.value)}},A.map((function(e){return c.a.createElement("option",{key:e.deviceId,value:e.deviceId},e.label)})))),c.a.createElement("div",{className:"SettingPanel-config-row"},"Select Mic:"," ",c.a.createElement("select",{value:d,onChange:function(e){f(e.target.value),o("faceimage_audio_device_id",e.target.value)}},O.map((function(e){return c.a.createElement("option",{key:e.deviceId,value:e.deviceId},e.label)})))),c.a.createElement("div",{className:"SettingPanel-status"},JSON.stringify(E))))})),_=(n(483),c.a.memo((function(e){var t=e.initialText,n=e.onUpdate,i=e.buttonLabel,o=e.placeholder,u=e.clearOnUpdate,s=Object(r.useState)(t),l=Object(a.a)(s,2),d=l[0],f=l[1];return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),d&&(n(d),u&&f(""))}},c.a.createElement("input",{value:d,onChange:function(e){return f(e.target.value)},placeholder:o}),i&&c.a.createElement("button",{type:"submit",disabled:!d},i))}))),$=c.a.memo((function(e){var t=e.emoji,n=e.setEmoji,i=e.setStatusMesg,o=Object(r.useState)(!1),u=Object(a.a)(o,2),s=u[0],l=u[1];return c.a.createElement("div",{className:"UserStatus-container"},c.a.createElement("div",{className:"UserStatus-status-area"},c.a.createElement("div",{className:"UserStatus-emoji"},c.a.createElement("button",{type:"button",onClick:function(){l(!s)}},t?c.a.createElement(T.a,{emoji:t,size:10}):":)")),t&&c.a.createElement("div",{className:"UserStatus-statusmesg"},c.a.createElement(_,{initialText:"",onUpdate:i,placeholder:"Enter status message...",buttonLabel:"Set"})),c.a.createElement("button",{type:"button",onClick:function(){n(null),i(""),l(!1)},disabled:!t},"Clear")),s&&c.a.createElement(R,{onSelect:function(e){n(e),l(!1)},style:{width:"100%"}}))})),ee=(n(484),{Welcome:c.a.lazy((function(){return n.e(16).then(n.bind(null,1150))})),"Screen Share":c.a.lazy((function(){return n.e(14).then(n.bind(null,1152))})),"Video Share":c.a.lazy((function(){return n.e(15).then(n.bind(null,1153))})),"White Board":c.a.lazy((function(){return n.e(11).then(n.bind(null,1154))})),"Go Board":c.a.lazy((function(){return Promise.all([n.e(17),n.e(12)]).then(n.bind(null,1155))}))}),te=c.a.memo((function(e){var t=e.roomId,n=e.userId,i=e.nickname,o=Object(r.useState)("Welcome"),u=Object(a.a)(o,2),s=u[0],l=u[1];return c.a.createElement("div",{className:"SelectivePane-container"},c.a.createElement("div",{className:"SelectivePane-select"},"\u2630",c.a.createElement("select",{value:s,onChange:function(e){return l(e.target.value)}},Object.keys(ee).map((function(e){return c.a.createElement("option",{key:e,value:e},e)})))),Object(r.createElement)(ee[s],{roomId:t,userId:n,nickname:i}))})),ne=u("nickname"),ae=u("faceimage_video_device_id"),re=u("faceimage_audio_device_id"),ce=c.a.memo((function(e){var t=e.roomId,n=e.userId,o=Object(r.useState)(ne),u=Object(a.a)(o,2),l=u[0],d=u[1],f=Object(r.useState)(""),m=Object(a.a)(f,2),p=m[0],b=m[1],v=Object(r.useState)(null),A=Object(a.a)(v,2),O=A[0],g=A[1];Object(r.useEffect)((function(){Object(i.g)(t)}),[t]);var E=Object(r.useState)(ae),j=Object(a.a)(E,2),k=j[0],h=j[1],y=Object(r.useState)(re),w=Object(a.a)(y,2),S=w[0],I=w[1],x=Object(r.useState)(!1),M=Object(a.a)(x,2),N=M[0],L=M[1],B=Object(r.useState)(!1),Q=Object(a.a)(B,2),D=Q[0],T=Q[1],R=Object(r.useState)(!1),P=Object(a.a)(R,2),K=P[0],U=P[1],F=Object(r.useState)(!1),V=Object(a.a)(F,2),W=V[0],Y=V[1],G=Object(r.useState)(!0),H=Object(a.a)(G,2),Z=H[0],J=H[1],_=Object(r.useState)(!0),ee=Object(a.a)(_,2),ce=ee[0],ie=ee[1];return Object(s.a)(t,n),c.a.createElement("div",{className:"SingleRoom-container"},c.a.createElement("div",{className:"SingleRoom-1st-column"},c.a.createElement(z,{suspended:N,setSuspended:L,liveMode:D,setLiveMode:T,micOn:K,setMicOn:U,speakerOn:W,setSpeakerOn:Y,secondColumnOpen:Z,setSecondColumnOpen:J}),c.a.createElement(C,{roomId:t,userId:n,videoDeviceId:k,audioDeviceId:S,nickname:l,statusMesg:"".concat((null===O||void 0===O?void 0:O.native)||" ").concat(p),suspended:N,liveMode:D,micOn:K,speakerOn:W})),c.a.createElement("div",{className:"SingleRoom-2nd-column",style:{width:Z?"inherit":"0"}},c.a.createElement("button",{type:"button",className:"SingleRoom-toggle-3rd-column",onClick:function(){return ie((function(e){return!e}))},title:ce?"Close Right Pane":"Open Right Pane"},ce?c.a.createElement(c.a.Fragment,null,"\u25c0"):c.a.createElement(c.a.Fragment,null,"\u25b6")),c.a.createElement($,{emoji:O,setEmoji:g,setStatusMesg:b}),c.a.createElement(X,{roomId:t,userId:n,nickname:l,setNickname:d,videoDeviceId:k,setVideoDeviceId:h,audioDeviceId:S,setAudioDeviceId:I}),c.a.createElement(q,{roomId:t,userId:n,nickname:l})),c.a.createElement("div",{className:"SingleRoom-3rd-column",style:{display:ce?"inherit":"none"}},c.a.createElement(te,{roomId:t,userId:n,nickname:l})))}));t.default=ce},121:function(e,t,n){"use strict";n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return m})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return v}));var a=n(5),r=n(1),c=n.n(r),i=n(2),o=n(0),u=n(22),s=function(){var e=Object(i.a)(c.a.mark((function e(t,n){var a,r,i,o,s,l,d,f,m,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Set,r=new Set,i=new Set,o=new Map,s=new Map,l=function(e){a.forEach((function(t){t(e)}))},d=function(e){r.forEach((function(t){t(e)}))},f=function(e,t){i.forEach((function(n){n(e,t)}))},m=function(e,t,n){var a=s.get(e);a||(a=new Set,s.set(e,a)),a.add({track:t,info:n});var r=o.get(e);r&&r.forEach((function(e){e(t,n)}))},e.next=11,Object(u.b)(t,n,l,d,f,m);case 11:return p=e.sent,e.abrupt("return",{room:p,networkStatusListeners:a,newPeerListeners:r,dataListeners:i,trackListeners:o,trackCache:s,count:0});case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=new Map,d=function(){var e=Object(i.a)(c.a.mark((function e(t,n,a){var r,i,o,u,d,f,m,p,b,v;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(t,"_").concat(n),l.has(r)||l.set(r,s(t,n)),e.next=4,l.get(r);case 4:return i=e.sent,a.networkStatusListener&&i.networkStatusListeners.add(a.networkStatusListener),a.newPeerListener&&i.newPeerListeners.add(a.newPeerListener),a.dataListener&&i.dataListeners.add(a.dataListener),a.trackListener&&(o=a.trackListener,u=o.mediaType,d=o.listener,f=new Set(i.trackListeners.keys()),m=f.size,(p=i.trackListeners.get(u))||(p=new Set,i.trackListeners.set(u,p)),p.add(d),f.add(u),m!==f.size&&i.room.acceptMediaTypes(Array.from(f)),(b=i.trackCache.get(u))&&b.forEach((function(e){"ended"!==e.track.readyState?d(e.track,e.info):b.delete(e)}))),i.count+=1,v=function(){if(a.networkStatusListener&&i.networkStatusListeners.delete(a.networkStatusListener),a.newPeerListener&&i.newPeerListeners.delete(a.newPeerListener),a.dataListener&&i.dataListeners.delete(a.dataListener),a.trackListener){var e=a.trackListener,t=e.mediaType,n=e.listener,c=i.trackListeners.get(t);c&&(c.delete(n),0===c.size&&(i.trackListeners.delete(t),i.room.acceptMediaTypes(Array.from(i.trackListeners.keys()))))}i.count-=1,i.count<=0&&(i.room.dispose(),l.delete(r))},e.abrupt("return",{broadcastData:i.room.broadcastData,sendData:i.room.sendData,addTrack:i.room.addTrack,removeTrack:i.room.removeTrack,unregister:v});case 12:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),f=function(e,t,n){var r=Object(o.useState)(),u=Object(a.a)(r,2),s=u[0],l=u[1];if(s&&"UNKNOWN_ERROR"===s.type)throw new Error("Network Error: ".concat(s.err.message));return Object(o.useEffect)((function(){var a=function(){};return Object(i.a)(c.a.mark((function r(){var i,o;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d(e,t,{networkStatusListener:function(e){l(e),n&&n(e)}});case 2:i=r.sent,o=i.unregister,a=o;case 5:case"end":return r.stop()}}),r)})))(),function(){a()}}),[e,t,n]),s},m=function(e,t,n){Object(o.useEffect)((function(){var a=function(){};return Object(i.a)(c.a.mark((function r(){var i,o,u;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d(e,t,{newPeerListener:function(e){n((function(t){return u(t,e)}))}});case 2:i=r.sent,o=i.unregister,u=i.sendData,a=o;case 6:case"end":return r.stop()}}),r)})))(),function(){a()}}),[e,t,n])},p=function(e,t){var n=Object(o.useRef)(),a=Object(o.useCallback)((function(){n.current&&n.current.apply(n,arguments)}),[]);return Object(o.useEffect)((function(){var a=function(){};return Object(i.a)(c.a.mark((function r(){var i;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d(e,t,{});case 2:i=r.sent,n.current=i.broadcastData,a=i.unregister;case 5:case"end":return r.stop()}}),r)})))(),function(){a()}}),[e,t]),a},b=function(e,t,n){Object(o.useEffect)((function(){var a=function(){};return Object(i.a)(c.a.mark((function r(){var i,o;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d(e,t,{dataListener:n});case 2:i=r.sent,o=i.unregister,a=o;case 5:case"end":return r.stop()}}),r)})))(),function(){a()}}),[e,t,n])},v=function(e,t,n,r){var u=Object(o.useState)(),s=Object(a.a)(u,2),l=s[0],f=s[1];return Object(o.useEffect)((function(){var a=function(){};return r&&Object(i.a)(c.a.mark((function i(){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,d(e,t,{trackListener:{mediaType:r,listener:n}});case 2:o=c.sent,f((function(){return function(e){return o.addTrack(r,e),function(){return o.removeTrack(r)}}})),a=function(){f(void 0),o.unregister()};case 5:case"end":return c.stop()}}),i)})))(),function(){a()}}),[e,t,n,r]),l}},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(5),r=n(0),c=n(99),i=n(121),o=[],u=function(e){var t={};return o.forEach((function(n){n.roomId===e&&(t[n.userId]=n.nickname)})),t},s=function(e,t){var n=Object(r.useState)((function(){return u(e)})),s=Object(a.a)(n,2),l=s[0],d=s[1];return Object(i.b)(e,t,Object(r.useCallback)((function(t,n){if(a=t,Object(c.c)(a)&&Object(c.c)(a.info)&&"string"===typeof a.info.nickname){var a,r=o.findIndex((function(t){return t.roomId===e&&t.userId===n.userId})),i=Date.now();r>=0?(o[r].nickname!==t.info.nickname&&(o[r].nickname=t.info.nickname),o[r].lastUpdated=i):o.push({roomId:e,userId:n.userId,nickname:t.info.nickname,lastUpdated:i});for(var s=o.length-1;s>=0;s-=1)o[s].lastUpdated+6e5<i&&o.splice(s,1);d((function(t){var n=u(e),a=Object.keys(n);return a.length===Object.keys(t).length&&a.every((function(e){return n[e]===t[e]}))?t:n}))}}),[e])),l}},292:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s}));var a=n(1),r=n.n(a),c=n(5),i=n(2),o=n(104),u=function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a,i,o,u,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?{video:{deviceId:t}}:{video:!0},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return a=e.sent,i=a.getVideoTracks(),o=Object(c.a)(i,1),u=o[0],s=function(){u.stop()},e.abrupt("return",{stream:a,dispose:s});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a,i,u,s,l,d,f,m,p,b,v,A,O,g,E,j,k;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?{video:{deviceId:t}}:{video:!0},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return a=e.sent,i=a.getVideoTracks(),u=Object(c.a)(i,1),s=u[0],(l=document.getElementById("internal-video")).style.display="block",l.srcObject=a,e.next=10,Object(o.a)(1e3);case 10:return d=l.videoWidth,f=l.videoHeight,m=document.getElementById("internal-canvas"),p=m.getContext("2d"),72,72,m.width=72,m.height=72,b=Math.max(72/d,72/f),v=Math.min(d,72/b),A=Math.min(f,72/b),O=(d-v)/2,g=(f-A)/2,function e(){p.drawImage(l,O,g,v,A,0,0,72,72),E=setTimeout(e,1e3/15)}(),j=m.captureStream(),k=function(){l.style.display="none",clearTimeout(E),s.stop(),j.getVideoTracks()[0].stop()},e.abrupt("return",{stream:j,dispose:k});case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},467:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d}));var a=n(1),r=n.n(a),c=n(2),i=n(5),o=n(0),u=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.enumerateDevices();case 3:return t=e.sent,n=t.filter((function(e){return"videoinput"===e.kind})).map((function(e){return{label:e.label,deviceId:e.deviceId}})),e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.enumerateDevices();case 3:return t=e.sent,n=t.filter((function(e){return"audioinput"===e.kind})).map((function(e){return{label:e.label,deviceId:e.deviceId}})),e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(o.useEffect)((function(){Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),n},d=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(o.useEffect)((function(){Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),n}},470:function(e,t,n){},471:function(e,t,n){},473:function(e,t,n){},480:function(e,t,n){},481:function(e,t,n){},482:function(e,t,n){},483:function(e,t,n){},484:function(e,t,n){},99:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var a=function(e){return"object"===typeof e&&null!==e},r=function(e,t){return"string"===typeof e[t]},c=function(e,t){return a(e[t])}}}]);
//# sourceMappingURL=5.54e4a554.chunk.js.map