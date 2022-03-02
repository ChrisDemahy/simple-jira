import React from 'react';
import InfoCard from '../../components/InfoCard';
/**
 * Components from Atlessian Design Kit
 */
import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import ButtonGroup from '@atlaskit/button/button-group';
import Button from '@atlaskit/button/standard-button';
import Select from '@atlaskit/select';
import TextField from '@atlaskit/textfield';

import PageHeader from '@atlaskit/page-header';

import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from '@atlaskit/dropdown-menu';

const HeaderBreadcrumbs = (
  <Breadcrumbs onExpand={() => {}}>
    <BreadcrumbsItem text="Some project" key="Some project" />
    <BreadcrumbsItem text="Ticket Number" key="Ticket Number" />
  </Breadcrumbs>
);
const HeaderActionsContent = (
  <ButtonGroup>
    <Button css={{}}>Edit</Button>
    <Button css={{}}>Comment</Button>
    <Button css={{}}>Assign</Button>
    <Button css={{}}>Resolve Issue</Button>
    <Button css={{}}>Assign to Group</Button>
    {/* Dropdown Menu */}
    <DropdownMenu trigger="Page actions">
      <DropdownItemGroup>
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem>Share</DropdownItem>
        <DropdownItem>Move</DropdownItem>
        <DropdownItem>Clone</DropdownItem>
        <DropdownItem>Delete</DropdownItem>
        <DropdownItem>Report</DropdownItem>
      </DropdownItemGroup>
    </DropdownMenu>
  </ButtonGroup>
);

const PageHeaderComplexExample = () => {
  return (
    <PageHeader
      breadcrumbs={breadcrumbs}
      // actions={actionsContent}
      bottomBar={actionsContent}
    >
      Title describing what page content to expect
    </PageHeader>
  );
};

const IssuesPage: React.FC = () => {
  return (
    <>
      {/* Navigation */}
      <nav id="navigation" className="border-gray-500 border-solid border-4">
        <div className="text-3xl pl-6 py-1">Jira</div>
      </nav>
      {/* Main area of page */}
      <main
        id="issue-left-column"
        // className=" grid grid-cols-5 border-red-500 border-solid border-4 h-screen"
      >
        <PageHeaderComplexExample />
        {/* <div className="col-span-3 border-blue-400 border-solid border-4">
          <InfoCard
            title="What's good"
            data={[
              { label: "Who's Good", value: 'Not me', boxed: false },
              { label: "What's Good", value: 'Not this', boxed: false },
            ]}
          />
        </div>
        <div className="col-span-2  border-blue-400 border-solid border-4" /> */}
      </main>
    </>
  );
};

export default IssuesPage;
