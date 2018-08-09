import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import bg from '@assets/header_bg.jpg'

const styles = {
  container: {
    background: `url(${bg})`,
    'background-size': 'cover',
    'background-position': 'top left'
  },
  childContainer: {
    'max-width': 1100,
    margin: '0 auto',
    display: 'flex',
    padding: '60 20'
  },
  box: {
    'min-width': 130,
    width: 130,
    height: 130,
    border: '4px solid black',
    marginRight: 30,
    'border-radius': 3,
    position: 'relative',
    fontSize: 40,
    'font-weight': '700'
  },
  l: {
    position: 'absolute',
    top: 10,
    left: 15
  },
  r: {
    position: 'absolute',
    bottom: 8,
    right: 15
  },
  line: {
    position: 'absolute',
    top: 60,
    width: 120,
    height: 4.5,
    'border-radius': 3,
    background: 'black',
    transform: 'rotate(-45deg)'
  },
  name: {
    fontSize: 40,
    'font-weight': '700',
    'margin-bottom': 15,
    'letter-spacing': 1
  },
  role: {
    fontSize: 13,
    'font-weight': '200',
    'letter-spacing': 5
  }
}

const Background = ({ classes }) => (
  <div className={classes.container}>
    <div className={classes.childContainer}>
      <div className={classes.box}>
        <div className={classes.l}>L</div>
        <div className={classes.r}>R</div>
        <div className={classes.line} />
      </div>
      <div>
        <h1 className={classes.name}>LUKE</h1>
        <h1 className={classes.name}>ROBERTSON</h1>
        <h1 className={classes.role}>JAVASCRIPT DEVELOPER</h1>
      </div>
    </div>
  </div>
)

Background.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Background)
