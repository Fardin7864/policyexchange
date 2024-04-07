"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Link from "next/link";

const pages = ["About", "Media", "Publications", "Events", "Career", "Contact"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className=" h-[80px] lg:absolute lg:left-[10%] lg:right-[10%] lg:top-4 z-50  max-w-[1440px] lg:w-[1280px] rounded-md mx-auto ">
    <AppBar
      position="static"
      sx={{ backgroundColor: "#00263a" }}
      className=" rounded-xl "
    >
      <Container maxWidth="xl" className=" my-auto">
        <Toolbar disableGutters>
          <Link href={"/"}><Image
            src={"/logotrans.png"}
            width={150}
            height={0}
            alt="logo"
            className=" hidden lg:block"
          />
          </Link>
          
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link  href={`/${page.toLocaleLowerCase()}`} textAlign="center">{page}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Image
            src={"/logo.png"}
            width={200}
            height={0}
            alt="logo"
            className=" md:block lg:hidden"
          />
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            className="justify-end gap-8 h-[80px] items-center"
          >
            {pages.map((page) => (
              <Link
                key={page}
                href={`/${page.toLocaleLowerCase()}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                className=" h-full text-axi-400 text-lg hover:text-[#a790d5] hover:border-b-4 hover:border-b-[#a790d5] flex justify-center items-center px-2"
              >
                {page}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
}
export default Navbar;
