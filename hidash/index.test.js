const assert = require("assert");
const { forEach, map } = require("./index");

/*const test = (desc, fn) => {
  console.log("-----", desc);
  try {
    fn();
  } catch (err) {
    console.log(err.message);
  }
};*/

it("forEach function", () => {
  let sum = 0;

  forEach([1, 2, 3], (value) => {
    sum += value;
  });

  assert.strictEqual(sum, 6, "Expected foreach to sum the array");
});

it("map function", () => {
  const result = map([1, 2, 3], (value) => {
    return value * 2;
  });

  /*assert.strictEqual(result[0], 2, "Expected map to double value");
  assert.strictEqual(result[1], 4, "Expected map to double value");
  assert.strictEqual(result[2], 6, "Expected map to double value");*/
  assert.deepStrictEqual(result, [2, 4, 6]);
});
