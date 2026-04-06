import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsopen] = useState(false);

  const [isScrolled, setisScrolled] = useState(false);
  //check scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setisScrolled(window.scrollY > 50);

    };
    window.addEventListener("scroll", handleScroll);


  }, [])

  //scroll function 
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsopen(false)
  }
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
   
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },

  ]

const handleScroll=(sectionId)=>{
  const section =document.getElementById(sectionId);
  if(section){
    section.scrollIntoView({behavior:"smooth"});
  }
  }
  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}>
        <div className='text-white py-5 flex justify-between items-center'>
          <div className='text-lg font-semibold cursor-pointer'>
            <span className='text-[#8245ec]'>&lt;</span>
            <span className='text-white'>Sandeep</span>
            <span className='text-[#8245ec]'>/</span>
            <span className='text-white'>Kumar</span>
            <span className='text-[#8245ec]'>&gt;</span>
          </div>
          {/* Desktop menu*/}
          <ul className='hidden md:flex space-x-8 bg-blue font-semibold text-gray-300'>
            {[
            {name:"About",id:"about"},
             {name:"Skills",id:"skills"},
             
               {name:"Projects",id:"work"},
                {name:"Education",id:"education"},
          ].map((item,index)=>(
            <button
            key={index}
            onClick={()=>handleScroll(item.id)}
            className='hover:text-purple-500 text-sm sm:text-base my-1'>
              {item.name}
            </button>
          ))}


          </ul>
          {/*media icons  */}
          <div className='hidden md:flex space-x-4'>
            <a href="https://github.com/sandeepkr18" target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-[#8245ec]'>
              <FaGithub />
            </a>
            <a href="http://linkedin.com/in/sandeepcoder" target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-[#8245ec]'>
              <FaLinkedin />
            </a>

          </div>
          {/* Resposive Menu icon*/}
          <div className='md:hidden'>
            {
              isOpen ? (
                <FiX className='text-3xl text-[#8245ec] cursor-pointer'
                  onClick={() => setIsopen(false)} />
              ) : (
                <FiMenu className='text-3xl text-[#8245ec] cousor-pointer'
                  onClick={() => setIsopen(true)} />
              )
            }

          </div>
        </div>
        {/* responsive for mobile */}
        {
          isOpen && (
            <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414]/60  backdrop-blur-lg z-50 rounded-lg shadow-lg'>
              <ul className='flex flex-col text-center space-y-4 py-4 text-gray-300'>
                {
                  menuItems.map((item) => (
                    <li key={item.id} className={`cursor-pointer hover:text-white 
                    ${activeSection === item.id ? "text-[#8245ec]" : ""}`} >
                      <button onClick={() => handleMenuItemClick(item.id)}>
                        {item.label}
                      </button>
                    </li>

                    
                  ))}
                <div className='flex space-x-4 justify-center items-center'>
                  <a href="https://github.com/sandeepkr18" target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-white'>
                    <FaGithub />
                  </a>
                  <a href="http://linkedin.com/in/sandeepcoder" target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-white'>
                    <FaLinkedin />
                  </a>


                </div>
              </ul>
            </div>

          )
        }
      </nav>

    </>
  );
}

export default Navbar
