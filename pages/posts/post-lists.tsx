import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function PostLists() {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>Posts</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
      );
  }