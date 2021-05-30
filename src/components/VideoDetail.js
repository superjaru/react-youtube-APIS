import React from "react";
import styled from "styled-components";
export const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const { title, description } = video.snippet;
  const videoSrc = "https://www.youtube.com/embed/" + video.id.videoId;
  return (
    <div className="card border-light">
      <IframeContainer className="">
        <Iframe
          title="video-player"
          className="embed-responsive-item"
          src={videoSrc}
          allowFullScreen
        ></Iframe>
      </IframeContainer>
      <div className="card-body bg-transparent border-bottom-0 ">{title}</div>
      <div className="card-footer bg-transparent border-top-0 ">
        {description}
      </div>
    </div>
  );
};

const IframeContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
