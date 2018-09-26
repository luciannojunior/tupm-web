import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import MusicList from './MusicList';

const styles = theme => ({
  root: {
    marginTop: 10
  },
  containerInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: 10
  },
  avatar: {
    borderRadius: '50%',
    '&:hover': {
      opacity: 0.7 
    }
  },
  containerDetails: {
    paddingLeft: 10
  },
  cityTypo: {
    backgroundColor: '#4AC4CD',
    color: '#333',
    padding: 2,
    textTransform: 'uppercase',
    fontSize: '0.8em',
    fontWeight: 'bold'
  }
})

const Artist = ({ classes, text, isLoading, ...props }) => (
  <Paper className={classes.root}>
    <div className={classes.containerInfo}>
      <div className={classes.containerPic}>
        <img src="https://pt.gravatar.com/avatar/e93480bce84892a336f371360e14a31d" alt="" className={classes.avatar}/>
      </div>
      <div className={classes.containerDetails}>
        <Typography variant="title">Bruno Dias</Typography>
        <Typography variant="subheading" className={classes.cityTypo}>Campina Grande, PB</Typography>
      </div>
    </div>
    <div className={classes.containerList}>
      <MusicList/>
    </div>
  </Paper>
)

export default withStyles(styles)(Artist)
