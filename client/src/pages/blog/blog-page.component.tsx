import React, { useState } from 'react';
import { BlogOverview } from '../../blog-components/blog-overview/blog-overview.component';
import Page from '../../layout-components/page/page.component';
import PageHeader from '../../shares-components/page-header/page-header.component';
import { postPreview, IPostPreview } from './blog-page.data';
import skylineimg from '../../assets/images/skyline-dubai.jpg'



function BlogPage() {
    const [postPreviewData, setPostPreviewData] = useState<IPostPreview>(postPreview as IPostPreview);
    return (
        <Page title="this is a blog!" img={skylineimg}>
          <BlogOverview postsData={postPreviewData.posts} />
        </Page>
    );
}

export default BlogPage;
