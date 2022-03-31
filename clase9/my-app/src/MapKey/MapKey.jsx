import React, {Component} from "react";
import '../Props/Props'
import Cards from "./Cards"
import data from './data.json'

export default class MapkEY extends Component {
    render(){
        return(
            <div className="contenedor-props">
            {
                data.map((data, index) =>{
                    return<Cards key={index} url={data.url} alt={data.alt} titulo={data.titulo}/>
                })
            }
            </div>
        )
    }
}