import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Main = () => {
    const classes = useStyles();

    return (
        <>
            <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="center"
            >
                <Grid item xs={12} className="bar u-text-center title">Gift EC</Grid>
                <div className="module-spacer--medium"/>
                <Grid item xs={12} md={6}>
                    <img src="/images/Ring.jpg" className="image" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <div>
                        <h3>プレゼント1</h3>
                        <p>プレゼントを選ぶ</p>
                    </div>
                </Grid>
                <div className="module-spacer--medium"/>
                <Grid item xs={12} md={6}>
                    <img src="/images/Present.jpg" className="image"/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div>
                        <h3>プレゼント2</h3>
                        <p>プレゼントを選ぶ</p>
                    </div>
                </Grid>
                <div className="module-spacer--medium"/>
                <Grid item xs={12} md={6}>
                    <img src="/images/Ring.jpg" className="image"/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div>
                        <h3>プレゼント3</h3>
                        <p>プレゼントを選ぶ</p>
                    </div>
                </Grid>
            </Grid>
            <div className="module-spacer--medium"/>
        </>
    )
}

export default Main
