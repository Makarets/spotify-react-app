import axios from "axios"
import hash from "./hash"


// Axios default configs
axios.defaults.baseURL = "https://api.spotify.com/v1"
axios.defaults.headers.common['Authorization'] = 'Bearer ' + hash.access_token
axios.defaults.headers.common['Content-Type'] = 'application/json'


export const getUserInfo = () => {
    return axios.get("/me")
}

export const getUserPlayList = () => {
    return axios.get("/me/tracks")
}

export const getSearch = (data) => {
    return axios.get("/recommendations" + data)
}

export const setTrack = (trackID) => {
    return axios.put("/me/tracks?ids=" + trackID, {})
}