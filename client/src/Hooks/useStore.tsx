import { useDispatch, useSelector } from "react-redux";
import myStore, { actions }                  from "../Store/Store";

export default function useStore(){
    let dispatch = useDispatch()
    let store  = myStore.getState();
    return { store, dispatch ,actions}
}

