import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { object, func, string } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  player: {
    height: '1.5rem',
  },
}

class Song extends Component {
  constructor (props) {
    super(props)
    this.onPlay = this.onPlay.bind(this)
  }

  onPlay (e) {
    this.props.playSong(e.currentTarget.dataset.songid)
  }

  render () {
    const { classes, id, title, artist } = this.props

    return (
      <div>
        <Grid container spacing={24} style={{ padding: 1 }}>
          <Grid className="title" item xs={12} sm={12} lg={4} xl={4}>
            {title}
          </Grid>
          <Grid item className="artist" xs={12} sm={12} lg={3} xl={3}>
            {artist}
          </Grid>
          <Grid item className="controls" xs={12} sm={12} lg={5} xl={5}>
            <audio className={classes.player} onPlay={this.onPlay} data-songid={id} controls="controls">
              <source src={`/songs/${id}`} />
            </audio>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Song.propTypes = {
  id: string,
  title: string,
  artist: string,
  src: string,
  playSong: func,
  classes: object,
}

export default withStyles(styles)(Song)
