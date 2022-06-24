import React from 'react';
import styled from 'styled-components';
import useFeeds from './useFeeds';
import Feed from '../feed/Feed';

const Wrap = styled.div`
  max-width: 420px;
  margin: 0 auto;

  @media screen and (max-width: 420px) {
    max-width: 360px;
  }
`;

function Feeds() {
  const { feeds } = useFeeds();

  return (
    <Wrap>
      {feeds &&
        feeds.map((feed) => {
          return <Feed data={feed} key={feed.id} />;
        })}
    </Wrap>
  );
}

export default Feeds;
