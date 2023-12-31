import { MetaTags } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'

const ArticlePage = ({ id }) => {
  // ^id parameter is passed from router
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <ArticleCell id={id} />
    </>
  )
}

export default ArticlePage
