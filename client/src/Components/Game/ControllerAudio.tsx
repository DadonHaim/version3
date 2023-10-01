import { GetIcon } from "../../Images/Images";
import { Button, Flex, memo,useSelector, useStore} from "../../importAll";


const EnableMusicIcon = GetIcon("32px/musicOn32");
const EnableSoundIcon = GetIcon("32px/soundOn32");
const logoutIcon      = GetIcon("32px/logout32");

const DisableMusicIcon  = GetIcon("32px/musicOff32");
const DisableSoundIcon  = GetIcon("32px/soundOff32");

let musicIcon = EnableMusicIcon ;       
let soundIcon = EnableSoundIcon ;   


const ControllerAudio = memo((props:IControllerAudioProps)=>{
    let music    = useSelector<IStore,boolean>(store=>store.music)
    let sound    = useSelector<IStore,boolean>(store=>store.sound)
    let {dispatch ,actions} = useStore();

    function musicIconClick(){
        musicIcon = (!music)? EnableMusicIcon: DisableMusicIcon;
        dispatch(actions.setMusic(!music));
    }
    function soundIconClick (){
        soundIcon = (!sound)? EnableSoundIcon: DisableSoundIcon;
        dispatch(actions.setSound(!sound));
    }
    function logoutIconClick(){
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