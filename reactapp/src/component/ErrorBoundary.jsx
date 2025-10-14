//that captures js error in the component in functional we use useStste (in form)
//this is for class component "getDerivedStateFromError" set error static used to show error in ui
//ComponentDidCatch lifecyclde method called when error is thrown and give information about the error

import React,{Component}from 'react';
class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }
//handle state of error 
static getDerivedStateFromError(error){
    return {hasError:true}
}
detailscomponentDidCatch(error,info){
    console.log(error)
    console.log("Error info: ",info);
}
 render(){
    if(this.state.hasError){
        return <h1>somthing went wrong</h1>
    }//render if no error
    return(
        this.props.children
    )
 }
}
export default ErrorBoundary;