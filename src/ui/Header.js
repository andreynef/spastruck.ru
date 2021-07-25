import React, {useState, useEffect} from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import {useScrollTrigger} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "./Link";


function ElevationScroll(props) {
  const {children} = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {//добавляем доп ключ к стилям
    ...theme.mixins.toolbar,//скопировано из default theme из библиотеки
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1em'
    },

  },
  logoContainer: {
    padding:0,//убрать у обетки кнопки отступы
    // padding: '2em 2em 2em 4em',
    width: '250px',
    '&:hover': {//аналогия с sсss со вложенностью селектора. Убрать затемненность при наведении на лого.
      backgroundColor: 'transparent'
    },
    [theme.breakpoints.down('md')]: {//media для среднего размера экрана
      width: '200px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '120px',
      // padding: '1em 1em 1em 2em',
    },
  },
  logoOwl: {
    // height: '6em',
    width: '80%',
  },
  logoTruck: {
    // height: '6em',
    width: '100%',
  },
  // firstContainer: {
  //   padding:'12em 5em',
  //   backgroundImage: `url(${background})`,
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  //   // backgroundAttachment: 'fixed',//фикс картинка при прокрутке
  //   backgroundRepeat: 'no-repeat',
  //   // height: '60em',
  //   width: '100%',
  //   [theme.breakpoints.down('md')]: {
  //   },
  // },
  tabContainer: {
    // margin: '0 0 0 auto',
    // border: '1px solid red',
  },
  headContainerOne: {
    padding:"2em 2em 0 2em",
    backgroundColor: 'rgba(0,0,0,0.9)',
    // backgroundImage: `url(${head})`,
    // backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // // backgroundAttachment: 'fixed',//фикс картинка при прокрутке
    // backgroundRepeat: 'no-repeat',
    // height: '60em',
    // width: '100%',

    [theme.breakpoints.down('xs')]: {
      padding: '1em 1em 0 1em',
    },
  },
  tab: {
    ...theme.typography.tab,//остальное засунул в глобал и здесь экстенжу
    minWidth: 10,
    margin: '0 0 0 25px',
    color: 'black'
  },
  quote: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    minWidth: 10,
    // margin: '0 25px 0 50px',
    margin: '0 0 0 25px',
    height: 25,
    width: 140,
    color: 'white',
    backgroundColor: "#008000",
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    }
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'blue',
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,//вставляем весь завод и...
    opacity: 0.7,//доп перезапись прозрачности
    '&:hover': {//доп перезапись прозрачности выделенного итема
      opacity: 1
    },
  },
  drawerIconContainer: {
    margin: '0 0 0 auto',
    color:  theme.palette.common.blue,
    '&:hover': {
      // backgroundColor: 'transparent'//убрать кружок
    }
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawer: {
    backgroundColor: theme.palette.common.fon,

  },
  drawerItem: {
    ...theme.typography.tab,//делаем стили дровера схожими на табные
    color: 'black',
    opacity: 0.7,
  },
  drawerItemQuote: {
    ...theme.typography.tab,//делаем стили дровера схожими на табные
    color: 'white',
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {//все текстовые элементы внутри drawerItemSelected
      opacity: 1,
    }
  },
  appBar: {
    zIndex: theme.zIndex.modal,//шапка хеадера будет находиться чуть выше всплывающего меню, ибо меню нельзя сделать частью экрана а только на всю высоту, поэтому решаем только перекрытием и отступом.
    backgroundColor: 'rgba(0,0,0,0.9)',
    // paddingBottom:'1em',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 0,
    },
  },
  socialIconImg: {
    width: '30px',
    height: '30px',
  },
  stickyBoardContainer: {
    backgroundColor:theme.palette.common.fon,
    width:'100%',
  },
}));

//Если нужно застилизовать не весь App с темами итд а только один этот компонент то создаем здесь свои стили в JS формате через тот же makeStyles.
// const useStyles2 = makeStyles({
//   myButton: {
//     border: '1px solid red',
//     width: 550,
//     background: 'linear-gradient(45deg, #f3f3f3 30%, #999999 90%)',
//   },
// })

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();//вызываем библиотеку для адаптива
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);//для адаптива for drawer из настроек материала
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));//вызываем библиотеку для адаптива
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));//вызываем библиотеку для адаптива

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);//установка состояния для меню, якорь на страницы
  const [openMenu, setOpenMenu] = useState(false);//установка состояния для меню, открыто или закрыто

  const handleChange = (e, newValue) => {
    props.setValue(newValue)
  }


  const handleClose = (e) => {/*при закрытии меню, сбрасываем значения обратно на начальные состояния */
    setAnchorEl(null);
    setOpenMenu(false);
  }

  const routes = [//общие аргументы для меню и табов вынесенные в отдельную переменную и используемые в мапинге или др операций с массивами
    {name: 'Главная', link: '/', activeIndex: 0},
    {name: 'Фото', link: '/photos', activeIndex: 1},
  ]


