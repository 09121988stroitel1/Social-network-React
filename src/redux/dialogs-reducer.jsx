const SEND_MESSAGE  ='SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT ='UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageText
            state.newMessageText = ''; 
            state.messages.push({id: 6, message: body })
            return state
        case UPDATE_NEW_MESSAGE_TEXT: 
             state.newMessageText=action.body
             return state
        default:
            return state
    }
    

}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageTextCreator = (body) => 
({ type: UPDATE_NEW_MESSAGE_TEXT, body: body})

export default dialogsReducer