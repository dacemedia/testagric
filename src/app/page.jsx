import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import Image from "next/image";
import imageLaptop from "../images/laptop.jpg";
import imageWoman from "../images/woman.png";

export default function Home() {
  return (
    <main className="text-green">
      <Container className="mt-40 sm:mt-50">
        <FadeIn className="max-w-7xl">
          <h1 className="font-display  font-semibold tracking-tight text-neutral-950 [text-wrap:balance] sm:text-8xl">
            We Know Farmers  More than Anyone Else.
          </h1>
          {/* <p className="mt-6 text-xl text-neutral-600">
            We are on a mission to make agriculture science simple
          </p> */}
        </FadeIn>
        
      </Container>
      <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
      <Image
                src={imageWoman}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user microphone without triggering one of
        those annoying permission dialogs.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
