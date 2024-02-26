"use client";
import * as React from "react";
import {Box, Typography, Container, Grid, Link} from "@mui/material"
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Facebook, Twitter, YouTube } from "@mui/icons-material";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function FooterWhats() {

    return (
      <>
        <Container maxWidth="xl" sx={{ marginTop:2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={0}
            columns={16}
            direction="column"
            justifyContent="center"
            alignItems="stretch"
          >
            <Grid item xs={8}>
              <Item
                elevation={0}
                sx={{
                  backgroundColor: "grey.900",
                  textAlign: "left",
                  color: "#fff",
                  fontSize: 25,
                }}
              >
              Follow us
              <YouTube sx={{ fontSize: 25, marginLeft: 5 }} />
              <Twitter sx={{ fontSize: 25, marginLeft: 5 }} />
              <Facebook sx={{ fontSize: 25, marginLeft: 5 }} />

              <hr />
              </Item>
            </Grid>
            <Grid item xs={8}>
            <Item
                elevation={0}
                sx={{
                  backgroundColor: "grey.900",
                  textAlign: "left",
                  color: "grey.500",
                  marginBottom: 10,

                }}
              >
                <Link href="#" underline="hover" sx={{ color: "grey.300", fontSize: 25,  }}>
                  Google
                </Link>
                <Link href="#" underline="hover" sx={{ color: "grey.300", fontSize: 15, marginLeft: 10 }}>
                  Privacy and Terms
                </Link>
                <Link href="#" underline="hover" sx={{ color: "grey.300", fontSize: 15, marginLeft: 10 }}>
                  About Google
                </Link>
                <Link href="#" underline="hover" sx={{ color: "grey.300", fontSize: 15, marginLeft: 10 }}>
                  Google Products
                </Link>
                
              </Item>
            </Grid>
          </Grid>
        </Box>
        </Container>
      </>
    );
}

