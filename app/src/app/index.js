import React from 'react'
import Image from './children/image'
import styles from './styles'
import ProfileBlock from './children/profile_block'
import CommmentBlock from './children/comment_block'
import LikeBlock from './children/like_block'

const App = (props) => {
  const { data } = props
  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image data={data} />
      </div>
      <div style={styles.aside}>
        <ProfileBlock data={data} />
        <CommmentBlock data={data.edge_media_to_comment} />
        <LikeBlock data={data} />
      </div>
    </main>
  )
}

export default App
