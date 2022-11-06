import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="standard-dialog">
        <p>YangChoi: Web Developer who loves to learn something new</p>
        <p>Usually have been Object-oriented Programming</p>
      </section>
    </Layout>
  )
}
