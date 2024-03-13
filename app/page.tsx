import { About } from "@/components/homePage/About";
import { Blog } from "@/components/homePage/Blog";
import { Header } from "@/components/homePage/Header";
import { Projects } from "@/components/homePage/Projects";
import { Skills } from "@/components/homePage/Skills";
import { Footer } from "@/components/Footer";
import React from "react";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <About />
                <Skills />
                <Projects />
                <Blog />
            </main>
            <Footer />
        </>
    );
}
