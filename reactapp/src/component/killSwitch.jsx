import React from 'react';
import TimerApp from './TimerApp';
class KillSwitch extends React.Component{
    constructor(){
        super();
        this.state={
            switch:true
        }
    }
    toggle(){
        this.setState((prev)=>({switch:!prev.switch}))
    }
    render(){
        return(
            <div>
                <h1>Kill Switch</h1>
                <button onClick={this.toggle}>{this.switch?"unmount":"mount"}</button>
                {this.state.switch && <TimerApp/>}
            </div>
        )
    }
}
export default KillSwitch;