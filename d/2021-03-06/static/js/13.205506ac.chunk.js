(this["webpackJsonpremote-faces-web"]=this["webpackJsonpremote-faces-web"]||[]).push([[13],{105:function(e,n,t){"use strict";t.d(n,"c",(function(){return r})),t.d(n,"b",(function(){return c})),t.d(n,"a",(function(){return a}));var r=function(e){return"object"===typeof e&&null!==e},c=function(e,n){return"string"===typeof e[n]},a=function(e,n){return r(e[n])}},109:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=function(e){return new Promise((function(n){return setTimeout(n,e)}))}},132:function(e,n,t){"use strict";t.d(n,"c",(function(){return u})),t.d(n,"b",(function(){return d})),t.d(n,"d",(function(){return f})),t.d(n,"a",(function(){return l}));var r=t(4),c=t(2),a=t.n(c),o=t(3),i=t(109),s=new WeakMap,u=function(e,n){if(s.has(e))return e;s.set(e,!0);var t=function(){var t=Object(o.a)(a.a.mark((function t(){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.a)(5e3);case 2:!(r=n.getTransceivers().find((function(n){return n.receiver.track===e})))||"inactive"!==r.currentDirection&&"sendonly"!==r.currentDirection||(e.stop(),e.dispatchEvent(new Event("ended")));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return e.addEventListener("mute",t),e},d=function(e){return new Promise(function(){var n=Object(o.a)(a.a.mark((function n(t,r){var c,o,i,s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c=new RTCPeerConnection,o=new RTCPeerConnection,c.addEventListener("icecandidate",(function(e){var n=e.candidate;n&&o.addIceCandidate(n)})),o.addEventListener("icecandidate",(function(e){var n=e.candidate;n&&c.addIceCandidate(n)})),o.addEventListener("track",(function(e){t(e.track)})),e.addEventListener("ended",(function(){c.close(),o.close()})),c.addTrack(e),n.next=10,c.createOffer();case 10:return i=n.sent,n.next=13,c.setLocalDescription(i);case 13:return n.next=15,o.setRemoteDescription(i);case 15:return n.next=17,o.createAnswer();case 17:return s=n.sent,n.next=20,o.setLocalDescription(s);case 20:return n.next=22,c.setRemoteDescription(s);case 22:n.next=27;break;case 24:n.prev=24,n.t0=n.catch(0),r(n.t0);case 27:case"end":return n.stop()}}),n,null,[[0,24]])})));return function(e,t){return n.apply(this,arguments)}}())},f=function(){var e=Object(o.a)(a.a.mark((function e(n){var t,r,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("video"===n.kind){e.next=2;break}throw new Error("track kind is not video");case 2:return t=document.createElement("canvas"),r=t.getContext("2d"),c=new ImageCapture(n),i=function(){var e=Object(o.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.grabFrame();case 3:return n=e.sent,t.width=n.width,t.height=n.height,r.drawImage(n,0,0),e.abrupt("return",t.toDataURL("image/jpeg"));case 10:return e.prev=10,e.t0=e.catch(0),console.log("failed to grab frame from viedeo track",e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),e.abrupt("return",{getImage:i});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(e){return new Promise((function(n,t){var r=new Image;r.onload=function(){return n(r)},r.onerror=t,r.src=e}))},l=function(){var e=document.createElement("canvas"),n=e.getContext("2d"),t=e.captureStream().getVideoTracks();return{videoTrack:Object(r.a)(t,1)[0],setImage:function(){var t=Object(o.a)(a.a.mark((function t(r){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(r);case 2:c=t.sent,e.width=c.width,e.height=c.height,n.drawImage(c,0,0);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}},532:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=532},54:function(e,n,t){"use strict";t.r(n),t.d(n,"createRoom",(function(){return x}));var r=t(107),c=t(2),a=t.n(c),o=t(3),i=t(531),s=t.n(i),u=t(109),d=t(9),f=t(10),p=t(105),l=t(20),v=function(e,n){return"string"===typeof n&&n.startsWith("".concat(e.slice(0,l.a)," "))},g=function(e,n){return"".concat(e.slice(0,l.a)," ").concat(n)},m=function(e){return Number(e.split(" ")[1])},y=function(e){return m(e.peer)},h=function(){var e=new Map,n=function(n,t,r){var c,a=e.get(n.peer);a&&r.split(/[\r\n]+/).forEach((function(e){if(e.startsWith("a=mid:"))c=e.slice("a=mid:".length);else if(e.startsWith("a=msid:")){e.slice("a=msid:".length).split(" ").forEach((function(e){var n=t[e];"string"===typeof n&&(a.remoteMediaTypes[c]=n)}))}}))};return{setAcceptingMediaTypes:function(n,t){var r=e.get(n.peer);r&&(r.acceptingMediaTypes=t)},getAcceptingMediaTypes:function(n){var t=e.get(n.peer);return t?t.acceptingMediaTypes:[]},addConn:function(n){var t=e.get(n.peer);t&&t.conn.close(),e.set(n.peer,{conn:n,acceptingMediaTypes:[],remoteMediaTypes:{}})},markConnected:function(n){var t=e.get(n.peer);t&&(t.connected=!0)},isConnected:function(n){var t=e.get(n);return t&&t.connected||!1},setUserId:function(n,t){var r=e.get(n.peer);r&&(r.userId=t)},getUserId:function(n){var t=e.get(n.peer);return t&&t.userId},hasConn:function(n){return e.has(n)},getConn:function(n){var t=e.get(n);return t?t.conn:null},delConn:function(n){var t=e.get(n.peer);t&&t.conn===n&&e.delete(n.peer)},getConnectedPeerIds:function(){return Array.from(e.keys()).filter((function(n){var t;return null===(t=e.get(n))||void 0===t?void 0:t.connected}))},forEachConnectedConns:function(n){Array.from(e.values()).forEach((function(e){e.connected&&n(e.conn)}))},forEachConnsAcceptingMedia:function(n,t){Array.from(e.values()).forEach((function(e){e.connected&&e.acceptingMediaTypes.includes(n)&&t(e.conn)}))},clearAll:function(){e.size&&console.log("connectionMap garbage:",e),e.clear()},getRemoteMediaType:function(n,t){var r=e.get(n.peer);return r&&r.remoteMediaTypes[t]||null},registerRemoteMediaType:function(e,t){Object(p.a)(t,"msid2mediaType")&&(Object(p.a)(t,"offer")&&Object(p.b)(t.offer,"sdp")&&n(e,t.msid2mediaType,t.offer.sdp),Object(p.a)(t,"answer")&&Object(p.b)(t.answer,"sdp")&&n(e,t.msid2mediaType,t.answer.sdp))}}},b=t(132),k=10,w=14,C=function(e){var n=m(e);return k<=n&&n<=w},x=function(){var e=Object(o.a)(a.a.mark((function e(n,t,c,i,x,E){var T,O,I,M,j,P,R,D,N,A,S,L,U,_,W,G,J,z,F,V,K,Z,q,B,H,Q,X,Y;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T=!1,O=h(),I=[],e.next=6,Object(d.h)(n.slice(l.a));case 6:return M=e.sent,j=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;return new Promise((function(r,i){if(T)i(new Error("already disposed"));else{O.clearAll();var u=k<=t&&t<=w?t:Object(d.i)();c({type:"INITIALIZING_PEER",peerIndex:u});var p=g(n,u);console.log("initMyPeer start",t,p);var l=new s.a(p,Object(f.a)());l.on("open",(function(){r(l),c({type:"CONNECTING_SEED_PEERS"}),setTimeout((function(){for(var e=k;e<=w;e+=1){var t=g(n,e);D(t)}}),10)})),l.on("error",(function(n){"unavailable-id"===n.type?(l.destroy(),e(t+1).then(r,i)):"peer-unavailable"===n.type||("disconnected"===n.type?console.log("initMyPeer disconnected error",t,n):"network"===n.type?console.log("initMyPeer network error",t,n):"server-error"===n.type?(console.log("initMyPeer server error",t,n),c({type:"SERVER_ERROR"})):(console.error("initMyPeer unknown error",t,n.type,n),c({type:"UNKNOWN_ERROR",err:n})))})),l.on("connection",(function(e){console.log("new connection received",e),c({type:"NEW_CONNECTION",peerIndex:y(e)}),F(e)})),l.on("disconnected",(function(){console.log("initMyPeer disconnected",t),setTimeout((function(){l.destroyed||(console.log("initMyPeer reconnecting",t),c({type:"RECONNECTING"}),l.reconnect())}),5e3)})),l.on("close",(function(){l.destroyed||(console.log("initMyPeer closed, re-initializing",t),setTimeout(Object(o.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:P=n.sent;case 3:case"end":return n.stop()}}),n)}))),2e4))}))}}))},e.next=10,j();case 10:return P=e.sent,R=function(){if(!T){var e=O.getConnectedPeerIds().map(m);c({type:"CONNECTED_PEERS",peerIndexList:e})}},D=function(e){if(!T&&P.id!==e&&!P.disconnected&&!O.hasConn(e)){console.log("connectPeer",e);var n=P.connect(e);F(n)}},N=function(e){if(!T){var n=O.getConnectedPeerIds();O.forEachConnectedConns((function(r){z(r,{userId:t,data:e,peers:n,mediaTypes:I})}))}},A=function(e,r){if(!T){var c=O.getConn(g(n,r));if(c){var a=O.getConnectedPeerIds();z(c,{userId:t,data:e,peers:a,mediaTypes:I})}}},S=function(e,n){var t=q();z(e,{SDP:Object(r.a)(Object(r.a)({},n),{},{msid2mediaType:t})})},L=function(){var e=Object(o.a)(a.a.mark((function e(n,t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(p.c)(t)){e.next=2;break}return e.abrupt("return");case 2:if(O.registerRemoteMediaType(n,t),!Object(p.a)(t,"offer")){e.next=21;break}return e.prev=4,e.next=7,n.peerConnection.setRemoteDescription(t.offer);case 7:return Q(n),e.next=10,n.peerConnection.createAnswer();case 10:return r=e.sent,e.next=13,n.peerConnection.setLocalDescription(r);case 13:S(n,{answer:r}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),console.info("handleSDP offer failed",e.t0);case 19:e.next=37;break;case 21:if(!Object(p.a)(t,"answer")){e.next=36;break}return e.prev=22,e.next=25,n.peerConnection.setRemoteDescription(t.answer);case 25:e.next=34;break;case 27:return e.prev=27,e.t1=e.catch(22),console.info("handleSDP answer failed",e.t1),e.next=32,Object(u.a)(30*Math.random()*1e3);case 32:X(n),Q(n);case 34:e.next=37;break;case 36:console.warn("unknown SDP",t);case 37:case"end":return e.stop()}}),e,null,[[4,16],[22,27]])})));return function(n,t){return e.apply(this,arguments)}}(),U=function(e,n){"string"===typeof n&&O.setUserId(e,n)},_=function(){var e=Object(o.a)(a.a.mark((function e(n,t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Array.isArray(t)||!t.every((function(e){return"string"===typeof e}))){e.next=5;break}return O.setAcceptingMediaTypes(n,t),e.next=4,Object(u.a)(5e3);case 4:Q(n);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),W=function(e){Array.isArray(e)&&e.forEach((function(e){v(n,e)&&D(e)}))},G=function(e,n){var t=O.getUserId(e);if(t){var r={userId:t,peerIndex:y(e),mediaTypes:O.getAcceptingMediaTypes(e)};try{x(n,r)}catch(c){console.warn("receiveData",c)}}},J=function(){var e=Object(o.a)(a.a.mark((function e(n,t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!T){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.t0=JSON,e.next=6,Object(d.b)(t,M);case 6:if(e.t1=e.sent,r=e.t0.parse.call(e.t0,e.t1),console.log("decrypted payload",n.peer,r),Object(p.c)(r)){e.next=11;break}return e.abrupt("return");case 11:L(n,r.SDP),U(n,r.userId),_(n,r.mediaTypes),W(r.peers),G(n,r.data),e.next=21;break;case 18:e.prev=18,e.t2=e.catch(2),console.info("Error in handlePayload",e.t2,t);case 21:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(n,t){return e.apply(this,arguments)}}(),z=function(){var e=Object(o.a)(a.a.mark((function e(n,t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(d.e)(JSON.stringify(t),M);case 3:r=e.sent,n.send(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("sendPayload",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),F=function(e){if(O.isConnected(e.peer))e.close();else{O.addConn(e),setTimeout((function(){O.isConnected(e.peer)||e.close()}),3e4),e.on("open",(function(){O.markConnected(e),console.log("dataConnection open",e),R();var n=m(e.peer);i(n)})),e.on("data",(function(n){return J(e,n)})),e.peerConnection.addEventListener("icegatheringstatechange",(function(){var n=e.peerConnection;"complete"===n.iceGatheringState&&(n.onicecandidate=function(){})}));var n=!1;e.peerConnection.addEventListener("negotiationneeded",Object(o.a)(a.a.mark((function t(){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return");case 2:return n=!0,t.next=5,Object(u.a)(5e3);case 5:if(n=!1,O.isConnected(e.peer)){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,e.peerConnection.createOffer();case 10:return r=t.sent,t.next=13,e.peerConnection.setLocalDescription(r);case 13:S(e,{offer:r});case 14:case"end":return t.stop()}}),t)})))),e.peerConnection.addEventListener("track",(function(n){var t=n.transceiver.mid,r=t&&O.getRemoteMediaType(e,t);if(r){var c=O.getUserId(e);if(c){var a={userId:c,peerIndex:m(e.peer),mediaTypes:O.getAcceptingMediaTypes(e)};E(r,Object(b.c)(n.track,e.peerConnection),a)}}else console.warn("failed to find media type from mid")})),e.on("close",(function(){if(O.delConn(e),console.log("dataConnection closed",e),c({type:"CONNECTION_CLOSED",peerIndex:y(e)}),R(),0===O.getConnectedPeerIds().length)V(!0);else if(C(e.peer)&&!P.disconnected&&!C(P.id)){var n=30+Math.floor(60*Math.random());console.log("Disconnected seed peer: ".concat(m(e.peer),", reinit in ").concat(n,"sec...")),setTimeout(V,1e3*n)}}))}},V=function(){var e=Object(o.a)(a.a.mark((function e(t){var r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!P.disconnected){e.next=2;break}return e.abrupt("return");case 2:if(t){e.next=18;break}if(!C(P.id)){e.next=5;break}return e.abrupt("return");case 5:r=!0,c=k;case 7:if(!(c<=w)){e.next=15;break}if(o=g(n,c),O.isConnected(o)){e.next=12;break}return r=!1,e.abrupt("break",15);case 12:c+=1,e.next=7;break;case 15:if(!r){e.next=18;break}return R(),e.abrupt("return");case 18:return P.destroy(),e.next=21,j();case 21:P=e.sent;case 22:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),K=function(e){T||(e.length!==I.length&&O.forEachConnectedConns((function(n){var t=O.getUserId(n);if(t){var r={userId:t,peerIndex:m(n.peer),mediaTypes:O.getAcceptingMediaTypes(n)},c=n.peerConnection.getTransceivers();n.peerConnection.getReceivers().forEach((function(t){var a=c.find((function(e){return e.receiver===t})),o=null===a||void 0===a?void 0:a.mid,i=o&&O.getRemoteMediaType(n,o);i?"live"===t.track.readyState&&!I.includes(i)&&e.includes(i)&&E(i,Object(b.c)(t.track,n.peerConnection),r):console.warn("failed to find media type from mid")}))}})),I=e,N(null))},Z=new Map,q=function(){var e={};return Z.forEach((function(n,t){var r=n.stream;e[r.id]=t})),e},B=function(e,n){if(!T){if(Z.has(e))throw new Error("track is already added for ".concat(e));var t=new MediaStream([n]);Z.set(e,{stream:t,track:n}),O.forEachConnsAcceptingMedia(e,(function(e){try{e.peerConnection.addTrack(n,t)}catch(r){if("InvalidAccessError"!==r.name)throw r}}))}},H=function(e){if(!T){var n=Z.get(e);if(n){var t=n.track;Z.delete(e),O.forEachConnsAcceptingMedia(e,(function(e){var n=e.peerConnection.getSenders().find((function(e){return e.track===t}));n&&e.peerConnection.removeTrack(n)}))}else console.log("track is already removed for",e)}},Q=function(e){var n=e.peerConnection.getSenders(),t=O.getAcceptingMediaTypes(e);t.forEach((function(t){var r=Z.get(t);if(r){var c=r.stream,a=r.track;n.every((function(e){return e.track!==a}))&&e.peerConnection.addTrack(a,c)}})),n.forEach((function(n){n.track&&(t.some((function(e){var t;return(null===(t=Z.get(e))||void 0===t?void 0:t.track)===n.track}))||e.peerConnection.removeTrack(n))})),n.some((function(e){return e.track&&!e.transport}))&&e.peerConnection.dispatchEvent(new Event("negotiationneeded"))},X=function(e){e.peerConnection.getSenders().forEach((function(n){n.track&&e.peerConnection.removeTrack(n)}))},Y=function(){T=!0,P.destroy()},e.abrupt("return",{broadcastData:N,sendData:A,acceptMediaTypes:K,addTrack:B,removeTrack:H,dispose:Y});case 34:case"end":return e.stop()}}),e)})));return function(n,t,r,c,a,o){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=13.205506ac.chunk.js.map