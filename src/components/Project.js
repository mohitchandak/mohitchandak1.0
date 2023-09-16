import React from "react";
import login from '../images/icodejr.png';
import mohit from '../images/mohit.png';
import gith from '../images/gith.png';
import todo from '../images/todo.png';
import zomoto from '../images/zomato.png';
import {FaGithub } from 'react-icons/fa';
import {CgWebsite } from 'react-icons/cg';


function Project() {
    return(
        
    <div className='max-w-4xl mx-auto justify-center py-15 pt-36 pb-10' id="tech">
    <p className="text-2xl text-black  md:text-4xl font-bold text-center pt-4">
     Project 
    </p>
        {/* Icodejr */}
    <div className = "flex flex-wrap justify-center pt-2"> 
    <div className="flex flex-col m-6  overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
    <div className="text-center mt-5">
    <img className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" src={login} alt="profile face" />
        <p className='text-xl mt-4 sm:text-2xl font-semibold text-gray-900'>
            Icodejr
        </p>
        <p className='text-xs sm:text-base text-gray-450 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
           Code Sharing with having meet(MERN)
        </p>
        <div className="flex align-center justify-center mt-4">
                    <a target="_blank"  rel="noreferrer" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/mohitchandak/icodejr">
                    <FaGithub />
                    <span class="sr-only">Github</span>
                  </a>
                  <a target="_blank" rel="noreferrer"className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="http://icodejr.herokuapp.com/">
                    <CgWebsite />
                    <span class="sr-only">Live Demo</span>
                  </a>
                 </div>
       </div> 
       </div>

        {/* Git Hub Search */}

       <div className="flex flex-col m-6  overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
    <div className="text-center mt-5">
    <img className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" src={gith} alt="profile face" />
        <p className='text-xl mt-4 sm:text-2xl font-semibold text-gray-900'>
            Github Search User
                 </p>
        <p className='text-xs sm:text-base text-gray-450 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
           React website using Github api and AuthO 
        </p>
        <div className="flex align-center justify-center mt-4">
                    <a target="_blank"  rel="noreferrer" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/mohitchandak/GitHub-Serach-User">
                    <FaGithub />
                    <span class="sr-only">Github</span>
                  </a>
                  <a target="_blank" rel="noreferrer"className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="https://githubserach.netlify.app/">
                    <CgWebsite />
                    <span class="sr-only">Live Demo</span>
                  </a>
                 </div>
       </div> 
       </div>

       {/* Mohit.me */}
       
       <div className="flex flex-col m-6  overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
    <div className="text-center mt-5">
    <img className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" src={mohit} alt="profile face" />
        <p className='text-xl mt-4 sm:text-2xl font-semibold text-gray-900'>
            Mohit.me
        </p>
        <p className='text-xs sm:text-base text-gray-450 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
           Portfolio website build on react  
        </p>
        <div className="flex align-center justify-center mt-4">
                    <a target="_blank"  rel="noreferrer" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/mohitchandak/mohit.me">
                    <FaGithub />
                    <span class="sr-only">Github</span>
                  </a>
                 </div>
       </div> 
       </div>

       {/* Mohi To Do*/}
       
       <div className="flex flex-col m-6  overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
    <div className="text-center mt-5">
    <img className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" src={todo} alt="profile face" />
        <p className='text-xl mt-4 sm:text-2xl font-semibold text-gray-900'>
            Mohit ToDo List
        </p>
        <p className='text-xs sm:text-base text-gray-450 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
         ToDo list website using HTML CSS JS
        </p>
        <div className="flex align-center justify-center mt-4">
                    <a target="_blank"  rel="noreferrer" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/mohitchandak/Mohi-Todo-List">
                    <FaGithub />
                    <span class="sr-only">Github</span>
                  </a>
                  <a target="_blank" rel="noreferrer"className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="https://mohitchandak.github.io/Mohi-Todo-List/">
                    <CgWebsite />
                    <span class="sr-only">Live Demo</span>
                  </a>
                 </div>
       </div> 
       </div>

{/* Zomoto Like page */}

       <div className="flex flex-col m-6  overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
    <div className="text-center mt-5">
    <img className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" src={zomoto} alt="profile face" />
        <p className='text-xl mt-4 sm:text-2xl font-semibold text-gray-900'>
             Zomato Like Page
        </p>
        <p className='text-xs sm:text-base text-gray-450 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
          Static Zomato Webite on HTML CSS 
        </p>
        <div className="flex align-center justify-center mt-4">
                    <a target="_blank"  rel="noreferrer" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/mohitchandak/Zomato_Like_Page">
                    <FaGithub />
                    <span class="sr-only">Github</span>
                  </a>
                  <a target="_blank" rel="noreferrer"className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="https://mohitchandak.github.io/Zomato_Like_Page/">
                    <CgWebsite />
                    <span class="sr-only">Live Demo</span>
                  </a>
                 </div>
       </div> 
       </div>


       
       </div>
       </div>
    )     
}


export default Project; 
