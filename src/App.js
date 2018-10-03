import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import withStyles from '@material-ui/core/styles/withStyles'

import Artist from './components/Artist'
import './App.css'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Home from './components/Home'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#ffefd7' },
    secondary: { main: '#57c5d0' },
  },
})

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
  }});

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.layout}>
        <Router>
          <MuiThemeProvider theme={theme}>
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={200}
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={Home} />
                      <Route
                        exact
                        path="/artist/:username"
                        component={Artist}
                      />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </MuiThemeProvider>
        </Router>
      </div>
    )
  }
}

export default withStyles(styles)(App)
