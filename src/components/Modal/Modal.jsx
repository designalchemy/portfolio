import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import Title from '@components/Title/Title'
import Slider from 'react-slick'

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
    height: '80vh',
    width: '80vw',
    position: 'relative'
  },
  bodyContainer: {
    position: 'absolute',
    padding: 40,
    'overflow-x': 'auto',
    width: '100%',
    height: '100%',
    '@media (max-width: 600px)': {
      padding: 20
    }
  },
  close: {
    position: 'absolute',
    top: 30,
    right: 30,
    'font-size': 25,
    'font-weight': 800,
    cursor: 'pointer',
    zIndex: 10,
    background: 'white',
    padding: '5px 8px',
    '@media (max-width: 600px)': {
      top: 10,
      right: 10
    }
  },
  slider: {
    width: '80%',
    margin: '0 auto',
    marginBottom: 40,
    '& img ': {
      width: '100%'
    }
  },
  leftCol: {
    width: '40%',
    float: 'left',
    'padding-right': 30,
    '@media (max-width: 600px)': {
      width: '100%',
      'margin-bottom': 30,
      'padding-right': 0
    }
  },
  rightCol: {
    width: '60%',
    float: 'left',
    '@media (max-width: 600px)': {
      width: '100%'
    }
  }
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true
}

const Modal = ({ classes, closeModal, data }) => (
  <div className={classes.container}>
    <div className={classes.body}>
      <div className={classes.close} onClick={closeModal}>
        X
      </div>
      <div className={classes.bodyContainer}>
        <Title text={data.title} />
        <div className={classes.slider}>
          <Slider {...settings}>
            {data.images.map((item, index) => (
              <div key={index}>
                <img src={item} />
              </div>
            ))}
          </Slider>
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
  </div>
)

Modal.propTypes = {
  classes: PropTypes.object,
  closeModal: PropTypes.func,
  data: PropTypes.object
}

export default injectSheet(styles)(Modal)
