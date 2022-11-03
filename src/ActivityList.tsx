import React from 'react';

import Activity from './Activity';
import { IActivity } from './types';

interface ActivityListProps {
  list: IActivity[];
}

const ActivityList: React.FC<ActivityListProps> = ({ list }) => {
  return (
    <div className="activity-list-container">
      <ul>
        {list.map((item) => {
          return (
            <li key={item.activity}>
              <Activity data={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ActivityList;
