import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';
function Contact() {
  const form = useRef();
  const [isSent, setisSent] = useState(false);
  const sendMail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_a5z8sz9",// replace your emailjs service Id
      "template_he1ygvv",// replace your email js template id 
      form.current,
      "uOO1F8plnJTiRqpZh" //replace with your emailjs public key
    )
      .then(
        () => {
          setisSent(true);
          form.current.reset();//reset forl field after submit 
          toast.success("Message sent successfully...", {
            position: "top-right",
            autoClose: '2000',
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          toast.error("Error Sending Message " + error);
          toast.error("Failed to sent message, Please try again.", {
            position: "top-right",
            autoClose: '3000',
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      )

  }


  return (
    <section id='contact'
      className='flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
        <ToastContainer/>
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bolt text-white'>Contact</h2>
        <div className='w-30 h-1 bg-purple-500 mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>I'd love to hear from you reach out for any opportunities or questions.</p>
      </div>
      {/*Contact here */}
      <div className='mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700'>
        <h3 className='text-xl font-semibold text-white text-center'>
          Connect With Me
        </h3>

        <form ref={form} onSubmit={sendMail} className='mt-4 flex flex-col space-y-4' >
          <input type="email" name="user_email" placeholder='Your Email' required
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' />

          <input type="text" name="user_name" placeholder='Your Name' required
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' />

          <input type="text" name="subject" placeholder='Subject' required
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' />

          <textarea name="message" placeholder='Message' rows="4" className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'>

          </textarea>
          {/*Send button*/}
          <button type="submit"
            className='w-full bg-gradient-to-r from-orange-600 to-blue-600 py-3 text-white font-semibold rounded-md hover:opacity-90 transition'
          >Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
