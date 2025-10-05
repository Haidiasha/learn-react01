import styled from '@emotion/styled';

export const Card = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 4px;
  margin-top: 20px;
  box-shadow: rgb(0 0 0 / 55%) 10px 10px 5px 0px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  display: block;
  width: 200px;
  height: auto;
  margin: 12px 0px;
`;

export const Username = styled.p`
  font-size: 20px;
  margin-bottom: 8px;
`;

export const UserNickName = styled.p`
  color: #a9aaac;
  margin-bottom: 8px;
`;

export const UserLocation = styled.p`
  color: #a9aaac;
  margin-bottom: 16px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 8px;
  border: 1px solid #a9aaac;
  width: 100%;
`;

export const Label = styled.span`
  color: #a9aaac;
`;

export const Quantity = styled.span`
  color: #223042;
`;
