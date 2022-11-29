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
    //   newMessageText: ''   
};

const dialogsReducer = (state = initialState, action) => {
    // let stateCopy = { 
    //     ...state,
    //     messages: [...state.messages]
    //     };
    
        
    switch(action.type) {
        case SEND_MESSAGE:  
        let body = action.message
            return { 
                ...state,
                // newMessageText: '',
                messages: [...state.messages, {id: 6, message: body }],
                };
        case UPDATE_NEW_MESSAGE_TEXT: 
           return { 
                ...state,
                newMessageText: action.body,
                };
        default:
            return state
    }
    

}


export const sendMessageCreator = (message) => ({ type: SEND_MESSAGE, message })

export const updateNewMessageTextCreator = (body) => 
({ type: UPDATE_NEW_MESSAGE_TEXT, body: body})

export default dialogsReducer