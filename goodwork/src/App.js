import logo from './logo.svg';
import './App.css';
import Question from "./Question/Question";
import {useEffect, useState} from "react";

function App() {

  const [contador, setContador] = useState(0);
  const [valorFinal, setValorFinal] = useState(0);
  const questionario = [
    {
      title: "Cual es su nivel de estudios?",
      id: 1,
      options:
          [
            {name: "No tiene", value: 0},
            {name: "Bachiller", value: 1},
            {name: "Pregrado universitario", value: 2},
            {name: "Postgrado", value: 3}
          ]
    },
    {
      title: "Que tipo de contrato tiene?",
      id: 2,
      options:
          [
            {name: "No tiene", value: 0},
            {name: "Es contrato verbal", value: 1},
            {name: "Es contrato a termino fijo", value: 2},
            {name: "Es contrato a termino indefinido", value: 3}
          ]
    }
  ];


  return (
      <div className="App">
        <header className="App-header">
          {contador === 0 && (<div>
                <h3>Bienvenido al questionario</h3>
                <div onClick={event => setContador(contador+1)}>
                  Iniciar
                </div>
              </div>
          )}
          {questionario.map((question) =>{
            return (<Question
                contador={contador}
                setContador={setContador}
                question={question}
                valorFinal={valorFinal}
                setValorFinal={setValorFinal}
            />)
          })}
          {contador === questionario.length+1 && (<h3>
            Resultado final {valorFinal}

          </h3>)}
        </header>
      </div>
  );
}

export default App;
