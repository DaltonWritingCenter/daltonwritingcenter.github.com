import React from "react";
import {
    Box,
    Grid,
    Typography,
    useTheme,
    makeStyles,
    useMediaQuery,
    Paper,
    Card
} from "@material-ui/core";
import { TabletorAccaordin } from '../components/WechatArticle'
const EventContentData = [
    {
        id : 0,
        component : "h5",
        content : "Wechat articles",
        child : [
            {
                id : 0,
                component : "body1",
                content : "Check out the Wechat article we've published" ,
                
                
            },
            
         
        ]
    },
    // {
    //     id : 1,
    //     component : "h5",
    //     content : "Others",
    //     child : [
    //         {
    //             id : 0,
    //             component : "body1",
    //             content : "Updating..."
    //         },
    //     ]
    // },
    
]



const useEventContentStyle = makeStyles((theme) => {
    header : {

    }
})

function usePaddingQuery(){
    
}

function EventContent(){
    const theme = useTheme();
    const classes = useEventContentStyle()
    const { up, down, between, values } = theme.breakpoints;
    const { tablet, desktop, laptop } = values;

    const isLaptop = useMediaQuery(between(tablet, laptop));
    const isDesktop = useMediaQuery(between(laptop, desktop));



    return (
    <Box padding = {
            isLaptop
                ? theme.spacing(6, 5, 6)
                : theme.spacing(5, 5, 8)
        }>
        <Grid container spacing = { 4 }>{
            EventContentData.map(({ id, component, content, child }) => {
                return (
                <Grid item container key = { id }>
                    <Box>
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
                     {/* <Typography
            
                        paragraph
                        color = "secondary"
                        component = "div">
                        <Box fontWeight = "bold">
                            { 'fuck' }
                        </Box>
                    </Typography> */}
                    
                </Box>
                </Grid>)
            })

        }</Grid>
        <TabletorAccaordin></TabletorAccaordin>
        <h1>　</h1>

    </Box>
    )

}

export { EventContent }