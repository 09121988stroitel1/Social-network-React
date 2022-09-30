import React, { component } from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return   <div>
    
    <div>
      <img className={s.content_image} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVKAHA-eA3DwHQjI2McAwIkx4CeIus7DJWA&usqp=CAU' alt='utg'/>
    </div>
    <div className={s.descriptionBlock}>
       ava + description
    </div>


  </div>
}

export default ProfileInfo