import { Login_Me } from "../../Socket/UserSocket";
import { LoginValidation, Main, Component, useRefV2, useSelector, useStateV2, useStore ,Button, Input} from "../../importAll";

const GuestLogin = new Component("GuestLogin",()=>{
    let store             = useStore();;
    let settings          = useSelector<IStore,ISettings>(store=>store.settings)
    let [uRef, pRef]      = useRefV2();
    let [validation]      = useStateV2<ILoginMsgs>([{username:"" ,password:"",status:"" }]);

    function submit(){
        let send = {username: uRef.current.value , password:pRef.current.value} as ILogin;
        LoginValidation(send)
            .Valid(()=> Login_Me(store,send,validation.value))
            .NoValid((msgs)=>validation.set(msgs))
    }
    

    return(
        <Main position={settings.GUEST_MAIN_POSITION}  start="1,11" end="50,41" border>
            <Input type="text"       value="username:" ref={uRef} validMgs={validation.value.username}/>
            <Input type="password"   value="password:" ref={pRef} validMgs={validation.value.password}/>
            <Button onClick={submit} value="Login"/>
            <span>{validation.value.status}</span>
        </Main>
    )
}) 

export default GuestLogin.GetPage({Logout:true,subPage:"Guest-Login"});

