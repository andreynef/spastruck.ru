import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Head from "next/head";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  textContainer: {
    // width: '500px',
    marginLeft:'20px',
  },
  orderContainer: {
    backgroundColor:'white',
  },

  vehicle: {
    width: '400px',
    justifyContent:'center',
    margin:'0 0 0 4em',
    [theme.breakpoints.down('sm')]: {
      margin:'2em 0 0 0',
      width: '300px'
    },

  },
  vehicleImg: {
    width: '100%',
  },

  mainContainer: {
    // padding: '1em 0 0 0',
    backgroundColor:'#b8e0bc',
  },

  firstContainer: {
    padding:'3em 5em',
    backgroundColor: '#fafafa',
    backgroundImage: `url('/assets/f33.jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    // backgroundAttachment: 'fixed',//фикс картинка при прокрутке
    backgroundRepeat: 'no-repeat',

    width: '100%',
    [theme.breakpoints.down('md')]: {
      padding: '2em 2em',
    },
  },
  vehicleContainer: {
    backgroundColor:theme.palette.common.fon,
  },
  firstButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 85,
    width: 330,
    fontSize: '2.2rem',
    margin:'2em auto 6em auto',
    backgroundColor: theme.palette.common.orange,
    [theme.breakpoints.down('sm')]: {
      height: 55,
      width: 180,
      fontSize: '1.7rem',
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },
  },

}))

export default function Index(props) {
  const classes = useStyles();
  const theme = useTheme();//теперь есть доступ к стрелке learnMore из этого комполнента
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));//вызываем библиотеку для адаптива
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));//вызываем библиотеку для адаптива

  return (
    <Grid container direction={'column'} className={classes.mainContainer}>
      <Head>
        <title key={'title'}>
          Служба эвакуации в Ижевске | СпасТрак
        </title>
        <meta
          name={'description'}
          key={'description'}
          content={'Эвакуатор в Ижевске'}
        />
        <meta property={'og:title'} content={'Служба эвакуации в Ижевске | СпасТрак'} key={'og:title'}/>{/*добавляем open graph превью для SEO. Подробности в www.ogp.me */}
        <meta property={'og:url'} content={'spastruck.ru/'} key={'og:url'}/>{/*добавляем ссылку на страницу сайта */}
        <link rel={'canonical'} key={'canonical'} href={'spastruck.ru/'}/>{/*дефолтный главный адрес страницы. Зависит от настроек DNS*/}

      </Head>
      {/*--------first Block--------*/}
      <Grid item container className={classes.firstContainer} style={{position:'relative'}}>
        <Grid item>
          <Typography
            variant={'h1'}
            style={{color:'white', lineHeight:1.3, fontSize:matchesXS?'1.8rem':matchesSM? '2.1rem':null}}
          >
            Все виды эвакуации автотранспорта <br/>
            <span style={{lineHeight:1.2, fontSize:matchesXS?'1.5rem':matchesSM? '1.6rem':'1.9rem'}}>от 1 до 40 тонн</span>
          </Typography>
        </Grid>
        <Grid item container style={{marginTop: '2em'}}>
          <Button
            variant={'contained'}
            className={classes.firstButton}
            component={'a'}
            href={'tel: 89048350675'}
          >
            Позвонить
            <img alt={'company logo'} src={'/assets/telephoneWhite.svg'} style={{width:25, height:25, marginLeft:20}} />
          </Button>
          <Typography
            variant={'h1'}
            style={{position:'absolute',bottom:'1em', right:'2em', padding:'0 1em', color:'white', lineHeight:1.3, fontSize:matchesXS?'1.8rem':matchesSM? '2.1rem':null}}
          >
            Внедорожная эвакуация <br/>
          </Typography>
        </Grid>

      </Grid>

      {/*--------Vehicle Block--------*/}
      <Grid item className={classes.vehicleContainer}>
        <Grid container direction={'column'} alignItems={'center'} style={{padding:'4em 2em'}}>
          <Grid item>
            <Typography variant={'h2'} align={'center'} style={{fontSize:'2rem', marginBottom:'1.5em'}}>
              Цены:
            </Typography>
          </Grid>
          <Grid item>
            <Grid item container justify={'space-around'}>
              <Grid item className={classes.textContainer}>
                <Typography variant={'subtitle1'} style={{fontSize: matchesSM? '1rem':null, color:'black'}}>
                  - Легковые авто <span style={{fontWeight: 700}}>от 1300р.</span><br/>
                  - Кроссоверы и минивены <span style={{fontWeight: 700}}>от 1500р</span><br/>
                  - Джипы <span style={{fontWeight: 700}}>от 1800р</span><br/>
                  - Газели, микроавтобусы <span style={{fontWeight: 700}}>от 2000р</span><br/>
                  - Грузовые, спецтехника <span style={{fontWeight: 700}}>по договоренности</span><br/>
                  - Межгород <span style={{fontWeight: 700}}>от 25 руб/км</span><br/>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.quoteContainer}>
      </Grid>
    </Grid>
  );
}
