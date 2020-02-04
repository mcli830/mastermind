console.log('in prototype.js')

// split array into array of n chunks
Array.prototype.chunk = function(n = 2) {
  var chunkSize = Math.round(this.length / n)
  var set = [], i = 0, p = 0;
  while(i < n-1) {
    set.push(this.slice(p, p + chunkSize))
    i++
    p = chunkSize * i
  }
  set.push(this.slice(p))
  return set;
}

// get a random sample
// n = number of samples
// contiguous = if n > 1 and true,
//   get a contiguous subarray sample of length n
Array.prototype.sample = function(n = 1, contiguous = false) {
  // return copy of array if too small to sample
  if (this.length <= 1) return this.slice();
  var length = this.length
  var ri = num => Math.floor(Math.random() * num)

  if (n <= 1) {
    return this[ri(length)]
  } else {
    if (contiguous) {
      var i = ri(length - n + 1)
      return this.slice(i, i+n)
    } else {
      var copy = this.slice()
      var set = []
      for(var i = 0; i < n; i++) {
        set.push(copy.splice(ri(copy.length), 1)[0])
      }
      return set
    }
  }
}
