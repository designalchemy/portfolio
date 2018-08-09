import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  text: {
    color: 'red',
    fontSize: '20px'
  }
}

const Background = ({ classes }) => (
  <div className={classes.text}>
    <p>Hello World</p>
  </div>
)

Background.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Background)
