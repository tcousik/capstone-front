import React from 'react';
import ProfPic2 from './ProfPic2';
import ProfileForm from './ProfileForm';


export default function ProfileContainer() {
  return (
    <div>
      <h1 className="Header">Profile Page</h1>
      <div className="ProfileContainer">
        <ProfPic2 />
        <ProfileForm />
      </div>
    </div>
  )
}
