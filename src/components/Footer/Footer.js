"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";




export default function Footer() {

    return (
        <Box
        component="footer"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
              p: { xs: 4, md: 10},
              pt: 12,
              pb: 12,
              fontSize: {xs: '12px', md: '14px'},
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Sobre nosotros:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Contacto:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                KeskinNube
              </Typography>
              <Typography variant="body2" color="text.secondary">
                KeskinNube@gmail.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                telefono:23217235
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Sigueme en:
              </Typography>
              <Link href="" color="inherit">
                <Facebook />
              </Link>
              <Link
                href=""
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
              >
                <Instagram />
              </Link>
              <Link href="" color="inherit">
                <Twitter />
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
    }

                    