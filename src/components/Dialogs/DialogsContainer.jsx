import { sendMessageCreator } from '../../redux/dialogs-reducer';
import { updateNewMessageTextCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
// import {authReducer} from '../../redux/auth-reducer'
// import { Navigate } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';


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
    dialogsPage: state.dialogsPage,
  }
}
let mapDispatchToProps = (dispatch) => {
return {
  sendMessage: (message) => {
    dispatch(sendMessageCreator(message))
  },
  updateNewMessageText: (body) => {
    dispatch(updateNewMessageTextCreator(body))
  }
}
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)

// let AuthRedirectComponent = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)
// (AuthRedirectComponent);


// export default DialogsContainer

