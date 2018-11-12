var inputText = prompt('Mời bạn nhập từ cần kiểm tra');

function isPalindrome(string) {
  var first = 0;
  var last = string.length - 1;
  var isPalindromed = true;
  if (string=='') 
    isPalindromed = false;
  else {
    while (first < last) {
      if (string[first]!=string[last])
        isPalindromed = false;
      first++;
      last--;
    }
  }
  return isPalindromed;
}

if (isPalindrome(inputText))
  alert('Từ nhập vào là một từ đối xứng');
else
  alert('Từ nhập vào không phải là một từ đối xứng');