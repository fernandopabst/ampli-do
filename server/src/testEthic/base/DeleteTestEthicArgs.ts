import { ArgsType, Field } from "@nestjs/graphql";
import { TestEthicWhereUniqueInput } from "./TestEthicWhereUniqueInput";

@ArgsType()
class DeleteTestEthicArgs {
  @Field(() => TestEthicWhereUniqueInput, { nullable: false })
  where!: TestEthicWhereUniqueInput;
}

export { DeleteTestEthicArgs };
