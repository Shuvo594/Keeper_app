import React from "react";


const time = new Date();
const year = time.getFullYear();
console.log(year)

function Foot(){
    return <footer><p>Copyright Ⓒ { year}</p></footer> 
}

export default Foot