import React from "react";
import "./VideoItem.css";
export const VideoItem = ({ video, onVideoSelect }) => {
  const { title, thumbnails, channelTitle } = video.snippet;
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className="list-group-item d-flex video-item my-1"
    >
      <img alt={title} src={thumbnails.medium.url} />
      <div className="ml-3 detail-wrapper">
        <div id="video-title-wrapper">
          <span id="video-title">{title}</span>
        </div>
        <p>
          <span className="text-muted">{channelTitle}</span>
        </p>
      </div>
    </div>
  );
};
