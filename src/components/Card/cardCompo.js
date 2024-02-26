"use client";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardExplore from './cardExplore';
import { Container, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? "grey.900" : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CardCompo() {
  return (
    <>
      <Container sx={{ }}>
        <Typography
          variant="h3"
          sx={{
            color: "#ecf3fe",
            textAlign: "center",
            fontFamily: "Google Sans,Roboto,Arial,sans-serif",
          }}
        >
          Explore more features
        </Typography>

        <Box sx={{ flexGrow: 1, background: "grey.900" }}>
          <Grid container spacing={{xs:1}}  columns={{ xs: 1, sm: 8, md: 12, lg: 12, xl: 12}}>
            <Grid item xs={4}>
              <Item
                elevation={0}
                sx={{
                  backgroundColor: "grey.900",
                  marginTop: "20px",
                }}
              >
                <CardExplore
                  title="June 2023"
                  content="Get your passwords when you need them"
                  image="https://www.google.com/chrome/static/images/whats-new/116/passwords-2x.webp"
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item
                elevation={0}
                sx={{
                  backgroundColor: "grey.900",
                  marginTop: "20px",
                }}
              >
                <CardExplore
                  title="May 2023"
                  content="Customize Chorome your way"
                  image="https://www.google.com/chrome/static/images/whats-new/114/mac/customize-chrome-2x.webp"
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item
                elevation={0}
                sx={{
                  backgroundColor: "grey.900",
                  marginTop: "20px",
                }}
              >
                <CardExplore
                  title="March 2023"
                  content="Chrome frees up memory to make "
                  image="https://www.google.com/chrome/static/images/whats-new/113/mac/memory-saver.webp"
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}