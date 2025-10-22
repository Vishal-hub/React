import { useState } from "react";

const User = (props) => { 
    const count =useState(0); 
    return (
        <div>
            <h1>Functional component</h1>
            <h2>Name: {props.name}</h2>
            <h2>Location: {props.location}</h2>
            <h2>Count: {props.count}</h2>
        </div>
        )
    }

export default User

