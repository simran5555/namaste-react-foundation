import React from "react";
import ReactDOM from "react-dom/client"

//creating a react element using core react
//react.createelement -> reactelement (js object) -> htmlelement(render)
const heading = React.createElement("h1", {id:"heading1", key:"reactheading"}, "react core heading")
console.log(heading)

//creating react element using jsx
//jsx code is transpiled into react.createelement by babel(from parcel)  creating a reactelement and then rendered into an htmlelement
const jsxHeading = <h1 id="heading2" key="jsxheading">jsx heading</h1>
console.log(jsxHeading)
//console.log(heading) === console.log(jsxHeading) (same object)

//React functional components 
const HeadingComponent = () => (<h1>react functional component</h1>); // in case of single line returns skip the return keyword
const NavComponent = () => {
    return <nav>
        <h1>logo</h1>
        <ul>
            <li>home</li>
            <li>about</li>
        </ul>
    </nav>
}

const Homepage = () => {
   return <div>
    <HeadingComponent />
    <NavComponent />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Homepage />)