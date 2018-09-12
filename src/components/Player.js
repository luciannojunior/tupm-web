import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import PlayerInfo from './PlayerInfo';

const styles = theme => ({
  root: {
    margin: 1,
  }
})

const Player = ({ classes, text, isLoading, ...props }) => (
  <Paper className={classes.paper}>
    <PlayerInfo/>
    <Typography variant="headline">Busque um Player</Typography>
  </Paper>
)

export default withStyles(styles)(Player)
