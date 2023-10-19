import React from 'react'

function UserElement({user}) {
  return (
    
        <div key={user.id}>
          <div>
            <span >{user.name}</span>
            <br />
            <span  >{user.username}</span>
            <br />
           <a href='' ><span style={{color:'blue'}}>{user.email}</span></a>
           <hr/> 
          </div>
        </div>
      
   
   
  )
}

export default UserElement
