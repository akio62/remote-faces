(this["webpackJsonpremote-faces-web"]=this["webpackJsonpremote-faces-web"]||[]).push([[0],{1051:function(e,n,t){},1053:function(e,n,t){"use strict";t.r(n);var r=t(15),a=t.n(r),c=t(387),o=t.n(c),i=(t(396),t(34)),u=t(36),s=t(59),f=t(60),d=(t(397),t(46)),p=a.a.memo((function(e){var n=e.err,t=Object(r.useState)(30),c=Object(d.a)(t,2),o=c[0],i=c[1];return Object(r.useEffect)((function(){o>0?setTimeout((function(){i(o-1)}),1e3):window.location.reload()})),a.a.createElement("div",null,a.a.createElement("h1",null,"Unrecoverable error occurred."),n&&a.a.createElement("h6",null,n.name,": ",n.message),a.a.createElement("p",null,"Will auto reload in ",o," sec."))})),l=(t(398),a.a.memo((function(){return a.a.createElement("div",{className:"Loading-container"},a.a.createElement("div",null,"Loading..."))}))),v=t(0),b=t.n(v),m=t(12),h=(t(400),t(53)),y=t(231),w=t(85),g=a.a.lazy((function(){return t.e(7).then(t.bind(null,1095))})),C=a.a.lazy((function(){return Promise.all([t.e(3),t.e(4)]).then(t.bind(null,1097))})),x=Object(w.c)(),k=Object(h.f)(),E=a.a.memo((function(){var e=Object(r.useState)(x),n=Object(d.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(!1),i=Object(d.a)(o,2),u=i[0],s=i[1],f=Object(r.useState)(""),p=Object(d.a)(f,2),l=p[0],v=p[1],E=function(){var e=Object(m.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.t1=Object(h.f)(y.a/2),e.next=4,Object(h.c)();case 4:e.t2=e.sent,e.t3=e.t1+e.t2,(0,e.t0)(e.t3);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return t?a.a.createElement(C,{roomId:t,userId:k}):a.a.createElement("div",{className:"SingleRoomEntrance-container"},a.a.createElement(g,null,a.a.createElement("div",{className:"SingleRoomEntrance-input"},!u&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement("button",{type:"button",onClick:E},"Create a new room")),a.a.createElement("div",{className:"SingleRoomEntrance-or"},"OR"),a.a.createElement("div",null,a.a.createElement("button",{type:"button",onClick:function(){return s(!0)}},"Enter an existing room link"))),u&&a.a.createElement("div",null,a.a.createElement("input",{value:l,onChange:function(e){return v(e.target.value)},placeholder:"Enter room link..."}),a.a.createElement("button",{type:"button",onClick:function(){Object(w.a)(l),c(Object(w.b)(l))},disabled:!Object(w.b)(l)},"Enter room"),a.a.createElement("button",{type:"button",onClick:function(){return s(!1)}},"Cancel")))))})),O=(t(1051),a.a.memo((function(e){var n=e.size,t=e.fill,r=e.color;return a.a.createElement("a",{href:"https://github.com/dai-shi/remote-faces",className:"GitHubCorner-container","aria-label":"View source on GitHub",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("svg",{width:n||80,height:n||80,viewBox:"0 0 250 250",style:{fill:t||"#151513",color:r||"#fff",position:"absolute",top:0,border:0,right:0},"aria-hidden":"true"},a.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),a.a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"GitHubCorner-octo-arm"}),a.a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"GitHubCorner-octo-body"})))}))),I=function(e){Object(s.a)(t,e);var n=Object(f.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=n.call.apply(n,[this].concat(a))).state={},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props.children,n=this.state.err;return n?a.a.createElement(p,{err:n}):e}}],[{key:"getDerivedStateFromError",value:function(e){return{err:e}}}]),t}(a.a.PureComponent),T=a.a.memo((function(){return a.a.createElement("div",{className:"App"},a.a.createElement(I,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(l,null)},a.a.createElement(E,null),a.a.createElement(O,{size:40,fill:"gray"}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},162:function(e,n){},231:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return I}));var r=t(67),a=t(0),c=t.n(a),o=t(12),i=t(388),u=t.n(i),s=t(54),f=t(53),d=t(85),p=t(55),l=32,v=function(e,n){return"".concat(e.slice(0,l)," ").concat(n)},b=function(e){return Number(e.split(" ")[1])},m=function(e){return b(e.peer)},h=new WeakMap,y=function(e,n){if(h.has(e))return e;h.set(e,!0);var t=function(){var t=Object(o.a)(c.a.mark((function t(){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)(5e3);case 2:!(r=n.getTransceivers().find((function(n){return n.receiver.track===e})))||"inactive"!==r.currentDirection&&"sendonly"!==r.currentDirection||(e.stop(),e.dispatchEvent(new Event("ended")));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return e.addEventListener("mute",t),e},w=function(e){var n=b(e);return 10<=n&&n<=14},g=function(e,n,t,a,i,h){var g=!1,C=null,x=function(){var e=new Map;return{addConn:function(n){var t=e.get(n.peer);t&&t.conn.close(),e.set(n.peer,{conn:n,mediaTypes:[]})},markConnected:function(n){var t=e.get(n.peer);t&&(t.connected=!0)},isConnected:function(n){var t=e.get(n);return t&&t.connected||!1},setUserId:function(n,t){var r=e.get(n.peer);r&&(r.userId=t)},getUserId:function(n){var t=e.get(n.peer);return t&&t.userId},setMediaTypes:function(n,t){var r=e.get(n.peer);r&&(r.mediaTypes=t)},getMediaTypes:function(n){var t=e.get(n.peer);return t&&t.mediaTypes||[]},hasConn:function(n){return e.has(n)},getConn:function(n){var t=e.get(n);return t?t.conn:null},delConn:function(n){var t=e.get(n.peer);t&&t.conn===n&&e.delete(n.peer)},getConnectedPeerIds:function(){return Array.from(e.keys()).filter((function(n){var t;return null===(t=e.get(n))||void 0===t?void 0:t.connected}))},forEachConnectedConns:function(n){Array.from(e.values()).forEach((function(e){e.connected&&n(e.conn)}))},forEachConnsAcceptingMedia:function(n,t){Array.from(e.values()).forEach((function(e){e.connected&&e.mediaTypes&&e.mediaTypes.includes(n)&&t(e.conn)}))},clearAll:function(){e.size&&console.log("connectionMap garbage:",e),e.clear()}}}(),k=[],E=null,O=function(){if(!g){var e=x.getConnectedPeerIds().map(b);t({type:"CONNECTED_PEERS",peerIndexList:e})}},I=function(e){if(!g&&C&&C.id!==e&&!C.disconnected&&!x.hasConn(e)){console.log("connectPeer",e);var n=C.connect(e);U(n)}},T=function(e){if(!g){var t=x.getConnectedPeerIds();x.forEachConnectedConns((function(r){D(r,{userId:n,data:e,peers:t,mediaTypes:k})}))}},j=function(e,n){D(e,{SDP:n})},S=function(){var e=Object(o.a)(c.a.mark((function e(n,t){var r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(p.a)(t)){e.next=2;break}return e.abrupt("return");case 2:if(!Object(p.a)(t.offer)){e.next=21;break}return r=t.offer,e.prev=4,e.next=7,n.peerConnection.setRemoteDescription(r);case 7:return z(n),e.next=10,n.peerConnection.createAnswer();case 10:return a=e.sent,e.next=13,n.peerConnection.setLocalDescription(a);case 13:j(n,{answer:a}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),console.info("handleSDP offer failed",e.t0);case 19:e.next=38;break;case 21:if(!Object(p.a)(t.answer)){e.next=37;break}return o=t.answer,e.prev=23,e.next=26,n.peerConnection.setRemoteDescription(o);case 26:e.next=35;break;case 28:return e.prev=28,e.t1=e.catch(23),console.info("handleSDP answer failed",e.t1),e.next=33,Object(s.a)(30*Math.random()*1e3);case 33:J(n),z(n);case 35:e.next=38;break;case 37:console.warn("unknown SDP",t);case 38:case"end":return e.stop()}}),e,null,[[4,16],[23,28]])})));return function(n,t){return e.apply(this,arguments)}}(),M=function(e,n){"string"===typeof n&&x.setUserId(e,n)},N=function(){var e=Object(o.a)(c.a.mark((function e(n,t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Array.isArray(t)||!t.every((function(e){return"string"===typeof e}))){e.next=5;break}return x.setMediaTypes(n,t),e.next=4,Object(s.a)(5e3);case 4:z(n);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),P=function(n){Array.isArray(n)&&n.forEach((function(n){(function(e,n){return"string"===typeof n&&n.startsWith("".concat(e.slice(0,l)," "))})(e,n)&&I(n)}))},A=function(e,n){var t=x.getUserId(e);if(t){var r={userId:t,peerIndex:m(e),mediaTypes:x.getMediaTypes(e)};try{i(n,r)}catch(a){console.warn("receiveData",a)}}},L=function(){var n=Object(o.a)(c.a.mark((function n(t,r){var a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!g){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.t0=JSON,n.next=6,Object(f.a)(r,e.slice(l));case 6:if(n.t1=n.sent,a=n.t0.parse.call(n.t0,n.t1),console.log("decrypted payload",t.peer,a),Object(p.a)(a)){n.next=11;break}return n.abrupt("return");case 11:S(t,a.SDP),M(t,a.userId),N(t,a.mediaTypes),P(a.peers),A(t,a.data),n.next=21;break;case 18:n.prev=18,n.t2=n.catch(2),console.info("Error in handlePayload",n.t2,r);case 21:case"end":return n.stop()}}),n,null,[[2,18]])})));return function(e,t){return n.apply(this,arguments)}}(),D=function(){var n=Object(o.a)(c.a.mark((function n(t,r){var a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(f.b)(JSON.stringify(r),e.slice(l));case 3:a=n.sent,t.send(a),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("sendPayload",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}(),R=new WeakMap,U=function(e){x.isConnected(e.peer)?e.close():(x.addConn(e),e.on("open",(function(){x.markConnected(e),console.log("dataConnection open",e),O();var n=b(e.peer);a(n)})),e.on("data",(function(n){return L(e,n)})),e.peerConnection.addEventListener("icegatheringstatechange",(function(){var n=e.peerConnection;"complete"===n.iceGatheringState&&(n.onicecandidate=function(){})})),e.peerConnection.addEventListener("negotiationneeded",Object(o.a)(c.a.mark((function n(){var t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!R.has(e)){n.next=2;break}return n.abrupt("return");case 2:return R.set(e,!0),n.next=5,Object(s.a)(2e3);case 5:if(R.delete(e),x.isConnected(e.peer)){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,e.peerConnection.createOffer();case 10:return t=n.sent,n.next=13,e.peerConnection.setLocalDescription(t);case 13:j(e,{offer:t});case 14:case"end":return n.stop()}}),n)})))),e.peerConnection.addEventListener("track",(function(n){var t=x.getUserId(e);if(t){var r={userId:t,peerIndex:b(e.peer),mediaTypes:x.getMediaTypes(e)};h(y(n.track,e.peerConnection),r)}})),e.on("close",(function(){if(x.delConn(e),console.log("dataConnection closed",e),t({type:"CONNECTION_CLOSED",peerIndex:m(e)}),O(),0===x.getConnectedPeerIds().length)G(!0);else if(w(e.peer)&&C&&!C.disconnected&&!w(C.id)){var n=30+Math.floor(60*Math.random());console.log("Disconnected seed peer: ".concat(b(e.peer),", reinit in ").concat(n,"sec...")),setTimeout(G,1e3*n)}})))},_=function n(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;if(!g&&!C){x.clearAll();var c=10<=a&&a<=14,o=c?a:Object(f.e)();t({type:"INITIALIZING_PEER",peerIndex:o});var i=v(e,o);console.log("initMyPeer start",a,i);var s=new u.a(i,Object(r.a)(Object(r.a)({},Object(d.d)()||{}),{},{debug:3}));C=s,s.on("open",(function(){C=s,t({type:"CONNECTING_SEED_PEERS"});for(var n=10;n<=14;n+=1){var r=v(e,n);I(r)}})),s.on("error",(function(e){"unavailable-id"===e.type?(C=null,s.destroy(),n(a+1)):"peer-unavailable"===e.type||("disconnected"===e.type?(console.log("initMyPeer disconnected error",a,e),s.destroy()):"network"===e.type?console.log("initMyPeer network error",a,e):"server-error"===e.type?(console.log("initMyPeer server error",a,e),t({type:"SERVER_ERROR"})):(console.error("initMyPeer unknown error",a,e.type,e),t({type:"UNKNOWN_ERROR",err:e})))})),s.on("connection",(function(e){C===s?(console.log("new connection received",e),t({type:"NEW_CONNECTION",peerIndex:m(e)}),U(e)):e.close()})),s.on("disconnected",(function(){console.log("initMyPeer disconnected",a),setTimeout((function(){C!==s||s.destroyed||(console.log("initMyPeer reconnecting",a),t({type:"RECONNECTING"}),s.reconnect())}),5e3)})),s.on("close",(function(){C===s?(console.log("initMyPeer closed, re-initializing",a),C=null,setTimeout(n,2e4)):console.log("initMyPeer closed, ignoring",a)}))}};_();var G=function(n){if(C&&!C.disconnected){if(!n){if(w(C.id))return;for(var t=!0,r=10;r<=14;r+=1){var a=v(e,r);if(!x.isConnected(a)){t=!1;break}}if(t)return void O()}var c=C;C=null,c.destroy(),_()}},W=new WeakMap,z=function(e){var n=e.peerConnection.getSenders(),t=x.getMediaTypes(e);E&&E.getTracks().forEach((function(r){var a=W.get(r);E&&a&&t.includes(a)&&n.every((function(e){return e.track!==r}))&&e.peerConnection.addTrack(r,E)})),n.forEach((function(n){if(n.track){var r=W.get(n.track);r&&t.includes(r)||e.peerConnection.removeTrack(n)}})),n.some((function(e){return e.track&&!e.transport}))&&e.peerConnection.dispatchEvent(new Event("negotiationneeded"))},J=function(e){e.peerConnection.getSenders().forEach((function(n){n.track&&e.peerConnection.removeTrack(n)}))};return{broadcastData:T,sendData:function(t,r){if(!g){var a=x.getConn(v(e,r));if(a){var c=x.getConnectedPeerIds();D(a,{userId:n,data:t,peers:c,mediaTypes:k})}}},acceptMediaTypes:function(e){(k=e).length?E||(E=new MediaStream,x.forEachConnectedConns((function(e){var n=x.getUserId(e);if(n){var t={userId:n,peerIndex:b(e.peer),mediaTypes:x.getMediaTypes(e)};e.peerConnection.getReceivers().forEach((function(n){"live"===n.track.readyState&&h(y(n.track,e.peerConnection),t)}))}}))):E=null,T(null)},addTrack:function(e,n){E&&(W.set(n,e),E.addTrack(n),x.forEachConnsAcceptingMedia(e,(function(e){try{if(!E)return;e.peerConnection.addTrack(n,E)}catch(t){if("InvalidAccessError"!==t.name)throw t}})))},removeTrack:function(e,n){E&&E.removeTrack(n),x.forEachConnsAcceptingMedia(e,(function(e){var t=e.peerConnection.getSenders().find((function(e){return e.track===n}));t&&e.peerConnection.removeTrack(t)}))},dispose:function(){g=!0,C&&C.destroy()}}},C=t(389),x=t.n(C),k=0,E={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:0.peerjs.com:3478",username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"},O=function(e,n,t,a,i,u){var d=!1,v=null,b=null,m=function(){var e=new Map;return{setUserId:function(n,t){var r=e.get(n.peer);r&&(r.userId=t)},getUserId:function(n){var t=e.get(n.peer);return t&&t.userId},setMediaTypes:function(n,t){var r=e.get(n.peer);r&&(r.mediaTypes=t)},getMediaTypes:function(n){var t=e.get(n.peer);return t&&t.mediaTypes||[]},addConn:function(n){if(e.get(n))throw new Error("addConn: already exists");var t={peerIndex:k+=1,peer:n,peerConnection:new RTCPeerConnection(E)};return e.set(t.peer,{conn:t,mediaTypes:[]}),t},getConn:function(n){var t=e.get(n);return t?t.conn:null},findConn:function(n){var t=Array.from(e.values()).find((function(e){return e.conn.peerIndex===n}));return t?t.conn:null},delConn:function(n){var t=e.get(n.peer);t&&t.conn===n&&(e.delete(n.peer),n.peerConnection.close())},getPeerIndexList:function(){return Array.from(e.values()).map((function(e){return e.conn.peerIndex}))},forEachConns:function(n){Array.from(e.values()).forEach((function(e){n(e.conn)}))},forEachConnsAcceptingMedia:function(n,t){Array.from(e.values()).forEach((function(e){e.mediaTypes&&e.mediaTypes.includes(n)&&t(e.conn)}))},size:function(){return e.size}}}();var h=[],w=null,g=new WeakMap,C=function(e){var n=e.peerConnection.getSenders(),t=m.getMediaTypes(e);w&&w.getTracks().forEach((function(r){var a=g.get(r);w&&a&&t.includes(a)&&n.every((function(e){return e.track!==r}))&&e.peerConnection.addTrack(r,w)})),n.forEach((function(n){if(n.track){var r=g.get(n.track);r&&t.includes(r)||e.peerConnection.removeTrack(n)}})),n.some((function(e){return e.track&&!e.transport}))&&e.peerConnection.dispatchEvent(new Event("negotiationneeded"))},O=function(e){e.peerConnection.getSenders().forEach((function(n){n.track&&e.peerConnection.removeTrack(n)}))},I=e.slice(0,l),T=function(){if(!d){var e=m.getPeerIndexList();t({type:"CONNECTED_PEERS",peerIndexList:e})}},j=function(){var n=Object(o.a)(c.a.mark((function n(t,r){var a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(v){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,console.log("payload to encrypt",t,r),n.next=6,Object(f.b)(JSON.stringify(r),e.slice(l));case 6:return a=n.sent,n.next=9,v.pubsub.publish(t,a);case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),console.error("sendPayload",n.t0);case 14:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(e,t){return n.apply(this,arguments)}}(),S=function(){var e=Object(o.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d){e.next=2;break}return e.abrupt("return");case 2:return r={userId:n,data:t,mediaTypes:h},e.next=5,j(I,r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),M=function(){var e=Object(o.a)(c.a.mark((function e(t,a){var o,i,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d){e.next=2;break}return e.abrupt("return");case 2:if(o=m.findConn(a)){e.next=5;break}return e.abrupt("return");case 5:if(i=m.getUserId(o)){e.next=9;break}return console.warn("sendData: conn userId is not set",a),e.abrupt("return");case 9:u={userId:n,data:t,mediaTypes:h},j(I,Object(r.a)(Object(r.a)({},u),{},{to:i}));case 11:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),N=function(e,n){var t=m.getUserId(e);t?j(t,{SDP:n}):console.warn("sendSDP: conn userId is not set")},P=function(){var e=Object(o.a)(c.a.mark((function e(n,t){var r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(p.a)(t)){e.next=2;break}return e.abrupt("return");case 2:if(!Object(p.a)(t.offer)){e.next=21;break}return r=t.offer,e.prev=4,e.next=7,n.peerConnection.setRemoteDescription(r);case 7:return C(n),e.next=10,n.peerConnection.createAnswer();case 10:return a=e.sent,e.next=13,n.peerConnection.setLocalDescription(a);case 13:N(n,{answer:a}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),console.info("handleSDP offer failed",e.t0);case 19:e.next=38;break;case 21:if(!Object(p.a)(t.answer)){e.next=37;break}return o=t.answer,e.prev=23,e.next=26,n.peerConnection.setRemoteDescription(o);case 26:e.next=35;break;case 28:return e.prev=28,e.t1=e.catch(23),console.info("handleSDP answer failed",e.t1),e.next=33,Object(s.a)(30*Math.random()*1e3);case 33:O(n),C(n);case 35:e.next=38;break;case 37:console.warn("unknown SDP",t);case 38:case"end":return e.stop()}}),e,null,[[4,16],[23,28]])})));return function(n,t){return e.apply(this,arguments)}}(),A=function(){var e=Object(o.a)(c.a.mark((function e(n,t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(p.a)(t)){e.next=2;break}return e.abrupt("return");case 2:try{n.peerConnection.addIceCandidate(t)}catch(r){console.info("handleCandidate failed",r)}case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),L=function(e,n){"string"===typeof n&&m.setUserId(e,n)},D=function(){var e=Object(o.a)(c.a.mark((function e(n,t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Array.isArray(t)||!t.every((function(e){return"string"===typeof e}))){e.next=5;break}return m.setMediaTypes(n,t),e.next=4,Object(s.a)(5e3);case 4:C(n);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),R=function(e,n){var t=m.getUserId(e);if(t){var r={userId:t,peerIndex:e.peerIndex,mediaTypes:m.getMediaTypes(e)};try{i(n,r)}catch(a){console.warn("receiveData",a)}}},U=function(){var t=Object(o.a)(c.a.mark((function t(r,a){var o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!d){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.t0=JSON,t.next=6,Object(f.a)(a,e.slice(l));case 6:if(t.t1=t.sent,o=t.t0.parse.call(t.t0,t.t1),console.log("decrypted payload",r.peer,o),Object(p.a)(o)){t.next=11;break}return t.abrupt("return");case 11:if(L(r,o.userId),!o.to||o.to===n){t.next=14;break}return t.abrupt("return");case 14:P(r,o.SDP),A(r,o.iceCandidate),D(r,o.mediaTypes),R(r,o.data),t.next=23;break;case 20:t.prev=20,t.t2=t.catch(2),console.info("Error in handlePayload",t.t2,a);case 23:case"end":return t.stop()}}),t,null,[[2,20]])})));return function(e,n){return t.apply(this,arguments)}}(),_=new WeakMap,G=function(e){var n=m.addConn(e);return n.peerConnection.addEventListener("icecandidate",(function(e){e.candidate&&function(e,n){var t=m.getUserId(e);t?j(t,{iceCandidate:n}):console.warn("sendIceCandidate: conn userId is not set")}(n,e.candidate)})),n.peerConnection.addEventListener("negotiationneeded",Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!_.has(n)){e.next=2;break}return e.abrupt("return");case 2:return _.set(n,!0),e.next=5,Object(s.a)(2e3);case 5:return _.delete(n),e.next=8,n.peerConnection.createOffer();case 8:return t=e.sent,e.next=11,n.peerConnection.setLocalDescription(t);case 11:N(n,{offer:t});case 12:case"end":return e.stop()}}),e)})))),n.peerConnection.addEventListener("track",(function(e){var t=m.getUserId(n);if(t){var r={userId:t,peerIndex:n.peerIndex,mediaTypes:m.getMediaTypes(n)};u(y(e.track,n.peerConnection),r)}})),n},W=function(){var e=Object(o.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.from!==b){e.next=2;break}return e.abrupt("return");case 2:if(!(r=m.getConn(n.from))){e.next=8;break}return e.next=6,U(r,n.data);case 6:e.next=13;break;case 8:return r=G(n.from),e.next=11,U(r,n.data);case 11:a(r.peerIndex),t({type:"NEW_CONNECTION",peerIndex:r.peerIndex});case 13:T();case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),z=function(){var e=Object(o.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d){e.next=2;break}return e.abrupt("return");case 2:if(n=v?v.pubsub.peers(I):[],m.forEachConns((function(e){n.includes(e.peer)||(m.delConn(e),t({type:"CONNECTION_CLOSED",peerIndex:e.peerIndex}))})),n.length){e.next=10;break}return t({type:"CONNECTING_SEED_PEERS"}),e.next=8,Object(s.a)(5e3);case 8:return z(),e.abrupt("return");case 10:if(m.size()){e.next=13;break}return e.next=13,S(null);case 13:return e.next=15,Object(s.a)(1e4);case 15:z();case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return function(){var e=Object(o.a)(c.a.mark((function e(){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"INITIALIZING_PEER",peerIndex:0}),e.next=3,x.a.create({repo:Object(f.f)(),config:{Addresses:{Swarm:["/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star/"]}}});case 3:return r=e.sent,e.next=6,r.id();case 6:return b=e.sent.id,e.next=9,r.pubsub.subscribe(I,W);case 9:return e.next=11,r.pubsub.subscribe(n,W);case 11:v=r,z();case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),{broadcastData:S,sendData:M,acceptMediaTypes:function(e){(h=e).length?w||(w=new MediaStream,m.forEachConns((function(e){var n=m.getUserId(e);if(n){var t={userId:n,peerIndex:e.peerIndex,mediaTypes:m.getMediaTypes(e)};e.peerConnection.getReceivers().forEach((function(n){"live"===n.track.readyState&&u(y(n.track,e.peerConnection),t)}))}}))):w=null,S(null)},addTrack:function(e,n){w&&(g.set(n,e),w.addTrack(n),m.forEachConnsAcceptingMedia(e,(function(e){try{if(!w)return;e.peerConnection.addTrack(n,w)}catch(t){if("InvalidAccessError"!==t.name)throw t}})))},removeTrack:function(e,n){w&&w.removeTrack(n),m.forEachConnsAcceptingMedia(e,(function(e){var t=e.peerConnection.getSenders().find((function(e){return e.track===n}));t&&e.peerConnection.removeTrack(t)}))},dispose:function(){var e=Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d=!0,!v){e.next=8;break}return e.next=4,v.pubsub.unsubscribe(I,W);case 4:return e.next=6,v.pubsub.unsubscribe(n,W);case 6:return e.next=8,v.stop();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}},I=function(){var e=window.location.hash.slice(1),n=new URLSearchParams(e),t=n.get("server");return"ipfs"===t?O.apply(void 0,arguments):g.apply(void 0,arguments)}},391:function(e,n,t){e.exports=t(1053)},396:function(e,n,t){},397:function(e,n,t){},398:function(e,n,t){},400:function(e,n,t){},401:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=401},409:function(e,n){},482:function(e,n){},483:function(e,n){},53:function(e,n,t){"use strict";t.d(n,"f",(function(){return o})),t.d(n,"e",(function(){return i})),t.d(n,"c",(function(){return u})),t.d(n,"d",(function(){return s})),t.d(n,"b",(function(){return f})),t.d(n,"a",(function(){return d}));var r=t(0),a=t.n(r),c=t(12),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,n=window.crypto.getRandomValues(new Uint8Array(e)),t=Array.from(n),r=t.map((function(e){return e.toString(16).padStart(2,"0")})).join("");return r},i=function(){return 1e3+window.crypto.getRandomValues(new Uint16Array(1))[0]%9e3},u=function(){var e=Object(c.a)(a.a.mark((function e(){var n,t,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.crypto.subtle.generateKey({name:"AES-GCM",length:128},!0,["encrypt","decrypt"]);case 2:return n=e.sent,e.next=5,window.crypto.subtle.exportKey("raw",n);case 5:return t=e.sent,r=Array.from(new Uint8Array(t)),c=r.map((function(e){return e.toString(16).padStart(2,"0")})).join(""),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(a.a.mark((function e(n,t){var r,c,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=n.length/2,c=new Uint8Array(r),o=0;o<r;o+=1)c[o]=parseInt(n.slice(2*o,2*o+2),16);return e.next=5,window.crypto.subtle.importKey("raw",c,{name:"AES-GCM",length:128},!0,t);case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(n,t){var r,c,o,i,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new TextEncoder,e.next=3,s(t,["encrypt"]);case 3:return c=e.sent,o=window.crypto.getRandomValues(new Uint8Array(12)),e.next=7,window.crypto.subtle.encrypt({name:"AES-GCM",iv:o},c,r.encode(n));case 7:return i=e.sent,(u=new Uint8Array(o.length+i.byteLength)).set(o),u.set(new Uint8Array(i),o.length),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(n,t){var r,c,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t,["decrypt"]);case 2:return r=e.sent,e.next=5,window.crypto.subtle.decrypt({name:"AES-GCM",iv:n.slice(0,12)},r,n.slice(12));case 5:return c=e.sent,o=new TextDecoder("utf-8"),i=o.decode(new Uint8Array(c)),e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},54:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=function(e){return new Promise((function(n){return setTimeout(n,e)}))}},55:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=function(e){return"object"===typeof e&&null!==e}},617:function(e,n){},675:function(e,n){},684:function(e,n){},686:function(e,n){},773:function(e,n){},840:function(e,n){},85:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return c})),t.d(n,"e",(function(){return o})),t.d(n,"d",(function(){return i}));var r=function(e){try{var n=new URL(e).hash.slice(1),t=new URLSearchParams(n),r=window.location.hash.slice(1),a=new URLSearchParams(r);t.forEach((function(e,n){a.set(n,e)})),window.location.hash=a.toString()}catch(c){}},a=function(e){try{var n=new URL(e).hash.slice(1);return new URLSearchParams(n).get("roomId")}catch(t){return null}},c=function(){var e=window.location.hash.slice(1);return new URLSearchParams(e).get("roomId")},o=function(e){var n=window.location.hash.slice(1),t=new URLSearchParams(n);t.set("roomId",e),window.location.hash=t.toString()},i=function(){var e=window.location.hash.slice(1),n=new URLSearchParams(e).get("server");try{var t=new URL(n||""),r="https:"===t.protocol,a=r?443:80;return{host:t.host.split(":")[0],port:t.port?Number(t.port):a,path:t.pathname,secure:r}}catch(c){}return null}},868:function(e,n){},870:function(e,n){},897:function(e,n){}},[[391,1,2]]]);
//# sourceMappingURL=main.aafa970a.chunk.js.map