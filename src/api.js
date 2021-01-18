import axios from "axios"

const baseUri = "https://api.spotify.com/v1"

const defaultHeaders = (token) => {
    return {
        headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    }
}

export const getUserInfo = (token) => {
    return axios.get(baseUri + "/me", defaultHeaders(token))
}

export const getUserPlayList = (token) => {
    return axios.get(baseUri + "/me/tracks", defaultHeaders(token))
}

export const setTrack = (token, trackID) => {
    return axios.put(baseUri + "/me/tracks?ids=" + trackID, {}, defaultHeaders(token))
}

export const getSearch = (token, data) => {
    return axios.get(baseUri + "/recommendations" + data, defaultHeaders(token))
}

