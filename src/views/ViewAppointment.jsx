import React, { useState, useRef } from "react";
import Nav from "../components/Nav";
import UpdateBookForm from "../components/UpdateBookForm";
import axios from "axios";

function ViewAppointment(props) {
  const [bookingData, setBookingData] = useState([]);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [bookingUpdatingData,setBookingUpdatingData] = useState({});
  const [updatingId,setUpdatingId]=useState(null);
  const userReferenceRef = useRef("");
  
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  
  const showUserReferenceHandler = () => {
    const userReference = userReferenceRef.current.value;
    props.reference(userReference);
    setBookingData(props.BookingData);
    console.log(bookingData);
  };

  console.log(bookingData);

    function editBookingHandler (bookingId) {
    // console.log(bookingId);
    

      props.editBooking(bookingId);
    setUpdatingId(bookingId);
    setShowModalEdit(true);
    


   axios.get('http://localhost/php%20projects/Briefs/brief-appointment/manage_appointments/backend/public/appointment/getAppointment/'+bookingId).then((response)=>{
    if (response.statusText === 'OK') {
      // console.log('this data : '+response.data);
      setBookingUpdatingData(response.data[0]);
      //
    }
  
    
  }).catch(error => {
    console.log(error);
  });
}

  const deleteBookingHandler = (bookingId) => {
    props.deleteBooking(bookingId);
  };

  const closeModalEditHandler = (e) => {
    setShowModalEdit(!e);
  };


  return (
    <section className="text-gray-600 body-font">
      <Nav />
      <div className="container px-5 py-10 mx-auto">
        <h1 className="text-center text-2xl mb-8 font-medium text-gray-900">
          View Appointment
        </h1>
        <p className="mb-8 leading-relaxed text-center">
          please enter your patient reference
        </p>
        <div className="mb-1 xl:w-96 mx-auto">
          <div className="input-group relative flex flex-nowrap items-stretch w-full mb-1">
            <input
              type="text"
              ref={userReferenceRef}
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
              placeholder="Patient Reference"
              aria-label="Search"
              aria-describedby="button-addon3"
            />
            <button
              onClick={showUserReferenceHandler}
              className="btn inline-block px-6 py-2 border-2 border-cyan-600 text-cyan-800 font-medium text-md leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              type="submit"
              id="button-addon3"
            >
              Search
            </button>
          </div>

          <p className="mb-6">eg:John2121</p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="flex justify-center"></div>
          {props.BookingData &&
            props.BookingData.map((booking) => {
              return (
                <div key={booking.id} className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className="p-6">
                      <h2 className="tracking-widest text-xl title-font font-medium text-gray-500 mb-1">
                        {days[new Date(booking.slot_date).getDay()] +
                          " " +
                          new Date(booking.slot_date).getDate() +
                          " " +
                          months[new Date(booking.slot_date).getMonth()] +
                          " " +
                          new Date(booking.slot_date).getFullYear()}{" "}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {booking.slot_time}
                      </h1>
                      <p className="leading-relaxed mb-3">{booking.subject}</p>
                      <div className="flex items-center flex-wrap ">
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <button
                            type="button"
                            key={booking.id_app}
                            onClick={() => editBookingHandler(booking.id_app)}
                            className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none "
                          >
                            Postpone
                          </button>
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <button
                            type="button"
                            key={booking.id_app}
                            onClick={() => deleteBookingHandler(booking.id_app)}
                            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none "
                          >
                            Cancel
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          {props.BookingData.length === 0 && (
            <div className="mx-auto mt-12">
              <p className="text-center">No Appointment</p>
            </div>
          )}
        </div>
      </div>

     
      {showModalEdit && (
        <div>
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="relative w-auto my-6 mx-auto  max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-95 bg-white outline-none focus:outline-none mx-4">
                {/*header*/}

                {/*body*/}

                <div className="flex justify-end p-2">
                  <button
                    type="button"
                    onClick={() => setShowModalEdit(false)}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    data-modal-toggle="authentication-modal"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="px-7 pt-1 pb-4">
                  <h3 className="text-xl mb-7 font-medium text-gray-900 ">
                    Postpone Appointment
                  </h3>
                  <UpdateBookForm onSaveReceivingDataBook={bookingUpdatingData} id={updatingId} onCancelModal={closeModalEditHandler} onUpdateBookingData={(data)=> setBookingData(data)} />
                </div>
              </div>
            </div>
          </div>

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      )}
    </section>
  );
}

export default ViewAppointment;
