import { data } from './Statistics/data';
import { Statistics } from './Statistics/Statistics';
import { Profile } from './Profile/Profile';
import { user } from './Profile/user';
import { friends } from './FriendList/FriendListData';
import { FriendList } from './FriendList/FriendList';
import { transactions } from './TransactionHistoryData';
import { TransactionHistory } from './TransactionHistory';
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
      <div><FriendList friends={friends}></FriendList></div>
      <div><TransactionHistory items={transactions} />;</div>
    </div>
  );
};


