import Lib from "./Components/ComponentLib";
import {useStore,useEffectV2,Guest,Game,Force_Logout,Get_All_Setting,Start_With_Token, useSelector, memo} from "./importAll"







const App =()=>{
    let store = useStore();

    useEffectV2("app",()=>{
        Start_With_Token(store);
        Force_Logout(store);
        Get_All_Setting(store)
    })

    return(
        <>
         
            <Guest/>
            <Game/> 
        </>
    )
} 
export default App








