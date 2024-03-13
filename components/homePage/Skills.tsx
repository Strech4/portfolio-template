import React from "react";

export const Skills = () => {

    const data = [
        { title: "NextJs" },
        { title: "TailwindCss" },
        { title: "React" },
        { title: "Prisma" },
        { title: "Framer-motion" },
        { title: "Next-auth" },
        { title: "PostgreSQL" },
        { title: "Mongo DB" },
        { title: "SASS" },
        { title: "Visual studio code" },
        { title: "Spline3D" },
    ]

    return (
        <section className="p-5 mt-10">
            <h2 className="text-high-contrast text-3xl tracking-wider">
                Skills
            </h2>
            <div className="flex flex-wrap gap-5 mt-5">
                {data.map((items, index) => (
                    <div 
                        className="text-lg text-low-contrast bg-bg-ui p-3 rounded-xl shadow-xl"
                        key={index}
                    >
                        <p>{items.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
