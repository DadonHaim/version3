import { SocketVer2, User, UserClient } from "./../importAll";


export default function LoginSocket(socket:SocketVer2){
 
    //Token 
    socket.on<string>("Start-With-Token",(token)=>{
        socket.user = User.GetUserByToken(token); 
        if(socket.user.IsLogin())
            socket.emit<UserClient>("Start-Token-Valid" , socket.user.GetModelClient())
        else
            socket.emit("Start-Token-No-Valid",socket.user.message.login)
    })  


    //LoginForm 
    socket.on<ILogin>("Login-Me",(data)=>{ 
        if(socket.user.IsLogin()) 
            socket.emit("Login-You-Are-Already");
        else{ 
            socket.user.Login(data); 
            if(socket.user.IsLogin()) 
                socket.emit<UserClient>("Login-You",socket.user.GetModelClient())
            else 
                socket.emit<ILoginMsgs>("Login-No-Valid",socket.user.message.login)
        }
    })

}
  