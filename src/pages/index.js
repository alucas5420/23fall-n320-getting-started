import React from "react";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
    <Hero heroImage="/hero.jpg" height="200px" header="Main Hero" />
    <h1 className={styles.bigRedFont}>Home</h1>
    <p>This is the landing page for our Next.js app.</p>
    <p className={styles.blueFont}>This should be blue font.</p>
    <Hero heroImage="/hero.jpg" height="600px" />
    
    </>
  )
}