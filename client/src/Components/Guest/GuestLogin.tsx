import { LoginValidation, Main, User, memo, useRefV2, useSelector, socket, useState, useStore } from "../../importAll";

const GuestLogin = memo((props:IGuestHomeProps)=>{
    let [usernameRef    , passwordRef      ] = useRefV2();
    let {dispatch       , actions          } = useStore();
    let [validationMsgs , setValidationMsgs] = useState<ILoginMsgs>({username:"" ,password:"",status:"" });
    let isLogin                              = useSelector<IStore,boolean>(store=>store.isLogin)

    const submit = ()=>{
        let send:ILogin = {
            username : usernameRef.current.value,
            password : passwordRef.current.value,
        }
        LoginValidation(send).Valid(()=>{
            socket.emit <ILogin>            ('Login-Me'               , send)
            socket.on   <server,ILoginMsgs> ("Login-You-Are-Already"  , (msgs:ILoginMsgs) =>  setValidationMsgs(msgs))
            socket.on   <server,ILoginMsgs> ("Login-No-Valid"         , (msgs:ILoginMsgs) =>  setValidationMsgs(msgs))
            socket.on   <server,User>       ("Login-You"              , (user:User)       =>  {
                User.CreateToken(user.token)
                dispatch(actions.setIsLogin(true))
                dispatch(actions.setUser(user))
                dispatch(actions.setMainPage("Game"))
                setValidationMsgs({status:"Valid"})
            })
        }).NoValid((msgs:any)=>setValidationMsgs(msgs))
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
            <input type="button" onClick={submit} value="Login"/>
            <br/>
            <span>{validationMsgs.status}</span>
        </Main>
    )
}) 



interface IGuestHomeProps{}

export default GuestLogin;

