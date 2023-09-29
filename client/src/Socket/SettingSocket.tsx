import { socket } from "./Socket";

export function Get_All_Setting(store:any,set?:any){
    socket.emit("Start-Give-Me-Settings");
    socket.on<IClientSettings&IGlobalSettings>("Start-Get-Settings",(settings=>{
        store.dispatch(store.actions.setAllSettings(settings))
    }))
}

