import React, {useState} from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import 'date-fns';
import Head from "next/head";

const useStyles = makeStyles(theme => ({
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '5em',
    borderRadius: '5',
  },
  item: {
    // width:'100%',
    marginBottom:'10px'
  },
  quoteContainer: {
    padding: '2em',
    width: '100%',
    backgroundColor: theme.palette.common.fon,
  },

  quoteCard: {
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    // padding: '10em',
    width: '500px',
    [theme.breakpoints.down('xs')]: {
      // padding: '8em 0',
      // borderRadius: 0,
      width: '100%',
    },
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.orange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down('sm')]: {
      height: 40,
      width: 225,
    },

  },
  button: {
    borderRadius: 50,
    color: '#fff',
    textTransform: 'none',
    backgroundColor: theme.palette.common.orange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
    width: '100%',

  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  },
  img:{
    marginBottom: '2em',
    width:'30%',
    [theme.breakpoints.down('sm')]: {
      width: '45%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },

  }

}))

export default function Photos(props) {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title key={'title'}>
          фото | СпасТрак
        </title>
        <meta
          name={'description'}
          key={'description'}
          content={'Служба эвакуации в Ижевске'}
        />
        <meta property={'og:title'} content={'Фото'} key={'og:title'}/>
        {/*добавляем open graph превью для SEO. Подробности в www.ogp.me */}
        <meta property={'og:url'} content={'spastruck.ru/photos'} key={'og:url'}/>
        {/*добавляем ссылку на страницу сайта */}
        <link rel={'canonical'} key={'canonical'} href={'spastruck.ru/photos'}/>
        {/*дефолтный главный адрес страницы. Зависит от настроек DNS*/}
      </Head>

      <Grid container alignItems={'center'} justify={'space-evenly'} className={classes.quoteContainer}>
        <img alt={'photo'} src={'/assets/f1.jpg'} className={classes.img}/>
        <img alt={'photo'} src={'/assets/f2.jpg'} className={classes.img}/>
        <img alt={'photo'} src={'/assets/f3.jpg'} className={classes.img}/>
        <img alt={'photo'} src={'/assets/f4.jpg'} className={classes.img}/>
      </Grid>
      </>
  )
}
