#React


{/* <h1 id="heading">React</h1> */}

// const heading = React.createElement("h1",{id:"heading"},"React");
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


{/*
    <div id="parent">
    <div id="child">
        <h1 id="heading">I am h1 tag</h1>
    </div>
    <div id="child2">
        <h1 id="heading2">I am child2 h1 tag</h1>
        <h2 id="heading2">I am child2 h2 tag</h2>
    </div>
</div> 
*/}

// ReactElements ARE (Objects) => HTML(Browser Understands) 
// React elements are plain javascript objects which are used to create and display content on the screen
// React elements are immutable (cannot be changed) once they are created
// React elements are lightweight and faster than DOM elements

// React.createElement() method can take only 3 arguments such as 
// element type (eg. <div>), 
// attributes to our tags (eg. <id="parent">)
// and the content inside the tag (eg. "I am h1 tag")
// but if we want to pass multiple children to parent then we have to pass array of children
// here we pass array of children to parent div, to form above structure
    
const parent =React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement("div",{id:"child"},React.createElement(
            "h1",
            {id:"heading"},
            "I am h1 tag"
            )
        ),
        React.createElement(
            "div",
            {id:"child2"},
            [
                React.createElement(
                "h1",
                {id:"heading2"},
                "I am child2 h1 tag"
                ),
                React.createElement(
                "h1",
                {id:"heading2"},
                "I am child2 h2 tag"
                )
            ]
        )
    ]
);

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);






//Header
//  - logo
//  - Nav Items
//Body
//  - Search bar
//RestaurantContainer
//  - RestaurantCard
//  - Image
//  - Name
//  - Cuisine
//  - Rating
//Footer
//  - Links
//  - Copyright
//  - Contact
//  - Address
//  - Social Links