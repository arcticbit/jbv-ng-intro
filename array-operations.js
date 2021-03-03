
const numbers = [
  1, 2, 3, 4, 10, 20, 100, 40
];

// Map

const mapExample = numbers.map(val => {
  let output = '';
  for (let i = 0; i < val; i++) {
    output += 'a';
  }
  return output;
});

console.log('Map: ' + mapExample);

// Filter

const filterExample = numbers.filter(val => {
  return val % 2 == 0;
});

console.log('Filter: ' + filterExample);

// Reduce

const reduceExample = numbers.reduce((total, val) => {
  return total + val;
}, 0);

console.log(reduceExample);

const fruitTypes = [
  {
    name: 'Orange',
    type: 'citrus',
  },
  {
    name: 'Lime',
    type: 'citrus',
  },
  {
    name: 'Raspberry',
    type: 'berry',
  },
  {
    name: 'Strawberry',
    type: 'berry',
  },
].reduce((agg, fruit) => {
  if (!agg[fruit.type]) {
    agg[fruit.type] = [];
  }
  agg[fruit.type].push(fruit.name)
  return agg;
}, {})

console.log(fruitTypes);

