import { GetImageItems } from "../Images/Images";
import { GlobalStyle,Img,Div, memo ,React, useStore, useSelector, ItemClient} from "../importAll"

export const Avatar  = memo((props:IClothsProps)  => <Div {...props}><Img bgImg={props.src}/></Div>);
export const Cloth   = memo((props:IClothsProps)  => <Img bgImg={props.src} {...props}/>);

export const Hat = memo((props:IClothsProps)  => {
    let hat = useSelector<IStore,ItemClient>(store=>store.createAvatar_hat);
    let theImg =(hat && props.type && props.type=="createAvatar")? GetImageItems(hat.image):GetImageItems(props.src?.image);
    return <Img bgImg={theImg} {...props}/>
});

export const Shirt = memo((props:IClothsProps)  => {
    let shirt = useSelector<IStore,ItemClient>(store=>store.createAvatar_shirt);
    let theImg =(shirt && props.type && props.type=="createAvatar")? GetImageItems(shirt.image):GetImageItems(props.src?.image);
    return <Img bgImg={theImg} {...props}/>
});

export const Shoes = memo((props:IClothsProps)  => {
    let shoes = useSelector<IStore,ItemClient>(store=>store.createAvatar_shoes);
    let theImg =(shoes && props.type && props.type=="createAvatar")? GetImageItems(shoes.image):GetImageItems(props.src?.image);
    return <Img bgImg={theImg} {...props}/>
});

export const Pants = memo((props:IClothsProps)  => {
    let pants = useSelector<IStore,ItemClient>(store=>store.createAvatar_pants);
    let theImg =(pants && props.type && props.type=="createAvatar")? GetImageItems(pants.image):GetImageItems(props.src?.image);
    return <Img bgImg={theImg} {...props}/>
});



interface IClothsProps extends IGlobalProps{
    src?:any,
    type?: "createAvatar";
} 