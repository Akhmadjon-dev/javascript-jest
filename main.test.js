var {addTwoNum, printName} = require('./main');


test('testing add two number function',function(){
    var result = expect(addTwoNum(6,3));
    result.toBeGreaterThanOrEqual(9);
})

test('object assignment',function(){
    var obj = {name: "ali"}
    obj.age = 22
    var name
    expect(name).toBeUndefined()

})

test('string should', function() {
    var info = "my name is Akhmadjon and age is 23";
    expect(info).not.toMatch(/boy/)
})

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];

test('check the array has the value', function() {
    expect(shoppingList).toContain('paper towels');
    expect(shoppingList).not.toContain('olcha');
})

test('print name should work correctly', function() {
    expect(printName("ali")).toBe('ali')
})