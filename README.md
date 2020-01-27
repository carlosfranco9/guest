# Quick start
### install dependencies
```bash
npm install
```

### run dev
```bash
npm run dev
```

### build file
```bash
npm run build
```

### 更新日志
- 2017-2-22 19:46:28 修复画布动作无法撤销的问题   
修复游戏结束后 分数排序错误
- 2017-2-23 07:15:59 修改房间内点击离开房间，可以回到主页


### plan
游戏结束后，展示玩家画作，（localStorage）

---

你画我猜，相信大家对这个游戏都很熟悉。   
我用Vue2 + mint-ui + nodejs + websocket 实现了你画我猜这个游戏。   
建议移动端打开效果更佳(可扫下方二维码)，PC端需要使用谷歌开发者模式，然后使用移动调试工具，才可以正常使用（主要是一些touch事件，pc不支持）   
[http://yd.diamondfsd.com](http://yd.diamondfsd.com)    

主要实现了以下这些功能   

## 大厅功能
**个人信息显示**   
顶部显示个人昵称，可以修改   
暂时不支持上传头像，头像用昵称第一个字母代替    
暂时使用 `localStorage` 储存基本基本个人信息（昵称,token等）   
实施更新房间列表，在线人数等信息            

**创建游戏房间**         
房间名称:        
房间类型：公开（可以在游戏大厅被看到），私有（可以通过游戏大厅左上角查找房间号进入）   

**加入房间**    
公开房间加入： 直接在首页游戏大厅的房间列表里面点击加入即可      
私密房间加入： 扫秒二维码或者输入房间号 （二维码由客户端使用js生成，暂未实现）      
房间人满后不可加入      
房间游戏开始后不可加入      
后期可加入观战功能      
当游戏人数大于等于2或者以上的时候，可以开始游戏。  
房间内可以聊天，默认第一个进入房间的人是房主，房主可以开始游戏。    

**游戏开始**   
使用 `canvas` 做画布，通过实时发送动作，全图数据来实现动态笔迹，和最终图片一致性。   
可以修改画笔颜色，粗细，进行撤销，恢复，清空等操作。   
每轮游戏结束后公布答案，预置了一些快捷短语可以恢复。 游戏过程中 作画者 不可以发文字聊天，其他玩家通过发文字猜答案。   


## 项目结构   
这个游戏由两个项目组成，一个是前端，一个是服务端        
前端 [github-you-draw-i-guess](https://github.com/k55k32/you-draw-i-guess)     
前端项目由  Vue2 + mint-ui + vuex + vue-router 完成的单页面app。  用 webpack 打包构建。      

服务端 [github-ydig-websocket](https://github.com/k55k32/ydig-websocket)       
服务端主要就是用了 `ws` 这个库，和 `babel` 来支持一些 es6 的语法来完成的。   
服务端承载了所有的游戏相关逻辑和一些数据。 但是因为没有经过足够的测试，肯定还是有不少bug的。   

另外，没有做数据储存，所有的数据都储存在当次运行的服务内存里，所以服务器重启后，所有的数据就清空了，哈哈，主要是我懒，就没做数据储存了。   
