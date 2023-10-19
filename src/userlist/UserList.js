import React, { useState ,useEffect} from 'react'
import axios from "axios";
import '../userlist/user.css'
import UserElement from './UserElement';
function UserList() {
    const[userData,setUserData]=useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
          .then((res) => {
            setUserData(res.data
              );
          })
          .catch((err) => {
            console.error("Error: ", err);
          });
      }, []);

      
  return (
    <div className="user-list-container">
    <h1 style={{color:'green'}}>User List</h1>
  
      {userData.map((user) => <UserElement  user={user}/>)}
   
  </div>
  )
}

export default UserList
