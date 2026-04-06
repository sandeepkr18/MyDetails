import React from 'react'
import {education} from '../../constants'
function Education() {
  return (
<>

    <section id='education'
        className='py-24 pb-24 px-[12vw] lg:px[16vw] m:px-[7vw] font-sans bg-skills-gradient clip-path-custom-3'>
         {/*section title*/}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bolt text-white'>Education</h2>
          <div className='w-60 h-1 bg-purple-500 mx-auto mt-4'></div>
          <p className='text-gray-400 mt-4 text-lg font-semibold'>My Education has been journey of learning and development ,Here are the detail of my acadmic background </p>
        </div>
        {/*Education  line*/}
        <div className='relative'>
    <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-white h-full'></div>
        {education.map((edu,index)=>(
          <div 
          key={edu.id}
          className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2===0 ? "sm:justify-start":"sm:justify-end"}`}
          >
    {/*timline circle*/}
    <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[8245ec] w-12 sm:h-12 rounded-full flex justify-center items-center z-i-10'>
      <img src={edu.img} alt={edu.school} 
      className='w-full h-full object-cover rounded-full'/>
    </div>
    {/*Content create*/}
    <div className={`w-full sm:max-md p-4 sm:p-8 rounded-2xl  border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20_1_rgba(130,69,236,0.3)]
    ${index % 2===0 ? "sm:ml-0":"sm:mr-0"} sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}>
      {/*flex container */}
      <div className='flex items-center space-x-6'>
        {/*compamy img*/}
        <div className='w-12 h-12 bg-white rounded-md overflow-hidden'>
          <img src={edu.img} alt={edu.school} className='w-full h-full object-cover' />
          </div>
          {/*Degree School Name and date */}
          <div>
            <h3 className='text-xl sm:text-2xl font-semibold text-white'>{edu.degree}</h3>
            <h4 className='text-md sm:text-sm text-gray-300'>{edu.school}</h4>
          </div>
          <p className='text-sm text-gray-500 mt-2'> {edu.date}</p>
    
      </div>
    <p className='mt-4 text-gray-400 font-bold'>Grade: {edu.grade}</p>
   <p className='mt-2 text-gray-300' >{edu.desc}</p>
    </div>
    
          </div>
        ))}
        </div>
    
        </section>

</>
  )
}

export default Education
