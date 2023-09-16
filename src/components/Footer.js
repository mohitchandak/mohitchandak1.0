import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';


function Footer() {
  return (
    <div className="py-5 border-t-3/2">
            <div className="flex align-center justify-center mt-4">
              <a target="_blank" rel="noreferrer"   className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/mohitchandak">
                <FaGithub />
                <span class="sr-only">Github</span>
              </a>
              <a target="_blank" rel="noreferrer" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/chandak-mohit/">
                <FaLinkedin />
                <span class="sr-only">Linkedin</span>
              </a>
              <a target="_blank" rel="noreferrer" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="https://twitter.com/64Bit_Coder_">
                <FaTwitter />
                <span class="sr-only">Twitter</span>  
              </a>
              <a target="_blank" rel="noreferrer" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="https://mailto:chandakmohit41@gmail.com">
                <FaRegEnvelope />
                <span class="sr-only">Email</span>  
              </a>
             
             
            </div>
            <div className="flex align-center justify-center mt-4">
              <p className="text-black mb-4">
                  Made with <span className = "mr-2" role="img" aria-label="heart">💙 </span>by <a className="text-blue-500 hover:underline" href="mailto:me.chandakml30@gmail.com">  Mohit Chandak </a>
              </p>
              </div>
    </div>
  )
}

export default Footer