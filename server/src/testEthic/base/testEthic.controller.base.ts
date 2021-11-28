import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { TestEthicService } from "../testEthic.service";
import { TestEthicCreateInput } from "./TestEthicCreateInput";
import { TestEthicWhereInput } from "./TestEthicWhereInput";
import { TestEthicWhereUniqueInput } from "./TestEthicWhereUniqueInput";
import { TestEthicFindManyArgs } from "./TestEthicFindManyArgs";
import { TestEthicUpdateInput } from "./TestEthicUpdateInput";
import { TestEthic } from "./TestEthic";
@swagger.ApiBearerAuth()
export class TestEthicControllerBase {
  constructor(
    protected readonly service: TestEthicService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "TestEthic",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: TestEthic })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: TestEthicCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<TestEthic> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "TestEthic",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"TestEthic"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: data,
      select: {
        amendmentNumber: true,
        appCreatedBy: true,
        appModifiedBy: true,
        approvalDate: true,
        approvalExpiryDate: true,
        approvalReference: true,
        approvalRequirementBy: true,
        approvalValidFor: true,
        chairsAction: true,
        created: true,
        createdAt: true,
        createdBy: true,
        decisionNotificationWorkflow_2: true,
        doNotUseApprovalExpiryDate: true,
        doNotUsePiName: true,
        doNotUsePreviousStatus: true,
        emailComments: true,
        enterpriseProject: true,
        ethicsPanelView: true,
        firstApproved: true,
        healthOfSport: true,
        id: true,
        institution: true,
        itemType: true,
        meetingDate: true,
        migrateFlow: true,
        modified: true,
        modifiedBy: true,
        newApplicationRequest: true,
        notes: true,
        path: true,
        principalInvestigator: true,
        projectStatus: true,
        projectSupervisor: true,
        projectTitle: true,
        projectType: true,
        requiresChairsAction: true,
        reSubmission: true,
        specialConsideration: true,
        testEmailToPrincipleInvestigator: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "TestEthic",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [TestEthic] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => TestEthicFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<TestEthic[]> {
    const args = plainToClass(TestEthicFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "TestEthic",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        amendmentNumber: true,
        appCreatedBy: true,
        appModifiedBy: true,
        approvalDate: true,
        approvalExpiryDate: true,
        approvalReference: true,
        approvalRequirementBy: true,
        approvalValidFor: true,
        chairsAction: true,
        created: true,
        createdAt: true,
        createdBy: true,
        decisionNotificationWorkflow_2: true,
        doNotUseApprovalExpiryDate: true,
        doNotUsePiName: true,
        doNotUsePreviousStatus: true,
        emailComments: true,
        enterpriseProject: true,
        ethicsPanelView: true,
        firstApproved: true,
        healthOfSport: true,
        id: true,
        institution: true,
        itemType: true,
        meetingDate: true,
        migrateFlow: true,
        modified: true,
        modifiedBy: true,
        newApplicationRequest: true,
        notes: true,
        path: true,
        principalInvestigator: true,
        projectStatus: true,
        projectSupervisor: true,
        projectTitle: true,
        projectType: true,
        requiresChairsAction: true,
        reSubmission: true,
        specialConsideration: true,
        testEmailToPrincipleInvestigator: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "TestEthic",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: TestEthic })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: TestEthicWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<TestEthic | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "TestEthic",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        amendmentNumber: true,
        appCreatedBy: true,
        appModifiedBy: true,
        approvalDate: true,
        approvalExpiryDate: true,
        approvalReference: true,
        approvalRequirementBy: true,
        approvalValidFor: true,
        chairsAction: true,
        created: true,
        createdAt: true,
        createdBy: true,
        decisionNotificationWorkflow_2: true,
        doNotUseApprovalExpiryDate: true,
        doNotUsePiName: true,
        doNotUsePreviousStatus: true,
        emailComments: true,
        enterpriseProject: true,
        ethicsPanelView: true,
        firstApproved: true,
        healthOfSport: true,
        id: true,
        institution: true,
        itemType: true,
        meetingDate: true,
        migrateFlow: true,
        modified: true,
        modifiedBy: true,
        newApplicationRequest: true,
        notes: true,
        path: true,
        principalInvestigator: true,
        projectStatus: true,
        projectSupervisor: true,
        projectTitle: true,
        projectType: true,
        requiresChairsAction: true,
        reSubmission: true,
        specialConsideration: true,
        testEmailToPrincipleInvestigator: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "TestEthic",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: TestEthic })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: TestEthicWhereUniqueInput,
    @common.Body()
    data: TestEthicUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<TestEthic | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "TestEthic",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"TestEthic"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          amendmentNumber: true,
          appCreatedBy: true,
          appModifiedBy: true,
          approvalDate: true,
          approvalExpiryDate: true,
          approvalReference: true,
          approvalRequirementBy: true,
          approvalValidFor: true,
          chairsAction: true,
          created: true,
          createdAt: true,
          createdBy: true,
          decisionNotificationWorkflow_2: true,
          doNotUseApprovalExpiryDate: true,
          doNotUsePiName: true,
          doNotUsePreviousStatus: true,
          emailComments: true,
          enterpriseProject: true,
          ethicsPanelView: true,
          firstApproved: true,
          healthOfSport: true,
          id: true,
          institution: true,
          itemType: true,
          meetingDate: true,
          migrateFlow: true,
          modified: true,
          modifiedBy: true,
          newApplicationRequest: true,
          notes: true,
          path: true,
          principalInvestigator: true,
          projectStatus: true,
          projectSupervisor: true,
          projectTitle: true,
          projectType: true,
          requiresChairsAction: true,
          reSubmission: true,
          specialConsideration: true,
          testEmailToPrincipleInvestigator: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "TestEthic",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: TestEthic })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: TestEthicWhereUniqueInput
  ): Promise<TestEthic | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          amendmentNumber: true,
          appCreatedBy: true,
          appModifiedBy: true,
          approvalDate: true,
          approvalExpiryDate: true,
          approvalReference: true,
          approvalRequirementBy: true,
          approvalValidFor: true,
          chairsAction: true,
          created: true,
          createdAt: true,
          createdBy: true,
          decisionNotificationWorkflow_2: true,
          doNotUseApprovalExpiryDate: true,
          doNotUsePiName: true,
          doNotUsePreviousStatus: true,
          emailComments: true,
          enterpriseProject: true,
          ethicsPanelView: true,
          firstApproved: true,
          healthOfSport: true,
          id: true,
          institution: true,
          itemType: true,
          meetingDate: true,
          migrateFlow: true,
          modified: true,
          modifiedBy: true,
          newApplicationRequest: true,
          notes: true,
          path: true,
          principalInvestigator: true,
          projectStatus: true,
          projectSupervisor: true,
          projectTitle: true,
          projectType: true,
          requiresChairsAction: true,
          reSubmission: true,
          specialConsideration: true,
          testEmailToPrincipleInvestigator: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
