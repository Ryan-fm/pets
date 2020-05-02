import io from 'socket.io-client'
const CHAT = {
    msgObj:document.getElementsByClassName("body-wrapper")[0],
    userName:null,
    socket:null,
    msgArr:[],
    // 退出，简单的刷新操作
    logout:function() {
        this.socket.disconnect()
    },
    // 提交聊天信息内容
    submit:function(obj) {
        this.socket.emit('sendMsg',obj)
    },
    message:function(userName) {
        console.log('message');
        this.socket.on('to',userName,(obj)=>{
            CHAT.msgArr.push(obj)
            console.log('CHAT.msgArr',obj);
        })
    },
    init:function(userName) {
        // 连接websocket后端服务器
        this.socket = io.connect(setting.socket,{'force new connection':true})
        this.socket.on('open',function() {
            console.log('已连接');
        })
        this.socket.emit('addUser',userName)
    }
}
export default CHAT