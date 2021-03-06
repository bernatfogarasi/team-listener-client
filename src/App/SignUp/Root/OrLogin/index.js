import styled from "styled-components";
import Card from "components/Card";
import Link from "components/LinkRefer";

const Wrapper = styled(Card)`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  margin: 10px;
  font-size: 14px;
`;

const NoAccountText = styled(Text)``;

const OrLogin = () => {
  return (
    <Wrapper>
      <NoAccountText>
        Already have an account? <Link to="/">Log in</Link>
      </NoAccountText>
    </Wrapper>
  );
};

export default OrLogin;
