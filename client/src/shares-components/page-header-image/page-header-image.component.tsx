/** @jsx jsx */
import React from 'react'
import { jsx, Box } from 'theme-ui'

export default function PageHeaderImage({ title, img = '' }) {
  return (
    <div
      sx={{
        position: 'relative',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <div
        sx={{
          position: 'relative',
          width: '400px',
          height: '400px',
          '::after': {
            content: 'A',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            background: 'rgba(0,0,0,0.6)',
            opacity: 1,
          },
        }}
      >
        <img
          src={img}
          alt="page header"
          sx={{
            width: '100%',
            verticalAlign: 'top',
          }}
        />
      </div>
      {/* <div sx={{
                width: "100%",
                height: "200px",
                backgroundImage: `url(${img})`
                }}></div> */}
      <div
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <h1>{title}</h1>
      </div>
    </div>
  )
}
