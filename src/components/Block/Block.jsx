import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  container: {
    'max-width': 1100,
    margin: '0 auto',
    padding: '50 20',
    display: 'flex',
    'flex-direction': 'column'
  }
}

const Block = ({ classes, children }) => (
  <div className={classes.container}>{children}</div>
)

Block.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default injectSheet(styles)(Block)
