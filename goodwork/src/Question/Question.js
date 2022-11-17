import {useState} from "react";

const Question = ({contador, setContador, question, valorFinal, setValorFinal}) => {

    const handleClick = (e, option) =>{
    console.log(option);
    setContador(contador+1);

    if(question.id === 4 && (option.value===0)){
        setValorFinal(5);
    }else if(question.id === 4 && (option.value===4)){
        setValorFinal(6);
    }else{
        setValorFinal(valorFinal+option.value);
    }
    }
    return (
        <div>
            {(contador === question.id) && (
                <div>
                    <h2>
                        {question.title}
                    </h2>
                    <div>
                        {question.options.map(option => {

                            return (
                                <div onClick={event => handleClick(event, option)}>
                                    <p>
                                        {option.name}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>)
            }
        </div>

    )
}
export default Question;