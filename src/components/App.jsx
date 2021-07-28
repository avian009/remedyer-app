import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [store, setStore] = useState([]);

  function adddetails(details) {
    setStore((prevdetails) => {
      return [...prevdetails, details];
    });
  }
  function deletedetails(id) {
    setStore((prevdetails) => {
      return prevdetails.filter((storeitem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onadd={adddetails} />
      <div className="tt">Patient-Record</div>

      {store.map((storeitem, index) => {
        return (
          <Note
            key={index}
            id={index}
            name={storeitem.name}
            age={storeitem.age}
            ondelete={deletedetails}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
