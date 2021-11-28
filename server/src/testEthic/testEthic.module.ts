import { Module } from "@nestjs/common";
import { TestEthicModuleBase } from "./base/testEthic.module.base";
import { TestEthicService } from "./testEthic.service";
import { TestEthicController } from "./testEthic.controller";
import { TestEthicResolver } from "./testEthic.resolver";

@Module({
  imports: [TestEthicModuleBase],
  controllers: [TestEthicController],
  providers: [TestEthicService, TestEthicResolver],
  exports: [TestEthicService],
})
export class TestEthicModule {}
