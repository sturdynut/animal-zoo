const animals = require('./animals');

describe('dog', () => {
  test('it can create a dog', () => {
    const myDog = new animals.dogs('sparky');
    expect(myDog.name).toEqual('sparky');
  })
});

describe('cats', () => {
  test('it can do the cat', () => {
    const myCat = new animals.cats('nooo')
    expect(myCat.name).toEqual('nooo');
  })
})