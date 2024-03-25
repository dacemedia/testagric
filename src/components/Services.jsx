import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.png";
import imageDB from "../images/investor_dealbook.png";
import imagemonger from "../images/monger.png";
import imageFarmer from "../images/giz_dairy_farmer_manual1.png";
import imageFacilitate from "../images/giz_dairy_facilitator_manual1.png";
import imageAI from "../images/ai_for_all.png";
import imageCol from "../images/collaboration.png";
import imageCD from "../images/cultural_elegance_design.png";
import imageFO from "../images/formating.png";
import List, { ListItem } from "./List";
import Image from "next/image";
import imageWoman from "../images/woman.png";
import imagePLAY from "src/images/play.png";

const videos = [
  { title: "Intro", youtubeLink: "https://vimeo.com/469334952?share=copy" },
  // Add more video objects as needed
];

const Services = () => {
  
  return (
    <>
      <SectionIntro
  title={
    <>
      Recent Work<span className="text-green">.</span>
    </>
    
  }

  
  className="mt-4 sm:mt-32 lg:mt-90"
/>
<br/>
<br/>

<Container>
  <div className="flex flex-wrap items-center justify-center">
    {/* Render the single video thumbnail */}
    <div className="relative">
      <a href={videos[0].youtubeLink} target="_blank" rel="noopener noreferrer">
        <Image src={imagePLAY} alt={videos[0].title} width={2000} height={400} />
        {/* Play button */}
        <div className="absolute inset-0 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white opacity-75 hover:opacity-100 rounded-full border-white border-2 hover:border-opacity-100" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 0a10 10 0 1110 10A10.01 10.01 0 0110 0zm4.69 10.15l-6 3a1 1 0 01-1.69-.71V7.56a1 1 0 011.69-.71l6 3a1 1 0 010 1.42z"/>
          </svg>
        </div>
      </a>
    </div>
  </div>
</Container>

      <br/>
<br/>

<Container>
    <div className="flex flex-wrap items-center justify-center">
      <div className="w-1/2 pl-0"> {/* Set margin-left to 0 for the first image */}
        <Image
          src={imageCD}
          alt="Woman Image"
          width={600}
          height={400}
        />
      
      </div>
      <div className="w-1/2">
        <Image
          src={imagemonger}
          alt="Laptop Image"
          width={600}
          height={400}
        />
       
      </div>
    </div>

{/* <br/>
<br/>
<br/>
    <div className="flex justify-start mt-4"> {/* Align button to the left */}
    {/* <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
      Want to see more work?
    </button>
  */}

  </Container>

  <br/>
      <br/>
      <br/>
      <br/>

      <Container>
    <div className="flex flex-wrap items-center justify-center">
      <div className="w-1/2 pl-0"> {/* Set margin-left to 0 for the first image */}
        <Image
          src={imageCol}
          alt="Woman Image"
          width={600}
          height={400}
        />
      
      </div>
      <div className="w-1/2">
        <Image
          src={imageFO}
          alt="Laptop Image"
          width={600}
          height={400}
        />
       
      </div>
    </div>

{/* <br/>
<br/>
<br/>
    <div className="flex justify-start mt-4"> {/* Align button to the left */}
    {/* <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
      Want to see more work?
    </button>
  */}

  </Container>

  <br/>
      <br/>
      <br/>
      <br/>

      <Container>
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-1/2 pl-0"> {/* Set margin-left to 0 for the first image */}
            <Image
              src={imageFarmer}
              alt="Woman Image"
              width={600}
              height={400}
            />
            
          </div>
          <div className="w-1/2">
            <Image
              src={imageFacilitate}
              alt="Laptop Image"
              width={600}
              height={400}
            />
            
          </div>
        </div>
      </Container>

      <br/>
      <br/>
      <br/>
      <br/>

      <>
  <Container>
    <div className="flex flex-wrap items-center justify-center">
      <div className="w-1/2 pl-0"> {/* Set margin-left to 0 for the first image */}
        <Image
          src={imageAI}
          alt="Woman Image"
          width={600}
          height={400}
        />
      
      </div>
      <div className="w-1/2">
        <Image
          src={imageDB}
          alt="Laptop Image"
          width={600}
          height={400}
        />
       
      </div>
    </div>

{/* <br/>
<br/>
<br/>
    <div className="flex justify-start mt-4"> {/* Align button to the left */}
    {/* <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
      Want to see more work?
    </button>
  */}

  </Container>
  <br/>

  
  

  
  
</>



    </>
  );
};

export default Services;
