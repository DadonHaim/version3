import React from "react";

export default function useRefV2(){
    let a = React.useRef<any>(null)
    let b = React.useRef<any>(null)
    let c = React.useRef<any>(null)
    let d = React.useRef<any>(null)
    let e = React.useRef<any>(null)
    let f = React.useRef<any>(null)
    let g = React.useRef<any>(null)
    let h = React.useRef<any>(null)
    let i = React.useRef<any>(null)

    return [a,b,c,d,e,f,g,h,i]
}