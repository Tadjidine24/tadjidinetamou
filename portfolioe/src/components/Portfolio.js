import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from "@material-ui/core";
import Navbar from "./Navbar";
import { mergeClasses } from '@material-ui/styles';

import Comp from "./comp";

import project1 from "../image/file/images/IGN3D.png";
// import project2 from "../image/file/images/connect4.png"
import project3 from "../image/file/images/AEV-RENOV.png"


// theme =>
const useStyles = makeStyles(({
    mainContainer: {
        background: "rgba(0, 0, 0, 0.5)",
        height: "100%",

    }, cardContainer: {
        maxWidth: 345,
        margin: "5rem auto"
    }
}))


const Portfolio = () => {
    const classes = useStyles();

    return (
        <>
            <Box component="div" className={mergeClasses.mainContainer}>
                <Navbar />
                <Comp />

                <Grid container justify="center">
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="Project 1" height="auto" image={project1} />
                                <CardContent>
                                    <h4 gutterBottom>
                                        IGN3D (site conçu pour un client durant mon alternance avec WordPress)
                                    </h4>
                                    <p color="textSecondary" component="p">
                                        Entreprise de désinfection vous informe sur les méthodes d'Hygiène 3D et vous propose un service de désinfection certifié et approuvé depuis plusieurs décennies
                                    </p>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://ign3d.fr">
                                        Le Site Internet ici
                                    </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="Project 1" height="auto" image={project3} />
                                <CardContent>
                                    <h4 gutterBottom variant="h5">
                                        AEV RENOV (site conçu pour un client (couleur du site à sa demande) durant mon alternance avec WordPress)
                                    </h4>
                                    <p color="textSecondary" component="p">
                                        Entrepreneur spécialisé dans l'isolation à Saint-Malo
                                        Ils vous apportent conseils et expertises dans la recherche d'économie d'économie, de confort supplémentaire ou simplement d'embellissement.
                                    </p>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://aev-renovation.fr">
                                    Le Site Internet ici
                                    </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Portfolio
