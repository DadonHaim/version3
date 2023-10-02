import { useSelector } from "react-redux";


function use1<R1=any>(arr:allStoreType){
    let x1 :R1 = useSelector<IStore,any>(store=>store[arr])
    return x1;

}
function use2<R1=any ,R2=any>(arr:allStoreType[]){
    let x1 :R1 = useSelector<IStore,any>(store=>store[arr[0]]);
    let x2 :R2 = useSelector<IStore,any>(store=>store[arr[1]]);
    return [x1,x2];
}

function use3<R1=any ,R2=any,R3=any>(arr:allStoreType[]){
    let x1 :R1 = useSelector<IStore,any>(store=>store[arr[0]]);
    let x2 :R2 = useSelector<IStore,any>(store=>store[arr[1]]);
    let x3 :R3 = useSelector<IStore,any>(store=>store[arr[2]]);
    return [x1,x2,x3];
}
function use4<R1=any ,R2=any,R3=any,R4=any>(arr:allStoreType[]){
    let x1 :R1 = useSelector<IStore,any>(store=>store[arr[0]]);
    let x2 :R2 = useSelector<IStore,any>(store=>store[arr[1]]);
    let x3 :R3 = useSelector<IStore,any>(store=>store[arr[2]]);
    let x4 :R4 = useSelector<IStore,any>(store=>store[arr[3]]);
    return [x1,x2,x3,x4];
}

function use5<R1=any ,R2=any,R3=any,R4=any,R5=any>(arr:allStoreType[]){
    let x1 :R1 = useSelector<IStore,any>(store=>store[arr[0]]);
    let x2 :R2 = useSelector<IStore,any>(store=>store[arr[1]]);
    let x3 :R3 = useSelector<IStore,any>(store=>store[arr[2]]);
    let x4 :R4 = useSelector<IStore,any>(store=>store[arr[3]]);
    let x5 :R5 = useSelector<IStore,any>(store=>store[arr[4]]);
    return [x1,x2,x3,x4,x5];
}

function use6<R1=any ,R2=any,R3=any,R4=any,R5=any,R6=any>(arr:allStoreType[]){
    let x1 :R1 = useSelector<IStore,any>(store=>store[arr[0]]);
    let x2 :R2 = useSelector<IStore,any>(store=>store[arr[1]]);
    let x3 :R3 = useSelector<IStore,any>(store=>store[arr[2]]);
    let x4 :R4 = useSelector<IStore,any>(store=>store[arr[3]]);
    let x5 :R5 = useSelector<IStore,any>(store=>store[arr[4]]);
    let x6 :R6 = useSelector<IStore,any>(store=>store[arr[5]]);
    return [x1,x2,x3,x4,x5,x6];
}

export default {
    use1,
    use2,
    use3,
    use4,
    use5,
    use6,
}