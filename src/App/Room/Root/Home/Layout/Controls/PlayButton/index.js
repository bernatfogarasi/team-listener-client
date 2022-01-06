import { RoomContext } from "context";
import { useContext } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.button`
  width: 40px;
  height: 40px;
  background: white;
  border-style: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 25px;
  gap: 4px;
  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.5;
        `
      : css`
          cursor: pointer;
        `}
`;

const Play = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid black;
  transform: translateX(2px) scaleX(1.6);
`;

const Pause = styled.div`
  width: 4px;
  border-style: solid;
  border-color: black;
  border-width: 0 4px 0 4px;
  height: 16px;
`;

const PlayButton = ({ className }) => {
  const { playing, current, onPlaying, onProgress, progressBar } =
    useContext(RoomContext);

  const onClick = () => {
    onPlaying(!playing);
    onProgress(progressBar);
  };

  return (
    <Wrapper className={className} onClick={onClick} disabled={!current?.id}>
      {playing ? <Pause /> : <Play />}
    </Wrapper>
  );
};

export default PlayButton;
