import * as React from 'react';
import { useState, useEffect } from 'react';
import BackdropFilter from "react-backdrop-filter";
import { makeStyles } from "@material-ui/core/styles";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    SvgIcon,
    useTheme,
    ButtonBase,
    colors,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu";
import DWCIcon from "./Dwc";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import {ThemeProvider, responsiveFontSizes,createMuiTheme} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PolicyIcon from '@material-ui/icons/Policy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import {SimplePopover,SimplePopover2} from '../components/popoverdevelop'
const useAppBarStyle = makeStyles((theme) => ({
    appBar : {
        width : "100%",
        top : 0,
        left : 0,
        // backgroundImage : "linear-gradient(185deg, black, transparent)",
        // backgroundColor : "transparent",
        // transition : "0.3s all",
    },
    toolBar : {
        paddingRight : theme.spacing(1),
        // backgroundcolor: 'transparent'
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
    fullList: {
        width: 'auto',
    },
    list: {
        width: 250,
    },
    navigateButton : {
        color: "white",
        fontWeight : "bold",
        fontSize : "1rem",
        margin :  theme.spacing(0, 1)
    },
    button: {
      margin: theme.spacing(1),
    },
}))

function AppTopBar(){
    const classes = useAppBarStyle();
    const theme = useTheme();
    const [state, setState] = React.useState({
  
        left: false,
    
      });
    const [isScrollToTop, setIsScrollToTop] = useState(false);
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}

          
        >
          <List>
            {[' '].map((text, index) => (
              <ListItem key={text} >
                {/* <ListItemIcon> */}
                    <Button href="../homepage/homepage.html"  startIcon={<HomeIcon/>} ClassName={classes.button}>
                        {/* <Typography align = 'left'> */}
                        <Typography display = 'inline'>Homepage　　　　　</Typography>   
                        {/* </Typography> */}

                    </Button>

                {/* </ListItemIcon> */}
                
              <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <List>
            {[''].map((text, index) => (
              <ListItem key={text}>
                    <Button href="../member/member.html" startIcon={<EventSeatIcon/>} ClassName={classes.button}>
                          <Typography>Book meeting　　　</Typography>
                    </Button>
                
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <List>
            {[''].map((text, index) => (
              <ListItem key={text}>
                    <Button href="../Events/Events.html" startIcon={<DateRangeIcon/>} ClassName={classes.button}>
                          <Typography>Events/Resources</Typography>
                    </Button>
                
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
    
          <Divider />
    
          <List>
            {[''].map((text, index) => (

               <ListItem key={text}>
                    <Button href="../policy/policy.html" startIcon={<PolicyIcon/>} ClassName={classes.button}>
                          <Typography>Policy　　　　　　　</Typography>
                    </Button>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <List>
            {[''].map((text, index) => (

               <ListItem key={text}>
                    <Button href="../FAQs/FAQs.html" startIcon={<ContactSupportIcon/>} ClassName={classes.button}>
                          <Typography>FAQs　　　　　　　　</Typography>
                    </Button>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );

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
                // backgroundColor : 'transparent',
                backdropFilter:  "blur(20px)",
                // backgroundColor : 'transparent'
                // BackdropFilter: 'blur(100px)'
                WebkitBackdropFilter: "blur(20px)"

            }}>
                            
            <Toolbar className = { classes.toolBar }>
            
   
                
                <SvgIcon className = { classes.dwcIcon } component = { DWCIcon } />
                <Typography variant = "button" component = "div" className = { classes.title }>
                    symposium
                </Typography>
                {/* <IconButton edge="end" color = "inherit" className = { classes.icons }> */}
                    {/* <Brightness4Icon /> */}
                    <SimplePopover></SimplePopover>
                {/* </IconButton> */}
                {/* <IconButton edge="end" color = "inherit" className = { classes.icons }> */}
                    <SimplePopover2></SimplePopover2>
                {/* </IconButton> */}

            {[''].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton edge="end" color = "inherit" onClick={toggleDrawer(anchor, true) }>{anchor}<FormatListBulletedIcon /></IconButton>
                <Drawer  open={state[anchor]} onClose={toggleDrawer(anchor, false)} style = {{backdropFilter:  "blur(18px)", backgroundColor : 'transparent', WebkitBackdropFilter: "blur(20px)"}}>
                  {list(anchor)}
                </Drawer>
    
            </React.Fragment>
          ))}
                        <Toolbar >
          
          
        </Toolbar >

            </Toolbar>
        </AppBar>
    )
}

export { AppTopBar };
