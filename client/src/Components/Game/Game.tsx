import {memo, useSelector, GameCreateAvatar ,GameSelectAvatar, useEffect, socket, useStore,AvatarClient, useState, useEffectV2, Container} from "./../../importAll";
import MusicEffect from "./comps/MusicEffect";


const Game = memo((props :IGameProps)=>{
    let mainPage                    = useSelector<IStore,any>(store=>store.mainPage)
    let subPage :AllGamePage        = useSelector<IStore,any>(store=>store.subPage)
    let {actions,dispatch}          = useStore();
    let [isloading , setIsLoading]  = useState<boolean>(true);
    

    useEffectV2("Game",()=>{
        socket.emit("Avatar-Give-Me-List");
        socket.on<server,AvatarClient[]>("Avatar-Get-List",(avatars)=>{
            dispatch(actions.setAllAvatars(avatars));
            setIsLoading(false)
        })
    }) 
    

    if(isloading) return <>Wait</>

    return( 
         <Container Grid={49} width="110vh" height="90vh" margin="10px auto" border> 
            {(mainPage != "Game"              )? <>אין לך גישה </>  :""}
            {(subPage  == "Game-SelectAvatar" )? <GameSelectAvatar/> :""}
            {(subPage  == "Game-CreateAvatar" )? <GameCreateAvatar/> :""}
            <MusicEffect/>
        </Container>
    )
});

interface IGameProps extends IGlobalProps{}

export default Game;