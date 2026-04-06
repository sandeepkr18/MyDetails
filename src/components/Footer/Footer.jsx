import React from 'react'
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin,FaYoutube} from 'react-icons/fa';
function Footer() {
  const handleScroll=(sectionId)=>{
  const section =document.getElementById(sectionId);
  if(section){
    section.scrollIntoView({behavior:"smooth"});
  }
  }
  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg":px-20vw]'>
      <div className='container mx-auto text-center '>
        <h2 className='text-xl font-semibold text-purple-500'>Mandip Mahi</h2>
        <div className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
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

        </div>

    <div className='flex flex-wrap justify-center space-x-6 mt-4'>
        {[
            { icon:<FaFacebook/>,link:"https://www.facebook.com/mahiyamandip.mourya"},
            { icon:<FaInstagram/>,link:"https://www.instagram.com/mandipmahi18?igsh=MXdoeGpvOHd1NnlkNw=="},
            {icon:<FaLinkedin/>,link:"www.linkedin.com/in/sandeepkumar85"},
            {icon:<FaYoutube/>,link:"https://www.youtube.com/@btech_wala18"},
            {icon:<FaTwitter/>,link:"https://x.com/mandip_mahi"}

        ].map((item,index)=>(
          <a
          key={index}
          href={item.link}
          target='_blank'
          className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110'
          >
            {item.icon}
          </a>
        ))}
    </div>



      </div>

    </footer>
  )
}

export default Footer
