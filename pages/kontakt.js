import Head from 'next/head'
import {Inter} from 'next/font/google'


import Navbar from "../components/common/Navbar";
import Contact from "../components/contact/Contact";

import Footer from "../components/common/Footer";





export default function Home() {
    return (
        <>
            {/*<Head/>*/}
            <main>
                <div id="main">

                    <Navbar/>
                    <Contact/>
                    <Footer/>

                </div>

            </main>
        </>
    )
}
