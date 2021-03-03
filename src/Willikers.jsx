import React, { useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent, CardMedia, Grid, } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import menu from '../src/willikersData';
// import Icon from "../public/.svg";

const PRIMARY = '#c62828';
const LIGHT = '#d15353';

const useStyles = makeStyles((theme) => ({
    customImage: {
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    spikes: {
        position: 'relative',
        background: PRIMARY,
        height: '50vh',
        '&:after': {
            content: "''",
            position: 'absolute',
            right: 0,
            left: '-5%',
            top: '100%',
            zIndex: 10,
            display: 'block',
            height: '75px',
            backgroundSize: '75px 100%',
            backgroundImage: `linear-gradient(135deg, ${PRIMARY} 25%, transparent 25%), linear-gradient(225deg, ${PRIMARY} 25%, transparent 25%)`,
            backgroundPosition: '0 0',
        },
    },
    customShapeDividerBottom: {
        position: 'relative',
        top: '-5px',
        width: '100%',
        overflow: 'hidden',
        lineHeight: 0,
        transform: 'rotate(180deg)',
        // backgroundColor: PRIMARY,
    },
    customsvg: {
        position: 'relative',
        display: 'block',
        width: 'calc(143% + 1.3px)',
        height: '106px',
    },
    shapeFill: {
        fill: PRIMARY,
    },
    title: {
        fontFamily: 'Times',
    },
}));

export default function Menu() {
    const classes = useStyles();
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView();
    return (
        <Box>
            {/* <Head>
                <title>Willikers</title>
                <link rel="icon" href="/favicon.ico" />
            </Head> */}
            <div
                style={{
                    backgroundColor: PRIMARY,
                    height: '35vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}
            >
                <div
                    style={{
                        display: 'block',
                    }}
                >
                    <Typography
                        align="center"
                        style={{ width: '100%' }}
                        className={classes.title}
                        variant="h2"
                    >
                        Willikers
                        <Typography
                            align="center"
                            style={{ width: '100%' }}
                            className={classes.title}
                            variant="h5"
                        >
                            (508) 842-3030
                        </Typography>
          </Typography>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            align="center"
                            style={{ width: '100%' }}
                            className={classes.title}
                            variant="h5"
                        >
                            Hours: 11:30am - 2:00am
                        </Typography>
                    </div>
                </div>
            </div>
            <div className={classes.customShapeDividerBottom}>
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className={classes.customsvg}
                >
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className={classes.shapeFill}
                    />
                </svg>
            </div>
            <Grid container justify="center">
                <Grid item xl={8} lg={10} md={10} sm={12}>
                    <Box itemRef={myRef} p={3}>
                        {Object.entries(menu).map((obj) => {
                            const [name, foods] = obj;
                            foods.sort((a, b) => a.name.localeCompare(b.name));
                            return (
                                <div key="1">
                                    <Box my={3}>
                                        <Typography
                                            align="center"
                                            style={{
                                                color: PRIMARY,
                                                borderBottom: '1px solid',
                                                borderColor: PRIMARY,
                                            }}
                                            variant="h5"
                                        >
                                            {name}
                                        </Typography>
                                    </Box>
                                    <Grid container>
                                        {foods.map((item) => {
                                            const { name, price, description } = item;
                                            return (
                                                <Grid key="2" item xs={12} sm={6} md={4}>
                                                    <Box m={1}>
                                                        <Card variant="outlined">
                                                            <Box p={3}>
                                                                <Box
                                                                    component="div"
                                                                    display="inline"
                                                                >
                                                                    <Typography
                                                                        display="inline"
                                                                        style={{
                                                                            fontSize: '14px',
                                                                        }}
                                                                    >
                                                                        <strong>{name}</strong>
                                                                    </Typography>
                                                                </Box>
                                                                <Box
                                                                    component="div"
                                                                    display="inline"
                                                                    style={{ float: 'right' }}
                                                                >
                                                                    <Typography display="inline">
                                                                        {price}
                                                                    </Typography>
                                                                </Box>
                                                                <Box component="div">
                                                                    <Typography
                                                                        variant="subtitle2"
                                                                        display="inline"
                                                                    >
                                                                        {description}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        </Card>
                                                    </Box>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </div>
                            );
                        })}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
