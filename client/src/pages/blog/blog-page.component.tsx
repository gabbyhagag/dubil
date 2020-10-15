import React, { useState } from 'react';
import { BlogOverview } from '../../blog-components/blog-overview/blog-overview.component';
import { postPreview, IPostPreview } from './blog-page.data';

function BlogPage() {
    const [postPreviewData, setPostPreviewData] = useState<IPostPreview>(postPreview as IPostPreview);
    return (
      <div className="container">
          <h1>This is blog!!</h1>
          
          <BlogOverview postsData={postPreviewData.posts} />
      </div>
    );
}

export default BlogPage;
