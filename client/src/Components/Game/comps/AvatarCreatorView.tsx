import {Avatar,Grid,Name, memo, useSelector ,Cloth, Settings} from "../../../importAll";
import { GetGirlImg } from "../../../Images/Images";


const girl  = GetGirlImg('girlAvatar')
const shirt = GetGirlImg('shirt/shirt4')
const shoes = GetGirlImg('/shoes1')
const pants = GetGirlImg('/pants1')





const AvatarCreatorView = memo((props:IAvatarCreatorViewProps)=>{
    let settings   = useSelector<IStore,Settings>(store=>store.settings)

    const AVATAR_VIEW_GRID      = settings.AVATAR_VIEW_GRID;
    const AVATAR_BODY_POSITION  = props.gender=="girl"? settings.GIRL_AVATAR_BODY_POSITION   : settings.BOY_AVATAR_BODY_POSITION ;
    const SHIRT_POSITION        = props.gender=="girl"? settings.GIRL_SHIRT_POSITION         : settings.BOY_SHIRT_POSITION       ;
    const SHOES_POSITION        = props.gender=="girl"? settings.GIRL_SHOES_POSITION         : settings.BOY_SHOES_POSITION       ;
    const PANTS_POSITION        = props.gender=="girl"? settings.GIRL_PANTS_POSITION         : settings.BOY_PANTS_POSITION       ;
    
    return(
        <Grid  grid="30,30" {...props} >
            <Name  fSize="150%" position="1,2|30,4">{props.name||"avatar name"}</Name>
            <Grid className="view" grid={AVATAR_VIEW_GRID} position="1,6|30,30" >
                <Avatar src={girl}  zIndex={1} position={AVATAR_BODY_POSITION} />
                <Cloth  src={shirt} zIndex={3} position={SHIRT_POSITION } />
                <Cloth  src={shoes} zIndex={4} position={SHOES_POSITION } />
                <Cloth  src={pants} zIndex={2} position={PANTS_POSITION} />
            </Grid>
        </Grid>
    )
})


interface IAvatarCreatorViewProps extends IGlobalProps{
    gender : "boy"|"girl";
    name? : "string";
}

export default AvatarCreatorView


