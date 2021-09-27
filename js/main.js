const elForm = document.querySelector('.textareas-form');
const elmainTextarea = elForm.querySelector('.main-textarea');
const elResultTextarea = elForm.querySelector('.result-textarea');
const elClearBtn = elForm.querySelector('.clear-btn');
const elCopyBtn = elForm.querySelector('.copy-btn');
const elRotate = elForm.querySelector(".select");
let rotate = Number(elRotate.value);
if (elForm) {
  elForm.addEventListener('keyup', () => {
    rotate = Number(elRotate.value);
    doShifr(elmainTextarea.value);
    elResultTextarea.innerHTML = doShifr(elmainTextarea.value);
  })
}

elClearBtn.addEventListener('click', () => {
  elmainTextarea.innerHTML = '';
  elResultTextarea.innerHTML = '';
})

elCopyBtn.addEventListener('click', () =>{
  elResultTextarea.select();
  document.execCommand("copy")
});


function doShifr(words) {
  let newWords = "";

  words = words.trim().split(" ");
  for (let word of words) {
    let newWord = "";
    let newLetter = "";

    for(let i = 0; i < word.length; i++){
      newLetter = "";
      let ascii = word.charCodeAt(i);
      if ( ascii >= 65 && 90 >= ascii ) {
        newLetter = doBigShifr(word[i], rotate);
      }
      if ( ascii >= 97 && 122 >= ascii ) {
        newLetter = doSmallShifr(word[i], rotate);
      }
      newWord += newLetter;
    }
    if(words.length > 1){
      newWords = newWords + newWord + " ";
    }else{
      newWords = newWords + newWord;
    }
  }
  return newWords;
}

function doBigShifr(letter) {
  if(letter.charCodeAt(letter) >=  65  &&  90 >= letter.charCodeAt(letter) ){
    letter = String.fromCharCode(letter.charCodeAt(letter) + rotate);

    if(letter.charCodeAt(letter) > 90 ){
      let difference = letter.charCodeAt(letter) - 91;
      letter = 65 + difference;
      letter = String.fromCharCode(letter);
    }
  }

  return letter;
}

function doSmallShifr(letter) {
  if(letter.charCodeAt(letter) >=  97  &&  122 >= letter.charCodeAt(letter) ){
    letter = String.fromCharCode(letter.charCodeAt(letter) + rotate);

    if(letter.charCodeAt(letter) > 122 ){
      let difference = letter.charCodeAt(letter) - 123;
      letter = 97 + difference;
      letter = String.fromCharCode(letter);
    }
  }
  return letter;
}

elRotate.addEventListener('change', () =>{
  rotate = Number(elRotate.value);
  doShifr(elmainTextarea.value);
  elResultTextarea.innerHTML = doShifr(elmainTextarea.value);
})

















// function rott (str,rot){
//     let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//     let result = ''
//     for(let i = 0; i < str.length; i++){
//       let ind = arr.findIndex((val) => val == str[i])
//       let resIndex = ind + rot
//       result += resIndex < 26 ? arr[resIndex] : arr[resIndex - arr.length]
//     }
//     return result

// }

// console.log(rott('Bekbek', 23));

// function rottDecryt (str,rot){
//   let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].reverse(
//   )
//   let result = ''
//   for(let i = 0; i < str.length; i++){
//     let ind = arr.findIndex((val) => val == str[i])
//     let resIndex = ind + rot
//     result += resIndex < 26 ? arr[resIndex] : arr[resIndex - arr.length]
//   }
//   return result
// }

// console.log(rottDecryt('ebiil',23));