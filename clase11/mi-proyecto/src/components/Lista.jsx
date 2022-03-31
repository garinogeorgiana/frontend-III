import React from "react"

class Lista extends React.Component {
constructor(props){
    super(props)
}
    componentWillUnmount(){
        alert('Listo!')
    }
    render(){
        return(
    <div>
        <ol>
            {this.lista}
        </ol>
    </div>
        )
    }

}
export default Lista