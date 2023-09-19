import {memo, useSelector, GameCreateAvatar ,GameSelectAvatar, useEffect, socket, useStore,AvatarClient, useState, useEffectV2} from "./../../importAll";
import MusicEffect from "./comps/MusicEffect";


const Game = memo((props :IGameProps)=>{
    let mainPage              = useSelector<IStore,any>(store=>store.mainPage)
    let subPage :AllGamePage  = useSelector<IStore,any>(store=>store.subPage)
    let {actions,dispatch} = useStore();
    let [isloading , setIsLoading] = useState<boolean>(true);
    

    useEffectV2("Game",()=>{
        socket.emit("Avatar-Give-Me-List");
        socket.on<server,AvatarClient[]>("Avatar-Get-List",(avatars)=>{
            dispatch(actions.setAllAvatars(avatars));
            setIsLoading(false)
        })
    }) 
    

    if(isloading) return <>Wait</>

    return( 
        <>
            {(mainPage != "Game"              )? <>אין לך גישה </>  :""}
            {(subPage  == "Game-SelectAvatar" )? <GameSelectAvatar/> :""}
            {(subPage  == "Game-CreateAvatar" )? <GameCreateAvatar/> :""}
            <MusicEffect/>
        </>
    )
});

interface IGameProps extends IGlobalProps{}

export default Game;