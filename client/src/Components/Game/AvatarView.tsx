import {Avatar,Grid,Name, memo, useSelector ,Cloth, AvatarClient, useStore, Hat, Shirt, Pants, Shoes} from "../../importAll";
import { GetGirlImg, GetImageItems } from "../../Images/Images";


const AvatarView = memo((props:IAvatarViewProps)=>{
    let settings            = useSelector<IStore,ISettings>(store=>store.settings)
    let createAvatarName    = useSelector<IStore,string>(store=>store.createAvatar_name);
    let createAvatarGender  = useSelector<IStore,IGender>(store=>store.createAvatar_gender);

    const girl  = GetImageItems('./items/girl/girlAvatar')
    const boy   = GetImageItems('./items/boy/boyAvatar')

    const avatar_image          = createAvatarGender=="girl"? girl : boy;
    const AVATAR_VIEW_GRID      = settings.AVATAR_VIEW_GRID;

    const AVATAR_BODY_POSITION  = createAvatarGender=="girl"? settings.GIRL_AVATAR_BODY_POSITION   : settings.BOY_AVATAR_BODY_POSITION ;
    const SHIRT_POSITION        = createAvatarGender=="girl"? settings.GIRL_SHIRT_POSITION         : settings.BOY_SHIRT_POSITION       ;
    const SHOES_POSITION        = createAvatarGender=="girl"? settings.GIRL_SHOES_POSITION         : settings.BOY_SHOES_POSITION       ;
    const PANTS_POSITION        = createAvatarGender=="girl"? settings.GIRL_PANTS_POSITION         : settings.BOY_PANTS_POSITION       ;
    const HAT_POSITION          = createAvatarGender=="girl"? settings.GIRL_HAT_POSITION           : settings.BOY_HAT_POSITION          ;
    console.log(settings.GIRL_SHIRT_POSITION)
    return(
        <Grid  grid="30,30" {...props} >
            <Name  fSize="150%" position="1,2|30,4">{createAvatarName||"avatar name"}</Name>
            <Grid className="view" grid={AVATAR_VIEW_GRID} position="1,6|30,30" >
                <Avatar type={props.type} src={avatar_image}        zIndex={1} position={AVATAR_BODY_POSITION}/>
                {/* <Hat    type={props.type} src={props.avatar?.hat}   zIndex={3} position=" /> */}
                <Shirt  type={props.type} src={props.avatar?.shirt} zIndex={4} position="23,108|88,208" />
                {/* <Pants  type={props.type} src={props.avatar?.pants} zIndex={2} position="" /> */}
                {/* <Shoes  type={props.type} src={props.avatar?.shoes} zIndex={3} position="" /> */}

{/* 
                <Hat    type={props.type} src={props.avatar?.hat}   zIndex={3} position={HAT_POSITION}/>
                <Shirt  type={props.type} src={props.avatar?.shirt} zIndex={4} position={SHIRT_POSITION} />
                <Pants  type={props.type} src={props.avatar?.pants} zIndex={2} position={PANTS_POSITION} />
                <Shoes  type={props.type} src={props.avatar?.shoes} zIndex={3} position={SHOES_POSITION} />   */}
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
    avatar ?: AvatarClient;
    type?:"createAvatar";
}
interface IAvatarMinViewProps extends IGlobalProps{}

export {AvatarView,AvatarMinView}