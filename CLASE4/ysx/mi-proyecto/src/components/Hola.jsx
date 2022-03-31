/*funcional */
const Hola=(props)=>{
    //props.nombre="Luis" esto no se
    return(
        <div>
            <h1 style={{backgroundColor: props.color}}>Bienvenida {props.nombre}{props.apellido} a nuestro equipo</h1>
        </div>
    )

}
export default Hola;