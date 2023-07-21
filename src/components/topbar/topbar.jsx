import React from "react";
import "./topbar.css";
import {SearchOutlined, Person, Chat,Notifications} from '@mui/icons-material';


function TopBar() {
  return (
     <div className="topbarContainer">
      <div className="topbarLeft">
         <span className="logo"><b>SocialLife</b></span>
      </div>
      <div className="topbarCenter">
         <div className="search-bar">
           <SearchOutlined sx={{fontSize:40}}/>
           <input placeholder="Search for friends, posts and videos" type="text" className="search-input" />
         </div>
      </div>
      <div className="topbarRight">
         <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
         </div>
         <div className="topbarIcons">
            <div className="topbarIconItem">
               <Person/>
               <span className="topbarIconBadge"></span>
            </div>
            <div className="topbarIconItem">
               <Chat/>
               <span className="topbarIconBadge"></span>
            </div>
            <div className="topbarIconItem">
               <Notifications/>
               <span className="topbarIconBadge"></span>
            </div>
         </div>
         <div className="Imageperson">
            <img src="/assets/people/man1.jpg" alt="friend1" className="topbarImage" />
            
         </div>
      </div>
     </div>
  );
}

export default TopBar;
