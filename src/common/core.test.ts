import { add } from "./core";

describe(add, () => {
    it("should correctly calculate 1 + 2", () => {
        expect(add(1, 2)).toBe(3);
    });
});
