// import { useState } from "react";

function Patient(props) {
    // const [newDisease, setNewDisease] = useState("");
    //console.log(props.data)
    return (
        <div key={props.key} className="patient">
          <div>
            <h3>Name: {props.data.name}</h3>
            <h3>Age: {props.data.age}</h3>
            <h3>Gender: {props.data.gender}</h3>
            <h3>Disease: {props.data.disease}</h3>
            <h3>Doctor: {props.data.doctor}</h3>
          </div>
          <div className="update">
            {/* <input
              id="update"
              type="text"
              placeholder="Enter new Disease"
              onChange={(event) => {
                setNewDisease(event.target.value);
              }}
            /> */}
            <button
              onClick={() => {
                props.update(props.data.id);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      );
}

export default Patient;