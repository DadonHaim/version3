import MustLogin from "../MiddleWares/MustLoginSocket";
import { SocketVer2, UserClient } from "./../importAll";
import LimitAvatars from "../MiddleWares/LimitAvatarsSocket";

export default function AvatarSocket(socket:SocketVer2 ){
    //send all user avatars:
    socket.on("Avatar-Give-Me-List",()=>{
        socket.emit<UserClient[]>("Avatar-Get-List",socket.user.GetAvatarsClient())
        
    })


    socket.On("Avatar-Create",{MustLogin,LimitAvatars},()=>{



    })
} 






  