import react,{Component} from 'react';
class LifeCycle2 extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    componentDidMount(){
        console.log("component did mount")
    }
    componentDidUpdate(prevProps,prevState){
        console.log("previous value:",prevState.count,"current value:",this.state.count)
    }
    componentWillUnmount(){
        console.log("component will unmount")
    }
    handleIncrement=()=>{
        this.setState((prev)=>({count:prev.count+1}))
    }
    handleDecrement=()=>{
        this.setState(prev=>({count:prev.count-1}))
    }
    handleReset=()=>{
        this.setState(prev=>({count:0}))
    }
    render(){
        return(
            <div>
                <h1>this is Life on top of a cycle</h1>
                <h1 style={{backgroundColor:"tomato", color:"MediumSeaGreen", cursor:"cell"}}>{this.state.count}</h1>
                <button style={{backgroundColor:"white",color:"MediumSeaGreen",cursor:"grab"}} onClick={this.handleIncrement}>Increase</button>
                <button style={{backgroundColor:"red",color:"white",cursor:"grabbing"}} onClick={this.handleDecrement}>Decrement</button>
                <button style={{backgroundColor:"DodgerBlue",color:"pink",cursor:"wait"}}  onClick={this.handleReset}>Reset</button>

            </div>
        )
    }
}
export default LifeCycle2;