import React from 'react'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    margin: 1,
  }
})

const PlayerInfo = ({ classes, name, instruments, city }) => (
  <Paper className={classes.paper}>
    <Typography variant="headline">Luciano Júnior</Typography>
  </Paper>
)

export default withStyles(styles)(PlayerInfo)
