"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const pages = ["About", "News", "Publications", "Events", "Media", "Contact"];

function Navbar() {
  const pathname = usePathname();
  const [isDashboard, setDashboard] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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

  //

  useEffect(() => {
    if (pathname.split("/")[1] === "dashboard") setDashboard(true);
    else {
      setDashboard(false);
    }
  }, [pathname]);
  return (
    <div
      className={` h-[80px] z-[100]
    lg:absolute lg:left-[0] lg:right-[0] lg:top-4 max-w-[1440px] lg:w-[900px] xl:w-[1220px]
        rounded-md mx-auto 
      ${isDashboard ? `hidden` : `block`}
      `}
    >
      <div className=" relative z-[120] top-[18px] w-full bg-[#00263a] rounded-t-xl text-white flex justify-end pt-1">
        <ul
          className=" flex items-end gap-10 px-8 pt-[10px] "
          style={{ fontSize: "12px" }}
        >
          <li>
            <Link
              href={"/team"}
              className=" hover:text-[#7393CF] border-b border-dotted hover:border-b-[#7393CF]"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href={"/career"}
              className=" hover:text-[#7393CF] border-b border-dotted hover:border-b hover:border-b-[#7393CF]"
            >
              Career
            </Link>
          </li>
        </ul>
      </div>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#00263a" }}
        className=" rounded-xl rounded-t-xl h-[65px]"
      >
        <Container maxWidth="xl" className="">
          <Toolbar disableGutters>
            <Link href={"/"} className=" relative -top-[11px] z-[200]">
              <Image
                src={"/logos/logo33.png"}
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
                    <Link
                      href={`/${page.toLocaleLowerCase()}`}
                      textAlign="center"
                    >
                      {page}
                    </Link>
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
                  className="h-12 text-axi-400 text-lg hover:text-[#7393CF] hover:border-b-4 hover:border-b-[#7393CF] flex justify-center items-center px-2"
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
