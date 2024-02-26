// "use client";
// import * as React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import {
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   CardMedia,
// } from "@mui/material";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


// export default function ResponsiveGrid(props) {
//   return (
//     <>
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 2, md: 8 }}>
//           <Grid item xs={2} sm={4} md={4}>
//             <Item
//             elevation={0}
//             sx={{
//               backgroundColor: "grey.900",
//               margin: "20px",
//             }}
//             >
//               <Box>
//             <Card
//                     variant=""
//                     sx={{
//                       backgroundColor: "grey.900",
//                     }}
//                   >
//                     <CardContent>
//                       <Button
//                         variant="contained"
//                         size="small"
//                         sx={{ marginRight: 45 }}
//                       >
//                         {props.button}
//                       </Button>
//                       <Typography
//                         sx={{
//                           fontSize: 30,
//                           textAlign: "left",
//                           color: "#ecf3fe",
//                         }}
//                         gutterBottom
//                       >
//                         {props.title}
//                       </Typography>
//                       <Typography
//                         variant="h7"
//                         component="div"
//                         sx={{ textAlign: "left", color: "#c7c7c7" }}
//                       >
//                         {props.content}
//                       </Typography>
//                       <Box
//                         sx={{
//                           color: "#c7c7c7",
//                           textAlign: "left",
//                           fontFamily: "Google Sans,Roboto,Arial,sans-serif",
//                           fontSize: 16,
//                           marginTop: 1,
//                           marginLeft: 2,
//                         }}
//                       >
//                         <div>
//                         <ol>
//                           <li>
//                             {props.list1}<strong>{props.strong1}</strong>
//                           </li>
//                           <li>
//                             {props.list2}<strong>{props.strong2}</strong>
//                           </li>
//                           <li>
//                             {props.list3}<strong>{props.strong3}</strong>
//                           </li>
//                         </ol>
//                         </div>
//                       </Box>
//                     </CardContent>
//                   </Card>
//               </Box>
//             </Item>
//           </Grid>
//           <Grid item xs={2} sm={4} md={4}>
//             <Item
//              elevation={0}
//              sx={{
//                backgroundColor: "grey.900",
//                margin: "20px",
//              }}
//             >
//             <CardMedia
//                     sx={{ height: 345, width: 616, borderRadius: "24px", marginLeft: "90px"}}
//                     image={props.image}
//                   />
//             </Item>
//           </Grid>
//       </Grid>
//     </Box>
//     </>
//   );
// }
