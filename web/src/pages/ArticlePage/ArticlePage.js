import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ArticlePage = ({ id }) => {
  // ^id parameter is passed from router
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <h1>ArticlePage</h1>
      <p>
        Find me in <code>./web/src/pages/ArticlePage/ArticlePage.js</code>
      </p>
      <p>
        My default route is named <code>article</code>, link to me with `
      </p>
      <p>My id is {id}!</p>
    </>
  )
}

export default ArticlePage
