import React, { Component } from 'react';

class TimerApp extends Component{
    constructor(){
        super();
        this.state = {
            time: 0
        }
    }

    // first time componentdidMount()
    componentDidMount(){
        this.timer = setInterval(()=> {
            this.setState((prev)=>({time:prev.time+1}))
        },1000)
    }

    // updating
    componentDidUpdate(prevProps,prevState){
        if(prevState.time !== this.state.time){
            console.log("Timer is updating");
        }
    }
    
    // unmount to stop timer -> Condition for unmounting is in KillTimer.jsx
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("My timer is unmounted");
    }

    // reset timer
    reset(){
        this.setState({time:0});
    }
    render(){
        return(
            <div>
                <h1>Timer App</h1>
                <h3>Time : {this.state.time}</h3>
                
                <button onClick={()=> this.reset()}>Reset</button>
            </div>
        )
    }
}

export default TimerApp;