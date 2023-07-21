import React from 'react'
import "./sidebar.css"
import { RssFeed, SendOutlined, VideoCameraBack,GroupOutlined,BookmarkAdd,QuestionAnswerOutlined, Work, Event, ArchiveOutlined } from '@mui/icons-material'

export default function Sidebar(){
    return(
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed sx={{fontSize:30}}/>
                        <a href="#" className="sidebarListItemText">Feed</a>
                    </li>
                    <li className="sidebarListItem">
                        <SendOutlined sx={{fontSize:30}}/>
                        <a href="#" className="sidebarListItemText">Chats</a>
                    </li>
                    <li className="sidebarListItem">
                        <VideoCameraBack sx={{fontSize:30}}/>
                        <a href="#" className="sidebarListItemText">Videos</a>
                    </li>
                    <li className="sidebarListItem">
                        <GroupOutlined sx={{fontSize:30}}/>
                        <a href="#" className="sidebarListItemText">Groups</a>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarkAdd sx={{fontSize:30}}/>
                        <a href="#" className="sidebarListItemText">Bookmarks</a>
                    </li>
                    <li className="sidebarListItem">
                        <QuestionAnswerOutlined sx={{fontSize:30}}/>
                        <a href="#" className="sidebarListItemText">Questions</a>
                    </li>
                    <li className="sidebarListItem">
                        <Work sx={{fontSize:30}}/>
                        <a href="#" className="sidebarListItemText">Jobs</a>
                    </li>
                    <li className="sidebarListItem">
                        <Event sx={{fontSize:30}}/>
                        <a href="#" className="sidebarListItemText">Events</a>
                    </li>
                    <li className="sidebarListItem">
                        <ArchiveOutlined sx={{fontSize:30}}/>
                        <a href="#" className="sidebarListItemText">Archive</a>
                    </li>
                </ul>
                <button className="sidebarBtn">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/people/man2.jpg" alt="friend1" className="sidebarFriendImg" />
                        <span className="FriendName">Chris Evans</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/people/man3.jpg" alt="friend1" className="sidebarFriendImg" />
                        <span className="FriendName">Johnny Depp</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/people/man4.jpg" alt="friend1" className="sidebarFriendImg" />
                        <span className="FriendName">Matt Le Blanc</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/people/woman1.jpg" alt="friend1" className="sidebarFriendImg" />
                        <span className="FriendName">Emilia Rose</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/people/woman2.jpg" alt="friend1" className="sidebarFriendImg" />
                        <span className="FriendName">Sara Williams</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/people/woman3.jpg" alt="friend1" className="sidebarFriendImg" />
                        <span className="FriendName">Josephine K.</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/people/woman4.jpg" alt="friend1" className="sidebarFriendImg" />
                        <span className="FriendName">Stephannie R.</span>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}