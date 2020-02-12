import React, { Component } from "react";
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Yadaw Tsehaye",
        email: "yadaw@gmail.com",
        phone: "555-555-5555",
        fax: "120-213-5434"
      },
      {
        id: 2,
        name: "Fili man",
        email: "filimangmail.com",
        phone: "666-666-5555",
        fax: "513-412-1234"
      },
      {
        id: 3,
        name: "Homer Simpson",
        email: "homie@gmail.com",
        phone: "777-555-7777",
        fax: "124-554-1212"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
