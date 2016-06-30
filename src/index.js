import './css/picnic.min.css'
import './js/superagent_setup'

import { h, render, Component } from 'preact'
import Router from 'preact-router';

import { getPath } from './js/helpers'

import NavBar from './js/navbar'

var Page1 = props => <h1>Hi Page1</h1>
var Page2 = props => <h1>Hi Page2 {props.id}</h1>
const NotFound = props => <h1>Sorry, could not find the page with URL <code>{props.url}</code></h1>

class App extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <main style={{padding: '80px 0.5em'}}>
          <div style={{maxWidth: '960px', margin: 'auto'}}>
            <Router>
              <Page1 path={getPath('/')} />
              <Page2 path={getPath('/b/:id?')} />
              <NotFound default />
            </Router>
          </div>
        </main>
      </div>
    )
  }
}

render(<App />, document.getElementById('react-app'))
