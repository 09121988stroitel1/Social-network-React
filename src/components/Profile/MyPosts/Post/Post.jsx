import React, { component } from 'react';
import s from './Post.module.css'

const Post = (props) => {



  return ( 
   
      <div className={s.item}>
       
        <img src='https://klike.net/uploads/posts/2019-06/1560329641_2.jpg'/>
        {props.message}
        <div>
        <span>like: {props.likeCount}</span>
        {/* <span>dislike</span> */}
        </div>
      </div>
     
    )

}

export default Post