import { Item, Marker, Img, UserName } from './Friend.styled';

export const Friend = ({ name, avatar, isOnline }) => {
  return (
    <Item>
      <Marker isOnline={isOnline}></Marker>
      <Img src={avatar} alt={name} width="48" />
      <UserName>{name}</UserName>
    </Item>
  );
};
