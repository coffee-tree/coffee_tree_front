import React,{useEffect,useState} from "react";

type position = {
    x:number,
    y:number
}

const usePosition = () =>{
    const [po,setPo] = useState<position>({
        x:37.5502,
        y:127.0743
    })
    useEffect(()=>{
        const ws = new WebSocket("ws://43.201.20.124:6789");
        ws.onopen = () => {
            console.log("connect!")
        };
        ws.onmessage = (ele) =>{
            const data = ele.data.split(" ");
            const new_data = {
                x:Number(data[1].split(",")[0]),
                y:Number(data[3].split("}")[0])
            }
            setPo(() =>new_data)
        }
    },[])
    return po
}


export default usePosition;