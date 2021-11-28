import { TestEthic as TTestEthic } from "../api/testEthic/TestEthic";

export const TESTETHIC_TITLE_FIELD = "doNotUsePiName";

export const TestEthicTitle = (record: TTestEthic): string => {
  return record.doNotUsePiName || record.id;
};
