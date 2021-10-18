import React from 'react'
import "./Sidebar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Harsh Creations</h3>
                <ExpandMoreIcon/>
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                    <ExpandMoreIcon/>
                    <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="sidebar__addChannel"/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
