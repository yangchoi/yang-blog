import Link from 'next/link';
import Head from 'next/head';

export default function Abouts() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <h1>About Test</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
      );
  }