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
    revertInputShifr(elmainTextarea.value);
    elResultTextarea.innerHTML = revertInputShifr(elmainTextarea.value);
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

elRotate.addEventListener('change', () =>{
  rotate = Number(elRotate.value);
  revertInputShifr(elmainTextarea.value);
  elResultTextarea.innerHTML = revertInputShifr(elmainTextarea.value);
})

function revertInputShifr(words) {
  let resultWords = "";
  words = words.trim().split(" ");

  for (let word of words) {
    let newWord = "";
    let newLet = "";

    for (let i = 0; i < word.length; i++){
      newLet = "";
      let ascii = word.charCodeAt(i);
      if ( ascii >= 65 && 90 >= ascii ) {
        newLet = revertBigShifr(word[i]);
      }
      if ( ascii >= 97 && 122 >= ascii ) {
        newLet = revertSmallShifr(word[i]);
      }
      newWord += newLet;
    }

    if(words.length > 1){
      resultWords = resultWords + newWord + " ";
    }else{
      resultWords = resultWords + newWord;
    }
  }
  return resultWords;
}

function revertBigShifr(letter) {
    if(letter.charCodeAt(letter) >=  65  &&  90 >= letter.charCodeAt(letter) ){
    letter = String.fromCharCode(letter.charCodeAt(letter) - rotate);
    if(letter.charCodeAt(letter) < 65 ){
      let difference = 65 -  letter.charCodeAt(letter);
      letter = 90 - difference;
      letter = String.fromCharCode(letter);
    }
  }
  return letter;
}

function revertSmallShifr(letter) {
    if(letter.charCodeAt(letter) >=  97  &&  122 >= letter.charCodeAt(letter) ){
    letter = String.fromCharCode(letter.charCodeAt(letter) - rotate);

    if(letter.charCodeAt(letter) < 97 ){
      let difference = 97 -  letter.charCodeAt(letter);
      letter = 122 - difference;
      letter = String.fromCharCode(letter);
    }
  }
  return letter;
}