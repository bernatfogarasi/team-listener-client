import styled from "styled-components";

const Wrapper = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const Member = styled.div`
  :hover {
    transform: scale(1.1);
  }
  cursor: pointer;
  transition: 0.2s;
  gap: 10px;
  font-size: 14px;
`;

const MemberProfile = styled.div`
  background: #333;
  border: 1px solid #333;
  border-radius: 50%;
  aspect-ratio: 1;
  position: relative;
  width: 50px;
`;

const MemberActivity = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  border-radius: 50%;
  aspect-ratio: 1;
  width: 12px;
  border: 2px solid #333;
`;

const MemberActive = styled(MemberActivity)`
  background: orange;
`;

const MemberInactive = styled(MemberActivity)`
  background: #111;
`;

const members = [
  { name: "asdf", active: false, date: 1 },
  { name: "asdf", active: true, date: 2 },
  { name: "asdf", active: false, date: 3 },
  { name: "asdf", active: true, date: 4 },
  { name: "asdf", active: true, date: 5 },
];

const Members = ({ className }) => {
  return (
    <Wrapper className={className}>
      {members
        .sort((x, y) => {
          return x.active === y.active ? 0 : x.active ? -1 : 1;
        })
        .map(({ date, name, active }) => (
          <Member key={date}>
            <MemberProfile>
              {active ? <MemberActive /> : <MemberInactive />}
            </MemberProfile>
          </Member>
        ))}
    </Wrapper>
  );
};

export default Members;