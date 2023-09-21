import { GridBtn } from "../../devComponent";
import { Container, memo, useSelector ,Copyright, Div ,Header, Lable, Main, Button, AvatarClient, ControllerAudio,AvatarView, Flex} from "./../../importAll";
import AvatarSelector from "./comps/AvatarSelector";

const GameSelectAvatar = memo((props :IGameSelectAvatarProps)=>{
    let mainPage    = useSelector<IStore,any>(store=>store.mainPage)
    let subPage     = useSelector<IStore,any>(store=>store.subPage)
    let allAvatars  = useSelector<IStore,AvatarClient[]>(store=>store.allAvatars)

    if(mainPage != "Game") return <>אין לך גישה </>
    
    return(
        <>
            <Lable rtl underline fSize="200%" position="28,1|39,3">בחר אווטאר:</Lable>
            
            <ControllerAudio position="2,2|7,4" />
            <AvatarView className="AvatarView" position="2,4|15,38" border/>

            <Flex flexDirection="column" position="15,4|48,47" start="15,4" end="48,47" border scroll>
                { allAvatars.map(ava=><AvatarSelector key={ava.id} avatar={ava} border/>) }
            </Flex>
        
            <Button position="3,39|13,46" value="למשחק"/>
            <Copyright position="1,48|50,50"/>

        </>
    )
});

interface IGameSelectAvatarProps extends IGlobalProps{}

export default GameSelectAvatar ;