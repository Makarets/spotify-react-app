import React, { Component } from "react"

const SongList = ({playList, user}) => {
    const songsList = playList.map((song) =>
        <li key={song.track.id}>
            <iframe src={"https://open.spotify.com/embed/track/" + song.track.id}
                    width="400" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </li>
    )
    return(
        <div className="liked-playlist">
            <h2>Liked songs playlist ({user.display_name}):</h2>
            {playList.length !== 0 ?
                <ul className="song-list">{songsList}</ul> :
                <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                </div>
            }
        </div>
    )
}

export default SongList