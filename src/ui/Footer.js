import React from 'react';
import {makeStyles} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    padding: '20px 0',
    width: '100%',
  },

}));

export default function Footer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));//вызываем библиотеку для адаптива

  return (
    <footer className={classes.footer}>
      <Grid container justifyContent={'center'} >
        <Grid item>
          <Typography variant={'body1'} align={'center'} style={{color: theme.palette.common.blue, fontSize: '1rem'}}>
            {/*<a href={'tel: 89048350675'} style={{textDecoration: 'none', color:'black'}}>8(904)835-0675</a>*/}
            <span style={{color:'white'}}>8(982)123-5062</span>
          </Typography>
          <Typography align={'center'} style={{color: 'white', fontSize: matchesXS?'0.7rem':'0.8rem'}}>
            НПД Шадрин Г.А.
          </Typography>
        </Grid>
      </Grid>
    </footer>
  )
}
