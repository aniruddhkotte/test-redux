import { useState, useEffect } from "react";
import Modal from "react-modal";
import Axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    background: "#23202142",
  },
};

function EditPatient(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [disease, setDisease] = useState("");
  const [doctor, setDoctor] = useState("");

  useEffect(() => {
    Axios.get(`http://localhost:3002/patient/${props.id}`).then((response) => {
      let data = response.data[0];
      if (data !== undefined) {
        setName(data["name"]);
        setAge(data["age"]);
        setGender(data["gender"]);
        setDisease(data["disease"]);
        setDoctor(data["doctor"]);
      }
    });
  }, [ props.id]);

  const formChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    // console.log(val);
    switch (nam) {
      case "name":
        setName(val);
        break;
      case "age":
        setAge(val);
        break;
      case "gender":
        setGender(val);
        break;
      case "disease":
        setDisease(val);
        break;
      case "doctor":
        setDoctor(val);
        break;
      default:
        break;
    }
  };
  return (
    <>
        <Modal
          isOpen={props.open}
          style={customStyles}
          contentLabel="Edit Patient"
          ariaHideApp={false}
        >
          <div className="edit-patient-modal">
            <div className="name">
              <p>Name:</p>
              <input
                id="name"
                type="text"
                name="name"
                value={name}
                placeholder="Enter patient's name"
                onChange={formChangeHandler}
              />
            </div>
            <div className="age">
              <p>Age:</p>
              <input
                type="text"
                name="age"
                value={age}
                placeholder="Enter patient's age"
                onChange={formChangeHandler}
              />
            </div>
            <div className="gender">
              <p>Gender:</p>
              <input
                type="text"
                name="gender"
                value={gender}
                placeholder="Enter patient's gender"
                onChange={formChangeHandler}
              />
            </div>
            <div className="disease">
              <p>Disease:</p>
              <input
                type="text"
                name="disease"
                value={disease}
                placeholder="Enter patient's disease"
                onChange={formChangeHandler}
              />
            </div>
            <div className="doctor">
              <p>Doctor:</p>
              <input
                type="text"
                name="doctor"
                value={doctor}
                placeholder="Enter doctor appointed"
                onChange={formChangeHandler}
              />
            </div>
            <div className="update">
              <button
                onClick={() => {
                  props.update(props.id, name, age, gender, disease, doctor);
                }}
              >
                Update
              </button>
              <button
                onClick={() => {
                  props.delete(props.id);
                }}
              >
                Delete Patient
              </button>
              <button
                onClick={() => {
                  props.close();
                }}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
    </>
  );
}

export default EditPatient;
