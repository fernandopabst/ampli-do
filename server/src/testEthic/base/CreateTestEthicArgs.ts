import { ArgsType, Field } from "@nestjs/graphql";
import { TestEthicCreateInput } from "./TestEthicCreateInput";

@ArgsType()
class CreateTestEthicArgs {
  @Field(() => TestEthicCreateInput, { nullable: false })
  data!: TestEthicCreateInput;
}

export { CreateTestEthicArgs };
