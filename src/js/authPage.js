import { h, Component } from 'preact'
import { route } from 'preact-router'

var username;
export default class AuthPage extends Component {
  constructor(props) {
    super(props)
    this.state = {error: false}
    // Bind the event handlers to the correct 'this'
    this.submit = this.submit.bind(this)
  }
  submit(e, type) {
    e.preventDefault();
    const { name, email, password } = this.state;
    switch (type) {
    case 'login':
      request.post('/auth/login')
             .send({email, password})
             .end((err, res) => {
               if (err) this.setState({error: true});
               else {
                 username = res.body.name;
                 this.props.login(res.body.token)
               }
             })
      break;
    case 'register':
      request.post('/auth/register')
             .send({name, email, password})
             .end((err, res) => {
               if (err) this.setState({error: true});
               else {
                 username = res.body.name;
                 this.props.login(res.body.token)
               }
             })
      break;
    }
  }
  render(props, state) {
    return (
      <div class='tabs two'>
        <input id='login-tab' type='radio' name='auth-tab-group' checked={!props.register} />
        <label class='pseudo button toggle' style={{width: '50%'}}
               htmlFor='login-tab' onClick={() => route('/auth/')}>
          Login
        </label>

        <input id='register-tab' type='radio' name='auth-tab-group' checked={props.register}/>
        <label class='pseudo button toggle' style={{width: '50%'}}
               htmlFor='register-tab' onClick={() => route('/auth/register')}>
          Register
        </label>

        {state.error && <h2 class='full'><span class='full label error'>Invalid credentials</span></h2>}
        <div class='row'>
          <form onSubmit={e => this.submit(e, 'login')}>
            <input onInput={this.linkState('email')}  type='email' placeholder='Email'/>
            <input onInput={this.linkState('password')}  type='password'/>
            <button type='submit'>Login</button>
          </form>
          <form onSubmit={e => this.submit(e, 'register')}>
            <input onInput={this.linkState('name')}  placeholder='Name'/>
            <input onInput={this.linkState('email')} type='email' placeholder='Email'/>
            <input onInput={this.linkState('password')}  type='password'/>
            <button type='submit'>Register</button>
          </form>
        </div>
      </div>
    )
  }
}
