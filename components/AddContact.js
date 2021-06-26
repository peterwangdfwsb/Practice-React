import { connect } from "react-redux";
import React from 'react';
import { withRouter } from 'react-router-dom';

class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            sex: '',
            age: '',
            password: '',
            repeat: ''
        }
    }


  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: this.props.contacts.length > 0 ? this.props.contacts[this.props.contacts.length - 1].id + 1 : 0,
      //id: this.props.contacts[this.props.contacts.length - 1].id,
      firstname: e.target[0].value,
      lastname: e.target[1].value,
      sex: e.target[2].value,
      age: e.target[3].value,
      password: e.target[4].value,
      repeat: e.target[5].value
    };
    console.log(data);
    this.props.addContact(data);
    this.props.history.push('/');
  };

  render() {
      return (
      <div className="container-fluid">
          <h3 className="text-center text-dark">Create New Users</h3>
          <div className="row">
            <div className="col-md-6 p-5 mx-auto shadow">
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
            <label>First Name</label>
            <input
                className="form-control"
                type="text"
                placeholder="First name"
                value={this.state.firstname}
                onChange={(e) => this.setState({firstname: e.target.value})}
              />
            </div>
            <br />
            <div className="form-group">
              <label>Last Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Last name"
                value={this.state.lastname}
                onChange={(e) => this.setState({lastname: e.target.value})}
              />
            </div>
            <br />
            <div className="form-group">
            <label>Sex</label>
              <input
                className="form-control"
                type="text"
                placeholder="Sex"
                value={this.state.sex}
                onChange={(e) => this.setState({sex: e.target.value})}
              />
            </div>
            <br />
            <div className="form-group">
            <label>Age</label>
              <input
                className="form-control"
                type="text"
                placeholder="Age"
                value={this.state.age}
                onChange={(e) => this.setState({age: e.target.value})}
              />
            </div>
            <br />
            <div className="form-group">
            <label>Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={(e) => this.setState({password: e.target.value})}
              />
            </div>
            <br />
            <div className="form-group">
            <label>Repeat</label>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                value={this.state.repeat}
                onChange={(e) => this.setState({repeat: e.target.value})}
              />
            </div>
            <br />
            <div className="form-group">
              <input
                className="btn btn-block btn-secondary"
                type="submit"
                value="Add User"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  }
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  addContact: (data) => {
    dispatch({ type: "ADD_CONTACT", payload: data });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddPost));