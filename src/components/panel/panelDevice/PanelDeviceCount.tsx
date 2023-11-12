import React from "react";

import "./PanelDeviceCount.css"

const PanelDeviceCount = ({title,count}:{title:string,count:string}) =>{
    
    return (
        <div className="PanelDeviceCount_main">
            <span className="PanelDeviceCount_title">{title}</span>
            <span><span className="PanelDeviceCount_count">{count}</span>개</span>
        </div>
    )
}

export default PanelDeviceCount;