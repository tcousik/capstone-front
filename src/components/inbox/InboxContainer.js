import React from 'react'
import Logo from './Logo'
import Inbox from './Inbox'
import Title from './Title'

export default function InboxContainer() {
  return (
    <div className="Inbox">
      <Title />
        <div className="InboxContainer">
          <Logo />
          <Inbox />
        </div>
      </div>
  )
}
