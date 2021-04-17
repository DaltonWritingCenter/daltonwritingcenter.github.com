import React from "react";
import {
    Box,
    Grid,
    Typography,
    useTheme,
    makeStyles,
    useMediaQuery
} from "@material-ui/core";

const HomepageContentData = [
    {
        id : 0,
        component : "h5",
        content : "What DWC does",
        child : [
            {
                id : 0,
                component : "body1",
                content : "The Dalton Writing Center is committed to inspiring students to improve writing, thinking and communicating from within the student body. Our aim is to create safe spaces for brave students to share, express and discuss their work, words, ideas, and learning."
            },
           
        ]
    },
    {
        id : 1,
        component : "h5",
        content : "What DWC provides",
        child : [
            {
                id : 0,
                component : "body1",
                content : "Consultations of thesis statements, presentations, and seminars, as well as building students' confidence."
            },
        ]
    },
   
    
]

const useHomepageContentStyle = makeStyles((theme) => {
    header : {

    }
})

function usePaddingQuery(){
    
}

function HomepageContent(){
    const theme = useTheme();
    const classes = useHomepageContentStyle()
    const { up, down, between, values } = theme.breakpoints;
    const { tablet, desktop, laptop } = values;

    const isLaptop = useMediaQuery(between(tablet, laptop));
    const isDesktop = useMediaQuery(between(laptop, desktop));



    return (<Box padding = {
            isLaptop
                ? theme.spacing(8, 8, 8)
                : theme.spacing(8, 6, 6)
        }>
        <Grid container spacing = { 4 }>{
            HomepageContentData.map(({ id, component, content, child }) => {
                return (<Grid item container key = { id }><Box>
                    <Typography
                        variant = { component as any }
                        paragraph
                        color = "secondary"
                        component = "div">
                        <Box fontWeight = "bold">
                            { content }
                        </Box>
                    </Typography>
                    { child ?
                        child.map(({ id, component, content }) => {
                            return (<Grid item key = { id }><Box>
                                <Typography
                                    variant = { component as any }
                                    paragraph
                                    component = "div">
                                    { content }
                                </Typography>
                            </Box></Grid>)
                        })
                    : ""
                    }
                </Box></Grid>)
            })
        }</Grid>
    </Box>)

}

export { HomepageContent }