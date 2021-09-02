import Head from 'next/head';

import { Contact } from '../../src/routes/Contact';

/**
 * Display the {@link Contact} page 
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
        <Contact />
      </main>

      <footer>
      </footer>
    </>
  )
}
