import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  container: {
    width: '100%',
    'max-width': 1100,
    margin: '0 auto',
    padding: '0 20',
    height: 1,
    background: '#707070'
  }
}

const Line = ({ classes }) => <div className={classes.container} />

Line.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Line)
