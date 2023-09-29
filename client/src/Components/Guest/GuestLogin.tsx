import { Login_Me } from "../../Socket/UserSocket";
import { LoginValidation, Main, Component, useRefV2, useSelector, useState, useStore } from "../../importAll";

const GuestLogin = new Component(()=>{
    console.log("Guest-Login")
    let settings                             = useSelector<IStore,ISettings>(store=>store.settings)
    let [uRef, pRef]                         = useRefV2();
    let [validationMsgs , setValidationMsgs] = useState<ILoginMsgs>({username:"" ,password:"",status:"" });
    let store                                = useStore();;

    function submit(){
        let send = {username: uRef.current.value , password:pRef.current.value} as ILogin;
        LoginValidation(send)
            .Valid(()=> Login_Me(store,send,setValidationMsgs))
            .NoValid((msgs)=>setValidationMsgs(msgs))
    }
    

    return(
        <Main position={settings.GUEST_MAIN_POSITION}  start="1,11" end="50,41" border>
            <label>username:</label>
            <input ref={uRef} name="username" type="text"/>
            <span className="validation">{validationMsgs.username}</span>
            <br/>
            <label>password:</label>
            <input ref={pRef} name="password" type="password"/>
            <span className="validation">{validationMsgs.password}</span>
            <br/>
            <input type="button" onClick={submit} value="Login"/>
            <br/>
            <span>{validationMsgs.status}</span>
        </Main>
    )
}) 

export default GuestLogin.Get({Logout:true,subPage:"Guest-Login"});

