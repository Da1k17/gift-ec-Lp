// import React from 'react';
// import Button from '@material-ui/core/Button';
// import {makeStyles} from "@material-ui/styles";

// const useStyles = makeStyles({
//   "button": {
//     backgroundColor: "#00E6D6",
//     color: "#000",
//     fontSize: "16px",
//     height: 48,
//     marginBottom: 16,
//     width: 256
//   }
// })

// const HeroText = () => {
//   const classes = useStyles();

//   return (
//     <>
//     <section className="hero">
//         <div>
//             <figure>
//               <img src="/images/hero.jpg" className="hero" alt="ヒーローイメージ"  style={{height: "100%"}}/>
//             </figure>
//             <div className="catch">
//                 <h2>もう一段階上のGiftを送りたいあなたへ</h2>
//                 <Button className={classes.button} variant="contained">
//                   <a href="https://gift-ec.web.app/" target="_blank" className="link">
//                     Giftを見てみる
//                   </a>
//                 </Button>
//             </div>
//       </div>
//     </section>
//     <div className="module-spacer--small" />
//     </>
//   )
// }

// export default HeroText

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
  {
    url: '/images/hero.jpg',
    title: 'Giftを見てみる',
    width: '100%',
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      marginBttom: '60px',
    },
  },
  image: {
    position: 'relative',
    height: 800,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 800,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
    [theme.breakpoints.down('xs')]: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const HeroText = ()  =>{
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        {images.map((image) => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
          >
            <a href="https://gift-ec.web.app/" target="_blank">
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </a>
          </ButtonBase>
        ))}
      </div>
      <div className="module-spacer--medium" />
    </>
  );
}

export default HeroText
