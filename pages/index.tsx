import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="standard-dialog">
        <p>Test Next.js TestTestTestTest</p>
        
      </section>
    </Layout>
  );
}