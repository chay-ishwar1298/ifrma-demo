import React, { useEffect, useState } from "react";

export const ChildWindow = () => {
  const [recievedMessage, setRecievedMessage] = useState("");

  const sendMessage = () => {
    window.parent.postMessage("Hiii from child!", "http://localhost:3000");
  };

  function handleEvent(e) {
    if (e.origin !== "http://localhost:3000") return;
    console.log(e.data);
    typeof e.data === "string" && setRecievedMessage(e.data);
  }

  useEffect(() => {
    window.addEventListener("message", handleEvent);
    return () => {
      window.removeEventListener("message", handleEvent);
    };
  });

  return (
    <div>
      <h2>iFrame child</h2>
      <button onClick={sendMessage}>Send message to parent</button>
      <div> {recievedMessage} </div>
    </div>
  );
};
