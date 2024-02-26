"use client";
import React, { useEffect, useState, useMemo } from 'react';
import { Container, Grid } from '@mui/material';
import AppBar from '../../components/AppBar/AppBar'
import Footer from '../../components/Footer/Footer'
import Box from '@mui/material/Box';
import * as context from 'user-context-fran-dev';


export default function HomeView() {
  
  const [ auth, setAuth ] = useState(null);


  const login = (data, user) => {
    context.login(data, user, setAuth)
  }

  const logout = () => {
    context.logout(auth, setAuth);
  }
  
  const autData = useMemo(
    () => ({
      auth,
      login,
      logout,
    }),
    [auth]
  );

    
    return (
      <context.AuthContext.Provider value={autData}>
        <Box>
          <Grid>
            <AppBar />
            <Container>
              <Grid>
                <h1>Home</h1>
              </Grid>
            </Container>
            <Footer />
          </Grid>
        </Box>
      </context.AuthContext.Provider>
    );  
}

// export default HomeView