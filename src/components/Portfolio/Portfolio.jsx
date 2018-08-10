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
    border: '1px solid black',
    'min-height': 150,
    position: 'relative',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    cursor: 'pointer',

    '&:hover': {
      '& p': {
        opacity: 1
      }
    },

    '& img': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    },

    '& p': {
      'z-index': 1,
      position: 'absolute',
      background: 'rgba(255,255,255,0.8)',
      padding: '0 5',
      opacity: 0,
      transition: 'all 0.2s ease-in-out'
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
          <div key={index} className={classes.rowContainer}>
            {item.map((child, childIndex) => (
              <Span col={3} mobile={6} key={childIndex}>
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
