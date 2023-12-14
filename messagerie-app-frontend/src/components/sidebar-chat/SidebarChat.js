import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar'
import './SidebarChat.css'

const SidebarChat = () => {

    return (
        <div className='sidebarChat'>
            <Avatar src='https://www.goodfreephotos.com/albums/other-photos/lord-of-the-rings-the-one-ring.jpg'/>

            <div className='sidebarChat__info'>
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    )
}

export default SidebarChat