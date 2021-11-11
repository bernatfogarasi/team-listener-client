import styled from "styled-components";
import spotify from "../../../../../assets/icons/spotify.png";
import youtube from "../../../../../assets/icons/youtube.png";
import OpenInBrowserIcon from "../../../../../components/OpenInBrowserIcon";

const icons = { spotify, youtube };

const Wrapper = styled.div`
  margin: 10px;
  display: flex;
  align-items: flex-start;
`;

const Details = styled.div`
  margin: 0 10px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FirstRow = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const SecondRow = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const SiteIcon = styled.img`
  width: 30px;
`;

const VideoTitle = styled.div`
  font-family: MontserratSemibold;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const VideoThumbnail = styled.img`
  width: 100px;
  border: 1px solid #333;
  border-radius: 3px;
`;

const ChannelTitle = styled.div`
  font-family: Montserrat;
  font-size: 14px;
  opacity: 60%;
`;

const Result = ({ data }) => {
  return (
    <Wrapper>
      <VideoThumbnail src={data.thumbnail} alt="" />
      <Details>
        <FirstRow>
          {data.length}
          <VideoTitle>{data.title}</VideoTitle>
          {/* <OpenInBrowserIcon /> */}
        </FirstRow>
        <SecondRow>
          <ChannelTitle>{data.channel.title}</ChannelTitle>
        </SecondRow>
      </Details>
      <a href={data.url} target="_blank">
        <SiteIcon src={icons[data.site]} alt="" />
      </a>
      {/* {JSON.stringify(data)} */}
    </Wrapper>
  );
};

export default Result;