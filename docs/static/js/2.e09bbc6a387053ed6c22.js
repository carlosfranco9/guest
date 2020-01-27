webpackJsonp([2,6],{82:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(17),i=n(s),r=o(184),a=n(r);t.default={components:{UserInfo:a.default},data:function(){return{socketEvents:{roomCreated:this.insertRoom,roomChanged:this.roomUpdate,userNumber:function(e){this.onlineUser=e}},onlineUser:1,roomList:50,allLoad:!1}},beforeRouteEnter:function(e,t,o){o(function(e){e.$webSocket.send({},"enterIndex")})},beforeRouteLeave:function(e,t,o){this.$webSocket.send({},"leaveIndex"),o()},created:function(){var e=this;this.loadRoomList(),this.$webSocket.request({},"userNumber").then(function(t){e.onlineUser=t})},computed:{loadEL:function(){return this.$refs.loadmore},roomMap:function e(){var e={};return this.roomList.forEach(function(t){e[t.id]=t}),e}},methods:{insertRoom:function(e){this.roomMap[e.id]?this.roomUpdate(e):this.roomList.unshift(e)},roomUpdate:function(e){var t=this.roomMap[e.id];t&&(this.roomList=this.roomList.map(function(t){return t.id===e.id?(0,i.default)({},t,e):t}))},loadRoomList:function(){var e=this;return this.$webSocket.request({},"roomList").then(function(t){e.roomList=t})},inputRoomNumber:function(){var e=this;this.$messageBox.prompt("请输入房间号").then(function(t){var o=t.value;o?e.$router.push({name:"room",params:{id:o}}):e.$message("请输入房间号")})},loadTop:function(){var e=this;this.refresh().then(function(t){e.loadEL.onTopLoaded()})},loadBottom:function(){this.loadMore(),this.loadEL.onBottomLoaded()},loadMore:function(){},refresh:function(){return this.loadRoomList()}}}},88:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(70);t.default={data:function(){return{}},computed:{user:function(){return this.$store.getters.user},firstWord:function(){var e=this.user;return e.username&&e.username.substr(0,1)}},methods:{showUpdateName:function(){var e=this;n.MessageBox.prompt("请输入昵称",{inputPlaceholder:this.user.username}).then(function(t){e.changeUserName(t.value)})},changeUserName:function(e){e?(this.$store.dispatch("change-user",{username:e}),this.$webSocket.send({username:e},"changename")):this.$message("你没有输入昵称哦！")}}}},145:function(e,t,o){t=e.exports=o(3)(),t.push([e.id,".no-room{text-align:center;line-height:2em;font-size:2em;color:#ccc;padding:15px}.room-item{background:#fff;margin-bottom:1.17em}.room-item .mint-header{height:auto;padding:15px;font-size:1em}.join-room{padding:15px}.room-item-header{background:#26a2ff;color:#fff;padding:15px}.index{height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.index .room-list{-ms-flex:1;flex:1;overflow:auto}.server-info{font-size:15px}","",{version:3,sources:["/./src/views/index.vue"],names:[],mappings:"AACA,SAAS,kBAAkB,gBAAgB,cAAc,WAAW,YAAY,CAC/E,AACD,WAAW,gBAAgB,oBAAoB,CAC9C,AACD,wBAAwB,YAAY,aAAa,aAAa,CAC7D,AACD,WAAW,YAAY,CACtB,AACD,kBAAkB,mBAAmB,WAAW,YAAY,CAC3D,AACD,OAAO,YAAY,oBAAoB,aAAa,0BAA0B,qBAAqB,CAClG,AACD,kBAAkB,WAAW,OAAO,aAAa,CAChD,AACD,aAAa,cAAc,CAC1B",file:"index.vue",sourcesContent:["\n.no-room{text-align:center;line-height:2em;font-size:2em;color:#ccc;padding:15px\n}\n.room-item{background:#fff;margin-bottom:1.17em\n}\n.room-item .mint-header{height:auto;padding:15px;font-size:1em\n}\n.join-room{padding:15px\n}\n.room-item-header{background:#26a2ff;color:#fff;padding:15px\n}\n.index{height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column\n}\n.index .room-list{-ms-flex:1;flex:1;overflow:auto\n}\n.server-info{font-size:15px\n}"],sourceRoot:"webpack://"}])},149:function(e,t,o){t=e.exports=o(3)(),t.push([e.id,".user-info{padding:5px;background:#fff}.user-info,.user-info .head{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.user-info .head{font-size:3em;background-color:#26a2ff;color:#fff;width:60px;height:60px;-ms-flex-pack:center;justify-content:center}.user-info .name{color:#26a2ff;overflow:hidden;-ms-flex:1;flex:1;padding:5px}","",{version:3,sources:["/./src/views/user/info.vue"],names:[],mappings:"AACA,WAAqF,YAAY,eAAe,CAC/G,AACD,4BAFW,oBAAoB,aAAa,sBAAsB,kBAAmB,CAGpF,AADD,iBAAiB,cAAc,yBAAyB,WAAW,WAAW,YAAY,AAA0E,qBAAqB,sBAAsB,CAC9M,AACD,iBAAiB,cAAc,gBAAgB,WAAW,OAAO,WAAW,CAC3E",file:"info.vue",sourcesContent:["\n.user-info{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:5px;background:#fff\n}\n.user-info .head{font-size:3em;background-color:#26a2ff;color:#fff;width:60px;height:60px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center\n}\n.user-info .name{color:#26a2ff;overflow:hidden;-ms-flex:1;flex:1;padding:5px\n}"],sourceRoot:"webpack://"}])},159:function(e,t,o){var n=o(145);"string"==typeof n&&(n=[[e.id,n,""]]);o(5)(n,{});n.locals&&(e.exports=n.locals)},163:function(e,t,o){var n=o(149);"string"==typeof n&&(n=[[e.id,n,""]]);o(5)(n,{});n.locals&&(e.exports=n.locals)},178:function(e,t,o){var n,s;o(159),n=o(82);var i=o(187);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,e.exports=n},184:function(e,t,o){var n,s;o(163),n=o(88);var i=o(191);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,e.exports=n},187:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"index"},[o("mt-header",{attrs:{title:"你画我猜-游戏大厅"}},[o("mt-button",{attrs:{slot:"left",icon:"search"},on:{click:e.inputRoomNumber},slot:"left"},[e._v("查找房间")]),o("router-link",{attrs:{slot:"right",to:{name:"create-room"}},slot:"right"},[o("mt-button",[e._v("创建房间")])],1)],1),o("user-info",{staticClass:"shadow"}),o("div",{staticClass:"room-list"},[o("mt-loadmore",{ref:"loadmore",attrs:{"top-method":e.loadTop,"bottom-method":e.loadBottom,"bottom-all-loaded":e.allLoad,bottomDistance:50}},e._l(e.roomList,function(t){return o("div",{key:t.id,staticClass:"room-item"},[o("mt-header",{staticClass:"light-header"},[o("div",{staticClass:"room-name",attrs:{slot:"left"},slot:"left"},[e._v(e._s(t.id+": "+t.name))]),o("div",{staticClass:"status",class:{ready:1===t.status,started:2===t.status},attrs:{slot:"right"},slot:"right"},[e._v(e._s(e.$const("RoomStatus")[t.status]))])]),o("mt-header",{staticClass:"white-header"},[o("div",{staticClass:"room-play-number",attrs:{slot:"left"},slot:"left"},[e._v("玩家人数："+e._s(t.joined+" / "+t.playNumber))]),o("div",{staticClass:"join-btn",attrs:{slot:"right"},slot:"right"},[1===t.status?o("router-link",{attrs:{to:{name:"room",params:{id:t.id}}}},[o("mt-button",{attrs:{size:"small",type:"primary",plain:"plain"}},[e._v("加入房间")])],1):e._e()],1)])],1)}),0),o("div",{staticClass:"no-room"},[o("router-link",{attrs:{to:{name:"create-room"},tag:"div"}},[o("mt-button",{attrs:{type:"primary",size:"large",plain:"plain"}},[e._v("没有想要的房间？创建一个")])],1),o("div",{staticClass:"server-info"},[e._v("在线人数: "+e._s(e.onlineUser))])],1)],1)],1)},staticRenderFns:[]}},191:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"user-info"},[o("div",{staticClass:"head"},[e._v(e._s(e.firstWord))]),o("div",{staticClass:"name"},[e._v(e._s(e.user.username))]),o("div",{staticClass:"after"},[o("mt-button",{attrs:{type:"primary",size:"small",plain:"plain"},on:{click:e.showUpdateName}},[e._v("修改昵称")]),o("router-link",{attrs:{tag:"span",to:{name:"create-room"}}})],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=2.e09bbc6a387053ed6c22.js.map