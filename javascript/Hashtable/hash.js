class HashTable {
  constructor(size = 50) {
    this.buckets = new Array(size)
    this.size = size
  }

  hash(key) {
    return key.toString().length % this.size;
  }

  // Insert data
  setItem(key, value) {
    let index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    this.buckets[index].push([key, value])
    return index
  }

  // Search data
  getItem(key) {
    let index = this.hash(key);

    if (!this.buckets[index]) return null

    for (let bucket of this.buckets[index]) {
      // key
      if (bucket[0] === key) {
        // value
        return bucket[1]
      }
    }
  }
}
