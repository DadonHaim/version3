import { LoginSocket, SocketVer2, User } from "./../importAll";
import AvatarSocket from "./AvatarSocket";
import RegisterSocket from "./RegisterSocket";



export default (socket:SocketVer2)=>{
    LoginSocket(socket);
    // RegisterSocket(socket,user);
    AvatarSocket(socket)
}

    