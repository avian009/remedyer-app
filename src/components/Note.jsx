import React, { useState } from "react";
import Form from "./Form";
import Newnote from "./Newnotes";
function Note(props) {
  const [storee, setStoree] = useState([]);

  function addDetailss(detailss) {
    setStoree((prevdetails) => {
      return [...prevdetails, detailss];
    });
  }
  function handleDeletee() {
    props.ondelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.name}</h1>
      <p>age : {props.age}</p>
      <button onClick={handleDeletee}>DELETE</button>

      <Form onaddd={addDetailss} />
      {storee.map((storeItemm, indexx) => {
        return (
          <Newnote
            key={indexx}
            id={indexx}
            drug={storeItemm.drug}
            time={storeItemm.time}
            sideEffect={storeItemm.sideEffect}
          />
        );
      })}
    </div>
  );
}

export default Note;
