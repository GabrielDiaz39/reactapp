import React from 'react';

export default function SumayResta() {
  const [input, setInput] = React.useState({
    num1: "",
    num2: "",
  });
  
  const [result, setResult] = React.useState();
  const handleInput = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };
  const suma = function () {
    setResult((+input.num1) + (+input.num2));
  };
   const multiplicar = function () {
    setResult((+input.num1) * (+input.num2));
  };
  return (

    <div>
        <div>

            <div>
                <h2 className='margen-none contenido__text neon'> Escriba dos números para hacer la suma o multiplicación</h2>
                <div className='center_input marginTop borde-green'>
                    <input className='bold-tamaño'
                     onChange={handleInput}
                    name="num1"
                    value={input.num1}
                    type="text"
                    ></input>
                    <input className='bold-tamaño'
                    onChange={handleInput}
                    name="num2"
                    value={input.num2}
                    type="text"
                    ></input>
                </div>
            </div>
            <h3 className='centerText centerText'>Opciones</h3>
            <div className='center_div'>
                <button onClick={suma}>sumar</button>
                <button onClick={multiplicar}>multiplicar</button>
            </div>
            <div> 
                <h4 className='result'>El resultado es: <span className='result-color'> {result} </span> </h4> 
            </div>
            
        </div>
    </div>
  );   
}