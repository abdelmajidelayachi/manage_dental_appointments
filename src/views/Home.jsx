import React from "react";
import { Link } from "react-router-dom";
import Ads from "../components/Ads";
import Footer from "../components/Footer";
import Nav from '../components/Nav';
// import image from "http://localhost/php%20projects/Briefs/backend_dental-appointment/public/assets/images/header_img.jpg";

const Home = () => {
  return (
    <div>
      <section className="text-gray-600 bg-blue-100 rounded-br-large body-font">
  <div className="mx-auto flex pl-5 md:flex-row flex-col">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start lg:items-start md:text-left mb-16 md:mb-0 ">
      <Nav /> 
      <div className="justify-center container">
        <h1 className="title-font sm:text-4xl text-7xl mb-4 font-bold text-gray-900 text-center">Keep You smile </h1>
        <h1 className="title-font sm:text-4xl text-7xl mb-4 font-bold text-gray-900 text-center">clean & great</h1>
        <p className="mb-8 leading-relaxed text-center">We will take care of your smile. come see us</p>
      </div>
      <div className="mx-auto mt-5 flex md:justify-start lg:justify-between">
        
        <Link to="/register"><button className="inline-flex text-white bg-cyan-600 border-0 py-2 px-16 px-6 focus:outline-none hover:bg-cyan-500 rounded-full text-lg mr-8">Create account</button></Link>
        <Link to="/checkAppointment"><button className="inline-flex text-white bg-cyan-600 border-0 py-2 px-16 px-6 focus:outline-none hover:bg-cyan-500 rounded-full text-lg ml-8">Check appointment</button></Link>
      </div>
      <div className="ml-auto mt-6">
        <h2 className="title-font sm:text-1xl text-2xl mb-2 font-bold text-gray-900">12,134</h2>
        <p className="text-sm">5-Star reviews<br/> from satisfied customer</p>
        
<div className="flex items-center">
<svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>

      <div/>
    </div>
      
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded-b-full" alt="hero" src="http://localhost/php%20projects/Briefs/brief-appointment/manage_appointments/backend/public/assets/images/header_img.jpg"/>
    </div>
  </div>
</section>
<Ads />
<Footer />
    </div>
  );
};

export default Home;