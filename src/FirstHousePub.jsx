import React, { useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent, CardMedia, Grid, } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import menu from './firstHouseData.js';
// import Icon from "../public/.svg";

const PRIMARY = '#D4B687';
const LIGHT = '#D4B687';

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
        fontFamily: 'HindSiliguri-Medium',
        fontSize: '16px'
    },
    heading: {
        fontFamily: 'HindSiliguri-Medium'
    },
    paragraph: {
        fontFamily: 'OpenSansCondensed-Light',
        marginBlockStart: 0,
        marginBlockEnd: 0,
        fontSize: '1.1em'
    },
}));

function formatPrice(price) {
    return price && parseFloat(price).toFixed(2);
}

export default function Menu() {
    const classes = useStyles();
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView();
    return (
        <Box>
            <div
                style={{
                    backgroundColor: PRIMARY,
                    height: '40vh',
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
                        className={classes.heading}
                        variant="h2"
                    >
                        {menu.xname}
                    </Typography>
                    <Typography
                        align="center"
                        style={{ width: '100%' }}
                        className={classes.heading}
                        variant="h5"
                    >
                        {menu.xnumber}
                    </Typography>
                    {menu.xaddress && <Box>
                        <Typography
                            align="center"
                            style={{ width: '100%' }}
                            className={classes.heading}
                            variant="h5"
                        >
                            {menu.xaddress}
                        </Typography>
                    </Box>}
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
                            let [name, foods] = obj;
                            if (name.includes('_'))
                                name = name.replace('_', ' ');
                            else if (name.substring(0, 1) === 'x')
                                return;
                            foods.sort((a, b) => a.name.localeCompare(b.name));
                            return (
                                <div key="1">
                                    <Box my={3}>
                                        <Typography
                                            align="center"
                                            className={classes.heading}
                                            style={{
                                                color: PRIMARY,
                                                borderBottom: '1px solid',
                                                borderColor: PRIMARY,
                                            }}
                                            variant="h4"
                                        >
                                            {name}
                                        </Typography>
                                    </Box>
                                    <Grid container>
                                        {foods.map((item) => {
                                            const { name, price, desc, options } = item;
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
                                                                        className={classes.title}
                                                                        display="inline"
                                                                    >
                                                                        <strong>{name}</strong>
                                                                    </Typography>
                                                                </Box>
                                                                <Box
                                                                    component="div"
                                                                    display="inline"
                                                                    style={{ float: 'right' }}
                                                                >
                                                                    <Typography className={classes.title} display="inline">
                                                                        {formatPrice(price)}
                                                                    </Typography>
                                                                </Box>
                                                                <Box component="div">
                                                                    <Typography
                                                                        className={classes.paragraph}
                                                                        variant="subtitle2"
                                                                        display="inline"
                                                                    >
                                                                        {desc}
                                                                    </Typography>
                                                                </Box>
                                                                {options && options.map((option, key) =>
                                                                    <Box key={key} component="div">
                                                                        <Typography
                                                                            className={classes.paragraph}
                                                                            variant="subtitle2"
                                                                            display="inline"
                                                                        >
                                                                            <b>{option.name}</b>
                                                                        </Typography>
                                                                        <div className={classes.paragraph} style={{ float: "right" }}>
                                                                            {formatPrice(option.price)}
                                                                        </div>
                                                                    </Box>)}
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
                    <div style={{ alignItems: 'center', marginBottom: '3em' }}>
                        <Box p={2} style={{ marginBottom: '2em' }}>
                            <Typography
                                align="center"
                                style={{ width: '100%' }}
                                className={classes.title}
                                variant="h4"
                            >
                                {menu.xDisclaimer}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                align="center"
                                style={{ width: '100%' }}
                                className={classes.title}
                                variant="h4"
                            >
                                Hours:
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                align="center"
                                style={{ width: '100%' }}
                                className={classes.title}
                                variant="h5"
                            >
                                {menu.xhours.split('\n').map((str, key) => (<p className={classes.title} key={key}>{str}</p>))}
                            </Typography>
                        </Box>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}
