import React from 'react';

import LoadingFeedShare from '../Shimmer/LoadingFeedShare';
import LoadingFeedPost from '../Shimmer/LoadingFeedPost';

import FeedShare from './FeedShare';
import FeedPost from './FeedPost';

import { Container } from './styles';

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  if (isLoading) {
    return (
      <Container className="middle-column">
        <LoadingFeedShare />
        <LoadingFeedPost />
        <LoadingFeedPost />
        <LoadingFeedPost />
        <LoadingFeedPost />
      </Container>
    );
  }

  return (
    <Container className="middle-column">
      <FeedShare />
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </Container>
  );
};

export default MiddleColumn;
