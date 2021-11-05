import React from 'react'
import LikeButton from '../like_button'
import MentionHashtagText from '../mention_hashtag_text'
import styles from '../../styles'

const CommentItem = ({ data }) => {
  return (
    <div style={styles.commmentItem}>
      <p style={styles.commmentItemContent}>
        <a style={styles.commmentItemLink} href={`/#`}>{data.node.owner.username}</a>
        <MentionHashtagText>{data.node.text}</MentionHashtagText>
      </p>
      <LikeButton isLiked={data.node.viewer_has_liked} small={true} />
    </div>
  )
}

const CommmentBlock = ({ data }) => {
  let { edges: commentList } = data
  return (
    <div style={styles.commmentBlock}>
      {commentList.map((comment) => <CommentItem data={comment} />)}
    </div>
  )
}

export default CommmentBlock