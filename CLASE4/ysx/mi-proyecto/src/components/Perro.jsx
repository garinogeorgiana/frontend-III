const Perro=(props)=>{
return(
    /* 
    const veterinaria =()=>{
        return(
            <React.Fragment>
            <h1 className = "bg.info text-center">Mi veterinaria</h1>
            <h2>Firulais</h2>
            <ul>
                <li>Edad: 5</li>
                <li>Sexo: macho</li>
                <li>Raza: Pastor aleman</li>
                <li>Tamanio: grande </li>
            </ul>
            </React.Fragment>
        )
    }
    */
    
    <>
    <h2>Nombre:{props.nombre}</h2>
    <ul>
        <li>Edad:{props.edad}</li>
        <li>Sexo:{props.sexo}</li>
        <li>Raza:{props.raza}</li>
        <li>Tamanio:{props.tamanio}</li>
    </ul>
    </>
    )
}

export default Perro;