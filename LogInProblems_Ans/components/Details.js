import { useState, useEffect } from "react";
import axios from "axios";

const Details = ({ match, history }) => {
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoaindg] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("authenticated") !== "true") {
      history.push("/login");
      return;
    }
    setIsLoaindg(true);
    axios.get(`http://api.haochuan.io/oj/problems/${match.params.problemId}`)
      .then(res => {
        setDetails(res.data.question);
        setIsLoaindg(false);
      })
      .catch(err => { 
        console.log(err);
        setIsLoaindg(false);
      });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const formattedInput = input.replace(/\s/g, "");

    if (!/^(true|false)$/.test(formattedInput)) {
      setResult({
        message: "Your answer can only be true or false.",
        isError: true
      });
      return;
    }
    
    
    const requestPayload = { answer: formattedInput === "true" ? true : false };
    setResult(null);
    axios.post(`http://api.haochuan.io/oj/problems/${match.params.problemId}/solution`, requestPayload)
      .then(res => {
        setResult({
          message: res.data.pass ? "Your answer is correct." : "Your answer is wrong.",
          isError: !res.data.pass
        });
      })
      .catch(err => {
        setResult({
          message: "Something went wrong.",
          isError: true
        });
      });
  }

  if (isLoading) {
    return <div>Loading problem.......</div>;
  }

  return (
    <div>
      <h1>{details?.title}</h1>
      <p>{details?.content}</p>
      {result && <div style={{ color: result.isError ? "red" : "green" }}>{result.message}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="answer">Type your answer here:</label>
        <input id="answer" name="answer" value={input} onChange={e => setInput(e.target.value)} />
        <button type="submit">Submit Answer</button>
      </form>
    </div>
  );
};

export default Details;
