import { GridBtn } from "../../../devComponent";
import {Shirt, Shoes,Avatar,Grid,Name, memo, useSelector ,Cloth} from "../../../importAll";




const CONTAINER_AVATAR_VIEW_GRID = "30,30";


const AVATAR_VIEW_GRID ="100,500";

const AVATAR_VIEW_POSITION  = "1,6|30,30";
const AVATAR_POSITION       = "20,25|90,500";
const SHIRT_POSITION        = "25,100|90,200";
const SHOES_POSITION        = "20,376|84,505";
const PANTS_POSITION        = "30,215|65,300";



const girl  = require("../../../Images/girl/girlAvatar.png")
const shirt = require("../../../Images/girl/shirt/shirt4.png")
const shoes = require("../../../Images/girl/shoes/shoes1.png")
const pants = require("../../../Images/girl/pants/pants1.png")

const AvatarView = memo((props:IAvatarViewProps)=>{
    let avatarName = useSelector<IStore,string>(store=>store.avatarName)
    return(
        <Grid  grid={CONTAINER_AVATAR_VIEW_GRID}{...props} >

            <Name  fSize="150%" position="1,2|30,4">{avatarName||"avatar name"}</Name>

            <Grid className="view" grid={AVATAR_VIEW_GRID} position={AVATAR_VIEW_POSITION} >
                <Avatar src={girl}  zIndex={1} position={AVATAR_POSITION} />
                <Cloth  src={shirt} zIndex={3} position={SHIRT_POSITION } />
                <Cloth  src={shoes} zIndex={4} position={SHOES_POSITION } />
                <Cloth  src={pants} zIndex={2} position={PANTS_POSITION} />
            </Grid>
        </Grid>
    )
})


interface IAvatarViewProps extends IGlobalProps{}

export default AvatarView


