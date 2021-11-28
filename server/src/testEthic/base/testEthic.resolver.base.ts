import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateTestEthicArgs } from "./CreateTestEthicArgs";
import { UpdateTestEthicArgs } from "./UpdateTestEthicArgs";
import { DeleteTestEthicArgs } from "./DeleteTestEthicArgs";
import { TestEthicFindManyArgs } from "./TestEthicFindManyArgs";
import { TestEthicFindUniqueArgs } from "./TestEthicFindUniqueArgs";
import { TestEthic } from "./TestEthic";
import { TestEthicService } from "../testEthic.service";

@graphql.Resolver(() => TestEthic)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TestEthicResolverBase {
  constructor(
    protected readonly service: TestEthicService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "TestEthic",
    action: "read",
    possession: "any",
  })
  async _testEthicsMeta(
    @graphql.Args() args: TestEthicFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [TestEthic])
  @nestAccessControl.UseRoles({
    resource: "TestEthic",
    action: "read",
    possession: "any",
  })
  async testEthics(
    @graphql.Args() args: TestEthicFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<TestEthic[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "TestEthic",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => TestEthic, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TestEthic",
    action: "read",
    possession: "own",
  })
  async testEthic(
    @graphql.Args() args: TestEthicFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<TestEthic | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "TestEthic",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => TestEthic)
  @nestAccessControl.UseRoles({
    resource: "TestEthic",
    action: "create",
    possession: "any",
  })
  async createTestEthic(
    @graphql.Args() args: CreateTestEthicArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<TestEthic> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "TestEthic",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"TestEthic"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => TestEthic)
  @nestAccessControl.UseRoles({
    resource: "TestEthic",
    action: "update",
    possession: "any",
  })
  async updateTestEthic(
    @graphql.Args() args: UpdateTestEthicArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<TestEthic | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "TestEthic",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"TestEthic"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TestEthic)
  @nestAccessControl.UseRoles({
    resource: "TestEthic",
    action: "delete",
    possession: "any",
  })
  async deleteTestEthic(
    @graphql.Args() args: DeleteTestEthicArgs
  ): Promise<TestEthic | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
