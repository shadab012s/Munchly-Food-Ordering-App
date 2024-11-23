import { sum } from "../sum";
test('sum returns the sum of two num', () => {
  const result= sum(10,5);
  expect(result).toBe(15);
});
