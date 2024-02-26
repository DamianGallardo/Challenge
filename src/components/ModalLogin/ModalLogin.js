"use client";
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Grid, Paper } from '@mui/material';
import { LoginForm } from './LoginForm';


const paperStyle = {
    padding: 30,
    width: 300,
    height: '50vh',
    margin: '70px auto'
};



export default function KeepMountedModal() {


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>login</Button>
      <Modal keepMounted open={open} onClose={handleClose}>
        <Box>
          <Grid>
            <Paper elevation={10} style={paperStyle}>

              <LoginForm />
              
            </Paper>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}