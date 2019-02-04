const dog = {
  species: 'dog',
  name: 'Dobby',
  gender: 'male',
  legs: 4,
  hands: 0,
  saying: 'woof-woof!',
  friend: 'Melinda'
};
const cat = {
  species: 'cat',
  name: 'Gary',
  gender: 'male',
  legs: 4,
  hands: 0,
  saying: 'meo!',
  friend: 'Tommy'
};
const man = {
  species: 'human',
  name: 'Tommy',
  gender: 'male',
  legs: 2,
  hands: 2,
  saying: 'I WANT TO SEE BLOOD OF MY ENEMIES!',
  friend: 'Gary'
};
const woman = {
  species: 'human',
  name: 'Melinda',
  gender: 'female',
  legs: 2,
  hands: 2,
  saying: 'Gender equality!',
  friend: 'Dobby'
};

function printing (obj) {
  print([obj.species, obj.name, obj.gender, obj.legs, obj.hands, obj.saying, obj.friend].join("; "));
}

[dog, car, man, woman].forEach(printing);
