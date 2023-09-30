import { socket } from "./Socket";

export function Get_All_Setting(store:any,set?:any){
    socket.emit("Start: Give-Me-Settings");
    socket.on<ISettings>("Start: Get-All-Settings",(settings=>{
        store.dispatch(store.actions.setAllSettings(settings))
    }))
    
}

