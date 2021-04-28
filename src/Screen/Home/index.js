import React from 'react'


export const Home = (props) => {
    console.log("props", props)
    return(
        <div>
            <p>{props.id}</p>
            <p>{props.nameid}</p>
        </div>
    )
}
