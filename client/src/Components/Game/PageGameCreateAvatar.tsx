import { Give_Me_Start_Items } from "../../Socket/createAvatar";
import { memo, Copyright, Header, ItemClient, AvatarCreatorView, Component, Name, useState, useEffectV2 } from "../../importAll";
import CreateAvatarInventory from "./comps/CreateAvatarInventory";


const GameCreateAvatar = new Component((props :IGameSelectAvatarProps)=>{
    let [gender ,setGender] = useState<"boy"|"girl">("girl")
    let [allStartItems , setAllStartItems] = useState<ItemClient[]>([])

    useEffectV2("GameCreateAvatar",()=>{
        Give_Me_Start_Items(setAllStartItems)
    })

    if(!allStartItems) <>WAIT</>
    return(
        <>
            <Header position="1,1|50,7" border>
                <Name>צור אווטאר</Name>
            </Header>

            <AvatarCreatorView gender={gender} />

            <CreateAvatarInventory items={allStartItems}/>
            

            <Copyright />
        </>
    )
});

interface IGameSelectAvatarProps extends IGlobalProps{}
export default GameCreateAvatar.Get({Login:true,mainPage:"Game",subPage:"Game-CreateAvatar"});