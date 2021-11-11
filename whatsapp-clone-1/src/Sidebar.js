import React from 'react';
import './Sidebar.css'
import SidebarChat from './SidebarChat';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar,IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';



function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQEOZ1E2IeHLrg/profile-displayphoto-shrink_100_100/0/1550310569633?e=1641427200&v=beta&t=-dw3upE7cPAy86Pukjm9QxOtI8ILSVnVEzAA8WmsWKA" />
                <div className="sidebar__headerRight">
                    <IconButton><ChatIcon /></IconButton>
                    <IconButton><DonutLargeIcon /></IconButton>
                    <IconButton><MoreVertIcon /></IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start a new Chat" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}



export default Sidebar
