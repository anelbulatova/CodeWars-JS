function findUniq(arr) {
  var map = {};
  for (var i = 0; i < arr.length; i++) {
    arr[i] in map ? (map[arr[i]] += 1) : (map[arr[i]] = 1);
  }

  for (var key in map) {
    if (map[key] == 1) {
      return parseFloat(key);
    }
    // 6 kyu 15 points for it
  }
}
