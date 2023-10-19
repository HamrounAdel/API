import React, { useState ,useEffect} from 'react'
import axios from "axios";
import '../userlist/user.css'
function UserList() {
    const[userData,setUserData]=useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
          .then((res) => {
            setUserData(res.data);
          })
          .catch((err) => {
            console.error("Error: ", err);
          });
      }, []);
  return (
    <div className="user-list-container">
    <h1 style={{color:'green'}}>User List</h1>
    <ul >
      {userData.map((user) => (
        <li key={user.id}>
          <div>
            <span >{user.name}</span>
            <br />
            <span  >{user.username}</span>
           
            <br />
          
           <a href='' ><span style={{color:'blue'}}>{user.email}</span></a>
           <hr/> 
          </div>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default UserList
