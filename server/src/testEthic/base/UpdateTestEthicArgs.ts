import { ArgsType, Field } from "@nestjs/graphql";
import { TestEthicWhereUniqueInput } from "./TestEthicWhereUniqueInput";
import { TestEthicUpdateInput } from "./TestEthicUpdateInput";

@ArgsType()
class UpdateTestEthicArgs {
  @Field(() => TestEthicWhereUniqueInput, { nullable: false })
  where!: TestEthicWhereUniqueInput;
  @Field(() => TestEthicUpdateInput, { nullable: false })
  data!: TestEthicUpdateInput;
}

export { UpdateTestEthicArgs };
