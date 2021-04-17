import * as React from 'react'
import {
    Container,
    Box,
    Button,
    Card,
    CardMedia,
    CardContent,
    Toolbar,
    CardHeader,
    Typography,
    useMediaQuery,
    Paper,
    CssBaseline,
    Grid,
} from "@material-ui/core"
import {
    makeStyles,
    useTheme
} from "@material-ui/core/styles";

//@ts-ignore
import indexImageHeadDesktop from "../img/index/1-desktop.jpg";
//@ts-ignore
import indexImageHeadLaptop from "../img/index/1-laptop.jpg";
//@ts-ignore
import indexImageHeadMobile from "../img/index/1-mobile.jpg";

import { MemberContent } from "../components/MemberContent";
const useIndexContentStyle = makeStyles((theme) => ({
    card : {
        width : "100%",
        // height : "110vh",
        position : "relative",
        borderRadius : 0,
        boxShadow : "none",
        display: 'inline-block',
    },
    Paper : {
        display: 'flex',

    },
    gridContainer : {
        width : "100%",
        margin : theme.spacing(0)},
    picture : {
        height : "105vh"
    },
    content : {
        position : "absolute",
        top: 0,
        paddingTop:  0,
        width : "100%"
    },
    text : {
        userSelect : "none",
    },
    meetingButton : {
        fontWeight : 700,
    },
    gridItem : {
        //width : "33%"
        flexGrow : 1
    },
}))

function useTextPaddingX(){
    let theme = useTheme();
    let { between, down, up, values } = theme.breakpoints;
    let { mobileS, mobileL } = values;

    let isLargerThanMobileLarge = useMediaQuery(up(mobileL));
    let isMobileMediumOrLarge = useMediaQuery(between(mobileS, mobileL));
    let isMobileSmall = useMediaQuery(down(mobileS));

    if (isLargerThanMobileLarge){
        return theme.spacing(4);
    } else if (isMobileMediumOrLarge){
        return theme.spacing(2);
    } else if (isMobileSmall) {
        return theme.spacing(1)
    } else {
        return theme.spacing(4);
    }
}
function useTextMaxWidth(){
    let theme = useTheme();
    let { between, down, up, values } = theme.breakpoints;
    let { laptop, desktop, lg } = values;

    let isDesktop = useMediaQuery(between(laptop, desktop));
    let isLargerThanDesktop = useMediaQuery(up(desktop));

    if (isDesktop){
        return lg;
    } else if (isLargerThanDesktop){
        return desktop;
    } else {
        return "none"
    }
}
function useTextPaddingTop(){
    let theme = useTheme();
    let { between, down, up, values } = theme.breakpoints;
    let { mobileL, laptop, desktop } = values;

    let isSmallerThanTablet = useMediaQuery(down(mobileL));
    let isTabletOrLaptop = useMediaQuery(between(mobileL, laptop));
    let isDesktop = useMediaQuery(between(laptop, desktop));
    let isLargerThanDesktop = useMediaQuery(up(desktop));

    if (isSmallerThanTablet){
        return theme.spacing(4);
    } else if (isTabletOrLaptop){
        return theme.spacing(8);
    } else if (isDesktop){
        return `calc(${theme.spacing(4)} + 3vh)`
    } else if (isLargerThanDesktop){
        return theme.spacing(8);
    } else {
        return theme.spacing(4);
    }
}
function useTextType(): [any, any]{
    let theme = useTheme();
    let { between, down, up, values } = theme.breakpoints;
    let { mobileL, desktop } = values;

    let isLargerThanDesktop = useMediaQuery(up(desktop));
    let isTabletOrLaptopOrDesktop = useMediaQuery(between(mobileL + 25, desktop));
    let isMobile = useMediaQuery(down(mobileL + 25));

    if (isLargerThanDesktop){
        return ["h2", "h5"]
    } else if (isTabletOrLaptopOrDesktop){
        return ["h3", "h6"]
    } else if (isMobile){
        return ["h4", "subtitle1"]
    } else {
        return ["h2", "h5"]
    }
}
function useText(){
    let theme = useTheme();
    let { between, down, up, values } = theme.breakpoints;
    let { mobileL, mobileM, tablet } = values;

    let isLargerThanTablet = useMediaQuery(up(tablet));
    let isTablet = useMediaQuery(between(mobileL, tablet));
    let isMobileLarge = useMediaQuery(between(mobileM, mobileL));
    let isSmallerThanMobileLarge = useMediaQuery(down(mobileM));

    let mainText;

    if (isLargerThanTablet){
        mainText = (<>
            <div>All the assistance you need </div>
            <div>to master writing.</div>
        </>);
    } else if (isTablet || isMobileLarge) {
        mainText = (<>
            <div>All the assistance you</div>
            <div>need to master</div>
            <div>writing.</div>
        </>);
    } else if (isSmallerThanMobileLarge){
        mainText = (<>
            <div>All the assistance</div>
            <div>you need to</div>
            <div>master writing.</div>
        </>)
    } else {
        mainText = (<>
            <div>All the assistance you need </div>
            <div>to master writing.</div>
        </>);
    }

    let subText;

    if (isLargerThanTablet){
        subText = (<>
            <div>The trustworthy voluntary student organization you can</div>
            <div>work with to improve your writing ability. Start meeting today.</div>
        </>)
    } else if (isTablet){
        subText = (<>
            <div>The voluntary student organization </div>
            <div>to improve your writing ability.</div>
            <div>Start meeting today.</div>
        </>)
    } else if (isMobileLarge || isSmallerThanMobileLarge){
        subText = (<>
            <div>The voluntary student organization</div>
            <div>to improve your writing ability.</div>
            <div>Start meeting today.</div>
        </>)
    } else {
        subText = (<>
            <div>The trustworthy voluntary student organization you can</div>
            <div>work with to improve your writing ability. Start meeting today.</div>
        </>)
    }

    return [mainText, subText];
}
function useImageDir(){
    let theme = useTheme();
    let { between, down, up, values } = theme.breakpoints;
    let { laptop, tablet } = values;

    let isLargerThanLaptop = useMediaQuery(up(laptop));
    let isLaptop = useMediaQuery(between(tablet, laptop));
    let isSmallerThanLaptop = useMediaQuery(down(tablet));

    if (isLargerThanLaptop){
        return indexImageHeadDesktop;
    } else if (isLaptop){
        return indexImageHeadLaptop;
    } else if (isSmallerThanLaptop){
        return indexImageHeadMobile;
    } else {
        return indexImageHeadDesktop;
    }
}


