import { Button, Flex, memo,useSelector, useStore ,} from "../../../importAll";


const EnableMusicIcon =  require("../../../Images/icons/32px/musicOn32.png");
const EnableSoundIcon =  require("../../../Images/icons/32px/soundOn32.png");
const logoutIcon      =  require("../../../Images/icons/32px/logout32.png");

const DisableMusicIcon =  require("../../../Images/icons/32px/musicOff32.png");
const DisableSoundIcon =  require("../../../Images/icons/32px/soundOff32.png");

let musicIcon = EnableMusicIcon ;       
let soundIcon = EnableSoundIcon ;   


const ControllerAudio = memo((props:IControllerAudioProps)=>{
    let music    = useSelector<IStore,boolean>(store=>store.music)
    let sound    = useSelector<IStore,boolean>(store=>store.sound)
    let {dispatch ,actions} = useStore()

    const musicIconClick   = ()=>{
        musicIcon = (!music)? EnableMusicIcon: DisableMusicIcon;
        dispatch(actions.setMusic(!music));
    }
    const soundIconClick   = ()=>{
        soundIcon = (!sound)? EnableSoundIcon: DisableSoundIcon;
        dispatch(actions.setSound(!sound));
    }
    const logoutIconClick  = ()=>{
        dispatch(actions.setIsLogin(false));
    }



    return(
        <Flex {...props}>
            <Button className="logoutIcon" width={20} height={20} bgImg={logoutIcon} onClick={logoutIconClick}/>
            <Button className="musicIcon"  width={20} height={20} bgImg={musicIcon}  onClick={musicIconClick}/>
            <Button className="soundIcon"  width={20} height={20} bgImg={soundIcon}  onClick={soundIconClick}/>
        </Flex>
    )
})


interface IControllerAudioProps extends IGlobalProps{}

export default ControllerAudio; 