function tribonacci(signature, n) {
  const result = [];
  result.length = n;
  result.fill(0);

  if (n > signature.length) {
    var a = signature[0];
    var b = signature[1];
    var c = signature[2];

    result[0] = a;
    result[1] = b;
    result[2] = c;

    for (i = signature.length; i < n; i++) {
      result[i] = result[i - 3] + result[i - 2] + result[i - 1];
      //sum = a + b + c;
      //result[i] = sum;
      //a=b;
      //b=c;
    }
  } else {
    for (i = 0; i < n; i++) {
      result[i] = signature[i];
    }
  }
  return result;
}
