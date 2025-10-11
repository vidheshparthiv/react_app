// rafce
// import PropsDemo from "./component/PropsDemo";
import CounterApp from "./component/CounterApp";
import { HelloWorld } from "./component/HelloWorld";
// import HelloWorld01 from "./component/HelloWorld01";
// import CounterApp from "./component/CounterApp";
// import React,{Component} from "react";

// import LifeCycle from "./component/LifeCycle";

// export default class App extends Component {

//   state={
//       show:true
//     }
//   toggle=()=>{
//       this.setState((prev)=>({show:!prev.show}))
//   }
//   render() { 
//   return (
//     <div>
//       {/* <h1>hi this xxx-tentaction</h1>
//       <h2>value of my ex is {a}</h2>
//       <h3>my arr is{arr}</h3> */}
//       {/* Example of rendering an array */}

//       {/* {arr.map((item, index) => (
//         <h3 key={index}>
//           item is {item} and index is {index}
//         </h3>
//       ))} */}
//       {/* Render multiple components below */}
//       {/* <PropsDemo name="sujith" order="pizza" />
//       <HelloWorld01 />
//       <HelloWorld />
//       <CounterApp /> */}
//       {/* toggle changes true to false and vise versa */}
//       <button onClick={this.toggle}>
//         {this.state.show ? "unMount" : "mount"}
//       </button>
//       {/* {anything inside class should be called as this. and just look in to this toggle the functionality is cool more in details*/}
//       {this.state.show && <LifeCycle/>}  
//     </div>
//   );
// }}

import react,{component} from 'react';
import PropsDemo from "./component/PropsDemo";
function App(){
  // let a=10;
  // let rn=Math.floor(Math.random()*10);
  // let b="hello world";
  // let arr=[1,2,3,4,5]
  return(<div style={{ backgroundColor: 'lightblue'}}>
    {/* <h1>{a}</h1>
    <h2>{JSON.stringify(b)}</h2>
    
    {arr.map((value,index)=>(
      <h3 >{value}</h3>
    ))}
    <h2>{rn}</h2>
    {
      rn===a ?<h1>pathu un vaiila kuthu</h1>:<h1>go home </h1>
    }
     */}
     <PropsDemo/>
    </div>
    
  )

}
export default App;
