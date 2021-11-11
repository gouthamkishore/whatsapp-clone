import { Avatar,IconButton } from '@material-ui/core'
import { AttachFile,InsertEmoticon,Mic,MoreVert,SearchOutlined } from '@material-ui/icons'
import React from 'react'
import './Chat.css'


function Chat() {
    return (
        <div className={"chat"}>
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat__heaaderRight">
                    <IconButton><SearchOutlined /></IconButton>
                    <IconButton><AttachFile /></IconButton>
                    <IconButton><MoreVert /></IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Goutham</span>

                    Message
                    <span className="chat__timeStamp">{new Date().toUTCString()}</span>

                </p>
                <p className=" chat__message chat__receiver">
                    <span className="chat__name">Goutham</span>

                    Message
                    <span className="chat__timeStamp">{new Date().toUTCString()}</span>

                </p>
                <p className="chat__message">
                    <span className="chat__name">Goutham</span>

                    Message
                    <span className="chat__timeStamp">{new Date().toUTCString()}</span>

                </p>
            </div>
            <div className="chat__footer">
                <IconButton><InsertEmoticon /></IconButton>

                <form>
                    <input placeholder="Type a message..."
                        type="text" />
                    <button type="submit"> Send Message</button>
                </form>
                <IconButton><Mic /></IconButton>

            </div>
        </div>
    )
}

export default Chat
