import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex',
    'justify-content': 'space-between',
    'flex-wrap': 'wrap'
  }
}

const Row = ({ classes, children }) => (
  <div className={classes.container}>{children}</div>
)

Row.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default injectSheet(styles)(Row)
