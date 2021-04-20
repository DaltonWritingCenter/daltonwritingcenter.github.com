import React from "react";
import {
    Box,
    Typography,
    Grid,
    SvgIcon,
    makeStyles,
    Divider,
    Link,
    useTheme,
    useMediaQuery
} from "@material-ui/core"
import DWCIcon from "./Dwc"
import MouseOverPopover from "../components/MouseOverPopover"
const useAppBottomBarStyle = makeStyles((theme) => ({
    dwcIcon : {
        width : "4em",
        height : "4em"
    },
    facultyAddress : {
        userSelect : "all"
    },
    gridListLargerThanLaptop : {
        width : `calc(100% - ${ theme.spacing(14) })`
    }
}))
function PoweredByGrid(){
    const classes = useAppBottomBarStyle()
    return (<Grid item>
        <Typography variant = "h6">
            <Box fontWeight = "bold" component = "span">
                Powered By
            </Box>
        </Typography>
        <Typography>
            <Link
                href = "https://reactjs.org/"
                color = "inherit" underline = "always">
                <Box fontWeight = "bold" component = "span">
                    React
                </Box>
            </Link>
            { " from FaceBook" }
        </Typography>
        <Typography>
            <Link
                href = "https://material-ui.com/"
                color = "inherit" underline = "always">
                <Box fontWeight = "bold" component = "span">
                    Material-UI
                </Box>
            </Link>
            { " from community" }
        </Typography>
        <Typography>
            <Link
                href = "https://www.typescriptlang.org/"
                color = "inherit" underline = "always">
                <Box fontWeight = "bold" component = "span">
                    Typescript
                </Box>
            </Link>
            { " from Microsoft" }
        </Typography>
    </Grid>)
}
function DevelopedByGrid(){
    const classes = useAppBottomBarStyle()
    return (<Grid item>
        <Typography variant = "h6">
            <Box fontWeight = "bold" component = "span">
                Developed By
            </Box>
        </Typography>
        <Typography>
            Tan Chuping & Zhai Yuqing
        </Typography>
        <Typography>
            <MouseOverPopover/>
        </Typography>
    </Grid>)
}
function InformationForGrid(){
    const classes = useAppBottomBarStyle()
    return (<Grid item>
        <Typography variant = "h6" component = "div">
            <Box fontWeight = "bold" component = "span">
                Information for
            </Box>
        </Typography>
        <Typography>
            <Link
                href = "#"
                color = "inherit" underline = "always">
            Members
            </Link>
        </Typography>
        <Typography>
            <Link
                href = "#"
                color = "inherit" underline = "always">
            Events
            </Link>
        </Typography>
        <Typography>
            <Link
                href = "#"
                color = "inherit" underline = "always">
            Q & A
            </Link>
        </Typography>
    </Grid>)
}
function AddressGrid(){
    const classes = useAppBottomBarStyle()
    return (<Grid item>
        <Typography variant = "h6" component = "div">
            <Box fontWeight = "bold">
                Dalton Writing Center
            </Box>
        </Typography>
        <Typography>
            HuangZhuang, Haidian Dist.
        </Typography>
        <Typography>
            Beijing, China, 100190
        </Typography>
    </Grid>)
}
function ContactFacultyGrid(){
    const classes = useAppBottomBarStyle()
    return (<Grid item>
        <Typography variant = "h6" component = "div">
            <Box fontWeight = "bold" component = "span">
                Contact DWC Faculty
            </Box>
        </Typography>
        <Typography className = { classes.facultyAddress } component = "a">
            thomas@i.pkuschool.edu.cn
        </Typography>
    </Grid>)
}

function AppBottomBar(){
    const theme = useTheme()
    const classes = useAppBottomBarStyle()
    const { up, down, between, values } = theme.breakpoints;
    const { laptop } = values;

    const isLargerThanLaptop = useMediaQuery(up(laptop));

    return (<Box
            width = { 1 }
            paddingY  = { theme.spacing(6) }
            paddingX = { theme.spacing(6) }
            bgcolor = "primary.main"
            color = "white">
        <Box paddingBottom = { theme.spacing(4) }>
        <Grid container>
            <Grid item>{ isLargerThanLaptop
                ? (<Box paddingRight = { theme.spacing(6) }>
                    <SvgIcon
                        component = { DWCIcon }
                        className = { classes.dwcIcon } />
                </Box>)
                : (<></>)
            }</Grid>
            <Grid
                className = {
                    isLargerThanLaptop
                        ? classes.gridListLargerThanLaptop
                        : ""
                }
                item container
                justify = "space-between"
                spacing = { 4 }>
                <AddressGrid />
                <InformationForGrid />
                <ContactFacultyGrid />
                <DevelopedByGrid />
                <PoweredByGrid />
            </Grid>
        </Grid>
        </Box>
        <Divider light/>
    </Box>)

}


export { AppBottomBar };