import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, IconButton } from "@material-ui/core";
import Navbar from "./Navbar";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import pdf from './pdf/Tadjidine_Tamou.pdf';
import './style.css';

const useStyles = makeStyles(theme => ({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
    },
    button: {
        marginTop: "1rem",
        marginLeft: "4rem",
        color: "tomato",
        borderColor: "tomato",
        textAlign:"center",
        "& .MuiSvgIcon-root":{
            fontSize: "4rem",
        }
    },
    
}));


const Cv = () => {
    const classes = useStyles();
    return (
        <Box component="div" style={{ height: "100vh" }}>
            <Navbar />
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Box  style={{ color: "white" }}>
                        Download My Cv Just Here
                        </Box>

                    <IconButton button href={pdf} download="Tadjidine_Tamou.pdf">
                        <CloudDownloadIcon style={{ color: "tomato" }}  className="taille" />

                    </IconButton>
                </Box>
            </Grid>
        </Box>
    )
}

export default Cv
