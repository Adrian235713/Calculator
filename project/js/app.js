import React, {Component} from "react";
import ReactDOM from "react-dom";
import Menu from "./menu";
import Calculator from "./calculator";

console.log("Test = app,js");

const App = () => {

    return (
        <>
            <header>
                <Menu/>
            </header>
            <div className={'mainAppBox'}>

                <Calculator/>
            </div>
            <footer>
                footer
            </footer>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));
