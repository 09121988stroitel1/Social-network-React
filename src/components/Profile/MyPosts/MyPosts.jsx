import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { useForm } from "react-hook-form";




const MyPosts = (props) => {

  let postElement =
    props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />);

  return <div className={s.postsBlock}>
    <h3>My post</h3>

    <AddNewPostForm addPost={props.addPost} />

    <div className={s.posts}>
      {postElement}
    </div>
  </div>
}

const AddNewPostForm = (props) => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    props.addPost(data.newPostText);

    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <textarea
          {...register('newPostText')} />
      </div>
      <div>
        <button type='submit'>Add post</button>
      </div>
    </form>
  )
}

export default MyPosts