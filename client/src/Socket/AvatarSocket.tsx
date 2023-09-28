import {AvatarClient, socket } from "../importAll";

export function Avatar_Give_Me_List(store:any){
    socket.emit("Avatar-Give-Me-List");
    socket.on<AvatarClient[]>("Avatar-Get-List",(avatars)=>{
        store.dispatch(store.actions.setAllAvatars(avatars));
    })
}

