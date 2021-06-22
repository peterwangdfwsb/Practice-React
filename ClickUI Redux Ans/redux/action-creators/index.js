import axios from "axios";

const fetchUsersStart = () => ({ type: "FETCH_USERS_START" });
const fetchUsersSuccess = (data) => ({ type: "FETCH_USERS_SUCCESS", data });
const fetchUsersFail = (error) => ({ type: "FETCH_USERS_FAIL", error });

export const fetchUsers = () => (dispatch) => {
  dispatch(fetchUsersStart());
  axios.get("https://api.github.com/users?per_page=100")
    .then(res => {
      dispatch(fetchUsersSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchUsersFail(err));
    });
}


const fetchDetailStart = () => ({ type: "FETCH_DETAILS_START" });
const fetchDetailSuccess = (data) => ({ type: "FETCH_DETAILS_SUCCESS", data });
const fetchDetailFail = (error) => ({ type: "FETCH_DETAILS_FAIL", error });

export const fetchDetails = (login) => (dispatch) => {
  dispatch(fetchDetailStart());
  axios.get(`https://api.github.com/users/${login}`)
    .then(res => {
      dispatch(fetchDetailSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchDetailFail(err));
    });
}