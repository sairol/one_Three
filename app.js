import React from "react"
import ReactDOM from "react-dom/client"

const navbar = React.createElement("ul" , {key:"ul"},[
    React.createElement("li",{key:"home"},"Home"), 
    React.createElement("li",{key:"about"},"About us"),
    React.createElement("li" , {key:"career"} , "Careers")
] )

const heading = React.createElement("h2", { id: "title" , key:"1" }, "Now Go to Hell")

const heading2 = React.createElement("h3", { id: "okay" , key:"2" }, "Bye  bye go 1 1 1")

const container = React.createElement("div", { id: "chalo"  }, [navbar, heading, heading2])

const root = ReactDOM.createRoot(document.getElementById("root"));

function HeaderComponent(){
    return (
        <div>
            {container}
            <h1>
                This is Component
            </h1>
        </div>
    )
}


root.render(<HeaderComponent/>);