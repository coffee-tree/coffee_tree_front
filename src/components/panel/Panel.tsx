import React from "react";

import PanelTitle from "./panelTItle/PanelTitle";
import PanelForm from "./panelForm/PanelForm";
import PanelDevice from "./panelDevice/PanelDevice";
import PanelList from "./panelList/PanelList";
import PanelButton from "./panelButton/PanelButton";

import "./Panel.css"

const Panel = () =>{
    return (
        <section className="panel">
            <PanelTitle/>
            <PanelForm/>
            <PanelDevice/>
            <PanelList/>
            <PanelButton/>
        </section>
    )
}


export default Panel