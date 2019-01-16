import { describe } from 'riteway'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import dom from 'cheerio'

import { Playlist } from './playlist'

const render = ReactDOMServer.renderToStaticMarkup

const createPlaylist = ({
  title = 'the playlist title',
  songs = [
    { title: 'song #1' },
    { title: 'song #2' },
    { title: 'song #3' },
  ],
} = {}) => ({ title, songs })

describe('src/features/playlist/playlist', async assert => {
  const $ = dom.load(render(<Playlist {...createPlaylist()} />))

  assert({
    given: 'a playlist',
    should: 'render playlist title',
    actual: $('.playlist-title').length,
    expected: 1,
  })
})
