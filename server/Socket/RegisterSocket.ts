import { SocketVer2, User } from "./../importAll";


export default function RegisterSocket(socket:SocketVer2){
 
    //RegisterForm
    socket.On<client,IRegister>("Register-Me" ,(data)=>{
        if(!socket.user.IsExist()){
            socket.user = new User().Register(data);
            if(socket.user.IsExist())
                socket.Emit("Register-You");
            socket.user.message.register
        }
        else
            socket.Emit<IRegisterMsgs>("Register-Not-Valid",{status:"register not valid"})
    })


}
