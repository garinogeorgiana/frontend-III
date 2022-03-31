const create = React.createElement

const h2 = create(
    "h2",
    {key: 1},
    "Listado"
)
const ul = create(
    "ul",
    {key:2},
)
const li_1 = create(
    "li",
    {key:3},
    "soy"
)
const li_2 = create(
    "li",
    {key:4},
    "una"
)
const li_3 = create(
    "li",
    {key:5},
    "lista"
)
const div = create(
    "div",
    {key:6},
    [h2,ul,li_1,li_2,li_3]
)

ReactDOM.render(div,document.getElementById("root"))

// ReactDOM.render(
//     <div>
//     <h2> Listado </h2>
//             <ul>
//               <li key={1}>soy</li>
//               <li key={2}>una</li>
//               <li key={3}>lista</li>
//             </ul>
//     </div>,
//     document.getElementById("root")
// );