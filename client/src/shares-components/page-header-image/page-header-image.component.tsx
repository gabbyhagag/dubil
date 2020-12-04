/** @jsx jsx */
import React from 'react'
import { jsx, Box } from 'theme-ui'

export default function PageHeaderImage({title, img = ''}) {
    
    return (
        <Box sx={{
            position: "relative",
            textAlign: "center",
            color: "white",
        }}>
            <img src={img} alt="page image" sx={{
                width: "100%", 
                height: "200px"
                }}/>

            <Box sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)"
            }}>
                <h1>{title}</h1> 
            </Box>
        </Box>
    )
}
