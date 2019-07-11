const islands = require('./bitIslands')

test('Task test', () => {
  let count = islands.count([
    [1, 0, 1],
    [1, 0, 0],
    [1, 1, 1]
  ])

  expect(count).toBe(2)
})

test('5x3 test', () => {
  let count = islands.count([
    [1, 1, 1],
    [1, 0, 0],
    [1, 0, 1],
    [1, 0, 0],
    [1, 1, 1]
  ])

  expect(count).toBe(2)
})

test('5x3 test 2', () => {
  let count = islands.count([
    [1, 0, 1],
    [1, 0, 0],
    [1, 0, 1],
    [1, 0, 0],
    [1, 0, 1]
  ])

  expect(count).toBe(4)
})

test('5x4 test', () => {
  let count = islands.count([
    [1, 0, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 1, 0]
  ])

  expect(count).toBe(6)
})

test('5x5 test', () => {
  let count = islands.count([
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0],
    [1, 1, 1, 0, 1]
  ])

  expect(count).toBe(8)
})

test('5x5 chessboard', () => {
  let count = islands.count([
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1]
  ])
})

test('5x5 circle test', () => {
  let count = islands.count([
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]
  ])

  expect(count).toBe(2)
})

test('5x5 corners test', () => {
  let count = islands.count([
    [1, 1, 0, 1, 1],
    [1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1]
  ])

  expect(count).toBe(5)
})

test('5x5 diagonals test', () => {
  let count = islands.count([
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1]
  ])

  expect(count).toBe(9)
})

test('5x5 materic test', () => {
  let count = islands.count([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ])

  expect(count).toBe(1)
})
