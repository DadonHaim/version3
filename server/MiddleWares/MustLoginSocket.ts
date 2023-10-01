import { SocketVer2, User } from "../importAll";

export default function MustLogin(soc :SocketVer2):boolean{
    return soc.user.IsLogin();
} 