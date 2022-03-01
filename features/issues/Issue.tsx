import React from 'react';
import InfoCard from '../../components/InfoCard';

export const Issue: React.FC = () => {
  return (
    <>
      <main
        id="issue-left-column"
        className=" grid grid-cols-5 border-red-500 border-solid border-4 h-screen"
      >
        <div className="col-span-3 border-blue-400 border-solid border-4">
          <InfoCard
            title="What's good"
            data={[
              { label: "Who's Good", value: 'Not me', boxed: false },
              { label: "What's Good", value: 'Not this', boxed: false },
            ]}
          />
        </div>
        <div className="col-span-2  border-blue-400 border-solid border-4" />
      </main>
    </>
  );
};
export default Issue;
