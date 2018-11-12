import React, { Component } from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import bg from '@assets/header_bg.jpg'

const styles = {
  container: {
    background: `url(${bg})`,
    'background-size': '140vw 45vw',
    'background-position': 'top left',
    '@media (max-width: 600px)': {
      'background-size': 'auto 150%'
    }
  },
  childContainer: {
    'max-width': 1100,
    margin: '0 auto',
    display: 'flex',
    padding: '60 20',
    '@media (max-width: 600px)': {
      'flex-direction': 'column'
    }
  },
  box: {
    'min-width': 130,
    width: 130,
    height: 130,
    border: '4px solid transparent',
    marginRight: 30,
    'border-radius': 3,
    position: 'relative',
    fontSize: 40,
    'font-weight': '700',

    '@media (max-width: 600px)': {
      margin: '0 auto 40 auto'
    }
  },
  l: {
    position: 'absolute',
    top: 10,
    left: 15,
    opacity: 0,
    animation: 'opacity 0.6s 2.7s ease-in-out',
    'animation-fill-mode': 'forwards',
    'white-space': 'nowrap'
  },
  nameAni1: {
    animation: 'opacity 0.6s 2.7s ease-in-out',
    'animation-fill-mode': 'forwards'
  },
  r: {
    position: 'absolute',
    bottom: 8,
    right: 15,
    opacity: 0,
    animation: 'opacity 0.6s 3.5s ease-in-out',
    'animation-fill-mode': 'forwards',
    'white-space': 'nowrap'
  },
  nameAni2: {
    animation: 'opacity 0.6s 3.5s ease-in-out',
    'animation-fill-mode': 'forwards'
  },
  line: {
    position: 'absolute',
    top: 102,
    left: 20,
    width: 0,
    height: 4.5,
    'border-radius': 3,
    background: 'black',
    transform: 'rotate(-45deg)',
    animation: 'lineAni 0.5s 4.1s ease-in-out',
    'animation-fill-mode': 'forwards',
    'transform-origin': 'bottom left'
  },
  role: {
    fontSize: 13,
    'font-weight': '200',
    'letter-spacing': 5,
    'line-height': 1,
    opacity: 0,
    overflow: 'hidden',
    animation: 'opacity 0.5s 4.1s ease-in-out',
    'animation-fill-mode': 'forwards'
  },
  name: {
    fontSize: 40,
    'font-weight': '700',
    'margin-bottom': 15,
    'letter-spacing': 1,
    'line-height': 1,
    opacity: 0
  },
  '@keyframes width': {
    from: { width: '0' },
    to: { width: 'calc(100% + 8px)' }
  },
  '@keyframes height': {
    from: { height: '0' },
    to: { height: 'calc(100% + 8px)' }
  },
  '@keyframes opacity': {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  '@keyframes lineAni': {
    from: { width: 0 },
    to: { width: 120 }
  },
  line1: {
    position: 'absolute',
    'border-radius': 3,
    top: -4,
    left: -4,
    width: 0,
    height: 4,
    background: 'black',
    animation: 'width 0.6s 0.5s ease-in-out',
    'animation-fill-mode': 'forwards'
  },
  line2: {
    position: 'absolute',
    'border-radius': 3,
    top: -4,
    right: -4,
    width: 4,
    height: 0,
    background: 'black',
    animation: 'height 0.6s 1.1s ease-in-out',
    'animation-fill-mode': 'forwards'
  },
  line3: {
    position: 'absolute',
    'border-radius': 3,
    bottom: -4,
    right: -4,
    width: 0,
    height: 4,
    background: 'black',
    animation: 'width 0.6s 1.7s ease-in-out',
    'animation-fill-mode': 'forwards'
  },
  line4: {
    position: 'absolute',
    'border-radius': 3,
    bottom: -4,
    left: -4,
    width: 4,
    height: 0,
    background: 'black',
    animation: 'height 0.6s 2.3s ease-in-out',
    'animation-fill-mode': 'forwards'
  }
}

class Background extends Component {
  state = {
    scrollPos: 0
  }

  componentDidMount() {
    window.addEventListener('scroll', () =>
      this.setState({ scrolPos: document.body.scrollTop })
    )
  }

  render() {
    const { classes } = this.props
    const pos = this.state.scrolPos / 5 * -1
    return (
      <div
        className={classes.container}
        style={{
          backgroundPosition: `${pos}px ${pos}px`
        }}
      >
        <div className={classes.childContainer}>
          <div className={classes.box}>
            <div className={classes.line1} />
            <div className={classes.line2} />
            <div className={classes.line3} />
            <div className={classes.line4} />
            <div className={classes.l}>L</div>
            <div className={classes.r}>R</div>
            <div className={classes.line} />
          </div>
          <div>
            <h1 className={`${classes.name} ${classes.nameAni1}`}>LUKE</h1>
            <h1 className={`${classes.name} ${classes.nameAni2}`}>ROBERTSON</h1>
            <h1 className={classes.role}>JAVASCRIPT DEVELOPER</h1>
          </div>
        </div>
      </div>
    )
  }
}

Background.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Background)
