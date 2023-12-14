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
        <Avatar src='https://i.pinimg.com/564x/92/97/a9/9297a9e8cafcac9f912b2969dac55e14.jpg' />

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
