import { SocketVer2 } from "../importAll";

export default function MustLogin(socket:SocketVer2):boolean{
    socket.emit("Avatar-No-Creative-Limit-Max")
    return socket.user.IsLogin();
} 