import { ArrowUpRight } from 'lucide-react'
import React from 'react'

export const About = () => {
    return (
        <section className='p-5 mt-10'>
            <h2 className="text-high-contrast text-3xl tracking-wider">
                About
            </h2>
            <div className='flex flex-col sm:grid grid-cols-3 gap-6 sm:gap-3 mt-6'>

                <div className="col-span-2 bg-bg-ui/50 p-5 rounded-xl">
                    <h4 className='text-high-contrast text-xl'>
                        About me
                    </h4>
                    <p className='text-low-contrast mt-3 leading-6 text-'>
                        Where the rivers flow backward and the clouds taste like cotton candy,
                        there lived a peculiar creature named Flumf.
                    </p>
                </div>

                <div className="col-span-1 bg-bg-ui/50 p-5 rounded-xl flex flex-col justify-between">
                    <div className='flex items-center justify-center h-full'>
                        <h4 className='text-center text-7xl sm:text-6xl text-low-contrast'>2</h4>
                    </div>
                    <p className='text-center text-2xl sm:text-xl text-high-contrast'>
                        Years Experience
                    </p>
                </div>

            </div>

            <div className='mt-6 sm:mt-3 flex flex-col sm:flex-row gap-6 sm:gap-3'>

                <div className="sm:w-1/2 bg-bg-ui/50 p-5 rounded-xl">
                    <h4 className='text-high-contrast text-xl'>
                        My projects
                    </h4>
                    <p className='text-low-contrast mt-3 leading-6 text-'>
                        Where the rivers flow backward and the clouds taste like cotton.
                    </p>
                    <button className='text-sm mt-4 text-low-contrast bg-bg-ui py-2 px-3 rounded-full hover:text-high-contrast hover:bg-hover transition-all flex items-center gap-2 group'>
                        <ArrowUpRight className="group-hover:rotate-45 transition-all" /> Projects
                    </button>
                </div>

                <div className="sm:w-1/2 bg-bg-ui/50 p-5 rounded-xl">
                    <h4 className='text-high-contrast text-xl'>
                        My blog
                    </h4>
                    <p className='text-low-contrast mt-3 leading-6 text-'>
                        Where the rivers flow backward and the clouds taste like cotton.
                    </p>
                    <button className='text-sm mt-4 text-low-contrast bg-bg-ui py-2 px-3 rounded-full hover:text-high-contrast hover:bg-hover transition-all flex items-center gap-2 group'>
                        <ArrowUpRight className="group-hover:rotate-45 transition-all" /> Blog
                    </button>
                </div>
            </div>
        </section>
    )
}
