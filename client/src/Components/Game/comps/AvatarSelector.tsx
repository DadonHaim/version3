import {AvatarClient, Button, Img, Flex, Grid, Lable, memo, Icon,Name, AvatarMinView, useStore} from "../../../importAll";
import { GetIcon ,GetLogo} from "../../../Images/Images";

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
    let {actions,dispatch} = useStore();;
    function deleteAvatar(){}
    function selectAvatarHandle(){
        dispatch(actions.setActiveAvatar(props.avatar))
    }

    return (
        <Grid Grid={50} pointer  width="95%" height="15%" margin="10px auto" {...props}  onClick={selectAvatarHandle}>
            <Name family="cursive" rtl position="18,2|33,14"> {props.avatar.name}</Name>

            <AvatarMinView position="39,2|50,50" border/>

            <Flex wrap rtl position="12,20|37,34">
                <AvatarSelectorValue icon={hpIcon}           value="3333" width="24%" marginBottom={5}/>
                <AvatarSelectorValue icon={strongIcon}       value="3333" width="24%" marginBottom={5}/>
                <AvatarSelectorValue icon={energyIcon}       value="3333" width="24%" marginBottom={5}/>
                <AvatarSelectorValue icon={refillEnergyIcon} value="3333" width="24%" marginBottom={5}/>
                <AvatarSelectorValue icon={silverIcon}       value="3333" width="24%" />
                <AvatarSelectorValue icon={goldIcon}         value="3333" width="24%" />
                <AvatarSelectorValue icon={redPowderIcon}    value="3333" width="24%" />
                <AvatarSelectorValue icon={diamondIcon}      value="3333" width="24%" /> 
            </Flex>

            <Lable  rtl family="cursive" position="4,6|12,15">{props.avatar.magicName||""}</Lable>
            <Img bgImg={GetLogo(props.avatar.magicName||"")} XYcenter position="5,17|11,49" />

            <Button onClick={deleteAvatar} position="1,1|3,51" bgImg={trashIcon} bgColor="red" />
        </Grid>
    )
})

interface IAvatarSelectorProps extends IGlobalProps{
    avatar:AvatarClient; 
}
export default AvatarSelector;





function AvatarSelectorValue(props:IAvatarSelectorValueProps){
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