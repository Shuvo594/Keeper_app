import React from "react";
import Head from "./header";
import Note from "./note";
import Foot from "./footer";
import notes from "./notes"

// function CreatNote(emo) {
//   return (
//     <Note
//       noteKey ={emo.key}
//       noteTitle={emo.title}
//       noteName={emo.content}       (we can represent this function as arrow function 
//                                         as bellow)
      
//     />
//   );
// }



function App() {
  return (<div>
    <Head />
    
    {notes.map(emo => (
    <Note
      noteKey ={emo.key}
      noteTitle={emo.title}
      noteName={emo.content}
      
    />
    )
    )}
    
    <Foot />
    </div>     
  )

}

export default App;