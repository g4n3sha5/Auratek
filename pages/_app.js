import '/styles/style.css'
import Head from 'next/head'

const App = ({Component, pageProps}) => {
    return (
        <>
        <Head>
                <meta charSet="utf-8"/>
                <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
                <title>Auratek | Instalacje sanitarne</title>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1"/>
                <meta name="theme-color" content="#000000"/>
                <meta name="description" content="Instalacje sanitarne"/>

        </Head>
        <Component {...pageProps} />

        <script src="/vendor/purecounter/purecounter_vanilla.js"></script>
        <script src="/vendor/aos/aos.js"></script>
        <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="/vendor/swiper/swiper-bundle.min.js"></script>

        <script src="/js/main.js"></script>

        </>

)
}
export default App

