import React, { useCallback, useState } from 'react';

import ActivityList from './ActivityList';
import { IActivity } from './types';

import './App.css';

const url = 'https://www.boredapi.com/api/activity';

function App() {
  const [activities, setActivities] = useState<IActivity[]>([]);

  const fetchActivity = useCallback(async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setActivities((l) => [...l, data]);
    } catch {
      console.error('unable to fetch activity');
    }
  }, []);

  return (
    <div className="App">
      <header>
        <button onClick={fetchActivity}>Generate Activity</button>
      </header>
      <section>
        <ActivityList list={activities} />
      </section>
    </div>
  );
}

export default App;
