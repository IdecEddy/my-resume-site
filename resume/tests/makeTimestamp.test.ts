import { makeTimestamp } from "~/utils/makeTimestamp";
import { expect, test } from 'vitest';

test("Check if input is 2000 we return 0:0:2", () => {
  expect(makeTimestamp(2000)).toBe('0:0:2')
});
test("Check if input is 0 we return a 0:0:0", () => {
  expect(makeTimestamp(0)).toBe('0:0:0'); 
});
test("Check if input is null we return 0:0:0", () => {
  expect(makeTimestamp(null)).toBe('0:0:0');
});
