import Head from 'next/head'
import BaseLayout, { siteTitle } from '../layouts/base'

export default function Home() {
  return (
    <BaseLayout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </BaseLayout>
  )
}
