
export default function Debug(str:string|any){ 
    if(
        process.env.npm_lifecycle_event === 'Debug' ||
        process.env.npm_lifecycle_event === 'DebugTest' 
    ){
        let file = __filename.split('\\')
        let index = file.length-1
        console.log( `Debug:\t ${file[index-2]}\\${file[index-1]}\\${file[index]}:\t ${str}` )
    }
	
	else if(process.env.npm_lifecycle_event === 'Debug'  && process.argv[2] =="client"){
		console.log(str)
	}
}
export function DebugSocket(str:string|any){ 
    if(
        process.env.npm_lifecycle_event === 'Debug' ||
        process.env.npm_lifecycle_event === 'DebugSocket' 
    ){
        console.log( `Debug: ${str}` )
    } 

}

