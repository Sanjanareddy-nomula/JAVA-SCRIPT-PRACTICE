function palindrome(s){
    if(s==s.split("").reverse().join("")){
        return true
    }
}
console.log(palindrome("mom"))