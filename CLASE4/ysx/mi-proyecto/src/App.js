import logo from './logo.svg';
import './App.css';
import Hola from './components/Hola';
import Footer from "./components/Footer"
import Perro from "./components/Perro"

function App() {
  return (
    <div className="App">
      <h1>Clientes caninos de Veterinaria</h1>
      <Perro nombre=" Firulais" edad=" 11" sexo=" Macho" raza=" Pastor aleman" tamanio=" Grande"/>
      <Perro nombre=" Maya" edad=" 13" sexo=" Hembra" raza=" Pug" tamanio=" Chico"/>
      <Perro nombre=" Pipo" edad=" 5" sexo=" Macho" raza=" Schnauzer" tamanio=" Mediano"/>
      <Perro nombre=" Pacha" edad=" 2" sexo=" Hembra" raza=" Mestizo"/>
    </div>
  );
}

export default App;
