import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from 'react-bootstrap-table2-paginator';

const { SearchBar } = Search;

const Table = ({ contacts, deleteContact }) => {
  const columns = [
    {
      dataField: "firstname",
      text: "First Name"
    },
    {
      dataField: "lastname",
      text: "Last Name"
    },
    {
      dataField: "sex",
      text: "Sex"
    },
    {
      dataField: "age",
      text: "Age"
    },
    {
        dataField: "edit",
        text: "Edit"
      },
      {
        dataField: "delete",
        text: "Delete"
      }
  ];

  const datatest = contacts.map((contact, id) => (
      {
          id: id,
          firstname: contact.firstname,
          lastname: contact.lastname,
          sex: contact.sex,
          age: contact.age,
          edit: 
          <Link
          to={`/edit/${contact.id}`}
          className="btn btn-outline-primary btn-sm">
          Edit
          </Link>,
          delete: 
          <button
          type="button"
          onClick={() => deleteContact(contact.id)}
          className="btn btn-outline-danger btn-sm">
          Delete
        </button>
      }
  ) )

    return (
        <div className="container">
        <div className="row d-flex flex-column">
          <div className="col-md-10 mx-auto my-4">
            <h2>Users</h2>
            <br />
      <div>
        <ToolkitProvider
          bootstrap4
          keyField="name"
          data={datatest}
          columns={columns}
          search
        >
          {props => (
            <div>
              <SearchBar
                {...props.searchProps}
                style={{ width: "400px", height: "40px" }}
              />
              <hr />
              <BootstrapTable
                {...props.baseProps}
                filter={filterFactory()}
                pagination={ paginationFactory()}
                noDataIndication="There is no solution"
                striped
                hover
                condensed
              />
            </div>
          )}
        </ToolkitProvider>
        <Link to="/add" className="btn btn-outline-secondary my-5 ml-auto ">
          Add Contact
        </Link>
      </div>
      </div>
      </div>
      </div>
    );
  }

const mapStateToProps = (state) => ({
    contacts: state,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    deleteContact: (id) => {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    },
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Table);
