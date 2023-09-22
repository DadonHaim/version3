import { Div,Grid,Img,Name, memo, useSelector } from "../../../importAll";

const Dress  = memo((props:IClothsProps)=><Div {...props}><Img bgImg={props.src}/></Div>)
const Avatar = memo((props:IClothsProps)=><Div {...props}><Img bgImg={props.src}/></Div>)
const Shoes  = memo((props:IClothsProps)=><Div {...props}><Img bgImg={props.src}/></Div>)
const Shirt  = memo((props:IClothsProps)=><Div {...props}><Img bgImg={props.src}/></Div>)
const Cloth  = memo((props:IClothsProps)=><Img bgImg={props.src} {...props}/>)

interface IClothsProps extends IGlobalProps{
    src:any
}


export {Dress,Avatar,Shoes,Shirt,Cloth}
