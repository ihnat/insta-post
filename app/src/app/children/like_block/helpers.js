export const countDaysAgo = (timestamp) => {
    let now = new Date()
    let date = new Date(timestamp * 1000)

    let timeDifference = now.getTime() - date.getTime()
    if (timeDifference < 0) {
        return new Error('Timestamp is in the future')
    }
    let dayDifference = timeDifference / (1000 * 3600 * 24)
    return Math.floor(dayDifference)
}