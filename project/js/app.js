import React, {Component} from "react";
import ReactDOM from "react-dom";
import Menu from "./menu";
import Calculator from "./calculator";
import TriangleCondition from "./triangleCondition";
import HeronsFormula from "./heronsFormula";
import FindSquareRoots from "./findSquareRoots";

const x_Calculator = <Calculator/>
const x_HeronsFormula =  <HeronsFormula/>
const x_TriangleCondition = <TriangleCondition/>
const x_FindSquareRoots = <FindSquareRoots/>
// ----------------------------------------------------------------

let x = parseInt(localStorage.getItem('x'));
let renderComponent = null;

if (x === 0) {
    renderComponent = <Calculator/>
}
if (x === 1) {
    renderComponent = <HeronsFormula/>
}
if (x === 2) {
    renderComponent = <TriangleCondition/>
}
if (x === 3) {
    renderComponent = <FindSquareRoots/>
}

// ----------------------------------------------------------------

const App = () => {

    return (
        <>
            <header>
                <Menu/>
            </header>
            <div className={'mainAppBox'}>
                {renderComponent}
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
