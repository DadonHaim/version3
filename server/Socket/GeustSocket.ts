import {GetSettings, SocketVer2, User, UserClient} from "./../importAll";

export default function GuestSocket(socket:SocketVer2){
 
    socket.on("Start-Give-Me-Settings",()=>{
        socket.emit<IClientSettings&IGlobalSettings>("Start-Get-Settings",{...GetSettings().client,...GetSettings().global})
    })

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

    //RegisterForm
    socket.on<IRegister>("Register-Me" ,(data)=>{
        if(!socket.user.IsExist()){
            socket.user = new User().Register(data);
            if(socket.user.IsExist())
                socket.emit("Register-You",socket.user.message.register);
            else
                socket.emit<IRegisterMsgs>("Register-Not-Valid",socket.user.message.register)
        }
        else
            socket.emit<IRegisterMsgs>("Register-Not-Valid")
    })


}

