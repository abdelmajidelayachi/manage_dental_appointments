import React from 'react'
import { useState, useRef } from 'react';

const UpdateBookForm=(props)=> {
  const timeRef = useRef(""); 
  const referenceRef = useRef(props.onSaveReceivingDataBook.reference);
  const subjectRef = useRef(props.onSaveReceivingDataBook.subject); 

  const [date,setDate]=useState(props.onSaveReceivingDataBook.slot_date);
  const [time,setTime]=useState(props.onSaveReceivingDataBook.slot_time);
  const [subject,setSubject]=useState(props.onSaveReceivingDataBook.subject);
  const [emptyDate,setEmptyDate]=useState(false);
  const [emptyTime,setEmptyTime]=useState(false);
  const [emptyReference,setEmptyReference]=useState(false);
  const [emptySubject,setEmptySubject]=useState(false);

  const dateChangeHandler = (e) => {
    e.preventDefault();
    const date = e.target.value;
    // props.onSaveDataDate(date);
    setDate(date);
    console.log(date);
  };
  const timeChangeHandler = (e) => {
    const time = e.target.value;
    setTime(time);
  };

  const subjectOnChangeHandler = (e) => {
    const subject = e.target.value;
    setSubject(subject);
  };
    
  
  

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
  
  const onSubmitUpdateBookingData = (e) => {
    e.preventDefault();
  };


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
          <option>{props.onSaveReceivingDataBook.slot_time}</option>
          {/* {props.timeAvailable &&
            props.timeAvailable.map((time,index)=>{
              if(time['slot_status']===1){
                return 0;
              }
              return(
                <option key={index}>{time['slot_time']}</option>
              )
            }) */
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
      className="text-white bg-cyan-500 px-12  hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-400 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
      Update
    </button>
  </form>

  )
}

export default UpdateBookForm