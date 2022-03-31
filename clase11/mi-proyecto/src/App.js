import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
import Boton from './components/Boton'
import Data from './db/data.json'
let categorias ={all:"Todos",cats:"Gatos",dogs:"Perros"}
//import Lista from './components/Lista'

/*class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      history:["yellow"]
    }
    this.agregar=this.agregar.bind(this)
  }
  componentDidMount(){
    this.setState(
     {history:[]}
    )
  }

  componentWillMount(){
    alert("hasta luego")
  }
  agregar(i){
    //let viejoValor = this.state.history;
    //let nuevoValor=viejoValor.push(i)
    console.log([...this.state.history,i])
    this.setState(
    {history:[...this.setState.history,i]}
    )
  }
  render() {
    let lista =this.state.history.map((i,index)=>{
      return<li key={index.toString()}>{i}</li>
    })
    return(
      <div className="App">
        <Boton value="yellow" cambiar={this.agregar}/>
        <Boton value="red" cambiar={this.agregar}/>
        <Boton value="blue" cambiar={this.agregar}/>
        <Boton value="green" cambiar={this.agregar}/>
        <Lista lista={lista}/>
      </div>
    );
  }
}
*/

class App extends React.Component {
  //constructor
  constructor(props){
    super(props);
    this.state={
      choice:categorias.all,
      todos:[]
    };
  }

  //ciclos de vida
  componentDidMount(){
    this.setState({
      todos: Data
    })
  }

  //funcion sin hacer bind
cambiar=(i)=>{
    this.setState({
    choice:i.target.value
  })
}

  render() {
    console.log(Data)
    return(
      <div className="row">
        <h1>Mi veterinaria</h1>
        {this.state.choice === "Todos"
        ?
        this.state.todos.map((ele,index)=> 
        <li key={ele.name + index}>{ele.name}</li>)
        :
        Data.filter((elemento)=>elemento.type === this.state.choice)
        .map((ele, index)=>{return <li key={(index+2).toString()}>{ele.name}</li>})
        }
        <Boton cambiar={this.cambiar} value="dogs" categorias={categorias.dogs}/>
        <Boton cambiar={this.cambiar} value="cats" categorias={categorias.cats}/>


      </div>
      
    );
  }
}
export default App;
