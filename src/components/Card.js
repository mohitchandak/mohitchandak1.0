import React from "react";
import profile from '../images/image.jpg';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

function Card() {
    return(
        <div className="w-full">
             <div className='flex flex-col justify-center max-w-xs mx-auto bg-white shadow-2xl rounded-xl p-5'>
                <div className = "">
                    <img className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" src={profile} alt="profile face" />

                </div>
                <div className="text-center mt-5">
                    <p className='text-xl sm:text-2xl font-semibold text-gray-900'>
                        Mohit Chandak
                    </p>
                    <p className='text-xs sm:text-base text-gray-450 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                       Computer Science Engineer-MERN Developer 

                    </p>
                    <div className="flex align-center justify-center mt-4">
                    <a target="_blank"  rel="noreferrer" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/mohitchandak">
                    <FaGithub />
                    <span class="sr-only">Github</span>
                  </a>
                  <a target="_blank" rel="noreferrer"className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/chandak-mohit/">
                    <FaLinkedin />
                    <span class="sr-only">Linkedin</span>
                  </a>
                  <a target="_blank" rel="noreferrer"className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="https://twitter.com/64Bit_Coder_">
                    <FaTwitter />
                    <span class="sr-only">Twitter</span>  
                  </a>
                  <a target="_blank" rel="noreferrer" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="https://mailto:chandakmohit41@gmail.com">
                    <FaRegEnvelope />
                    <span class="sr-only">Email</span>  
                  </a>
                 
          </div>
        </div>
      </div>
    </div>
  )
}


export default Card; 
