import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TestEthicServiceBase } from "./base/testEthic.service.base";

@Injectable()
export class TestEthicService extends TestEthicServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
