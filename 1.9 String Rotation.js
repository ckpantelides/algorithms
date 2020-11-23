// Assume you have a method isSubstring which checks is one word is a substring of another.
// Given two strings, write code to check if s2 is a rotation of s1 using only one call to isSubstring

function isRotation(string1, string2) {
  // If we split a string at it's rotation there are two parts - x and y. We can consider the
  // original string as yx. If we double the original string yxyx, it will contain any rotated
  // string
  if (string1.length === string2.length && string1.length > 0) {
    let string1string1 = string1 + string1;
    return isSubstring(string1string1, string2);
  }

  return false;
}
