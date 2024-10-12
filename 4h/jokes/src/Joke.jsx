import React from "react";


function Joke(props)
{
    return (
        <>
        <div>
            <h1>Setup :{props.setup}</h1>
            <p>Punchline :{props.punchline}</p>
        </div>
        </>
    )
}
export default Joke