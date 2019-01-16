import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { bool, object, string } from 'prop-types'
import Grid from '@material-ui/core/Grid'

const styles = {
  root: {
    flexGrow: 1,
  },
  discover: {
    paddingTop: '1.5rem',
  },
  firstsong: {
    backgroundColor: '#ddd',
  },
  field: {
    paddingLeft: '1rem',
  },
}

const Song = ({ first, classes, timestamp, listener, title, artist }) =>
  <div className={first ? {} : classes.firstsong}>
    <Grid container spacing={24} style={{ padding: 1 }}>
      <Grid className="timestamp" item xs={12} sm={12} lg={2} xl={2}>
        <div className={classes.field}>
          {timestamp}
        </div>
      </Grid>
      <Grid className="listener" item xs={12} sm={12} lg={2} xl={2}>
        <div className={classes.field}>
          {listener}
        </div>
      </Grid>
      <Grid className="title" item xs={12} sm={12} lg={5} xl={5}>
        <div className={classes.field}>
          {title}
        </div>
      </Grid>
      <Grid item className="artist" xs={12} sm={12} lg={3} xl={3}>
        <div className={classes.field}>
          {artist}
        </div>
      </Grid>
    </Grid>
  </div>

Song.propTypes = {
  classes: object,
  first: bool,
  timestamp: string,
  listener: string,
  title: string,
  artist: string,
}
export default withStyles(styles)(Song)
