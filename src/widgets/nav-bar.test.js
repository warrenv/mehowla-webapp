import { describe } from 'riteway'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import dom from 'cheerio'
import NavBar from './nav-bar'

const render = ReactDOMServer.renderToStaticMarkup

describe('src/widgets/nav-bar', async assert => {
  const $ = dom.load(render(<NavBar />))

  assert({
    given: 'no props',
    should: 'render the NavBar',
    actual: $('.nav-bar').length,
    expected: 1,
  })
})
