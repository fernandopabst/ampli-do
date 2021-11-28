import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { TestEthicController } from "../testEthic.controller";
import { TestEthicService } from "../testEthic.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amendmentNumber: 42,
  appCreatedBy: 42,
  appModifiedBy: "exampleAppModifiedBy",
  approvalDate: new Date(),
  approvalExpiryDate: new Date(),
  approvalReference: "exampleApprovalReference",
  approvalRequirementBy: "exampleApprovalRequirementBy",
  approvalValidFor: 42,
  chairsAction: 42.42,
  created: 42.42,
  createdAt: new Date(),
  createdBy: "exampleCreatedBy",
  decisionNotificationWorkflow_2: "exampleDecisionNotificationWorkflow_2",
  doNotUseApprovalExpiryDate: new Date(),
  doNotUsePiName: "exampleDoNotUsePiName",
  doNotUsePreviousStatus: "exampleDoNotUsePreviousStatus",
  emailComments: "exampleEmailComments",
  enterpriseProject: "exampleEnterpriseProject",
  ethicsPanelView: "exampleEthicsPanelView",
  firstApproved: 42,
  healthOfSport: "exampleHealthOfSport",
  id: "exampleId",
  institution: "exampleInstitution",
  itemType: "exampleItemType",
  meetingDate: new Date(),
  migrateFlow: "exampleMigrateFlow",
  modified: 42.42,
  modifiedBy: "exampleModifiedBy",
  newApplicationRequest: "exampleNewApplicationRequest",
  notes: 42,
  path: "examplePath",
  principalInvestigator: "examplePrincipalInvestigator",
  projectStatus: "exampleProjectStatus",
  projectSupervisor: "exampleProjectSupervisor",
  projectTitle: "exampleProjectTitle",
  projectType: "exampleProjectType",
  requiresChairsAction: 42.42,
  reSubmission: 42.42,
  specialConsideration: "exampleSpecialConsideration",
  testEmailToPrincipleInvestigator: "exampleTestEmailToPrincipleInvestigator",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  amendmentNumber: 42,
  appCreatedBy: 42,
  appModifiedBy: "exampleAppModifiedBy",
  approvalDate: new Date(),
  approvalExpiryDate: new Date(),
  approvalReference: "exampleApprovalReference",
  approvalRequirementBy: "exampleApprovalRequirementBy",
  approvalValidFor: 42,
  chairsAction: 42.42,
  created: 42.42,
  createdAt: new Date(),
  createdBy: "exampleCreatedBy",
  decisionNotificationWorkflow_2: "exampleDecisionNotificationWorkflow_2",
  doNotUseApprovalExpiryDate: new Date(),
  doNotUsePiName: "exampleDoNotUsePiName",
  doNotUsePreviousStatus: "exampleDoNotUsePreviousStatus",
  emailComments: "exampleEmailComments",
  enterpriseProject: "exampleEnterpriseProject",
  ethicsPanelView: "exampleEthicsPanelView",
  firstApproved: 42,
  healthOfSport: "exampleHealthOfSport",
  id: "exampleId",
  institution: "exampleInstitution",
  itemType: "exampleItemType",
  meetingDate: new Date(),
  migrateFlow: "exampleMigrateFlow",
  modified: 42.42,
  modifiedBy: "exampleModifiedBy",
  newApplicationRequest: "exampleNewApplicationRequest",
  notes: 42,
  path: "examplePath",
  principalInvestigator: "examplePrincipalInvestigator",
  projectStatus: "exampleProjectStatus",
  projectSupervisor: "exampleProjectSupervisor",
  projectTitle: "exampleProjectTitle",
  projectType: "exampleProjectType",
  requiresChairsAction: 42.42,
  reSubmission: 42.42,
  specialConsideration: "exampleSpecialConsideration",
  testEmailToPrincipleInvestigator: "exampleTestEmailToPrincipleInvestigator",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    amendmentNumber: 42,
    appCreatedBy: 42,
    appModifiedBy: "exampleAppModifiedBy",
    approvalDate: new Date(),
    approvalExpiryDate: new Date(),
    approvalReference: "exampleApprovalReference",
    approvalRequirementBy: "exampleApprovalRequirementBy",
    approvalValidFor: 42,
    chairsAction: 42.42,
    created: 42.42,
    createdAt: new Date(),
    createdBy: "exampleCreatedBy",
    decisionNotificationWorkflow_2: "exampleDecisionNotificationWorkflow_2",
    doNotUseApprovalExpiryDate: new Date(),
    doNotUsePiName: "exampleDoNotUsePiName",
    doNotUsePreviousStatus: "exampleDoNotUsePreviousStatus",
    emailComments: "exampleEmailComments",
    enterpriseProject: "exampleEnterpriseProject",
    ethicsPanelView: "exampleEthicsPanelView",
    firstApproved: 42,
    healthOfSport: "exampleHealthOfSport",
    id: "exampleId",
    institution: "exampleInstitution",
    itemType: "exampleItemType",
    meetingDate: new Date(),
    migrateFlow: "exampleMigrateFlow",
    modified: 42.42,
    modifiedBy: "exampleModifiedBy",
    newApplicationRequest: "exampleNewApplicationRequest",
    notes: 42,
    path: "examplePath",
    principalInvestigator: "examplePrincipalInvestigator",
    projectStatus: "exampleProjectStatus",
    projectSupervisor: "exampleProjectSupervisor",
    projectTitle: "exampleProjectTitle",
    projectType: "exampleProjectType",
    requiresChairsAction: 42.42,
    reSubmission: 42.42,
    specialConsideration: "exampleSpecialConsideration",
    testEmailToPrincipleInvestigator: "exampleTestEmailToPrincipleInvestigator",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  amendmentNumber: 42,
  appCreatedBy: 42,
  appModifiedBy: "exampleAppModifiedBy",
  approvalDate: new Date(),
  approvalExpiryDate: new Date(),
  approvalReference: "exampleApprovalReference",
  approvalRequirementBy: "exampleApprovalRequirementBy",
  approvalValidFor: 42,
  chairsAction: 42.42,
  created: 42.42,
  createdAt: new Date(),
  createdBy: "exampleCreatedBy",
  decisionNotificationWorkflow_2: "exampleDecisionNotificationWorkflow_2",
  doNotUseApprovalExpiryDate: new Date(),
  doNotUsePiName: "exampleDoNotUsePiName",
  doNotUsePreviousStatus: "exampleDoNotUsePreviousStatus",
  emailComments: "exampleEmailComments",
  enterpriseProject: "exampleEnterpriseProject",
  ethicsPanelView: "exampleEthicsPanelView",
  firstApproved: 42,
  healthOfSport: "exampleHealthOfSport",
  id: "exampleId",
  institution: "exampleInstitution",
  itemType: "exampleItemType",
  meetingDate: new Date(),
  migrateFlow: "exampleMigrateFlow",
  modified: 42.42,
  modifiedBy: "exampleModifiedBy",
  newApplicationRequest: "exampleNewApplicationRequest",
  notes: 42,
  path: "examplePath",
  principalInvestigator: "examplePrincipalInvestigator",
  projectStatus: "exampleProjectStatus",
  projectSupervisor: "exampleProjectSupervisor",
  projectTitle: "exampleProjectTitle",
  projectType: "exampleProjectType",
  requiresChairsAction: 42.42,
  reSubmission: 42.42,
  specialConsideration: "exampleSpecialConsideration",
  testEmailToPrincipleInvestigator: "exampleTestEmailToPrincipleInvestigator",
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("TestEthic", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TestEthicService,
          useValue: service,
        },
      ],
      controllers: [TestEthicController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /test-ethics", async () => {
    await request(app.getHttpServer())
      .post("/test-ethics")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        approvalDate: CREATE_RESULT.approvalDate.toISOString(),
        approvalExpiryDate: CREATE_RESULT.approvalExpiryDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        doNotUseApprovalExpiryDate: CREATE_RESULT.doNotUseApprovalExpiryDate.toISOString(),
        meetingDate: CREATE_RESULT.meetingDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /test-ethics", async () => {
    await request(app.getHttpServer())
      .get("/test-ethics")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          approvalDate: FIND_MANY_RESULT[0].approvalDate.toISOString(),
          approvalExpiryDate: FIND_MANY_RESULT[0].approvalExpiryDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          doNotUseApprovalExpiryDate: FIND_MANY_RESULT[0].doNotUseApprovalExpiryDate.toISOString(),
          meetingDate: FIND_MANY_RESULT[0].meetingDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /test-ethics/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/test-ethics"}/${nonExistingId}`)
      .expect(404)
      .expect({
        statusCode: 404,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /test-ethics/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/test-ethics"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        approvalDate: FIND_ONE_RESULT.approvalDate.toISOString(),
        approvalExpiryDate: FIND_ONE_RESULT.approvalExpiryDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        doNotUseApprovalExpiryDate: FIND_ONE_RESULT.doNotUseApprovalExpiryDate.toISOString(),
        meetingDate: FIND_ONE_RESULT.meetingDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
