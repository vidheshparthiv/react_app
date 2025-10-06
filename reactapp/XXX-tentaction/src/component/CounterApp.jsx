import React from 'react'

function CounterApp() {
    let [count, setCount]= React.useState(0);//simple state in this useState it returns an array of 2 values one is the variable and other is the function to update the variable
    //easy peassy orange squeezy
    function handleIncrease(){
        setCount(count + 1);
    }
    function decra(){
        setCount(count + 1);
    }
    function res(){
        setCount(count = 0);
    console.log(count)}
    return (
    <div>
        <h1>Counter App</h1>
        <h1>count : {count}</h1>
        <button onClick={handleIncrease}>increase</button>
        <button onClick={decra}> decrease</button>
        <button onClick={res}>reset</button>
    </div>

  )
}

export default CounterApp;
