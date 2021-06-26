import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = ({ contacts, deleteContact }) => {

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <div className="col-md-10 mx-auto my-4">
          <h2>Users</h2>
          <input class="form-control" type="text" placeholder="Search"></input>
          <br />
          <table className="table table-hover">
            <thead className="table-header bg-success text-white">
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Sex</th>
                <th scope="col">Age</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{contact.firstname}</td>
                    <td>{contact.lastname}</td>
                    <td>{contact.sex}</td>
                    <td>{contact.age}</td>
                    <td>
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-outline-primary btn-sm"
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => deleteContact(contact.id)}
                        className="btn btn-outline-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
          </table>
          <Link to="/add" className="btn btn-outline-success my-5 ml-auto ">
          Add Contact
        </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);