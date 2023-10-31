import styled from "styled-components";
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <ProfileDiv className="description">
        <img src={avatar} alt={username} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </ProfileDiv>

      <ProfileUl className="stats">
        <ProfileLi>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </ProfileLi>
        <ProfileLi>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </ProfileLi>
        <ProfileLi>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </ProfileLi>
      </ProfileUl>
    </div>
  );
};
const ProfileDiv = styled.div`

list-style: none;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const ProfileUl = styled.ul`

list-style: none;
display:flex;
justify-content: center;
align-items: center;
gap: 10px;
`
const ProfileLi = styled.li`

list-style: none;
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
gap: 10px;

`