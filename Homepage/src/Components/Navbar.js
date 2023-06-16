/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Logo from "../Assets/LOGO.svg";
import {BsCart2} from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
/* import {
     Box,
     Drawer,
     ListItem,
     ListItemButton,
     ListItemIcon,
     ListItemText
    } from "@mui/material"; */
    import HomeIcon from "@mui/icons-material/Home";
    /* import InfoIcon from "@mui/icons-material/Info";
    import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
    import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
    import { ShoppingCartRoundedIcon } from "@mui/icons-material/ShoppingCartRounded"; */    

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text:"Home",
            icon:<HomeIcon/>
        },
        {
            text:"Work",
            icon:<HomeIcon/>
        }
    ]

    return (
        <nav>
        <div className="nav-logo-container">
        <img src={Logo} alt="" />
        </div>
        <div className="navbar-links-container" >
            <a href="">Home</a>
            <a href="">Work</a>
            <a href="">
                <BsCart2 className="navbar-cart-icon" />
            </a>
            <button className="primary-button">
                Bookings Now
            </button>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;