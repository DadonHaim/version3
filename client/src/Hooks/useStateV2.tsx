import {useState} from 'react'

export default function useStateV2<R1=any,R2=any,R3=any,R4=any>(arr:any){
    let state1 = useState<R1>(arr[0]||"");
    let state2 = useState<R2>(arr[1]||"");
    let state3 = useState<R3>(arr[2]||"");
    let state4 = useState<R4>(arr[3]||"");

    let s1 :stateV2Obj<R1>= {
        value : state1[0],
        set   : state1[1]
    }
    let s2 :stateV2Obj<R2>= {
        value : state2[0],
        set   : state2[1]
    }
    let s3 :stateV2Obj<R3>= {
        value : state3[0],
        set   : state3[1]
    }
    let s4 :stateV2Obj<R4>= {
        value : state4[0],
        set   : state4[1]
    }

    return [s1,s2,s3,s4];
}


interface stateV2Obj<T=any>{
    value: T;
    set: (newValue?:any)=>any
}