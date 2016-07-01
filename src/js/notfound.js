import { h } from 'preact'

var quoteArray = [
  "God help us; we're in the hands of engineers.",
  "Always remember, Frodo, the page is trying to get back to its master. It wants to be found.",
  "Hello. My name is Inigo Montoya. You killed my page. Prepare to die.",
  "Error messages! Why'd it have to be error messages?!",
  "I'm as mad as hell, and I'm not going to take this anymore!",
  "PC Load Letter? What the #%@! does that mean?!",
  "I'm sorry, Dave. I'm afraid I can't do that.",
  "It's the one that says 'Page not found'.",
  "Welcome to This Page. The first rule of This Page is: you do not talk about This Page.",
  "The hyperdrive motivator has been damaged. It's impossible to view this page!",
  "I've got a feeling we're not in Kansas anymore.",
  "Where's the page, Lebowski? Where's the page?"
];

var authorArray = [
  "The Jurassic Park",
  "The Lord of The Rings",
  "The Princess Bride",
  "Indiana Jones",
  "Network",
  "Office Space",
  "2001: A Space Odessey",
  "Pulp Fiction",
  "Fight Club",
  "Star Wars",
  "The Wizard of Oz",
  "The Big Lebowski"
];


const NotFound = props => {
  
  var len = quoteArray.length, marker = Math.round(Math.random() * (len - 1));

  var shownQuote = quoteArray[marker], shownAuth = authorArray[marker];
  
  return(
    <div>
      <p>The requested URL <code>{props.url}</code> was not found on our server.</p>
      <h1>404 Error</h1>
      <h3>{shownQuote}</h3>
      <p style={{textAlign: 'right'}} class="author">- {shownAuth}</p>
    </div>
  )
}

export default NotFound
