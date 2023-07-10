import Head from 'next/head'
import {Inter} from 'next/font/google'


import Navbar from "../components/common/Navbar";
import Projects from "../components/projects/Projects";

import Footer from "../components/common/Footer";





export default function Home() {
    return (
        <>
            {/*<Head/>*/}
            <main>
                <div id="main">

                    <Navbar/>
                    <Projects/>
                    <Footer/>

                </div>

            </main>
        </>
    )
}
