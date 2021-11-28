import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TestEthicList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"test-ethics"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Amendment Number" source="amendmentNumber" />
        <TextField label="App Created By" source="appCreatedBy" />
        <TextField label="App Modified By" source="appModifiedBy" />
        <TextField label="Approval Date" source="approvalDate" />
        <TextField label="Approval Expiry Date" source="approvalExpiryDate" />
        <TextField label="Approval Reference" source="approvalReference" />
        <TextField
          label="Approval Requirement By"
          source="approvalRequirementBy"
        />
        <TextField label="Approval Valid for" source="approvalValidFor" />
        <TextField label="Chairs Action" source="chairsAction" />
        <TextField label="Created" source="created" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Created By" source="createdBy" />
        <TextField
          label="Decision Notification Workflow 2"
          source="decisionNotificationWorkflow_2"
        />
        <TextField
          label="DO NOT USE Approval Expiry Date"
          source="doNotUseApprovalExpiryDate"
        />
        <TextField label="DO NOT USE - PI Name" source="doNotUsePiName" />
        <TextField
          label="DO NOT USE - Previous Status"
          source="doNotUsePreviousStatus"
        />
        <TextField label="Email Comments" source="emailComments" />
        <TextField label="Enterprise Project" source="enterpriseProject" />
        <TextField label="Ethics Panel View" source="ethicsPanelView" />
        <TextField label="First Approved" source="firstApproved" />
        <TextField label="Health of Sport?" source="healthOfSport" />
        <TextField label="ID" source="id" />
        <TextField label="Institution" source="institution" />
        <TextField label="Item Type" source="itemType" />
        <TextField label="Meeting Date" source="meetingDate" />
        <TextField label="MigrateFlow" source="migrateFlow" />
        <TextField label="Modified" source="modified" />
        <TextField label="Modified By" source="modifiedBy" />
        <TextField
          label="New Application Request"
          source="newApplicationRequest"
        />
        <TextField label="Notes" source="notes" />
        <TextField label="Path" source="path" />
        <TextField
          label="Principal Investigator"
          source="principalInvestigator"
        />
        <TextField label="Project Status" source="projectStatus" />
        <TextField label="Project Supervisor" source="projectSupervisor" />
        <TextField label="Project Title" source="projectTitle" />
        <TextField label="Project Type" source="projectType" />
        <TextField
          label="Requires Chairs Action"
          source="requiresChairsAction"
        />
        <TextField label="Re Submission" source="reSubmission" />
        <TextField
          label="Special Consideration"
          source="specialConsideration"
        />
        <TextField
          label="Test email to principle investigator"
          source="testEmailToPrincipleInvestigator"
        />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
