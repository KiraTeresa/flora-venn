import { featureDescriptions } from "@/src/constants/feature-description";
import { dancingScript } from "./fonts";
import clsx from "clsx";
import Image from 'next/image'

export default function Home() {

  return (
    <main className="max-w-screen-xl m-auto">
      <section className="flex items-center flex-col h-fit mt-5 md:m-20 md:justify-between md:flex-row">
        <div className="relative bg-secondary drop-shadow-md h-500 w-full pt-10 px-5 md:rounded-3xl md:h-96 md:w-80">
          <h1 className={clsx('text-highlight text-5xl text-center sm:text-6xl md:hidden', dancingScript.className)}>Welcome to <span className="text-primary">FloraVenn</span></h1>
          <Image src="/images/Illustration.png" width={300} height={300} alt="Illustration women with plant" className="absolute bottom-4 left-1/2 -translate-x-1/2 pt-20" />
          <button type="button" className={clsx("absolute bg-button text-white rounded-2xl py-1 px-10 text-4xl -bottom-6 left-1/2 -translate-x-1/2 w-3/4", dancingScript.className)}>Login</button>
        </div>
        <div className="py-10 px-5 md:w-3/5 text-center">
          <h1 className={clsx('text-highlight text-6xl mb-5 hidden md:inline-block', dancingScript.className)}>Welcome to <span className="text-primary">FloraVenn</span></h1>
          <p className="mt-10 sm:text-2xl md:mt-0">FloraVenn is the ultimate solution for all plant enthusiasts! Our app helps you keep your plants healthy and happy by reminding you of all important care tasks. Whether you are an experienced gardener or a beginner, FloraVenn makes plant care easy and stress-free.</p>
        </div>
      </section>
      <div className='flex flex-col md:gap-20 md:my-32'>
        {featureDescriptions.map((feature, index) =>
          <section key={feature.id} className={clsx("border-dashed border-t-white border-t-2 text-center py-10 px-5 md:border-none md:text-start md:bg-white md:drop-shadow md:ps-20 md:pe-40 md:w-2/3 md:rounded-3xl", index % 2 !== 0 && 'self-end md:text-end md:ps-40 md:pe-20')}>
            <h2 className={clsx('text-highlight text-2xl sm:text-3xl', dancingScript.className)}>{feature.headline}</h2>
            <p className="sm:text-lg">{feature.content}</p>
          </section>
        )}
      </div>
    </main>
  );
}
