import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const UpdateBookForm=(props)=> {
  
  const [date,setDate]=useState(props.onSaveReceivingDataBook.slot_date);
  const [time,setTime]=useState(props.onSaveDate);
  const [availableTime,setAvailableTime]=useState({});
  const [subject,setSubject]=useState(props.onSaveReceivingDataBook.subject);
  const [emptyDate,setEmptyDate]=useState(false);
  const [emptyTime,setEmptyTime]=useState(false);
  // const [emptyReference,setEmptyReference]=useState(false);
  const [emptySubject,setEmptySubject]=useState(false);
  const [timeExist,setTimeExist]=useState(false);
  const [cancelModal,setCancelModal]=useState(false);

  const dateChangeHandler = (e) => {
   
    const date = e.target.value;
    // props.onSaveDataDate(date);
    setDate(date);
    const formData = new FormData();
    formData.append('date', date);

    console.log(date);
    axios.post('http://localhost/php%20projects/Briefs/brief-appointment/manage_appointments/backend/public/appointment/getAllSlots', formData).then(response => {
      // console.log(response);
      // console.log(response.data);
      if (response.statusText === 'OK') {
        // console.log(response.data);
        setAvailableTime(response.data);
        setTimeExist(true);
        // setUserRegistered(true);
      }
      
    }  
    ).catch(error => {
      console.log(error);
    }
      )
  
    // console.log(date);
  };

  props.onCancelModal(cancelModal);
  
  const timeChangeHandler = (e) => {
    const time = e.target.value;
    setTime(time);
  };

  const subjectOnChangeHandler = (e) => {
    const subject = e.target.value;
    setSubject(subject);
  };
    
  // useEffect(()=>
  // {
  //   setDate(props.onSaveReceivingDataBook.slot_date);
    
  // })
  
  // console.log(props.timeAvailable);

  var today = new Date();
  var dd = today.getDate();
  var ddMax = today.getDate() + 7;
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  
  if (dd < 10) {
     dd = '0' + dd;
  }
  
  if (mm < 10) {
     mm = '0' + mm;
  } 
      
  var maxDate = yyyy + '-' + mm + '-' + ddMax;
  var minDate = yyyy + '-' + mm + '-' + dd;
  // console.log(props.id);
  const onSubmitUpdateBookingData = async (e) => {
    e.preventDefault();

    if(date==='')
    {
      setEmptyDate(true);
      
    }else{
      setEmptyDate(false);
    }
    if(time==='Select Time' || time===undefined)
    {
      console.log('time is empty');
        setEmptyTime(true);
    }else
    {
      setEmptyTime(false);
    }
    if(subject.trim()==='')
    {
      setEmptySubject(true);
    }
    else{
      setEmptySubject(false);
    }

    if(!(time==='Select Time' || time===undefined) && !(subject.trim()==='') && !(date===''))
    {

    const formData = new FormData();
    formData.append('date', date);
    formData.append('time', time);
    formData.append('reference', props.onSaveReceivingDataBook.reference);
    formData.append('subject', subject);
    formData.append('id', props.id);
  

    
    axios.post('http://localhost/php%20projects/Briefs/brief-appointment/manage_appointments/backend/public/appointment/update', formData).then(response => {
      // console.log(response);
      console.log(response.data);
      if (response.statusText === 'OK') {
        console.log(response.data);
        setCancelModal(true);
        // setUserRegistered(true);
      }
      
    }  
    ).catch(error => {
      console.log(error);
    }
      )
  }
};
// console.log(availableTime);

  return (
    <form  onSubmit={onSubmitUpdateBookingData}
    className="container mx-auto">
    <div className="grid xl:grid-cols-1 xl:gap-6">
      <div className="relative z-0 mb-2 w-full group">
        <input
          type="date" onChange={dateChangeHandler} value={date} max={
            maxDate
          }
          min={
            minDate
          }
          name="floating_company"
          id="floating_company"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-600 peer"
          placeholder=" "
          required=""
        />
        <label
          htmlFor="floating_company"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
        >
          Date
        </label>
        {emptyDate && <p className="text-red-500 text-xs italic">Date is Required</p> }
      </div>
      <div className="relative z-0 mb-4 w-full group">
        <label
          htmlFor="Times"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Select Appointment Schedule
        </label>
        <select value={time}
          id="Times" onChange={timeChangeHandler}
          className="bg-gray-50 border border-cyan-500 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 pl-10 py-2.5 shadow-inner focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:shadow-inner"
        >
          <option>Select Time</option>
          {/* <option>{props.onSaveReceivingDataBook.slot_time}</option> */}
          {timeExist 
          &&
            availableTime.map((time,index)=>{
              if(time['slot_status']===1){
                return 0;
              }
              return(
                <option key={index}>{time.slot_time}</option>
              )
            }) 
          }
         
        </select>
        {emptyTime && <p className="text-red-500 text-xs italic">Time is Required</p> }
      </div>
    </div>
   

    <div className="relative z-0 mb-4 w-full group">
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Subject of this Appointment
      </label>
      <textarea
        id="message"  value={subject} onChange={subjectOnChangeHandler}
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-cyan-600 focus:outline-none focus:ring-2 focus:border-cyan-500 focus:shadow-outline-blue focus:border-cyan-500 focus:ring-cyan-500 focus:shadow-outline-blue"
        placeholder="Leave a comment..."
      ></textarea>
      {emptySubject && <p className="text-red-500 text-xs italic">Subject is Required</p> }
    </div>

    <button
      type="submit"
      className="text-white bg-cyan-500 px-10 mr-2  hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-400 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
      Update
    </button>
    <button
      type="button" onClick={()=>{setCancelModal(true)}}
      className="text-white bg-red-500 px-10  hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
      cancel
    </button>
  </form>

  )
}

export default UpdateBookForm