import assert from "assert";
import { parse } from "../src/index.js";
import { resetProducts, readFile, p } from "./utils.js";

suite("Syntax");

before(resetProducts);
beforeEach(resetProducts);

test("Testing extra properties", () => {
  const input = readFile(p("01/00-input-with-extra-properties.txt"));
  const expected = JSON.parse(
    readFile(p("01/00-expected-with-extra-properties.json"))
  );

  const result = parse(input);

  assert.deepEqual(result, expected);
});
