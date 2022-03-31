const create = React.createElement;


//componentes en jsx
const p = <p>Soy un parrafo</p>

function App(){
    setInterval(()=>{
        document.getElementById("1").style.color="blue"
    },1000)
    return(
        <div>
        <h1 id="1" style={{color: "red"}}>Mi Titulo</h1>
        <ul>
            <li>item1</li>
            <li>item2</li>    
            <li>item3</li>
            <li>item4</li>
        </ul>
        {" la multiplicacion de 20*5 es:"+ 20*5}
        </div>
    )
}
ReactDOM.render(
    <App/>,
    document.getElementById("root")
)