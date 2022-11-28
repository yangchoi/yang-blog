import '../global.css'
import Layout from '../layout'
import Template from '../template'
export default function AboutLayout({ routeParam, children }: any) {
  return (
    <Layout>
      <Template key={routeParam}>{children}</Template>
    </Layout>
  )
}
