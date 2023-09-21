import {AvatarClient, Button, Img, Flex, Grid, Lable, memo, Icon,Name, AvatarView, AvatarMinView} from "../../../importAll";
import GetImage from "../../../Functions/GetImage"
let hpIcon           :any = GetImage("icon","hp","png");          
let strongIcon       :any = GetImage("icon","strong");              
let energyIcon       :any = GetImage("icon","energy");              
let refillEnergyIcon :any = GetImage("icon","refillEnergy");                  
let silverIcon       :any = GetImage("icon","silver");              
let goldIcon         :any = GetImage("icon","gold");          
let redPowderIcon    :any = GetImage("icon","redPowder");              
let diamondIcon      :any = GetImage("icon","diamond");              
let trashIcon        :any = GetImage("icon","trash");              

const AvatarSelector = memo((props:IAvatarSelectorProps)=>{
    const deleteAvatar = ()=>{}
    return (
        <Grid className="avatarSelector" {...props} rows={50} columns={50} width="95%" height="15%" margin="10px auto" >
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
            <Img bgImg={GetImage("magic",props.avatar.magicName||"")} XYcenter position="5,17|11,49" />

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