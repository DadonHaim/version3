import MustLogin from "../MiddleWares/MustLoginSocket";
import { Item, ItemClient, SocketVer2, UserClient } from "./../importAll";
import LimitAvatars from "../MiddleWares/LimitAvatarsSocket";
import Socket from "./Socket";

export default function AvatarSocket(socket:SocketVer2 ){
    //send all user avatars:
    socket.on("Avatar: Give-Me-List",()=>{
        socket.emit<UserClient[]>("Avatar: Get-List",socket.user.GetAvatarsClient())
        
    })

    socket.on("Avatar: Give-Me-Active-Avatar",()=>{
        socket.emit<UserClient>("Avatar: Get-Active-Avatar",socket.user.GetActiveAvatar()?.GetModelClient())
    })


    socket.on<number>("Avatar: Set-Active-Avatar",(avatarID)=>{
        if(socket.user.SetActiveAvatar(avatarID))
         socket.emit<UserClient>("Avatar: Get-Active-Avatar",socket.user.GetActiveAvatar().GetModelClient())
        else
            socket.emit("Avatar: Not-Found")
    })


    socket.On<IAvatarCreate>("Avatar: Create",{MustLogin,LimitAvatars},()=>{

    })


    socket.On<IAvatarCreate>("Avatar: Give-Me-start-Items",{MustLogin},()=>{
        socket.emit<ItemClient[]>("Avatar: Get-Start-Items" , Item.GetStartItemsClient())
    })

    




} 






  