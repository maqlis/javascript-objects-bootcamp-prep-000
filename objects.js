var playlist = {}
playlist.dido = "Life for Rent"

function updatePlaylist(playlist, artist, song){
  return Object.assign({}, playlist, { [artist]: song })
}
