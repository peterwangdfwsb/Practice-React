import { useEffect } from "react";
import { connect } from "react-redux";

import { fetchUsers, fetchDetails } from "./redux/action-creators";

function App({
  fetchUsers,
  users,
  details,
  fetchDetails
}) {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <ul>
        {users.data.map(user => <li onClick={() => fetchDetails(user.login)}>{user.login}</li>)}
      </ul>
      {details?.data && <div>
          <h2>Details</h2>
          <p>User login: {details.data.login}</p>
        </div>}
    </div>
  );
}

const mapStateToProps = state => ({
  users: state.userList,
  details: state.details
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchDetails: (login) => dispatch(fetchDetails(login))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
