import styled from "styled-components";
import YouTubeApi from "react-youtube";
import { useContext, useEffect, useState } from "react";
import { RoomContext } from "context";

const Wrapper = styled(YouTubeApi)`
  position: absolute;
  background: black;
  width: 1100%;
  height: 100%;
  margin-left: -500%;
`;

// const Wrapper = styled(YouTubeApi)`
//   position: absolute;
//   background: black;
//   width: 100%;
//   height: 300%;
//   top: -100%;
// `;

const YouTube = ({ className }) => {
  const [player, setPlayer] = useState(null);
  const { current, playing, onPlaying } = useContext(RoomContext);

  const options = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      iv_load_policy: 0,
    },
  };

  useEffect(() => {
    const pause = () => {
      if (!player) return;
      player.pauseVideo();
    };

    const play = () => {
      if (!player) return;
      player.playVideo();
    };
    playing ? play() : pause();
  }, [playing, player]);

  useEffect(() => {
    console.log(current);
  }, [current]);

  return (
    <Wrapper
      className={className}
      videoId={current && current.id}
      // videoId={"qTGbWfEEnKI"}
      opts={options}
      onReady={(event) => {
        setPlayer(event.target);
        // onPlaying(true);
      }}
      onPlay={() => onPlaying(true)}
    ></Wrapper>
  );
};

export default YouTube;
