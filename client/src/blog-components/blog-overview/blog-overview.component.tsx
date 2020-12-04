import React from 'react'
import { IPost } from '../../pages/blog/blog-page.data'
import BlogItemPreview from '../blog-item-preview/blog-item-preview.component'

import './blog-overview.styles.scss'

export const BlogOverview = ({ postsData }: IBlogOverviewProps) => {
  console.log({ postsData })

  return (
    <div className="blog-overview-container">
      {postsData.map((post) => (
        <BlogItemPreview key={`${post.id}`} post={post} />
      ))}
    </div>
  )
}

interface IBlogOverviewProps {
  postsData: IPost[]
}
