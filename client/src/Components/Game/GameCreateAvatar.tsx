import { Container, memo, useSelector ,Copyright, useEffect } from "./../../importAll";


const GameCreateAvatar = memo((props :IGameSelectAvatarProps)=>{
    let mainPage = useSelector<IStore,any>(store=>store.mainPage)
    let subPage  = useSelector<IStore,any>(store=>store.subPage)

    if(mainPage != "Game") return <>אין לך גישה </>

  


    return(
        <Container Grid className="Guest" width="110vh" height="90vh" rows={49} columns={49} margin="10px auto"  marginTop={10} border >
            
            
            

            <Copyright/>
        </Container>
    )

});

interface IGameSelectAvatarProps extends IGlobalProps{}

export default GameCreateAvatar ;