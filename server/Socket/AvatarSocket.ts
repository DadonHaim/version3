import AvatarClient from "Server-Client-Shared/ModelsClient/AvatarClient";
import { SocketVer2, User, UserModel } from "./../importAll";


export default function AvatarSocket(socket:SocketVer2 ){
    //send all user avatars:
    socket.On<client>("Avatar-Give-Me-List",()=>{
        console.dir(socket.user.GetAvatarsForClients())
        socket.Emit<AvatarClient[]>("Avatar-Get-List",socket.user.GetAvatarsForClients())
    })

} 






