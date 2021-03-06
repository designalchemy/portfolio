import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  container: {
    'text-decoration': 'none',
    display: 'flex',
    'align-items': 'center',
    '&:hover': {
      '& p': {
        'text-decoration': 'underline'
      }
    },
    '@media (max-width: 600px)': {
      'justify-content': 'center'
    }
  },
  icon: {
    width: 15,
    'margin-right': 40,
    '@media (max-width: 600px)': {
      'margin-right': 20
    }
  }
}

const IconText = ({ classes, href, icon, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={classes.container}
  >
    <img src={icon} alt="icon" className={classes.icon} />
    <p>{children}</p>
  </a>
)

IconText.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  href: PropTypes.string,
  icon: PropTypes.string
}

export default injectSheet(styles)(IconText)
