'use strict';
isValid = size => {
  let stack = [];
  for (let i = 0; i < size.length; i++) {
    let char = stack[stack.length - 1]
  }
}

if (size[i] == "(" || size[i] == "{" || size[i] == "[") {
  stack.push(size[i]);
} else if ((char == "{" && size[i] == "}") || (char == "[" && size[i] == "]")) {
  stack.pop();
} else return false;

return stack.length ? false : true;
