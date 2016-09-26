// CSS files
import 'picnic' // CSS framework
import './css/main.css'

// JS one time include files
import './js/superagent_setup'

import { h, render, Component } from 'preact'
import Router from 'preact-router';

import { getPath, route } from './js/helpers'
import auth from './js/auth'

import NavBar from './js/navbar'
import Home from './js/home'
import AuthPage from './js/authPage'
import Question from './js/question'
import NotFound from './js/notfound'
import ScoreBoard from './js/scoreboard'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {authToken: auth.token}

    auth.onLogin = () => this.setState({authToken: auth.token}, () => route('/'))
    auth.onLogout = () => this.setState({authToken: auth.token}, () => route('/'))
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

              <AuthPage path={getPath('/auth')} login={auth.login}/>
              <AuthPage path={getPath('/auth/register')} register login={auth.login}/>
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
