// CSS files
import 'picnic' // CSS framework
import './css/main.css'

// JS one time include files
import './js/superagent_setup'

import { h, render, Component } from 'preact'
import Router from 'preact-router';

import { getPath, route } from './js/helpers'

import NavBar from './js/navbar'
import Home from './js/home'
import Question from './js/question'
import NotFound from './js/notfound'
import ScoreBoard from './js/scoreboard'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {email: auth.email}

    auth.onLogin = () => this.setState({email: auth.email}, () => route('/'))
    auth.onLogout = () => this.setState({email: auth.email}, () => route('/'))
  }
  render () {
    return (
      <div>
        <NavBar />
        <main style={{padding: '80px 0.5em'}}>
          <div style={{maxWidth: '960px', margin: 'auto'}}>
            <Router>
              <Home path={getPath('/')} />
              <Question path={getPath('/q/:qno?')} />

              <div path={getPath('/login')} ref={() => auth.login()}/>
              <div path={getPath('/logout')} ref={() => auth.logout()}/>

              <ScoreBoard path={getPath('/scoreboard')} />

              <NotFound default />
            </Router>
          </div>
        </main>
      </div>
    )
  }
}

render(<App />, document.getElementById('react-app'))
