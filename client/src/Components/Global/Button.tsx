import { ConvertPoint } from "../../importAll";

export default function Button(props:IButtonProps){
    const styleButton :React.CSSProperties={
        display:"inline-flex",
        border :"1px solid",
        cursor:"pointer",
        width: props.width,
        height: props.height,
        backgroundColor: (props.bg),
        gridColumn:`${ConvertPoint(props.start)[0]}/${ConvertPoint(props.end)[0]}`,
        gridRow : `${ConvertPoint(props.start)[1]}/${ConvertPoint(props.end)[1]}`,
        justifyContent:"center",
        alignItems:"center",
        backgroundImage: props.icon,
        
    }
    
 
    const GoPage = ()=>{
        // if(props.toPage)
        //     // dispath(PageAction.set({type:"thePage",newValue:props.toSubPage}))
        // if(props.toSubPage)
            // dispath(PageAction.set({type:"subPage",newValue:props.toSubPage}))       
    }
    
    
    return(
        <div className={props.className} 
            onClick={(x: React.MouseEvent<HTMLElement>)=>{
                GoPage();
                if(props.onClick)
                    props.onClick(x)
            }} 
            style={styleButton}
        >
            {props.value ?
                props.value :
                props.icon? <img width="100%" height="100%" src={props.icon}/> :""     
            }
        </div>
    )

}

interface IButtonProps extends IGlobalProps{
    className?: string;
    width?: number | string;
    height?: number | string;
    bg? : string ;
    value? : string;
    start?: string;
    end?:string;
    toPage?:string;
    toSubPage?:string;
}

