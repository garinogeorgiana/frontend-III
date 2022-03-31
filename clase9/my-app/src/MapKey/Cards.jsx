import React, {Component} from "react";

export default class Card extends Component {
    render(){
        return(
            <div className="card">
            <img src={this.props.url} alt={this.props.alt} />
            <h3>{this.props.titulo}</h3>
            </div>
        )
    }
}