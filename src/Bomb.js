import React, { Component } from 'react'


export default class Bomb extends Component {

    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render(){
        return (
            <div>
                {this.state.secondsLeft == 0 ? 'Boom!':`${this.state.secondsLeft} seconds left before I go boom!`}
            </div>
        )
     }
}


//    if (secondsLeft == 0) {
//       return 'Boom!'
//         } else return <h1>
//      {this.state.secondsLeft} seconds left before I go boom!
//     </h1>