import React, {Component, useState} from 'react';

const Menu = () => {

    const renderComponent_x_0 = () =>{
        localStorage.setItem('x',JSON.stringify(0));
        window.location.reload();
    }

    const renderComponent_x_1 = () =>{
        localStorage.setItem('x',JSON.stringify(1));
        window.location.reload();
    }

    const  renderComponent_x_2 = () =>{
        localStorage.setItem('x',JSON.stringify(2));
        window.location.reload();
    }

    const  renderComponent_x_3 = () =>{
        localStorage.setItem('x',JSON.stringify(3));
        window.location.reload();
    }

    return(
        <div className={'menu'}>
            <button onClick={renderComponent_x_0}>Basic calculator</button>
            <button onClick={renderComponent_x_1}>The condition for building a triangle</button>
            <button onClick={renderComponent_x_2}>Heron's formula</button>
            <button onClick={renderComponent_x_3}>Find the square roots</button>
        </div>
    )
}
export default Menu;