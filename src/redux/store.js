import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

  _state: {
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
           
           ],
           newUserName: 'Vasia',
         messages: [
             {id: 1, message: 'Hi'},
             {id: 2, message: 'How are your?'},
             {id: 3, message: 'Yo'},
             {id: 4, message: 'Yo'},
             {id: 5, message: 'Yo'},
            
           ],
           newMessageText: ''   
     },
     sidebar: {
 
     } 
 
    },
 
   _callSubscriber() {
    console.log('State change');
    },

   getState() {
     return this._state
    },

   subscribe(observer) {
    this._callSubscriber = observer
    },  
  
    dispatch(action) {

      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);

      this._callSubscriber(this._state);
       
    }
  
 }

 
   export default store;
    window.store = store;
 