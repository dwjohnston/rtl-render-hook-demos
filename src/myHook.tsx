import React, { useEffect } from "react";

async function getData() : Promise<{data: string}>{

    return new Promise(res => setTimeout(() => res({
        data: "foo"
    }), 1000));
}

export function useData() {

    const [value, setValue] = React.useState(null as null | string); 

    useEffect(() => {
        getData().then((v) => {
            setValue(v.data); 
        })
    }, []); 

    return value; 

}