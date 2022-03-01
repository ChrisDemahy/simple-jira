import React from 'react';
/**
 * @name InfoCardProps
 * @description Interface for the props for Info Card
 */
export interface InfoCardProps {
  title: string;
  data: string[];
}
/**
 * @name InfoCard
 * @description React component for displaying sections of information
 * @param props the data going to be displayed
 */
export const InfoCard: React.FC<InfoCardProps> = (props) => {
  return (
    <div className="bg-gray-400 border-gray-500 border-solid border-2 max-w-fit">
      <span>{props.title}</span>
    </div>
  );
};
export default InfoCard;
