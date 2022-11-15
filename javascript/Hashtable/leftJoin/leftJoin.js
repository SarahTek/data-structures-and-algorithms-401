function join(left, right) {
  for (let [key, value] of left) {
    console.log(value)
    let rightValue = null
    right.has(key) ? rightValue = right.get(key) : null
    left.set(key, [value, rightValue])
  }
  return left
}
