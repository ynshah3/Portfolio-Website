import Head from 'next/head';

import { Portfolio } from '../../src/routes/Portfolio';

/**
 * Display the {@link Portfolio} page
 */
export default function PortfolioPage() {

  return (
    <>
      <Head>
        <title>Yash&apos;s Portfolio</title>
        <meta name="description" content="Yash Shah's Portfolio Page" />
        <meta name="viewport"content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        <Portfolio />
      </main>

      <footer>
      </footer>
    </>
  )
}
