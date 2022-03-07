import React from 'react';
import InfoCard from '../../components/InfoCard';
import { getUserData } from './userDataService';

export interface UserDataCardProps {
  id: string;
}
const UserDataCard: React.FC<UserDataCardProps> = (props) => {
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    const userData = async () => await getUserData(props.id);
    setData(userData());
  }, [setData, props]);

  return (
    <>
      <InfoCard
        title={'Billy Bob Jones'}
        data={[
          {
            label: "Big Suckl'r Kendall",
            value: 'Bad Idea',
            boxed: false,
          },
        ]}
      />
    </>
  );
};
