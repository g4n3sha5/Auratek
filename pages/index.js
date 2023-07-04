import Head from 'next/head'
import {Inter} from 'next/font/google'


import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import About from "../components/About";
import Clients from "../components/Clients";
import Features from "../components/Features";
import Services from "../components/Services";
import CTA from "../components/CTA";
import Portfolio from "../components/Portfolio";
import Two from "../components/Two";
import Contact from "../components/Contact";
import Footer from "../components/Footer";





export default function Home() {
    return (
        <>
            {/*<Head/>*/}
            <main>
                <div id="main" >

                    <Navbar/>
                    <Banner/>
                    <About/>
                    <Clients/>
                    <Features/>
                    <Services/>
                    <CTA/>
                    <Portfolio/>
                    {/*<Two/>*/}
                    <Contact/>
                    <Footer/>

                </div>

            </main>
        </>
    )
}
