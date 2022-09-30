 import { render } from "react-dom";
import {rerernderEntireTree} from '../render'


  let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It\`s my first post", likesCount: 11},
            {id: 3, message: "Hello", likesCount: 1},
          ],
        newPostText: 'it-Kamasutra'
           },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Lekha'},
            {id: 2, name: 'Lilia'},
            {id: 3, name: 'Uliana'},
            {id: 4, name: 'Alena'},
            {id: 5, name: 'Er'},
            {id: 6, name: 'Diama'},
          ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are your?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
           
          ]   
    },
    // sidebar: {

    // } 


  }

  export let addPost = () => {
    let newPost = {
      id: 5,
      message: state.profilePage.newPostText,
      likesCounter: 0

    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText ='';
     rerernderEntireTree(state);
  }

  export let updateNewPostText = (newText) => {
    state.profilePage.newPostText=newText
    rerernderEntireTree(state);

    };
   
  


  export default state