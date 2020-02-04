// split array into array of n chunks
Array.chunk = function(arr, n = 2) {
  if (!arr) return null;
  var chunkSize = Math.round(arr.length / n)
  var set = [], i = 0, p = 0;
  while(i < n-1) {
    set.push(arr.slice(p, p + chunkSize))
    i++
    p = chunkSize * i
  }
  set.push(arr.slice(p))
  return set;
}

// get a random sample
// n = number of samples
// contiguous = if n > 1 and true,
//   get a contiguous subarray sample of length n
Array.sample = function(arr, n = 1, contiguous = false) {
  if (!arr) return null;
  // return copy of array if too small to sample
  if (this.length <= 1) return arr.slice();
  var length = arr.length
  var ri = num => Math.floor(Math.random() * num)

  if (n <= 1) {
    return arr[ri(length)]
  } else {
    if (contiguous) {
      let i = ri(length - n + 1)
      return arr.slice(i, i+n)
    } else {
      let copy = arr.slice()
      let set = []
      for(let i = 0; i < n; i++) {
        set.push(copy.splice(ri(copy.length), 1)[0])
      }
      return set
    }
  }
}
