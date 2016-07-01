import './css/picnic.min.css'
import './js/superagent_setup'

import { h, render, Component } from 'preact'
import Router from 'preact-router';

import { getPath, route } from './js/helpers'
import auth from './js/auth'

import NavBar from './js/navbar'
import Home from './js/home'
import AuthPage from './js/authPage'
import Question from './js/question'

const NotFound = props => <div>
                            <p>The requested URL was not found on our server.</p>
                            <h1>404 Error</h1>
                            <h3>Where&#39;s the page, Lebowski? Where&#39;s the page?</h3>
                            <p style="text-align: right;" class="author">- The Big Lebowski (1998)</p>
                          </div>
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

              <NotFound default />
            </Router>
          </div>
        </main>
      </div>
    )
  }
}

render(<App />, document.getElementById('react-app'))
