import { Error ,Force_Logout} from "./Socket/ErrorSocket";
import {useStore,useEffectV2,Guest,Game,Get_All_Setting,Start_With_Token, selector,useState} from "./importAll"


const App =()=>{
    console.log("App")
    let [waiting , setWaiting] = useState(false);
    let store = useStore();

    useEffectV2("app",()=>{
        Error();
        Force_Logout(store);
        Get_All_Setting(store)
        Start_With_Token(store,setWaiting);
    })


    if(!waiting) 
        return <>waiting</>
    return(
        <>
            <Guest/>
            <Game/> 
        </>
    )
} 
export default App








