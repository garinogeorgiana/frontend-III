

const stock = ["Manzana","Pera","Naranja","Banana","Kiwi"];
const noStock = ["Durazno","Cereza","Anana"];

function App(){
    return(
    <div>
        <h1>Lista de productos en stock</h1>
        <ul>
            {stock.map((item)=>(
                <li>{item}</li>
            ))}
        </ul>
        <div>
            <h2>Lista de productos sin stock</h2>
            <ul>
                {noStock.map((item)=>(
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)
