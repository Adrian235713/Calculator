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
                <div><a href="https://github.com/Adrian235713"><img src="../img/git.png" alt=""/></a></div>
                <div><a href="https://www.linkedin.com/in/adrianponiatowski/"><img src="../img/linkd.png" alt=""/></a></div>
                <div><a href="https://www.linkedin.com/in/adrianponiatowski/"><p>adrianponiatowski24610@gmail.com</p></a></div>
            </footer>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));
