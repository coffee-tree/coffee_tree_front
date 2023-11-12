import React from "react";

import PanelTitle from "./panelTItle/PanelTitle";
import PanelForm from "./panelForm/PanelForm";
import PanelDevice from "./panelDevice/PanelDevice";
import PanelList from "./panelList/PanelList";

import "./Panel.css"

const Panel = () =>{
    return (
        <main className="panel">
            <div className="panel_main">
                <PanelTitle/>
                <PanelForm/>
                <PanelDevice/>
                <PanelList/>
            </div>
        </main>
    )
}


export default Panel