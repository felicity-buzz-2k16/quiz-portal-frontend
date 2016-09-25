import { h, Component } from 'preact'
import { route } from './helpers'
import Link from './link'

export default class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.checkAnswer = this.checkAnswer.bind(this)
  }
  componentWillMount() {
    this.load()
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.qno || nextProps.qno != this.state.qno) this.load(nextProps)
  }
  checkAnswer(e) {
    e.preventDefault()
    const { state } = this;
    request.post(`/question/check/${state.qno}`)
           .send({answer: state.answer})
           .end((err, res) => {
             if (err) {
               if(res.badRequest)
                 this.setState({error: 'You have reached the end of the contest. Congrats!'})
               else if(res.forbidden)
                 this.setState({error: 'You are not allowed to access this question.'})
             }
             else {
               const { result } = res.body
               if (result) route('/q/')
               else this.setState({wrongAnswer: true, error: ''})
             }
           })
  }
  load(nextProps) {
    const { qno } = nextProps || this.props;
    if (qno) {
      request.get(`/question/${qno}`)
             .end((err, res) => {
               if (err) {
                 if(res.badRequest)
                   this.setState({error: 'You have reached the end of the contest. Congrats!'})
                 else if(res.forbidden)
                   this.setState({error: 'You are not allowed to access this question.'})
               }
               else this.setState({...res.body, answer: '', wrongAnswer: false, error: ''})
             })
    } else {
      request.get(`/question/`)
             .end((err, res) => {
               if (err) {
                 if(res.badRequest)
                   this.setState({error: 'You have reached the end of the contest. Congrats!'})
                 else if(res.forbidden)
                   this.setState({error: 'You are not allowed to access this question.'})
               }
               else this.setState({...res.body, answer: '', wrongAnswer: false, error: ''})
             })
    }
  }
  render(props, state) {
    return (
      <div class="flex one three-600">
        <div class="full two-third-600">
          <span>
            <h1>Question {state.qno} : {state.title}</h1>
            {state.error && <article class="label error" style={{padding: '1em', margin: '0.5em', fontSize: '1em'}}>{state.error}</article>}
            {!state.error && <article>{state.body}</article>}
            {!state.error && <article class="card">
              <header>
                <Link class='button' href={`/q/${state.qno - 1}`}>Previous</Link>
                <Link class='button' href={`/q/${state.qno + 1}`} style={{float: 'right'}}>Next</Link>
              </header>
            </article>}
          </span>
        </div>
        <div class="full third-600">
          <form onSubmit={this.checkAnswer}>
            <input value={state.answer} onInput={this.linkState('answer')} placeholder='Answer'/>
            {state.wrongAnswer && <label class='label full error'>Wrong Answer</label>}
            <button type="submit" class="full">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
