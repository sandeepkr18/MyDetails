import React from 'react';
import Tilt from 'react-parallax-tilt';
import { TypeAnimation } from 'react-type-animation';
import profileImage from '../../assets/profile/profile.png'
function About() {
  return (
    <>

      <section id='about'
        className='py-4 px-[6vw] md:px-[7vw] lg:px[20vw] font-sans mt-16 md:mt-24 lh:mt-32'
      >
        <div className='flex flex-col-reverse md:flex-row  justify-between items-center'>
          {/*left side code */}
          <div className='md:w-1/2 text-center md:text-left mt-5 md:mt-0'>
            <h3 className='text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-2 leading-tight' >
              Hii i am
            </h3>
            {/* Name */}
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight '>
              Mandip Mahi
            </h1>
            {/* Skills Heading with effect*/}
            <h3 className='text-xl sm:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight '>
              <span className='text-white '>
                i am a&nbsp;
              </span>
              <TypeAnimation
                sequence={[
                  ' FullStack Developer',
                  2000,  // Wait 2 sec
                  '',
                  500,   // Erase pause
                  ' Java Developer',
                  2000,
                  '',
                  500,
                  ' Coder',
                  2000,
                  '',
                  500,
                ]}
                speed={70}             // Typing speed
                deletionSpeed={80}      // Deletion speed
                wrapper="span"
                repeat={Infinity}
                cursor={true}
                style={{ display: 'inline-block', color: '#e3e303ff' }}
              />
            </h3>
            {/* intro */}
            <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
              I am a Java Developer with a strong focus
              on building scalable and efficient
              applications. Skilled in both backend and
              frontend development, I specialize in
              Java-based backend systems and leverage
              modern technologies to deliver seamless,
              high-performance solutions.
            </p>
            {/*Resume*/}
            <a href="https://drive.google.com/file/d/1YTu0QK60Hanncauf7L97IHedDwl65U3_/view?usp=drivesdk"
              target='_blank' rel='noopener noreferrer'
              className='inline-block text-GRAY py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
              style={{
                background: 'linear-gradient(90deg,#8245ec ,#a855f7)',
                boxShadow: '0 0 2px #7c38f2ff,0 0 2px #7b37f0ff, 0 0 40px #5f2bbaff'
              }}>
              DOWNLOAD CV
            </a>
          </div>
          {/* iMAGE PART*/}
          <div className='md:w-1/2 flex justify-center md:justify-end'></div>
          <Tilt
            className='w-52 h-54 sm:w-48 sm:h-48 md:w-[26rem] md:h-[19.3rem] md:mb-30 border-5 border-gray-800 rounded-full'
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.15}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img src={profileImage} alt='Sandeep'
              className='w-50 h-50 md:h-75 md:w-85 rounded-full objectcover drop-shadow-[0_10px_20px_rgba(130,69,237,0.5)]'>

            </img>
          </Tilt>
        </div>

      </section>

    </>
  )
} 

export default About
