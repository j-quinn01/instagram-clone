import React from 'react'
import "./Sidenav.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";

function Sidenav() {
  return (
    <div className='sidenav'>
    <img className='sidenav__logo' src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt="Instagram Logo"/>

        <div className="sidenav__buttons">
            <div className="side__button">
                <HomeIcon />
                <span>Home</span>

            </div>

            <div className="side__button">
                <SearchIcon />
                <span>Search</span>

            </div>

            <div className="side__button">
                <ExploreIcon />
                <span>Explore</span>

            </div>

            <div className="side__button">
                <SlideshowIcon />
                <span>Reels</span>

            </div>

            <div className="side__button">
                <ChatIcon />
                <span>Messages</span>

            </div>

            <div className="side__button">
                <FavoriteBorderIcon />
                <span>Notifications</span>

            </div>

            <div className="side__button">
                <AddCircleOutlineIcon />
                <span>Create</span>

            </div>
        </div>

    </div>
  )
}

export default Sidenav