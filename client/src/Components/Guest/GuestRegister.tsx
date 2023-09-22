import { RegisterValidation, Main, memo, useRefV2, useSelector, socket, useState } from "../../importAll";

const GuestRegister = memo((props:IGuestHomeProps)=>{
    let [usernameRef,passwordRef,emailRef,fristNameRef,lastNameRef] = useRefV2();
    let [validationMsgs , setValidationMsgs]                        = useState<IRegisterMsgs>({username:"" ,password:"",email:'',firstName:'',lastName:'',status:"" });
    let isLogin = useSelector<IStore,boolean>(store=>store.isLogin)

    const submit = ()=>{
        console.log(333)
        let send:IRegister = {
            username    : usernameRef.current.value,
            password    : passwordRef.current.value,
            email       : emailRef.current.value,
            firstName   : fristNameRef.current.value,
            lastName    : lastNameRef.current.value,
        }
        RegisterValidation(send,"client").Valid(()=>{ 
            console.log(333)
            socket.emit <IRegister>            ("Register-Me"        ,send);
            socket.on   <server,IRegisterMsgs> ("Register-Not-Valid" ,(msgs:IRegisterMsgs)=>setValidationMsgs(msgs))
            socket.on   <server,IRegisterMsgs> ("Register-You"       ,(msgs:IRegisterMsgs)=>setValidationMsgs(msgs)) 
        }).NoValid(msgs=>setValidationMsgs(msgs))
    }
    if(isLogin) return <>אין לך הרשאה להיכנס לפה! צא החוצה יא אגוז!!</>
    else return(
        <Main   start="1,11" end="50,41" border>
            <label>username:</label>
            <input ref={usernameRef} name="username" type="text"/>
            <span className="validation">{validationMsgs.username}</span>
            <br/>
            <label>password:</label>
            <input ref={passwordRef} name="password" type="password"/>
            <span className="validation">{validationMsgs.password}</span>
            <br/>
            <label>email:</label>
            <input ref={emailRef} name="email" type="text"/>
            <span className="validation">{validationMsgs.email}</span>
            <br/>
            <label>fristName:</label>
            <input ref={fristNameRef} name="fristNameR" type="text"/>
            <span className="validation">{validationMsgs.firstName}</span>
            <br/>
            <label>lastName:</label>
            <input ref={lastNameRef} name="lastName" type="text"/>
            <span className="validation">{validationMsgs.lastName}</span>
            <br/>
            <input type="button" onClick={submit} value="Register"/>
            <br/>
            <span>{validationMsgs.status}</span>
        </Main>
    )
}) 



interface IGuestHomeProps{}


export default GuestRegister;

