import React, { useRef } from "react";
import "./Post.css";
function Post() {
  const inputref = useRef(null);

  const handlebutton = () => {
    inputref.current.click();
  };
  const handleChange = (e) => {
    const files = e.target.files;
    console.log(files);
  };
  return (
    <div>
      <div className="Post">
        <div className="box">
          <h2>Create new Post</h2>
          <button onClick={handlebutton}>Select From Computer</button>
          <input type="file" ref={inputref} onChange={handleChange} multiple />
        </div>
      </div>
    </div>
  );
}

export default Post;
