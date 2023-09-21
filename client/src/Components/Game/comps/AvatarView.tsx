import { GridBtn } from "../../../devComponent";
import {Dress, Div,Avatar,Grid,Name, memo, useSelector } from "../../../importAll";

const CONTAINER_AVATAR_VIEW_GRID = "30,30";


const AVATAR_VIEW_GRID ="100,500";

const AVATAR_VIEW_POSITION  = "1,6|30,30";
const AVATAR_POSITION       = "20,25|90,500";
const DRESS_POSITION        = "25,100|90,200";





const girl  = require("../../../Images/girl/girlAvatar.png")
const dress = require("../../../Images/girl/shirt/shirt6.png")

const AvatarView = memo((props:IAvatarViewProps)=>{
    let avatarName = useSelector<IStore,string>(store=>store.avatarName)
    return(
        <Grid {...props}  grid={CONTAINER_AVATAR_VIEW_GRID} className="avatarView"  >

            <Name  fSize="150%" position="1,2|30,4">{avatarName||"avatar name"}</Name>

            <Grid grid={AVATAR_VIEW_GRID} position={AVATAR_VIEW_POSITION} >

                    <Avatar src={girl}  position={AVATAR_POSITION} />
                    <Dress  src={dress} position={DRESS_POSITION } />

            </Grid>
        </Grid>
    )
})


interface IAvatarViewProps extends IGlobalProps{}

export default AvatarView


