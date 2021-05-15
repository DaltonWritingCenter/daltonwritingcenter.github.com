import React from 'react';
import { makeStyles, Theme, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Grid, Paper,Button,useMediaQuery} from '@material-ui/core/';
import {ControlledAccordions} from './WechatAccordin'
import SwipeableViews from 'react-swipeable-views';
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const useIndexContentStyle = makeStyles((theme) => ({
  card : {
      width : "100%",
      //height : "110vh",
      position : "relative",
      borderRadius : 0,
      boxShadow : "none"
  },
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
  }
}))


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,

  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    display: 'flex',
    alignContent: 'space-between',
    alignItems: 'center',
    width: '110%',
  }
}));

function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  const theme = useTheme();
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing = {2}>
      <Grid item>
        
      </Grid>
       <div className={classes.root}>
      <AppBar position="static" elevation = {0} color = "transparent">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Socratic Seminar" {...a11yProps(0)} />
          <Tab label="Annotation" {...a11yProps(1)} />
          <Tab label="College Application" {...a11yProps(2)} />
          <Tab label="Data Report" {...a11yProps(3)} />
          <Tab label="PEEL paragraph" {...a11yProps(4)} />
          <Tab label="Scientific Writing" {...a11yProps(5)} />
          <Tab label="Punctuation" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
      <TabPanel value={value} index={0}>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="flex-start"
        spacing = {0}>
            <Grid item xs = {12} md = {12}>
              <Paper className = {classes.paper} elevation = {0} >
                <Grid container alignContent="space-between" alignItems="center" spacing = {2} >

                  <Grid item>
                    <Button disableElevation 
                      color = "primary" variant = "contained" href = { 'https://mp.weixin.qq.com/s/drKUt0ywFnue86HRo8N1RQ' }
                      >
                        Click to view
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography component = 'h5' >研讨会满分宝典｜I read this before my last socratic seminar, and...</Typography>
                  </Grid>
                </Grid>
              </Paper>
              <Paper className = {classes.paper} elevation = {0}>
                <Grid container alignContent="space-between" alignItems="center" spacing = {2}>

                  <Grid item>
                    <Button disableElevation 
                      color = "primary" variant = "contained" href = { 'https://mp.weixin.qq.com/s/ktA132RlyLiebUSR6tw38w' }
                      >
                        Click to view
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography component = 'h5' >Seminar背后的真相竟是... | The Secret Behind Seminar</Typography>
                  </Grid>
                </Grid>
              </Paper>
              
            </Grid>
          </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="flex-start"
        spacing = {0}>
            <Grid item xs = {12} md = {12}>
              <Paper className = {classes.paper} elevation = {0}>
                <Grid container alignContent="space-between" alignItems="center" spacing = {2}>

                  <Grid item>
                    <Button disableElevation 
                      color = "primary" variant = "contained" href = { 'https://mp.weixin.qq.com/s/6lndlaNlSsACit9fxX0Gxg' }
                      >
                        Click to view
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography component = 'h5' >Smart Reading: Annotate Wisely</Typography>
                  </Grid>
                </Grid>
              </Paper>

            </Grid>
          </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="flex-start"
        spacing = {0}>
            <Grid item xs = {12} md = {12}>
              <Paper className = {classes.paper} elevation = {0}>
                <Grid container alignContent="space-between" alignItems="center" spacing = {2}>

                  <Grid item>
                    <Button disableElevation 
                      color = "primary" variant = "contained" href = { 'https://mp.weixin.qq.com/s/KnxGHWTP_Jh6LSGm6N092w' }
                      >
                        Click to view
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography component = 'h5' >申请季的建议 | Preparing for College Applications: Tips from Senior 3s</Typography>
                  </Grid>
                </Grid>
              </Paper>

            </Grid>
          </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="flex-start"
        spacing = {0}>
            <Grid item xs = {12} md = {12}>
              <Paper className = {classes.paper} elevation = {0}>
                <Grid container alignContent="space-between" alignItems="center" spacing = {2}>

                  <Grid item>
                    <Button disableElevation 
                      color = "primary" variant = "contained" href = { 'https://mp.weixin.qq.com/s/blcvXpTBv_XSHQu8Uic5aw' }
                      >
                        Click to view
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography component = 'h5' >年终数据报告 | DWC Data Report</Typography>
                  </Grid>
                </Grid>
              </Paper>
              <Paper className = {classes.paper} elevation = {0}>
                <Grid container alignContent="space-between" alignItems="center" spacing = {2}>

                  <Grid item>
                    <Button disableElevation 
                      color = "primary" variant = "contained" href = { 'https://mp.weixin.qq.com/s/oqm0jeVejZ3S0eUPmyUXPQ' }
                      >
                        Click to view
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography component = 'h5' >学段数据报告 1 | Quarterly Data Report 1</Typography>
                  </Grid>
                </Grid>
              </Paper>
              <Paper className = {classes.paper} elevation = {0}>
                <Grid container alignContent="space-between" alignItems="center" spacing = {2}>

                  <Grid item>
                    <Button disableElevation 
                      color = "primary" variant = "contained" href = { 'https://mp.weixin.qq.com/s/FWakgann_ihtFgCORJps9w' }
                      >
                        Click to view
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography component = 'h5' >学段数据报告 2 | Quarterly Data Report 2</Typography>
                  </Grid>
                </Grid>
              </Paper>
              
              
            </Grid>
          </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="flex-start"
        spacing = {0}>
            <Grid item xs = {12} md = {12}>
              <Paper className = {classes.paper} elevation = {0}>
                <Grid container alignContent="space-between" alignItems="center" spacing = {2}>

                  <Grid item>
                    <Button disableElevation 
                      color = "primary" variant = "contained" href = { 'https://mp.weixin.qq.com/s/NV-nYi62KoISaWkKY0g2yw' }
                      >
                        Click to view
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography component = 'h5' >"PEEL OFF" the PEEL paragraph (上)</Typography>
                  </Grid>
                </Grid>
              </Paper>
              <Paper className = {classes.paper} elevation = {0}>
                <Grid container alignContent="space-between" alignItems="center" spacing = {2}>

                  <Grid item>
                    <Button disableElevation 
                      color = "primary" variant = "contained" href = { 'https://mp.weixin.qq.com/s/U_Q5y8EgAwFyGYtNJ_f_5Q' }
                      >
                        Click to view
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography component = 'h5' >"PEEL OFF" the PEEL Paragraph (下)</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="flex-start"
        spacing = {0}>
            <Grid item xs = {12} md = {12}>
              <Paper className = {classes.paper} elevation = {0}>
                <Grid container alignContent="space-between" alignItems="center" spacing = {2}>

                  <Grid item>
                    <Button disableElevation
                      color = "primary" variant = "contained" href = { 'https://mp.weixin.qq.com/s/O4P-c47DOozSZevGMuYKEA' }
                      >
                        Click to view
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography component = 'h5' >Quick Introduction to Science Writing</Typography>
                  </Grid>
                </Grid>
              </Paper>
              <Paper className = {classes.paper} elevation = {0}>
                <Grid container alignContent="space-between" alignItems="center" spacing = {2}>

                  <Grid item>
                    <Button disableElevation 
                      color = "primary" variant = "contained" href = { 'https://mp.weixin.qq.com/s/QlTO6kUSATFup51Skek9Zw' }
                      >
                        Click to view
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography component = 'h5' >Abstract | Scientific Writing Instruction</Typography>
                  </Grid>
                </Grid>
              </Paper>
              <Paper className = {classes.paper} elevation = {0}>
                <Grid container alignContent="space-between" alignItems="center" spacing = {2}>

                  <Grid item>
                    <Button disableElevation 
                      color = "primary" variant = "contained" href = { 'https://mp.weixin.qq.com/s/aNqRfSF6xVWGrfelqNp0DA' }
                      >
                        Click to view
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography component = 'h5' >Introduction | Scientific Writing</Typography>
                  </Grid>
                </Grid>
              </Paper>
              <Paper className = {classes.paper} elevation = {0}>
                <Grid container alignContent="space-between" alignItems="center" spacing = {2}>

                  <Grid item>
                    <Button disableElevation 
                      color = "primary" variant = "contained" href = { 'https://mp.weixin.qq.com/s/pP7_is4sVcB4TKztdAQ3IQ' }
                      >
                        Click to view
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography component = 'h5' >Literature Review | Scientific Writing Instruction</Typography>
                  </Grid>
                </Grid>
              </Paper>
              <Paper className = {classes.paper} elevation = {0}>
                <Grid container alignContent="space-between" alignItems="center" spacing = {2}>

                  <Grid item>
                    <Button disableElevation 
                      color = "primary" variant = "contained" href = { 'https://mp.weixin.qq.com/s/2uYc821srVyXGhrtym6jVA' }
                      >
                        Click to view
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography component = 'h5' >Results | Scientific Writing Instruction</Typography>
                  </Grid>
                </Grid>
              </Paper>
              <Paper className = {classes.paper} elevation = {0}>
                <Grid container alignContent="space-between" alignItems="center" spacing = {2}>

                  <Grid item>
                    <Button disableElevation 
                      color = "primary" variant = "contained" href = { 'https://mp.weixin.qq.com/s/oVv5zrkns0XuvSDoohNFpQ' }
                      >
                        Click to view
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography component = 'h5' >Discussion | Scientific Writing Instruction</Typography>
                  </Grid>
                </Grid>
              </Paper>
              <Paper className = {classes.paper} elevation = {0}>
                <Grid container alignContent="space-between" alignItems="center" spacing = {2}>

                  <Grid item>
                    <Button disableElevation 
                      color = "primary" variant = "contained" href = { 'https://mp.weixin.qq.com/s/K1Ze15bNwukTvku3DRsCjA' }
                      >
                        Click to view
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography component = 'h5' >Conclusion | Scientific Writing Instruction</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="flex-start"
        spacing = {0}>
            <Grid item xs = {12} md = {12}>
              <Paper className = {classes.paper} elevation = {0}>
                <Grid container alignContent="space-between" alignItems="center" spacing = {2}>

                  <Grid item>
                    <Button disableElevation 
                      color = "primary" variant = "contained" href = { 'https://mp.weixin.qq.com/s/TL_MpwTcmhbfBuG1y6y-tg' }
                      >
                        Click to view
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography component = 'h5' >Comma, Semicolon, Colon | Punctuation Instruction</Typography>
                  </Grid>
                </Grid>
              </Paper>
              <Paper className = {classes.paper} elevation = {0}>
                <Grid container alignContent="space-between" alignItems="center" spacing = {2}>

                  <Grid item>
                    <Button disableElevation 
                      color = "primary" variant = "contained" href = { 'https://mp.weixin.qq.com/s/TL_MpwTcmhbfBuG1y6y-tg' }
                      >
                        Click to view
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography component = 'h5' >Question Mark, Dash, Period | Punctuation Instruction 2</Typography>
                  </Grid>
                </Grid>
              </Paper>
              <Paper className = {classes.paper} elevation = {0}>
                <Grid container alignContent="space-between" alignItems="center" spacing = {2}>

                  <Grid item>
                    <Button disableElevation 
                      color = "primary" variant = "contained" href = { 'https://mp.weixin.qq.com/s/ni18IFMHTjZUfy0kOaZtJQ' }
                      >
                        Click to view
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography component = 'h5' >Parenthesis, Exclamation Mark, Quotation Mark | Punctuation Instruction 3</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
      </TabPanel>
      </SwipeableViews>
    </div>
    </Grid>
   
  );
}

function Accordin() {
  return(
    <div>hello world!</div>
  )
}

function TabletorAccaordin(){
  let theme = useTheme();
  let { between, down, up, values } = theme.breakpoints;
  let { laptop, tablet } = values;

  let isLargerThanLaptop = useMediaQuery(up(laptop));
  let isLaptop = useMediaQuery(between(tablet, laptop));
  let isSmallerThanLaptop = useMediaQuery(down(tablet));

  let Tablet = SimpleTabs()
  let AccordinForPhone = ControlledAccordions()
  if (isLargerThanLaptop){
      return Tablet;
  } else if (isLaptop){
      return Tablet;
  } else if (isSmallerThanLaptop){
      return AccordinForPhone;
  } else {
      return AccordinForPhone;
  }
}
export{TabletorAccaordin}