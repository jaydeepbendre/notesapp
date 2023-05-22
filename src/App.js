import React, {useState} from "react";
import "./App.css";
import CreateNote from './components/CreateNote/CreateNote';
import Note from './components/Note/Note';

const App= () => {
    const [addItem, setAddItem]= useState([]);

    const createNote =(note)=> {
        setAddItem((oldData)=> {
            return [...oldData, note];
        });

        console.log(note);
    };

    const deleteNote=(id) => {
        setAddItem((data) =>
        data.filter((value, index) => {
            return index !==id
        }))
    };

    return (
        <div>
            <h1>Notes</h1>
    < CreateNote passNote={createNote} />
    <div className="notes">
        {addItem.map((value, index) => {
            return(
                <Note
                key={index}
                id={index}
                title={value.title}
                content={value.content}
                delete={deleteNote}
                />
            );
        })}

    </div>
    </div>
    )
}

export default App;