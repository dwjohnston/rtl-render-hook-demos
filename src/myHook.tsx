import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {dataSlice} from "./redux/store";

export async function getData() : Promise<{data: string}>{

    return new Promise(res => setTimeout(() => res({
        data: "foo"
    }), 1000));
}

export function useData() {


    //@ts-ignore
    const value = useSelector(state => {
        console.log(state)
        //@ts-ignore
        return state.data.value; 
    });
    const dispatch = useDispatch();

    useEffect(() => {
        getData().then((v) => {
            dispatch(dataSlice.actions.success(v.data)); 
        })
    }, [dispatch]); 

    return value; 

}