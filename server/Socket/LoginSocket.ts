import { SocketVer2, User, UserModel } from "./../importAll";


export default function LoginSocket(socket:SocketVer2  ){
 
    //Token 
    socket.On<client,string>("Start-With-Token",(token)=>{
        socket.user = User.GetUserByToken(token); 
        if(socket.user.IsLogin())
            socket.Emit<UserModel>("Start-Token-Valid" , socket.user.SendToClinet())
        else
            socket.Emit("Start-Token-No-Valid")
    })  


    //LoginForm 
    socket.On<client,ILogin>("Login-Me",(data)=>{ 
        if(socket.user.IsLogin()) 
            socket.Emit("Login-You-Are-Already");
        else{ 
            socket.user.Login(data); 
            if(socket.user.IsLogin()) 
                socket.Emit<UserModel>("Login-You",socket.user.SendToClinet())
            else 
                socket.Emit<ILoginMsgs>("Login-No-Valid",socket.user.message.login)
        }
    })

}
