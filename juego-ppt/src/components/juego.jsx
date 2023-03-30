import React from "react"
import { useState, useEffect } from "react";


function Juego() {

    const [maquina, SetMaquina] = useState("");
    const [human, SetHuman] = useState("");
    const [resultado, setResultado] = useState("");
    useEffect(() => {
        calcularResultado(human);
    }, [maquina, human]);



    let opc = ['Piedra', 'Papel', 'Tijera']

    function JuegoMaquina (){
        let randomMaquina = Math.round(Math.random()*2)

        SetMaquina(opc [randomMaquina]);
        ganador ();
    }

    function JuegoHuman (e){
        //console.log(e.target.innerText)
        SetHuman(e.target.innerText)

        JuegoMaquina ()
        calcularResultado(e.target.innerText);
    }
    
    function calcularResultado(opcionHuman) {
        if (opcionHuman === maquina) {
            setResultado("Empate!");
        } else if (
            (opcionHuman === 'Piedra' && maquina === 'Tijera') ||
            (opcionHuman === 'Papel' && maquina === 'Piedra') ||
            (opcionHuman === 'Tijera' && maquina === 'Papel')
        ) {
            setResultado("Ganaste");
        } else {
            setResultado("Perdiste");
        }
    }

    return (
        <div className="App">
            <div>
                <p>Máquina</p>
                <h1>{maquina}</h1>
            </div>
            <hr />
            <div>
                <p>Humano</p>
                <h1>{human}</h1>
            </div>
            <div>
                <button onClick={JuegoHuman}>Piedra</button>
                <button onClick={JuegoHuman}>Papel</button>
                <button onClick={JuegoHuman}>Tijera</button>
            </div>
            <h1 style={{color: 'blueviolet'}}>{resultado}</h1>
        </div>
    )
};

export default Juego