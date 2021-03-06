import styled from "styled-components";
import CrossMarkLarge from "components/CrossMarkLarge";
import CheckMarkLarge from "components/CheckMarkLarge";
import Page from "components/Page";

const Wrapper = styled(Page)`
  padding-top: 20vh;
`;

const Text = styled.div`
  border-radius: 4px;
  padding: 10px;
  flex-shrink: 100;
`;

const Title = styled.div`
  font-size: 40px;
  margin: auto;
  margin-bottom: 20px;
  width: fit-content;
`;

const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 55%;
`;

const Feedback = ({ success, title, children }) => {
  return (
    <Wrapper logo>
      <Title>{title}</Title>
      <Message>
        {success ? <CheckMarkLarge /> : <CrossMarkLarge />}
        <Text>{children}</Text>
      </Message>
    </Wrapper>
  );
};

export default Feedback;
