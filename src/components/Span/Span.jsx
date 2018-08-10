import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const grid = [...new Array(13)].map((x, index) => ({
  width: `${index / 12 * 100 - 2}%`
}))

const mobileGrid = grid.reduce((acc, item, index) => {
  acc[`mobile_${index}`] = { ...item, 'padding-bottom': '4%' }
  return acc
}, {})

const styles = {
  ...grid,
  '@media (max-width: 600px)': {
    ...mobileGrid
  }
}

const Span = ({ classes, col, children, mobile }) => {
  return (
    <div className={`${classes[col]} ${classes[`mobile_${mobile}`]}`}>
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
  end: PropTypes.bool,
  mobile: PropTypes.number
}

export default injectSheet(styles)(Span)
