import React from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import SubmitButton from './SubmitButton'

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
  logo: {
    width: '50%',
    marginTop: '-4rem',
    marginBottom: 10,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  submitContainer: {
    paddingTop: theme.spacing.unit * 3,
  },
})

class Home extends React.Component {
  state = {
    username: null,
    isLoading: false,
    usuario: null
  }

  handleUsuario = (ev) => {
    const username = ev.target.value
    this.setState({ ...this.state, username })
  }

  handleSubmit = () =>{
    this.setState({ ...this.state, isLoading: true })
  }

  render() {
    const { classes } = this.props

    const { isLoading, username } = this.state

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <img src="assets/logo_v1.png" className={classes.logo} />
            <Typography variant="headline">Busque um artista</Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="username">digite o usuário</InputLabel>
                <Input
                  id="username"
                  name="username"
                  autoFocus
                  onChange={this.handleUsuario}
                />
              </FormControl>
              <div className={classes.submitContainer}>
                <SubmitButton
                  type="button"
                  text="Buscar Usuário"
                  onClick={this.handleSubmit}
                  disabled={!usuario || isLoading}
                  isLoading={isLoading}
                />
              </div>
            </form>
          </Paper>
          <Artista/>
        </main>
      </React.Fragment>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)
