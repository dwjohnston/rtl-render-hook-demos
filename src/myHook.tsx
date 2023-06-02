import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {dataSlice} from "./redux/slice";
import { requestDataAction } from "./redux/saga";


export function useData() {


    //@ts-ignore
    const value = useSelector(state => {
        console.log(state)
        //@ts-ignore
        return state.data.value; 
    });
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(requestDataAction()); 
    }, [dispatch]); 

    return value; 

}