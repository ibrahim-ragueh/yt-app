import axios from "axios";

const KEY = "AIzaSyBwWs2Fm5bWTtzKpTouUOfDuauXbLUSt0o";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
});