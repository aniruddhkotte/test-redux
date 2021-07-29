import { combineReducers } from "redux";
import patientReducer from "./reducers";

 const reducers = combineReducers({
  patientReducer,
});
export default reducers;