function MemberWhole(){
    let theme = useTheme();
    let classes = useIndexContentStyle();
    let textPaddingX = useTextPaddingX();
    let textMaxWidth = useTextMaxWidth();
    let textPaddingTop = useTextPaddingTop();
    let imageDir = useImageDir();
    let [mainTextType, subTextType] = useTextType();
    let [mainText, subText] = useText();

    return (
    // <Paper>
    <Grid
         

            className = { classes.gridContainer }
            container
            justify="center"
            spacing = { 0 }>
        <Grid
                        lg = {12}
                        xl = {12}
                        md = {12}
                        // sm = {12}
                        xs = {12}
                        item
                        className = { classes.gridItem }>
            <Card className = { classes.card }>
    
                <CardMedia
                    className = { classes.picture }
                    image = { imageDir } />
                <CardContent className = { classes.content }>
                    <Toolbar></Toolbar>
                    <Box
                        className = { classes.text }
                        marginX = "auto"
                        paddingTop = { textPaddingTop }
                        paddingX = { textPaddingX }
                        maxWidth = { textMaxWidth }
                        color = "white">
                        <Typography
                            variant = { mainTextType }
                            component = "h1"
                            paragraph><Box fontWeight = "bold">{
                            mainText
                        }</Box></Typography>
                        <Typography
                            variant = { subTextType }
                            component = "h2"
                            paragraph><Box fontWeight = "bold">{
                            subText
                        }</Box></Typography>
                        <Button
                            variant = "contained"
                            color = "primary"
                            size = "large"
                            className = { classes.meetingButton }
                            disableElevation>
                            Start Meeting
                        </Button>
                    </Box>
                </CardContent>
                        
        <MemberContent/>
            </Card>
        </Grid>


    </Grid>

        
    )
}

export { MemberWhole };
