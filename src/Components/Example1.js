import React from 'react'

export default function Example1() {
    let numbers = Math.random() * 10
    let message = "Below 5"
    if (numbers > 5) {
        message = "Above 5"
        console.log(numbers);
        // let date= new Date()
        // var time= date.toLocaleTimeString();

    }
    return (
        <div> <h1>{message}</h1>
            <h1>{numbers}</h1>
            <h1>{new Date().toLocaleTimeString()}</h1>
            <input type='number'/>
        </div>
    )
}
