import React, {Component,useState} from 'react';

const Calculator = () => {

    const [data, setData] = useState([]);

    const getInput7 = () => {
        // data.push('7');
        setData([...data,7]);
        console.log(data);
    }
    const getInput8 = () => {
        data.push('8');
        console.log(data);
    }
    const getInput9 = () => {
        data.push('9');
        console.log(data);
    }
    const getInputDivision = () => {
        data.push('/');
        console.log(data);
    }
    const getInput4 = () => {
        data.push('4');
        console.log(data);
    }
    const getInput5 = () => {
        data.push('5');
        console.log(data);
    }
    const getInput6 = () => {
        data.push('9');
        console.log(data);
    }
    const getInputMultiplication = () => {
        data.push('*');
        console.log(data);
    }
    const getInput1 = () => {
        data.push('1');
        console.log(data);
    }
    const getInput2 = () => {
        data.push('2');
        console.log(data);
    }
    const getInput3 = () => {
        data.push('3');
        console.log(data);
    }
    const getInputAddition = () => {
        data.push('+');
        console.log(data);
    }

    return(
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
                    <button>.</button>
                    <button>0</button>
                    <button>=</button>
                    <button>-</button>
                </div>
                <div>
                    <button>RESET</button>
                </div>
            </div>
            <div className={'mainCalculatorDiv2'}>
                ssssssss
                {data}
            </div>
        </div>
    )
}

export default Calculator;