//исправление несовпадаемости открытой страницы и закладки при перезагрузке.
  useEffect(() => {
    [...routes].forEach(route => {//перебор многих условий и установки нужных стейтов. route это условный url. Условия корректного отображения вкладок и открытых страниц url. Если расходятся, то установить стейт чтобы сошлость.
      switch (window.location.pathname) {//есть url открытой страницы прямо сейчас. (Обьяснение есть в refactoredDrafts)
        case `${route.link}`://если этот url равен link'у из перебираемого массива...
          if (props.value !== route.activeIndex) {//...и если нынешнее value не равно значению в перебираемом элементе массива (activeIndex). = открытая страница нахся не на той же активной закладке то ...
            props.setValue(route.activeIndex)//...установить ту вкладку на активную...
            if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {//...доп проверка. Если в перебираемом элементе массива существует selectedIndex и он не равен данному, то индекс переписать на индекс кейса
              props.setSelectedIndex(route.selectedIndex)
            }
          }
          break;
        default:
          break;
      }
    })
  }, [props.value, props.selectedIndex, routes, props]);//слежка за значениями.

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer //обертка для адаптивного выплывающего меню. Скопировано с материала
        disableBackdropTransition={!iOS}//optimize mobile performance
        disableDiscovery={iOS}
        open={openDrawer}//открыт ли он
        onClose={() => setOpenDrawer(false)}//закрывать при срабатывании
        onOpen={() => setOpenDrawer(true)}//открывать при срабатывании
        classes={{paper: classes.drawer}}///добавим свой стиль в завод
      >
        <div className={classes.toolbarMargin}></div>
        {/*подобие брейка-отступа. Кладется в тело дровера прокладка высотой как тот готовый маргин для стики хеадера.*/}
        <List disablePadding>{/*убрать дефолт падингт путем готового завода*/}
          {routes.map(route => (//мапим несколько итемов по шаблону беря данные из массива routes
            <ListItem
              key={`${route}${route.activeIndex}`}
              divider
              button
              // disabled={(route.link==='/services') || (route.link==='/photos')? true:false}
              component={Link}
              href={route.link}
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(route.activeIndex)
              }}
              selected={props.value === route.activeIndex}//проп завода
              classes={route.link==='/quote' ? {root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}:{selected: classes.drawerItemSelected}}//есть в Mui атрибут selected кот take this logic behind the scene.
            >
              <ListItemText
                className={route.link==='/quote' ? classes.drawerItemQuote : classes.drawerItem}
                disableTypography
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}//на клике на кнопку менять состояние
        disableRipple//убрать тень
        className={classes.drawerIconContainer}//уберем кружок
      >
        <MenuIcon
          className={classes.drawerIcon}
        />
      </IconButton>
    </React.Fragment>
  )

  return (
    <>
      {/*1 box*/}
        <Grid container className={classes.headContainerOne} style={{position:'relative'}}>
          <Grid item style={{position:matchesSM?'unset':'absolute', top:'2em', left:'2em',margin:matchesSM?'0 auto':'unset'}}>
            <Button component={Link} href={'/'}  className={classes.logoContainer} onClick={() => {
              props.setValue(0)
            }} disableRipple>{/*обернуть лого в кнопку с онкликом установки value на домашнюю страницу*/}
              <img alt={'company logo'} src={'/assets/logoCropped.png'} className={classes.logoOwl}/>
            </Button>
          </Grid>
          <Grid item container direction={'column'} alignItems={'center'} style={{margin:'0 auto', padding:matchesSM?'2em 0':'4em 0'}}>
            <Typography variant={'h1'} style={{fontSize: matchesXS? '1.2rem':matchesSM?'2.5rem':'3rem', color: 'white', lineHeight:'1.2rem'}}>
              Служба эвакуации
            </Typography>
            <Typography variant={'subtitle1'} style={{fontSize:matchesXS? '1.5rem':'2.6rem', color: 'white',marginTop:'0.8em'}}>
              "СпасТрак"
            </Typography>
            {/*<Typography variant={'subtitle1'} style={{fontSize:matchesXS? '1.5rem':'2.2rem'}}>*/}
            {/*  <a href={'tel: 89821235062'} style={{textDecoration: 'none', color:'white'}}>+7(982)-123-50-62</a>*/}
            {/*</Typography>*/}
          </Grid>
        </Grid>
    {/* 2 box*/}
      <ElevationScroll>{/*обертка шапки хеадера с логикой фикс положения при скролле*/}
        <AppBar position={"sticky"} color={"primary"} className={classes.appBar}>{/*шапка*/}
          <Toolbar disableGutters>{/*тож шапка*/}
            <Grid item className={classes.stickyBoardContainer}>
              <Grid container direction={'column'} alignItems={matchesXS?'left':'center'} style={{padding:'1em'}}>
                <Grid item>
                  <Typography variant={'h2'} align={'center'} style={{fontSize:matchesXS?'1.2rem':'2rem', color:'white', padding:matchesXS?'0.5em 0':'unset'}}>
                    <img alt={'company logo'} src={'/assets/telephoneWhite.svg'} style={{width:matchesXS?15:25, height:matchesXS?15:25, marginRight :10}} />
                    <a href={'tel: 89821235062'} style={{textDecoration: 'none', color:'white', paddingRight:matchesXS?'3em':'unset'}}>+7(982)123-50-62</a>
                    <span style={{position:'absolute', top:0,right:matchesXS?'0':'1em'}}>{drawer}</span>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/*<div className={classes.toolbarMargin}/>/!*добавлен этот элемент со своим стилем дабы исправить дефолтное перекрывание последующего текста. Он создает прослойку под AppBar выталкивая последующий текст в пределы видимости.*!/*/
      }
      {/*<Button className={classes2.myButton}>button</Button>*/
      }
    </>

)
}



