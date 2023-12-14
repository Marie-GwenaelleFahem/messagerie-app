import React from 'react';
import './Sidebar.css';
import { DonutLarge, Chat, MoreVert } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from '../sidebar-chat/SidebarChat';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className='sidebar__header'>
        <Avatar src='https://tolkiengateway.net/w/images/f/f3/Matt_Stewart_-_Galadriel.jpg' />

        <IconButton>
            <DonutLarge />
        </IconButton>

        <IconButton>
            <Chat />
        </IconButton>

        <IconButton>
            <MoreVert />
        </IconButton>
      </div>
      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <SearchOutlined />
          
          <input type='text' placeholder='Search to star a new chat' />
        </div>
      </div>
      <div className='sidebar__chats'>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
