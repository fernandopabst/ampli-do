import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TestEthicService } from "./testEthic.service";
import { TestEthicControllerBase } from "./base/testEthic.controller.base";

@swagger.ApiTags("test-ethics")
@common.Controller("test-ethics")
export class TestEthicController extends TestEthicControllerBase {
  constructor(
    protected readonly service: TestEthicService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
