import ItemClient from "../Server-Client-Shared/ModelsClient/ItemClient";
import {AvatarClient, socket } from "../importAll";


export function Give_Me_Start_Items(set:any){
    socket.emit("Avatar: Give-Me-start-Items");

    socket.on<ItemClient[]>("Avatar: Get-Start-Items" ,(items)=>{
        set(items);
    })
}