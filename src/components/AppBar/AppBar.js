"use client";
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import  MenuList  from '@mui/material';
// import  MenuItem  from '@mui/material';
import Drawer from './Drawer';
import KeepMountedModal from '../ModalLogin/ModalLogin';

export default function ButtonAppBar() {

  const pages = [ 'HOME', 'LOGIN', 'REGISTER', 'ABOUT'];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar sx={{ display: { xs: "none", md: "flex" } }}>
          <Typography
            color="Black"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            KeskinNube
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* <Button>
              {pages.map((text) => (
                <Button key={text} color="info" sx={{ mr: 2 }}>
                  {text}
                </Button>
              ))}
            </Button> */}

            <Button color="info" sx={{ mr: 2 }}>
              HOME
            </Button>
            <Box color="info" sx={{ mr: 2 }}>
               <KeepMountedModal />
            </Box>
            <Button color="info" sx={{ mr: 2 }}>
              REGISTER
            </Button>
            <Button color="info" sx={{ mr: 2 }}>
              ABOUT
            </Button>

          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <Drawer />
      </Box>
      
    </Box>
  );
}