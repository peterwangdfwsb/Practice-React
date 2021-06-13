import useGetUsers from "./hooks/use-get-users";
import useGetDetails from "./hooks/use-get-details";

const App = () => {
  const userList = useGetUsers();
  const [userDetails, getDetailsHandler] = useGetDetails();

  return (
    <div>
      <div>
        <h2>List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {userList.map(({ id, login, avatar_url }) => (
              <tr key={id} onClick={() => getDetailsHandler(login)}>
                <td>{id}</td>
                <td>{login}</td>
                <td><img src={avatar_url} alt={`for ${login}`} style={{ width: 50, height: 50 }}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2>Details</h2>
        {userDetails && <div>
            <p>{`name: ${userDetails.login}`}</p>
            <p>{`location: ${userDetails.location}`}</p>
            <p>{`following: ${userDetails.following}`}</p>
            <p>{`followers: ${userDetails.followers}`}</p>
          </div>}
      </div>
    </div>
  );
};

export default App;
