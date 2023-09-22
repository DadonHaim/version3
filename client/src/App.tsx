import { GridBtn, GridDebug } from "./devComponent"
import {
    // useSocket,
    useStore,
    useEffect,
    useEffectV2,
    useSelector,
    Guest,
    memo,
    UserClient,
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
        socket.on<server,UserClient>("Start-Token-Valid",(user)=>{
            dispatch(actions.setIsLogin(true));
            dispatch(actions.setUser(user));
        })
        socket.on("ForceLogout",(msg)=>{
            UserClient.KillToken();
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
        </>
      )

})



export default App

function ConsoleDebug(){
    let allStore = useSelector<any,any>(store=>store)
    let styles :React.CSSProperties = {position:"absolute",top:0,left:0}
    return <button style={styles} onClick={()=>{
        console.log(allStore)
        console.log("token:"+sessionStorage.getItem("token"))
    }}>store</button>
}