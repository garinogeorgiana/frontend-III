//recibe info para funcionar por medio de los props, facilita la comunicacion por los compoenntes

import React, {Component}from "react";

export default class Declarando extends Component{
    render(){
    return(
        <div>
            <>
            <img src={this.props.img} alt={this.props.alt} />
            </>
        </div>
    )
    }
    
}