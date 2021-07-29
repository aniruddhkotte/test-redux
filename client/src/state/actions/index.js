import Axios from "axios";

export const getPatients = () => async (dispatch) => {
    const res = await Axios.get("http://localhost:3002/patients").then((response) => response);
    return (dispatch) => {
        dispatch({
            type: 'getPatients',
            payload: res.data
        })
    }
}