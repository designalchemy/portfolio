import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  container: {
    float: 'left'
  }
}

const Span = ({ classes, col, children }) => {
  const size = col / 12 * 100
  const rowSize = 2
  return (
    <div
      className={classes.container}
      style={{
        width: `${size - rowSize}%`
      }}
    >
      {children}
    </div>
  )
}

Span.defaultProps = {
  col: 12
}

Span.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  col: PropTypes.number,
  end: PropTypes.bool
}

export default injectSheet(styles)(Span)
