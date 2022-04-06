import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="flex flex-wrap p-5 flex-col md:flex-row">
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 	flex flex-nowrap items-start text-base justify-between">
            <Link to="/" className="mr-5 hover:text-gray-900" >
              <button>
                {" "}
                <img
                  src="http://localhost/php%20projects/Briefs/backend_dental-appointment/public/assets/images/logo.png"
                  alt="logo"
                />
              </button>
            </Link>
            <Link to="/" className="mr-5 text-medium font-bold text-1xl mt-3 hover:text-gray-900">
              <button> Home</button>
            </Link>
            <Link to="/checkAppointment" className="mr-5 text-medium font-bold text-1xl mt-3 hover:text-gray-900">
              <button> Check Appointment</button>
            </Link>
            <Link to="/MyAppointments" className="mr-5 text-medium font-bold text-1xl mt-3 hover:text-gray-900">
              <button> My Appointments</button>
            </Link>
            <Link to="/register" className="mr-5 text-medium text-1xl mt-3 hover:text-gray-900">
              <button> Register</button>
            </Link>
           
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Nav;
