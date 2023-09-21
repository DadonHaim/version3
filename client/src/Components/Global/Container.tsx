import { GridBtn } from "../../devComponent";
import { GlobalStyle, memo ,React, useStore , RandomString} from "../../importAll"

let numberBtnGrid = 0;

const styleObj = (props:IContainerProps ,_display?:string , obj?:IContainerProps) :React.CSSProperties=>{
    let display = (_display)? _display : "block";
    if(props.Grid)
        display = "grid";
    else if(props.Flex)
        display = "flex";
    return{...GlobalStyle(props,display,obj)}
}

export const Grid = memo((props:IContainerProps)=>{
    let classNameGrid = RandomString(10);
    return(
        <>
            <div className={props.className +" "+classNameGrid} style={styleObj(props,"grid")} > {props.children}</div>
            <GridBtn ForClassName={classNameGrid} top={numberBtnGrid++}/> 
        </>
    )
})

export const Main   = memo( (props:IContainerProps) => !props.Empty? <Grid {...props}> {props.children} </Grid>  :   <>{props.children}</>    )
export const Footer = memo( (props:IContainerProps) => !props.Empty? <Grid {...props}> {props.children} </Grid>  :   <>{props.children}</>    )
export const Nav    = memo( (props:IContainerProps) => !props.Empty? <div className={props.className} style={styleObj(props)}                           > {props.children} </div>  :   <>{props.children}</>    )
export const Header = memo( (props:IContainerProps) => !props.Empty? <div className={props.className} style={styleObj(props)}                           > {props.children} </div>  :   <>{props.children}</>    )
export const Aside  = memo( (props:IContainerProps) => !props.Empty? <div className={props.className} style={styleObj(props)}                           > {props.children} </div>  :   <>{props.children}</>    )
export const Div    = memo( (props:IContainerProps) => !props.Empty? <div className={props.className} style={styleObj(props)}                           > {props.children} </div>  :   <>{props.children}</>    )
export const Box    = memo( (props:IContainerProps) => !props.Empty? <div className={props.className} style={styleObj(props)}                           > {props.children} </div>  :   <>{props.children}</>    )
export const Lable  = memo( (props:IContainerProps) => !props.Empty? <div className={props.className} style={styleObj(props,"flex",{XYcenter:true})}    > {props.children} </div>  :   <>{props.children}</>    )
export const Name   = memo( (props:IContainerProps) => !props.Empty? <div className={props.className} style={styleObj(props,"flex",{XYcenter:true})}    > {props.children} </div>  :   <>{props.children}</>    )
export const Flex   = memo( (props:IContainerProps) => !props.Empty? <div className={props.className} style={styleObj(props,"flex")}                    > {props.children} </div>  :   <>{props.children}</>    )
export const Icon   = memo( (props:IContainerProps) => !props.Empty? <div className={props.className} style={styleObj(props)}                           > {props.children} </div>  :   <>{props.children}</>    )
export const Img    = memo( (props:IContainerProps) => !props.Empty? <div className={props.className} style={styleObj(props,"flex")}                    > <img src={props.bgImg} width="100%" height="100%"/> </div>: <>{props.children}</>    )

export const Container = memo((props:IContainerProps)=> <Grid {...props}>{props.children}</Grid>)


export const Button = React.memo(function(props:IButtonProps){
    let {dispatch,actions} = useStore();
    const GoPage = ()=>{
        if(props.toPage)    dispatch(actions.setMainPage(props.toPage))
        if(props.toSubPage) dispatch(actions.setSubPage(props.toSubPage))
    }
    
    
    return(
        <div className={props.className} 
            onClick={(x: React.MouseEvent<HTMLElement>)=>{
                GoPage();
                if(props.onClick) props.onClick(x)
            }} 
            style={{...styleObj(props,"flex") , cursor:"pointer" , border:"1px solid" , justifyContent:"center",alignItems:"center"}}
        >
            {props.value ?
                props.value :
                props.icon? <img width="100%" height="100%" src={props.bgImg}/> :""     
            }
        </div>
    )
})

interface IButtonProps extends IContainerProps{
    toPage?: AllMainPages;
    toSubPage?:AllSubPages;
}