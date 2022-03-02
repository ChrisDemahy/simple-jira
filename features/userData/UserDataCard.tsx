import React from 'react';
import InfoCard from '../../components/InfoCard';
import { useUserData } from './useUserData';

export interface UserDataCardProps {
  id: string;
}
const UserDataCard: React.FC<UserDataCardProps> = (props) => {
  const { data, error } = useUserData(props.id);
  return <>{/* <InfoCard /> */}</>;
};
