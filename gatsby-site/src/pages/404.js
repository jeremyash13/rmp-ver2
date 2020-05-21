import Layout from "../components/layout"
import SEO from "../components/seo"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

const style = css`
  min-height: 90vh;
  padding: 25px;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div css={style}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
