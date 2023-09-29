import {useStore,useEffectV2,Guest,Game,Force_Logout,Get_All_Setting,Start_With_Token, useState} from "./importAll"







const App =()=>{
    let [waiting , setWaiting] = useState(false);
    let store = useStore();

    useEffectV2("app",()=>{
        Get_All_Setting(store)
        Start_With_Token(store,setWaiting);
        Force_Logout(store);
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








