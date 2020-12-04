import React from 'react'
import { Link } from 'react-router-dom'

export default ({ post: { mainImg, title, summary } }) => (
  <div className="blog-item">
    <img src={`${mainImg}`} alt="post-img-alt" />
    <h3 className="post-title">{title}</h3>
    <p className="post-intro">{summary}</p>
    <Link to="/">Read more...</Link>
  </div>
)
