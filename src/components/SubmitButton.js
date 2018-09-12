import React from 'react'
import { withStyles, Button } from '@material-ui/core'

import CircularProgress from '@material-ui/core/CircularProgress'

const styles = theme => ({
  root: {
    margin: 1,
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
  buttonProgress: {
    color: 'secondary',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
})

const SubmitButton = ({ classes, text, isLoading }) => (
  <div className={classes.wrapper}>
    <Button
      type="submit"
      fullWidth
      variant="raised"
      color="secondary"
      disabled={isLoading}
      className={classes.root}
    >
      {text}
    </Button>
    {isLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
  </div>
)

export default withStyles(styles)(SubmitButton)
