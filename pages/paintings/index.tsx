import Head from 'next/head';

import { Paintings } from '../../src/routes/Paintings';

/**
 * Display my Paintings using a collage
 */
export default function PaintingsPage() {

  return (
    <>
      <Head>
        <title>Yash&apos;s Portfolio</title>
        <meta name="description" content="Yash Shah's Portfolio Page" />
        <meta name="viewport"content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        <Paintings />
      </main>

      <footer>
      </footer>
    </>
  )
}
