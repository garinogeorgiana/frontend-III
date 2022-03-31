//formularios que seteamos estados setestado y capturamos toda la info

import React,{Component} from "react";

export default class ComponentesConEstado extends Component {
    //constructor hacemos que define el estado inicial del componentesConEstado
    constructor(){
        super();
        this.state = {
            contador:1
        }
    }
Aumentar = () =>{
    this.setEstate({
        contador:this.state.contador +1
    })
}

Disminuit =()=>{
    this.setState({
        contador:this.state.contador -1
    })
}

Setear =()=>{
    this.setState({
        contador:this.state.contador =0
    })
}

    render(){
        return (
            <>
            <h2> Contador: {this.state.contador}</h2>
            <button onClick={this.Aumentar}>Aumentar</button>
            <button onClick={this.Disminuir}>Disminuit</button>
            <button onClick={this.Setear}>Setear</button>

            <button>Aumentar</button>
            <button>Disminuir</button>
            <button>Setear</button>
            </>
        )
    }
}