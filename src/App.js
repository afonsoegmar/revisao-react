import React from "react";



function App() {

    //let credito = 155;
    const [ credito, alteraCredito] = React.useState(155)

    function adicionaCredito(){
       alteraCredito(credito + 1000);
        
    }
     
    function comprarPassagem(valor){
        if(credito < valor){
            alert("Você não possui créditos para comprar esta passsagem ")
            return
        }
        alteraCredito( credito - valor)
        alert("Passagem comprada com sucesso")
    }

    return (
        <div>
            <h1>turismo Passagens</h1>
            <p>conheça mundos pelo melhor preço!</p>

           

            <button onClick={()=> adicionaCredito()}>Adicionar Créditos</button>

            <p> Seu crédito é de <strong>R${credito}</strong></p>

            <p> Los Angeles - R$ 1200 <button onClick={()=>comprarPassagem(1200)}> Comprar </button></p>

            <p> Londres - R$ 1420 <button onClick={()=>comprarPassagem(1550)}> Comprar </button></p>

        </div>
    );    
        

}
export default App;
