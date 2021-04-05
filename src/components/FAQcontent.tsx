import React from "react";
import {
    Box,
    Grid,
    Typography,
    useTheme,
    makeStyles,
    useMediaQuery
} from "@material-ui/core";

const FAQContentData = [
    {
        id : 0,
        component : "h5",
        content : "What is DWC?",
        child : [
            {
                id : 0,
                component : "body1",
                content : "The Dalton Writing Center is a supportive organization that provides writing assistance for students. We offer consultations of different length and a variety of writing-focused programs. We are prepared to work with writers on a variety of genres (including assignments for any class), and we are also prepared to work with writers during any stage of their writing processes (to brainstorm, develop, and revise). The Writing Center does not edit writing, but we do help writers develop a plan of action so that they can continue working and revising even after the session.."
            },
           
        ]
    },
    {
        id : 1,
        component : "h5",
        content : "How can DWC help me?",
        child : [
            {
                id : 0,
                component : "body1",
                content : "It is helpful to have a focused audience to preview your writing. Receiving feedback on your writing is one of the critical aspects of revision, and discussion with DWC consultants can help you develop and expand your writing abilities."
            },
        ]
    },
    {
        id : 2,
        component : "h5",
        content : "Will you correct my grammar?",
        child : [
            {
                id : 0,
                component : "body1",
                content : "We sometimes will, but it will not be the prioritization of a consultation. We will be happy to work with you on your self-editing skills by helping you identify grammatical errors you are likely to make in your own writing and providing you strategies for correction."
            },
        ]
    },
    {
        id : 3,
        component : "h5",
        content : "Who are the consultants?",
        child : [
            {
                id : 1,
                component : "body1",
                content : "The consultants are senior 3 students who have attended education course and experienced in various kinds of writing used in the Dalton Academy."
            },
        ]
    },
    
]

const usePolicyContentStyle = makeStyles((theme) => {
    header : {

    }
})

function usePaddingQuery(){
    
}

function FAQContent(){
    const theme = useTheme();
    const classes = usePolicyContentStyle()
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
            FAQContentData.map(({ id, component, content, child }) => {
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

export { FAQContent }