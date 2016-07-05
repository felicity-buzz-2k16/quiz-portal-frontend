import { h } from 'preact'
import Link from './link'
import auth from './auth'
import * from './authPage'

var NavBar = props => (
  <nav class='demo'>
    <Link href='/' class='brand'>
      <span>Quiz Portal</span>
    </Link>
    <input id='bmenub' type='checkbox' class='show'/>
    <label htmlFor='bmenub' class='burger pseudo button'>&#8801;</label>
    <div class='menu'>
      <Link href="/q" class="pseudo button">Questions</Link>
      {!auth.token ?
        <Link href='/auth' class='button'>Login/Register</Link> :
        <Link href='/logout' class='button'>{authPage.username} Logout</Link>
      }
    </div>
  </nav>
)

export default NavBar
