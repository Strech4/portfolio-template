import React from "react";
import { ArrowUpRight } from 'lucide-react';

export const Header = () => {
    return (
        <header className="p-5 mt-10">
            <div className="w-fit text-high-contrast p-4 bg-bg-ui rounded-full mb-6 text-4xl flex items-center justify-center">
                SD
            </div>
            <h1 className="text-high-contrast text-3xl tracking-wider font-bold">
                Hi, i'm John Doe 👋
            </h1>
            <h2 className="text-high-contrast text-lg tracking-wider font-light">
                Front-end developer
            </h2>
            <p className="text-low-contrast mt-6 leading-8 text-lg">
                Where the rivers flow backward and the clouds taste like cotton candy,
                there lived a peculiar creature named Flumf. Flumf had three heads, each
                with a different personality: one head loved to recite Shakespearean
                sonnets while riding unicycles, another head was obsessed with solving
                Sudoku puzzles underwater
            </p>
            <div className="mt-8 text-high-contrast flex gap-12 text-lg items-center flex-wrap">
                <p className="hover:text-high-contrast transition-all cursor-pointer flex gap-2 items-center group ">
                    <ArrowUpRight className="group-hover:rotate-45 transition-all" /> Twitter
                </p>

                <p className="hover:text-high-contrast transition-all cursor-pointer flex gap-2 items-center group">
                    <ArrowUpRight className="group-hover:rotate-45 transition-all" /> Linkedin
                </p>
                <p className="hover:text-high-contrast transition-all cursor-pointer flex gap-2 items-center group">
                    <ArrowUpRight className="group-hover:rotate-45 transition-all" /> Github
                </p>
                <p className="hover:text-high-contrast transition-all cursor-pointer flex gap-2 items-center group">
                    <ArrowUpRight className="group-hover:rotate-45 transition-all" /> Email
                </p>
            </div>
        </header>
    );
};
