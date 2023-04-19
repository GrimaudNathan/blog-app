export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const today = new Date()
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000)

  if (date.toDateString() === today.toDateString()) {
    return 'Today'
  } else if (date.toDateString() === yesterday.toDateString()) {
    return 'Yesterday'
  } else {
    const day = date.getDate()
    const month = date.getMonth() + 1
    return `${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day}`
  }
}
