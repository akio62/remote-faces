(this["webpackJsonpremote-faces-web"]=this["webpackJsonpremote-faces-web"]||[]).push([[2],[,,,,,,function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"f",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"g",(function(){return s}));var r=function(){var e=window.location.hash.slice(1);return new URLSearchParams(e).get("roomId")},a=function(e){var t=window.location.hash.slice(1),n=new URLSearchParams(t);n.set("roomId",e),window.location.hash=n.toString()},c=function(){var e=window.location.hash.slice(1);return new URLSearchParams(e).has("peerjs")},o=function(){var e=window.location.hash.slice(1),t=new URLSearchParams(e).get("peerjs");try{var n=new URL(t||""),r="https:"===n.protocol,a=r?443:80;return{host:n.host.split(":")[0],port:n.port?Number(n.port):a,path:n.pathname,secure:r}}catch(c){}},i=function(){var e=window.location.hash.slice(1);return new URLSearchParams(e).has("pubsub")},u=function(){var e=window.location.hash.slice(1);return new URLSearchParams(e).get("roomPreset")},s=function(e){var t=window.location.hash.slice(1),n=new URLSearchParams(t);n.set("roomPreset",e),window.location.hash=n.toString()}},,,function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return b}));var r=n(5),a=n(10),c=n(6),o=n(31),i=function(e,t){try{window.localStorage.setItem(e,t)}catch(n){console.info("Failed to save string to localStorage",n)}},u=function(e){try{return window.localStorage.getItem(e)||""}catch(t){return""}},s=u("avatar_img")||o.b,A=u("nickname"),f=u("take_photo"),d=u("faceimage_video_device_id"),l=u("faceimage_audio_device_id"),p=Object(r.proxy)({roomId:Object(c.b)()||"",roomEntered:!1,userId:Object(a.j)(),config:{avatar:s,nickname:A,takePhoto:!!f,videoDeviceId:d,audioDeviceId:l}}),h=function(e,t,n,r,a){p.config={avatar:e,nickname:t,takePhoto:n,videoDeviceId:r,audioDeviceId:a},i("avatar_img",e),i("nickname",t),i("take_photo",n?"yes":""),i("faceimage_video_device_id",r),i("faceimage_video_device_id",r)},b=function(){var e=!p.config.takePhoto;p.config.takePhoto=e,i("take_photo",e?"yes":"")}},function(e,t,n){"use strict";n.d(t,"k",(function(){return u})),n.d(t,"j",(function(){return s})),n.d(t,"i",(function(){return A})),n.d(t,"g",(function(){return f})),n.d(t,"h",(function(){return d})),n.d(t,"e",(function(){return h})),n.d(t,"b",(function(){return b})),n.d(t,"f",(function(){return v})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return x})),n.d(t,"a",(function(){return g}));var r=n(2),a=n.n(r),c=n(3),o=(n(34),n(32)),i=n(12),u=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new TextEncoder,r=n.encode(t),e.next=4,window.crypto.subtle.digest("SHA-256",r);case 4:return c=e.sent,o=Array.from(new Uint8Array(c)),i=o.map((function(e){return e.toString(16).padStart(2,"0")})).join(""),e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,t=window.crypto.getRandomValues(new Uint8Array(e)),n=Array.from(t),r=n.map((function(e){return e.toString(16).padStart(2,"0")})).join("");return r},A=function(){return 1e3+window.crypto.getRandomValues(new Uint16Array(1))[0]%9e3},f=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.crypto.subtle.generateKey({name:"AES-GCM",length:128},!0,["encrypt","decrypt"]);case 2:return t=e.sent,e.next=5,window.crypto.subtle.exportKey("raw",t);case 5:return n=e.sent,r=Array.from(new Uint8Array(n)),c=r.map((function(e){return e.toString(16).padStart(2,"0")})).join(""),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,o,i,u=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=u.length>1&&void 0!==u[1]?u[1]:["encrypt","decrypt"],r=t.length/2,c=new Uint8Array(r),o=0;o<r;o+=1)c[o]=parseInt(t.slice(2*o,2*o+2),16);return e.next=6,window.crypto.subtle.importKey("raw",c,{name:"AES-GCM",length:128},!0,n);case 6:return i=e.sent,e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=window.crypto.getRandomValues(new Uint8Array(12)),e.next=3,window.crypto.subtle.encrypt({name:"AES-GCM",iv:r},n,t);case 3:return c=e.sent,(o=new Uint8Array(r.length+c.byteLength)).set(r),o.set(new Uint8Array(c),r.length),e.abrupt("return",o.buffer);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.crypto.subtle.decrypt({name:"AES-GCM",iv:t.slice(n,n+12)},c,t.slice(n+12,n+r));case 2:return o=e.sent,e.abrupt("return",o);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new TextEncoder,c=r.encode(t),o=i.a.deflate(c),e.abrupt("return",l(o,n));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,o,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,0,t.byteLength,n);case 2:return r=e.sent,c=i.a.inflate(new Uint8Array(r)),o=new TextDecoder("utf-8"),u=o.decode(c),e.abrupt("return",u);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function v(e,t){return j.apply(this,arguments)}function j(){return(j=Object(o.a)(a.a.mark((function e(t,n){var r,c,o,u,s,A,f,d,p,h=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=h.length>2&&void 0!==h[2]?h[2]:6e4,c=new TextEncoder,o=c.encode(t),u=[],(s=new i.a.Deflate({chunkSize:r})).onData=function(e){u.push(e)},s.push(o,!0),A=u.length,f=window.crypto.getRandomValues(new Uint8Array(4)),d=0;case 10:if(!(d<A)){e.next=21;break}return(p=new Uint8Array(8+u[d].byteLength)).set(f),p.set(new Uint8Array(Uint16Array.of(d).buffer),4),p.set(new Uint8Array(Uint16Array.of(A).buffer),6),p.set(u[d],8),e.next=18,l(p,n);case 18:d+=1,e.next=10;break;case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=[],m=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,o,u,s,A,f,d,l,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,0,t.byteLength,n);case 2:if(r=e.sent,c=new Uint32Array(r,0,4)[0],o=new Uint16Array(r,4,2)[0],u=new Uint16Array(r,6,2)[0],s=w.find((function(e){return e.id===c}))){e.next=13;break}s={id:c,len:u,chunks:[]},w.push(s),w.length>100&&w.shift(),e.next=15;break;case 13:if(s.len===u){e.next=15;break}throw new Error("chunk len mismatch");case 15:s.chunks[o]=r,A=0;case 17:if(!(A<u)){e.next=23;break}if(s.chunks[A]){e.next=20;break}return e.abrupt("return",null);case 20:A+=1,e.next=17;break;case 23:for(f=new i.a.Inflate,d=0;d<u;d+=1)f.push(new Uint8Array(s.chunks[d],8),d===u-1);return l=new TextDecoder("utf-8"),h=l.decode(f.result),e.abrupt("return",h);case 28:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(e,t){var n=2*(e.length+1)+e.reduce((function(e,t){return e+t.byteLength}),0),r=new Uint8Array(n),a=0;return e.forEach((function(e){if(0===e.byteLength)throw new Error("buffer is empty");r.set(new Uint8Array(Uint16Array.of(e.byteLength).buffer),a),a+=2})),r.set(new Uint8Array(Uint16Array.of(0).buffer),a),a+=2,e.forEach((function(e){r.set(new Uint8Array(e),a),a+=e.byteLength})),l(r,t)},g=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){var o,i,u,s,A;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,n,r,c);case 2:o=e.sent,i=[],u=0;case 5:if(!(u<o.byteLength)){e.next=13;break}if(s=new Uint16Array(o,u,2)[0],u+=2,0!==s){e.next=10;break}return e.abrupt("break",13);case 10:i.push(s),e.next=5;break;case 13:return A=[],i.forEach((function(e){A.push(o.slice(u,u+e)),u+=e})),e.abrupt("return",A);case 16:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}()},,,,,,,,,function(e,t,n){"use strict";n.d(t,"b",(function(){return A})),n.d(t,"a",(function(){return f}));var r=n(2),a=n.n(r),c=n(3),o=n(4),i=n(1),u=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({video:!0});case 3:return e.next=5,navigator.mediaDevices.enumerateDevices();case 5:return t=e.sent,n=t.filter((function(e){return"videoinput"===e.kind})).map((function(e){return{label:e.label,deviceId:e.deviceId}})),e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({audio:!0});case 3:return e.next=5,navigator.mediaDevices.enumerateDevices();case 5:return t=e.sent,n=t.filter((function(e){return"audioinput"===e.kind})).map((function(e){return{label:e.label,deviceId:e.deviceId}})),e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),n},f=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),n}},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=32},,,,,function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var r=n(2),a=n.n(r),c=n(3),o=n(6),i=n(23);n.d(t,"a",(function(){return i.a}));var u=function(){var e=Object(c.a)(a.a.mark((function e(){var t,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(o.d)()){e.next=6;break}return e.next=3,Promise.all([n.e(16),n.e(12)]).then(n.bind(null,48));case 3:t=e.sent.createRoom,e.next=15;break;case 6:if(!Object(o.e)()){e.next=12;break}return e.next=9,Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,47));case 9:t=e.sent.createRoom,e.next=15;break;case 12:return e.next=14,Promise.all([n.e(0),n.e(1),n.e(10),n.e(8)]).then(n.bind(null,49));case 14:t=e.sent.createRoom;case 15:return e.abrupt("return",t.apply(void 0,r));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},,function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n(1),c=n.n(a),o=(n(42),c.a.memo((function(){return Object(r.jsx)("div",{className:"SuspenseFallback-container",children:Object(r.jsx)("div",{children:"Loading..."})})})))},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=",a="data:image/jpeg;base64,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"},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),o=n(33),i=n.n(o),u=(n(40),n(21)),s=n(22),A=n(26),f=n(25),d=(n(41),n(4)),l=c.a.memo((function(e){var t=e.err,n=Object(a.useState)(30),c=Object(d.a)(n,2),o=c[0],i=c[1];return Object(a.useEffect)((function(){o>0?setTimeout((function(){i(o-1)}),1e3):window.location.reload()})),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Unrecoverable error occurred."}),t&&Object(r.jsxs)("h6",{children:[t.name,": ",t.message]}),Object(r.jsxs)("p",{children:["Will auto reload in ",o," sec."]})]})})),p=n(30),h=n(2),b=n.n(h),v=n(3),j=n(16),w=(n(44),n(9)),m=n(10),x=n(28),g=n(19),O=n(6),y=c.a.lazy((function(){return n.e(14).then(n.bind(null,1241))})),k=c.a.lazy((function(){return Promise.all([n.e(0),n.e(5),n.e(9)]).then(n.bind(null,1242))})),E=c.a.memo((function(){var e=Object(j.useSnapshot)(w.b),t=e.roomId,n=e.roomEntered,c=e.config,o=Object(a.useState)(c.nickname),i=Object(d.a)(o,2),u=i[0],s=i[1],A=Object(a.useState)(c.takePhoto),f=Object(d.a)(A,2),l=f[0],p=f[1],h=Object(a.useState)(c.avatar),E=Object(d.a)(h,2),C=E[0],Q=E[1],B=Object(g.b)(),S=Object(g.a)(),U=Object(a.useState)(c.videoDeviceId),I=Object(d.a)(U,2),K=I[0],R=I[1],L=Object(a.useState)(c.audioDeviceId),D=Object(d.a)(L,2),M=D[0],P=D[1],G=Object(a.useState)("intro"),N=Object(d.a)(G,2),T=N[0],V=N[1],F=Object(a.useState)(!1),Y=Object(d.a)(F,2),W=Y[0],q=Y[1],Z=function(){var e=Object(v.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q(!0),w.b.roomId){e.next=8;break}return T&&Object(O.g)(T),e.t0=Object(m.j)(x.a/2),e.next=6,Object(m.g)();case 6:e.t1=e.sent,w.b.roomId=e.t0+e.t1;case 8:Object(w.a)(C,u,l,K,M),w.b.roomEntered=!0;case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return t&&n?Object(r.jsx)(k,{}):Object(r.jsx)("div",{className:"SingleRoomEntrance-container",children:Object(r.jsx)(y,{children:Object(r.jsxs)("div",{className:"SingleRoomEntrance-input",children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:C,alt:"avatar"})}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){return function(e){var t=e&&e[0];if(t)if(t.size>16384)window.alert("Too large: ".concat(t.size));else{var n=new FileReader;n.onload=function(){"string"===typeof n.result&&Q(n.result)},n.readAsDataURL(t)}}(e.target.files)}})}),Object(r.jsx)("div",{children:Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",checked:l,onChange:function(e){return p(e.target.checked)}}),"Take photo every 2 min"]})}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{value:u,onChange:function(e){return s(e.target.value)},placeholder:"Enter nickname"})}),Object(r.jsxs)("div",{children:["Video:"," ",Object(r.jsx)("select",{value:K,onChange:function(e){R(e.target.value)},children:B.map((function(e){return Object(r.jsx)("option",{value:e.deviceId,children:e.label},e.deviceId)}))})]}),Object(r.jsxs)("div",{children:["Audio:"," ",Object(r.jsx)("select",{value:M,onChange:function(e){P(e.target.value)},children:S.map((function(e){return Object(r.jsx)("option",{value:e.deviceId,children:e.label},e.deviceId)}))})]}),!t&&Object(r.jsxs)("div",{children:["Room Preset:"," ",Object(r.jsxs)("select",{value:T,onChange:function(e){V(e.target.value)},children:[Object(r.jsx)("option",{value:"",children:"Empty"}),Object(r.jsx)("option",{value:"intro",children:"Intro"}),Object(r.jsx)("option",{value:"phone",children:"Phone"}),Object(r.jsx)("option",{value:"igo",children:"Igo"})]}),"(It takes about 10 seconds to apply the preset.)"]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"button",onClick:Z,disabled:W||!u,children:t?"Enter the room":"Create a new room"})})]})})})})),C=(n(45),c.a.memo((function(e){var t=e.size,n=e.fill,a=e.color;return Object(r.jsx)("a",{href:"https://github.com/dai-shi/remote-faces",className:"GitHubCorner-container","aria-label":"View source on GitHub",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsxs)("svg",{width:t||80,height:t||80,viewBox:"0 0 250 250",style:{fill:n||"#151513",color:a||"#fff",position:"absolute",top:0,border:0,right:0},"aria-hidden":"true",children:[Object(r.jsx)("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),Object(r.jsx)("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"GitHubCorner-octo-arm"}),Object(r.jsx)("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"GitHubCorner-octo-body"})]})})}))),Q=function(e){Object(A.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.children,t=this.state.err;return t?Object(r.jsx)(l,{err:t}):e}}],[{key:"getDerivedStateFromError",value:function(e){return{err:e}}}]),n}(c.a.PureComponent),B=c.a.memo((function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(Q,{children:Object(r.jsxs)(a.Suspense,{fallback:Object(r.jsx)(p.a,{}),children:[Object(r.jsx)(E,{}),Object(r.jsx)(C,{size:40,fill:"gray"})]})})})}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(B,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[46,3,4]]]);
//# sourceMappingURL=main.25ebd026.chunk.js.map