import React from 'react'
import { ArrowUpRight } from 'lucide-react';

export const Projects = () => {

    const data = [
        { 
            title: "Landing-page",
            text: "Where the rivers flow backward and the clouds taste like cotton candy, there lived a peculiar creature named Flumf." 
        },
        { 
            title: "Password manager", 
            text: "Where the rivers flow backward and the clouds taste like cotton candy, there lived a peculiar creature named Flumf." 
        },
        { 
            title: "E-commerce app", 
            text: "Where the rivers flow backward and the clouds taste like cotton candy, there lived a peculiar creature named Flumf." 
        },
    ]

    return (
        <section className='p-5 mt-10'>
            <h2 className="text-high-contrast text-3xl tracking-wider">
                Projects
            </h2>
            <div className='flex flex-col sm:grid grid-cols-2 gap-6 sm:gap-3 mt-5'>

                {data.map((card, index) => (
                    <div key={index} className="bg-bg-ui/50 p-5 rounded-xl shadow-xl flex flex-col max-w-sm mx-auto">
                        <div className='flex items-center justify-center h-40 bg-hover/50 mb-2 rounded-xl '>
                            {/* Image */}
                        </div>
                        <div className=''>
                            <h4 className='text-high-contrast text-lg'>{card.title}</h4>
                            <p className='text-low-contrast text-sm mt-3'>
                                {card.text}
                            </p>
                            <button className='text-sm mt-4 text-low-contrast bg-bg-ui py-2 px-3 rounded-full hover:text-high-contrast hover:bg-hover transition-all flex items-center gap-2 group'>   
                                <ArrowUpRight className="group-hover:rotate-45 transition-all" /> Take a look
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}
