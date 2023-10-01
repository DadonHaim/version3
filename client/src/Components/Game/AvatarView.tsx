import {Avatar,Grid,Name, memo, useSelector ,Cloth, AvatarClient, useStore} from "../../importAll";
import { GetGirlImg } from "../../Images/Images";


const AvatarView = memo((props:IAvatarViewProps)=>{
    let {dispatch,actions}  = useStore()
    let settings            = useSelector<IStore,ISettings>(store=>store.settings)
    // let createAvatar        = useSelector<IStore,AvatarClient>(store=>store.createAvatar);
    

    let avatar:AvatarClient = props.avatar;
    
    const girl  = GetGirlImg('girlAvatar')
    const hat   = GetGirlImg(`hat/${avatar.hat?.name}`)
    const shirt = GetGirlImg(`shirt/${avatar.shirt?.name}`)
    const shoes = GetGirlImg(`shoes/${avatar.shoes?.name}`)
    const pants = GetGirlImg(`pants/${avatar.pants?.name}`) 

    const AVATAR_VIEW_GRID      = settings.AVATAR_VIEW_GRID;
    const AVATAR_BODY_POSITION  = avatar.gender=="girl"? settings.GIRL_AVATAR_BODY_POSITION   : settings.BOY_AVATAR_BODY_POSITION ;
    const SHIRT_POSITION        = avatar.gender=="girl"? settings.GIRL_SHIRT_POSITION         : settings.BOY_SHIRT_POSITION       ;
    const SHOES_POSITION        = avatar.gender=="girl"? settings.GIRL_SHOES_POSITION         : settings.BOY_SHOES_POSITION       ;
    const PANTS_POSITION        = avatar.gender=="girl"? settings.GIRL_PANTS_POSITION         : settings.BOY_PANTS_POSITION       ;
    const HAT_POSITION          = avatar.gender=="girl"? settings.GIRL_HAT_POSITION           : settings.BOY_HAT_POSITION       ;

    return(
        <Grid  grid="30,30" {...props} >
            <Name  fSize="150%" position="1,2|30,4">{avatar.name||"avatar name"}</Name>
            <Grid className="view" grid={AVATAR_VIEW_GRID} position="1,6|30,30" >
                <Avatar src={girl}  zIndex={1} position={AVATAR_BODY_POSITION}/>
                <Cloth  src={hat}   zIndex={3} position={HAT_POSITION}      />
                <Cloth  src={shirt} zIndex={3} position={SHIRT_POSITION } />
                <Cloth  src={shirt} zIndex={3} position={SHIRT_POSITION } />
                <Cloth  src={shoes} zIndex={4} position={SHOES_POSITION } />
                <Cloth  src={pants} zIndex={2} position={PANTS_POSITION} />
            </Grid>
        </Grid>
    )
})



const AvatarMinView = memo((props:IAvatarMinViewProps)=>{
    let avatarName = useSelector<IStore,ISettings>(store=>store.activeAvatar.name)
    return(
        <Grid Grid={30} {...props}>
            <Name position="1,2|30,4" fSize="150%">{avatarName}</Name>

            
        </Grid>
    )
})




interface IAvatarViewProps extends IGlobalProps{
    avatar : AvatarClient;
}
interface IAvatarMinViewProps extends IGlobalProps{}

export {AvatarView,AvatarMinView}