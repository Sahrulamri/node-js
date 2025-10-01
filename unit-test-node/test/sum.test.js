import { sum } from "../src/sum.js"

test("sum test case", () => {
    const result = sum(1, 2)
    expect(result).toBe(3)
})