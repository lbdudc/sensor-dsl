import assert from "assert";
import parse from "../src/index.js";
import { resetProducts, readFile, p } from "./utils.js";

suite("Main");

before(resetProducts);
beforeEach(resetProducts);

test("Testing standard run", () => {
  const input = readFile(p("00/00-input.txt"));
  const expected = JSON.parse(readFile(p("00/00-expected.json")));

  const result = parse(input);

  assert.deepEqual(result, expected);
});

test("Wrong entity in WMS layer", () => {
  const input = readFile(p("00/01-invalid-input.txt"));
  assert.throws(() => {
    parse(input);
  }, /ERROR: entity Str2eet required by layer cityLayer does not exists!!/);
});

test("Testing more complex run", () => {
  const input = readFile(p("00/02-input.txt"));
  const expected = JSON.parse(readFile(p("00/02-expected.json")));

  const result = parse(input);

  assert.deepEqual(result, expected);
});

test("Testing product with syntax error", () => {
  const input = readFile(p("00/03-syntax-error-input.txt"));
  assert.throws(() => {
    parse(input);
  });
});
