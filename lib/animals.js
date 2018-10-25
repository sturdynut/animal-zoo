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

function orangatang(name) {
  return {
    name: name,
    type: 'orangatang',
    emoji: '🐒'
  }
}

module.exports = {
  dogs,
  cats,
  orangatang
};