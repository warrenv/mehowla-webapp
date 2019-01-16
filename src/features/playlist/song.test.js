import { describe } from 'riteway'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import dom from 'cheerio'

import Song from './song'

const render = ReactDOMServer.renderToStaticMarkup

describe('src/features/playlist/song', async assert => {
  const song = { id: '1', artist: 'anonymous', title: 'number one with a bullet' }
  const $ = dom.load(render(<Song {...song} />))

  assert({
    given: 'a song',
    should: 'render the song title',
    actual: $('.title').length,
    expected: 1,
  })

  assert({
    given: 'a song',
    should: 'render the artist',
    actual: $('.artist').length,
    expected: 1,
  })

  assert({
    given: 'a song',
    should: 'render the audio controls',
    actual: $('.controls').length,
    expected: 1,
  })
})
