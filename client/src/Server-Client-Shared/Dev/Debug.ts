
export default function Debug(str:string|any){ 
    if(
       true
    ){
        // let file = __filename.split('\\')
        // let index = file.length-1
        // console.log( `Debug:\t ${file[index-2]}\\${file[index-1]}\\${file[index]}:\t ${str}` )
    }
	
	else {
		console.log(str)
	}
}
export function DebugSocket(str:string|any){ 
    if(
     true
    ){
        console.log( `Debug: ${str}` )
    } 

}
