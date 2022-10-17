import React, { component } from 'react';
import s from './Dialogs.module.css';
// import DialogItem from './DialogItem/DialogItem';
// import Message from './Message/Message';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import { updateNewMessageTextCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
// import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';


// const DialogsContainer = () => {

//   // let state = props.store.getState().dialogsPage;

//   // let onSendMessageClick = () => {
//   //   props.store.dispatch(sendMessageCreator())
//   // }

//   // let onNewMessageChange = (body) => {
//   //   props.store.dispatch(updateNewMessageTextCreator(body))
//   // }

//   return (
//     <StoreContext.Consumer>
//        {(store) => {
//         let state = store.getState().dialogsPage;

//         let onSendMessageClick = () => {
//           store.dispatch(sendMessageCreator())
//         }
      
//         let onNewMessageChange = (body) => {
//           store.dispatch(updateNewMessageTextCreator(body))
//         }
//    return <Dialogs updateNewMessageText={onNewMessageChange}
//                    sendMessage={onSendMessageClick}
//                    dialogsPage={state}
//     />
//     }
//     }
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
return {
  updateNewMessageText: () => {
    dispatch(sendMessageCreator())
  },
  sendMessage: (body) => {
    dispatch(updateNewMessageTextCreator(body))
  }
}
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)
(Dialogs);


export default DialogsContainer