import { ChromePicker } from "react-color";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

function App() {
  const [color, setColor] = useState("#fff");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPhone(e.target.value);
  };

  const handleDOBChange = (e) => {
    setDob(e.target.value);
  };
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    alert("A form was submitted");

    e.preventDefault();
  };
  return (
    <div className="App">
      <header className="App-header">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h3> Form </h3>

          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />

          <br />

          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            required
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          <br />

          <label>Phone no:</label>
          <br />
          <input
            type="tel"
            value={phone}
            required
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
          <br />

          <label>Date of Birth:</label>
          <br />
          <input
            type="date"
            value={dob}
            required
            onChange={(e) => {
              handleDOBChange(e);
            }}
          />
          <br />

          <label
            onClick={() =>
              setShowColorPicker((showColorPicker) => !showColorPicker)
            }
          >
            Color (clickhere):{color}
          </label>
          <br />
          <input
            value={color}
            required
            onChange={(e) => {
              handleColorChange(e);
            }}
          />

          {showColorPicker && (
            <ChromePicker
              color={color}
              onChange={(updatedColor) => setColor(updatedColor.hex)}
            />
          )}
          <br />

          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
