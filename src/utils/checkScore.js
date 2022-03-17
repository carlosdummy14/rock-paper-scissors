// paper(0) rock(1) scissors(2)
const checkScore = (left, right, score) => {
  if (left !== right) {
    // paper vs rock
    if (left === 0 && right === 1)
      return {
        ...score,
        left: score.left + 1
      }

    // paper vs scissors
    if (left === 0 && right === 2)
      return {
        ...score,
        right: score.right + 1
      }

    // rock vs paper
    if (left === 1 && right === 0)
      return {
        ...score,
        right: score.right + 1
      }

    // rock vs scissors
    if (left === 1 && right === 2)
      return {
        ...score,
        left: score.left + 1
      }

    // scissors vs paper
    if (left === 2 && right === 0)
      return {
        ...score,
        left: score.left + 1
      }

    // scissors vs rock
    if (left === 2 && right === 1)
      return {
        ...score,
        right: score.right + 1
      }
  }
  return score
}

export default checkScore
