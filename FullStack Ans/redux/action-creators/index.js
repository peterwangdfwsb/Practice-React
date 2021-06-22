import axios from "axios";

const getDataSuccess = (data) => ({
  type: "SEARCH_SUCCESS",
  data
});

const onDataError = (err) => {
  console.log(err);
};

export const getData = (term) => {
  return (dispatch) => {
    axios.get(`/api/city?searchTerm=${term}`)
    .then((res) => {
      dispatch(getDataSuccess(res?.data?.filteredResult || []));
    })
    .catch(err => {
      onDataError(err);
    });
  }
}
