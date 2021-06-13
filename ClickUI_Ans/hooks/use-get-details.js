import { useState } from "react"; 
import axios from "axios";

const useGetUsers = () => {
  const [userDetails, setUserDetails] = useState(null);

  const getDetailsHandler = (id) => {
    axios.get(`https://api.github.com/users/${id}`)
      .then(res => {
        setUserDetails(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return [userDetails, getDetailsHandler];
};

export default useGetUsers;

