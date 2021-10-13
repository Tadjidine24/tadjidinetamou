import React from 'react';
import { Avatar, Grid, Box } from '@material-ui/core';
import avatar from '../image/file/avatar.png';
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';


const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)

    },
    title: {
        color: "#00B8E3"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: " 50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }

}));


function Header() {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Tadjidine Tamou" />
            </Grid>
            <h3 className={classes.title}>
                <Typed strings={["Tadjidine Tamou"]} typeSpeed={40} />
            </h3>
            <h4 className={classes.subtitle}>
                <Typed strings={["Web Developer", "Web Designer", "Front-End", "Back-End"]} typeSpeed={40} backSpeed={60} loop />
            </h4>
        </Box>
    )
}

export default Header
