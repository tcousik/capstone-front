import React from 'react'
import User from './User'

export default function UserList(props) {

  const listUsers = props.users.map((user) => {
    return <User key={user.id}
              name={user.name}
              instrument={user.instrument}
              experience={user.experience}
           />
  })

  return (
      <React.Fragment>
        {listUsers}
      </React.Fragment>
  )
}
