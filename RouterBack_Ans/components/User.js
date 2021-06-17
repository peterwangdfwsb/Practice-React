import { useState, useEffect } from "react";
import axios from "axios";

const Users = ({ history }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.github.com/users?per_page=100")
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Image</th>
          </tr>
        </thead>
        {users.map((user) => {
          return (
            <tr onClick={() => history.push(`/users/${user.login}`)}>
              <td>{user.id}</td>
              <td>{user.login}</td>
              <td><img src={user.avatar_url} alt={user.login} style={{width: 50, height: 50}}/></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Users;