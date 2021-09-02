import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import {ServerStyleSheets} from "@material-ui/styles";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
      enhanceApp: App => props => sheet.collect(<App {...props}/>)
    });

    const initialProps = await Document.getInitialProps(ctx);
    return { 
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      )
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" /> 
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" /> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
  )}
}

export default MyDocument;