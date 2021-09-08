import { useEffect, useState } from 'react';
import Head from 'next/head';

import { Home } from '../src/routes/Home';
import { Transition } from '../src/routes/Transition';

/**
 * Display the {@link Transition} screen and after a timeout of 3 seconds, hide it,
 * thus revealing the {@link Home} screen
 */
export default function HomePage() {

  /**
   * State Hook
   */
  const [show, setShow] = useState(true);

  /**
   * Effect Hook being used as OnComponentDidMount
   */
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  });

  return (
    <>
      <Head>
        <title>Yash&apos;s Portfolio</title>
        <meta name="description" content="Yash Shah's Portfolio Page" />
        <meta name="viewport"content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        {show && <Transition />}
        {!show && <Home />}
      </main>

      <footer>
      </footer>
    </>
  )
}
