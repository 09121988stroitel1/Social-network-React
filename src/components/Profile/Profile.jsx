import React, { component } from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css'

const Profile = (props) => {

 


  return <div className={s.prof}>
    <ProfileInfo />
    <MyPosts posts = {props.profilePage.posts}
    newPostText = {props.profilePage.newPostText}
    addPost ={props.addPost} 
    updateNewPostText={props.updateNewPostText}
    />

  </div>
}

export default Profile