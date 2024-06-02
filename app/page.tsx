
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid'; // Grid version 1
import Divider from '@mui/material/Divider';
import LabelBottomNavigation from './components/bottomNav';
import { Breadcrumbs } from '@mui/material';
import Switch from '@mui/material/Switch';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { Providers } from './providers';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Metadata } from 'next';


// export const label = { inputProps: { 'aria-label': 'Dark mode switch' } };
 
export const metadata: Metadata = {
  title: 'Grace Chen',
  description: 'Personal website built in React/Next.jss',
};


export default function Home() {
  return (
    <Providers>
    <Container maxWidth="lg">
      <Grid container spacing={2}> 
        <Grid xs={8}>
            <Typography>
              grace chen
            </Typography>
          </Grid>
          <Grid xs={4}>
          <ThemeSwitcher/>
          {/* <Switch {...label}  color="secondary"  onChange={darkMode} /> */}
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="https://www.linkedin.com/in/gracechen11/">
              Linkedin
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="https://github.com/chengrace"
            >
              Github
            </Link>
            <Typography color="text.primary">TBD</Typography>
          </Breadcrumbs>
          </Grid>
        <Divider/> 
        <Grid xs={8}>
          <Box>
              <Typography variant="h2" gutterBottom>
                Hi, I'm Grace!
              </Typography>
              <Typography variant="h4">
                I am a budding software developer. 
                I am always seeking new ways to get out of my comfort zone and pushing past boundaries.
                I am constantly curious and love hearing stories from different people
                and different perspectives. Feel free to tell me yours by contacting me <a href="">here</a>.
              </Typography>
            </Box>
        </Grid>
        <Grid xs={4}>
          
        </Grid>
        
      </Grid>
    <LabelBottomNavigation/>
    </Container>
    </Providers>
  );
}
