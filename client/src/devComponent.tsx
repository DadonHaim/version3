import React, { useEffect } from "react"
function GridDebug(props:any){
    let styles:React.CSSProperties={
        width:50,
        height:50,
        border:"1px solid",
        position:"absolute",
        top:20,
        left:2,
    }
    return(
        <>
            <div id="resultGrid" style={styles} ></div>
            <div id="displayElem" style={{...styles,top:90}} ></div>
        </>
    ) 
}


function GridBtn({ForClassName,top}:any){
    let [colorbtn , setColorBtn] = React.useState<string>("gray")
    let [count, setCount] = React.useState<number>(0)
    let [rows, setRows] = React.useState<number>(0)
    let [cols, setCols] = React.useState<number>(0)
    
    useEffect(()=>{
        if(count%2==1)
            setColorBtn("black")
        else
            setColorBtn("gray")
    })

    let styles :React.CSSProperties={
        position:"absolute",
        top:20*top,
        right:2,
        backgroundColor:colorbtn,
    }
    return(
        <>
            <button style={styles} onClick={()=>{
                let elem :any= document.getElementsByClassName(ForClassName)[0]
                if(!elem) alert("class name no valid")
                else{
                    let r = getNum(elem.style.gridTemplateRows?.toString());;
                    let c = getNum(elem.style.gridTemplateColumns?.toString()); ;
                    setRows(r)
                    setCols(c)
                    setCount(co=>co+1)
                }
            }}>{ForClassName}</button>

            {count%2==1?<GDebug rows={rows} cols={cols} ForClassName={ForClassName}/>:""}    
        </>
    )
}


function GDebug({ForClassName,rows,cols}:any){
    let [style , setStyle] = React.useState<React.CSSProperties>()
    React.useEffect(()=>{
        let styles :React.CSSProperties={
            display:"grid",
            border:"0.2px solid",
            position:"absolute",
            backgroundColor:"azure",
            opacity:"40%",
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
                rows = rows;
                cols = cols;
                setStyle(styles)
            }
     },100)
},[])

if(style)
    return(
        <div style={style}>
            {
                new Array<number>(rows).fill(1).map((i,indexI)=>{
                    return new Array<number>(cols).fill(1).map((j,indexJ)=>{
                        return(
                            <div
                                onClick={()=>{
                                    let resElem = document.getElementById("resultGrid");
                                    if(!resElem)
                                        alert("noValid")
                                    else
                                        resElem.innerHTML += `${indexJ+1},${indexI+1}\n`;
                                        
                                }}
                                onMouseOver={()=>{
                                    let disElem = document.getElementById("displayElem");
                                    if(!disElem)
                                        alert("noValid")
                                    else
                                        disElem.innerHTML = `${indexJ+1},${indexI+1}`;
                                }}
                                key={`${indexI},${indexJ}`}
                            ></div>
                        )
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
    let _result = str.replace("repeat(","")
    let result = Number.parseInt(_result.replace(",1fr)","")) 
    if(Number.isInteger(result)){
        console.log(result);
        return result;
    }
    else{
        alert("gatNumError");
        return 0;
    }
}
export {GridDebug ,GridBtn}


// function GridDebug(props:any){return<></>}
// function GridBtn({ForClassName,top}:any){return <></>}
// function GDebug({ForClassName,rows,cols}:any){return <></>}
// export {GridDebug ,GridBtn}
