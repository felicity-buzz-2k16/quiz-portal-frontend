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
      <Link href='/b/42' class='pseudo button'>Page 2</Link>
      <Link href='/auth' class='button'>Login/Register</Link>
    </div>
  </nav>
)

export default NavBar
