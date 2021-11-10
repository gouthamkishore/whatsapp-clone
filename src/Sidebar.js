import React from 'react';
import './Sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__headerRight">
                    <IconButton><ChatIcon /></IconButton>
                    <IconButton><DonutLargeIcon /></IconButton>
                    <IconButton><MoreVertIcon /></IconButton>




                </div>
            </div>
        </div>
    )
}



export default Sidebar
