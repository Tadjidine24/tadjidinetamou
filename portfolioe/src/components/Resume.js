import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@material-ui/core";
import Navbar from "./Navbar";


const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "rgba(0, 0, 0, 0.5)",
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both",
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },

    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute",
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "#00B8E3 #00B8E3 transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan",
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent #00B8E3 #00B8E3"
            }
        },
    }, timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "#F58E56",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "#00B8E3",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }

}));


const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <h3 align="center" className={classes.heading}>
                    Diplômes et Formation
                </h3>
                <Box component="div" className={classes.timeLine}>
                <h2 className={`${classes.timeLineYear} ${classes.timeLineItem} `}>
                        2022
                    </h2>
                    <Box component="div" className={classes.timeLineItem}>
                        <h4 variant="h5" aligh="center" className={classes.subHeading}>
                            Bac + 3 Web Design et Communication Graphique
                        </h4>
                        <p variant="body1" aligh="center" style={{ color: "#00B8E3" }}>
                            ICAN Design
                         </p>
                        <h6 variant="subtitle1" aligh="center" style={{ color: "tan" }}>
                        Paris 12e
                        </h6>
                    </Box>
                    <h2 className={`${classes.timeLineYear} ${classes.timeLineItem} `}>
                        2021
                    </h2>
                    <Box component="div" className={classes.timeLineItem}>
                        <h4 variant="h5" aligh="center" className={classes.subHeading}>
                            Bac + 2 Développeur Web
                        </h4>
                        <p variant="body1" aligh="center" style={{ color: "#00B8E3" }}>
                            Samsung Campus / Epitech
                         </p>
                        <h6 variant="subtitle1" aligh="center" style={{ color: "tan" }}>
                            Saint-Ouen
                        </h6>
                    </Box>
                    <h2 className={`${classes.timeLineYear} ${classes.timeLineItem} `}>
                        2019
                    </h2>
                    <Box component="div" className={classes.timeLineItem}>
                        <h4 variant="h5" aligh="center" className={classes.subHeading}>
                            Niveau Bac ES
                        </h4>
                        <p variant="body1" aligh="center" style={{ color: "#00B8E3" }}>
                            Lycée Richelieu
                         </p>
                        <h6 variant="subtitle1" aligh="center" style={{ color: "tan" }}>
                            Rueil-Malmaison
                        </h6>
                    </Box>
                    <h2 className={`${classes.timeLineYear} ${classes.timeLineItem} `}>
                        2018
                        </h2>
                    <Box component="div" className={classes.timeLineItem}>
                        <h4 variant="h5" aligh="center" className={classes.subHeading}>
                            Niveau Bac S
                        </h4>
                        <p variant="body1" aligh="center" style={{ color: "#00B8E3" }}>
                            Lycée Richelieu
                         </p>
                        <h6 variant="subtitle1" aligh="center" style={{ color: "tan" }}>
                            Rueil-Malmaison
                        </h6>
                    </Box>
                </Box>
            </Box>

            <Box component="header" className={classes.mainContainer}>
                <h3 variant="h4" align="center" className={classes.heading}>
                    Expérience Professionnel
                </h3>
                <Box component="div" className={classes.timeLine}>
                <h2 className={`${classes.timeLineYear} ${classes.timeLineItem} `}>
                        2021
                    </h2>
                    <Box component="div" className={classes.timeLineItem}>
                        <h4 variant="h5" aligh="center" className={classes.subHeading}>
                            Développeur / Intégrateur Web en Alternance
                        </h4>
                        <p variant="body1" aligh="center" style={{ color: "#00B8E3" }}>
                            Microwebmedia
                         </p>
                        <h6 variant="subtitle1" aligh="center" style={{ color: "tan" }}>
                            Clichy
                        </h6>
                    </Box>
                    <h2 className={`${classes.timeLineYear} ${classes.timeLineItem} `}>
                        Depuis 2019
                    </h2>
                    <Box component="div" className={classes.timeLineItem}>
                        <h4 variant="h5" aligh="center" className={classes.subHeading}>
                            Vendeur
                        </h4>
                        <p variant="body1" aligh="center" style={{ color: "#00B8E3" }}>
                            Sushi Shop
                         </p>
                        <h6 variant="subtitle1" aligh="center" style={{ color: "tan" }}>
                            Rueil-Malmaison
                        </h6>
                    </Box>
                </Box>
            </Box>


        </>
    )
}

export default Resume
