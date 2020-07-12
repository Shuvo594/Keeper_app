import React from "react";

function Note(props){
    return <div className= "note">
    <h1>{props.noteTitle}</h1>
    <p>{props.noteName}</p>
    </div>
}

export default Note