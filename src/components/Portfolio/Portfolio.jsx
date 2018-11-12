import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import Span from '@components/Span/Span'
import Modal from '@components/Modal/Modal'
import data from './data'

const styles = {
  rowContainer: {
    display: 'flex',
    'justify-content': 'space-between',
    'margin-bottom': 30,
    'flex-wrap': 'wrap',

    '&:last-child': {
      'margin-bottom': 0
    }
  },
  rowCell: {
    position: 'relative',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    cursor: 'pointer',

    '@media (max-width: 600px)': {
      // height: '30vw'
    },

    '&:hover': {
      '& p': {
        opacity: 1
      }
    },

    '& img': {
      maxWidth: '100%',
      maxHeight: '100%',
      width: '100%',
      outline: '1px solid #d0d0d0'
    },

    '& p': {
      'z-index': 1,
      position: 'absolute',
      background: 'rgba(255, 255, 255, 0.8)',
      padding: '0 5',
      opacity: 0,
      transition: 'all 0.2s ease-in-out',
      'text-align': 'center'
    }
  }
}

class IconText extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    open: false,
    data: {}
  }

  closeModal = () => {
    this.setState({ open: false })
  }

  openModal = data => {
    this.setState({ open: true, data })
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        {data.map((item, index) => (
          <div className={classes.rowContainer} key={index}>
            {item.map((child, childIndex) => (
              <Span col={4} mobile={12} key={childIndex}>
                <div
                  className={classes.rowCell}
                  onClick={() => this.openModal(child)}
                >
                  <img src={child.cover} />
                  <p>{child.title}</p>
                </div>
              </Span>
            ))}
          </div>
        ))}

        {this.state.open && (
          <Modal closeModal={this.closeModal} data={this.state.data} />
        )}
      </div>
    )
  }
}

IconText.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(IconText)
