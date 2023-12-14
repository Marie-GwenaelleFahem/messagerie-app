import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar'
import './SidebarChat.css'

const SidebarChat = () => {

    return (
        <div className='sidebarChat'>
            <Avatar src='https://static.wikia.nocookie.net/seigneur-des-ann…/revision/latest?cb=20140206125930&path-prefix=fr'/>

            <div className='sidebarChat__info'>
                <h2>Room name</h2>
                <p>Last message</p>
            </div>
        </div>
    )
}

export default SidebarChat