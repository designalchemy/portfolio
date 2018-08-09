import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import Title from '@components/Title/Title'
import Carousel from 'nuka-carousel'

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0,0,0,0.4)',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    zIndex: '99'
  },
  body: {
    background: 'white',
    'max-height': '80vh',
    width: '80vw',
    display: 'flex',
    padding: 40,
    position: 'relative',
    'flex-direction': 'column',
    'overflow-x': 'auto'
  },
  close: {
    position: 'absolute',
    top: 30,
    right: 30,
    'font-size': 25,
    'font-weight': 800,
    cursor: 'pointer'
  },
  slider: {
    width: '60%',
    minHeight: '50vh',
    overflow: 'hidden',
    margin: '0 auto',
    marginBottom: 40
  },
  leftCol: {
    width: '40%',
    float: 'left',
    'padding-right': 30
  },
  rightCol: {
    width: '60%',
    float: 'left'
  }
}

const Modal = ({ classes, closeModal, data }) => (
  <div className={classes.container}>
    <div className={classes.body}>
      <div className={classes.close} onClick={closeModal}>
        X
      </div>
      <Title text={data.title} />
      <div className={classes.slider}>
        <Carousel autoplay wrapAround>
          {data.images.map((item, index) => (
            <img
              key={index}
              src={item}
              onLoad={() => {
                window.dispatchEvent(new Event('resize')) // hack for load height
              }}
            />
          ))}
        </Carousel>
      </div>
      <div>
        <div className={classes.leftCol}>
          {data.websit && (
            <p>
              Site: <a href={data.website}>{data.website}</a>
            </p>
          )}
          <p>Role: {data.role}</p>
          <p>Tech: {data.tech}</p>
        </div>
        <div
          className={classes.rightCol}
          dangerouslySetInnerHTML={{ __html: data.bio }}
        />
      </div>
    </div>
  </div>
)

Modal.propTypes = {
  classes: PropTypes.object,
  closeModal: PropTypes.func,
  data: PropTypes.object
}

export default injectSheet(styles)(Modal)
