// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'

function repeatStr(n, s) {
  var result = "";
  for (let i = 0; i < n; i++) {
    result = result + s;
  }
  return result;
}
