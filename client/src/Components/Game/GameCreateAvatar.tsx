import { Container, memo, useSelector ,Copyright, useEffect } from "./../../importAll";


const GameCreateAvatar = memo((props :IGameSelectAvatarProps)=>{
    let mainPage = useSelector<IStore,any>(store=>store.mainPage)
    let subPage  = useSelector<IStore,any>(store=>store.subPage)

    if(mainPage != "Game") return <>אין לך גישה </>


    return(
        < >
            

            <Copyright/>
        </>
    )

});

interface IGameSelectAvatarProps extends IGlobalProps{}

export default GameCreateAvatar ;