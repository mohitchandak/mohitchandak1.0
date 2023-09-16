import React from "react";
import { FaChevronDown } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";
import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <div>
      <div className="max-w-4xl mt-10 mx-auto">
        <p className="text-2xl text-black  md:text-4xl font-bold text-center">
          Hey 👋
        </p>
        <p className="text-base text-left md:text-center text-gray-475 leading-relaxed mt-4 justify-center">
          I am a final year computer science student at RCOEM, Nagpur. I am MERN
          stack developer. I enjoy building community and doing something
          meaningfull for the community. Also part of GDG cloud ,Nagpur. Like to
          take part in hackathons or related stuff.
        </p>
        <div className="text-center m-auto">
          <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1TC88jdABbjnXlXKLoitdVUZABH9HJ6Bh/view">
            <span
              className="mt-8 inline-block w-auto bg-black font-display text-white text-base md:text-xl py-3 px-5 cursor-pointer"
            >
              <div className="flex flex-row items-center">
                <span className="mr-3">Find Resume Here</span>
                <FaArrowRight color="white" />
              </div>
            </span>
          </a>
        </div>
      </div>

      <ScrollIntoView selector="#tech">
        <div class="mx-auto p-8">
          <FaChevronDown class="animate-bounce mx-auto text-3xl text-blue-500" />
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default About;
