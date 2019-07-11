/**
 * @author Denysaw
 */
'use strict'

// sample matrix for a quick run
let matrix = [
  [1, 0, 1],
  [1, 0, 0],
  [1, 1, 1]
]

let island  = []
let islands = []
let walked  = []
let indexes = []

const getAllNeighbors = (i, j, callback) => {
  let coords = JSON.stringify([i, j])

  if (matrix[i][j] && !walked.includes(coords)) {
    let neighbors = []

    pushIfNew(i, j)
    pushIfNew(i - 1, j, neighbors)
    pushIfNew(i + 1, j, neighbors)
    pushIfNew(i, j - 1, neighbors)
    pushIfNew(i, j + 1, neighbors)

    walked.push(coords)

    for (let neighbor of neighbors) {
      getAllNeighbors(...neighbor)
    }
  }

  if (callback) callback(island)
}

const pushIfNew = (i, j, neighbors) => {
  if (i >= 0 && j >= 0 && i < matrix.length && j < matrix[i].length) {
    let coords = JSON.stringify([i, j])

    if (matrix[i][j] && !island.includes(coords) && !indexes.includes(coords)) {
      indexes.push(coords)
      island.push(coords)

      if (neighbors) {
        neighbors.push([i, j])
      }
    }
  }
}

module.exports.count = mtx => {
  matrix  = mtx
  islands = []
  indexes = []

  matrix.forEach((row, i) => {
    row.forEach((bit, j) => {
      island = []
      walked = []

      getAllNeighbors(i, j, (island) => {
        if (island.length) {
          islands.push(island)
        }
      })
    })
  })

  return islands.length
}

console.log(exports.count(matrix))
