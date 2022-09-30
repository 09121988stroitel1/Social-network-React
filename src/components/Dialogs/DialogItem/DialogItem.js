 import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem =(props) => {
    
    let path = "/dialogs/" + props.id;

    return ( 
    <div className={s.dialog + ' ' + s.active}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyQ3Ez7fGNDmuULcJxaGc3CxZ5ohwAoFeGQ&usqp=CAU'/>
    <NavLink to={path}>{props.name}</NavLink>
</div>
    )
} 


export default DialogItem