import Head from 'next/head';

import { Achievements } from '../../src/routes/Achievements';

/**
 * Display the {@link Achievements} page
 */
export default function AchievementsPage() {

  return (
    <>
      <Head>
        <title>Yash&apos;s Portfolio</title>
        <meta name="description" content="Yash Shah's Portfolio Page" />
        <meta name="viewport"content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        <Achievements />
      </main>

      <footer>
      </footer>
    </>
  )
}
