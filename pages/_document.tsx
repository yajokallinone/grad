import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="th">
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="หลักสูตรระดับบัณฑิตศึกษา คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่" />
                <meta name="keywords" content="บัณฑิตศึกษา, วิศวกรรมศาสตร์, มหาวิทยาลัยเชียงใหม่, ปริญญาโท, ปริญญาเอก" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
