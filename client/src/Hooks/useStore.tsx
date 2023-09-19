import { useDispatch } from "react-redux";
import myStore, { actions }                  from "../Store/Store";

export default function useStore(){
    let dispatch = useDispatch()

    return { myStore, dispatch ,actions}
}