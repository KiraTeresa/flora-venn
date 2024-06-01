import { featureDescriptions } from "@/src/constants/feature-description";
import { dancingScript } from "./fonts";
import clsx from "clsx";
import Image from 'next/image'

export default function Home() {

  return (
    <main className="max-w-screen-xl m-auto">
      <section className="m-20 flex justify-between">
        <div className="relative bg-secondary rounded-3xl drop-shadow-md h-96 w-80">
          <Image src="/images/Illustration.png" width={300} height={300} alt="Illustration women with plant" className="absolute bottom-4 left-1/2 -translate-x-1/2" />
          <button type="button" className={clsx("absolute bg-button text-white rounded-2xl py-1 px-10 text-4xl -bottom-6 left-1/2 -translate-x-1/2 w-3/4", dancingScript.className)}>Login</button>
        </div>
        <div className="py-10 ps-5 w-3/5 text-center">
          <h1 className={clsx('text-highlight text-6xl mb-5', dancingScript.className)}>Welcome to <span className="text-primary">FloraVenn</span></h1>
          <p className="text-2xl">FloraVenn is the ultimate solution for all plant enthusiasts! Our app helps you keep your plants healthy and happy by reminding you of all important care tasks. Whether you are an experienced gardener or a beginner, FloraVenn makes plant care easy and stress-free.</p>
        </div>
      </section>
      <div className='flex flex-col gap-20 my-32'>
        {featureDescriptions.map((feature, index) =>
          <section key={feature.id} className={clsx("bg-secondary py-10 ps-20 pe-40 w-2/3 rounded-3xl", index % 2 !== 0 && 'self-end text-end ps-40 pe-20')}>
            <h2 className={clsx('text-highlight text-3xl', dancingScript.className)}>{feature.headline}</h2>
            <p className="text-lg">{feature.content}</p>
          </section>
        )}
      </div>
    </main>
  );
}
