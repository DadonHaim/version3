// import { actions } from "../../Store/Store";
import { ConvertPoint, Flex, memo,useDispatch, useStore } from "../../importAll";
const defaultStyle={backgroundColor:"yellow"}
const Menu = memo((props:IMenuProps)=> <Flex XYcenter {...props}> {props.children}</Flex>)


const Choice = memo((props:IChiceProps)=>{
    let {dispatch ,actions} = useStore()

    let selectedStyle = (props.selected)? defaultStyle : (props.onSelected)? props.onSelected: {}; ;
  


    const styleButton :React.CSSProperties={
        display:"inline-flex",
        border :"1px solid",
        cursor:"pointer",
        width: props.width || "20%",
        height: props.height||"40%",
        gridColumn:`${ConvertPoint(props.start)[0]}/${ConvertPoint(props.end)[0]}`,
        gridRow : `${ConvertPoint(props.start)[1]}/${ConvertPoint(props.end)[1]}`,
        justifyContent:"center",
        alignItems:"center",
        ...selectedStyle
    }

    const onclick = ()=>{
        if(props.toPage)    dispatch(actions.setMainPage(props.toPage) );
        if(props.toSubPage) dispatch(actions.setSubPage(props.toSubPage)  );
    }

    return <div style={styleButton} onClick={onclick}> {props.value}</div>
})




interface IMenuProps extends IGlobalProps{
    onSelected?:React.CSSProperties;
}
interface IChiceProps extends IGlobalProps{
    onSelected?:React.CSSProperties;
    selected? : boolean;
    toPage?:AllMainPages;
    toSubPage?:AllSubPage;
    value?:string;
}

export{
    Menu,
    Choice
}