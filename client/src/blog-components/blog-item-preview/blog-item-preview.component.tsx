import React from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../../pages/blog/blog-page.data';

export const BlogItemPreview = ({ post }: IBlogItemPreviewProps) => {
    return (
        <div className='blog-item'>
            <img src={`${post.mainImg}`} alt='post-img-alt' />
            <h3 className='post-title'>{post.title}</h3>
            <p className='post-intro'>{post.summary}</p>
            <Link to='/'>Read more...</Link>
        </div>
    );
};

interface IBlogItemPreviewProps {
    post: IPost;
}
