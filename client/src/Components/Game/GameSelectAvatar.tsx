import { GridBtn } from "../../devComponent";
import { Container, memo, useSelector ,Copyright, Div ,Header, Lable, Main, Button, AvatarClient, ControllerAudio,AvatarView} from "./../../importAll";
import AvatarSelector from "./comps/AvatarSelector";
let bgTemp = ""; 
bgTemp = require("../../Images/Backgrounds/bg.png") 

const GameSelectAvatar = memo((props :IGameSelectAvatarProps)=>{
    let mainPage    = useSelector<IStore,any>(store=>store.mainPage)
    let subPage     = useSelector<IStore,any>(store=>store.subPage)
    let allAvatars  = useSelector<IStore,AvatarClient[]>(store=>store.allAvatars)

    if(mainPage != "Game") return <>אין לך גישה </>
    
    return(
        <Container Grid className="GameSelectAvatar" width="110vh" height="90vh" rows={49} columns={49} margin="10px auto"  marginTop={10} border bgImg={bgTemp}> 
            <Lable align="center" underline fSize="200%" rtl start="28,1" end="39,3" border>בחר אווטאר:</Lable>
            
            <ControllerAudio  start="2,2" end="7,4"/>
            <AvatarView className="AvatarView" start="2,4" end="15,38" border/>

            <Main Flex flexDirection="column" start="15,4" end="48,47" border scroll>
                {
                    allAvatars.map(ava=>{
                        return <AvatarSelector key={ava.id} avatar={ava} border/>
                    })
                }
            </Main>
        
            <Button value="למשחק" start="3,39" end="13,46" border/>
            <Copyright start="1,48" end="50,50"/>
            <GridBtn top={2} ForClassName="AvatarView" />
            <GridBtn top={2} ForClassName="avatarSelector" />
        </Container>
    )
});

interface IGameSelectAvatarProps extends IGlobalProps{}

export default GameSelectAvatar ;