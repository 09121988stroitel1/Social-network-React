import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  console.log(props.profile)
  if (!props.profile) {
    return <Preloader />
  }
  return <div>
    <div>
      <img className={s.content_image}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVKAHA-eA3DwHQjI2McAwIkx4CeIus7DJWA&usqp=CAU' alt='utg' />
    </div>
    <div className={s.descriptionBlock}>
      <div>
        <img className={s.content_image_photo}
          src={props.profile.photos.large} alt='utg' />
      </div>
      <p>{props.profile.fullName} </p>
      <p>aboutMe: {props.profile.aboutMe} </p>
      <p>lookingForAJobDescription: {props.profile.lookingForAJobDescription} </p>
      <p>contacts: {props.profile.contacts.vk} </p>
    </div>


  </div>
}

export default ProfileInfo




