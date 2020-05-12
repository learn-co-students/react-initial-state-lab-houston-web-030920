import React from "react";

export default class Bomb extends React.Component {
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    
   
    
    render(){
        let secs = this.state.secondsLeft;
        let response;
        if (secs === 0 ){
            response = "Boom!"
        }else{
           response = `${secs} seconds left before I go boom!`
        }
        return (
            <div>
             {response}
            </div>
        )
    }
}