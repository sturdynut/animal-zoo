const express = require('express');
const app = express();
const animals = require('./lib/animals');

const port = 3000;

app.set('view engine', 'pug');

const zooAnimals = [
];

const possibilities = [
  animals.dogs('my dog'),
  animals.cats('my cat'),
  animals.orangatang('my monkey')
]

for (var i=0; i<10; i++) {
  const rand = Math.floor(Math.random() * 3);
  zooAnimals.push(possibilities[rand]);
}

app.get('/', (req, res) => {
  res.render('index', {
    title: 'THE ZOO',
    message: 'These are the animals in the zoo',
    animals: zooAnimals
  })
});

try {
  app.listen(port, (err) => {
    if (err) {
      console.error('Woah, there was an error...fawwwwk')
    } else {
      console.log('Web server listening on 3000')
    }
  })
} catch(e) {
  console.error('Really bad error', e);
}