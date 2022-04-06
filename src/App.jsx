import './App.css';
import React ,{useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import { useState } from 'react';
import Home from './views/Home';
import axios from 'axios';
import Register from './views/Register';
import AppointmentBook from './views/AppointmentBook';
import ViewAppointment from './views/ViewAppointment';


function App() {
  // const [userData, setUserData] = useState({});

  // const [userRegistered, setUserRegistered] = useState(false);
  const [userReference, setUserReference] = useState('');
  // const [bookingData, setBookingData] = useState('');
  // console.log(userData);
  
  const [bookingData, setBookingData] = useState([]);
  async function saveDataUserHandler(userData) {
    const formData = new FormData();
    formData.append('firstName', userData.firstName);
    formData.append('lastName', userData.lastName);
    formData.append('age', userData.age);
    formData.append('birthday', userData.birthday);
  

    console.log(userData);
    axios.post('http://localhost/php%20projects/Briefs/frontend_dental-appointment/backend/public//user/register', formData).then(response => {
      console.log(response);
      console.log(response.data);
      if (response.statusText === 'OK') {
        setUserReference(response.data);
        // setUserRegistered(true);
      }
      
    }  
    ).catch(error => {
      console.log(error);
    }
      )
  }
 
  async function viewBookingHandler(reference) {
    // console.log(reference);
    const formData = new FormData();
    formData.append('reference', reference);

    // console.log(reference);
    axios.post('http://localhost/php%20projects/Briefs/frontend_dental-appointment/backend/public/appointment/view', formData).then(response => {
      console.log(response.data);
      // console.log(response.data);
      if (response.statusText === 'OK') {
        // console.log('this data : '+response.data);
        setBookingData(response.data);
        // setUserRegistered(true);
      }
      
    }  
    ).catch(error => {
      console.log(error);
    }
      )
  }
  const editBookingHandler = (id) => {
    console.log(id);
  }

  const deleteBookingHandler = (id) => {
    axios.delete('http://localhost/php%20projects/Briefs/frontend_dental-appointment/backend/public/appointment/delete/'+id).then(response => {
      console.log(response);
      console.log(response.data);
      if (response.statusText === 'OK') {
        console.log(response.data);
        // setUserRegistered(true);
      }
    })
  };
// console.log(userData);
  return (
   
     <Router>
    
    <div className="App">
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route  path='/checkAppointment'>
        <AppointmentBook/>
      </Route>
      <Route  path='/MyAppointments'>
        <ViewAppointment BookingData={bookingData} reference={viewBookingHandler} editBooking={editBookingHandler} deleteBooking = {deleteBookingHandler} />
      </Route>

      <Route path='/register'>
        <Register onSaveDataUserForm={saveDataUserHandler} reference={userReference} />
      </Route>
    </Switch>

    </div>

    </Router>

    
   
  );
}


export default App;
