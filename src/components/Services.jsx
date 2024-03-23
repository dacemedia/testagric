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
