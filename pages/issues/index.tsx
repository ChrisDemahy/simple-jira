import React from 'react';
import Issue from '../../features/issues/Issue';

const IssuesPage: React.FC = () => (
  <>
    <nav id="navigation" className="border-gray-500 border-solid border-4">
      <div className="text-3xl pl-6 py-1">Jira</div>
    </nav>
    <Issue />
  </>
);

export default IssuesPage;
