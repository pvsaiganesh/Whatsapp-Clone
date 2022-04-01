import React from "react";
import { AccountCircle, DonutLarge, Chat, MoreVert } from "@mui/icons-material";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <AccountCircle fontSize="large" />
        <div className="sidebar__headerRight">
          <DonutLarge />
          <Chat />
          <MoreVert />
        </div>
      </div>
      <div className="sidebar__search"></div>
    </div>
  );
}

export default Sidebar;
