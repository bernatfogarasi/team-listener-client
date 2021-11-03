import styled from "styled-components";
import logo from "../../assets/icons/logo3.png";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  position: fixed;
  font-family: Gluten;
  margin: 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  border: 1px solid #333;
  border-radius: 40px;
  padding: 10px;
  color: #ddd;
  top: 0px;
  left: 0px;
  text-decoration: none;
`;

const Icon = styled.img`
  width: 50px;
  filter: invert(100%);
  margin-bottom: 2px;
`;

const Text = styled.div`
  margin: 0 10px;
  margin-top: 2px;
`;

const Logo = () => {
  return (
    <Wrapper to="">
      <Icon src={logo} alt="" />
      <Text>Songflow</Text>
    </Wrapper>
  );
};

export default Logo;
