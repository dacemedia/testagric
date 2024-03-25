import PageIntro from "@/components/PageIntro";

import logoCGIAR from "src/images/clients/cgiar_logo.png";
import logociat from "src/images/clients/ciat.png";
import logosoli from "src/images/clients/solidari.png";
import logotechnoserve from "src/images/clients/technoserve.png";
import logosnv from "src/images/clients/snv.png";
import logofao from "src/images/clients/logo_fao_28_10_0.png";

import logoiwmi from "src/images/clients/iwmi.png";
import logouniversity_of_reading from "src/images/clients/university_of_reading.png";
import logounza from "src/images/clients/unza.png";
import logocimmyt from "src/images/clients/cimmyt.png";

import logocargil from "src/images/clients/cargil.png";

import logozim from "src/images/clients/zim.png";

import imageDB from "src/images/investor_dealbook.png";
import imagemonger from "src/images/monger.png";
import imageFarmer from "src/images/giz_dairy_farmer_manual1.png";
import imageFacilitate from "src/images/giz_dairy_facilitator_manual1.png";
import imageAI from "src/images/ai_for_all.png";

import imageCol from "src/images/collaboration.png";
import imageCD from "src/images/cultural_elegance_design.png";
import imageFO from "src/images/formating.png";
import imageWO from "src/images/work.png";

import Image from "next/image";

import Container from "@/components/Container";
import React from "react";

const videos = [
  { title: "Video 1", youtubeLink: "youtube_link_1" },
  // Add more video objects as needed
];

const WorkPage = () => {

  
  return (
    <>
      <PageIntro
        eyebrow="Featured work"
        title="Proven solutions for real-world problems."
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro>

      <br/>
        <br/>

      <Container>
        <br/>
        <br/>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-9 mt-9">
  {/* Add your client logos here */}
  <Image src={logoCGIAR} alt="Phobia Logo" className="h-19 w-auto" />
  <Image src={logociat} alt="Phobia Logo" className="h-19 w-auto" />
  <Image src={logosoli} alt="Phobia Logo" className="h-19 w-auto" />
  <Image src={logotechnoserve} alt="Phobia Logo" className="h-19 w-auto" />
  <Image src={logosnv} alt="Phobia Logo" className="h-19 w-auto" />
  <Image src={logofao} alt="Phobia Logo" className="h-19 w-auto" />

  <Image src={logoiwmi} alt="Phobia Logo" className="h-19 w-auto" />
  <Image src={logouniversity_of_reading} alt="Phobia Logo" className="h-19 w-auto" />
  <Image src={logounza} alt="Phobia Logo" className="h-19 w-auto" />
  <Image src={logocimmyt} alt="Phobia Logo" className="h-19 w-auto" />
  <Image src={logocargil} alt="Phobia Logo" className="h-19 w-auto" />

  <Image src={logozim} alt="Phobia Logo" className="h-19 w-auto" />
  {/* Add more logos as needed */}
</div>

      </Container>

      <br/>
        <br/>
        <br/>
        <br/>
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

  


      
    </>

    
  );
};

export default WorkPage;
