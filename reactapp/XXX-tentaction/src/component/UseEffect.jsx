import { useEffect } from "react";
//we can give state that depends on the function
const UseEffect = () => {
    useEffect(function(){
        console.log("useEffect called")

    })
    return(
        <h1>
        UseEffect
        </h1>
    )}
    export default UseEffect