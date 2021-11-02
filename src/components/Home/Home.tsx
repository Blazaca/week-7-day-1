import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import patchbay from '../../assets/images/vintage-synth-patchbay.jpg'
import { Link } from 'react-router-dom';

interface Props{
    title: string;
}

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo:{
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'rgb(28,24,22)',
        paddingLeft: '3rem'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex',
        listStyle: 'none',
        paddingRight: '3rem'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'black',
        textDecoration: 'none'
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${patchbay});`,
        width: '100%',
        height: '93.2%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    }
    
});

export const Home = (props:Props) =>{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={classes.logo}>
                        <a href="" className={`${classes.logo_a} ${classes.logo_navigation}`}>The Patchbay</a>
                    </h1>
                    <ul className={`${classes.navigation} ${classes.logo_navigation}`}>
                        <li>
                            <a href="/" className={classes.nav_a}>Home</a>
                        </li>
                        <li>
                            <a href="/dashboard" className={classes.nav_a}>Dashboard</a>
                        </li>
                        <li>
                            <a href="/signin" className={classes.nav_a}>Sign In</a>
                        </li>
                    </ul>
                </div>
            </nav> 
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1>{ props.title }</h1>
                    <Button color='primary' variant="contained">Click Here!</Button>
                </div>
            </main>   
        </div>
    )
}