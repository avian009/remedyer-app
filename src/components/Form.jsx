import React, { useState } from "react";

function Form(propss) {
  const [detailss, setDetailss] = useState({
    drug: "",
    time: "",
    sideEffect: ""
  });

  function handleChangee(event) {
    const { name, value } = event.target;
    setDetailss((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value
      };
    });
  }

  function submitDetailss(event) {
    propss.onaddd(detailss);
    setDetailss({
      drug: "",
      time: "",
      sideEffect: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="formm">
        <input
          onChange={handleChangee}
          name="drug"
          placeholder="Name of the drug"
          value={detailss.drug}
        />

        <input
          type="time"
          onChange={handleChangee}
          name="time"
          placeholder="Set-time"
          value={detailss.time}
        />

        <textarea
          name="sideEffect"
          onChange={handleChangee}
          placeholder="Side-Effects if any"
          value={detailss.sideEffect}
          rows="3"
        />
        <button onClick={submitDetailss}>Enter</button>
      </form>
    </div>
  );
}

export default Form;
