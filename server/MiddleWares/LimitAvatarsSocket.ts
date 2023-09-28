import { SocketVer2 } from "importAll"

export default function LimitAvatars(socket:SocketVer2):boolean{
    return socket.user.canCreteNewAvatar();
}