import { useState } from "react";

import "./App.css";

const App = ({
  tags,
  addTag,
  deleteTag,
}) => {
  const [input, setInput] = useState("");

  return (
    <div className="wrapper">
      <ul>
        {tags.map((tag) => (
          <li key={tag.id} className="tag">
            {tag.text}
            <button onClick={() => deleteTag(tag.id)}>x</button>
          </li>
        ))}
        <li>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Add a tag..."
            onKeyUp={e => {
              if (e.key === "Enter") {
                addTag(input);
                setInput("");
              }
            }}
          />
        </li>
      </ul>
     
    </div>
  );
};



export default App;
