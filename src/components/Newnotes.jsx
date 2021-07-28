import React, { useState } from "react";

function newnote(propss) {
  return (
    <div className="note">
      <h1>Drug-{propss.drug}</h1>
      <p>time:{propss.time}</p>
      <p>{propss.sideEffect} </p>
    </div>
  );
}

export default newnote;
