import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';

function Nav() {
  const [menu,setMenu]=React.useState(false);
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="flex flex-wrap p-5 flex-col md:flex-row">
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex-nowrap items-start text-base justify-between">
            <Link to="/" className="mr-5 hover:text-cyan-600" >
              <button>
                {" "}
                <img
                  src={logo}
                  alt="logo"
                />
              </button>
            </Link>
            <div
                         onClick={()=>setMenu(!menu)}
                        class="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-gray-500 "
                    >
                      {!menu ? <i class="fas fa-bars fa-lg"></i> :<i  class="fas fa-xmark fa-lg"></i>}
                    </div>

            <div className="flex md:flex-row flex-col md:mt-0  justify-center bg-gray-200 ">
              
            {menu && <>
              <Link to="/" className="mr-5 text-medium text-center font-bold text-1xl mt-3 hover:text-cyan-600">
              <button> Home</button>
            </Link>
            <Link to="/checkAppointment" className="mr-5 text-medium text-center font-bold text-1xl mt-3 hover:text-cyan-600">
              <button> Check Appointment</button>
            </Link>
            <Link to="/MyAppointments" className="mr-5 text-medium text-center font-bold text-1xl mt-3 hover:text-cyan-600">
              <button> My Appointments</button>
            </Link>
            <hr className="md:hidden text-blueGray-400 flex  mt-3"/>
            <Link to="/register" className="mr-5 text-medium text-center text-1xl md:mt-3 mt-0 hover:text-cyan-600">
              <button> Register</button>
            </Link>
            </> }
           
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Nav;
