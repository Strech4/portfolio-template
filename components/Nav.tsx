import React from 'react'
import Link from "next/link";

export const Nav = () => {

    const data = [
        { title: "Home", link: "#home" },
        { title: "About", link: "#about" },
        { title: "Skills", link: "#skills" },
        { title: "Projects", link: "#projects" },
        { title: "Blog", link: "#blog" },
    ]

  return (
    <nav className='p-5 border-b border-separator'>
        <ul className='flex gap-6 text-low-contrast'>
            {data.map((items, index) => (
                <Link key={index} href={items.link}>
                    <li className='hover:text-high-contrast'>
                        {items.title}
                    </li>
                </Link>
            ))}
        </ul>
    </nav>
  )
}
