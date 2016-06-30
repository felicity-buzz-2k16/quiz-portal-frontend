import './css/picnic.min.css'
import './js/superagent_setup'

import { h, render, Component } from 'preact'
import Router from 'preact-router';

import { getPath, route } from './js/helpers'
import auth from './js/auth'

import NavBar from './js/navbar'
import AuthPage from './js/authPage'

var Page1 = props => <h1>Hi Page1</h1>
var Page2 = props => <h1>Hi Page2 {props.id}</h1>
const NotFound = props => <h1>Sorry, could not find the page with URL <code>{props.url}</code></h1>

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
              <Page1 path={getPath('/')} />

              <AuthPage path={getPath('/auth')} login={auth.login}/>
              <AuthPage path={getPath('/auth/register')} register login={auth.login}/>
              <div path={getPath('/logout')} ref={() => auth.logout()}/>

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
