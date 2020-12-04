/** @jsx jsx */
import React from 'react'
import { jsx, Box } from 'theme-ui'

import './page-header.styles.scss'

export default function PageHeader({title, img = ''}) {
    
    return (
        <div className="page-header" sx={{ 
            backgroundImage: `url(${img})`, 
            backgroundSize: 'cover', 
            backgroundPositionY: 'center'
                 
        }}>
            <h1>{title}</h1>            
        </div>
    )
}
