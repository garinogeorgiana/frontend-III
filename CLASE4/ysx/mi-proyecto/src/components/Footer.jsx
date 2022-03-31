import React from "react"

/*de clase */
class Footer extends React.Component{
    //invocamos el constructor de la super clase con propiedades y todo
    constructor(){
        super()
    }
    cambiar(){
        console.log("Se ejecuto el evento on clicl!")
    }
    render(){       ///no es necessario poner props
        return(
            <footer>
                <p onClick={this.cambiar}>Mi pagina</p>
            </footer>
        )
    }
}
    
export default Footer;