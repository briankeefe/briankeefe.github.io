import './style.scss';
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  AppBar,
  Toolbar,
  Button,
  ButtonGroup,
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import space from './images/space.jpg';
import TopBar from './layout/TopBar';
import colors from './content/colors';
import logo from './logo.svg';

function App() {
  return (
    <Box className="home-page" style={{ background: `${colors.primary}` }}>
      <Box zIndex={10} style={{ position: 'absolute', top: 0, right: 0 }}>
        <TopBar />
      </Box>
      <Box className="skewed" />
      <Box className="outer">
        <Grid container justify="center" direction="column" alignItems="center">

          <Box className="bk-box">
            <Typography
              className="cascadia brian-keefe center"
              id="brian-keefe"
              variant="h1"
            >
              Brian Keefe
            </Typography>
          </Box>

          <Typography className="cascadia margin-top shadowed" variant="h5">
            Software Developer
          </Typography>
          <Typography className="cascadia shadowed" variant="p">
            Staples INC., Framingham MA
          </Typography>

          {/* <Button href="http://www.github.com/briankeefe" style={{color: `${colors.dark}`}} variant="contained" id="work-button">
              <FontAwesomeIcon size="3x" icon={faGithub} />
          </Button> */}
          <Grid item xs={10} sm={8} md={6} lg={4}>
            <Typography
              variant="h5"
              className="brian-keefe white-text about-text cascadia"
            >
              "Highly motivated developer focused on ReactJS and full stack solutions"
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
