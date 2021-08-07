import React, { useState } from 'react';
import AddUser from './Component/Users/AddUser';

import UsersList from './Component/Users/UsersList';




function App() {
  const [usersList, setUsersList] = useState([]);

  const getInfoFromAddUser = (uName, uAge) => {
    setUsersList( prevUsersList => {
      return [...prevUsersList, {id: Math.random().toString(), name: uName, age: uAge}];
    });
  };
  return (
    <div>
      <AddUser  liftStateToApp={getInfoFromAddUser}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;


///    --------------------------APP------------------------------------
// --------------AddUser--------------------------UsersList-----------------------
//--------Child-----------Child----------------child---------child---------