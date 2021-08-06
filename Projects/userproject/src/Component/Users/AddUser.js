import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import Wrapper from '../Helpers/Wrapper';


const AddUser = (props) => {
  const [currentUserName, setCurrentUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const handleName = (event) => {
    setCurrentUserName(event.target.value);
  }

  const handleAge = (event) => {
      setUserAge(event.target.value);
  }

  const handleFormSubmit = (event) => {
      event.preventDefault(); 

      alert(`Hey, ${currentUserName}, your age is  ${userAge}`)
      if(userAge <= 0){
       alert(`Dear ${currentUserName}, make sure the age is a proper one. THank you.`);
        
        return;
      }

      if(currentUserName.length <= 2){
        alert(`UserName must contain more than two characters!! ${currentUserName.length}`);
        return;
      }
      props.liftStateToApp(currentUserName, userAge);



      setCurrentUserName('');
      setUserAge('');
  }

  

  return (

    <Wrapper>
      <Card className={classes.input}>
       <form onSubmit={handleFormSubmit}>
         <label htmlFor="username" >Username</label> 
         <input id="username" type="text" value={currentUserName} onChange={handleName}  />
         <label htmlFor="age">Age (Years)</label>
         <input id="age" type="number" value={userAge} onChange={handleAge}  />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </Wrapper>
  );
};

export default AddUser;