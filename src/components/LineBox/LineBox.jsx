import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  container: {
    'border-left': '1px solid #707070',
    'padding-left': 30,
    position: 'relative',

    '&:before': {
      content: '""',
      width: 5,
      height: 20,
      background: 'white',
      position: 'absolute',
      top: -2,
      left: -4
    },
    '&:after': {
      content: '""',
      width: 8,
      height: 8,
      'border-radius': '50%',
      background: '#707070',
      position: 'absolute',
      top: 4,
      left: -4
    }
  },
  h1: {
    'font-weight': 600,
    'font-size': 15,
    marginBottom: 15,
    'letter-spacing': 5
  },
  h2: {
    'font-weight': 300,
    'font-size': 15,
    marginBottom: 10,
    'letter-spacing': 5
  }
}

const LineBox = ({ classes, title, subTitle, children, padBottom }) => (
  <div className={classes.container}>
    <h1 className={classes.h1}>{title}</h1>
    <h2 className={classes.h2}>{subTitle}</h2>
    <p style={{ paddingBottom: `${padBottom ? '20px' : '0'}` }}>{children}</p>
  </div>
)

LineBox.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  title: PropTypes.string,
  subTitle: PropTypes.string,
  padBottom: PropTypes.bool
}

export default injectSheet(styles)(LineBox)
