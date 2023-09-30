import {useSelector, Avatar_Give_Me_List,GameCreateAvatar ,GameSelectAvatar, useStore, useState, useEffectV2, Container, Component} from "./../../importAll";
import MusicEffect from "./comps/MusicEffect";


const Game = new Component(()=>{
    console.log("Game")
    let settings   = useSelector<IStore,ISettings>(store=>store.settings)
    let store      = useStore();;
    
    useEffectV2("Game",()=>{
        Avatar_Give_Me_List(store)
    }) 
    
   
    return( 
        <Container grid={settings.CONTAINER_APP_GRID} width="110vh" height="90vh" margin="10px auto" border> 
            <GameSelectAvatar/>
            <GameCreateAvatar/>
            <MusicEffect/>
        </Container>
    )
});

export default Game.Get({Login:true,mainPage:"Game"});