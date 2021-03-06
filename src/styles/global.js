import reset from './reset'

const styles = {
  container: {
    height: '100%'
  },
  '@global': {
    ...reset,
    body: {
      'font-family': '"Montserrat", sans-serif',
      background: 'white',
      'line-height': 1,
      '@media (max-width: 600px)': {
        'text-align': 'center'
      }
    },
    '.slick-slide': {
      height: 'auto'
    },
    '.slick-prev:before': {
      color: 'black'
    },
    '.slick-next:before': {
      color: 'black'
    },
    p: {
      'font-size': 13,
      'font-weight': 400,
      'line-height': 2,
      'letter-spacing': 2,
      color: '#484a4c',
      'text-align': 'justify',
      'word-break': 'break-word',
      '@media (max-width: 600px)': {
        'text-align': 'center'
      }
    },
    a: {
      color: 'black',
      'word-break': 'break-all'
    },
    h1: {
      'line-height': 2
    },
    h2: {
      'line-height': 2
    },
    ul: {
      'line-height': 2,
      'letter-spacing': 2,
      color: '#484a4c',
      'font-size': 13,
      'font-weight': 400
    },
    input: {
      display: 'block',
      padding: '5 10',
      'margin-bottom': 10,
      border: '1px solid #707070',
      width: '100%',
      'line-height': 2,
      'letter-spacing': 2,
      color: '#484a4c',
      'font-size': 13,
      'font-weight': 400
    },
    textarea: {
      display: 'block',
      padding: '5 10',
      'margin-bottom': 10,
      border: '1px solid #707070',
      width: '100%',
      'min-height': 100,
      'line-height': 2,
      'letter-spacing': 2,
      color: '#484a4c',
      'font-size': 13,
      'font-weight': 400
    },
    button: {
      display: 'block',
      padding: '5 10',
      'margin-bottom': 10,
      border: '1px solid #707070',
      'line-height': 2,
      'letter-spacing': 2,
      color: '#484a4c',
      'font-size': 13,
      'font-weight': 400,
      transition: 'all 0.2s ease-in-out',
      cursor: 'pointer',
      '&:hover': {
        background: 'rgba(0,0,0,0.1)'
      },
      '@media (max-width: 600px)': {
        margin: '0 auto'
      }
    },
    '*': {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      boxSizing: 'border-box'
    },
    '#root': {
      height: '100%'
    }
  }
}

export default styles
