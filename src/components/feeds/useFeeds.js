import { useEffect, useState } from 'react';
import axios from 'axios';

function useFeeds() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    async function init() {
      const { data } = await axios.get('/data/feeds.json');
      setFeeds(data.feeds);
    }

    init();
  }, []);

  return { feeds };
}

export default useFeeds;
