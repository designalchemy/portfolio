import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  container: {
    'font-size': 20,
    'font-weight': 600,
    'margin-bottom': 25,
    'letter-spacing': 4,
    'text-transform': 'uppercase'
  }
}

const Background = ({ classes, text }) => (
  <h1 className={classes.container}>{text}</h1>
)

Background.propTypes = {
  classes: PropTypes.object,
  text: PropTypes.string
}

export default injectSheet(styles)(Background)
