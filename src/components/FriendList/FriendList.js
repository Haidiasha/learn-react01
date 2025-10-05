import { Friend } from './Friend/Friend';
import { FriendsList } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <Friend
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        ></Friend>
      ))}
    </FriendsList>
  );
};
