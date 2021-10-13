import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@material-ui/core";


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


const Comp = () => {
    const classes = useStyles();
    return (
        <>
            <Box component="header" className={classes.mainContainer}>
                <h3 variant="h4" align="center" className={classes.heading}>
                    Compétences Technique
                </h3>
                <Box component="div" className={classes.timeLine}>
                    <h1 variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem} `}>
                        95%
                    </h1>
                    <Box component="div" className={classes.timeLineItem}>
                        <h4 variant="h5" aligh="center" className={classes.subHeading}>
                            Front-End
                        </h4>
                        <p variant="body1" aligh="center" style={{ color: "#00B8E3" }}>
                            HTML/CSS3, React-Native
                        </p>
                    </Box>
                </Box>
                <h1 variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem} `}>
                    75%
                </h1>
                <Box component="div" className={classes.timeLineItem}>
                    <h4 variant="h5" aligh="center" className={classes.subHeading}>
                        Web Design
                    </h4>
                    <p variant="body1" aligh="center" style={{ color: "#00B8E3" }}>
                        WordPress, Photoshop, Illustrator
                    </p>
                </Box>
                <Box component="div" className={classes.timeLine}>
                <h1 variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem} `}>
                    65%
                </h1>
                <Box component="div" className={classes.timeLineItem}>
                    <h4 variant="h5" aligh="center" className={classes.subHeading}>
                        Back-End
                    </h4>
                    <p variant="body1" aligh="center" style={{ color: "#00B8E3" }}>
                        PHP, Laravel, Symfony, React JS, JQuery, Javascript
                    </p>
                </Box>
                </Box>
        </Box>
        </>
    )
}

export default Comp
