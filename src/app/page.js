import Header from "@/components/layout/Header.js";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader subHeader={'Our story'} mainHeader={'About us'} />
        <div className="text-gray-400 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            And the new undisputed wwe universal heavyweight champion the american nightmare cody rhodes
            please welcome here paul heyman the northamercan champion solo sikoa and the undisputed wwe tag team champion the usos And the undisputed wwe universal champion roman reign
          </p>
          <p>
            And the new undisputed wwe universal heavyweight champion the american nightmare cody rhodes
            please welcome here paul heyman the northamercan champion solo sikoa and the undisputed wwe tag team champion the usos And the undisputed wwe universal champion roman reign
          </p>
          <p>
            please welcome here paul heyman the northamercan champion solo sikoa and the undisputed wwe tag team champion the usos And the undisputed wwe universal champion roman reign
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeader subHeader={'dont hesitate'} mainHeader={'contact us'} />
        <div className="mt-8 text-gray-500">
          <a href="tel:+917240453567" className="text-4xl">+91 72404-53567</a>
        </div>
      </section>
     
    </>
  );
}
