import { Register_Me } from "../../Socket/UserSocket";
import {RegisterValidation, Main, Component, useRefV2, useSelector, useState, useStore, useStateV2 } from "../../importAll";
import { Button, Input } from "../Containers";

const GuestRegister = new Component("GuestRegister",()=>{
    let store                        = useStore();;
    let settings                     = useSelector<IStore,ISettings>(store=>store.settings)
    let [uRef,pRef,eRef,fRef,lRef]   = useRefV2();
    let [validation]                 = useStateV2<IRegisterMsgs>([{username:"" ,password:"",email:'',firstName:'',lastName:'',status:"" }]);

    function submit(){
        let send = {username:uRef.current.value,   password:pRef.current.value,    email:eRef.current.value,   firstName:fRef.current.value,   lastName:lRef.current.value} as IRegister;
        RegisterValidation(send)
            .Valid(()=>Register_Me(store,send,validation.value))
            .NoValid(msgs=>validation.set(msgs))
    }


    return (
        <Main position={settings.GUEST_MAIN_POSITION} start="1,11" end="50,41" border>
            <Input ref={uRef} type="text"     value="username:"     validMgs={validation.value.username}/>
            <Input ref={pRef} type="password" value="password:"     validMgs={validation.value.password}/>
            <Input ref={eRef} type="text"     value="email:"        validMgs={validation.value.email}/>
            <Input ref={fRef} type="text"     value="fristName:"    validMgs={validation.value.firstName}/>
            <Input ref={lRef} type="text"     value="lastName:"     validMgs={validation.value.lastName}/>

            <Button onClick={submit} value="Register"/>
            <span>{validation.value.status}</span>
        </Main>
    )
}) 

export default GuestRegister.GetPage({Logout:true,subPage:"Guest-Register"});

