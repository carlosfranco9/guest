webpackJsonp([1,6],{29:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["showList"],data:function(){return{msg:"",msgList:[],socketEvents:{receiveMsg:function(e){this.$emit("receive",e),this.msgList.unshift(e),this.msgList.splice(4,this.msgList.length)}}}},methods:{send:function(e){this.$webSocket.send(e,"chatMsg")},sendMsg:function(){this.msg&&(this.send(this.msg),this.msg="")}}}},30:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["user"]}},41:function(e,t,n){t=e.exports=n(3)(),t.push([e.id,'.player-item .head{position:relative;width:80%;height:10vw;color:#fff;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-size:10vw;background-color:#26a2ff}.player-item .score{position:absolute;top:0;right:0;font-size:10px;padding:2px 4px;background:#fff;color:#26a2ff}.player-item .username{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#26a2ff;font-size:.8em;margin-top:.2em}.player-item.empty-item .head{background-color:#fff;color:#26a2ff}.player-item .head:after,.player-item .head:before{position:absolute;left:0;top:0;color:#26a2ff;background:#fff;padding:2px 4px;font-size:10px}.player-item.me .head:after{content:"\\6211"}.player-item.leave .head{background:#eee}.player-item.leave .head:before{content:"\\6389"}.player-item.draw .head{background:#006dbf}.player-item.draw .head:before{content:"\\753B"}.player-item.draw .head:after{left:20px}.player-item.master .head:before{content:"\\4E3B"}.player-item.master .head:after{left:20px}',"",{version:3,sources:["/./src/views/room/PlayerItem.vue"],names:[],mappings:"AACA,mBAAmB,kBAAkB,UAAU,YAAY,WAAW,oBAAoB,aAAa,sBAAsB,mBAAmB,qBAAqB,uBAAuB,eAAe,wBAAwB,CAClO,AACD,oBAAoB,kBAAkB,MAAM,QAAQ,eAAe,gBAAgB,gBAAgB,aAAa,CAC/G,AACD,uBAAuB,mBAAmB,gBAAgB,uBAAuB,cAAc,eAAe,eAAe,CAC5H,AACD,8BAA8B,sBAAsB,aAAa,CAChE,AAGD,mDAF0B,kBAAkB,OAAO,MAAM,cAAc,gBAAgB,gBAAgB,cAAc,CAGpH,AACD,4BAA4B,eAAW,CACtC,AACD,yBAAyB,eAAe,CACvC,AACD,gCAAgC,eAAW,CAC1C,AACD,wBAAwB,kBAAkB,CACzC,AACD,+BAA+B,eAAW,CACzC,AACD,8BAA8B,SAAS,CACtC,AACD,iCAAiC,eAAW,CAC3C,AACD,gCAAgC,SAAS,CACxC",file:"PlayerItem.vue",sourcesContent:['\n.player-item .head{position:relative;width:80%;height:10vw;color:#fff;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-size:10vw;background-color:#26a2ff\n}\n.player-item .score{position:absolute;top:0;right:0;font-size:10px;padding:2px 4px;background:#fff;color:#26a2ff\n}\n.player-item .username{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#26a2ff;font-size:.8em;margin-top:.2em\n}\n.player-item.empty-item .head{background-color:#fff;color:#26a2ff\n}\n.player-item .head:before{position:absolute;left:0;top:0;color:#26a2ff;background:#fff;padding:2px 4px;font-size:10px\n}\n.player-item .head:after{position:absolute;left:0;top:0;color:#26a2ff;background:#fff;padding:2px 4px;font-size:10px\n}\n.player-item.me .head:after{content:"我"\n}\n.player-item.leave .head{background:#eee\n}\n.player-item.leave .head:before{content:\'掉\'\n}\n.player-item.draw .head{background:#006dbf\n}\n.player-item.draw .head:before{content:"画"\n}\n.player-item.draw .head:after{left:20px\n}\n.player-item.master .head:before{content:"主"\n}\n.player-item.master .head:after{left:20px\n}'],sourceRoot:"webpack://"}])},42:function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".input-group{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background:#fff;border-bottom:1px solid #26a2ff}.input-group input{-ms-flex:1;flex:1;border:0;margin:0;height:40px;padding:0 15px;font-size:1.1em}.input-group button{border-radius:0;height:40px}.chat-input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.msg-list{background:#fff}.msg-list p{margin:.6em .8em}","",{version:3,sources:["/./src/views/play/chat.vue"],names:[],mappings:"AACA,aAAa,oBAAoB,aAAa,sBAAsB,mBAAmB,gBAAgB,+BAA+B,CACrI,AACD,mBAAmB,WAAW,OAAO,SAAS,SAAS,YAAY,eAAe,eAAe,CAChG,AACD,oBAAoB,gBAAgB,WAAW,CAC9C,AACD,YAAY,oBAAoB,aAAa,0BAA0B,qBAAqB,CAC3F,AACD,UAAU,eAAe,CACxB,AACD,YAAY,gBAAgB,CAC3B",file:"chat.vue",sourcesContent:["\n.input-group{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background:#fff;border-bottom:#26a2ff solid 1px\n}\n.input-group input{-ms-flex:1;flex:1;border:0;margin:0;height:40px;padding:0 15px;font-size:1.1em\n}\n.input-group button{border-radius:0;height:40px\n}\n.chat-input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column\n}\n.msg-list{background:#fff\n}\n.msg-list p{margin:.6em .8em\n}"],sourceRoot:"webpack://"}])},43:function(e,t,n){var s=n(41);"string"==typeof s&&(s=[[e.id,s,""]]);n(5)(s,{});s.locals&&(e.exports=s.locals)},44:function(e,t,n){var s=n(42);"string"==typeof s&&(s=[[e.id,s,""]]);n(5)(s,{});s.locals&&(e.exports=s.locals)},45:function(e,t,n){var s,r;n(44),s=n(29);var a=n(48);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,e.exports=s},46:function(e,t,n){var s,r;n(43),s=n(30);var a=n(47);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,e.exports=s},47:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"player-item"},[n("div",{staticClass:"head"},[e._v(e._s(e.user.username.substr(0,1))),e.user.score>=0?n("div",{staticClass:"score"},[e._v(e._s(e.user.score)+"分")]):e._e()]),n("div",{staticClass:"username"},[e._v(e._s(e.user.username))])])},staticRenderFns:[]}},48:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chat-input"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.sendMsg(t)}}},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.msg,expression:"msg"}],attrs:{type:"text",placeholder:"请输入要发送的消息"},domProps:{value:e.msg},on:{input:function(t){t.target.composing||(e.msg=t.target.value)}}}),n("button",{staticClass:"mint-button mint-button--primary mint-button--normal",attrs:{type:"submit"}},[e._v("发送")])])]),e.showList?n("div",{staticClass:"msg-list"},e._l(e.msgList,function(t){return n("p",{class:t.type},[e._v(e._s(t.msg))])}),0):e._e()])},staticRenderFns:[]}},87:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(91),a=s(r),o=n(17),i=s(o),l=n(46),A=s(l),c=n(45),f=s(c);t.default={components:{Chat:f.default,PlayerItem:A.default},beforeRouteEnter:function(e,t,n){n(function(t){t.loading(),t.$webSocket.request({id:e.params.id},"enterRoom").then(t.enterSuccess).catch(function(e){t.$message(e.msg),t.$router.replace("/")})})},beforeRouteLeave:function(e,t,n){"begin"!==e.name&&this.$webSocket.send({},"leaveRoom"),n()},data:function(){return{socketEvents:{roomClose:this.showBackError,roomFull:this.showBackError,userEnter:function(e){this.refreshUser(e)},gameBegin:function(e){var t=e.id;this.$router.replace({name:"begin",params:{id:t}})},userLeave:function(e){var t=e.id;delete this.userMap[t],this.userMap=(0,i.default)({},this.userMap)}},room:{},userMap:{},playerNumber:8}},computed:{me:function(){return this.$store.getters.user},users:function(){return(0,a.default)(this.userMap)},isRoomMaster:function(){var e=this.me.id,t=this.users[0];return t&&t.id===e},canBegin:function(){return this.users.length>1},emptyNumber:function(){var e=this.users,t=8;return this.room.playNumber&&(t=this.room.playNumber-e.length),t}},methods:{beginGame:function(){this.$webSocket.send(null,"beginGame")},showBackError:function(e){this.loaded(),this.$router.replace("/"),this.$message(e.message)},enterSuccess:function(e){this.room=e,this.loaded()},refreshUser:function(e){var t={};e.forEach(function(e){t[e.id]=e}),this.userMap=t},leavlRoom:function(){this.$webSocket.send({},"leaveRoom"),this.$router.replace("/")}}}},91:function(e,t,n){e.exports={default:n(100),__esModule:!0}},100:function(e,t,n){n(139),e.exports=n(1).Object.values},124:function(e,t,n){var s=n(7),r=n(16),a=n(14),o=n(21).f;e.exports=function(e){return function(t){for(var n,i=a(t),l=r(i),A=l.length,c=0,f=[];A>c;)n=l[c++],s&&!o.call(i,n)||f.push(e?[n,i[n]]:i[n]);return f}}},139:function(e,t,n){var s=n(6),r=n(124)(!1);s(s.S,"Object",{values:function(e){return r(e)}})},150:function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".player-waiting{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;text-align:center}.begin{padding:0 2vw;margin-bottom:2vw}.player-item{width:25%;padding:2vw}","",{version:3,sources:["/./src/views/room/room.vue"],names:[],mappings:"AACA,gBAAgB,oBAAoB,aAAa,mBAAmB,eAAe,iBAAiB,CACnG,AACD,OAAO,cAAc,iBAAiB,CACrC,AACD,aAAa,UAAU,WAAW,CACjC",file:"room.vue",sourcesContent:["\n.player-waiting{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;text-align:center\n}\n.begin{padding:0 2vw;margin-bottom:2vw\n}\n.player-item{width:25%;padding:2vw\n}"],sourceRoot:"webpack://"}])},164:function(e,t,n){var s=n(150);"string"==typeof s&&(s=[[e.id,s,""]]);n(5)(s,{});s.locals&&(e.exports=s.locals)},183:function(e,t,n){var s,r;n(164),s=n(87);var a=n(192);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,e.exports=s},192:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("mt-header",{attrs:{title:e.room.name}},[n("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:e.leavlRoom},slot:"left"},[e._v("离开房间")]),n("mt-button",{attrs:{slot:"right"},slot:"right"},[e._v("房间号 "+e._s(e.room.id))])],1),n("div",{staticClass:"player-waiting"},[e._l(e.users,function(t,s){return n("player-item",{key:t.id,class:{master:0===s,me:e.me.id===t.id},attrs:{user:t}},[n("div",{staticClass:"head"},[e._v(e._s(t.username.substr(0,1)))]),n("div",{staticClass:"username"},[e._v(e._s(t.username))])])}),e._l(e.emptyNumber,function(t){return n("div",{staticClass:"player-item empty-item"},[n("div",{staticClass:"head"},[e._v("空")]),n("div",{staticClass:"username"},[e._v("等待加入")])])})],2),e.isRoomMaster?n("div",{staticClass:"begin"},[n("mt-button",{attrs:{size:"large",type:"primary",disabled:!e.canBegin},on:{click:e.beginGame}},[e._v(e._s(e.canBegin?"开始游戏":"至少两人才能开始"))])],1):e._e(),n("chat",{attrs:{showList:"1"}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=1.a9e6ca23fc3f624a4cb8.js.map