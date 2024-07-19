import React, { useEffect, useState } from "react";
import "./App.css";
function Demo() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/message")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      });
  }, []);

  return <div className="flex text-white justify-center">{message}</div>;
}

export default Demo;
