import React from "react";

import PanelListLi from "./PanelListLi";

import "./PanelList.css"

const PanelList = () =>{
    const List_test = [
        {
            id:"3DF92-192",
            status:"Active"
        },
        {
            id:"3DF92-193",
            status:"Inactive"
        },
        {
            id:"3DF92-194",
            status:"Active"
        },
        {
            id:"3DF92-196",
            status:"Active"
        },
        {
            id:"3G23C-201",
            status:"Active"
        },
        {
            id:"3HHC2-392",
            status:"Active"
        }
    ]
    return (
        <section className="PanelList_section">  
            <p className="PanelList_title">
                Event List
            </p>
            <div className="PanelList_main">
                <div className="PanelListLi_title"><span>Device ID</span><span>Status</span></div>
                {List_test.map(ele=>(
                   <PanelListLi key={ele.id} id={ele.id} status={ele.status}/> 
                ))}
            </div>
        </section>
    )
}

export default PanelList;