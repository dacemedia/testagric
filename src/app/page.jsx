import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoCGIAR from "../images/clients/cgiar_logo.png";
import logociat from "../images/clients/ciat.png";
import logosoli from "../images/clients/solidari.png";
import logotechnoserve from "../images/clients/technoserve.png";
import logosnv from "../images/clients/snv.png";
import logofao from "../images/clients/logo_fao_28_10_0.png";

import logoiwmi from "../images/clients/iwmi.png";
import logouniversity_of_reading from "../images/clients/university_of_reading.png";
import logounza from "../images/clients/unza.png";
import logocimmyt from "../images/clients/cimmyt.png";

import logocargil from "../images/clients/cargil.png";

import logozim from "../images/clients/zim.png";

import Image from "next/image";
import imageLaptop from "../images/laptop.jpg";
import imageWoman from "../images/woman.png";

export default function Home() {
  return (
    <main className="text-green">
      <Container className="mt-40 sm:mt-30">
        <FadeIn className="max-w-0xl">
          <h1 className="font-display font-semibold tracking-tight text-neutral-950 sm:text-9xl">
            We create <span style={{ color: '#90ae3d' }}>Communication Products </span> together with you.
          </h1>
        </FadeIn>
      </Container>

      <div className="flex justify-center">
  <Image
    src={imageWoman}
    sizes="(min-width: 1024px) 41rem, 31rem"
    style={{ width: '100%', marginLeft: '90px', marginRight: '90px' }}
  />
</div>


      <Container>
      <h2 className="font-display font-semibold text-4xl text-neutral-950 mt-8">
  People we have worked with
</h2>

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

      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: ""}}
      >
        I highly recommend Agricomm. They connect the dots in agriculture, ensuring vital knowledge reaches those who need it most, ultimately driving food security. - Dr David Chikoye, IITA Southern African Hub Director
      </Testimonials>

      <Services />
      <ContactSection />
    </main>
  );
}
