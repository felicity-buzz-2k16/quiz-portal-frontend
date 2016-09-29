import { h } from 'preact'
import Link from './link'

var NavBar = props => (
  <nav class='demo'>
    <Link href='/' class='brand'>
      <span>Quiz Portal</span>
    </Link>
    <input id='bmenub' type='checkbox' class='show'/>
    <label htmlFor='bmenub' class='burger pseudo button'>&#8801;</label>
    <div class='menu'>
      <span>
        {auth.name}
      </span>
      <Link href="/q" class="pseudo button">Questions</Link>
      <Link href="/scoreboard" class="pseudo button">Scoreboard</Link>
      {!auth.email ?
        <Link href='/login' class='button'>Login/Register</Link> :
        <Link href='/logout' class='button'>Logout</Link>
      }
    </div>
  </nav>
)

export default NavBar
