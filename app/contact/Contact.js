"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import LoadingSpin from "/app/pages/LoadingSpin";

const Contact = () => {
  const form= useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const [isEmpty, setIsEmpty] = useState({
    name:"",
    email:"",
    message:""
  }
  
  )

  const notify = () => toast("Message sent successfully!");

  const submitForm = async (e) => {

    e.preventDefault();


// remove error if some input enter
if(name.length>3){setIsEmpty((prev)=>{return{...prev,name:""}})}
if(email.length>6){setIsEmpty((prev)=>{return{...prev,email:""}})}
if(message.length>3){setIsEmpty((prev)=>{return{...prev,message:""}})}



// regular expression
    const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

    if (
      name.length >= 4 &&
      email.length >= 4 &&
      message.length >= 8 &&
      regex.test(email)
    ) {

        setIsLoading(true)


      try {
        await emailjs
          .sendForm(
            "service_ag81x54",
            "template_fsu30ii",
            form.current,
            "RG54GFebTODsx5ksH"
          )
          .then(
            (result) => {
              console.log(result.text);
              setName("");
              setEmail("");
              setMessage("");
              setIsLoading(false)
              notify()
            },
            (error) => {
              console.log(error.text);
            }
          );
      } catch (err) {
        console.log(err);
      }
     
    } else {


      // form error 
      if(name.length<3){
        setIsEmpty((prev)=>{
          return {...prev,name:"Name can't be empty or too short in length"}
        })
      }
       if(email.length<6){
        setIsEmpty((prev)=>{
          return {...prev,email:"email can't be empty or too short in length"}
        })
      
      }
    if(message.length<6){
        setIsEmpty((prev)=>{
          return {...prev,message:"Message can't be empty or too short in length"}
        })
      }
      

      if (!regex.test(email)) {
        setIsEmpty((prev)=>{
          return {...prev,email:"Email must be in proper format"}
        })


      }
    }
  };

  return (
    isLoading ? <LoadingSpin/>:
    <div className="flex justify-center items-center w-96 sm:w-[95vw] font-poppins font-semibold ">
      <div className="flex   flex-1 flex-col justify-center px-6 sm:px-1 sm:pl-1  py-4 lg:px-8  ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="/favicon.png"
            alt="my-logo"
          />
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Send your message
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full  sm:max-w-sm">
          <form
            className="space-y-6 sm:w-full"
            action="#"
            method="POST"
            ref={form}
            onSubmit={submitForm}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm leading-6 font-bold text-white"
              >
                Name
              </label>
              <div className="mt-2 ">
                <input
                  id="user_name"
                  value={name}
                  name="user_name"
                  type="text"
                  placeholder="Enter your name..."
                  required={true}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-secondary shadow-sm  outline-none sm:text-sm sm:leading-6"
                />
                <p className="text-red py-0.5 px-0.5">{isEmpty.name}</p>

              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm leading-6 font-bold text-white"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  value={email}
                  autoComplete="email"
                  placeholder="Enter your email..."
                  required={true}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-secondary shadow-sm  outline-none  sm:text-sm sm:leading-6"
                />
                <p className="text-red py-0.5 px-0.5">{isEmpty.email}</p>

              </div>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm  leading-6 font-bold text-white"
              >
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="desc"
                  name="message"
                  placeholder="Enter your message..."
                  value={message}
                  required={true}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-secondary shadow-sm outline-none  sm:text-sm sm:leading-6"
                />
                <p className="text-red py-0.5 px-0.5">{isEmpty.message}</p>

              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={(e) => {
                  submitForm(e);
                }}
                className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              >
                Send
              </button>
            </div>
            <ToastContainer />
          </form>

          {/* <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-white hover:text-violet-700">
              Start a 14 day free trial
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;