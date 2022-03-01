import React from 'react';
import swr from 'swr';

export const SiteCard: React.FC = () => {
  const data = swr('/api/v1/');
  return <>{/* <InfoCard /> */}</>;
};

export default SiteCard;
