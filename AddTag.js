import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleKeyDown = (e) => {
    const {key} = e;
    const inputTrimmed = input.trim();

    if (key === ',' && inputTrimmed.length && !tags.includes(inputTrimmed)) {
      e.preventDefault();
      setTags(prevState => [...prevState, inputTrimmed]);
      setInput('');
    }
  }

  const deleteTag = (index) => {
    setTags(prevState => prevState.filter((tag, i) => i !== index));
  }

  return (
    <div>
      {tags.map((tag, index) => {
        return (
        <div>
          {tag}
          <button onClick={() => deleteTag(index)}>x</button>
        </div>
          )})}
      <input
      value={input}
      placeholder='Add a tag...'
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      />
    </div>
  );

}

export default App;
