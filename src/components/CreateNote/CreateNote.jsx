import React, {useState} from "react";
import "./CreateNote.css";

const CreateNote = (props) => {
  const [note, setNote]= useState({
    title:"",
    content:"",
  });

  const inputHandler =(e) => {
    const { value, name} = e.target;

    setNote((prevData) => {
    return {
      ...prevData,
      [name]: value,
    };
    });

    console.log(note);
  };


  const createNoteHandler =(e) => {
    e.preventDefault();
    props.passNote(note);
    setNote({
      title:"",
      content:"",
    });
  };


  return (
    <div className="createnote-container">
      <div className="createnote">
        <form>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={inputHandler}
            autoComplete="off"
            required
        
          />
          <textarea
            type="text"
            rows="8"
            placeholder="Take a note..."
            name="content"
            value={note.content}  
            onChange={inputHandler}
            autoComplete="off"
            required         
          ></textarea>
          <button onClick={createNoteHandler}>Add Note</button>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;