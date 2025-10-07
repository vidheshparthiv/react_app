import React from 'react';
function PropsDemo(props){//when using class we dontt need to use props
    return(
        <div>
            <h1>
                Hello {props.name} your order is {props.order}
            </h1>
        </div>
    )
}
export default PropsDemo;    