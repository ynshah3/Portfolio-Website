import Head from 'next/head';

import { About } from '../../src/routes/About';

/**
 * Display the {@link About} page 
 */
export default function AboutPage() {

  return (
    <>
      <Head>
        <title>Yash&apos;s Portfolio</title>
        <meta name="description" content="Yash Shah's Portfolio Page" />
        <meta name="viewport"content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        <About />
      </main>

      <footer>
      </footer>
    </>
  )
}
