/* eslint-disable react/style-prop-object */
import React, { useRef, useState } from "react";
import Nav from "../components/Nav";
import cover from '../assets/images/doctor.svg';

const Register = (props) => {
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const ageRef = useRef("");
  const birthdayRef = useRef("");

  const [copied, setCopied] = useState(false);
  const [emptyFistName, setEmptyFistName] = useState(false);
  const [emptyLastName, setEmptyLastName] = useState(false);
  const [emptyAge, setEmptyAge] = useState(false);
  const [emptyBirthday, setEmptyBirthday] = useState(false);

  const [register, setRegister] = useState(false);
  const submitRegisterFormHandler = (e) => {
    e.preventDefault();
    if (firstNameRef.current.value.trim() === "") {
      setEmptyFistName(true);
    } else {
      setEmptyFistName(false);
    }
    if (lastNameRef.current.value.trim() === "") {
      setEmptyLastName(true);
    } else {
      setEmptyLastName(false);
    }
    if (ageRef.current.value.trim() === "") {
      setEmptyAge(true);
    } else {
      setEmptyAge(false);
    }

    if (birthdayRef.current.value.trim() === "") {
      setEmptyBirthday(true);
    } else {
      setEmptyBirthday(false);
    }
    if (
      firstNameRef.current.value !== "" &&
      lastNameRef.current.value !== "" &&
      ageRef.current.value !== "" &&
      birthdayRef.current.value !== ""
    ) {
      const FormUser = {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        age: ageRef.current.value,
        birthday: birthdayRef.current.value,
      };
      props.onSaveDataUserForm(FormUser);
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      ageRef.current.value = "";
      birthdayRef.current.value = "";
      localStorage.setItem("reference", JSON.stringify(props.reference));
      setRegister(true);
    }
  };
  if (props.reference !== "") {
    localStorage.setItem("reference", JSON.stringify(props.reference));
  }

  const CopyTextHandler = (e) => {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem("reference"));
    navigator.clipboard.writeText(saved);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div>
      <Nav />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-2 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
           { register &&  <div
                class="p-3 mb-4 text-sm text-green-700 bg-cyan-100 rounded-lg shadow-lg "
                role="alert"
              >
                <span class="font-medium">Success Register</span> Please copy the reference number

              </div>}

              <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                  <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                    <input
                      type="text"
                      value={JSON.parse(localStorage.getItem("reference"))}
                      disabled
                      className="form-control relative flex-auto min-w-0 block w-1/2-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                      aria-describedby="button-addon3"
                    />
                    <button
                      type="submit"
                      onClick={CopyTextHandler}
                      className="btn inline-block px-6 py-2 border-2 border-cyan-600 text-cyan-600 font-medium text-xs leading-tight uppercase rounded hover:bg-cyan-600 hover:text-white  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      id="button-addon3"
                    >
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>
              
              <form
                className="container mx-auto"
                onSubmit={submitRegisterFormHandler}
              >
                <div className="grid xl:grid-cols-2 xl:gap-6">
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="floating_first_name"
                      ref={firstNameRef}
                      id="floating_first_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-600 peer"
                      placeholder=" "
                      required=""
                    />
                    <label
                      htmlFor="floating_first_name"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                    >
                      First name
                    </label>
                    {emptyFistName && (
                      <p class="text-red-500 text-xs italic">
                        First Name is Required
                      </p>
                    )}
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="floating_last_name"
                      ref={lastNameRef}
                      id="floating_last_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-600 peer"
                      placeholder=" "
                      required=""
                    />
                    <label
                      htmlFor="floating_last_name"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                    >
                      Last name
                    </label>
                    {emptyLastName && (
                      <p class="text-red-500 text-xs italic">
                        Last Name is Required
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid xl:grid-cols-2 xl:gap-6">
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="number"
                      name="floating_phone"
                      ref={ageRef}
                      id="floating_phone"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-600 peer"
                      placeholder=" "
                      required=""
                    />
                    <label
                      htmlFor="floating_phone"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                    >
                      Age{" "}
                    </label>
                    {emptyAge && (
                      <p class="text-red-500 text-xs italic">Age is Required</p>
                    )}
                  </div>

                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="date"
                      name="floating_company"
                      ref={birthdayRef}
                      id="floating_company"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-600 peer"
                      placeholder=" "
                      required=""
                    />
                    <label
                      htmlFor="floating_company"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                    >
                      Birthday
                    </label>
                    {emptyBirthday && (
                      <p class="text-red-500 text-xs italic">
                        Birthday is Required
                      </p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white bg-cyan-500 px-12  hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-400 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Register
                </button>
              </form>
            </div>
            <img
              alt="e-commerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={cover}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
