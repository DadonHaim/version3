import {memo, useSelector ,Copyright, Lable, Button, AvatarClient, ControllerAudio,AvatarView, Flex,AvatarSelector, useStore, Component} from "./../../importAll";

const GameSelectAvatar = new Component((props:any)=>{
    let activeAvatar = useSelector<IStore,any>(store=>store.activeAvatar)
    let allAvatars   = useSelector<IStore,AvatarClient[]>(store=>store.allAvatars)


    return(
        <>
            <Lable rtl underline fSize="200%" position="28,1|39,3">בחר אווטאר:</Lable>
            <ControllerAudio position="2,2|7,4" />
            <AvatarView avatar={activeAvatar} position="2,4|15,38" border/>

            <Flex flexDirection="column" position="15,4|48,47" border scroll>
                { allAvatars.map(ava=><AvatarSelector key={ava.id} avatar={ava} border/>) }
                <Button toSubPage="Game-CreateAvatar" width={10} height={10} margin="10px 10px" value="+"/>
            </Flex>

            <Button    position="3,39|13,46" value="למשחק"/>
            <Copyright position="1,48|50,50"/>
        </>
    )
});
export default GameSelectAvatar.Get({Login:true,subPage:"Game-SelectAvatar"}) ;