import React from "react";
import UserContext from "../utils/UserContext";

class ClassUser extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            count: 0,
            count2: 1,
        };
    }
    render(){
        const {name, location}= this.props;
        const {count, count2}= this.state;
        return(
            <div>
                <h1>Class component</h1>
                <div>
                    LoggedIn User
                    {/* using/reading Context API in Class based components */}
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Count: {count}</h2>
                <button onClick={()=> {
                    this.setState(
                        {count: this.state.count + 1}
                    )
                }}>
                    Increment
                </button>
                <h2>Count2: {count}</h2>
            </div>
        )
    }
}

export default ClassUser;