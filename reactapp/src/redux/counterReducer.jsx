const initialState={
    count:0
}
export const counterReducer=(state =initialState,action)=>{
    switch(action.type){
        case "Increment":
            return{count:state.count+1}
        case "Decrement":
            return {count:state.count-1}
        case "Reset":
            return {count:0}
        default:
            return state

    }
}