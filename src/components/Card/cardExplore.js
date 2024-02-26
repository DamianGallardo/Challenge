"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardExplore(props) {
  return (
    <>
    <Card elevation={2} sx={{ maxWidth: 384, maxHeight:366, borderRadius: "10px", background: "#34363a", }}>
      
      <CardContent>
        <Typography sx={{color: "#c7c7c7", textAlign:"left"}} gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography sx={{color: "#c7c7c7", textAlign:"left"}} variant="body2" >
            {props.content}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small">Learn More</Button>
      </CardActions>
      
      <CardMedia
        component="img"
        height="200"
        sx={{borderRadius: "20px", padding: "10px"}}
        image={props.image}
      />
    </Card>
    </>
  );
}