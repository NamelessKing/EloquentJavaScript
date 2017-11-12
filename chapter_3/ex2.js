//Ex3.2
/**
Recursion

We’ve seen that % (the remainder operator) can be used to test whether a number
is even or odd by using % 2 to check whether it’s divisible by two. Here’s another
way to define whether a positive whole number is even or odd:

 Zero is even.
 One is odd.

 For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description.
The function should accept a number parameter and return a Boolean.
 */

function isEven(num) {
  if (num < 0) {
    num = num * -1;
  }

  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  }

  return = isEven(num - 2);

}

function isEven2(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven2(-n);
  else
    return isEven2(n - 2);
}

console.log(isEven2(-2));
