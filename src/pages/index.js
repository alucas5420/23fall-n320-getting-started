import React from "react";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Line from "@/components/Line";

export default function Home() {
  return (
    <>
    <Nav header = "Home " header2 = " About " header3 = "  Products " header4 = "  Contact"/>
    
    <Hero heroImage="/TheCity.jpg" height="400px" header="IUPUI" />
    <Line/>
    <br></br> 
    <h1 className={styles.iupuiFont}>Welcome to IUPUI!</h1>
    <p className={styles.otherFont}>This is the home page for the IUPUI official site.</p>
    <p className={styles.otherFont}>Be sure to look around.</p>
    <Line/>
    <Hero heroImage="/City.jpg" height="500px" />

    <Line/>
    
    </>
  )
}