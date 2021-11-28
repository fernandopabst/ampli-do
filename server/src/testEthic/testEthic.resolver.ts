import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TestEthicResolverBase } from "./base/testEthic.resolver.base";
import { TestEthic } from "./base/TestEthic";
import { TestEthicService } from "./testEthic.service";

@graphql.Resolver(() => TestEthic)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TestEthicResolver extends TestEthicResolverBase {
  constructor(
    protected readonly service: TestEthicService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
