import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Grid, Paper,Button,useMediaQuery, Divider} from '@material-ui/core/';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '65%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        display: 'flex',
        alignContent: 'space-between',
        alignItems: 'center',
        width: '110%',
      }
  }),
);

function ControlledAccordions() {
const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation = {0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Socratic Seminar</Typography>
          <Typography className={classes.secondaryHeading}>Click to see</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Paper className = {classes.paper} elevation = {0} >
            <Grid container alignContent="space-between" alignItems="flex-start" spacing = {2} direction="column">
               
                <Grid item>
                    <Typography component = 'h5' >研讨会满分宝典｜I read this before my last socratic seminar, and...</Typography>
                </Grid>
                <Grid item>
                    <Link href={ 'https://mp.weixin.qq.com/s/drKUt0ywFnue86HRo8N1RQ' }  color="primary" variant = 'body1'>
                        View
                    </Link>
                </Grid>
                <Divider></Divider>
                <Grid item>
                    <Typography component = 'h5' >Seminar背后的真相竟是... | The Secret Behind Seminar</Typography>
                </Grid>
                <Grid item>
                    <Link href={ 'https://mp.weixin.qq.com/s/ktA132RlyLiebUSR6tw38w' }  color="primary" variant = 'body1'>
                        View
                    </Link>
                </Grid>
            </Grid>
        </Paper>
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation = {0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Annotation</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Paper className = {classes.paper} elevation = {0} >
            <Grid container alignContent="space-between" alignItems="flex-start" spacing = {2} direction="column">
               
                <Grid item>
                    <Typography component = 'h5' >Smart Reading: Annotate Wisely</Typography>
                </Grid>
                <Grid item>
                    <Link href={ 'https://mp.weixin.qq.com/s/6lndlaNlSsACit9fxX0Gxg' }  color="primary" variant = 'body1'>
                        View
                    </Link>
                </Grid>
                <Divider></Divider>
            </Grid>
        </Paper>
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation = {0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>College Application</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Paper className = {classes.paper} elevation = {0} >
            <Grid container alignContent="space-between" alignItems="flex-start" spacing = {2} direction="column">
               
                <Grid item>
                    <Typography component = 'h5' >申请季的建议 | Preparing for College Applications: Tips from Senior 3s</Typography>
                </Grid>
                <Grid item>
                    <Link href={ 'https://mp.weixin.qq.com/s/KnxGHWTP_Jh6LSGm6N092w' }  color="primary" variant = 'body1'>
                        View
                    </Link>
                </Grid>
                <Divider></Divider>

            </Grid>
        </Paper>
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} elevation = {0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Data Report</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Paper className = {classes.paper} elevation = {0} >
            <Grid container alignContent="space-between" alignItems="flex-start" spacing = {2} direction="column">
               
                <Grid item>
                    <Typography component = 'h5' >年终数据报告 | Dalton Writing Center Data Report</Typography>
                </Grid>
                <Grid item>
                    <Link href={ 'https://mp.weixin.qq.com/s/blcvXpTBv_XSHQu8Uic5aw' }  color="primary" variant = 'body1'>
                        View
                    </Link>
                </Grid>
                <Divider></Divider>
                <Grid item>
                    <Typography component = 'h5' >学段数据报告 1 | Quarterly Data Report 1</Typography>
                </Grid>
                <Grid item>
                    <Link href={ 'https://mp.weixin.qq.com/s/oqm0jeVejZ3S0eUPmyUXPQ' }  color="primary" variant = 'body1'>
                        View
                    </Link>
                </Grid>
                <Divider></Divider>
                <Grid item>
                    <Typography component = 'h5' >学段数据报告 2 | Quarterly Data Report 2</Typography>
                </Grid>
                <Grid item>
                    <Link href={ 'https://mp.weixin.qq.com/s/FWakgann_ihtFgCORJps9w' }  color="primary" variant = 'body1'>
                        View
                    </Link>
                </Grid>
                <Divider></Divider>
            </Grid>
        </Paper>
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} elevation = {0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>PEEL paragraph</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Paper className = {classes.paper} elevation = {0} >
            <Grid container alignContent="space-between" alignItems="flex-start" spacing = {2} direction="column">
               
                <Grid item>
                    <Typography component = 'h5' >"PEEL OFF" the PEEL paragraph (上)</Typography>
                </Grid>
                <Grid item>
                    <Link href={ 'https://mp.weixin.qq.com/s/NV-nYi62KoISaWkKY0g2yw' }  color="primary" variant = 'body1'>
                        View
                    </Link>
                </Grid>
                <Divider></Divider>
                <Grid item>
                    <Typography component = 'h5' >"PEEL OFF" the PEEL Paragraph (下)</Typography>
                </Grid>
                <Grid item>
                    <Link href={ 'https://mp.weixin.qq.com/s/U_Q5y8EgAwFyGYtNJ_f_5Q' }  color="primary" variant = 'body1'>
                        View
                    </Link>
                </Grid>
                <Divider></Divider>

            </Grid>
        </Paper>
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} elevation = {0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Scientific Writing</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Paper className = {classes.paper} elevation = {0} >
            <Grid container alignContent="space-between" alignItems="flex-start" spacing = {2} direction="column">
               
                <Grid item>
                    <Typography component = 'h5' >Quick Introduction to Science Writing</Typography>
                </Grid>
                <Grid item>
                    <Link href={ 'https://mp.weixin.qq.com/s/O4P-c47DOozSZevGMuYKEA' }  color="primary" variant = 'body1'>
                        View
                    </Link>
                </Grid>
                <Divider></Divider>
                <Grid item>
                    <Typography component = 'h5' >Abstract | Scientific Writing Instruction</Typography>
                </Grid>
                <Grid item>
                    <Link href={ 'https://mp.weixin.qq.com/s/QlTO6kUSATFup51Skek9Zw' }  color="primary" variant = 'body1'>
                        View
                    </Link>
                </Grid>
                <Divider></Divider>
                <Grid item>
                    <Typography component = 'h5' >Introduction | Scientific Writing</Typography>
                </Grid>
                <Grid item>
                    <Link href={ 'https://mp.weixin.qq.com/s/aNqRfSF6xVWGrfelqNp0DA' }  color="primary" variant = 'body1'>
                        View
                    </Link>
                </Grid>
                <Divider></Divider>
                <Grid item>
                    <Typography component = 'h5' >Literature Review | Scientific Writing Instruction</Typography>
                </Grid>
                <Grid item>
                    <Link href={ 'https://mp.weixin.qq.com/s/pP7_is4sVcB4TKztdAQ3IQ' }  color="primary" variant = 'body1'>
                        View
                    </Link>
                </Grid>
                <Divider></Divider>
                <Grid item>
                    <Typography component = 'h5' >Methodology | Scientific Writing Instruction</Typography>
                </Grid>
                <Grid item>
                    <Link href={ 'https://mp.weixin.qq.com/s/-NtuB1xnXEo2z7tOvgfLNw' }  color="primary" variant = 'body1'>
                        View
                    </Link>
                </Grid>
                <Divider></Divider>
                <Grid item>
                    <Typography component = 'h5' >Results | Scientific Writing Instruction</Typography>
                </Grid>
                <Grid item>
                    <Link href={ 'https://mp.weixin.qq.com/s/2uYc821srVyXGhrtym6jVA' }  color="primary" variant = 'body1'>
                        View
                    </Link>
                </Grid>
                <Divider></Divider>
                <Grid item>
                    <Typography component = 'h5' >Discussion | Scientific Writing Instruction</Typography>
                </Grid>
                <Grid item>
                    <Link href={ 'https://mp.weixin.qq.com/s/oVv5zrkns0XuvSDoohNFpQ' }  color="primary" variant = 'body1'>
                        View
                    </Link>
                </Grid>
                <Divider></Divider>
                <Grid item>
                    <Typography component = 'h5' >Conclusion | Scientific Writing Instruction</Typography>
                </Grid>
                <Grid item>
                    <Link href={ 'https://mp.weixin.qq.com/s/K1Ze15bNwukTvku3DRsCjA' }  color="primary" variant = 'body1'>
                        View
                    </Link>
                </Grid>
                <Divider></Divider>

            </Grid>
        </Paper>
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} elevation = {0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Punctuationg</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Paper className = {classes.paper} elevation = {0} >
            <Grid container alignContent="space-between" alignItems="flex-start" spacing = {2} direction="column">
               
                <Grid item>
                    <Typography component = 'h5' >Comma, Semicolon, Colon | Punctuation Instruction</Typography>
                </Grid>
                <Grid item>
                    <Link href={ 'https://mp.weixin.qq.com/s/TL_MpwTcmhbfBuG1y6y-tg' }  color="primary" variant = 'body1'>
                        View
                    </Link>
                </Grid>
                <Divider></Divider>
                <Grid item>
                    <Typography component = 'h5' >Question Mark, Dash, Period | Punctuation Instruction 2(下)</Typography>
                </Grid>
                <Grid item>
                    <Link href={ 'https://mp.weixin.qq.com/s/uKoJ0PvgdDb4ur2TbEsAMQ' }  color="primary" variant = 'body1'>
                        View
                    </Link>
                </Grid>
                <Divider></Divider>
                <Grid item>
                    <Typography component = 'h5' >Parenthesis, Exclamation Mark, Quotation Mark | Punctuation Instruction 3</Typography>
                </Grid>
                <Grid item>
                    <Link href={ 'https://mp.weixin.qq.com/s/ni18IFMHTjZUfy0kOaZtJQ' }  color="primary" variant = 'body1'>
                        View
                    </Link>
                </Grid>
                <Divider></Divider>
            </Grid>
        </Paper>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export {ControlledAccordions}