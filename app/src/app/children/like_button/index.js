import React from 'react'
import styles from './../../styles'
import LikedIcon from './children/liked_icon'
import UnlikedIcon from './children/unliked_icon'

const LikeButton = ({isLiked, small}) => {
  let buttonStyles = small ? {...styles.likeButton, ...styles.likeButtonSmall} : styles.likeButton
  if (isLiked) {
    return <LikedIcon style={buttonStyles} />
  }
  return <UnlikedIcon style={buttonStyles}/>
}

export default LikeButton
