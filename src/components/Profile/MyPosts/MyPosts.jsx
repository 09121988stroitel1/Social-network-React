import React, { component } from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {



let postElement = 
props.posts.map(p =>  <Post message={p.message} likeCount={p.likesCount}/>);

let newPostElement = React.createRef();

let addPost = () => {
  props.addPost()
 
  

}

let onPostChange = () => {
  let text = newPostElement.current.value
  props.updateNewPostText(text)
}

  return <div className={s.postsBlock}>
   <h3>My post</h3> 
    <div>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement}
        value={props.newPostText}
        />
      </div>
      <div>
        <button onClick={ addPost }>Add post</button>
        {/* <button>Remove</button> */}
      </div>
    </div>
    <div className={s.posts}>
      { postElement }
    </div>
  </div>


}

export default MyPosts