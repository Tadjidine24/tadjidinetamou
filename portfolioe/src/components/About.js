import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@material-ui/core";
import Navbar from "./Navbar";


const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "rgba(0, 0, 0, 0.5) !important",
    },
    heading: {
        color: "#00B8E3",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
    },
    taille: {
        marginLeft: "4rem",
        marginRight: "4rem",
    }

}));


const About = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <h3 align="center" className={classes.heading}>
                    A propos de Moi
                </h3>
                <Box component="div" className={classes.taille}>

                    <Box component="div" className={classes.taille}>
                        <h5 variant="h6" align="center" className={classes.subHeading}>
                            Je suis Etudiant en Web Design et communication graphique à ICAN Design,
                            en troisième année. Je suis en recherche d’un contrat de
                            professionnalisation/d'apprentissage pour
                            cette troisième année à ICAN Design pour obtenir mon Bachelor qui pourra débuter à partir du 08/11/2021 et se déroulera en alternance à partir
                            du 07/02/2022 avec un rythme de 2 semaines en entreprise et 1 semaine à l’école.
                        </h5>
                        <h5 variant="h6" align="center" className={classes.subHeading}>
                            Ma formation en full-stack au Samsung Campus (Epitech) ainsi que mon année en
                            alternance chez MicroWebMedia m'ont permis d'acquérir de nombreuses compétences et de
                            développer une polyvalence dans ces domaines : Full-stack, intégrateur web, flyer, carte de
                            visite, WordPress, Photoshop, Illustrator.
                        </h5>
                        <h5 variant="h6" align="center" className={classes.subHeading}>
                            Motivation, rigueur et détermination sont les maîtres mots de mon comportement
                            professionnel et de ma capacité à apprendre en entreprise. Régulièrement confronté aux
                            aléas du code, je suis capable de gérer les imprévus en toute autonomie. En effet, je possède
                            tous les atouts qui me permettront de réussir dans le rôle que vous voudrez bien me confier.
                            Intégrer votre entreprise représente pour moi un réel enjeu d’avenir dans lequel mon travail
                            et mon honnêteté pourront s’exprimer pleinement.
                        </h5>
                        <p variant="body1" align="center" style={{ color: "#00B8E3" }}>
                            Voici mes Coordonnées :
                        </p>
                        <h6 variant="subtitle1" align="center" style={{ color: "tan" }}>
                            tadjidinetamou@gmail.com
                        </h6>
                        <h6 variant="subtitle1" align="center" style={{ color: "white" }}>
                            0761568802
                        </h6>
                    </Box>


                </Box>
            </Box>
        </>
    )
}

export default About
