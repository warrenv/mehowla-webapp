import fetch from 'node-fetch'

const coerce = songs => ({
  title: 'Public Playlist',
  songs,
})

export const loadPlaylist = async () => {
  try {
    const response = await fetch(
      '/songs',
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )

    if (response.ok) {
      const songs = await response.json()
      return coerce(songs)
    }
  } catch (err) {
    console.log('BOOM: ', err)
  }
}
