import React from 'react'

export default function User(props) {
  return (
    <React.Fragment>
      <h2>{props.name}</h2>
      <h4>{props.instrument}</h4>
      <h4>{props.experience}</h4>
    </React.Fragment>
  )
}
