import React, { Component } from "react";
import propTypes from "prop-types";
import { Consumer } from "../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faAngleDoubleUp,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
  state = {
    showContactInfo: false,
    buttonIcon: faAngleDoubleDown
  };

  onshowClick(email, e) {
    this.setState({
      showContactInfo: !this.state.showContactInfo,
      buttonIcon:
        this.state.buttonIcon === faAngleDoubleDown
          ? faAngleDoubleUp
          : faAngleDoubleDown
    });
  }
  onDeleteClick(id, dispatch) {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  }

  render() {
    const { id, name, email, phone, fax } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3 ">
              <h4>
                {name}
                <i
                  style={{ cursor: "pointer" }}
                  onClick={this.onshowClick.bind(this, email)}
                >
                  &nbsp;
                  <FontAwesomeIcon icon={this.state.buttonIcon} size="1x" />
                </i>
                <i
                  style={{
                    cursor: "pointer",
                    color: "#ba0921",
                    float: "right"
                  }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} size="1x" />
                </i>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                  <li className="list-group-item">Fax: {fax}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: propTypes.object.isRequired
};

export default Contact;
