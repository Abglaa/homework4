import React, { useState } from "react";
import "./App.css";
import movie from './movie/video.mp4'

export default function App() {
  const [version, setVersion] = useState(0);

  function handleReset() {
    setVersion(version + 1);
  }

  return (
    <>
    <div className="center">
        <video autoPlay loop muted className="bg-video">
            <source src={movie} type="video/mp4"/>
        </video>
      <button className="reset" onClick={handleReset}><h1>Авторизация</h1></button>
      <Form key={version} />
    </div>
    </>
  );
}

function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Представленные данные:", formData);
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your name....."
        />
      </label>
      <label>
        Phone Number:
        <input
          type="number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter your number...."
          
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter you @email"
        />
      </label>
      <button className="btn" type="submit">Submit</button>

      <div>
        <p>Name: {formData.fullName}</p>
        <p>Phone: {formData.phoneNumber}</p>
        <p>Email: {formData.email}</p>
      </div>
    </form>
  );
}
