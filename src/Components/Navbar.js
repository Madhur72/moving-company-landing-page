import React from "react";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import GroupsIcon from "@mui/icons-material/Groups";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import "../App.css";
import logo from "../assets/Logo.svg";
import {FaBars} from 'react-icons/fa';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText,ListItem } from "@mui/material";
const Navbar = () => {
  const [open, SetOpen] = useState(false);
  const contents = [
    {
      logo: <HomeIcon />,
      text: "Home",
    },
    {
      logo: <LocalShippingIcon />,
      text: "Services",
    },
    {
      logo: <GroupsIcon />,
      text: "Testimonials",
    },
    {
      logo: <ContactPageIcon />,
      text: "Contact",
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar-menu-container"> 
      <FaBars onClick={()=> SetOpen(true)}/>
      <Drawer anchor="right" open={open} onClose={()=>SetOpen(false)}>
        <List>
          {contents.map((item)=>(
            <ListItem key = {item}>
            <ListItemButton>
              <ListItemIcon>{item.logo}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItemButton>
          </ListItem>
          ))}
        </List>
      </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
