
import React from "react";

class UserClass extends React.Component{
    constructor(props)
    {
        super(props);
       //class based state variable
        this.state={
            userInfo:{
                name:"dummy",
                location:"default"
            }
        
        }
    }
    async componentDidMount()
    {
        const data= await fetch("https://api.github.com/user/shadab012s");
        const json=await data.json;
        console.log(json)
    this.setState({  //seting the data
        userInfo:json
    })
    }
    
    render()
    {
       const {name, location}=this.props;
       const {count,count2}=this.state; // destructuring state variable
        return(
            <div className="user-cards">
                <h1>count:{count}</h1> {/* using state variable */}
                
                <button onClick={()=>
                    {
                        this.setState(
                            {
                               count:this.state.count+1,
                            
                            }
                        )
                    }
                }>
                    increase count
                </button>
            <h2>name:{this.state.userInfo.name}</h2>
            <h3>Location:{this.state.userInfo.location
                }</h3>
            <h4>Contact:@munchly</h4>
            </div>
        )
    }
}
export default UserClass;