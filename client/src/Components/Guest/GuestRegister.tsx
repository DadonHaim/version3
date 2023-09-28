import { Register_Me } from "../../Socket/UserSocket";
import { RegisterValidation, Main, Component, useRefV2, useSelector, Settings, useState, useStore } from "../../importAll";

const GuestRegister = new Component(()=>{
    console.log("Guest-Register")
    let settings                              = useSelector<IStore,Settings>(store=>store.settings)

    let [uRef,pRef,eRef,fRef,lRef]            = useRefV2();
    let [validationMsgs , setValidationMsgs]  = useState<IRegisterMsgs>({username:"" ,password:"",email:'',firstName:'',lastName:'',status:"" });
    let store                                 = useStore();;

    function submit(){
        let send = {username:uRef.current.value,   password:pRef.current.value,    email:eRef.current.value,   firstName:fRef.current.value,   lastName:lRef.current.value} as IRegister;
        RegisterValidation(send,"client")
            .Valid(()=>Register_Me(store,send,setValidationMsgs))
            .NoValid(msgs=>setValidationMsgs(msgs))
    }


    return (
        <Main position={settings.GUEST_MAIN_POSITION} start="1,11" end="50,41" border>
            <label>username:</label>
            <input ref={uRef} name="username" type="text"/>
            <span className="validation">{validationMsgs.username}</span>
            <br/>
            <label>password:</label>
            <input ref={pRef} name="password" type="password"/>
            <span className="validation">{validationMsgs.password}</span>
            <br/>
            <label>email:</label>
            <input ref={eRef} name="email" type="text"/>
            <span className="validation">{validationMsgs.email}</span>
            <br/>
            <label>fristName:</label>
            <input ref={fRef} name="fristNameR" type="text"/>
            <span className="validation">{validationMsgs.firstName}</span>
            <br/>
            <label>lastName:</label>
            <input ref={lRef} name="lastName" type="text"/>
            <span className="validation">{validationMsgs.lastName}</span>
            <br/>
            <input type="button" onClick={submit} value="Register"/>
            <br/>
            <span>{validationMsgs.status}</span>
        </Main>
    )
}) 

export default GuestRegister.Get({Logout:true,subPage:"Guest-Register"});

