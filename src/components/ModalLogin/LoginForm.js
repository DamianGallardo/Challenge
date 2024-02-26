"use client";
import { Grid, Container, Paper, Typography, TextField, Link ,Box} from "@mui/material"
import {LoadingButton} from "@mui/lab"
import {useFormik} from "formik";
import { initialValues,validationSchema } from "./LoginForm.form";
import { useRouter } from "next/navigation";
import { useAuth } from "user-context-fran-dev";
import {Login} from "../../api/services";


export  function LoginForm() {

  const router = useRouter();

  const {login} = useAuth();
  const authCrtl = new Login();
  

  const formik = useFormik({
    initialValues: initialValues(),
     validationSchema:validationSchema(),
     validateOnChange: false,
     onSubmit: async(formValue) => {
       try{
        const response = await authCrtl.postData(formValue);
         console.log(response);
         console.log(response.data.token);
         if(response.data.token){
          login(response.data.token, response.data.user);
          router.push("/Example")
         }else{
          console.log(response);
         }
        
        
       }catch(error){
         console.error(error);
       }

     },
   
  });

  
 
  return (
    <Grid
      container
      component="main"
      sx={{
        backgroundColor: "white",
      }}
    >
      <Container
        component={Paper}
        elevation={1}
        maxWidth="xs"
        fixed
        sx={{
          height: "50%",
          width: "25%",
          marginTop: "2%",
          marginBottom: "1.5%",
          flex: { xs: "100%", sm: "100%", md: "100%" },
        }}
      >
        <Box
          align="center"
          sx={{
            marginTop: "5%",
            marginBottom: "5%",
          }}
        >
          <Typography component="h1" variant="h5">
            LogIn
          </Typography>

          <form onSubmit={formik.handleSubmit}>
            <TextField
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.errors.email}
              fullWidth
              autoFocus
              color="secondary"
              margin="normal"
              variant="outlined"
              label="username"
              name="email"
              sx={{
                marginTop: "8%",
              }}
            />

            <TextField
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.errors.password}
              fullWidth
              type="password"
              color="secondary"
              margin="normal"
              variant="outlined"
              label="password"
              name="password"
              required
            />

            <LoadingButton
              loading={formik.isSubmitting}
              fullWidth
              type="submit"
              sx={{
                marginTop: "5%",
                background: "blue",
                color: "white",
              }}
            >
              Sign-In
            </LoadingButton>
          </form>
        </Box>
        <Box align="center">
          <Typography
            variant="body2"
            sx={{
              marginTop: "60%",
            }}
          >
            <Link href="#" color="#FFFFF">
              forgot password?
            </Link>
          </Typography>

          <Typography
            variant="body2"
            sx={{
              marginBottom: "15%",
            }}
          >
            <Link href="#" color="#FFFFF">
              dont have a account yet?
            </Link>
          </Typography>
        </Box>
      </Container>
    </Grid>
  );
}
