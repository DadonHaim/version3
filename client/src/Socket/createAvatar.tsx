import ItemClient from "../Server-Client-Shared/ModelsClient/ItemClient";
import {AvatarClient, socket } from "../importAll";


export function Give_Me_Start_Items(set:any){
    socket.emit("Avatar: Give-Me-start-Items");

    socket.on<ItemClient[]>("Avatar: Get-Start-Items" ,(items)=>{
        set(items);
    })
}

export function Limit_Avatar(set:any){
    socket.emit("Avatar: Limit?");

    socket.on<{render:boolean,msg:any}>("Avatar: Limit-Over" ,()=>{
        set({render:false,msg:"יש לך כמות אווטרים מקסימלית"});
    })
    socket.on<{render:boolean,msg:any}>("Avatar: Sub-Limit" ,()=>{
        set({render:true,msg:""});
    })
}

