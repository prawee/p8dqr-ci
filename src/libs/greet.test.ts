import { expect, test } from "vitest";
import { greet } from "./greet";

test("greet function", () => {
    const name = "World";
    const expected = `Hello, ${name}!`;
    const result = greet(name);
    expect(result).toBe(expected);
});