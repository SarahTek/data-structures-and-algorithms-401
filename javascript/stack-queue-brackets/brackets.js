'use strict';
isValid = (s) => {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = stack[stack.length - 1]
  }
}

if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
  stack.push([i]);

} else if ((char == "{" && s[i] == "}") || (char == "[" && s[i] == "]")) {
  stack.pop();
}
// else {
//   return false;
// }
// return stack.length ? false : true;
