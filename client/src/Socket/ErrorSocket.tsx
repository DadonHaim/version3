import { socket } from "./Socket";

export function Error(){
    socket.on("Error" , (msg)=>{
        alert("ERORR check console");
        console.log("error" , msg);
    })

}

export function Force_Logout(store:any){
    socket.on("ForceLogout",(msg)=>{
        UserClient.KillToken();
        store.dispatch(store.actions.setIsLogin(false));
        store.dispatch(store.actions.setUser({}));
        store.dispatch(store.actions.setMainPage("Guest"));
        alert(msg);
    })
}
