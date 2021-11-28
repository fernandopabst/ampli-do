import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TestEthicCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Amendment Number"
          source="amendmentNumber"
        />
        <NumberInput step={1} label="App Created By" source="appCreatedBy" />
        <TextInput label="App Modified By" source="appModifiedBy" />
        <DateTimeInput label="Approval Date" source="approvalDate" />
        <DateTimeInput
          label="Approval Expiry Date"
          source="approvalExpiryDate"
        />
        <TextInput label="Approval Reference" source="approvalReference" />
        <TextInput
          label="Approval Requirement By"
          source="approvalRequirementBy"
        />
        <NumberInput
          step={1}
          label="Approval Valid for"
          source="approvalValidFor"
        />
        <NumberInput label="Chairs Action" source="chairsAction" />
        <NumberInput label="Created" source="created" />
        <TextInput label="Created By" source="createdBy" />
        <TextInput
          label="Decision Notification Workflow 2"
          source="decisionNotificationWorkflow_2"
        />
        <DateTimeInput
          label="DO NOT USE Approval Expiry Date"
          source="doNotUseApprovalExpiryDate"
        />
        <TextInput label="DO NOT USE - PI Name" source="doNotUsePiName" />
        <TextInput
          label="DO NOT USE - Previous Status"
          source="doNotUsePreviousStatus"
        />
        <TextInput label="Email Comments" source="emailComments" />
        <TextInput label="Enterprise Project" source="enterpriseProject" />
        <TextInput label="Ethics Panel View" source="ethicsPanelView" />
        <NumberInput step={1} label="First Approved" source="firstApproved" />
        <TextInput label="Health of Sport?" source="healthOfSport" />
        <TextInput label="Institution" source="institution" />
        <TextInput label="Item Type" source="itemType" />
        <DateTimeInput label="Meeting Date" source="meetingDate" />
        <TextInput label="MigrateFlow" source="migrateFlow" />
        <NumberInput label="Modified" source="modified" />
        <TextInput label="Modified By" source="modifiedBy" />
        <TextInput
          label="New Application Request"
          source="newApplicationRequest"
        />
        <NumberInput step={1} label="Notes" source="notes" />
        <TextInput label="Path" source="path" />
        <TextInput
          label="Principal Investigator"
          source="principalInvestigator"
        />
        <TextInput label="Project Status" source="projectStatus" />
        <TextInput label="Project Supervisor" source="projectSupervisor" />
        <TextInput label="Project Title" source="projectTitle" />
        <TextInput label="Project Type" source="projectType" />
        <NumberInput
          label="Requires Chairs Action"
          source="requiresChairsAction"
        />
        <NumberInput label="Re Submission" source="reSubmission" />
        <TextInput
          label="Special Consideration"
          source="specialConsideration"
        />
        <TextInput
          label="Test email to principle investigator"
          source="testEmailToPrincipleInvestigator"
        />
      </SimpleForm>
    </Create>
  );
};
