import React, { useState } from 'react';

function AddContact({ addContact }) {
  const [contactData, setContactData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    const { name, email } = contactData;
    if (name === '' || email === '') {
      alert('Please fill in all the details');
      return;
    }
    addContact(contactData);
    setContactData({ name: '', email: '' });
  };

  return (
    <div className="formHeader">
      <div className="add-contact">Add Contacts</div>
      <form>
        <label>Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={contactData.name}
          onChange={handleChange}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
        />
      </form>
      <button className="btn" onClick={handleAdd}>
        Add Contact
      </button>
    </div>
  );
}

export default AddContact;
