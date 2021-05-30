import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import youtube from "../apis/youtube";
import { VideoList } from "../components/VideoList";
import { VideoDetail } from "../components/VideoDetail";
export default class Display extends Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.onTermSubmit("buildings");
  }
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="row">
          <div className="col-8">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="col-4">
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}
