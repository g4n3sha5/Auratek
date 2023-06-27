import Head from 'next/head'
import {Inter} from 'next/font/google'


import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import One from "../components/One";
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
                    <One/>
                    <Two/>
                    <Contact/>
                    <Footer/>

                </div>

            </main>
        </>
    )
}
