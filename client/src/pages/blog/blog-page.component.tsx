import React, { useState } from 'react'
import { BlogOverview } from '../../blog-components/blog-overview/blog-overview.component'
import Page from '../../layout-components/page/page.component'
import { postPreview, IPostPreview } from './blog-page.data'
import skylineimg from '../../assets/images/skyline-dubai.jpg'
import PageHeaderImage from '../../shares-components/page-header-image/page-header-image.component'

const BlogPage = () => {
  const [postPreviewData, setPostPreviewData] = useState<IPostPreview>(
    postPreview as IPostPreview
  )
  return (
    <Page
      pageHeaderComponent={
        <PageHeaderImage img={skylineimg} title="This Is A Blog" />
      }
    >
      <BlogOverview postsData={postPreviewData.posts} />
    </Page>
  )
}

export default BlogPage
