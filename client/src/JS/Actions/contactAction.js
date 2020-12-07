import {
  GET_ALL_USERS,
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_LOAD,
  GET_USER
} from "../Constants/contactActionTypes";
import  axios  from "axios";



export const getAllContacts =() =>  async (dispatch) => {
  dispatch({ type: GET_ALL_USERS_LOAD });
  try {
    let result = await axios.get("/api/contact/");
    dispatch({ type: GET_ALL_USERS, payload: result.data});
  } catch (error) {
    dispatch({ type: GET_ALL_USERS_FAIL, payload: error });
  }
};
export const addUser =(user) =>  async (dispatch) => {

  try {
     user = await axios.post("/api/contact/",user);
    dispatch(getAllContacts());
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser =(id) =>  async (dispatch) => {

  try {
      await axios.delete(`/api/contact/${id}`);
    dispatch(getAllContacts());
  } catch (error) {
    console.log(error);
  }
};
export const getUser =(id) =>  (dispatch) => {

   axios.get(`/api/contact/${id}`)
    .then(res=>dispatch({ type: GET_USER, payload: res.data.response }))
  .catch ((error)=> 
    console.log(error))
  
};

export const editUser = (id, userr) => (dispatch) => {
  axios
    .put(`/api/contact/${id}`, userr)
    .then((res) => dispatch(getAllContacts()))
    .catch((err) => console.log(err));
};


