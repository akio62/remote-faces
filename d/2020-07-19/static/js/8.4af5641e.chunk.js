(this["webpackJsonpremote-faces-web"]=this["webpackJsonpremote-faces-web"]||[]).push([[8],{1126:function(e,t,n){},1135:function(e,t,n){"use strict";n.r(t),n.d(t,"ScreenShare",(function(){return j}));var r=n(43),a=n(13),c=n.n(a),u=(n(1126),n(76)),s=n(1100),i=n(0),o=n.n(i),f=n(7),b=n(1102),m=function(){var e=Object(f.a)(o.a.mark((function e(){var t,n,a,c,u,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={video:!0},e.next=4,navigator.mediaDevices.getDisplayMedia(t);case 4:return n=e.sent,a=n.getVideoTracks(),c=Object(r.a)(a,1),u=c[0],s=function(){u.stop()},e.abrupt("return",{stream:n,dispose:s});case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),p=n(1097),d=function(){var e=Object(f.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("video"===t.kind){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,Object(b.c)(t);case 4:return n=e.sent,e.abrupt("return",!n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=n(1101),v=c.a.memo((function(e){var t=e.nickname,n=e.stream,r=Object(a.useRef)(null);return Object(a.useEffect)((function(){n&&r.current&&(r.current.srcObject=n)}),[n]),c.a.createElement("div",null,c.a.createElement("div",{className:"ScreenShare-nickname"},t),c.a.createElement("video",{className:"ScreenShare-video",ref:r,autoPlay:!0,muted:!0}))})),j=c.a.memo((function(e){var t=e.roomId,n=e.userId,i=e.nickname,b=Object(a.useState)(!1),j=Object(r.a)(b,2),O=j[0],k=j[1],h=function(e,t,n,c){var i=Object(a.useState)(null),b=Object(r.a)(i,2),l=b[0],v=b[1],j=Object(a.useState)({}),O=Object(r.a)(j,2),k=O[0],h=O[1],S=Object(a.useRef)([]);Object(a.useEffect)((function(){return function(){S.current.forEach((function(e){return e()}))}}),[]);var E=Object(a.useCallback)(function(){var e=Object(f.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:h((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(u.a)({},n.userId,new MediaStream([t])))})),r=function(){h((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(u.a)({},n.userId,null))}))},t.addEventListener("ended",r),S.current.push((function(){t.removeEventListener("ended",r)}));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[]),w=Object(p.c)(e,t,E,"screenVideo"),x=w.addTrack,y=w.removeTrack;return Object(a.useEffect)((function(){var e=null;return n&&x&&y&&Object(f.a)(o.a.mark((function t(){var n,a,u,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:if(n=t.sent){t.next=6;break}return c(!1),t.abrupt("return");case 6:a=n.stream.getVideoTracks(),u=Object(r.a)(a,1),s=u[0],x(s),v(n.stream),e=function(){y(s),n.dispose(),v(null),c(!1)},s.addEventListener("ended",(function(){e&&e(),e=null}));case 11:case"end":return t.stop()}}),t)})))(),function(){e&&e()}}),[e,n,c,x,y]),{screenStream:l,screenStreamMap:k}}(t,n,O,k),S=h.screenStream,E=h.screenStreamMap,w=Object(l.a)(t,n);return c.a.createElement("div",{className:"ScreenShare-container"},c.a.createElement("button",{type:"button",onClick:function(){return k(!O)}},O?"Stop screen share":"Start screen share"),S&&c.a.createElement(v,{nickname:i,stream:S}),Object.keys(E).map((function(e){var t=E[e];return t?c.a.createElement(v,{key:e,nickname:w[e]||"No Name",stream:t}):null})))}));t.default=j}}]);
//# sourceMappingURL=8.4af5641e.chunk.js.map