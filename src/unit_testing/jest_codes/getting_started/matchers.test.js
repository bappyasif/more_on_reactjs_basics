// truthiness
// in tests, we sometimes need to distinguish between  undefined, null and false, and sometimes dont
// jest lets us explicitly define what we want in our tests
/**
 * toBeNull - matches null
 * toBeUndefined - matches undefined
 * toBeDefined - matches opposites of toBeUndefined
 * toBeTruthy - matches anything that an if statement treats as true
 * toBeFalsy - matches anything that an if statement treats as false
 */
test("null", () => {
  let n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  let n = 0;
  expect(n).not.toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});
// it's upto us how we want to use matchers to corresponds to our needs in our coding

// Numbers
// most ways of comparing numbers have matchers equivalents
test("twee plus twee", () => {
  let value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.6);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(5.6);

  // toBe and toEqual are same for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
// for floating point numbers equality, toBeCloseTo is appropriate matchers instaed of toBeEqual, fue to rounding errors
test("adding floating point numbers", () => {
  let value = 0.1 + 0.2;
  // expect(value).toBe(.3); // rounding error
  expect(value).toBeCloseTo(0.3);
});

// Strings
// we can also check strings against regular expressions with toMatch
test("there is no i in team", () => {
  expect("team").not.toMatch(/I/);
});
test('there is no "stop" in christopher', () => {
  expect("christopher").toMatch(/stop/);
  // expect('christo').toMatch(/stop/)
});

// Arrays and iterables
// we check if an array or iterable contains a prticular item using toContain
let shoppingList = ["knapkins", "kleenex", "trash bags", "milk"];;
test('shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    //  we can also use js set constructor as well
    expect(new Set(shoppingList)).toContain('milk');
});

// Exceptions
// if we want to test whether a particular function throws an error when its called, we can use toThrow
let compileCode = () => {throw new Error('something"s wrong')}
test('compiling error', () => {
    expect(()=>compileCode()).toThrow()
    expect(()=>compileCode()).toThrow(Error)

    // we can also use exact error message or a regexp
    // expect(()=>compileCode()).toThrow('wrong code');  // wrong message
    expect(()=>compileCode()).toThrow('something"s wrong');
    // expect(()=>compileCode()).toThrow(/error/);  // wrong message
    expect(()=>compileCode()).toThrow(/wrong/);
})
