import { useEffect, useState } from "react"; 
import axios from "axios";

const useGetUsers = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get("https://api.github.com/users?per_page=100")
      .then((res) => {
        setUserList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return userList;
};

export default useGetUsers;

