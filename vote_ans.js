import {useState} from 'react';
import React from 'react';

const App = () => {
  const [details, setDetails] = useState({
    data: [
      { id: "0", name: "stack overflow", like: 0, dislike:0, url: 'https://stackoverflow.com/' },
      { id: "1", name: "youtube", like: 0, dislike:0, url: 'https://www.youtube.com/' },
      { id: "2", name: "google", like: 0, dislike: 0, url: 'https://www.google.com/' }
    ]
  });

  const handleAdd = (id) => {
    setDetails({data: details.data.map((ele) => {
      if (id !== ele.id) {
        return ele;
      }
      return {...ele, like: ele.like+1}
    })});
  }

  return (
    <div>
      <ul>
    {details.data.map((ele) => {
      return (
          <li key={ele.id}>
            <p>{ele.name}</p>
            <p>{ele.like}</p>
            <button onClick={() => {
              handleAdd(ele.id);
            }}>Add</button>
        </li>
      );
    })}
    </ul>
    </div>
  );

}
