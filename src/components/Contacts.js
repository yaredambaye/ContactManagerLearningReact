import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
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
      ]
    };
  }
  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
