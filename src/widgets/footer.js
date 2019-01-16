import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home'
import ViewListIcon from '@material-ui/icons/ViewList'

const styles = {
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
}

class Footer extends Component {
  render () {
    const { classes } = this.props

    return (
      <BottomNavigation
        showLabels
        className={classes.stickToBottom}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Playlist"
          value="playlist"
          className="playlist"
          icon={<HomeIcon />}
        />

        <BottomNavigationAction
          component={Link}
          to="/discover"
          label="Discover"
          value="discover"
          className="discover"
          icon={<ViewListIcon />}
        />
      </BottomNavigation>
    )
  }
}

Footer.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Footer)
