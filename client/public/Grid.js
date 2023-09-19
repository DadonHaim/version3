
function createNewGrid(className){
    let grid = document.getElementsByClassName(className)[0];
    if(!grid){
        return;
    }
    let newGrid = document.createElement("div");


    let _rows = newGrid.style.gridTemplateRows;
    let rows = _rows.replace("repeat(","")
    rows.replace(",1fr)","")

    let _cols = newGrid.style.gridTemplateColumns;
    let cols = _cols.replace("repeat(","")
    cols.replace(",1fr)","")

    document.body.appendChild(newGrid);
    newGrid.style.display = "none";
    newGrid.style.gridTemplateRows = `repeat(${rows},1fr)`;
    newGrid.style.gridTemplateColumns = `repeat(${cols},1fr)`;
    newGrid.style.position="absolute";
    newGrid.style.border="1px solid";
    newGrid.style.width = "110vh"
    newGrid.style.height = "90vh"
    newGrid.style.top = 0;
    newGrid.style.left = grid.offsetLeft+"px";
    for(let i=1;i<rows;i++)
        for(let j=1;j<cols;j++)
            newGrid.appendChild(Div(`${j},${i}`))
    return newGrid;
}




function createResult(){
    let resultElement = document.createElement("div");
    resultElement.style.position = "absolute";
    resultElement.style.top = "50px";
    resultElement.style.left = "0px";
    resultElement.style.width = "50px";
    resultElement.style.height = "50px";
    resultElement.style.border ="1px solid"
    document.body.appendChild(resultElement)
}


function createBtn(str , elem , resultElement){
    if(!resultElement) return;
    let btn = document.createElement("button");
    resultElement.style.position = "absolute";
    resultElement.style.top = "80px";
    resultElement.style.left = "0px";
    btn.style.width = "35px";
    btn.style.height = "35px";
    
    btn.innerHTML = str
    document.body.appendChild(btn)

    let count = 0;
    btn.addEventListener("click",()=>{
        if(count%2 == 0){
            elem.style.display="grid"
            count++;
        }
        else{
            elem.style.display="none"
            count++
        }
    })

}









function Div(str){
    let newElement = document.createElement("div")
    newElement.style.border = "1px solid";
    newElement.style.opacity = "50%"
    newElement.setAttribute("class","gridItems")
    newElement.addEventListener("click",()=>{
        resultElement.innerHTML += str+"\n"
    })
    return newElement
}





function Main(){
    createResult()
    let MainGrid = createNewGrid("GameSelectAvatar");
    createBtn("gridMain",MainGrid)
    let viewAvatarGrid = createNewGrid("AvatarView");
    createBtn("gridMain",viewAvatarGrid)
}
setTimeout(Main,1000)



document.body.addEventListener("wheel",()=> resultElement.innerHTML = "")
