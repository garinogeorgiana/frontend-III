//entre llaves para desestructurar
import React,{Component} from 'react'
import Peliculas from '../Peliculas'

class Principal extends Component {
    constructor(props) {
        super(props)
        //estados
        this.state={
            color:props.color

        }
this.cambiarColor=this.cambiarColor.bind()
    }

    //funcion
    cambiarColor(){

    }
    render(){
        console.log(props.datos)
        return(
            <h1 onClick={{}} style={{color: this.state.color}}>Mi titulo</h1>
        )
    }
}

export default Principal;