import { Friend } from './Friend/Friend';
export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <Friend
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        ></Friend>
      ))}
    </ul>
  );
};
