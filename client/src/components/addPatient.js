import { useState } from "react";
import Axios from "axios";

function AddPatient() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [disease, setDisease] = useState("");
  const [doctor, setDoctor] = useState("");

  const addPatient = () => {
    Axios.post("http://localhost:3002/add", {
      name: name,
      age: age,
      gender: gender,
      disease: disease,
      doctor: doctor,
    }).then(() => {
      clearInput();
    });
  };

  const clearInput = () => {
    document.getElementById("pName").value = "";
    document.getElementById("pAge").value = "";
    document.getElementById("pGender").value = "";
    document.getElementById("pDisease").value = "";
    document.getElementById("pDoctor").value = "";
  };

  return (
    <div className="info">
      <div className="name">
        <label>Name:</label>
        <input
            id="pName"
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      <div className="age">
        <label>Age:</label>
        <input
          id="pAge"
          type="text"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
      </div>
      <div className="gender">
        <label>Gender:</label>
        <input
          id="pGender"
          type="text"
          onChange={(event) => {
            setGender(event.target.value);
          }}
        />
      </div>
      <div className="disease">
        <label>Disease:</label>
        <input
          id="pDisease"
          type="text"
          onChange={(event) => {
            setDisease(event.target.value);
          }}
        />
      </div>
      <div className="doctor">
        <label>Doctor:</label>
        <input
          id="pDoctor"
          type="text"
          onChange={(event) => {
            setDoctor(event.target.value);
          }}
        />
      </div>
      <button onClick={addPatient}>Add Patient</button>
    </div>
  );
}

export default AddPatient;
