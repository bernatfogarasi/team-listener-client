import styled, { css } from "styled-components";
import { useContext } from "react";
import { RoomContext } from "context";
import Item from "./Item";

const Wrapper = styled.div`
  display: flex;
  border-radius: 4px;
  ${({ hint }) =>
    hint
      ? css`
          background: #222;
          margin-right: 10px;
        `
      : css`
          overflow-y: scroll;
          overflow-x: hidden;
          flex-direction: column;
          user-select: none;
          gap: 10px;
          ::-webkit-scrollbar {
            width: 10px;
          }
          :hover::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background: #333;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #444;
          }
        `}
`;

const Hint = styled.div`
  margin: auto;
`;

const Queue = ({ className }) => {
  const { queue, onQueue, drag, setDrag } = useContext(RoomContext);

  const onDragEnter = (event) => {
    if (!drag) return;
    event.target.style.background = "#222";
  };

  const onDragOver = (event) => {
    if (!drag) return;
    event.preventDefault();
    event.stopPropagation();
  };

  const onDragLeave = (event) => {
    if (!drag) return;
    event.target.style.background = "transparent";
  };

  const onDrop = (event) => {
    if (!drag) return;
    event.target.style.background = "transparent";
    event.preventDefault();
    event.stopPropagation();
    const { from, ...data } = JSON.parse(
      event.dataTransfer.getData("text/plain")
    );
    setDrag(undefined);
    onQueue(data, from);
  };

  return (
    <Wrapper
      className={className}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      hint={!queue || queue.length === 0}
    >
      {queue?.length > 0 ? (
        queue.map((data, index) => (
          <Item key={data._id} data={data} index={index}></Item>
        ))
      ) : (
        <Hint>Drag something here</Hint>
      )}
    </Wrapper>
  );
};

export default Queue;