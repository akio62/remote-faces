(this["webpackJsonpremote-faces-web"]=this["webpackJsonpremote-faces-web"]||[]).push([[8],{106:function(e,n,t){"use strict";t.d(n,"c",(function(){return r})),t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return c}));var r=function(e){return"object"===typeof e&&null!==e},a=function(e,n){return"string"===typeof e[n]},c=function(e,n){return r(e[n])}},109:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=function(e){return new Promise((function(n){return setTimeout(n,e)}))}},133:function(e,n,t){"use strict";t.d(n,"c",(function(){return u})),t.d(n,"b",(function(){return d})),t.d(n,"d",(function(){return f})),t.d(n,"a",(function(){return v}));var r=t(4),a=t(2),c=t.n(a),i=t(3),o=t(109),s=new WeakMap,u=function(e,n){if(s.has(e))return e;s.set(e,!0);var t=function(){var t=Object(i.a)(c.a.mark((function t(){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)(5e3);case 2:!(r=n.getTransceivers().find((function(n){return n.receiver.track===e})))||"inactive"!==r.currentDirection&&"sendonly"!==r.currentDirection||(e.stop(),e.dispatchEvent(new Event("ended")));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return e.addEventListener("mute",t),e},d=function(e){return new Promise(function(){var n=Object(i.a)(c.a.mark((function n(t,r){var a,i,o,s;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a=new RTCPeerConnection,i=new RTCPeerConnection,a.addEventListener("icecandidate",(function(e){var n=e.candidate;n&&i.addIceCandidate(n)})),i.addEventListener("icecandidate",(function(e){var n=e.candidate;n&&a.addIceCandidate(n)})),i.addEventListener("track",(function(e){t(e.track)})),e.addEventListener("ended",(function(){a.close(),i.close()})),a.addTrack(e),n.next=10,a.createOffer();case 10:return o=n.sent,n.next=13,a.setLocalDescription(o);case 13:return n.next=15,i.setRemoteDescription(o);case 15:return n.next=17,i.createAnswer();case 17:return s=n.sent,n.next=20,i.setLocalDescription(s);case 20:return n.next=22,a.setRemoteDescription(s);case 22:n.next=27;break;case 24:n.prev=24,n.t0=n.catch(0),r(n.t0);case 27:case"end":return n.stop()}}),n,null,[[0,24]])})));return function(e,t){return n.apply(this,arguments)}}())},f=function(){var e=Object(i.a)(c.a.mark((function e(n){var t,r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("video"===n.kind){e.next=2;break}throw new Error("track kind is not video");case 2:return t=document.createElement("canvas"),r=t.getContext("2d"),a=new ImageCapture(n),o=function(){var e=Object(i.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.grabFrame();case 3:return n=e.sent,t.width=n.width,t.height=n.height,r.drawImage(n,0,0),e.abrupt("return",t.toDataURL("image/jpeg"));case 10:return e.prev=10,e.t0=e.catch(0),console.log("failed to grab frame from viedeo track",e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),e.abrupt("return",{getImage:o});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(e){return new Promise((function(n,t){var r=new Image;r.onload=function(){return n(r)},r.onerror=t,r.src=e}))},v=function(){var e=document.createElement("canvas"),n=e.getContext("2d"),t=e.captureStream().getVideoTracks();return{videoTrack:Object(r.a)(t,1)[0],setImage:function(){var t=Object(i.a)(c.a.mark((function t(r){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(r);case 2:a=t.sent,e.width=a.width,e.height=a.height,n.drawImage(a,0,0);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}},207:function(e,n){},338:function(e,n){},341:function(e,n){},357:function(e,n){},360:function(e,n){},388:function(e,n){},389:function(e,n){},408:function(e,n){},424:function(e,n){},428:function(e,n){},429:function(e,n){},456:function(e,n){},459:function(e,n){},472:function(e,n){},485:function(e,n){},486:function(e,n){},499:function(e,n){},55:function(e,n,t){"use strict";t.r(n),t.d(n,"createRoom",(function(){return g}));var r=t(103),a=t(2),c=t.n(a),i=t(3),o=t(236),s=t(336),u=t.n(s),d=t(1232),f=t.n(d),p=t(109),v=t(9),l=t(106),b=t(25),x=0,h={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:0.peerjs.com:3478",username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"},m=function(){var e=new Map,n=function(n,t,r){var a,c=e.get(n.peer);c&&r.split(/[\r\n]+/).forEach((function(e){if(e.startsWith("a=mid:"))a=e.slice("a=mid:".length);else if(e.startsWith("a=msid:")){e.slice("a=msid:".length).split(" ").forEach((function(e){var n=t[e];"string"===typeof n&&(c.remoteMediaTypes[a]=n)}))}}))};return{setAcceptingMediaTypes:function(n,t){var r=e.get(n.peer);r&&(r.acceptingMediaTypes=t)},getAcceptingMediaTypes:function(n){var t=e.get(n.peer);return t?t.acceptingMediaTypes:[]},addConn:function(n,t){if(e.get(n))throw new Error("addConn: already exists");var r={peerIndex:x+=1,peer:n,userId:t,sendPc:new RTCPeerConnection(h),recvPc:new RTCPeerConnection(h)};return e.set(r.peer,{conn:r,acceptingMediaTypes:[],remoteMediaTypes:{}}),r},getConn:function(n){var t=e.get(n);return t?t.conn:null},findConn:function(n){var t=Array.from(e.values()).find((function(e){return e.conn.peerIndex===n}));return t?t.conn:null},delConn:function(n){var t=e.get(n.peer);if(!t||t.conn!==n)throw new Error("delConn: does not exist");e.delete(n.peer),n.sendPc.close(),n.recvPc.close()},getPeerIndexList:function(){return Array.from(e.values()).map((function(e){return e.conn.peerIndex}))},forEachConns:function(n){Array.from(e.values()).forEach((function(e){n(e.conn)}))},forEachConnsAcceptingMedia:function(n,t){Array.from(e.values()).forEach((function(e){e.acceptingMediaTypes.includes(n)&&t(e.conn)}))},size:function(){return e.size},getRemoteMediaType:function(n,t){var r=e.get(n.peer);return r&&r.remoteMediaTypes[t]||null},registerRemoteMediaType:function(e,t){Object(l.a)(t,"msid2mediaType")&&(Object(l.a)(t,"offer")&&Object(l.b)(t.offer,"sdp")&&n(e,t.msid2mediaType,t.offer.sdp),Object(l.a)(t,"answer")&&Object(l.b)(t.answer,"sdp")&&n(e,t.msid2mediaType,t.answer.sdp))}}},w=t(133),g=function(){var e=Object(i.a)(c.a.mark((function e(n,t,a,s,d,x){var h,g,k,y,O,j,I,T,E,P,C,M,D,A,S,L,R,N,J,W,_,z,F,G,U,V,Z,q,B,H,K,Q;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h=!1,g=m(),k=[],y=n.slice(0,b.a),e.next=7,Object(v.h)(n.slice(b.a));case 7:return O=e.sent,a({type:"INITIALIZING_PEER",peerIndex:0}),e.next=11,u.a.create({repo:Object(v.j)(),config:{Addresses:{Swarm:["/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star/"]}}});case 11:return j=e.sent,e.next=14,j.id();case 14:return I=e.sent.id,(T=new f.a(j,y)).on("message",(function(e){return V(e)})),T.on("peer joined",(function(){M(null)})),T.on("peer left",(function(e){var n=g.getConn(e);n&&(g.delConn(n),a({type:"CONNECTION_CLOSED",peerIndex:n.peerIndex}))})),E=function(){var e=Object(i.a)(c.a.mark((function e(n){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(v.c)(n,O);case 3:if(null!==(t=e.sent)){e.next=6;break}return e.abrupt("return",void 0);case 6:return r=JSON.parse(t),console.log("decrypted payload",r),e.abrupt("return",r);case 11:return e.prev=11,e.t0=e.catch(0),console.info("Error in parsePayload",e.t0,n),e.abrupt("return",void 0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}(),P=function(){var e=Object(i.a)(c.a.mark((function e(n,t){var r,a,i,s,u,d,f;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,console.log("payload to encrypt",n,t),r=!0,a=!1,e.prev=4,s=Object(o.a)(Object(v.f)(JSON.stringify(t),O));case 6:return e.next=8,s.next();case 8:return u=e.sent,r=u.done,e.next=12,u.value;case 12:if(d=e.sent,r){e.next=19;break}f=d,T.broadcast(f);case 16:r=!0,e.next=6;break;case 19:e.next=25;break;case 21:e.prev=21,e.t0=e.catch(4),a=!0,i=e.t0;case 25:if(e.prev=25,e.prev=26,r||null==s.return){e.next=30;break}return e.next=30,s.return();case 30:if(e.prev=30,!a){e.next=33;break}throw i;case 33:return e.finish(30);case 34:return e.finish(25);case 35:e.next=40;break;case 37:e.prev=37,e.t1=e.catch(0),console.error("sendPayload",e.t1);case 40:case"end":return e.stop()}}),e,null,[[0,37],[4,21,25,35],[26,,30,34]])})));return function(n,t){return e.apply(this,arguments)}}(),C=function(){var e=Object(i.a)(c.a.mark((function e(n,t){var r,a,i,s,u,d,f;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,r=!0,a=!1,e.prev=3,s=Object(o.a)(Object(v.f)(JSON.stringify(t),O));case 5:return e.next=7,s.next();case 7:return u=e.sent,r=u.done,e.next=11,u.value;case 11:if(d=e.sent,r){e.next=18;break}f=d,T.sendTo(n.peer,f);case 15:r=!0,e.next=5;break;case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(3),a=!0,i=e.t0;case 24:if(e.prev=24,e.prev=25,r||null==s.return){e.next=29;break}return e.next=29,s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw i;case 32:return e.finish(29);case 33:return e.finish(24);case 34:e.next=39;break;case 36:e.prev=36,e.t1=e.catch(0),console.error("sendPayloadDirectly",e.t1);case 39:case"end":return e.stop()}}),e,null,[[0,36],[3,20,24,34],[25,,29,33]])})));return function(n,t){return e.apply(this,arguments)}}(),M=function(){var e=Object(i.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h){e.next=2;break}return e.abrupt("return");case 2:return r={userId:t,data:n,mediaTypes:k},e.next=5,P(y,r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),D=function(){var e=Object(i.a)(c.a.mark((function e(n,r){var a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h){e.next=2;break}return e.abrupt("return");case 2:if(a=g.findConn(r)){e.next=5;break}return e.abrupt("return");case 5:return i={userId:t,data:n,mediaTypes:k},e.next=8,C(a,i);case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),A=function(e){h||(e.length!==k.length&&g.forEachConns((function(n){var t={userId:n.userId,peerIndex:n.peerIndex,mediaTypes:g.getAcceptingMediaTypes(n)},r=n.recvPc.getTransceivers();n.recvPc.getReceivers().forEach((function(a){var c=r.find((function(e){return e.receiver===a})),i=null===c||void 0===c?void 0:c.mid,o=i&&g.getRemoteMediaType(n,i);o?"live"===a.track.readyState&&!k.includes(o)&&e.includes(o)&&x(o,Object(w.c)(a.track,n.recvPc),t):console.warn("failed to find media type from mid")}))})),k=e,M(null))},S=function(){var e=Object(i.a)(c.a.mark((function e(n,t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=q(),e.next=3,C(n,{SDP:Object(r.a)(Object(r.a)({},t),{},{msid2mediaType:a})});case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),L=function(){var e=Object(i.a)(c.a.mark((function e(n,t){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(l.c)(t)){e.next=2;break}return e.abrupt("return");case 2:if(Object(l.b)(t,"negotiationId")){e.next=5;break}return console.warn("negotiationId not found in SDP"),e.abrupt("return");case 5:if(r=t.negotiationId,g.registerRemoteMediaType(n,t),!Object(l.a)(t,"offer")){e.next=24;break}return e.prev=8,e.next=11,n.recvPc.setRemoteDescription(t.offer);case 11:return e.next=13,n.recvPc.createAnswer();case 13:return a=e.sent,e.next=16,n.recvPc.setLocalDescription(a);case 16:S(n,{negotiationId:r,answer:a}),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(8),console.info("handleSDP offer failed",e.t0);case 22:e.next=37;break;case 24:if(!Object(l.a)(t,"answer")){e.next=36;break}return R.get(n)===r&&R.delete(n),e.prev=26,e.next=29,n.sendPc.setRemoteDescription(t.answer);case 29:e.next=34;break;case 31:e.prev=31,e.t1=e.catch(26),console.info("handleSDP answer failed",e.t1);case 34:e.next=37;break;case 36:console.warn("unknown SDP",t);case 37:case"end":return e.stop()}}),e,null,[[8,19],[26,31]])})));return function(n,t){return e.apply(this,arguments)}}(),R=new WeakMap,N=function(e){var n=R.has(e);if(R.set(e,Object(v.j)()),!n){var t=function(){var n=Object(i.a)(c.a.mark((function n(){var r,a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=R.get(e)){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,e.sendPc.createOffer();case 5:return a=n.sent,n.next=8,e.sendPc.setLocalDescription(a);case 8:return n.next=10,S(e,{negotiationId:r,offer:a});case 10:return n.next=12,Object(p.a)(5e3);case 12:t();case 13:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();t()}},J=function(e,n){C(e,{ICE:n})},W=function(e,n){if(Object(l.c)(n))if(Object(l.b)(n,"direction"))if(Object(l.a)(n,"candidate"))try{"send"===n.direction?e.recvPc.addIceCandidate(n.candidate):"recv"===n.direction&&e.sendPc.addIceCandidate(n.candidate)}catch(t){console.info("handleCandidate failed",t)}else console.warn("candidate not found in ICE");else console.warn("direction not found in ICE")},_=function(){var e=Object(i.a)(c.a.mark((function e(n,t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Array.isArray(t)||!t.every((function(e){return"string"===typeof e}))){e.next=5;break}return g.setAcceptingMediaTypes(n,t),e.next=4,Object(p.a)(5e3);case 4:K(n);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),z=function(e,n){var t={userId:e.userId,peerIndex:e.peerIndex,mediaTypes:g.getAcceptingMediaTypes(e)};try{d(n,t)}catch(r){console.warn("receiveData",r)}},F=function(){var e=Object(i.a)(c.a.mark((function e(n,t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,Object(l.c)(t)){e.next=3;break}return e.abrupt("return");case 3:L(n,t.SDP),W(n,t.ICE),_(n,t.mediaTypes),z(n,t.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.info("Error in handlePayload",e.t0,t);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n,t){return e.apply(this,arguments)}}(),G=function(e,n){var t=g.addConn(e,n);return t.sendPc.addEventListener("icecandidate",(function(e){var n=e.candidate;n&&J(t,{direction:"send",candidate:n})})),t.recvPc.addEventListener("icecandidate",(function(e){var n=e.candidate;n&&J(t,{direction:"recv",candidate:n})})),t.recvPc.addEventListener("track",(function(e){var n=e.transceiver.mid,r=n&&g.getRemoteMediaType(t,n);if(r){var a={userId:t.userId,peerIndex:t.peerIndex,mediaTypes:g.getAcceptingMediaTypes(t)};x(r,Object(w.c)(e.track,t.recvPc),a)}else console.warn("failed to find media type from mid")})),s(t.peerIndex),a({type:"NEW_CONNECTION",peerIndex:t.peerIndex}),t},U=function(e){if(!Object(l.c)(e))return null;var n=e.userId;return"string"!==typeof n?null:n},V=function(){var e=Object(i.a)(c.a.mark((function e(n){var t,r,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h){e.next=2;break}return e.abrupt("return");case 2:if(n.from!==I){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,E(n.data);case 6:if(void 0!==(t=e.sent)){e.next=9;break}return e.abrupt("return");case 9:if(r=U(t),(i=g.getConn(n.from))||(r?i=G(n.from,r):console.warn("cannot initialize conn without user id")),!i){e.next=15;break}return e.next=15,F(i,t);case 15:o=g.getPeerIndexList(),a({type:"CONNECTED_PEERS",peerIndexList:o});case 17:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Z=new Map,q=function(){var e={};return Z.forEach((function(n,t){var r=n.stream;e[r.id]=t})),e},B=function(e,n){if(!h){if(Z.has(e))throw new Error("track is already added for ".concat(e));var t=new MediaStream([n]);Z.set(e,{stream:t,track:n}),g.forEachConnsAcceptingMedia(e,(function(e){try{e.sendPc.addTrack(n,t),N(e)}catch(r){if("InvalidAccessError"!==r.name)throw r}}))}},H=function(e){if(!h){var n=Z.get(e);if(n){var t=n.track;Z.delete(e),g.forEachConnsAcceptingMedia(e,(function(e){var n=e.sendPc.getSenders().find((function(e){return e.track===t}));n&&(e.sendPc.removeTrack(n),N(e))}))}else console.log("track is already removed for",e)}},K=function(e){var n=e.sendPc.getSenders(),t=g.getAcceptingMediaTypes(e);t.forEach((function(t){var r=Z.get(t);if(r){var a=r.stream,c=r.track;n.every((function(e){return e.track!==c}))&&(e.sendPc.addTrack(c,a),N(e))}})),n.forEach((function(n){n.track&&(t.some((function(e){var t;return(null===(t=Z.get(e))||void 0===t?void 0:t.track)===n.track}))||(e.sendPc.removeTrack(n),N(e)))}))},Q=function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h=!0,e.next=3,T.leave();case 3:return e.next=5,j.stop();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.abrupt("return",{broadcastData:M,sendData:D,acceptMediaTypes:A,addTrack:B,removeTrack:H,dispose:Q});case 46:case"end":return e.stop()}}),e)})));return function(n,t,r,a,c,i){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=8.c265574f.chunk.js.map