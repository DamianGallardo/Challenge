"use client";
import * as React from "react";
import { Typography, CardMedia, Box, Container, Card, Grid, CardContent } from "@mui/material"
import CardL from "../Card/CardL"
import CardR from "../Card/cardR"
import CardCompo from "../Card/cardCompo"
import FooterWhats from "../FooterW/FooterWhats"
import HeaderNews from "../Header/headerNews"



export default function ContentP () {

    return (
      <>
      
        <Box
          sx={{
            width: "100hv",
            height: "100hv",
            backgroundColor: "grey.900",
          }}
        >
          <Box 
          >
            <CardContent
              sx={{
                backgroundImage: `url(${"https://www.google.com/chrome/static/images/shapes-dark.png"})`,
                backgroundposition: "center",
                height: 350,
                width: "90%",
                marginLeft: "90px",
                marginRight: "50px",
                borderRadius: "24px",
                display: { xs: "none", md: "block" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "#ecf3fe",
                  textAlign: "center",
                  fontFamily: "Google Sans,Roboto,Arial,sans-serif",
                  marginTop: "4%",

                }}
                component="div"
                gutterBottom
              >
                What’s New in Chrome
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#ecf3fe",
                  textAlign: "center",
                  fontFamily: "Google Sans,Roboto,Arial,sans-serif",
                }}
                component="div"
                gutterBottom
              >
                Chrome gets a brand new look and new productivity features
              </Typography>
              <Container
                sx={{
                  textAlign: "center",
                  marginTop: "120px",
                  display: { xs: "none", md: "block" },
                }}
              >
                <img
                  src="https://www.google.com/chrome/static/images/chrome-logo.svg"
                  alt="Chrome Logo"
                />
              </Container>
            </CardContent>
          </Box>


          <Box
            sx={{
              backgroundColor: "grey.900",
              width: "100hv",
            height: "100hv",
            marginTop: "100px",
            }}
          >
            <Container maxWidth="lg">
              
            
            <CardL
              button="CUSTOMIZE"
              title="Customize Chrome, your way"
              content="Chrome has a new look that comes with more options in Customize Chrome. You can try out new expressive colors and themes, and also choose between light and dark mode"
              list1="Open a "
              strong1="New tab"
              list2="At the bottom of the page, click "
              strong2="Customize Chrome"
              list3="Explore the new options under "
              strong3="Appearance"
              image="https://www.google.com/chrome/static/images/whats-new/117/mac/customize.webp"
            />
            <CardL
              button="CUSTOMIZE"
              title="Customize Chrome, your way"
              content="Chrome has a new look that comes with more options in Customize Chrome. You can try out new expressive colors and themes, and also choose between light and dark mode"
              list1="Open a "
              strong1="New tab"
              list2="At the bottom of the page, click "
              strong2="Customize Chrome"
              list3="Explore the new options under "
              strong3="Appearance"
              image="https://www.google.com/chrome/static/images/whats-new/117/mac/customize.webp"
            />
            <CardL
              button="CUSTOMIZE"
              title="Customize Chrome, your way"
              content="Chrome has a new look that comes with more options in Customize Chrome. You can try out new expressive colors and themes, and also choose between light and dark mode"
              list1="Open a "
              strong1="New tab"
              list2="At the bottom of the page, click "
              strong2="Customize Chrome"
              list3="Explore the new options under "
              strong3="Appearance"
              image="https://www.google.com/chrome/static/images/whats-new/117/mac/customize.webp"
            />

            <CardL
              button="PRODUCTIVITY"
              title="Get the most out of Chrome with the new menu"
              content="The new menu has all your favorite tools and features and lots of new ones to explore. The simple and smart design makes it easier to find what you need, when you need it."
              list1="Open a "
              strong1="Chrome menu  "
              list2="Explore the new layout and features "
              strong2=""
              image="https://www.google.com/chrome/static/images/whats-new/117/mac/chrome-menu.webp"
            />
            


            <CardCompo/>
            <FooterWhats/>
            
            </Container>

          </Box>
        </Box>
        
      </>
    );
}
