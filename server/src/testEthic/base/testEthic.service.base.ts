import { PrismaService } from "nestjs-prisma";
import { Prisma, TestEthic } from "@prisma/client";

export class TestEthicServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TestEthicFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestEthicFindManyArgs>
  ): Promise<number> {
    return this.prisma.testEthic.count(args);
  }

  async findMany<T extends Prisma.TestEthicFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestEthicFindManyArgs>
  ): Promise<TestEthic[]> {
    return this.prisma.testEthic.findMany(args);
  }
  async findOne<T extends Prisma.TestEthicFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestEthicFindUniqueArgs>
  ): Promise<TestEthic | null> {
    return this.prisma.testEthic.findUnique(args);
  }
  async create<T extends Prisma.TestEthicCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestEthicCreateArgs>
  ): Promise<TestEthic> {
    return this.prisma.testEthic.create<T>(args);
  }
  async update<T extends Prisma.TestEthicUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestEthicUpdateArgs>
  ): Promise<TestEthic> {
    return this.prisma.testEthic.update<T>(args);
  }
  async delete<T extends Prisma.TestEthicDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestEthicDeleteArgs>
  ): Promise<TestEthic> {
    return this.prisma.testEthic.delete(args);
  }
}
