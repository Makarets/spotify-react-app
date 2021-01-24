import React, {Component, useEffect, useState} from "react"
import { getUserPlayList, getSearch, getUserInfo, setTrack } from "../api"
import SongList from "./SongList"

const HomePage = () => {
    const [playList, setPlayList] = useState([])
    const [randomSong, setRandomSong] = useState('')
    const [user, setUser] = useState({})
    const [like, setLike] = useState(false)

    const generateRandomQuery = () => {
        const seedArtists = playList[Math.floor(Math.random() * playList.length)].track.id
        const seedTracks = playList[Math.floor(Math.random() * playList.length)].track.artists[0].id
        return "?seed_artists="+seedArtists+"&seed_genres=rap%2Cpop%2Crock&seed_tracks="+seedTracks+"&limit=100"
    }

    const getRandomHandler = () => {
        const data = generateRandomQuery()
        getSearch(data).then(res => {
            const trak = Math.floor(Math.random() * res.data.tracks.length)
            setRandomSong(res.data.tracks[trak].id)
            setLike(false)
        })
    }

    const getPlayList = () => {
        getUserPlayList().then(res => {
            setPlayList(res.data.items)
        })
    }

    const likeTrackHandler = () => {
        setTrack(randomSong).then(res => {
            getPlayList()
            setLike(true)
        })
    }

    useEffect(() => {
        getPlayList()
        getUserInfo().then(res => {
            setUser(res.data)
        })
    },[])

    return(
        <div className="container">
            <div className="home-page-content">
                <SongList playList={playList} user={user} />
                <div onClick={getRandomHandler} className="get-random-btn">Get Random Song</div>
                {randomSong &&
                <div className="random-track-block">
                    <iframe src={"https://open.spotify.com/embed/track/" + randomSong}
                            width="350" height="80" frameBorder="0" allowtransparency="true"
                            allow="encrypted-media"></iframe>
                    <div onClick={likeTrackHandler}>
                        {like ? <img src="/src/assets/img/like-red.svg" /> : <img src="/src/assets/img/like.svg" />}
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default HomePage
