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
    p: {
      'font-size': 13,
      'font-weight': 400,
      'line-height': 2,
      'letter-spacing': 2,
      color: '#484a4c',
      'text-align': 'justify',
      'word-break': 'break-word'
    },
    a: {
      color: 'black',
      'word-break': 'break-all'
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
