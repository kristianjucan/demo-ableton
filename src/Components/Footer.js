import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../Styles/Footer.css'
import fb from '../Images/fb-icon.svg'
import twitter from '../Images/twitter-icon.svg'
import yt from '../Images/yt-icon.svg'
import insta from '../Images/instagram-icon.svg'


function Footer() {
  return (
    <div className='footer-body'>
    <div className='footer'>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} alignItems='start'>
        <Grid item xs={12} sm={12} md={12} >
          <h4>Ableton</h4>
        </Grid>
        <Grid item sm={12} md={4} >
          <p>Register Live or Push</p>
          <p>About Ableton</p>
          <p>Jobs</p>
          <ul id='social-icons'>
            <li><img src={fb} /></li>
            <li><img src={twitter} /></li>
            <li><img src={yt} /></li>
            <li><img src={insta} /></li>
          </ul>
        </Grid>
        <Grid item sm={12} md={4}>
          <h3>Education</h3>
          <p>Offers for students and teachers</p>
          <p>Ableton for the Classroom</p>
          <p>Ableton for Colleges and Universities</p>
        </Grid>
        <Grid item sm={12} md={4}>
          <h3>Sign up to our newsletter</h3>
          <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
          <div className='newsletter'><input type='email' placeholder='Email Adress'/> <button>Sign up</button></div>
        </Grid>
        <Grid item sm={12} md={4}>
          <h3>Community</h3>
          <p>Find Ableton User Groups</p>
          <p>Find Certified Training</p>
          <p>Become a Certified Trainer</p>
        </Grid>
        <Grid item sm={12} md={4}>
          <h3>Distributors</h3>
          <p>Find Distributors</p>
          <p>Try Push in-store</p>
        </Grid>
        <Grid container item alignItems='center' justifyContent='space-between' className='footer-links' textAlign='start'>
          <Grid item xs={12} sm={12} md='auto' lg='auto'><a href=''>Contact Us</a></Grid>
          <Grid item xs={12} sm={12} md='auto' lg='auto'><a href=''>Press Resources</a></Grid>
          <Grid item xs={12} sm={12} md='auto' lg='auto'><a href=''>Legal Info</a></Grid>
          <Grid item xs={12} sm={12} md='auto' lg='auto'><a href=''>Privacy Policy</a></Grid>
          <Grid item xs={12} sm={12} md='auto' lg='auto'><a href=''>Cookie Settings</a></Grid>
          <Grid item xs={12} sm={12} md='auto' lg='auto'><a href=''>Imprint</a></Grid>
          <Grid container item sm={12} md={4}>
        </Grid>
          <Grid container item xs={12} sm={12} md={12} lg='auto' justifyContent='flex-start' className='footer-logo' id='footer-logo'>
            <p>Made in Berlin</p>
            <img src='https://cdn-resources.ableton.com/80bA26cPQ1hEJDFjpUKntxfqdmG3ZykO/static/images/ableton-hallmark.ef5355379032.svg' />
        </Grid>
        </Grid>
      </Grid>
    </Box>

    
    </div>
    </div>
  )
}

export default Footer