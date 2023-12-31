import { LocalMall } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo3 from "../../assets/icon/bazar2.png";
import userLogo2 from "../../assets/icon/user-icon2.png";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const {user,  logOut}= useContext(AuthContext)


  const handelLogOut =()=>{
    logOut()
    .then(()=>{})
    .catch(error =>console.log(error))
   }
  
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
    <AppBar position="static" sx={{ backgroundColor: "#fff", mx: 0 , boxShadow:'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <LocalMall
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "#82ae46",
            }}
          /> */}

          <Typography
            variant="h6"
            nowrap="true"
            sx={{
              // mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link style={{ color: "#82ae46", textDecoration: "none" }} to="/">
              <Box
                nowrap="true"
                sx={{
                  width: "auto",
                  height: 70,
                  display: "flex",
                }}
                component="img"
                alt="logo"
                src={logo3}
              />
            </Link>
          </Typography>
          {/* <Link
            style={{
              color: "#82ae46",
              textDecoration: "none",
              marginRight: "2px",
            }}
            to="/"
          >
            <Box
              nowrap="true"
              sx={{ 
                width: "auto",
                height: 64,
                display: { xs: "none", md: "flex" },
              }}
              component="img"
              alt="logo"
              src={logo}
            />
          </Link> */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "black" }} />
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
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{ color: "red" }} textAlign="center">
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "#228b22" : "#232323",
                        textDecoration: "none",
                      };
                    }}
                    to="/home"
                  >
                    Home
                  </NavLink>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{ color: "#228b22" }} textAlign="center">
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "#228b22" : "#232323",
                        textDecoration: "none",
                      };
                    }}
                    to="/products"
                  >
                    Products
                  </NavLink>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{ color: "#228b22" }} textAlign="center">
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "#228b22" : "#232323",
                        textDecoration: "none",
                      };
                    }}
                    to="/about"
                  >
                    About
                  </NavLink>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <LocalMall
            sx={{ display: { xs: "none", md: "none" }, mr: 1, color: "black" }}
          />
          <Typography
            variant="h5"
            nowrap="true"
            sx={{
              mr: 2,
              textDecoration: "none",
              display: { xs: "none", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "white",
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            <Link state={{ textDecoration: "none", color: "white" }} to="/">
              Bazar
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "green" : "#232323",
                      textDecoration: "none",
                    };
                  }}
                  to="/home"
                >
                  Home
                </NavLink>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "#228b22" : "#232323",
                      textDecoration: "none",
                    };
                  }}
                  to="/products"
                >
                  Products
                </NavLink>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "#228b22" : "#232323",
                      textDecoration: "none",
                    };
                  }}
                  to="/about"
                >
                  About
                </NavLink>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "#228b22" : "#232323",
                      textDecoration: "none",
                    };
                  }}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </Typography>
            </MenuItem>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Dark mode">
              <IconButton sx={{ p: 0 }}>
                {/* <ToggleColorMode /> */}
                {/* <DarkMode/> */}
              </IconButton>
            </Tooltip>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={userLogo2}/>
              </IconButton>
            </Tooltip>
            <Menu
              disableScrollLock={true}
              sx={{ mt: "45px", pr: 0 }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                 {
                  user ?<>
                  <Typography>{user?.displayName}</Typography>
                  <br/>
                    <Button variant="outlined" onClick={handelLogOut}>LogOUt</Button>
                  </>:<>
                   <Typography textAlign="center">
                  <Link
                    style={{ color: "black", textDecoration: "none" }}
                    to="/login"
                  >
                    Login
                  </Link>
                </Typography>
                  </>
                 }
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    style={{ color: "black", textDecoration: "none" }}
                    to="/products"
                  >
                    Products
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    style={{ color: "black", textDecoration: "none" }}
                    to="/about"
                  >
                    About
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
