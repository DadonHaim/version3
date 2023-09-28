import { socket ,UserClient} from "../importAll";

export function Start_With_Token(store:any){
    let token = sessionStorage.getItem("token");
    if(token) 
        socket.emit<string>("Start-With-Token",token)
    socket.on<UserClient>("Start-Token-Valid",(user)=>{
        store.dispatch(store.actions.setIsLogin(true));
        store.dispatch(store.actions.setUser(user));
        store.dispatch(store.actions.setSubPage("Game-SelectAvatar"))
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


export function Login_Me(store:any , send:ILogin , setMsg:any){
    socket.emit <ILogin>     ('Login-Me'               , send)
    socket.on   <ILoginMsgs> ("Login-You-Are-Already"  , (msgs:ILoginMsgs) =>  setMsg(msgs))
    socket.on   <ILoginMsgs> ("Login-No-Valid"         , (msgs:ILoginMsgs) =>  setMsg(msgs))
    socket.on   <UserClient> ("Login-You"              , (user:UserClient) =>  {
        UserClient.CreateToken(user.token)
        store.dispatch(store.actions.setIsLogin(true))
        store.dispatch(store.actions.setUser(user))
        store.dispatch(store.actions.setMainPage("Game"))
    })
}

export function Register_Me(store:any,send:IRegister,setMsg:any){
    socket.emit <IRegister>     ("Register-Me"        ,send);
    socket.on   <IRegisterMsgs> ("Register-Not-Valid" ,(msgs:IRegisterMsgs)=>setMsg(msgs))
    socket.on   <IRegisterMsgs> ("Register-You"       ,(msgs:IRegisterMsgs)=>setMsg(msgs)) 
}


