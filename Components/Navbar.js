import React from 'react'
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.mainnav}>
        <ul>
          <Link href='\home'><li>Home</li></Link>
          <Link href='\about'><li>About</li></Link>
          <Link href='\contact'><li>Contact</li></Link>
          <Link href='\blog'><li>Blogs</li></Link>
        </ul>
      </nav>
  )
}
