import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    fax: "",
    phone: ""
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { name, email, phone, fax } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control from-control-ng"
                placeholder="Enter Name..."
                value={name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control from-control-ng"
                placeholder="Enter Email..."
                value={email}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control from-control-ng"
                placeholder="Enter Phone Number..."
                value={phone}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fax">Fax</label>
              <input
                type="text"
                name="fax"
                className="form-control from-control-ng"
                placeholder="Enter Fax Number..."
                value={fax}
                onChange={this.onChange}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-dark btn-block"
            ></input>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
