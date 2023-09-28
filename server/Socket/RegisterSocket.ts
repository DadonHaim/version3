import { SocketVer2, User } from "./../importAll";


export default function RegisterSocket(socket:SocketVer2){
 
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
 