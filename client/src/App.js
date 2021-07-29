import "./App.css";
import { useState } from "react";
import Axios from "axios";
import AddPatient from "./components/addPatient";
import Patient from "./components/patientCard";
import EditPatient from "./components/editPatient";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators, combineReducers } from "redux";
import { actions } from "./state/index";

function App() {
  const [patientList, setPatientList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [patientId, setPatientId] = useState(null);
  const [patientArray, setPatientArray] = useState([]);

  
  const patient = useSelector((state) => state.patient);
  const dispatch = useDispatch();
  const {getPatients} = bindActionCreators(actions, dispatch);

  // const getPatients = () => {
  //   Axios.get("http://localhost:3002/patients").then((response) => {
  //     setPatientList(response.data);
  //     setPatientArray(response.data);
  //   });
  // };

  const fetchPatients = () => {
    getPatients().then(console.log(patient));
  }

  const closeModal = () =>{
    setModalVisible(false);
  }

  const updatePatientdisease = (id, name, age, gender, disease, doctor) => {
    Axios.put("http://localhost:3002/update", {
      id: id,
      name: name,
      age: age,
      gender: gender,
      disease: disease,
      doctor: doctor,
    }).then((response) => {
      setPatientList(
        patientList.map((patient) => {
          return patient.id === id
            ? {
                id: id,
                name: name,
                age: age,
                gender: gender,
                disease: disease,
                doctor: doctor,
              }
            : patient;
        })
      );
    });
    setModalVisible(false);
  };
  const openUpdateModal = (id) => {
    setPatientId(id);
    setModalVisible(true);
  };

  const deletePatient = (id) => {
    Axios.delete(`http://localhost:3002/delete/${id}`).then((response) => {
      setPatientList(
        patientList.filter((patient) => {
          return patient.id !== id;
        })
      );
      setModalVisible(false);
    });
  };

  const searchHandler = (event) => {

    let query = event.target.value.toLowerCase();

    let newList = [];
    let regex = new RegExp(`${query}`);

    patientArray.forEach((element) => {
      if (regex.test(element.name.toLowerCase())) {
        newList.push(element);
        return;
      }
    });
    setPatientList(newList);

  };

  return (
    <>
      <div className="App">
        <AddPatient />
        <div className="patients">
          <div className="display">
            <button onClick={() => fetchPatients()}>Show Patients</button>
            <input
              type="search"
              className="info"
              id="search"
              placeholder="Enter Patient Name to search"
              onChange={(e)=>{
                searchHandler(e);
              }}
            />
          </div>
          {/* {patient.map((val, unique) => {
            return <Patient key={unique} data={val} update={openUpdateModal} />;
          })} */}
          {typeof(patient)}
        </div>
      </div>
      <EditPatient
        id={patientId}
        open={modalVisible}
        update={updatePatientdisease}
        delete={deletePatient}
        close={closeModal}
      />
    </>
  );
}

export default App;
