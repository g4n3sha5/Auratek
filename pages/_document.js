import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html>

            <Head>
                <link href="/img/favicon.png" rel="icon"/>
                <link href="/img/apple-touch-icon.png" rel="apple-touch-icon"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;600;700&display=swap" rel="stylesheet"/>
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
                    rel="stylesheet"/>
                {/*<link href="/vendor/aos/aos.css" rel="stylesheet"/>*/}
                <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
                <link href="/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
                <link href="/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
                <link href="/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
                <link href="/vendor/remixicon/remixicon.css" rel="stylesheet"/>
                <link href="/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>

            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>


        </Html>
    )
}
