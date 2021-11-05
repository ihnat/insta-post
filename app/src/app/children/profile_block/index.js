import React from 'react'

import styles from './../../styles'

const Avatar = ({ imgSrc }) => {
    return (
        <div style={styles.avatar}>
            <img
                src={imgSrc}
                style={styles.avatarImg}
                // #TODO proper alt value
                alt={''}
            />
        </div>
    )
}

const ProfileBlock = ({ data }) => {
    return (
        <div style={styles.profileBlock}>
            <Avatar imgSrc={data.owner.profile_pic_url} />
            <div style={styles.profileBlockContent}>
                <h3 style={styles.profileBlockTitle}>{data.owner.username}</h3>
                <p style={styles.profileBlockLocation}>{data.location.name}</p>
            </div>
        </div>
    )
}
export default ProfileBlock