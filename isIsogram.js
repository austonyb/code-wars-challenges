// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str){
    const strArr = []
    const strSet = new Set()
    for (i = 0; i < str.length; i++){
        strSet.add(str[i].toLowerCase())
    }
    for (i = 0; i < str.length; i++){
        strArr.push(str[i])
    }
    const testArr = Array.from(strSet)
    if (testArr.length === strArr.length) {
        return true
    } else {
        return false
    }
  }

  console.log(isIsogram('Dermatoglyphics'))
  console.log(isIsogram('aba'))
  console.log(isIsogram('moOse'))