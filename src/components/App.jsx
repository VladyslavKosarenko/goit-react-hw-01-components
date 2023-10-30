import { data } from './Statistics/data';
import { Statistics } from './Statistics/Statistics';
import { Profile } from './Profile/Profile';
import { user } from './Profile/user';


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <div>
    <Statistics title="Upload stats" stats={data} />
    
  </div>
    </div>
  );
};


