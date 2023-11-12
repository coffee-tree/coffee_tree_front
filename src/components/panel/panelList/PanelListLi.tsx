import React,{useState} from "react";
import  {ReactComponent as PanelListLiStatus} from "./PanelListLiStatus.svg"

import "./PanelListLi.css"

const PanelListLi = ({id,status}:{id:string,status:string}) =>{
    const color = status==="Active"?"green":"red";
    return (
        <li className="PanelListLi_main"><span>{id}</span> <span className="PanelListLi_status"><PanelListLiStatus fill={color} width="6px"/>{status}</span></li>
    )
}



export default PanelListLi