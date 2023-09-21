import { Div,Grid,Img,Name, memo, useSelector } from "../../../importAll";

const Dress  = memo((props:IClothsProps)=><Div {...props}><Img bgImg={props.src}/></Div>)
const Avatar = memo((props:IClothsProps)=><Div {...props}><Img bgImg={props.src}/></Div>)

interface IClothsProps extends IGlobalProps{
    src:any
}


export {Dress,Avatar}
