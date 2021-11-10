import React from 'react';
import './Sidebar.css'
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__headerRight">
                    <ChatIcon />
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>

                    <MoreVertIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
