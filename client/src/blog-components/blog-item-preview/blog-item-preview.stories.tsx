import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'

import BlogItemPreview from './blog-item-preview.component'
import { IPost } from '../../pages/blog/blog-page.data'

export default {
  title: 'Blog/ItemPreview',
  component: BlogItemPreview,
} as Meta

const post: IPost = {
  id: '4EABD3DC-9495-B4A3-88AA-CB4560A5DE4F',
  author: 'Porter, Cassandra, Sydnee, Darryl',
  date: '01/12/2020',
  modified: '21/04/2020',
  summary:
    'Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a,',
  title: 'aliquet molestie tellus. Aenean',
  status: 3,
  mainImg: 'https://picsum.photos/400',
}

export const WithNormalData = () => (
  <div>
    <BlogItemPreview post={post} />
  </div>
)
