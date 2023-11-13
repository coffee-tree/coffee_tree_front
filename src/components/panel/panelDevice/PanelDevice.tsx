import React from "react";
import PanelDeviceCount from "./PanelDeviceCount";

import "./PanelDevice.css"

const PanelDevice = () =>{

    return (
        <section className="PanelDevice_section">  
            <p className="PanelDevice_title">
                Device
            </p>
            <div className="PanelDevice_main">
                <PanelDeviceCount title="총 디바이스" count="82"/>
                <PanelDeviceCount title="반납 디바이스" count="11"/>
                <PanelDeviceCount title="활성 디바이스" count="69"/>
                <PanelDeviceCount title="비활성 디바이스" count="02"/>
            </div>
        </section>
    )
}

export default PanelDevice;