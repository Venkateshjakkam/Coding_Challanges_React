import React, { useState } from "react";

const PhoneBookApp = () => {
  // State for storing form inputs
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "123-456-7890",
  });

  // State for storing submitted contacts
  const [contacts, setContacts] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts([...contacts, formData]);
    // Reset form fields after submission
    setFormData({ firstName: "", lastName: "", phoneNumber: "" });
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Simple Phone Book</h2>

      {/* Form Section */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <button type="submit">Submit</button>
      </form>

      {/* Table Section */}
      {contacts.length > 0 && (
        <table border="1" style={{ margin: "auto", width: "50%" }}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PhoneBookApp;
