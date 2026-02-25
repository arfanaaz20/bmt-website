import React, { useState } from "react";
import "./ListProperty.css";

export default function ListProperty() {
  const [formData, setFormData] = useState({
    propertyName: "",
    propertyType: "",
    ownerName: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    price: "",
    rooms: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Property Data 👉", formData);
    alert("Property submitted successfully!");
    // yahan API call add hogi later
  };

  return (
    <div className="list-property-page">
      <h2>List Your Property</h2>
      <p>Fill the details below to list your property with us</p>

      <form className="property-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="propertyName"
          placeholder="Property Name"
          value={formData.propertyName}
          onChange={handleChange}
          required
        />

        <select
          name="propertyType"
          value={formData.propertyType}
          onChange={handleChange}
          required
        >
          <option value="">Select Property Type</option>
          <option>Hotel</option>
          <option>Resort</option>
          <option>Homestay</option>
          <option>Apartment</option>
          <option>Villa</option>
        </select>

        <input
          type="text"
          name="ownerName"
          placeholder="Owner / Manager Name"
          value={formData.ownerName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder="Full Address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price per Night (₹)"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="rooms"
          placeholder="Total Rooms"
          value={formData.rooms}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Property Description"
          value={formData.description}
          onChange={handleChange}
        />

        <button type="submit">Submit Property</button>
      </form>
    </div>
  );
}
