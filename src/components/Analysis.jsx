import React from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green,white } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
      margin: {
        margin: theme.spacing(1),
        color: "white",
        fontSize: "15px",
      },
    }));

    const theme = createMuiTheme({
      palette: {
        primary: green,
      },
    });

const Analysis = () => {
    const classes = useStyles();

    return (
        <div className="u-text-center">
            <ThemeProvider theme={theme}>
                    <Button variant="contained" color="primary" className={classes.margin}>
                    <a href="https://chatbot-4ad3e.web.app/" className="link">
                        どんなGiftがいいか診断する
                    </a>
                    </Button>
            </ThemeProvider>
            <div className="module-spacer--medium" />
        </div>
    )
}

export default Analysis
