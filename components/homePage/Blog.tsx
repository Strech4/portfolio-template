import React from 'react'
import { ArrowUpRight } from 'lucide-react';

export const Blog = () => {
    const iconSize = 45
    const data = [
        {
            title: "Unraveling the Mysteries of Quantum Entanglement: A Journey into the Quantum Realm",
        },
        {
            title: "Exploring the Wonders of Deep Sea Bioluminescence: Illuminating the Dark Depths",
        },
        {
            title: "The Art of Mindful Productivity: Strategies for Finding Balance in a Busy World",
        },
    ]
  return (
    <section className='p-5 mt-10'>
        <h2 className="text-high-contrast text-3xl tracking-wider">
             Blog
        </h2>
        <p className='text-low-contrast mt-6 leading-8 text-lg'>
                Where the rivers flow backward and the clouds taste like cotton candy,
                there lived a peculiar creature named Flumf. Flumf had three heads, each
                with a different personality
        </p>
        <div className='flex flex-col mt-10 gap-10'>
            {data.map((items, index) => (
                <div 
                    key={index}
                    className='bg-bg-ui rounded-xl flex group '
                >
                    <div className='p-5'>
                        <h4 className='text-high-contrast text-sm sm:text-lg'>{items.title}</h4>
                        <p className='mt-5 text-low-contrast text-xs sm:text-base'>
                            12/03/2024
                        </p>
                        <p className='text-low-contrast text-xs sm:text-base'>
                            By Studio-dev
                        </p>
                    </div>
                    <div className='flex items-center justify-center text-low-contrast border-l border-separator p-5'>
                        <ArrowUpRight size={iconSize} className="group-hover:rotate-45 transition-all" />
                    </div>
                </div>
            ))}

            <div className=''>
                <button className='flex gap-2 items-center justify-center text-low-contrast bg-bg-ui px-4 py-2 text-xl rounded-xl group hover:text-high-contrast transition-all'>
                    <ArrowUpRight size={35} className="group-hover:rotate-45 transition-all" /> Visit my blog
                </button>
            </div>
        </div>
    </section>
  )
}
