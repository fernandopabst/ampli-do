import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TestEthicWhereInput } from "./TestEthicWhereInput";
import { Type } from "class-transformer";
import { TestEthicOrderByInput } from "./TestEthicOrderByInput";

@ArgsType()
class TestEthicFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TestEthicWhereInput,
  })
  @Field(() => TestEthicWhereInput, { nullable: true })
  @Type(() => TestEthicWhereInput)
  where?: TestEthicWhereInput;

  @ApiProperty({
    required: false,
    type: TestEthicOrderByInput,
  })
  @Field(() => TestEthicOrderByInput, { nullable: true })
  @Type(() => TestEthicOrderByInput)
  orderBy?: TestEthicOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TestEthicFindManyArgs };
