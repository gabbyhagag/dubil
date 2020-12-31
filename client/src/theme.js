export default {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#639',
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
    },
    secondary: {
      color: 'white',
      bg: 'secondary',
    },
  },
  lineHeights: {
    body: 1.5,
    heading: 1.2,
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  letterSpacings: {
    heading: '0em',
    caps: '0.1em',
  },
  text: {
    default: {
      color: 'text',
      // fontSize: 2,
      lineHeight: "1.4em",
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      // fontSize: 4,
      letterSpacing: 'heading',
      paddingTop: '13px',
      paddingBottom: '15px',
    },
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      letterSpacing: 'heading',
      fontSize: [ 5, 6, 7 ],
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: 'caps',
    },
  },
}