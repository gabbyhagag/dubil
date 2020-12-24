import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Heading, Text } from 'theme-ui'

export default ({ post: { mainImg, title, summary } }) => (
  <Box sx={{ 
    backgroundColor: '#f2f2f2', 
    border: '1px solid #ddd', 
    borderRadius: '8px', 
    p: '25px', 
    boxShadow: '0px 0px 5px -2px rgba(0,0,0,0.3)',
}} className="blog-item">
    <img style={{
      border: '1px solid #dddddd', 
      borderRadius: '8px', 
      boxShadow: '0px 0px 14px -2px rgba(0,0,0,0.6)',
      width: '100%',
      }} src={`${mainImg}`} alt="post-img-alt" />
    <Heading as='h1' className="post-title">{title}</Heading>
    <Heading className="post-title">{title}</Heading>
    <Heading as='h3' className="post-title">{title}</Heading>
    <Text sx={{ mb: 3}} className="post-intro">{summary}</Text>
    <Link to="/">Read more...</Link>
  </Box>
)
