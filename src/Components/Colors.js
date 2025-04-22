import React from 'react'

export default function Colors(props) {
  return (
    <div>
        <h1 style={{color:props.color}}>hello</h1>
        <h1>{props.title}</h1>

        </div>
  )
}
