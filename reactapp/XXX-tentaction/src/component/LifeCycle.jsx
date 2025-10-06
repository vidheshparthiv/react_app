//rcc
//life cycle method
//conditional rendering ex login to logout
import React, { Component } from 'react'

export default class LifeCycle extends Component {
  constructor(){
    super();
    this.state={//in this type state is the localstate for class-keyword
      count:0//can give n no of variables
    }
  }
  //step 1: mount
  //this thing works in the browser                  
  componentDidMount(){
    //runs when this component is created and added to the DOM
    //if we want to make this line print on web instead of browser we can use 
    //componentDidMount() {
    //this.setState({ mountedMessage: "Component Mounted Successfully!" });
    //}
    
    console.log("run in browser")
  }
  componentDidUpdate(prevprops,prevState){
    //prevprops- previous props<LifeCycle step={5} />then<LifeCycle step={100} /> | this.props.step=100 prevprops.step=5
    //prevState- previous state | prevState.count=0 then this.state.count=1
    console.log("previous value:",prevState.count,"Current value",this.state.count)
    //instead of browser console we can use 
    //in this.state we can add another variable prevCount and in setState we can set prevCount:prevState.count
    // componentDidUpdate(prevProps, prevState) {
//     this.setState({ prevCount: prevState.count }); by giving preCount in state
//   }
// }
  }
  
  increment=()=>{
    //this.setState({ count: this.state.count + 1 });
    //React's setState is asynchronous, meaning multiple state updates can be batched together for performance. If you rely directly on this.state, you might get outdated values. Using a function like this ensures you're working with the most up-to-date snapshot of the state.
    this.setState((prev)=>({count:prev.count+1}))
    //for more details about this prev go to details
  }
  render() {
    return (
      <div>LifeCycle class state
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>click me</button>
        
      </div>

    )
  }
}
