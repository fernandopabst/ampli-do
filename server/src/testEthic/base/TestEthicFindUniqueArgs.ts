import { ArgsType, Field } from "@nestjs/graphql";
import { TestEthicWhereUniqueInput } from "./TestEthicWhereUniqueInput";

@ArgsType()
class TestEthicFindUniqueArgs {
  @Field(() => TestEthicWhereUniqueInput, { nullable: false })
  where!: TestEthicWhereUniqueInput;
}

export { TestEthicFindUniqueArgs };
