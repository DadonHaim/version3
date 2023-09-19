import React from "react"
function GridDebug(props:any){
    let styles:React.CSSProperties={
        width:50,
        height:50,
        border:"1px solid",
        position:"absolute",
        top:20,
        left:2,
    }
    return <div id="resultGrid" style={styles} ></div>
}


function GridBtn({ForClassName,top}:any){
    let [count, setCount] = React.useState<number>(0)
    let styles :React.CSSProperties={
        position:"absolute",
        top:20*top,
        right:2,
    }
    return(
        <>
            <button style={styles} onClick={()=>{
                setCount(c=>c+1)
            }}>{ForClassName}</button>

            {count%2==1?<GDebug ForClassName={ForClassName}/>:""}    
        </>
    )
}


function GDebug({ForClassName}:any){
    let [style , setStyle] = React.useState<React.CSSProperties>({})
    React.useEffect(()=>{
        let styles :React.CSSProperties={
            display:"grid",
            border:"1px solid",
            position:"absolute",
            opacity:"50%",
        };
        setTimeout(()=>{
            let elem :any= document.getElementsByClassName(ForClassName)[0]
            if(!elem) alert("class name no valid")
            else{
                styles["width"] = elem.clientWidth;
                styles["height"] = elem.clientHeight;
                styles["left"] = elem.offsetLeft;
                styles["top"] = elem.offsetTop;
                styles["gridTemplateRows"] = elem.style.gridTemplateRows;
                styles["gridTemplateColumns"] = elem.style.gridTemplateColumns;
                setStyle(styles)
            }
        },100)
    },[])
    if(style)
        return(
            <div style={style}>
                {
                    new Array<number>(getNum(style.gridTemplateRows?.toString())).fill(1).map((i,indexI)=>{
                        return new Array<number>(getNum(style.gridTemplateColumns?.toString())).fill(1).map((j,indexJ)=>{
                            return  <div style={{border:"0.5px solid"}} onClick={()=>{
                                let resElem = document.getElementById("resultGrid");
                                if(!resElem){
                                    alert("noValid")
                                }
                                else{
                                    resElem.innerHTML += `${indexJ+1},${indexI+1}\n`;
                                }
                            }} key={`${indexI},${indexJ}`}></div>
                        })
                    })
                }
            </div>
        )
    else 
        return <></>
}


function getNum(str:string| undefined):number{
    if(!str) return 0;
    let result = str.replace("repeat(","")
    return Number.parseInt(result.replace(",1fr)",""))
}
export {GridDebug}
export {GridBtn}