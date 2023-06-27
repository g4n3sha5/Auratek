import '../styles/globals.css'
import Head from 'next/head'
import {appWithTranslation} from 'next-i18next';

const App = ({Component, pageProps}) =>{
    return (<>
        <Head>
            <meta charSet="utf-8"/>
            <title>Auratek | Instalacje sanitarne</title>
            <link rel="icon" href="/buddha.png"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="theme-color" content="#000000"/>
            <meta name="description" content="Boilerplate"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
                  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                  crossOrigin="anonymous"/>
        </Head>
        <Component {...pageProps} />

    </>)
}

// export default App /**/
export default appWithTranslation(App)
