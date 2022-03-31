const create = React.createElement;

const h1 = create(
    "h1",
    {key: 1},
    "Con lo visto hasta ahora"
)
const h2 = create(
    "h2",
    {key: 2},
    "Replica este HTML"
)
const h3 = create(
    "h3",
    {key: 3},
    "Usando"
)
const h4 = create(
    "h4",
    {key: 4},
    "React"
)
const footer = create(
    "footer",
    {key: 5},
    "Suerte!"
)
const div = create(
    "div",
    {key: 5},
    [h1,h2,h3,h4,footer]
)


ReactDOM.render(div,document.getElementById("root"))

// otra forma de hacer esto mas facil seria
// const create = React.createElement ReactDOM.render( 
    // <div> 
    //     <h1>Con lo visto hasta ahora</h1> 
    //     <h2>Replica este HTML</h2> 
    //     <h3>Usando</h3> 
    //     <h4>React.js</h4> 
    //     <footer>Suerte!</footer> 
    //     </div>, 
    //     document.getElementById("root") )
