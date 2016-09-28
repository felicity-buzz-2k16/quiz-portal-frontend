import { h, Component } from 'preact'

class ScoreBoard extends Component {
  constructor(props) {
    super(props)
    this.state = { time: Date.now() }
  }

  componentWillMount() {
    this.load()
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if ((Date.now() / 1000) % 30 <= 1) this.load()
      this.setState({time: Date.now()})
    }, 1000)
  }

  load() {
    request.get('/scoreboard')
           .end((err, res) => {
             if (err) {
               this.setState({error: 'The scoreboard could not be loaded'})
             }
             else {
               this.setState({scores: res.body, error: ''})
             }
           })
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>Scoreboard</h1>
        <table style="width: 100%">
          <tr>
            <th>Username</th>
            <th>Score</th>
          </tr>
          {this.state.scores && this.state.scores.map(user => (
              <tr>
               <td>{user.name}</td>
               <td>{user.score}</td>
             </tr>
          ))}
        </table>
        <p>Refreshing scoreboard in {parseInt(30 - (this.state.time/1000) % 30)} seconds...</p>
      </div>
    )
  }
}

export default ScoreBoard
