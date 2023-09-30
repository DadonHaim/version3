import { SocketVer2 } from "../importAll";

export default function MustLogin(socket:SocketVer2):boolean{
    return socket.user.IsLogin();
} 