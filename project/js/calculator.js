import React, {Component, useState} from 'react';

const Calculator = () => {

    const [data, setData] = useState([]);
    // ----------------- Retrieving data from the user -----------------------------

    const getInput7 = () => {
        // data.push('7');
        setData([...data, 7]);
        console.log(data);
    }
    const getInput8 = () => {
        setData([...data, 8]);
        console.log(data);
    }
    const getInput9 = () => {
        setData([...data, 9]);
        console.log(data);
    }
    const getInput4 = () => {
        setData([...data, 4]);
        console.log(data);
    }
    const getInput5 = () => {
        setData([...data, 5]);
        console.log(data);
    }
    const getInput6 = () => {
        setData([...data, 6]);
        console.log(data);
    }
    const getInput1 = () => {
        setData([...data, 1]);
        console.log(data);
    }
    const getInput2 = () => {
        setData([...data, 2]);
        console.log(data);
    }
    const getInput3 = () => {
        setData([...data, 3]);
        console.log(data);
    }
    const getInput0 = () => {
        setData([...data, 0]);
        console.log(data);
    }
    const getsubtraction = () => {
        setData([...data, '-'])
        console.log(data);
    }

    // --------------------------------- Convert to two numbers -------------------------------------
    let number1List = [];
    let number2List = [];

    let xxx = 0;
    for (let i = 0; i < data.length; i++) {

        if ((data[i] === ('*')) || (data[i] === ('/')) || (data[i] === ('+')) || (data[i] === ('-'))
            || (data[i] === ('='))) {
            xxx = 1;
        }

        if ((data[i] !== ('*')) && (data[i] !== ('/')) && (data[i] !== ('+')) && (data[i] !== ('-'))
            && (data[i] !== ('=')) && (xxx === 0)) {
            number1List.push(data[i]);
        }

        if ((data[i] !== ('*')) && (data[i] !== ('/')) && (data[i] !== ('+')) && (data[i] !== ('-'))
            && (data[i] !== ('=')) && (xxx === 1)) {
            number2List.push(data[i]);
        }
    }
    // ----------------------------------------------------------------------------------------------

    const getInputDivision = () => {
        setData([...data, '/']);
    }
    const getInputMultiplication = () => {
        setData([...data, '*']);
        console.log(data);
    }
    const getInputAddition = () => {
        setData([...data, '+']);
        console.log(data);
    }
    const getDecimalNumber = () => {
        setData([...data, '.']);
        console.log(data);
    }
    // ----------------------------------------------------------------------------------------------

    let number1 = Number(number1List.join(''));
    let number2 = Number(number2List.join(''));

    const xxxx = () => {
        window.location.reload();
    }

    const [res, setRes] = useState(null);

    const result = () => {
        for (let i = 0; i <= data.length; i++){

            if(data[i] === '/'){
                setRes(number1/number2);
                console.log(res);
            }

            if(data[i] === '*'){
                setRes(number1*number2);
                console.log(res);
            }

            if(data[i] === '+'){
                setRes(number1+number2);
                console.log(res);
            }

            if(data[i] === '-'){
                setRes(number1-number2);
                console.log(res);
            }

        }
    }

    return (
        <div className={'mainCalculatorDiv'}>
            <div className={'mainCalculatorDiv1'}>
                <div>
                    <button onClick={getInput7}>7</button>
                    <button onClick={getInput8}>8</button>
                    <button onClick={getInput9}>9</button>
                    <button onClick={getInputDivision}>/</button>
                </div>
                <div>
                    <button onClick={getInput4}>4</button>
                    <button onClick={getInput5}>5</button>
                    <button onClick={getInput6}>6</button>
                    <button onClick={getInputMultiplication}>x</button>
                </div>
                <div>
                    <button onClick={getInput1}>1</button>
                    <button onClick={getInput2}>2</button>
                    <button onClick={getInput3}>3</button>
                    <button onClick={getInputAddition}>+</button>
                </div>
                <div>
                    <button onClick={getDecimalNumber}>.</button>
                    <button onClick={getInput0}>0</button>
                    <button onClick={result}>=</button>
                    <button onClick={getsubtraction}>-</button>
                </div>
                <div>
                    <button onClick={xxxx}>RESET</button>
                </div>
            </div>
            <div className={'mainCalculatorDiv2'}>
                <div>
                    {data}
                </div>
                <div>
                    <p>Result:</p> {res}
                </div>
            </div>
        </div>
    )
}
export default Calculator;