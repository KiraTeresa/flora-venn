import { featureDescriptions } from "@/src/constants/feature-description";
import { dancingScript } from "./fonts";
import clsx from "clsx";
import { Login } from "@/components/login";
import { Accordion } from "@/components/accordion";

export default function Home() {


  return (
    <main className="max-w-screen-xl m-auto">
      <section className="flex items-center flex-col mt-5 md:m-20 md:justify-between md:flex-row">
        <Login />
        <div className="py-10 px-5 md:w-3/5 text-center">
          <h1 className={clsx('text-highlight text-6xl mb-5 hidden md:inline-block', dancingScript.className)}>Welcome to <span className="text-primary">FloraVenn</span></h1>
          <p className="mt-10 sm:text-2xl md:mt-0">FloraVenn is the ultimate solution for all plant enthusiasts! Our app helps you keep your plants healthy and happy by reminding you of all important care tasks. Whether you are an experienced gardener or a beginner, FloraVenn makes plant care easy and stress-free.</p>
        </div>
      </section>
      <Accordion
        className="transition-[max-height] ease-in-out duration-1000 mt-10 px-5"
        contentClassName='flex flex-col md:gap-20 md:mt-10 md:mb-32'
        ctaTextOpen="Show more"
        ctaTextClose="Show less"
      >
        {featureDescriptions.map((feature, index) =>
          <section key={feature.id} className={clsx("text-center py-10 px-5 md:border-none md:text-start md:bg-white md:drop-shadow md:ps-20 md:pe-40 md:w-2/3 md:rounded-3xl", index % 2 !== 0 && 'self-end md:text-end md:ps-40 md:pe-20', index !== 0 && 'border-dashed border-t-white border-t-2 ')}>
            <h2 className={clsx('text-highlight text-2xl sm:text-3xl', dancingScript.className)}>{feature.headline}</h2>
            <p className="sm:text-lg">{feature.content}</p>
          </section>
        )}
      </Accordion>
    </main>
  );
}
