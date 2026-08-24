function dogs(name) {
  return {
    name: name,
    type: 'dog',
    emoji: '🐶'
  }
}

function cats(name) {
  return {
    name: name,
    type: 'cat',
    emoji: '😸'
  }
}

function orangutan(name) {
  return {
    name: name,
    type: 'orangutan',
    emoji: '🐒'
  }
}

module.exports = {
  dogs,
  cats,
  orangutan
};