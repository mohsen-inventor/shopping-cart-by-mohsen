import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Shopping Cart - Mohsen Eskander</title>
                    <link rel="icon" href="/images/favicon.png" type="image/x-icon"></link>
                </Head>
                <body>
                    <Main />
                </body>
                <NextScript />
            </Html>
        )
    }
}