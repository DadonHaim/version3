import {AvatarClient, Button, Img, Flex, Grid, Lable, memo, Icon,Name, AvatarMinView, useStore,Logo} from "../../../importAll";
import { GetIcon ,GetLogo} from "../../../Images/Images";
import { Set_Active_Avatar } from "../../../Socket/AvatarSocket";

let hpIcon          = GetIcon("hp");          
let strongIcon      = GetIcon("strong");              
let energyIcon      = GetIcon("energy");              
let refillEnergyIcon= GetIcon("refillEnergy");                  
let silverIcon      = GetIcon("silver");              
let goldIcon        = GetIcon("gold");          
let redPowderIcon   = GetIcon("redPowder");              
let diamondIcon     = GetIcon("diamond");              
let trashIcon       = GetIcon("trash");              


const AvatarSelector = memo((props:IAvatarSelectorProps)=>{
    let store = useStore();;
    function deleteAvatar(){}
    function selectAvatarHandle(){
        Set_Active_Avatar(store,props.avatar.id||-8)
    }

    return (
        <Grid Grid={50} pointer  width="95%" height="15%" margin="10px auto" {...props}  onClick={selectAvatarHandle}>
            <Name family="cursive" rtl position="18,2|33,14"> {props.avatar.name}</Name>

            <AvatarMinView position="39,2|50,50" border/>

            <Flex wrap rtl position="12,20|37,34">
                <AvatarStatValue icon={hpIcon}           value={props.avatar.hp}            width="24%" marginBottom={5}/>
                <AvatarStatValue icon={strongIcon}       value="000"                        width="24%" marginBottom={5}/>
                <AvatarStatValue icon={energyIcon}       value={props.avatar.energy}        width="24%" marginBottom={5}/>
                <AvatarStatValue icon={refillEnergyIcon} value={props.avatar.refillEnergy}  width="24%" marginBottom={5}/>
                <AvatarStatValue icon={silverIcon}       value={props.avatar.silver}        width="24%" />
                <AvatarStatValue icon={goldIcon}         value={props.avatar.gold}          width="24%" />
                <AvatarStatValue icon={redPowderIcon}    value={props.avatar.redPowder}     width="24%" />
                <AvatarStatValue icon={diamondIcon}      value={props.avatar.diamond}       width="24%" /> 
            </Flex>

            <Lable  rtl family="cursive" position="4,6|12,15">{props.avatar.magicName||""}</Lable>

            <Logo bgImg={GetLogo(props.avatar.magicName||"")} XYcenter position="5,17|11,49" />

            <Button onClick={deleteAvatar} position="1,1|3,51" bgImg={trashIcon} bgColor="red" />
        </Grid>
    )
})

interface IAvatarSelectorProps extends IGlobalProps{
    avatar:AvatarClient; 
}
export default AvatarSelector;





function AvatarStatValue(props:IAvatarSelectorValueProps){
    return(
        <Flex rtl {...props}>
            <Icon bgImg={props.icon} width="30%"/> 
            <Lable family="cursive" XYcenter width="70%" ltr fSize={11}>{props.value}</Lable>
        </Flex>
    )
}

interface IAvatarSelectorValueProps extends IGlobalProps{
    icon:any; 
}