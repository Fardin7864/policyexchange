"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { FaBookReader } from "react-icons/fa";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { RiTeamFill } from "react-icons/ri";
import { BsCalendarEventFill } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa6";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const drawerWidth = 240;

const CustomListItemButton = ({ href, text, icon, handleClick }) => {
  return (
    <ListItemButton
      onClick={() => handleClick(href)}
      disablePadding
      className=""
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};

CustomListItemButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  handleClick: PropTypes.func.isRequired,
};

function DashboardLayout({ children }) {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  //
  const handleNavigation = (href) => {
    router.push(href);
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div className="z-50 ">
      <Toolbar />

      <Divider />
      <List>
        {[
          {
            text: "Manage Team",
            route: "/dashboard/manage-team",
            icon: <RiTeamFill />,
          },
          {
            text: "Manage Publications",
            route: "/dashboard/manage-publications",
            icon: <FaBookReader />,
          },
          {
            text: "Manage Event",
            route: "/dashboard/manage-event",
            icon: <BsCalendarEventFill />,
          },
          {
            text: "Manage News",
            route: "/dashboard/manage-news",
            icon: <FaNewspaper />,
          },
        ].map((item, index) => (
          <CustomListItemButton
            key={index}
            href={item.route}
            text={item.text}
            icon={item.icon}
            handleClick={handleNavigation}
          />
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        className="z-50"
      >
        <Toolbar style={{ backgroundColor: "#00263a" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link href={"/"} className="">
            <Image
              src={"/logos/logo33.png"}
              width={130}
              height={0}
              alt="logo"
              className="my-2"
            />
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        className="z-50"
      >
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        className="z-40"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <div className="min-h-screen">{children}</div>
      </Box>
    </Box>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
