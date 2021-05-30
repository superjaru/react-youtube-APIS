import axios from "axios";

const KEY = "AIzaSyBLIZg9YiCfer7hzVP29ZR_0VSqra8RFcs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 8,
    key: KEY,
  },
});
