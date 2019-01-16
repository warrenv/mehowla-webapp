import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { object, array } from 'prop-types'
import Song from './song'

const styles = {
  root: {
    flexGrow: 1,
  },
  discover: {
    paddingTop: '1.5rem',
  },
  container: {
    marginTop: '2rem',
  },
}

class Discover extends Component {
  render () {
    const { classes, songs = [] } = this.props

    return (
      <div className={classes.discover}>
        <Typography className="playlist-title" align="center" variant="h5" color="inherit">
          Now Playing Around The World
        </Typography>
        <Grid container className={classes.container} spacing={24} style={{ padding: 24 }}>
          { songs.map((song, idx) => (
            <Grid item key={idx} xs={12} sm={12} lg={12} xl={12}>
              <Song className="song" first={!!idx} {...song} classes={classes} />
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}

Discover.propTypes = {
  songs: array,
  classes: object,
}

const mapStateToProps = (state) => ({
  songs: state.discover,
})

export default connect(mapStateToProps)(withStyles(styles)(Discover))
