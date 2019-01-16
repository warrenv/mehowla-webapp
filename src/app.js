import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import store from './store'
import { Footer, NavBar } from './widgets'
import { Playlist } from './features/playlist'
import { Discover } from './features/discover'

class App extends Component {
  render () {
    return (
      <div>
        <Provider store={store()}>
          <Router>
            <div>
              <NavBar />
              <Route exact path="/" component={Playlist} />
              <Route exact path="/discover" component={Discover} />
              <Footer />
            </div>
          </Router>
        </Provider>
      </div>
    )
  }
}

export default App
