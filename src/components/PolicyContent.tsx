import React from "react";
import {
    Box,
    Grid,
    Typography,
    useTheme,
    makeStyles,
    useMediaQuery
} from "@material-ui/core";

const PolicyContentData = [
    {
        id : 0,
        component : "h5",
        content : "How to make appointment",
        child : [
            {
                id : 0,
                component : "body1",
                content : "Students may set up an appointment via Calendy, Wechat or Email. The official E-mail address is included in the members section of this website."
            },
            {
                id : 1,
                component : "body1",
                content : "The students from Dalton Academy in particular would receive an E-mail from one of the consultants based on the grouping policy."
            },
            {
                id : 2,
                component : "body1",
                content : "Please book the appointment 24 hours prior and send the work before the consultation. The time schedule of consultants are available on Calendy."
            },
        ]
    },
    {
        id : 1,
        component : "h5",
        content : "Consultation Form",
        child : [
            {
                id : 0,
                component : "body1",
                content : "The main form of consultation is face-to-face, along with video/voice calls and WeChat message depending on situation."
            },
        ]
    },
    {
        id : 2,
        component : "h5",
        content : "Cancellation of Consultations",
        child : [
            {
                id : 0,
                component : "body1",
                content : "Both you and your consultant may propose a cancellation/reschedule of the meeting at least two hours prior to the meeting."
            },
            {
                id : 1,
                component : "body1",
                content : "You and your consultants may also choose not to attend the scheduled meeting. If the consultee or consultant has not arrived after 10mins, the waiting party may leave. Please contact your consultant to explain what happened ASAP."
            },
        ]
    },
    {
        id : 3,
        component : "h5",
        content : "Tutors Do Not Proofread",
        child : [
            {
                id : 1,
                component : "body1",
                content : "Your consultant may reject any form of consultation involving only proofread. Consultants would not revise your paper for you and requesting only grammar check."
            },
        ]
    },
    {
        id : 4,
        component : "h5",
        content : "Contacting Faculty",
        child : [
            {
                id : 0,
                component : "body1",
                content : "Any further confusion or complaints you have about your consultant and consultations. Please do not hesitate to reach out to our DWC faculty either at thomas@i.pkuschool.edu.cn or the faculty office located in west building 6th floor east wing. The faculty will arrange meeting to resolve the issue."
            },
        ]
    },
    {
        id : 5,
        component : "h5",
        content : "Future (NOT included in website)",
        child : [
            {
                id : 0,
                component : "body1",
                content : "Able to choose consultant? Every consultant have avaliable time where the consultee could meet according to the time? Walk in? Specific room?  ",

             
   
            },
      
        ],
    
    }
]

const usePolicyContentStyle = makeStyles((theme) => {
    header : {

    }
})

function usePaddingQuery(){
    
}

function PolicyContent(){
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
            PolicyContentData.map(({ id, component, content, child }) => {
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

export { PolicyContent }