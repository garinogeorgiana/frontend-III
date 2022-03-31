import React from "react";

function App() {
  const array = ["hola1", "hola2","hola3","mundo"];
  return(
    <>
    <ul>
      array.map(h1, indice)=>{
        return (
          <h1 key= {indice} style={{color:"blue", textAlign:"center"}}>(h1)</h1>
        )
      })
    </ul>
    </>
  );
    
  
}

export default App;