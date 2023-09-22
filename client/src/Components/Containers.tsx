import { GridBtn } from "../devComponent";
import { GlobalStyle, memo ,React, useStore , RandomString} from "../importAll"

let numberBtnGrid = 0;


export const Div  = memo((props:IGlobalProps) => !props.Empty? <div className={props.className} style={GlobalStyle(props)} onClick={props.onClick} > {props.children} </div>  :   <>{props.children}</>    )
export const Img  = memo((props:IGlobalProps) => <img  src={props.bgImg} style={GlobalStyle(props,{width:"100%",height:"auto"})} />)
export const Grid = memo((props:IGlobalProps) => {let GD=RandomString(10);return<><Div Grid className={GD} {...props}>{props.children}</Div> <GridBtn ForClassName={GD} top={numberBtnGrid++}/> </>})

export const Container  = memo( (props:IGlobalProps) => <Grid              {...props}> {props.children}                     </Grid> )
export const Main       = memo( (props:IGlobalProps) => <Grid              {...props}> {props.children}                     </Grid> )
export const Footer     = memo( (props:IGlobalProps) => <Grid              {...props}> {props.children}                     </Grid> )
export const Nav        = memo( (props:IGlobalProps) => <Div               {...props}> {props.children}                     </Div>  )
export const Header     = memo( (props:IGlobalProps) => <Div               {...props}> {props.children}                     </Div>  )
export const Aside      = memo( (props:IGlobalProps) => <Div               {...props}> {props.children}                     </Div>  )
export const Box        = memo( (props:IGlobalProps) => <Div               {...props}> {props.children}                     </Div>  )
export const Icon       = memo( (props:IGlobalProps) => <Div               {...props}> {props.children}                     </Div>  )
export const Lable      = memo( (props:IGlobalProps) => <Div Flex XYcenter {...props}> {props.children}                     </Div>  )
export const Name       = memo( (props:IGlobalProps) => <Div Flex XYcenter {...props}> {props.children}                     </Div>  )
export const Flex       = memo( (props:IGlobalProps) => <Div Flex          {...props}> {props.children}                     </Div>  )
export const Copyright  = memo( (props:IGlobalProps) => <Div Flex XYcenter {...props}> {props.value ||"כל הזכויות שמורות"} </Div>  )    


export const Button = React.memo(function(props:IButtonProps){
    let {dispatch,actions} = useStore();
    const GoPage = (event:any) =>{
        if(props.toPage)    dispatch(actions.setMainPage(props.toPage))
        if(props.toSubPage) dispatch(actions.setSubPage(props.toSubPage))
        if(props.onClick)   props.onClick(event)
    }
    return <Flex border pointer XYcenter onClick={(x:any)=>GoPage(x)} {...props}> {props.value ||""} </Flex>
})



export const Menu   = memo((props:IMenuProps)   => <Flex spaceAround XYcenter {...props}> {props.children}</Flex>)
export const Choice = memo((props:IChiceProps)  => <Button  width={"100px"} height={"70%"} styleOverrid={props.selected?props.onSelectedStyle:null} {...props}>{props.value}</Button>)



interface IButtonProps extends IGlobalProps{
    toPage    ?: AllMainPagesType;
    toSubPage ?: AllSubPagesType;
}

interface IMenuProps extends IGlobalProps{
    onSelected?:React.CSSProperties;
}
interface IChiceProps extends IButtonProps{
    onSelectedStyle?:React.CSSProperties;
    selected? : boolean;
}
