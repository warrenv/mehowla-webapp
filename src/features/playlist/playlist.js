import React, { Component } from 'react'
import { connect } from 'react-redux'
import { object, array, func, string } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Song from './song'
import { actions } from './reducers'

const styles = {
  root: {
    flexGrow: 1,
  },
  playlist: {
    paddingTop: '1.5rem',
  },
}

export class Playlist extends Component {
  componentDidMount () {
    this.props.loadPlaylist()
  }

  render () {
    const { classes = {}, title = 'Loading...', songs = [] } = this.props

    return (
      <div className={classes.playlist}>
        <Typography className={`playlist-title`} align="center" gutterBottom={true} color="inherit" variant="title">
          {title}
        </Typography>
        <Grid container spacing={24} style={{ padding: 24 }}>
          { songs.map((song, idx) => (
            <Grid item key={idx} xs={12} sm={12} lg={12} xl={12}>
              <Song className="song" {...song} playSong={this.props.playSong}/>
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}

Playlist.propTypes = {
  songs: array,
  title: string,
  loadPlaylist: func,
  playSong: func,
  classes: object,
}

const mapStateToProps = (state) => ({
  ...state.playlist,
})

const mapDispatchToProps = dispatch => ({
  loadPlaylist: () => dispatch(actions.load()),
  playSong: song => dispatch(actions.play(song)),
  foo: () => {},
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Playlist))
