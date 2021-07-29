import { getPatients, addPatient } from "../actions";

const initialState = [];

function patientReducer(patients = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "addPatient":
      return [...patients, payload];

    case "getPatients":
      return payload;

    default:
      return patients;
  }
}

export default patientReducer;
