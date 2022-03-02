import { INSPECT_MAX_BYTES } from 'buffer';
import React from 'react';
/**
 * @param label the name or heading of the value being displayed
 * @param value the string to be shwed on the right side of the value
 * @param boxed whether or not he value is itself in a gray box
 */
export interface DataValue {
  label: string;
  value: string;
  boxed: boolean;
}
/**
 * @description Interface for the props for Info Card
 * @param title the title or heading of the Info card
 * @param data  the data to be displayed
 */
export interface InfoCardProps {
  title: string;
  data: DataValue[];
}

/**
 * @description React component for displaying sections of information in a grey box
 * @param props.title the title of the card
 * @param props.data the data going to be displayed
 */
export const InfoCard: React.FC<InfoCardProps> = (props) => {
  return (
    <div className="bg-gray-100 border-gray-300 border-solid border-2 max-w-fit rounded">
      {/* Title */}
      <span className="px-10 py-1">{props.title}</span>
      {/* The data points */}
      {props.data.map((item, i) => (
        <div key={i} className="grid grid-cols-2 gap-32">
          <span className="pl-3 pr-15 py-3 text-gray-400 text-xsm">
            {item.label}
          </span>
          <span className="pr-3 pl-15 py-3 text-sm">{item.value}</span>
        </div>
      ))}
    </div>
  );
};
export default InfoCard;
