import React from 'react'
import LikeButton from './../like_button'
import {countDaysAgo} from './helpers'
import styles from './../../styles'

const LikeBlock = ({ data }) => {
    let likeNum = data.edge_media_preview_like.count

    let howManyDaysPassed = countDaysAgo(data.taken_at_timestamp)
    return (
      <div style={styles.likeBlock}>
        <div  style={styles.likeBlockLeft}>
          <span style={styles.likeBlockNumer}>{likeNum} likes</span>
          <span style={styles.likeBlockPostAge}>{howManyDaysPassed} days ago</span>
        </div>
        <LikeButton isLiked={data.viewer_has_liked}/>
      </div>
    )
  }

export default LikeBlock