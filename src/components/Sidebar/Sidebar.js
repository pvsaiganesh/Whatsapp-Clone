import React, { useState, useEffect } from "react";
import {
  // AccountCircle,
  DonutLarge,
  Chat,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import db from "../../firebase";
import { IconButton } from "@mui/material";
import SidebarChat from "../SidebarChat/SidebarChat";
import { useStateValue } from "../../StateProvider";
import "./Sidebar.css";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return { id: doc.id, data: doc.data() };
        })
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar sx={{ width: 60, height: 60 }} src={user?.photoURL} />
        <div className="sidebar__headerRight">
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
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} name={room.data.name} id={room.id} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
