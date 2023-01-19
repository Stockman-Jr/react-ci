import React from "react";

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
            buttonCount: 0,
        };
    }

    handleClick() {
        this.setState({
            introduction: this.state.introduction === "Hello" ? "Goodbye!" : "Hello",
            buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
            buttonCount: +1,
        }, ()=>{
            console.log('new state', this.state.introduction)
        });
    }


    render() {
       return (
       <div>
        <h1>{this.state.introduction} {this.props.greeting}</h1>
        <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
        <button onClick={() => this.handleClick()}>{this.state.buttonCount}</button>
       </div>
       )
    }

}

export default StatefulGreetingWithPrevState;