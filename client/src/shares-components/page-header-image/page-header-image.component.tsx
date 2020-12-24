/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

export default function PageHeaderImage({ title, img = '' }) {
  return (
    <Box
      sx={{
        position: 'relative',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <Box
        sx={{
          // position: 'relative',
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
        <Box sx={{
              width: '100%',
              height: '100%',
              verticalAlign: 'top',
            }}>
          <img
            src={img}
            style={{width: '100%', height: '100%'}}
            alt="page header"
          />
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <h1>{title}</h1>
      </Box>
    </Box>
  )
}
