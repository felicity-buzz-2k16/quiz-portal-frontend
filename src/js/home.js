import { h } from 'preact'

const Home = props => (
  <div>
    <p>Hello, this is the home page of the quiz portal.</p>
    <p>Please login using the email <i>megh@gmail.com</i> and the password: <i>password</i></p>
    <p>There are currently five questions with the answers being respectively <i>1, 2, 3, 4, 5</i></p>
    <p>To reset the portal delete <i>db.sqlite</i> (in the backend repo folder) and restart the backend server</p>
  </div>
)

export default Home
