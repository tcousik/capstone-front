import React from 'react';
import ProfilePic from './ProfilePic';
import ProfileForm from './ProfileForm';


export default function ProfileContainer() {
  return (
    <div>
      <h1 className="Header">Profile Page</h1>
      <div className="ProfileContainer">
        <ProfilePic />
        <ProfileForm />
      </div>
    </div>
  )
}
