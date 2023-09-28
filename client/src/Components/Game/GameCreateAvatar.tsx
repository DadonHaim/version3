import { memo, Copyright, Header, Grid, AvatarCreatorView, Component } from "./../../importAll";


const GameCreateAvatar = new Component((props :IGameSelectAvatarProps)=>{
    

    return(
        <>
            <Header position="1,1|50,7" border>

            </Header>

            <AvatarCreatorView gender="girl"/>

            <Grid>

            </Grid>

            <Copyright />
        </>
    )
});

interface IGameSelectAvatarProps extends IGlobalProps{}
export default GameCreateAvatar.Get({Login:true,mainPage:"Game",subPage:"Game-CreateAvatar"});