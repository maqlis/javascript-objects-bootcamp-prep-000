var playlistt = {}
playlistt.dido = "Life for Rent"

function updatePlaylist(playlist, artist, song){
  return Object.assign({}, playlist, { [artist]: song })
}

