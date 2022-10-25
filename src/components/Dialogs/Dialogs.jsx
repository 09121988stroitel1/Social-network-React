import React, { component } from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d =>
    <DialogItem name={d.name} key = {d.id} id={d.id}
    />);
  let messagesElements = state.messages.map(m =>
    <Message message={m.message} key = {m.id}
    />);
  let newMessageText = state.newMessageText


  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value
    props.updateNewMessageText(body)
  }

  return (
    <div className={s.dialogs}>

      <div className={s.dialogsItem}>

        {dialogsElements}

      </div>

      <div className={s.messages}>
        <div>{messagesElements}</div>

        <div>
          <textarea onChange={onNewMessageChange}
            placeholder='Enter your message'
            value={newMessageText} />
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
          {/* <button>Remove</button> */}
        </div>
      </div>

    </div>
  )
}

export default Dialogs