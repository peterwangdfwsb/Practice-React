import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Details = ({ match }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${match.params.login}`)
      .then(res => {
        setDetails(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Link to="/users">&lt; go back</Link>
      <p>{`
        login: ${details?.login}
        following: ${details?.following}
        followers: ${details?.followers}
      `}</p>
    </div>
  );
};

export default Details;
