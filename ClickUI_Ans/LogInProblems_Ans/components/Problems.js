import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Problems = ({ history }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("authenticated") !== "true") {
      history.push("/login");
      return;
    }

    axios.get("http://api.haochuan.io/oj/problems")
      .then(res => setList(res.data.questions))
      .catch(err => console.log(err));
  }, []);

  return (
    <ul>
      {list.map((problem) => {
        return (
          <li key={problem.id}>
            <Link to={`/${problem.id}`}>
              {problem.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Problems;
