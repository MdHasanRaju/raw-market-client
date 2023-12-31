import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Button, Container, Grid, Typography } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useEffect,useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';
import GoogleSocialLogin from './GoogleSocialLogin';


const Login = () => {
 
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();


  const from = location.state?.from?.pathname || "/";


  const {  signIn} = useContext(AuthContext)

useEffect(()=>{
  loadCaptchaEnginge(6); 
},[])



 const handelLogin = event => {
  event.preventDefault()
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email,password)
  signIn(email, password)
  .then(result =>{
    const user = result.user
    console.log(user)
    Swal.fire(
      'Good job! ',
      'Login is successfuly!',
      'success'
    )
  navigate(from, { replace: true });
})
  
 
 }



  const handleValidateCaptcha = (e) => {
   const user_captcha_value = e.target.value;
  if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
  }
  else {
      setDisabled(true)
  } 
} 





  return (
    <>

    {/* raju@gmail.com Shipon56# */}
      <Helmet>
                <title>Raw__Bazar | Login</title>
       </Helmet>
       <Box sx={{ bgcolor: "#fff", py: 10 }}>
      <Container>
        <Typography sx={{ textAlign: 'center' }} variant='h4'>Plages Login</Typography>
        <Grid container >
          <Grid item xs={12} sm={6} md={6} >
            <Box onSubmit={handelLogin} sx={{width:'100%'}} component="form" action="" >
              <Box  sx={{ display: 'flex', flexWrap: 'wrap', flexFlow: 'column', gap: 1 }}>
               <Box>
                <Typography>Email</Typography>
               <TextField
                  type="email"
                  name="email"
                  placeholder='Please your email*'
                  required
                />
               </Box>
              
                <Box>
                <Typography>Password</Typography>
                <TextField
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  placeholder='Please current password*'
                  required
                />
                </Box>
                <Box><Typography >Forget password?</Typography></Box>
                  <Box>
                  <LoadCanvasTemplate />
                  </Box>
                  <Box>
                <TextField
                  type="text"
                  onBlur={handleValidateCaptcha} 
                  name="captcha"
                  placeholder='type the text above captcha'
                  autoComplete="current-password"
                  required
                />
                </Box>

            
                 <Box>
                 <Button disabled={false} sx={{width:'41%'}}  type='submit'  variant="contained" color="success">
                  Login
                </Button>
                 </Box>
      
              </Box>
            </Box>
            <br />
            <GoogleSocialLogin></GoogleSocialLogin>
            <Typography variant='subtitle1'>Don't have an account? <Link to={'/register'}>Sign up</Link></Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            
          </Grid>
               
        </Grid>
      </Container>
    </Box>
     </>
  );
}


export default Login;




/* 


  <form action="">
        <Box sx={{display:'flex', flexWrap:'wrap', flexFlow:'column', gap:2}}>
        <TextField
          required
          id="outlined-required"
          label="Your Email"
        />
        <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <br />
        <Button sx={{}} variant="contained" color="success">
        Submit
      </Button>
      </Box>
        </form>
*/