import React from 'react';
import "./Note.css";
import { AiOutlineDelete} from "react-icons/ai";

const Note = (props) => {

  const deleteItem =() => {
    props.delete(props.id)
  }


  return (
      <div className='note'>
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <AiOutlineDelete className='deleteicon' size ="25px" onClick={deleteItem} />
      </div>

  )
}

export default Note