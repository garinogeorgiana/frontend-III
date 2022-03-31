import React from "react"

//perimero hacemos la constante
const Boton=(props)=>{
    //siempre el return
    return(
        <React.Fragment>
        <button onClick={props.cambiar} value={props.value}>{props.categorias}</button>
    </React.Fragment>
    )

}
export default Boton