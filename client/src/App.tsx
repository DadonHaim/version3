import { GridBtn, GridDebug } from "./devComponent"
import {
    // useSocket,
    useStore,
    useEffect,
    useEffectV2,
    useSelector,
    Guest,
    memo,
    User,
    socket,
    Game,
} from "./importAll"

const App = memo(()=>{
    let {actions,dispatch}  = useStore()
    let mainPage            = useSelector<any,any>(store=>store.mainPage)
  

    useEffectV2("app",()=>{
        let token = sessionStorage.getItem("token");
        if(token)
            socket.emit<string>("Start-With-Token",token)
        socket.on<server,User>("Start-Token-Valid",(user)=>{
            dispatch(actions.setIsLogin(true));
            dispatch(actions.setUser(user));
        })
        socket.on("ForceLogout",(msg)=>{
            User.KillToken();
            dispatch(actions.setIsLogin(false));
            dispatch(actions.setUser({}));
            dispatch(actions.setMainPage("Guest"));
            alert(msg);
        })
      })



      return(
        <>
            {mainPage=="Guest"?<Guest/> :"" }
            {mainPage=="Game" ?<Game/> :"" }
            <ConsoleDebug/>
            <GridDebug />
            <GridBtn top={1} ForClassName="container" />
        </>
      )

})



export default App

function ConsoleDebug(){
    let allStore = useSelector<any,any>(store=>store)
    let styles :React.CSSProperties = {position:"absolute",top:0,left:0}
    return <button style={styles} onClick={()=>console.log(allStore)}>store</button>
}