import {AvatarClient, socket } from "../importAll";


export function Avatar_Give_Me_List(store:any){
    socket.emit("Avatar: Give-Me-List");
    socket.on<AvatarClient[]>("Avatar: Get-List",(avatars)=>{
        store.dispatch(store.actions.setAllAvatars(avatars));
    })
}

export function Give_Me_Active_Avatar(store:any, avatarID : number){
    socket.emit("Avatar: Give-Me-Active-Avatar" ,avatarID)
    socket.on("Avatar: Get-Active-Avatar",(avatar:AvatarClient)=>{
        store.dispatch(store.actions.setActiveAvatar(avatar));
    })

    socket.on("Avatar: Not-Found",(msg:any)=>{
        alert("ראה קונסול");
        console.log("Avatar: Not-Found");
    })
}

export function Set_Active_Avatar(store:any, avatarID : number){
    socket.emit("Avatar: Set-Active-Avatar" ,avatarID)

    socket.on("Avatar: Get-Active-Avatar",(avatar:AvatarClient)=>{
        store.dispatch(store.actions.setActiveAvatar(avatar));
    })

    socket.on("Avatar: Not-Found",(msg:any)=>{
        alert("ראה קונסול");
        console.log("Avatar: Not-Found");
    })
}

