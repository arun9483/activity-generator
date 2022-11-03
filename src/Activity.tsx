import React, { useCallback, useState } from 'react';

import { IActivity } from './types';
interface ActivityProp {
  data: IActivity;
}
const Activity: React.FC<ActivityProp> = ({ data }) => {
  const [isDetail, setIsDetails] = useState<boolean>(false);
  const clickHandler = useCallback(() => {
    setIsDetails((v) => !v);
  }, []);
  const { activity } = data;
  return (
    <li className="activity">
      <div className="title-container">
        <h2 className="title">{activity}</h2>
        <button onClick={clickHandler}>
          {isDetail ? 'Collapse' : 'Expand'}
        </button>
      </div>
      {isDetail && (
        <section>
          <ul>
            {Object.entries(data).map((entry) => {
              const [key, value] = entry;
              return (
                <li key={key}>
                  {key}:{value}
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </li>
  );
};

export default Activity;
