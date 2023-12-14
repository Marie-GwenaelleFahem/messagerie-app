import React, { useState, useEffect } from 'react'
import { Avatar, IconButton } from '@mui/material'
import { AttachFile, MoreVert, SearchOutlined, InsertEmoticon, Mic } from '@mui/icons-material'
import './Chat.css'

const Chat = () => {
    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar sric='https://i.pinimg.com/564x/38/0d/c2/380dc25bd31fc68423e73a581c447967.jpg' />

                <div className='chat__headerInfo'>
                    <h3>Room Name</h3>
                    <p>Last seen at</p>
                </div>

                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>


            <div className='chat__body'>
                <p className="chat__message">
                    <span className="chat__name">Nabendu</span>
                    This is a message
                    <span className="chat__timestamp">
                        { new Date().toUTCString() }
                    </span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Parag</span>
                    This is a message back
                    <span className="chat__timestamp">
                        { new Date().toUTCString() }
                    </span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Nabendu</span>
                    This is a message again
                    <span className="chat__timestamp">
                        { new Date().toUTCString() }
                    </span>
                </p>
            </div>

            <div className='chat__footer'>
                <InsertEmoticon />

                <form>
                    <input type='text' placeholder='Type a message' />
                    <button type='submit'>Send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat;