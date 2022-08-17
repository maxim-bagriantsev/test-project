import React from 'react';
import Document, {
    Html,
    Head,
    Main,
    NextScript,
  // eslint-disable-next-line no-unused-vars
    DocumentInitialProps,
} from 'next/document';

class ProjectDocument extends Document {
    static async getInitialProps(ctx: any): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render(): JSX.Element {
        return (
            <Html lang="ru" prefix="og: http://ogp.me/ns#">
                <Head>
                    {/* FAVICON */}
                    <meta name="theme-color" content="#ffffff"/>

                    {/* FONTS */}
                    <link
                        rel="preload"
                        href="/fonts/StyreneAWeb-Bold.woff"
                        as="font"
                        type="font/woff"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preload"
                        href="/fonts/StyreneAWeb-Light.woff"
                        as="font"
                        type="font/woff"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preload"
                        href="/fonts/StyreneAWeb-Regular.woff"
                        as="font"
                        type="font/woff"
                        crossOrigin="anonymous"
                    />
                    <link href="/fonts/style.css" rel="stylesheet"/>
                </Head>

                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default ProjectDocument;
