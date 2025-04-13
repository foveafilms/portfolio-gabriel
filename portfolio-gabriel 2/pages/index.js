import Head from 'next/head';
import Portfolio from '../components/Portfolio';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriel Castiella Portfolio</title>
        <meta name="description" content="Portfolio de Gabriel Castiella" />
      </Head>
      <main>
        <Portfolio />
      </main>
    </>
  );
}