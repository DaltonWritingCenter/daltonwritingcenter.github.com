import * as React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    SvgIcon,
    useTheme
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu";
import DWCIcon from "./Dwc";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import InvertColorsIcon from '@material-ui/icons/InvertColors';


const useAppBarStyle = makeStyles((theme) => ({
    appBar : {
        width : "100%",
        top : 0,
        left : 0,
        //backgroundImage : "linear-gradient(180deg, black, transparent)",
        //backgroundColor : "transparent",
        transition : "0.3s all",
    },
    toolBar : {
        paddingRight : theme.spacing(1)
    },
    icons : {
        margin : theme.spacing(0, 0),
    },
    dwcIcon : {
        height : "2em",
        width : "2em",
        [theme.breakpoints.up("sm")] : {
            marginRight : theme.spacing(2)
        },
        [theme.breakpoints.down("xs")] : {
            marginRight : theme.spacing(1.5)
        }
    },
    title : {
        flexGrow : 1,
        letterSpacing : "0.11rem",
        fontWeight : "bold",
        fontSize : "1.3rem",
        userSelect : "none",
    },
    backDrop: {
        backdropFilter: "blur(3px)",
        backgroundColor:'rgba(0,0,30,0.4)'
    },
}))

function AppTopBar(){
    const classes = useAppBarStyle();
    const theme = useTheme();

    const [isScrollToTop, setIsScrollToTop] = useState(false);

    useEffect(() => {
        let changeAppBarColor = () => {
            if (window.pageYOffset <= 0){
                setIsScrollToTop(true);
            } else {
                setIsScrollToTop(false);
            }
        }

        changeAppBarColor()
        document.addEventListener("scroll", changeAppBarColor);

        return () => {
            document.removeEventListener("scroll", changeAppBarColor)
        }
    })

    return (
        <AppBar
            position = "fixed"
            elevation = { isScrollToTop ? 0 : 3}
            className = { classes.appBar }
            style = {{
                backgroundColor : isScrollToTop ? "transparent" : theme.palette.primary.main,
                // backgroundColor : 'transparent'，
                // backdropFilter:  "blur(80px)",
                // backgroundColor : 'transparent'
                // BackdropFilter: 'blur(100px)'

            }}>
            <Toolbar className = { classes.toolBar }>
                <SvgIcon className = { classes.dwcIcon } component = { DWCIcon } />
                <Typography variant = "button" component = "div" className = { classes.title }>
                    symposium
                </Typography>
                <IconButton edge="end" color = "inherit" className = { classes.icons }>
                    <Brightness4Icon />
                </IconButton>
                <IconButton edge="end" color = "inherit" className = { classes.icons }>
                    <InvertColorsIcon />
                </IconButton>
                <IconButton edge="end" color = "inherit" className = { classes.icons }>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export { AppTopBar };
