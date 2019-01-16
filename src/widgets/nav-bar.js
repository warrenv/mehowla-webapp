import React from 'react'
import { object } from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: 'center',
  },
}

const NavBar = ({ classes }) =>
  <div className={classes.root}>
    <AppBar className={`${classes.appbar} nav-bar`} position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" align="center">
            MeHowla
        </Typography>
      </Toolbar>
    </AppBar>
  </div>

NavBar.propTypes = {
  classes: object,
}
export default withStyles(styles)(NavBar)
