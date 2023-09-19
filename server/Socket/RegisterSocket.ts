import { SocketVer2, User } from "./../importAll";


export default function RegisterSocket(socket:SocketVer2 , user:User){
 
    //RegisterForm
    socket.On<client,IRegister>("Register-Me" ,(data)=>{
        if(!user.IsExist()){
            user = new User().Register(data);
            if(user.IsExist())
                socket.Emit("Register-You");
            user.message.register
        }
        else
            socket.Emit<IRegisterMsgs>("Register-Not-Valid",{status:"register not valid"})
    })


}
