import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // Initialize state with default values
        this.state = {
            userInfo: {
                name: "dummy",
                location: "default"
            },
            count: 0,
            count2: 0
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/shadab012s", {
            headers: {
                Authorization: "token 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"
            }
        });
        
        const json = await data.json(); // Call .json() as a function
        console.log(json);

        // Set the fetched data in state
        this.setState({
            userInfo: json
        });
        
    }

    render() {
        const { name, location } = this.state.userInfo; // Destructuring from state
        const { count, count2 } = this.state;

        return (
            <div className="user-cards">
                <h1>its class based component</h1>
             
                <h1>Count: {count}</h1>
                
                <button className="bg-gray-300" onClick={() => this.setState({ count: count + 1 })}>
                    Increase Count
                </button>

                <h2>Name: {name}</h2>
                <h3>Location: {location || "Location not available"}</h3>
                <h4>Contact: @munchly</h4>
            </div>
        );
    }
}

export default UserClass;
