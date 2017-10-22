import React from 'react'
// import PropTypes from 'prop-types'

import '../styles/card.scss'

const Card = (props) => {
  let style = {}
  if (props.showing) {
    style.backgroundColor = props.backgroundColor
  }
  return (
    <div
      onClick={props.onClick}
      className='card-container'
      style={style}
    />
  )
}

Card.propTypes = {
  // showing: PropTypes.bool.isRequired
  // backgroundColor: PropTypes.string.isRequired
  // onClick: PropTypes.func.isRequired
}

export default Card
