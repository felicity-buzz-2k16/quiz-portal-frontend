import { h } from 'preact'

var quotearray = ["God help us; we&#39;re in the hands of engineers.",
  "Always remember, Frodo, the page is trying to get back to its master. It wants to be found.",
  "Hello. My name is Inigo Montoya. You killed my page. Prepare to die.",
  "Error messages! Why&#39;d it have to be error messages?!",
  "I&#39;m as mad as hell, and I&#39;m not going to take this anymore!",
  "PC Load Letter? What the #%@! does that mean?!",
  "I&#39;m sorry, Dave. I&#39;m afraid I can&#39;t do that.",
  "It&#39;s the one that says &#39;Page not found&#39;.",
  "Welcome to This Page. The first rule of This Page is: you do not talk about This Page.",
  "The hyperdrive motivator has been damaged. It&#39;s impossible to view this page!",
  "I&#39;ve got a feeling we&#39;re not in Kansas anymore.",
  "Where&#39;s the page, Lebowski? Where&#39;s the page?"
];
var authorarray = ["The Jurassic Park",
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
var len = quotearray.length;
var marker = Math.round(Math.random() * (len - 1));
var shownquote = quotearray[marker];
var shownauth = authorarray[marker];
const NotFound = props => (
  <div>
    <p>The requested URL <code>{props.url}</code> was not found on our server.</p>
    <h1>404 Error</h1>
    <h3>{shownquote}</h3>
    <p style="text-align: right;" class="author">- {shownauth}</p>
  </div>
)

export default NotFound