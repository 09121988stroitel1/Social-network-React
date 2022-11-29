import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { useForm } from "react-hook-form";
// import { Navigate } from "react-router-dom";



const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d =>
    <DialogItem name={d.name} key={d.id} id={d.id}
    />);
  let messagesElements = state.messages.map(m =>
    <Message message={m.message} key={m.id}
    />);
  let newMessageText = state.newMessageText

  let onNewMessageChange = (e) => {
    let body = e.target.value
    props.updateNewMessageText(body)
  }

  // if(!props.isAuth) {
  //   return < Navigate to ="/login" />;
  //  } 
  return (
    <div className={s.dialogs}>

      <div className={s.dialogsItem}>

        {dialogsElements}

      </div>

      <div className={s.messages}>
        <div>{messagesElements}</div>
        
        <AddMessageForm sendMessage={props.sendMessage}/>
      </div>

    </div>
  )

}

const AddMessageForm = (props) => {
  const {
    register,
    handleSubmit,
    reset
} = useForm({
    mode: "onBlur",
});

const onSubmit = (data) => {
  props.sendMessage(data.message);
reset();
}
return (
  <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <textarea 
              {...register('message')}
            // onChange={onNewMessageChange}
              placeholder='Enter your message'
              // value={newMessageText} 
              />
          </div>
          <div>
            <button type='submit'>Send</button>
          </div>
        </form>
)
}



export default Dialogs