import styled from "styled-components"
export const FriendList = ({ friends }) => {
  return (
    <FriendListUl className="friend-list">
      {friends.map((friend) => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          id={friend.id}
          key={friend.id}></FriendListItem>
      ))}
    </FriendListUl>
  );
};
const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
      <li className="item" key={id}>
          <FriendListSpan $isOnline={isOnline} className="status" />
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <FriendListP className="name">{name}</FriendListP>
        </li>
    
  )
}
const FriendListUl = styled.ul`

list-style: none;
display:flex;
justify-content: center;
align-items: center;
gap: 10px;

`
const FriendListSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;
const FriendListP = styled.p`

display:flex;
justify-content: center;
align-items: center;
`